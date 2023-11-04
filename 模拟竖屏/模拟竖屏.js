// ==UserScript==
// @name         模拟竖屏
// @namespace    https://greasyfork.org/zh-CN/users/521923-whitesevs
// @icon         https://favicon.yandex.net/favicon/v2/https://party.163.com/?size=32
// @version      2023.11.4
// @description  由于有些链接用小窗模式的浏览器打开，会提示切换到竖屏，特此模拟竖屏
// @author       WhiteSevs
// @license      GPL-3.0-only
// @match        https://eggy.163.com/*
// @match        https://igame.qq.com/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
  Object.defineProperty(window, "orientation", {
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
  if (window.location.hostname === "igame.qq.com") {
    console.log(`添加在${window.location.hostname}下的模拟竖屏CSS`);
    GM_addStyle(`
        @charset "UTF-8";@media all and (orientation:landscape){html{width:unset;height:unset;overflow:unset}
        html::before{position:unset;top:unset;left:unset;z-index:unset;width:unset;height:unset;background:unset;content:unset}
        body::after{content:unset;text-align:unset;font-size:unset;color:unset;position:unset;top:unset;left:unset;height:unset;width:unset;margin-top:unset;z-index:unset}
        body::before{content:unset;position:unset;z-index:unset;height:unset;width:unset;left:unset;top:unset;margin:unset;color:unset;background-image:unset;background-repeat:unset;background-position:unset;background-size:unset;-webkit-transform:unset}
        }`);
  }
})();
