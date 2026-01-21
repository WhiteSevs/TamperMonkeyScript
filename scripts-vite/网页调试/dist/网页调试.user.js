// ==UserScript==
// @name         网页调试
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.1.21
// @author       WhiteSevs
// @description  内置多种网页调试工具，包括：Eruda、vConsole、PageSpy、Chii，可在设置菜单中进行详细配置
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADbhJREFUeF7tnXmQHFUdx7+/noWkypiCgKVQIAuZ7R43UgGS6clRlkFEjAUIyiFHFYYjImIUEgiHAsoRiBAEjJyBSOQoghGilIligZaBnR4CVRGSfj0TKqUxeACW3Jrd/pnZzZLNZnfnve73Zrs3vX8mv/d7v9/395l39UXI/nZrBWh3yt5xpn+UaOt+6Az3B1n7gXj/7vyZtoDD19BibWHe4zUh1ry9u+gy4gEo5CfPCK3csQQ+DoAtU1gGXgGwnNlaVa12lGXapNVmRAJQKJQmhSGfBWAmAfk4xanDQExPUw7LfL+8No6vJLYdUQD0FD6cTaDZJsRm8D2WZd0zkkAYEQC054sTOi3MMVX4/jDVQSCyFgtRXmcCtGb6TD0AbW1TShaFD8rO7xrF/Rsxz/GrlRUafTbdVaoBsO3iUQR6uumq9emQwbODoHLvcMYQp+/UAuA47jlg3BcneW1tCZcJ4d2kzV8THaUSAKetOAdEtzVRp8ZdEZ8pROWhxobJskgdAIU291gm/CpZMvZEY4XWpA21jheTGNtgMaUKgHy+1J6zUAZ4TEJFfrMrpIm1WnlzQuPbJazUANDaOmP0qD3f+z2AaQkXd1Wu5Z0vr1+//n8Jj7M7vNQA4LS5N4IwPw2ignGTqHqXpSHWVACwfa+/BkAuDaIC6ArZmp6G6wipAMBpc5eDcFJKit8TJuNxUfVOTnrMiQeg0OaezoTUba+651fGGX7VezjJECQeAMdxnwNjapJFHCw2BjqCwEt07IkGIJ8vHZCz+K9pLH5vzGRZB/t+x6ak5pBoABzHPRmMx5IqnkxcxDzLr1aWytgOh02yAbCLiwG6YDiE0dUng5YGQXmWLn+6/SQdgBpA43Un3WR/m0TgHdzkPqW7kwagezgOMR+EQ7o3OaAaCI8IUf6xdG8Khu3t7WO6OseMjJszaY+xpm40jVsXKQBs272GgKsHqt82En4QBN41CrWVMs3nJ43PWbmalHHCjciC4/teoDtMHXVpCIDjlL4L5luHDJ7xPVH1rteZYKFQnMYh1U//Uv9HYXikX3vhWZ2JOI57HRhXDumTcIoQ3vKhbBoDYJfqV9/chsET5gvhLWxoJ2lg2+6JBKT6dqveVIlxul/1HpFMvaGZ0+beBMKlDQ0Za0XVmxwTAPcNAOMadtazMJgbBN4iGdtGNlIjTyMnCfl/As/zg8otOsIp2O4iBi6S9PVvEXhD1k5iBJAHoB4UMeb4Ve8OyQAzMwUFbNu9nYBvKzTRAYDkFNA3KuILhKjcqRBoZtpAAafNvROE85WE0jIFyCwCB4iKGOf7Ve9upYAz4wEVcBz3TrBi8buHYw2LwLqfobYbQ9WMQRcGQXlxVtfoChTs4k8Y9C1VD7Lb84ZrgN6Oo0IA5u+IauV21QQye8BxSreBeY6yFoyFoupJ3T0lDUC8kQAXB4E39FmCcpYju4Hiav9DMRi4Iwg8aWiUAIgDATFd4lfLN4/ssunJznGKPwLTvAje7hOBd55KO2UA4kCAFD9BoyJqHNvIN78SHhbCO0O170gAxIGAgCv9wLtBNdDdwd623esJuCJCrstF4J0SoV2828IjLwyJrhKifG2UgEdqG6et+EMQfT9CfpGL37NTjPkXGQJmrRdHYqYx/M2JZkQIIlbxtQDQMx0UbyDQ5RESyJpEVyB28bUB0ANB6WYCz42eT9ZSQQEtxdcKwPaFoerFCoWcM9PtCmgrvnYA6g4dx70LjG9k5TKigNbiGwGgB4LS/WBO7J2wRkpj3qn24hsDoBuCNvfnICgfTJjXMZU9GCm+UQB6ICg+g2jbm1RWyUjQzM+KauVII751nAMMFVgGgIayZQBoEDHNLjIA9FWvfpPEAN64/79tOx7V/pxD5CwyACJLt0tDEXhSR9+O7e4Chb4oFD1lACgKNoR5BsCu4kj9IqKWIGmLwAyADAAp4LMpIOpPvl+7bATQIGS2BtAg4nYX2RSQTQHZFNCPASlBov4GsykgqnJ92mVTgAYRsylgUBGzEWAAabJdgKYfXTYFaBAymwI0iJhNAdkUUFcg2wZm20CpNU+2BtA06mZrAA1CZmsADSJma4BsDZCtAQZmQGpOjPobzKaAqMplJ4EalNvVRbYLkNgFtLYettfolpbDdFSAia5O0m3haQWAmAe6l1G5RJ3IvVirld/q2/DDKaCQnzyDiS4C0fHKnlPSIJUA6NaWeSUx39r77uJuAAp2cS6DRvz7ezIAdtDU+0ZX6v7lW9YzukFLor8MgJ2rQhZPp4Lt3sLAxUksmO6YMgD6KUp0G9l26RcE/opusZPoLwOgX1Xq6wHHdutf5Ur8Fy51AJUBsIuKT1DBLi1gcCo+dBwXggyA/iMAFpJtT9qXkNsIYGxcgZPePgNgR4UY+AfRHm3d20DHmTwdbP0p6QWMG18GQB8FiSYKUV634yCo4O7DzHczk0vAgXHFTmL7DABsAvO6zhAXbtxY6f4kr+GLQe4qEI5JCgypBICxWlS9L5rS0CwAtvtLACeYCl7VbxoBINAKPyh/VTVXWXujANi2+zABp8kGY9oujQCA8ZCoemea0sYoAE6buwSEs00Fr+o3lQAAyt8AUNHFKAC27d5BwIUqAZm0TSMAql8AUdXPKACRP36gmoWkfRoBgML3fyRl2MnMLACOOx+MG6MEZqJNGgGQ/fpXVL0MA1A6CcxDfrw4auBR2qURAJlv/0XRoreNUQDa85MP77KsF+MEqLNtGgHoCmlCrVZer1OHvr6MApDPl8bmLP6PqeBV/aYRANmYVbVoyghQ78Sx3X8B2DdqgDrbyYqZlEfDGHglCLxP69Sgvy+jI0C9s4LtdjBQMpmErO+0AQDA2FvCmzYCJOl7QmkDwPQOoA6B8RHAtt3PEPBH2V+pSbv0AcBuEFQqJjUxDsD2dcDrAPYxmYiM71QBQPiLEN5BMnnFsWkSAKVlABu7oCErQKoAMHwNoGlrgO6FYFtpNhPfLVsoU3apAoBwihCe8UO0powAhcKUVg7DlwF8xFRxZfymCIDXR43+oHXdunXvyuQVx6YpANQDtO3SAwT+epxg47ZNEQBGLwH31bFpACThEbS0AEAhpvk17/m4wMu0bxoA23cDHoCiTGAmbNIAAINWBAZvAWv6SWDfDh2neCaYlpkorozPNAAQMh9drVaelslHh02TR4DiPwH6mI7Ao/hIAQDrROBNjJJb1DZNA8BximvBdETUQHW0SwEAz4jA+5yOXGV9NAUAp634ZBLePJICAEDg3/lB5QuyBYxrZxwAxy4uBuiCuIHqaJ8GALbnuUoE3kwdOTfyYRQA2y5eRqAFjYJo1v+nCAAw8Osg8I4zrY0xAIZ7xT+QcGkCYHv8T4jAO9EkBEYASMKhzwgBoH7B/nEhPGMv8NAOQD4/aXzOytXP/UebJDeK7xSOAN1pEvhRP6gYecROKwD5fH5UzhrnA2hVKVB9viPgfdOvqkkrAN1aGnpGUCsAjuM+B8ZUleIDtObd96yjN29+/n3HLi4DyNh9AwkBoPcSr/KwzsDPgsDTekFNGwAF213BgOKChXxQy1FCrNnSC43JncNwA0DAIj/w5tZzjfFyriUi8M5V+5ENbq0FAKfN/SkI31QM6gMrFxY3bHihvl7Y6c9xJh8PpkUAjVf0OaT58AFAa0DhdUJUVvUNMCoEDLo3CMqzdWgTGwDbLl1FUH+Zccj82Wq1MujNouPHFw9sabHmgXmOjkTrPoYBgLcYWDRx4kHXLV++vGugPKJCAEDLSBALgMi3ehGdIET5SZnCOk7pSDDPA/AlGfuhbJoMwJKukBbJPNYVFQIGLQ2C8qw4ukQGwHGmHA8OpYq4U4DMZ4tq5QHVoG27eB6B6iDYqm177ZsCAGM15XCr73urVeKMCgEBD/qBd5ZKX31tIwFg25NdC9ZKBj6u0jEDc4PAW6TSpq9t9zsNKXcOGF8DoPxNA6MAMFbDwnIhvCVR84sKQZwtojIA7YdM+mRXS24lAKXr1gS60Q/Kl0cVZ5eFYr50EohPAKF+0WScjF/tABD+gBBPdTE9JTPUy8QYFQIGPxpEOCxSAqC9vX3Prq1jVqq++s3kSdaECVPHdXZ2zkRIM0GYAmDQnYMGAOqHVS+BaJXVRU9tqHUYefQ9KgQAHhOBd6oMaL02SgAU7OICBim9V5iBjiDwFA+HVFLov4Wcvj/R1kPRRYeGhE8Q895E2HvbanysCLzPy3i27eJvAbxBwJsEvBWCNloWvdTZOe7lWu03/5XxEdcmKgQEXuAHlStk+5cG4FP5SUeElvUcQKNknQP4uwi8/RTsM9M+CkSFQOW+QmkAbLt4KoEeVanQ1s6uvV59dW1iXhChEntSbCNBQDhXdjEqDYDjuJeCcZOsMGRZB/t+xyZZ+8xucAVUIVB5rFwagELBPYZD7HSUOVjIVkhTN9TKHVlR9SmgAgExz/KrlaUyvUsDUH/fT4vFQaO9P4NOC4Ky0lQhE2hmI3sBid4hq3Oa76/9s4xm0gDUnTmOuxCMSwZzzODLg6CSmPcCygiQNptGIwGFdIxfK9d3MVJ/SgDUPQ7yjcHNILpaiPL9Ur1mRrEUsG33om3b0/qX3g7Y4Yi2gPhaIby7VJwrA1B3btvuRIv58JCo1QrDZzk3aq0Qa95W6TizjadA95TcwlPDEFPj1CASAPFCz1onSYH/A2cA4KVC+XrgAAAAAElFTkSuQmCC
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@d5e1cf028d10253d863ac708916c9845c0fba80a/lib/Eruda/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@9f63667d501ec8df5bdb4af680f37793f393754f/lib/VConsole/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@b2f37e0ef04aafbccbdbd52733f795c2076acd87/lib/PageSpy/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.10/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.9.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@3.2.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.6.2/dist/index.umd.js
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
// @grant        CAT_clearProxy
// @grant        CAT_click
// @grant        CAT_fileStorage
// @grant        CAT_scriptLoaded
// @grant        CAT_setProxy
// @grant        CAT_userConfig
// @grant        GM.ChromeXt
// @grant        GM_addElement
// @grant        GM_addStyle
// @grant        GM_addValueChangeListener
// @grant        GM_audio
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

(function (Qmsg, DOMUtils, pops, Utils) {
  "use strict";

  var _GM = (() => (typeof GM != "undefined" ? GM : void 0))();
  var _GM_addElement = (() => (typeof GM_addElement != "undefined" ? GM_addElement : void 0))();
  var _GM_addStyle = (() => (typeof GM_addStyle != "undefined" ? GM_addStyle : void 0))();
  var _GM_addValueChangeListener = (() =>
    typeof GM_addValueChangeListener != "undefined" ? GM_addValueChangeListener : void 0)();
  var _GM_cookie = (() => (typeof GM_cookie != "undefined" ? GM_cookie : void 0))();
  var _GM_deleteValue = (() => (typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0))();
  var _GM_deleteValues = (() => (typeof GM_deleteValues != "undefined" ? GM_deleteValues : void 0))();
  var _GM_download = (() => (typeof GM_download != "undefined" ? GM_download : void 0))();
  var _GM_getResourceText = (() => (typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0))();
  var _GM_getResourceURL = (() => (typeof GM_getResourceURL != "undefined" ? GM_getResourceURL : void 0))();
  var _GM_getTab = (() => (typeof GM_getTab != "undefined" ? GM_getTab : void 0))();
  var _GM_getTabs = (() => (typeof GM_getTabs != "undefined" ? GM_getTabs : void 0))();
  var _GM_getValue = (() => (typeof GM_getValue != "undefined" ? GM_getValue : void 0))();
  var _GM_getValues = (() => (typeof GM_getValues != "undefined" ? GM_getValues : void 0))();
  var _GM_info = (() => (typeof GM_info != "undefined" ? GM_info : void 0))();
  var _GM_listValues = (() => (typeof GM_listValues != "undefined" ? GM_listValues : void 0))();
  var _GM_log = (() => (typeof GM_log != "undefined" ? GM_log : void 0))();
  var _GM_notification = (() => (typeof GM_notification != "undefined" ? GM_notification : void 0))();
  var _GM_openInTab = (() => (typeof GM_openInTab != "undefined" ? GM_openInTab : void 0))();
  var _GM_registerMenuCommand = (() =>
    typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_removeValueChangeListener = (() =>
    typeof GM_removeValueChangeListener != "undefined" ? GM_removeValueChangeListener : void 0)();
  var _GM_saveTab = (() => (typeof GM_saveTab != "undefined" ? GM_saveTab : void 0))();
  var _GM_setClipboard = (() => (typeof GM_setClipboard != "undefined" ? GM_setClipboard : void 0))();
  var _GM_setValue = (() => (typeof GM_setValue != "undefined" ? GM_setValue : void 0))();
  var _GM_setValues = (() => (typeof GM_setValues != "undefined" ? GM_setValues : void 0))();
  var _GM_unregisterMenuCommand = (() =>
    typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_webRequest = (() => (typeof GM_webRequest != "undefined" ? GM_webRequest : void 0))();
  var _GM_xmlhttpRequest = (() => (typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0))();
  var _GM_audio = (() => (typeof GM_audio != "undefined" ? GM_audio : void 0))();
  var _unsafeWindow = (() => (typeof unsafeWindow != "undefined" ? unsafeWindow : void 0))();
  var _monkeyWindow = (() => window)();
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
        DOMUtils.onReady(() => {
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
    toStr(data) {
      const undefinedReplacedStr = `__undefined__placeholder__replaced__str__`;
      const dataStr = JSON.stringify(
        data,
        (key, value) => {
          return value === void 0 ? undefinedReplacedStr : value;
        },
        2
      ).replace(new RegExp(`"${undefinedReplacedStr}"`, "g"), "undefined");
      return dataStr;
    },
  };
  const utils = Utils.noConflict();
  const domUtils = DOMUtils.noConflict();
  const __pops__ = pops;
  const log = new utils.Log(_GM_info, _unsafeWindow.console || _monkeyWindow.console);
  const SCRIPT_NAME = _GM_info?.script?.name || void 0;
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
      const qmsgType = qmsgInst.setting.type;
      if (qmsgType === "loading") {
        return false;
      }
      const content = qmsgInst.setting.content;
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
  __pops__.GlobalConfig.setGlobalConfig({
    zIndex: () => {
      const maxZIndex = Utils.getMaxZIndex(void 0, void 0, ($ele) => {
        if ($ele?.classList?.contains("qmsg-shadow-container")) {
          return false;
        }
        if ($ele?.closest("qmsg") && $ele.getRootNode() instanceof ShadowRoot) {
          return false;
        }
      });
      const popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
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
  const MenuRegister = new utils.GM_Menu({
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
  const OriginPrototype = {
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
    setTimeout: _unsafeWindow.setTimeout.bind(_unsafeWindow),
    clearTimeout: _unsafeWindow.clearTimeout.bind(_unsafeWindow),
    setInterval: _unsafeWindow.setInterval.bind(_unsafeWindow),
    clearInterval: _unsafeWindow.clearInterval.bind(_unsafeWindow),
  };
  const addStyle = domUtils.addStyle.bind(domUtils);
  const $ = DOMUtils.selector.bind(DOMUtils);
  const $$ = DOMUtils.selectorAll.bind(DOMUtils);
  const cookieManager = new utils.GM_Cookie();
  const KEY = "GM_Panel";
  const ATTRIBUTE_INIT = "data-init";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  const ATTRIBUTE_PLUGIN_SEARCH_CONFIG = "data-plugin-search-config";
  const PROPS_STORAGE_API = "data-storage-api";
  const PanelSizeUtil = {
    followBrowserSize: false,
    get width() {
      return PanelSizeUtil.followBrowserSize ? globalThis.outerWidth : globalThis.innerWidth;
    },
    get height() {
      return PanelSizeUtil.followBrowserSize ? globalThis.outerHeight : globalThis.innerHeight;
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
      let isDoubleClick = false;
      let timer = void 0;
      const exportToFile = (fileName, fileData) => {
        if (typeof fileData !== "string") {
          fileData = CommonUtil.toStr(fileData);
        }
        const blob = new Blob([fileData]);
        const blobUrl = globalThis.URL.createObjectURL(blob);
        const $anchor = domUtils.createElement("a", {
          href: blobUrl,
          download: fileName,
        });
        $anchor.click();
        utils.workerSetTimeout(() => {
          globalThis.URL.revokeObjectURL(blobUrl);
        }, 500);
      };
      const dbclick_callback = () => {
        const importConfig = (importEndCallBack) => {
          const $alert = __pops__.alert({
            title: {
              text: "请选择导入方式",
              position: "center",
            },
            content: {
              text: `
            <div class="btn-control" data-mode="local">本地导入</div>
            <div class="btn-control" data-mode="network">网络导入</div>
            <div class="btn-control" data-mode="clipboard">剪贴板导入</div>`,
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
          }`,
          });
          const $local = $alert.$shadowRoot.querySelector(".btn-control[data-mode='local']");
          const $network = $alert.$shadowRoot.querySelector(".btn-control[data-mode='network']");
          const $clipboard = $alert.$shadowRoot.querySelector(".btn-control[data-mode='clipboard']");
          const updateConfigToStorage = async (data) => {
            const clearLocalStorage = confirm("是否清空脚本存储的配置？（如果点击取消按钮，则仅做配置覆盖处理）");
            if (clearLocalStorage) {
              if (typeof _GM_listValues === "function") {
                if (typeof _GM_deleteValue === "function") {
                  const localStorageKeys = _GM_listValues();
                  localStorageKeys.forEach((key) => {
                    _GM_deleteValue(key);
                  });
                  Qmsg.success("已清空脚本存储的配置");
                } else {
                  Qmsg.error("不支持GM_deleteValue函数，无法执行删除脚本配置");
                }
              } else {
                Qmsg.error("不支持GM_listValues函数，无法清空脚本存储的配置");
              }
            }
            if (typeof _GM_setValues === "function") {
              _GM_setValues(data);
            } else {
              const keys = Object.keys(data);
              keys.forEach((key) => {
                const value = data[key];
                _GM_setValue(key, value);
              });
            }
            Qmsg.success("配置导入完毕");
          };
          const importFile = (configText) => {
            return new Promise(async (resolve) => {
              const data = utils.toJSON(configText);
              if (Object.keys(data).length === 0) {
                Qmsg.warning("解析为空配置，不导入");
              } else {
                await updateConfigToStorage(data);
              }
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
            domUtils.on($input, ["propertychange", "input"], (event2) => {
              if (!$input.files?.length) {
                return;
              }
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
                  callback: async (details, event2) => {
                    const url = details.text;
                    if (utils.isNull(url)) {
                      Qmsg.error("请填入完整的url");
                      return;
                    }
                    const $loading = Qmsg.loading("正在获取配置...");
                    const response = await httpx.get(url, {
                      allowInterceptConfig: false,
                    });
                    $loading.close();
                    if (!response.status) {
                      log.error(response);
                      Qmsg.error("获取配置失败", { consoleLogContent: true });
                      return;
                    }
                    const flag = await importFile(response.data.responseText);
                    if (!flag) {
                      return;
                    }
                    details.close();
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
            const $promptInput = $prompt.$shadowRoot.querySelector("input");
            const $promptOk = $prompt.$shadowRoot.querySelector(".pops-prompt-btn-ok");
            domUtils.on($promptInput, ["input", "propertychange"], (event2) => {
              const value = domUtils.val($promptInput);
              if (value === "") {
                domUtils.attr($promptOk, "disabled", "true");
              } else {
                domUtils.removeAttr($promptOk, "disabled");
              }
            });
            domUtils.onKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
              if (keyName === "Enter" && otherCodeList.length === 0) {
                const value = domUtils.val($promptInput);
                if (value !== "") {
                  domUtils.emit($promptOk, "click");
                }
              }
            });
            domUtils.emit($promptInput, "input");
          });
          domUtils.on($clipboard, "click", async (event) => {
            domUtils.preventEvent(event);
            $alert.close();
            let clipboardText = await CommonUtil.getClipboardText();
            if (clipboardText.trim() === "") {
              Qmsg.warning("获取到的剪贴板内容为空");
              return;
            }
            const flag = await importFile(clipboardText);
            if (!flag) {
              return;
            }
          });
        };
        const exportConfig = (
          fileName = `${SCRIPT_NAME}_panel-setting-${utils.formatTime(Date.now(), "yyyy_MM_dd_HH_mm_ss")}.json`,
          fileData
        ) => {
          const $alert = __pops__.alert({
            title: {
              text: "请选择导出方式",
              position: "center",
            },
            content: {
              text: `
            <div class="btn-control" data-mode="export-to-file">导出至文件</div>
            <div class="btn-control" data-mode="export-to-clipboard">导出至剪贴板</div>
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
              Qmsg.error(error.toString(), { consoleLogContent: true });
            }
          });
          domUtils.on($exportToClipboard, "click", async (event) => {
            const result = await utils.copy(fileData);
            if (result) {
              Qmsg.success("复制成功");
              $alert.close();
            } else {
              Qmsg.error("复制失败");
            }
          });
        };
        const $dialog = __pops__.confirm({
          title: {
            text: "配置",
            position: "center",
          },
          content: {
            text: `
            <textarea name="config-value" id="config" readonly></textarea>
          `,
            html: true,
          },
          btn: {
            ok: {
              enable: true,
              type: "primary",
              text: "导入",
              callback(eventDetails, event) {
                importConfig();
              },
            },
            cancel: {
              enable: true,
              text: "导出",
              callback(eventDetails, event) {
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
        });
        const $textarea = $dialog.$shadowRoot.querySelector("textarea");
        const configData = {};
        if (typeof _GM_listValues === "function") {
          const LocalKeys = _GM_listValues();
          LocalKeys.forEach((key) => {
            const value = _GM_getValue(key);
            Reflect.set(configData, key, value);
          });
        } else {
          Qmsg.warning("不支持函数GM_listValues，仅导出菜单配置");
          const panelLocalValue = _GM_getValue(KEY);
          Reflect.set(configData, KEY, panelLocalValue);
        }
        const configDataStr = CommonUtil.toStr(configData);
        $textarea.value = configDataStr;
      };
      const click_callback = () => {
        let supportURL = _GM_info?.script?.supportURL || _GM_info?.script?.namespace;
        if (typeof supportURL === "string" && utils.isNotNull(supportURL)) {
          window.open(supportURL, "_blank");
        }
      };
      return [
        {
          id: "script-version",
          title: `版本：${_GM_info?.script?.version || "未知"}`,
          isBottom: true,
          views: [],
          clickFirstCallback() {
            return false;
          },
          afterRender(config) {
            const anyTouch = new AnyTouch(config.$asideLiElement);
            anyTouch.on("tap", function (event) {
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
      MenuRegister.add(this.$data.menuOption);
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
      this.emitValueChangeListener = this.emitValueChangeListener.bind(this);
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
      this.emitValueChangeListener(key, value, oldValue);
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
          await data.callback(key, __newValue, __oldValue);
        }
      }
    }
  }
  const PopsPanelStorageApi = new StorageUtils(KEY);
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
        if (config.type === "button" || config.type === "container" || config.type === "deepMenu") {
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
            const defaultValue = moreMenuDefaultConfig[key2];
            menuDefaultConfig.set(key2, defaultValue);
          });
        }
        if (!menuDefaultConfig.size) {
          log.warn("请先配置键", config);
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
          let childViews = configItem.views;
          if (childViews && Array.isArray(childViews)) {
            loopInitDefaultValue(childViews);
          }
        }
      };
      const contentConfigList = [...PanelContent.getAllContentConfig()];
      for (let index = 0; index < contentConfigList.length; index++) {
        let leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.views) {
          continue;
        }
        const rightContentConfigList = leftContentConfigItem.views;
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
      const listenerId = PopsPanelStorageApi.addValueChangeListener(key, callback);
      return listenerId;
    },
    removeValueChangeListener(listenerId) {
      PopsPanelStorageApi.removeValueChangeListener(listenerId);
    },
    emitMenuValueChange(key, newValue, oldValue) {
      PopsPanelStorageApi.emitValueChangeListener(key, newValue, oldValue);
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
          const handlerArgs = (obj) => {
            if (typeof obj === "object" && obj != null) {
              if (obj instanceof Element) {
                resultValueList.push(obj);
              } else {
                const { $css, destory } = obj;
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
              resultValueList.push(obj);
            }
          };
          if (args != null && Array.isArray(args)) {
            for (const it of args) {
              handlerArgs(it);
            }
          } else {
            handlerArgs(args);
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
        return Boolean(value);
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
    async emitUrlChangeWithExecMenuOnceEvent(config) {
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
      const checkHasBottomVersionContentConfig =
        content.findIndex((it) => {
          const isBottom = typeof it.isBottom === "function" ? it.isBottom() : Boolean(it.isBottom);
          return isBottom && it.id === "script-version";
        }) !== -1;
      if (!preventDefaultContentConfig && !checkHasBottomVersionContentConfig) {
        content.push(...PanelContent.getDefaultBottomContentConfig());
      }
      const $panel = __pops__.panel({
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
          style: `
        .pops-switch-shortcut-wrapper{
          margin-right: 5px;
          display: inline-flex;
        }
        .pops-switch-shortcut-wrapper:hover .pops-bottom-icon{
          cursor: pointer;
        }
        `,
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
      const asyncQueryProperty = async (target, handler) => {
        if (target == null) {
          return;
        }
        const handleResult = await handler(target);
        if (handleResult && typeof handleResult.isFind === "boolean" && handleResult.isFind) {
          return handleResult.data;
        }
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
        $el.scrollIntoView({ behavior: "smooth", block: "center" });
      };
      const addFlashingClass = ($el) => {
        const flashingClassName = "pops-flashing";
        domUtils.onAnimationend($el, () => {
          $el.classList.remove(flashingClassName);
        });
        $el.classList.add(flashingClassName);
      };
      const dbclick_callback = (evt) => {
        if (evt.type === "dblclick" && isMobileTouch) {
          return;
        }
        domUtils.preventEvent(evt);
        clickElement = null;
        const $alert = __pops__.alert({
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
					}
					.search-result-item-description{
						font-size: 0.8em;
						color: #6c6c6c;
					}
					${config.searchDialogStyle ?? ""}
				`,
        });
        $alert.$shadowRoot.querySelector(".search-wrapper");
        const $searchInput = $alert.$shadowRoot.querySelector(".search-config-text");
        const $searchResultWrapper = $alert.$shadowRoot.querySelector(".search-result-wrapper");
        $searchInput.focus();
        const clearSearchResult = () => {
          domUtils.empty($searchResultWrapper);
        };
        const createSearchResultItem = (pathInfo) => {
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
          const $item = domUtils.createElement("div", {
            className: "search-result-item",
            innerHTML: `
							<div class="search-result-item-path">${searchPath.matchedData?.path}</div>
							<div class="search-result-item-description">${searchPath.matchedData?.description ?? ""}</div>
						`,
          });
          const panelHandlerComponents = __pops__.config.PanelHandlerComponents();
          domUtils.on($item, "click", (clickItemEvent) => {
            const $asideItems2 = $panel.$shadowRoot.querySelectorAll(
              "aside.pops-panel-aside .pops-panel-aside-top-container li"
            );
            const $targetAsideItem = $asideItems2[pathInfo.index];
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
                const $findDeepMenu = await domUtils.waitNode(() => {
                  return Array.from($panel.$shadowRoot.querySelectorAll(".pops-panel-deepMenu-nav-item")).find(
                    ($deepMenu) => {
                      const viewConfig = Reflect.get($deepMenu, panelHandlerComponents.$data.nodeStoreConfigKey);
                      return typeof viewConfig === "object" && viewConfig != null && viewConfig.text === target.name;
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
                const $findTargetMenu = await domUtils.waitNode(() => {
                  return Array.from($panel.$shadowRoot.querySelectorAll(`li:not(.pops-panel-deepMenu-nav-item)`)).find(
                    ($menuItem) => {
                      const viewConfig = Reflect.get($menuItem, panelHandlerComponents.$data.nodeStoreConfigKey);
                      return viewConfig === target.matchedData?.formConfig;
                    }
                  );
                }, 2500);
                if ($findTargetMenu) {
                  scrollToElementAndListen($findTargetMenu);
                  const $fold = $findTargetMenu.closest(`.pops-panel-forms-fold[data-fold-enable]`);
                  if ($fold) {
                    const $foldWrapper = $fold.querySelector(".pops-panel-forms-fold-container");
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
                loopContentConfig(childViewConfig, deepMenuPath);
              } else {
                let text;
                let description;
                if (configItem.type === "own") {
                  const searchConfig = Reflect.get(configItem.attributes || {}, ATTRIBUTE_PLUGIN_SEARCH_CONFIG);
                  if (searchConfig) {
                    if (typeof searchConfig.text === "string") {
                      text = searchConfig.text;
                    }
                    if (typeof searchConfig.desc === "string") {
                      description = searchConfig.desc;
                    }
                  }
                } else {
                  text = configItem.text;
                  description = Reflect.get(configItem, "description");
                }
                const delayMatchedTextList = [text, description];
                const matchedIndex = delayMatchedTextList.findIndex((configText) => {
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
            if (!leftContentConfigItem.views) {
              continue;
            }
            if (leftContentConfigItem.isBottom && leftContentConfigItem.id === "script-version") {
              continue;
            }
            const rightContentConfigList = leftContentConfigItem.views;
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
          const fragment = document.createDocumentFragment();
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
      const $asideItems = $panel.$shadowRoot.querySelectorAll(
        `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`
      );
      $asideItems.forEach(($asideItem) => {
        domUtils.on($asideItem, "dblclick", dbclick_callback);
      });
      let clickElement = null;
      let isDoubleClick = false;
      let timer = void 0;
      let isMobileTouch = false;
      domUtils.on(
        $panel.$shadowRoot,
        "touchend",
        `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`,
        (evt, selectorTarget) => {
          isMobileTouch = true;
          clearTimeout(timer);
          timer = void 0;
          if (isDoubleClick && clickElement === selectorTarget) {
            isDoubleClick = false;
            clickElement = null;
            dbclick_callback(evt);
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
  const unsafeWin = typeof _unsafeWindow === "object" && _unsafeWindow != null ? _unsafeWindow : window;
  const console = unsafeWin.console;
  const copy = _GM_setClipboard || utils.copy.bind(utils);
  const versionJSON =
    '{\n  "eruda": {\n    "version": "3.4.3",\n    "plugin": {\n      "eruda-monitor": "1.1.2",\n      "eruda-features": "2.1.0",\n      "eruda-timing": "2.0.1",\n      "eruda-code": "2.2.0",\n      "eruda-benchmark": "2.0.1",\n      "eruda-orientation": "2.1.1",\n      "eruda-vue": "1.1.1",\n      "eruda-touches": "2.1.0",\n      "eruda-outline-plugin": "0.0.5",\n      "eruda-pixel": "1.0.13"\n    }\n  },\n  "vconsole": {\n    "version": "3.15.1",\n    "plugin": {\n      "vue-vconsole-devtools": "1.0.9"\n    }\n  },\n  "@huolala-tech/page-spy-browser": {\n    "version": "2.2.10"\n  }\n}';
  const DebugToolVersionConfig = JSON.parse(versionJSON);
  const DebugToolConfig = {
    eruda: {
      version: DebugToolVersionConfig.eruda.version,
      homeUrl: "https://github.com/liriliri/eruda",
      settingDocUrl: "https://github.com/liriliri/eruda/blob/master/README.md",
    },
    vConsole: {
      version: DebugToolVersionConfig.vconsole.version,
      homeUrl: "https://github.com/Tencent/vConsole",
      settingDocUrl: "https://github.com/Tencent/vConsole/blob/dev/README_CN.md",
    },
    pageSpy: {
      version: DebugToolVersionConfig["@huolala-tech/page-spy-browser"].version,
      homeUrl: "https://github.com/HuolalaTech/page-spy-web",
      settingDocUrl: "https://github.com/HuolalaTech/page-spy-web/blob/main/README_ZH.md",
      defaultConfig: {
        api: "pagespy.jikejishu.com",
        cliennOrigin: "https://pagespy.jikejishu.com",
      },
    },
    chii: {
      settingDocUrl: "https://github.com/liriliri/chii/blob/master/README_CN.md",
      defaultConfig: {
        url: "https://chii.liriliri.io/",
        scriptJs: "//chii.liriliri.io/target.js",
      },
    },
  };
  const GlobalSettingConfig = {
    debugTool: {
      key: "currentDebug",
      defaultValue: "eruda",
    },
    allowRunInIframe: {
      key: "allowRunInIframe",
      defaultValue: false,
    },
    autoLoadDebugTool: {
      key: "autoLoadDebugTool",
      defaultValue: true,
    },
    registerDebugBridgeApi: {
      key: "registerDebugBridgeApi",
      defaultValue: "GM_bridge",
    },
    eruda_auto_open_panel: {
      key: "eruda-auto-open-panel",
      defaultValue: false,
    },
    eruda_language: {
      key: "eruda-language",
      defaultValue: "en-US",
    },
    eruda_default_show_panel_name: {
      key: "eruda-default-show-panel-name",
      defaultValue: "console",
    },
    eruda_panel_console: {
      key: "eruda-panel-console",
      defaultValue: true,
    },
    eruda_panel_elements: {
      key: "eruda-panel-elements",
      defaultValue: true,
    },
    eruda_panel_network: {
      key: "eruda-panel-network",
      defaultValue: true,
    },
    eruda_panel_resources: {
      key: "eruda-panel-resources",
      defaultValue: true,
    },
    eruda_panel_sources: {
      key: "eruda-panel-sources",
      defaultValue: true,
    },
    eruda_panel_info: {
      key: "eruda-panel-info",
      defaultValue: true,
    },
    eruda_panel_snippets: {
      key: "eruda-panel-snippets",
      defaultValue: true,
    },
    eruda_plugin_Resource_erudaMonitor: {
      key: "eruda_plugin_Resource_erudaMonitor",
      defaultValue: false,
      resource: "Resource_erudaMonitor",
    },
    eruda_plugin_Resource_erudaFeatures: {
      key: "eruda_plugin_Resource_erudaFeatures",
      defaultValue: false,
      resource: "Resource_erudaFeatures",
    },
    eruda_plugin_Resource_erudaTiming: {
      key: "eruda_plugin_Resource_erudaTiming",
      defaultValue: false,
      resource: "Resource_erudaTiming",
    },
    eruda_plugin_Resource_erudaCode: {
      key: "eruda_plugin_Resource_erudaCode",
      defaultValue: false,
      resource: "Resource_erudaCode",
    },
    eruda_plugin_Resource_erudaBenchmark: {
      key: "eruda_plugin_Resource_erudaBenchmark",
      defaultValue: false,
      resource: "Resource_erudaBenchmark",
    },
    eruda_plugin_Resource_erudaGeolocation: {
      key: "eruda_plugin_Resource_erudaGeolocation",
      defaultValue: false,
      resource: "Resource_erudaGeolocation",
    },
    eruda_plugin_Resource_erudaOrientation: {
      key: "eruda_plugin_Resource_erudaOrientation",
      defaultValue: false,
      resource: "Resource_erudaOrientation",
    },
    eruda_plugin_Resource_erudaVue: {
      key: "eruda_plugin_Resource_erudaVue",
      defaultValue: false,
      resource: "Resource_erudaVue",
    },
    eruda_plugin_Resource_erudaTouches: {
      key: "eruda_plugin_Resource_erudaTouches",
      defaultValue: false,
      resource: "Resource_erudaTouches",
    },
    eruda_plugin_Resource_erudaOutlinePlugin: {
      key: "eruda_plugin_Resource_erudaOutlinePlugin",
      defaultValue: false,
      resource: "Resource_erudaOutlinePlugin",
    },
    eruda_plugin_Resource_erudaPixel: {
      key: "eruda_plugin_Resource_erudaPixel",
      defaultValue: false,
      resource: "Resource_erudaPixel",
    },
    vconsole_auto_open_panel: {
      key: "vconsole-auto-open-panel",
      defaultValue: false,
    },
    vconsole_default_show_panel_name: {
      key: "vconsole-default-show-panel-name",
      defaultValue: "default",
    },
    vConsole_panel_system: {
      key: "vConsole-panel-system",
      defaultValue: true,
    },
    vConsole_panel_network: {
      key: "vConsole-panel-network",
      defaultValue: true,
    },
    vConsole_panel_element: {
      key: "vConsole-panel-element",
      defaultValue: true,
    },
    vConsole_panel_storage: {
      key: "vConsole-panel-storage",
      defaultValue: true,
    },
    vConsole_theme: {
      key: "vConsole-theme",
      defaultValue: "light",
    },
    vconsole_disableLogScrolling: {
      key: "vconsole-disableLogScrolling",
      defaultValue: false,
    },
    vconsole_showTimestamps: {
      key: "vconsole-showTimestamps",
      defaultValue: false,
    },
    vconsole_maxLogNumber: {
      key: "vconsole-maxLogNumber",
      defaultValue: 1e3,
    },
    vconsole_maxNetworkNumber: {
      key: "vconsole-maxNetworkNumber",
      defaultValue: 1e3,
    },
    vConsole_storage_defaultStorages_cookies: {
      key: "vConsole-storage-defaultStorages-cookies",
      defaultValue: true,
    },
    vConsole_storage_defaultStorages_localStorage: {
      key: "vConsole-storage-defaultStorages-localStorage",
      defaultValue: true,
    },
    vConsole_storage_defaultStorages_sessionStorage: {
      key: "vConsole-storage-defaultStorages-sessionStorage",
      defaultValue: true,
    },
    vConsole_plugin_Resource_vConsole_Stats: {
      key: "vConsole_plugin_Resource_vConsole_Stats",
      defaultValue: false,
    },
    vConsole_plugin_Resource_vConsole_ExportLog: {
      key: "vConsole_plugin_Resource_vConsole_ExportLog",
      defaultValue: false,
    },
    vConsole_plugin_Resource_vConsoleVueDevtools: {
      key: "vConsole_plugin_Resource_vConsoleVueDevtools",
      defaultValue: false,
      resource: "Resource_vConsoleVueDevtools",
    },
    pagespy_disable_run_in_debug_client: {
      key: "pagespy-disable-run-in-debug-client",
      defaultValue: true,
    },
    pagespy_api: {
      key: "pagespy-api",
      defaultValue: DebugToolConfig.pageSpy.defaultConfig.api,
    },
    pagespy_clientOrigin: {
      key: "pagespy-clientOrigin",
      defaultValue: DebugToolConfig.pageSpy.defaultConfig.cliennOrigin,
    },
    pagespy_project: {
      key: "pagespy-project",
      defaultValue: "default",
    },
    pagespy_title: {
      key: "pagespy-title",
      defaultValue: "--",
    },
    pagespy_autoRender: {
      key: "pagespy-autoRender",
      defaultValue: true,
    },
    pagespy_enableSSL: {
      key: "pagespy-enableSSL",
      defaultValue: true,
    },
    pagespy_offline: {
      key: "pagespy-offline",
      defaultValue: false,
    },
    pagespy_serializeData: {
      key: "pagespy-serializeData",
      defaultValue: false,
    },
    pagespy_useSecret: {
      key: "pagespy-useSecret",
      defaultValue: false,
    },
    pagespy_messageCapacity: {
      key: "pagespy-messageCapacity",
      defaultValue: 1e3,
    },
    chii_script_embedded: {
      key: "chii-script-embedded",
      defaultValue: true,
    },
    chii_disable_run_in_debug_url: {
      key: "chii-disable-run-in-debug-url",
      defaultValue: true,
    },
    chii_check_script_load: {
      key: "chii-check-script-load",
      defaultValue: true,
    },
    chii_debug_url: {
      key: "chii-debug-url",
      defaultValue: DebugToolConfig.chii.defaultConfig.url,
    },
    chii_target_js: {
      key: "chii-target-js",
      defaultValue: DebugToolConfig.chii.defaultConfig.scriptJs,
    },
    chii_embedded_height_enable: {
      key: "chii-embedded-height-enable",
      defaultValue: false,
    },
    chii_embedded_height: {
      key: "chii-embedded-height",
      defaultValue: parseInt((window.innerHeight / 2).toString()),
    },
  };
  const WebSiteDebugUtil = {
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
    },
  };
  const Console = {
    Console: "控制台",
    console: "控制台",
    All: "所有",
    Info: "信息",
    Warning: "警告",
    Error: "错误",
    Cancel: "取消",
    Execute: "执行",
  };
  const Elements = {
    Elements: "元素",
    elements: "元素",
    "Catch Event Listeners": "捕获事件监听器",
    Attributes: "属性",
    Styles: "样式",
    "Computed Style": "已计算",
    "Event Listeners": "事件监听器",
  };
  const Network = {
    Network: "网络",
    network: "网络",
    Name: "名称",
    Method: "请求方法",
    Status: "状态",
    Type: "类型",
    Size: "大小",
    Time: "时间",
  };
  const Resources = {
    Resources: "资源",
    resources: "资源",
    "Local Storage": "本地存储",
    "Session Storage": "会话存储",
    Cookie: "Cookie",
    Empty: "空",
    Script: "脚本",
    Stylesheet: "样式表",
    Iframe: "Iframe",
    Image: "图片",
  };
  const Sources = {
    Sources: "源代码",
    sources: "源代码",
    "Sorry, unable to fetch source code:(": "抱歉，无法获取源代码:(",
  };
  const Info = {
    Info: "信息",
    info: "信息",
    Location: "链接",
    "User Agent": "用户代理",
    Device: "设备",
    screen: "屏幕",
    viewport: "视口",
    "pixel ratio": "像素比",
    System: "系统",
    browser: "浏览器",
    "Sponsor this Project": "赞助本项目",
    About: "关于",
  };
  const Snippets = {
    Snippets: "片段",
    snippets: "片段",
    "Border All": "全部显示边框",
    "Add color borders to all elements": "为所有元素添加带颜色的边框",
    "Refresh Page": "刷新页面",
    "Add timestamp to url and refresh": "添加时间戳参数到 URL 并刷新",
    "Search Text": "搜索文本",
    "Highlight given text on page": "为页面搜索到的文本添加高亮显示",
    "Edit Page": "编辑页面",
    "Toggle body contentEditable": "切换 body contentEditable",
    "Fit Screen": "适应屏幕",
    "Scale down the whole page to fit screen": "缩小页面以适应屏幕",
    "Load Vue Plugin": "加载 Vue 插件",
    "Vue devtools": "Vue 开发者工具",
    "Load Monitor Plugin": "加载监控插件",
    "Display page fps, memory and dom nodes": "显示页面帧数、内存和 DOM 节点",
    "Load Features Plugin": "加载功能插件",
    "Browser feature detections": "浏览器特性检测",
    "Load Timing Plugin": "加载检测耗时插件",
    "Show performance and resource timing": "显示性能和耗时",
    "Load Code Plugin": "加载代码插件",
    "Edit and run JavaScript": "编辑并运行 JavaScript",
    "Load Benchmark Plugin": "加载测试插件",
    "Run JavaScript benchmarks": "运行 JavaScript 测试",
    "Load Geolocation Plugin": "加载地理位置插件",
    "Test geolocation": "测试地理位置",
    "Load Orientation Plugin": "加载方向插件",
    "Test orientation api": "测试方向api",
    "Load Touches Plugin": "加载触摸插件",
    "Visualize screen touches": "显示触摸点位在屏幕上的位置",
  };
  const General = {
    "Enter the text": "输入文本",
    Filter: "过滤",
    Key: "键",
    Value: "值",
    Refreshed: "已刷新",
    Copied: "已复制",
  };
  const Settings = {
    Settings: "设置",
    settings: "设置",
    "Remember Entry Button Position": "记住入口按钮位置",
    Theme: "主题",
    Transparency: "透明度",
    "Display Size": "显示大小",
    "Restore defaults and reload": "恢复默认并重新加载",
    "Asynchronous Rendering": "异步渲染",
    "Enable JavaScript Execution": "允许执行 JavaScript",
    "Catch Global Errors": "捕获全局错误",
    "Override Console": "覆盖 Console",
    "Auto Display If Error Occurs": "当发生错误时自动显示",
    "Display Extra Information": "显示额外信息",
    "Display Unenumerable Properties": "显示不可枚举属性",
    "Access Getter Value": "访问 Getter 值",
    "Lazy Evaluation": "懒求值",
    "Max Log Number": "最大日志数量",
    "Catch Event Listeners": "捕获事件监听器",
    "Hide Eruda Setting": "隐藏 Eruda 设置",
    "Auto Refresh Elements": "自动刷新元素",
    "Show Line Numbers": "显示行号",
  };
  const Plugins = {
    monitor: "监控",
    features: "功能",
    timing: "耗时",
    code: "代码",
    benchmark: "测试",
    geolocation: "地理位置",
    orientation: "方向",
    touches: "触摸",
    outline: "边框",
  };
  const zh_CN_language = {
    ...General,
    ...Console,
    ...Elements,
    ...Network,
    ...Resources,
    ...Sources,
    ...Info,
    ...Snippets,
    ...Settings,
    ...Plugins,
  };
  const ErudaLanguage = {
    $data: {},
    data: [
      {
        text: "English",
        lng: "en-US",
      },
      {
        text: "中文",
        lng: "zh-CN",
        data: zh_CN_language,
      },
    ],
    init() {
      const Eruda2 = unsafeWin.Eruda || globalThis.Eruda;
      if (!Eruda2) return;
      const i18n = Eruda2._i18n;
      this.data.forEach((item) => {
        if (item.data == null) return;
        i18n.addResources(item.lng, "translation", item.data);
      });
      const lng = Panel.getValue(GlobalSettingConfig.eruda_language.key);
      log.success(`切换语言：${lng}`);
      i18n.changeLanguage(lng);
    },
  };
  const Eruda = async () => {
    initEruda("Eruda", unsafeWin);
    const Eruda2 = unsafeWin.Eruda || globalThis.Eruda;
    if (!Eruda2) {
      alert("调试工具【eruda】注册全局失败，请反馈开发者");
      return;
    }
    const inintPanelList = [];
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
    ErudaLanguage.init();
    Eruda2.init({
      tool: inintPanelList,
    });
    console.log(`eruda当前版本：${Eruda2.version}`);
    console.log(`eruda项目地址：${DebugToolConfig.eruda.homeUrl}`);
    console.log("eruda的全局变量名: Eruda");
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaMonitor.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaMonitor.resource)
        );
        Eruda2.add(erudaMonitor);
      } catch (error) {
        console.error("插件【eruda-monitor】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaFeatures.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaFeatures.resource)
        );
        Eruda2.add(erudaFeatures);
      } catch (error) {
        console.error("插件【eruda-features】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaTiming.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaTiming.resource)
        );
        Eruda2.add(erudaTiming);
      } catch (error) {
        console.error("插件【eruda-timing】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaCode.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(_GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaCode.resource));
        Eruda2.add(erudaCode);
      } catch (error) {
        console.error("插件【eruda-code】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaBenchmark.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaBenchmark.resource)
        );
        Eruda2.add(erudaBenchmark);
      } catch (error) {
        console.error("插件【eruda-benchmark】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaGeolocation.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaGeolocation.resource)
        );
        Eruda2.add(erudaGeolocation);
      } catch (error) {
        console.error("插件【eruda-geolocation】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaOrientation.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaOrientation.resource)
        );
        Eruda2.add(erudaOrientation);
      } catch (error) {
        console.error("插件【eruda-orientation】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaTouches.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaTouches.resource)
        );
        Eruda2.add(erudaTouches);
      } catch (error) {
        console.error("插件【eruda-touches】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.resource)
        );
        Eruda2.add(erudaOutlinePlugin);
      } catch (error) {
        console.error("插件【eruda-outline-plugin】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaPixel.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(_GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaPixel.resource));
        Eruda2.add(erudaPixel);
      } catch (error) {
        console.error("插件【eruda-pixel】加载失败，原因：", error);
      }
    }
    if (Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaVue.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(_GM_getResourceText(GlobalSettingConfig.eruda_plugin_Resource_erudaVue.resource));
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
    const Stats = function () {
      var mode = 0;
      var localPositionStorageKey = "vConsole-Plugin-Stats-Position";
      function getLocalPositionStorage() {
        return _GM_getValue(localPositionStorageKey, {
          top: 0,
          left: 0,
        });
      }
      function setLocalPositionStorage(left, top2) {
        _GM_setValue(localPositionStorageKey, {
          left,
          top: top2,
        });
      }
      var container = document.createElement("div");
      let oldPosition = getLocalPositionStorage();
      container.style.cssText = `position:fixed;top:${oldPosition.top}px;left:${oldPosition.left}px;cursor:pointer;opacity:0.9;z-index:10000`;
      container.addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          showPanel(++mode % container.children.length);
        },
        {
          capture: true,
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
        __pops__.config.InstanceUtils.drag(container, {
          dragElement: container,
          limit: true,
          extraDistance: 2,
          moveCallBack(moveElement, left, top2) {
            setLocalPositionStorage(left, top2);
          },
        });
      }
      var beginTime = (performance || Date).now(),
        prevTime = beginTime,
        frames = 0;
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
        begin: function () {
          beginTime = (performance || Date).now();
        },
        end: function () {
          frames++;
          var time = (performance || Date).now();
          msPanel.update(time - beginTime, 200);
          if (time >= prevTime + 1e3) {
            fpsPanel.update((frames * 1e3) / (time - prevTime), 100);
            prevTime = time;
            frames = 0;
            if (memPanel) {
              var memory = performance.memory;
              memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
            }
          }
          return time;
        },
        update: function () {
          beginTime = this.end();
        },
        domElement: container,
        setMode: showPanel,
      };
    };
    Stats.Panel = function (name, fg, bg) {
      var min = Infinity,
        max = 0,
        round = Math.round;
      var PR = round(window.devicePixelRatio || 1);
      var WIDTH = 80 * PR,
        HEIGHT = 48 * PR,
        TEXT_X = 3 * PR,
        TEXT_Y = 2 * PR,
        GRAPH_X = 3 * PR,
        GRAPH_Y = 15 * PR,
        GRAPH_WIDTH = 74 * PR,
        GRAPH_HEIGHT = 30 * PR;
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
        update: function (value, maxValue) {
          min = Math.min(min, value);
          max = Math.max(max, value);
          context.fillStyle = bg;
          context.globalAlpha = 1;
          context.fillRect(0, 0, WIDTH, GRAPH_Y);
          context.fillStyle = fg;
          context.fillText(round(value) + " " + name + " (" + round(min) + "-" + round(max) + ")", TEXT_X, TEXT_Y);
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
          context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round((1 - value / maxValue) * GRAPH_HEIGHT));
        },
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
              if (currentType.toString() === "2" && !(self.performance && self.performance.memory)) {
                console.error("浏览器不支持window.performance或者window.performance.memory");
                return;
              }
              this.changePanel(currentType);
            });
          });
        });
        vConsoleStats.on("renderTab", (callback) => {
          const statsHTML = `
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
                </div>`;
          callback(statsHTML);
        });
        vConsoleStats.on("addTool", (callback) => {
          const buttons = [
            {
              name: "Show Stats",
              onClick: this.show,
            },
            {
              name: "Close Stats",
              onClick: this.close,
            },
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
        cssNode.innerHTML = `
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
        const vConsoleExportLogs = new this.VConsole.VConsolePlugin("exportLog", "exportLog");
        vConsoleExportLogs.on("ready", () => {
          console.log("[vConsole-exportlog-plugin] -- load");
        });
        vConsoleExportLogs.on("renderTab", (callback) => {
          const html = `<div class="vconsole-exportlog"></div>`;
          callback(html);
        });
        vConsoleExportLogs.on("addTool", (callback) => {
          const buttons = [
            {
              name: "exportLogs",
              onClick: this.export,
            },
            {
              name: "copyLogs",
              onClick: this.copyText,
            },
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
        this.funDownload(logText, `${new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}.log`);
      };
      copyText = () => {
        let logText = this.getAllLogContent();
        utils.copy(logText);
      };
    }
    return new VConsoleOutputLogsPlugin(vConsole2, VConsole);
  };
  const vConsole = async () => {
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
      if (utils.isThemeDark());
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
        ),
      },
      storage: {
        defaultStorages,
      },
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
  const PageSpy = async () => {
    const api = Panel.getValue(GlobalSettingConfig.pagespy_api.key, GlobalSettingConfig.pagespy_api.defaultValue);
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
    const __pageSpy__ = new initPageSpy(unsafeWin);
    if (!__pageSpy__) {
      alert("调试工具【PageSpy】获取失败，请反馈开发者");
      return;
    }
    const $pageSpy = new __pageSpy__({
      api,
      clientOrigin,
      project: Panel.getValue(
        GlobalSettingConfig.pagespy_project.key,
        GlobalSettingConfig.pagespy_project.defaultValue
      ),

      title: Panel.getValue(GlobalSettingConfig.pagespy_title.key, GlobalSettingConfig.pagespy_title.defaultValue),

      autoRender: Panel.getValue(
        GlobalSettingConfig.pagespy_autoRender.key,
        GlobalSettingConfig.pagespy_autoRender.defaultValue
      ),

      enableSSL: Panel.getValue(
        GlobalSettingConfig.pagespy_enableSSL.key,
        GlobalSettingConfig.pagespy_enableSSL.defaultValue
      ),

      offline: Panel.getValue(
        GlobalSettingConfig.pagespy_offline.key,
        GlobalSettingConfig.pagespy_offline.defaultValue
      ),

      serializeData: Panel.getValue(
        GlobalSettingConfig.pagespy_serializeData.key,
        GlobalSettingConfig.pagespy_serializeData.defaultValue
      ),
      useSecret: Panel.getValue(
        GlobalSettingConfig.pagespy_useSecret.key,
        GlobalSettingConfig.pagespy_useSecret.defaultValue
      ),

      messageCapacity: Panel.getValue(
        GlobalSettingConfig.pagespy_messageCapacity.key,
        GlobalSettingConfig.pagespy_messageCapacity.defaultValue
      ),
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
      },
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
    getLocalHeight() {
      let value = Number(globalThis.localStorage.getItem(this.$data.key));
      if (isNaN(value)) {
        return null;
      }
      return value;
    },
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
    getGMLocalHeight() {
      return Panel.getValue(this.$data.key);
    },
    setGMLocalHeight(value) {
      if (typeof value !== "number") {
        console.log(value);
        throw new TypeError(`${this.$data.key}的值必须是number`);
      }
      Panel.setValue(this.$data.key, value);
    },
  };
  const Chii = () => {
    const debugUrl = Panel.getValue(
      GlobalSettingConfig.chii_debug_url.key,
      GlobalSettingConfig.chii_debug_url.defaultValue
    );
    if (
      window.location.href.startsWith(debugUrl) &&
      Panel.getValue(
        GlobalSettingConfig.chii_check_script_load.key,
        GlobalSettingConfig.chii_disable_run_in_debug_url.defaultValue
      )
    ) {
      console.log("禁止在调试端运行 ==> href包含debugUrl");
      return;
    }
    Panel.execMenu(GlobalSettingConfig.chii_embedded_height_enable.key, () => {
      ChiiPluginHeight.init();
    });
    if (Panel.getValue(GlobalSettingConfig.chii_check_script_load.key)) {
      let checkChiiScriptLoad = function (event) {
        if (event.target === $script) {
          globalThis.alert(
            `调试工具【Chii】脚本加载失败
      可能原因1：CSP策略阻止了加载第三方域的js文件
      可能原因2：目标js无效`
          );
          unsafeWin.removeEventListener("error", checkChiiScriptLoad, {
            capture: true,
          });
        }
      };
      unsafeWin.addEventListener("error", checkChiiScriptLoad, {
        capture: true,
      });
    }
    const scriptJsUrl = Panel.getValue(
      GlobalSettingConfig.chii_target_js.key,
      GlobalSettingConfig.chii_target_js.defaultValue
    );
    const scriptEmbedded = Panel.getValue(
      GlobalSettingConfig.chii_script_embedded.key,
      GlobalSettingConfig.chii_script_embedded.defaultValue
    );
    const $script = document.createElement("script");
    $script.src = scriptJsUrl;
    $script.setAttribute("type", "application/javascript");
    if (scriptEmbedded) {
      $script.setAttribute("embedded", "true");
    }
    (document.head || document.body || document.documentElement).appendChild($script);
  };
  const DebugTool = {
    $data: {
      isLoadDebugTool: false,
      loadDebugToolName: void 0,
      iframeUrlList: [],
    },
    $ele: {
      hideDebugToolCSSNode: void 0,
    },
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
      MenuRegister.add({
        key: "iframeUrl",
        text: window.location.href,
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback() {
          copy(window.location.href, "text");
        },
      });
      return true;
    },
    async execDebugTool() {
      let debugTool = Panel.getValue(GlobalSettingConfig.debugTool.key);
      debugTool = debugTool.toString().toLowerCase();
      console.log(`网页调试：当前使用的调试工具【${debugTool}】`);
      if (debugTool === "vconsole") {
        this.$data.isLoadDebugTool = true;
        this.$data.loadDebugToolName = "vconsole";
        await vConsole();
      } else if (debugTool === "pagespy") {
        this.$data.isLoadDebugTool = true;
        this.$data.loadDebugToolName = "pagespy";
        await PageSpy();
      } else if (debugTool === "eruda") {
        this.$data.isLoadDebugTool = true;
        this.$data.loadDebugToolName = "eruda";
        await Eruda();
      } else if (debugTool === "chii") {
        this.$data.isLoadDebugTool = true;
        this.$data.loadDebugToolName = "chii";
        await Chii();
      } else {
        console.error("当前未配置该调试工具的运行");
      }
    },
    registerDebugToolMenuControls() {
      if (!Panel.isTopWindow()) {
        console.warn("不在iframe内重复添加菜单按钮");
        return;
      }
      let menuData = {
        key: "debug_tool_show_hide_control",
        text: "☯ 加载并显示",
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: (data) => {
          changeMenu();
        },
      };
      const changeMenu = (data) => {
        if (DebugTool.$data.isLoadDebugTool) {
          if (DebugTool.$ele.hideDebugToolCSSNode) {
            this.showCurrentDebugTool();
            menuData.text = "🌑 隐藏";
            MenuRegister.update(menuData);
          } else {
            this.hideCurrentDebugTool();
            menuData.text = "🌕 显示";
            MenuRegister.update(menuData);
          }
        } else {
          this.showCurrentDebugTool();
          menuData.text = "🌑 隐藏";
          MenuRegister.update(menuData);
        }
      };
      MenuRegister.add(menuData);
    },
    isInjectDebugToolHideCSS() {
      return Boolean(
        this.$ele.hideDebugToolCSSNode && document.documentElement.contains(this.$ele.hideDebugToolCSSNode)
      );
    },
    createDebugToolHideCSS() {
      let $css = document.createElement("style");
      $css.setAttribute("type", "text/css");
      $css.setAttribute("data-from", "hide-debug-tool");
      $css.innerHTML = `
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
    },
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
    },
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
    const result = {
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
      result.disable = Boolean(typeof disable === "function" ? disable() : disable);
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
        const storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      callback(event, value) {
        const $input = event.target;
        $input.validity.valid;
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
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
  const UIInputNumber = function (
    text,
    key,
    defaultValue,
    description,
    changeCallback,
    placeholder = "",
    afterAddToUListCallBack,
    valueChangeCallback
  ) {
    const result = {
      text,
      type: "input",
      inputType: "number",
      attributes: {},
      props: {},
      description,
      placeholder,
      afterAddToUListCallBack,
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      callback(event, value, valueAsNumber) {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
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
  const UIOwn = function (createLIElement, initConfig, searchConfig, attr, props, afterAddToUListCallBack) {
    const result = {
      type: "own",
      attributes: {},
      props: {},
      createLIElement,
      afterAddToUListCallBack,
    };
    {
      Reflect.set(result.attributes, ATTRIBUTE_INIT, () => false);
    }
    if (typeof searchConfig === "object" && searchConfig !== null) {
      Reflect.set(result.attributes, ATTRIBUTE_PLUGIN_SEARCH_CONFIG, searchConfig);
    }
    return result;
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
    const result = {
      text,
      type: "slider",
      description,
      attributes: {},
      props: {},
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
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
          const result2 = changeCallback(event, value);
          if (result2) {
            return;
          }
        }
        const storageApiValue = this.props[PROPS_STORAGE_API];
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
  const UISwitch = function (
    text,
    key,
    defaultValue,
    clickCallBack,
    description,
    afterAddToUListCallBack,
    disabled,
    valueChangeCallBack,
    shortCutOption
  ) {
    const result = {
      text,
      type: "switch",
      description,
      disabled,
      attributes: {},
      props: {},
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        const value = storageApiValue.get(key, defaultValue);
        return value;
      },
      callback(event, __value) {
        const value = Boolean(__value);
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        if (typeof clickCallBack === "function") {
          const result2 = clickCallBack(event, value);
          if (result2) {
            return;
          }
        }
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      afterAddToUListCallBack: (...args) => {},
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
  const UISelect = function (text, key, defaultValue, data, selectCallBack, description, valueChangeCallBack) {
    const result = {
      text,
      type: "select",
      description,
      attributes: {},
      props: {},
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      callback(isSelectedInfo) {
        if (isSelectedInfo == null) {
          return;
        }
        const value = isSelectedInfo.value;
        log.info(`选择：${isSelectedInfo.text}`);
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
        if (typeof valueChangeCallBack === "function") {
          valueChangeCallBack(isSelectedInfo);
        }
      },
      data,
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
  const PanelUI_general = {
    id: "debug-panel-config-all",
    title: "总设置",
    headerTitle: "总设置",
    views: [
      {
        text: "功能",
        type: "container",
        views: [
          UISelect(
            "调试工具",
            GlobalSettingConfig.debugTool.key,
            GlobalSettingConfig.debugTool.defaultValue,
            [
              {
                text: "Eruda",
                value: "eruda",
              },
              {
                text: "VConsole",
                value: "vconsole",
              },
              {
                text: "PageSpy",
                value: "pagespy",
              },
              {
                text: "Chii",
                value: "chii",
              },
            ],
            void 0,
            void 0
          ),
          UISwitch(
            "自动执行",
            GlobalSettingConfig.autoLoadDebugTool.key,
            GlobalSettingConfig.autoLoadDebugTool.defaultValue,
            void 0,
            "关闭后将会在脚本菜单注册按钮，有3种状态【☯ 加载并显示】、【🌑 隐藏】、【🌕 显示】"
          ),
          UISwitch(
            "允许在iframe内加载",
            GlobalSettingConfig.allowRunInIframe.key,
            GlobalSettingConfig.allowRunInIframe.defaultValue
          ),
          UIInput(
            "全局挂载调试Api",
            GlobalSettingConfig.registerDebugBridgeApi.key,
            GlobalSettingConfig.registerDebugBridgeApi.defaultValue,
            "自定义全局挂载的Api的名称，留空则为不挂载"
          ),
        ],
      },
      {
        type: "container",
        text: "其它设置",
        views: [
          UISwitch(
            "面板尺寸跟随浏览器窗口尺寸",
            "panel-ui-size-follow-browser-window",
            false,
            void 0,
            "如果开启，设置面板的宽高将使用outerWidth和outerHeight获取，如果关闭，则使用innerWidth和innerHeight获取"
          ),
        ],
      },
    ],
  };
  const PanelUI_eruda = {
    id: "debug-panel-config-eruda",
    title: "Eruda",
    headerTitle: `<a href='${DebugToolConfig.eruda.settingDocUrl}' target='_blank'>Eruda设置</a>`,
    views: [
      {
        text: "功能",
        type: "container",
        views: [
          UIButton("当前版本", "", DebugToolConfig.eruda.version, void 0, false, false, "primary", (event) => {
            domUtils.preventEvent(event);
            window.open(DebugToolConfig.eruda.homeUrl, "_blank");
          }),
          UIOwn(
            ($li) => {
              const $left = domUtils.createElement("div", {
                className: "pops-panel-item-left-text",
                innerHTML: `
                            <p class="pops-panel-item-left-main-text">最新版本</p>
                        `,
              });
              const $right = domUtils.createElement("div", {
                className: "pops-panel-item-right-text",
                innerHTML: `
                        <a href="${DebugToolConfig.eruda.homeUrl}" target="_blank">
                            <img src="https://img.shields.io/npm/v/eruda/latest.svg?label=eruda" alt="eruda">
                        </a>
                        `,
              });
              $li.appendChild($left);
              $li.appendChild($right);
              return $li;
            },
            void 0,
            {
              text: "最新版本",
            }
          ),
          UISwitch(
            "自动打开面板",
            GlobalSettingConfig.eruda_auto_open_panel.key,
            GlobalSettingConfig.eruda_auto_open_panel.defaultValue,
            void 0,
            "加载完毕后自动显示面板内容"
          ),
          UISelect(
            "语言",
            GlobalSettingConfig.eruda_language.key,
            GlobalSettingConfig.eruda_language.defaultValue,
            ErudaLanguage.data.map((it) => {
              return {
                text: it.text,
                value: it.lng,
              };
            }),
            void 0,
            void 0,
            () => {
              ErudaLanguage.init();
              window.location.reload();
            }
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
                  return !Panel.getValue(GlobalSettingConfig.eruda_panel_console.key);
                },
              },
              {
                text: "Elements",
                value: "elements",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_panel_elements.key);
                },
              },
              {
                text: "Network",
                value: "network",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_panel_network.key);
                },
              },
              {
                text: "Resources",
                value: "resources",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_panel_resources.key);
                },
              },
              {
                text: "Sources",
                value: "sources",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_panel_sources.key);
                },
              },
              {
                text: "Info",
                value: "info",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_panel_info.key);
                },
              },
              {
                text: "Snippets",
                value: "snippets",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_panel_snippets.key);
                },
              },
              {
                text: "Monitor",
                value: "monitor",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaMonitor.key);
                },
              },
              {
                text: "Features",
                value: "features",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaFeatures.key);
                },
              },
              {
                text: "Timing",
                value: "timing",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaTiming.key);
                },
              },
              {
                text: "Code",
                value: "code",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaCode.key);
                },
              },
              {
                text: "Benchmark",
                value: "benchmark",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaBenchmark.key);
                },
              },
              {
                text: "Geolocation",
                value: "geolocation",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaGeolocation.key);
                },
              },
              {
                text: "Orientation",
                value: "orientation",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaOrientation.key);
                },
              },
              {
                text: "Touches",
                value: "touches",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaTouches.key);
                },
              },
              {
                text: "Outline",
                value: "outline",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.key);
                },
              },
              {
                text: "Pixel",
                value: "pixel",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaPixel.key);
                },
              },
              {
                text: "Vue",
                value: "vue",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.eruda_plugin_Resource_erudaVue.key);
                },
              },
              {
                text: "Settings",
                value: "settings",
              },
            ],
            void 0,
            "开启【自动打开面板】才会生效"
          ),
        ],
      },
      {
        text: "面板",
        type: "container",
        views: [
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
          ),
        ],
      },
      {
        text: "插件",
        type: "container",
        views: [
          UISwitch(
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
          ),
        ],
      },
    ],
  };
  const PanelUI_vConsole = {
    id: "debug-panel-config-vconsole",
    title: "vConsole",
    headerTitle: `<a href='${DebugToolConfig.vConsole.settingDocUrl}' target='_blank'>vConsole设置</a>`,
    views: [
      {
        text: "功能",
        type: "container",
        views: [
          UIButton("当前版本", "", DebugToolConfig.vConsole.version, void 0, false, false, "primary", (event) => {
            domUtils.preventEvent(event);
            window.open(DebugToolConfig.vConsole.homeUrl, "_blank");
          }),
          UIOwn(
            ($li) => {
              const $left = domUtils.createElement("div", {
                className: "pops-panel-item-left-text",
                innerHTML: `
                            <p class="pops-panel-item-left-main-text">最新版本</p>
                        `,
              });
              const $right = domUtils.createElement("div", {
                className: "pops-panel-item-right-text",
                innerHTML: `
                        <a href="${DebugToolConfig.vConsole.homeUrl}" target="_blank">
                            <img src="https://img.shields.io/npm/v/vconsole/latest.svg?label=vConsole" alt="vConsole">
                        </a>
                        `,
              });
              $li.appendChild($left);
              $li.appendChild($right);
              return $li;
            },
            void 0,
            {
              text: "最新版本",
            }
          ),
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
                value: "default",
              },
              {
                text: "System",
                value: "system",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.vConsole_panel_system.key);
                },
              },
              {
                text: "Network",
                value: "network",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.vConsole_panel_network.key);
                },
              },
              {
                text: "Element",
                value: "element",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.vConsole_panel_element.key);
                },
              },
              {
                text: "Storage",
                value: "storage",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.vConsole_panel_storage.key);
                },
              },
              {
                text: "Stats",
                value: "stats",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.vConsole_plugin_Resource_vConsole_Stats.key);
                },
              },
              {
                text: "exportLog",
                value: "exportlog",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog.key);
                },
              },
              {
                text: "Vue",
                value: "vue",
                disable() {
                  return !Panel.getValue(GlobalSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.key);
                },
              },
            ],
            void 0,
            "开启【自动打开面板】才会生效"
          ),
        ],
      },
      {
        text: "面板",
        type: "container",
        views: [
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
          ),
        ],
      },
      {
        text: "配置",
        type: "container",
        views: [
          UISelect(
            "主题",
            GlobalSettingConfig.vConsole_theme.key,
            GlobalSettingConfig.vConsole_theme.defaultValue,
            [
              {
                value: "auto",
                text: "自动",
              },
              {
                value: "light",
                text: "浅色主题",
              },
              {
                value: "dark",
                text: "深色主题",
              },
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
          UIInputNumber(
            "日志的上限数量",
            GlobalSettingConfig.vconsole_maxLogNumber.key,
            GlobalSettingConfig.vconsole_maxLogNumber.defaultValue,
            "请输入合适的数字"
          ),
          UIInputNumber(
            "请求记录的上限数量",
            GlobalSettingConfig.vconsole_maxNetworkNumber.key,
            GlobalSettingConfig.vconsole_maxNetworkNumber.defaultValue,
            "请输入合适的数字"
          ),
        ],
      },
      {
        text: "Storage配置",
        type: "container",
        views: [
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
          ),
        ],
      },
      {
        text: "插件",
        type: "container",
        views: [
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
          ),
        ],
      },
    ],
  };
  const PanelUI_pagespy = {
    id: "debug-panel-config-pagespy",
    title: "PageSpy",
    headerTitle: `<a href='${DebugToolConfig.pageSpy.settingDocUrl}' target='_blank'>PageSpy设置</a>`,
    views: [
      {
        text: "功能",
        type: "container",
        views: [
          UIButton(
            "注意！隐私保护！",
            "",
            "了解详情",
            void 0,
            false,
            false,
            "danger",
            (event) => {
              __pops__.confirm({
                title: {
                  text: "提示",
                  position: "center",
                },
                content: {
                  text: `下面默认配置的${DebugToolConfig.pageSpy.defaultConfig.api}是仅供测试使用的，其他人也可以看到你的调试信息，包括Cookie等信息，如果想用，请自己搭建一个调试端`,
                },
                btn: {
                  reverse: true,
                  position: "end",
                  ok: {
                    text: "前往了解更多",
                    callback() {
                      window.open("https://www.pagespy.org/#/docs/faq#test-domain", "_blank");
                    },
                  },
                },
                mask: {
                  enable: true,
                },
                width: PanelUISize.info.width,
                height: PanelUISize.info.height,
              });
            },
            void 0
          ),
          UIButton("当前版本", "", DebugToolConfig.pageSpy.version, void 0, false, false, "primary", (event) => {
            domUtils.preventEvent(event);
            window.open(DebugToolConfig.pageSpy.homeUrl, "_blank");
          }),
          UIOwn(
            ($li) => {
              const $left = domUtils.createElement("div", {
                className: "pops-panel-item-left-text",
                innerHTML: `
                            <p class="pops-panel-item-left-main-text">最新版本</p>
                        `,
              });
              const $right = domUtils.createElement("div", {
                className: "pops-panel-item-right-text",
                innerHTML: `
                        <a href="${DebugToolConfig.pageSpy.homeUrl}" target="_blank">
                            <img src="https://img.shields.io/npm/v/@huolala-tech/page-spy-browser?label=pagespy" alt="page-spy-browser">
                        </a>
                        `,
              });
              $li.appendChild($left);
              $li.appendChild($right);
              return $li;
            },
            void 0,
            {
              text: "最新版本",
            }
          ),
          UISwitch(
            "禁止在调试端运行",
            GlobalSettingConfig.pagespy_disable_run_in_debug_client.key,
            GlobalSettingConfig.pagespy_disable_run_in_debug_client.defaultValue,
            void 0,
            "调试端是下面配置的api/clientOrigin地址"
          ),
        ],
      },
      {
        text: "配置",
        type: "container",
        views: [
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
                text: "默认(自动分析)",
              },
              {
                value: true,
                text: "开启",
              },
              {
                value: false,
                text: "关闭",
              },
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
          ),
        ],
      },
    ],
  };
  const PanelUI_chii = {
    id: "debug-panel-config-chii",
    title: "Chii",
    headerTitle: `<a href='${DebugToolConfig.chii.settingDocUrl}' target='_blank'>Chii设置</a>`,
    views: [
      {
        text: "功能",
        type: "container",
        views: [
          UIButton(
            "调试页面",
            "",
            "前往",
            void 0,
            false,
            false,
            "primary",
            (event) => {
              let url = Panel.getValue("chii-debug-url", DebugToolConfig.chii.defaultConfig.url);
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
          ),
        ],
      },
      {
        text: "配置",
        type: "container",
        views: [
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
          ),
        ],
      },
      {
        text: "本页展示的配置",
        type: "container",
        views: [
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
              let $chobitsu = document.querySelector(".__chobitsu-hide__:has(iframe)");
              $chobitsu && ($chobitsu.style.height = value + "px");
            },
            (value) => value + "px",
            "可覆盖当前页面Chii面板的高度",
            1
          ),
        ],
      },
    ],
  };
  const _ChromeXt = (() =>
    typeof ChromeXt != "undefined"
      ? ChromeXt
      : typeof GM === "object" && GM != null && typeof GM.ChromeXt !== "undefined"
        ? GM.ChromeXt
        : void 0)();
  const _CAT_userConfig = (() => (typeof CAT_userConfig != "undefined" ? CAT_userConfig : void 0))();
  const _CAT_fileStorage = (() => (typeof CAT_fileStorage != "undefined" ? CAT_fileStorage : void 0))();
  const _CAT_scriptLoaded = (() => (typeof CAT_scriptLoaded != "undefined" ? CAT_scriptLoaded : void 0))();
  const _CAT_setProxy = (() => (typeof CAT_setProxy != "undefined" ? CAT_setProxy : void 0))();
  const _CAT_clearProxy = (() => (typeof CAT_clearProxy != "undefined" ? CAT_clearProxy : void 0))();
  const _CAT_click = (() => (typeof CAT_click != "undefined" ? CAT_click : void 0))();
  const DebugBridge = {
    init() {
      this.register();
    },
    register() {
      const exportName = Panel.getValue(GlobalSettingConfig.registerDebugBridgeApi.key);
      if (typeof exportName !== "string" || exportName.trim() === "") {
        return;
      }
      const GMApi = {
        window,
        unsafeWindow: _unsafeWindow,
        GM: typeof _GM !== "undefined" ? _GM : void 0,
        GM_addElement: typeof _GM_addElement !== "undefined" ? _GM_addElement : void 0,
        GM_addStyle: typeof _GM_addStyle !== "undefined" ? _GM_addStyle : void 0,
        GM_download: typeof _GM_download !== "undefined" ? _GM_download : void 0,
        GM_getResourceText: typeof _GM_getResourceText !== "undefined" ? _GM_getResourceText : void 0,
        GM_getResourceURL: typeof _GM_getResourceURL !== "undefined" ? _GM_getResourceURL : void 0,
        GM_info: typeof _GM_info !== "undefined" ? _GM_info : void 0,
        GM_log: typeof _GM_log !== "undefined" ? _GM_log : void 0,
        GM_notification: typeof _GM_notification !== "undefined" ? _GM_notification : void 0,
        GM_openInTab: typeof _GM_openInTab !== "undefined" ? _GM_openInTab : void 0,
        GM_registerMenuCommand: typeof _GM_registerMenuCommand !== "undefined" ? _GM_registerMenuCommand : void 0,
        GM_unregisterMenuCommand: typeof _GM_unregisterMenuCommand !== "undefined" ? _GM_unregisterMenuCommand : void 0,
        GM_setClipboard: typeof _GM_setClipboard !== "undefined" ? _GM_setClipboard : void 0,
        GM_getTab: typeof _GM_getTab !== "undefined" ? _GM_getTab : void 0,
        GM_saveTab: typeof _GM_saveTab !== "undefined" ? _GM_saveTab : void 0,
        GM_getTabs: typeof _GM_getTabs !== "undefined" ? _GM_getTabs : void 0,
        GM_setValue: typeof _GM_setValue !== "undefined" ? _GM_setValue : void 0,
        GM_getValue: typeof _GM_getValue !== "undefined" ? _GM_getValue : void 0,
        GM_getValues: typeof _GM_getValues !== "undefined" ? _GM_getValues : void 0,
        GM_deleteValue: typeof _GM_deleteValue !== "undefined" ? _GM_deleteValue : void 0,
        GM_listValues: typeof _GM_listValues !== "undefined" ? _GM_listValues : void 0,
        GM_addValueChangeListener:
          typeof _GM_addValueChangeListener !== "undefined" ? _GM_addValueChangeListener : void 0,
        GM_removeValueChangeListener:
          typeof _GM_removeValueChangeListener !== "undefined" ? _GM_removeValueChangeListener : void 0,
        GM_xmlhttpRequest: typeof _GM_xmlhttpRequest !== "undefined" ? _GM_xmlhttpRequest : void 0,
        GM_audio: typeof _GM_audio !== "undefined" ? _GM_audio : void 0,
        GM_setValues: typeof _GM_setValues !== "undefined" ? _GM_setValues : void 0,
        GM_deleteValues: typeof _GM_deleteValues !== "undefined" ? _GM_deleteValues : void 0,
      };
      const GMBetaApi = {
        GM_cookie:
          typeof _GM_cookie === "undefined" || (typeof _GM_cookie !== "undefined" && _GM_cookie == null)
            ? void 0
            : _GM_cookie,
        GM_webRequest:
          typeof _GM_webRequest === "undefined" || (typeof _GM_webRequest !== "undefined" && _GM_webRequest == null)
            ? void 0
            : void 0,
      };
      const ChromeXtApi = {
        ChromeXt: typeof _ChromeXt !== "undefined" ? _ChromeXt : void 0,
      };
      const ScriptCatApi = {
        CAT_userConfig: typeof _CAT_userConfig !== "undefined" ? _CAT_userConfig : void 0,
        CAT_fileStorage: typeof _CAT_fileStorage !== "undefined" ? _CAT_fileStorage : void 0,
        CAT_scriptLoaded: typeof _CAT_scriptLoaded !== "undefined" ? _CAT_scriptLoaded : void 0,
      };
      const ScriptCatBetaApi = {};
      const ScriptCatDeprecatedApi = {
        CAT_setProxy: typeof _CAT_setProxy !== "undefined" ? _CAT_setProxy : void 0,
        CAT_clearProxy: typeof _CAT_clearProxy !== "undefined" ? _CAT_clearProxy : void 0,
        CAT_click: typeof _CAT_click !== "undefined" ? _CAT_click : void 0,
      };
      const otherApi = {
        OriginPrototype,
        $,
        $$,
        AnyTouch,
        cookieManager,
        log: new utils.Log(_GM_info, _unsafeWindow.console || console),
        httpx,
        utils,
        DOMUtils: domUtils,
        pops: __pops__,
        Qmsg,
        MenuRegister,
        loadScript: (url) => {
          const $script = document.createElement("script");
          $script.src = url;
          return new Promise((resolve) => {
            $script.onload = () => {
              $script.remove();
              resolve(true);
            };
            (document.head || document.documentElement).appendChild($script);
          });
        },
      };
      const windowApi = {
        window,
        document,
        globalThis,
        self,
        topWindow: top?.window,
      };
      const exportApi = {
        ...GMApi,
        ...GMBetaApi,
        ...ChromeXtApi,
        ...ScriptCatApi,
        ...ScriptCatBetaApi,
        ...ScriptCatDeprecatedApi,
        ...otherApi,
        ...windowApi,
      };
      Object.freeze(exportApi);
      Reflect.set(unsafeWin, exportName, exportApi);
      if (
        typeof window[exportName] === "undefined" ||
        (typeof window[exportName] !== "undefined" && window[exportName] == null)
      ) {
        Reflect.set(window, exportName, exportApi);
      }
      console.log(`Debug Api${Panel.isTopWindow() ? "" : "（iframe）"}：` + exportName);
    },
  };
  PanelContent.addContentConfig([PanelUI_general, PanelUI_eruda, PanelUI_vConsole, PanelUI_pagespy, PanelUI_chii]);
  Panel.$data.panelConfig = {
    style: `
	aside.pops-panel-aside{
		width: 20%;
	}
	.plugin-anchor{
		text-decoration: none;
		display: inline-flex;
		vertical-align: text-bottom;
	}
`,
  };
  Panel.init();
  WebSiteDebug.init();
  DebugBridge.init();
  PanelSizeUtil.followBrowserSize = Boolean(Panel.getValue("panel-ui-size-follow-browser-window", false));
})(Qmsg, DOMUtils, pops, Utils);
