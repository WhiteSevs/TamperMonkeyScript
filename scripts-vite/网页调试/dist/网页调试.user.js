// ==UserScript==
// @name         网页调试
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.8.21
// @author       WhiteSevs
// @description  内置多种网页调试工具，包括：Eruda、vConsole、PageSpy、Chii，可在设置菜单中进行详细配置
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADbhJREFUeF7tnXmQHFUdx7+/noWkypiCgKVQIAuZ7R43UgGS6clRlkFEjAUIyiFHFYYjImIUEgiHAsoRiBAEjJyBSOQoghGilIligZaBnR4CVRGSfj0TKqUxeACW3Jrd/pnZzZLNZnfnve73Zrs3vX8mv/d7v9/395l39UXI/nZrBWh3yt5xpn+UaOt+6Az3B1n7gXj/7vyZtoDD19BibWHe4zUh1ry9u+gy4gEo5CfPCK3csQQ+DoAtU1gGXgGwnNlaVa12lGXapNVmRAJQKJQmhSGfBWAmAfk4xanDQExPUw7LfL+8No6vJLYdUQD0FD6cTaDZJsRm8D2WZd0zkkAYEQC054sTOi3MMVX4/jDVQSCyFgtRXmcCtGb6TD0AbW1TShaFD8rO7xrF/Rsxz/GrlRUafTbdVaoBsO3iUQR6uumq9emQwbODoHLvcMYQp+/UAuA47jlg3BcneW1tCZcJ4d2kzV8THaUSAKetOAdEtzVRp8ZdEZ8pROWhxobJskgdAIU291gm/CpZMvZEY4XWpA21jheTGNtgMaUKgHy+1J6zUAZ4TEJFfrMrpIm1WnlzQuPbJazUANDaOmP0qD3f+z2AaQkXd1Wu5Z0vr1+//n8Jj7M7vNQA4LS5N4IwPw2ignGTqHqXpSHWVACwfa+/BkAuDaIC6ArZmp6G6wipAMBpc5eDcFJKit8TJuNxUfVOTnrMiQeg0OaezoTUba+651fGGX7VezjJECQeAMdxnwNjapJFHCw2BjqCwEt07IkGIJ8vHZCz+K9pLH5vzGRZB/t+x6ak5pBoABzHPRmMx5IqnkxcxDzLr1aWytgOh02yAbCLiwG6YDiE0dUng5YGQXmWLn+6/SQdgBpA43Un3WR/m0TgHdzkPqW7kwagezgOMR+EQ7o3OaAaCI8IUf6xdG8Khu3t7WO6OseMjJszaY+xpm40jVsXKQBs272GgKsHqt82En4QBN41CrWVMs3nJ43PWbmalHHCjciC4/teoDtMHXVpCIDjlL4L5luHDJ7xPVH1rteZYKFQnMYh1U//Uv9HYXikX3vhWZ2JOI57HRhXDumTcIoQ3vKhbBoDYJfqV9/chsET5gvhLWxoJ2lg2+6JBKT6dqveVIlxul/1HpFMvaGZ0+beBMKlDQ0Za0XVmxwTAPcNAOMadtazMJgbBN4iGdtGNlIjTyMnCfl/As/zg8otOsIp2O4iBi6S9PVvEXhD1k5iBJAHoB4UMeb4Ve8OyQAzMwUFbNu9nYBvKzTRAYDkFNA3KuILhKjcqRBoZtpAAafNvROE85WE0jIFyCwCB4iKGOf7Ve9upYAz4wEVcBz3TrBi8buHYw2LwLqfobYbQ9WMQRcGQXlxVtfoChTs4k8Y9C1VD7Lb84ZrgN6Oo0IA5u+IauV21QQye8BxSreBeY6yFoyFoupJ3T0lDUC8kQAXB4E39FmCcpYju4Hiav9DMRi4Iwg8aWiUAIgDATFd4lfLN4/ssunJznGKPwLTvAje7hOBd55KO2UA4kCAFD9BoyJqHNvIN78SHhbCO0O170gAxIGAgCv9wLtBNdDdwd623esJuCJCrstF4J0SoV2828IjLwyJrhKifG2UgEdqG6et+EMQfT9CfpGL37NTjPkXGQJmrRdHYqYx/M2JZkQIIlbxtQDQMx0UbyDQ5RESyJpEVyB28bUB0ANB6WYCz42eT9ZSQQEtxdcKwPaFoerFCoWcM9PtCmgrvnYA6g4dx70LjG9k5TKigNbiGwGgB4LS/WBO7J2wRkpj3qn24hsDoBuCNvfnICgfTJjXMZU9GCm+UQB6ICg+g2jbm1RWyUjQzM+KauVII751nAMMFVgGgIayZQBoEDHNLjIA9FWvfpPEAN64/79tOx7V/pxD5CwyACJLt0tDEXhSR9+O7e4Chb4oFD1lACgKNoR5BsCu4kj9IqKWIGmLwAyADAAp4LMpIOpPvl+7bATQIGS2BtAg4nYX2RSQTQHZFNCPASlBov4GsykgqnJ92mVTgAYRsylgUBGzEWAAabJdgKYfXTYFaBAymwI0iJhNAdkUUFcg2wZm20CpNU+2BtA06mZrAA1CZmsADSJma4BsDZCtAQZmQGpOjPobzKaAqMplJ4EalNvVRbYLkNgFtLYettfolpbDdFSAia5O0m3haQWAmAe6l1G5RJ3IvVirld/q2/DDKaCQnzyDiS4C0fHKnlPSIJUA6NaWeSUx39r77uJuAAp2cS6DRvz7ezIAdtDU+0ZX6v7lW9YzukFLor8MgJ2rQhZPp4Lt3sLAxUksmO6YMgD6KUp0G9l26RcE/opusZPoLwOgX1Xq6wHHdutf5Ur8Fy51AJUBsIuKT1DBLi1gcCo+dBwXggyA/iMAFpJtT9qXkNsIYGxcgZPePgNgR4UY+AfRHm3d20DHmTwdbP0p6QWMG18GQB8FiSYKUV634yCo4O7DzHczk0vAgXHFTmL7DABsAvO6zhAXbtxY6f4kr+GLQe4qEI5JCgypBICxWlS9L5rS0CwAtvtLACeYCl7VbxoBINAKPyh/VTVXWXujANi2+zABp8kGY9oujQCA8ZCoemea0sYoAE6buwSEs00Fr+o3lQAAyt8AUNHFKAC27d5BwIUqAZm0TSMAql8AUdXPKACRP36gmoWkfRoBgML3fyRl2MnMLACOOx+MG6MEZqJNGgGQ/fpXVL0MA1A6CcxDfrw4auBR2qURAJlv/0XRoreNUQDa85MP77KsF+MEqLNtGgHoCmlCrVZer1OHvr6MApDPl8bmLP6PqeBV/aYRANmYVbVoyghQ78Sx3X8B2DdqgDrbyYqZlEfDGHglCLxP69Sgvy+jI0C9s4LtdjBQMpmErO+0AQDA2FvCmzYCJOl7QmkDwPQOoA6B8RHAtt3PEPBH2V+pSbv0AcBuEFQqJjUxDsD2dcDrAPYxmYiM71QBQPiLEN5BMnnFsWkSAKVlABu7oCErQKoAMHwNoGlrgO6FYFtpNhPfLVsoU3apAoBwihCe8UO0powAhcKUVg7DlwF8xFRxZfymCIDXR43+oHXdunXvyuQVx6YpANQDtO3SAwT+epxg47ZNEQBGLwH31bFpACThEbS0AEAhpvk17/m4wMu0bxoA23cDHoCiTGAmbNIAAINWBAZvAWv6SWDfDh2neCaYlpkorozPNAAQMh9drVaelslHh02TR4DiPwH6mI7Ao/hIAQDrROBNjJJb1DZNA8BximvBdETUQHW0SwEAz4jA+5yOXGV9NAUAp634ZBLePJICAEDg3/lB5QuyBYxrZxwAxy4uBuiCuIHqaJ8GALbnuUoE3kwdOTfyYRQA2y5eRqAFjYJo1v+nCAAw8Osg8I4zrY0xAIZ7xT+QcGkCYHv8T4jAO9EkBEYASMKhzwgBoH7B/nEhPGMv8NAOQD4/aXzOytXP/UebJDeK7xSOAN1pEvhRP6gYecROKwD5fH5UzhrnA2hVKVB9viPgfdOvqkkrAN1aGnpGUCsAjuM+B8ZUleIDtObd96yjN29+/n3HLi4DyNh9AwkBoPcSr/KwzsDPgsDTekFNGwAF213BgOKChXxQy1FCrNnSC43JncNwA0DAIj/w5tZzjfFyriUi8M5V+5ENbq0FAKfN/SkI31QM6gMrFxY3bHihvl7Y6c9xJh8PpkUAjVf0OaT58AFAa0DhdUJUVvUNMCoEDLo3CMqzdWgTGwDbLl1FUH+Zccj82Wq1MujNouPHFw9sabHmgXmOjkTrPoYBgLcYWDRx4kHXLV++vGugPKJCAEDLSBALgMi3ehGdIET5SZnCOk7pSDDPA/AlGfuhbJoMwJKukBbJPNYVFQIGLQ2C8qw4ukQGwHGmHA8OpYq4U4DMZ4tq5QHVoG27eB6B6iDYqm177ZsCAGM15XCr73urVeKMCgEBD/qBd5ZKX31tIwFg25NdC9ZKBj6u0jEDc4PAW6TSpq9t9zsNKXcOGF8DoPxNA6MAMFbDwnIhvCVR84sKQZwtojIA7YdM+mRXS24lAKXr1gS60Q/Kl0cVZ5eFYr50EohPAKF+0WScjF/tABD+gBBPdTE9JTPUy8QYFQIGPxpEOCxSAqC9vX3Prq1jVqq++s3kSdaECVPHdXZ2zkRIM0GYAmDQnYMGAOqHVS+BaJXVRU9tqHUYefQ9KgQAHhOBd6oMaL02SgAU7OICBim9V5iBjiDwFA+HVFLov4Wcvj/R1kPRRYeGhE8Q895E2HvbanysCLzPy3i27eJvAbxBwJsEvBWCNloWvdTZOe7lWu03/5XxEdcmKgQEXuAHlStk+5cG4FP5SUeElvUcQKNknQP4uwi8/RTsM9M+CkSFQOW+QmkAbLt4KoEeVanQ1s6uvV59dW1iXhChEntSbCNBQDhXdjEqDYDjuJeCcZOsMGRZB/t+xyZZ+8xucAVUIVB5rFwagELBPYZD7HSUOVjIVkhTN9TKHVlR9SmgAgExz/KrlaUyvUsDUH/fT4vFQaO9P4NOC4Ky0lQhE2hmI3sBid4hq3Oa76/9s4xm0gDUnTmOuxCMSwZzzODLg6CSmPcCygiQNptGIwGFdIxfK9d3MVJ/SgDUPQ7yjcHNILpaiPL9Ur1mRrEUsG33om3b0/qX3g7Y4Yi2gPhaIby7VJwrA1B3btvuRIv58JCo1QrDZzk3aq0Qa95W6TizjadA95TcwlPDEFPj1CASAPFCz1onSYH/A2cA4KVC+XrgAAAAAElFTkSuQmCC
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@734ba267afee2a5995d15dc419e754a19532cbf4/lib/Eruda/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@9f63667d501ec8df5bdb4af680f37793f393754f/lib/VConsole/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@b2f37e0ef04aafbccbdbd52733f795c2076acd87/lib/PageSpy/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.6.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.3.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.4.0/dist/index.umd.js
// @resource     Resource_erudaBenchmark       https://fastly.jsdelivr.net/npm/eruda-benchmark@2.0.1
// @resource     Resource_erudaCode            https://fastly.jsdelivr.net/npm/eruda-code@2.2.0
// @resource     Resource_erudaFeatures        https://fastly.jsdelivr.net/npm/eruda-features@2.1.0
// @resource     Resource_erudaGeolocation     https://fastly.jsdelivr.net/gh/WhiteSevs/eruda-geolocation@38b60386bcb6280de4cccac7b31169a2abdb2edf/eruda-geolocation.js
// @resource     Resource_erudaMonitor         https://fastly.jsdelivr.net/npm/eruda-monitor@1.1.2
// @resource     Resource_erudaOrientation     https://fastly.jsdelivr.net/npm/eruda-orientation@2.1.1
// @resource     Resource_erudaOutlinePlugin   https://fastly.jsdelivr.net/npm/eruda-outline-plugin@0.0.5
// @resource     Resource_erudaPixel           https://fastly.jsdelivr.net/npm/eruda-pixel@1.0.13
// @resource     Resource_erudaTiming          https://fastly.jsdelivr.net/npm/eruda-timing@2.0.1
// @resource     Resource_erudaTouches         https://fastly.jsdelivr.net/npm/eruda-touches@2.1.0
// @resource     Resource_erudaVue             https://fastly.jsdelivr.net/npm/eruda-vue@1.1.1
// @resource     Resource_vConsoleVueDevtools  https://fastly.jsdelivr.net/npm/vue-vconsole-devtools@1.0.9
// @connect      *
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (Qmsg, DOMUtils, Utils, pops) {
  'use strict';

  var _GM_deleteValue = /* @__PURE__ */ (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
  var _GM_getResourceText = /* @__PURE__ */ (() => typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setClipboard = /* @__PURE__ */ (() => typeof GM_setClipboard != "undefined" ? GM_setClipboard : void 0)();
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
  DOMUtils.selector.bind(DOMUtils);
  DOMUtils.selectorAll.bind(DOMUtils);
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
    },
    /**
     * 信息界面，一般用于提示信息之类
     */
    info: {
      get width() {
        return window.innerWidth < 350 ? "88vw" : "350px";
      },
      get height() {
        return window.innerHeight < 250 ? "88vh" : "250px";
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
  const unsafeWin = _unsafeWindow;
  const console = unsafeWin.console;
  const copy = _GM_setClipboard || utils.setClip.bind(utils);
  const WebSiteDebugUtil = {
    /**
     * 执行插件代码
     * @param args
     */
    evalPlugin: (...args) => {
      if (args.length === 0) {
        return;
      }
      const codeText = args.join("\n");
      return unsafeWin.eval(`
(()=>{
	try{
		var exports=void 0;
	}catch(error){
		console.warn(error);
	}

	try{
		var module=void 0;
	}catch(error){
		console.warn(error);
	}

	try{
		var define=void 0;
	}catch(error){
		console.warn(error);
	}
		
	${codeText}
		
})()
`);
    }
  };
  const versionJSON = '{\n  "eruda": {\n    "version": "3.4.3",\n    "plugin": {\n      "eruda-monitor": "1.1.2",\n      "eruda-features": "2.1.0",\n      "eruda-timing": "2.0.1",\n      "eruda-code": "2.2.0",\n      "eruda-benchmark": "2.0.1",\n      "eruda-orientation": "2.1.1",\n      "eruda-vue": "1.1.1",\n      "eruda-touches": "2.1.0",\n      "eruda-outline-plugin": "0.0.5",\n      "eruda-pixel": "1.0.13"\n    }\n  },\n  "vconsole": {\n    "version": "3.15.1",\n    "plugin": {\n      "vue-vconsole-devtools": "1.0.9"\n    }\n  },\n  "@huolala-tech/page-spy-browser": {\n    "version": "2.2.5"\n  }\n}';
  const DebugToolVersionConfig = JSON.parse(versionJSON);
  const DebugToolConfig = {
    eruda: {
      /** 版本号 */
      version: DebugToolVersionConfig.eruda.version,
      /** 项目地址 */
      homeUrl: "https://github.com/liriliri/eruda",
      /** 设置文档 */
      settingDocUrl: "https://github.com/liriliri/eruda/blob/master/README.md"
    },
    vConsole: {
      /** 版本号 */
      version: DebugToolVersionConfig.vconsole.version,
      /** 项目地址 */
      homeUrl: "https://github.com/Tencent/vConsole",
      /** 设置文档 */
      settingDocUrl: "https://github.com/Tencent/vConsole/blob/dev/README_CN.md"
    },
    pageSpy: {
      /** 版本号 */
      version: DebugToolVersionConfig["@huolala-tech/page-spy-browser"].version,
      /** 项目地址 */
      homeUrl: "https://github.com/HuolalaTech/page-spy-web",
      /** 设置文档 */
      settingDocUrl: "https://github.com/HuolalaTech/page-spy-web/blob/main/README_ZH.md",
      /** 默认配置 */
      defaultConfig: {
        api: "pagespy.jikejishu.com",
        cliennOrigin: "https://pagespy.jikejishu.com"
      }
    },
    chii: {
      /** 设置文档 */
      settingDocUrl: "https://github.com/liriliri/chii/blob/master/README_CN.md",
      /** 默认配置 */
      defaultConfig: {
        url: "https://chii.liriliri.io/",
        scriptJs: "//chii.liriliri.io/target.js"
      }
    }
  };
  const GlobalSettingConfig = {
    debugTool: {
      key: "currentDebug",
      defaultValue: "eruda"
    },
    allowRunInIframe: {
      key: "allowRunInIframe",
      defaultValue: false
    },
    autoLoadDebugTool: {
      key: "autoLoadDebugTool",
      defaultValue: true
    },
    eruda_auto_open_panel: {
      key: "eruda-auto-open-panel",
      defaultValue: false
    },
    eruda_default_show_panel_name: {
      key: "eruda-default-show-panel-name",
      defaultValue: "console"
    },
    eruda_panel_console: {
      key: "eruda-panel-console",
      defaultValue: true
    },
    eruda_panel_elements: {
      key: "eruda-panel-elements",
      defaultValue: true
    },
    eruda_panel_network: {
      key: "eruda-panel-network",
      defaultValue: true
    },
    eruda_panel_resources: {
      key: "eruda-panel-resources",
      defaultValue: true
    },
    eruda_panel_sources: {
      key: "eruda-panel-sources",
      defaultValue: true
    },
    eruda_panel_info: {
      key: "eruda-panel-info",
      defaultValue: true
    },
    eruda_panel_snippets: {
      key: "eruda-panel-snippets",
      defaultValue: true
    },
    eruda_plugin_Resource_erudaMonitor: {
      key: "eruda_plugin_Resource_erudaMonitor",
      defaultValue: false,
      resource: "Resource_erudaMonitor"
    },
    eruda_plugin_Resource_erudaFeatures: {
      key: "eruda_plugin_Resource_erudaFeatures",
      defaultValue: false,
      resource: "Resource_erudaFeatures"
    },
    eruda_plugin_Resource_erudaTiming: {
      key: "eruda_plugin_Resource_erudaTiming",
      defaultValue: false,
      resource: "Resource_erudaTiming"
    },
    eruda_plugin_Resource_erudaCode: {
      key: "eruda_plugin_Resource_erudaCode",
      defaultValue: false,
      resource: "Resource_erudaCode"
    },
    eruda_plugin_Resource_erudaBenchmark: {
      key: "eruda_plugin_Resource_erudaBenchmark",
      defaultValue: false,
      resource: "Resource_erudaBenchmark"
    },
    eruda_plugin_Resource_erudaGeolocation: {
      key: "eruda_plugin_Resource_erudaGeolocation",
      defaultValue: false,
      resource: "Resource_erudaGeolocation"
    },
    eruda_plugin_Resource_erudaOrientation: {
      key: "eruda_plugin_Resource_erudaOrientation",
      defaultValue: false,
      resource: "Resource_erudaOrientation"
    },
    eruda_plugin_Resource_erudaVue: {
      key: "eruda_plugin_Resource_erudaVue",
      defaultValue: false,
      resource: "Resource_erudaVue"
    },
    eruda_plugin_Resource_erudaTouches: {
      key: "eruda_plugin_Resource_erudaTouches",
      defaultValue: false,
      resource: "Resource_erudaTouches"
    },
    eruda_plugin_Resource_erudaOutlinePlugin: {
      key: "eruda_plugin_Resource_erudaOutlinePlugin",
      defaultValue: false,
      resource: "Resource_erudaOutlinePlugin"
    },
    eruda_plugin_Resource_erudaPixel: {
      key: "eruda_plugin_Resource_erudaPixel",
      defaultValue: false,
      resource: "Resource_erudaPixel"
    },
    vconsole_auto_open_panel: {
      key: "vconsole-auto-open-panel",
      defaultValue: false
    },
    vconsole_default_show_panel_name: {
      key: "vconsole-default-show-panel-name",
      defaultValue: "default"
    },
    vConsole_panel_system: {
      key: "vConsole-panel-system",
      defaultValue: true
    },
    vConsole_panel_network: {
      key: "vConsole-panel-network",
      defaultValue: true
    },
    vConsole_panel_element: {
      key: "vConsole-panel-element",
      defaultValue: true
    },
    vConsole_panel_storage: {
      key: "vConsole-panel-storage",
      defaultValue: true
    },
    vConsole_theme: {
      key: "vConsole-theme",
      defaultValue: "light"
    },
    vconsole_disableLogScrolling: {
      key: "vconsole-disableLogScrolling",
      defaultValue: false
    },
    vconsole_showTimestamps: {
      key: "vconsole-showTimestamps",
      defaultValue: false
    },
    vconsole_maxLogNumber: {
      key: "vconsole-maxLogNumber",
      defaultValue: 1e3
    },
    vconsole_maxNetworkNumber: {
      key: "vconsole-maxNetworkNumber",
      defaultValue: 1e3
    },
    vConsole_storage_defaultStorages_cookies: {
      key: "vConsole-storage-defaultStorages-cookies",
      defaultValue: true
    },
    vConsole_storage_defaultStorages_localStorage: {
      key: "vConsole-storage-defaultStorages-localStorage",
      defaultValue: true
    },
    vConsole_storage_defaultStorages_sessionStorage: {
      key: "vConsole-storage-defaultStorages-sessionStorage",
      defaultValue: true
    },
    vConsole_plugin_Resource_vConsole_Stats: {
      key: "vConsole_plugin_Resource_vConsole_Stats",
      defaultValue: false
    },
    vConsole_plugin_Resource_vConsole_ExportLog: {
      key: "vConsole_plugin_Resource_vConsole_ExportLog",
      defaultValue: false
    },
    vConsole_plugin_Resource_vConsoleVueDevtools: {
      key: "vConsole_plugin_Resource_vConsoleVueDevtools",
      defaultValue: false,
      resource: "Resource_vConsoleVueDevtools"
    },
    pagespy_disable_run_in_debug_client: {
      key: "pagespy-disable-run-in-debug-client",
      defaultValue: true
    },
    pagespy_api: {
      key: "pagespy-api",
      defaultValue: DebugToolConfig.pageSpy.defaultConfig.api
    },
    pagespy_clientOrigin: {
      key: "pagespy-clientOrigin",
      defaultValue: DebugToolConfig.pageSpy.defaultConfig.cliennOrigin
    },
    pagespy_project: {
      key: "pagespy-project",
      defaultValue: "default"
    },
    pagespy_title: {
      key: "pagespy-title",
      defaultValue: "--"
    },
    pagespy_autoRender: {
      key: "pagespy-autoRender",
      defaultValue: true
    },
    pagespy_enableSSL: {
      key: "pagespy-enableSSL",
      defaultValue: true
    },
    pagespy_offline: {
      key: "pagespy-offline",
      defaultValue: false
    },
    pagespy_serializeData: {
      key: "pagespy-serializeData",
      defaultValue: false
    },
    pagespy_useSecret: {
      key: "pagespy-useSecret",
      defaultValue: false
    },
    pagespy_messageCapacity: {
      key: "pagespy-messageCapacity",
      defaultValue: 1e3
    },
    chii_script_embedded: {
      key: "chii-script-embedded",
      defaultValue: true
    },
    chii_disable_run_in_debug_url: {
      key: "chii-disable-run-in-debug-url",
      defaultValue: true
    },
    chii_check_script_load: {
      key: "chii-check-script-load",
      defaultValue: true
    },
    chii_debug_url: {
      key: "chii-debug-url",
      defaultValue: DebugToolConfig.chii.defaultConfig.url
    },
    chii_target_js: {
      key: "chii-target-js",
      defaultValue: DebugToolConfig.chii.defaultConfig.scriptJs
    },
    chii_embedded_height_enable: {
      key: "chii-embedded-height-enable",
      defaultValue: false
    },
    chii_embedded_height: {
      key: "chii-embedded-height",
      defaultValue: parseInt((window.innerHeight / 2).toString())
    }
  };
  const Eruda = () => {
    initEruda("Eruda", unsafeWin);
    let Eruda2 = unsafeWin.Eruda || globalThis.Eruda;
    if (!Eruda2) {
      alert("调试工具【eruda】注册全局失败，请反馈开发者");
      return;
    }
    let inintPanelList = [];
    if (Panel.getValue(GlobalSettingConfig.eruda_panel_console.key)) {
      inintPanelList.push("console");
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_panel_elements.key)) {
      inintPanelList.push("elements");
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_panel_network.key)) {
      inintPanelList.push("network");
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_panel_resources.key)) {
      inintPanelList.push("resources");
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_panel_sources.key)) {
      inintPanelList.push("sources");
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_panel_info.key)) {
      inintPanelList.push("info");
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_panel_snippets.key)) {
      inintPanelList.push("snippets");
    }
    DebugToolConfig.eruda.version = Eruda2.version;
    Eruda2.init({
      tool: inintPanelList
    });
    console.log(`eruda当前版本：${Eruda2.version}`);
    console.log(`eruda项目地址：${DebugToolConfig.eruda.homeUrl}`);
    console.log("eruda的全局变量名: Eruda");
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaMonitor.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            GlobalSettingConfig.eruda_plugin_Resource_erudaMonitor.resource
          )
        );
        Eruda2.add(erudaMonitor);
      } catch (error) {
        console.error("插件【eruda-monitor】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaFeatures.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            GlobalSettingConfig.eruda_plugin_Resource_erudaFeatures.resource
          )
        );
        Eruda2.add(erudaFeatures);
      } catch (error) {
        console.error("插件【eruda-features】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaTiming.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            GlobalSettingConfig.eruda_plugin_Resource_erudaTiming.resource
          )
        );
        Eruda2.add(erudaTiming);
      } catch (error) {
        console.error("插件【eruda-timing】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaCode.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            GlobalSettingConfig.eruda_plugin_Resource_erudaCode.resource
          )
        );
        Eruda2.add(erudaCode);
      } catch (error) {
        console.error("插件【eruda-code】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaBenchmark.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            GlobalSettingConfig.eruda_plugin_Resource_erudaBenchmark.resource
          )
        );
        Eruda2.add(erudaBenchmark);
      } catch (error) {
        console.error("插件【eruda-benchmark】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(
      GlobalSettingConfig.eruda_plugin_Resource_erudaGeolocation.key
    )) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            GlobalSettingConfig.eruda_plugin_Resource_erudaGeolocation.resource
          )
        );
        Eruda2.add(erudaGeolocation);
      } catch (error) {
        console.error("插件【eruda-geolocation】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(
      GlobalSettingConfig.eruda_plugin_Resource_erudaOrientation.key
    )) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            GlobalSettingConfig.eruda_plugin_Resource_erudaOrientation.resource
          )
        );
        Eruda2.add(erudaOrientation);
      } catch (error) {
        console.error("插件【eruda-orientation】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaTouches.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            GlobalSettingConfig.eruda_plugin_Resource_erudaTouches.resource
          )
        );
        Eruda2.add(erudaTouches);
      } catch (error) {
        console.error("插件【eruda-touches】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(
      GlobalSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.key
    )) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            GlobalSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.resource
          )
        );
        Eruda2.add(erudaOutlinePlugin);
      } catch (error) {
        console.error("插件【eruda-outline-plugin】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaPixel.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            GlobalSettingConfig.eruda_plugin_Resource_erudaPixel.resource
          )
        );
        Eruda2.add(erudaPixel);
      } catch (error) {
        console.error("插件【eruda-pixel】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaVue.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            GlobalSettingConfig.eruda_plugin_Resource_erudaVue.resource
          )
        );
        Eruda2.add(erudaVue);
      } catch (error) {
        console.error("插件【eruda-vue】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_auto_open_panel.key)) {
      let defaultShowName = Panel.getValue(
        GlobalSettingConfig.eruda_default_show_panel_name.key,
        GlobalSettingConfig.eruda_default_show_panel_name.defaultValue
      );
      Eruda2.show();
      setTimeout(() => {
        Eruda2.show(defaultShowName);
      }, 250);
    }
  };
  const vConsolePluginState = (vConsole2, VConsole) => {
    const Stats = function() {
      var mode = 0;
      var localPositionStorageKey = "vConsole-Plugin-Stats-Position";
      function getLocalPositionStorage() {
        return _GM_getValue(localPositionStorageKey, {
          top: 0,
          left: 0
        });
      }
      function setLocalPositionStorage(left, top2) {
        _GM_setValue(localPositionStorageKey, {
          left,
          top: top2
        });
      }
      var container = document.createElement("div");
      let oldPosition = getLocalPositionStorage();
      container.style.cssText = `position:fixed;top:${oldPosition.top}px;left:${oldPosition.left}px;cursor:pointer;opacity:0.9;z-index:10000`;
      container.addEventListener(
        "click",
        function(event) {
          event.preventDefault();
          showPanel(++mode % container.children.length);
        },
        {
          capture: true
        }
      );
      function addPanel(panel) {
        container.appendChild(panel.dom);
        return panel;
      }
      function showPanel(id) {
        for (var i = 0; i < container.children.length; i++) {
          container.children[i].style.display = i === id ? "block" : "none";
        }
        mode = id;
      }
      function drag() {
        __pops.config.InstanceUtils.drag(container, {
          dragElement: container,
          limit: true,
          extraDistance: 2,
          moveCallBack(moveElement, left, top2) {
            setLocalPositionStorage(left, top2);
          }
        });
      }
      var beginTime = (performance || Date).now(), prevTime = beginTime, frames = 0;
      var fpsPanel = addPanel(new Stats.Panel("FPS", "#0ff", "#002"));
      var msPanel = addPanel(new Stats.Panel("MS", "#0f0", "#020"));
      if (self.performance && self.performance.memory) {
        var memPanel = addPanel(new Stats.Panel("MB", "#f08", "#201"));
      }
      showPanel(0);
      drag();
      return {
        REVISION: 16,
        dom: container,
        addPanel,
        showPanel,
        begin: function() {
          beginTime = (performance || Date).now();
        },
        end: function() {
          frames++;
          var time = (performance || Date).now();
          msPanel.update(time - beginTime, 200);
          if (time >= prevTime + 1e3) {
            fpsPanel.update(frames * 1e3 / (time - prevTime), 100);
            prevTime = time;
            frames = 0;
            if (memPanel) {
              var memory = performance.memory;
              memPanel.update(
                memory.usedJSHeapSize / 1048576,
                memory.jsHeapSizeLimit / 1048576
              );
            }
          }
          return time;
        },
        update: function() {
          beginTime = this.end();
        },
        // Backwards Compatibility
        domElement: container,
        setMode: showPanel
      };
    };
    Stats.Panel = function(name, fg, bg) {
      var min = Infinity, max = 0, round = Math.round;
      var PR = round(window.devicePixelRatio || 1);
      var WIDTH = 80 * PR, HEIGHT = 48 * PR, TEXT_X = 3 * PR, TEXT_Y = 2 * PR, GRAPH_X = 3 * PR, GRAPH_Y = 15 * PR, GRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;
      var canvas = document.createElement("canvas");
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      canvas.style.cssText = "width:80px;height:48px";
      var context = canvas.getContext("2d");
      context.font = "bold " + 9 * PR + "px Helvetica,Arial,sans-serif";
      context.textBaseline = "top";
      context.fillStyle = bg;
      context.fillRect(0, 0, WIDTH, HEIGHT);
      context.fillStyle = fg;
      context.fillText(name, TEXT_X, TEXT_Y);
      context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
      context.fillStyle = bg;
      context.globalAlpha = 0.9;
      context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
      return {
        dom: canvas,
        update: function(value, maxValue) {
          min = Math.min(min, value);
          max = Math.max(max, value);
          context.fillStyle = bg;
          context.globalAlpha = 1;
          context.fillRect(0, 0, WIDTH, GRAPH_Y);
          context.fillStyle = fg;
          context.fillText(
            round(value) + " " + name + " (" + round(min) + "-" + round(max) + ")",
            TEXT_X,
            TEXT_Y
          );
          context.drawImage(
            canvas,
            GRAPH_X + PR,
            GRAPH_Y,
            GRAPH_WIDTH - PR,
            GRAPH_HEIGHT,
            GRAPH_X,
            GRAPH_Y,
            GRAPH_WIDTH - PR,
            GRAPH_HEIGHT
          );
          context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT);
          context.fillStyle = bg;
          context.globalAlpha = 0.9;
          context.fillRect(
            GRAPH_X + GRAPH_WIDTH - PR,
            GRAPH_Y,
            PR,
            round((1 - value / maxValue) * GRAPH_HEIGHT)
          );
        }
      };
    };
    class VConsoleStatsPlugin {
      vConsole;
      VConsole;
      dom;
      requestID;
      stats;
      constructor(vConsole22, VConsole2) {
        this.vConsole = vConsole22;
        this.VConsole = VConsole2;
        this.dom = null;
        this.requestID = null;
        this.stats = null;
        return this.init();
      }
      init() {
        this.addStyle();
        const vConsoleStats = new this.VConsole.VConsolePlugin("Stats", "Stats");
        vConsoleStats.on("ready", () => {
          document.querySelectorAll(".vc-stats-buttons").forEach((statusButton) => {
            statusButton.addEventListener("click", (event) => {
              const currentType = event.target.dataset.type;
              if (currentType.toString() === "2" && // @ts-ignore
              !(self.performance && self.performance.memory)) {
                console.error(
                  "浏览器不支持window.performance或者window.performance.memory"
                );
                return;
              }
              this.changePanel(currentType);
            });
          });
        });
        vConsoleStats.on("renderTab", (callback) => {
          const statsHTML = (
            /*html*/
            `
                <div class="vc-stats-buttons">
                    <div class="vc-button-container">
                        <button class="vc-stats-button" data-type="0">show FPS</button>
                        <div class="vc-description">
                        <span>最后一秒渲染的帧。数字越高越好</span>
                        </div>
                    </div>
                    <div class="vc-button-container">
                        <button class="vc-stats-button" data-type="1">show MS</button>
                        <div class="vc-description">
                        <span>渲染帧所需的毫秒数。数字越低越好</span>
                        </div>
                    </div>
                    <div class="vc-button-container">
                        <button class="vc-stats-button" data-type="2">show MB</button>
                        <div class="vc-description">
                        <span>内存分配(MB)</span>
                        <a class="vc-link" href="https://caniuse.com/mdn-api_performance_memory" target="_blank">performance.memory兼容性查看</a>
                        <span>Chrome启用方式: --enable-precise-memory-info</span>
                        </div>
                    </div>
                </div>`
          );
          callback(statsHTML);
        });
        vConsoleStats.on("addTool", (callback) => {
          const buttons = [
            {
              name: "Show Stats",
              onClick: this.show
            },
            {
              name: "Close Stats",
              onClick: this.close
            }
          ];
          callback(buttons);
        });
        this.vConsole.addPlugin(vConsoleStats);
        return vConsoleStats;
      }
      addStyle = (target) => {
        if (target == null) {
          target = document.head || document.body || document.documentElement;
        }
        const cssNode = document.createElement("style");
        cssNode.setAttribute("type", "text/css");
        cssNode.innerHTML = /*css*/
        `
            .vc-stats-button{
                margin: 10px 10px;
                background-color: #fbf9fe;
                padding: 2px 4px;
                cursor: pointer;
                border-radius: 4px;
                border: 1px solid;
            }
            .vc-button-container{
                display: flex;
                align-items: center;
            }
            .vc-description{
                display: flex;
                flex-direction: column;
            }
            .vc-description a.vc-link{
                color: blue;
            }`;
        target.appendChild(cssNode);
      };
      show = () => {
        if (!this.stats) {
          this.stats = new Stats();
          this.stats.showPanel(1);
          this.dom = this.stats.dom;
          document.body.appendChild(this.dom);
          this.requestID = requestAnimationFrame(this.loop);
        }
      };
      changePanel = (type) => {
        if (!this.stats) {
          this.show();
        }
        this.stats.setMode(Number(type));
      };
      loop = () => {
        this.stats.update();
        this.requestID = requestAnimationFrame(this.loop);
      };
      close = () => {
        if (this.requestID) {
          cancelAnimationFrame(this.requestID);
        }
        if (this.dom) {
          document.body.removeChild(this.dom);
        }
        this.stats = null;
        this.requestID = null;
        this.dom = null;
      };
    }
    return new VConsoleStatsPlugin(vConsole2, VConsole);
  };
  const vConsolePluginExportLog = (vConsole2, VConsole) => {
    class VConsoleOutputLogsPlugin {
      vConsole;
      VConsole;
      $;
      dom;
      logItemSelector;
      constructor(vConsole22, VConsole2, logItemSelector) {
        this.vConsole = vConsole22;
        this.VConsole = VConsole2;
        this.$ = vConsole22.$;
        this.dom = null;
        this.logItemSelector = logItemSelector || ".vc-content #__vc_plug_default .vc-log-row";
        return this.init();
      }
      init() {
        const vConsoleExportLogs = new this.VConsole.VConsolePlugin(
          "exportLog",
          "exportLog"
        );
        vConsoleExportLogs.on("ready", () => {
          console.log("[vConsole-exportlog-plugin] -- load");
        });
        vConsoleExportLogs.on("renderTab", (callback) => {
          const html = (
            /*html*/
            `<div class="vconsole-exportlog"></div>`
          );
          callback(html);
        });
        vConsoleExportLogs.on("addTool", (callback) => {
          const buttons = [
            {
              name: "exportLogs",
              onClick: this.export
            },
            {
              name: "copyLogs",
              onClick: this.copyText
            }
          ];
          callback(buttons);
        });
        this.vConsole.addPlugin(vConsoleExportLogs);
        return vConsoleExportLogs;
      }
      funDownload = (content, filename) => {
        var eleLink = document.createElement("a");
        eleLink.download = filename;
        eleLink.style.display = "none";
        var blob = new Blob([content]);
        eleLink.href = URL.createObjectURL(blob);
        document.body.appendChild(eleLink);
        eleLink.click();
        document.body.removeChild(eleLink);
      };
      getAllLogContent = () => {
        let logRowsElement = document.querySelectorAll(this.logItemSelector);
        let logText = "";
        for (let index = 0; index < logRowsElement.length; index++) {
          const ele = logRowsElement[index];
          logText += `${ele.textContent}
`;
        }
        return logText;
      };
      export = () => {
        let logText = this.getAllLogContent();
        this.funDownload(
          logText,
          `${(/* @__PURE__ */ new Date()).toLocaleDateString() + " " + (/* @__PURE__ */ new Date()).toLocaleTimeString()}.log`
        );
      };
      copyText = () => {
        let logText = this.getAllLogContent();
        utils.setClip(logText);
      };
    }
    return new VConsoleOutputLogsPlugin(vConsole2, VConsole);
  };
  const vConsole = () => {
    initVConsole("VConsole", unsafeWin);
    let VConsole = unsafeWin.VConsole || globalThis.VConsole;
    if (!VConsole) {
      alert("调试工具【vConsole】注册全局失败，请反馈开发者");
      return;
    }
    let initPanelList = [];
    if (Panel.getValue(GlobalSettingConfig.vConsole_panel_system.key)) {
      initPanelList.push("system");
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_panel_network.key)) {
      initPanelList.push("network");
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_panel_elements.key)) {
      initPanelList.push("element");
    }
    if (Panel.getValue(GlobalSettingConfig.vConsole_panel_storage.key)) {
      initPanelList.push("storage");
    }
    if (Panel.getValue(GlobalSettingConfig.vConsole_theme.key) === "auto") {
      if (utils.isThemeDark()) ;
    } else {
      Panel.getValue(GlobalSettingConfig.vConsole_theme.key);
    }
    let defaultStorages = [];
    if (Panel.getValue(GlobalSettingConfig.vConsole_storage_defaultStorages_cookies.key)) {
      defaultStorages.push("cookies");
    }
    if (Panel.getValue(GlobalSettingConfig.vConsole_storage_defaultStorages_localStorage.key)) {
      defaultStorages.push("localStorage");
    }
    if (Panel.getValue(GlobalSettingConfig.vConsole_storage_defaultStorages_sessionStorage.key)) {
      defaultStorages.push("sessionStorage");
    }
    let vConsole2 = new VConsole({
      defaultPlugins: initPanelList,
      theme: "light",
      onReady() {
        if (Panel.getValue(GlobalSettingConfig.vconsole_auto_open_panel.key)) {
          vConsole2.show();
        }
      },
      disableLogScrolling: Panel.getValue(GlobalSettingConfig.vconsole_disableLogScrolling.key),
      log: {
        maxLogNumber: Panel.getValue(
          GlobalSettingConfig.vconsole_maxLogNumber.key,
          GlobalSettingConfig.vconsole_maxLogNumber.defaultValue
        ),
        showTimestamps: Panel.getValue(GlobalSettingConfig.vconsole_showTimestamps.key),
        maxNetworkNumber: Panel.getValue(
          GlobalSettingConfig.vconsole_maxNetworkNumber.key,
          GlobalSettingConfig.vconsole_maxNetworkNumber.defaultValue
        )
      },
      storage: {
        defaultStorages
      }
    });
    DebugToolConfig.vConsole.version = vConsole2.version;
    unsafeWin.vConsole = vConsole2;
    console.log(`VConsole当前版本：${vConsole2.version}`);
    console.log(`VConsole项目地址：${DebugToolConfig.vConsole.homeUrl}`);
    console.log("VConsole的实例化的全局变量名: vConsole");
    if (Panel.getValue(GlobalSettingConfig.vConsole_plugin_Resource_vConsole_Stats.key)) {
      try {
        vConsolePluginState(vConsole2, VConsole);
      } catch (error) {
        console.error("插件【vconsole-stats-plugin】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog.key)) {
      try {
        vConsolePluginExportLog(vConsole2, VConsole);
      } catch (error) {
        console.error("插件【vconsole-outputlog-plugin】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(GlobalSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.resource)
        );
        const Devtools = unsafeWin.vueVconsoleDevtools;
        Devtools.initPlugin(vConsole2);
      } catch (error) {
        console.error("插件【vconsole-vue-devtools-plugin】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.vconsole_auto_open_panel.key)) {
      let defaultShowName = Panel.getValue(
        GlobalSettingConfig.vconsole_default_show_panel_name.key,
        GlobalSettingConfig.vconsole_default_show_panel_name.defaultValue
      );
      vConsole2.show();
      setTimeout(() => {
        vConsole2.showPlugin(defaultShowName);
      }, 250);
    }
  };
  const PageSpy = () => {
    let api = Panel.getValue(
      GlobalSettingConfig.pagespy_api.key,
      GlobalSettingConfig.pagespy_api.defaultValue
    );
    let clientOrigin = Panel.getValue(
      GlobalSettingConfig.pagespy_clientOrigin.key,
      GlobalSettingConfig.pagespy_clientOrigin.defaultValue
    );
    if (Panel.getValue(GlobalSettingConfig.pagespy_disable_run_in_debug_client.key)) {
      if (window.location.hostname.includes(api)) {
        console.log("禁止在调试端运行 ==> hostname包含api");
        return;
      }
      if (window.location.origin.includes(clientOrigin)) {
        console.log("禁止在调试端运行 ==> origin包含clientOrigin");
        return;
      }
    }
    let __pageSpy__ = new initPageSpy(unsafeWin);
    if (!__pageSpy__) {
      alert("调试工具【PageSpy】获取失败，请反馈开发者");
      return;
    }
    let $pageSpy = new __pageSpy__({
      // SDK 会从引入的路径自动分析并决定 Server 的地址（api）和调试端的地址（clientOrigin）
      // 假设你从 https://example.com/page-spy/index.min.js 引入，那么 SDK 会在内部设置：
      //   - api: "example.com"
      //   - clientOrigin: "https://example.com"
      // 如果你的服务部署在别处，就需要在这里手动指定去覆盖。
      api,
      clientOrigin,
      // project 作为信息的一种聚合，可以在调试端房间列表进行搜索
      project: Panel.getValue(
        GlobalSettingConfig.pagespy_project.key,
        GlobalSettingConfig.pagespy_project.defaultValue
      ),
      // title 供用户提供自定义参数，可以用于区分当前调试的客户端
      // 对应的信息显示在每个调试连接面板的「设备id」下方
      title: Panel.getValue(
        GlobalSettingConfig.pagespy_title.key,
        GlobalSettingConfig.pagespy_title.defaultValue
      ),
      // 指示 SDK 初始化完成，是否自动在客户端左下角渲染「圆形白底带 Logo」的控件
      // 如果设置为 false, 可以调用 window.$pageSpy.render() 手动渲染
      autoRender: Panel.getValue(
        GlobalSettingConfig.pagespy_autoRender.key,
        GlobalSettingConfig.pagespy_autoRender.defaultValue
      ),
      // 手动指定 PageSpy 服务的 scheme。
      // 这在 SDK 无法正确分析出 scheme 可以使用，例如 PageSpy 的浏览器插件
      // 是通过 chrome-extension://xxx/sdk/index.min.js 引入 SDK，这会
      // 被 SDK 解析成无效的 "chrome-extension://" 并回退到 ["http://", "ws://"]。
      //   - （默认）传值 undefined 或者 null：SDK 会自动分析；
      //   - 传递 boolean 值：
      //     - true：SDK 将通过 ["https://", "wss://"] 访问 PageSpy 服务
      //     - false：SDK 将通过 ["http://", "ws://"] 访问 PageSpy 服务
      enableSSL: Panel.getValue(
        GlobalSettingConfig.pagespy_enableSSL.key,
        GlobalSettingConfig.pagespy_enableSSL.defaultValue
      ),
      // 在 PageSpy@1.7.4 支持离线回放功能后，客户端集成的 SDK 可以不用和调试端建立连接，
      // 通过 DataHarborPlugin 收集数据、导出离线日志，成为新的使用方式。
      // 默认值 false。用户设置为其他值时，会进入 "离线模式"，具体表现为 PageSpy 不会创建房间、建立 WebSocket 连接。
      // 仅适用浏览器环境的 SDK
      offline: Panel.getValue(
        GlobalSettingConfig.pagespy_offline.key,
        GlobalSettingConfig.pagespy_offline.defaultValue
      ),
      // PageSpy 内置的插件都是开箱即用的，你可以手动指定禁用哪些插件
      // disabledPlugins: [],
      // 是否允许 SDK 在收集离线日志时，序列化非基本类型的数据，序列化的目的是方便在回放时查看
      serializeData: Panel.getValue(
        GlobalSettingConfig.pagespy_serializeData.key,
        GlobalSettingConfig.pagespy_serializeData.defaultValue
      ),
      // 是否启用权限认证功能。启用后，SDK 会生成 6 位数的随机 “密钥”；调试端进入房间时要求输入对应的密钥
      useSecret: Panel.getValue(
        GlobalSettingConfig.pagespy_useSecret.key,
        GlobalSettingConfig.pagespy_useSecret.defaultValue
      ),
      // SDK 在调试端进入房间之前会在内存中缓存数据，以便于调试端进入房间后可以看到之前的数据。
      // 但数据体积会越来越大，因此可以指定 SDK 在本地最多缓存多少条数据记录。
      messageCapacity: Panel.getValue(
        GlobalSettingConfig.pagespy_messageCapacity.key,
        GlobalSettingConfig.pagespy_messageCapacity.defaultValue
      )
    });
    unsafeWin.$pageSpy = $pageSpy;
    console.log($pageSpy);
    DebugToolConfig.pageSpy.version = unsafeWin.$pageSpy.version;
    console.log("PageSpy全局变量：$pageSpy");
  };
  const ChiiPluginHeight = {
    $data: {
      get key() {
        return GlobalSettingConfig.chii_embedded_height.key;
      },
      winHeight: parseInt(window.innerHeight.toString()),
      get winHalfHeight() {
        return GlobalSettingConfig.chii_embedded_height.defaultValue;
      }
    },
    init() {
      let height = this.$data.winHalfHeight;
      if (!this.isExistGMLocalHeight()) {
        this.setGMLocalHeight(height);
      } else {
        height = this.getGMLocalHeight();
      }
      this.setLocalHeight(height);
    },
    /**
     *
     */
    getLocalHeight() {
      let value = Number(globalThis.localStorage.getItem(this.$data.key));
      if (isNaN(value)) {
        return null;
      }
      return value;
    },
    /**
     *
     * @param value
     */
    setLocalHeight(value) {
      if (typeof value !== "number") {
        console.log(value);
        throw new TypeError(`${this.$data.key}的值必须是number`);
      }
      let storageValue = value.toString();
      globalThis.localStorage.setItem(this.$data.key, storageValue);
      let localHeight = this.getLocalHeight();
      if (!localHeight || localHeight.toString() !== storageValue) {
        globalThis.localStorage[this.$data.key] = storageValue;
      }
    },
    isExistGMLocalHeight() {
      return typeof this.getGMLocalHeight() === "number";
    },
    /**
     *
     */
    getGMLocalHeight() {
      return Panel.getValue(this.$data.key);
    },
    /**
     *
     * @param value
     */
    setGMLocalHeight(value) {
      if (typeof value !== "number") {
        console.log(value);
        throw new TypeError(`${this.$data.key}的值必须是number`);
      }
      Panel.setValue(this.$data.key, value);
    }
  };
  const Chii = () => {
    let debugUrl = Panel.getValue(
      GlobalSettingConfig.chii_debug_url.key,
      GlobalSettingConfig.chii_debug_url.defaultValue
    );
    if (window.location.href.startsWith(debugUrl) && Panel.getValue(
      GlobalSettingConfig.chii_check_script_load.key,
      GlobalSettingConfig.chii_disable_run_in_debug_url.defaultValue
    )) {
      console.log("禁止在调试端运行 ==> href包含debugUrl");
      return;
    }
    Panel.execMenu(GlobalSettingConfig.chii_embedded_height_enable.key, () => {
      ChiiPluginHeight.init();
    });
    if (Panel.getValue(GlobalSettingConfig.chii_check_script_load.key)) {
      let checkChiiScriptLoad = function(event) {
        if (event.target === scriptNode) {
          globalThis.alert(
            `调试工具【Chii】脚本加载失败
      可能原因1：CSP策略阻止了加载第三方域的js文件
      可能原因2：目标js无效`
          );
          unsafeWin.removeEventListener("error", checkChiiScriptLoad, {
            capture: true
          });
        }
      };
      unsafeWin.addEventListener("error", checkChiiScriptLoad, {
        capture: true
      });
    }
    let scriptJsUrl = Panel.getValue(
      GlobalSettingConfig.chii_target_js.key,
      GlobalSettingConfig.chii_target_js.defaultValue
    );
    let scriptEmbedded = Panel.getValue(
      GlobalSettingConfig.chii_script_embedded.key,
      GlobalSettingConfig.chii_script_embedded.defaultValue
    );
    let scriptNode = document.createElement("script");
    scriptNode.src = scriptJsUrl;
    scriptNode.setAttribute("type", "application/javascript");
    if (scriptEmbedded) {
      scriptNode.setAttribute("embedded", "true");
    }
    (document.head || document.body || document.documentElement).appendChild(
      scriptNode
    );
  };
  const DebugTool = {
    $data: {
      /** 当前的调试工具是否已执行 */
      isLoadDebugTool: false,
      /** 当前已执行的调试工具名 */
      loadDebugToolName: void 0,
      /** 当前执行了调试工具的iframe */
      iframeUrlList: []
    },
    $ele: {
      /** 隐藏调试工具的style元素 */
      hideDebugToolCSSNode: void 0
    },
    /**
     * 处理当在iframe内加载时，是否允许执行，如果允许，那么把url添加到菜单中
     */
    handleToolWithIframe() {
      if (Panel.isTopWindow()) {
        return true;
      }
      if (!Panel.getValue(GlobalSettingConfig.allowRunInIframe.key)) {
        return false;
      }
      this.$data.iframeUrlList.push(window.location.href);
      try {
        top.console.log("iframe信息：" + window.location.href);
      } catch (error) {
        console.error(error);
      }
      GM_Menu.add({
        key: "iframeUrl",
        text: window.location.href,
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback() {
          copy(window.location.href, "text");
        }
      });
      return true;
    },
    /**
     * 执行当前的调试工具
     */
    execDebugTool() {
      let debugTool = Panel.getValue(GlobalSettingConfig.debugTool.key);
      debugTool = debugTool.toString().toLowerCase();
      console.log(`网页调试：当前使用的调试工具【${debugTool}】`);
      if (debugTool === "vconsole") {
        this.$data.isLoadDebugTool = true;
        this.$data.loadDebugToolName = "vconsole";
        vConsole();
      } else if (debugTool === "pagespy") {
        this.$data.isLoadDebugTool = true;
        this.$data.loadDebugToolName = "pagespy";
        PageSpy();
      } else if (debugTool === "eruda") {
        this.$data.isLoadDebugTool = true;
        this.$data.loadDebugToolName = "eruda";
        Eruda();
      } else if (debugTool === "chii") {
        this.$data.isLoadDebugTool = true;
        this.$data.loadDebugToolName = "chii";
        Chii();
      } else {
        console.error("当前未配置该调试工具的运行");
      }
    },
    /**
     * 在脚本菜单中添加控制当前的调试工具状态的菜单按钮
     */
    registerDebugToolMenuControls() {
      if (!Panel.isTopWindow()) {
        console.warn("不在iframe内重复添加菜单按钮");
        return;
      }
      let menuData = {
        key: "debug_tool_show_hide_control",
        text: "☯ 加载并显示调试工具",
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: (data) => {
          changeMenu();
        }
      };
      const changeMenu = (data) => {
        if (DebugTool.$data.isLoadDebugTool) {
          if (DebugTool.$ele.hideDebugToolCSSNode) {
            this.showCurrentDebugTool();
            menuData.text = "🌑 隐藏调试工具";
            GM_Menu.update(menuData);
          } else {
            this.hideCurrentDebugTool();
            menuData.text = "🌕 显示调试工具";
            GM_Menu.update(menuData);
          }
        } else {
          this.showCurrentDebugTool();
          menuData.text = "🌑 隐藏调试工具";
          GM_Menu.update(menuData);
        }
      };
      GM_Menu.add(menuData);
    },
    /**
     * 判断页面中是否已存在隐藏调试工具的CSS元素节点
     * @returns
     */
    isInjectDebugToolHideCSS() {
      return Boolean(
        this.$ele.hideDebugToolCSSNode && document.documentElement.contains(this.$ele.hideDebugToolCSSNode)
      );
    },
    /**
     * 创建隐藏调试工具的CSS元素
     * @returns
     */
    createDebugToolHideCSS() {
      let $css = document.createElement("style");
      $css.setAttribute("type", "text/css");
      $css.setAttribute("data-from", "hide-debug-tool");
      $css.innerHTML = /*css*/
      `
		/* Eruda的按钮 */
        #eruda{
            display: none !important;
        }
		/* vConsole的按钮 */
        #__vconsole{
            display: none !important;
        }
		/* PageSpy的按钮 */
        #__pageSpy{
            display: none !important;
        }
		/* Chii的面板 */
        .__chobitsu-hide__ > iframe,
        .__chobitsu-hide__:has(iframe){
            display: none !important;
        }
        `;
      return $css;
    },
    /**
     * 隐藏当前的调试工具
     */
    hideCurrentDebugTool() {
      if (this.$ele.hideDebugToolCSSNode == null) {
        console.log("未创建隐藏【调试工具】的style元素 => 创建元素");
        this.$ele.hideDebugToolCSSNode = this.createDebugToolHideCSS();
      }
      if (!this.isInjectDebugToolHideCSS()) {
        console.log("页面不存在隐藏【调试工具】的style元素 => 添加元素");
        document.documentElement.appendChild(this.$ele.hideDebugToolCSSNode);
      }
    },
    /**
     * 显示当前的调试工具
     */
    showCurrentDebugTool() {
      if (this.$ele.hideDebugToolCSSNode) {
        console.log("页面存在隐藏【调试工具】的style元素 => 移除元素");
        document.documentElement.removeChild(this.$ele.hideDebugToolCSSNode);
        this.$ele.hideDebugToolCSSNode = void 0;
      }
      if (!this.$data.isLoadDebugTool) {
        console.log("尚未运行【调试工具】 => 运行调试工具");
        this.execDebugTool();
      }
    }
  };
  const WebSiteDebug = {
    init() {
      if (DebugTool.handleToolWithIframe()) {
        if (Panel.getValue(GlobalSettingConfig.autoLoadDebugTool.key)) {
          DebugTool.execDebugTool();
        } else {
          DebugTool.registerDebugToolMenuControls();
        }
      }
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
        if (typeof clickCallBack === "function") {
          let result2 = clickCallBack(event, value);
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
  const PanelUI_globalSetting = {
    id: "debug-panel-config-all",
    title: "总设置",
    headerTitle: "总设置",
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UISelect(
            "调试工具",
            GlobalSettingConfig.debugTool.key,
            GlobalSettingConfig.debugTool.defaultValue,
            [
              {
                value: "eruda",
                text: "Eruda"
              },
              {
                value: "vconsole",
                text: "VConsole"
              },
              {
                value: "pagespy",
                text: "PageSpy"
              },
              {
                value: "chii",
                text: "Chii"
              }
            ],
            void 0,
            void 0
          ),
          UISwitch(
            "允许在iframe内加载",
            GlobalSettingConfig.allowRunInIframe.key,
            GlobalSettingConfig.allowRunInIframe.defaultValue,
            void 0,
            "如果指定本脚本的容器并没有在iframe内执行本脚本，那么该功能将不会生效"
          ),
          UISwitch(
            "主动加载调试工具",
            GlobalSettingConfig.autoLoadDebugTool.key,
            GlobalSettingConfig.autoLoadDebugTool.defaultValue,
            void 0,
            "关闭后将会在脚本菜单注册按钮，有3种状态【加载并显示调试工具】、【隐藏调试工具】、【显示调试工具】"
          )
        ]
      }
    ]
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
        typeof disable === "function" ? disable() : disable
      );
    });
    return result;
  };
  const PanelUI_eruda = {
    id: "debug-panel-config-eruda",
    title: "Eruda",
    headerTitle: `<a href='${DebugToolConfig.eruda.settingDocUrl}' target='_blank'>Eruda设置</a>`,
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UIButton(
            "当前版本",
            "",
            DebugToolConfig.eruda.version,
            void 0,
            false,
            false,
            "primary",
            (event) => {
              utils.preventEvent(event);
              window.open(DebugToolConfig.eruda.homeUrl, "_blank");
            }
          ),
          {
            type: "own",
            getLiElementCallBack(liElement) {
              let $left = document.createElement("div");
              $left.className = "pops-panel-item-left-text";
              $left.innerHTML = /*html*/
              `
                            <p class="pops-panel-item-left-main-text">最新版本</p>
                        `;
              let $right = document.createElement("div");
              $right.className = "pops-panel-item-right-text";
              $right.innerHTML = /*html*/
              `
                        <a href="${DebugToolConfig.eruda.homeUrl}" target="_blank">
                            <img src="https://img.shields.io/npm/v/eruda/latest.svg?label=eruda" alt="eruda">
                        </a>
                        `;
              liElement.appendChild($left);
              liElement.appendChild($right);
              return liElement;
            }
          },
          UISwitch(
            "自动打开面板",
            GlobalSettingConfig.eruda_auto_open_panel.key,
            GlobalSettingConfig.eruda_auto_open_panel.defaultValue,
            void 0,
            "加载完毕后自动显示面板内容"
          ),
          UISelect(
            "默认展示的面板元素",
            GlobalSettingConfig.eruda_default_show_panel_name.key,
            GlobalSettingConfig.eruda_default_show_panel_name.defaultValue,
            [
              {
                text: "Console",
                value: "console",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_panel_console.key
                  );
                }
              },
              {
                text: "Elements",
                value: "elements",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_panel_elements.key
                  );
                }
              },
              {
                text: "Network",
                value: "network",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_panel_network.key
                  );
                }
              },
              {
                text: "Resources",
                value: "resources",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_panel_resources.key
                  );
                }
              },
              {
                text: "Sources",
                value: "sources",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_panel_sources.key
                  );
                }
              },
              {
                text: "Info",
                value: "info",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_panel_info.key
                  );
                }
              },
              {
                text: "Snippets",
                value: "snippets",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_panel_snippets.key
                  );
                }
              },
              {
                text: "Monitor",
                value: "monitor",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_plugin_Resource_erudaMonitor.key
                  );
                }
              },
              {
                text: "Features",
                value: "features",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_plugin_Resource_erudaFeatures.key
                  );
                }
              },
              {
                text: "Timing",
                value: "timing",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_plugin_Resource_erudaTiming.key
                  );
                }
              },
              {
                text: "Code",
                value: "code",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_plugin_Resource_erudaCode.key
                  );
                }
              },
              {
                text: "Benchmark",
                value: "benchmark",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_plugin_Resource_erudaBenchmark.key
                  );
                }
              },
              {
                text: "Geolocation",
                value: "geolocation",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_plugin_Resource_erudaGeolocation.key
                  );
                }
              },
              {
                text: "Orientation",
                value: "orientation",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_plugin_Resource_erudaOrientation.key
                  );
                }
              },
              {
                text: "Touches",
                value: "touches",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_plugin_Resource_erudaTouches.key
                  );
                }
              },
              {
                text: "Outline",
                value: "outline",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.key
                  );
                }
              },
              {
                text: "Pixel",
                value: "pixel",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_plugin_Resource_erudaPixel.key
                  );
                }
              },
              {
                text: "Vue",
                value: "vue",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.eruda_plugin_Resource_erudaVue.key
                  );
                }
              },
              {
                text: "Settings",
                value: "settings"
              }
            ],
            void 0,
            "开启【自动打开面板】才会生效"
          )
        ]
      },
      {
        text: "面板",
        type: "forms",
        forms: [
          UISwitch(
            "Console",
            GlobalSettingConfig.eruda_panel_console.key,
            GlobalSettingConfig.eruda_panel_console.defaultValue,
            void 0,
            "控制台"
          ),
          UISwitch(
            "Elements",
            GlobalSettingConfig.eruda_panel_elements.key,
            GlobalSettingConfig.eruda_panel_elements.defaultValue,
            void 0,
            "元素"
          ),
          UISwitch(
            "Network",
            GlobalSettingConfig.eruda_panel_network.key,
            GlobalSettingConfig.eruda_panel_network.defaultValue,
            void 0,
            "网络"
          ),
          UISwitch(
            "Resources",
            GlobalSettingConfig.eruda_panel_resources.key,
            GlobalSettingConfig.eruda_panel_resources.defaultValue,
            void 0,
            "资源"
          ),
          UISwitch(
            "Sources",
            GlobalSettingConfig.eruda_panel_sources.key,
            GlobalSettingConfig.eruda_panel_sources.defaultValue,
            void 0,
            "源代码"
          ),
          UISwitch(
            "Info",
            GlobalSettingConfig.eruda_panel_info.key,
            GlobalSettingConfig.eruda_panel_info.defaultValue,
            void 0,
            "信息"
          ),
          UISwitch(
            "Snippets",
            GlobalSettingConfig.eruda_panel_snippets.key,
            GlobalSettingConfig.eruda_panel_snippets.defaultValue,
            void 0,
            "拓展"
          )
        ]
      },
      {
        text: "插件",
        type: "forms",
        forms: [
          UISwitch(
            /*html*/
            `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-monitor" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-monitor/latest.svg?label=">
                    </a>
                    eruda-monitor
                    `,
            GlobalSettingConfig.eruda_plugin_Resource_erudaMonitor.key,
            GlobalSettingConfig.eruda_plugin_Resource_erudaMonitor.defaultValue,
            void 0,
            `
						v${DebugToolVersionConfig.eruda.plugin["eruda-monitor"]}
						<br>
						展示页面的 fps 和内存信息
                    `
          ),
          UISwitch(
            /*html*/
            `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-features" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-features/latest.svg?label=">
                    </a>
                    eruda-features
                    `,
            GlobalSettingConfig.eruda_plugin_Resource_erudaFeatures.key,
            GlobalSettingConfig.eruda_plugin_Resource_erudaFeatures.defaultValue,
            void 0,
            `
						v${DebugToolVersionConfig.eruda.plugin["eruda-features"]}
						<br>
						浏览器特性检测
                    `
          ),
          UISwitch(
            /*html*/
            `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-timing" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-timing/latest.svg?label=">
                    </a>
                    eruda-timing
                    `,
            GlobalSettingConfig.eruda_plugin_Resource_erudaTiming.key,
            GlobalSettingConfig.eruda_plugin_Resource_erudaTiming.defaultValue,
            void 0,
            `
						v${DebugToolVersionConfig["eruda"]["plugin"]["eruda-timing"]}
						<br>
						展示性能资源数据
                    `
          ),
          UISwitch(
            /*html*/
            `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-code" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-code/latest.svg?label=">
                    </a>
                    eruda-code
                    `,
            GlobalSettingConfig.eruda_plugin_Resource_erudaCode.key,
            GlobalSettingConfig.eruda_plugin_Resource_erudaCode.defaultValue,
            void 0,
            `
						v${DebugToolVersionConfig.eruda.plugin["eruda-code"]}
						<br>
						运行 JavaScript 代码
                    `
          ),
          UISwitch(
            /*html*/
            `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-benchmark" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-benchmark/latest.svg?label=">
                    </a>
                    eruda-benchmark
                    `,
            GlobalSettingConfig.eruda_plugin_Resource_erudaBenchmark.key,
            GlobalSettingConfig.eruda_plugin_Resource_erudaBenchmark.defaultValue,
            void 0,
            `
						v${DebugToolVersionConfig.eruda.plugin["eruda-benchmark"]}
						<br>
						运行 JavaScript 性能测试
                    `
          ),
          UISwitch(
            "eruda-geolocation",
            GlobalSettingConfig.eruda_plugin_Resource_erudaGeolocation.key,
            GlobalSettingConfig.eruda_plugin_Resource_erudaGeolocation.defaultValue,
            void 0,
            "测试地理位置接口"
          ),
          UISwitch(
            /*html*/
            `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-orientation" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-orientation/latest.svg?label=">
                    </a>
                    eruda-orientation
                    `,
            GlobalSettingConfig.eruda_plugin_Resource_erudaOrientation.key,
            GlobalSettingConfig.eruda_plugin_Resource_erudaOrientation.defaultValue,
            void 0,
            `
						v${DebugToolVersionConfig.eruda.plugin["eruda-orientation"]}
						<br>
						测试重力感应接口
                    `
          ),
          UISwitch(
            /*html*/
            `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-vue" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-vue/latest.svg?label=">
                    </a>
                    eruda-vue
                    `,
            GlobalSettingConfig.eruda_plugin_Resource_erudaVue.key,
            GlobalSettingConfig.eruda_plugin_Resource_erudaVue.defaultValue,
            void 0,
            `
						v${DebugToolVersionConfig.eruda.plugin["eruda-vue"]}
						<br>
						Vue调试工具
                    `
          ),
          UISwitch(
            /*html*/
            `
                    <a class="plugin-anchor" href="https://github.com/liriliri/eruda-touches" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-touches/latest.svg?label=">
                    </a>
                    eruda-touches
                    `,
            GlobalSettingConfig.eruda_plugin_Resource_erudaTouches.key,
            GlobalSettingConfig.eruda_plugin_Resource_erudaTouches.defaultValue,
            void 0,
            `
						v${DebugToolVersionConfig.eruda.plugin["eruda-touches"]}
						<br>
						可视化屏幕 Touch 事件触发
                    `
          ),
          UISwitch(
            /*html*/
            `
                    <a class="plugin-anchor" href="https://github.com/pomelo-chuan/eruda-outline-plugin" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-outline-plugin/latest.svg?label=">
                    </a>
                    eruda-outline-plugin
                    `,
            GlobalSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.key,
            GlobalSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.defaultValue,
            void 0,
            `
						v${DebugToolVersionConfig.eruda.plugin["eruda-outline-plugin"]}
						<br>
						给页面的元素添加边框
					`
          ),
          UISwitch(
            /*html*/
            `
                    <a class="plugin-anchor" href="https://github.com/Faithree/eruda-pixel" target="_blank">
                        <img src="https://img.shields.io/npm/v/eruda-pixel/latest.svg?label=">
                    </a>
                    eruda-pixel
                    `,
            GlobalSettingConfig.eruda_plugin_Resource_erudaPixel.key,
            GlobalSettingConfig.eruda_plugin_Resource_erudaPixel.defaultValue,
            void 0,
            `
						v${DebugToolVersionConfig.eruda.plugin["eruda-pixel"]}
						<br>
						高精度的UI恢复辅助工具
                    `
          )
        ]
      }
    ]
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
  const PanelUI_vConsole = {
    id: "debug-panel-config-vconsole",
    title: "vConsole",
    headerTitle: `<a href='${DebugToolConfig.vConsole.settingDocUrl}' target='_blank'>vConsole设置</a>`,
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UIButton(
            "当前版本",
            "",
            DebugToolConfig.vConsole.version,
            void 0,
            false,
            false,
            "primary",
            (event) => {
              utils.preventEvent(event);
              window.open(DebugToolConfig.vConsole.homeUrl, "_blank");
            }
          ),
          {
            type: "own",
            getLiElementCallBack(liElement) {
              let $left = document.createElement("div");
              $left.className = "pops-panel-item-left-text";
              $left.innerHTML = /*html*/
              `
                            <p class="pops-panel-item-left-main-text">最新版本</p>
                        `;
              let $right = document.createElement("div");
              $right.className = "pops-panel-item-right-text";
              $right.innerHTML = /*html*/
              `
                        <a href="${DebugToolConfig.vConsole.homeUrl}" target="_blank">
                            <img src="https://img.shields.io/npm/v/vconsole/latest.svg?label=vConsole" alt="vConsole">
                        </a>
                        `;
              liElement.appendChild($left);
              liElement.appendChild($right);
              return liElement;
            }
          },
          UISwitch(
            "自动打开面板",
            GlobalSettingConfig.vconsole_auto_open_panel.key,
            GlobalSettingConfig.vconsole_auto_open_panel.defaultValue,
            void 0,
            "加载完毕后自动显示面板内容"
          ),
          UISelect(
            "默认展示的面板元素",
            GlobalSettingConfig.vconsole_default_show_panel_name.key,
            GlobalSettingConfig.vconsole_default_show_panel_name.defaultValue,
            [
              {
                text: "Log",
                value: "default"
              },
              {
                text: "System",
                value: "system",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.vConsole_panel_system.key
                  );
                }
              },
              {
                text: "Network",
                value: "network",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.vConsole_panel_network.key
                  );
                }
              },
              {
                text: "Element",
                value: "element",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.vConsole_panel_element.key
                  );
                }
              },
              {
                text: "Storage",
                value: "storage",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.vConsole_panel_storage.key
                  );
                }
              },
              {
                text: "Stats",
                value: "stats",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.vConsole_plugin_Resource_vConsole_Stats.key
                  );
                }
              },
              {
                text: "exportLog",
                value: "exportlog",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog.key
                  );
                }
              },
              {
                text: "Vue",
                value: "vue",
                disable() {
                  return !Panel.getValue(
                    GlobalSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.key
                  );
                }
              }
            ],
            void 0,
            "开启【自动打开面板】才会生效"
          )
        ]
      },
      {
        text: "面板",
        type: "forms",
        forms: [
          UISwitch(
            "System",
            GlobalSettingConfig.vConsole_panel_system.key,
            GlobalSettingConfig.vConsole_panel_system.defaultValue,
            void 0,
            "控制台"
          ),
          UISwitch(
            "Network",
            GlobalSettingConfig.vConsole_panel_network.key,
            GlobalSettingConfig.vConsole_panel_network.defaultValue,
            void 0,
            "元素"
          ),
          UISwitch(
            "Element",
            GlobalSettingConfig.vConsole_panel_element.key,
            GlobalSettingConfig.vConsole_panel_element.defaultValue,
            void 0,
            "网络"
          ),
          UISwitch(
            "Storage",
            GlobalSettingConfig.vConsole_panel_storage.key,
            GlobalSettingConfig.vConsole_panel_storage.defaultValue,
            void 0,
            "资源"
          )
        ]
      },
      {
        text: "配置",
        type: "forms",
        forms: [
          UISelect(
            "主题",
            GlobalSettingConfig.vConsole_theme.key,
            GlobalSettingConfig.vConsole_theme.defaultValue,
            [
              {
                value: "auto",
                text: "自动"
              },
              {
                value: "light",
                text: "浅色主题"
              },
              {
                value: "dark",
                text: "深色主题"
              }
            ],
            void 0,
            void 0
          ),
          UISwitch(
            "禁止Log自动滚动",
            GlobalSettingConfig.vconsole_disableLogScrolling.key,
            GlobalSettingConfig.vconsole_disableLogScrolling.defaultValue
          ),
          UISwitch(
            "显示日志的输出时间",
            GlobalSettingConfig.vconsole_showTimestamps.key,
            GlobalSettingConfig.vconsole_showTimestamps.defaultValue
          ),
          UIInput(
            "日志的上限数量",
            GlobalSettingConfig.vconsole_maxLogNumber.key,
            GlobalSettingConfig.vconsole_maxLogNumber.defaultValue,
            "请输入数字",
            void 0,
            void 0,
            true
          ),
          UIInput(
            "请求记录的上限数量",
            GlobalSettingConfig.vconsole_maxNetworkNumber.key,
            GlobalSettingConfig.vconsole_maxNetworkNumber.defaultValue,
            "请输入数字",
            void 0,
            void 0,
            true
          )
        ]
      },
      {
        text: "Storage配置",
        type: "forms",
        forms: [
          UISwitch(
            "Cookies",
            GlobalSettingConfig.vConsole_storage_defaultStorages_cookies.key,
            GlobalSettingConfig.vConsole_storage_defaultStorages_cookies.defaultValue,
            void 0,
            "显示Cookies"
          ),
          UISwitch(
            "LocalStorage",
            GlobalSettingConfig.vConsole_storage_defaultStorages_localStorage.key,
            GlobalSettingConfig.vConsole_storage_defaultStorages_localStorage.defaultValue,
            void 0,
            "显示LocalStorage"
          ),
          UISwitch(
            "SessionStorage",
            GlobalSettingConfig.vConsole_storage_defaultStorages_sessionStorage.key,
            GlobalSettingConfig.vConsole_storage_defaultStorages_sessionStorage.defaultValue,
            void 0,
            "显示SessionStorage"
          )
        ]
      },
      {
        text: "插件",
        type: "forms",
        forms: [
          UISwitch(
            "vconsole-stats-plugin",
            GlobalSettingConfig.vConsole_plugin_Resource_vConsole_Stats.key,
            GlobalSettingConfig.vConsole_plugin_Resource_vConsole_Stats.defaultValue,
            void 0,
            "A vConsole plugin which can show Stats in front-end."
          ),
          UISwitch(
            "vconsole-outputlog-plugin",
            GlobalSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog.key,
            GlobalSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog.defaultValue,
            void 0,
            "使用该插件可以复制或下载console中打印的log"
          ),
          UISwitch(
            /*html*/
            `
                        <a class="plugin-anchor" href="https://github.com/Zippowxk/vue-vconsole-devtools" target="_blank">
                            <img src="https://img.shields.io/npm/v/vue-vconsole-devtools/latest.svg?label=">
                        </a>
                        vue-vconsole-devtools
                    `,
            GlobalSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.key,
            GlobalSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.defaultValue,
            void 0,
            `
                        v${DebugToolVersionConfig.vconsole.plugin["vue-vconsole-devtools"]}
                        <br>
                        Vue-vConsole-devtools 是一款vConsole插件，把Vue.js官方调试工具vue-devtools移植到移动端，可以直接在移动端查看调试Vue.js应用
                    `
          )
        ]
      }
    ]
  };
  const PanelUI_pagespy = {
    id: "debug-panel-config-pagespy",
    title: "PageSpy",
    headerTitle: `<a href='${DebugToolConfig.pageSpy.settingDocUrl}' target='_blank'>PageSpy设置</a>`,
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UIButton(
            "注意！隐私保护！",
            "",
            "了解详情",
            void 0,
            false,
            false,
            "danger",
            (event) => {
              __pops.confirm({
                title: {
                  text: "提示",
                  position: "center"
                },
                content: {
                  text: `下面默认配置的${DebugToolConfig.pageSpy.defaultConfig.api}是仅供测试使用的，其他人也可以看到你的调试信息，包括Cookie等信息，如果想用，请自己搭建一个调试端`
                },
                btn: {
                  reverse: true,
                  position: "end",
                  ok: {
                    text: "前往了解更多",
                    callback() {
                      window.open(
                        "https://github.com/HuolalaTech/page-spy-web/wiki/%F0%9F%90%9E-%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E8%A7%A3%E7%AD%94#user-content-testjikejishucom-%E6%98%AF%E5%AE%98%E6%96%B9%E6%8F%90%E4%BE%9B%E7%9A%84%E5%9F%9F%E5%90%8D%E5%90%97%E4%B8%80%E7%9B%B4%E5%8F%AF%E4%BB%A5%E7%94%A8%E5%90%97",
                        "_blank"
                      );
                    }
                  }
                },
                mask: {
                  enable: true
                },
                width: PanelUISize.info.width,
                height: PanelUISize.info.height
              });
            },
            void 0
          ),
          UIButton(
            "当前版本",
            "",
            DebugToolConfig.pageSpy.version,
            void 0,
            false,
            false,
            "primary",
            (event) => {
              utils.preventEvent(event);
              window.open(DebugToolConfig.pageSpy.homeUrl, "_blank");
            }
          ),
          {
            type: "own",
            getLiElementCallBack(liElement) {
              let $left = document.createElement("div");
              $left.className = "pops-panel-item-left-text";
              $left.innerHTML = /*html*/
              `
                            <p class="pops-panel-item-left-main-text">最新版本</p>
                        `;
              let $right = document.createElement("div");
              $right.className = "pops-panel-item-right-text";
              $right.innerHTML = /*html*/
              `
                        <a href="${DebugToolConfig.pageSpy.homeUrl}" target="_blank">
                            <img src="https://img.shields.io/npm/v/@huolala-tech/page-spy-browser?label=pagespy" alt="page-spy-browser">
                        </a>
                        `;
              liElement.appendChild($left);
              liElement.appendChild($right);
              return liElement;
            }
          },
          UISwitch(
            "禁止在调试端运行",
            GlobalSettingConfig.pagespy_disable_run_in_debug_client.key,
            GlobalSettingConfig.pagespy_disable_run_in_debug_client.defaultValue,
            void 0,
            "调试端是下面配置的api/clientOrigin地址"
          )
        ]
      },
      {
        text: "配置",
        type: "forms",
        forms: [
          UIInput(
            "api",
            GlobalSettingConfig.pagespy_api.key,
            GlobalSettingConfig.pagespy_api.defaultValue,
            "",
            void 0,
            "服务器地址的 Host"
          ),
          UIInput(
            "clientOrigin",
            GlobalSettingConfig.pagespy_clientOrigin.key,
            GlobalSettingConfig.pagespy_clientOrigin.defaultValue,
            "",
            void 0,
            "服务器地址的 Origin"
          ),
          UIInput(
            "project",
            GlobalSettingConfig.pagespy_project.key,
            GlobalSettingConfig.pagespy_project.defaultValue,
            void 0,
            void 0,
            "项目名称"
          ),
          UIInput(
            "title",
            GlobalSettingConfig.pagespy_title.key,
            GlobalSettingConfig.pagespy_title.defaultValue,
            void 0,
            void 0,
            "自定义标题"
          ),
          UISwitch(
            "autoRender",
            GlobalSettingConfig.pagespy_autoRender.key,
            GlobalSettingConfig.pagespy_autoRender.defaultValue,
            void 0,
            "自动渲染「圆形白底带 Logo」"
          ),
          UISelect(
            "enableSSL",
            GlobalSettingConfig.pagespy_enableSSL.key,
            GlobalSettingConfig.pagespy_enableSSL.defaultValue,
            [
              {
                value: null,
                text: "默认(自动分析)"
              },
              {
                value: true,
                text: "开启"
              },
              {
                value: false,
                text: "关闭"
              }
            ],
            void 0,
            "是否https"
          ),
          UISwitch(
            "offline",
            GlobalSettingConfig.pagespy_offline.key,
            GlobalSettingConfig.pagespy_offline.defaultValue,
            void 0,
            `是否进入 "离线模式"，具体表现为 PageSpy 不会创建房间、建立 WebSocket 连接。`
          ),
          UISwitch(
            "serializeData",
            GlobalSettingConfig.pagespy_serializeData.key,
            GlobalSettingConfig.pagespy_serializeData.defaultValue,
            void 0,
            `是否允许 SDK 在收集离线日志时，序列化非基本类型的数据，序列化的目的是方便在回放时查看`
          ),
          UISwitch(
            "useSecret",
            GlobalSettingConfig.pagespy_useSecret.key,
            GlobalSettingConfig.pagespy_useSecret.defaultValue,
            void 0,
            `是否启用权限认证功能。启用后，SDK 会生成 6 位数的随机 “密钥”；调试端进入房间时要求输入对应的密钥`
          ),
          UIInput(
            "messageCapacity",
            GlobalSettingConfig.pagespy_messageCapacity.key,
            GlobalSettingConfig.pagespy_messageCapacity.defaultValue,
            "调试端进入房间后可以看到之前的数据量的大小",
            void 0,
            `指定 SDK 在本地最多缓存多少条数据记录`
          )
        ]
      }
    ]
  };
  const UISlider = function(text, key, defaultValue, min, max, changeCallback, getToolTipContent, description, step, valueChangeCallBack) {
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
  const PanelUI_chii = {
    id: "debug-panel-config-chii",
    title: "Chii",
    headerTitle: `<a href='${DebugToolConfig.chii.settingDocUrl}' target='_blank'>Chii设置</a>`,
    forms: [
      {
        text: "功能",
        type: "forms",
        forms: [
          UIButton(
            "调试页面",
            "",
            "前往",
            void 0,
            false,
            false,
            "primary",
            (event) => {
              let url = Panel.getValue(
                "chii-debug-url",
                DebugToolConfig.chii.defaultConfig.url
              );
              window.open(url, "_blank");
            },
            void 0,
            () => {
              return Boolean(
                Panel.getValue(
                  GlobalSettingConfig.chii_script_embedded.key,
                  GlobalSettingConfig.chii_script_embedded.defaultValue
                )
              );
            }
          )
        ]
      },
      {
        text: "配置",
        type: "forms",
        forms: [
          UISwitch(
            "本页展示",
            GlobalSettingConfig.chii_script_embedded.key,
            GlobalSettingConfig.chii_script_embedded.defaultValue,
            (event, value) => {
              let $shadowRoot = event.target.getRootNode();
              let button = $shadowRoot.querySelector(
                "li.pops-panel-forms-container-item ul > li > .pops-panel-button button"
              );
              if (value) {
                button.setAttribute("disabled", "true");
              } else {
                button.removeAttribute("disabled");
              }
            },
            "将调试器展示在同一页面中"
          ),
          UISwitch(
            "禁止在调试端运行",
            GlobalSettingConfig.chii_disable_run_in_debug_url.key,
            GlobalSettingConfig.chii_disable_run_in_debug_url.defaultValue,
            void 0,
            "调试端是下面配置的【调试页面Url】"
          ),
          UISwitch(
            "检测script加载",
            GlobalSettingConfig.chii_check_script_load.key,
            GlobalSettingConfig.chii_check_script_load.defaultValue,
            void 0,
            "失败会有alert提示弹出"
          ),
          UIInput(
            "调试页面Url",
            GlobalSettingConfig.chii_debug_url.key,
            GlobalSettingConfig.chii_debug_url.defaultValue,
            "请输入链接Url",
            void 0,
            "配置【调试页面】的Url"
          ),
          UIInput(
            "来源js",
            GlobalSettingConfig.chii_target_js.key,
            GlobalSettingConfig.chii_target_js.defaultValue,
            "请输入目标js文件",
            void 0,
            "用于注入页面来进行调试"
          )
        ]
      },
      {
        text: "本页展示的配置",
        type: "forms",
        forms: [
          UISwitch(
            "锁定高度",
            GlobalSettingConfig.chii_embedded_height_enable.key,
            GlobalSettingConfig.chii_embedded_height_enable.defaultValue,
            void 0,
            "开启后将自动覆盖面板高度"
          ),
          UISlider(
            "高度设定",
            GlobalSettingConfig.chii_embedded_height.key,
            GlobalSettingConfig.chii_embedded_height.defaultValue,
            0,
            parseInt(window.innerHeight.toString()),
            (_, value) => {
              let $chobitsu = document.querySelector(
                ".__chobitsu-hide__:has(iframe)"
              );
              $chobitsu && ($chobitsu.style.height = value + "px");
            },
            (value) => value + "px",
            "可覆盖当前页面Chii面板的高度",
            1
          )
        ]
      }
    ]
  };
  PanelContent.addContentConfig([
    PanelUI_globalSetting,
    PanelUI_eruda,
    PanelUI_vConsole,
    PanelUI_pagespy,
    PanelUI_chii
  ]);
  Panel.$data.panelConfig = {
    style: (
      /*css*/
      `
				aside.pops-panel-aside{
					width: 20%;
				}
				.plugin-anchor{
					text-decoration: none;
					display: inline-flex;
    				vertical-align: text-bottom;
				}
			`
    )
  };
  Panel.init();
  WebSiteDebug.init();

})(Qmsg, DOMUtils, Utils, pops);