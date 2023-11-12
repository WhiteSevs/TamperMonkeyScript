// ==UserScript==
// @name         模拟竖屏
// @namespace    https://greasyfork.org/zh-CN/users/521923-whitesevs
// @icon         https://favicon.yandex.net/favicon/v2/https://party.163.com/?size=32
// @version      2023.11.12
// @description  由于有些链接用小窗模式的浏览器打开，会提示切换到竖屏，特此模拟竖屏
// @author       WhiteSevs
// @license      GPL-3.0-only
// @match        https://eggy.163.com/*
// @match        https://igame.qq.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  /**
   * 油猴环境下就是unsafeWindow，如果不是就是globalThis
   * @type {window}
   */
  const win = typeof unsafeWindow === "object" ? unsafeWindow : globalThis;

  /**
   * 添加CSS到页面中
   * @param {string} cssText CSS字符串
   */
  const GM_addStyle = function (cssText) {
    if (cssText == null) {
      return;
    }
    if (typeof cssText !== "string") {
      return;
    }
    if (cssText.trim() === "") {
      return;
    }
    let cssNode = document.createElement("style");
    cssNode.setAttribute("type", "text/css");
    cssNode.innerHTML = cssText;
    if (document.head) {
      /* 插入head后 */
      document.head.appendChild(cssNode);
    } else if (document.documentElement.childNodes.length === 0) {
      /* 插入body后 */
      document.documentElement.appendChild(cssNode);
    } else {
      /* 插入head前面 */
      document.documentElement.insertBefore(
        cssNode,
        document.documentElement.childNodes[0]
      );
    }
  };

  /**
   * 配置
   * @typedef {object} verticalScreenWebSiteDetails
   * @property {string|undefined} hostName 匹配的网站hostName，和href任选其一
   * @property {string|undefined} href 匹配的网站href，和hostName任选其一
   * @property {boolean} hijackOrientation 是否处理window.orientation
   * @property {string|undefined} CSS 竖屏CSS
   */
  /**
   * @type {verticalScreenWebSiteDetails[]}
   */
  const verticalScreenWebSite = [
    {
      hostName: "eggy.163.com",
      hijackOrientation: true,
    },
    {
      hostName: "igame.qq.com",
      hijackOrientation: true,
      CSS: `@charset "UTF-8";@media all and (orientation:landscape){html{width:unset;height:unset;overflow:unset}
            html::before{position:unset;top:unset;left:unset;z-index:unset;width:unset;height:unset;background:unset;content:unset}
            body::after{content:unset;text-align:unset;font-size:unset;color:unset;position:unset;top:unset;left:unset;height:unset;width:unset;margin-top:unset;z-index:unset}
            body::before{content:unset;position:unset;z-index:unset;height:unset;width:unset;left:unset;top:unset;margin:unset;color:unset;background-image:unset;background-repeat:unset;background-position:unset;background-size:unset;-webkit-transform:unset}}`,
    },
  ];

  /**
   * 劫持
   */
  const hijack = {
    /**
     * 劫持window.orientation
     */
    hijackOrientation() {
      Object.defineProperty(win, "orientation", {
        /**
         * 0是正常竖屏
         * 90是倒着的竖屏
         * @returns {number}
         */
        get() {
          console.log("模拟竖屏");
          return 0;
        },
      });
    },
  };

  /**
   * 模拟
   */
  const simulation = function () {
    for (let index = 0; index < verticalScreenWebSite.length; index++) {
      let details = verticalScreenWebSite[index];
      if (
        (typeof details.hostName === "string" &&
          window.location.hostname === details.hostName.trim()) ||
        (typeof details.href === "string" &&
          window.location.href.match(details.href))
      ) {
        console.log(`添加在${window.location.hostname}下的模拟竖屏CSS`);
        GM_addStyle(details.CSS);
        if (details.hijackOrientation) {
          hijack.hijackOrientation();
        }
        break;
      }
    }
  };

  /* --------------------入口-------------------- */
  simulation();
  /* --------------------入口-------------------- */
})();
