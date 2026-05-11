// ==UserScript==
// @name         m3u8内容过滤器
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.5.11
// @author       WhiteSevs
// @description  自定义规则对网页中的m3u8的请求内容进行过滤
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAEBtJREFUeF7tnX+UJFV1x7/39S66gEg8wXW6eoyLqDlLDpLwQ1YN+COcsEYQN6l6PSC6YIIhBA2/RNDA7hHJiouYjRKCoKtJ3HrVonvgsCSGxJUYw2FZE8kBTMieANPds7PECNGADjN1M6+nq6mp7Z6q7q7prpl69ddMv1fv3Xfvp97v9y7BPLnWAOW69KbwMADkHAIDgAEg5xrIefFNDWAAyLkGcl58UwMYALKpgQnbPmq6UDg2m9J1lmrFzMwjI5XK00tF7szUAAds+/AXCgUJ5nUEnMLAkjN+y+jMmyzP27wUIMgEAHXHOZWJPg3glKWgtCQyCqJrR1z3k0niDjPO0AEYd5xNgui6YSphsfJm5j8ued71i5V+GukOFYCalJxGIbKcBhN9vOS6N2RVxqEBUHOcb4Ho9KwqJk25CLi6qNSWNNNMK62hAFCT8koAN6ZViCWRDvNVludlrswDB6Bq28cLIb7DwBFLwnApCimIrhxx3a0pJtl3UgMHYKJc3ugzf7lvyZdoAsx8RcnzbsqK+AMHoFou30DMVydRAAG7k8QbVhwG3tZL3kx0Wcl1b+7l3bTfGTgANSl3AnjPQgXxmTevEGL7iOs+kXaB00qv3+ErAX9UVOpP05Kn13QGDkBdyn0MHL2QwOT7JxYrlb29FmoQ7/ULQFPGD1tK/dkg5O2Ux8ABiBv762q/qNTbh6mUJHmnBIDO6hJLqc8nyXMx4hgAetRqigBoCS62lLqlR1H6es0A0KP6kgCg+zIFIpuBtXHZENFFRde9NS5e2uEGgB41mhSAFYVCxff9OwG8IS4rAj5UVOq2uHhphhsAetRmUgBGPW/T5NjYcdNzEBwTl92gawIDQJxFOoR3A4BOolYu/yox38nAmtgsmf/Q8rwvxMZLIYIBoEcldguAzuZJ2167Qoh7Abw6QbYDGSIuGQBqtn06C3EsMx+ZQHmpRRFCfN9y3buiCfYCgE6jeu65JZqefgCAFSckAZcWlfpcXLx+wpcEAEmU3Y8S4t5tNzeRRCY9CtB9gGj6+2z75auE+CEDr4rLe7HXDjIPQN1xfpOJ/qapqL0E/ET/zUARwOv132mtGQRz+5H0TmDgZVFj9gNAU36qSzkJ4Kg4CATw0RGlPhMXr5fwzAMQ7B0g4JGiUr8SFHJCypN84EH9v6VU3+WoS/ltDUB0KFaTUq9cbmRgV0mp3wry7xeAIJ2alD8C8Io44y3WppK+FRcneDS826ngQNHtquEgrTQB8InePuq6rVXITvmnBYDWT13KZxh4eZwuGfhESalPxcXrJtwA0NRWUAMMAwAtQk1K3bQdHme8tHcbLxkAAPyHAN43otQeraTxcvltgvnbaTcBzHxryfMuCgxRlfIvCLgwWgOlWQOEmoPnAKyKg4CYbyh63sfj4iUJX0oAdCxPmk1Ap0yiAExIeb4PfGkhJfeyslmT8ucADokzHgF3FJX63bh4ceHLDoBqubxRMH+AgfstpRKfNwiagMQA2PZaX4hH4hQcbVLi4jebg2kAhbi4BFSKSjlx8WIg7ef17t/ttRO4UE7hGqCNIW+0lLoqTtJuAWh23vYzsDoubW0oJnqUfF+ASPhEIvgbzAd9hES0moHz4tLV4f1CsOxqgI6GZN5med5HOim1FwCSbG9LYsR+4/QDwVIC4OkCcMELRD9tkv8aau4ujqkBovptWyOEALjbJ/ps8BIxX0nAu3qdDezXuEnf7xWCJQNA0nmAuC85UGh0Zq/bYWCQTk3K7wJ4S1JDLWa8Kd8fWVOp7O8mj9wCoJXUruZIOg8QKHncto8RQjzejdIXK24vHc5cAkDALj3etzzv7sAYralgog1F1/1my8DN08sLDelqUp4/u8S74JBwsYweTne5A/ATBu70mZ/UhS4QrWXA7vQld1D4fT7zraOep3fnzHtCawH7Zpj/KggsEJ3WXCNYcLdyfWzsDPZ9vdY/tGdZA7CQVhN0Av+RmD9b9Dx9KKXtE9d3SDKpMzk2tnra9/X6fXkYFBgA5hZWGqt6TQN8zweuH1Uq9stMA4Bws1EgOml2BfFkAL84KBgMAAD2S/nuF5hPJOb7S5XKPyRVfpoAhPOsSvlGZtYgxO4AWkjWoClaKE4eAGi7ISTttYB2G0KSNAFJYeslXhygOs1lDcCwN4QYAHrBts07va4FJJ0I6lXMXieCes2v2/dMDdDm0OgwdwR1a8B+4+cWgJrjXACiO4a9IQTAdkspPeEzlCe3ANRt+wQW4qGhaD2U6TDO7YXLnFsAtBImbHstC+EN6/pYBpySUpVhQphrALTi95933mE8NbV2muiwQRoiK5c/5x6AQRo9i3kZALJolQHKZAAYoLKzmJUBIItWGaBMBoABKjuLWRkAsmiVAcpkABigsrOYlQEgi1YZoEwGgAEqO4tZGQCyaJUBymQAGKCys5iVASCLVhmgTAaAASo7i1kZALJolQHKZAAYoLKzmJUBIItWGaBMywYAfblTnN7C17TFxc1L+LIBIC8GS7ucBoC0NbrE0sscAOO2/QohxDbq88zbErNDR3EZ+MZiegDLFAD6AOYM0LpcYbkYMY1ypHFOsZ0cmQKgJmUNc7d1myeigcXaQp4ZAMJXtBrrH6yBxTpEmnkAOt3Z38m/bpfxf8jMD7EQuwXzSwCcwcCp1OGG7Wja7WRIEkebV59KZuABn/neAvB6JjoNwDp08H6eWwDaecc4YNvHTAnxIAG/EP1WBJE94rpf502bBG3a5Ovwdhcwd3KbcuCcc143PTNzWzvjJrgypuFkIuyhtN2p5U55P7lhw9GFlStvJOC3o+UyAEQ0UpdyFwPrIz+P+76/brRSqenLlYo7djQ8ghwEAFHZcl0Vfrd+5pmHFu++W9+qDb7kkpdMTE7eyUQtRw7691QAiOT9lJSvfbVS+8KydAB2UVzfZr4JCNcANSm3WUp9uNNXDcC1lBrT4TXHuc7yvM3t4k6tWrVqzfbtP2vEK5fPAvPt2sUKAe8rKvXX+vd6uXwOMzf+Dp4UAHjCUqrl3q3mON8A0Xu1u5oVvv9rr6xU/rOR93x3No3sTQ0w5/xgG/v+l0qVyr+OS7leALvCBvKZPzLqedtiABi3lGq5V4t8AfOOaker7xQA+Lyl1CUNKMvlNwlm7eUrMPC9RaXepf/50bnnHvGz6elnw2UzAAQAMD9a8rxbmxNGjyJ0qzYRnVR03YfGbftkQbS+Uw0QbV+D//WkS0mpRvtbLZffScz3pVkDMPM9Jc97dxOAlmOKZh57LaVObAeHqQGaLtLqUn4OREcWXXdj4yuX0gUgmwp8wFJK96L179fq69K7BSDc3FQd51NEdE2aAACY8n1/ZLRS+Z8GZE2vIfrvcN6mDxDS+jyjSHkzAeunC4V1v/S1r/141jOWrk4bVT4BW4pKXd0E4Ltg/rtEADB/k4j2+0T/XHLdvwx9/drtesN9XPCk0ASAiL4IomuKO3b8t073v84++8g1O3c+E+RRlVLfUrqFgKNNExD5MupS3sTAZSTEet3Dn9eOMp+l7+jV5/1npqZ+CuZNSQCITrFOOM7lPtHWds1EGgC00g3JFzQJBebrFprfCA8vOzVj3f6+pEYBVSm3zvaYL5/9jDZbrtvwnFmT8ikQHUpEv6y/qqqUFxFwS68AjNu2JYhcEL01qsyUAJgk5iuKnte6NzicT01K7a/npuiEkOkEzhn7RgBXzs6Y/a2l1BlacXUpv+oDh7U6b1Leox0xJAVAJ6Fvi2Hm23XnUqfJF164svbsszsb6XRuAu7hSHizKdpVDDmCDI8kCNhXVKrl6l37ISJm7X9otyDaPOK6T+g0JqR8vw98xTQBkSagJuWnAXx0diZND5HWFZV6bLxc/qBgPjRYMq1LOcXAyi4AeLFWJjq/5Lrbm/0AbRzt3bP1HPL880ccddddDRezVSm/QsD7o7UEA18tKfUB/fvTZ531sqlVq/43iBN2HTdh20f5Qjw1296/tAEO0c1F172skfaGDSVauXLcAHAwAH8C4GNNxVxgKfVlPS3sA6teVan828TY2Gm+78955+zQB2izVtDw4dt4JTQMbPUlQlZg339ncE/wuON8RhBdEQXAZ9466nm6lkLVtt9BQvx9EIdCPgNqUv7B7OTTF1phwGRRqZbT55qU/wLg+FC4mQmslss3EHOjpz/r5Pm2klIfmtd+Os4dILpgIQCi9/JFOkG3WEpdHKRZk/Lf540EmD9meZ6uhdrOEzTkIvqNkus2jF5znKtAtKVVAwCXlppu26MTQWH4Gu9K+WMALZf2pg8w195fz0DDsyUDD4vnnlsXzN83lfZ06xr1DjUAA3tKSulbthtPXcqtrDuWc8+YpZSeW2jcDh7dnELMXy96XsOZRDM/3UToeQjtlfN5ACp86WPdcbRbt98JQbrTUuq9off1TOCb9P+RaehfZ+b7w3AbAOa+uk8S8ycCxQjmd4x4XsPNa7NNPdBSWudh4P8J3z95pFLRs4iNR4+9C0R7gk6YXgyqHzig7+87M2wE/Xd0dZJt+5BqofDm0szM96hSmQrid3AB+8wKIU5bvWPHw628y+WNBWB3kLf+3UwEhbQeWQzSizvXBsHEfE3R83S/AFXHuZzC4/cF5gH0Wjz5vhOGIEhzoeXgIE67JeowKDH+fyeZ6IMl170nClezHH8+OzH1+9GwXNcAYWUIohfdtjLf5QO6swRBdDaAN4aN1PG9Fzdk7GGixwvAD9j3j4vblBGpkvcx88NMtJeJ/omY30LMJxDRcQy8tp1xI+/v0c0REd3XiM/8VgZOog5b4nILQJwi8xK+7AHQhjSbQjvjvOw3heqim23hnQHIxbbwRg/YHAyZR0GuDobkpT3PUjkzsxqYJaXkSZZlA4Aee8cZbrS5syguXp7Clw0A3XoNy5ORFyqrASDnJBgADABhn8httbEsPYfm3O6t4psaIOckGAAMAMujCahLuW92P968vfQHLan6/onFSmVvzm3+YvWf0Hmm8P1XjlQqerNN4ocSx0wpYk3KnQDes1Byeh1/hRDbw5svUsp+ySUzUS6/Ztr3N85bXm9fiscspdZ2W8CBAxDeLxgnbKdLJOLeW07hnQ6gtCnj7ZZSv9dt2QcOwES5vNGPbOPuVmgTv60GLraU0sfkunoGDkDVto8XQnyHO1yx0pX0JnKggZ8DeLOl1Pe7VcnAAdAC1qTU+/H16SHzpKOBLVbzwG23yQ0FgAYEjvMtEJ3ercAm/nwNMLCvFDrG1q1+hgZAsybgbgU28edrQBCt6We0NFQAdFFitmYbe3fWwE7f988ZrVT0QZeen6EDoCWvO86pTKSPcp3Sc0ny8+IzgujSkebh2H6LnQkAdCEO2PbhLxQKEszrCDiFgWP7Ldwyev/x2SPwD87o8wnA7pJSP0irbJkBIFogfYRsulDIPQSHED22eseOybQMHk0nswAsVoFNuvM1YADIOREGAANAzjWQ8+KbGsAAkHMN5Lz4pgYwAORcAzkv/v8D2jhpJgNRtJUAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.12.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.2/dist/index.umd.js
// @grant        GM_addValueChangeListener
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_removeValueChangeListener
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (qmsg, _whitesev_domutils, _whitesev_pops, _whitesev_utils) {
  "use strict";
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === "object") || typeof from === "function")
      for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: ((k) => from[k]).bind(null, key),
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          });
      }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (
    (target = mod != null ? __create(__getProtoOf(mod)) : {}),
    __copyProps(
      isNodeMode || !mod || !mod.__esModule
        ? __defProp(target, "default", {
            value: mod,
            enumerable: true,
          })
        : target,
      mod
    )
  );
  qmsg = __toESM(qmsg);
  _whitesev_domutils = __toESM(_whitesev_domutils);
  _whitesev_pops = __toESM(_whitesev_pops);
  _whitesev_utils = __toESM(_whitesev_utils);
  var _GM_addValueChangeListener = typeof GM_addValueChangeListener != "undefined" ? GM_addValueChangeListener : void 0;
  var _GM_deleteValue = typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0;
  var _GM_getResourceText = typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0;
  var _GM_getValue = typeof GM_getValue != "undefined" ? GM_getValue : void 0;
  var _GM_info = typeof GM_info != "undefined" ? GM_info : void 0;
  var _GM_listValues = typeof GM_listValues != "undefined" ? GM_listValues : void 0;
  var _GM_registerMenuCommand = typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0;
  var _GM_removeValueChangeListener =
    typeof GM_removeValueChangeListener != "undefined" ? GM_removeValueChangeListener : void 0;
  var _GM_setValue = typeof GM_setValue != "undefined" ? GM_setValue : void 0;
  var _GM_setValues = typeof GM_setValues != "undefined" ? GM_setValues : void 0;
  var _GM_unregisterMenuCommand = typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0;
  var _GM_xmlhttpRequest = typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0;
  var _unsafeWindow = typeof unsafeWindow != "undefined" ? unsafeWindow : void 0;
  var _monkeyWindow = window;
  var CommonUtil = {
    waitRemove(...args) {
      args.forEach((selector) => {
        if (typeof selector !== "string") return;
        _whitesev_domutils.default.waitNodeList(selector).then((nodeList) => {
          nodeList.forEach(($el) => $el.remove());
        });
      });
    },
    createBlockCSSNode(...args) {
      let selectorList = [];
      if (args.length === 0) return;
      if (args.length === 1 && typeof args[0] === "string" && args[0].trim() === "") return;
      args.forEach((selector) => {
        if (Array.isArray(selector)) selectorList = selectorList.concat(selector);
        else selectorList.push(selector);
      });
      return _whitesev_domutils.default.createElement("style", {
        type: "text/css",
        innerHTML: `${selectorList.join(",\n")}{display: none !important;}`,
      });
    },
    addBlockCSS(...args) {
      let selectorList = [];
      if (args.length === 0) return;
      if (args.length === 1 && typeof args[0] === "string" && args[0].trim() === "") return;
      args.forEach((selector) => {
        if (Array.isArray(selector)) selectorList = selectorList.concat(selector);
        else selectorList.push(selector);
      });
      selectorList = selectorList.map((it) => it.trim()).filter((it) => it !== "");
      if (selectorList.length) return addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
    },
    setGMResourceCSS(resourceMapData) {
      const cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : null;
      if (typeof cssText === "string" && cssText) return addStyle(cssText);
      else return CommonUtil.loadStyleLink(resourceMapData.url);
    },
    async loadStyleLink(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
      return new Promise((resolve) => {
        _whitesev_domutils.default.onReady(() => {
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
      if (url.startsWith("data:")) return url;
      if (url.match(/^http(s|):\/\//i)) return url;
      else if (url.startsWith("//")) {
        if (url.startsWith("///")) {
        } else url = window.location.protocol + url;
        return url;
      } else {
        if (!url.startsWith("/")) url += "/";
        url = window.location.origin + url;
        return url;
      }
    },
    fixHttps(url) {
      if (url.startsWith("https://")) return url;
      if (!url.startsWith("http://")) return url;
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
          .query({ name: "clipboard-read" })
          .then(() => {
            readClipboardText(resolve);
          })
          .catch((error) => {
            log.error("申请剪贴板权限失败，尝试直接读取👉", error.message ?? error.name ?? error.stack);
            readClipboardText(resolve);
          });
      }
      function checkClipboardApi() {
        if (typeof navigator?.clipboard?.readText !== "function") return false;
        if (typeof navigator?.permissions?.query !== "function") return false;
        return true;
      }
      return new Promise((resolve) => {
        if (!checkClipboardApi()) {
          resolve("");
          return;
        }
        if (document.hasFocus()) requestPermissionsWithClipboard(resolve);
        else
          window.addEventListener(
            "focus",
            () => {
              requestPermissionsWithClipboard(resolve);
            },
            { once: true }
          );
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
        const result = await fn(isTimeout);
        if ((typeof result === "boolean" && result) || isTimeout) {
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
        let $parent = _whitesev_domutils.default.closest($el, parentSelector);
        if ($parent) return $parent.querySelector(selector);
      } else {
        if (_whitesev_domutils.default.matches($el, selector)) return $el;
        return _whitesev_domutils.default.closest($el, selector);
      }
    },
    toStr(data, space = 2) {
      const undefinedReplacedStr = `__undefined__placeholder__replaced__str__` + performance.now();
      return JSON.stringify(
        data,
        (key, value) => {
          return value === void 0 ? undefinedReplacedStr : value;
        },
        space
      ).replace(new RegExp(`"${undefinedReplacedStr}"`, "g"), "undefined");
    },
    isVerticalScreen() {
      return !globalThis.screen.orientation.type.includes("landscape");
    },
    isMobileDevice(size = 768) {
      if (this.isVerticalScreen()) return globalThis.innerWidth < size;
      else return globalThis.innerHeight < size;
    },
    isTopWindow() {
      const win = typeof _unsafeWindow === "object" && _unsafeWindow != null ? _unsafeWindow : window;
      return win.top === win.self;
    },
    formatVideoDuration(duration) {
      if (typeof duration !== "number") duration = parseInt(duration);
      if (isNaN(duration)) return duration.toString();
      const zeroPadding = function (num) {
        if (num < 10) return `0${num}`;
        else return num;
      };
      if (duration < 60) return `0:${zeroPadding(duration)}`;
      else if (duration >= 60 && duration < 3600) return `${Math.floor(duration / 60)}:${zeroPadding(duration % 60)}`;
      else {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor(duration / 60) % 60;
        const seconds = duration % 60;
        return `${hours}:${zeroPadding(minutes)}:${zeroPadding(seconds)}`;
      }
    },
    formatTimeStamp(time, endTime) {
      if (typeof time === "number") {
        if (time < 0xe8d4a51000) {
          const padZeroLength = String(Date.now()).length - String(time).length;
          time = time * Math.pow(10, padZeroLength);
        }
      }
      let result = time;
      let oldTime = new Date(typeof time === "string" ? time.replace(/-/g, "/") : time);
      let timeDifference = new Date(endTime ?? Date.now()).getTime() - oldTime.getTime();
      let days = Math.floor(timeDifference / (24 * 3600 * 1e3));
      if (days > 0)
        if (days > 7) result = utils.formatTime(oldTime.getTime());
        else result = days + "天前";
      else {
        let leave1 = timeDifference % (24 * 3600 * 1e3);
        let hours = Math.floor(leave1 / (3600 * 1e3));
        if (hours > 0) result = hours + "小时前";
        else {
          let leave2 = leave1 % (3600 * 1e3);
          let minutes = Math.floor(leave2 / (60 * 1e3));
          if (minutes > 0) result = minutes + "分钟前";
          else {
            let leave3 = leave2 % (60 * 1e3);
            result = Math.round(leave3 / 1e3) + "秒前";
          }
        }
      }
      return result;
    },
  };
  var KEY = "GM_Panel";
  var ATTRIBUTE_INIT = "data-init";
  var ATTRIBUTE_KEY = "data-key";
  var ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  var ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  var ATTRIBUTE_PLUGIN_SEARCH_CONFIG = "data-plugin-search-config";
  var PROPS_STORAGE_API = "data-storage-api";
  var PanelMenu = {
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
      if (!CommonUtil.isTopWindow()) return;
      MenuRegister.add(this.$data.menuOption);
    },
    addMenuOption(option) {
      if (!Array.isArray(option)) option = [option];
      this.$data.menuOption.push(...option);
    },
    updateMenuOption(option) {
      if (!Array.isArray(option)) option = [option];
      option.forEach((optionItem) => {
        let findIndex = this.$data.menuOption.findIndex((it) => {
          return it.key === optionItem.key;
        });
        if (findIndex !== -1) this.$data.menuOption[findIndex] = optionItem;
      });
    },
    getMenuOption(index = 0) {
      return this.$data.menuOption[index];
    },
    deleteMenuOption(index = 0) {
      this.$data.menuOption.splice(index, 1);
    },
  };
  var PanelMenuResultsHandler = class {
    data = {
      storeNodeList: [],
      destoryFnList: [],
    };
    option = {};
    constructor(option) {
      this.option = option;
    }
    handlerResult(enableValue, args) {
      const dynamicMenuStoreNodeList = [];
      const dynamicDestoryFnList = [];
      let resultValueList = [];
      if (Array.isArray(args)) resultValueList = resultValueList.concat(args);
      else {
        const handleArgs = (obj) => {
          if (typeof obj === "object" && obj != null)
            if (obj instanceof Element) resultValueList.push(obj);
            else if (Array.isArray(obj)) handleArgs(obj);
            else {
              const { $css, destory } = obj;
              if ($css != null) {
                if (Array.isArray($css)) resultValueList = resultValueList.concat($css);
                else if ($css instanceof Element) resultValueList.push($css);
              }
              if (typeof destory === "function") resultValueList.push(destory);
            }
          else resultValueList.push(obj);
        };
        handleArgs(args);
      }
      const handleResult = (it) => {
        if (it == null) return;
        if (it instanceof Element) {
          dynamicMenuStoreNodeList.push(it);
          return;
        }
        if (typeof it === "function") {
          dynamicDestoryFnList.push(it);
          return;
        }
      };
      for (const it of resultValueList) {
        const flag = handleResult(it);
        if (typeof flag === "boolean" && !flag) break;
        if (Array.isArray(it))
          for (const it2 of it) {
            const flag2 = handleResult(it2);
            if (typeof flag2 === "boolean" && !flag2) break;
          }
      }
      this.clearStoreNodeList();
      this.execDestoryFnAndClear();
      if (enableValue) {
        this.data.storeNodeList = this.data.storeNodeList.concat(dynamicMenuStoreNodeList);
        this.data.destoryFnList = this.data.destoryFnList.concat(dynamicDestoryFnList);
      }
    }
    getEnableStatus(key) {
      const value = this.option.getValue(key);
      return Boolean(value);
    }
    clearStoreNodeList = () => {
      for (let index = this.data.storeNodeList.length - 1; index >= 0; index--) {
        this.data.storeNodeList[index]?.remove();
        this.data.storeNodeList.splice(index, 1);
      }
    };
    execDestoryFnAndClear = () => {
      for (let index = this.data.destoryFnList.length - 1; index >= 0; index--) {
        const destoryFnItem = this.data.destoryFnList[index];
        destoryFnItem();
        this.data.destoryFnList.splice(index, 1);
      }
    };
    checkMenuExec() {
      let flag = false;
      if (typeof this.option.checkExec === "function") flag = this.option.checkExec(this.option.keyList);
      else flag = this.option.keyList.every((key) => this.getEnableStatus(key));
      return flag;
    }
  };
  var StorageUtils = class {
    storageKey;
    listenerData;
    cacheData;
    callbacks = [];
    constructor(key) {
      if (typeof key === "string") {
        const trimKey = key.trim();
        if (trimKey == "") throw new Error("key can not be empty string");
        this.storageKey = trimKey;
      } else throw new TypeError("key must be a string");
      this.listenerData = new _whitesev_utils.default.Dictionary();
      this.getLocalValue = this.getLocalValue.bind(this);
      this.setLocalValue = this.setLocalValue.bind(this);
      this.destory = this.destory.bind(this);
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
      this.emitValueChangeListener = this.emitValueChangeListener.bind(this);
    }
    [Symbol.dispose]() {
      this.destory();
    }
    async [Symbol.asyncDispose]() {
      this.destory();
    }
    destory() {
      this.cacheData = null;
      for (let index = this.callbacks.length - 1; index >= 0; index--) {
        const cb = this.callbacks[index];
        cb();
        this.callbacks.splice(index, 1);
      }
    }
    getLocalValue() {
      if (this.cacheData == null) {
        let localValue = _GM_getValue(this.storageKey);
        if (localValue == null) {
          localValue = {};
          this.setLocalValue(localValue);
        }
        this.destory();
        this.cacheData = localValue;
        const listenerId = _GM_addValueChangeListener(this.storageKey, (name, oldValue, newValue) => {
          this.cacheData = null;
          this.cacheData = newValue;
        });
        this.callbacks.push(() => {
          _GM_removeValueChangeListener(listenerId);
        });
        return localValue;
      } else return this.cacheData;
    }
    setLocalValue(value) {
      this.cacheData = null;
      this.cacheData = value;
      _GM_setValue(this.storageKey, value);
    }
    set(key, value) {
      const oldValue = this.get(key);
      const localValue = this.getLocalValue();
      Reflect.set(localValue, key, value);
      this.setLocalValue(localValue);
      this.emitValueChangeListener(key, value, oldValue);
    }
    get(key, defaultValue) {
      const localValue = this.getLocalValue();
      return Reflect.get(localValue, key) ?? defaultValue;
    }
    getAll() {
      return this.getLocalValue();
    }
    delete(key) {
      const oldValue = this.get(key);
      const localValue = this.getLocalValue();
      Reflect.deleteProperty(localValue, key);
      this.setLocalValue(localValue);
      this.emitValueChangeListener(key, void 0, oldValue);
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
      this.destory();
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
    async emitValueChangeListener(...args) {
      const [key, newValue, oldValue] = args;
      if (!this.listenerData.has(key)) return;
      const listenerData = this.listenerData.get(key);
      for (let index = 0; index < listenerData.length; index++) {
        const data = listenerData[index];
        if (typeof data.callback === "function") {
          let __newValue;
          let __oldValue;
          if (args.length === 1) {
          } else if (args.length === 2) __newValue = newValue;
          else if (args.length === 3) {
            __newValue = newValue;
            __oldValue = oldValue;
          }
          await data.callback(key, __newValue, __oldValue);
        }
      }
    }
  };
  var PopsPanelStorageApi = new StorageUtils(KEY);
  var PanelSizeUtil = {
    followBrowserSize: false,
    get width() {
      return PanelSizeUtil.followBrowserSize ? globalThis.outerWidth : globalThis.innerWidth;
    },
    get height() {
      return PanelSizeUtil.followBrowserSize ? globalThis.outerHeight : globalThis.innerHeight;
    },
  };
  var PanelUISize = {
    setting: {
      get width() {
        if (PanelSizeUtil.width < 550) return "88vw";
        else if (PanelSizeUtil.width < 700) return "550px";
        else return "700px";
      },
      get height() {
        if (PanelSizeUtil.height < 450) return "70vh";
        else if (PanelSizeUtil.height < 550) return "450px";
        else return "550px";
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
  var Panel = {
    $data: {
      __contentConfigInitDefaultValue: null,
      __onceExecMenuData: null,
      __urlChangeReloadMenuExecOnce: null,
      __onceExecData: null,
      __panelConfig: {},
      $panel: null,
      panelContent: [],
      get contentConfigInitDefaultValue() {
        if (this.__contentConfigInitDefaultValue == null) this.__contentConfigInitDefaultValue = new utils.Dictionary();
        return this.__contentConfigInitDefaultValue;
      },
      contentConfigInitDisabledKeys: [],
      get onceExecMenuData() {
        if (this.__onceExecMenuData == null) this.__onceExecMenuData = new utils.Dictionary();
        return this.__onceExecMenuData;
      },
      get urlChangeReloadMenuExecOnce() {
        if (this.__urlChangeReloadMenuExecOnce == null) this.__urlChangeReloadMenuExecOnce = new utils.Dictionary();
        return this.__urlChangeReloadMenuExecOnce;
      },
      get onceExecData() {
        if (this.__onceExecData == null) this.__onceExecData = new utils.Dictionary();
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
    initContentDefaultValue() {
      const initDefaultValue = (config) => {
        if (!config.attributes) return;
        if (config.type === "button" || config.type === "container" || config.type === "deepMenu") return;
        const attributes = config.attributes;
        const __attr_init__ = attributes[ATTRIBUTE_INIT];
        if (typeof __attr_init__ === "function") {
          const __attr_result__ = __attr_init__();
          if (typeof __attr_result__ === "boolean" && !__attr_result__) return;
        }
        const menuDefaultConfig = new Map();
        const key = attributes[ATTRIBUTE_KEY];
        if (key != null) {
          const defaultValue = attributes[ATTRIBUTE_DEFAULT_VALUE];
          menuDefaultConfig.set(key, defaultValue);
        }
        const moreMenuDefaultConfig = attributes[ATTRIBUTE_INIT_MORE_VALUE];
        if (typeof moreMenuDefaultConfig === "object" && moreMenuDefaultConfig)
          Object.keys(moreMenuDefaultConfig).forEach((key) => {
            const defaultValue = moreMenuDefaultConfig[key];
            menuDefaultConfig.set(key, defaultValue);
          });
        if (!menuDefaultConfig.size) {
          log.warn("请先配置键", config);
          return;
        }
        if (config.type === "switch") {
          const disabled = typeof config.disabled === "function" ? config.disabled() : config.disabled;
          if (typeof disabled === "boolean" && disabled)
            this.$data.contentConfigInitDisabledKeys.push(...menuDefaultConfig.keys());
        }
        for (const [__key, __defaultValue] of menuDefaultConfig.entries()) this.setDefaultValue(__key, __defaultValue);
      };
      const loopInitDefaultValue = (configList) => {
        for (let index = 0; index < configList.length; index++) {
          const configItem = configList[index];
          initDefaultValue(configItem);
          const childViews = configItem.views;
          if (childViews && Array.isArray(childViews)) loopInitDefaultValue(childViews);
        }
      };
      const contentConfigList = [...PanelContent.getAllContentConfig()];
      for (let index = 0; index < contentConfigList.length; index++) {
        const leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.views) continue;
        const rightContentConfigList = leftContentConfigItem.views;
        if (rightContentConfigList && Array.isArray(rightContentConfigList))
          loopInitDefaultValue(rightContentConfigList);
      }
      this.$data.contentConfigInitDisabledKeys = [...new Set(this.$data.contentConfigInitDisabledKeys)];
    },
    setDefaultValue(key, defaultValue) {
      if (this.$data.contentConfigInitDefaultValue.has(key))
        log.warn("该key已存在，初始化默认值失败: ", {
          key,
          initValue: this.$data.contentConfigInitDefaultValue.get(key),
        });
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
        if (this.$data.contentConfigInitDefaultValue.has(key)) return this.$data.contentConfigInitDefaultValue.get(key);
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
    addValueChangeListener(key, callback, option) {
      const listenerId = PopsPanelStorageApi.addValueChangeListener(key, callback);
      if (option?.immediate || option?.immediateAll) {
        const value = this.getValue(key);
        if (option?.immediate) callback(key, value, value);
        else if (option?.immediateAll) Panel.emitMenuValueChange(key, value, value);
      }
      return listenerId;
    },
    removeValueChangeListener(listenerId) {
      PopsPanelStorageApi.removeValueChangeListener(listenerId);
    },
    emitMenuValueChange(key, newValue, oldValue) {
      PopsPanelStorageApi.emitValueChangeListener(key, newValue, oldValue);
    },
    async exec(queryKey, callback, checkExec, once = true) {
      let queryKeyFn;
      if (typeof queryKey === "string" || Array.isArray(queryKey)) queryKeyFn = () => queryKey;
      else queryKeyFn = queryKey;
      let isArrayKey = false;
      const queryKeyResult = queryKeyFn();
      let keyList = [];
      if (Array.isArray(queryKeyResult)) {
        isArrayKey = true;
        keyList = queryKeyResult;
      } else keyList.push(queryKeyResult);
      const findNotInDataKey = keyList.find((it) => !this.$data.contentConfigInitDefaultValue.has(it));
      if (findNotInDataKey) {
        log.warn(`${findNotInDataKey} 键不存在`);
        return;
      }
      const storageKey = JSON.stringify(keyList);
      if (once) {
        if (this.$data.onceExecMenuData.has(storageKey)) return this.$data.onceExecMenuData.get(storageKey);
      }
      const listenerIdList = [];
      const panelMenuResultsHandler = new PanelMenuResultsHandler({
        keyList,
        getValue: (key) => {
          const value = this.getValue(key);
          return Boolean(value);
        },
        checkExec(keyList) {
          let flag = false;
          if (typeof checkExec === "function") flag = checkExec(keyList);
          else flag = keyList.every((key) => this.getValue(key));
          return flag;
        },
      });
      const valueChangeCallback = async (valueOption) => {
        const execFlag = panelMenuResultsHandler.checkMenuExec();
        let callbackResult = [];
        if (execFlag) {
          const valueList = keyList.map((key) => this.getValue(key));
          callbackResult = await callback({
            key: keyList,
            triggerKey: valueOption?.key,
            value: isArrayKey ? valueList : valueList[0],
            addStoreValue: (...args) => {
              return panelMenuResultsHandler.handlerResult(execFlag, args);
            },
          });
        }
        panelMenuResultsHandler.handlerResult(execFlag, callbackResult);
      };
      if (once)
        keyList.forEach((key) => {
          const listenerId = this.addValueChangeListener(key, (key, newValue, oldValue) => {
            return valueChangeCallback({
              key,
              newValue,
              oldValue,
            });
          });
          listenerIdList.push(listenerId);
        });
      await valueChangeCallback();
      const result = {
        checkMenuExec: panelMenuResultsHandler.checkMenuExec.bind(panelMenuResultsHandler),
        keyList,
        reload() {
          this.clearStoreNodeList();
          this.execDestoryFnAndClear();
          valueChangeCallback();
        },
        clear() {
          panelMenuResultsHandler.clearStoreNodeList();
          this.execDestoryFnAndClear();
          this.removeValueChangeListener();
          this.clearOnceExecMenuData();
        },
        clearStoreNodeList: panelMenuResultsHandler.clearStoreNodeList.bind(panelMenuResultsHandler),
        execDestoryFnAndClear: panelMenuResultsHandler.execDestoryFnAndClear.bind(panelMenuResultsHandler),
        removeValueChangeListener: () => {
          listenerIdList.forEach((listenerId) => {
            this.removeValueChangeListener(listenerId);
          });
        },
        clearOnceExecMenuData() {
          if (once) Panel.$data.onceExecMenuData.delete(storageKey);
        },
      };
      this.$data.onceExecMenuData.set(storageKey, result);
      return result;
    },
    async execMenu(key, callback, isReverse = false, once = false) {
      return await this.exec(
        key,
        async (...args) => {
          return await callback(...args);
        },
        (keyList) => {
          return keyList.every((__key__) => {
            let flag = !!this.getValue(__key__);
            if (Panel.$data.contentConfigInitDisabledKeys.includes(__key__)) {
              flag = false;
              log.warn(`.execMenu${once ? "Once" : ""} ${__key__} 被禁用`);
            }
            if (isReverse) flag = !flag;
            return flag;
          });
        },
        once
      );
    },
    async execMenuOnce(key, callback, isReverse = false, listenUrlChange = false) {
      const result = await this.execMenu(key, callback, isReverse, true);
      if (listenUrlChange) {
        if (result) {
          const urlChangeCallback = () => {
            result.reload();
          };
          this.removeUrlChangeWithExecMenuOnceListener(key);
          this.addUrlChangeWithExecMenuOnceListener(key, urlChangeCallback);
        }
      }
      return result;
    },
    async execMoreMenu(menus, allExecCallback, isReverse = false, once = false, listenUrlChange = false) {
      const results = await Promise.all(
        menus.map(async ([key, callback]) => {
          return await this.execMenu(
            key,
            (...args) => {
              return callback(...args);
            },
            isReverse,
            once
          );
        })
      );
      const panelMenuResultsHandler = new PanelMenuResultsHandler({
        keyList: menus.map(([key]) => key),
        getValue: (key) => {
          const value = this.getValue(key);
          return Boolean(value);
        },
      });
      const listenerIdList = [];
      const __destory__ = (removeListener = false) => {
        panelMenuResultsHandler.clearStoreNodeList();
        panelMenuResultsHandler.execDestoryFnAndClear();
        if (removeListener) {
          for (const listenerId of listenerIdList) this.removeValueChangeListener(listenerId);
          for (const result of results) if (result) this.removeUrlChangeWithExecMenuOnceListener(result.keyList);
        }
      };
      const __allExecCallback__ = () => {
        const allExecFlag = results.every((result) => {
          if (result) return result.checkMenuExec();
          else return true;
        });
        __destory__(false);
        if (allExecFlag) {
          const execResult = allExecCallback();
          panelMenuResultsHandler.handlerResult(allExecFlag, execResult);
        }
      };
      __allExecCallback__();
      for (const result of results)
        if (result) {
          const listenerId = this.addValueChangeListener(result.keyList[0], () => {
            __allExecCallback__();
          });
          listenerIdList.push(listenerId);
          if (listenUrlChange) {
            const urlChangeCallback = () => {
              result.reload();
            };
            this.removeUrlChangeWithExecMenuOnceListener(result.keyList);
            this.addUrlChangeWithExecMenuOnceListener(result.keyList, urlChangeCallback);
          }
        }
      return {
        clear() {
          for (const result of results) result?.clear();
          this.execDestoryFnAndClear();
          this.removeValueChangeListener();
        },
        execDestoryFnAndClear() {
          for (const result of results) result?.execDestoryFnAndClear();
          __destory__(false);
        },
        removeValueChangeListener() {
          for (const result of results) result?.removeValueChangeListener();
          __destory__(true);
        },
      };
    },
    async execMoreMenuOnce(menus, allExecCallback, isReverse = false, listenUrlChange = false) {
      return await this.execMoreMenu(menus, allExecCallback, isReverse, true, listenUrlChange);
    },
    deleteExecMenuOnce(key) {
      key = this.transformKey(key);
      this.$data.onceExecMenuData.delete(key);
      this.$data.urlChangeReloadMenuExecOnce.delete(key);
      return PopsPanelStorageApi.removeValueChangeListener(key);
    },
    onceExec(key, callback, runWithMenuEnable = false) {
      key = this.transformKey(key);
      if (typeof key !== "string") throw new TypeError("key 必须是字符串");
      if (this.$data.onceExecData.has(key)) return;
      if (runWithMenuEnable) {
        if (
          (Array.isArray(key) ? key : [key]).findIndex((it) => {
            if (!!!Panel.getValue(it)) return true;
          }) !== -1
        )
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
      return {
        off: () => {
          return this.removeUrlChangeWithExecMenuOnceListener(key);
        },
      };
    },
    removeUrlChangeWithExecMenuOnceListener(key) {
      key = this.transformKey(key);
      this.$data.urlChangeReloadMenuExecOnce.delete(key);
    },
    hasUrlChangeWithExecMenuOnceListener(key) {
      key = this.transformKey(key);
      return this.$data.urlChangeReloadMenuExecOnce.has(key);
    },
    async emitUrlChangeWithExecMenuOnceEvent(config) {
      const values = this.$data.urlChangeReloadMenuExecOnce.values();
      for (const callback of values) await callback(config);
    },
    showPanel(
      content,
      title = `${SCRIPT_NAME}-设置`,
      preventDefaultContentConfig = false,
      preventRegisterSearchPlugin = false
    ) {
      this.$data.$panel = null;
      this.$data.panelContent = [];
      const checkHasBottomVersionContentConfig =
        content.findIndex((it) => {
          return (
            (typeof it.isBottom === "function" ? it.isBottom() : Boolean(it.isBottom)) && it.id === "script-version"
          );
        }) !== -1;
      if (!preventDefaultContentConfig && !checkHasBottomVersionContentConfig)
        content.push(...PanelContent.getDefaultBottomContentConfig());
      const $panel = __pops__.panel({
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
            callback: (details) => {
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
          clickCallBack: (originalRun) => {
            originalRun();
            this.$data.$panel = null;
          },
        },
        width: PanelUISize.setting.width,
        height: PanelUISize.setting.height,
        drag: true,
        only: true,
        style: `
      .pops-switch-shortcut-wrapper{
        margin-right: 5px;
        display: inline-flex;
      }
      .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
        cursor: pointer;
      }
      `,
        ...this.$data.panelConfig,
      });
      this.$data.$panel = $panel;
      this.$data.panelContent = content;
      if (!preventRegisterSearchPlugin)
        this.registerConfigSearch({
          $panel,
          content,
        });
      return {
        $panel,
        content,
      };
    },
    registerConfigSearch(config) {
      const { $panel, content } = config;
      const translateCallback = (text, translateMap) => {
        if (typeof config.translateCallback === "function") return config.translateCallback(text, translateMap);
        else {
          if (typeof translateMap === "object" && translateMap)
            for (const key in translateMap) text = text.replaceAll(`{{${key}}}`, translateMap[key]);
          return text;
        }
      };
      const asyncQueryProperty = async (target, handler) => {
        if (target == null) return;
        const handleResult = await handler(target);
        if (handleResult && typeof handleResult.isFind === "boolean" && handleResult.isFind) return handleResult.data;
        return await asyncQueryProperty(handleResult.data, handler);
      };
      const scrollToElementAndListen = ($el, callback) => {
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
        $el.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      };
      const addFlashingClass = ($el) => {
        const flashingClassName = "pops-flashing";
        domUtils.onAnimationend($el, () => {
          $el.classList.remove(flashingClassName);
        });
        $el.classList.add(flashingClassName);
      };
      const dbclick_callback = (evt) => {
        if (evt.type === "dblclick" && isMobileTouch) return;
        domUtils.preventEvent(evt);
        const $alert = __pops__.alert({
          title: {
            text: translateCallback("搜索配置"),
            position: "center",
          },
          content: {
            text: `
						<div class="search-wrapper">
							<input class="search-config-text" name="search-config" type="text" placeholder="${translateCallback("请输入需要搜素的配置名称")}">
						</div>
						<div class="search-result-wrapper"></div>
					`,
            html: true,
          },
          btn: { ok: { enable: false } },
          mask: { clickEvent: { toClose: true } },
          width: PanelUISize.settingMiddle.width,
          height: "auto",
          drag: true,
          style: `
					${__pops__.config.cssText.panelCSS}

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
            flex-wrap: wrap;
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${config.searchDialogStyle ?? ""}
				`,
        });
        const $searchInput = $alert.$shadowRoot.querySelector(".search-config-text");
        const $searchResultWrapper = $alert.$shadowRoot.querySelector(".search-result-wrapper");
        $searchInput.focus();
        const clearSearchResult = () => {
          domUtils.empty($searchResultWrapper);
        };
        const createSearchResultItem = (pathInfo) => {
          const searchPath = utils.queryProperty(pathInfo, (target) => {
            if (target?.next)
              return {
                isFind: false,
                data: target.next,
              };
            else
              return {
                isFind: true,
                data: target,
              };
          });
          const $item = domUtils.createElement("div", {
            className: "search-result-item",
            innerHTML: `
							<div class="search-result-item-path">${searchPath.matchedData?.path}</div>
							<div class="search-result-item-description">${searchPath.matchedData?.description ?? ""}</div>
						`,
          });
          const panelHandlerComponents = __pops__.fn.PanelHandlerComponents();
          domUtils.on($item, "click", () => {
            const $targetAsideItem = $panel.$shadowRoot.querySelectorAll(
              "aside.pops-panel-aside .pops-panel-aside-top-container li"
            )[pathInfo.index];
            if (!$targetAsideItem) {
              qmsg.default.error(translateCallback(`左侧项下标{{index}}不存在`, { index: pathInfo.index }));
              return;
            }
            $targetAsideItem.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
            $targetAsideItem.click();
            asyncQueryProperty(pathInfo.next, async (target) => {
              if (target?.next) {
                const $findDeepMenu = await domUtils.waitNode(() => {
                  return Array.from($panel.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(
                    ($deepMenu) => {
                      const viewConfig = Reflect.get($deepMenu, panelHandlerComponents.$data.nodeStoreConfigKey);
                      return typeof viewConfig === "object" && viewConfig != null && viewConfig.text === target.name;
                    }
                  );
                }, 2500);
                if ($findDeepMenu) $findDeepMenu.click();
                else {
                  qmsg.default.error(translateCallback("未找到对应的二级菜单"));
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
                const $findTargetMenu = await domUtils.waitNode(() => {
                  return Array.from($panel.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(
                    ($menuItem) => {
                      return (
                        Reflect.get($menuItem, panelHandlerComponents.$data.nodeStoreConfigKey) ===
                        target.matchedData?.formConfig
                      );
                    }
                  );
                }, 2500);
                if ($findTargetMenu) {
                  scrollToElementAndListen($findTargetMenu);
                  const $fold = $findTargetMenu.closest(`.pops-panel-forms-fold[data-fold-enable]`);
                  if ($fold) {
                    $fold.querySelector(".pops-panel-forms-fold-container").click();
                    await utils.sleep(500);
                  }
                  scrollToElementAndListen($findTargetMenu, () => {
                    addFlashingClass($findTargetMenu);
                  });
                } else qmsg.default.error(translateCallback("未找到对应的菜单项"));
                return {
                  isFind: true,
                  data: target,
                };
              }
            });
          });
          return $item;
        };
        const execSearch = (searchText) => {
          const searchTextRegExp = new RegExp(searchText, "i");
          const searchConfigResult = [];
          const loopContentConfig = (configList, path) => {
            for (let index = 0; index < configList.length; index++) {
              const configItem = configList[index];
              const childViewConfig = configItem.views;
              if (childViewConfig && Array.isArray(childViewConfig)) {
                const deepMenuPath = utils.deepClone(path);
                if (configItem.type === "deepMenu") {
                  const deepNext = utils.queryProperty(deepMenuPath, (target) => {
                    if (target?.next)
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    else
                      return {
                        isFind: true,
                        data: target,
                      };
                  });
                  deepNext.next = { name: configItem.text };
                }
                loopContentConfig(childViewConfig, deepMenuPath);
              } else {
                let text;
                let description;
                if (configItem.type === "own") {
                  let searchConfig = Reflect.get(configItem.attributes || {}, ATTRIBUTE_PLUGIN_SEARCH_CONFIG);
                  if (searchConfig) {
                    if (typeof searchConfig === "function") searchConfig = searchConfig();
                    if (typeof searchConfig.text === "string") text = searchConfig.text;
                    if (typeof searchConfig.desc === "string") description = searchConfig.desc;
                  }
                } else {
                  text = configItem.text;
                  description = Reflect.get(configItem, "description");
                }
                const delayMatchedTextList = [text, description];
                const matchedIndex = delayMatchedTextList.findIndex((configText) => {
                  if (typeof configText !== "string") return;
                  return configText.match(searchTextRegExp);
                });
                if (matchedIndex !== -1) {
                  const matchedPath = utils.deepClone(path);
                  const deepNext = utils.queryProperty(matchedPath, (target) => {
                    if (target?.next)
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    else
                      return {
                        isFind: true,
                        data: target,
                      };
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
                    if (typeof name === "string" && name.trim() !== "") pathList.push(name);
                    if (target?.next)
                      return {
                        isFind: false,
                        data: target.next,
                      };
                    else
                      return {
                        isFind: true,
                        data: target,
                      };
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
            if (!leftContentConfigItem.views) continue;
            if (leftContentConfigItem.isBottom && leftContentConfigItem.id === "script-version") continue;
            const rightContentConfigList = leftContentConfigItem.views;
            if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
              let text = leftContentConfigItem.title;
              if (typeof text === "function") text = text();
              loopContentConfig(rightContentConfigList, {
                index,
                name: text,
              });
            }
          }
          const $fragment = document.createDocumentFragment();
          for (const pathInfo of searchConfigResult) {
            const $resultItem = createSearchResultItem(pathInfo);
            $fragment.appendChild($resultItem);
          }
          clearSearchResult();
          $searchResultWrapper.append($fragment);
        };
        domUtils.on(
          $searchInput,
          "input",
          utils.debounce((evt2) => {
            domUtils.preventEvent(evt2);
            const searchText = domUtils.val($searchInput).trim();
            if (searchText === "") {
              clearSearchResult();
              return;
            }
            execSearch(searchText);
          }, 200)
        );
      };
      $panel.$shadowRoot
        .querySelectorAll(`aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`)
        .forEach(($asideItem) => {
          domUtils.on($asideItem, "dblclick", dbclick_callback);
        });
      const clickMap = new WeakMap();
      let isDoubleClick = false;
      let timer = void 0;
      let isMobileTouch = false;
      domUtils.on(
        $panel.$shadowRoot,
        "touchend",
        `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,
        (evt, $selector) => {
          isMobileTouch = true;
          clearTimeout(timer);
          timer = void 0;
          if (isDoubleClick && clickMap.has($selector)) {
            isDoubleClick = false;
            clickMap.delete($selector);
            dbclick_callback(evt);
          } else {
            timer = setTimeout(() => {
              isDoubleClick = false;
            }, 200);
            isDoubleClick = true;
            clickMap.set($selector, evt);
          }
        },
        { capture: true }
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
      if (Array.isArray(key))
        if (key.length > 1) {
          const keyArray = key.sort();
          return JSON.stringify(keyArray);
        } else return key[0];
      else return key;
    },
    getDynamicValue(key, defaultValue) {
      let isInit = false;
      let __value = defaultValue;
      const listenerId = this.addValueChangeListener(key, (_, newValue) => {
        __value = newValue;
      });
      return {
        get value() {
          if (!isInit) {
            isInit = true;
            __value = Panel.getValue(key, defaultValue);
          }
          return __value;
        },
        destory() {
          Panel.removeValueChangeListener(listenerId);
        },
      };
    },
  };
  var PanelSettingConfig = {
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
    httpx_cookie_manager_enable: {
      key: "httpx-use-cookie-enable",
      defaultValue: false,
    },
    httpx_cookie_manager_use_document_cookie: {
      key: "httpx-use-document-cookie",
      defaultValue: false,
    },
  };
  var utils = _whitesev_utils.default.noConflict();
  var domUtils = _whitesev_domutils.default.noConflict();
  var __pops__ = _whitesev_pops.default;
  var log = new utils.Log(_GM_info, _unsafeWindow.console || _monkeyWindow.console);
  var SCRIPT_NAME = _GM_info?.script?.name || void 0;
  var AnyTouch = _whitesev_pops.default.fn.Utils.AnyTouch();
  log.config({
    debug: false,
    logMaxCount: 250,
    autoClearConsole: true,
    tag: true,
  });
  var getPageMaxZIndex = () => {
    const deviation = 100;
    const popsZIndex = _whitesev_pops.default.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex ?? 0;
    const pointZIndex = utils.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex ?? 0;
    return Math.max(deviation, popsZIndex, pointZIndex);
  };
  qmsg.default.config({
    isHTML: true,
    autoClose: true,
    showClose: false,
    consoleLogContent(qmsgInst) {
      const qmsgType = qmsgInst.setting.type;
      if (qmsgType === "loading") return false;
      const content = qmsgInst.setting.content;
      if (qmsgType === "warning") log.warn(content);
      else if (qmsgType === "error") log.error(content);
      else log.info(content);
      return false;
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
      return getPageMaxZIndex();
    },
  });
  __pops__.GlobalConfig.setGlobalConfig({
    zIndex: () => {
      return getPageMaxZIndex();
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
  var MenuRegister = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand,
  });
  var httpx = new utils.Httpx({
    xmlHttpRequest: _GM_xmlhttpRequest,
    logDetails: false,
  });
  httpx.interceptors.request.use((data) => {
    return data;
  });
  httpx.interceptors.response.use(
    (response) => {
      return response;
    },
    (data) => {
      log.error("[Httpx-HttpxRequest.response] 响应错误", { data });
      if (data.type === "onabort") qmsg.default.warning("请求取消", { consoleLogContent: true });
      else if (data.type === "onerror") qmsg.default.error("请求异常", { consoleLogContent: true });
      else if (data.type === "ontimeout") qmsg.default.error("请求超时", { consoleLogContent: true });
      else qmsg.default.error("其它错误", { consoleLogContent: true });
      return data;
    }
  );
  (_unsafeWindow.Object.defineProperty,
    _unsafeWindow.Object.keys,
    _unsafeWindow.Object.values,
    _unsafeWindow.Function.prototype.apply,
    _unsafeWindow.Function.prototype.call,
    _unsafeWindow.Element.prototype.appendChild,
    _unsafeWindow.setTimeout.bind(_unsafeWindow),
    _unsafeWindow.clearTimeout.bind(_unsafeWindow),
    _unsafeWindow.setInterval.bind(_unsafeWindow),
    _unsafeWindow.clearInterval.bind(_unsafeWindow));
  var addStyle = domUtils.addStyle.bind(domUtils);
  CommonUtil.addBlockCSS.bind(CommonUtil);
  _whitesev_domutils.default.selector.bind(_whitesev_domutils.default);
  _whitesev_domutils.default.selectorAll.bind(_whitesev_domutils.default);
  var cookieManager = new utils.CookieManagerService({ baseCookieHandler: "GM_cookie" });
  if (!cookieManager.isSupportGM_cookie)
    if (cookieManager.isSupportCookieStore) cookieManager.setOptions({ baseCookieHandler: "cookieStore" });
    else cookieManager.setOptions({ baseCookieHandler: "document.cookie" });
  new utils.DocumentCookieHandler();
  var PanelContent = {
    $data: {
      __contentConfig: null,
      get contentConfig() {
        if (this.__contentConfig == null) this.__contentConfig = new utils.Dictionary();
        return this.__contentConfig;
      },
      __defaultBottomContentConfig: [],
    },
    addContentConfig(configList) {
      if (!Array.isArray(configList)) configList = [configList];
      let index = this.$data.contentConfig.keys().length;
      this.$data.contentConfig.set(index, configList);
    },
    getAllContentConfig() {
      return this.$data.contentConfig.values().flat();
    },
    getConfig(index = 0) {
      return this.$data.contentConfig.get(index) ?? [];
    },
    getDefaultBottomContentConfig(config) {
      if (this.$data.__defaultBottomContentConfig.length) return this.$data.__defaultBottomContentConfig;
      let isDoubleClick = false;
      let timer = void 0;
      const translateCallback = (text, translateMap) => {
        if (config && typeof config.translateCallback === "function")
          return config.translateCallback(text, translateMap);
        else {
          if (typeof translateMap === "object" && translateMap)
            for (const key in translateMap) text = text.replaceAll(`{{${key}}}`, translateMap[key]);
          return text;
        }
      };
      const exportToFile = (fileName, fileData) => {
        if (typeof fileData !== "string") fileData = CommonUtil.toStr(fileData);
        const blob = new Blob([fileData]);
        const blobUrl = globalThis.URL.createObjectURL(blob);
        domUtils
          .createElement("a", {
            href: blobUrl,
            download: fileName,
          })
          .click();
        utils.workerSetTimeout(() => {
          globalThis.URL.revokeObjectURL(blobUrl);
        }, 500);
      };
      const dbclick_callback = () => {
        const importConfig = (importEndCallBack) => {
          const $alert = __pops__.alert({
            title: {
              text: translateCallback("请选择导入方式"),
              position: "center",
            },
            content: {
              text: `
            <div class="btn-control" data-mode="local">${translateCallback("本地导入")}</div>
            <div class="btn-control" data-mode="network">${translateCallback("网络导入")}</div>
            <div class="btn-control" data-mode="clipboard">${translateCallback("剪贴板导入")}</div>`,
              html: true,
            },
            btn: {
              ok: { enable: false },
              close: {
                enable: true,
                callback(details) {
                  details.close();
                },
              },
            },
            drag: true,
            mask: { enable: true },
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
          const $local = $alert.$shadowRoot.querySelector(".btn-control[data-mode='local']");
          const $network = $alert.$shadowRoot.querySelector(".btn-control[data-mode='network']");
          const $clipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']");
          const updateConfigToStorage = async (data) => {
            if (confirm(translateCallback("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）")))
              if (typeof _GM_listValues === "function")
                if (typeof _GM_deleteValue === "function") {
                  _GM_listValues().forEach((key) => {
                    _GM_deleteValue(key);
                  });
                  qmsg.default.success(translateCallback("已清空脚本存储的配置"));
                } else qmsg.default.error(translateCallback("不支持GM_deleteValue函数，无法执行删除脚本配置"));
              else qmsg.default.error(translateCallback("不支持GM_listValues函数，无法清空脚本存储的配置"));
            if (typeof _GM_setValues === "function") _GM_setValues(data);
            else
              Object.keys(data).forEach((key) => {
                const value = data[key];
                _GM_setValue(key, value);
              });
            qmsg.default.success(translateCallback("配置导入完毕"));
            importEndCallBack?.();
          };
          const importFile = (configText) => {
            return new Promise(async (resolve) => {
              const data = utils.toJSON(configText);
              if (Object.keys(data).length === 0) qmsg.default.warning(translateCallback("解析为空配置，不导入"));
              else await updateConfigToStorage(data);
              resolve(true);
            });
          };
          domUtils.on($local, "click", (event) => {
            domUtils.preventEvent(event);
            $alert.close();
            const $input = domUtils.createElement("input", {
              type: "file",
              accept: ".json",
            });
            domUtils.on($input, ["propertychange", "input"], () => {
              if (!$input.files?.length) return;
              const uploadFile = $input.files[0];
              const fileReader = new FileReader();
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
            const $prompt = __pops__.prompt({
              title: {
                text: translateCallback("网络导入"),
                position: "center",
              },
              content: {
                text: "",
                placeholder: translateCallback("请填写URL"),
                focus: true,
              },
              btn: {
                close: {
                  enable: true,
                  callback(details) {
                    details.close();
                  },
                },
                ok: {
                  text: translateCallback("导入"),
                  callback: async (details) => {
                    const url = details.text;
                    if (utils.isNull(url)) {
                      qmsg.default.error(translateCallback("请填入完整的url"));
                      return;
                    }
                    const $loading = qmsg.default.loading(translateCallback("正在获取配置..."));
                    const response = await httpx.get(url, { allowInterceptConfig: false });
                    $loading.close();
                    if (!response.status) {
                      log.error(response);
                      qmsg.default.error(translateCallback("获取配置失败"), { consoleLogContent: true });
                      return;
                    }
                    if (!(await importFile(response.data.responseText))) return;
                    details.close();
                  },
                },
                cancel: { enable: false },
              },
              drag: true,
              mask: { enable: true },
              width: PanelUISize.info.width,
              height: "auto",
            });
            const $promptInput = $prompt.$shadowRoot.querySelector("input");
            const $promptOk = $prompt.$shadowRoot.querySelector(".pops-prompt-btn-ok");
            domUtils.on($promptInput, ["input", "propertychange"], () => {
              if (domUtils.val($promptInput) === "") domUtils.attr($promptOk, "disabled", "true");
              else domUtils.removeAttr($promptOk, "disabled");
            });
            domUtils.onKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
              if (keyName === "Enter" && otherCodeList.length === 0) {
                if (domUtils.val($promptInput) !== "") domUtils.emit($promptOk, "click");
              }
            });
            domUtils.emit($promptInput, "input");
          });
          domUtils.on($clipboard, "click", async (event) => {
            domUtils.preventEvent(event);
            $alert.close();
            let clipboardText = await CommonUtil.getClipboardText();
            if (clipboardText.trim() === "") {
              qmsg.default.warning(translateCallback("获取到的剪贴板内容为空"));
              return;
            }
            if (!(await importFile(clipboardText))) return;
          });
        };
        const exportConfig = (
          fileName = `${SCRIPT_NAME}_panel-setting-${utils.formatTime(Date.now(), "yyyy_MM_dd_HH_mm_ss")}.json`,
          fileData
        ) => {
          const $alert = __pops__.alert({
            title: {
              text: translateCallback("请选择导出方式"),
              position: "center",
            },
            content: {
              text: `
            <div class="btn-control" data-mode="export-to-file">${translateCallback("导出至文件")}</div>
            <div class="btn-control" data-mode="export-to-clipboard">${translateCallback("导出至剪贴板")}</div>
            `,
              html: true,
            },
            btn: {
              ok: { enable: false },
              close: {
                enable: true,
                callback(details) {
                  details.close();
                },
              },
            },
            drag: true,
            mask: { enable: true },
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
          const $exportToFile = $alert.$shadowRoot.querySelector(".btn-control[data-mode='export-to-file']");
          const $exportToClipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='export-to-clipboard']");
          domUtils.on($exportToFile, "click", (event) => {
            domUtils.preventEvent(event);
            try {
              exportToFile(fileName, fileData);
              $alert.close();
            } catch (error) {
              qmsg.default.error(error.toString(), { consoleLogContent: true });
            }
          });
          domUtils.on($exportToClipboard, "click", async () => {
            if (await utils.copy(fileData)) {
              qmsg.default.success(translateCallback("复制成功"));
              $alert.close();
            } else qmsg.default.error(translateCallback("复制失败"));
          });
        };
        const $textarea = __pops__
          .confirm({
            title: {
              text: translateCallback("配置"),
              position: "center",
            },
            content: {
              text: `<textarea name="config-value" id="config" readonly></textarea>`,
              html: true,
            },
            btn: {
              ok: {
                enable: true,
                type: "primary",
                text: translateCallback("导入"),
                callback() {
                  importConfig();
                },
              },
              cancel: {
                enable: true,
                text: translateCallback("导出"),
                callback() {
                  exportConfig(void 0, configDataStr);
                },
              },
            },
            width: PanelSizeUtil.width < 450 ? "90vw" : "450px",
            height: "auto",
            style: `
          .pops-content textarea {
            --textarea-bd-color: #dcdfe6;
            display: inline-block;
            resize: vertical;
            padding: 5px 15px;
            margin: 0;
            line-height: normal;
            box-sizing: border-box;
            color: #606266;
            border: 0;
            border-radius: 0;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: none;
            width: 100%;
            height: 100%;
            appearance: none;
            resize: none;
          }
          .pops-content textarea{
            height: 500px;
          }
          .pops-content textarea:focus {
            --textarea-bd-color: #3677f0;
          }
          .pops-content textarea:hover {
            --textarea-bd-color: #c0c4cc;
          }
        `,
          })
          .$shadowRoot.querySelector("textarea");
        const configData = {};
        if (typeof _GM_listValues === "function")
          _GM_listValues().forEach((key) => {
            const value = _GM_getValue(key);
            Reflect.set(configData, key, value);
          });
        else {
          qmsg.default.warning(translateCallback("不支持函数GM_listValues，仅导出菜单配置"));
          const panelLocalValue = _GM_getValue(KEY);
          Reflect.set(configData, KEY, panelLocalValue);
        }
        const configDataStr = CommonUtil.toStr(configData);
        $textarea.value = configDataStr;
      };
      const click_callback = () => {
        let supportURL = _GM_info?.script?.supportURL || _GM_info?.script?.namespace;
        if (typeof supportURL === "string" && utils.isNotNull(supportURL)) window.open(supportURL, "_blank");
      };
      return [
        {
          id: "script-version",
          title: translateCallback(`版本：{{version}}`, {
            version: _GM_info?.script?.version || translateCallback("未知"),
          }),
          isBottom: true,
          views: [],
          clickFirstCallback() {
            return false;
          },
          afterRender(config) {
            new AnyTouch(config.$asideLiElement).on("tap", function () {
              clearTimeout(timer);
              timer = void 0;
              if (isDoubleClick) {
                isDoubleClick = false;
                dbclick_callback();
              } else {
                timer = setTimeout(() => {
                  isDoubleClick = false;
                  click_callback();
                }, 200);
                isDoubleClick = true;
              }
            });
          },
        },
      ];
    },
    setDefaultBottomContentConfig(config) {
      this.$data.__defaultBottomContentConfig = config;
    },
  };
  var NetWorkHook = {
    get ajaxHooker() {
      if (this.__ajaxHooker == null) this.__ajaxHooker = utils.ajaxHooker();
      return this.__ajaxHooker;
    },
    hook() {
      this.ajaxHooker.hook((request) => {
        let url = CommonUtil.fixUrl(request.url);
        try {
          if (!new URL(url).pathname.endsWith(".m3u8")) return;
          request.response = (response) => {
            let m3u8Text = response.responseText;
            if (m3u8Text.trim() === "") return;
            if (!m3u8Text.includes("#EXT-X-ENDLIST")) return;
            response.responseText = M3U8Rule.runRule(m3u8Text);
          };
        } catch (error) {
          log.error("m3u8过滤器 hook network出错", error);
        }
      });
    },
    unhook() {
      this.ajaxHooker.unhook();
    },
  };
  var UISelect = function (text, key, defaultValue, data, selectCallBack, description, valueChangeCallBack) {
    const result = {
      text,
      type: "select",
      description,
      attributes: {},
      props: {},
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(isSelectedInfo) {
        if (isSelectedInfo == null) return;
        const value = isSelectedInfo.value;
        log.info(`选择：${isSelectedInfo.text}`);
        if (typeof selectCallBack === "function") {
          if (selectCallBack(isSelectedInfo)) return;
        }
        this.props[PROPS_STORAGE_API].set(key, value);
        if (typeof valueChangeCallBack === "function") valueChangeCallBack(isSelectedInfo);
      },
      data,
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("select", result, {
      get(key, defaultValue) {
        return Panel.getValue(key, defaultValue);
      },
      set(key, value) {
        Panel.setValue(key, value);
      },
    });
    return result;
  };
  var UISwitch = function (
    text,
    key,
    defaultValue = false,
    clickCallBack,
    description,
    afterAddToUListCallBack,
    disabled,
    valueChangeCallBack,
    shortCutOption
  ) {
    if (shortCutOption && typeof shortCutOption.defaultValue === "object" && shortCutOption.defaultValue != null) {
      const shortCutKey = shortCutOption.key ?? key;
      shortCutOption.handler.add({
        key: shortCutKey,
        name: text,
      });
      shortCutOption.handler.shortCut.initConfig(shortCutKey, shortCutOption.defaultValue);
    }
    const result = {
      text,
      type: "switch",
      description,
      disabled,
      attributes: {},
      props: {},
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(event, __value) {
        const value = Boolean(__value);
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        if (typeof clickCallBack === "function") {
          if (clickCallBack(event, value)) return;
        }
        this.props[PROPS_STORAGE_API].set(key, value);
        if (typeof valueChangeCallBack === "function") valueChangeCallBack(event, value);
      },
      afterAddToUListCallBack: (...args) => {
        afterAddToUListCallBack?.(...args);
        if (shortCutOption) {
          const shortCut = shortCutOption.handler.shortCut;
          const shortCutKey = shortCutOption.key ?? key;
          const [_, container] = args;
          const $leftMainText = container.target?.querySelector(".pops-panel-item-left-main-text");
          if (!$leftMainText) return;
          const renderKeyboard = () => {
            const tooltipShowText = shortCutOption.handler.shortCut.getShowText(shortCutKey, "暂未录入快捷键");
            const $wrapper = domUtils.createElement(
              "div",
              {
                className: "pops-switch-shortcut-wrapper",
                innerHTML: `
              <i class="pops-bottom-icon" is-loading="false">
                <svg viewBox="0 0 1123 1024" xmlns="http://www.w3.org/2000/svg" data-type="keyboard">
                  <path d="M1014.122186 1024H109.753483A109.753483 109.753483 0 0 1 0 914.246517V392.917471a109.753483 109.753483 0 0 1 109.753483-109.753484h904.368703a109.753483 109.753483 0 0 1 109.753484 109.753484v521.329046a109.753483 109.753483 0 0 1-109.753484 109.753483zM109.753483 370.966774a21.950697 21.950697 0 0 0-21.950696 21.950697v521.329046a21.950697 21.950697 0 0 0 21.950696 21.950696h904.368703a21.950697 21.950697 0 0 0 21.950697-21.950696V392.917471a21.950697 21.950697 0 0 0-21.950697-21.950697z"></path>
                  <path d="M687.056806 891.198285H307.309753a43.901393 43.901393 0 0 1 0-87.802787h379.747053a43.901393 43.901393 0 0 1 0 87.802787zM175.605573 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM432.428725 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM947.172562 414.868167a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 546.572347a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM690.349411 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 546.572347a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM818.760986 803.395498a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM175.605573 678.276527a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394zM304.017149 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM432.428725 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM561.937835 678.276527a43.901393 43.901393 0 1 0 43.901393 43.901394 43.901393 43.901393 0 0 0-43.901393-43.901394zM948.270096 803.395498a43.901393 43.901393 0 1 0 43.901394 43.901394 43.901393 43.901393 0 0 0-43.901394-43.901394z"></path>
                  <path d="M881.320472 766.079314H689.251876a43.901393 43.901393 0 0 1 0-87.802787h192.068596a21.950697 21.950697 0 0 0 21.950696-21.950696v-65.85209a43.901393 43.901393 0 0 1 87.802787 0v65.85209a109.753483 109.753483 0 0 1-109.753483 109.753483zM305.114684 502.670954H175.605573a43.901393 43.901393 0 0 1 0-87.802787h129.509111a43.901393 43.901393 0 0 1 0 87.802787zM563.03537 365.4791a43.901393 43.901393 0 0 1-43.901394-43.901394v-105.363344A109.753483 109.753483 0 0 1 628.88746 106.460879h61.461951a21.950697 21.950697 0 0 0 21.950696-21.950697V43.901393a43.901393 43.901393 0 0 1 87.802787 0v40.608789a109.753483 109.753483 0 0 1-109.753483 109.753484h-61.461951a21.950697 21.950697 0 0 0-21.950697 21.950696v105.363344a43.901393 43.901393 0 0 1-43.901393 43.901394z"></path>
                </svg>
              </i>
            `,
              },
              { style: "margin-right: 5px;display: inline-flex;" }
            );
            const $icon = $wrapper.querySelector(".pops-bottom-icon");
            domUtils.on(
              $icon,
              "click",
              function (evt) {
                shortCutOption.handler.shortCut.deleteOption(shortCutKey);
                $tooltip.toolTip.offEvent();
                $tooltip.toolTip.close();
                $tooltip.toolTip.destory();
                $wrapper.remove();
              },
              { once: true }
            );
            const $tooltip = __pops__.tooltip({
              $target: $icon,
              content: () => {
                return tooltipShowText;
              },
              className: "github-tooltip",
              isFixed: true,
              only: true,
            });
            domUtils.empty($leftMainText);
            domUtils.append($leftMainText, $wrapper, text);
          };
          __pops__.rightClickMenu({
            $target: $leftMainText,
            only: true,
            data: [
              {
                text: () => {
                  if (shortCutOption.handler.shortCut.hasOption(shortCutKey)) return "修改快捷键";
                  else return "添加快捷键";
                },
                icon: __pops__.config.iconSVG.keyboard,
                callback(clickEvent, contextMenuEvent, $li, $listenerRootNode) {
                  if (shortCut.isWaitKeyboardPress()) {
                    qmsg.default.warning("请先执行当前的录入操作");
                    return;
                  }
                  const $loading = qmsg.default.loading("请按下快捷键...", {
                    showClose: true,
                    onClose() {
                      shortCut.cancelEnterShortcutKeys();
                    },
                  });
                  shortCut.enterShortcutKeys(shortCutKey).then(({ status, option, key: isUsedKey }) => {
                    $loading.close();
                    if (status) {
                      log.success("录入快捷键", option);
                      qmsg.default.success("录入成功");
                      renderKeyboard();
                    } else
                      qmsg.default.error(
                        `快捷键 ${shortCut.translateKeyboardValueToButtonText(option)} 已被 ${isUsedKey} 占用`
                      );
                  });
                },
              },
            ],
          });
          if (!shortCut.hasOption(shortCutKey)) return;
          renderKeyboard();
        }
      },
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("switch", result, {
      get(key, defaultValue) {
        return Panel.getValue(key, defaultValue);
      },
      set(key, value) {
        Panel.setValue(key, value);
      },
    });
    return result;
  };
  var UITextArea = function (
    text,
    key,
    defaultValue,
    description,
    changeCallback,
    placeholder = "",
    disabled,
    valueChangeCallBack
  ) {
    const result = {
      text,
      type: "textarea",
      attributes: {},
      props: {},
      description,
      placeholder,
      disabled,
      getValue() {
        const value = this.props[PROPS_STORAGE_API].get(key, defaultValue);
        if (Array.isArray(value)) return value.join("\n");
        return value;
      },
      callback(event, value) {
        if (typeof changeCallback === "function") {
          if (changeCallback(event, value)) return;
        }
        this.props[PROPS_STORAGE_API].set(key, value);
        if (typeof valueChangeCallBack === "function") valueChangeCallBack(event, value);
      },
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("switch", result, {
      get(key, defaultValue) {
        return Panel.getValue(key, defaultValue);
      },
      set(key, value) {
        Panel.setValue(key, value);
      },
    });
    return result;
  };
  var PanelComponents = {
    $data: {
      __storeApiFn: null,
      get storeApiValue() {
        if (!this.__storeApiFn) this.__storeApiFn = new _whitesev_utils.default.Dictionary();
        return this.__storeApiFn;
      },
    },
    getStorageApi(type) {
      if (!this.hasStorageApi(type)) return;
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
      if (this.hasStorageApi(type)) propsStorageApi = this.getStorageApi(type);
      else propsStorageApi = storageApiValue;
      this.setComponentsStorageApiProperty(config, propsStorageApi);
    },
    setComponentsStorageApiProperty(config, storageApiValue) {
      Reflect.set(config.props, PROPS_STORAGE_API, storageApiValue);
    },
  };
  var UIInput = function (
    text,
    key,
    defaultValue,
    description,
    changeCallback,
    placeholder = "",
    inputType = "text",
    afterAddToUListCallBack,
    valueChangeCallback
  ) {
    const result = {
      text,
      type: "input",
      inputType,
      attributes: {},
      props: {},
      description,
      placeholder,
      afterAddToUListCallBack,
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(event, value) {
        const isValid = event.target.validity.valid;
        if (typeof changeCallback === "function") {
          if (changeCallback(event, value, isValid)) return;
        }
        this.props[PROPS_STORAGE_API].set(key, value);
        if (typeof valueChangeCallback === "function") valueChangeCallback(event, value, isValid);
      },
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi("input", result, {
      get(key, defaultValue) {
        return Panel.getValue(key, defaultValue);
      },
      set(key, value) {
        Panel.setValue(key, value);
      },
    });
    return result;
  };
  var RuleEditView = class {
    option;
    constructor(option) {
      this.option = option;
    }
    async showView() {
      const $dialog = __pops__.confirm({
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
        mask: { enable: true },
        style: `
      ${__pops__.config.cssText.panelCSS}
      
      .rule-form-container {
          
      }
      .rule-form-container li{
        display: flex;
        align-items: flex-start;
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
      const $form = $dialog.$shadowRoot.querySelector(".rule-form-container");
      $dialog.$shadowRoot.querySelector("input[type=submit]");
      const $ulist = $dialog.$shadowRoot.querySelector(".rule-form-ulist");
      const view = await this.option.getView(await this.option.data());
      domUtils.append($ulist, view);
      const submitSaveOption = async () => {
        if (!(await this.option.onsubmit($form, await this.option.data())).success) return;
        $dialog.close();
        if (typeof this.option.dialogCloseCallBack === "function") await this.option.dialogCloseCallBack(true);
      };
      return $dialog;
    }
  };
  var RuleView = class {
    option;
    constructor(option) {
      this.option = option;
    }
    async showView(filterCallBack) {
      const $popsConfirm = __pops__.confirm({
        title: {
          text: this.option.title,
          position: "center",
        },
        content: {
          text: `
        <div class="rule-view-search-container">
          <div class="pops-panel-select pops-user-select-none" data-mode="native" style="min-width: 50px;">
            <select class="select-rule-status">
            </select>
          </div>
          <div class="pops-panel-select pops-user-select-none" data-mode="native" style="min-width: 50px;">
            <select class="select-rule-value">
            </select>
          </div>
          <div class="pops-panel-input pops-user-select-none">
            <div class="pops-panel-input_inner">
                <input type="text" placeholder="">
            </div>
          </div>
        </div>
        <div class="rule-view-container"></div>
        `,
          html: true,
        },
        style: `
      ${__pops__.config.cssText.panelCSS}

      .rule-view-search-container{
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
      }
      .rule-view-search-container .pops-panel-select{
        min-width: fit-content;
        max-width: 60px;
      }
      .rule-view-search-container .pops-panel-select select{
        width: 100%;
        min-width: auto;
      }
      .rule-view-search-container .pops-panel-input{
        width: 100%;
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
      `,
        btn: {
          merge: true,
          reverse: false,
          position: "space-between",
          ok: {
            enable: this.option?.bottomControls?.add?.enable || true,
            type: "primary",
            text: "添加",
            callback: async () => {
              this.showEditView(false, await this.option.getAddData(), $popsConfirm.$shadowRoot);
            },
          },
          close: {
            enable: true,
            callback() {
              $popsConfirm.close();
            },
          },
          cancel: { enable: false },
          other: {
            enable: this.option?.bottomControls?.clear?.enable || true,
            type: "xiaomi-primary",
            text: `清空所有(${(await this.option.data()).length})`,
            callback: () => {
              const $askDialog = __pops__.confirm({
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
                    callback: async () => {
                      log.success("清空所有");
                      if (typeof this.option?.bottomControls?.clear?.callback === "function")
                        this.option.bottomControls.clear.callback();
                      if ((await this.option.data()).length) {
                        qmsg.default.error("清理失败");
                        return;
                      } else qmsg.default.success("清理成功");
                      await this.updateDeleteAllBtnText($popsConfirm.$shadowRoot);
                      this.clearContent($popsConfirm.$shadowRoot);
                      $askDialog.close();
                    },
                  },
                  cancel: {
                    text: "取消",
                    enable: true,
                  },
                },
                mask: { enable: true },
                width: "300px",
                height: "200px",
              });
            },
          },
        },
        mask: { enable: true },
        width: window.innerWidth > 500 ? "500px" : "88vw",
        height: window.innerHeight > 500 ? "500px" : "80vh",
      });
      const { $searchContainer, $externalSelect, $ruleValueSelect, $searchInput } = this.parseViewElement(
        $popsConfirm.$shadowRoot
      );
      if (this.option.bottomControls?.filter?.enable) {
        let externalSelectInfo = null;
        let ruleValueSelectInfo = null;
        if (Array.isArray(this.option.bottomControls?.filter?.option))
          domUtils.append(
            $externalSelect,
            this.option.bottomControls?.filter?.option.map((option) => {
              const $option = domUtils.createElement("option", { innerText: option.name });
              Reflect.set($option, "data-value", option);
              return $option;
            })
          );
        if (Array.isArray(this.option.bottomControls?.filter?.inputOption))
          domUtils.append(
            $ruleValueSelect,
            this.option.bottomControls?.filter?.inputOption.map((option) => {
              const $option = domUtils.createElement("option", { innerText: option.name });
              Reflect.set($option, "data-value", option);
              return $option;
            })
          );
        domUtils.on($externalSelect, "change", async () => {
          const $isSelectedElement = $externalSelect[$externalSelect.selectedIndex];
          const selectInfo = Reflect.get($isSelectedElement, "data-value");
          if (typeof selectInfo?.selectedCallBack === "function") selectInfo.selectedCallBack(selectInfo);
          externalSelectInfo = selectInfo;
          await execFilter(false);
        });
        domUtils.on($ruleValueSelect, "change", async () => {
          const $isSelectedElement = $ruleValueSelect[$ruleValueSelect.selectedIndex];
          const selectInfo = Reflect.get($isSelectedElement, "data-value");
          if (typeof selectInfo?.selectedCallBack === "function") selectInfo.selectedCallBack(selectInfo);
          ruleValueSelectInfo = selectInfo;
          await execFilter(false);
        });
        domUtils.onInput(
          $searchInput,
          utils.debounce(async () => {
            await execFilter(false);
          })
        );
        const updateSelectData = () => {
          const $externalSelected = $externalSelect[$externalSelect.selectedIndex];
          externalSelectInfo = Reflect.get($externalSelected, "data-value");
          const $ruleValueSelected = $ruleValueSelect[$ruleValueSelect.selectedIndex];
          ruleValueSelectInfo = Reflect.get($ruleValueSelected, "data-value");
        };
        const execFilter = async (isUpdateSelectData) => {
          this.clearContent($popsConfirm.$shadowRoot);
          if (isUpdateSelectData) updateSelectData();
          const allData = await this.option.data();
          const filteredData = [];
          const searchText = domUtils.val($searchInput);
          for (let index = 0; index < allData.length; index++) {
            const item = allData[index];
            if (typeof filterCallBack === "function") {
              const flag = await filterCallBack(item);
              if (typeof flag === "boolean" && !flag) continue;
            }
            if (externalSelectInfo) {
              const externalFilterResult = await externalSelectInfo?.filterCallBack?.(item);
              if (typeof externalFilterResult === "boolean" && !externalFilterResult) continue;
            }
            if (ruleValueSelectInfo) {
              let flag = true;
              if (searchText === "") flag = true;
              else flag = false;
              if (!flag) flag = await ruleValueSelectInfo?.filterCallBack?.(item, searchText);
              if (!flag) continue;
            }
            filteredData.push(item);
          }
          await this.appendRuleItemElement($popsConfirm.$shadowRoot, filteredData);
        };
        if (typeof filterCallBack === "object" && filterCallBack != null) {
          let externalIndex;
          if (typeof filterCallBack.external === "number") externalIndex = filterCallBack.external;
          else
            externalIndex = Array.from($externalSelect.options).findIndex((option) => {
              return Reflect.get(option, "data-value").value === filterCallBack.external;
            });
          if (externalIndex !== -1) $externalSelect.selectedIndex = externalIndex;
          let ruleIndex;
          if (typeof filterCallBack.rule === "number") ruleIndex = filterCallBack.rule;
          else
            ruleIndex = Array.from($ruleValueSelect.options).findIndex((option) => {
              return Reflect.get(option, "data-value").value === filterCallBack.rule;
            });
          if (ruleIndex !== -1) $ruleValueSelect.selectedIndex = ruleIndex;
        }
        await execFilter(true);
      } else domUtils.hide($searchContainer, false);
    }
    showEditView(isEdit, editData, $parentShadowRoot, $editRuleItemElement, updateDataCallBack, submitCallBack) {
      let dialogCloseCallBack = async (isSubmit) => {
        if (isSubmit) {
          if (typeof submitCallBack === "function") submitCallBack(await this.option.getData(editData));
        } else {
          if (!isEdit) await this.option.deleteData(editData);
          if (typeof updateDataCallBack === "function") updateDataCallBack(await this.option.getData(editData));
        }
      };
      new RuleEditView({
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
            text: isEdit ? "修改" : "添加",
          },
          cancel: {
            callback: async (detail) => {
              detail.close();
              await dialogCloseCallBack(false);
            },
          },
          close: {
            callback: async (detail) => {
              detail.close();
              await dialogCloseCallBack(false);
            },
          },
        },
        onsubmit: async ($form, data) => {
          let result = await this.option.itemControls.edit.onsubmit($form, isEdit, data);
          if (result.success) {
            if (isEdit) {
              qmsg.default.success("修改成功");
              if ($parentShadowRoot)
                await this.updateRuleItemElement(result.data, $editRuleItemElement, $parentShadowRoot);
            } else if ($parentShadowRoot) await this.appendRuleItemElement($parentShadowRoot, result.data);
          } else if (isEdit) log.error("修改失败");
          return result;
        },
        style: this.option.itemControls.edit.style,
        width: this.option.itemControls.edit.width,
        height: this.option.itemControls.edit.height,
      }).showView();
    }
    parseViewElement($shadowRoot) {
      const $container = $shadowRoot.querySelector(".rule-view-container");
      const $deleteBtn = $shadowRoot.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");
      const $searchContainer = $shadowRoot.querySelector(".rule-view-search-container");
      return {
        $container,
        $deleteBtn,
        $searchContainer,
        $externalSelect: $searchContainer.querySelector(".pops-panel-select .select-rule-status"),
        $ruleValueSelect: $searchContainer.querySelector(".pops-panel-select .select-rule-value"),
        $searchInput: $searchContainer.querySelector(".pops-panel-input input"),
      };
    }
    parseRuleItemElement($ruleElement) {
      const $enable = $ruleElement.querySelector(".rule-controls-enable");
      return {
        $enable,
        $enableSwitch: $enable.querySelector(".pops-panel-switch"),
        $enableSwitchInput: $enable.querySelector(".pops-panel-switch__input"),
        $enableSwitchCore: $enable.querySelector(".pops-panel-switch__core"),
        $edit: $ruleElement.querySelector(".rule-controls-edit"),
        $delete: $ruleElement.querySelector(".rule-controls-delete"),
        data: Reflect.get($ruleElement, "data-rule"),
      };
    }
    async createRuleItemElement(data, $shadowRoot) {
      const name = await this.option.getDataItemName(data);
      const $ruleItem = domUtils.createElement("div", {
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
					${__pops__.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${__pops__.config.iconSVG.delete}
				</div>
			</div>
			`,
      });
      Reflect.set($ruleItem, "data-rule", data);
      const switchCheckedClassName = "pops-panel-switch-is-checked";
      const { $enable, $enableSwitch, $enableSwitchCore, $enableSwitchInput, $delete, $edit } =
        this.parseRuleItemElement($ruleItem);
      if (this.option.itemControls.enable.enable) {
        domUtils.on($enableSwitchCore, "click", async () => {
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
        if (await this.option.itemControls.enable.getEnable(data)) $enableSwitch.classList.add(switchCheckedClassName);
      } else $enable.remove();
      if (this.option.itemControls.edit.enable)
        domUtils.on($edit, "click", (event) => {
          domUtils.preventEvent(event);
          this.showEditView(true, data, $shadowRoot, $ruleItem, (newData) => {
            data = null;
            data = newData;
          });
        });
      else $edit.remove();
      if (this.option.itemControls.delete.enable)
        domUtils.on($delete, "click", (event) => {
          domUtils.preventEvent(event);
          const $askDialog = __pops__.confirm({
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
                callback: async () => {
                  log.success("删除数据");
                  if (await this.option.itemControls.delete.deleteCallBack(data)) {
                    qmsg.default.success("成功删除该数据");
                    $ruleItem.remove();
                    await this.updateDeleteAllBtnText($shadowRoot);
                    $askDialog.close();
                  } else qmsg.default.error("删除该数据失败");
                },
              },
              cancel: {
                text: "取消",
                enable: true,
              },
            },
            mask: { enable: true },
            width: "300px",
            height: "200px",
          });
        });
      else $delete.remove();
      return $ruleItem;
    }
    async appendRuleItemElement($shadowRoot, data) {
      const { $container } = this.parseViewElement($shadowRoot);
      const $ruleItem = [];
      const iteratorData = Array.isArray(data) ? data : [data];
      for (let index = 0; index < iteratorData.length; index++) {
        const item = iteratorData[index];
        const $item = await this.createRuleItemElement(item, $shadowRoot);
        $ruleItem.push($item);
      }
      domUtils.append($container, $ruleItem);
      await this.updateDeleteAllBtnText($shadowRoot);
      return $ruleItem;
    }
    async updateRuleContaienrElement($shadowRoot) {
      this.clearContent($shadowRoot);
      const data = await this.option.data();
      await this.appendRuleItemElement($shadowRoot, data);
      await this.updateDeleteAllBtnText($shadowRoot);
    }
    async updateRuleItemElement(data, $oldRuleItem, $shadowRoot) {
      const $newRuleItem = await this.createRuleItemElement(data, $shadowRoot);
      $oldRuleItem.after($newRuleItem);
      $oldRuleItem.remove();
    }
    clearContent($shadowRoot) {
      const { $container } = this.parseViewElement($shadowRoot);
      domUtils.html($container, "");
    }
    setDeleteBtnText($shadowRoot, text, isHTML = false) {
      const { $deleteBtn } = this.parseViewElement($shadowRoot);
      if (isHTML) domUtils.html($deleteBtn, text);
      else domUtils.text($deleteBtn, text);
    }
    async updateDeleteAllBtnText($shadowRoot) {
      let data = await this.option.data();
      this.setDeleteBtnText($shadowRoot, `清空所有(${data.length})`);
    }
  };
  var M3U8Util = {
    duration2Text(duration) {
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor((duration % 3600) / 60);
      const secs = parseInt((duration % 60).toString());
      return [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        secs.toString().padStart(2, "0"),
      ].join(":");
    },
    similar(sourceText, targetText) {
      if (!sourceText || !targetText) return 0;
      var l = sourceText.length > targetText.length ? sourceText.length : targetText.length;
      var n = sourceText.length;
      var m = targetText.length;
      var d = [];
      var min = function (a, b, c) {
        return a < b ? (a < c ? a : c) : b < c ? b : c;
      };
      var i, j, si, tj, cost;
      if (n === 0) return m;
      if (m === 0) return n;
      for (i = 0; i <= n; i++) {
        d[i] = [];
        d[i][0] = i;
      }
      for (j = 0; j <= m; j++) d[0][j] = j;
      for (i = 1; i <= n; i++) {
        si = sourceText.charAt(i - 1);
        for (j = 1; j <= m; j++) {
          tj = targetText.charAt(j - 1);
          if (si === tj) cost = 0;
          else cost = 1;
          d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        }
      }
      return 1 - d[n][m] / l;
    },
  };
  var M3U8Menu = {
    updateISMatchedRuleMenu() {
      let option = {
        key: "matched-rule-count",
        text: `🔧 当前页面执行规则数量： ${M3U8Rule.$data.matchedRule.length}`,
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: () => {},
      };
      MenuRegister.update(option);
    },
    updateIsFilterAdsDurationInfoMenu(durationTotal) {
      let option = {
        key: "is-filter-segment-duration",
        text: `🍵 已过滤时长：${durationTotal}s`,
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: () => {},
      };
      MenuRegister.update(option);
    },
  };
  var M3U8Parser = {
    parse_EXTINF(EXTINF_Text, EXTINF_Next_Line_Text, currentDuration) {
      let duration = Number(EXTINF_Text.replace(/(^#EXTINF:\s*|,)/g, ""));
      let startDuration = currentDuration;
      let endDuration = currentDuration + duration;
      return {
        filePath: EXTINF_Next_Line_Text.trim(),
        startDuration,
        endDuration,
        duration,
      };
    },
  };
  var calcIsFiterDuration = (segmentInfo) => {
    M3U8Filter.$data.isFilterDuration += segmentInfo.duration;
    M3U8Menu.updateIsFilterAdsDurationInfoMenu(M3U8Filter.$data.isFilterDuration);
  };
  var M3U8Filter = {
    $data: { isFilterDuration: 0 },
    filterAdsWithFilePathLength(
      m3u8Text,
      config = {
        handlerFilePath(filePath) {
          return filePath;
        },
      }
    ) {
      let m3u8Split = m3u8Text.split("\n");
      let segmentsParseInfo = new utils.Dictionary();
      let durationTotal = 0;
      for (let index = 0; index < m3u8Split.length; index++) {
        const m3u8Info = m3u8Split[index].trim();
        if (!m3u8Info.startsWith("#EXTINF:")) continue;
        let { duration, startDuration, endDuration, filePath } = M3U8Parser.parse_EXTINF(
          m3u8Info,
          m3u8Split[index + 1],
          durationTotal
        );
        if (config && typeof config.handlerFilePath === "function") {
          let handlerFilePath = config.handlerFilePath(filePath);
          if (typeof handlerFilePath === "string") filePath = handlerFilePath;
        }
        durationTotal += duration;
        let filePathLength = filePath.length.toString();
        let segmentInfo = segmentsParseInfo.get(filePathLength) || [];
        segmentInfo.push({
          filePath,
          startDuration,
          endDuration,
          duration,
          index,
        });
        segmentsParseInfo.set(filePathLength, segmentInfo);
        index++;
      }
      let needFilterSegments = [];
      segmentsParseInfo.forEach((value, key) => {
        needFilterSegments.push({
          filePathLength: key,
          segmentsInfoList: value,
        });
      });
      needFilterSegments = utils.sortListByProperty(needFilterSegments, (item) => item.segmentsInfoList.length, true);
      needFilterSegments.splice(0, 1);
      if (needFilterSegments.length) {
        let adsSegmentIndexList = [];
        needFilterSegments.forEach((item) => {
          item.segmentsInfoList.forEach((segmentInfo) => {
            adsSegmentIndexList.push({
              index: segmentInfo.index,
              data: segmentInfo,
            });
          });
        });
        let indexOffset = 0;
        for (let index = 0; index < m3u8Split.length; index++) {
          let findIndex = adsSegmentIndexList.findIndex((item) => item.index === index + indexOffset);
          if (findIndex != -1) {
            let adsSegmentInfo = adsSegmentIndexList[findIndex];
            log.info(
              `通杀1：过滤广告片段 ==> 索引：${index + indexOffset} 文件名：${adsSegmentInfo.data.filePath} 开始：${M3U8Util.duration2Text(adsSegmentInfo.data.startDuration)} 持续时长：${adsSegmentInfo.data.duration}s`
            );
            m3u8Split.splice(index, 2);
            index -= 2;
            adsSegmentIndexList.splice(findIndex, 1);
            indexOffset = indexOffset + 2;
          }
        }
      }
      needFilterSegments.forEach((item) => {
        item.segmentsInfoList.forEach((segmentInfo) => {
          calcIsFiterDuration(segmentInfo);
        });
      });
      return {
        m3u8Text: m3u8Split.join("\n"),
        filterInfo: needFilterSegments,
      };
    },
    filterAdsWithFilePathSimilar(
      m3u8Text,
      config = {
        similarCompareValue: 0.35,
        includePercent: 0.5,
        handlerFilePath(filePath) {
          return filePath;
        },
      }
    ) {
      let m3u8Split = m3u8Text.split("\n");
      let segmentsParseInfoList = [];
      let durationTotal = 0;
      for (let index = 0; index < m3u8Split.length; index++) {
        const m3u8Info = m3u8Split[index].trim();
        if (!m3u8Info.startsWith("#EXTINF:")) continue;
        let { duration, startDuration, endDuration, filePath } = M3U8Parser.parse_EXTINF(
          m3u8Info,
          m3u8Split[index + 1],
          durationTotal
        );
        if (config && typeof config.handlerFilePath === "function") {
          let handlerFilePath = config.handlerFilePath(filePath);
          if (typeof handlerFilePath === "string") filePath = handlerFilePath;
        }
        durationTotal += duration;
        segmentsParseInfoList.push({
          filePath,
          startDuration,
          endDuration,
          duration,
          index,
        });
        index++;
      }
      let isFilterSegmentsInfoList = [];
      let indexOffset = 0;
      for (let index = 0; index < segmentsParseInfoList.length; index++) {
        const segmentInfo = segmentsParseInfoList[index];
        let isAdsSegment = true;
        let similarCount = 0;
        let iteratorSegmentsParseInfoList = segmentsParseInfoList;
        for (let iteratorIndex = 0; iteratorIndex < iteratorSegmentsParseInfoList.length; iteratorIndex++) {
          const compareSegmentInfo = iteratorSegmentsParseInfoList[iteratorIndex];
          if (M3U8Util.similar(segmentInfo.filePath, compareSegmentInfo.filePath) >= config.similarCompareValue)
            similarCount++;
          if (similarCount / iteratorSegmentsParseInfoList.length > config.includePercent) {
            isAdsSegment = false;
            break;
          }
        }
        if (isAdsSegment) {
          isFilterSegmentsInfoList.push(segmentInfo);
          log.info(
            `通杀2：过滤广告片段 ==> 索引：${segmentInfo.index} 文件名：${segmentInfo.filePath} 开始：${M3U8Util.duration2Text(segmentInfo.startDuration)} 持续时长：${segmentInfo.duration}s`
          );
          m3u8Split.splice(segmentInfo.index - indexOffset, 2);
          indexOffset += 2;
        }
      }
      isFilterSegmentsInfoList.forEach((segmentInfo) => {
        calcIsFiterDuration(segmentInfo);
      });
      return {
        m3u8Text: m3u8Split.join("\n"),
        filterInfo: isFilterSegmentsInfoList,
      };
    },
  };
  var M3U8Rule = {
    $key: { STORAGE_KEY: "m3u8-rule" },
    $data: { matchedRule: [] },
    init() {
      let allData = this.getData();
      this.registerMenu(allData);
      for (let index = 0; index < allData.length; index++)
        try {
          const ruleOption = allData[index];
          if (ruleOption.enable && window.location.href.match(new RegExp(ruleOption.data.url)))
            this.$data.matchedRule.push(ruleOption);
        } catch (error) {
          log.error("m3u8过滤器 ==> 规则初始化出错", error);
        }
      if (this.$data.matchedRule.length) {
        log.info("m3u8过滤器 ==> 当前网站执行的规则：", this.$data.matchedRule);
        NetWorkHook.hook();
        M3U8Menu.updateISMatchedRuleMenu();
      }
    },
    registerMenu(allData) {
      MenuRegister.update([
        {
          key: "m3u8-rule",
          text: `⚙ 自定义规则（${allData.length}条）`,
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.showView();
          },
        },
        {
          key: "m3u8-export-rule",
          text: `⚙ 规则导出`,
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.exportRule("m3u8-filter-rule.json");
          },
        },
        {
          key: "m3u8-import-rule",
          text: "⚙ 规则导入",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.importRule();
          },
        },
      ]);
    },
    getTemplateData() {
      return {
        uuid: utils.generateUUID(),
        enable: true,
        name: "",
        data: {
          url: "",
          commonFilterAdsSegmentsFilePathLength: true,
          commonFilterAdsSegmentsFilePathSimilar: false,
          ownFilterCode: "",
        },
      };
    },
    showView() {
      let panelHandlerComponents = __pops__.fn.PanelHandlerComponents();
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
      new RuleView({
        title: "m3u8自定义规则",
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
          return this.getData().find((item) => item.uuid === data.uuid) ?? data;
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
            },
          },
          edit: {
            enable: true,
            getView: (data, isEdit) => {
              let $fragment = document.createDocumentFragment();
              if (!isEdit) data = this.getTemplateData();
              let enable_template = UISwitch("启用", "enable", true);
              Reflect.set(enable_template.props, PROPS_STORAGE_API, generateStorageApi(data));
              let $enable = panelHandlerComponents.createSectionContainerItem_switch(enable_template).$el;
              let name_template = UIInput("规则名称", "name", "", "", void 0, "必填");
              Reflect.set(name_template.props, PROPS_STORAGE_API, generateStorageApi(data));
              let $name = panelHandlerComponents.createSectionContainerItem_input(name_template).$el;
              let data_url_template = UIInput("匹配网址", "url", "", "", void 0, "必填，可正则，注意转义");
              Reflect.set(data_url_template.props, PROPS_STORAGE_API, generateStorageApi(data.data));
              let $data_url = panelHandlerComponents.createSectionContainerItem_input(data_url_template).$el;
              let data_commonFilterAdsSegmentsFilePathLength_template = UISwitch(
                "广告通杀1",
                "commonFilterAdsSegmentsFilePathLength",
                true,
                void 0,
                "使用文件名称长度比较"
              );
              Reflect.set(
                data_commonFilterAdsSegmentsFilePathLength_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $data_commonFilterAdsSegmentsFilePathLength =
                panelHandlerComponents.createSectionContainerItem_switch(
                  data_commonFilterAdsSegmentsFilePathLength_template
                ).$el;
              let data_commonFilterAdsSegmentsFilePathSimilar_template = UISwitch(
                "广告通杀2",
                "commonFilterAdsSegmentsFilePathSimilar",
                false,
                void 0,
                "使用文件名称相似度比较"
              );
              Reflect.set(
                data_commonFilterAdsSegmentsFilePathSimilar_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $data_commonFilterAdsSegmentsFilePathSimilar =
                panelHandlerComponents.createSectionContainerItem_switch(
                  data_commonFilterAdsSegmentsFilePathSimilar_template
                ).$el;
              let data_ownFilterCode_template = UITextArea(
                "自定义过滤js",
                "ownFilterCode",
                "",
                "",
                void 0,
                "参数：\n    [m3u8Text]：需要处理的m3u8字符串\n返回：[String]\n\n例如：\nm3u8Text = m3u8Text.replace('','');\nreturn m3u8Text;\n"
              );
              Reflect.set(data_ownFilterCode_template.props, PROPS_STORAGE_API, generateStorageApi(data.data));
              let $data_ownFilterCode =
                panelHandlerComponents.createSectionContainerItem_textarea(data_ownFilterCode_template).$el;
              $fragment.appendChild($enable);
              $fragment.appendChild($name);
              $fragment.appendChild($data_url);
              $fragment.appendChild($data_commonFilterAdsSegmentsFilePathLength);
              $fragment.appendChild($data_commonFilterAdsSegmentsFilePathSimilar);
              $fragment.appendChild($data_ownFilterCode);
              return $fragment;
            },
            onsubmit: ($form, isEdit, editData) => {
              let $ulist_li = $form.querySelectorAll(".rule-form-ulist > li");
              let data = this.getTemplateData();
              if (isEdit) data.uuid = editData.uuid;
              $ulist_li.forEach(($li) => {
                let viewConfig = Reflect.get($li, panelHandlerComponents.$data.nodeStoreConfigKey);
                let attrs = Reflect.get(viewConfig, "attributes");
                let storageApi = Reflect.get($li, PROPS_STORAGE_API);
                let key = Reflect.get(attrs, ATTRIBUTE_KEY);
                let defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
                let value = storageApi.get(key, defaultValue);
                if (Reflect.has(data, key)) Reflect.set(data, key, value);
                else if (Reflect.has(data.data, key)) Reflect.set(data.data, key, value);
                else log.error(`${key}不在数据中`);
              });
              if (data.name.trim() === "") {
                qmsg.default.error("规则名称不能为空");
                return {
                  success: false,
                  data,
                };
              }
              if (data.data.url.trim() === "") {
                qmsg.default.error("匹配网址不能为空");
                return {
                  success: false,
                  data,
                };
              }
              if (isEdit)
                return {
                  success: this.updateData(data),
                  data,
                };
              else
                return {
                  success: this.addData(data),
                  data,
                };
            },
            style: `
                        li[data-key="ownFilterCode"]{
                            gap: 30px;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea{
                            flex: 1;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea textarea{
                            height: 300px;
                        }
                    `,
          },
          delete: {
            enable: true,
            deleteCallBack: (data) => {
              return this.deleteData(data);
            },
          },
        },
        bottomControls: {
          filter: {
            enable: true,
            option: [
              {
                name: "启用",
                value: "enable",
                filterCallBack(data) {
                  return data.enable;
                },
              },
              {
                name: "未启用",
                value: "notEnable",
                filterCallBack(data) {
                  return !data.enable;
                },
              },
              {
                name: "当前网址运行的规则",
                value: "currentUrl",
                filterCallBack(data) {
                  try {
                    return Boolean(window.location.href.match(new RegExp(data.data.url)));
                  } catch (error) {
                    return false;
                  }
                },
              },
            ],
            inputOption: [
              {
                name: "规则名称",
                value: "name",
                filterCallBack(data, searchText) {
                  return Boolean(data.name.match(searchText));
                },
              },
              {
                name: "网址",
                value: "url",
                filterCallBack(data, searchText) {
                  return Boolean(data.data.url.match(searchText));
                },
              },
            ],
          },
        },
      }).showView();
    },
    runRule(m3u8Text) {
      let handlerM3U8Text = m3u8Text;
      for (let index = 0; index < this.$data.matchedRule.length; index++)
        try {
          const RuleOptionData = this.$data.matchedRule[index].data;
          if (RuleOptionData.commonFilterAdsSegmentsFilePathLength) {
            const { filterInfo, m3u8Text: __handler_m3u8_text__ } =
              M3U8Filter.filterAdsWithFilePathLength(handlerM3U8Text);
            handlerM3U8Text = __handler_m3u8_text__;
          }
          if (RuleOptionData.commonFilterAdsSegmentsFilePathSimilar) {
            const { filterInfo, m3u8Text: __handler_m3u8_text__ } =
              M3U8Filter.filterAdsWithFilePathSimilar(handlerM3U8Text);
            handlerM3U8Text = __handler_m3u8_text__;
          }
          if (RuleOptionData.ownFilterCode.trim() !== "") {
            let ownFilter_m3u8_text = new Function(
              "m3u8Text",
              "M3U8Filter",
              "M3U8Parser",
              RuleOptionData.ownFilterCode
            )(handlerM3U8Text, M3U8Filter, M3U8Parser);
            if (typeof ownFilter_m3u8_text === "string") handlerM3U8Text = ownFilter_m3u8_text;
            else log.error("m3u8过滤器 ==> 自定义过滤js代码执行结果不是字符串", ownFilter_m3u8_text);
          }
          break;
        } catch (error) {
          log.error("m3u8过滤器 ==> 执行m3u8文本过滤时出现异常", error);
        }
      return handlerM3U8Text;
    },
    getData() {
      return _GM_getValue(this.$key.STORAGE_KEY, []);
    },
    setData(data) {
      _GM_setValue(this.$key.STORAGE_KEY, data);
    },
    addData(data) {
      let localData = this.getData();
      if (localData.findIndex((item) => item.uuid == data.uuid) === -1) {
        localData.push(data);
        _GM_setValue(this.$key.STORAGE_KEY, localData);
        return true;
      } else return false;
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
      _GM_deleteValue(this.$key.STORAGE_KEY);
    },
    exportRule(fileName = "rule.json") {
      let allRule = this.getData();
      let blob = new Blob([JSON.stringify(allRule, null, 4)]);
      let blobUrl = window.URL.createObjectURL(blob);
      let $a = domUtils.createElement("a");
      $a.href = blobUrl;
      $a.download = fileName;
      $a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 1500);
    },
    importRule(importEndCallBack) {
      let $alert = __pops__.alert({
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
          if (allData.findIndex((it) => it.uuid === dataItem.uuid) !== -1) {
          } else addNewData.push(dataItem);
        }
        allData = allData.concat(addNewData);
        this.setData(allData);
        qmsg.default.success(`共 ${data.length} 条规则，新增 ${addNewData.length} 条`);
        importEndCallBack?.();
      };
      let importFile = (subscribeText) => {
        return new Promise((resolve) => {
          let data = utils.toJSON(subscribeText);
          if (!Array.isArray(data)) {
            log.error(data);
            qmsg.default.error("导入失败，格式不符合（不是数组）", { consoleLogContent: true });
            resolve(false);
            return;
          }
          if (!data.length) {
            qmsg.default.error("导入失败，解析出的数据为空", { consoleLogContent: true });
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
        domUtils.on($input, ["propertychange", "input"], (event) => {
          if (!$input.files?.length) return;
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
        let $prompt = __pops__.prompt({
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
              callback(details, event) {
                details.close();
              },
            },
            ok: {
              text: "导入",
              callback: async (eventDetails, event) => {
                let url = eventDetails.text;
                if (utils.isNull(url)) {
                  qmsg.default.error("请填入完整的url");
                  return;
                }
                let $loading = qmsg.default.loading("正在获取配置...");
                let response = await httpx.get(url, { allowInterceptConfig: false });
                $loading.close();
                if (!response.status) {
                  log.error(response);
                  qmsg.default.error("获取配置失败", { consoleLogContent: true });
                  return;
                }
                if (!(await importFile(response.data.responseText))) return;
                eventDetails.close();
              },
            },
            cancel: { enable: false },
          },
          mask: { enable: true },
          drag: true,
          width: PanelUISize.info.width,
          height: "auto",
        });
        let $promptInput = $prompt.$shadowRoot.querySelector("input");
        let $promptOk = $prompt.$shadowRoot.querySelector(".pops-prompt-btn-ok");
        domUtils.on($promptInput, ["input", "propertychange"], (event) => {
          if (domUtils.val($promptInput) === "") domUtils.attr($promptOk, "disabled", "true");
          else domUtils.removeAttr($promptOk, "disabled");
        });
        domUtils.onKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
          if (keyName === "Enter" && otherCodeList.length === 0) {
            if (domUtils.val($promptInput) !== "") domUtils.emit($promptOk, "click");
          }
        });
        domUtils.emit($promptInput, "input");
      });
      domUtils.on($clipboard, "click", async (event) => {
        domUtils.preventEvent(event);
        $alert.close();
        let clipboardInfo = await utils.getClipboardInfo();
        if (clipboardInfo.error != null) {
          qmsg.default.error(clipboardInfo.error.toString());
          return;
        }
        if (clipboardInfo.content.trim() === "") {
          qmsg.default.warning("获取到的剪贴板内容为空");
          return;
        }
        if (!(await importFile(clipboardInfo.content))) return;
      });
    },
  };
  var Component_Common = {
    id: "component-common",
    title: "通用",
    views: [
      {
        text: "Toast配置",
        type: "container",
        views: [
          UISelect(
            "Toast位置",
            "qmsg-config-position",
            "bottom",
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
            (isSelectedInfo) => {
              log.info("设置当前Qmsg弹出位置" + isSelectedInfo.text);
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
            "限制Toast显示的数量"
          ),
          UISwitch("逆序弹出", "qmsg-config-showreverse", false, void 0, "修改Toast弹出的顺序"),
        ],
      },
      {
        text: "Cookie配置",
        type: "container",
        views: [
          UISwitch("启用", "httpx-use-cookie-enable", false, void 0, "启用后，将根据下面的配置进行添加cookie"),
          UISwitch(
            "使用document.cookie",
            "httpx-use-document-cookie",
            false,
            void 0,
            "自动根据请求的域名来设置对应的cookie"
          ),
        ],
      },
    ],
  };
  PanelContent.addContentConfig([Component_Common]);
  PanelMenu.deleteMenuOption();
  Panel.init();
  M3U8Rule.init();
})(Qmsg, DOMUtils, pops, Utils);
