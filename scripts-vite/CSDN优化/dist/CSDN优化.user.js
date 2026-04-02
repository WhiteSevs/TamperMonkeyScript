// ==UserScript==
// @name         CSDN优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2026.4.2
// @author       WhiteSevs
// @description  支持PC和手机端、屏蔽广告、优化浏览体验、重定向拦截的Url、自动展开全文、自动展开代码块、全文居中、允许复制内容、去除复制内容的小尾巴、自定义屏蔽元素等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAEsFJREFUeF7tnQ2QHMV1x39v7iRZR6lQkNg5ySDQzp6lhNg4hgTiQMUEHD4EFE6Ck7JTJBVTGAwJNgmOCUphu0jAjiskfCXCcVJQMakEVwgGBBircBAJBiwwAmSJ210JIaSbkyxFwggb3c3L9tyuuNubmZ3Zr9vdm67a2tvb7tfvvf5vT/fr1+8JPVhes8mOCStRVgArBFYoDAAD5t2C+ZXPZfEPChz04G3zDvifFbZgXsKWfmXzcS7FXlOXdLtAIzZHvCV8BOUC4NfMgANzWiTXIR8Q8D8IDx6hfG/Q5a0W9dUWsl0JgGKGEz3h14EzLLhAoa8t2qrqRGDcgweBJyzlv7OjvDgTfDTSZ9cA4FWbU/qUc0Q4V+GURoRuVVuBZ1R5ZFx49H0uz7Sqn2bS7WgAdMOghw1Gt4ChIwFQsDlf4DLFf653fRF4UOEux+WhThOmowDQawNfPdidCISOAECvD3wnA2FGAbB1kONVuU7hsk6bGtvBj8BdIty0fIRt7egvqI8ZA8DwIFdaHl9AOGamhO+IfpUdnsXNQyPcMRP8tB0AhaM5DYvrgPNmQuAO7nMtHjc5u3mqnTy2FQB5m+sFbmyngN3Wl8LqnMtftYvvtgDAWO4QblQ4v12CdXM/Ag+hrG6HZbHlAChkuFwmBn9RNw9Ku3kX+LEqq51R/rGVfbcUAPkMd4twSSsF6HXaqtyTG+UPWiVnywBQsPlO6dTso61ifJbRfdxx+c1WyNwSAOQHeV6UX2oFw7OVpgov5Eb4ULPlbzoA8jbbBY5tNqMpPVB4PeeyrJm6aCoACrbvHGE8b9LSOg0cdFyOaBb5pgGgYPN/wJHNYiylE6mB/Y7LwmboqCkAKNhsBN7fDIZSGrE18JLj8oHYtUMqNgyAgu2fca9qlJG0fV0aeNhxGzOuNQSAgs1/ABfXxXraqFkauM9x+Xi9xOoGQGrkqVflzW/XiLGoLgAY8y7CPzRflJRi3RpQrqjHbJwYAOWDnXWpbb/uoWpJQ3N2gHJm0gOk5ACwfQfH9FSvJcPYGFFziph1kznSJgJAep7f2AC1o3VSf4LYACh78qxvhxBpHw1qwOP0uJ5F8QFg83DqxtXgwLSv+VrHjWebiQUA34FTub19/Kc9NaoBT7gqjqNpTQAY123PY/2s995tdETa3V7ZYVmcXsvlvCYAijZrZqvffrvHrNn9mXsHWZdPR9GNBIC5scPE9ee0dK8GLoi6kxgJgKLNt3vlgmb3jl9jnJv7iFmXC8OohAIg/fU3pvgOax06C4QCIP31d9gQNsBO1CwQCID019+Atju3aeAsEAiA9NffuaNYL2dhs8A0APhhWeD79XaUtutcDYzDqdWxi6YBYDjDFy3hhs4VI+WsXg14ypeGRvni5PbTAFC0+X6nRuGqV/C03YQGTOCqrMupoQBIp//eh0r1Y2DKDJBO/70PgOrHwBQApNN/7wOg+jFwGAD5JZwkHj/ofRWkEqrFybldbCivCyYUkh/k86J8JVVP72tAhT/PjfDVKQAo2jymtOYOeu+rtLskFPhO1uXswwDYvJgFc/r8y51Wd4mSclunBrxD4yxcuYc3/TVAcZDfUeW+OomlzbpQAyJcnB3hWz4ACjb/BHyqC+VIWa5fA99wXC6tAOAl4Bfrp5W27EINvOy4vL8CgHdamGalC3UzK1g+5LjMFT/BEhRaJXIp7v9OT9koUFT8pEtFlLexWCjKQsR/P0rhaIQM5h2OFjhaqR0KxY+nBy/478JeVfaKslct9lrq35f7mWexVJQlpZj9S0VYospSofwZ5lbJ7qpyhzWRNOqgWhw0f48pb5t3S1ik6sc3NnGQjhE4xlOOlebFPB4R2Kb4AaS3qbJHhH2q7FOLfZaSVciKeQkrtYFgXP3gSGGQ81D/0kezyn6Ee1V5UpXnhkbrA1fe5tbSoP5xEFOKH5fgKfV4amg3LzTCeME2sZemlEgnyqi+ioNcrOrHS0gSM8FES/cHvN9j2/LdjCSR50fvZVH/GKeJcJqov7WLH6lFWCUFm88Bf5uk05C6Zh1xL33c6+xke6P0ChnWIpw7mY7A90S5efkojzVK37TfupSV3jg/mkyrXzjhuBE2NUJ/yyLeO2cOF6lyE7CgBq0POC5Gdw2X4aM4RuZwhxDuBFrVyTUGACYUaaTveBRnCnkLbs263NawBJMI5G2GBXKVf4lybXaUrzW1jwwfE+E/pwBgHkcdt519zeinmMFW8QNmBsbyKV3kHBvoY8nSnexpRn8VGvkMfyPCn8WguUaKNk8ofCRG5WlVzMnSe+Zy67E72FtP+7A2uxez4EAfByZ9/1nH5e+b2YehVbD9sPV/PYnuXsdtfkzjCB2/7jQ57l9FlkKGH5RyG54UpTN/Ri3YfnqzX0mq3CDvkjAawznmWftZhsUygeUeDAIHEA7gsd8sbvo89mk/+w69w765/fy86kTaNRHuyY5Ex8rdtJglc/s5WyYyhc6XSmZQYT4eAyLM95TtlsVrHhQFXvmJsmmBcKfqlFjGrzhu8HbYKLTES1aVUSi/hD0CezyL+yuHK0E6eNUma8GzMj1g9rOOG5wC70WbIwaEX0Y5UpQjET8En3m5IrzhjLA2aszyGS4rLXjX1BjXZw0AEtsA4g5+YQkn4/EJ8F92UpCV63/Ccfm3sLb5DH8qwlXA8XXSn9xsneNyVjUdPzsp/KTGr+l2r4+v5nbyelC9QoZ/QfjDyd8JPJB1uSioflmu0Eee+fWWAHFL1uXbYXzFmAVelrxNwWwp4ipP4N+zLr8XVf+1QX5hDL6M8ttx6YbVmzuHRVGPmEYeYQF9ftNx+f3q/2+zWT4+sYWNLsoGDnGms4/91RWDXO0V1uRcLg8EgM1tpdnFADuquGNjnLTix7wRVKmWd7fZlps1wM4SI0tqyVb+fmPfOOccv4ddYfX9wVd/m3ZCTJq1qp3luKyLqlSw+TuTRjZssVWrg8r3InwtO8K11fW32pzixfWUVu50RrkycBaw2TplplK+6IzypcC6g3wrzg8oajYu2Pwr8Mkw+QV2mUdAkhCvtzgu10QptBbq4g7GpHr/7LjxzinMI6dkf/gNC85Q5Zw6+rrGcbmlut2wzYUWPBCT3m7H9Q1a00q1y50on86OclfIDPC/Ar9aq89IAGS4A+EzETT2GwAkMQNHGkladaMo7ppjsqBmjz8+xvmWsCruLkeE382O+LPXlDJsc6kFX681GJXvLWF50L38agBYFucu38WjsWaLkM6jdJO3uVHg+gi+DyUCgOMaz+LwErTQiau0WvWMoHOEu493/Wk0URlezIfEYpUl/JbCB0Mbh8TWKdr8hRI/kVPQBQzT5zSn23FWOHt4tZofBTMuP5XpZuog1gNnLVOxUHsG8AEQ9xFQc49cqH7GJRqmWJUPlLaRdwt8c3kd2bm3LmShN8+/9PLZoN76IBsEsBiKnEIubOFaDYCsyxyBsWpeti1myXgfO+NoRISPZ0eCfTnyNg/UsAruj70INBa/nMtQFFPV1rs4AjRQ52VgHcqT8/t5Mok1LWyP7C3gPUN5flbNUwxFvttE2eCMcnKQXFUAGHXc4K2xmbGsvgmnzVrFUz48NMrTQfUKg2xAw7OM+IvAuNvAoFsl1Z3OYDiZgyqst5QnsVif3UXNcHYBga4PlBaAgfkOailysh4iF2WDrEc5rVx/o+NyYsjAxT6gm9fPsce8wY5AOrZvsDKnq4HF3wbGNQQZtGRdlkYhshxL8LvAvFrIbeX3ZrYS+FxUaJT8IFeJTjm/2Oq4wfaQQg1FVmQxxpms629Hp5Xy9viVyhcqPJYbCd6pFG0+pfheWjVL2Lqs/LirdabxciJTsCecMTTiW6BCSyHDFaVz/Ttrct7iCrV2DvkMF4lw/yQ2nnPcYJN4wJFxEPePW8JlYVG5Am5dhW5vizbXa4wMq6rsyI0G52caHuQESzGPyajybNLDoJp2ANNbIeNbAK9GOL3F4xw2t23ot7gk6li3YPv7/cOLQREezY5MPX42xGP8ksya4ZbsIm6QTf6WOrAUbH8wDhvHSou/1aVFYGCK2EKG25FgY9Jk4gJPZ10+HNThcIazLQneYk6esRIfB0etOqsZKdpc6Akry4c05qDGvMz5uHFHPqDwJsKbomxS4UUPNlnKE2U6vkGlsJRlHJo4SAKWISxDy3+bzxPF+B9sR9iuHj/MhRhXJvNXtHmhaksYaAYO+CWZM4GNCBvxeNHzeHZoD89HzorBiTVCzzgKMa2AJUCFJoso2PxRyWvpGzV+gGvqcghJAoIkM0AhwycR33xpSujJXBKaQXXzGb4iwuerfk3Gp+HqRmlXtw/LqmLBqWFb2bxNLCugmXnCLLPFDH+pwpdryHNN3S5hrXDQKA5yrerhK0uhC6pGBqlo83WFS6tpeHD9kDvFN6CRbig7gxgnmUD3ME/IDI2wO6iTBPaU6xyXmwNBbrOm5I95WaQQxiWsEafQZrtoFW1u03dPwBrKhVMtuL/3NwoJcZLw4NIht+aUWRMUO5cy8FOPK0vOnOYkLzTJY9jqvfBzHKlzGY1lBVQ+44wGZ26Jk8zLdwo1EiU8DwhSgrlV9PQhZd3KUT+FXF2lYPtRSf1kFGYV32fxSp+y4Tg3xlFsQI8G3IeUs6IG/nAz4XxnpH7n2OJSVugYZ5QXb7XuWITaHHw642yOo8CoR3HAGqea5IRbeBkAiZ1Cwhg0WxMRnitlDffdwC3zPs64CvNQ5iHMs4S5eMwbN38rcz1hnii5aoeJSX0cAragbBFhs3n3hDcEBjxhwLwbLyDxGPAm/j4R8W3+ThxF+nWURxD2Cez1hH0WjI6XPX8skw1VmC/jZfrCgJp+jCu4+l64ZnG7OHZf8KInweZoQ2PSQjiSpNmWh1UQ5T6J5mnKxZCGHEMTCJ5W7RwNrHFcLp+YAQZZhfoJINMyWzRQfuT5ADA+bwdhv0LfbJF/NsspMD4ARw66vPVuiBib+4VgB8XZrKxelL1kAPuvnMvHjGyTAfAnQvN973tRgd0uk8LVOZdbpwDAJIRU4YfdLlzKf20NiPLBSoLJNExcbX31VI3QMHFGyjRQZE+NdaAwkYEi01CxvQ+AyFCxRvw0WmjvgqBmsGjfKJThhtLeYEpI8d5VySyTLOAmUpowYhZhIFbCiPJjIE0X12PAiJ0yxn8MpAkje2z4fXHiJ41KZ4HeGv/EaePSWaC3ABD2659iCg4SuQVXvXtOs50uUN2pY9NZoNOHNjZ/9SePLq8F0vTxsXXdWRUbTh9vxNk6yPGex3qaFwq1s7TUq9woOyyL08OuqlXEjgz4UKk0PMiVlnJ7r+qqF+XyhKuGRrijlmyxAFBeD5h4wufVIph+3xEaWOu4rIrDSXwAHM1p5u59HKJpnRnWQEiomyCuYgPANM7bXC8xri3PsPizuvtS/OHVuZBbxw0DoLwreFDLt3dmtaY7UHiBh7IuFyRhLdEM4AMg49+6WafT494m6Tet22QNmIQZKGdWfP3ikk8MAH9BmOFyJPhSYtyO03pN1oByhTPqh/5PVOoCgL8eyHB36f7fJYl6Syu3RAOq3JMbjY6oHtZx3QDwZwLbT4bw0ZZIlRKNq4HHHbf+jK8NAcCfCQZ5XhpIXBRXyrTedA2o8EJuJDwOYBydNQwAHwQ222Uii1Za2qQBhddzTcg20hQAlB8Hb2Hu0aelHRo46Li1U+rFYaRpACiDIG7c4Ti8pXWCNbDfcVnYLOU0FQBlEJgQMfFz1zVLktlB5yXHDc5AVq/4TQdAGQQm2ESsw4h6GZ+F7R523In4Sc0sLQFAGQQm8UKSDJrNlKvXaDU1Ytpk5bQMAP7uIDUWNQzERow8cTpvKQD8mSDD5SLcmJ4dxBmOd+v4ybCV1fWYd5P01HIAGGbKB0gGBE1/hiURtlvqmlM9lNVJD3bqka8tAKgwlvoT1B6ipOf5tSlG12grAPxHwoRnkcnZm7qXTR2btaXgmTc5u3mq0UFN0r7tAKgw5zuaenxh1nsbKzs8i5vjOHAmGdi4dWcMAIZB43KuynVaK6p1XGm6rJ7x2xfhplqu260Ua0YBUBHM3EY2AZ2VZO5MrVRMK2mb61oKd0XlNGpl/22zAyQVoteB0EkDXxmbjpgBqoHSa0DoxIHvaABUmDNRy0Q5t084R+GUpDPKTNY3AZnGlUdVeOR9dWQ5bRfvHTkDBAnfDWDolkHv2DVAXNTnl3CScYG2lDMVzjI5FuK2bXI9T+C7nrDOuMrndsVL99pkHhoi1zUzQJiUmxezYG4/Z6v6WTjNY8Jk75jTkFbCG09kLoFnTJ7Bd8Z4bOUe3mxRX20h2/UACNKSnwhLWIn6YFghsMKkeDEua+bdgvmVz+X2BwUOevC2eQf8zzox2FsQtvQrm+vNXdSWkayzk/8Hwkwl2TmhqxQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*.csdn.net/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.11.13/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@2.0.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@4.2.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.7.1/dist/index.umd.js
// @connect      blog.csdn.net
// @connect      mp-action.csdn.net
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

(function (Qmsg, DOMUtils, pops, Utils) {
  "use strict";

  var _GM_addValueChangeListener = (() =>
    typeof GM_addValueChangeListener != "undefined" ? GM_addValueChangeListener : void 0)();
  var _GM_deleteValue = (() => (typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0))();
  var _GM_getResourceText = (() => (typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0))();
  var _GM_getValue = (() => (typeof GM_getValue != "undefined" ? GM_getValue : void 0))();
  var _GM_info = (() => (typeof GM_info != "undefined" ? GM_info : void 0))();
  var _GM_listValues = (() => (typeof GM_listValues != "undefined" ? GM_listValues : void 0))();
  var _GM_registerMenuCommand = (() =>
    typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_removeValueChangeListener = (() =>
    typeof GM_removeValueChangeListener != "undefined" ? GM_removeValueChangeListener : void 0)();
  var _GM_setValue = (() => (typeof GM_setValue != "undefined" ? GM_setValue : void 0))();
  var _GM_setValues = (() => (typeof GM_setValues != "undefined" ? GM_setValues : void 0))();
  var _GM_unregisterMenuCommand = (() =>
    typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = (() => (typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0))();
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
  const CommonUtil$1 = {
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
        return CommonUtil$1.loadStyleLink(resourceMapData.url);
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
          .then(() => {
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
    toStr(data, space = 2) {
      const undefinedReplacedStr = `__undefined__placeholder__replaced__str__` + performance.now();
      const dataStr = JSON.stringify(
        data,
        (key, value) => {
          return value === void 0 ? undefinedReplacedStr : value;
        },
        space
      ).replace(new RegExp(`"${undefinedReplacedStr}"`, "g"), "undefined");
      return dataStr;
    },
    isVerticalScreen() {
      return !globalThis.screen.orientation.type.includes("landscape");
    },
    isMobileDevice(size = 768) {
      const isVerticalScreen = this.isVerticalScreen();
      if (isVerticalScreen) {
        return globalThis.innerWidth < size;
      } else {
        return globalThis.innerHeight < size;
      }
    },
    isTopWindow() {
      const win = typeof _unsafeWindow === "object" && _unsafeWindow != null ? _unsafeWindow : window;
      return win.top === win.self;
    },
    formatVideoDuration(duration) {
      if (typeof duration !== "number") {
        duration = parseInt(duration);
      }
      if (isNaN(duration)) {
        return duration.toString();
      }
      const zeroPadding = function (num) {
        if (num < 10) {
          return `0${num}`;
        } else {
          return num;
        }
      };
      if (duration < 60) {
        return `0:${zeroPadding(duration)}`;
      } else if (duration >= 60 && duration < 3600) {
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        return `${minutes}:${zeroPadding(seconds)}`;
      } else {
        const hours = Math.floor(duration / 3600);
        const minutes = Math.floor(duration / 60) % 60;
        const seconds = duration % 60;
        return `${hours}:${zeroPadding(minutes)}:${zeroPadding(seconds)}`;
      }
    },
    formatTimeStamp(time, endTime) {
      if (typeof time === "number") {
        if (time < 1e12) {
          const padZeroLength = String(Date.now()).length - String(time).length;
          time = time * Math.pow(10, padZeroLength);
        }
      }
      let result = time;
      let oldTime = new Date(typeof time === "string" ? time.replace(/-/g, "/") : time);
      let currentTime = new Date(endTime ?? Date.now());
      let timeDifference = currentTime.getTime() - oldTime.getTime();
      let days = Math.floor(timeDifference / (24 * 3600 * 1e3));
      if (days > 0) {
        if (days > 7) {
          result = utils.formatTime(oldTime.getTime());
        } else {
          result = days + "天前";
        }
      } else {
        let leave1 = timeDifference % (24 * 3600 * 1e3);
        let hours = Math.floor(leave1 / (3600 * 1e3));
        if (hours > 0) {
          result = hours + "小时前";
        } else {
          let leave2 = leave1 % (3600 * 1e3);
          let minutes = Math.floor(leave2 / (60 * 1e3));
          if (minutes > 0) {
            result = minutes + "分钟前";
          } else {
            let leave3 = leave2 % (60 * 1e3);
            let seconds = Math.round(leave3 / 1e3);
            result = seconds + "秒前";
          }
        }
      }
      return result;
    },
  };
  const utils = Utils.noConflict();
  const domUtils = DOMUtils.noConflict();
  const __pops__ = pops;
  const log = new utils.Log(_GM_info, _unsafeWindow.console || _monkeyWindow.console);
  const SCRIPT_NAME = _GM_info?.script?.name || void 0;
  const AnyTouch = pops.fn.Utils.AnyTouch();
  log.config({
    debug: false,
    logMaxCount: 250,
    autoClearConsole: true,
    tag: true,
  });
  const getPageMaxZIndex = () => {
    const deviation = 100;
    const popsZIndex = pops.fn.InstanceUtils.getPopsMaxZIndex()?.zIndex ?? 0;
    const pointZIndex = utils.getMaxZIndexNodeInfoFromPoint()[0]?.zIndex ?? 0;
    const maxZIndex = Math.max(deviation, popsZIndex, pointZIndex);
    return maxZIndex;
  };
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
  const MenuRegister = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand,
  });
  const httpx = new utils.Httpx({
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
    }
  );
  ({
    Object: {
      defineProperty: _unsafeWindow.Object.defineProperty,
      keys: _unsafeWindow.Object.keys,
      values: _unsafeWindow.Object.values,
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
  });
  const addStyle = domUtils.addStyle.bind(domUtils);
  CommonUtil$1.addBlockCSS.bind(CommonUtil$1);
  const $ = DOMUtils.selector.bind(DOMUtils);
  const $$ = DOMUtils.selectorAll.bind(DOMUtils);
  new utils.GM_Cookie();
  const KEY = "GM_Panel";
  const ATTRIBUTE_INIT = "data-init";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  const ATTRIBUTE_PLUGIN_SEARCH_CONFIG = "data-plugin-search-config";
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
          fileData = CommonUtil$1.toStr(fileData);
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
            let clipboardText = await CommonUtil$1.getClipboardText();
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
        const configDataStr = CommonUtil$1.toStr(configData);
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
      if (!CommonUtil$1.isTopWindow()) {
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
    cacheData;
    callbacks = [];
    constructor(key) {
      if (typeof key === "string") {
        const trimKey = key.trim();
        if (trimKey == "") {
          throw new Error("key can not be empty string");
        }
        this.storageKey = trimKey;
      } else {
        throw new TypeError("key must be a string");
      }
      this.listenerData = new Utils.Dictionary();
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
      } else {
        return this.cacheData;
      }
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
      if (!this.listenerData.has(key)) {
        return;
      }
      const listenerData = this.listenerData.get(key);
      for (let index = 0; index < listenerData.length; index++) {
        const data = listenerData[index];
        if (typeof data.callback === "function") {
          let __newValue;
          let __oldValue;
          if (args.length === 1);
          else if (args.length === 2) {
            __newValue = newValue;
          } else if (args.length === 3) {
            __newValue = newValue;
            __oldValue = oldValue;
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
    initContentDefaultValue() {
      const initDefaultValue = (config) => {
        if (!config.attributes) {
          return;
        }
        if (config.type === "button" || config.type === "container" || config.type === "deepMenu") {
          return;
        }
        const attributes = config.attributes;
        const __attr_init__ = attributes[ATTRIBUTE_INIT];
        if (typeof __attr_init__ === "function") {
          const __attr_result__ = __attr_init__();
          if (typeof __attr_result__ === "boolean" && !__attr_result__) {
            return;
          }
        }
        const menuDefaultConfig = new Map();
        const key = attributes[ATTRIBUTE_KEY];
        if (key != null) {
          const defaultValue = attributes[ATTRIBUTE_DEFAULT_VALUE];
          menuDefaultConfig.set(key, defaultValue);
        }
        const moreMenuDefaultConfig = attributes[ATTRIBUTE_INIT_MORE_VALUE];
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
          const disabled = typeof config.disabled === "function" ? config.disabled() : config.disabled;
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
          const configItem = configList[index];
          initDefaultValue(configItem);
          const childViews = configItem.views;
          if (childViews && Array.isArray(childViews)) {
            loopInitDefaultValue(childViews);
          }
        }
      };
      const contentConfigList = [...PanelContent.getAllContentConfig()];
      for (let index = 0; index < contentConfigList.length; index++) {
        const leftContentConfigItem = contentConfigList[index];
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
        log.warn("该key已存在，初始化默认值失败: ", {
          key,
          initValue: this.$data.contentConfigInitDefaultValue.get(key),
        });
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
    addValueChangeListener(key, callback, option) {
      const listenerId = PopsPanelStorageApi.addValueChangeListener(key, callback);
      if (option?.immediate || option?.immediateAll) {
        const value = this.getValue(key);
        if (option?.immediate) {
          callback(key, value, value);
        } else if (option?.immediateAll) {
          Panel.emitMenuValueChange(key, value, value);
        }
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
        const dynamicMenuStoreValueList = [];
        const dynamicDestoryFnList = [];
        let resultValueList = [];
        if (Array.isArray(args)) {
          resultValueList = resultValueList.concat(args);
        } else {
          const handleArgs = (obj) => {
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
              handleArgs(it);
            }
          } else {
            handleArgs(args);
          }
        }
        const handleResult = (it) => {
          if (it == null) {
            return;
          }
          if (it instanceof Element) {
            dynamicMenuStoreValueList.push(it);
            return;
          }
          if (typeof it === "function") {
            dynamicDestoryFnList.push(it);
            return;
          }
        };
        for (const it of resultValueList) {
          const flag = handleResult(it);
          if (typeof flag === "boolean" && !flag) {
            break;
          }
          if (Array.isArray(it)) {
            for (const it2 of it) {
              const flag2 = handleResult(it2);
              if (typeof flag2 === "boolean" && !flag2) {
                break;
              }
            }
          }
        }
        execClearStoreStyleElements();
        execDestory();
        if (enableValue) {
          storeValueList = storeValueList.concat(dynamicMenuStoreValueList);
          destoryFnList = destoryFnList.concat(dynamicDestoryFnList);
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
        let callbackResult = [];
        if (execFlag) {
          const valueList = keyList.map((key) => this.getValue(key));
          callbackResult = await callback({
            key: keyList,
            triggerKey: valueOption?.key,
            value: isArrayKey ? valueList : valueList[0],
            addStoreValue: (...args) => {
              return addStoreValueCallback(execFlag, args);
            },
          });
        }
        addStoreValueCallback(execFlag, callbackResult);
      };
      if (once) {
        keyList.forEach((key) => {
          const listenerId = this.addValueChangeListener(key, (key2, newValue, oldValue) => {
            return valueChangeCallback({
              key: key2,
            });
          });
          listenerIdList.push(listenerId);
        });
      }
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
          if (once) {
            that.$data.onceExecMenuData.delete(storageKey);
          }
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
            if (isReverse) {
              flag = !flag;
            }
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
    onceExec(key, callback, runWithMenuEnable = false) {
      key = this.transformKey(key);
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (this.$data.onceExecData.has(key)) {
        return;
      }
      if (runWithMenuEnable) {
        const findIndex = (Array.isArray(key) ? key : [key]).findIndex((it) => {
          const menuEnable = !!Panel.getValue(it);
          if (!menuEnable) {
            return true;
          }
        });
        if (findIndex !== -1) {
          return;
        }
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
          const panelHandlerComponents = __pops__.fn.PanelHandlerComponents();
          domUtils.on($item, "click", () => {
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
                  let searchConfig = Reflect.get(configItem.attributes || {}, ATTRIBUTE_PLUGIN_SEARCH_CONFIG);
                  if (searchConfig) {
                    if (typeof searchConfig === "function") {
                      searchConfig = searchConfig();
                    }
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
                  const pathStr = pathList.join(CommonUtil$1.escapeHtml(" - "));
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
      const $asideItems = $panel.$shadowRoot.querySelectorAll(
        `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`
      );
      $asideItems.forEach(($asideItem) => {
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
    getDynamicValue(key, defaultValue) {
      const that = this;
      let isInit = false;
      let __value = defaultValue;
      const listenerId = this.addValueChangeListener(key, (_, newValue) => {
        __value = newValue;
      });
      return {
        get value() {
          if (!isInit) {
            isInit = true;
            __value = that.getValue(key, defaultValue);
          }
          return __value;
        },
        destory() {
          that.removeValueChangeListener(listenerId);
        },
      };
    },
  };
  class RouterBuilder {
    __href__;
    get __href() {
      return this.__href__ || globalThis.location.href;
    }
    __origin = {
      value: void 0,
      type: "same",
    };
    __protocol = {
      value: void 0,
      type: "same",
    };
    __host = {
      value: void 0,
      type: "same",
      hasPort: false,
    };
    __pathname = {
      value: void 0,
      type: "same",
    };
    __searchParams = {
      value: new Set(),
    };
    constructor(href) {
      if (typeof href === "string") {
        this.href(href);
      }
    }
    href(url) {
      this.__href__ = url;
      return this;
    }
    origin(origin) {
      this.__origin = {
        value: origin,
        type: "same",
      };
      return this;
    }
    originStartsWith(origin) {
      this.__origin = {
        value: origin,
        type: "startsWith",
      };
      return this;
    }
    originEndsWith(origin) {
      this.__origin = {
        value: origin,
        type: "endsWith",
      };
      return this;
    }
    originIncludes(origin) {
      this.__origin = {
        value: origin,
        type: "includes",
      };
      return this;
    }
    originMatch(origin) {
      this.__origin = {
        value: origin,
        type: "match",
      };
      return this;
    }
    protocol(protocol) {
      this.__protocol = {
        value: protocol,
        type: "same",
      };
      return this;
    }
    protocolStartsWith(protocol) {
      this.__protocol = {
        value: protocol,
        type: "startsWith",
      };
      return this;
    }
    protocolEndsWith(protocol) {
      this.__protocol = {
        value: protocol,
        type: "endsWith",
      };
      return this;
    }
    protocolIncludes(protocol) {
      this.__protocol = {
        value: protocol,
        type: "includes",
      };
      return this;
    }
    protocolMatch(protocol) {
      this.__protocol = {
        value: protocol,
        type: "match",
      };
      return this;
    }
    host(host) {
      this.__host = {
        value: host,
        type: "same",
        hasPort: true,
      };
      return this;
    }
    hostStartsWith(host) {
      this.__host = {
        value: host,
        type: "startsWith",
        hasPort: true,
      };
      return this;
    }
    hostEndsWith(host) {
      this.__host = {
        value: host,
        type: "endsWith",
        hasPort: true,
      };
      return this;
    }
    hostIncludes(host) {
      this.__host = {
        value: host,
        type: "includes",
        hasPort: true,
      };
      return this;
    }
    hostMatch(host) {
      this.__host = {
        value: host,
        type: "match",
        hasPort: true,
      };
      return this;
    }
    hostName(hostName) {
      this.__host = {
        value: hostName,
        type: "same",
        hasPort: false,
      };
      return this;
    }
    hostNameStartsWith(hostName) {
      this.__host = {
        value: hostName,
        type: "startsWith",
        hasPort: false,
      };
      return this;
    }
    hostNameEndsWith(hostName) {
      this.__host = {
        value: hostName,
        type: "endsWith",
        hasPort: false,
      };
      return this;
    }
    hostNameIncludes(hostName) {
      this.__host = {
        value: hostName,
        type: "includes",
        hasPort: false,
      };
      return this;
    }
    hostNameMatch(hostName) {
      this.__host = {
        value: hostName,
        type: "match",
        hasPort: false,
      };
      return this;
    }
    pathname(pathname) {
      this.__pathname = {
        value: pathname,
        type: "same",
      };
      return this;
    }
    pathnameStartsWith(pathname) {
      this.__pathname = {
        value: pathname,
        type: "startsWith",
      };
      return this;
    }
    pathnameEndsWith(pathname) {
      this.__pathname = {
        value: pathname,
        type: "endsWith",
      };
      return this;
    }
    pathnameIncludes(pathname) {
      this.__pathname = {
        value: pathname,
        type: "includes",
      };
      return this;
    }
    pathnameMatch(pathname) {
      this.__pathname = {
        value: pathname,
        type: "match",
      };
      return this;
    }
    searchParams(name, value) {
      this.__searchParams.value.add({
        name,
        value,
      });
      return this;
    }
    search(value) {
      this.__searchParams.value.add({
        name: "",
        value,
        type: "same",
      });
      return this;
    }
    searchStartsWith(value) {
      this.__searchParams.value.add({
        name: "",
        value,
        type: "startsWith",
      });
      return this;
    }
    searchEndsWith(value) {
      this.__searchParams.value.add({
        name: "",
        value,
        type: "endsWith",
      });
      return this;
    }
    searchIncludes(value) {
      this.__searchParams.value.add({
        name: "",
        value,
        type: "includes",
      });
      return this;
    }
    searchMatch(value) {
      this.__searchParams.value.add({
        name: "",
        value,
        type: "match",
      });
      return this;
    }
    build() {
      if (!this.__host.value) {
        throw new TypeError("host or hostName should be required");
      }
      const protocol = this.__protocol.value || "https";
      const host = this.__host.value;
      const pathname = this.__pathname.value || "/";
      let url = `${protocol}://${host}${pathname}`;
      if (this.__searchParams.value.size > 0) {
        const searhList = [];
        this.__searchParams.value.forEach((it) => {
          if (typeof it.name === "string") {
            let value = "";
            if (typeof it.value === "string" || typeof it.value === "number" || typeof it.value === "boolean") {
              value = it.value.toString();
            }
            searhList.push(`${encodeURIComponent(it.name)}=${encodeURIComponent(value)}`);
          }
        });
        if (searhList.length) {
          url += `?${searhList.join("&")}`;
        }
      }
      return url;
    }
    or(href) {
      return new RouterBuilder(href);
    }
    r() {
      const urlInst = new URL(this.__href);
      const flag = [
        () => {
          if (this.__origin.value) {
            if (this.__origin.type === "same") {
              if (typeof this.__origin.value === "string") {
                return urlInst.origin === this.__origin.value;
              } else {
                throw new TypeError("origin value should be string by type " + this.__origin.type);
              }
            } else if (this.__origin.type === "startsWith") {
              if (typeof this.__origin.value === "string") {
                return urlInst.origin.startsWith(this.__origin.value);
              } else {
                throw new TypeError("origin value should be string by type " + this.__origin.type);
              }
            } else if (this.__origin.type === "endsWith") {
              if (typeof this.__origin.value === "string") {
                return urlInst.origin.endsWith(this.__origin.value);
              } else {
                throw new TypeError("origin value should be string by type " + this.__origin.type);
              }
            } else if (this.__origin.type === "includes") {
              if (typeof this.__origin.value === "string") {
                return urlInst.origin.includes(this.__origin.value);
              } else {
                throw new TypeError("origin value should be string by type " + this.__origin.type);
              }
            } else if (this.__origin.type === "match") {
              if (this.__origin.value instanceof RegExp) {
                return this.__origin.value.test(urlInst.origin);
              } else if (typeof this.__origin.value === "string") {
                return urlInst.origin.match(this.__origin.value);
              } else {
                throw new TypeError("origin value should be RegExp or string by type " + this.__origin.type);
              }
            } else {
              throw new TypeError("origin type should be same or startsWith or endsWith or includes or match");
            }
          } else {
            return true;
          }
        },
        () => {
          if (this.__protocol.value) {
            if (this.__protocol.type === "same") {
              if (typeof this.__protocol.value === "string") {
                return urlInst.protocol === this.__protocol.value;
              } else {
                throw new TypeError("protocol value should be string by type " + this.__protocol.type);
              }
            } else if (this.__protocol.type === "startsWith") {
              if (typeof this.__protocol.value === "string") {
                return urlInst.protocol.startsWith(this.__protocol.value);
              } else {
                throw new TypeError("protocol value should be string by type " + this.__protocol.type);
              }
            } else if (this.__protocol.type === "endsWith") {
              if (typeof this.__protocol.value === "string") {
                return urlInst.protocol.endsWith(this.__protocol.value);
              } else {
                throw new TypeError("protocol value should be string by type " + this.__protocol.type);
              }
            } else if (this.__protocol.type === "includes") {
              if (typeof this.__protocol.value === "string") {
                return urlInst.protocol.includes(this.__protocol.value);
              } else {
                throw new TypeError("protocol value should be string by type " + this.__protocol.type);
              }
            } else if (this.__protocol.type === "match") {
              if (this.__protocol.value instanceof RegExp) {
                return this.__protocol.value.test(urlInst.protocol);
              } else if (typeof this.__protocol.value === "string") {
                return urlInst.protocol.match(this.__protocol.value);
              } else {
                throw new TypeError("protocol value should be RegExp or string by type " + this.__protocol.type);
              }
            } else {
              throw new TypeError("protocol type should be same,startsWith,endsWith,includes,match");
            }
          } else {
            return true;
          }
        },

        () => {
          if (this.__host.value) {
            const host = this.__host.hasPort ? urlInst.host : urlInst.hostname;
            if (this.__host.type === "same") {
              if (typeof this.__host.value === "string") {
                return this.__host.value === host;
              } else {
                throw new TypeError("host value should be string by type " + this.__host.type);
              }
            } else if (this.__host.type === "startsWith") {
              if (typeof this.__host.value === "string") {
                return host.startsWith(this.__host.value);
              } else {
                throw new TypeError("host value should be string by type " + this.__host.type);
              }
            } else if (this.__host.type === "endsWith") {
              if (typeof this.__host.value === "string") {
                return host.endsWith(this.__host.value);
              } else {
                throw new TypeError("host value should be string by type " + this.__host.type);
              }
            } else if (this.__host.type === "includes") {
              if (typeof this.__host.value === "string") {
                return host.includes(this.__host.value);
              } else {
                throw new TypeError("host value should be string by type " + this.__host.type);
              }
            } else if (this.__host.type === "match") {
              if (this.__host.value instanceof RegExp) {
                return this.__host.value.test(host);
              } else if (typeof this.__host.value === "string") {
                return host.match(this.__host.value);
              } else {
                throw new TypeError("host value should be RegExp or string by type " + this.__host.type);
              }
            } else {
              throw new TypeError("host type should be same,startsWith,endsWith,includes,match");
            }
          } else {
            return true;
          }
        },
        () => {
          if (this.__pathname.value) {
            if (this.__pathname.type === "same") {
              if (typeof this.__pathname.value === "string") {
                return urlInst.pathname === this.__pathname.value;
              } else {
                throw new TypeError("pathname value should be string by type " + this.__pathname.type);
              }
            } else if (this.__pathname.type === "startsWith") {
              if (typeof this.__pathname.value === "string") {
                return urlInst.pathname.startsWith(this.__pathname.value);
              } else {
                throw new TypeError("pathname value should be string by type " + this.__pathname.type);
              }
            } else if (this.__pathname.type === "endsWith") {
              if (typeof this.__pathname.value === "string") {
                return urlInst.pathname.endsWith(this.__pathname.value);
              } else {
                throw new TypeError("pathname value should be string by type " + this.__pathname.type);
              }
            } else if (this.__pathname.type === "includes") {
              if (typeof this.__pathname.value === "string") {
                return urlInst.pathname.includes(this.__pathname.value);
              } else {
                throw new TypeError("pathname value should be string by type " + this.__pathname.type);
              }
            } else if (this.__pathname.type === "match") {
              if (this.__pathname.value instanceof RegExp) {
                return this.__pathname.value.test(urlInst.pathname);
              } else if (typeof this.__pathname.value === "string") {
                return urlInst.pathname.match(this.__pathname.value);
              } else {
                throw new TypeError("pathname value should be RegExp or string by type " + this.__pathname.type);
              }
            } else {
              throw new TypeError("pathname type should be same,startsWith,endsWith,includes,match");
            }
          } else {
            return true;
          }
        },

        () => {
          let flag2 = true;
          const searchParamsList = [];
          this.__searchParams.value.forEach((item) => {
            searchParamsList.push(item);
          });
          for (let index = 0; index < searchParamsList.length; index++) {
            const item = searchParamsList[index];
            if (item.type) {
              if (item.type === "same") {
                if (
                  typeof item.value === "string" ||
                  typeof item.value === "number" ||
                  typeof item.value === "boolean"
                ) {
                  return urlInst.search === item.value.toString();
                } else {
                  throw new TypeError("search value should be string、number、boolean by type " + item.type);
                }
              } else if (item.type === "startsWith") {
                if (
                  typeof item.value === "string" ||
                  typeof item.value === "number" ||
                  typeof item.value === "boolean"
                ) {
                  return urlInst.search.startsWith(item.value.toString());
                } else {
                  throw new TypeError("search value should be string、number、boolean by type " + item.type);
                }
              } else if (item.type === "endsWith") {
                if (
                  typeof item.value === "string" ||
                  typeof item.value === "number" ||
                  typeof item.value === "boolean"
                ) {
                  return urlInst.search.endsWith(item.value.toString());
                } else {
                  throw new TypeError("search value should be string、number、boolean by type " + item.type);
                }
              } else if (item.type === "includes") {
                if (
                  typeof item.value === "string" ||
                  typeof item.value === "number" ||
                  typeof item.value === "boolean"
                ) {
                  return urlInst.search.includes(item.value.toString());
                } else {
                  throw new TypeError("search value should be string、number、boolean by type " + item.type);
                }
              } else if (item.type === "match") {
                if (item.value instanceof RegExp) {
                  return item.value.test(urlInst.search);
                } else if (
                  typeof item.value === "string" ||
                  typeof item.value === "number" ||
                  typeof item.value === "boolean"
                ) {
                  return urlInst.search.match(item.value.toString());
                } else {
                  throw new TypeError("search value should be RegExp、string、number、boolean by type " + item.type);
                }
              } else {
                throw new TypeError("search type should be same, startsWith, endsWith, includes, match");
              }
            } else {
              if (typeof item.name === "string") {
                let value = item.value;
                if (
                  value == null ||
                  typeof value === "string" ||
                  typeof value === "number" ||
                  typeof value === "boolean"
                ) {
                  value = value == null ? void 0 : value.toString();
                  if (!urlInst.searchParams.has(item.name, value)) {
                    flag2 = false;
                    break;
                  }
                } else if (value instanceof RegExp) {
                  const targetValue = urlInst.searchParams.get(item.name);
                  if (targetValue) {
                    if (!value.test(targetValue)) {
                      flag2 = false;
                      break;
                    }
                  } else {
                    flag2 = false;
                    break;
                  }
                } else {
                  throw new TypeError("searchParams value should be string, RegExp, boolean, number, null, undefined");
                }
              } else if (item.name instanceof RegExp) {
                let targetKey = void 0;
                let targetValue = void 0;
                urlInst.searchParams.forEach((__value__, __key__) => {
                  if (!targetKey && __key__.match(item.name)) {
                    targetKey = __key__;
                    targetValue = __value__;
                  }
                });
                if (targetKey) {
                  let value = item.value;
                  if (value == null);
                  else if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
                    value = value.toString();
                    flag2 = value === targetValue;
                    if (!flag2) {
                      break;
                    }
                  } else if (value instanceof RegExp) {
                    if (targetValue) {
                      if (!value.test(targetValue)) {
                        flag2 = false;
                        break;
                      }
                    } else {
                      flag2 = false;
                      break;
                    }
                  } else {
                    throw new TypeError(
                      "searchParams value should be string, RegExp, boolean, number, null, undefined"
                    );
                  }
                } else {
                  flag2 = false;
                  break;
                }
              } else {
                throw new TypeError("searchParams name should be string or RegExp");
              }
            }
          }
          return flag2;
        },
      ].every((it) => it());
      return flag;
    }
  }
  const RouterUtil = {
    host(host, href) {
      return RouterUtil.builder(href).host(host);
    },
    hostName(name, href) {
      return RouterUtil.builder(href).hostName(name);
    },
    search(value, href) {
      return RouterUtil.builder(href).search(value);
    },
    seachParams(name, value, href) {
      return RouterUtil.builder(href).searchParams(name, value);
    },
    pathname(name, href) {
      return RouterUtil.builder(href).pathname(name);
    },
    protocol(protocol, href) {
      return RouterUtil.builder(href).protocol(protocol);
    },
    builder(href) {
      return new RouterBuilder(href);
    },
  };
  const CSDNRouter = {
    isHuaWeiCloudBlog() {
      return RouterUtil.builder().originIncludes("huaweicloud.csdn.net").r();
    },
    isBlog() {
      return RouterUtil.builder().originIncludes("blog.csdn.net").r();
    },
    isBlogArticle() {
      return this.isBlog() && RouterUtil.builder().pathnameIncludes("/article/details/").r();
    },
    isWenKu() {
      return RouterUtil.builder().originIncludes("wenku.csdn.net").r();
    },
    isLink() {
      return RouterUtil.hostName("link.csdn.net").r();
    },
    isSo() {
      return RouterUtil.hostName("so.csdn.net").r();
    },
    isSoCKnow() {
      return this.isSo() && RouterUtil.builder().pathnameStartsWith("/chat").or().pathnameStartsWith("/so/ai").r();
    },
    isDownload() {
      return RouterUtil.hostName("download.csdn.net").r();
    },
  };
  const CSDNLink = {
    init() {
      Panel.execMenuOnce("csdn-link-jumpRedirect", () => {
        this.jumpRedirect();
      });
    },
    jumpRedirect() {
      try {
        let urlSearchParams = new URLSearchParams(window.location.search);
        const URL_KEY = "target";
        if (urlSearchParams.has(URL_KEY)) {
          let target = urlSearchParams.get(URL_KEY);
          let jumpUrl = decodeURIComponent(target);
          log.success(`跳转链接：${jumpUrl}`);
          window.location.href = jumpUrl;
        } else {
          log.error("解析跳转的链接失败，原因：搜索参数中没有target参数");
        }
      } catch (error) {
        Qmsg.error("跳转链接失败：" + error.message);
      }
    },
  };
  const M_CSDNLink = {
    init() {
      Panel.execMenuOnce("m-csdn-link-jumpRedirect", () => {
        CSDNLink.jumpRedirect();
      });
    },
  };
  const ShieldCSS$4 =
    "/* 右下角的 免费赢华为平板xxxx */\n.org-main-content .siderbar-box {\n  display: none !important;\n}\n";
  const ShieldCSS$3 =
    "/* 底部免费抽xxx奖品广告 */\ndiv.siderbar-box,\n/* 华为开发者联盟加入社区 */\ndiv.user-desc.user-desc-fix {\n  display: none !important;\n}\n";
  const CSDNHuaWeiCloud = {
    init() {
      addStyle(ShieldCSS$3);
      Panel.execMenuOnce("csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent", () => {
        return this.shieldCloudDeveloperTaskChallengeEvent();
      });
      Panel.execMenuOnce("csdn-hua-wei-cloud-autoExpandContent", () => {
        return this.autoExpandContent();
      });
      Panel.execMenuOnce("csdn-hua-wei-cloud-shieldLeftFloatingButton", () => {
        return this.shieldLeftFloatingButton();
      });
      Panel.execMenuOnce("csdn-hua-wei-cloud-blockRightColumn", () => {
        return this.blockRightColumn();
      });
      Panel.execMenuOnce("csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom", () => {
        return this.blockRecommendedContentAtTheBottom();
      });
      Panel.execMenuOnce("csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations", () => {
        return this.shieldTheBottomForMoreRecommendations();
      });
    },
    autoExpandContent() {
      log.info("自动展开全文");
      return [
        CommonUtil$1.addBlockCSS("div.article-show-more"),
        addStyle(`
			/* 自动展开全文 */
			.main-content .user-article{
				height: auto !important;
				overflow: auto !important;
			}
			`),
      ];
    },
    shieldCloudDeveloperTaskChallengeEvent() {
      log.info("屏蔽云开发者任务挑战活动");
      return CommonUtil$1.addBlockCSS(".luck-draw-modal-warp");
    },
    shieldLeftFloatingButton() {
      log.info("屏蔽左侧悬浮按钮，包括当前阅读量、点赞按钮、评论按钮、分享按钮");
      return CommonUtil$1.addBlockCSS("div.toolbar-wrapper.article-interact-bar");
    },
    blockRightColumn() {
      log.info("屏蔽右侧栏，包括相关产品-活动日历-运营活动-热门标签");
      return CommonUtil$1.addBlockCSS("div.page-home-right.dp-aside-right");
    },
    blockRecommendedContentAtTheBottom() {
      log.info("屏蔽底部推荐内容");
      return CommonUtil$1.addBlockCSS("div.recommend-card-box");
    },
    shieldTheBottomForMoreRecommendations() {
      log.info("屏蔽底部更多推荐");
      return CommonUtil$1.addBlockCSS("div.more-article");
    },
  };
  const M_CSDNHuaWeiCloud = {
    init() {
      addStyle(ShieldCSS$4);
      Panel.execMenuOnce("m-csdn-hua-wei-cloud-autoExpandContent", () => {
        return CSDNHuaWeiCloud.autoExpandContent();
      });
      Panel.execMenuOnce("m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity", () => {
        return this.blockBottomJoinTheCommunity();
      });
    },
    blockBottomJoinTheCommunity() {
      log.info("【屏蔽】底部加入社区");
      return CommonUtil$1.addBlockCSS(".user-desc");
    },
  };
  const BlogCSS =
    "/*.blog_container_aside,\n#nav {\n	margin-left: -45px;\n}\n.recommend-right.align-items-stretch.clearfix,\n.dl_right_fixed {\n	margin-left: 45px;\n}*/\n";
  const BlogShieldCSS =
    '.ecommend-item-box.recommend-recommend-box,\n.login-mark,\n.opt-box.text-center,\n.leftPop,\n#csdn-shop-window,\n.toolbar-advert,\n.hide-article-box,\n.user-desc.user-desc-fix,\n.recommend-card-box,\n.more-article,\n.article-show-more,\n#csdn-toolbar-profile-nologin,\n.guide-rr-first,\n#recommend-item-box-tow,\n/* 发文章得原力分图片提示 */\ndiv.csdn-toolbar-creative-mp,\n/* 阅读终点，创作起航，您可以撰写心得或摘录文章要点写篇博文。 */\n#toolBarBox div.write-guide-buttom-box,\n/* 觉得还不错? 一键收藏 */\nul.toolbox-list div.tool-active-list,\n/* 右边按钮组的最上面的创作话题 */\ndiv.csdn-side-toolbar .activity-swiper-box,\n.sidetool-writeguide-box .tip-box,\n/* 右下角的登录提示 */\n.passport-login-tip-container,\n/* 全屏双十一红包 */\n.csdn-reapck-select,\n/* 侧栏的618会员开通 */\n.csdn-side-toolbar  .sidecolumn-vip,\n/* 右边推荐的推广广告 */\n#recommendAdBox,\n/* 顶部导航栏的vip推广 */\n#csdn-plugin-vip,\n/* 顶部导航栏的会员中心的右边的推广图片，如：春招 */\n#csdn-toolbar .toolbar-btn a[href*="mall.csdn.net/vip"]>img[src],\n/* 侧栏的【点击体验 DeepSeekR1满血版】 */\n#sidecolumn-deepseek,\n/* 侧栏的【下载APP、公众号、视频号】 */\n.csdn-side-toolbar .option-box[data-type="app"],\n/* 右偏下的悬浮的 本文章已经生成可运行项目 */\nbody > .ins-code-runner-btn {\n  display: none !important;\n}\n';
  const CSDNBlogBlock = {
    init() {
      Panel.onceExec("csdn-blog-blockCSS", () => {
        return this.addCSS();
      });
      Panel.execMenuOnce("csdn-blog-shieldTopToolbar", () => {
        return this.shieldTopToolbar();
      });
      Panel.execMenuOnce("csdn-blog-shieldLoginDialog", () => {
        return this.shieldLoginDialog();
      });
      Panel.execMenuOnce("csdn-blog-shieldLeftBlogContainerAside", () => {
        return this.shieldLeftBlogContainerAside();
      });
      Panel.execMenuOnce("csdn-blog-shieldRightDirectoryInformation", () => {
        return this.shieldRightDirectoryInformation();
      });
      Panel.execMenuOnce("csdn-blog-shieldBottomFloatingToolbar", () => {
        return this.shieldBottomFloatingToolbar();
      });
      Panel.execMenuOnce("csdn-blog-blockBottomAskAIToolbar", () => {
        return this.blockBottomAskAIToolbar();
      });
      Panel.execMenuOnce("csdn-blog-blockRunnerBox", () => {
        return this.blockRunnerBox();
      });
    },
    addCSS() {
      log.info("添加屏蔽CSS和功能CSS");
      return [addStyle(BlogShieldCSS), addStyle(BlogCSS)];
    },
    shieldTopToolbar() {
      log.info("【屏蔽】顶部工具栏");
      return CommonUtil$1.addBlockCSS("#toolbarBox", "#csdn-toolbar");
    },
    shieldLoginDialog() {
      log.info("【屏蔽】登录弹窗");
      return CommonUtil$1.addBlockCSS(`.passport-login-container`);
    },
    shieldLeftBlogContainerAside() {
      log.info("【屏蔽】左侧博客信息");
      return CommonUtil$1.addBlockCSS(`aside.blog_container_aside`);
    },
    shieldRightDirectoryInformation() {
      log.info("【屏蔽】右侧目录信息");
      return CommonUtil$1.addBlockCSS("#rightAsideConcision", "#rightAside");
    },
    shieldBottomFloatingToolbar() {
      log.info("屏蔽底部悬浮工具栏");
      return CommonUtil$1.addBlockCSS(`#toolBarBox`);
    },
    blockBottomAskAIToolbar() {
      log.info(`【屏蔽】底部的AI伴读`);
      return CommonUtil$1.addBlockCSS(`[class*="Container_"]:has([class^="chatMain"])`);
    },
    blockRunnerBox() {
      log.info(`【屏蔽】runner-box`);
      return CommonUtil$1.addBlockCSS(`.runner-box`);
    },
  };
  const CSDNBlog = {
    init() {
      CSDNBlogBlock.init();
      domUtils.onReady(() => {
        Panel.execMenuOnce("csdn-blog-removeClipboardHijacking", () => {
          this.removeClipboardHijacking();
        });
        Panel.execMenuOnce("csdn-blog-unBlockCopy", () => {
          this.unBlockCopy();
        });
      });
    },
    removeClipboardHijacking() {
      log.info("拦截-复制的小尾巴");
      domUtils.remove(".article-copyright");
      if (_unsafeWindow.articleType) {
        _unsafeWindow.articleType = 0;
      }
      if (_unsafeWindow?.csdn?.copyright?.textData) {
        _unsafeWindow.csdn.copyright.textData = "";
      }
      if (_unsafeWindow?.csdn?.copyright?.htmlData) {
        _unsafeWindow.csdn.copyright.htmlData = "";
      }
    },
    unBlockCopy() {
      log.info("劫持-禁止复制");
      domUtils.on(
        document,
        "click",
        ".hljs-button",
        function (event, $click) {
          domUtils.preventEvent(event);
          const $hljs = $click.closest(".hljs") || $click.closest("pre");
          const $parent = $click.parentElement;
          const $code = $hljs?.querySelector("code") || $parent.querySelector("code") || $parent;
          const copyText = $code.innerText;
          log.info(
            "点击复制按钮复制内容：" + (copyText.length > 8 ? copyText.substring(0, 8) + "..." : copyText),
            $code
          );
          utils.copy(copyText);
          $click.setAttribute("data-title", "复制成功");
        },
        {
          capture: true,
        }
      );
      const changeDataTitle = new utils.LockFunction(function (event) {
        const $mouse = event.target;
        if ($mouse.localName !== "pre") {
          return;
        }
        const $hljsBtn = $mouse.querySelector(".hljs-button");
        if ($hljsBtn) {
          $hljsBtn.setAttribute("data-title", "复制");
        }
      });
      domUtils.on(
        document,
        ["mouseenter", "mouseleave"],
        function (event) {
          changeDataTitle.run(event);
        },
        {
          capture: true,
        }
      );
      domUtils.waitNode("#content_views").then(($content_views) => {
        if (_unsafeWindow.$) {
          _unsafeWindow.$("#content_views")?.unbind("copy");
        }
        domUtils.on(
          $content_views,
          "copy",
          function (event) {
            domUtils.preventEvent(event);
            const selectText = _unsafeWindow.getSelection();
            const copyText = selectText?.toString();
            log.info("Ctrl+C复制内容：" + (copyText.length > 8 ? copyText.substring(0, 8) + "..." : copyText));
            utils.copy(copyText);
            return false;
          },
          {
            capture: true,
          }
        );
      });
      domUtils.waitNode(".hljs-button").then(() => {
        setTimeout(() => {
          $$(".hljs-button").forEach(($el) => {
            $el.removeAttribute("onclick");
            $el.removeAttribute("data-report-click");
            $el.setAttribute("data-title", "复制");
          });
        }, 250);
      });
    },
  };
  const CommonUtil = {
    waitRemove(...args) {
      args.forEach((selector) => {
        domUtils.waitNodeList(selector).then((nodeList) => {
          nodeList.forEach((item) => item.remove());
        });
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
      let cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : "";
      if (typeof cssText === "string" && cssText) {
        addStyle(cssText);
      } else {
        CommonUtil.loadStyleLink(resourceMapData.url);
      }
    },
    async loadStyleLink(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
      domUtils.onReady(() => {
        document.head.appendChild($link);
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
    },
  };
  const M_CSDNBlogArticleBottomRecommend = {
    init() {
      Panel.execMenuOnce("m-csdn-blog-blockBottomArticle", () => {
        return this.blockBottomArticle();
      });
      Panel.execMenuOnce("m-csdn-blog-removeResourceArticle", () => {
        return this.removeResourceArticle();
      });
      Panel.execMenuOnce("m-csdn-blog-openNewTab", () => {
        return this.openNewTab();
      });
      domUtils.onReady(() => {
        Panel.execMenuOnce("m-csdn-blog-refactoringRecommendation", (cbOption) => {
          return this.refactoringRecommendation();
        });
      });
    },
    blockBottomArticle() {
      log.info("【屏蔽】底部文章");
      return CommonUtil.addBlockCSS("#recommend");
    },
    async refactoringRecommendation() {
      const refactoring = function () {
        $$(".container-fluid").forEach(($item) => {
          let url = "";
          let title = "";
          let content = "";
          let img = "";
          if ($item.hasAttribute("data-url")) {
            url = $item.getAttribute("data-url");
            title = $item.querySelector(".recommend_title div.left")?.innerHTML;
            if (!$item.querySelector(".text")) {
              return;
            }
            content = $item.querySelector(".text")?.innerHTML;
            if ($item.querySelectorAll(".recommend-img").length) {
              $item.querySelectorAll(".recommend-img").forEach((item2) => {
                img += item2.innerHTML;
              });
            }
          } else {
            url = $item.querySelector("a[data-type]").getAttribute("href");
            title = $item.querySelector(".recommend_title div.left").innerHTML;
            content = $item.querySelector(".text").innerHTML;
          }
          const urlInst = new URL(url);
          if (
            urlInst.host === "download.csdn.net" ||
            (urlInst.host === "www.iteye.com" && urlInst.pathname.match(/^\/resource/gi))
          ) {
            title = `<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>` + title;
          } else if (urlInst.origin.match(/edu.csdn.net/gi)) {
            title =
              `<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>` + title;
          }
          $item.setAttribute("class", "GM-csdn-dl");
          $item.setAttribute("data-url", url);
          $item.innerHTML = `<div class="GM-csdn-title"><div class="left">${title}</div></div><div class="GM-csdn-content">${content}</div><div class="GM-csdn-img">${img}</div>`;
          $item.addEventListener("click", function () {
            window.location.href = url;
          });
        });
      };
      const lockFunction = new utils.LockFunction(refactoring, 50);
      const $recommend = await domUtils.waitNode("#recommend");
      log.info("重构底部推荐");
      const observer = utils.mutationObserver($recommend, {
        config: { childList: true, subtree: true, attributes: true },
        immediate: true,
        callback: () => {
          lockFunction.run();
        },
      });
      return [
        () => {
          observer.disconnect();
        },
      ];
    },
    removeResourceArticle() {
      log.info(`移除资源下载的文章`);
      return CommonUtil.addBlockCSS(
        '.container-fluid:has(a[href*="https://download.csdn.net/"])',
        '.container-fluid[data-url*="https://download.csdn.net/"]',
        '.GM-csdn-dl[data-url*="https://download.csdn.net/"]'
      );
    },
    openNewTab() {
      log.info(`新标签页打开`);
      const listener = domUtils.on(
        document,
        "click",
        [".container-fluid", ".GM-csdn-dl"],
        (evt, $click) => {
          domUtils.preventEvent(evt);
          const url = $click.getAttribute("data-url");
          if (typeof url === "string") {
            log.info(`新标签页打开：${url}`);
            window.open(url, "_blank");
          } else {
            Qmsg.error("未获取到data-url属性");
          }
        },
        {
          capture: true,
        }
      );
      return listener.off;
    },
  };
  const ApiResponseCheck = {
    isSuccessResponse(data) {
      if (data == null) {
        return false;
      }
      if (typeof data === "string") {
        data = utils.toJSON(data);
      }
      return data?.code === 200;
    },
  };
  const CSDNFavoriteApi = {
    async folderListWithCheck(url) {
      const response = await httpx.get(
        `https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/folderListWithCheck`,
        {
          data: {
            url,
          },
          fetch: true,
          allowInterceptConfig: false,
          headers: {
            "User-Agent": utils.getRandomPCUA(),
          },
        }
      );
      log.info(response);
      const data = utils.toJSON(response.data.responseText);
      if (!response.status || !ApiResponseCheck.isSuccessResponse(response.data.responseText)) {
        log.error("获取收藏夹信息失败，请求异常");
        if (typeof data.msg === "string") {
          Qmsg.error(data.msg);
        } else {
          Qmsg.error("获取收藏夹信息失败");
        }
        return;
      }
      return data.data.result;
    },
    async addFavoriteInFolds(requestData) {
      const response = await httpx.post(
        "https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/addFavoriteInFolds",
        {
          fetch: true,
          data: requestData,
          headers: {
            "Content-Type": "application/json",
            "User-Agent": utils.getRandomPCUA(),
          },
          allowInterceptConfig: false,
        }
      );
      log.info(response);
      if (!response.status || !ApiResponseCheck.isSuccessResponse(response.data.responseText)) {
        log.error("添加收藏失败，请求异常", response);
        Qmsg.error("添加收藏失败，请求异常");
        return;
      }
      return true;
    },
    async checkFavoriteByUrl(url) {
      const response = await httpx.get(
        `https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/checkFavoriteByUrl`,
        {
          data: {
            url,
          },
          fetch: true,
          allowInterceptConfig: false,
          headers: {
            "User-Agent": utils.getRandomPCUA(),
          },
        }
      );
      log.info(response);
      if (!response.status || !ApiResponseCheck.isSuccessResponse(response.data.responseText)) {
        log.error("检查收藏夹状态失败，请求异常");
        Qmsg.error("检查收藏夹状态失败，请求异常");
        return;
      }
      let data = utils.toJSON(response.data.responseText);
      return data.data;
    },
    async createFolder(config) {
      const response = await httpx.post(`https://mp-action.csdn.net/interact/wrapper/pc/favorite/v1/api/createFolder`, {
        data: config,
        fetch: true,
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
          "Content-Type": "application/json",
          "User-Agent": utils.getRandomPCUA(),
        },
        allowInterceptConfig: false,
      });
      log.info(response);
      if (!response.status || !ApiResponseCheck.isSuccessResponse(response.data.responseText)) {
        Qmsg.error("创建收藏夹失败");
        return;
      }
      const data = utils.toJSON(response.data.responseText);
      return data.data;
    },
  };
  const M_CSDNBlogArticleBottomToolBar = {
    init() {
      Panel.execMenuOnce("m-csdn-blog-blockBottomToolbar", () => {
        return this.blockBottomToolbar();
      });
      Panel.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom", () => {
        return this.bottomToolBarAlwaysShow();
      });
      domUtils.onReady(() => {
        Panel.execMenuOnce("m-csdn-blog-bottom-toolbar-optimizationCollectButton", () => {
          return this.optimizationCollectButton();
        });
      });
    },
    blockBottomToolbar() {
      log.info(`【屏蔽】底部工具栏`);
      return CommonUtil.addBlockCSS("#operate");
    },
    bottomToolBarAlwaysShow() {
      log.info(`底部工具栏常驻`);
      return addStyle(
        `
    #operate {
        bottom: 0 !important;
    }
    `
      );
    },
    async optimizationCollectButton() {
      log.info(`优化收藏按钮`);
      const $collectBtn = await domUtils.waitNode("#operate .collect-btn", 1e4);
      if (!$collectBtn) {
        return;
      }
      const listener = domUtils.on(
        $collectBtn,
        "click",
        async (event) => {
          domUtils.preventEvent(event);
          const $isCollect = $collectBtn.querySelector(".collect");
          const $unCollect = $collectBtn.querySelector(".uncollect");
          const folderInfo = await CSDNFavoriteApi.folderListWithCheck(
            window.location.origin + window.location.pathname
          );
          if (!folderInfo) {
            return;
          }
          const isFavoriteFolderIdList = [];
          folderInfo.forEach((item) => {
            if (item.IsFavorite) {
              isFavoriteFolderIdList.push(item.ID);
            }
          });
          const createCollectItem = (data) => {
            let folderId = data.ID;
            let $item = domUtils.createElement(
              "li",
              {
                className: "csdn-collection-item",
                innerHTML: `
                <div class="csdn-collection-item_left">
                    <div class="csdn-collection-item_title">
                        <span class="title-m">${data.Name}</span>
                    </div>
                    <span class="csdn-collection-item_ext">
                        <span class="csdn-collection-item_length">${data.FavoriteNum}条内容</span>
                        <span class="dot">・</span>
                        <span class="csdn-collection-controls">${data.IsPrivate ? "私密" : "公开"}</span>
                    </span>
                </div>
                <span class="collect-btn">${data.IsFavorite ? "已收藏" : "收藏"}</span>
            `,
              },
              {
                "data-is-collect": data.IsFavorite,
              }
            );
            $item.querySelector(".title-m");
            let $contentLength = $item.querySelector(".csdn-collection-item_length");
            $item.querySelector(".csdn-collection-controls");
            let $collectBtn2 = $item.querySelector(".collect-btn");
            domUtils.on($collectBtn2, "click", async (event2) => {
              let articleDetailUrl = _unsafeWindow.articleDetailUrl;
              if (articleDetailUrl == null) {
                articleDetailUrl = window.location.origin + window.location.pathname;
              }
              let articleId = _unsafeWindow.articleId;
              if (articleId == null) {
                log.error("获取文章ID失败");
                Qmsg.error("获取文章ID失败");
                return;
              }
              let username = _unsafeWindow.username;
              if (username == null) {
                log.error("获取文章作者失败");
                Qmsg.error("获取文章作者失败");
                return;
              }
              let articleTitle = _unsafeWindow.articleTitle;
              if (articleTitle == null) {
                articleTitle = document.title.replace(/-CSDN博客$/, "");
              }
              if (articleTitle == null) {
                log.error("获取文章标题失败");
                Qmsg.error("获取文章标题失败");
                return;
              }
              let articleDesc = _unsafeWindow.articleDesc;
              if (articleDesc == null) {
                const $meta = $("meta[name='description']");
                if ($meta) {
                  articleDesc = $meta.getAttribute("content");
                }
              }
              if (articleDesc == null) {
                log.error("获取文章描述失败");
                Qmsg.error("获取文章描述失败");
                return;
              }
              const folderIdList = [...isFavoriteFolderIdList];
              let $loading = Qmsg.loading("处理中...");
              try {
                let checkResponse = await CSDNFavoriteApi.checkFavoriteByUrl(articleDetailUrl);
                if (checkResponse == null) {
                  return;
                }
                log.info(folderId, checkResponse);
                let toCollect = !checkResponse[folderId];
                if (toCollect) {
                  log.info(`添加收藏`);
                  folderIdList.push(folderId);
                } else {
                  log.info(`取消收藏`);
                  folderIdList.splice(folderIdList.indexOf(folderId), 1);
                }
                const response = await CSDNFavoriteApi.addFavoriteInFolds({
                  author: username,
                  url: articleDetailUrl,
                  source: "blog",
                  sourceId: articleId,
                  title: articleTitle,
                  description: articleDesc,
                  fromType: "PC",
                  username: data.Username,
                  folderIdList,
                });
                if (!response) {
                  return;
                }
                const check_isCollect = await CSDNFavoriteApi.checkFavoriteByUrl(articleDetailUrl);
                if (check_isCollect == null) {
                  return;
                }
                log.info(folderId, check_isCollect);
                $item.setAttribute("data-is-collect", (!!check_isCollect[folderId]).toString());
                if (toCollect) {
                  if (!check_isCollect[folderId]) {
                    log.error("收藏失败", check_isCollect, folderId);
                    Qmsg.error("收藏失败");
                  } else {
                    log.success("收藏成功");
                    Qmsg.success("收藏成功");
                    domUtils.text($collectBtn2, "已收藏");
                    if (!isFavoriteFolderIdList.includes(folderId)) {
                      isFavoriteFolderIdList.push(folderId);
                    }
                    data.FavoriteNum++;
                  }
                } else {
                  if (!check_isCollect[folderId]) {
                    log.success("取消收藏成功");
                    Qmsg.success("取消收藏成功");
                    domUtils.text($collectBtn2, "收藏");
                    if (isFavoriteFolderIdList.includes(folderId)) {
                      isFavoriteFolderIdList.splice(isFavoriteFolderIdList.indexOf(folderId), 1);
                    }
                    data.FavoriteNum--;
                  } else {
                    log.error("取消收藏失败", check_isCollect, folderId);
                    Qmsg.error("取消收藏失败");
                  }
                }
                domUtils.text($contentLength, `${data.FavoriteNum}条内容`);
                let findValue = Object.values(check_isCollect).find((item) => item);
                if (findValue) {
                  domUtils.show($isCollect, false);
                  domUtils.hide($unCollect, false);
                } else {
                  domUtils.show($unCollect, false);
                  domUtils.hide($isCollect, false);
                }
                $loading.close();
              } catch (error) {
                log.error(error);
              } finally {
                $loading.close();
              }
            });
            return $item;
          };
          let $alert = __pops__.alert({
            title: {
              text: "添加收藏夹",
              position: "center",
            },
            content: {
              text: `
									<ul class="csdn-collection-items"></ul>
								`,
              html: true,
            },
            btn: {
              ok: {
                enable: false,
              },
            },
            width: PanelUISize.setting.width,
            height: PanelUISize.setting.height,
            drag: true,
            mask: {
              enable: true,
            },
            style: `
            .csdn-collection-items{
                --font-size: 16px;
            }
            .csdn-collection-items{
                font-size: var(--font-size);
                font-weight: 400;
                padding: 0 20px 0;
                margin: 24px 0;
                overflow: auto;
                -ms-scroll-chaining: none;
                overscroll-behavior: contain;
            }
            .csdn-collection-item{
                width: 100%;
                height: 62px;
                line-height: normal;
                position: relative;
                padding: 8px 12px;
                cursor: pointer;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                border-bottom: 1px solid #f0f0f5;
            }
            .csdn-collection-item_left{
                line-height: normal;
                flex: 1;
                overflow: hidden;
            }
            .csdn-collection-item_title{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
            }
            .csdn-collection-item_ext{
                font-weight: 400;
                color: #999aaa;
                line-height: 17px;
                margin-top: 8px;
                font-size: .8em;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 100%;
                display: inline-flex;
                align-items: center;
            }
            .collect-btn{
                color: #555666;
                font-size: var(--font-size);
                width: 64px;
                height: 30px;
                line-height: 30px;
                border-radius: 20px;
                text-align: center;
                -webkit-transition: all .2s;
                transition: all .2s;
                border: 1px solid #ccccd8;
            }
            .csdn-collection-item[data-is-collect="true"] .collect-btn{
                color: #999aaa;
                background: rgba(232, 232, 237, .3);
                border: 1px solid #e8e8ed;
            }
            /* .csdn-collection-item:hover{
                background: #f5f6f7;
            }
            .csdn-collection-item:hover .collect-btn{
                border: 1px solid #555666;
            } */
        `,
          });
          const $collectionContainer = $alert.$shadowRoot.querySelector(".csdn-collection-items");
          folderInfo.forEach((folderInfoItem) => {
            const $item = createCollectItem(folderInfoItem);
            $collectionContainer.appendChild($item);
          });
        },
        { capture: true }
      );
      return [
        () => {
          listener.off();
        },
      ];
    },
  };
  const M_CSDNBlogArticleComment = {
    init() {
      Panel.execMenuOnce("m-csdn-blog-blockComment", () => {
        return this.blockComment();
      });
      Panel.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight", () => {
        return this.notLimitCommentMaxHeight();
      });
    },
    blockComment() {
      log.info("【屏蔽】评论区");
      return CommonUtil.addBlockCSS("#comment");
    },
    notLimitCommentMaxHeight() {
      log.info("不限制评论区的最大高度");
      return addStyle(
        `
        #comment{
          max-height: none !important;
        }
      `
      );
    },
  };
  const M_CSDNBlogArticle = {
    init() {
      M_CSDNBlogArticleComment.init();
      M_CSDNBlogArticleBottomRecommend.init();
      M_CSDNBlogArticleBottomToolBar.init();
      Panel.execMenuOnce("m-csdn-blog-blockTopToolbar", () => {
        return this.blockTopToolbar();
      });
      Panel.execMenuOnce("m-csdn-blog-removeAds", () => {
        return this.removeAds();
      });
      Panel.execMenuOnce("m-csdn-blog-allowSelectText", () => {
        return this.allowSelectText();
      });
      Panel.execMenuOnce("m-csdn-blog-autoExpandContent", () => {
        return this.autoExpandContent();
      });
      Panel.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight", () => {
        return this.notLimitCodePreMaxHeight();
      });
      domUtils.onReady(() => {
        Panel.execMenuOnce("m-csdn-blog-unBlockCopy", () => {
          CSDNBlog.unBlockCopy();
        });
      });
    },
    blockTopToolbar() {
      log.info("屏蔽顶部Toolbar");
      return [
        CommonUtil$1.addBlockCSS("#csdn-toolbar"),
        addStyle(
          `
			/* 内容顶部要归位 */
			body #main,
			.margin_sides{
			  margin-top: unset !important;
			  padding-top: unset !important;
			}
			#article .article_title{
			  margin-top: .32rem !important;
			  padding-top: unset !important;
			}
			`
        ),
      ];
    },
    removeAds() {
      log.info("去除广告");
      return [
        CommonUtil$1.waitRemove(".passport-login-container"),
        CommonUtil$1.waitRemove(".btn_open_app_prompt_box.detail-open-removed"),
        CommonUtil$1.waitRemove(".add-firstAd"),
        CommonUtil$1.waitRemove("div.feed-Sign-weixin"),
        CommonUtil$1.waitRemove("div.ios-shadowbox"),
      ];
    },
    allowSelectText() {
      log.info("允许选择内容");
      return addStyle(
        `
    #content_views,
    #content_views pre,
    #content_views pre code{
      webkit-touch-callout: text !important;
      -webkit-user-select: text !important;
      -khtml-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      user-select: text !important;
    }
    `
      );
    },
    autoExpandContent() {
      log.info("自动展开");
      return addStyle(
        `
    #content_views pre.set-code-hide,
    .article_content{
      height: 100% !important;
      overflow: auto !important;
    }
    `
      );
    },
    notLimitCodePreMaxHeight() {
      log.info("不限制代码块的最大高度");
      return addStyle(
        `
    pre{
        max-height: unset !important;
    }
    `
      );
    },
  };
  const ShieldCSS$2 = "/* 右下角的买一年送3个月的广告图标 */\n.blind_box {\n  display: none !important;\n}\n";
  const M_CSDNWenKu = {
    init() {
      addStyle(ShieldCSS$2);
      Panel.execMenuOnce("m-csdn-wenku-shieldBottomToolbar", () => {
        return this.shieldBottomToolbar();
      });
    },
    shieldBottomToolbar() {
      log.info("【屏蔽】底部工具栏");
      return CommonUtil$1.addBlockCSS(`.page-container > div.btn`);
    },
  };
  const CSDNBlockCSS =
    "/* 右下角悬浮图标 买1年送3个月 */\n.page-container .blind_box,\n/* 底部工具栏右边的 开会员按钮（低至xx元/次） */\n.page-container .btn .ml-12,\n/* 登录弹窗 */\n.passport-login-container,\n/* 通用广告className匹配 */\n.ads {\n  display: none !important;\n}\n";
  const M_CSDNDownload = {
    init() {
      Panel.execMenuOnce("m-csdn-download-removeAds", () => {
        return addStyle(CSDNBlockCSS);
      });
      Panel.execMenuOnce("m-csdn-download-automaticallyExpandResourceIntroduction", () => {
        return this.automaticallyExpandResourceIntroduction();
      });
    },
    automaticallyExpandResourceIntroduction() {
      log.info("自动展开资源介绍");
      return [
        CommonUtil$1.addBlockCSS("label.unfold-font"),
        addStyle(
          `
			.resource-desc{
				max-height: unset !important;
				overflow: unset !important;
			}
			`
        ),
      ];
    },
  };
  const ShieldCSS$1 =
    ".view_comment_box,\n.weixin-shadowbox.wap-shadowbox,\n.feed-Sign-span,\n.user-desc.user-desc-fix,\n.comment_read_more_box,\n#content_views pre.set-code-hide .hide-preCode-box,\n/* 登录弹窗 */\n.passport-login-container,\n.hljs-button[data-title='登录后复制'],\n.article-show-more,\n#treeSkill,\ndiv.btn_open_app_prompt_div,\ndiv.readall_box,\ndiv.aside-header-fixed,\ndiv.feed-Sign-weixin,\ndiv.ios-shadowbox,\n/* 底部评论工具栏的抢沙发图片 */\n.comment-sofa-flag {\n  display: none !important;\n}\n";
  const MBlogCSS =
    "#mainBox {\n  width: auto;\n}\n.user-desc.user-desc-fix {\n  height: auto !important;\n  overflow: auto !important;\n}\n.component-box .praise {\n  background: #ff5722;\n  border-radius: 5px;\n  padding: 0px 8px;\n  height: auto;\n}\n.component-box .praise,\n.component-box .share {\n  color: #fff;\n}\n.component-box a {\n  display: inline-block;\n  font-size: xx-small;\n}\n.component-box {\n  display: inline;\n  margin: 0;\n  position: relative;\n  white-space: nowrap;\n}\n.csdn-edu-title {\n  background: #4d6de1;\n  border-radius: 5px;\n  padding: 0px 8px;\n  height: auto;\n  color: #fff !important;\n}\n\n.GM-csdn-dl {\n  padding: 0.24rem 0.32rem;\n  width: 100%;\n  justify-content: space-between;\n  -webkit-box-pack: justify;\n  border-bottom: 1px solid #f5f6f7 !important;\n}\n.GM-csdn-title {\n  font-size: 0.3rem;\n  color: #222226;\n  letter-spacing: 0;\n  line-height: 0.44rem;\n  font-weight: 600;\n  /*max-height: .88rem;*/\n  word-break: break-all;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.GM-csdn-title a {\n  word-break: break-all;\n  color: #222226;\n  font-weight: 600;\n}\n.GM-csdn-title em,\n.GM-csdn-content em {\n  font-style: normal;\n  color: #fc5531;\n}\n.GM-csdn-content {\n  /*max-width: 5.58rem;*/\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  color: #555666;\n  font-size: 0.24rem;\n  line-height: 0.34rem;\n  max-height: 0.34rem;\n  word-break: break-all;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  margin-top: 0.16rem;\n}\n.GM-csdn-img img {\n  width: 2.18rem;\n  height: 1.58rem;\n  /*margin-left: .16rem*/\n}\n";
  const M_CSDNBlogBlock = {
    init() {
      Panel.onceExec("m-csdn-blog-removeAds", () => {
        return this.addCSS();
      });
      Panel.execMenuOnce("m-csdn-blog-blockBottomAskAIToolbar", () => {
        return CSDNBlogBlock.blockBottomAskAIToolbar();
      });
    },
    addCSS() {
      return [addStyle(ShieldCSS$1), addStyle(MBlogCSS)];
    },
  };
  const M_CSDNBlog = {
    init() {
      M_CSDNBlogBlock.init();
    },
  };
  const M_CSDN = {
    init() {
      if (CSDNRouter.isLink()) {
        log.info("Router: 中转链接");
        M_CSDNLink.init();
      } else if (CSDNRouter.isHuaWeiCloudBlog()) {
        log.info("Router: 华为云联盟");
        M_CSDNHuaWeiCloud.init();
      } else if (CSDNRouter.isBlog()) {
        log.info("Router: 博客");
        M_CSDNBlog.init();
        if (CSDNRouter.isBlogArticle()) {
          log.info("Router: 文章");
          M_CSDNBlogArticle.init();
        }
      } else if (CSDNRouter.isWenKu()) {
        log.info("Router: 文库");
        M_CSDNWenKu.init();
      } else if (CSDNRouter.isDownload()) {
        log.info("Router: 资源下载");
        M_CSDNDownload.init();
      } else {
        log.error("暂未适配，请反馈开发者：" + globalThis.location.href);
      }
    },
  };
  const WenkuCSS =
    "#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid {\n  max-height: unset !important;\n  height: auto !important;\n  overflow: auto !important;\n}\n\n.forbid {\n  user-select: text !important;\n}\n";
  const ShieldCSS =
    "/* wenku顶部横幅 */\n#app > div > div.main.pb-32 > div > div.top-bar,\n/* 底部展开全文 */\n#chatgpt-article-detail > div.layout-center > div.main > div.article-box > div.cont.first-show.forbid > div.open,\n/* 全屏红包雨 */\n#csdn-redpack {\n  display: none !important;\n}\n";
  const CSDNWenKu = {
    init() {
      addStyle(WenkuCSS);
      addStyle(ShieldCSS);
      Panel.execMenuOnce("csdn-wenku-shieldResourceRecommend", () => {
        return this.shieldResourceRecommend();
      });
      Panel.execMenuOnce("csdn-wenku-shieldRightUserInfo", () => {
        return this.shieldRightUserInfo();
      });
      Panel.execMenuOnce("csdn-wenku-shieldRightToolBar", () => {
        return this.shieldRightToolBar();
      });
    },
    shieldResourceRecommend() {
      log.info("【屏蔽】资源推荐");
      return CommonUtil$1.addBlockCSS("#recommend");
    },
    shieldRightUserInfo() {
      log.info("【屏蔽】右侧用户信息");
      return CommonUtil$1.addBlockCSS(".layout-right");
    },
    shieldRightToolBar() {
      log.info("【屏蔽】右侧悬浮工具栏");
      return CommonUtil$1.addBlockCSS(".csdn-side-toolbar");
    },
  };
  const CSDNBlogArticleBlock = {
    init() {
      Panel.execMenuOnce("csdn-blog-shieldBottomSkillTree", () => {
        return this.shieldBottomSkillTree();
      });
      Panel.execMenuOnce("csdn-blog-shieldArticleSearchTip", () => {
        return this.shieldArticleSearchTip();
      });
      Panel.execMenuOnce("csdn-blog-blockGitCodeLinkCard", () => {
        return this.blockGitCodeLinkCard();
      });
    },
    shieldBottomSkillTree() {
      log.info("【屏蔽】底部xx技能树");
      return CommonUtil$1.addBlockCSS(`#treeSkill`);
    },
    shieldArticleSearchTip() {
      log.info("【屏蔽】选中文字悬浮栏");
      return CommonUtil$1.addBlockCSS(`#articleSearchTip`);
    },
    blockGitCodeLinkCard() {
      log.info(`【屏蔽】gitcode链接卡片`);
      return CommonUtil$1.addBlockCSS('a.has-card[href*="gitcode.com"]', ".t2-card-container");
    },
  };
  const BlogArticleCenterCSS =
    '.main_father {\n  justify-content: center;\n}\n#mainBox main {\n  width: inherit !important;\n}\n/* 当文章向下滚动时，触发左侧信息悬浮 */\naside.blog_container_aside[style*="position: fixed;"] {\n  display: none !important;\n}\n\n@media (min-width: 1320px) and (max-width: 1380px) {\n  .nodata .container {\n    width: 900px !important;\n  }\n\n  .nodata .container main {\n    width: 900px;\n  }\n\n  .nodata .container main #pcCommentBox pre > ol.hljs-ln {\n    width: 490px !important;\n  }\n\n  .nodata .container main .articleConDownSource {\n    width: 500px;\n  }\n}\n\n@media screen and (max-width: 1320px) {\n  .nodata .container {\n    width: 760px !important;\n  }\n\n  .nodata .container main {\n    width: 760px;\n  }\n\n  .nodata .container main #pcCommentBox pre > ol.hljs-ln {\n    width: 490px !important;\n  }\n\n  .nodata .container main .toolbox-list .tool-reward {\n    display: none;\n  }\n\n  .nodata .container main .more-toolbox-new .toolbox-left .profile-box .profile-name {\n    max-width: 128px;\n  }\n\n  .nodata .container main .articleConDownSource {\n    width: 420px;\n  }\n}\n\n@media screen and (min-width: 1380px) {\n  .nodata .container {\n    width: 1010px !important;\n  }\n\n  .nodata .container main {\n    width: 1010px;\n  }\n\n  .nodata .container main #pcCommentBox pre > ol.hljs-ln {\n    width: 490px !important;\n  }\n\n  .nodata .container main .articleConDownSource {\n    width: 560px;\n  }\n}\n\n@media (min-width: 1550px) and (max-width: 1700px) {\n  .nodata .container {\n    width: 820px !important;\n  }\n\n  .nodata .container main {\n    width: 820px;\n  }\n\n  .nodata .container main #pcCommentBox pre > ol.hljs-ln {\n    width: 690px !important;\n  }\n\n  .nodata .container main .articleConDownSource {\n    width: 500px;\n  }\n}\n\n@media screen and (min-width: 1700px) {\n  .nodata .container {\n    width: 1010px !important;\n  }\n\n  .nodata .container main {\n    width: 1010px;\n  }\n\n  .nodata .container main #pcCommentBox pre > ol.hljs-ln {\n    width: 690px !important;\n  }\n\n  .nodata .container main .articleConDownSource {\n    width: 560px;\n  }\n}\n';
  const CSDNBlogArticleComment = {
    init() {
      Panel.execMenuOnce("csdn-blog-blockComment", () => {
        return this.blockComment();
      });
      domUtils.onReady(() => {
        Panel.execMenuOnce("csdn-blog-restoreComments", () => {
          this.restoreComments();
        });
      });
    },
    blockComment() {
      log.info("【屏蔽】评论区");
      return CommonUtil.addBlockCSS(`#pcCommentBox`);
    },
    restoreComments() {
      log.info("恢复评论到正确位置-第一条评论");
      domUtils.waitNode(".first-recommend-box").then(($firstRecommendBox) => {
        const $recommendBox = $(".recommend-box.insert-baidu-box.recommend-box-style");
        $recommendBox.insertBefore($firstRecommendBox, $recommendBox.firstChild);
      });
      log.info("恢复评论到正确位置-第二条评论");
      domUtils.waitNode(".second-recommend-box").then(($secondRecommendBox) => {
        const $recommendBox = $(".recommend-box.insert-baidu-box.recommend-box-style");
        $recommendBox.insertBefore($secondRecommendBox, $recommendBox.firstChild);
      });
    },
  };
  const CSDNBlogArticleBottomRecommend = {
    init() {
      Panel.execMenuOnce("csdn-blog-blockBottomRecommendArticle", () => {
        return this.blockBottomRecommendArticle();
      });
      Panel.execMenuOnce("csdn-blog-identityCSDNDownload", () => {
        return this.identityCSDNDownload();
      });
      Panel.execMenuOnce("csdn-blog-removeResourceDownloadArticle", () => {
        return this.removeResourceDownloadArticle();
      });
    },
    blockBottomRecommendArticle() {
      log.info("【屏蔽】底部文章");
      return CommonUtil.addBlockCSS(`main > div.recommend-box`);
    },
    identityCSDNDownload() {
      log.info("标识CSDN下载的链接");
      return addStyle(
        `
        .recommend-item-box[data-url*='https://download.csdn.net/'] .content-box{
            border: 2px solid red;
        }
    `
      );
    },
    removeResourceDownloadArticle() {
      log.info(`移除资源下载的文章`);
      return CommonUtil.addBlockCSS(`.recommend-item-box[data-url*='https://download.csdn.net/']`);
    },
  };
  const CSDNBlogArticleRightToolBarBlock = {
    init() {
      Panel.exec(
        "csdn-blog-rightToolbarEnable",
        () => {
          return this.shieldRightToolbar();
        },
        (keyList) => !Panel.getValue(keyList[0]),
        true
      );
      Panel.execMenuOnce("csdn-blog-rightToolbarCreativeCenter", () => {
        return this.shieldCreativeCenter();
      });
      Panel.execMenuOnce("csdn-blog-rightToolbarShowOrSidebar", () => {
        return this.shieldShowOrSidebar();
      });
      Panel.execMenuOnce("csdn-blog-rightToolbarBeginnerGuidance", () => {
        return this.shieldBeginnerGuidance();
      });
      Panel.execMenuOnce("csdn-blog-rightToolbarCustomerService", () => {
        return this.shieldCustomerService();
      });
      Panel.execMenuOnce("csdn-blog-rightToolbarReport", () => {
        return this.shieldReport();
      });
      Panel.execMenuOnce("csdn-blog-rightToolbarBackToTop", () => {
        return this.shieldBackToTop();
      });
    },
    shieldRightToolbar() {
      log.info("启用/关闭 右侧工具栏");
      return CommonUtil.addBlockCSS(`div.csdn-side-toolbar`, ".article-aside-container");
    },
    shieldCreativeCenter() {
      log.info("【屏蔽】创作中心");
      return CommonUtil.addBlockCSS(".csdn-side-toolbar .sidetool-writeguide-box");
    },
    shieldShowOrSidebar() {
      log.info("【屏蔽】显示/隐藏侧栏");
      return CommonUtil.addBlockCSS(".csdn-side-toolbar a.sidecolumn");
    },
    shieldBeginnerGuidance() {
      log.info("【屏蔽】新手引导");
      return CommonUtil.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="guide"]');
    },
    shieldCustomerService() {
      log.info("【屏蔽】客服");
      return CommonUtil.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="cs"]');
    },
    shieldReport() {
      log.info("【屏蔽】举报");
      return CommonUtil.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="report"]');
    },
    shieldBackToTop() {
      log.info("【屏蔽】返回顶部");
      return CommonUtil.addBlockCSS('.csdn-side-toolbar a.option-box[data-type="gotop"]');
    },
  };
  const CSDNBlogArticleRightToolBar = {
    init() {
      CSDNBlogArticleRightToolBarBlock.init();
      Panel.execMenuOnce(
        ["csdn-blog-coverRightToolOffSet", "csdn-blog-rightToolbarTopOffset", "csdn-blog-rightToolbarRightOffset"],
        (option) => {
          if (!option.value[0]) return;
          return this.initRightToolbarOffset(option.value[1], option.value[2]);
        }
      );
      domUtils.onReady(() => {
        Panel.execMenuOnce("csdn-blog-addGotoRecommandButton", () => {
          this.addGotoRecommandButton();
        });
      });
    },
    addGotoRecommandButton() {
      log.info("【添加】前往评论按钮，在返回顶部的上面");
      let gotoRecommandNode = document.createElement("a");
      gotoRecommandNode.className = "option-box";
      gotoRecommandNode.setAttribute("data-type", "gorecommand");
      gotoRecommandNode.innerHTML = `
		<img src="https://g.csdnimg.cn/side-toolbar/3.6/images/customer.png" alt="" srcset="">
		<span class="show-txt" style="opacity:100;">前往<br>评论</span>
		`;
      gotoRecommandNode.addEventListener("click", function () {
        let toolbarBoxElement = document.querySelector("#toolBarBox");
        if (!toolbarBoxElement || !toolbarBoxElement.getClientRects().length) {
          let $pcCommentBox = $("#pcCommentBox");
          if ($pcCommentBox && $pcCommentBox.getClientRects().length) {
            toolbarBoxElement = $pcCommentBox;
          } else {
            log.error("评论区处于隐藏状态");
            return;
          }
        }
        log.info("滚动到评论");
        let toolbarBoxOffsetTop = toolbarBoxElement.getBoundingClientRect().top + window.scrollY;
        let csdnToolBarElement = document.querySelector("#csdn-toolbar");
        let csdnToolBarStyles = window.getComputedStyle(csdnToolBarElement);
        let csdnToolBarHeight =
          csdnToolBarElement.clientHeight -
          parseFloat(csdnToolBarStyles.paddingTop) -
          parseFloat(csdnToolBarStyles.paddingBottom);
        window.scrollTo({
          top: toolbarBoxOffsetTop - csdnToolBarHeight - 8,
          left: 0,
          behavior: "smooth",
        });
      });
      domUtils.waitNode(".csdn-side-toolbar").then(() => {
        let targetElement = document.querySelector(".csdn-side-toolbar a:nth-last-child(2)");
        targetElement.parentElement.insertBefore(gotoRecommandNode, targetElement.nextSibling);
      });
    },
    async initRightToolbarOffset(top, right) {
      log.info("初始化右侧工具栏的偏移（top、right）");
      return addStyle(
        `
    .csdn-side-toolbar{
      left: unset !important;
      top: ${top}px !important;
      right: ${right}px !important;
    }
    `
      );
    },
  };
  const CSDNBlogArticleAISupportRightToolBarBlock = {
    init() {
      Panel.execMenuOnce("csdn-blog-ai-blockRightToolbar", () => {
        return this.blockRightToolbar();
      });
      Panel.execMenuOnce("csdn-blog-ai-blockRightToolbarCatalogue", () => {
        return this.blockRightToolbarCatalogue();
      });
      Panel.execMenuOnce("csdn-blog-ai-blockRightToolbarLike", () => {
        return this.blockRightToolbarLike();
      });
      Panel.execMenuOnce("csdn-blog-ai-blockRightToolbarComment", () => {
        return this.blockRightToolbarComment();
      });
      Panel.execMenuOnce("csdn-blog-ai-blockRightToolbarCollect", () => {
        return this.blockRightToolbarCollect();
      });
      Panel.execMenuOnce("csdn-blog-ai-blockRightToolbarShare", () => {
        return this.blockRightToolbarShare();
      });
      Panel.execMenuOnce("csdn-blog-ai-blockRightToolbarMore", () => {
        return this.blockRightToolbarMore();
      });
    },
    blockRightToolbar() {
      log.info("【屏蔽】右侧工具栏");
      return CommonUtil.addBlockCSS(".article-aside-container");
    },
    blockRightToolbarCatalogue() {
      log.info("【屏蔽】目录");
      return CommonUtil.addBlockCSS(".article-aside-container .sidebar-item.groupfile");
    },
    blockRightToolbarLike() {
      log.info("【屏蔽】点赞");
      return CommonUtil.addBlockCSS(".article-aside-container .sidebar-item.islike");
    },
    blockRightToolbarComment() {
      log.info("【屏蔽】评论");
      return CommonUtil.addBlockCSS(".article-aside-container .sidebar-item.go-side-comment");
    },
    blockRightToolbarCollect() {
      log.info("【屏蔽】收藏");
      return CommonUtil.addBlockCSS(".article-aside-container .sidebar-item#sidebar-collect");
    },
    blockRightToolbarShare() {
      log.info("【屏蔽】分享");
      return CommonUtil.addBlockCSS(".article-aside-container .sidebar-item#tool-share");
    },
    blockRightToolbarMore() {
      log.info("【屏蔽】...");
      return CommonUtil.addBlockCSS(".article-aside-container .sidebar-item#sidebar-more");
    },
  };
  const CSDNBlogArticleAISupportRightToolBar = {
    init() {
      CSDNBlogArticleAISupportRightToolBarBlock.init();
      Panel.execMenuOnce(
        [
          "csdn-blog-ai-coverRightToolOffSet",
          "csdn-blog-ai-coverRightToolOffSet-top",
          "csdn-blog-ai-coverRightToolOffSet-right",
        ],
        (option) => {
          if (!option.value[0]) {
            return;
          }
          return this.coverRightToolOffSet(option.value[1], option.value[2]);
        }
      );
    },
    async coverRightToolOffSet(top, right) {
      log.info("覆盖右侧工具栏的偏移（top、right）");
      return addStyle(
        `
    #mainBox .article-aside-container{
      left: unset !important;
      top: ${top}px !important;
      right: ${right}px !important;
    }
    `
      );
    },
  };
  const CSDNBlogArticle = {
    init() {
      CSDNBlogArticleBlock.init();
      CSDNBlogArticleComment.init();
      CSDNBlogArticleBottomRecommend.init();
      CSDNBlogArticleRightToolBar.init();
      CSDNBlogArticleAISupportRightToolBar.init();
      Panel.execMenuOnce("csdn-blog-articleCenter", () => {
        return this.articleCenter();
      });
      Panel.execMenuOnce("csdn-blog-autoExpandContent", () => {
        return this.autoExpandContent();
      });
      Panel.execMenuOnce("csdn-blog-autoExpandCodeContent", () => {
        return this.autoExpandCodeContent();
      });
      Panel.execMenuOnce("csdn-blog-allowSelectContent", () => {
        return this.allowSelectContent();
      });
      domUtils.onReady(() => {
        Panel.execMenuOnce("csdn-blog-clickPreCodeAutomatically", () => {
          this.clickPreCodeAutomatically();
        });
      });
    },
    clickPreCodeAutomatically() {
      log.info("点击代码块自动展开");
      document.addEventListener("click", function (event) {
        let $click = event.target;
        if ($click.localName !== "pre") {
          return;
        }
        $click.style.setProperty("height", "auto");
        $click.querySelector(".hide-preCode-box")?.remove();
      });
    },
    articleCenter() {
      log.info("全文居中");
      let result = [addStyle(BlogArticleCenterCSS)];
      result.push(CSDNBlogBlock.shieldRightDirectoryInformation());
      result.push(
        addStyle(
          `
      #mainBox {
        margin-right: 0px;
      }
      `
        )
      );
      result.push(CSDNBlogBlock.shieldLeftBlogContainerAside());
      result.push(
        addStyle(
          `
      #mainBox {
        margin-left: 0px;
      }`
        )
      );
      result.push(
        addStyle(
          `
    html body .main_father #mainBox{
      padding-right: 0px !important;
    }
    .article-aside-container{
      left: unset !important;
      right: 150px !important;
    }
    `
        )
      );
      return result;
    },
    autoExpandCodeContent() {
      log.info("自动展开代码块");
      return [
        CommonUtil$1.addBlockCSS("pre.set-code-hide .hide-preCode-box"),
        addStyle(
          `
			pre.set-code-hide{
				height: auto !important;
			}
			/* 自动展开代码块 */
			.comment-list-box,
			main div.blog-content-box pre {
				max-height: none !important;
			}
        `
        ),
      ];
    },
    autoExpandContent() {
      log.info("自动展开全文");
      return addStyle(
        `
		/* 自动展开全文 */
		#article_content,
		.user-article.user-article-hide {
			height: auto !important;
			overflow: auto !important;
		}
        `
      );
    },
    allowSelectContent() {
      log.info("允许选择内容");
      return addStyle(
        `
		#content_views,
		#content_views pre,
		#content_views pre code {
			user-select: text !important;
		}
		`
      );
    },
  };
  const indexCSS = "";
  const blockCSS$1 =
    "/* 红包雨 */\n#csdn-redpack,\n/* 顶部 购会员横幅 */\n.page-container .top-bar,\n/* 底部 购会员横幅 */\n.page-container .fix-bottom-bar {\n  display: none !important;\n}\n";
  const CSDNDownload = {
    init() {
      addStyle(blockCSS$1);
      addStyle(indexCSS);
    },
  };
  const blockCSS =
    '/* 顶部工具栏右边的 会员 */\n#csdn-toolbar .toolbar-btn > a[href*="mall.csdn.net/vip"],\n/* 顶部工具栏右边的 VIP抢千元豪礼 */\n#csdn-toolbar a.toolbar-btn[href*="mall.csdn.net/vip"] {\n  display: none !important;\n}\n';
  const CSDN = {
    init() {
      addStyle(blockCSS);
      if (CSDNRouter.isLink()) {
        log.info("Router: 中转链接");
        CSDNLink.init();
      } else if (CSDNRouter.isHuaWeiCloudBlog()) {
        log.info("Router: 华为云联盟");
        CSDNHuaWeiCloud.init();
      } else if (CSDNRouter.isBlog()) {
        log.info("Router: 博客");
        CSDNBlog.init();
        if (CSDNRouter.isBlogArticle()) {
          log.info("Router: 帖子");
          CSDNBlogArticle.init();
        }
      } else if (CSDNRouter.isWenKu()) {
        log.info("Router: 文库");
        CSDNWenKu.init();
      } else if (CSDNRouter.isDownload()) {
        log.info("Router: 下载");
        CSDNDownload.init();
      } else {
        log.error("暂未适配，请反馈开发者：" + globalThis.location.href);
      }
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
        if (typeof selectCallBack === "function") {
          const result2 = selectCallBack(isSelectedInfo);
          if (result2) {
            return;
          }
        }
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
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
    defaultValue = false,
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
  const MSettingUIBlog = {
    id: "m-panel-blog",
    title: "博客",
    isDefault() {
      return CSDNRouter.isBlog();
    },
    views: [
      {
        text: "",
        type: "container",
        views: [
          {
            text: "劫持/拦截",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [UISwitch("允许复制", "m-csdn-blog-unBlockCopy", true, void 0, "允许点击复制按钮进行复制")],
              },
            ],
          },
        ],
      },
      {
        type: "container",
        text: "文章",
        views: [
          {
            text: "布局屏蔽",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch(
                    "【屏蔽】广告",
                    "m-csdn-blog-removeAds",
                    true,
                    void 0,
                    "包括：登录弹窗、打开APP、ios版本提示等"
                  ),
                  UISwitch("【屏蔽】顶部工具栏", "m-csdn-blog-blockTopToolbar", false),
                  UISwitch("【屏蔽】评论区", "m-csdn-blog-blockComment", false),
                  UISwitch("【屏蔽】底部文章", "m-csdn-blog-blockBottomArticle", false),
                  UISwitch("【屏蔽】底部工具栏", "m-csdn-blog-blockBottomToolbar", false),
                  UISwitch("【屏蔽】底部的AI伴读", "m-csdn-blog-blockBottomAskAIToolbar", false),
                ],
              },
            ],
          },
          {
            text: "内容",
            type: "deepMenu",
            views: [
              {
                text: "功能",
                type: "container",
                views: [
                  UISwitch("允许选择内容", "m-csdn-blog-allowSelectText", true, void 0, "解除文字选中限制"),
                  UISwitch(
                    "自动展开",
                    "m-csdn-blog-autoExpandContent",
                    true,
                    void 0,
                    "懒人操作，免手动点击展开，包括：内容、代码块"
                  ),
                  UISwitch(
                    "不限制代码块的最大高度",
                    "m-csdn-blog-notLimitCodePreMaxHeight",
                    false,
                    void 0,
                    "让代码块的高度直接被撑开"
                  ),
                ],
              },
            ],
          },
          {
            text: "评论",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch(
                    "不限制评论区的最大高度",
                    "m-csdn-blog-notLimitCommentMaxHeight",
                    true,
                    void 0,
                    "让评论区高度直接被撑开"
                  ),
                ],
              },
            ],
          },
          {
            text: "底部文章",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch("重构", "m-csdn-blog-refactoringRecommendation", true, void 0, "文章的样式统一"),
                  UISwitch(
                    "移除资源下载的文章",
                    "m-csdn-blog-removeResourceArticle",
                    false,
                    void 0,
                    "download.csdn.net<br>www.iteye.com<br>edu.csdn.net"
                  ),
                  UISwitch("新标签页打开", "m-csdn-blog-openNewTab", true, void 0, "新标签页打开文章"),
                ],
              },
            ],
          },
          {
            type: "deepMenu",
            text: "底部工具栏",
            views: [
              {
                type: "container",
                text: "",
                views: [
                  UISwitch(
                    "常驻底部",
                    "m-csdn-blog-bottom-toolbar-always-bottom",
                    false,
                    void 0,
                    "开启后底部工具栏不随下滑滚动而隐藏"
                  ),
                  UISwitch(
                    "优化收藏按钮",
                    "m-csdn-blog-bottom-toolbar-optimizationCollectButton",
                    false,
                    void 0,
                    "可以自行选择收藏夹"
                  ),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const MSettingUIGeneral = {
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
    ],
  };
  const MSettingUIDownload = {
    id: "m-panel-download",
    title: "资源",
    isDefault() {
      return CSDNRouter.isDownload();
    },
    views: [
      {
        text: "功能",
        type: "container",
        views: [
          UISwitch(
            "自动展开资源介绍",
            "m-csdn-download-automaticallyExpandResourceIntroduction",
            true,
            void 0,
            "屏蔽资源介绍【展开全部】按钮并展开资源介绍"
          ),
        ],
      },
      {
        text: "布局屏蔽",
        type: "container",
        views: [UISwitch("【屏蔽】广告", "m-csdn-download-removeAds", true, void 0, "包括：登录弹窗、会员降价等")],
      },
    ],
  };
  const MSettingUIHuaWeiCloud = {
    id: "m-panel-hua-wei-cloud",
    title: "华为云开发者联盟",
    isDefault() {
      return CSDNRouter.isHuaWeiCloudBlog();
    },
    views: [
      {
        text: "功能",
        type: "container",
        views: [UISwitch("自动展开全文", "m-csdn-hua-wei-cloud-autoExpandContent", true)],
      },
      {
        text: "布局屏蔽",
        type: "container",
        views: [UISwitch("【屏蔽】底部加入社区", "m-csdn-hua-wei-cloud-blockBottomJoinTheCommunity", true)],
      },
    ],
  };
  const MSettingUILink = {
    id: "m-panel-link",
    title: "链接",
    isDefault() {
      return CSDNRouter.isLink();
    },
    views: [
      {
        text: "功能",
        type: "container",
        views: [UISwitch("重定向链接", "m-csdn-link-jumpRedirect", true, void 0, "自动跳转至被拦截的Url链接")],
      },
    ],
  };
  const MSettingUISo = {
    id: "panel-so",
    title: "搜索",
    isDefault() {
      return CSDNRouter.isSo();
    },
    views: [
      {
        text: "C知道-功能",
        type: "container",
        views: [UISwitch("去除水印", "m-csdn-so-cknow-removeMaskCover", true)],
      },
    ],
  };
  const MSettingUIWenKu = {
    id: "m-panel-wenku",
    title: "文库",
    isDefault() {
      return CSDNRouter.isWenKu();
    },
    views: [
      {
        text: "布局屏蔽",
        type: "container",
        views: [UISwitch("【屏蔽】底部工具栏", "m-csdn-wenku-shieldBottomToolbar", false)],
      },
    ],
  };
  const SettingUIBlog = {
    id: "panel-blog",
    title: "博客",
    isDefault() {
      return CSDNRouter.isBlog();
    },
    views: [
      {
        text: "",
        type: "container",
        views: [
          {
            text: "劫持/拦截",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch("拦截-复制的小尾巴", "csdn-blog-removeClipboardHijacking", true),
                  UISwitch("劫持-禁止复制", "csdn-blog-unBlockCopy", true, void 0, "允许点击复制按钮进行复制"),
                ],
              },
            ],
          },
        ],
      },
      {
        type: "container",
        text: "文章",
        views: [
          {
            text: "布局屏蔽",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch("【屏蔽】登录弹窗", "csdn-blog-shieldLoginDialog", true),
                  UISwitch("【屏蔽】顶部工具栏", "csdn-blog-shieldTopToolbar", false),
                  UISwitch("【屏蔽】左侧博客信息", "csdn-blog-shieldLeftBlogContainerAside", false),
                  UISwitch("【屏蔽】右侧目录信息", "csdn-blog-shieldRightDirectoryInformation", false),
                  UISwitch("【屏蔽】评论区", "csdn-blog-blockComment", false),
                  UISwitch("【屏蔽】底部文章", "csdn-blog-blockBottomRecommendArticle", false),
                  UISwitch("【屏蔽】底部的悬浮工具栏", "csdn-blog-shieldBottomFloatingToolbar", false),
                  UISwitch("【屏蔽】底部的AI伴读", "csdn-blog-blockBottomAskAIToolbar", false),
                  UISwitch("【屏蔽】runner-box", "csdn-blog-blockRunnerBox", true),
                ],
              },
            ],
          },
          {
            text: "右侧悬浮工具栏",
            type: "deepMenu",
            views: [
              {
                text: "功能",
                type: "container",
                views: [
                  UISwitch(
                    "【添加按钮】前往评论",
                    "csdn-blog-addGotoRecommandButton",
                    true,
                    void 0,
                    "在悬浮工具栏最后面添加"
                  ),
                ],
              },
              {
                text: "坐标偏移",
                type: "container",
                views: [
                  UISwitch("启用", "csdn-blog-coverRightToolOffSet", false),
                  UISlider(
                    "top偏移",
                    "csdn-blog-rightToolbarTopOffset",
                    140,
                    0,
                    Math.max(document.documentElement.clientHeight / 2, 400),
                    void 0,
                    (value) => {
                      return `当前：${value}px，默认：140px`;
                    }
                  ),
                  UISlider(
                    "right偏移",
                    "csdn-blog-rightToolbarRightOffset",
                    90,
                    0,
                    Math.max(document.documentElement.clientWidth / 2, 400),
                    void 0,
                    (value) => {
                      return `当前：${value}px，默认：90px`;
                    }
                  ),
                ],
              },
              {
                text: "屏蔽",
                type: "container",
                views: [
                  UISwitch("【屏蔽】右侧工具栏", "csdn-blog-rightToolbarEnable", false),
                  UISwitch("【屏蔽】创作中心", "csdn-blog-rightToolbarCreativeCenter", false),
                  UISwitch("【屏蔽】显示/隐藏侧栏", "csdn-blog-rightToolbarShowOrSidebar", false),
                  UISwitch("【屏蔽】新手引导", "csdn-blog-rightToolbarBeginnerGuidance", false),
                  UISwitch("【屏蔽】客服", "csdn-blog-rightToolbarCustomerService", false),
                  UISwitch("【屏蔽】举报", "csdn-blog-rightToolbarReport", false),
                  UISwitch("【屏蔽】返回顶部", "csdn-blog-rightToolbarBackToTop", false),
                ],
              },
            ],
          },
          {
            text: "右侧悬浮工具栏（AI助读版）",
            type: "deepMenu",
            views: [
              {
                text: "坐标偏移",
                type: "container",
                views: [
                  UISwitch("启用", "csdn-blog-ai-coverRightToolOffSet", false),
                  UISlider(
                    "top偏移",
                    "csdn-blog-ai-coverRightToolOffSet-top",
                    48,
                    0,
                    Math.max(document.documentElement.clientHeight / 2, 400),
                    void 0,
                    (value) => {
                      return `当前：${value}px，默认：48px`;
                    }
                  ),
                  UISlider(
                    "right偏移",
                    "csdn-blog-ai-coverRightToolOffSet-right",
                    150,
                    0,
                    Math.max(document.documentElement.clientWidth / 2, 400),
                    void 0,
                    (value) => {
                      return `当前：${value}px，默认：150px`;
                    }
                  ),
                ],
              },
              {
                text: "屏蔽",
                type: "container",
                views: [
                  UISwitch("【屏蔽】右侧工具栏", "csdn-blog-ai-blockRightToolbar", false),
                  UISwitch("【屏蔽】目录", "csdn-blog-ai-blockRightToolbarCatalogue", false),
                  UISwitch("【屏蔽】点赞", "csdn-blog-ai-blockRightToolbarLike", false),
                  UISwitch("【屏蔽】评论", "csdn-blog-ai-blockRightToolbarComment", false),
                  UISwitch("【屏蔽】收藏", "csdn-blog-ai-blockRightToolbarCollect", false),
                  UISwitch("【屏蔽】分享", "csdn-blog-ai-blockRightToolbarShare", false),
                  UISwitch("【屏蔽】...", "csdn-blog-ai-blockRightToolbarMore", false),
                ],
              },
            ],
          },
          {
            text: "内容",
            type: "deepMenu",
            views: [
              {
                text: "功能",
                type: "container",
                views: [
                  UISwitch(
                    "点击代码块自动展开",
                    "csdn-blog-clickPreCodeAutomatically",
                    true,
                    void 0,
                    "当鼠标点击代码块区域时，将自动展开内容"
                  ),
                  UISwitch(
                    "自动展开代码块",
                    "csdn-blog-autoExpandCodeContent",
                    true,
                    void 0,
                    "懒人操作，免手动点击展开"
                  ),
                  UISwitch("自动展开内容", "csdn-blog-autoExpandContent", true, void 0, "懒人操作，免手动点击展开"),
                  UISwitch(
                    "全文居中",
                    "csdn-blog-articleCenter",
                    true,
                    void 0,
                    "自动执行<code>【屏蔽】左侧博客信息</code>和<code>【屏蔽】右侧目录信息</code>，并将文章居中"
                  ),
                  UISwitch("允许选择内容", "csdn-blog-allowSelectContent", true, void 0, "解除文字选中限制"),
                ],
              },
              {
                text: "屏蔽",
                type: "container",
                views: [
                  UISwitch("【屏蔽】底部xx技能树", "csdn-blog-shieldBottomSkillTree", false),
                  UISwitch(
                    "【屏蔽】选中文字悬浮栏",
                    "csdn-blog-shieldArticleSearchTip",
                    false,
                    void 0,
                    "选中文字弹出的，例如：搜索、评论、笔记"
                  ),
                  UISwitch("【屏蔽】gitcode链接卡片", "csdn-blog-blockGitCodeLinkCard", false),
                ],
              },
            ],
          },
          {
            text: "评论区",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [UISwitch("优化评论区的位置", "csdn-blog-restoreComments", true)],
              },
            ],
          },
          {
            text: "底部文章",
            type: "deepMenu",
            views: [
              {
                text: "",
                type: "container",
                views: [
                  UISwitch("标识CSDN下载", "csdn-blog-identityCSDNDownload", true, void 0, "使用红框标识"),
                  UISwitch(
                    "移除资源下载的文章",
                    "csdn-blog-removeResourceDownloadArticle",
                    false,
                    void 0,
                    "download.csdn.net<br>www.iteye.com<br>edu.csdn.net"
                  ),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const SettingUICommon = {
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
    ],
  };
  const SettingUIHuaWeiCloud = {
    id: "panel-hua-wei-cloud",
    title: "华为云开发者联盟",
    isDefault() {
      return CSDNRouter.isHuaWeiCloudBlog();
    },
    views: [
      {
        text: "功能",
        type: "container",
        views: [UISwitch("自动展开全文", "csdn-hua-wei-cloud-autoExpandContent", true)],
      },
      {
        text: "布局屏蔽",
        type: "container",
        views: [
          UISwitch("【屏蔽】云开发者任务挑战活动", "csdn-hua-wei-cloud-shieldCloudDeveloperTaskChallengeEvent", true),
          UISwitch(
            "【屏蔽】左侧悬浮按钮",
            "csdn-hua-wei-cloud-shieldLeftFloatingButton",
            false,
            function (event, enable) {
              if (enable) {
                alert("开启后将屏蔽【当前阅读量】、【点赞按钮】、【评论按钮】、【分享按钮】");
              }
            }
          ),
          UISwitch("【屏蔽】右侧栏", "csdn-hua-wei-cloud-blockRightColumn", false, function (event, enable) {
            if (enable) {
              alert("开启后将屏蔽【相关产品】-【活动日历】-【运营活动】-【热门标签】");
            }
          }),
          UISwitch("【屏蔽】底部推荐内容", "csdn-hua-wei-cloud-blockRecommendedContentAtTheBottom", false),
          UISwitch("【屏蔽】底部更多推荐", "csdn-hua-wei-cloud-shieldTheBottomForMoreRecommendations", false),
        ],
      },
    ],
  };
  const SettingUILink = {
    id: "panel-link",
    title: "链接",
    isDefault() {
      return CSDNRouter.isLink();
    },
    views: [
      {
        text: "功能",
        type: "container",
        views: [UISwitch("重定向链接", "csdn-link-jumpRedirect", true, void 0, "自动跳转至被拦截的Url链接")],
      },
    ],
  };
  const SettingUISo = {
    id: "panel-so",
    title: "搜索",
    isDefault() {
      return CSDNRouter.isSo();
    },
    views: [
      {
        text: "C知道-功能",
        type: "container",
        views: [UISwitch("去除水印", "csdn-so-cknow-removeMaskCover", true)],
      },
    ],
  };
  const SettingUIWenKu = {
    id: "panel-wenku",
    title: "资源",
    isDefault() {
      return CSDNRouter.isLink();
    },
    views: [
      {
        text: "布局屏蔽",
        type: "container",
        views: [
          UISwitch("【屏蔽】资源推荐", "csdn-wenku-shieldResourceRecommend", false),
          UISwitch("【屏蔽】右侧用户信息", "csdn-wenku-shieldRightUserInfo", false),
          UISwitch("【屏蔽】右侧悬浮工具栏", "csdn-wenku-shieldRightToolBar", false),
        ],
      },
    ],
  };
  PanelMenu.deleteMenuOption(0);
  PanelMenu.addMenuOption([
    {
      key: "show_pops_panel_setting",
      text: "⚙ PC端设置",
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback: () => {
        Panel.showPanel(PanelContent.getConfig(0));
      },
    },
    {
      key: "m_show_pops_panel_setting",
      text: "⚙ 移动端端设置",
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback: () => {
        Panel.showPanel(PanelContent.getConfig(1));
      },
    },
    {
      key: "gotoCSDNCKnow",
      text: "⚙ 前往C知道",
      isStoreValue: false,
      autoReload: false,
      showText(text) {
        return text;
      },
      callback() {
        window.open("https://so.csdn.net/chat", "_blank");
      },
    },
  ]);
  PanelContent.addContentConfig([
    SettingUICommon,
    SettingUIBlog,
    SettingUILink,
    SettingUIHuaWeiCloud,
    SettingUIWenKu,
    SettingUISo,
  ]);
  PanelContent.addContentConfig([
    MSettingUIGeneral,
    MSettingUIBlog,
    MSettingUILink,
    MSettingUIHuaWeiCloud,
    MSettingUIWenKu,
    MSettingUISo,
    MSettingUIDownload,
  ]);
  Panel.init();
  let isMobile = utils.isPhone();
  let CHANGE_ENV_SET_KEY = "change_env_set";
  let chooseMode = _GM_getValue(CHANGE_ENV_SET_KEY);
  MenuRegister.add({
    key: CHANGE_ENV_SET_KEY,
    text: `⚙ 自动: ${isMobile ? "移动端" : "PC端"}`,
    autoReload: false,
    isStoreValue: false,
    showText(text) {
      if (chooseMode == null) {
        return text;
      }
      return text + ` 手动: ${chooseMode == 1 ? "移动端" : chooseMode == 2 ? "PC端" : "未知"}`;
    },
    callback: () => {
      let allowValue = [0, 1, 2];
      let chooseText = window.prompt("请输入当前脚本环境判定\n\n自动判断: 0\n移动端: 1\nPC端: 2", "0");
      if (!chooseText) {
        return;
      }
      let chooseMode2 = parseInt(chooseText);
      if (isNaN(chooseMode2)) {
        Qmsg.error("输入的不是规范的数字");
        return;
      }
      if (!allowValue.includes(chooseMode2)) {
        Qmsg.error("输入的值必须是0或1或2");
        return;
      }
      if (chooseMode2 == 0) {
        _GM_deleteValue(CHANGE_ENV_SET_KEY);
      } else {
        _GM_setValue(CHANGE_ENV_SET_KEY, chooseMode2);
      }
    },
  });
  if (chooseMode != null) {
    log.info(`手动判定为${chooseMode === 1 ? "移动端" : "PC端"}`);
    if (chooseMode == 1) {
      M_CSDN.init();
    } else if (chooseMode == 2) {
      CSDN.init();
    } else {
      Qmsg.error("意外，手动判定的值不在范围内");
      _GM_deleteValue(CHANGE_ENV_SET_KEY);
    }
  } else {
    if (isMobile) {
      log.info("自动判定为移动端");
      M_CSDN.init();
    } else {
      log.info("自动判定为PC端");
      CSDN.init();
    }
  }
})(Qmsg, DOMUtils, pops, Utils);
