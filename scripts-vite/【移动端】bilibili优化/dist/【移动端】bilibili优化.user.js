// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.10.28
// @author       WhiteSevs
// @description  阻止跳转App、App端推荐视频流、解锁视频画质(番剧解锁需配合其它插件)、美化显示、去广告等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACjBJREFUeF7tnX+MHGUZx7/PbFsr3O3eNWBTaQu1RhNQEv7CBKNtQsBQTRDSJiYabNBaerP2bmcL8pcHiZH2du6u7Fx/SCmESGLQSP+QQk0aMAElMTGmsURQCQSLqcG7222ttb2dR8a700u7e/u+8850d2ae/Xee55nn+T6ffWd29p33Jcgn0wpQpquX4iEAZBwCAUAAyLgCGS9fRgABIOMKZLx8GQEEgIwrkPHyZQQQADKuQMbLlxFAAMi4Ahkvv+MjwJQ9MpyDtQ6gtT7xn5n9U/3eruE09qUba+0oALXi6DEw39Gk2Uct4l291fIbaQDhTLFyo880AuCuS+sh4GTecz7TqTo7BkDddv/AwE2tCg+EIeItSYcgaD4zPbdYrSD6ZaFaurMTEHQEgGAotGB9v13BSYdAqflzIvjwH+nEpa8jAEwX3SeI8a12AATHkwqBTvPn6nwm7zn3qWgSpU1HAKjboy8zeINqIUmDQLf5swDQK3mvtFFVk6jsOgKAzggwX2hSIAjT/MyNAKr3AM3umLv5xjBs84M6M3UPEBRcs90Xmv0saje0detIYNJ8AEcLnrOpXe1xHO/IJSAoxESwboMgybV0DIC0QJDk5s/de8QxsKjHTLKASc59wc21erPiskyikEnMuVn/OnoJWJhQkgRNUq7tvrRdA0BS7gnS1PyuuAe4lNBuFribc2v3TW91vKtGgPkku1HobswpbNMX+nUlAN12OUhr87vyEtBtN4Zpbv4VAWDadjdbwGYG1oOxAoQVAPJRDF8pjFEHYxKESYDfAvBMwSu/GGedsVwCzu4cv7nhN7YRcA8zVsVZQNpjM/AeAUdyudyhnr2DJ6KuN1IApgYq1xORbQE2A8ujTjbL8Qg47wMeM3v9E+V3o9IiMgBqtvt1ABUAK6NKTuI0VeA0QI8WvNK+KPSJBIBaccQGW9UoEpIYagoQ4XC+6tyvZt3ayhiAsP/rmyYu/v+dR3a8UHVuN9HCCICa7R4D0Gxev0lO4qungFfwnKKey/+tQwNQH3APMOE7YU8sftEpYDKdLBQAZ+zR7T54f3QlSCRTBSzQA71e6YBuHG0A/r5juGe51fv6om+66GYh9sYKBNPkzvtnPvexfcNndYJpAzBtV75HoB/qnGShbfBgwwL9Jax/mv2YeS0InwhbI4Mf7vPKj+n4awEwue2xgrVs6UkCrtM5CYDXCNiTW2L99urxob9p+mbKfGpwrC/n+zfCpx/ovDwTiMTAKTQufLZv/8NTqqJpAVArjmwCW79QDT6bFD/U55X36PiI7awCZ4rumM8Y1NGDgS19nvNTVR8tAOq2u5uBB1WD+8Tl/mrZVbUXu8sVCP5MI+A5VW0I9KO8V1L+daYFQG2g8kcQfVolGSYc6qs631axFZvFFajZbvCU1VbU6e2C56xXtFVfLJqHn1pe/2DyX6qBeam1vm9s6G1Ve7FrrcC5He6aCxbeIKBHRaf8NSs+SsNbz6vYKo8A/xwcWzUz47+vErSTrzop5pc4s7rt/oqBL6gkvmSJ9XHVm21lAOaWOTmpkgATtvdVnYMqtmKjpoDODaFFfJPqyirKANTtsdsY/qsq6frwN/Z7u15RsRUbNQWm7MrdFuh5FWuC9fm8N/Samq2KFYApe2SDBetlFXMBQEUlPZu49FceAeJKQE+G7FrHpb8AkBCmBICENCquNAWAuJRNSFwBICGNiitNASAuZRMSN9MAnCs+vnrG//caEE31XtU4RXseOtONfftH8fH8MlxY7fvce7GR++s1B0qnosozkwAEj58bDT7IzF9ZKKTJHLioGnJpnLrtlhkIFoRe8KHfUM7amt87+KbpeTMHwFTRvcVi/K6VcAw82ec5SsvNmorfzn/adg8R0HKOvj9jres/MPROuziLHc8UAO9vG77q6mU9JwBq87cmf6nglYOp6R371OzKnQC9tGgCjF/nr12zkYa3XAibaKYAmNrhftOy8FQ7sYjxdH7C2drOLs7jdXv0IIO3tTsHgx/o88ras3bn42YKAOW1hBnvFCacde3Ej/N4zXb/BOCTCuf4ccFzvqFg19QkUwDorCZe8Bzlx9lhxV/Mr2a7rBLXdDVwAaCFygLA5cLo/Bur/O2Ji8BmfZUR4HJV4tJfAFAZvxexkUtAE3F0hiAZAdQIlBFA7gFimZEllwC1L2BLK7kEyCVAfgZeyoDcA1z+rZDnABpDrfwMlJ+ByvsKyoOgFD4Imrbd3aT0FjL9vuCVbtEYXCI3rdmjrwN8a/vAvK/glQfa2zW3yNTPwGnbvZeAn7UTyyKM91adoXZ2cR6vD4xWmNhpew72v1aY2PWTtnYtDDIFQKBB3XafZ+DuxQS7OEOro5x2FaY5Su9MMp4tTDjBSqqhP5kDYO5t5GBOQKtt1Yc/vP4/ElrRCB3b7IR6LJfL3dezd/C0ySkzB8C8WHV79H6Av8zABoDeJMarZPmHVd9+NRFdx/eD7aPXfWQpl32mDQCvBXCMQMfzXulJnTitbDMLQBTipSGGAJCGLhrUIAAYiJcGVwEgDV00qEEAMBAvDa4CQBq6aFCDAGAgXhpcBYA0dNGgBgHAQLw0uAoAaeiiQQ0CgIF4aXAVANLQRYMaBAAD8dLg2nEAdJaKBWNTYcI5mgbhu6UGHQBiWSpWaeLD/9TiUsErj3WLeGnIo1Z0vwvGXpVaYlksWme5+A/3FHoi7zltF01QKUZsZhXQmSkdy3LxOhtGENGJRo6+2D8+NC0NNFegPuB+ignKC03FsmFEUIbOljEE+nneK91rXr5EmLYr+wm0XVGJeLaMmR2GNDeNAn+13ysfUUxczJooUCuO2mBW3pk93k2jQmwb5/vY2r/PeVq6q6/AtF15kEC7dTxj3TYu7MaRwWpePuHoxXMzL117uDtX+dQROU7bszvHV/qNxq1z2/PdpnOu2DeODJIx3To2eElSp6gs2TLzDSDcELbm2LeODRKTzaPDtidevyu2eXRQhmwfH28zw0S/YtvHzydXH3APMEF5i9IwRYmPmgImi2crLxHTLJWa7Qbr9N6hlqZYxaSAV/CcYtjYRgAEJ63Z7gsA7gqbgPgZKEA4Xqg6txtEUN87eLGT1IojNthSflhhkrD4zipAhMP5qtNyiXpVnYxHgPkT1Ww3eP25AmCl6snFLpQCpwF6tOCV9oXyvsQpMgCCuFMDleuJyLYAm4HlUSQoMea+8cB5H/CY2eufKL8blS6RAjCf1Nmd4zc3/MY2Au5hxqqoks1iHAbeI+BILpc71LN38ETUGsQCwMIkp213swVsZmA9GCtAWAEgH3UhKYlXB2MShEmA3wLwTMErvxhnbbEDEGfyEttcAQHAXMNERxAAEt0+8+QFAHMNEx1BAEh0+8yTFwDMNUx0BAEg0e0zT14AMNcw0REEgES3zzx5AcBcw0RHEAAS3T7z5AUAcw0THUEASHT7zJMXAMw1THQEASDR7TNPXgAw1zDREf4DSPKG2yZqlokAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://m.bilibili.com/*
// @match        *://live.bilibili.com/*
// @match        *://www.bilibili.com/read/*
// @match        *://www.bilibili.com/h5/comment/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/QRCode/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.9.6/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.7.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.6.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.5.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @require      https://fastly.jsdelivr.net/npm/md5@2.3.0/dist/md5.min.js
// @require      https://fastly.jsdelivr.net/npm/flv.js@1.6.2/dist/flv.js
// @require      https://fastly.jsdelivr.net/npm/artplayer@5.3.0/dist/artplayer.js
// @require      https://fastly.jsdelivr.net/npm/artplayer-plugin-danmuku@5.2.0/dist/artplayer-plugin-danmuku.js
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      *
// @connect      m.bilibili.com
// @connect      www.bilibili.com
// @connect      api.bilibili.com
// @connect      app.bilibili.com
// @connect      passport.bilibili.com
// @connect      hdslb.com
// @connect      aisubtitle.hdslb.com
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_setValues
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (Qmsg, DOMUtils, Utils, pops, md5, Artplayer, artplayerPluginDanmuku, Viewer, flvjs) {
  "use strict";

  const d = new Set();
  const importCSS = async (t) => {
    d.has(t) ||
      (d.add(t),
      ((a) => {
        function r(n) {
          if (typeof GM_addStyle == "function") return GM_addStyle(n);
          const e = document.createElement("style");
          if ((e.setAttribute("type", "text/css"), e.setAttribute("data-type", "gm-css"), globalThis.trustedTypes)) {
            const c = globalThis.trustedTypes.createPolicy("safe-innerHTML", { createHTML: (i) => i });
            e.innerHTML = c.createHTML(n);
          } else e.innerHTML = n;
          return ((document.head || document.documentElement).appendChild(e), e);
        }
        r(a);
      })(t));
  };

  const blockCss =
    '@charset "UTF-8";.m-video2-awaken-btn,.openapp-dialog{display:none!important}.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-head m-open-app{display:none!important}.m-home .launch-app-btn.home-float-openapp{display:none!important}.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp,.m-space m-open-app:has(>.m-fixed-openapp){display:none!important}#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp,#app .video .m-video-season-panel .launch-app-btn .open-app{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp{display:none!important}#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn,#app .m-dynamic m-open-app:has(>.m-fixed-openapp){display:none!important}#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .m-opus .m-navbar .m-nav-openapp,#app .m-opus m-open-app.m-open-app.fixed-openapp{display:none!important}#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp{display:none!important}#app.main-container bili-open-app.btn-download{display:none!important}#__next m-open-app[class^=TopBar_download],#__next m-open-app:has([class^=GoApp]){display:none!important}#__next m-open-app[class^=MainButton_btnWrap]{visibility:hidden!important}#app .read-app-main bili-open-app{display:none!important}#app .playlist>.open-app-wp{display:none!important}#app .playlist>.open-app-wp+div{padding-top:56.25%}';
  importCSS(blockCss);
  const commonCss = "html{--bili-color: #fb7299;--bili-color-rgb: 251, 114, 153}";
  importCSS(commonCss);
  const BilibiliBeautifyCSS =
    '@charset "UTF-8";\r\n/* 主页 */\r\n#app .m-head {\r\n  --bg-color: #f0f1f3;\r\n  --bg-rever-color: #ffffff;\r\n  --pd-width: 1.3333vmin;\r\n  --bd-circle: 1.3333vmin;\r\n  --card-height: 30vmin;\r\n  --icon-font-size: 3.2vmin;\r\n  --icon-text-font-size: 2.6vmin;\r\n  --icon-font-margin-right: 3vmin;\r\n  --title-font-size: 2.8vmin;\r\n  background-color: var(--bg-color);\r\n}\r\n#app .m-head .m-home {\r\n  background-color: var(--bg-color);\r\n}\r\n/* 美化视频卡片 */\r\n#app .m-head .video-list .card-box .v-card {\r\n  background-color: var(--bg-rever-color);\r\n  padding: 0px;\r\n  margin: 0px;\r\n  width: calc(50% - var(--pd-width) / 2);\r\n  border-radius: var(--bd-circle);\r\n  margin-top: var(--pd-width);\r\n  display: grid;\r\n  /* 视频封面区域 */\r\n}\r\n#app .m-head .video-list .card-box .v-card .card {\r\n  background: var(--bg-rever-color);\r\n  border-radius: unset;\r\n  border-top-left-radius: var(--bd-circle);\r\n  border-top-right-radius: var(--bd-circle);\r\n  height: var(--card-height);\r\n}\r\n#app .m-head .video-list .card-box .v-card .card .count {\r\n  display: flex;\r\n  justify-content: safe flex-start;\r\n  padding-right: 0;\r\n}\r\n#app .m-head .video-list .card-box .v-card .card .count .iconfont {\r\n  font-size: var(--icon-text-font-size);\r\n}\r\n#app .m-head .video-list .card-box .v-card .card .count > span {\r\n  font-size: var(--icon-text-font-size);\r\n  margin-right: var(--icon-font-margin-right);\r\n}\r\n/* 视频标题区域 */\r\n#app .m-head .video-list .card-box .v-card .title {\r\n  padding: 0;\r\n  margin: var(--pd-width);\r\n  font-size: var(--title-font-size);\r\n}\r\n/* 两列 => 左边的 */\r\n#app .m-head .video-list .card-box .v-card:nth-child(2n-1) {\r\n  /*background-color: red;*/\r\n  margin-right: calc(var(--pd-width) / 2);\r\n}\r\n/* 两列 => 右边的 */\r\n#app .m-head .video-list .card-box .v-card:nth-child(2n) {\r\n  /*background-color: rebeccapurple;*/\r\n  margin-left: calc(var(--pd-width) / 2);\r\n}\r\n';
  const BilibiliRouter = {
    isVideo() {
      return window.location.pathname.startsWith("/video/");
    },
    isBangumi() {
      return window.location.pathname.startsWith("/bangumi/");
    },
    isSearch() {
      return window.location.pathname.startsWith("/search");
    },
    isSearchResult() {
      let urlSearchParams = new URLSearchParams(window.location.search);
      return this.isSearch() && urlSearchParams.has("keyword");
    },
    isLive() {
      return window.location.hostname === "live.bilibili.com";
    },
    isOpus() {
      return window.location.pathname.startsWith("/opus");
    },
    isTopicDetail() {
      return window.location.pathname.startsWith("/topic-detail");
    },
    isDynamic() {
      return window.location.pathname.startsWith("/dynamic");
    },
    isHead() {
      return window.location.pathname === "/" || window.location.pathname.startsWith("/channel");
    },
    isSpace() {
      return window.location.pathname.startsWith("/space");
    },
    isPlayList() {
      return window.location.pathname.startsWith("/playlist");
    },
  };
  const BilibiliPCRouter = {
    isPC() {
      return window.location.hostname === "www.bilibili.com";
    },
    isReadMobile() {
      return this.isPC() && window.location.pathname.startsWith("/read/mobile");
    },
  };
  var _GM_deleteValue = (() => (typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0))();
  var _GM_getResourceText = (() => (typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0))();
  var _GM_getValue = (() => (typeof GM_getValue != "undefined" ? GM_getValue : void 0))();
  var _GM_info = (() => (typeof GM_info != "undefined" ? GM_info : void 0))();
  var _GM_listValues = (() => (typeof GM_listValues != "undefined" ? GM_listValues : void 0))();
  var _GM_registerMenuCommand = (() =>
    typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = (() => (typeof GM_setValue != "undefined" ? GM_setValue : void 0))();
  var _GM_setValues = (() => (typeof GM_setValues != "undefined" ? GM_setValues : void 0))();
  var _GM_unregisterMenuCommand = (() =>
    typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = (() => (typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0))();
  var _unsafeWindow = (() => (typeof unsafeWindow != "undefined" ? unsafeWindow : void 0))();
  var _monkeyWindow = (() => window)();
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
      this.triggerValueChangeListener = this.triggerValueChangeListener.bind(this);
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
      this.triggerValueChangeListener(key, oldValue, value);
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
      this.triggerValueChangeListener(key, oldValue, void 0);
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
    async triggerValueChangeListener(...args) {
      const [key, oldValue, newValue] = args;
      if (!this.listenerData.has(key)) {
        return;
      }
      let listenerData = this.listenerData.get(key);
      for (let index = 0; index < listenerData.length; index++) {
        const data2 = listenerData[index];
        if (typeof data2.callback === "function") {
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
          await data2.callback(key, __oldValue, __newValue);
        }
      }
    }
  }
  const PopsPanelStorageApi = new StorageUtils(KEY);
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
        DOMUtils.ready(() => {
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
            log$1.error("读取剪贴板内容失败👉", error);
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
            log$1.error("申请剪贴板权限失败，尝试直接读取👉", error.message ?? error.name ?? error.stack);
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
        let result = await fn(isTimeout);
        if ((typeof result === "boolean" && !result) || isTimeout) {
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
    toStr(data2) {
      const undefinedReplacedStr = `__undefined__placeholder__replaced__str__`;
      const dataStr = JSON.stringify(
        data2,
        (key, value) => {
          return value === void 0 ? undefinedReplacedStr : value;
        },
        2
      ).replace(new RegExp(`"${undefinedReplacedStr}"`, "g"), "undefined");
      return dataStr;
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
          const updateConfigToStorage = async (data2) => {
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
              _GM_setValues(data2);
            } else {
              const keys = Object.keys(data2);
              keys.forEach((key) => {
                const value = data2[key];
                _GM_setValue(key, value);
              });
            }
            Qmsg.success("配置导入完毕");
          };
          const importFile = (configText) => {
            return new Promise(async (resolve) => {
              const data2 = utils.toJSON(configText);
              if (Object.keys(data2).length === 0) {
                Qmsg.warning("解析为空配置，不导入");
              } else {
                await updateConfigToStorage(data2);
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
                      log$1.error(response);
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
            domUtils.listenKeyboard($promptInput, "keydown", (keyName, keyValue, otherCodeList) => {
              if (keyName === "Enter" && otherCodeList.length === 0) {
                const value = domUtils.val($promptInput);
                if (value !== "") {
                  domUtils.trigger($promptOk, "click");
                }
              }
            });
            domUtils.trigger($promptInput, "input");
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
          forms: [],
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
      GM_Menu.add(this.$data.menuOption);
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
        if (config.type === "button" || config.type === "forms" || config.type === "deepMenu") {
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
          log$1.warn(["请先配置键", config]);
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
    setDefaultValue(key, defaultValue) {
      if (this.$data.contentConfigInitDefaultValue.has(key)) {
        log$1.warn("请检查该key(已存在): " + key);
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
      const listenerId = PopsPanelStorageApi.addValueChangeListener(key, (__key, __newValue, __oldValue) => {
        callback(key, __oldValue, __newValue);
      });
      return listenerId;
    },
    removeValueChangeListener(listenerId) {
      PopsPanelStorageApi.removeValueChangeListener(listenerId);
    },
    triggerMenuValueChange(key, newValue, oldValue) {
      PopsPanelStorageApi.triggerValueChangeListener(key, oldValue, newValue);
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
        log$1.warn(`${findNotInDataKey} 键不存在`);
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
          if (typeof args === "object" && args != null) {
            if (args instanceof Element) {
              resultValueList.push(args);
            } else {
              const { $css, destory } = args;
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
            resultValueList.push(args);
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
              log$1.warn(`.execMenu${once ? "Once" : ""} ${__key__} 被禁用`);
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
    async triggerUrlChangeWithExecMenuOnceEvent(config) {
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
      let checkHasBottomVersionContentConfig =
        content.findIndex((it) => {
          let isBottom = typeof it.isBottom === "function" ? it.isBottom() : Boolean(it.isBottom);
          return isBottom && it.id === "script-version";
        }) !== -1;
      if (!preventDefaultContentConfig && !checkHasBottomVersionContentConfig) {
        content.push(...PanelContent.getDefaultBottomContentConfig());
      }
      let $panel = __pops__.panel({
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
        domUtils.animationend($el, () => {
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
                      const __formConfig__ = Reflect.get($deepMenu, "__formConfig__");
                      return (
                        typeof __formConfig__ === "object" &&
                        __formConfig__ != null &&
                        __formConfig__.text === target.name
                      );
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
                      const __formConfig__ = Reflect.get($menuItem, "__formConfig__");
                      return __formConfig__ === target.matchedData?.formConfig;
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
              const child_forms = configItem.forms;
              if (child_forms && Array.isArray(child_forms)) {
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
                loopContentConfig(child_forms, deepMenuPath);
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
                  text = Reflect.get(configItem, "text");
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
  const GM_RESOURCE_MAPPING = {
    Viewer: {
      keyName: "ViewerCSS",
      url: "https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css",
    },
  };
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
  const utils = Utils.noConflict();
  const domUtils = DOMUtils.noConflict();
  const __pops__ = pops;
  const log$1 = new utils.Log(_GM_info, _unsafeWindow.console || _monkeyWindow.console);
  const SCRIPT_NAME = _GM_info?.script?.name || void 0;
  const AnyTouch = pops.config.Utils.AnyTouch();
  const DEBUG = false;
  log$1.config({
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
      const qmsgType = qmsgInst.getSetting().type;
      if (qmsgType === "loading") {
        return false;
      }
      const content = qmsgInst.getSetting().content;
      if (qmsgType === "warning") {
        log$1.warn(content);
      } else if (qmsgType === "error") {
        log$1.error(content);
      } else {
        log$1.info(content);
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
  const GM_Menu = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand,
  });
  const httpx = new utils.Httpx({
    xmlHttpRequest: _GM_xmlhttpRequest,
    logDetails: DEBUG,
  });
  httpx.interceptors.request.use((data2) => {
    return data2;
  });
  httpx.interceptors.response.use(void 0, (data2) => {
    log$1.error("拦截器-请求错误", data2);
    if (data2.type === "onabort") {
      Qmsg.warning("请求取消", { consoleLogContent: true });
    } else if (data2.type === "onerror") {
      Qmsg.error("请求异常", { consoleLogContent: true });
    } else if (data2.type === "ontimeout") {
      Qmsg.error("请求超时", { consoleLogContent: true });
    } else {
      Qmsg.error("其它错误", { consoleLogContent: true });
    }
    return data2;
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
    setTimeout: _unsafeWindow.setTimeout,
  };
  const addStyle = domUtils.addStyle.bind(domUtils);
  const $ = DOMUtils.selector.bind(DOMUtils);
  const $$ = DOMUtils.selectorAll.bind(DOMUtils);
  const cookieManager = new utils.GM_Cookie();
  const QRCodeJS = _monkeyWindow.QRCode || _unsafeWindow.QRCode;
  const VueUtils = {
    getVue($el) {
      if ($el == null) {
        return;
      }
      return $el["__vue__"] || $el["__Ivue__"] || $el["__IVue__"];
    },
    getVue3($el) {
      if ($el == null) {
        return;
      }
      return $el["__vueParentComponent"];
    },
    waitVuePropToSet($el, checkOption) {
      if (!Array.isArray(checkOption)) {
        checkOption = [checkOption];
      }
      function getTarget() {
        let __target__ = null;
        if (typeof $el === "string") {
          __target__ = domUtils.selector($el);
        } else if (typeof $el === "function") {
          __target__ = $el();
        } else if ($el instanceof HTMLElement) {
          __target__ = $el;
        }
        return __target__;
      }
      checkOption.forEach((needSetOption) => {
        if (typeof needSetOption.msg === "string") {
          log$1.info(needSetOption.msg);
        }
        function checkTarget() {
          let $targetEl = getTarget();
          if ($targetEl == null) {
            return {
              status: false,
              isTimeout: true,
              inst: null,
              $el: $targetEl,
            };
          }
          let vueInst = VueUtils.getVue($targetEl);
          if (vueInst == null) {
            return {
              status: false,
              isTimeout: false,
              inst: null,
              $el: $targetEl,
            };
          }
          let checkResult = needSetOption.check(vueInst, $targetEl);
          checkResult = Boolean(checkResult);
          return {
            status: checkResult,
            isTimeout: false,
            inst: vueInst,
            $el: $targetEl,
          };
        }
        utils
          .waitVueByInterval(
            () => {
              return getTarget();
            },
            () => checkTarget().status,
            250,
            1e4
          )
          .then((result) => {
            let checkTargetResult = checkTarget();
            if (checkTargetResult.status) {
              let vueInst = checkTargetResult.inst;
              needSetOption.set(vueInst, checkTargetResult.$el);
            } else {
              if (typeof needSetOption.failWait === "function") {
                needSetOption.failWait(checkTargetResult.isTimeout);
              }
            }
          });
      });
    },
    watchVuePropChange($el, key, callback, watchConfig, failWait) {
      let config = utils.assign(
        {
          immediate: true,
          deep: false,
        },
        watchConfig || {}
      );
      return new Promise((resolve) => {
        VueUtils.waitVuePropToSet($el, {
          check(vueInstance) {
            return typeof vueInstance?.$watch === "function";
          },
          set(vueInstance) {
            let removeWatch = null;
            if (typeof key === "function") {
              removeWatch = vueInstance.$watch(
                () => {
                  return key(vueInstance);
                },
                (newValue, oldValue) => {
                  callback(vueInstance, newValue, oldValue);
                },
                config
              );
            } else {
              removeWatch = vueInstance.$watch(
                key,
                (newValue, oldValue) => {
                  callback(vueInstance, newValue, oldValue);
                },
                config
              );
            }
            resolve(removeWatch);
          },
          failWait,
        });
      });
    },
    goToUrl($el, path, useRouter = false) {
      if ($el == null) {
        Qmsg.error("跳转Url: $vueNode为空");
        log$1.error("跳转Url: $vueNode为空：" + path);
        return;
      }
      let vueInstance = VueUtils.getVue($el);
      if (vueInstance == null) {
        Qmsg.error("获取vue属性失败", { consoleLogContent: true });
        return;
      }
      let $router = vueInstance.$router;
      let isBlank = true;
      log$1.info("即将跳转URL：" + path);
      if (useRouter) {
        isBlank = false;
      }
      if (isBlank) {
        window.open(path, "_blank");
      } else {
        if (path.startsWith("http") || path.startsWith("//")) {
          if (path.startsWith("//")) {
            path = window.location.protocol + path;
          }
          let urlObj = new URL(path);
          if (urlObj.origin === window.location.origin) {
            path = urlObj.pathname + urlObj.search + urlObj.hash;
          } else {
            log$1.info("不同域名，直接本页打开，不用Router：" + path);
            window.location.href = path;
            return;
          }
        }
        log$1.info("$router push跳转Url：" + path);
        $router.push(path);
      }
    },
    hookGestureReturnByVueRouter(option) {
      function popstateEvent() {
        log$1.success("触发popstate事件");
        resumeBack(true);
      }
      function banBack() {
        log$1.success("监听地址改变");
        option.vueInst.$router.history.push(option.hash);
        domUtils.on(_unsafeWindow, "popstate", popstateEvent);
      }
      async function resumeBack(isFromPopState = false) {
        domUtils.off(_unsafeWindow, "popstate", popstateEvent);
        let callbackResult = option.callback(isFromPopState);
        if (callbackResult) {
          return;
        }
        while (1) {
          if (option.vueInst.$router.history.current.hash === option.hash) {
            log$1.info("后退！");
            option.vueInst.$router.back();
            await utils.sleep(250);
          } else {
            return;
          }
        }
      }
      banBack();
      return {
        resumeBack,
      };
    },
  };
  const BilibiliUtils = {
    goToUrl(path, useRouter = false) {
      let isGoToUrlBlank = Panel.getValue("bili-go-to-url-blank");
      log$1.info("即将跳转URL：" + path);
      if (useRouter) {
        isGoToUrlBlank = false;
      }
      if (isGoToUrlBlank) {
        window.open(path, "_blank");
      } else {
        if (path.startsWith("http") || path.startsWith("//")) {
          if (path.startsWith("//")) {
            path = window.location.protocol + path;
          }
          let urlObj = new URL(path);
          if (urlObj.origin === window.location.origin) {
            path = urlObj.pathname + urlObj.search + urlObj.hash;
          } else {
            log$1.info("不同域名，直接本页打开，不用Router：" + path);
            window.location.href = path;
            return;
          }
        }
        log$1.info("$router push跳转Url：" + path);
        let $app = $("#app");
        if ($app == null) {
          if (!useRouter) {
            window.location.href = path;
            return;
          }
          Qmsg.error("跳转Url: 获取根元素#app失败");
          log$1.error("跳转Url: 获取根元素#app失败：" + path);
          return;
        }
        let vueInstance = VueUtils.getVue($app);
        if (vueInstance == null) {
          if (!useRouter) {
            window.location.href = path;
            return;
          }
          log$1.error("获取#app的vue属性失败");
          Qmsg.error("获取#app的vue属性失败");
          return;
        }
        let $router = vueInstance.$router;
        $router.push(path);
      }
    },
    goToLogin(fromUrl = "") {
      window.open(`https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(fromUrl)}`);
    },
    parseDuration(duration) {
      if (typeof duration !== "number") {
        duration = parseInt(duration);
      }
      if (isNaN(duration)) {
        return duration.toString();
      }
      function zeroPadding(num) {
        if (num < 10) {
          return `0${num}`;
        } else {
          return num;
        }
      }
      if (duration < 60) {
        return `0:${zeroPadding(duration)}`;
      } else if (duration >= 60 && duration < 3600) {
        return `${Math.floor(duration / 60)}:${zeroPadding(duration % 60)}`;
      } else {
        return `${Math.floor(duration / 3600)}:${zeroPadding(
          Math.floor(duration / 60) % 60
        )}:${zeroPadding(duration % 60)}`;
      }
    },
    parseCount(count) {
      let countText = count.toString();
      if (count > 1e4) {
        let roundNum = (count / 1e4).toFixed(2).slice(0, -1);
        if (roundNum.endsWith(".0")) {
          roundNum = roundNum.slice(0, -2);
        }
        countText = `${roundNum}万`;
      } else if (count > 1e4 * 1e4) {
        let roundNum = (count / (1e4 * 1e4)).toFixed(2).slice(0, -1);
        if (roundNum.endsWith(".0")) {
          roundNum = roundNum.slice(0, -2);
        }
        countText = `${roundNum}亿`;
      }
      return countText;
    },
    hookGestureReturnByVueRouter(option) {
      function popstateEvent() {
        log$1.success("触发popstate事件");
        resumeBack(true);
      }
      function banBack() {
        log$1.success("监听地址改变");
        option.vueObj.$router.history.push(option.hash);
        domUtils.on(window, "popstate", popstateEvent);
      }
      async function resumeBack(isFromPopState = false) {
        domUtils.off(window, "popstate", popstateEvent);
        let callbackResult = option.callback(isFromPopState);
        if (callbackResult) {
          return;
        }
        while (1) {
          if (option.vueObj.$router.history.current.hash === option.hash) {
            log$1.info("后退！");
            option.vueObj.$router.back();
            await utils.sleep(250);
          } else {
            return;
          }
        }
      }
      banBack();
      return {
        resumeBack,
      };
    },
    initialScale() {
      log$1.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>");
      domUtils.ready(() => {
        let meta = domUtils.createElement(
          "meta",
          {},
          {
            name: "viewport",
            content: "width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover",
          }
        );
        domUtils.remove("meta[name='viewport']");
        domUtils.waitNode("head").then(() => {
          document.head.appendChild(meta);
        });
      });
    },
  };
  const BilibiliUrl = {
    getUserSpaceUrl(userId) {
      return `https://m.bilibili.com/space/${userId}`;
    },
    getUserSpaceDynamicUrl(id) {
      return `https://m.bilibili.com/dynamic/${id}`;
    },
    getUserSpaceOpusUrl(id) {
      return `https://m.bilibili.com/opus/${id}`;
    },
    getVideoUrl(id) {
      return `https://m.bilibili.com/video/${id}`;
    },
  };
  const BilibiliData = {
    className: {
      bangumi: "#app.main-container",
      bangumi_new: "body > #__next",
      dynamic: "#app .m-dynamic",
      opus: "#app .m-opus",
      video: "#app .video",
      mVideo: "#app .m-video",
      head: "#app .m-head",
      playlist: "#app .playlist",
      space: "#app .m-space",
    },
    theme: "#FB7299",
  };
  const BilibiliPCData = {
    className: {
      read: {
        mobile: "#app .read-app-main",
      },
    },
  };
  const artPlayerCSS$1 =
    ".artplayer-container {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  overflow: hidden;\r\n}\r\n";
  const artPlayerCommonCSS =
    "/* 设置播放器基础宽高 */\r\n#artplayer {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n/* 通用隐藏class */\r\n.art-video-player .art-common-hide {\r\n  display: none !important;\r\n}\r\n/* 设置播放器基础宽高 */\r\n.art-video-player {\r\n  width: 100% !important;\r\n}\r\n/* 播放时隐藏进度条 */\r\n.art-hide-cursor .art-progress {\r\n  display: none !important;\r\n}\r\n/* 不知道为什么背景模糊了 */\r\n.art-video-player.art-backdrop .art-settings {\r\n  backdrop-filter: unset !important;\r\n}\r\n/* 底部的设置菜单当前选中的提示文字设置文字溢出省略号 */\r\n.art-settings .art-setting-item .art-setting-item-right-tooltip {\r\n  max-width: 100px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n/* 竖屏 宽度小于400px */\r\n@media (orientation: portrait) and (max-width: 400px) {\r\n  /* 修正小屏下宽度溢出 */\r\n  .art-controls .art-control {\r\n    max-width: 60px;\r\n    white-space: pre-wrap;\r\n  }\r\n}\r\n\r\n/* 竖屏 宽度小于550px */\r\n@media (orientation: portrait) and (max-width: 550px) {\r\n  /* 隐藏 弹幕设置按钮 */\r\n  .artplayer-plugin-danmuku .apd-config ,\r\n    /* 隐藏 弹幕输入框 */\r\n	.artplayer-plugin-danmuku .apd-emitter {\r\n    display: none !important;\r\n  }\r\n  /* 弹幕库靠右对齐 */\r\n  .artplayer-plugin-danmuku {\r\n    justify-content: right;\r\n  }\r\n}\r\n/* 横屏 */\r\n@media (orientation: landscape) {\r\n  /* 限制弹幕输入框的最大宽度 */\r\n  .artplayer-plugin-danmuku .apd-emitter {\r\n    max-width: 260px;\r\n  }\r\n}\r\n\r\n/* 插件-在线观看人数  */\r\n.art-lock .art-layer-top-wrap {\r\n  /* 启用了锁定功能，隐藏底部控制栏，所以这个也同步 */\r\n  display: none !important;\r\n}\r\n.art-layer-top-wrap {\r\n  --layer-top-wrap-follow-text-font-size: 0.8em;\r\n  --layer-top-wrap-follow-icon-size: 1em;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 0px;\r\n  right: 0px;\r\n  color: #fff;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  left: 0;\r\n  -webkit-transition: all 0.2s ease-in-out;\r\n  transition: all 0.2s ease-in-out;\r\n  width: 100%;\r\n  background: linear-gradient(to bottom, #000, transparent);\r\n  padding: 10px calc(var(--art-padding));\r\n  z-index: 60;\r\n}\r\n.art-player-top-wrap {\r\n  width: 100%;\r\n}\r\n.art-player-top-wrap .art-player-top-title-text {\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  max-width: 100%;\r\n}\r\n/* 面板隐藏时，顶部toolbar也隐藏 */\r\n.art-hide-cursor .art-layer-top-wrap {\r\n  transform: translateY(-60px);\r\n}\r\n/*.art-layer-top-wrap .art-player-top-wrap {\r\n}\r\n.art-layer-top-wrap .art-player-top-title-text {\r\n}*/\r\n/* 下面的当前在线观看人数 */\r\n.art-layer-top-wrap .art-player-top-follow {\r\n  margin-top: var(--art-padding);\r\n  gap: var(--layer-top-wrap-follow-text-font-size);\r\n  font-size: var(--layer-top-wrap-follow-text-font-size);\r\n  display: flex;\r\n  align-items: center;\r\n  position: absolute;\r\n}\r\n.art-layer-top-wrap .art-player-top-follow .art-player-top-follow-icon {\r\n  width: var(--layer-top-wrap-follow-icon-size);\r\n  height: var(--layer-top-wrap-follow-icon-size);\r\n}\r\n.art-layer-top-wrap .art-player-top-follow-text {\r\n  text-wrap: nowrap;\r\n}\r\n/* 插件-在线观看人数  */\r\n\r\n/* 插件-锁定 */\r\n.art-video-player .art-layers .art-layer.art-layer-lock {\r\n  /* 放在右边 */\r\n  right: 0;\r\n  left: calc(100% - 20px - var(--art-lock-size) - var(--art-lock-left-size));\r\n}\r\n/* 插件-锁定 */\r\n";
  const BilibiliApiRequestCheck = {
    mergeAidOrBvidSearchParamsData(searchParamsData, config) {
      if ("aid" in config && config["aid"] != null) {
        Reflect.set(searchParamsData, "aid", config.aid);
      } else if ("bvid" in config && config["bvid"] != null) {
        Reflect.set(searchParamsData, "bvid", config.bvid);
      } else {
        throw new TypeError("avid or bvid must give one");
      }
    },
  };
  const BilibiliApiConfig = {
    web_host: "api.bilibili.com",
  };
  const BilibiliApiResponseCheck = {
    isWebApiSuccess(json) {
      return json?.code === 0 && (json?.message === "0" || json?.message === "success");
    },
    isAreaLimit(data2) {
      let areaLimitCode = {
        6002003: "抱歉您所在地区不可观看！",
      };
      let flag = false;
      Object.keys(areaLimitCode).forEach((code) => {
        let codeMsg = areaLimitCode[code];
        if (data2.code.toString() === code.toString() || data2.message.includes(codeMsg)) {
          flag = true;
        }
      });
      return flag;
    },
  };
  const VideoQualityNameMap = {
    "240P 极速": 6,
    "360P 流畅": 16,
    "480P 清晰": 32,
    "720P 高清": 64,
    "720P60 高帧率": 74,
    "1080P 高清": 80,
    "1080P+ 高码率": 112,
    "1080P60 高帧率": 116,
    "4K 超清": 120,
    "HDR 真彩色": 125,
    杜比视界: 126,
    "8K 超高清": 127,
  };
  const VideoQualityMap = {};
  Object.keys(VideoQualityNameMap).forEach((qualityName) => {
    let qualityValue = Reflect.get(VideoQualityNameMap, qualityName);
    Reflect.set(VideoQualityMap, qualityValue, qualityName);
  });
  const BilibiliUserApi = {
    async nav(checkCode = true) {
      let response = await httpx.get("https://api.bilibili.com/x/web-interface/nav?web_location=333.401", {
        fetch: true,
        responseType: "json",
        allowInterceptConfig: false,
      });
      if (!response.status) {
        log$1.error(response);
        Qmsg.error("获取导航栏用户信息失败，请求异常", {
          consoleLogContent: true,
        });
        return;
      }
      let data2 = utils.toJSON(response.data.responseText);
      if (checkCode && !BilibiliApiResponseCheck.isWebApiSuccess(data2)) {
        log$1.error(["获取导航栏用户信息失败：", data2]);
        Qmsg.error("获取导航栏用户信息失败", {
          consoleLogContent: true,
        });
        return;
      }
      return data2.data;
    },
    async space(mid, offset = "") {
      let response = await httpx.get("https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/space", {
        data: {
          host_mid: mid,
          offset,
        },
        fetch: true,
      });
      if (!response.status) {
        return;
      }
      let data2 = utils.toJSON(response.data.responseText);
      if (!BilibiliApiResponseCheck.isWebApiSuccess(data2)) {
        return;
      }
      return data2["data"];
    },
    async following(mid, pn = 1, ps = 50) {
      let response = await httpx.get("https://api.bilibili.com/x/relation/followings", {
        data: {
          vmid: mid,
          ps,
          pn,
        },
        fetch: true,
      });
      if (!response.status) {
        return;
      }
      let data2 = utils.toJSON(response.data.responseText);
      if (!BilibiliApiResponseCheck.isWebApiSuccess(data2)) {
        return data2["message"];
      }
      return data2["data"];
    },
  };
  const BilibiliGlobalData = {
    $data: {
      isLogin: new Promise(() => false),
    },
    $flag: {
      isSetQueryLoginStatus: false,
      isQueryLoginStatus: false,
    },
    init() {
      this.setLoginStatus();
    },
    setLoginStatus() {
      if (this.$flag.isSetQueryLoginStatus) {
        return;
      }
      this.$flag.isSetQueryLoginStatus = true;
      let isLogin = false;
      this.$data.isLogin = new Promise(async (resolve) => {
        if (!this.$flag.isQueryLoginStatus) {
          this.$flag.isQueryLoginStatus = true;
          let userNavInfo = await BilibiliUserApi.nav(false);
          if (userNavInfo && userNavInfo.isLogin) {
            isLogin = true;
          }
        }
        resolve(isLogin);
      });
    },
  };
  const BilibiliVideoApi = {
    async playUrl(config, extraParams) {
      let searchParamsData = {
        cid: config.cid,
        qn: config.qn ?? VideoQualityNameMap["1080P60 高帧率"],
        high_quality: config.high_quality ?? 1,
        fnval: config.fnval ?? 1,
        fnver: config.fnver ?? 0,
        fourk: config.fourk ?? 1,
        try_look: (await BilibiliGlobalData.$data.isLogin) ? 0 : 1,
        platform: config.setPlatformHTML5 ? "html5" : "pc",
      };
      BilibiliApiRequestCheck.mergeAidOrBvidSearchParamsData(searchParamsData, config);
      if (typeof extraParams === "object" && extraParams !== null) {
        Object.assign(searchParamsData, extraParams);
      }
      let response = await httpx.get(
        "https://api.bilibili.com/x/player/playurl?" + utils.toSearchParamsStr(searchParamsData),
        {
          responseType: "json",
          fetch: true,
        }
      );
      if (!response.status) {
        return;
      }
      let data2 = utils.toJSON(response.data.responseText);
      if (data2["code"] !== 0) {
        return;
      }
      return data2["data"];
    },
    async onlineTotal(config) {
      let searchParamsData = {
        cid: config.cid,
      };
      BilibiliApiRequestCheck.mergeAidOrBvidSearchParamsData(searchParamsData, config);
      let httpxResponse = await httpx.get(
        `https://${BilibiliApiConfig.web_host}/x/player/online/total?${utils.toSearchParamsStr(searchParamsData)}`,
        {
          responseType: "json",
          fetch: true,
        }
      );
      if (!httpxResponse.status) {
        return;
      }
      let data2 = utils.toJSON(httpxResponse.data.responseText);
      if (!BilibiliApiResponseCheck.isWebApiSuccess(data2)) {
        log$1.error(`获取在线观看人数失败: ${JSON.stringify(data2)}`);
      }
      return data2["data"];
    },
    async like(config) {
      let searchParamsData = {
        like: config.like,
        csrf: cookieManager.get("bili_jct")?.value || "",
      };
      BilibiliApiRequestCheck.mergeAidOrBvidSearchParamsData(searchParamsData, config);
      let getResp = await httpx.get(
        "https://api.bilibili.com/x/web-interface/archive/like?" + utils.toSearchParamsStr(searchParamsData),
        {
          fetch: true,
        }
      );
      if (!getResp.status) {
        return false;
      }
      let data2 = utils.toJSON(getResp.data.responseText);
      const code = data2["code"];
      if (code === 0) {
        return true;
      }
      if (code === -101) {
        Qmsg.error("账号未登录");
      } else if (code === -111) {
        Qmsg.error("csrf校验失败");
      } else if (code === -400) {
        Qmsg.error("请求错误");
      } else if (code === -403) {
        Qmsg.error("账号异常");
      } else if (code === 10003) {
        Qmsg.error("不存在该稿件");
      } else if (code === 65004) {
        Qmsg.error("取消点赞失败");
      } else if (code === 65006) {
        Qmsg.warning("重复点赞");
      } else {
        Qmsg.error("未知错误：" + data2["message"]);
      }
      return false;
    },
  };
  const AppKeyInfo = {
    ios: {
      appkey: "27eb53fc9058f8c3",
      appsec: "c2ed53a74eeefe3cf99fbd01d8c9c375",
      mobi_app: "ipnone",
    },
  };
  function appSign(params, appkey, appsec) {
    params.appkey = appkey;
    const searchParams = new URLSearchParams(params);
    searchParams.sort();
    return md5(searchParams.toString() + appsec);
  }
  const BilibiliLoginApi = {
    async getQrCodeInfo() {
      let Api = "https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code";
      let postData = {
        appkey: AppKeyInfo.ios.appkey,
        local_id: "0",
        ts: "0",

        mobi_app: AppKeyInfo.ios.mobi_app,
        csrf: cookieManager.get("bili_jct")?.value || "",
      };
      let sign = appSign(postData, AppKeyInfo.ios.appkey, AppKeyInfo.ios.appsec);
      let postResp = await httpx.post(Api, {
        data: utils.toSearchParamsStr({
          ...postData,
          sign,
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        responseType: "json",
        fetch: true,
      });
      log$1.info(postResp);
      if (!postResp.status) {
        return;
      }
      let data2 = utils.toJSON(postResp.data.responseText);
      if (data2.code !== 0) {
        Qmsg.error(data2.message);
        return;
      }
      let loginData = data2.data;
      return loginData;
    },
    async poll(auth_code) {
      let Api = "https://passport.bilibili.com/x/passport-tv-login/qrcode/poll";
      let postData = {
        appkey: AppKeyInfo.ios.appkey,
        auth_code,
        local_id: "0",
        ts: "0",
      };
      let sign = appSign(postData, AppKeyInfo.ios.appkey, AppKeyInfo.ios.appsec);
      let postResp = await httpx.post(Api, {
        data: utils.toSearchParamsStr({
          ...postData,
          sign,
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        responseType: "json",
        fetch: true,
      });
      if (!postResp.status) {
        return { success: false, message: "网络错误", action: void 0 };
      }
      const json = utils.toJSON(postResp.data.responseText);
      log$1.info(json);
      const msgMap = {
        0: "成功",
        "-3": "API校验密匙错误",
        "-400": "请求错误",
        "-404": "啥都木有",
        86038: "二维码已失效",
        86039: "二维码尚未确认",
        86090: "二维码已扫码未确认",
      };
      if (!BilibiliApiResponseCheck.isWebApiSuccess(json)) {
        const code = json.code.toString();
        const message = json.message || msgMap[code] || "未知错误";
        if (code === "86038") {
          return { success: false, message, action: "refresh" };
        }
        if (code === "86039" || code === "86090") {
          return { success: false, message, action: "wait" };
        }
        return { success: false, message, action: void 0 };
      }
      const accessKey = json.data.access_token;
      const accessKeyExpireAt = Date.now() + json.data.expires_in * 1e3;
      return {
        success: true,
        message: "获取成功",
        accessKey,
        accessKeyExpireAt,
      };
    },
  };
  const BilibiliQrCodeLogin = {
    async init() {
      Qmsg.info("正在申请二维码...");
      let qrcodeInfo = await this.getQRCodeInfo();
      if (!qrcodeInfo) {
        return;
      }
      this.confirmScanQrcode(qrcodeInfo);
    },
    getQRCodeInfo: async function () {
      log$1.info("正在申请二维码...");
      let qrcodeInfo = await BilibiliLoginApi.getQrCodeInfo();
      log$1.info("获取到二维码信息", qrcodeInfo);
      return qrcodeInfo;
    },
    async confirmScanQrcode(qrcodeInfo) {
      let $alert = __pops__.alert({
        title: {
          text: "请扫描二维码登录",
          position: "center",
          html: false,
          style: "",
        },
        content: {
          text: `<div id="bili-qrcode-canvas"></div>`,
          html: true,
        },
        btn: {
          ok: {
            enable: false,
          },
          close: {
            enable: true,
            callback(event) {
              isUserCloseScanDialog = true;
              event.close();
            },
          },
        },
        mask: {
          enable: true,
          clickEvent: {
            toClose: false,
            toHide: false,
          },
        },
        only: true,
        width: "310px",
        height: "365px",
        drag: true,
        dragLimit: true,
        style: `
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `,
      });
      let $biliQrcodeCanvas = $alert.$shadowRoot.querySelector("#bili-qrcode-canvas");
      let qrcode = new QRCodeJS($biliQrcodeCanvas, {
        text: qrcodeInfo.url,
        width: 300,
        height: 300,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCodeJS.CorrectLevel.H,
      });
      let isUserCloseScanDialog = false;
      while (true) {
        if (isUserCloseScanDialog) {
          log$1.error("用户关闭扫码登录弹窗、取消扫码登录");
          break;
        }
        log$1.info("正在等待扫码登录...");
        let pollInfo = await BilibiliLoginApi.poll(qrcodeInfo.auth_code);
        if (pollInfo?.success) {
          this.setAccessTokenInfo({
            access_token: pollInfo.accessKey,
            expireAt: pollInfo.accessKeyExpireAt,
          });
          log$1.info("扫码登录成功", pollInfo);
          Qmsg.success("扫码登录成功");
          break;
        } else {
          if (pollInfo?.action === "refresh") {
            log$1.info("刷新二维码");
            Qmsg.info("刷新二维码");
            let qrcodeInfo2 = await this.getQRCodeInfo();
            if (qrcodeInfo2) {
              qrcode.clear();
              qrcode.makeCode(qrcodeInfo2.url);
            }
          } else if (pollInfo.action === "wait") {
            if (pollInfo.message === "二维码已扫码未确认") {
              log$1.info("已扫码，等待确认...");
              __pops__.loading({
                parent: $biliQrcodeCanvas,
                content: {
                  text: "已扫码，等待确认",
                },
                mask: {
                  enable: true,
                },
              });
            }
          } else {
            log$1.error(pollInfo.message);
            Qmsg.error(pollInfo.message);
            break;
          }
        }
        await utils.sleep(1500);
      }
      $alert.close();
    },
    generateExpireAt(monthNumber = 6) {
      return new Date().getTime() + 1e3 * 60 * 60 * 24 * 30 * monthNumber;
    },
    setAccessTokenInfo(data2) {
      _GM_setValue("bili-accessTokenInfo", data2);
    },
    getAccessTokenInfo() {
      let data2 = _GM_getValue("bili-accessTokenInfo");
      if (data2 && data2.expireAt > Date.now()) {
        return data2;
      } else {
        return null;
      }
    },
    getAccessToken() {
      return this.getAccessTokenInfo()?.access_token || "";
    },
  };
  const githubCDNServerList = {
    上海: [
      "cn-sh-ct-01-06.bilivideo.com",
      "cn-sh-ct-01-13.bilivideo.com",
      "cn-sh-ct-01-15.bilivideo.com",
      "cn-sh-ct-01-24.bilivideo.com",
      "cn-sh-ct-01-36.bilivideo.com",
      "cn-sh-office-bcache-01.bilivideo.com",
    ],
    北京: [
      "cn-bj-cc-03-14.bilivideo.com",
      "cn-bj-cc-03-17.bilivideo.com",
      "cn-bj-fx-01-01.bilivideo.com",
      "cn-bj-fx-01-04.bilivideo.com",
      "cn-bj-fx-01-05.bilivideo.com",
      "cn-bj-se-01-05.bilivideo.com",
    ],
    南京: ["cn-jsnj-fx-02-05.bilivideo.com", "cn-jsnj-fx-02-07.bilivideo.com", "cn-jsnj-fx-02-10.bilivideo.com"],
    呼市: [
      "cn-nmghhht-cm-01-11.bilivideo.com",
      "cn-nmghhht-cu-01-01.bilivideo.com",
      "cn-nmghhht-cu-01-08.bilivideo.com",
      "cn-nmghhht-cu-01-09.bilivideo.com",
      "cn-nmghhht-cu-01-12.bilivideo.com",
      "cn-nmghhht-cu-01-15.bilivideo.com",
    ],
    哈市: [
      "cn-hljheb-cm-01-01.bilivideo.com",
      "cn-hljheb-cm-01-03.bilivideo.com",
      "cn-hljheb-ct-01-02.bilivideo.com",
      "cn-hljheb-ct-01-03.bilivideo.com",
      "cn-hljheb-ct-01-04.bilivideo.com",
      "cn-hljheb-ct-01-07.bilivideo.com",
    ],
    外建: [
      "c0--cn-gotcha01.bilivideo.com",
      "d0--cn-gotcha09.bilivideo.com",
      "d1--cn-gotcha101.bilivideo.com",
      "d1--cn-gotcha102.bilivideo.com",
      "d1--cn-gotcha204-1.bilivideo.com",
      "d1--cn-gotcha204-2.bilivideo.com",
      "d1--cn-gotcha204-3.bilivideo.com",
      "d1--cn-gotcha204-4.bilivideo.com",
      "d1--cn-gotcha207.bilivideo.com",
      "d1--cn-gotcha211.bilivideo.com",
      "d1--cn-gotcha308.bilivideo.com",
      "d1--ov-gotcha01.bilivideo.com",
      "d1--ov-gotcha03.bilivideo.com",
      "d1--ov-gotcha207.bilivideo.com",
      "d1--ov-gotcha208.bilivideo.com",
      "d1--ov-gotcha209.bilivideo.com",
      "d1--ov-gotcha210.bilivideo.com",
      "d1--p1--cn-gotcha04.bilivideo.com",
      "d1--tf-gotcha04.bilivideo.com",
    ],
    天津: [
      "cn-tj-cm-02-01.bilivideo.com",
      "cn-tj-cm-02-02.bilivideo.com",
      "cn-tj-cm-02-04.bilivideo.com",
      "cn-tj-cm-02-05.bilivideo.com",
      "cn-tj-cm-02-06.bilivideo.com",
      "cn-tj-cm-02-07.bilivideo.com",
      "cn-tj-cu-01-02.bilivideo.com",
      "cn-tj-cu-01-03.bilivideo.com",
      "cn-tj-cu-01-04.bilivideo.com",
      "cn-tj-cu-01-06.bilivideo.com",
      "cn-tj-cu-01-07.bilivideo.com",
      "cn-tj-cu-01-09.bilivideo.com",
      "cn-tj-cu-01-10.bilivideo.com",
      "cn-tj-cu-01-11.bilivideo.com",
      "cn-tj-cu-01-12.bilivideo.com",
      "cn-tj-cu-01-13.bilivideo.com",
    ],
    广州: [
      "cn-gdgz-cm-01-02.bilivideo.com",
      "cn-gdgz-cm-01-10.bilivideo.com",
      "cn-gdgz-fx-01-01.bilivideo.com",
      "cn-gdgz-fx-01-02.bilivideo.com",
      "cn-gdgz-fx-01-03.bilivideo.com",
      "cn-gdgz-fx-01-04.bilivideo.com",
      "cn-gdgz-fx-01-06.bilivideo.com",
      "cn-gdgz-fx-01-08.bilivideo.com",
      "cn-gdgz-fx-01-09.bilivideo.com",
      "cn-gdgz-fx-01-10.bilivideo.com",
      "cn-gdgz-gd-01-01.bilivideo.com",
    ],
    成都: [
      "cn-sccd-cm-03-01.bilivideo.com",
      "cn-sccd-cm-03-02.bilivideo.com",
      "cn-sccd-cm-03-05.bilivideo.com",
      "cn-sccd-ct-01-02.bilivideo.com",
      "cn-sccd-ct-01-08.bilivideo.com",
      "cn-sccd-ct-01-10.bilivideo.com",
      "cn-sccd-ct-01-17.bilivideo.com",
      "cn-sccd-ct-01-18.bilivideo.com",
      "cn-sccd-ct-01-19.bilivideo.com",
      "cn-sccd-ct-01-20.bilivideo.com",
      "cn-sccd-ct-01-21.bilivideo.com",
      "cn-sccd-ct-01-22.bilivideo.com",
      "cn-sccd-ct-01-23.bilivideo.com",
      "cn-sccd-ct-01-24.bilivideo.com",
      "cn-sccd-ct-01-25.bilivideo.com",
      "cn-sccd-ct-01-26.bilivideo.com",
      "cn-sccd-ct-01-27.bilivideo.com",
      "cn-sccd-ct-01-29.bilivideo.com",
      "cn-sccd-cu-01-02.bilivideo.com",
      "cn-sccd-cu-01-03.bilivideo.com",
      "cn-sccd-cu-01-04.bilivideo.com",
      "cn-sccd-cu-01-05.bilivideo.com",
      "cn-sccd-cu-01-06.bilivideo.com",
      "cn-sccd-cu-01-07.bilivideo.com",
      "cn-sccd-cu-01-09.bilivideo.com",
      "cn-sccd-fx-01-01.bilivideo.com",
      "cn-sccd-fx-01-06.bilivideo.com",
    ],
    新疆: [
      "cn-xj-cm-02-01.bilivideo.com",
      "cn-xj-cm-02-03.bilivideo.com",
      "cn-xj-cm-02-04.bilivideo.com",
      "cn-xj-cm-02-06.bilivideo.com",
      "cn-xj-ct-01-01.bilivideo.com",
      "cn-xj-ct-01-02.bilivideo.com",
      "cn-xj-ct-01-03.bilivideo.com",
      "cn-xj-ct-01-04.bilivideo.com",
      "cn-xj-ct-01-05.bilivideo.com",
      "cn-xj-ct-02-02.bilivideo.com",
    ],
    杭州: [
      "cn-zjhz-cm-01-01.bilivideo.com",
      "cn-zjhz-cm-01-04.bilivideo.com",
      "cn-zjhz-cm-01-07.bilivideo.com",
      "cn-zjhz-cm-01-12.bilivideo.com",
      "cn-zjhz-cm-01-17.bilivideo.com",
      "cn-zjhz-cu-01-01.bilivideo.com",
      "cn-zjhz-cu-01-02.bilivideo.com",
      "cn-zjhz-cu-01-05.bilivideo.com",
      "cn-zjhz-cu-v-02.bilivideo.com",
    ],
    武汉: [
      "cn-hbwh-cm-01-01.bilivideo.com",
      "cn-hbwh-cm-01-02.bilivideo.com",
      "cn-hbwh-cm-01-04.bilivideo.com",
      "cn-hbwh-cm-01-05.bilivideo.com",
      "cn-hbwh-cm-01-06.bilivideo.com",
      "cn-hbwh-cm-01-08.bilivideo.com",
      "cn-hbwh-cm-01-09.bilivideo.com",
      "cn-hbwh-cm-01-10.bilivideo.com",
      "cn-hbwh-cm-01-12.bilivideo.com",
      "cn-hbwh-cm-01-13.bilivideo.com",
      "cn-hbwh-cm-01-17.bilivideo.com",
      "cn-hbwh-cm-01-19.bilivideo.com",
      "cn-hbwh-fx-01-02.bilivideo.com",
      "cn-hbwh-fx-01-12.bilivideo.com",
      "cn-hbwh-fx-01-13.bilivideo.com",
    ],
    沈阳: [
      "cn-lnsy-cm-01-01.bilivideo.com",
      "cn-lnsy-cm-01-03.bilivideo.com",
      "cn-lnsy-cm-01-04.bilivideo.com",
      "cn-lnsy-cm-01-05.bilivideo.com",
      "cn-lnsy-cm-01-06.bilivideo.com",
      "cn-lnsy-cu-01-03.bilivideo.com",
      "cn-lnsy-cu-01-04.bilivideo.com",
      "cn-lnsy-cu-01-06.bilivideo.com",
    ],
    泉州: [
      "cn-fjqz-cm-01-01.bilivideo.com",
      "cn-fjqz-cm-01-02.bilivideo.com",
      "cn-fjqz-cm-01-03.bilivideo.com",
      "cn-fjqz-cm-01-04.bilivideo.com",
      "cn-fjqz-cm-01-05.bilivideo.com",
      "cn-fjqz-cm-01-06.bilivideo.com",
      "cn-fjqz-cm-01-08.bilivideo.com",
      "cn-fjqz-cmcc-live-01.bilivideo.com",
    ],
    海外: ["upos-hz-mirrorakam.akamaized.net", "upos-sz-mirroraliov.bilivideo.com"],
    深圳: [
      "upos-sz-dynqn.bilivideo.com",
      "upos-sz-estgcos.bilivideo.com",
      "upos-sz-estghw.bilivideo.com",
      "upos-sz-mirror08c.bilivideo.com",
      "upos-sz-mirror08ct.bilivideo.com",
      "upos-sz-mirror08h.bilivideo.com",
      "upos-sz-mirroralib.bilivideo.com",
      "upos-sz-mirroralibstar1.bilivideo.com",
      "upos-sz-mirroraliov.bilivideo.com",
      "upos-sz-mirrorbd.bilivideo.com",
      "upos-sz-mirrorcf1ov.bilivideo.com",
      "upos-sz-mirrorcosdisp.bilivideo.com",
      "upos-sz-mirrorctos.bilivideo.com",
      "upos-sz-mirrorhwdisp.bilivideo.com",
      "upos-sz-originbstar.bilivideo.com",
      "upos-sz-origincosgzhw.bilivideo.com",
      "upos-sz-origincosv.bilivideo.com",
    ],
    西安: [
      "cn-sxxa-cm-01-01.bilivideo.com",
      "cn-sxxa-cm-01-02.bilivideo.com",
      "cn-sxxa-cm-01-04.bilivideo.com",
      "cn-sxxa-cm-01-09.bilivideo.com",
      "cn-sxxa-cm-01-12.bilivideo.com",
      "cn-sxxa-ct-03-02.bilivideo.com",
      "cn-sxxa-ct-03-03.bilivideo.com",
      "cn-sxxa-ct-03-04.bilivideo.com",
      "cn-sxxa-cu-02-01.bilivideo.com",
      "cn-sxxa-cu-02-02.bilivideo.com",
    ],
    郑州: [
      "cn-hnzz-cm-01-01.bilivideo.com",
      "cn-hnzz-cm-01-02.bilivideo.com",
      "cn-hnzz-cm-01-03.bilivideo.com",
      "cn-hnzz-cm-01-04.bilivideo.com",
      "cn-hnzz-cm-01-05.bilivideo.com",
      "cn-hnzz-cm-01-06.bilivideo.com",
      "cn-hnzz-cm-01-09.bilivideo.com",
      "cn-hnzz-cm-01-11.bilivideo.com",
      "cn-hnzz-fx-01-01.bilivideo.com",
      "cn-hnzz-fx-01-08.bilivideo.com",
    ],
    香港: [
      "cn-hk-eq-01-03.bilivideo.com",
      "cn-hk-eq-01-09.bilivideo.com",
      "cn-hk-eq-01-10.bilivideo.com",
      "cn-hk-eq-01-12.bilivideo.com",
      "cn-hk-eq-01-13.bilivideo.com",
      "cn-hk-eq-01-14.bilivideo.com",
      "cn-hk-eq-bcache-13.bilivideo.com",
      "cn-hk-eq-bcache-16.bilivideo.com",
    ],
  };
  const serverAreaList = {
    ...githubCDNServerList,
    海外: [
      "upos-hz-mirrorakam.akamaized.net",
      "upos-sz-mirroraliov.bilivideo.com",
      "upos-sz-mirrorcosov.bilivideo.com",
      "upos-sz-mirrorhwov.bilivideo.com",
      "cn-hk-eq-bcache-01.bilivideo.com",
    ],
    "海外（东南亚）": [
      "upos-sz-mirroralibstar1.bilivideo.com",
      "upos-sz-mirrorcosbstar1.bilivideo.com",
      "upos-sz-mirrorhwbstar1.bilivideo.com",
      "upos-bstar1-mirrorakam.akamaized.net",
    ],
    其它: ["upos-tf-all-hw.bilivideo.com", "upos-tf-all-tx.bilivideo.com"],
  };
  const serverList = [
    {
      name: "不替换",
      host: "",
    },
  ];
  Object.keys(serverAreaList).map((key) => {
    const hostList = serverAreaList[key];
    hostList.forEach((host) => {
      serverList.push({
        name: `${key} - ${host.trim().replace(/\.bilivideo\.com$/gi, "")}`,
        host,
      });
    });
  });
  const BilibiliCDNServerList = serverList;
  const BilibiliApiProxy = {
    getBangumiProxyHost() {
      let serverHost = [
        {
          name: "中国大陆",
          area: "",
          host: Panel.getValue("bili-bangumi-proxyApiServer-default", "").trim() || BilibiliApiConfig.web_host,
        },
      ];
      if (!Panel.getValue("bili-bangumi-unlockAreaLimit")) {
        return serverHost;
      }
      let hk_host = Panel.getValue("bili-bangumi-proxyApiServer-hk");
      if (utils.isNotNull(hk_host)) {
        serverHost.push({
          name: "香港",
          area: "hk",
          host: hk_host,
        });
      }
      let tw_host = Panel.getValue("bili-bangumi-proxyApiServer-tw");
      if (utils.isNotNull(tw_host)) {
        serverHost.push({
          name: "台湾",
          area: "tw",
          host: tw_host,
        });
      }
      let tha_host = Panel.getValue("bili-bangumi-proxyApiServer-tha-or-sea");
      if (utils.isNotNull(tha_host)) {
        serverHost.push({
          name: "泰国/东南亚",
          area: "th",
          host: tha_host,
        });
      }
      return serverHost;
    },
    getSearchProxyHost() {
      let bangumiProxyHost = this.getBangumiProxyHost();
      let serverHost = [];
      let hk_host = Panel.getValue("bili-search-proxyApiServer-hk");
      if (utils.isNotNull(hk_host)) {
        serverHost.push({
          name: "香港",
          area: "hk",
          host: hk_host,
        });
      } else {
        let bangumi_hk_host = bangumiProxyHost.find((item) => item.area === "hk");
        if (bangumi_hk_host) {
          serverHost.push(bangumi_hk_host);
        }
      }
      let tw_host = Panel.getValue("bili-search-proxyApiServer-tw");
      if (utils.isNotNull(tw_host)) {
        serverHost.push({
          name: "台湾",
          area: "tw",
          host: tw_host,
        });
      } else {
        let bangumi_tw_host = bangumiProxyHost.find((item) => item.area === "tw");
        if (bangumi_tw_host) {
          serverHost.push(bangumi_tw_host);
        }
      }
      let tha_host = Panel.getValue("bili-search-proxyApiServer-tha-or-sea");
      if (utils.isNotNull(tha_host)) {
        serverHost.push({
          name: "泰国/东南亚",
          area: "th",
          host: tha_host,
        });
      } else {
        let bangumi_tha_host = bangumiProxyHost.find((item) => item.area === "th");
        if (bangumi_tha_host) {
          serverHost.push;
        }
      }
      return serverHost;
    },
    getBangumiProxySearchParam(option = {}) {
      let proxyData = {
        from_client: "BROWSER",
        drm_tech_type: 2,
        module: "bangumi",
        area: option?.area || "",
        access_key: BilibiliQrCodeLogin.getAccessToken(),
      };
      return proxyData;
    },
  };
  const BilibiliCDNProxy = {
    findBetterCDN(...args) {
      let urlList = [];
      args.forEach((arg) => {
        if (Array.isArray(arg)) {
          urlList = urlList.concat(arg.filter((item) => typeof item === "string"));
        } else {
          if (typeof arg === "string") {
            urlList.push(arg);
          }
        }
      });
      let betterCDN = urlList.find((url) => {
        let urlInst = new URL(url);
        if (urlInst.host.startsWith("upos")) {
          return url;
        }
      });
      if (betterCDN) {
        return betterCDN;
      } else {
        return urlList[0];
      }
    },
    replaceVideoCDN(url, isAudio = false) {
      const userChooseCDN = isAudio
        ? Panel.getValue("bili-video-uposServerSelect-audio")
        : Panel.getValue("bili-video-uposServerSelect");
      let ownCDN = isAudio
        ? Panel.getValue("bili-video-uposServerSelect-audio-own")
        : Panel.getValue("bili-video-uposServerSelect-own");
      ownCDN = (ownCDN ?? "").trim();
      return this.replaceVideoCDNHost(url, userChooseCDN, ownCDN);
    },
    replaceBangumiVideoCDN(url, isAudio = false) {
      const userChooseCDN = isAudio
        ? Panel.getValue("bili-bangumi-uposServerSelect-audio")
        : Panel.getValue("bili-bangumi-uposServerSelect");
      let ownCDN = isAudio
        ? Panel.getValue("bili-bangumi-uposServerSelect-audio-own")
        : Panel.getValue("bili-bangumi-uposServerSelect-own");
      ownCDN = (ownCDN ?? "").trim();
      return this.replaceVideoCDNHost(url, userChooseCDN, ownCDN);
    },
    replaceLiveVideoCDN(url) {
      const userChooseCDN = Panel.getValue("bili-live-uposServerSelect");
      let ownCDN = Panel.getValue("bili-live-uposServerSelect-own");
      ownCDN = (ownCDN ?? "").trim();
      return this.replaceVideoCDNHost(url, userChooseCDN, ownCDN);
    },
    replaceVideoCDNHost(url, userChooseCDNHost, ownCDNHost) {
      try {
        const urlInst = new URL(url);
        const originHost = urlInst.host;
        if (utils.isNotNull(ownCDNHost)) {
          if (originHost !== ownCDNHost) {
            return url;
          }
          urlInst.host = ownCDNHost;
          log$1.info(`原Host为：${originHost}，替换CDN为自定义：${ownCDNHost}`);
          return urlInst.toString();
        }
        const chooseUposCDNInfo = BilibiliCDNServerList.find((item) => {
          return item.host === userChooseCDNHost;
        });
        if (utils.isNull(chooseUposCDNInfo) || utils.isNull(chooseUposCDNInfo.host)) {
          return url;
        }
        const chooseUposCDNHost = chooseUposCDNInfo.host;
        if (chooseUposCDNHost === urlInst.host) {
          return url;
        }
        urlInst.host = chooseUposCDNHost;
        log$1.info(`原Host为：${originHost}，替换CDN为：${JSON.stringify(chooseUposCDNInfo)}`);
        return urlInst.toString();
      } catch (error) {
        log$1.error("视频upos替换失败", error);
        return url;
      }
    },
  };
  const VideoSoundQualityCode = {
    30216: "64K",
    30232: "132K",
    30280: "192K",
    30250: "杜比全景声",
    30251: "Hi-Res无损",
  };
  class ArtPlayerDanmakuOptionHelper {
    $data = {
      KEY: "art-player-danmaku-option",
      localArtDanmakuOption: {},
    };
    constructor(localDataKey) {
      this.$data.KEY = localDataKey;
      const defaultDanmakuOption = this.getDefaultDanmakuOption();
      this.$data.localArtDanmakuOption = utils.assign(defaultDanmakuOption, _GM_getValue(this.$data.KEY, {}));
    }
    getDefaultDanmakuOption() {
      return {
        speed: 5,
        margin: [10, "75%"],
        opacity: 1,
        modes: [0, 1, 2],
        fontSize: 18,
        antiOverlap: false,
        synchronousPlayback: true,
        visible: true,
      };
    }
    getLocalArtDanmakuOption() {
      return this.$data.localArtDanmakuOption;
    }
    onConfigChange(art) {
      art.on("artplayerPluginDanmuku:config", (option) => {
        Object.keys(this.$data.localArtDanmakuOption).forEach((key) => {
          if (Reflect.has(option, key)) {
            let value = Reflect.get(option, key);
            Reflect.set(this.$data.localArtDanmakuOption, key, value);
          }
        });
        _GM_setValue(this.$data.KEY, this.$data.localArtDanmakuOption);
      });
    }
  }
  const TAG$4 = "[artplayer-plugin-m4sAudioSupport]：";
  const ArtPlayer_PLUGIN_M4S_SUPPORT_SETTING_KEY = "setting-bilibili-m4sAudio";
  const M4SAudioUtils = {
    $flag: {
      isIntervaling: false,
    },
    intervalHandler(fn, count = 2, delayTime = 900) {
      if (M4SAudioUtils.$flag.isIntervaling) {
        return;
      }
      M4SAudioUtils.$flag.isIntervaling = true;
      let intervalCount = 0;
      let intervalId = void 0;
      let callback = () => {
        if (intervalCount > count) {
          M4SAudioUtils.$flag.isIntervaling = false;
          clearInterval(intervalId);
          return;
        }
        if (typeof fn === "function") {
          try {
            fn();
          } catch (error) {
            console.error(TAG$4, error);
          }
        }
        intervalCount++;
      };
      callback();
      if (count > 1) {
        intervalId = setInterval(callback, delayTime);
      } else {
        M4SAudioUtils.$flag.isIntervaling = false;
      }
    },
  };
  const M4SAudio = {
    $key: {
      plugin_KEY: "plugin-bilibili-m4sAudio",
    },
    $data: {
      art: null,
      audio: new Audio(),
      latestSyncTime: 0,
      reconnectConfig: {
        maxCount: 5,
        delayTime: 1e3,
      },
      reconnectInfo: {
        url: "",
        count: 0,
      },
      option: null,
    },
    userEvent: {
      onRestart: void 0,
    },
    events: {
      play: () => {
        M4SAudio.handler.play();
        M4SAudio.handler.syncVolume();
        M4SAudio.handler.syncMuted();
        M4SAudioUtils.intervalHandler(() => {
          M4SAudio.handler.syncTime();
        }, 1);
      },
      seek: (currentTime) => {
        M4SAudioUtils.intervalHandler(() => {
          M4SAudio.handler.syncTime();
          M4SAudio.handler.syncPlayState();
        });
      },
      pause: () => {
        M4SAudioUtils.intervalHandler(() => {
          M4SAudio.handler.syncTime();
        }, 1);
        M4SAudio.handler.pause();
      },
      restart: (url) => {
        if (typeof M4SAudio.userEvent.onRestart === "function") {
          let newAudioUrl = M4SAudio.userEvent.onRestart(url);
          M4SAudio.handler.playUrl(newAudioUrl);
        }
        M4SAudioUtils.intervalHandler(() => {
          M4SAudio.handler.syncTime();
        }, 1);
        M4SAudio.handler.syncPlayState();
      },
      muted: (state) => {
        M4SAudio.handler.syncVolume();
        M4SAudio.handler.syncMuted();
      },
      destroy: () => {
        M4SAudio.handler.pause();
      },
      error: (error, reconnectTime) => {
        M4SAudio.handler.pause();
      },
      resize: () => {
        M4SAudioUtils.intervalHandler(() => {
          M4SAudio.handler.syncTime();
        });
      },
      fullscreen: () => {
        M4SAudioUtils.intervalHandler(() => {
          M4SAudio.handler.syncTime();
        });
      },
      "video:ended": () => {
        M4SAudio.handler.pause();
      },
      "video:ratechange": () => {
        M4SAudio.handler.syncPlayBackRate();
      },
      "video:waiting": () => {
        M4SAudio.handler.pause();
      },
      "video:playing": () => {
        M4SAudioUtils.intervalHandler(() => {
          M4SAudio.handler.syncTime();
        }, 1);
        M4SAudio.handler.play();
      },
      "video:pause": () => {
        M4SAudio.handler.pause();
        M4SAudioUtils.intervalHandler(() => {
          M4SAudio.handler.syncTime();
        }, 1);
      },
      "video:volumechange": () => {
        M4SAudio.handler.syncVolume();
        M4SAudio.handler.syncMuted();
        M4SAudio.handler.syncPlayState();
      },
      "video:timeupdate": () => {
        let videoTime = M4SAudio.$data.art.currentTime;
        if (Math.abs(videoTime - M4SAudio.$data.latestSyncTime) >= 3) {
          M4SAudio.$data.latestSyncTime = videoTime;
          M4SAudioUtils.intervalHandler(() => {
            M4SAudio.handler.syncTime(0.777);
          }, 1);
        }
      },
    },
    audioEvents: {
      loadedmetadata: (event) => {
        M4SAudio.$data.art.emit("m4sAudio:loadedmetadata", event);
        console.log(TAG$4 + "Audio预加载完成");
        M4SAudio.$data.reconnectInfo.count = 0;
        M4SAudio.$data.reconnectInfo.url = "";
        M4SAudio.$data.latestSyncTime = 0;
        M4SAudio.handler.syncPlayState();
        M4SAudio.handler.syncPlayBackRate();
        M4SAudio.handler.syncVolume();
        M4SAudio.handler.syncMuted();
        M4SAudioUtils.intervalHandler(() => {
          M4SAudio.handler.syncTime();
        });
      },
      canplaythrough: (event) => {
        M4SAudio.$data.art.emit("m4sAudio:canplaythrough", event);
        console.log(TAG$4 + "浏览器估计该音频可以在不停止内容缓冲的情况下播放媒体直到结束");
        M4SAudioUtils.intervalHandler(() => {
          M4SAudio.handler.syncTime();
        });
      },
      error: (event) => {
        M4SAudio.$data.art.emit("m4sAudio:error", event);
        console.error(TAG$4 + `Audio加载失败`, event);
        if (utils.isNull(M4SAudio.$data.reconnectInfo.url)) {
          M4SAudio.$data.reconnectInfo.url = M4SAudio.$data.audio.src;
        }
        if (M4SAudio.$data.reconnectInfo.count < M4SAudio.$data.reconnectConfig.maxCount) {
          console.log(TAG$4 + `Audio第${M4SAudio.$data.reconnectInfo.count + 1}次尝试重新连接`);
          M4SAudio.$data.art.notice.show = `Audio第${M4SAudio.$data.reconnectInfo.count + 1}次尝试重新连接`;
          M4SAudio.$data.reconnectInfo.count++;
          setTimeout(() => {
            M4SAudio.handler.playUrl("");
            M4SAudio.handler.playUrl(M4SAudio.$data.reconnectInfo.url);
            M4SAudio.$data.audio.load();
          }, M4SAudio.$data.reconnectConfig.delayTime);
        } else {
          console.error(TAG$4 + `Audio已超出重连次数`);
          M4SAudio.$data.art.notice.show = `Audio已超出重连次数，请尝试切换源`;
        }
      },
    },
    handler: {
      playUrl(url) {
        if (typeof url !== "string") {
          return;
        }
        M4SAudio.$data.audio.src = url;
        M4SAudio.unbindAudio();
        if (utils.isNotNull(url)) {
          M4SAudio.bindAudio();
        }
        M4SAudio.$data.art.emit("m4sAudio:restart", url);
        M4SAudio.handler.syncTime();
        M4SAudio.handler.syncPlayState();
      },
      play() {
        if (M4SAudio.$data.audio.paused) {
          M4SAudio.$data.audio.play();
          M4SAudio.$data.art.emit("m4sAudio:play");
        }
      },
      pause() {
        if (!M4SAudio.$data.audio.paused) {
          M4SAudio.$data.audio.pause();
          M4SAudio.$data.art.emit("m4sAudio:pause");
        }
      },
      syncPlayState() {
        if (M4SAudio.$data.art.playing) {
          this.play();
        } else {
          this.pause();
        }
        M4SAudio.$data.art.emit("m4sAudio:syncPlayState");
      },
      syncTime(offset = 0.1) {
        let videoTime = M4SAudio.$data.art.currentTime;
        let audioTime = M4SAudio.$data.audio.currentTime;
        if (Math.abs(videoTime - audioTime) >= Math.abs(offset)) {
          M4SAudio.$data.audio.currentTime = videoTime;
          this.syncVolume();
          this.syncMuted();
          M4SAudio.$data.art.emit("m4sAudio:syncTime");
        }
      },
      syncVolume() {
        M4SAudio.$data.audio.volume = M4SAudio.$data.art.volume;
        M4SAudio.$data.art.emit("m4sAudio:syncVolume");
      },
      syncMuted() {
        let artMuted = M4SAudio.$data.art.muted;
        M4SAudio.$data.audio.muted = artMuted;
        M4SAudio.$data.art.emit("m4sAudio:syncMuted");
      },
      syncPlayBackRate() {
        let artPlayBackRate = M4SAudio.$data.art.playbackRate;
        let audioPlayBackRate = M4SAudio.$data.audio.playbackRate;
        if (artPlayBackRate !== audioPlayBackRate) {
          M4SAudio.$data.audio.playbackRate = artPlayBackRate;
          M4SAudio.$data.art.emit("m4sAudio:syncPlayBackRate");
        }
      },
    },
    update(option) {
      this.unbind();
      this.unbindAudio();
      this.$data.option = null;
      this.$data.option = option.audioList;
      this.$data.latestSyncTime = 0;
      const that = this;
      if (option.audioList?.length) {
        option.audioList.sort((leftItem, rightItem) => {
          return rightItem.bandwidth - leftItem.bandwidth;
        });
        let firstAudioInfo = option.audioList[0];
        const storageKey = `artplayer-m4s-audio-${option.from}`;
        const storageAudioInfo = this.$data.art.storage.get(storageKey);
        let currentSelectAudioInfo = {
          index: 0,
          html: firstAudioInfo.soundQualityCodeText,
          url: firstAudioInfo.url,
        };
        if (storageAudioInfo) {
          const findAudioIndex = option.audioList.findIndex(
            (item) => item.soundQualityCode === storageAudioInfo.soundQualityCode
          );
          if (findAudioIndex !== -1) {
            const findAudio = option.audioList[findAudioIndex];
            currentSelectAudioInfo.index = findAudioIndex;
            currentSelectAudioInfo.url = findAudio.url;
            currentSelectAudioInfo.html = findAudio.soundQualityCodeText;
          } else {
            console.warn(TAG$4 + "没有找到上次选的音频代码，使用当前默认第一个音频");
          }
        }
        let selectorList = option.audioList.map((item, index) => {
          return {
            default: index === currentSelectAudioInfo.index,
            html: item.soundQualityCodeText,
            url: item.url,
            soundQualityCode: item.soundQualityCode,
            soundQualityCodeText: item.soundQualityCodeText,
            codecs: item.codecs,
            mimeType: item.mimeType,
            bandwidth: item.bandwidth,
            size: item.size,
          };
        });
        const settingOption = {
          name: ArtPlayer_PLUGIN_M4S_SUPPORT_SETTING_KEY,
          width: 200,
          html: "音频",
          tooltip: currentSelectAudioInfo.html,
          icon: `
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
					<path d="M123.5 438.5h131.3v310.7H123.5zM769.2 438.5h131.3v310.7H769.2z"></path>
					<path d="M859.8 398.8h-48.3c-7.9 0-15.4 1.6-22.5 3.9v-32.4c0-125.2-101.9-227.1-227.1-227.1h-99.7c-125.2 0-227.1 101.9-227.1 227.1v32.4c-7.1-2.3-14.6-3.9-22.5-3.9h-48.3c-40.9 0-74.2 33.3-74.2 74.2v243c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V370.3c0-96.7 78.7-175.4 175.4-175.4h99.7c96.7 0 175.4 78.7 175.4 175.4V716c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V473c-0.1-40.9-33.3-74.2-74.2-74.2zM235.1 716c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z m647.2 0c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z"></path>
					<path d="M531.3 652.3c-1.7 0-3.3-0.1-5-0.4-10.2-1.7-18.7-8.3-22.7-17.8l-41.1-95.4-37 43.8c-8.1 9.6-19.9 15.1-32.5 15.1h-71.9V546h67.6l56.6-67.1c6.8-8.1 17-12 27.5-10.4 10.4 1.5 19.1 8.2 23.3 17.9l41.6 96.7 21.9-24c8-8.8 19.5-13.9 31.4-13.9h102.4v51.7H595l-41.6 45.7c-5.6 6.2-13.7 9.7-22.1 9.7z"></path>
				</svg>
				`,
          selector: selectorList,
          onSelect: function (selector) {
            let itemInfo = selector;
            console.log(TAG$4 + "切换音频", itemInfo);
            that.handler.playUrl(itemInfo.url);
            that.$data.art.storage.set(storageKey, {
              soundQualityCode: itemInfo.soundQualityCode,
            });
            return selector.html;
          },
        };
        let findSettingValue = M4SAudio.$data.art.setting.find(ArtPlayer_PLUGIN_M4S_SUPPORT_SETTING_KEY);
        if (findSettingValue) {
          M4SAudio.$data.art.setting.update(settingOption);
        } else {
          M4SAudio.$data.art.setting.add(settingOption);
        }
        log$1.info("加载m4s的音频：", currentSelectAudioInfo);
        M4SAudio.handler.playUrl(currentSelectAudioInfo.url);
        this.bind();
        this.bindAudio();
      } else {
        M4SAudio.handler.playUrl("");
        let oldSetting = M4SAudio.$data.art.setting.option.find(
          (item) => item.name === ArtPlayer_PLUGIN_M4S_SUPPORT_SETTING_KEY
        );
        if (oldSetting) {
          M4SAudio.$data.art.setting.remove(ArtPlayer_PLUGIN_M4S_SUPPORT_SETTING_KEY);
        }
      }
    },
    bind() {
      Object.keys(this.events).forEach((eventName) => {
        this.$data.art.on(eventName, this.events[eventName]);
      });
    },
    bindAudio() {
      Object.keys(this.audioEvents).forEach((eventName) => {
        this.$data.audio.addEventListener(eventName, this.audioEvents[eventName], {
          once: true,
        });
      });
    },
    unbind() {
      Object.keys(this.events).forEach((eventName) => {
        this.$data.art.off(eventName, this.events[eventName]);
      });
    },
    unbindAudio() {
      Object.keys(this.audioEvents).forEach((eventName) => {
        this.$data.audio.removeEventListener(eventName, this.audioEvents[eventName]);
      });
    },
  };
  const artplayerPluginM4SAudioSupport = (option) => {
    return (art) => {
      M4SAudio.$data.art = art;
      if (typeof option.onRestart === "function") {
        M4SAudio.userEvent.onRestart = option.onRestart;
      }
      M4SAudio.update({
        from: option.from,
        audioList: option.audioList,
      });
      return {
        name: M4SAudio.$key.plugin_KEY,
        update(...args) {
          M4SAudio.update(...args);
          M4SAudio.handler.syncVolume();
          M4SAudio.handler.syncMuted();
          M4SAudio.handler.syncTime();
        },
        getAudio() {
          return M4SAudio.$data.audio;
        },
        getCurrentPlayConfig() {
          return M4SAudio.$data.option.find((it) => it.url === M4SAudio.$data.audio.src);
        },
      };
    };
  };
  const ArtPlayer_PLUGIN_M4S_AUDIO_SUPPORT_KEY = M4SAudio.$key.plugin_KEY;
  const TopToolBarEvent = {
    events: {
      control: (state) => {
        if (!state) {
          return;
        }
        TopToolBar.updateOnlineTotal({
          showOnlineTotal: TopToolBar.$data.option.showOnlineTotal,
          onlineInfoParams: TopToolBar.$data.option.onlineInfoParams,
        });
      },
    },
    bind() {
      Object.keys(this.events).forEach((eventName) => {
        TopToolBar.art.on(eventName, this.events[eventName]);
      });
    },
    unbind() {
      Object.keys(this.events).forEach((eventName) => {
        TopToolBar.art.off(eventName, this.events[eventName]);
      });
    },
  };
  const TopToolBar = {
    art: null,
    $el: {
      $topWrap: null,
      $topTitle: null,
      $topTitleText: null,
      $topTitleFollow: null,
      $topTitleFollowText: null,
      $topRight: null,
      $topRightFollow: null,
    },
    $data: {
      isInit: false,
      __option: {},
      option: {},
    },
    $key: {
      plugin_KEY: "plugin-bilibili-topToolBar",
    },
    init(option) {
      this.art.layers.add({
        name: "top-wrap",
        html: `
            <div class="art-player-top-wrap">
                <div class="art-player-top-title">
                    <!-- 番剧名，第xx集 -->
                    <div class="art-player-top-title-text"></div></div>
                <div class="art-player-top-follow">
                    <svg class="art-player-top-follow-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13306"><path d="M641.522424 590.30953c-29.470195-20.878516-61.574381-37.341466-95.630011-49.183166C617.699855 497.470075 661.783887 419.876859 661.783887 335.542102c0-132.611274-108.021226-240.529145-240.581334-240.529145-132.62867 0-240.545518 107.916848-240.545518 240.529145 0 45.162596 12.561084 89.143273 36.623106 127.426181 20.159132 32.190143 47.677882 59.195194 80.124875 78.789461-34.56933 11.740392-67.220984 28.493961-97.135294 49.663096-32.652677 23.136953-61.334927 51.117215-85.361133 83.051531-49.937342 66.587558-76.393901 145.737222-76.393901 228.959645 0 15.624862 12.561084 28.237111 28.066219 28.237111 15.607466 0 28.27088-12.612249 28.27088-28.237111 0-86.747713 33.850969-168.516018 95.252411-230.277664 61.266365-61.488423 142.486178-95.40693 228.532927-95.491865 2.806929 0.274246 5.749958 0 8.556886-0.685615l2.326998-0.445138c83.650165 1.678222 162.338319 35.528168 222.268246 95.544053 61.403488 61.675688 95.185896 143.478785 95.185896 230.311433 0 15.45397 12.629645 28.134781 28.16855 28.134781 15.538905 0 28.133757-12.681834 28.133757-28.134781 0-83.307358-26.355251-162.457022-76.393901-228.925876C702.958658 641.376603 674.174078 613.412714 641.522424 590.30953zM421.203576 519.768941c-101.550861 0-184.242188-82.588997-184.242188-184.225815 0-101.550861 82.692351-184.173626 184.242188-184.173626 101.483322 0 184.17465 82.622766 184.17465 184.173626C605.378226 437.178921 522.686898 519.768941 421.203576 519.768941z" p-id="13307"></path><path d="M932.277484 638.022205c-36.074613-52.05968-84.915995-91.249237-141.595902-113.821325 24.986067-17.661242 46.070268-41.141002 61.231573-68.505233 17.627473-31.642674 27.006074-67.820642 27.006074-104.699574 0-114.745371-88.956008-208.082152-198.10594-208.082152-15.607466 0-28.167526 12.595876-28.167526 28.134781s12.56006 28.082592 28.167526 28.082592c78.175477 0 141.700279 68.197218 141.700279 151.86478 0 83.804684-63.524802 151.932318-141.700279 151.932318-15.607466 0-28.167526 12.594853-28.167526 28.134781l0 0.171915c0 15.538905 12.56006 28.184923 28.167526 28.184923 140.569526 0 254.990508 121.899304 254.990508 271.76045 0 15.539928 12.664438 28.219715 28.203342 28.219715 15.504112 0 28.203342-12.68081 28.203342-28.219715C992.209458 761.28967 971.399503 694.427866 932.277484 638.022205z" p-id="13308"></path></svg>
                    <span class="art-player-top-follow-text"></span>
                </div>
                <!-- 右侧的图标 -->
                <div class="art-player-top-right">
                    <div class="art-player-top-right-follow"></div>
                </div>
            </div>
            `,
        mounted: async function ($topWrap) {
          TopToolBar.$el.$topWrap = $topWrap;
          TopToolBar.$el.$topTitle = $topWrap.querySelector(".art-player-top-title");
          TopToolBar.$el.$topTitleText = $topWrap.querySelector(".art-player-top-title-text");
          TopToolBar.$el.$topTitleFollow = $topWrap.querySelector(".art-player-top-follow");
          TopToolBar.$el.$topTitleFollowText = $topWrap.querySelector(".art-player-top-follow-text");
          TopToolBar.$el.$topRight = $topWrap.querySelector(".art-player-top-right");
          TopToolBar.$el.$topRightFollow = $topWrap.querySelector(".art-player-top-right-follow");
          TopToolBar.update(option);
          TopToolBarEvent.bind();
        },
      });
    },
    update(option) {
      if (!this.$data.isInit) {
        this.$data.isInit = true;
        Object.defineProperties(this.$data.option, {
          showWrap: {
            set(value) {
              TopToolBar.$data.__option.showWrap = value;
            },
            get() {
              return TopToolBar.$data.__option.showWrap;
            },
          },
          showTitle: {
            set(value) {
              TopToolBar.$data.__option.showTitle = value;
            },
            get() {
              return TopToolBar.$data.__option.showTitle;
            },
          },
          title: {
            set(value) {
              TopToolBar.$data.__option.title = value;
              if (typeof value === "string") {
                TopToolBar.$el.$topTitleText.innerText = value;
              }
            },
            get() {
              return TopToolBar.$data.__option.title;
            },
          },
          showOnlineTotal: {
            set(value) {
              TopToolBar.$data.__option.showOnlineTotal = value;
            },
            get() {
              return TopToolBar.$data.__option.showOnlineTotal;
            },
          },
          onlineInfoParams: {
            set(value) {
              TopToolBar.$data.__option.onlineInfoParams = value;
              TopToolBar.updateOnlineTotal({
                showOnlineTotal: this.showOnlineTotal,
                onlineInfoParams: value,
              });
            },
            get() {
              return TopToolBar.$data.__option.onlineInfoParams;
            },
          },
          showRight: {
            set(value) {
              TopToolBar.$data.__option.showRight = value;
            },
            get() {
              return TopToolBar.$data.__option.showRight;
            },
          },
          showRightFollow: {
            set(value) {
              TopToolBar.$data.__option.showRightFollow = value;
            },
            get() {
              return TopToolBar.$data.__option.showRightFollow;
            },
          },
        });
      }
      Object.assign(this.$data.option, option);
    },
    async updateOnlineTotal(option) {
      if (!option.showOnlineTotal) {
        return;
      }
      let onlineTotalInfo = await BilibiliVideoApi.onlineTotal({
        aid: option.onlineInfoParams.aid,
        bvid: option.onlineInfoParams.bvid,
        cid: option.onlineInfoParams.cid,
      });
      if (!onlineTotalInfo) {
        return;
      }
      TopToolBar.$el.$topTitleFollowText.innerText = `${onlineTotalInfo["total"] || onlineTotalInfo["count"] || 0}人正在看`;
    },
  };
  const artplayerPluginTopToolBar = (option) => {
    return (art) => {
      TopToolBar.art = art;
      TopToolBar.init(option);
      return {
        name: TopToolBar.$key.plugin_KEY,
        update(option2) {
          TopToolBar.update(option2);
        },
      };
    };
  };
  const ArtPlayer_PLUGIN_TOP_TOOLBAR_KEY = TopToolBar.$key.plugin_KEY;
  const chinese = {
    S: "万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲乾尽脏拼冲里",
    T: "萬與醜專業叢東絲丟兩嚴喪個丬豐臨爲麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價衆優夥會傴傘偉傳傷倀倫傖僞佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農冢馮沖決況凍淨淒涼凌減湊凜幾鳳鳧憑凱擊凼鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勐勩勻匭匱區醫華協單賣盧滷臥衛卻巹廠廳歷厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號嘆嘰籲後嚇呂嗎唚噸聽啓吳嘸囈嘔嚦唄員咼嗆嗚詠咔嚨嚀噝吒咴鹹哌響啞噠嘵嗶噦譁噲嚌噥喲嘜嗊嘮啢嗩唣喚唿嘖嗇囀齧囉嘽嘯噴嘍嚳囁呵噯噓嚶囑嚕噼囂嚯團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壠壚壘墾垧堊墊埡墶壋塏堖塒壎堝埝垵塹墮壪牆壯聲殼壺壼處備復夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗嬀姍姜婁婭嬈嬌孌娛媧嫺嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屓屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崬巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔嵛嶁嵴巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠御憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣愍慍憤憒願懾憖憷懣懶懍戇戔戲戧戰戩戶扎撲扦執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據捻擄摑擲撣摻摜揸攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖札術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒桊椏橈楨檔榿橋樺檜槳樁夢檮棶檢櫺槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞檐檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳匯漢污湯洶沓溝沒灃漚瀝淪滄渢潙滬沵濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗涌濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣溼潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦漤瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煅煳熘愛爺牘犛牽犧犢犟狀獷獁猶狽狍獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽珉珏琺瓏璫琿璡璉瑣瓊瑤璦璇瓔瓚甕甌電畫暢畲疇癤療瘧癘瘍癧瘡瘋皰痾癰痙癢瘂癆瘓癇癡癉瘮瘞瘻癟癱癮癭癩癬癲癯皚皺皸盞鹽監蓋盜盤瞘眥矓着睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜硅碩硤磽磑礄確礆礙磧磣鹼碹磙禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌籤簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糹糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺紲紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽鞝緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒繮繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚肷腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艹藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞莜萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪藁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襉褸襤襁襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖谷豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗贊贇贈贍贏贛赬趙趕趨趲躉躍蹌跖躒踐躂蹺蹕躚躋踊躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郄郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏鉅鑑鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷鉢鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐗銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦杴錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閒閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉鞴韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飈飛饗饜飣飢飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鮎鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鮎鯛鯨鰺鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鰲鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鷽鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鵾鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜志制諮只裏系範鬆沒嚐嚐鬧面準鍾別閒乾盡髒拼衝裡",
  };
  const S = chinese.S;
  const T = chinese.T;
  const tranStr = (str, toT) => {
    let src;
    let des;
    let i;
    let letter;
    let result = "";
    let index;
    if (toT) {
      src = S;
      des = T;
    } else {
      src = T;
      des = S;
    }
    for (i = 0; i < str.length; i++) {
      letter = str.charAt(i);
      const code = str.charCodeAt(i);
      const isChinese = (code > 13312 && code < 40899) || (code > 63744 && code < 64106);
      if (!isChinese) {
        result += letter;
        continue;
      }
      index = src.indexOf(letter);
      if (index !== -1) result += des.charAt(index);
      else result += letter;
    }
    return result;
  };
  const Chinese = {
    s2t: (str, custom) => {
      if (custom) {
        for (let s = 0; s < custom.length; s++) {
          if (str.includes(custom[s].src)) str = str.replaceAll(custom[s].src, custom[s].des);
        }
        return tranStr(str, true);
      } else {
        return tranStr(str, true);
      }
    },
    t2s: (str, custom) => {
      if (custom) {
        for (let s = 0; s < custom.length; s++) {
          if (str.includes(custom[s].src)) str = str.replaceAll(custom[s].src, custom[s].des);
        }
        return tranStr(str, false);
      } else {
        return tranStr(str, false);
      }
    },
  };
  const TAG$3 = "[artplayer-plugin-bilibiliCCSubTitle]：";
  const SubTitleCustomStr = {
    src: "臟妳為傢蔔餵眾係姊託迴蹟儘封啟",
    des: "脏你为家卜喂众系姐托回迹尽对启",
    more_src: ["乾脆", "随著", "相信著", "奇蹟", "拚命", "採取", "製造"],
    more_des: ["干脆", "随着", "相信着", "奇迹", "拼命", "采取", "制造"],
    _custom_str: [],
    generteCustomStr() {
      for (let index = 0; index < this.src.length; index++) {
        this._custom_str.push({
          src: this.src[index],
          des: this.des[index],
        });
      }
      for (let index = 0; index < this.more_src.length; index++) {
        this._custom_str.push({
          src: this.more_src[index],
          des: this.more_des[index],
        });
      }
    },
    getCustomStr() {
      return this._custom_str;
    },
  };
  const SubTitleEvent = {
    reset() {
      this.unbind();
    },
    bind() {
      SubTitle.art.on("video:timeupdate", this.event, this);
    },
    unbind() {
      SubTitle.clearSubTitle();
      SubTitle.art.off("video:timeupdate", this.event);
    },
    event() {
      let currentTime = SubTitle.art.currentTime;
      let currentSubTitleData = SubTitleData.allSubTitleInfo[SubTitleData.currentSelectIndex]?.data;
      if (!currentSubTitleData) {
        return;
      }
      let findValue = currentSubTitleData.find((item) => {
        if (item.to >= currentTime && item.from <= currentTime) {
          return true;
        } else {
          return false;
        }
      });
      let $allSubTitleLine = Array.from(SubTitle.$el.$subtitle.querySelectorAll(".art-subtitle-line"));
      for (let index = 0; index < $allSubTitleLine.length; index++) {
        const $oldSubtitleLine = $allSubTitleLine[index];
        const { from: oldFrom, to: oldTo } = Reflect.get($oldSubtitleLine, "data-subtitle-line-info");
        if (oldTo <= currentTime || oldFrom >= currentTime) {
          $oldSubtitleLine.remove();
        } else {
          if (findValue) {
            if (findValue.from === oldFrom && findValue.to === oldTo) {
              return;
            }
          }
        }
      }
      if (findValue) {
        let $subtitleLine = document.createElement("div");
        $subtitleLine.className = "art-subtitle-line";
        Reflect.set($subtitleLine, "data-subtitle-line-info", findValue);
        $subtitleLine.setAttribute("data-group", "0");
        $subtitleLine.innerHTML = findValue.content;
        SubTitle.$el.$subtitle.appendChild($subtitleLine);
      }
    },
  };
  const SubTitleData = {
    allSubTitleInfo: [],
    currentSelectIndex: -1,
    reset() {
      this.allSubTitleInfo.length = 0;
      this.currentSelectIndex = -1;
    },
  };
  const SubTitle = {
    art: null,
    $key: {
      plugin_KEY: "plugin-bilibili-cc-subtitle",
    },
    $el: {
      $subtitle: null,
    },
    async update(option) {
      const that = this;
      const STORAGE_KEY = `artplayer-bili-cc-subtitle-${option.from}`;
      const SubTitleSettingLayer = {
        config: {
          NAME: "setting-bilibili-cc-subtitle",
        },
        getDefaultSettingOption: () => {
          return {
            name: SubTitleSettingLayer.config.NAME,
            width: 200,
            html: "字幕",
            tooltip: "",
            icon: `
					<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 48 48">
						<path d="M0 0h48v48H0z" fill="none"/>
						<path fill="#ffffff" d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"/>
					</svg>
					`,
            selector: [],
            onSelect: function (selector) {
              let itemInfo = selector;
              that.art.storage.set(STORAGE_KEY, {
                lan: itemInfo.subTitle_lan,
              });
              SubTitleEvent.unbind();
              SubTitleData.currentSelectIndex = itemInfo.subTitle_index;
              if (itemInfo.subTitle_index !== -1) {
                SubTitleEvent.bind();
              }
              return selector.html;
            },
          };
        },
        getSettingOption: () => {
          const settingOption = SubTitleSettingLayer.getDefaultSettingOption();
          const defaultSelector2 = SubTitleSettingLayer.getDefaultSettingSelector();
          settingOption.selector.push(defaultSelector2);
          settingOption.tooltip = defaultSelector2.html;
          return settingOption;
        },
        getDefaultSettingSelector: () => {
          return {
            default: true,
            html: "无",
            subTitle_lan: "",
            subTitle_index: 0,
            subTitle_data: [],
          };
        },
        addSetting(selectorList) {
          let settingOption = this.getSettingOption();
          if (selectorList && selectorList.length) {
            settingOption.selector.push(...selectorList);
            let firstSubTitle = settingOption.selector[0];
            let currentSelectSubTitle = {
              index: 0,
              html: firstSubTitle.html,
            };
            const storageInfo = that.art.storage.get(STORAGE_KEY);
            if (storageInfo) {
              const findInfoIndex = settingOption.selector.findIndex((item) => item.subTitle_lan === storageInfo.lan);
              if (findInfoIndex !== -1) {
                const findInfo = settingOption.selector[findInfoIndex];
                console.log(TAG$3 + "选择字幕：" + findInfo.html);
                currentSelectSubTitle.index = findInfoIndex;
                currentSelectSubTitle.html = findInfo.html;
              } else {
                console.warn(TAG$3 + "没有找到上次选的字幕，使用当前默认无");
              }
            }
            for (let index = 0; index < settingOption.selector.length; index++) {
              settingOption.selector[index].default = index === currentSelectSubTitle.index;
            }
            settingOption.tooltip = currentSelectSubTitle.html;
            SubTitleData.currentSelectIndex = currentSelectSubTitle.index;
          }
          if (this.isAddSetting()) {
            console.log(TAG$3 + "更新字幕菜单", selectorList ?? []);
            that.art.setting.update(settingOption);
          } else {
            that.art.setting.add(settingOption);
          }
        },
        isAddSetting() {
          return that.art.setting.find(this.config.NAME) != null;
        },
      };
      SubTitleData.reset();
      SubTitleEvent.reset();
      const defaultSelector = SubTitleSettingLayer.getDefaultSettingSelector();
      SubTitleData.currentSelectIndex = 0;
      SubTitleData.allSubTitleInfo.push({
        name: defaultSelector.html,
        lan: defaultSelector.subTitle_lan,
        data: defaultSelector.subTitle_data,
      });
      SubTitleSettingLayer.addSetting();
      const settingSelectorList = [];
      this.$el.$subtitle = this.art.template.$subtitle;
      const searchParamsData = {
        cid: option.cid,
      };
      if (option.ep_id) {
        Reflect.set(searchParamsData, "ep_id", option.ep_id);
      }
      if (option.aid) {
        Reflect.set(searchParamsData, "aid", option.aid);
      } else if (option.bvid) {
        Reflect.set(searchParamsData, "bvid", option.bvid);
      } else {
        throw new TypeError("avid or bvid must give one");
      }
      const videoInfoResponse = await httpx.get(
        `https://${BilibiliApiConfig.web_host}/x/player/v2?${utils.toSearchParamsStr(searchParamsData)}`,
        {
          fetch: true,
          allowInterceptConfig: false,
          responseType: "json",
          headers: {
            Host: "www.bilibili.com",
            Referer: "https://www.bilibili.com",
          },
        }
      );
      if (!videoInfoResponse.status) {
        console.error(TAG$3 + "网络异常，获取视频的字幕信息失败", videoInfoResponse);
        return;
      }
      console.log(TAG$3 + "视频的字幕信息", videoInfoResponse);
      const videoInfoResultJSON = utils.toJSON(videoInfoResponse.data.responseText);
      if (!BilibiliApiResponseCheck.isWebApiSuccess(videoInfoResultJSON)) {
        console.error(TAG$3 + "获取视频的字幕信息失败", videoInfoResultJSON);
        return;
      }
      let subTitleUrlInfoList = videoInfoResultJSON["data"]["subtitle"]["subtitles"];
      if (!subTitleUrlInfoList.length) {
        console.warn(TAG$3 + "获取字幕链接列表为空", videoInfoResultJSON);
        return;
      }
      for (let index = 0; index < subTitleUrlInfoList.length; index++) {
        const subTitleUrlInfo = subTitleUrlInfoList[index];
        console.log(TAG$3 + "请求字幕链接信息：" + subTitleUrlInfo.subtitle_url);
        if (utils.isNull(subTitleUrlInfo.subtitle_url)) {
          continue;
        }
        const subTitleInfoResponse = await httpx.get(subTitleUrlInfo.subtitle_url, {
          responseType: "json",
          allowInterceptConfig: false,
          headers: {
            Referer: "https://www.bilibili.com",
            "User-Agent": utils.getRandomPCUA(),
          },
        });
        if (subTitleInfoResponse.status) {
          console.log(TAG$3 + "成功获取字幕信息");
          const subTitleInfoJSON = utils.toJSON(subTitleInfoResponse.data.responseText);
          const subTitleInfo = subTitleInfoJSON["body"];
          let currentIndex = SubTitleData.allSubTitleInfo.length;
          let data2 = {
            name: subTitleUrlInfo.lan_doc,
            lan: subTitleUrlInfo.lan,
            data: subTitleInfo,
          };
          SubTitleData.allSubTitleInfo.push(data2);
          settingSelectorList.push({
            html: subTitleUrlInfo.lan_doc,
            subTitle_index: currentIndex,
            subTitle_lan: subTitleUrlInfo.lan,
            subTitle_data: subTitleInfo,
          });
        } else {
          console.error(TAG$3 + "请求字幕链接信息失败", subTitleInfoResponse);
        }
      }
      if (Panel.getValue("bili-bangumi-generateSimpleChineseSubtitle")) {
        let subTitleHant = SubTitleData.allSubTitleInfo.find((item) => {
          return item.lan === "zh-Hant" || item.name.includes("繁体");
        });
        if (subTitleHant) {
          let simpleChineseSubtitleData = [];
          subTitleHant.data.forEach((item) => {
            const { content, ...otherData } = item;
            const translateContent = Chinese.t2s(content, SubTitleCustomStr.getCustomStr());
            simpleChineseSubtitleData.push({
              content: translateContent,
              ...otherData,
            });
          });
          let subTitleName = "简体（自动生成）";
          let currentIndex = SubTitleData.allSubTitleInfo.length;
          SubTitleData.allSubTitleInfo.push({
            name: subTitleName,
            lan: "zh-CN-auto",
            data: simpleChineseSubtitleData,
          });
          settingSelectorList.push({
            html: subTitleName,
            subTitle_index: currentIndex,
            subTitle_lan: "zh-CN-auto",
            subTitle_data: simpleChineseSubtitleData,
          });
        }
      }
      console.log(TAG$3 + "加载视频CC字幕信息", SubTitleData.allSubTitleInfo);
      if (
        SubTitleData.allSubTitleInfo[SubTitleData.currentSelectIndex].data == null ||
        SubTitleData.allSubTitleInfo[SubTitleData.currentSelectIndex].data.length == 0
      );
      else {
        SubTitleEvent.bind();
      }
      SubTitleSettingLayer.addSetting(settingSelectorList);
    },
    clearSubTitle() {
      if (this.$el.$subtitle) {
        this.$el.$subtitle.innerHTML = "";
      }
    },
    updateArtPlayer(art) {
      this.art = art;
    },
  };
  function artplayerPluginBilibiliCCSubTitle(option) {
    return (art) => {
      SubTitleCustomStr.generteCustomStr();
      SubTitle.updateArtPlayer(art);
      SubTitle.update(option);
      return {
        name: SubTitle.$key.plugin_KEY,
        update(option2) {
          SubTitle.update(option2);
        },
      };
    };
  }
  const ArtPlayer_PLUGIN_BILIBILI_CC_SUBTITLE_KEY = SubTitle.$key.plugin_KEY;
  const TAG$2 = "[artplayer-plugin-epChoose]：";
  const GenerateArtPlayerEpTitle = (title, title_id) => {
    if (title_id == null || title_id == "") {
      return title;
    }
    if (isNaN(Number(title_id))) {
      return title_id.toString();
    }
    return `第${title_id}话 ${title}`;
  };
  const GenerateArtPlayerEpSetting = (option) => {
    let tooltip = "";
    let selector = option.EP_LIST.map((item, itemIndex) => {
      if (item.isDefault) {
        tooltip = item.title;
      }
      return {
        html: item.title,
        default: item.isDefault,
        index: itemIndex,
        callback: item.onSelect,
      };
    });
    return {
      name: EpChoose.$key.SETTING_KEY,
      icon: `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2295" width="24" height="24"><path d="M983.745542 312.673133a510.516437 510.516437 0 0 0-109.673817-162.745211A510.516437 510.516437 0 0 0 511.999823 0.000353 510.516437 510.516437 0 0 0 149.927922 149.927922 510.516437 510.516437 0 0 0 0.000353 511.999823a510.516437 510.516437 0 0 0 149.927569 362.071902A510.516437 510.516437 0 0 0 511.999823 1023.999294a510.516437 510.516437 0 0 0 362.071902-149.927569A510.516437 510.516437 0 0 0 1023.999294 511.999823c0-69.137584-13.488538-136.121238-40.253752-199.32669z m-62.852348 372.029408a443.779955 443.779955 0 0 1-95.05535 140.994061 441.908508 441.908508 0 0 1-313.73209 129.941935c-59.886283 0-118.042361-11.758333-172.667407-34.851274a443.779955 443.779955 0 0 1-141.029372-95.090661 441.908508 441.908508 0 0 1-129.941934-313.696779c0-59.886283 11.758333-118.042361 34.851274-172.667407a443.779955 443.779955 0 0 1 95.09066-141.029371 441.908508 441.908508 0 0 1 313.696779-129.941935c59.886283 0 118.077671 11.758333 172.667408 34.851274a443.779955 443.779955 0 0 1 141.064682 95.090661 441.908508 441.908508 0 0 1 129.941934 313.696778c0 59.886283-11.793643 118.042361-34.851274 172.667408zM388.413744 706.206519l317.792775-211.86185-317.792775-211.861849v423.723699z" p-id="2296"></path></svg>`,
      html: "选集",
      selector,
      tooltip,
      onSelect: function (item) {
        if (typeof item.callback === "function") {
          item.callback(item, item.index);
        }
        return item.html;
      },
      mounted(panel, item) {
        panel.setAttribute("data-plugin", EpChoose.$key.SETTING_KEY);
      },
      playNext() {
        let findIndex = this.selector.findIndex((item) => item.default);
        if (findIndex !== -1 && findIndex + 1 < this.selector.length - 1) {
          findIndex += 1;
          this.onSelect(this.selector[findIndex]);
        } else {
          console.warn(TAG$2 + "当前播放列表已无下一集");
        }
      },
    };
  };
  const EpChooseEvent = {
    $event: {
      "video:ended": () => {
        console.log(TAG$2 + "自动连播启用，播放下一集");
        let settingIns = EpChoose.$data.art.setting.find(EpChoose.$key.SETTING_KEY);
        settingIns.playNext();
      },
    },
    bind(art) {
      Object.keys(this.$event).forEach((eventName) => {
        art.on(eventName, this.$event[eventName]);
      });
    },
    unbind(art) {
      Object.keys(this.$event).forEach((eventName) => {
        art.off(eventName, this.$event[eventName]);
      });
    },
  };
  const EpChoose = {
    $flag: {
      isInitCSS: false,
    },
    $key: {
      SETTING_KEY: "setting-ep-choose",
      PLUGIN_KEY: "plugin-ep-choose",
    },
    $data: {
      art: null,
    },
    resetEnv() {
      Object.keys(this.$data).forEach((key) => {
        Reflect.set(this.$data, key, null);
      });
    },
    init(art, option) {
      this.resetEnv();
      this.$data.art = art;
      EpChooseEvent.unbind(art);
      if (option.automaticBroadcast) {
        EpChooseEvent.bind(art);
      }
      if (!this.$flag.isInitCSS) {
        this.$flag.isInitCSS = true;
        addStyle(
          `
			.art-setting-panel[data-plugin="${EpChoose.$key.SETTING_KEY}"] .art-setting-item .art-setting-item-left-text{
				max-width: 210px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			`
        );
      }
      this.update(option);
    },
    update(option) {
      EpChooseEvent.unbind(this.$data.art);
      if (option.EP_LIST == null) {
        return;
      }
      if (option.EP_LIST.length === 0) {
        return;
      }
      let setting = GenerateArtPlayerEpSetting(option);
      if (this.$data.art.setting.find(this.$key.SETTING_KEY)) {
        this.$data.art.setting.update(setting);
      } else {
        this.$data.art.setting.add(setting);
      }
      if (option.automaticBroadcast) {
        EpChooseEvent.bind(this.$data.art);
      }
    },
  };
  const artplayerPluginEpChoose = (option) => {
    return (art) => {
      EpChoose.init(art, option);
      return {
        name: EpChoose.$key.PLUGIN_KEY,
        update(option2) {
          EpChoose.update(option2);
        },
      };
    };
  };
  const ArtPlayer_PLUGIN_EP_CHOOSE_KEY = EpChoose.$key.PLUGIN_KEY;
  const ArtPlayerBiliBiliIcon = {
    loading: `<img src="data:image/gif;base64,R0lGODlhWgBaALMOAHR0dAICAnd3dwEBAXh4eAMDAwkJCQ0NDQsLCxwcHA4ODggICHl5eQAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYWE1ODg5ZS1jN2RmLTRmZmUtYjkzOS0wMmVkMTZhNmNjZDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0I2ODI2NjA1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0I2ODI2NUY1NzhGMTFFNkEyMEVDNzhEOUY1RkQxRjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjljYjgzNjY2LWYxYWUtNGMyZi1hMGEwLThhODJmYjIxM2U0MyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmU1NDE3YzFmLTllODAtMTE3OS04NjdiLWUyN2Y3M2VkMTZkOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsz3Ta3HW+3bjuV7wbg/H7BYXEYu7YGCaVjuDr6Hwqjy2qEzphNlTaIZfi/ZqY2zHZW0KL1RVGeRS2wiXD+ad+x8jZHXx9GX9MO2GDG3mGGG52iX5ojUFVRWWXmJmam1IknJ+goXoioqWmnHSnqquUpDxVsLGys7S1tk6Uj4dIt72+v7K5IcKQF8R7r1asPC7HHs7L0Z3Ogclr0tES1BzH2NiLSMPWUcnAsd7gTboaxLnm77e527vq2uMm8FXy98/j8z77woFoxw9Fp2pI/mUgKBDMQXrp3iATqNBeD3rMIBaqN9BfwWsZ/7kBmpTwo0aLHIF4kchupIWAKftRLHgpDYeND7skq2jMY0NyjlgqwnlRZ8mfCDlCqyO0A1E7MJueBBrTnc0RG1lGXbfQZ0w8sFLEAhmRK0khKJtWConv6lZXaKlKNWpmyk6TJxVqoWvw7iu49fQyLOrJWitx4QTzQhnX4sTAeLsmjuyO8cWcLScjFan5K9kkl9KapSuG50vDlFtlkjtaNGvEkDeDXIlprsrOts+WjkzVUZmrkmN7zsu7dzkiK3OTRl78NO7WQenK7vkc9u7pt9UJrZz0+vDMwpVPGGuBPOfwrbO/8SbNu3j1oNkvc5/+s3T5oraYhn8f/6e1zfFHQZY+BPbiWkdIFajgLMs9ZgoX+1nmn0upYOfchPK95iCG+L034HHpAAAAh6V4OOAsQYh4hAAC3EJAMO3VV55WmLBYiwAv+pKiirzoE+CGDbAoZFu4eCGiiOdYCBgPQrK4wiVHXlDJk0w4mUUZAGgAXApNDtmMkVn+0KWVLhxppojFsHBmlGm26eabcMYp55x01mnnnXjSEAEAIfkECQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCxbTT3fX23jfKbXDEZvSPk1gkSiMShM8pZMZ1HngjalEiPLip1qUdZr12Hcmbhj73eETlMY5QbpxxS7JfCyqH2v5NccfH1+cR6CgxVxchqHiIR6GGGOG38/kXRIkxyVR2SKn6CFbKGkpaangDmoq6ytdh2tsbKhmaqzpHW5uru8lbWGOr3Cw8TFvJghmMbLUVvBrxvImmq/sM+Jt9mWE9K2R2La4VRZ1yDdnuLaTefWQFfp4kjsgeXo38z4xMjz0fXK+QB37asHzB03gkqu8WPkD+GQgQbNNYxIY1zBRf0MLvQx8duFVBn/zXDU6DBkrXllqo3cdokkxYsnEaZUudJiRZceJVI8N5NmTZsHcfpcGXOnpBCcRJITCo2h0afuhlISFdTjxpY57RW91/QDJ3AKSzrNyi5XCl/vwr5sB6RqtToZPZhdalXs2LRrvXwEqgEuXXl2ia4Ty7Jq1qX0mO4pt7DbTDWJ6+aNnKkx48duu2oVchVrZcKXqW6+yzmw58GTR4eie/im5NZsP6emhUsqRNiUUeO2F4cJqGanRycLvfs3kqSmb0sNLnxvzyvIlyvXzPyqMD9oqU9fHLEzLwy7TJZOTfovdRF+y3d2ThZeNsDkBRt272r87vLz6Z+Kst71L/2x8GcapHsqBWTgMOZxB9uBDIbXnDcAAricaxFKeB42FUY4IYbpHJCAAgYYsEABoQRgYgA6nIiicaNw9VUQ/zCoIhMz6tKfBcco84MAAjTIQI0/npjjfZtspQiPKdTogJI4AgcGKDwKoIKQKprok5MpCFBGlEgmWSWTPPBoBJctBCkklmFyKaULZgYwVxJqwnDmhtN4hWadJtyJ55589unnn4AGKuigG0QAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGb0j5NYJEojEoTPKWTOfzF5VOfi1o0yoxNlTaLdf7PXmr3CvZpE1bGORyKOx+x+Udev0CX3vaexhBcRyAgRmDXhp6U3ghfVQ+VEhDd5aXmJmajjmbnp+gOiShpKWWlCCmqqtHYn86TLGys7S1tre3kyKTuL2+v7mwrnnChxi6c8VqrFnKqc4OrNJ4yM9AYtPSy627xaLZzNHQr9fiNsC22ULVneWR6PC/k+zk3PQk8bHz48Tu/ErC7hXy9q9SwIKLCJZbgaVeooXW7CHsImpgww37ILaTqLGIIotG/zAe7NiPI7cKd1BJ8nMh48mISNidUomIUMuRLzfGdJYyloeHsG5eEyjSH8Qzsx5Byklx6MRjCl/y8olPFg2cNEvu7Jg0BVWPTkmC3MrUZ8VlYLAOG7sO4cWmnEa4zMrWHFOwJ5egmLu2qEm6dvMS1bkUcEKjd+FWOYNyh9bCfQ//7csr8Fm7hAevnAx14Z1thvECDd2Zs1DBmkgrhtwNMWBFS2ZGFs06mevIsnvOBl0bZluxcJEKWfqUt+bSZEP3nDBa9erjp5PvBtrKFS2HvQnbVW2LDxq20K+6BqeqeWuT5Mtnxx48/SdZ4RtDJO4+tb7i4nPm2/+L9/ms/AVYi3Z/tiVmTHx41Vefc/IpuOBupzmYHoMJZoPAAQ5SWEEtwkCGDgHBXOMhEwhuSEuHU+FCAIi48JIiJN/ttVxaQBjCXIxmKPKVjHHgiGOOYUAYERQGlbhRZUNc98KLSXT1woDGtLBjlFRWaeWVWGap5ZZcdumlChEAACH5BAkKAA4ALAAAAABaAFoAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsW009319t43ym1wxGbzj5AYXEoTGITOKWTOfzx2xKHb8W1Ho1NlTba8X7PW25YnJ55I2KLQw1mxp8Y+LyHL1uv6vXGmd9GkF5gXuDHIVkPoiJHYtGF4JEf5aXmJmZJZqdnp+GIaCjpJloHKWpqlCiOlWvsLGys7S1THStR7a7vL2xuCDAj5Oup4dHwxjCHsvJRcW5DXxYqzouzajQ1NXc1hLYG8Dd4zvgx9JI5ONC5o3I2+i+sOSR6NF8e/L6tXTtytr+POyr0k+bnncBbxR8d9AevGkpsjArlnAMQIPEdmTzthFdRQri/zA+k9SBUTiKIjviE/kHojuS/458HOlwCc02Ll9KzOgx5UmGVL6pefUBjxee9XL+dPiQ3Rk3RY3upJnU2MtpuPJBFSEViEWZPs9hNQhLhVSIC5lOBErWDccSZal2tRqTqbmpQgFB2prV1b0mdzHCBKlRrFOGJQ0GRjw4r966dWY2lQvZCivKhic3HIuYMGObjtUiPSx6KWevoz3vdHSVtNLWqo0JGwovnmnXdGkI9smo09bKmteqBafqd2rJyxYP7Vost+PIYYFjvsBcF5kqiZEh3925wq3mSGQJh949881UEmJtxh2Mu7pU5EubD/1+VPzX0unX10R0e2fw+nDTX5l0qXk30IG0xOacgtThtxeCaBGoW3nO+LffhRTWheF+Dk64IYcLqjZOACQGUEABJA6g4orVdNjgPDoAIKNWENYDwA8y/pIhITA2cCNONRIUI44A2MLCj17IyIIRSCp5h4sgIBmjjAAsqYaTPTBJZZUrXInlEFt+CQYZVDoRZgwzTunMCmGWuWYLW74p55x01mnnnXjmqecNEQAAIfkEBQoADgAsAAAAAFoAWgAABP/QyUmrvTjrzbv/YCiOZGmeaKqubOu+cCzP9Nrcdb7duO5XvBuD8fsFhcSi7jhMKh3BF7P5lBxb02HVelUdG9Qtt3vKiinfRjnYdJ6h31LW/XYw0qJvuE65x0FmfBdpah1zghh+ZBmHiIl4jIGOGYo8kTx7NYSbnJ2en5t5oKOkpaEhpqmqo1ofq6+wenQ7mG22t7i5uru8TWyzGr+9w8TFub+AtZODyq7NY7AwyM5IaLHXURPTHttw2NjW1dRgSd/m5NCt3M3Cxm3nrd0c0+3u9rr0z4bs+iP37/zErRMnz0hAdOPi9TNIcGGwg+qY9dg38WFDgRQRFtSWLWNFiRr/HV4KiTGcSCCEMOQrSesiQpO1gIH8Y1IhS4skX0KLKfNCpUXeckacB9FNmjYhhhytWe4kSJsvZWUC4evZSp1EXaqb09MDLo5au1pgks5JOxZIy6pNJmTtBFuXUCCbgkqZPKSWUH4UVU1Y3b4nO4IFY2JuzL/oNroNOpRtYqcq7QbWRzZcRi2KcWJ2ygZmIWiXiWQeufnm4M8pFz8VDXk1466lVI+VbFoz69o7SzXW+xh3ZMC+g07ZNHU2cKyhX3f4aYtQcd6lkWftLd1nrtzVmSpHHH03pbRv/bak7t228HOvuot1jR6ber7U2696z72p/Pm3s5N28q9/se2OReTffYC7AJjQemeMZpx8MSjI230Q6rdghPeV9xuF8lmYyC48kcMLhhJuiIsw9RDo3IitOQbJBsawwQMAANxymA2cwEjjFzZapyFiL8Lo4404iojFET4WCSSRPgRRJABSEJKjDksyGUOUP/pg5AxUPrnMllx26eWXYIYp5phkjhkBADs=">`,
    state: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 80 80" width="100" height="100"><defs><path id="pid-64-svgo-a" d="M0 0h80v80H0z"/><path d="M52.546 8.014a3.998 3.998 0 014.222 3.077c.104.446.093.808.039 1.138a2.74 2.74 0 01-.312.881c-.073.132-.16.254-.246.376l-.257.366-.521.73c-.7.969-1.415 1.926-2.154 2.866l-.015.02a240.945 240.945 0 015.986.341l1.643.123.822.066.41.034.206.018.103.008.115.012c1.266.116 2.516.45 3.677.975a11.663 11.663 0 013.166 2.114c.931.87 1.719 1.895 2.321 3.022a11.595 11.595 0 011.224 3.613c.03.157.046.316.068.474l.015.119.013.112.022.206.085.822.159 1.646c.1 1.098.19 2.198.27 3.298.315 4.4.463 8.829.36 13.255a166.489 166.489 0 01-.843 13.213c-.012.127-.034.297-.053.454a7.589 7.589 0 01-.072.475l-.04.237-.05.236a11.762 11.762 0 01-.74 2.287 11.755 11.755 0 01-5.118 5.57 11.705 11.705 0 01-3.623 1.263c-.158.024-.316.052-.475.072l-.477.053-.821.071-1.644.134c-1.096.086-2.192.16-3.288.23a260.08 260.08 0 01-6.578.325c-8.772.324-17.546.22-26.313-.302a242.458 242.458 0 01-3.287-.22l-1.643-.129-.822-.069-.41-.035-.206-.018c-.068-.006-.133-.01-.218-.02a11.566 11.566 0 01-3.7-.992 11.732 11.732 0 01-5.497-5.178 11.73 11.73 0 01-1.215-3.627c-.024-.158-.051-.316-.067-.475l-.026-.238-.013-.119-.01-.103-.07-.823-.132-1.648a190.637 190.637 0 01-.22-3.298c-.256-4.399-.358-8.817-.258-13.233.099-4.412.372-8.811.788-13.197a11.65 11.65 0 013.039-6.835 11.585 11.585 0 016.572-3.563c.157-.023.312-.051.47-.07l.47-.05.82-.07 1.643-.13a228.493 228.493 0 016.647-.405l-.041-.05a88.145 88.145 0 01-2.154-2.867l-.52-.73-.258-.366c-.086-.122-.173-.244-.246-.376a2.74 2.74 0 01-.312-.881 2.808 2.808 0 01.04-1.138 3.998 3.998 0 014.22-3.077 2.8 2.8 0 011.093.313c.294.155.538.347.742.568.102.11.19.23.28.35l.27.359.532.72a88.059 88.059 0 012.06 2.936 73.036 73.036 0 011.929 3.03c.187.313.373.628.556.945 2.724-.047 5.447-.056 8.17-.038.748.006 1.496.015 2.244.026.18-.313.364-.624.549-.934a73.281 73.281 0 011.93-3.03 88.737 88.737 0 012.059-2.935l.533-.72.268-.359c.09-.12.179-.24.281-.35a2.8 2.8 0 011.834-.881zM30.13 34.631a4 4 0 00-.418 1.42 91.157 91.157 0 00-.446 9.128c0 2.828.121 5.656.364 8.483l.11 1.212a4 4 0 005.858 3.143c2.82-1.498 5.55-3.033 8.193-4.606a177.41 177.41 0 005.896-3.666l1.434-.942a4 4 0 00.047-6.632 137.703 137.703 0 00-7.377-4.708 146.88 146.88 0 00-6.879-3.849l-1.4-.725a4 4 0 00-5.382 1.742z" id="pid-64-svgo-d"/><filter x="-15.4%" y="-16.3%" width="130.9%" height="132.5%" filterUnits="objectBoundingBox" id="pid-64-svgo-c"><feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" in="shadowBlurOuter1" result="shadowMatrixOuter1"/><feOffset in="SourceAlpha" result="shadowOffsetOuter2"/><feGaussianBlur stdDeviation="3.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" in="shadowBlurOuter2" result="shadowMatrixOuter2"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="shadowMatrixOuter2"/></feMerge></filter></defs><g fill="none" fill-rule="evenodd" opacity=".8"><mask id="pid-64-svgo-b" fill="#fff"><use xlink:href="#pid-64-svgo-a"/></mask><g mask="url(#pid-64-svgo-b)"><use fill="#000" filter="url(#pid-64-svgo-c)" xlink:href="#pid-64-svgo-d"/><use fill="#FFF" xlink:href="#pid-64-svgo-d"/></g></g></svg>`,
    indicator: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="16" height="16">
        <path d="M16.118 3.667h.382a3.667 3.667 0 013.667 3.667v7.333a3.667 3.667 0 01-3.667 3.667h-11a3.667 3.667 0 01-3.667-3.667V7.333A3.667 3.667 0 015.5 3.666h.382L4.95 2.053a1.1 1.1 0 011.906-1.1l1.567 2.714h5.156L15.146.953a1.101 1.101 0 011.906 1.1l-.934 1.614z" fill="#333"></path>
        <path d="M5.561 5.194h10.878a2.2 2.2 0 012.2 2.2v7.211a2.2 2.2 0 01-2.2 2.2H5.561a2.2 2.2 0 01-2.2-2.2V7.394a2.2 2.2 0 012.2-2.2z" fill="#fff"></path>
        <path d="M6.967 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1zM15.033 8.556a1.1 1.1 0 011.1 1.1v2.689a1.1 1.1 0 11-2.2 0V9.656a1.1 1.1 0 011.1-1.1z" fill="#333"></path>
    </svg>
        `,
    fullscreenWebOn: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_172"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_172)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -26,-20 -26,-20 C-27.049999237060547,-20 -27.920000076293945,-19.18000030517578 -27.989999771118164,-18.149999618530273 C-27.989999771118164,-18.149999618530273 -28,-18 -28,-18 C-28,-18 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -22,-4 -22,-4 C-20.950000762939453,-4 -20.079999923706055,-4.820000171661377 -20.010000228881836,-5.849999904632568 C-20.010000228881836,-5.849999904632568 -20,-6 -20,-6 C-20,-6 -20,-12 -20,-12 C-20,-12 -14,-12 -14,-12 C-12.949999809265137,-12 -12.079999923706055,-12.819999694824219 -12.010000228881836,-13.850000381469727 C-12.010000228881836,-13.850000381469727 -12,-14 -12,-14 C-12,-14 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M26,-20 C26,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-14 12,-14 C12,-12.949999809265137 12.819999694824219,-12.079999923706055 13.850000381469727,-12.010000228881836 C13.850000381469727,-12.010000228881836 14,-12 14,-12 C14,-12 20,-12 20,-12 C20,-12 20,-6 20,-6 C20,-4.949999809265137 20.81999969482422,-4.079999923706055 21.850000381469727,-4.010000228881836 C21.850000381469727,-4.010000228881836 22,-4 22,-4 C22,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-18 28,-18 C28,-19.049999237060547 27.18000030517578,-19.920000076293945 26.149999618530273,-19.989999771118164 C26.149999618530273,-19.989999771118164 26,-20 26,-20z M-22,4 C-22,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,18 -28,18 C-28,19.049999237060547 -27.18000030517578,19.920000076293945 -26.149999618530273,19.989999771118164 C-26.149999618530273,19.989999771118164 -26,20 -26,20 C-26,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,14 -12,14 C-12,12.949999809265137 -12.819999694824219,12.079999923706055 -13.850000381469727,12.010000228881836 C-13.850000381469727,12.010000228881836 -14,12 -14,12 C-14,12 -20,12 -20,12 C-20,12 -20,6 -20,6 C-20,4.949999809265137 -20.81999969482422,4.079999923706055 -21.850000381469727,4.010000228881836 C-21.850000381469727,4.010000228881836 -22,4 -22,4z M26,4 C26,4 22,4 22,4 C20.950000762939453,4 20.079999923706055,4.820000171661377 20.010000228881836,5.849999904632568 C20.010000228881836,5.849999904632568 20,6 20,6 C20,6 20,12 20,12 C20,12 14,12 14,12 C12.949999809265137,12 12.079999923706055,12.819999694824219 12.010000228881836,13.850000381469727 C12.010000228881836,13.850000381469727 12,14 12,14 C12,14 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 26,20 26,20 C27.049999237060547,20 27.920000076293945,19.18000030517578 27.989999771118164,18.149999618530273 C27.989999771118164,18.149999618530273 28,18 28,18 C28,18 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>`,
    fullscreenWebOff: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_177"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_177)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -18,-20 -18,-20 C-19.049999237060547,-20 -19.920000076293945,-19.18000030517578 -19.989999771118164,-18.149999618530273 C-19.989999771118164,-18.149999618530273 -20,-18 -20,-18 C-20,-18 -20,-12 -20,-12 C-20,-12 -26,-12 -26,-12 C-27.049999237060547,-12 -27.920000076293945,-11.180000305175781 -27.989999771118164,-10.149999618530273 C-27.989999771118164,-10.149999618530273 -28,-10 -28,-10 C-28,-10 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -14,-4 -14,-4 C-12.949999809265137,-4 -12.079999923706055,-4.820000171661377 -12.010000228881836,-5.849999904632568 C-12.010000228881836,-5.849999904632568 -12,-6 -12,-6 C-12,-6 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M18,-20 C18,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-6 12,-6 C12,-4.949999809265137 12.819999694824219,-4.079999923706055 13.850000381469727,-4.010000228881836 C13.850000381469727,-4.010000228881836 14,-4 14,-4 C14,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-10 28,-10 C28,-11.050000190734863 27.18000030517578,-11.920000076293945 26.149999618530273,-11.989999771118164 C26.149999618530273,-11.989999771118164 26,-12 26,-12 C26,-12 20,-12 20,-12 C20,-12 20,-18 20,-18 C20,-19.049999237060547 19.18000030517578,-19.920000076293945 18.149999618530273,-19.989999771118164 C18.149999618530273,-19.989999771118164 18,-20 18,-20z M-14,4 C-14,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,10 -28,10 C-28,11.050000190734863 -27.18000030517578,11.920000076293945 -26.149999618530273,11.989999771118164 C-26.149999618530273,11.989999771118164 -26,12 -26,12 C-26,12 -20,12 -20,12 C-20,12 -20,18 -20,18 C-20,19.049999237060547 -19.18000030517578,19.920000076293945 -18.149999618530273,19.989999771118164 C-18.149999618530273,19.989999771118164 -18,20 -18,20 C-18,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,6 -12,6 C-12,4.949999809265137 -12.819999694824219,4.079999923706055 -13.850000381469727,4.010000228881836 C-13.850000381469727,4.010000228881836 -14,4 -14,4z M26,4 C26,4 14,4 14,4 C12.949999809265137,4 12.079999923706055,4.820000171661377 12.010000228881836,5.849999904632568 C12.010000228881836,5.849999904632568 12,6 12,6 C12,6 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 18,20 18,20 C19.049999237060547,20 19.920000076293945,19.18000030517578 19.989999771118164,18.149999618530273 C19.989999771118164,18.149999618530273 20,18 20,18 C20,18 20,12 20,12 C20,12 26,12 26,12 C27.049999237060547,12 27.920000076293945,11.180000305175781 27.989999771118164,10.149999618530273 C27.989999771118164,10.149999618530273 28,10 28,10 C28,10 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>`,
  };
  const ArtPlayerCommonOption = () => {
    return {
      container: "",
      url: "",

      volume: 1,
      isLive: false,
      muted: false,
      autoplay: false,
      pip: false,
      autoMini: false,
      screenshot: false,
      setting: true,
      loop: false,
      flip: true,
      playbackRate: true,
      autoSize: false,
      aspectRatio: false,
      fullscreen: true,
      fullscreenWeb: true,
      subtitleOffset: true,
      miniProgressBar: true,
      mutex: false,
      backdrop: true,
      playsInline: false,
      autoPlayback: true,
      airplay: true,
      lock: true,
      fastForward: true,
      theme: BilibiliData.theme,
      lang: navigator.language.toLowerCase(),
      moreVideoAttr: {
        crossOrigin: "anonymous",
      },
      icons: ArtPlayerBiliBiliIcon,
    };
  };
  const TAG$1 = "[artplayer-plugin-quality]：";
  const ArtPlayer_PLUGIN_QUALITY_KEY = "artplayer-plugin-quality";
  const VideoCodingCodeMap = {
    AVC: 7,
    HEVC: 12,
    AV1: 13,
  };
  class VideoEncoding {
    art;
    from;
    $key = {
      SETTING_KEY: "video-playback-codeid",
    };
    constructor(art, from) {
      this.art = art;
      this.from = from;
      this.updateSetting();
    }
    updateSetting(codeIdConfig) {
      let setting = this.getSetting();
      if (Array.isArray(codeIdConfig?.acceptCodeIdList)) {
        for (let index = 0; index < setting.selector.length; index++) {
          const selectorItem = setting.selector[index];
          let findIndex = codeIdConfig.acceptCodeIdList.findIndex(
            (item) => item.toString() === selectorItem.value.toString()
          );
          if (findIndex === -1) {
            setting.selector.splice(index, 1);
            index--;
          }
        }
        let hasDefault = setting.selector.find((it) => it.default);
        if (!hasDefault && setting.selector.length) {
          if (typeof codeIdConfig?.defaultCodeId === "number") {
            let findDefaultIndex = setting.selector.findIndex((it) => it.value === codeIdConfig.defaultCodeId);
            if (findDefaultIndex !== -1) {
              setting.selector[findDefaultIndex].default = true;
              setting.tooltip = setting.selector[findDefaultIndex].html;
            } else {
              setting.selector[0].default = true;
              setting.tooltip = setting.selector[0].html;
            }
          } else {
            setting.selector[0].default = true;
            setting.tooltip = setting.selector[0].html;
          }
        }
      }
      if (this.art.setting.find(this.$key.SETTING_KEY)) {
        this.art.setting.update(setting);
      } else {
        this.art.setting.add(setting);
      }
    }
    getSetting() {
      const that = this;
      let userChooseVideoCodingCode = this.getUserChooseVideoCodingCode();
      let selectorList = [
        {
          html: "AV1",
          value: VideoCodingCodeMap["AV1"],
        },
        {
          html: "HEVC",
          value: VideoCodingCodeMap["HEVC"],
        },
        {
          html: "AVC",
          value: VideoCodingCodeMap["AVC"],
        },
      ].map((it) =>
        Object.assign(it, {
          default: it.value === userChooseVideoCodingCode,
        })
      );
      let findValue = selectorList.find((it) => it.default);
      if (!findValue) {
        selectorList = selectorList.map((it, index) => {
          it.default = index === 0;
          return it;
        });
        console.warn(TAG$1 + "没有找到用户选择对应的画质编码，将使用排序第一个的画质：" + selectorList[0].html);
      }
      let tooltip = selectorList.find((it) => it.default);
      return {
        name: this.$key.SETTING_KEY,
        html: "播放策略",
        tooltip: tooltip.html,
        icon: `<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>`,
        selector: selectorList,
        onSelect: function (item) {
          let videoCodingCode = item.value;
          that.setCurrentVideoCodingCode(videoCodingCode);
          that.onSettingSelect(videoCodingCode);
          return item.html;
        },
      };
    }
    onSettingSelect(selectValue) {}
    get storageVideoCodingKey() {
      return `bili-${this.from}-artplayer-videoCodingCode`;
    }
    setCurrentVideoCodingCode(videoCodingCode) {
      this.art.storage.set(this.storageVideoCodingKey, videoCodingCode);
    }
    getUserChooseVideoCodingCode() {
      let codingCode = this.art.storage.get(this.storageVideoCodingKey) || VideoCodingCodeMap.AV1;
      if (!Object.values(VideoCodingCodeMap).includes(codingCode)) {
        console.error(
          TAG$1 + "意外情况，选择的编码格式不是允许的编码，将强制使用默认(av1)，防止过滤掉的视频链接为空：" + codingCode
        );
        codingCode = VideoCodingCodeMap.AV1;
      }
      return codingCode;
    }
  }
  class VideoQuality extends VideoEncoding {
    $data = {
      qualityOption: null,
      qualityOptionList: [],
      qualityCodeIdList: [],
      currentQualityCodecId: VideoCodingCodeMap["AV1"],
      currentSelectQualityInfo: null,
      currentQualityOption: null,
    };
    constructor(art, from) {
      super(art, from);
    }
    setCurrentQualityOption(qualityOption = null) {
      this.$data.currentQualityOption = null;
      this.$data.currentQualityOption = qualityOption;
    }
    getStorageKey(from) {
      return `artplayer-quality-${from}`;
    }
    update(option) {
      this.$data.qualityOption = null;
      this.$data.qualityOption = option;
      this.$data.qualityOptionList.length = 0;
      this.$data.qualityCodeIdList.length = 0;
      this.$data.currentSelectQualityInfo = null;
      this.$data.currentQualityCodecId = void 0;
      this.setCurrentQualityOption();
      if (option.qualityList.length) {
        let currentSelectQualityInfo = this.getQualityInfo();
        this.addControls();
        super.updateSetting({
          acceptCodeIdList: this.$data.qualityCodeIdList,
          defaultCodeId: this.$data.currentQualityCodecId,
        });
        this.art.url = currentSelectQualityInfo.url;
      } else {
        this.removeControls();
      }
    }
    getControlsOption() {
      const that = this;
      let selectorList = this.$data.qualityOptionList.map((itemInfo, index) => {
        return {
          default: index === this.$data.currentSelectQualityInfo?.index,
          html: itemInfo.html,
          url: itemInfo.url,
          quality: itemInfo.quality,
          frameRate: itemInfo.frameRate,
          mimeType: itemInfo.mimeType,
          codecid: itemInfo.codecid,
          codecs: itemInfo.codecs,
          bandwidth: itemInfo.bandwidth,
        };
      });
      const controlsOption = {
        name: ArtPlayer_PLUGIN_QUALITY_KEY,
        index: 10,
        position: "right",
        html: this.$data.currentSelectQualityInfo.html,
        selector: selectorList,
        onSelect: function (selector) {
          let itemInfo = selector;
          console.log(TAG$1 + "切换画质", itemInfo);
          that.art.switchQuality(itemInfo.url);
          that.art.storage.set(that.getStorageKey(that.$data.qualityOption.from), {
            quality: itemInfo.quality,
          });
          that.setCurrentQualityOption({
            html: itemInfo.html,
            url: itemInfo.url,
            quality: itemInfo.quality,
            frameRate: itemInfo.frameRate,
            mimeType: itemInfo.mimeType,
            codecid: itemInfo.codecid,
            codecs: itemInfo.codecs,
            bandwidth: itemInfo.bandwidth,
          });
          return selector.html;
        },
      };
      return controlsOption;
    }
    addControls() {
      if (this.isAddControls()) {
        this.updateQualityControls();
      } else {
        let controlOption = this.getControlsOption();
        this.art.controls.add(controlOption);
      }
    }
    getQualityInfo() {
      let userChooseVideoCodingCode = this.getUserChooseVideoCodingCode();
      let qualityList = this.$data.qualityOption.qualityList.filter(
        (item) => item.codecid === userChooseVideoCodingCode
      );
      qualityList.sort((leftItem, rightItem) => {
        return rightItem.quality - leftItem.quality;
      });
      const qualityListMap = {};
      for (let index = 0; index < this.$data.qualityOption.qualityList.length; index++) {
        const qualityItem = this.$data.qualityOption.qualityList[index];
        const qualityMapValue = qualityListMap[qualityItem.codecid] || [];
        qualityMapValue.push(qualityItem);
        qualityListMap[qualityItem.codecid] = qualityMapValue;
      }
      if (qualityList.length === 0) {
        qualityList = Object.values(qualityListMap)[0];
        this.$data.currentQualityCodecId = qualityList[0].codecid;
        console.warn(TAG$1 + "该画质：" + userChooseVideoCodingCode + "不存在，将使用第一个画质", qualityList);
      }
      this.$data.qualityOptionList = [];
      this.$data.qualityOptionList = qualityList;
      this.$data.qualityCodeIdList = Object.keys(qualityListMap);
      let firstQualityInfo = qualityList[0];
      const storageKey = this.getStorageKey(this.$data.qualityOption.from);
      const storageQualityInfo = this.art.storage.get(storageKey);
      let currentSelectQualityInfo = {
        index: 0,
        html: firstQualityInfo?.html,
        url: firstQualityInfo?.url,
      };
      this.setCurrentQualityOption(qualityList[0]);
      if (storageQualityInfo) {
        const findQualityIndex = qualityList.findIndex((item) => item.quality === storageQualityInfo.quality);
        if (findQualityIndex !== -1) {
          const findQuality = qualityList[findQualityIndex];
          currentSelectQualityInfo.index = findQualityIndex;
          currentSelectQualityInfo.url = findQuality.url;
          currentSelectQualityInfo.html = findQuality.html;
          this.setCurrentQualityOption(findQuality);
        } else {
          console.warn(TAG$1 + "没有找到上次选的画质，使用当前默认第一个画质");
        }
      }
      this.$data.currentSelectQualityInfo = null;
      this.$data.currentSelectQualityInfo = currentSelectQualityInfo;
      return currentSelectQualityInfo;
    }
    updateQualityControls() {
      let controlOption = this.getControlsOption();
      console.log(TAG$1 + "更新画质切换面板信息", this.$data.qualityOptionList, this.$data.currentQualityOption);
      this.art.controls.update(controlOption);
    }
    removeControls() {
      if (this.isAddControls()) {
        this.art.controls.remove(ArtPlayer_PLUGIN_QUALITY_KEY);
      }
    }
    isAddControls() {
      return Reflect.has(this.art.controls, ArtPlayer_PLUGIN_QUALITY_KEY);
    }
    onSettingSelect(selectValue) {
      this.getQualityInfo();
      this.updateQualityControls();
      this.updateSetting({
        acceptCodeIdList: this.$data.qualityCodeIdList,
        defaultCodeId: this.$data.currentQualityCodecId,
      });
      if (this.$data.currentSelectQualityInfo) {
        this.art.url = this.$data.currentSelectQualityInfo.url;
      }
    }
  }
  const artplayPluginQuality = (option) => {
    return (art) => {
      let videoQuality = new VideoQuality(art, option.from);
      videoQuality.update(option);
      return {
        name: ArtPlayer_PLUGIN_QUALITY_KEY,
        update(option2) {
          videoQuality.update(option2);
        },
        getCurrentQualityOption() {
          return videoQuality.$data.currentQualityOption;
        },
      };
    };
  };
  const Toast = {
    $data: {
      art: null,
    },
    $key: {
      plugin_KEY: "artplayer-plugin-toast",
    },
    $flag: {
      isInitCSS: false,
    },
    $config: {
      originToast: "art-layer-auto-playback",
      hideClassName: "art-toast-hide-opacity",
      prefix: "mplayer-toast-gm",
    },
    $el: {
      get $originPlayer() {
        return document.querySelector(".art-video-player .art-layers");
      },
    },
    toast(config) {
      if (typeof config === "string") {
        config = {
          text: config,
        };
      }
      this.initCSS();
      let $parent = config.parent ?? this.$el.$originPlayer;
      if (!$parent) {
        throw new TypeError("toast parent is null");
      }
      this.mutationMPlayerOriginToast($parent);
      let $toast = domUtils.createElement("div", {
        "data-from": "gm",
      });
      domUtils.addClass($toast, this.$config.prefix);
      if (config.showCloseBtn) {
        let $closeBtn = domUtils.createElement("div", {
          className: this.$config.prefix + "-close",
          innerHTML: `
                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"></path></svg>
                `,
        });
        $toast.appendChild($closeBtn);
        domUtils.on(
          $closeBtn,
          "click",
          (event) => {
            domUtils.preventEvent(event);
            this.closeToast($toast);
          },
          {
            capture: true,
          }
        );
      }
      let $text = domUtils.createElement("span", {
        className: this.$config.prefix + "-text",
        innerText: config.text,
      });
      $toast.appendChild($text);
      if (typeof config.timeText === "string" && config.timeText.trim() != "") {
        let $time = domUtils.createElement("span", {
          className: this.$config.prefix + "-time",
          innerText: config.timeText,
        });
        $toast.appendChild($time);
      }
      if (typeof config.jumpText === "string" && config.jumpText.trim() != "") {
        let $jump = domUtils.createElement("span", {
          className: this.$config.prefix + "-jump",
          innerText: config.jumpText,
        });
        $toast.appendChild($jump);
        domUtils.on(
          $jump,
          "click",
          (event) => {
            if (typeof config.jumpClickCallback === "function") {
              domUtils.preventEvent(event);
              config.jumpClickCallback(event);
            }
          },
          {
            capture: true,
          }
        );
      }
      this.setTransitionendEvent($toast, config);
      let timeout = typeof config.timeout === "number" && !isNaN(config.timeout) ? config.timeout : 3500;
      $parent.appendChild($toast);
      let timeoutId = setTimeout(() => {
        this.closeToast($toast);
      }, timeout);
      return {
        $toast,
        timeoutId,
        close: () => {
          clearTimeout(timeoutId);
          this.closeToast($toast);
        },
      };
    },
    initCSS() {
      if (this.$flag.isInitCSS) {
        return;
      }
      this.$flag.isInitCSS = true;
      addStyle(
        `
		.${this.$config.prefix}.mplayer-show {
			opacity: 1;
			visibility: visible;
			z-index: 40;
		}

		.mplayer-toast, .${this.$config.prefix} {
			-webkit-transition-property: opacity, bottom;
			transition-property: opacity, bottom;
		}

		.${this.$config.prefix} {
            backdrop-filter: saturate(180%) blur(20px);
            background-color: #000000bf !important;
			border-radius: var(--art-border-radius);
			/* bottom: 48px; */
            bottom: calc( calc( var(--art-control-height) + var(--art-bottom-gap) ) * 1 + 10px);
			opacity: 1;
			overflow: hidden;
			padding: 10px;
            gap: 10px;
            line-height: 1;
			position: absolute;
			text-align: center;
			-webkit-transition: opacity .3s;
			transition: opacity .3s;
            left: var(--art-padding);
            display: flex;
            align-items: center;
			pointer-events: auto;
		}
        .art-video-player.art-backdrop .${this.$config.prefix}{
            backdrop-filter: saturate(180%) blur(20px);
            background-color: #000000bf !important;
        }

		.${this.$config.prefix}-close {
            cursor: pointer;
            justify-content: center;
            align-items: center;
            display: flex;
		}
		.${this.$config.prefix}-close svg{
            fill: var(--art-theme);
            width: 15px;
            height: 15px;
        }

		.${this.$config.prefix}-jump {
            color: var(--art-theme);
            cursor: pointer;
		}
		`
      );
      addStyle(
        `
        .${this.$config.hideClassName}{
            opacity: 0;
            visibility: hidden;
        }
        `
      );
    },
    mutationMPlayerOriginToast($parent) {
      let $mplayer = this.$el.$originPlayer;
      if (!$mplayer) {
        return;
      }
      if ($mplayer.hasAttribute("data-mutation")) {
        return;
      }
      log$1.success(`添加观察器，动态更新toast的位置`);
      $mplayer.setAttribute("data-mutation", "gm");
      utils.mutationObserver($mplayer, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          this.updatePageToastBottom();
        },
      });
    },
    updatePageToastBottom() {
      let pageToastList = Array.from(document.querySelectorAll(`.${this.$config.prefix}`)).concat(
        Array.from(document.querySelectorAll(".".concat(this.$config.originToast)))
      );
      if (pageToastList.length) {
        pageToastList.length - 1;
        pageToastList.forEach(($pageToast, index) => {
          $pageToast.setAttribute("data-transition", "move");
          $pageToast.style.bottom = `calc( calc( var(--art-control-height) + var(--art-bottom-gap) ) * ${index + 1} + 10px)`;
        });
      }
    },
    closeToast($ele) {
      $ele.classList.add(this.$config.hideClassName);
    },
    getTransitionendEventNameList() {
      return ["webkitTransitionEnd", "mozTransitionEnd", "MSTransitionEnd", "otransitionend", "transitionend"];
    },
    setTransitionendEvent($toast, config) {
      let that = this;
      let animationEndNameList = this.getTransitionendEventNameList();
      domUtils.on(
        $toast,
        animationEndNameList,
        function (event) {
          let dataTransition = $toast.getAttribute("data-transition");
          if ($toast.classList.contains(that.$config.hideClassName)) {
            if (typeof config === "object" && typeof config?.closeCallback === "function") {
              config.closeCallback();
            }
            $toast.remove();
            return;
          }
          if (dataTransition === "move") {
            $toast.removeAttribute("data-transition");
            return;
          }
        },
        {
          capture: true,
        }
      );
    },
  };
  const artplayerPluginToast = (option) => {
    return (art) => {
      Toast.$data.art = art;
      return {
        name: Toast.$key.plugin_KEY,
        toast(...args) {
          return Toast.toast(...args);
        },
      };
    };
  };
  const ArtPlayer_PLUGIN_TOAST_KEY = Toast.$key.plugin_KEY;
  class VideoStatistics {
    art;
    option;
    $key = {
      plugin_KEY: "artplayer-plugin-videoStatistics",
      setting_name: "video-statistics",
    };
    $data = {
      intervalId: void 0,
    };
    constructor(art, option) {
      this.art = art;
      this.option = option;
      this.addSetting();
    }
    addSetting() {
      this.art.setting.add({
        name: this.$key.setting_name,
        icon: "",
        html: "视频统计信息",
        mounted: ($setting) => {
          let $leftIcon = $setting.querySelector(".art-setting-item-left-icon");
          $leftIcon.innerHTML = `
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M512.50142 958.397886c-119.320573 0-231.499491-46.465265-315.871087-130.837884C112.258737 743.188406 65.792449 631.010511 65.792449 511.688915c0-119.319549 46.466288-231.499491 130.837884-315.871087C281.002952 111.445208 393.180847 64.979944 512.50142 64.979944s231.499491 46.465265 315.871087 130.837884c84.372619 84.372619 130.837884 196.551538 130.837884 315.871087 0 119.321596-46.465265 231.499491-130.837884 315.871087C744.000911 911.932622 631.821993 958.397886 512.50142 958.397886zM512.50142 105.962334c-223.718271 0-405.726581 182.00831-405.726581 405.726581s182.00831 405.726581 405.726581 405.726581c223.718271 0 405.727605-182.00831 405.727605-405.726581S736.220714 105.962334 512.50142 105.962334z"></path>
                    <path d="M510.150886 775.953647c-18.107403 0-32.745798-14.678304-32.745798-32.785707L477.405087 452.191846c0-18.108426 14.638395-32.785707 32.745798-32.785707 18.107403 0 32.745798 14.678304 32.745798 32.785707l0 290.976094C542.896684 761.275343 528.258289 775.953647 510.150886 775.953647z"></path>
                    <path d="M511.357364 296.458969m-45.080731 0a44.054 44.054 0 1 0 90.161463 0 44.054 44.054 0 1 0-90.161463 0Z"></path>
                </svg>
                `.trim();
          this.art.proxy(
            $setting,
            "click",
            (event) => {
              event.stopPropagation();
              event.stopImmediatePropagation();
              event.preventDefault();
              this.art.setting.show = false;
              if (this.isRegisterLayer()) {
                this.updateLayer();
              } else {
                this.showLayer(true);
              }
            },
            { capture: true }
          );
        },
      });
    }
    getLayerOption() {
      let mimeType,
        audioHost,
        audioTime,
        resolution = {
          key: "Resolution:",
          value: `${this.art.video.videoWidth} x ${this.art.video.videoHeight}`,
        },
        videoDataRate,
        audioDataRate,
        audioDuration;
      let qualityPlugin = this.art.plugins[ArtPlayer_PLUGIN_QUALITY_KEY];
      if (qualityPlugin) {
        let currentQualityOption = qualityPlugin.getCurrentQualityOption();
        if (currentQualityOption) {
          mimeType = {
            key: "Mime Type:",
            value: `${currentQualityOption.mimeType}`,
          };
          if (currentQualityOption.codecs.trim() !== "") {
            mimeType.value += `;codecs="${currentQualityOption.codecs}"`;
          }
          if (currentQualityOption.frameRate.trim() !== "") {
            resolution.value += "@" + currentQualityOption.frameRate;
          }
          if (currentQualityOption.bandwidth) {
            videoDataRate = {
              key: "Video DataRate:",
              value: (currentQualityOption.bandwidth / 1024).toFixed(0) + "Kbps",
            };
          }
        }
      }
      let m4sAudioPlugin = this.art.plugins[ArtPlayer_PLUGIN_M4S_AUDIO_SUPPORT_KEY];
      if (m4sAudioPlugin) {
        let currentAudioOption = m4sAudioPlugin.getCurrentPlayConfig();
        if (currentAudioOption) {
          audioHost = {
            key: "Audio Host:",
            value: new URL(currentAudioOption.url).host,
          };
          audioTime = {
            key: "Audio Time:",
            value: m4sAudioPlugin.getAudio().currentTime.toString(),
          };
          if (mimeType) {
            if (mimeType.value.trim() !== "") {
              mimeType.value += ", ";
            }
            mimeType.value += `${currentAudioOption.mimeType}`;
            if (currentAudioOption.codecs.trim() !== "") {
              mimeType.value += `;codecs="${currentAudioOption.codecs}"`;
            }
          }
          audioDataRate = {
            key: "Audio DataRate:",
            value: (currentAudioOption.bandwidth / 1024).toFixed(0) + "Kbps",
          };
          audioDuration = {
            key: "Audio Duration:",
            value: m4sAudioPlugin.getAudio().duration.toString(),
          };
        }
      }
      let data2 = [
        mimeType,
        {
          key: "Player Type",
          value: "ArtPlayer@" + Artplayer.version,
        },
        resolution,
        videoDataRate,
        audioDataRate,
        {
          key: "Video Host:",
          value: new URL(this.art.url).host,
        },
        audioHost,
        {
          key: "Video Time:",
          value: this.art.currentTime.toString(),
        },
        audioTime,
        {
          key: "Video Duration:",
          value: this.art.duration.toString(),
        },
        audioDuration,
      ];
      data2.push(...(this?.option?.data || []));
      return {
        name: this.$key.setting_name,
        html: `
            <div class="art-player-video-statistics">
                <style>
					.art-layer-video-statistics{
						height: fit-content;
					}
                    .art-player-video-statistics{
                        left: var(--art-padding);
                        top: var(--art-padding);
                        z-index: 100;
                        border-radius: var(--art-border-radius);
                        background-color: var(--art-widget-background);
                        padding: 10px;
                        font-size: 12px;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                    }
                    .art-player-video-statistics-container-title{
                        text-align: center;
                        position: relative;
                        font-size: 16px;
                        line-height: 30px;
                    }
                    .art-player-video-statistics-close{
                        position: absolute;
                        top: 0;
                        right: 0;
                    }
                    .art-player-video-statistics-close svg{
                        width: 18px;
                        height: 18px;
                    }
                    .art-player-video-statistics-panel{
                        flex-direction: column;
                        gap: 5px;
                        display: flex;
                    }
                    .art-player-video-statistics-panel-item{
                        align-items: center;
                        gap: 10px;
                        display: flex;
                    }
                    .art-player-video-statistics-panel-item .art-player-video-statistics-panel-title{
                        text-align: right;
                        width: 100px;
                        font-size: 12px;
                        font-weight: 500;
                        color: #fff;
                    }
                    .art-player-video-statistics-panel-item .art-player-video-statistics-panel-content{
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        user-select: all;
                        width: 250px;
                        overflow: hidden;
                        color: #999;
                        font-size: 12px;
                        font-weight: 400;
                    }
                    @media (orientation: landscape) {
                        .art-player-video-statistics-panel-item .art-player-video-statistics-panel-content{
                            width: 70vw;
                        }
                    }
					@media (orientation: portrait){
						.art-player-video-statistics{
							width: calc(100% - var(--art-padding));
							right: var(--art-padding);
						}
					}
                </style>
                <div class="art-player-video-statistics-container-title">
                    统计信息
                    <div class="art-player-video-statistics-close">
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 16 16">
                            <path d="m8 6.939 3.182-3.182a.75.75 0 1 1 1.061 1.061L9.061 8l3.182 3.182a.75.75 0 1 1-1.061 1.061L8 9.061l-3.182 3.182a.75.75 0 1 1-1.061-1.061L6.939 8 3.757 4.818a.75.75 0 1 1 1.061-1.061L8 6.939z"></path>
                        </svg>
                    </div>
                </div>
                <div class="art-player-video-statistics-panel">
                    ${data2
                      .filter((it) => it != null)
                      .map((item) => {
                        return `
                        <div class="art-player-video-statistics-panel-item">
                            <div class="art-player-video-statistics-panel-title">${item.key}</div>
                            <div class="art-player-video-statistics-panel-content">${item.value}</div>
                        </div>
                        `;
                      })
                      .join("\n")}
                </div>
            </div>
            `,
        mounted: async ($topWrap) => {
          let $close = $topWrap.querySelector(".art-player-video-statistics-close svg");
          this.art.proxy($close, "click", (event) => {
            event.stopPropagation();
            event.stopImmediatePropagation();
            event.preventDefault();
            this.closeLayer();
          });
        },
      };
    }
    isRegisterLayer() {
      return this.$key.setting_name in this.art.layers;
    }
    showLayer(intervalUpdateInfo) {
      clearInterval(this.$data.intervalId);
      let option = this.getLayerOption();
      this.art.layers.add(option);
      if (intervalUpdateInfo) {
        this.unbindUpdateLayerEvent();
        this.bindUpdateLayerEvent();
      }
    }
    updateLayer() {
      let option = this.getLayerOption();
      this.art.layers.update(option);
    }
    bindUpdateLayerEvent() {
      this.art.on("play", this.updateLayerEvent_interval, this);
      this.art.on("restart", this.updateLayerEvent_once, this);
      this.art.on("m4sAudio:loadedmetadata", this.updateLayerEvent_once, this);
      this.art.on("pause", this.updateLayerEvent_clear_interval, this);
      this.art.on("video:ended", this.updateLayerEvent_clear_interval, this);
      if (this.art.playing) {
        this.updateLayerEvent_interval();
      }
    }
    unbindUpdateLayerEvent() {
      this.art.off("play", this.updateLayerEvent_interval);
      this.art.off("restart", this.updateLayerEvent_once);
      this.art.off("m4sAudio:loadedmetadata", this.updateLayerEvent_once);
      this.art.off("pause", this.updateLayerEvent_clear_interval);
      this.art.off("video:ended", this.updateLayerEvent_clear_interval);
    }
    updateLayerEvent_interval() {
      clearInterval(this.$data.intervalId);
      this.$data.intervalId = setInterval(() => {
        this.updateLayer();
      }, 1500);
    }
    updateLayerEvent_once() {
      this.updateLayer();
    }
    updateLayerEvent_clear_interval() {
      clearInterval(this.$data.intervalId);
    }
    closeLayer() {
      clearInterval(this.$data.intervalId);
      this.art.layers.remove(this.$key.setting_name);
      this.unbindUpdateLayerEvent();
    }
    update(option) {
      this.option = option;
    }
  }
  const artplayerPluginVideoStatistics = (option) => {
    return (art) => {
      let videoStatistics = new VideoStatistics(art, option);
      return {
        name: videoStatistics.$key.plugin_KEY,
        update(option2) {
          videoStatistics.update(option2);
        },
      };
    };
  };
  const ArtPlayerDanmakuCommonOption = () => {
    return {
      heatmap: false,
      color: "#FFFFFF",
      mode: 0,
      mount: void 0,
      width: 800,
      points: [],
      filter: (danmu) => danmu.text.length <= 100,
      beforeVisible: () => true,
      emitter: false,
      maxLength: 50,
      lockTime: 3,
      theme: utils.isThemeDark() ? "dark" : "light",
    };
  };
  const generateVideoSelectSetting = (option) => {
    let epList = option.epList || [];
    if (epList.length === 1) {
      let parentEp = epList[0];
      return parentEp.pages.map((pageInfo) => {
        return {
          isDefault: pageInfo.cid === option.cid,
          title: pageInfo.part,
          aid: option.aid,
          bvid: option.bvid,
          cid: pageInfo.cid,
          onSelect(selectOption, index) {
            parentEp.cid = pageInfo.cid;
            BilibiliVideoPlayer.updateArtPlayerVideoInfo(
              {
                aid: option.aid,
                bvid: option.bvid,
                cid: pageInfo.cid,
                pic: pageInfo.first_frame || "",
                title: pageInfo.part,
                epList: option.epList || [],
              },
              true
            );
          },
        };
      });
    } else {
      return epList.map((epInfo) => {
        return {
          isDefault: epInfo.aid === option.aid && epInfo.cid === option.cid,
          title: GenerateArtPlayerEpTitle(epInfo.title),
          aid: epInfo.aid,
          bvid: epInfo.bvid,
          cid: epInfo.cid,
          onSelect(selectItem, index) {
            BilibiliVideoPlayer.updateArtPlayerVideoInfo(
              {
                aid: epInfo.aid,
                bvid: epInfo.bvid,
                cid: epInfo.cid,
                pic: epInfo.arc.pic,
                title: epInfo.title,
                epList: option.epList || [],
              },
              true
            );
          },
        };
      });
    }
  };
  const BilibiliVideoArtPlayer = {
    $data: {
      art: null,
      currentOption: null,
    },
    resetEnv(isInit) {
      if (isInit) {
        Reflect.set(this.$data, "art", null);
      }
      Reflect.set(this.$data, "currentOption", null);
    },
    async init(option) {
      this.resetEnv(true);
      this.$data.currentOption = option;
      const localArtDanmakuOption_KEY = "artplayer-video-danmaku-option";
      const artPlayerDanmakuOptionHelper = new ArtPlayerDanmakuOptionHelper(localArtDanmakuOption_KEY);
      const localArtDanmakuOption = artPlayerDanmakuOptionHelper.getLocalArtDanmakuOption();
      const artOption = {
        ...ArtPlayerCommonOption(),
        container: option.container,
        poster: option.poster,
        settings: [],
        plugins: [
          artplayerPluginToast(),
          artplayPluginQuality({
            from: "video",
            qualityList: option.quality,
          }),
        ],
      };
      artOption.type = "mp4";
      if (Panel.getValue("artplayer-plugin-video-danmaku-enable")) {
        artOption.plugins.push(
          artplayerPluginDanmuku({
            ...ArtPlayerDanmakuCommonOption(),
            danmuku: option.danmukuUrl,

            speed: localArtDanmakuOption.speed,
            margin: localArtDanmakuOption["margin"],
            opacity: localArtDanmakuOption["opacity"],
            modes: localArtDanmakuOption["modes"],
            fontSize: localArtDanmakuOption["fontSize"],
            antiOverlap: localArtDanmakuOption["antiOverlap"],
            synchronousPlayback: localArtDanmakuOption["synchronousPlayback"],
            visible: localArtDanmakuOption["visible"],
            beforeEmit(danmu) {
              return new Promise((resolve) => {
                console.log(danmu);
                setTimeout(() => {
                  resolve(true);
                }, 1e3);
              });
            },
          })
        );
      }
      if (Panel.getValue("artplayer-plugin-video-m4sAudioSupport-enable")) {
        artOption.plugins.push(
          artplayerPluginM4SAudioSupport({
            from: "video",
            audioList: option.audioList || [],
          })
        );
      }
      if (Panel.getValue("artplayer-plugin-video-epChoose-enable")) {
        artOption.plugins.push(
          artplayerPluginEpChoose({
            EP_LIST: generateVideoSelectSetting(option),
            automaticBroadcast: true,
          })
        );
      }
      if (Panel.getValue("artplayer-plugin-video-cc-subtitle-enable")) {
        artOption.plugins.push(
          artplayerPluginBilibiliCCSubTitle({
            from: "video",
            cid: option.cid,
            aid: option.aid,
            bvid: option.bvid,
          })
        );
      }
      if (Panel.getValue("artplayer-plugin-video-toptoolbar-enable")) {
        artOption.plugins.push(
          artplayerPluginTopToolBar({
            onlineInfoParams: {
              aid: option.aid,
              cid: option.cid,
              bvid: option.bvid,
            },
            title: option.videoTitle,
            showWrap: true,
            showTitle: true,
            showOnlineTotal: true,
          })
        );
      }
      if (Panel.getValue("artplayer-plugin-video-statistics-enable")) {
        artOption.plugins.push(
          artplayerPluginVideoStatistics({
            data: [],
          })
        );
      }
      if (Panel.getValue("bili-video-playerAutoPlayVideo")) {
        artOption.muted = true;
        artOption.autoplay = true;
      }
      this.$data.art = new Artplayer(artOption);
      artPlayerDanmakuOptionHelper.onConfigChange(this.$data.art);
      return this.$data.art;
    },
    async update(art, option) {
      this.resetEnv(false);
      this.$data.currentOption = option;
      log$1.info(`更新新的播放信息`, option);
      art.pause();
      log$1.info(`暂停视频`);
      art.currentTime = 0;
      log$1.info(`重置播放进度`);
      this.updatePluginInfo(art, option);
      art.play();
      log$1.info("播放");
    },
    updatePluginInfo(art, option) {
      let plugin_quality = art.plugins[ArtPlayer_PLUGIN_QUALITY_KEY];
      plugin_quality.update({
        from: "video",
        qualityList: option.quality,
      });
      log$1.info(`更新画质`, option.quality);
      if (Panel.getValue("artplayer-plugin-video-danmaku-enable")) {
        art.plugins.artplayerPluginDanmuku.config({
          danmuku: option.danmukuUrl,
        });
        art.plugins.artplayerPluginDanmuku.load();
        log$1.info(`更新弹幕姬`, option.danmukuUrl);
      }
      if (Panel.getValue("artplayer-plugin-video-m4sAudioSupport-enable")) {
        let plugin_m4sAudioSupport = art.plugins[ArtPlayer_PLUGIN_M4S_AUDIO_SUPPORT_KEY];
        plugin_m4sAudioSupport.update({
          from: "video",
          audioList: option.audioList || [],
        });
        log$1.info(`更新音频`, option.audioList);
      }
      if (Panel.getValue("artplayer-plugin-video-epChoose-enable")) {
        let plugin_epChoose = art.plugins[ArtPlayer_PLUGIN_EP_CHOOSE_KEY];
        plugin_epChoose.update({
          EP_LIST: generateVideoSelectSetting(option),
          automaticBroadcast: true,
        });
        log$1.info(`更新选集信息`, option.epList);
      }
      if (Panel.getValue("artplayer-plugin-video-cc-subtitle-enable")) {
        let plugin_bilibiliCCSubTitle = art.plugins[ArtPlayer_PLUGIN_BILIBILI_CC_SUBTITLE_KEY];
        const subTitleOption = {
          from: "video",
          aid: option.aid,
          bvid: option.bvid,
          cid: option.cid,
        };
        plugin_bilibiliCCSubTitle.update(subTitleOption);
        log$1.info(`更新字幕`, subTitleOption);
      }
      if (Panel.getValue("artplayer-plugin-video-toptoolbar-enable")) {
        let plugin_topToolBar = art.plugins[ArtPlayer_PLUGIN_TOP_TOOLBAR_KEY];
        const topToolBarOption = {
          showRight: true,
          showRightFollow: true,
          showWrap: true,
          showTitle: true,
          showOnlineTotal: true,
          title: option.videoTitle,
          onlineInfoParams: {
            aid: option.aid,
            cid: option.cid,
            bvid: option.bvid,
          },
        };
        plugin_topToolBar.update(topToolBarOption);
        log$1.info(`更新顶部标题`, topToolBarOption);
      }
    },
  };
  function handleDashVideoQualityInfo$1(dashInfo) {
    let result = [];
    dashInfo.video.forEach((dashVideoInfo) => {
      if (!dashInfo.accept_quality.includes(dashVideoInfo.id)) {
        return;
      }
      let findSupportFormat = dashInfo.support_formats.find((formatsItem) => formatsItem.quality === dashVideoInfo.id);
      let videoUrl = BilibiliCDNProxy.findBetterCDN(
        dashVideoInfo.base_url,
        dashVideoInfo.baseUrl,
        dashVideoInfo.backup_url,
        dashVideoInfo.backupUrl
      );
      videoUrl = BilibiliCDNProxy.replaceVideoCDN(videoUrl);
      let qualityName = findSupportFormat?.new_description;
      result.push({
        name: qualityName,
        url: videoUrl,
        type: dashVideoInfo.mimeType || dashVideoInfo.mime_type,
        id: dashVideoInfo.id,
        quality: dashVideoInfo.id,
        vip: false,
        codecid: dashVideoInfo.codecid,
        codecs: dashVideoInfo.codecs,
        frameRate: dashVideoInfo.frameRate || dashVideoInfo.frame_rate,
        bandwidth: dashVideoInfo.bandwidth,
      });
    });
    return result;
  }
  const GenerateArtPlayerOption$1 = async (option) => {
    const audioInfo = [];
    let qualityInfo = [];
    if (Panel.getValue("bili-video-playType", "mp4") === "mp4") {
      const videoPlayInfo = await BilibiliVideoApi.playUrl({
        bvid: option.bvid,
        cid: option.cid,
        fnval: 1,
        fnver: 0,
        fourk: 1,
        high_quality: 1,
        qn: 127,
        setPlatformHTML5: true,
      });
      log$1.info(["视频播放地址信息：", videoPlayInfo]);
      if (!videoPlayInfo) {
        return;
      }
      let currentDurl = videoPlayInfo["durl"][0];
      let findSupportFormat = videoPlayInfo.support_formats.find(
        (formatsItem) => formatsItem.quality === videoPlayInfo.quality
      );
      let videoUrl = BilibiliCDNProxy.findBetterCDN(currentDurl.url, currentDurl.url || currentDurl.backup_url?.[0]);
      let qualityName = findSupportFormat?.new_description;
      qualityInfo.push({
        name: qualityName,
        url: videoUrl,
        type: "audio/mp4",
        id: videoPlayInfo.quality,
        codecid: videoPlayInfo.video_codecid,
        quality: videoPlayInfo.quality,
        vip: false,
        codecs: "",
        frameRate: "",
        bandwidth: 0,
      });
    } else {
      const videoPlayInfo = await BilibiliVideoApi.playUrl({
        bvid: option.bvid,
        cid: option.cid,
        fnval: 16 | 1024 | 2048,
        fnver: 0,
        fourk: 1,
        high_quality: 1,
        qn: 127,
        setPlatformHTML5: false,
      });
      log$1.info(["视频播放地址信息：", videoPlayInfo]);
      if (!videoPlayInfo) {
        return;
      }
      videoPlayInfo.dash.audio.forEach((item) => {
        let audioUrl = BilibiliCDNProxy.findBetterCDN(item.baseUrl, item.base_url, item.baseUrl, item.backup_url);
        audioUrl = BilibiliCDNProxy.replaceVideoCDN(audioUrl, true);
        audioInfo.push({
          url: audioUrl,
          id: item.id,
          text: VideoSoundQualityCode[item.id] || "",
          codecs: item.codecs,
          mimeType: item.mimeType,
          bandwidth: item.bandwidth,
          size: 0,
        });
      });
      audioInfo.sort((leftItem, rightItem) => {
        return rightItem.id - leftItem.id;
      });
      log$1.info(`ArtPlayer: 获取的音频信息`, audioInfo);
      qualityInfo = [
        ...handleDashVideoQualityInfo$1({
          accept_quality: videoPlayInfo.accept_quality,
          support_formats: videoPlayInfo.support_formats,
          video: videoPlayInfo.dash.video,
        }),
      ];
      log$1.info(`ArtPlayer: 获取的视频画质信息`, qualityInfo);
    }
    const currentVideoQuality = qualityInfo.map((item, index) => {
      return {
        quality: item.quality,
        html: item.name,
        url: item.url,
        codecid: item.codecid,
        codecs: item.codecs,
        frameRate: item.frameRate,
        mimeType: item.type,
        bandwidth: item.bandwidth,
      };
    });
    const artPlayerOption = {
      container: null,
      epList: option.epList,
      audioUrl: null,
      url: "",
      poster: option.pic,
      aid: option.aid,
      bvid: option.bvid,
      cid: option.cid,
      videoTitle: option.title,
      danmukuUrl: `https://api.bilibili.com/x/v1/dm/list.so?oid=${option.cid}`,
      quality: currentVideoQuality,
    };
    artPlayerOption.url = qualityInfo?.[0]?.url;
    if (audioInfo.length) {
      artPlayerOption.audioList = audioInfo.map((item, index) => {
        return {
          isDefault: index === 0,
          url: item.url,
          soundQualityCode: item.id,
          soundQualityCodeText: item.text,
          codecs: item.codecs,
          mimeType: item.mimeType,
          bandwidth: item.bandwidth,
          size: item.size,
        };
      });
    }
    return artPlayerOption;
  };
  const BilibiliVideoPlayer = {
    $data: {
      art: null,
    },
    init() {
      Panel.execMenu("bili-video-enableArtPlayer", () => {
        this.coverVideoPlayer();
      });
    },
    coverVideoPlayer() {
      if ($("#artplayer")) {
        log$1.warn("已使用ArtPlayer覆盖原播放器，更新播放信息");
      } else {
        log$1.info(`覆盖播放器`);
        addStyle(
          `
            /* 隐藏原本的播放器 */
			${BilibiliData.className.video} .m-video-player .player-container,
			${BilibiliData.className.mVideo} .m-video-player .player-container{
				display: none !important;
			}
			
			${artPlayerCommonCSS}
			
			${artPlayerCSS$1}

			`
        );
        let controlsPadding = Panel.getValue("bili-video-artplayer-controlsPadding-left-right", 0);
        if (controlsPadding != 0) {
          addStyle(
            `
				@media (orientation: landscape) {
					.art-video-player .art-layers .art-layer-top-wrap,
					/* 底部 */
					.art-video-player .art-bottom{
						padding-left: ${controlsPadding}px !important;
						padding-right: ${controlsPadding}px !important;
					}
					
					/* 锁定图标 */
					.art-video-player  .art-layer-lock{
						--art-lock-left-size: ${controlsPadding}px;
					}
				}
				`
          );
        }
      }
      this.updateArtPlayerVideoInfo();
    },
    updateArtPlayerVideoInfo(videoInfo, isEpChoose) {
      let that = this;
      let queryMVideoPlayer = () => {
        return (
          $(BilibiliData.className.video + " .m-video-player") || $(BilibiliData.className.mVideo + " .m-video-player")
        );
      };
      VueUtils.waitVuePropToSet(queryMVideoPlayer, {
        msg: "等待m-video-player加载完成",
        check(vueInstance) {
          if (!isEpChoose && BilibiliVideoArtPlayer.$data.currentOption != null) {
            BilibiliVideoArtPlayer.$data.art.pause();
            return (
              typeof vueInstance?.info?.aid === "number" &&
              BilibiliVideoArtPlayer.$data.currentOption.aid !== vueInstance.info.aid &&
              typeof vueInstance?.info?.bvid === "string" &&
              typeof vueInstance?.info?.cid === "number"
            );
          } else {
            return (
              typeof vueInstance?.info?.aid === "number" &&
              typeof vueInstance?.info?.bvid === "string" &&
              typeof vueInstance?.info?.cid === "number"
            );
          }
        },
        async set(vueInstance) {
          const $mVideoPlayer = queryMVideoPlayer();
          let { aid, bvid, cid, pic, title } = vueInstance;
          aid = aid || vueInstance.info.aid;
          bvid = bvid || vueInstance.info.bvid;
          cid = cid || vueInstance.info.cid;
          pic = pic || vueInstance.info.pic;
          title = title || vueInstance.info.title;
          let epInfoList = [];
          const $seasonNew = $(".m-video-season-new");
          const $partNew = $(".m-video-part-new");
          if ($seasonNew && VueUtils.getVue($seasonNew)) {
            let seasonVueIns = VueUtils.getVue($seasonNew);
            let videoList = seasonVueIns?.videoList;
            if (Array.isArray(videoList)) {
              epInfoList = videoList;
            }
          } else if ($partNew && VueUtils.getVue($partNew)) {
            let partVueIns = VueUtils.getVue($partNew);
            let info = partVueIns?.info;
            let currentPage = partVueIns?.p;
            let pages = partVueIns?.pages || partVueIns?.info?.pages;
            if (Array.isArray(pages)) {
              epInfoList.push({
                season_id: 0,
                section_id: 0,
                id: 0,
                aid: aid || info.aid,
                bvid: bvid || info.bvid,
                cid: cid || info.cid,
                title: title || info.title,
                attribute: 0,
                arc: {
                  aid: aid || info.aid,
                  videos: info?.videos,
                  type_id: 0,
                  type_name: "",
                  copyright: info?.copyright,
                  pic: info?.pic,
                  title: info?.title,
                  pubdate: info?.pubdate,
                  ctime: info?.ctime,
                  desc: info?.desc,
                  state: info?.state,
                  duration: info?.duration,
                  rights: info?.rights,
                  author: info?.owner,
                  stat: info?.stat,
                  dynamic: info?.dynamic,
                  dimension: info?.dimension,
                  desc_v2: info?.desc_v2,
                  is_chargeable_season: info?.is_chargeable_season,
                  is_blooper: info?.is_blooper,
                  enable_vt: info?.enable_vt,
                  vt_display: info?.vt_display,
                },
                page: info?.pages?.[currentPage],
                pages: info?.pages,
              });
            }
          }
          if (videoInfo == null) {
            videoInfo = {
              aid,
              bvid,
              cid,
              pic,
              title,
              epList: epInfoList,
            };
          }
          log$1.info(`视频播放信息 => aid：${aid} bvid：${bvid} cid：${cid}`);
          const artPlayerOption = await GenerateArtPlayerOption$1(videoInfo);
          if (artPlayerOption == null) {
            return;
          }
          let $artPlayer = $("#artplayer");
          if (!$artPlayer) {
            const $artContainer = domUtils.createElement("div", {
              className: "artplayer-container",
              innerHTML: `
								<div id="artplayer"></div>
							`,
            });
            $artPlayer = $artContainer.querySelector("#artplayer");
            domUtils.append($mVideoPlayer, $artContainer);
          }
          artPlayerOption.container = $artPlayer;
          if (that.$data.art == null) {
            let art = await BilibiliVideoArtPlayer.init(artPlayerOption);
            if (art) {
              that.$data.art = art;
            } else {
              return;
            }
            that.$data.art.volume = 1;
            that.$data.art.once("ready", () => {
              Panel.execMenu("bili-video-playerAutoPlayVideoFullScreen", async () => {
                log$1.info(`自动进入全屏`);
                that.$data.art.fullscreen = true;
                that.$data.art.once("fullscreenError", () => {
                  log$1.warn("未成功进入全屏，需要用户交互操作，使用网页全屏代替");
                  that.$data.art.fullscreenWeb = true;
                });
              });
            });
          } else {
            const $artContainer = $(".artplayer-container");
            if ($artContainer && !$artContainer.contains(that.$data.art.template.$container)) {
              log$1.warn("artplayer-container的artplayer被移除了，重新添加元素");
              domUtils.empty($artContainer);
              domUtils.append($artContainer, that.$data.art.template.$container);
            }
            await BilibiliVideoArtPlayer.update(that.$data.art, artPlayerOption);
          }
          $mVideoPlayer.style.paddingTop = "";
        },
      });
    },
  };
  const wbi = async (params) => {
    async function getWbiQueryString(params2) {
      const response = await BilibiliUserApi.nav(false);
      if (!response) {
        return;
      }
      const { img_url, sub_url } = response.wbi_img;
      const imgKey = img_url.slice(img_url.lastIndexOf("/") + 1, img_url.lastIndexOf("."));
      const subKey = sub_url.slice(sub_url.lastIndexOf("/") + 1, sub_url.lastIndexOf("."));
      const originKey = imgKey + subKey;
      const mixinKeyEncryptTable = [
        46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12,
        38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62,
        11, 36, 20, 34, 44, 52,
      ];
      const mixinKey = mixinKeyEncryptTable
        .map((n) => originKey[n])
        .join("")
        .slice(0, 32);
      const query = Object.keys(params2)
        .sort()
        .map((key) => {
          const value = params2[key].toString().replace(/[!'()*]/g, "");
          return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        })
        .join("&");
      const wbiSign = md5(query + mixinKey);
      return query + "&w_rid=" + wbiSign;
    }
    return await getWbiQueryString(params);
  };
  function b2a(bvid) {
    const XOR_CODE2 = 23442827791579n;
    const MASK_CODE = 2251799813685247n;
    const BASE2 = 58n;
    const BYTES = ["B", "V", 1, "", "", "", "", "", "", "", "", ""];
    const BV_LEN = BYTES.length;
    const ALPHABET = "FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf".split("");
    const DIGIT_MAP = [0, 1, 2, 9, 7, 5, 6, 4, 8, 3, 10, 11];
    let r = 0n;
    for (let i = 3; i < BV_LEN; i++) {
      r = r * BASE2 + BigInt(ALPHABET.indexOf(bvid[DIGIT_MAP[i]]));
    }
    return `${(r & MASK_CODE) ^ XOR_CODE2}`;
  }
  const MobileCommentModule = (function () {
    const global = typeof _unsafeWindow === "undefined" ? window : _unsafeWindow;
    const videoRE = /https:\/\/m\.bilibili\.com\/video\/.*/;
    const dynamicRE = /https:\/\/m.bilibili.com\/dynamic\/\d+/;
    const opusRE = /https:\/\/m.bilibili.com\/opus\/\d+/;
    let oid, createrID, commentType, replyList;
    const sortTypeConstant = { LATEST: 0, HOT: 2 };
    let currentSortType;
    let nextOffset = "";
    let replyPool;
    if (dynamicRE.test(global.location.href)) setupXHRInterceptor();
    addStyle2();
    return { init };
    async function init(commentModuleWrapper) {
      oid = createrID = commentType = void 0;
      replyPool = {};
      currentSortType = sortTypeConstant.HOT;
      setupStandardCommentContainer(commentModuleWrapper);
      replyList = commentModuleWrapper.querySelector(".reply-list");
      await new Promise((resolve) => {
        domUtils.wait(() => {
          if (videoRE.test(global.location.href)) {
            const videoID = global.location.pathname.replace("/video/", "").replace("/", "");
            if (videoID.startsWith("av")) oid = videoID.slice(2);
            if (videoID.startsWith("BV")) oid = b2a(videoID);
            commentType = 1;
          } else if (dynamicRE.test(global.location.href)) {
            oid = global.dynamicDetail?.oid;
            commentType = global.dynamicDetail?.commentType;
          } else if (opusRE.test(global.location.href)) {
            oid = global?.__INITIAL_STATE__?.opus?.detail?.basic?.comment_id_str;
            commentType = global?.__INITIAL_STATE__?.opus?.detail?.basic?.comment_type;
          }
          if (oid && commentType) {
            resolve();
            return {
              success: true,
              data: {},
            };
          }
          return {
            success: false,
            data: null,
          };
        }, 0);
      });
      await enableSwitchingSortType(commentModuleWrapper);
      await loadFirstPagination(commentModuleWrapper);
    }
    function setupStandardCommentContainer(commentModuleWrapper) {
      commentModuleWrapper.innerHTML = `
        <div class="comment-container">
          <div class="reply-header">
            <div class="reply-navigation">
              <ul class="nav-bar">
                <li class="nav-title">
                  <span class="nav-title-text">评论</span>
                  <span class="total-reply">-</span>
                </li>
                <li class="nav-sort hot">
                  <div class="hot-sort">最热</div>
                  <div class="part-symbol"></div>
                  <div class="time-sort">最新</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="reply-warp">
            <div class="reply-list"></div>
          </div>  
        </div>
      `;
    }
    async function enableSwitchingSortType(commentModuleWrapper) {
      const navSortElement = commentModuleWrapper.querySelector(".comment-container .reply-header .nav-sort");
      const hotSortElement = navSortElement.querySelector(".hot-sort");
      const timeSortElement = navSortElement.querySelector(".time-sort");
      navSortElement.classList.add("hot");
      navSortElement.classList.remove("time");
      hotSortElement.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (currentSortType === sortTypeConstant.HOT) return;
        currentSortType = sortTypeConstant.HOT;
        navSortElement.classList.add("hot");
        navSortElement.classList.remove("time");
        commentModuleWrapper.scrollTo(0, 0);
        loadFirstPagination(commentModuleWrapper);
      });
      timeSortElement.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (currentSortType === sortTypeConstant.LATEST) return;
        currentSortType = sortTypeConstant.LATEST;
        navSortElement.classList.add("time");
        navSortElement.classList.remove("hot");
        commentModuleWrapper.scrollTo(0, 0);
        loadFirstPagination(commentModuleWrapper);
      });
    }
    async function loadFirstPagination(commentModuleWrapper) {
      const { data: firstPaginationData, code: resultCode } = await getPaginationData();
      createrID = firstPaginationData.upper.mid;
      replyList.innerHTML = "";
      replyPool = {};
      document.querySelector(".comment-container .reply-warp .no-more-replies-info")?.remove();
      document.querySelector(".comment-container .reply-warp .anchor-for-loading")?.remove();
      if (resultCode !== 0) {
        const info = resultCode === 12061 ? "UP主已关闭评论区" : "无法从API获取评论数据";
        replyList.innerHTML = `<p style="padding: 100px 0; text-align: center; color: #999;">${info}</p>`;
        return;
      }
      const totalReplyElement = commentModuleWrapper.querySelector(".comment-container .reply-header .total-reply");
      const totalReplyCount = parseInt(firstPaginationData?.cursor?.all_count) || 0;
      totalReplyElement.textContent = totalReplyCount;
      if (firstPaginationData?.cursor?.name?.includes("精选")) {
        const navSortElement = commentModuleWrapper.querySelector(".comment-container .reply-header .nav-sort");
        navSortElement.innerHTML = `<div class="selected-sort">精选评论</div>`;
      }
      if (firstPaginationData.top_replies && firstPaginationData.top_replies.length !== 0) {
        const topReplyData = firstPaginationData.top_replies[0];
        appendReplyItem(topReplyData, true);
      }
      for (const replyData of firstPaginationData.replies) {
        appendReplyItem(replyData);
      }
      if (firstPaginationData.replies.length === 0 || firstPaginationData.cursor.is_end) {
        const infoElement = document.createElement("p");
        infoElement.classList.add("no-more-replies-info");
        infoElement.style = "padding-bottom: 100px; text-align: center; color: #999;";
        infoElement.textContent = "没有更多评论";
        document.querySelector(".comment-container .reply-warp").appendChild(infoElement);
        return;
      }
      addAnchor();
    }
    async function getPaginationData() {
      const params = {
        pagination_str: JSON.stringify({
          offset: nextOffset || "",
        }),
        oid,
        type: commentType,
        wts: parseInt(Date.now() / 1e3),
        plat: 1,
        web_location: 1315875,
      };
      if (currentSortType === sortTypeConstant.HOT) {
        params.mode = 3;
        if (!nextOffset) {
          params.seek_rpid = "";
        }
      } else if (currentSortType === sortTypeConstant.LATEST) {
        params.mode = 2;
      }
      const fetchResult = await httpx.get(`https://api.bilibili.com/x/v2/reply/wbi/main?${await wbi(params)}`, {
        fetch: true,
      });
      const fetchResultJSON = utils.toJSON(fetchResult.data.responseText);
      nextOffset = fetchResultJSON.data.cursor?.pagination_reply?.next_offset || "";
      return fetchResultJSON;
    }
    function appendReplyItem(replyData, isTopReply) {
      if (replyPool[replyData.rpid_str]) {
        return;
      }
      const replyItemElement = document.createElement("div");
      replyItemElement.classList.add("reply-item");
      replyItemElement.innerHTML = `
        <div class="root-reply-container">
          <a class="root-reply-avatar" href="https://space.bilibili.com/${replyData.mid}" target="_blank" data-user-id="${replyData.mid}" data-root-reply-id="${replyData.rpid}">
            <div class="avatar">
              <div class="bili-avatar">
                <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius" data-src="${replyData.member.avatar}" alt="" src="${replyData.member.avatar}">
                <span class="bili-avatar-icon bili-avatar-right-icon bili-avatar-size-40"></span>
              </div>
            </div>
          </a>
          <div class="content-warp">
            <div class="user-info">
              <a class="user-name" href="https://space.bilibili.com/${replyData.mid}" target="_blank" data-user-id="${replyData.mid}" data-root-reply-id="${replyData.rpid}" style="color: ${replyData.member.vip.nickname_color ? replyData.member.vip.nickname_color : "#61666d"}">${replyData.member.uname}</a>
              <span style="height: 14px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 10px; color: white; border-radius: 2px; background-color: ${getMemberLevelColor(
                replyData.member.level_info.current_level
              )};">LV${replyData.member.level_info.current_level}</span>
              ${createrID === replyData.mid ? '<i class="svg-icon up-web up-icon" style="width: 20px; height: 24px; transform: scale(1.03);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>' : ""}
            </div>
            <div class="root-reply">
              <span class="reply-content-container root-reply" style="padding-bottom: 8px;">
                <span class="reply-content">${isTopReply ? '<span class="top-icon" style="top: -1px;">置顶</span>' : ""}${replyData.content.pictures ? `<div class="note-prefix" style="transform: translateY(-1px);"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#BBBBBB"><path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25ZM3.5 6.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75Zm.75 2.25h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5Z"></path></svg><div style="margin-left: 3px;">笔记</div></div>` : ""}${getConvertedMessage(replyData.content)}</span>
              </span>
              ${
                replyData.content.pictures
                  ? `
                <div class="image-exhibition" style="margin-top: 0; margin-bottom: 8px;">
                  <div class="preview-image-container" style="display: flex; width: 300px;">
                    ${getImageItems(replyData.content.pictures)}
                  </div>
                </div>
                `
                  : ""
              }
              <div class="reply-info">
                <span class="reply-time" style="margin-right: 20px;">${getFormattedTime(replyData.ctime)}</span>
                <span class="reply-like">
                  <i class="svg-icon like use-color like-icon" style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
                  <span>${replyData.like}</span>
                </span>
              </div>
              <div class="reply-tag-list">
                ${
                  replyData.card_label
                    ? replyData.card_label.reduce(
                        (acc, cur) =>
                          acc +
                          `<span class="reply-tag-item ${cur.text_content === "热评" ? "reply-tag-hot" : ""} ${cur.text_content === "UP主觉得很赞" ? "reply-tag-liked" : ""}" style="font-size: 12px; background-color: ${cur.label_color_day}; color: ${cur.text_color_day};">${cur.text_content}</span>`,
                        ""
                      )
                    : ""
                }
              </div>
            </div>
          </div>
        </div>
        <div class="sub-reply-container">
          <div class="sub-reply-list">
            ${getSubReplyItems(replyData.replies)}
            ${
              Array.isArray(replyData?.replies) && replyData.rcount > replyData.replies.length
                ? `
              <div class="view-more" style="padding-left: 8px; font-size: 13px; color: #9499A0;">
                <div class="view-more-default">
                  <span>共${replyData.rcount}条回复, </span>
                  <span class="view-more-btn" style="cursor: pointer;">点击查看</span>
                </div>
              </div>
              `
                : ""
            }
          </div>
        </div>
      `;
      replyList.appendChild(replyItemElement);
      replyPool[replyData.rpid_str] = true;
      const previewImageContainer = replyItemElement.querySelector(".preview-image-container");
      if (previewImageContainer)
        new Viewer(previewImageContainer, {
          title: false,
          toolbar: false,
          tooltip: false,
          keyboard: false,
        });
      const subReplyList = replyItemElement.querySelector(".sub-reply-list");
      const viewMoreBtn = replyItemElement.querySelector(".view-more-btn");
      viewMoreBtn &&
        viewMoreBtn.addEventListener("click", () =>
          loadPaginatedSubReplies(replyData.rpid, subReplyList, replyData.rcount, 1)
        );
    }
    function getFormattedTime(ms) {
      const time = new Date(ms * 1e3);
      const year = time.getFullYear();
      const month = (time.getMonth() + 1).toString().padStart(2, "0");
      const day = time.getDate().toString().padStart(2, "0");
      const hour = time.getHours().toString().padStart(2, "0");
      const minute = time.getMinutes().toString().padStart(2, "0");
      return `${year}-${month}-${day} ${hour}:${minute}`;
    }
    function getMemberLevelColor(level) {
      return {
        0: "#C0C0C0",
        1: "#BBBBBB",
        2: "#8BD29B",
        3: "#7BCDEF",
        4: "#FEBB8B",
        5: "#EE672A",
        6: "#F04C49",
      }[level];
    }
    function getConvertedMessage(content) {
      let result = content.message;
      const keywordBlacklist = ["https://www.bilibili.com/video/av", "https://b23.tv/mall-"];
      if (content.vote && content.vote.deleted === false) {
        const linkElementHTML = `<a class="jump-link normal" href="${content.vote.url}" target="_blank" noopener noreferrer>${content.vote.title}</a>`;
        keywordBlacklist.push(linkElementHTML);
        result = result.replace(`{vote:${content.vote.id}}`, linkElementHTML);
      }
      if (content.emote) {
        for (const [key, value] of Object.entries(content.emote)) {
          const imageElementHTML = `<img class="emoji-${["", "small", "large"][value.meta.size]}" src="${value.url}" alt="${key}">`;
          keywordBlacklist.push(imageElementHTML);
          result = result.replaceAll(key, imageElementHTML);
        }
      }
      result = result.replaceAll(/(\d{1,2}[:：]){1,2}\d{1,2}/g, (timestamp) => {
        timestamp = timestamp.replaceAll("：", ":");
        if (!videoRE.test(global.location.href)) return timestamp;
        const parts = timestamp.split(":");
        if (parts.some((part) => parseInt(part) >= 60)) return timestamp;
        let totalSecond;
        if (parts.length === 2) totalSecond = parseInt(parts[0]) * 60 + parseInt(parts[1]);
        else if (parts.length === 3)
          totalSecond = parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
        if (Number.isNaN(totalSecond)) return timestamp;
        const linkElementHTML = `<a class="jump-link video-time" onclick="(async () => {
          // jump to exact time
          const videoElement = document.querySelector('video.gsl-video');
          videoElement.currentTime = ${totalSecond};
  
          // close comment module
          document.querySelector('.close-comment-module-btn').click();
  
          // scroll to top
          window.scrollTo(0, 0);
  
          // play video if it is paused
          if (videoElement.paused) videoElement.play();
        })()">${timestamp}</a>`;
        keywordBlacklist.push(linkElementHTML);
        return linkElementHTML;
      });
      if (content.at_name_to_mid) {
        for (const [key, value] of Object.entries(content.at_name_to_mid)) {
          const linkElementHTML = `<a class="jump-link user" data-user-id="${value}" href="https://space.bilibili.com/${value}" target="_blank" noopener noreferrer>@${key}</a>`;
          keywordBlacklist.push(linkElementHTML);
          result = result.replaceAll(`@${key}`, linkElementHTML);
        }
      }
      if (Object.keys(content.jump_url).length) {
        const entries = [].concat(
          Object.entries(content.jump_url).filter((entry) => entry[0].startsWith("https://")),
          Object.entries(content.jump_url).filter((entry) => !entry[0].startsWith("https://"))
        );
        for (const [key, value] of entries) {
          const href =
            key.startsWith("BV") || /^av\d+$/.test(key) ? `https://www.bilibili.com/video/${key}` : value.pc_url || key;
          if (href.includes("search.bilibili.com") && keywordBlacklist.join("").includes(key)) continue;
          const linkElementHTML = `<img class="icon normal" src="${value.prefix_icon}" style="${value.extra && value.extra.is_word_search && "width: 12px;"}"><a class="jump-link normal" href="${href}" target="_blank" noopener noreferrer>${value.title}</a>`;
          keywordBlacklist.push(linkElementHTML);
          result = result.replaceAll(key, linkElementHTML);
        }
      }
      return result;
    }
    function getImageItems(images) {
      let imageSizeConfig = "width: 84px; height: 84px;";
      if (images.length === 1) imageSizeConfig = "max-width: 260px; max-height: 180px;";
      if (images.length === 2) imageSizeConfig = "width: 128px; height: 128px;";
      let result = "";
      for (const image of images) {
        result += `<div class="image-item-wrap" style="margin-top: 4px; margin-right: 4px; cursor: zoom-in;"><img src="${image.img_src}" style="border-radius: 4px; ${imageSizeConfig}"></div>`;
      }
      return result;
    }
    function getSubReplyItems(subReplies) {
      if (!(subReplies instanceof Array)) return "";
      let result = "";
      for (const replyData of subReplies) {
        result += `
          <div class="sub-reply-item">
            <div class="sub-user-info">
              <a class="sub-reply-avatar" href="https://space.bilibili.com/${replyData.mid}" target="_blank" data-user-id="${replyData.mid}" data-root-reply-id="${replyData.rpid}">
                <div class="avatar">
                  <div class="bili-avatar">
                    <img class="bili-avatar-img bili-avatar-face bili-avatar-img-radius" data-src="${replyData.member.avatar}" alt="" src="${replyData.member.avatar}">
                    <span class="bili-avatar-icon bili-avatar-right-icon  bili-avatar-size-24"></span>
                  </div>
                </div>
              </a>
              <a class="sub-user-name" href="https://space.bilibili.com/${replyData.mid}" target="_blank" data-user-id="${replyData.mid}" data-root-reply-id="${replyData.rpid}" style="color: ${replyData.member.vip.nickname_color ? replyData.member.vip.nickname_color : "#61666d"}">${replyData.member.uname}</a>
              <span style="height: 14px; padding: 0 2px; margin-right: 4px; display: flex; align-items: center; font-size: 10px; color: white; border-radius: 2px; background-color: ${getMemberLevelColor(
                replyData.member.level_info.current_level
              )};">LV${replyData.member.level_info.current_level}</span>
              ${createrID === replyData.mid ? `<i class="svg-icon up-web up-icon" style="width: 20px; height: 24px; transform: scale(1.03);"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="4" width="24" height="16" rx="2" fill="#FF6699"></rect><path d="M5.7 8.36V12.79C5.7 13.72 5.96 14.43 6.49 14.93C6.99 15.4 7.72 15.64 8.67 15.64C9.61 15.64 10.34 15.4 10.86 14.92C11.38 14.43 11.64 13.72 11.64 12.79V8.36H10.47V12.81C10.47 13.43 10.32 13.88 10.04 14.18C9.75 14.47 9.29 14.62 8.67 14.62C8.04 14.62 7.58 14.47 7.3 14.18C7.01 13.88 6.87 13.43 6.87 12.81V8.36H5.7ZM13.0438 8.36V15.5H14.2138V12.76H15.9838C17.7238 12.76 18.5938 12.02 18.5938 10.55C18.5938 9.09 17.7238 8.36 16.0038 8.36H13.0438ZM14.2138 9.36H15.9138C16.4238 9.36 16.8038 9.45 17.0438 9.64C17.2838 9.82 17.4138 10.12 17.4138 10.55C17.4138 10.98 17.2938 11.29 17.0538 11.48C16.8138 11.66 16.4338 11.76 15.9138 11.76H14.2138V9.36Z" fill="white"></path></svg></i>` : ""}
            </div>
            <span class="reply-content-container sub-reply-content">
              <span class="reply-content">${getConvertedMessage(replyData.content)}</span>
            </span>
            <div class="sub-reply-info" style="margin: 4px 0;">
              <span class="sub-reply-time" style="margin-right: 20px;">${getFormattedTime(replyData.ctime)}</span>
              <span class="sub-reply-like">
                <i class="svg-icon like use-color sub-like-icon" style="width: 16px; height: 16px;"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3323" width="200" height="200"><path d="M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z" p-id="3324" fill="#9499a0"></path></svg></i>
                <span>${replyData.like}</span>
              </span>
            </div>
          </div>
        `;
      }
      return result;
    }
    async function loadPaginatedSubReplies(rootReplyID, subReplyList, subReplyAmount, paginationNumber) {
      const params = {
        oid,
        type: commentType,
        root: rootReplyID,
        ps: 10,
        pn: paginationNumber,
        web_location: 333.788,
      };
      const subReplyResponse = await httpx.get(
        `https://api.bilibili.com/x/v2/reply/reply?${utils.toSearchParamsStr(params)}`,
        {
          allowInterceptConfig: false,
          fetch: true,
        }
      );
      if (!subReplyResponse.status) {
        log.error(subReplyResponse);
        Qmsg.error("请求异常，获取评论的回复失败");
        return;
      }
      const subReplyJSON = utils.toJSON(subReplyResponse.data.responseText);
      if (subReplyJSON === -352) {
        Qmsg.error("请登录后再进行操作");
        console.error("you should login first", subReplyResponse);
        return;
      }
      const subReplyData = subReplyJSON.data;
      subReplyList.innerHTML = getSubReplyItems(subReplyData.replies);
      addSubReplyPageSwitcher(rootReplyID, subReplyList, subReplyAmount, paginationNumber);
      const replyItem = subReplyList.parentElement.parentElement;
      replyItem.scrollIntoView({ behavior: "instant" });
      global.scrollTo(0, document.documentElement.scrollTop - 60);
    }
    function addSubReplyPageSwitcher(rootReplyID, subReplyList, subReplyAmount, currentPageNumber) {
      if (subReplyAmount <= 10) return;
      const pageAmount = Math.ceil(subReplyAmount / 10);
      const pageSwitcher = document.createElement("div");
      pageSwitcher.classList.add("view-more");
      pageSwitcher.innerHTML = `
        <div class="view-more-pagination">
          <span class="pagination-page-count">共${pageAmount}页</span>
          ${currentPageNumber !== 1 ? '<span class="pagination-btn pagination-to-prev-btn">上一页</span>' : ""}
          ${(() => {
            const left = [
              currentPageNumber - 4,
              currentPageNumber - 3,
              currentPageNumber - 2,
              currentPageNumber - 1,
            ].filter((num) => num >= 1);
            const right = [
              currentPageNumber + 1,
              currentPageNumber + 2,
              currentPageNumber + 3,
              currentPageNumber + 4,
            ].filter((num) => num <= pageAmount);
            const merge = [].concat(left, currentPageNumber, right);
            let chosen;
            if (currentPageNumber <= 3) chosen = merge.slice(0, 5);
            else if (currentPageNumber >= pageAmount - 3) chosen = merge.reverse().slice(0, 5).reverse();
            else chosen = merge.slice(merge.indexOf(currentPageNumber) - 2, merge.indexOf(currentPageNumber) + 3);
            let final = JSON.parse(JSON.stringify(chosen));
            if (!final.includes(1)) {
              let front = [1];
              if (final.at(0) !== 2) front = [1, "..."];
              final = [].concat(front, final);
            }
            if (!final.includes(pageAmount)) {
              let back = [pageAmount];
              if (final.at(-1) !== pageAmount - 1) back = ["...", pageAmount];
              final = [].concat(final, back);
            }
            return final.reduce((acc, cur) => {
              if (cur === "...") return acc + '<span class="pagination-page-dot">...</span>';
              if (cur === currentPageNumber)
                return acc + `<span class="pagination-page-number current-page">${cur}</span>`;
              return acc + `<span class="pagination-page-number">${cur}</span>`;
            }, "");
          })()}
          ${currentPageNumber !== pageAmount ? '<span class="pagination-btn pagination-to-next-btn">下一页</span>' : ""}
        </div>
      `;
      pageSwitcher
        .querySelector(".pagination-to-prev-btn")
        ?.addEventListener("click", () =>
          loadPaginatedSubReplies(rootReplyID, subReplyList, subReplyAmount, currentPageNumber - 1)
        );
      pageSwitcher
        .querySelector(".pagination-to-next-btn")
        ?.addEventListener("click", () =>
          loadPaginatedSubReplies(rootReplyID, subReplyList, subReplyAmount, currentPageNumber + 1)
        );
      pageSwitcher.querySelectorAll(".pagination-page-number:not(.current-page)")?.forEach((pageNumberElement) => {
        const number = parseInt(pageNumberElement.textContent);
        pageNumberElement.addEventListener("click", () =>
          loadPaginatedSubReplies(rootReplyID, subReplyList, subReplyAmount, number)
        );
      });
      subReplyList.appendChild(pageSwitcher);
    }
    function addAnchor() {
      const anchorElement = document.createElement("div");
      anchorElement.classList.add("anchor-for-loading");
      anchorElement.textContent = "正在加载...";
      anchorElement.style = `text-align: center; color: #61666d; transform: translateY(-50px);`;
      document.querySelector(".comment-container .reply-warp").appendChild(anchorElement);
      const ob = new IntersectionObserver(async (entries) => {
        if (!entries[0].isIntersecting) return;
        const { data: newPaginationData } = await getPaginationData();
        if (!newPaginationData.replies || newPaginationData.replies.length === 0) {
          anchorElement.textContent = "所有评论已加载完毕";
          ob.disconnect();
          return;
        }
        for (const replyData of newPaginationData.replies) {
          appendReplyItem(replyData);
        }
      });
      ob.observe(anchorElement);
    }
    function setupXHRInterceptor() {
      const originXHROpen = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function () {
        const url = arguments[1];
        if (typeof url === "string" && url.includes("reply/wbi/main")) {
          const { searchParams } = new URL(`${url.startsWith("//") ? "https:" : ""}${url}`);
          global.dynamicDetail = {
            oid: searchParams.get("oid"),
            commentType: searchParams.get("type"),
          };
        }
        return originXHROpen.apply(this, arguments);
      };
    }
    async function addStyle2() {
      await new Promise((resolve) => {
        const timer = setInterval(() => {
          if (document && document.createElement && document.head && document.head.appendChild) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
      const replyHeaderCSS = document.createElement("style");
      replyHeaderCSS.textContent = `
        .reply-header {
          padding: 12px;
          border-bottom: 1px solid #f1f2f3;
        }
  
        .reply-navigation {
          margin-bottom: 0 !important;
        }
  
        .reply-navigation .nav-bar .nav-title {
          font-size: 1rem !important;
        }
      `;
      document.head.appendChild(replyHeaderCSS);
      const replyListCSS = document.createElement("style");
      replyListCSS.textContent = `
        .reply-list {
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
  
        .reply-item {
          padding: 12px !important;
          font-size: 1rem !important;
          border-bottom: 1px solid #f4f5f7;
        }
  
        .reply-item .root-reply-container {
          padding: 0 !important;
          display: flex;
        }
  
        .reply-item .root-reply-container .root-reply-avatar {
          position: relative !important;
          width: initial !important;
        }
  
        .reply-item .root-reply-container .content-warp {
          margin-left: 12px;
        }
  
        .reply-item .root-reply-container .content-warp .user-info,
        .reply-item .root-reply-container .content-warp .root-reply .reply-content {
          font-size: 14px !important;
        }
  
        .reply-item .root-reply-container .content-warp .root-reply .reply-content-container {
          width: calc(100vw - 88px) !important;
        }
  
        .reply-item .root-reply-container .content-warp .root-reply .reply-content .note-prefix {
          margin-right: 4px !important;
        }
  
        .reply-item .sub-reply-container {
          padding-left: 44px !important;
        }
  
        .reply-item .sub-reply-container .sub-reply-list .sub-reply-item {
          width: calc(100% - 24px);
        }
  
        .reply-item .sub-reply-container .sub-reply-list .sub-reply-item .sub-user-info {
          margin-right: 0 !important;
        }
  
        .reply-item .sub-reply-container .sub-reply-list .sub-reply-item .sub-user-info .sub-user-name,
        .reply-item .sub-reply-container .sub-reply-list .sub-reply-item .reply-content {
          font-size: 14px !important;
        }
  
        .reply-info .reply-time,
        .reply-info .reply-like,
        .sub-reply-info .sub-reply-time,
        .sub-reply-info .sub-reply-like {
          margin-right: 12px !important;
        }
      `;
      document.head.appendChild(replyListCSS);
      const avatarCSS = document.createElement("style");
      avatarCSS.textContent = `
        .reply-item .root-reply-avatar .avatar .bili-avatar {
          width: 40px;
          height: 40px;
        }
  
        .sub-reply-item .sub-reply-avatar .avatar .bili-avatar {
          width: 24px;
          height: 24px;
        }
      `;
      document.head.appendChild(avatarCSS);
      const viewMoreCSS = document.createElement("style");
      viewMoreCSS.textContent = `
        .sub-reply-container .view-more-btn:hover {
          color: #00AEEC;
        }
  
        .view-more {
          padding-left: 8px;
          color: #222;
          font-size: 13px;
          user-select: none;
        }
  
        .pagination-page-count {
          margin-right: 4px !important;
        }
  
        .pagination-page-dot,
        .pagination-page-number {
          margin: 0 4px;
        }
  
        .pagination-btn,
        .pagination-page-number {
          cursor: pointer;
        }
  
        .current-page,
        .pagination-btn:hover,
        .pagination-page-number:hover {
          color: #00AEEC;
        }
      `;
      (document.head || document.documentElement).appendChild(viewMoreCSS);
      const otherCSS = document.createElement("style");
      otherCSS.textContent = `
        :root {
          --text1: #18191C;
          --text3: #9499A0;
          --brand_blue: #00AEEC;
          --brand_pink: #FF6699;
          --bg2: #F6F7F8;
        }
  
        .jump-link {
          color: #008DDA;
        }
      `;
      (document.head || document.documentElement).appendChild(otherCSS);
    }
  })();
  const MobileCommentModuleStyle =
    ':root {\r\n  --v_xs: 5px;\r\n  --v_xsx: 4px;\r\n  --v_xxs: 6px;\r\n  --v_sm: 10px;\r\n  --v_smx: 8px;\r\n  --v_xsm: 12px;\r\n  --v_md: 15px;\r\n  --v_mdx: 14px;\r\n  --v_xmd: 16px;\r\n  --v_lg: 20px;\r\n  --v_lgx: 18px;\r\n  --v_xlg: 22px;\r\n  --v_xl: 25px;\r\n  --v_xlx: 24px;\r\n  --v_xxl: 26px;\r\n  --v_fs_1: 24px;\r\n  --v_fs_2: 18px;\r\n  --v_fs_3: 16px;\r\n  --v_fs_4: 14px;\r\n  --v_fs_5: 13px;\r\n  --v_fs_6: 12px;\r\n  --v_lh_xs: 1;\r\n  --v_lh_sm: 1.25;\r\n  --v_lh_md: 1.5;\r\n  --v_lh_lg: 1.75;\r\n  --v_lh_xl: 2;\r\n  --v_height_xs: 16px;\r\n  --v_height_sm: 24px;\r\n  --v_height_md: 32px;\r\n  --v_height_lg: 40px;\r\n  --v_height_xl: 48px;\r\n  --v_radius: 6px;\r\n  --v_radius_sm: 4px;\r\n  --v_radius_md: 8px;\r\n  --v_radius_lg: 10px;\r\n  --v_brand_pink: var(--brand_pink, #ff6699);\r\n  --v_brand_pink_thin: var(--brand_pink_thin, #ffecf1);\r\n  --v_brand_blue: var(--brand_blue, #00aeec);\r\n  --v_brand_blue_thin: var(--brand_blue_thin, #dff6fd);\r\n  --v_stress_red: var(--stress_red, #f85a54);\r\n  --v_stress_red_thin: var(--stress_red_thin, #feecea);\r\n  --v_success_green: var(--success_green, #2ac864);\r\n  --v_success_green_thin: var(--success_green_thin, #e4f8ea);\r\n  --v_operate_orange: var(--operate_orange, #ff7f24);\r\n  --v_operate_orange_thin: var(--operate_orange_thin, #fff0e3);\r\n  --v_pay_yellow: var(--pay_yellow, #ffb027);\r\n  --v_pay_yellow_thin: var(--pay_yellow_thin, #fff6e4);\r\n  --v_bg1: var(--bg1, #ffffff);\r\n  --v_bg2: var(--bg2, #f6f7f8);\r\n  --v_bg3: var(--bg3, #f1f2f3);\r\n  --v_bg1_float: var(--bg1_float, #ffffff);\r\n  --v_bg2_float: var(--bg2_float, #f1f2f3);\r\n  --v_text_white: var(--text_white, #ffffff);\r\n  --v_text1: var(--text1, #18191c);\r\n  --v_text2: var(--text2, #61666d);\r\n  --v_text3: var(--text3, #9499a0);\r\n  --v_text4: var(--text4, #c9ccd0);\r\n  --v_text_link: var(--text_link, #008ac5);\r\n  --v_text_notice: var(--text_notice, #e58900);\r\n  --v_line_light: var(--line_light, #f1f2f3);\r\n  --v_line_regular: var(--line_regular, #e3e5e7);\r\n  --v_line_bold: var(--line_bold, #c9ccd0);\r\n  --v_graph_white: var(--graph_white, #ffffff);\r\n  --v_graph_bg_thin: var(--graph_bg_thin, #f6f7f8);\r\n  --v_graph_bg_regular: var(--graph_bg_regular, #f1f2f3);\r\n  --v_graph_bg_thick: var(--graph_bg_thick, #e3e5e7);\r\n  --v_graph_weak: var(--graph_weak, #c9ccd0);\r\n  --v_graph_medium: var(--graph_medium, #9499a0);\r\n  --v_graph_icon: var(--graph_icon, #61666d);\r\n  --v_shadow: var(--shadow, #000000);\r\n  --v_brand_pink_hover: var(--brand_pink_hover, #ff8cb0);\r\n  --v_brand_pink_active: var(--brand_pink_active, #e84b85);\r\n  --v_brand_pink_disabled: var(--brand_pink_disabled, #ffb3ca);\r\n  --v_brand_blue_hover: var(--brand_blue_hover, #40c5f1);\r\n  --v_brand_blue_active: var(--brand_blue_active, #008ac5);\r\n  --v_brand_blue_disabled: var(--brand_blue_disabled, #80daf6);\r\n  --v_stress_red_hover: var(--stress_red_hover, #fa857f);\r\n  --v_stress_red_active: var(--stress_red_active, #e23d3d);\r\n  --v_stress_red_disabled: var(--stress_red_disabled, #fcafaa);\r\n  --v_text_hover: var(--text_hover, #797f87);\r\n  --v_text_active: var(--text_active, #61666d);\r\n  --v_text_disabled: var(--text_disabled, #c9ccd0);\r\n  --v_line_border: var(--line_border, #c9ccd0);\r\n  --v_line_bolder_hover: var(--line_bolder_hover, #e3e5e7);\r\n  --v_line_bolder_active: var(--line_bolder_active, #aeb3b9);\r\n  --v_line_bolder_disabled: var(--line_bolder_disabled, #f1f2f3);\r\n}\r\n\r\n@font-face {\r\n  font-family: fanscard;\r\n  src: url(//s1.hdslb.com/bfs/static/jinkela/mall-h5/asserts/fansCard.ttf);\r\n}\r\n\r\n.svg-icon {\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.svg-icon svg {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.svg-icon.use-color svg path {\r\n  fill: currentColor;\r\n  color: inherit;\r\n}\r\n\r\n.top-vote-card {\r\n  background-color: var(--graph_bg_thin);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 80px;\r\n  width: 100%;\r\n  margin-bottom: 24px;\r\n  padding: 12px 16px 12px 10px;\r\n  border-radius: 6px;\r\n}\r\n\r\n.top-vote-card__multi {\r\n  cursor: pointer;\r\n}\r\n\r\n.top-vote-card__multi:hover .vote-result-text {\r\n  color: var(--brand_blue);\r\n  transition: 0.2s;\r\n}\r\n\r\n.top-vote-card-left {\r\n  width: 40%;\r\n  max-width: calc(40% - 30px);\r\n  margin-right: 20px;\r\n  word-wrap: break-word;\r\n  font-size: 13px;\r\n  line-height: 18px;\r\n  color: var(--text1);\r\n}\r\n\r\n.top-vote-card-left__title {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.top-vote-card-left__title svg {\r\n  margin-right: 2px;\r\n  flex: none;\r\n}\r\n\r\n.top-vote-card-left__title span {\r\n  display: -webkit-box;\r\n  float: none;\r\n  height: 18px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  word-break: break-word;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 1;\r\n}\r\n\r\n.top-vote-card-left__join {\r\n  height: 17px;\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 4px;\r\n  font-size: 12px;\r\n  color: var(--text3);\r\n}\r\n\r\n.top-vote-card-left__join .vote-icon {\r\n  height: 12px;\r\n}\r\n\r\n.top-vote-card-left__join span {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.top-vote-card-right {\r\n  width: 60%;\r\n  font-size: var(--2fde2a28);\r\n  line-height: 17px;\r\n  display: flex;\r\n  --option-height: 40px;\r\n  --option-radius: 6px;\r\n}\r\n\r\n.top-vote-card-right .vote-text__not-vote {\r\n  opacity: 0.9;\r\n}\r\n\r\n.top-vote-card-right .vote-text__not-vote .vui_ellipsis {\r\n  font-weight: 400 !important;\r\n}\r\n\r\n.top-vote-card-right .vote-text :first-child {\r\n  font-weight: 500;\r\n}\r\n\r\n.top-vote-card-right .vote-icon {\r\n  flex: none;\r\n}\r\n\r\n.top-vote-card-right .left-vote-option {\r\n  position: relative;\r\n  display: flex;\r\n  min-width: 120px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background-color: rgba(255, 102, 153, var(--212267a6));\r\n  height: var(--option-height);\r\n  width: var(--38c5ebb3);\r\n  padding-left: 10px;\r\n  border-radius: var(--option-radius) 0 0 var(--option-radius);\r\n  cursor: pointer;\r\n  margin-right: 30px;\r\n  color: var(--332a347e);\r\n  transition: width ease-out 0.2s;\r\n}\r\n\r\n.top-vote-card-right .left-vote-option .skew-vote-option {\r\n  position: absolute;\r\n  right: -20px;\r\n  top: 0;\r\n}\r\n\r\n.top-vote-card-right .left-vote-option .skew-vote-option__fill {\r\n  left: -8px;\r\n  background-color: #f69;\r\n  transform: skew(21deg);\r\n  border-top-right-radius: calc(var(--option-radius) - 2px);\r\n  border-bottom-right-radius: var(--option-radius);\r\n}\r\n\r\n.top-vote-card-right .skew-vote-option {\r\n  height: 40px;\r\n  width: 20px;\r\n  overflow: hidden;\r\n  opacity: var(--212267a6);\r\n  pointer-events: none;\r\n}\r\n\r\n.top-vote-card-right .skew-vote-option__fill {\r\n  pointer-events: all;\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.top-vote-card-right .right-vote-option {\r\n  position: relative;\r\n  display: flex;\r\n  min-width: 120px;\r\n  align-items: center;\r\n  flex-direction: row-reverse;\r\n  justify-content: space-between;\r\n  background-color: rgba(0, 174, 236, var(--212267a6));\r\n  height: var(--option-height);\r\n  width: var(--4b2970aa);\r\n  padding-right: 10px;\r\n  border-radius: 0 var(--option-radius) var(--option-radius) 0;\r\n  cursor: pointer;\r\n  color: var(--1e587827);\r\n  transition: width ease-out 0.2s;\r\n}\r\n\r\n.top-vote-card-right .right-vote-option .skew-vote-option {\r\n  position: absolute;\r\n  left: -20px;\r\n  top: 0;\r\n}\r\n\r\n.top-vote-card-right .right-vote-option .skew-vote-option__fill {\r\n  left: 8px;\r\n  background-color: #00aeec;\r\n  transform: skew(21deg);\r\n  border-top-left-radius: var(--option-radius);\r\n  border-bottom-left-radius: calc(var(--option-radius) - 2px);\r\n}\r\n\r\n.top-vote-card-right .right-vote-option .vote-text {\r\n  text-align: right;\r\n}\r\n\r\n.top-vote-card-right .had_voted {\r\n  cursor: unset;\r\n}\r\n\r\n.reply-header .reply-notice {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  min-height: 40px;\r\n  padding: 4px 10px;\r\n  margin-bottom: 16px;\r\n  font-size: 13px;\r\n  border-radius: 2px;\r\n  color: var(--Ye5_u);\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-header .reply-notice:after {\r\n  content: "";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: var(--Ye5_u);\r\n  opacity: 0.2;\r\n}\r\n\r\n.reply-header .reply-notice .notice-icon {\r\n  width: 16px;\r\n  height: 16px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.reply-header .reply-notice .notice-content {\r\n  flex: 1;\r\n  padding: 0 5px;\r\n  vertical-align: top;\r\n  word-wrap: break-word;\r\n  word-break: break-all;\r\n}\r\n\r\n.reply-header .reply-notice .notice-close-icon {\r\n  position: relative;\r\n  z-index: 1;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.reply-header .reply-navigation {\r\n  margin-bottom: 22px;\r\n}\r\n\r\n.reply-header .reply-navigation .nav-bar {\r\n  display: flex;\r\n  align-items: center;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.reply-header .reply-navigation .nav-bar .nav-title {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n@media screen and (max-width: 1681px) {\r\n  .reply-header .reply-navigation .nav-bar .nav-title {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1681px) {\r\n  .reply-header .reply-navigation .nav-bar .nav-title {\r\n    font-size: 24px;\r\n  }\r\n}\r\n\r\n.reply-header .reply-navigation .nav-bar .nav-title .nav-title-text {\r\n  color: var(--text1);\r\n  font-family:\r\n    PingFang SC,\r\n    HarmonyOS_Medium,\r\n    Helvetica Neue,\r\n    Microsoft YaHei,\r\n    sans-serif;\r\n  font-weight: 500;\r\n}\r\n\r\n@media (-webkit-max-device-pixel-ratio: 1) {\r\n  .reply-header .reply-navigation .nav-bar .nav-title .nav-title-text {\r\n    font-family:\r\n      -apple-system,\r\n      BlinkMacSystemFont,\r\n      Helvetica Neue,\r\n      Helvetica,\r\n      Arial,\r\n      PingFang SC,\r\n      Hiragino Sans GB,\r\n      Microsoft YaHei,\r\n      sans-serif;\r\n  }\r\n}\r\n\r\n.reply-header .reply-navigation .nav-bar .nav-title .total-reply {\r\n  margin: 0 36px 0 6px;\r\n  font-weight: 400;\r\n  color: var(--text3);\r\n}\r\n\r\n@media screen and (max-width: 1681px) {\r\n  .reply-header .reply-navigation .nav-bar .nav-title .total-reply {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1681px) {\r\n  .reply-header .reply-navigation .nav-bar .nav-title .total-reply {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n.reply-header .reply-navigation .nav-bar .nav-select-reply {\r\n  font-family:\r\n    PingFang SC,\r\n    HarmonyOS_Medium,\r\n    Helvetica Neue,\r\n    Microsoft YaHei,\r\n    sans-serif;\r\n  font-weight: 500;\r\n  color: var(--text1);\r\n}\r\n\r\n@media screen and (max-width: 1681px) {\r\n  .reply-header .reply-navigation .nav-bar .nav-select-reply {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1681px) {\r\n  .reply-header .reply-navigation .nav-bar .nav-select-reply {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media (-webkit-max-device-pixel-ratio: 1) {\r\n  .reply-header .reply-navigation .nav-bar .nav-select-reply {\r\n    font-family:\r\n      -apple-system,\r\n      BlinkMacSystemFont,\r\n      Helvetica Neue,\r\n      Helvetica,\r\n      Arial,\r\n      PingFang SC,\r\n      Hiragino Sans GB,\r\n      Microsoft YaHei,\r\n      sans-serif;\r\n  }\r\n}\r\n\r\n.reply-header .reply-navigation .nav-bar .nav-sort {\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--text3);\r\n}\r\n\r\n@media screen and (max-width: 1681px) {\r\n  .reply-header .reply-navigation .nav-bar .nav-sort {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1681px) {\r\n  .reply-header .reply-navigation .nav-bar .nav-sort {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.reply-header .reply-navigation .nav-bar .nav-sort .part-symbol {\r\n  height: 11px;\r\n  margin: 0 12px;\r\n  border-left: solid 1px;\r\n}\r\n\r\n.reply-header .reply-navigation .nav-bar .nav-sort .hot-sort {\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-header .reply-navigation .nav-bar .nav-sort .hot-sort:hover {\r\n  color: var(--brand_blue);\r\n}\r\n\r\n.reply-header .reply-navigation .nav-bar .nav-sort .time-sort {\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-header .reply-navigation .nav-bar .nav-sort .time-sort:hover {\r\n  color: var(--brand_blue);\r\n}\r\n\r\n.reply-header .reply-navigation .nav-bar .nav-sort.hot .hot-sort,\r\n.reply-header .reply-navigation .nav-bar .nav-sort.time .time-sort {\r\n  color: var(--text1);\r\n}\r\n\r\n.reply-header .reply-navigation .nav-operation-warp {\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n/*\r\n   * @bilibili/userAvatar\r\n   * version: 1.2.0-beta.2. Powered by main-frontend\r\n   * 用户头像公共组件.\r\n   * author: wuxiuran\r\n   */\r\n.bili-avatar {\r\n  display: block;\r\n  position: relative;\r\n  background-image: url(data:image/gif;base64,R0lGODlhtAC0AOYAALzEy+To7rG6wb/Hzd/k6rK7wsPK0bvDybO8w9/j6dDW3NHX3eHl6+Hm7LnByLa+xeDl6+Lm7M/V27vDyt7j6dHX3r/Gzb/HzsLJ0LS9xLW+xbe/xtLY3s/V3OPn7dne5NXb4eDk67jAx7S8w+Dk6rrCybW9xMXM08TL0sLK0Nrf5cXM0tjd48zS2bO7wsrR17W+xLfAx8fO1La/xsbN07K7wbzEytzh573FzNLX3uLn7cDHzsbN1NPZ377Gzb7FzNbc4sjP1dfd49bb4tvg5svR2LfAxsnQ1s7U293h6Nbb4dTa4MrQ19fc4t3i6L7GzMnP1s7U2tXa4M3T2sDIz97i6N7i6dje5MjO1dfc473Ey8HJz9vg57jBx8jP1tPY38PL0cfO1dne5dXa4ePn7sHIz8vS2Nrf5tDW3djd5M3T2cDIztTZ4L3Fy7rCyMTL0czT2bC5wOXp7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OTQ4QTFCMzg4NDAxMUU1OTA2NUJGQjgwNzVFMDQ2NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OTQ4QTFCNDg4NDAxMUU1OTA2NUJGQjgwNzVFMDQ2NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5NDhBMUIxODg0MDExRTU5MDY1QkZCODA3NUUwNDY1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5NDhBMUIyODg0MDExRTU5MDY1QkZCODA3NUUwNDY1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAAAAAAAsAAAAALQAtAAAB/+AcoKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19sA6SCtTCakBCyuKOLmXKAGOOAhLiDkFoQzCOA9YEDyE5SHCBx9KhdhhMc6EBhMJeXDQMY6GjKIgXCgZR0jIQR4msDRxJRQBHyzjoHwpR0LODRI9keDI0kAAnoI8rMgJoyYnlTkBUEA6KMDSmTsxhTjIEsBAqlWvlowR9BIBCzmf9ANLyCrTrJP/SAzI+WMtW5EncmpIUwkCTpZaqtw9FIBGzgxlIRHgWvLH1MGIDLN8ACRSArQsfRCAnCgAj5wmsjwigbnkk80hA6hezbr1ajkeMoCu7Lq1HIM5C9yQU7v363EQFhxBMeGA8ePIkx+fMEFAzjgFmCtHPuHBcwEAik/fbnwCCiZfQHKzcoLk8/Po06tfr95BC7vWAkgQwb6+/fv4ETqocC2EgfwABihgRzToQM1ZJT0AwIIMNujggxBGKOGEFFYIgHkWYQCBNA0A0BEASOzmDAMS2NBRCh5AE4AMFiGAhIHSeIAEAhYdAQ0HFmkwxDVDmPBQAU2MiCECSiDiAQkhMBAC/wFMNunkk1ASkMCUUzJJAgQMMNDAllxyGUEEXTaQ5ZhjQmDmmRCEcOVRhyhBI0I2RNCMGRZ5cUgO5RWAQAYuCCBADYDW4OeghBZqqJ8FuLAnDBo84OijkDqqwaQwwGDCpRlkOsKmCHTaqQsjAIDFAocEYVEHzDCA4QMkFNIAGAgdcMEAtM5K6621XqDrrrz2uiuuFgQr7LDEFmsBrsjiWgJCYIg3CAnW6ZeiMgtYBEUhEfwQhwEqsFkMGSxw9IOchHjxIwjKBICBRS4R8pkZzHgWhwyFCGHRCcoQMIJFZxAyRBz4NhMADgIUOYgKFjnAQDJLOIeQboTQUAB8y3wgAP8PhHBRwEMCwEUMiw+Z8BhvJVChogMHeEuBbA+NkQysDxmxsCARbPBCNDs8QK4cDBhhUQvJrJHwtHJAAAMS0byQwYZJYRgHxsjM9VAJ3kJgAqrQoAFDCFUdYBEKyUiN0ASENCCCBNF0IIKzcpj4kAFhWwQAIRE4gDY0EjiwsxwePpRC3A+1Qbfd0eS9N2PbAo7QAIPf/YzhhBCFENxRW/T3IHU77gzkg6RgEeXHiB0HBmWfnXYMbK/7tuKjl72B5s10sMHMgqg+OeukD9LA62nPTojtiVf+0A+EMPAA7Mx08ADTgjxhOetzDwLBA1g/04EGzPP9vPBjEwKBBtU7o8D/1oS4jdDloVtE9iAhZBC+JVkg0YS3kQzhgAMoRBEkJgpk0OogMvEb61I2CH29LxJWWMIKROAcAUzACpIIgLYsIoITAGFvkVAAAlAjiADejnseIQQBEHDARlBAAT5gWUemIIkXPKcLGEhD9hyhABdwUA4eDF76HrI+QRCgAAqARADYYACHHUZEjvDAstAzAx54TBEKmBghcgg6Y4iuh3L4YRAbEQEFuGE96HoEA2awHgHIgAg0lCIAP8c6G4gQiIw4wwvIyJ5+QUIB9SkACpCYiCjCx3w6tKJFtCBCEnZmDGUwono20AP6OSIIG2NPAbAwskNo8IbOWx0I10AIEoyg/4RyIMJf2DMDNcwQEiowQCTXU4AjYHAQl/wdG0GIPjmQwH2HCIHT0jMCJtDOElWAwi7RgwNEKGAENwReFYshutz50JCGAJl6HuCFG2YiAl/oW3oQYMwNylKTO0SIM7MIzUL8Jz0bkIE1O8GCLfjoPA/oZjJnGc7WFdAFWyxEtZ4zAhpwwJGhSIAEnrDKjpDKkgWYJzgF+ZBxavEQHlhJRzSAAja80hQkmIIBNGCRGfySEH785gfrWcuHHuIDGajBBnBwAhb8DxYk+MAKLBCFdcJSjbWjJ0PPR4gEwBERViDCR4GhgBrAR5msq6JP8yk+AcDHcwtlpk6XGg0FOJUQUP8d6U4DmYAaMLUZVq3kObUq1YeAbRAJEMBXNUGCV3pgnR94YibCSoixBrKsCDmrINK6VkwoQQNlKAQRJpCBdgmCAQdAgFM6QddBoECneI2DXm+jVk98Jg5hFMRVCDkIF8YBeXMVQCUfG1ViiC5ggqBAZTvhhBhARAWCqMIq0QAbKDgHAVz4RGMFQVqymtYiNCCEavuKiRu41gUGKMIXNyCTAuxgiSOojG5FS4i8lHYYoqMXWn/qiSrkUABSaMASEaKF3ILCqvC5rG+xaxEsuA60mtABHKhQgi2EkQFH2IIBFABQTsiObWGA7G8fYiPMmQ4aamMbFATM3ofcDHOEw5v/3gjBBAYLQ3RFaFzhJjyIIlg4GBgmhA4i/DgOC8LD172wRZggYhJvzsRyqHCKQWyRFdDtwNZbGyHEctcBI8Rk0oMBKJOhABNwbRBUsAgYkiHR7klPA/AlMgyyl0PUGgN4VMOcEYAGDRTorCrjjUMQkmFdhMgMzFB7hhayfFifPYS2yEAxQhCQhB13gWipykBwB3GDNyFkf8cgQkFhO4h/9eAZLYiDwQSBsIfQORkNcJphBUGDDHxlGSoowJ4HYa+H7GAZnkWInegGAA0k5hhKGIEDYDQIUz2Ey8kQgwse8gBrRmBdFzDDAna9gBzkoALADrawh01sYP8a2LxOtrKX/83sZVfA19CuQAucN4E6i5CjCMlAJZGxBYuM2RALoEF1NDADGAigAHrylLo95YJ2o/vd8NbTCDLQqA1sIAYiEEEM9o3vfOvbCPYO+Axm8KhJaQABg0K3AEzwBgngWRAVESAzmrBKBGS2EAFIEwNIQAEKJOBJVAq5yBPQ8ZJ73EpYytKWyKSllbM8S2gKgcxJbnIKHNkQIPBzAQjNjN7GwQQXnwYI3omQazmjCl1oURRYXVU/xyFO0ACCCscmgUszowEc2IIiMSKNBSgSIRuwkNjHTvayN2iYIwj6MxZA9AG5/e3TVDs0WBBmuNv97k+3ozUIwARs4/3vAZpBC4ZaDf8CtMACdDzPuQvwdcBfx0/rEQEAWnBKbYRgCUsAgRSkMIYxLKAHIGjCFVRABC6ogAUg4IADII+QMHDg9bCHfQf29ZARKCD2uLdrHBDQgyawIK4fEAIQNL+EHoB+CJrvwReykAC2xaMHX/80Ij5QEmsbIgJ1j0MYJvFweARglLVfyCHk/JCDGuILLKmBXNkyhII+xOiGACRCrFwV8GeIMyKd6EsHsbKS4ACgQNB4D8NzSBEAZEAGqiEHNzBrOREFhrAELJEBFKMu57FMBcgmrpYTNsB0cpCBHQEXmXYeBYBGkNEAbvYcFxcAXsMSDlhd6WFjkNED6eEDGeN0FgFkguD/BO7HEo82GKKTE+o3CPvEEg7gLdKEHt/GFn2mHnpVZiXRgwQwdeehATYVEommHgIAQSNxHksgCKGmHiwEFgGQdOsRXCH4HPAyPfXRBRwYEiBQH9oWBeixAwEwBffBH1Thc+rxArqXIFZAH/bxA/1lDyFgg+mhARuAHgJgLvchAKdGED7xd9FyHxZ4D23gePmBAIIREkQggJioHmrwEl/4ifXBZvcQAMNEilj4iPOQBZ6oiuixfQRxhLBISs4nDx6QiLV4HxxwD1Kwi/gRWPbghMDIStYnD7tTjPcBa/KgBMp4HxPQfe7AY8+IhdIVDw3gWtVYH/TnDlmwjfaxAVWogg60CI7pkQPxQAbZZ47nUWDvcAWvyI7+N4jocIXyqB4FIH7tEADadI/p8WDtsIT+qB7R6A5IMJBltH7lkFUIiR7uqA7f05DqAQDSWA7/IpHpsXPsUI4YyRJhmA4S1JHpgYPo4AS0J5LPIQI3dw5v2BHnFo/+WAOTZg4yhpLnYX6xEAgAOw==);\r\n  -webkit-background-size: cover;\r\n  background-size: cover;\r\n  border-radius: 50%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.bili-avatar * {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.bili-avatar-face {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n  -moz-transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  -o-transform: translate(-50%, -50%);\r\n  transform: translate(-50%, -50%);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.bili-avatar-pendent-dom {\r\n  height: 176.48%;\r\n  width: 176.48%;\r\n  position: absolute;\r\n  top: -38.33%;\r\n  left: -38.33%;\r\n  overflow: hidden;\r\n}\r\n\r\n.bili-avatar-pendent-dom img {\r\n  height: 100%;\r\n  min-width: 100%;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.bili-avatar-img {\r\n  border: none;\r\n  display: block;\r\n  -o-object-fit: cover;\r\n  object-fit: cover;\r\n  image-rendering: -webkit-optimize-contrast;\r\n}\r\n\r\n.bili-avatar-img-radius {\r\n  border-radius: 50%;\r\n}\r\n\r\n.bili-avatar-img[src=""],\r\n.bili-avatar-img:not([src]) {\r\n  opacity: 0;\r\n}\r\n\r\n.bili-avatar-img.bili-avatar-img-error {\r\n  display: none;\r\n}\r\n\r\n.bili-avatar-right-icon {\r\n  width: 27.5%;\r\n  height: 27.5%;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: -1px;\r\n  -webkit-background-size: cover;\r\n  background-size: cover;\r\n  image-rendering: -webkit-optimize-contrast;\r\n}\r\n\r\n.bili-avatar-nft-icon {\r\n  position: absolute;\r\n  width: 27.5%;\r\n  height: 27.5%;\r\n  right: -webkit-calc(27.5% - 1px);\r\n  right: -moz-calc(27.5% - 1px);\r\n  right: calc(27.5% - 1px);\r\n  bottom: -1px;\r\n  -webkit-background-size: cover;\r\n  background-size: cover;\r\n  image-rendering: -webkit-optimize-contrast;\r\n}\r\n\r\n@-webkit-keyframes bili-avatar {\r\n  0% {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translateZ(0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(-97.5%, 0, 0);\r\n    transform: translate3d(-97.5%, 0, 0);\r\n  }\r\n}\r\n\r\n@-moz-keyframes bili-avatar {\r\n  0% {\r\n    -moz-transform: translate3d(0, 0, 0);\r\n    transform: translateZ(0);\r\n  }\r\n\r\n  to {\r\n    -moz-transform: translate3d(-97.5%, 0, 0);\r\n    transform: translate3d(-97.5%, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes bili-avatar {\r\n  0% {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    -moz-transform: translate3d(0, 0, 0);\r\n    transform: translateZ(0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(-97.5%, 0, 0);\r\n    -moz-transform: translate3d(-97.5%, 0, 0);\r\n    transform: translate3d(-97.5%, 0, 0);\r\n  }\r\n}\r\n\r\n.bili-avatar .bili-avatar-size-80 {\r\n  width: 22px;\r\n  height: 22px;\r\n  bottom: -1px;\r\n}\r\n\r\n.bili-avatar .bili-avatar-size-60,\r\n.bili-avatar .bili-avatar-size-50,\r\n.bili-avatar .bili-avatar-size-48 {\r\n  width: 18px;\r\n  height: 18px;\r\n  bottom: -1px;\r\n}\r\n\r\n.bili-avatar .bili-avatar-size-40,\r\n.bili-avatar .bili-avatar-size-36 {\r\n  width: 14px;\r\n  height: 14px;\r\n  bottom: -1px;\r\n}\r\n\r\n.bili-avatar .bili-avatar-size-30,\r\n.bili-avatar .bili-avatar-size-24 {\r\n  width: 12px;\r\n  height: 12px;\r\n  bottom: -1px;\r\n}\r\n\r\n.bili-avatar .bili-avatar-size-nft-80 {\r\n  width: 22px;\r\n  height: 22px;\r\n  bottom: -1px;\r\n  right: -webkit-calc(22px - 1px);\r\n  right: -moz-calc(22px - 1px);\r\n  right: 21px;\r\n}\r\n\r\n.bili-avatar .bili-avatar-size-nft-60,\r\n.bili-avatar .bili-avatar-size-nft-50,\r\n.bili-avatar .bili-avatar-size-nft-48 {\r\n  width: 18px;\r\n  height: 18px;\r\n  bottom: -1px;\r\n  right: -webkit-calc(18px - 1px);\r\n  right: -moz-calc(18px - 1px);\r\n  right: 17px;\r\n}\r\n\r\n.bili-avatar .bili-avatar-size-nft-40,\r\n.bili-avatar .bili-avatar-size-nft-36 {\r\n  width: 14px;\r\n  height: 14px;\r\n  bottom: -1px;\r\n  right: -webkit-calc(14px - 1px);\r\n  right: -moz-calc(14px - 1px);\r\n  right: 13px;\r\n}\r\n\r\n.bili-avatar .bili-avatar-size-nft-30,\r\n.bili-avatar .bili-avatar-size-nft-24 {\r\n  width: 12px;\r\n  height: 12px;\r\n  bottom: -1px;\r\n  right: -webkit-calc(12px - 1px);\r\n  right: -moz-calc(12px - 1px);\r\n  right: 11px;\r\n}\r\n\r\n.reply-image {\r\n  width: var(--3414c33c);\r\n  height: var(--822197ea);\r\n}\r\n\r\n.reply-image.b-img {\r\n  background-color: inherit;\r\n}\r\n\r\n.reply-image.b-img img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.opacity-enter-active,\r\n.opacity-leave-active {\r\n  transition: opacity 0.15s ease;\r\n}\r\n\r\n.opacity-enter-from,\r\n.opacity-leave-to {\r\n  opacity: 0;\r\n}\r\n\r\n.reply-box {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.reply-box .box-normal {\r\n  display: flex;\r\n  z-index: 2;\r\n}\r\n\r\n.reply-box .box-normal .reply-box-avatar {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 80px;\r\n  height: 48px;\r\n}\r\n\r\n.reply-box .box-normal .reply-box-warp {\r\n  position: relative;\r\n  flex: 1;\r\n  transition: 0.2s;\r\n  border: 1px solid var(--line_regular);\r\n  border-radius: 6px;\r\n  background-color: var(--bg3);\r\n  overflow-x: hidden;\r\n}\r\n\r\n.reply-box .box-normal .reply-box-warp.focus-within,\r\n.reply-box .box-normal .reply-box-warp:hover {\r\n  border-color: var(--line_regular);\r\n  background-color: var(--bg1);\r\n}\r\n\r\n.reply-box .box-normal .reply-box-warp .textarea-wrap {\r\n  padding: 8px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  cursor: text;\r\n  overflow: hidden;\r\n}\r\n\r\n.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info {\r\n  margin-left: 10px;\r\n  margin-bottom: 4px;\r\n  height: 20px;\r\n  font-size: 12px;\r\n  line-height: 17px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag {\r\n  flex: none;\r\n  padding: 2px 6px;\r\n  border-radius: 2px;\r\n  margin-right: 4px;\r\n}\r\n\r\n.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag--pink {\r\n  background-color: var(--Pi1);\r\n  color: var(--Pi5);\r\n}\r\n\r\n.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag--blue {\r\n  background-color: var(--brand_blue_thin);\r\n  color: var(--brand_blue);\r\n}\r\n\r\n.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__tag--gary {\r\n  background-color: var(--graph_bg_regular);\r\n  color: var(--text3);\r\n}\r\n\r\n.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__text {\r\n  max-width: calc(100% - 68px);\r\n  color: var(--text2);\r\n}\r\n\r\n.reply-box .box-normal .reply-box-warp .textarea-wrap .vote-info__close {\r\n  flex: none;\r\n  margin-left: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-box .box-normal .reply-box-warp .reply-input {\r\n  padding: 0 8px;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid var(--Ga1);\r\n  border-radius: 6px;\r\n  background-color: var(--bg3);\r\n  font-family: inherit;\r\n  line-height: 20px;\r\n  color: var(--text1);\r\n  resize: none;\r\n  outline: none;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.reply-box .box-normal .reply-box-warp .reply-input.focus,\r\n.reply-box .box-normal .reply-box-warp .reply-input:hover {\r\n  background-color: var(--bg1);\r\n  border-color: var(--graph_weak);\r\n}\r\n\r\n.reply-box .box-normal .reply-box-warp .reply-box-textarea {\r\n  padding: 0 8px;\r\n  width: 100%;\r\n  height: 32px;\r\n  border: none;\r\n  border-radius: 6px;\r\n  background-color: transparent;\r\n  font-family: inherit;\r\n  font-size: 14px;\r\n  line-height: 32px;\r\n  color: var(--text1);\r\n  resize: none;\r\n  outline: none;\r\n}\r\n\r\n.reply-box .box-normal .reply-box-warp .reply-box-textarea::placeholder {\r\n  color: var(--text3);\r\n}\r\n\r\n.reply-box .box-normal .reply-box-warp .image-content-wrap {\r\n  background: transparent;\r\n}\r\n\r\n.reply-box .box-expand {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-left: 80px;\r\n  margin-top: 10px;\r\n  z-index: 1;\r\n  height: 32px;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.reply-box .box-expand.hide {\r\n  margin-top: 0;\r\n  height: 0;\r\n  overflow: hidden;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.reply-box .box-expand .box-left {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.reply-box .box-expand .reply-box-emoji {\r\n  width: 32px;\r\n  height: 26px;\r\n  margin-right: 6px;\r\n  position: relative;\r\n}\r\n\r\n.reply-box .box-expand .reply-box-emoji .emoji-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid var(--line_regular);\r\n  border-radius: 4px;\r\n  color: var(--text3);\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-box .box-expand .at-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 32px;\r\n  height: 26px;\r\n  margin-right: 6px;\r\n  border: 1px solid var(--line_regular);\r\n  border-radius: 4px;\r\n  color: var(--text3);\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-box .box-expand .image-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 32px;\r\n  height: 26px;\r\n  border: 1px solid var(--line_regular);\r\n  border-radius: 4px;\r\n  color: var(--text3);\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-box .box-expand .image-btn.disabled {\r\n  opacity: 0.4;\r\n}\r\n\r\n.reply-box .box-expand .image-btn .image-upload-input {\r\n  appearance: none;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0;\r\n  font-size: 0;\r\n  user-select: auto;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-box .box-expand .forward-to-dynamic {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 16px;\r\n  font-size: 12px;\r\n  color: var(--text3);\r\n}\r\n\r\n.reply-box .box-expand .forward-to-dynamic .forward-input,\r\n.reply-box .box-expand .forward-to-dynamic .forward-label {\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-box .box-expand .reply-box-send {\r\n  float: right;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 70px;\r\n  height: 32px;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-box .box-expand .reply-box-send .send-text {\r\n  position: absolute;\r\n  z-index: 1;\r\n  font-size: 16px;\r\n  color: var(--text_white);\r\n}\r\n\r\n.reply-box .box-expand .reply-box-send:after {\r\n  content: "";\r\n  position: absolute;\r\n  opacity: 0.5;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 4px;\r\n  background-color: var(--brand_blue);\r\n}\r\n\r\n.reply-box .box-expand .reply-box-send:hover:after {\r\n  opacity: 1;\r\n}\r\n\r\n.reply-box.box-active .box-normal .reply-box-warp .reply-box-textarea.send-active {\r\n  line-height: normal;\r\n}\r\n\r\n.reply-box.box-active .reply-box-send.send-active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.reply-box.disabled .box-normal .reply-box-warp .disable-mask {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 6px;\r\n  font-size: 12px;\r\n  color: var(--text3);\r\n  background-color: var(--bg3);\r\n}\r\n\r\n.reply-box.disabled .box-normal .reply-box-warp .disable-mask .no-login-mask {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-box.disabled .box-normal .reply-box-warp .disable-mask .no-login-mask .login-btn {\r\n  padding: 4px 9px;\r\n  margin: 0 3px;\r\n  border-radius: 4px;\r\n  color: var(--text_white);\r\n  background-color: var(--brand_blue);\r\n}\r\n\r\n.reply-box.disabled .box-normal .reply-box-warp .disable-mask .no-login-mask .login-btn:hover {\r\n  background-color: var(--Lb4);\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-box.disabled .reply-box-send .send-text {\r\n  color: var(--text3);\r\n}\r\n\r\n.reply-box.disabled .reply-box-send:after {\r\n  opacity: 1;\r\n  background-color: var(--bg3);\r\n}\r\n\r\n.reply-box.fixed-box {\r\n  position: relative;\r\n  z-index: 2;\r\n  padding: 15px 0;\r\n  border-top: 0.5px solid var(--graph_bg_thick);\r\n  background-color: var(--bg1);\r\n}\r\n\r\n.reply-content-container.fold .reply-content {\r\n  display: -webkit-box;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 4;\r\n}\r\n\r\n.reply-content-container .reply-content {\r\n  color: var(--text1);\r\n  overflow: hidden;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n  white-space: pre-wrap;\r\n  line-height: 24px;\r\n  vertical-align: baseline;\r\n}\r\n\r\n.reply-content-container .reply-content .note-prefix {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 1px 4px;\r\n  border-radius: 4px;\r\n  margin-right: 8px;\r\n  font-size: 12px;\r\n  color: var(--text3);\r\n  line-height: 20px;\r\n  vertical-align: bottom;\r\n  background-color: var(--bg2);\r\n}\r\n\r\n.reply-content-container .reply-content .note-prefix .note-icon {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.reply-content-container .reply-content .top-icon {\r\n  top: -2px;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 30px;\r\n  height: 18px;\r\n  border: 1px solid var(--brand_pink);\r\n  border-radius: 3px;\r\n  margin-right: 5px;\r\n  font-size: 12px;\r\n  color: var(--brand_pink);\r\n}\r\n\r\n.reply-content-container .reply-content .emoji-small {\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n@media screen and (max-width: 1681px) {\r\n  .reply-content-container .reply-content .emoji-small {\r\n    width: 20px;\r\n    height: 20px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1681px) {\r\n  .reply-content-container .reply-content .emoji-small {\r\n    width: 22px;\r\n    height: 22px;\r\n  }\r\n}\r\n\r\n.reply-content-container .reply-content .emoji-large {\r\n  width: 50px;\r\n  height: 50px;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n.reply-content-container .reply-content .icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  vertical-align: text-top;\r\n}\r\n\r\n@media screen and (max-width: 1681px) {\r\n  .reply-content-container .reply-content .icon {\r\n    line-height: 24px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1681px) {\r\n  .reply-content-container .reply-content .icon {\r\n    line-height: 26px;\r\n  }\r\n}\r\n\r\n.reply-content-container .reply-content .icon.search-word {\r\n  width: 12px;\r\n  display: inline-block;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.reply-content-container .reply-content .jump-link {\r\n  vertical-align: baseline;\r\n}\r\n\r\n@media screen and (max-width: 1681px) {\r\n  .reply-content-container .reply-content .jump-link {\r\n    line-height: 24px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1681px) {\r\n  .reply-content-container .reply-content .jump-link {\r\n    line-height: 26px;\r\n  }\r\n}\r\n\r\n.reply-content-container .expand-content {\r\n  color: var(--text_link);\r\n  cursor: pointer;\r\n  margin-left: 4px;\r\n}\r\n\r\n.reply-content-container .expand-content:hover {\r\n  color: var(--brand_blue);\r\n}\r\n\r\n.sub-reply-item {\r\n  position: relative;\r\n  padding: 8px 0 8px 42px;\r\n  border-radius: 4px;\r\n}\r\n\r\n@media screen and (max-width: 1681px) {\r\n  .sub-reply-item {\r\n    font-size: 15px;\r\n    line-height: 24px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1681px) {\r\n  .sub-reply-item {\r\n    font-size: 16px;\r\n    line-height: 26px;\r\n  }\r\n}\r\n\r\n.sub-reply-item.show-reply {\r\n  background-color: #dff6fb;\r\n  animation-name: enterAnimation-jumpReply-1f8a4018;\r\n  animation-duration: 2s;\r\n  animation-delay: 3s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.sub-reply-item .sub-user-info {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  margin-right: 9px;\r\n  line-height: 24px;\r\n  vertical-align: baseline;\r\n  white-space: nowrap;\r\n}\r\n\r\n.sub-reply-item .sub-user-info .sub-reply-avatar {\r\n  position: absolute;\r\n  left: 8px;\r\n  cursor: pointer;\r\n}\r\n\r\n.sub-reply-item .sub-user-info .sub-user-name {\r\n  font-family:\r\n    PingFang SC,\r\n    HarmonyOS_Medium,\r\n    Helvetica Neue,\r\n    Microsoft YaHei,\r\n    sans-serif;\r\n  font-weight: 500;\r\n  margin-right: 5px;\r\n  color: var(--3bab3096);\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 1681px) {\r\n  .sub-reply-item .sub-user-info .sub-user-name {\r\n    font-size: 13px;\r\n    line-height: 24px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1681px) {\r\n  .sub-reply-item .sub-user-info .sub-user-name {\r\n    font-size: 14px;\r\n    line-height: 26px;\r\n  }\r\n}\r\n\r\n@media (-webkit-max-device-pixel-ratio: 1) {\r\n  .sub-reply-item .sub-user-info .sub-user-name {\r\n    font-family:\r\n      -apple-system,\r\n      BlinkMacSystemFont,\r\n      Helvetica Neue,\r\n      Helvetica,\r\n      Arial,\r\n      PingFang SC,\r\n      Hiragino Sans GB,\r\n      Microsoft YaHei,\r\n      sans-serif;\r\n  }\r\n}\r\n\r\n.sub-reply-item .sub-user-info .sub-user-level {\r\n  cursor: pointer;\r\n}\r\n\r\n.sub-reply-item .sub-user-info .sub-up-icon {\r\n  cursor: default;\r\n}\r\n\r\n.sub-reply-item .sub-reply-info {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  margin-top: 2px;\r\n  font-size: 13px;\r\n  color: var(--text3);\r\n}\r\n\r\n.sub-reply-item .sub-reply-info .sub-reply-time {\r\n  margin-right: var(--7530c1e4);\r\n}\r\n\r\n.sub-reply-item .sub-reply-info .sub-reply-location {\r\n  margin-right: 20px;\r\n}\r\n\r\n.sub-reply-item .sub-reply-info .sub-reply-like {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: 19px;\r\n  cursor: pointer;\r\n}\r\n\r\n.sub-reply-item .sub-reply-info .sub-reply-like .sub-like-icon {\r\n  margin-right: 5px;\r\n  color: #9499a0;\r\n}\r\n\r\n.sub-reply-item .sub-reply-info .sub-reply-like .sub-like-icon:hover,\r\n.sub-reply-item .sub-reply-info .sub-reply-like .sub-like-icon.liked {\r\n  color: #00aeec;\r\n}\r\n\r\n.sub-reply-item .sub-reply-info .sub-reply-dislike {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: 19px;\r\n}\r\n\r\n.sub-reply-item .sub-reply-info .sub-reply-dislike .sub-dislike-icon {\r\n  color: #9499a0;\r\n  cursor: pointer;\r\n}\r\n\r\n.sub-reply-item .sub-reply-info .sub-reply-dislike .sub-dislike-icon:hover,\r\n.sub-reply-item .sub-reply-info .sub-reply-dislike .sub-dislike-icon.disliked {\r\n  color: #00aeec;\r\n}\r\n\r\n.sub-reply-item .sub-reply-info .sub-reply-btn {\r\n  cursor: pointer;\r\n}\r\n\r\n.sub-reply-item .sub-reply-info .sub-reply-btn:hover {\r\n  color: var(--brand_blue);\r\n}\r\n\r\n.sub-reply-item .sub-reply-info .sub-reply-operation-warp {\r\n  position: absolute;\r\n  right: 40px;\r\n  opacity: 0;\r\n}\r\n\r\n.sub-reply-item:hover .sub-reply-info .sub-reply-operation-warp {\r\n  opacity: 1;\r\n}\r\n\r\n@keyframes enterAnimation-jumpReply-1f8a4018 {\r\n  0% {\r\n    background-color: #dff6fb;\r\n  }\r\n\r\n  to {\r\n    background-color: #dff6fb00;\r\n  }\r\n}\r\n\r\n.sub-reply-list .view-more {\r\n  padding-left: 8px;\r\n  font-size: 13px;\r\n  color: var(--text3);\r\n}\r\n\r\n.sub-reply-list .view-more .view-more-default .view-more-btn {\r\n  cursor: pointer;\r\n}\r\n\r\n.sub-reply-list .view-more .view-more-default .view-more-btn:hover {\r\n  color: var(--brand_blue);\r\n}\r\n\r\n.sub-reply-list .view-more .view-more-pagination {\r\n  color: var(--text1);\r\n}\r\n\r\n.sub-reply-list .view-more .view-more-pagination .pagination-page-count {\r\n  margin-right: 10px;\r\n}\r\n\r\n.sub-reply-list .view-more .view-more-pagination .pagination-btn {\r\n  margin: 0 4 0 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.sub-reply-list .view-more .view-more-pagination .pagination-btn:hover {\r\n  color: var(--brand_blue);\r\n}\r\n\r\n.sub-reply-list .view-more .view-more-pagination .pagination-page-number {\r\n  margin: 0 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.sub-reply-list .view-more .view-more-pagination .pagination-page-number:hover,\r\n.sub-reply-list .view-more .view-more-pagination .pagination-page-number.current-page {\r\n  color: var(--brand_blue);\r\n}\r\n\r\n.sub-reply-list .view-more .view-more-pagination .pagination-page-dot {\r\n  margin: 0 4px;\r\n  cursor: default;\r\n}\r\n\r\n.image-exhibition {\r\n  margin-top: 8px;\r\n  user-select: none;\r\n}\r\n\r\n.image-exhibition .preview-image-container {\r\n  max-width: var(--dacbf126);\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  row-gap: var(--77b1c8ee);\r\n  column-gap: var(--0c349aa2);\r\n}\r\n\r\n.image-exhibition .preview-image-container .image-item-wrap {\r\n  display: flex;\r\n  justify-content: center;\r\n  position: relative;\r\n  border-radius: var(--7fefecd2);\r\n  overflow: hidden;\r\n  cursor: zoom-in;\r\n}\r\n\r\n.image-exhibition .preview-image-container .image-item-wrap.vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.image-exhibition .preview-image-container .image-item-wrap.extra-long {\r\n  justify-content: start;\r\n}\r\n\r\n.image-exhibition .preview-image-container .image-item-wrap .more-image {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  right: 4px;\r\n  bottom: 4px;\r\n  height: 20px;\r\n  padding: 0 6px;\r\n  border-radius: 4px;\r\n  font-size: 13px;\r\n  color: var(--text_white);\r\n  font-weight: 500;\r\n  line-height: 18px;\r\n  background: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.image-exhibition .preview-image-container .client-image-item-warp:nth-child(3n + 1) {\r\n  border-bottom-right-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.image-exhibition .preview-image-container .client-image-item-warp:nth-child(3n + 2) {\r\n  border-radius: 0;\r\n}\r\n\r\n.image-exhibition .preview-image-container .client-image-item-warp:nth-child(3n + 3) {\r\n  border-bottom-left-radius: 0;\r\n  border-top-left-radius: 0;\r\n}\r\n\r\n.image-exhibition .preview-image-container .client-image-item-warp:nth-last-child(1) {\r\n  border-bottom-right-radius: var(--7fefecd2);\r\n  border-top-right-radius: var(--7fefecd2);\r\n}\r\n\r\n.image-exhibition .preview-image-container .expand-image-item-warp:nth-child(1) {\r\n  border-radius: var(--7fefecd2) 0 0 0;\r\n}\r\n\r\n.image-exhibition .preview-image-container .expand-image-item-warp:nth-child(3) {\r\n  border-radius: 0 var(--7fefecd2) 0 0;\r\n}\r\n\r\n.image-exhibition .preview-image-container .expand-image-item-warp:nth-child(7) {\r\n  border-radius: 0 0 0 var(--7fefecd2);\r\n}\r\n\r\n.image-exhibition .preview-image-container .expand-image-item-warp:nth-child(9) {\r\n  border-radius: 0 0 var(--7fefecd2) 0;\r\n}\r\n\r\n.image-exhibition .preview-image-container .expand-image-item-warp:nth-child(3n + 2) {\r\n  border-radius: 0;\r\n}\r\n\r\n.image-exhibition .preview-image-container .expand-image-item-warp.expand-image-two-rows:nth-child(4) {\r\n  border-radius: 0 0 0 var(--7fefecd2);\r\n}\r\n\r\n.image-exhibition .preview-image-container .expand-image-item-warp.expand-image-two-rows:nth-child(6) {\r\n  border-radius: 0 0 var(--7fefecd2) 0;\r\n}\r\n\r\n.reply-user-sailing {\r\n  height: 48px;\r\n}\r\n\r\n.vote-warp {\r\n  display: flex;\r\n  width: 100%;\r\n  height: 80px;\r\n  border: 0.5px solid var(--graph_bg_thick);\r\n  border-radius: 4px;\r\n  margin: 10px 0;\r\n}\r\n\r\n.vote-warp .vote-icon-warp {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-basis: 80px;\r\n  flex-shrink: 0;\r\n  border-top-left-radius: 4px;\r\n  border-bottom-left-radius: 4px;\r\n  background-color: var(--brand_blue_thin);\r\n}\r\n\r\n.vote-warp .vote-icon-warp .vote-icon {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.vote-warp .vote-container {\r\n  display: flex;\r\n  align-items: center;\r\n  flex: 1;\r\n  border-top-right-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n  background-color: var(--bg1);\r\n}\r\n\r\n.vote-warp .vote-container .vote-text-warp {\r\n  flex: 1;\r\n  padding-left: 15px;\r\n}\r\n\r\n.vote-warp .vote-container .vote-text-warp .vote-title {\r\n  font-size: 14px;\r\n  color: var(--text1);\r\n}\r\n\r\n.vote-warp .vote-container .vote-text-warp .vote-desc {\r\n  margin-top: 10px;\r\n  font-size: 12px;\r\n  color: var(--text3);\r\n}\r\n\r\n.vote-warp .vote-container .vote-btn-warp {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-basis: 90px;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.vote-warp .vote-container .vote-btn-warp .vote-btn {\r\n  width: 54px;\r\n  height: 28px;\r\n  border-radius: 4px;\r\n  font-size: 13px;\r\n  text-align: center;\r\n  line-height: 28px;\r\n  color: var(--text_white);\r\n  background-color: var(--brand_blue);\r\n  cursor: pointer;\r\n}\r\n\r\n.vote-warp .vote-container .vote-btn-warp .vote-btn:hover {\r\n  background-color: var(--Lb4);\r\n}\r\n\r\n.vote-dialog {\r\n  max-height: 100vh;\r\n  overflow-y: auto;\r\n}\r\n\r\n.vote-dialog::-webkit-scrollbar {\r\n  width: 4px;\r\n  border-radius: 4px;\r\n  background-color: transparent;\r\n}\r\n\r\n.vote-dialog::-webkit-scrollbar-thumb {\r\n  border-radius: 4px;\r\n  background-color: var(--graph_bg_thick);\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.vote-dialog::-webkit-scrollbar-track {\r\n  border-radius: 4px;\r\n  background-color: transparent;\r\n}\r\n\r\n.vote-dialog .vote-iframe-warp {\r\n  height: 600px;\r\n  padding-top: 10px;\r\n  border-top: 0.5px solid var(--graph_weak);\r\n}\r\n\r\n.vote-dialog .vote-iframe-warp .vote-iframe {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.reply-item {\r\n  position: relative;\r\n}\r\n\r\n.reply-item .login-limit-mask {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 10;\r\n  pointer-events: none;\r\n}\r\n\r\n.reply-item .login-limit-mask .mask-top {\r\n  height: 80%;\r\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--bg1) 100%);\r\n}\r\n\r\n.reply-item .login-limit-mask .mask-bottom {\r\n  height: 20%;\r\n  background: var(--bg1);\r\n}\r\n\r\n.reply-item.login-limit-reply-end .login-limit-mask {\r\n  display: block;\r\n}\r\n\r\n.reply-item .root-reply-container {\r\n  padding: 22px 0 0 80px;\r\n}\r\n\r\n.reply-item .root-reply-container.show-reply {\r\n  animation-name: enterAnimation-jumpReply-7041f671;\r\n  animation-duration: 5s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.reply-item .root-reply-container .root-reply-avatar {\r\n  display: flex;\r\n  justify-content: center;\r\n  position: absolute;\r\n  left: 0;\r\n  width: 80px;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp {\r\n  flex: 1;\r\n  position: relative;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .reply-decorate {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  user-select: none;\r\n  transform: translateY(-15px);\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .reply-decorate .easter-egg-label {\r\n  width: 82px;\r\n  height: 36px;\r\n  transform: translateY(6px);\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .reply-decorate .easter-egg-label img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .reply-decorate .selected-reply .selected-reply-icon {\r\n  width: var(--213e47ca);\r\n  height: var(--268890ba);\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing .user-sailing-img {\r\n  height: 48px;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing .user-sailing-text {\r\n  position: absolute;\r\n  right: 0;\r\n  font-size: 13px;\r\n  color: var(--2bd55d12);\r\n  line-height: 16px;\r\n  word-break: keep-all;\r\n  transform: scale(0.7);\r\n  transform-origin: center center;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .reply-decorate .user-sailing .user-sailing-text .sailing-text {\r\n  font-family: fanscard;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .user-info {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n@media screen and (max-width: 1681px) {\r\n  .reply-item .root-reply-container .content-warp .user-info {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1681px) {\r\n  .reply-item .root-reply-container .content-warp .user-info {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .user-info .user-name {\r\n  font-family:\r\n    PingFang SC,\r\n    HarmonyOS_Medium,\r\n    Helvetica Neue,\r\n    Microsoft YaHei,\r\n    sans-serif;\r\n  font-weight: 500;\r\n  margin-right: 5px;\r\n  color: var(--dc735352);\r\n  cursor: pointer;\r\n}\r\n\r\n@media (-webkit-max-device-pixel-ratio: 1) {\r\n  .reply-item .root-reply-container .content-warp .user-info .user-name {\r\n    font-family:\r\n      -apple-system,\r\n      BlinkMacSystemFont,\r\n      Helvetica Neue,\r\n      Helvetica,\r\n      Arial,\r\n      PingFang SC,\r\n      Hiragino Sans GB,\r\n      Microsoft YaHei,\r\n      sans-serif;\r\n  }\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .user-info .user-level {\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .user-info .up-icon {\r\n  cursor: default;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .user-info .contractor-box {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  width: var(--697d5c46);\r\n  height: 12px;\r\n  padding: 2px;\r\n  border-radius: 2px;\r\n  background-color: var(--brand_pink_thin);\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .user-info .contractor-box.originalFan {\r\n  border: 0.5px solid var(--brand_pink);\r\n  background-color: transparent;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .user-info .contractor-box .contractor-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 16px;\r\n  transform-origin: center center;\r\n  transform: scale(0.5);\r\n  position: absolute;\r\n  color: var(--brand_pink);\r\n  white-space: nowrap;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .user-info .fan-badge {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 14px;\r\n  padding-left: 5px;\r\n  border: 0.5px solid var(--3d3b5a1e);\r\n  border-radius: 10px;\r\n  margin-left: 5px;\r\n  background-image: var(--35269ce2);\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-icon-wrap {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  width: var(--1f5204fd);\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-icon-wrap .badge-frist-icon {\r\n  position: absolute;\r\n  left: -8px;\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-icon-wrap .badge-second-icon {\r\n  position: absolute;\r\n  right: 0;\r\n  width: 8px;\r\n  height: 11px;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-name-wrap {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  width: var(--4f9eed68);\r\n  height: 100%;\r\n  margin-right: 4px;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-name-wrap .badge-name {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 18px;\r\n  transform-origin: center center;\r\n  transform: scale(0.5);\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  color: var(--57e6be72);\r\n  font-weight: 500;\r\n  white-space: nowrap;\r\n  transform: scale(0.5) translate(-50%, -50%);\r\n  transform-origin: 0 0;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-level-wrap {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: relative;\r\n  width: 11.5px;\r\n  height: 11.5px;\r\n  border-radius: 50%;\r\n  margin-right: 0.5px;\r\n  background-color: var(--59f85baa);\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .user-info .fan-badge .badge-level-wrap .badge-level {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 14px;\r\n  transform-origin: center center;\r\n  transform: scale(0.5);\r\n  position: absolute;\r\n  top: 52%;\r\n  left: 50%;\r\n  font-family: Reeji-CloudHuPo-GBK;\r\n  color: var(--103312b6);\r\n  font-weight: 500;\r\n  white-space: nowrap;\r\n  line-height: 1;\r\n  transform: scale(0.5) translate(-50%, -43%);\r\n  transform-origin: 0 0;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .vote-info {\r\n  margin-bottom: 4px;\r\n  height: 20px;\r\n  font-size: 12px;\r\n  line-height: 17px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .vote-info__tag {\r\n  padding: 2px 6px;\r\n  border-radius: 2px;\r\n  margin-right: 4px;\r\n  flex: none;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .vote-info__tag--pink {\r\n  background-color: var(--Pi1);\r\n  color: var(--Pi5);\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .vote-info__tag--blue {\r\n  background-color: var(--brand_blue_thin);\r\n  color: var(--brand_blue);\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .vote-info__tag--gray {\r\n  background-color: var(--graph_bg_regular);\r\n  color: var(--text3);\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .vote-info__text {\r\n  color: var(--Ga7_u);\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply {\r\n  position: relative;\r\n  padding: 2px 0;\r\n}\r\n\r\n@media screen and (max-width: 1681px) {\r\n  .reply-item .root-reply-container .content-warp .root-reply {\r\n    font-size: 15px;\r\n    line-height: 24px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1681px) {\r\n  .reply-item .root-reply-container .content-warp .root-reply {\r\n    font-size: 16px;\r\n    line-height: 26px;\r\n  }\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-content-container {\r\n  display: block;\r\n  overflow: hidden;\r\n  width: 100%;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-info {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  margin-top: 2px;\r\n  font-size: 13px;\r\n  color: var(--text3);\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-time {\r\n  margin-right: var(--472bae2d);\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-location {\r\n  margin-right: 20px;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-like {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: 19px;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-like .like-icon {\r\n  margin-right: 5px;\r\n  color: #9499a0;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-like .like-icon:hover,\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-like .like-icon.liked {\r\n  color: #00aeec;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-dislike {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: 19px;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-dislike .dislike-icon {\r\n  color: #9499a0;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-dislike .dislike-icon:hover,\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-dislike .dislike-icon.disliked {\r\n  color: #00aeec;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-btn {\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-btn:hover {\r\n  color: var(--brand_blue);\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-info .reply-operation-warp {\r\n  position: absolute;\r\n  right: 20px;\r\n  display: none;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-tag-list {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 6px;\r\n  font-size: 12px;\r\n  line-height: 17px;\r\n}\r\n\r\n.reply-item .root-reply-container .content-warp .root-reply .reply-tag-list .reply-tag-item {\r\n  padding: 2px 6px;\r\n  border-radius: 2px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.reply-item .root-reply-container:hover .content-warp .root-reply .reply-info .reply-operation-warp {\r\n  display: block;\r\n}\r\n\r\n.reply-item .sub-reply-container {\r\n  padding-left: 72px;\r\n}\r\n\r\n.reply-item .reply-box-container {\r\n  padding: 25px 0 10px 80px;\r\n}\r\n\r\n.reply-item .bottom-line {\r\n  margin-left: 80px;\r\n  border-bottom: 1px solid var(--graph_bg_thick);\r\n  margin-top: 14px;\r\n}\r\n\r\n.reply-item .reply-dynamic-card {\r\n  position: absolute;\r\n  z-index: 10;\r\n  top: 30px;\r\n  left: 400px;\r\n}\r\n\r\n@keyframes enterAnimation-jumpReply-7041f671 {\r\n  0% {\r\n    background-color: #dff6fb;\r\n  }\r\n\r\n  to {\r\n    background-color: #dff6fb00;\r\n  }\r\n}\r\n\r\n.reply-list {\r\n  margin-top: 14px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.reply-list .reply-end-mark {\r\n  height: 100px;\r\n}\r\n\r\n.reply-list .reply-end,\r\n.reply-list .reply-loading,\r\n.reply-list .view-all-reply {\r\n  margin-top: 20px;\r\n  font-size: 13px;\r\n  color: var(--text3);\r\n  text-align: center;\r\n}\r\n\r\n.reply-list .view-all-reply:hover {\r\n  color: var(--brand_blue);\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-list .login-prompt {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: calc(100% - 80px);\r\n  height: 50px;\r\n  margin: 16px 0 0 auto;\r\n  border-radius: 6px;\r\n  font-size: 14px;\r\n  color: var(--brand_blue);\r\n  background-color: var(--brand_blue_thin);\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-list .login-prompt:hover {\r\n  background-color: var(--Lb2);\r\n}\r\n\r\n.user-card {\r\n  position: absolute;\r\n  top: var(--555c4a14);\r\n  left: var(--8468e010);\r\n  z-index: 10;\r\n  width: 366px;\r\n  border: 0.5px solid var(--graph_weak);\r\n  border-radius: 8px;\r\n  background-color: var(--bg1);\r\n  box-shadow: 0 0 30px #0000001a;\r\n}\r\n\r\n.user-card .card-bg {\r\n  width: 100%;\r\n  height: 85px;\r\n  border-radius: 8px 8px 0 0;\r\n  overflow: hidden;\r\n  background-image: var(--71924242);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.user-card .user-card-avatar {\r\n  display: flex;\r\n  justify-content: center;\r\n  position: absolute;\r\n  width: 70px;\r\n  margin-top: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.user-card .card-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 12px 20px 16px 70px;\r\n}\r\n\r\n.user-card .card-content .card-user-info {\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--text1);\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.user-card .card-content .card-user-info .card-user-name {\r\n  max-width: 160px;\r\n  margin-right: 5px;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  color: var(--text1);\r\n  color: var(--7ba58c95);\r\n  text-decoration: none;\r\n}\r\n\r\n.user-card .card-content .card-user-info .card-user-sex {\r\n  width: 16px;\r\n  height: 16px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.user-card .card-content .card-user-info .card-user-level {\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.user-card .card-content .card-user-info .card-user-vip {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: var(--7a718880);\r\n  height: 16px;\r\n  padding: 1px 4px;\r\n  border-radius: 2px;\r\n  color: var(--612d8511);\r\n  background-color: var(--29ab308e);\r\n  cursor: default;\r\n}\r\n\r\n.user-card .card-content .card-user-info .card-user-vip .card-vip-text {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 20px;\r\n  transform-origin: center center;\r\n  transform: scale(0.5);\r\n  white-space: nowrap;\r\n  font-style: normal;\r\n}\r\n\r\n.user-card .card-content .card-social-info {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  color: var(--text1);\r\n}\r\n\r\n.user-card .card-content .card-social-info .card-user-attention,\r\n.user-card .card-content .card-social-info .card-user-fans,\r\n.user-card .card-content .card-social-info .card-user-like {\r\n  margin-right: 18px;\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n.user-card .card-content .card-social-info .card-user-attention .social-info-title,\r\n.user-card .card-content .card-social-info .card-user-fans .social-info-title,\r\n.user-card .card-content .card-social-info .card-user-like .social-info-title {\r\n  margin-left: 3px;\r\n  color: var(--text3);\r\n}\r\n\r\n.user-card .card-content .card-verify-info {\r\n  padding-top: 10px;\r\n  font-size: 12px;\r\n  color: var(--text3);\r\n}\r\n\r\n.user-card .card-content .card-verify-info .card-verify-icon {\r\n  vertical-align: text-bottom;\r\n  margin-right: 3px;\r\n}\r\n\r\n.user-card .card-content .card-sign {\r\n  padding-top: 8px;\r\n  font-size: 12px;\r\n  color: var(--text3);\r\n  word-break: break-all;\r\n}\r\n\r\n.user-card .card-content .card-btn-warp {\r\n  display: flex;\r\n  margin-top: 16px;\r\n  font-size: 14px;\r\n}\r\n\r\n.user-card .card-content .card-btn-warp .card-attention-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100px;\r\n  height: 30px;\r\n  border-radius: 4px;\r\n  margin-right: 8px;\r\n  color: var(--text_white);\r\n  background-color: var(--brand_blue);\r\n  transition: 0.4s;\r\n  cursor: pointer;\r\n}\r\n\r\n.user-card .card-content .card-btn-warp .card-attention-btn .cancel-attention-text {\r\n  display: none;\r\n  position: absolute;\r\n}\r\n\r\n.user-card .card-content .card-btn-warp .card-attention-btn.attention {\r\n  color: var(--text2);\r\n  background-color: var(--bg3);\r\n}\r\n\r\n.user-card .card-content .card-btn-warp .card-attention-btn.attention:hover .attention-text {\r\n  display: none;\r\n}\r\n\r\n.user-card .card-content .card-btn-warp .card-attention-btn.attention:hover .cancel-attention-text {\r\n  display: inline;\r\n}\r\n\r\n.user-card .card-content .card-btn-warp .card-message-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100px;\r\n  height: 30px;\r\n  border: 1px solid var(--graph_weak);\r\n  border-radius: 4px;\r\n  color: var(--text2);\r\n  cursor: pointer;\r\n}\r\n\r\n.user-card .card-content .card-btn-warp .card-message-btn:hover {\r\n  border-color: var(--brand_blue);\r\n  color: var(--brand_blue);\r\n}\r\n\r\n.dynamic-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  z-index: 10;\r\n  top: var(--7b058890);\r\n  left: 400px;\r\n  width: 710px;\r\n  height: 550px;\r\n  border-radius: 6px;\r\n  background-color: var(--bg1);\r\n  box-shadow: 0 0 25px #00000026;\r\n}\r\n\r\n.dynamic-card .card-header {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-basis: 50px;\r\n  padding: 0 10px;\r\n  border-bottom: 0.5px solid var(--line_light);\r\n}\r\n\r\n.dynamic-card .card-header .card-title {\r\n  flex: 1;\r\n  text-align: center;\r\n  font-size: 16px;\r\n  color: var(--text1);\r\n}\r\n\r\n.dynamic-card .card-header .close-card {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 6px;\r\n  color: var(--text2);\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n}\r\n\r\n.dynamic-card .card-header .close-card:hover {\r\n  background-color: var(--bg3);\r\n}\r\n\r\n.dynamic-card .card-content {\r\n  flex: 1;\r\n}\r\n\r\n.dynamic-card .card-content::-webkit-scrollbar {\r\n  width: 4px;\r\n  border-radius: 4px;\r\n  background-color: transparent;\r\n}\r\n\r\n.dynamic-card .card-content::-webkit-scrollbar-thumb {\r\n  border-radius: 4px;\r\n  background-color: var(--graph_bg_thick);\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.dynamic-card .card-content::-webkit-scrollbar-track {\r\n  border-radius: 4px;\r\n  background-color: transparent;\r\n}\r\n\r\n.dynamic-card .card-content .dynamic-card-iframe {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.reply-view-image {\r\n  position: fixed;\r\n  z-index: 999999;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(24, 25, 28, 0.85);\r\n  transform: scale(1);\r\n  user-select: none;\r\n  cursor: default;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n.reply-view-image,\r\n.reply-view-image * {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.reply-view-image .operation-btn .operation-btn-icon {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  z-index: 2;\r\n  width: 42px;\r\n  height: 42px;\r\n  border-radius: 50%;\r\n  color: var(--text_white);\r\n  background: rgba(0, 0, 0, 0.58);\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-view-image .operation-btn .operation-btn-icon:hover {\r\n  color: var(--brand_pink);\r\n}\r\n\r\n.reply-view-image .operation-btn .operation-btn-icon.close-container {\r\n  top: 16px;\r\n  right: 16px;\r\n}\r\n\r\n.reply-view-image .operation-btn .operation-btn-icon.last-image {\r\n  top: 50%;\r\n  left: 16px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.reply-view-image .operation-btn .operation-btn-icon.next-image {\r\n  top: 50%;\r\n  right: 16px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.reply-view-image .show-image-wrap {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  max-height: 100%;\r\n  padding: 0 100px;\r\n  overflow: auto;\r\n}\r\n\r\n.reply-view-image .show-image-wrap .loading-svga {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 42px;\r\n  height: 42px;\r\n}\r\n\r\n.reply-view-image .show-image-wrap.vertical {\r\n  flex-direction: column;\r\n  justify-content: var(--c186e874);\r\n}\r\n\r\n.reply-view-image .show-image-wrap .image-content {\r\n  width: calc(100vw - 200px);\r\n  max-width: var(--34114ac9);\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n.reply-view-image .preview-list {\r\n  display: flex;\r\n  align-items: center;\r\n  position: absolute;\r\n  left: 50%;\r\n  bottom: 30px;\r\n  z-index: 2;\r\n  padding: 6px 10px;\r\n  border-radius: 8px;\r\n  background: rgba(24, 25, 28, 0.8);\r\n  backdrop-filter: blur(20px);\r\n  transform: translate(-50%);\r\n}\r\n\r\n.reply-view-image .preview-list .preview-item-box {\r\n  padding: 1px;\r\n  border: 2px solid transparent;\r\n  border-radius: 8px;\r\n  transition: 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-view-image .preview-list .preview-item-box.active {\r\n  border-color: var(--brand_pink);\r\n}\r\n\r\n.reply-view-image .preview-list .preview-item-box .preview-item-wrap {\r\n  display: flex;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 6px;\r\n}\r\n\r\n.reply-view-image .preview-list .preview-item-box .preview-item-wrap.vertical {\r\n  flex-direction: column;\r\n}\r\n\r\n.reply-view-image .preview-list .preview-item-box .preview-item-wrap.extra-long {\r\n  justify-content: start;\r\n}\r\n\r\n.reply-view-image .preview-list .preview-item-box .preview-item-wrap .item-content {\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n.reply-view-image--transition-enter-active,\r\n.reply-view-image--transition-leave-active {\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.reply-view-image--transition-enter-from,\r\n.reply-view-image--transition-leave-to {\r\n  transform: scale(0.4);\r\n  opacity: 0;\r\n}\r\n\r\n.reply-warp {\r\n  position: relative;\r\n}\r\n\r\n.reply-warp .fixed-reply-box {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: var(--3e88ddc5);\r\n  z-index: 10;\r\n  width: var(--d9a0b070);\r\n}\r\n\r\n.reply-warp .fixed-reply-box .reply-box-shadow {\r\n  position: absolute;\r\n  top: -10px;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 36px;\r\n  border-radius: 50%;\r\n  background-color: #00000014;\r\n  filter: blur(10px);\r\n}\r\n\r\n.reply-warp .fixed-reply-box--transition-enter-active,\r\n.reply-warp .fixed-reply-box--transition-leave-active {\r\n  transition: opacity 0.5s ease;\r\n}\r\n\r\n.reply-warp .fixed-reply-box--transition-enter-from,\r\n.reply-warp .fixed-reply-box--transition-leave-to {\r\n  opacity: 0;\r\n}\r\n\r\n.bili-comment.browser-pc {\r\n  background-color: var(--bg1);\r\n}\r\n\r\n.bili-comment.browser-pc * {\r\n  font-family:\r\n    PingFang SC,\r\n    HarmonyOS_Regular,\r\n    Helvetica Neue,\r\n    Microsoft YaHei,\r\n    sans-serif;\r\n  font-weight: 400;\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n@media (-webkit-max-device-pixel-ratio: 1) {\r\n  .bili-comment.browser-pc * {\r\n    font-family:\r\n      -apple-system,\r\n      BlinkMacSystemFont,\r\n      Helvetica Neue,\r\n      Helvetica,\r\n      Arial,\r\n      PingFang SC,\r\n      Hiragino Sans GB,\r\n      Microsoft YaHei,\r\n      sans-serif;\r\n  }\r\n}\r\n\r\n.bili-comment.browser-pc * ul {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n}\r\n\r\n.bili-comment.browser-pc * a {\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  color: var(--text_link);\r\n  cursor: pointer;\r\n}\r\n\r\n.bili-comment.browser-pc * a:hover {\r\n  color: var(--Lb4);\r\n}\r\n\r\n.bili-comment.browser-pc * i {\r\n  font-style: normal;\r\n}\r\n\r\n.bili-comment.browser-pc * p {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.bili-comment.browser-pc .comment-container {\r\n  animation-name: enterAnimation-commentContainer;\r\n  animation-duration: 1s;\r\n  animation-fill-mode: forwards;\r\n}\r\n\r\n.reply-operation-client {\r\n  display: inline-flex;\r\n  position: relative;\r\n}\r\n\r\n.reply-operation-client .operation-icon {\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-operation-client .operation-icon:hover {\r\n  background-color: var(--graph_bg_thick);\r\n}\r\n\r\n.reply-operation-client .operation-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 0;\r\n  z-index: 10;\r\n  width: 180px;\r\n  padding: 12px 0;\r\n  border-radius: 6px;\r\n  font-size: 14px;\r\n  color: var(--text2);\r\n  background-color: var(--bg1_float);\r\n  box-shadow: 0 0 5px #0003;\r\n}\r\n\r\n.reply-operation-client .operation-list .operation-option {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 40px;\r\n  padding: 0 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-operation-client .operation-list .operation-option:hover {\r\n  background-color: var(--graph_bg_thick);\r\n}\r\n\r\n.reply-operation-client .operation-list .delete-reply-modal {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  width: auto;\r\n  padding: 10px 20px;\r\n  border: 1px solid var(--graph_bg_thick);\r\n  border-radius: 8px;\r\n  margin-bottom: 100px;\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  background-color: var(--bg1);\r\n  box-shadow: 0 0 5px #0003;\r\n  transform: translate(-50%, -100%);\r\n}\r\n\r\n.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn .comfirm-delete {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40px;\r\n  height: 20px;\r\n  border-radius: 4px;\r\n  margin-right: 20px;\r\n  color: var(--text_white);\r\n  background-color: var(--brand_blue);\r\n}\r\n\r\n.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn .comfirm-delete:hover {\r\n  background-color: var(--Lb4);\r\n}\r\n\r\n.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn .cancel-delete {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40px;\r\n  height: 20px;\r\n}\r\n\r\n.reply-operation-client .operation-list .delete-reply-modal .delete-reply-btn .cancel-delete:hover {\r\n  color: var(--brand_blue);\r\n}\r\n\r\n.select-reply-dialog-client .select-dialog-content {\r\n  text-align: left;\r\n}\r\n\r\n.select-reply-dialog-client .cancel-select-reply {\r\n  width: 130px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.select-reply-dialog-client .comfirm-select-reply {\r\n  width: 130px;\r\n}\r\n\r\n.close-reply-dialog-client .close-reply-dialog-content {\r\n  text-align: left;\r\n}\r\n\r\n.close-reply-dialog-client .cancel-close-reply {\r\n  width: 130px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.close-reply-dialog-client .comfirm-close-reply {\r\n  width: 130px;\r\n}\r\n\r\n.close-danmaku-dialog-client .close-danmaku-dialog-content {\r\n  text-align: left;\r\n}\r\n\r\n.close-danmaku-dialog-client .cancel-close-danmaku {\r\n  width: 130px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.close-danmaku-dialog-client .comfirm-close-danmaku {\r\n  width: 130px;\r\n}\r\n\r\n.blacklist-dialog-client .blacklist-dialog-content {\r\n  text-align: center;\r\n}\r\n\r\n.blacklist-dialog-client .comfirm-pull-blacklist {\r\n  margin-right: 20px;\r\n}\r\n\r\n.reply-header-client .reply-notice {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  height: 40px;\r\n  padding: 11px 14px;\r\n  margin-bottom: 10px;\r\n  font-size: 12px;\r\n  border-radius: 2px;\r\n  color: var(--text_notice);\r\n  background-color: var(--Or0);\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-header-client .reply-notice .notice-content {\r\n  flex: 1;\r\n  position: relative;\r\n  padding: 0 5px;\r\n  line-height: 18px;\r\n  vertical-align: top;\r\n  word-wrap: break-word;\r\n  word-break: break-all;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  transition: 2s;\r\n}\r\n\r\n.reply-header-client .reply-navigation {\r\n  margin: 12px 0;\r\n}\r\n\r\n.reply-header-client .reply-navigation .nav-bar {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.reply-header-client .reply-navigation .nav-bar .nav-select-reply {\r\n  font-size: 12px;\r\n  color: var(--text1);\r\n}\r\n\r\n.reply-header-client .reply-navigation .nav-bar .nav-sort {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  color: var(--text3);\r\n}\r\n\r\n.reply-header-client .reply-navigation .nav-bar .nav-sort .part-symbol {\r\n  height: 10px;\r\n  margin: 0 8px;\r\n  border-left: solid 1px;\r\n}\r\n\r\n.reply-header-client .reply-navigation .nav-bar .nav-sort .hot-sort {\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-header-client .reply-navigation .nav-bar .nav-sort .hot-sort:hover {\r\n  color: var(--brand_blue);\r\n}\r\n\r\n.reply-header-client .reply-navigation .nav-bar .nav-sort .time-sort {\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-header-client .reply-navigation .nav-bar .nav-sort .time-sort:hover {\r\n  color: var(--brand_blue);\r\n}\r\n\r\n.reply-header-client .reply-navigation .nav-bar .nav-sort.hot .hot-sort,\r\n.reply-header-client .reply-navigation .nav-bar .nav-sort.time .time-sort {\r\n  color: var(--text1);\r\n}\r\n\r\n.reply-header-client .reply-navigation .nav-operation-warp {\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n\r\n.reply-box-client {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.reply-box-client .reply-box-warp {\r\n  position: relative;\r\n  flex: 1;\r\n}\r\n\r\n.reply-box-client .reply-box-warp .reply-box-textarea {\r\n  width: 100%;\r\n  height: 32px;\r\n  padding: 5px 12px;\r\n  border: 1px solid transparent;\r\n  border-radius: 6px;\r\n  line-height: 20px;\r\n  color: var(--text1);\r\n  background-color: var(--bg2);\r\n  resize: none;\r\n  outline: none;\r\n  transition: 0.2s;\r\n}\r\n\r\n.reply-box-client .reply-box-warp .reply-box-textarea::placeholder {\r\n  color: var(--text4);\r\n}\r\n\r\n.reply-box-client .reply-box-warp .reply-box-textarea.focus,\r\n.reply-box-client .reply-box-warp .reply-box-textarea:hover {\r\n  border-color: var(--brand_pink);\r\n}\r\n\r\n.reply-box-client .box-operation-warp {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n  height: 32px;\r\n}\r\n\r\n.reply-box-client .box-operation-warp .reply-box-emoji {\r\n  position: relative;\r\n  margin-right: auto;\r\n}\r\n\r\n.reply-box-client .box-operation-warp .reply-box-emoji .box-emoji-icon {\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-box-client .box-operation-warp .reply-box-send {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 70px;\r\n  height: 100%;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-box-client .box-operation-warp .reply-box-send .send-text {\r\n  position: absolute;\r\n  z-index: 1;\r\n  color: var(--text_white);\r\n}\r\n\r\n.reply-box-client .box-operation-warp .reply-box-send:after {\r\n  content: "";\r\n  position: absolute;\r\n  opacity: 0.5;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 4px;\r\n  background-color: var(--brand_pink);\r\n}\r\n\r\n.reply-box-client .box-operation-warp .reply-box-send:hover:after {\r\n  opacity: 1;\r\n}\r\n\r\n.reply-box-client.box-active .reply-box-warp .reply-box-textarea {\r\n  height: 60px;\r\n}\r\n\r\n.reply-box-client.box-active .reply-box-send.send-active:after {\r\n  opacity: 1;\r\n}\r\n\r\n.reply-box-client.disabled .reply-box-warp .disable-mask {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 6px;\r\n  font-size: 12px;\r\n  color: var(--text3);\r\n  background-color: var(--bg3);\r\n}\r\n\r\n.reply-box-client.disabled .reply-box-warp .disable-mask .no-login-mask {\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-box-client.disabled .box-operation-warp .reply-box-send {\r\n  cursor: not-allowed;\r\n}\r\n\r\n.reply-box-client.disabled .box-operation-warp .reply-box-send .send-text {\r\n  color: var(--text3);\r\n}\r\n\r\n.reply-box-client.disabled .box-operation-warp .reply-box-send:after {\r\n  opacity: 1;\r\n  background-color: var(--bg3);\r\n}\r\n\r\n.note-prefix {\r\n  vertical-align: -3px;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0 3px;\r\n  line-height: 19px;\r\n  border-radius: 4px;\r\n  margin-right: 6px;\r\n  font-size: 12px;\r\n  color: var(--text3);\r\n  background-color: var(--bg2);\r\n}\r\n\r\n.note-prefix .note-icon {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.reply-content-client {\r\n  color: var(--text1);\r\n  overflow: hidden;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n  white-space: pre-wrap;\r\n  vertical-align: baseline;\r\n  transition: 0.2s;\r\n}\r\n\r\n.reply-content-client.root {\r\n  line-height: 25px;\r\n}\r\n\r\n.reply-content-client.need-view-more {\r\n  display: -webkit-box;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden;\r\n}\r\n\r\n.reply-content-client.sub {\r\n  line-height: 20px;\r\n}\r\n\r\n.reply-content-client .top-icon {\r\n  display: inline-flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 30px;\r\n  height: 18px;\r\n  border: 1px solid var(--brand_pink);\r\n  border-radius: 3px;\r\n  margin-right: 5px;\r\n  font-size: 12px;\r\n  color: var(--brand_pink);\r\n  vertical-align: 1px;\r\n}\r\n\r\n.reply-content-client .emoji-small {\r\n  width: 20px;\r\n  height: 20px;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n.reply-content-client .emoji-large {\r\n  width: 36px;\r\n  height: 36px;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n.reply-content-client .jump-link {\r\n  vertical-align: baseline;\r\n}\r\n\r\n.reply-content-client .icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  vertical-align: text-top;\r\n}\r\n\r\n.reply-content-client .icon.vote {\r\n  width: 16px;\r\n  height: 16px;\r\n  margin-right: 3px;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n.reply-content-client .icon.search-word {\r\n  width: 12px;\r\n  display: inline-block;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.view-more-reply {\r\n  font-size: 12px;\r\n  color: var(--text_link);\r\n  line-height: 17px;\r\n  cursor: pointer;\r\n}\r\n\r\n.view-more-reply:hover {\r\n  color: var(--Lb4);\r\n}\r\n\r\n.sub-reply-item-client {\r\n  display: -webkit-box;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-line-clamp: 2;\r\n  position: relative;\r\n  max-height: 42px;\r\n  padding: 3px 0;\r\n  font-size: 14px;\r\n  overflow: hidden;\r\n}\r\n\r\n.sub-reply-item-client .sub-user-info {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  color: var(--text2);\r\n  line-height: 20px;\r\n  vertical-align: baseline;\r\n  white-space: nowrap;\r\n}\r\n\r\n.sub-reply-item-client .sub-user-info .sub-user-name {\r\n  margin-right: 5px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.sub-reply-item-client .sub-user-info .sub-up-icon {\r\n  margin-right: 4px;\r\n  cursor: default;\r\n}\r\n\r\n.sub-reply-list-client {\r\n  border-radius: 4px;\r\n  padding: 7px 10px;\r\n  margin-top: 12px;\r\n  background-color: var(--bg2_float);\r\n}\r\n\r\n.sub-reply-list-client .view-more {\r\n  margin-top: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.sub-reply-list-client .view-more .view-more-text {\r\n  font-size: 12px;\r\n  color: var(--text_link);\r\n}\r\n\r\n.sub-reply-list-client .view-more .view-more-text:hover {\r\n  color: var(--Lb4);\r\n}\r\n\r\n.content-warp--blacklist .reply-content {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  padding: 4px;\r\n  border-radius: 4px;\r\n  color: var(--text1);\r\n  background-color: var(--bg2_float);\r\n}\r\n\r\n.content-warp--blacklist .reply-content .ban-icon {\r\n  margin-right: 4px;\r\n}\r\n\r\n.content-warp--blacklist .reply-header {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.content-warp--blacklist .reply-header .root-reply-avatar {\r\n  display: flex;\r\n  justify-content: center;\r\n  position: absolute;\r\n  left: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.content-warp--blacklist .reply-header .root-reply-avatar .blacklist-avatar {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.content-warp--blacklist .reply-header .reply-info .balcklist-name {\r\n  color: var(--text1);\r\n}\r\n\r\n.reply-item-client {\r\n  position: relative;\r\n  padding: 10px 0 14px 42px;\r\n  border-bottom: 1px solid var(--line_light);\r\n}\r\n\r\n.reply-item-client .content-warp {\r\n  flex: 1;\r\n  position: relative;\r\n}\r\n\r\n.reply-item-client .content-warp .reply-header {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.reply-item-client .content-warp .reply-header .root-reply-avatar {\r\n  display: flex;\r\n  justify-content: center;\r\n  position: absolute;\r\n  left: -42px;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-item-client .content-warp .reply-header .reply-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.reply-item-client .content-warp .reply-header .reply-info .user-info {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 13px;\r\n  color: var(--text2);\r\n}\r\n\r\n.reply-item-client .content-warp .reply-header .reply-info .user-info .user-name {\r\n  margin-right: 5px;\r\n  color: var(--be794234);\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-item-client .content-warp .reply-header .reply-info .user-info .user-level {\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-item-client .content-warp .reply-header .reply-info .user-info .up-icon {\r\n  cursor: default;\r\n}\r\n\r\n.reply-item-client .content-warp .reply-header .reply-info .reply-time {\r\n  font-size: 12px;\r\n  color: var(--text3);\r\n}\r\n\r\n.reply-item-client .content-warp .root-reply {\r\n  position: relative;\r\n  font-size: 15px;\r\n  line-height: 25px;\r\n  transition: 0.2s;\r\n}\r\n\r\n.reply-item-client .content-warp .root-reply .reply-operation-warp {\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  margin-top: 12px;\r\n  font-size: 13px;\r\n  color: var(--text3);\r\n  line-height: 16px;\r\n}\r\n\r\n.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-like {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: 19px;\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-like .like-icon {\r\n  margin-right: 5px;\r\n  color: var(--text3);\r\n}\r\n\r\n.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-like .like-icon:hover,\r\n.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-like .like-icon.liked {\r\n  color: var(--brand_pink);\r\n}\r\n\r\n.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-dislike {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: 19px;\r\n}\r\n\r\n.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-dislike .dislike-icon {\r\n  color: var(--text3);\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-dislike .dislike-icon:hover,\r\n.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-dislike .dislike-icon.disliked {\r\n  color: var(--brand_pink);\r\n}\r\n\r\n.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-icon {\r\n  color: var(--text3);\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-item-client .content-warp .root-reply .reply-operation-warp .reply-icon:hover {\r\n  color: var(--brand_pink);\r\n}\r\n\r\n.reply-item-client .content-warp .root-reply .reply-operation-warp .more-operation {\r\n  display: none;\r\n  position: absolute;\r\n  right: 20px;\r\n}\r\n\r\n.reply-item-client .content-warp .reply-item-box {\r\n  margin-top: 12px;\r\n}\r\n\r\n.reply-item-client .content-warp .reply-tag-list {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 12px;\r\n  font-size: 12px;\r\n  line-height: 14px;\r\n}\r\n\r\n.reply-item-client .content-warp .reply-tag-list .reply-tag-item {\r\n  padding: 5px 6px;\r\n  border-radius: 2px;\r\n  margin-right: 10px;\r\n  color: var(--text2);\r\n  background-color: var(--bg2_float);\r\n}\r\n\r\n.reply-item-client:hover .content-warp .root-reply .reply-operation-warp .more-operation {\r\n  display: block;\r\n}\r\n\r\n.reply-list {\r\n  position: relative;\r\n  margin-top: 14px;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.reply-list .reply-empty {\r\n  margin-top: 100px;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  color: var(--text3);\r\n}\r\n\r\n.reply-list .reply-end-mark {\r\n  height: 100px;\r\n}\r\n\r\n.reply-list .reply-end,\r\n.reply-list .reply-loading {\r\n  margin-top: 20px;\r\n  font-size: 13px;\r\n  color: var(--text3);\r\n  text-align: center;\r\n}\r\n\r\n.fixed-reply-box {\r\n  bottom: 0;\r\n  z-index: 20;\r\n  width: 100%;\r\n}\r\n\r\n.fixed-reply-box .reply-box-wrap {\r\n  background-color: var(--bg1);\r\n  padding: 14px 0;\r\n  border-top: 1px solid var(--line_light);\r\n}\r\n\r\n.fixed-reply-box .reply-box-shadow {\r\n  position: absolute;\r\n  top: -10px;\r\n  z-index: -1;\r\n  height: 36px;\r\n  border-radius: 50%;\r\n  background-color: #00000014;\r\n  filter: blur(10px);\r\n  width: calc(100% - 72px);\r\n  left: 50%;\r\n  transform: translate(-50%);\r\n}\r\n\r\n.reply-detail {\r\n  flex: 1;\r\n}\r\n\r\n.reply-detail .reply-header {\r\n  display: flex;\r\n  align-items: center;\r\n  position: sticky;\r\n  z-index: 9;\r\n  top: 0;\r\n  left: 0;\r\n  height: 46px;\r\n  border-bottom: 1px solid var(--line_light);\r\n  margin-bottom: 14px;\r\n  background-color: var(--bg1);\r\n}\r\n\r\n.reply-detail .reply-header .return-icon {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 32px;\r\n  height: 32px;\r\n  border-radius: 4px;\r\n  margin-right: 4px;\r\n  color: var(--text1);\r\n  cursor: pointer;\r\n}\r\n\r\n.reply-detail .reply-header .return-icon:hover {\r\n  background-color: var(--graph_bg_thick);\r\n}\r\n\r\n.reply-detail .reply-header .reply-title {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: var(--text1);\r\n}\r\n\r\n.dialog-reply {\r\n  flex: 1;\r\n}\r\n\r\n.dialog-reply .reply-header {\r\n  display: flex;\r\n  align-items: center;\r\n  position: sticky;\r\n  z-index: 9;\r\n  top: 0;\r\n  left: 0;\r\n  height: 46px;\r\n  border-bottom: 1px solid var(--line_light);\r\n  margin-bottom: 14px;\r\n  background-color: var(--bg1);\r\n}\r\n\r\n.dialog-reply .reply-header .return-icon {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 32px;\r\n  height: 32px;\r\n  border-radius: 4px;\r\n  margin-right: 4px;\r\n  color: var(--text1);\r\n  cursor: pointer;\r\n}\r\n\r\n.dialog-reply .reply-header .return-icon:hover {\r\n  background-color: var(--graph_bg_thick);\r\n}\r\n\r\n.dialog-reply .reply-header .reply-title {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  color: var(--text1);\r\n}\r\n\r\n.bili-comment.client {\r\n  background-color: var(--bg1);\r\n}\r\n\r\n.bili-comment.client * {\r\n  box-sizing: border-box;\r\n  font-family:\r\n    PingFang SC,\r\n    HarmonyOS_Regular,\r\n    Helvetica Neue,\r\n    Microsoft YaHei,\r\n    sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.bili-comment.client * ul {\r\n  list-style: none;\r\n}\r\n\r\n.bili-comment.client * a {\r\n  text-decoration: none;\r\n  background-color: transparent;\r\n  color: var(--text_link);\r\n  cursor: pointer;\r\n}\r\n\r\n.bili-comment.client * a:hover {\r\n  color: var(--Lb4);\r\n}\r\n\r\n.bili-comment.client * i {\r\n  font-style: normal;\r\n}\r\n';
  class GestureBack {
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
    popStateEvent(event) {
      domUtils.preventEvent(event);
      if (this.isBacking) {
        return;
      }
      this.quitGestureBackMode(true);
    }
    enterGestureBackMode() {
      log$1.success("进入手势模式");
      let pushUrl = this.config.hash;
      if (!pushUrl.startsWith("#")) {
        if (!pushUrl.startsWith("/")) {
          pushUrl = "/" + pushUrl;
        }
        pushUrl = "#" + pushUrl;
      }
      if (this.config.useUrl) {
        pushUrl =
          this.config.win.location.origin +
          this.config.win.location.pathname +
          this.config.win.location.search +
          pushUrl;
      }
      this.config.win.history.pushState({}, "", pushUrl);
      log$1.success("监听popstate事件");
      domUtils.on(this.config.win, "popstate", this.popStateEvent, {
        capture: true,
      });
    }
    async quitGestureBackMode(isUrlChange = false) {
      this.isBacking = true;
      log$1.success("退出手势模式");
      if (typeof this.config.beforeHistoryBackCallBack === "function") {
        this.config.beforeHistoryBackCallBack(isUrlChange);
      }
      let maxDate = Date.now() + 1e3 * 5;
      while (true) {
        if (Date.now() > maxDate) {
          log$1.error("未知情况，history.back()失败，无法退出手势模式");
          break;
        }
        if (this.config.win.location.hash.endsWith(this.config.hash)) {
          log$1.info("history.back()");
          this.config.win.history.back();
          await Utils.sleep(this.config.backDelayTime || 150);
        } else {
          break;
        }
      }
      log$1.success("移除popstate事件");
      domUtils.off(this.config.win, "popstate", this.popStateEvent, {
        capture: true,
      });
      this.isBacking = false;
      if (typeof this.config.afterHistoryBackCallBack === "function") {
        this.config.afterHistoryBackCallBack(isUrlChange);
      }
    }
  }
  const BilibiliVideo = {
    $data: {
      isAddBeautifyCSS: false,
      isInitCommentModule: false,
      isInitDescModule: false,
    },
    init() {
      BilibiliVideoPlayer.init();
      Panel.execMenuOnce("bili-video-cover-bottomRecommendVideo", () => {
        this.coverBottomRecommendVideo();
      });
      Panel.execMenuOnce("bili-video-cover-UpWrapper", () => {
        this.coverUpWrapper();
      });
      Panel.execMenuOnce("bili-video-cover-seasonNew", () => {
        this.coverSeasonNew();
      });
      domUtils.ready(() => {
        Panel.execMenu("bili-video-addCommentModule", () => {
          this.addCommentModule();
        });
        Panel.execMenu("bili-video-addDescModule", () => {
          this.addDescModule();
        });
      });
    },
    beautify() {
      log$1.info("美化显示");
      if (!this.$data.isAddBeautifyCSS) {
        this.$data.isAddBeautifyCSS = true;
        addStyle(
          `
				@charset "UTF-8";
				${BilibiliData.className.video} .video-list .card-box {
					--left-card-width: 33%;
					--right-child-padding: 1.333vmin;
					/* 开启了bili-video-beautify */
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp {
					width: 100%;
					border-bottom: 1px solid #b5b5b5;
					padding-left: 0;
					padding-right: 0;
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp > a {
					display: flex;
					flex-wrap: nowrap;
					gap: var(--right-child-padding);
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp > a .card {
					width: var(--left-card-width);
					height: 80px;
					flex: 0 auto;
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp > a .card .count {
					background: transparent;
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp > a .card .count .left {
					display: list-item;
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp > a .card .count .left span.item {
					display: none;
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp > a .card .count .duration {
					background: rgba(0, 0, 0, 0.4);
					border-radius: 0.6vmin;
					padding: 0px 0.5vmin;
					right: 1vmin;
					bottom: 1vmin;
				}
				${BilibiliData.className.video} .video-list .card-box .v-card-toapp > a .title {
					/*flex: 1;*/
					/*padding: var(--right-child-padding);*/
					padding-top: 0;
					margin-top: 0;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container {
					display: flex;
					flex-direction: column;
					width: calc(100% - var(--left-card-width));
					justify-content: space-between;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container > * {
					padding: var(--right-child-padding);
					padding-bottom: 0;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container .left {
					gap: 1rem;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container .left span {
					display: flex;
					align-items: safe center;
					gap: 1vmin;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container .gm-up-name,
				${BilibiliData.className.video} .video-list .card-box .gm-right-container .left {
					color: #999;
					font-size: 3vmin;
					transform-origin: left;
					display: flex;
					/*align-items: safe center;*/
					align-items: safe flex-end;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container .gm-up-name svg {
					width: 3vmin;
					height: 3vmin;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container .gm-up-name-text {
					margin-left: 1vmin;
				}
				${BilibiliData.className.video} .video-list .card-box .gm-right-container .num {
					margin-right: 4vmin;
				}
				${BilibiliData.className.video} .video-list .card-box > a.v-card {
					width: 100%;
					border-bottom: 1px solid #b5b5b5;
					padding-left: 0;
					padding-right: 0;
					display: flex;
					flex-wrap: nowrap;
				}
				${BilibiliData.className.video} .video-list .card-box > a.v-card .card {
					width: var(--left-card-width);
					height: 100%;
					flex: 0 auto;
				}
				${BilibiliData.className.video} .video-list .card-box > a.v-card .card .count {
					background: transparent;
				}
				${BilibiliData.className.video} .video-list .card-box > a.v-card .card .count span {
					display: none;
				}
				${BilibiliData.className.video} .video-list .card-box > a.v-card .card .count .duration {
					background-color: rgba(0, 0, 0, 0.3);
					border-radius: 4px;
					color: #fff;
					font-size: 12px;
					height: 16px;
					line-height: 16px;
					margin-left: auto;
					padding-left: 4px;
					padding-right: 4px;
				}
				${BilibiliData.className.video} .video-list .card-box > a.v-card .title {
					flex: 1;
					/*padding: var(--right-child-padding);*/
					padding-top: 0;
					margin-top: 0;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}

			`
        );
      }
      domUtils.waitNode(BilibiliData.className.video + " .bottom-tab .list-view .card-box", 1e4).then(($cardBox) => {
        if (!$cardBox) {
          log$1.error("$cardBox is null");
          return;
        }
        function handleVCardToApp($vCard) {
          let $originTitle = $vCard.querySelector(".title");
          let $originLeft = $vCard.querySelector(".count .left");
          let isHandled = Boolean($vCard.querySelector(".gm-right-container"));
          let vueObj = VueUtils.getVue($vCard);
          if ($originTitle && $originLeft && vueObj && !isHandled) {
            let upName = vueObj?.info?.owner?.name;
            if (upName == null) {
              log$1.error("美化显示-handleVCardToApp：获取up主名字失败");
              return;
            }
            $vCard.querySelector(".count");
            let $title = $originTitle.cloneNode(true);
            let $left = $originLeft.cloneNode(true);
            domUtils.hide($originTitle);
            let $isOpenAppWeakened = $vCard.querySelector(".open-app.weakened");
            if ($isOpenAppWeakened) {
              domUtils.hide($isOpenAppWeakened);
            }
            let $upInfo = document.createElement("div");
            $upInfo.className = "gm-up-name";
            $upInfo.innerHTML = `
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${upName}</span>
						`;
            let $rightContainer = document.createElement("div");
            let $rightBottom = document.createElement("div");
            $rightContainer.className = "gm-right-container";
            $rightBottom.className = "gm-right-bottom";
            domUtils.after($originTitle, $rightContainer);
            $rightContainer.appendChild($title);
            $rightContainer.appendChild($rightBottom);
            $rightBottom.appendChild($upInfo);
            $rightBottom.appendChild($left);
          }
        }
        function handleVCard($vCard) {
          let $originTitle = $vCard.querySelector(".title");
          let $originCount = $vCard.querySelector(".count");
          let isHandled = Boolean($vCard.querySelector(".gm-right-container"));
          let vueObj = VueUtils.getVue($vCard);
          if ($originTitle && $originCount && vueObj && !isHandled) {
            let duration = vueObj?.info?.duration;
            if (duration == null) {
              log$1.error("美化显示-handleVCard：获取视频时长失败");
              return;
            }
            let upName = vueObj?.info?.owner?.name;
            if (upName == null) {
              log$1.error("美化显示-handleVCard：获取up主名字失败");
              return;
            }
            let $cloneTitle = $originTitle.cloneNode(true);
            let $cloneCount = $originCount.cloneNode(true);
            domUtils.hide($originTitle);
            let $duration = document.createElement("div");
            $duration.className = "duration";
            $duration.innerText = BilibiliUtils.parseDuration(duration);
            $cloneCount.className = "left";
            let $upInfo = document.createElement("div");
            $originCount.appendChild($duration);
            $upInfo.className = "gm-up-name";
            $upInfo.innerHTML = `
						<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
							<path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
							</path>
						</svg>
						<span class="gm-up-name-text">${upName}</span>
						`;
            let $rightContainer = document.createElement("div");
            let $rightBottom = document.createElement("div");
            $rightContainer.className = "gm-right-container";
            $rightBottom.className = "gm-right-bottom";
            domUtils.after($originTitle, $rightContainer);
            $rightContainer.appendChild($cloneTitle);
            $rightContainer.appendChild($rightBottom);
            $rightBottom.appendChild($upInfo);
            $rightBottom.appendChild($cloneCount);
          }
        }
        let lockFunc = new utils.LockFunction(() => {
          let $vCardList = document.querySelectorAll(
            BilibiliData.className.video + " .bottom-tab .list-view .card-box .v-card-toapp"
          );
          let $vCardList_isLogon = document.querySelectorAll(
            BilibiliData.className.video + " .bottom-tab .list-view .card-box>a.v-card"
          );
          $vCardList.forEach((_$vCard_) => {
            handleVCardToApp(_$vCard_);
          });
          $vCardList_isLogon.forEach((_$vCard_) => {
            handleVCard(_$vCard_);
          });
        }, 25);
        let $videoRoot = document.querySelector(BilibiliData.className.video);
        if ($videoRoot) {
          utils.mutationObserver($videoRoot, {
            config: {
              subtree: true,
              attributes: true,
              childList: true,
            },
            callback() {
              lockFunc.run();
            },
          });
        } else {
          log$1.error("未找到视频根节点");
        }
      });
    },
    repairVideoBottomAreaHeight() {
      log$1.info("修复视频底部区域高度");
      return addStyle(
        `
		${BilibiliData.className.video},
		${BilibiliData.className.mVideo} {
			/* 修复视频区域底部的高度 */
			.natural-module .fixed-module-margin {
				margin-top: 55.13333vmin;
			}
			/* 点击播放视频后的 */
			.m-video-new:has(> div > .m-video-player) {
				margin-top: 75vmin;
			}
			/* 未播放视频状态下的 */
			.m-video-new:has(> div[style*="display:none"] > .m-video-player) {
				margin-top: unset;
			}
		}
		html.tiny-app{
			${BilibiliData.className.video},
			${BilibiliData.className.mVideo}{
				.m-video-info-new{
					margin-top: 72vmin;
				}
			}
		}
		`
      );
    },
    coverUpWrapper() {
      log$1.info(`修复up主信息区域的点击事件`);
      domUtils.on(
        document,
        "click",
        [
          BilibiliData.className.video + " .bottom-wrapper .up-wrapper",
          BilibiliData.className.mVideo + " .bottom-wrapper .up-wrapper",
        ],
        function (event) {
          let $click = event.target;
          let $bottomWrapper = $click.closest(".bottom-wrapper");
          if (!$bottomWrapper) {
            log$1.error("获取元素.bottom-wrapper失败");
            return;
          }
          let vueInstance = VueUtils.getVue($bottomWrapper);
          if (!vueInstance) {
            log$1.error("获取元素.bottom-wrapper的vue实例失败");
            return;
          }
          let mid = vueInstance?.upInfo?.card?.mid;
          if (typeof mid === "string") {
            BilibiliUtils.goToUrl(BilibiliUrl.getUserSpaceUrl(mid));
          } else {
            Qmsg.error("获取mid失败");
          }
        },
        {
          capture: true,
        }
      );
    },
    coverBottomRecommendVideo() {
      log$1.info("覆盖 相关视频 点击事件");
      domUtils.on(
        document,
        "click",
        [
          BilibiliData.className.video + " .list-view .card-box .launch-app-btn",
          BilibiliData.className.mVideo + " .list-view .card-box .launch-app-btn",
        ],
        function (event) {
          let $click = event.target;
          let vueObj = VueUtils.getVue($click);
          if (!vueObj) {
            Qmsg.error("获取相关视频的__vue__失败");
            return;
          }
          let bvid = vueObj.bvid;
          if (utils.isNull(bvid)) {
            if (vueObj.$children && vueObj.$children[0] && utils.isNotNull(vueObj.$children[0].bvid)) {
              bvid = vueObj.$children[0].bvid;
            } else {
              Qmsg.error("获取相关视频的bvid失败");
              return;
            }
          }
          log$1.info("相关视频的bvid: " + bvid);
          BilibiliUtils.goToUrl(BilibiliUrl.getVideoUrl(bvid));
          domUtils.preventEvent(event);
        },
        {
          capture: true,
        }
      );
    },
    coverSeasonNew() {
      log$1.info("覆盖 选集视频列表 点击事件");
      function ClickCallBack(event) {
        let $click = event.target;
        let vueObj = VueUtils.getVue($click);
        if (!vueObj) {
          Qmsg.error("获取选集视频的目标视频的__vue__失败");
          return;
        }
        let bvid = vueObj.bvid;
        if (utils.isNull(bvid)) {
          Qmsg.error("获取相关视频的bvid失败");
          return;
        }
        log$1.info("相关视频的bvid: " + bvid);
        BilibiliUtils.goToUrl(BilibiliUrl.getVideoUrl(bvid));
        domUtils.preventEvent(event);
      }
      domUtils.on(
        document,
        "click",
        [
          BilibiliData.className.video + " .m-video-season-new .video-card .launch-app-btn",
          BilibiliData.className.mVideo + " .m-video-season-new .video-card .launch-app-btn",
        ],
        ClickCallBack,
        {
          capture: true,
        }
      );
      domUtils.on(
        document,
        "click",
        [
          BilibiliData.className.video + " .m-video-season-panel .season-video-item .launch-app-btn",
          BilibiliData.className.mVideo + " .m-video-season-panel .season-video-item .launch-app-btn",
        ],
        ClickCallBack,
        {
          capture: true,
        }
      );
    },
    repairLinkJump() {
      log$1.info(`修复链接跳转`);
      let lockFn = new utils.LockFunction(() => {
        ["a.member-link:not([href])[data-url]", "a.jump-link:not([href])[data-url]"].forEach((selector) => {
          $$(selector).forEach(($el) => {
            $el.href = $el.getAttribute("data-url");
          });
        });
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        callback: () => {
          lockFn.run();
        },
      });
    },
    gestureReturnToCloseCommentArea() {
      log$1.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview");
      domUtils.waitNode("#app").then(($app) => {
        utils
          .waitVueByInterval(
            $app,
            () => {
              let vueObj = VueUtils.getVue($app);
              if (vueObj == null) {
                return false;
              }
              return typeof vueObj?.$router?.options?.scrollBehavior != null;
            },
            250,
            1e4
          )
          .then((result) => {
            let appVue = VueUtils.getVue($app);
            if (!appVue) {
              log$1.error("获取#app的vue属性失败");
              return;
            }
            let oldScrollBehavior = appVue.$router.options.scrollBehavior;
            appVue.$router.options.scrollBehavior = function (to, from, scrollInfo) {
              if (to["hash"] === "#/seeCommentReply") {
                log$1.info("当前操作为打开评论区，scrollBehavior返回null");
                return null;
              } else if (to["hash"] === "" && from["hash"] === "#/seeCommentReply") {
                log$1.info("当前操作为关闭评论区，scrollBehavior返回null");
                return null;
              }
              return oldScrollBehavior.call(this, ...arguments);
            };
          });
      });
      domUtils.on(document, "click", ".sub-reply-preview", function (event) {
        let $app = document.querySelector("#app");
        let appVue = VueUtils.getVue($app);
        if (!appVue) {
          log$1.error("获取#app元素失败");
          return;
        }
        let hookGestureReturnByVueRouter = BilibiliUtils.hookGestureReturnByVueRouter({
          vueObj: appVue,
          hash: "#/seeCommentReply",
          callback(isFromPopState) {
            if (!isFromPopState) {
              return false;
            }
            let $dialogCloseIcon = document.querySelector(".dialog-close-icon");
            if ($dialogCloseIcon) {
              $dialogCloseIcon.click();
            } else {
              log$1.error("评论区关闭失败，原因：元素dialog-close-icon获取失败");
            }
            return true;
          },
        });
        domUtils.waitNode(".dialog-close-icon").then(($dialogCloseIcon) => {
          domUtils.on(
            $dialogCloseIcon,
            "click",
            function () {
              hookGestureReturnByVueRouter.resumeBack(false);
            },
            {
              capture: true,
              once: true,
            }
          );
        });
      });
    },
    enterVideoFullScreen() {
      domUtils.waitNode(".mplayer-btn-widescreen", 5e3).then(($btnWideScreen) => {
        if (!$btnWideScreen) {
          log$1.error("获取全屏按钮失败");
          Qmsg.error("获取全屏按钮失败");
          return;
        }
        if ($btnWideScreen.closest(".mplayer-wide")) {
          log$1.warn("当前的全屏按钮是【退出全屏】，不点击");
          return;
        }
        log$1.info(`进入全屏`);
        $btnWideScreen.click();
      });
    },
    optimizationScroll() {
      let $mNavBar = null;
      let $mVideoPlayer = null;
      let $mVideoInfoNew = null;
      let $bottomTab = null;
      let $bottomTabVAffix = null;
      let videoPlayerMaxHeight = 0;
      let videoPlayerMaxPaddingTop = 0;
      function checkNodeIsNull(checkNode) {
        return !document.contains(checkNode);
      }
      domUtils.on(
        document,
        "scroll",
        (event) => {
          if (checkNodeIsNull($mVideoPlayer)) {
            $mVideoPlayer = document.querySelector(".m-video-player");
            if (checkNodeIsNull($mVideoPlayer)) {
              return;
            }
            if (videoPlayerMaxHeight == 0) {
              const videoPlayerRect = $mVideoPlayer.getBoundingClientRect();
              videoPlayerMaxHeight = videoPlayerRect.height;
              videoPlayerMaxPaddingTop = videoPlayerRect.top;
              log$1.info(`视频区域的最大高度为 ${videoPlayerMaxHeight}px`);
              log$1.info(`视频区域的最大top为 ${videoPlayerMaxPaddingTop}px`);
            }
          }
          if (checkNodeIsNull($mVideoInfoNew)) {
            $mVideoInfoNew = document.querySelector(".m-video-info-new");
            if (checkNodeIsNull($mVideoInfoNew)) {
              return;
            }
          }
          if (checkNodeIsNull($mNavBar)) {
            $mNavBar = document.querySelector(".m-navbar");
            if (checkNodeIsNull($mNavBar)) {
              return;
            }
          }
          if (checkNodeIsNull($bottomTab)) {
            $bottomTab = document.querySelector(".bottom-tab");
            if (checkNodeIsNull($bottomTab)) {
              return;
            }
          }
          if (checkNodeIsNull($bottomTabVAffix)) {
            $bottomTabVAffix = document.querySelector(".bottom-tab .v-affix");
            if (checkNodeIsNull($bottomTabVAffix)) {
              return;
            }
          }
          let videoInfoNewTop = $mVideoInfoNew.getBoundingClientRect().top;
          if (videoInfoNewTop >= 0) {
            if (videoInfoNewTop <= videoPlayerMaxHeight) {
              $mVideoPlayer.style.paddingTop = videoInfoNewTop + "px";
            } else {
              $mVideoPlayer.style.paddingTop = "";
            }
          } else {
            $mVideoPlayer.style.paddingTop = "0px";
          }
          let navbarHeight = domUtils.height($mNavBar);
          let bottomTabTop = $bottomTab.getBoundingClientRect().top;
          if (bottomTabTop < navbarHeight) {
            if ($bottomTabVAffix.hasAttribute("data-is-fixed"));
            else {
              $bottomTabVAffix.style.cssText = `position: fixed;left: 0px;top: ${navbarHeight}px;z-index: 10000;width: 100%;`;
              $bottomTabVAffix.setAttribute("data-is-fixed", "true");
            }
          } else {
            $bottomTabVAffix.style.cssText = "";
            $bottomTabVAffix.removeAttribute("data-is-fixed");
          }
        },
        {
          passive: true,
        }
      );
    },
    disableSwipeTab() {
      log$1.info(`禁止滑动切换tab`);
      VueUtils.waitVuePropToSet(".m-video-bottom-tab", {
        msg: "等待tab的vue属性touchstart、touchmove、touchend事件，_bindEvents函数",
        check(vueInstance) {
          return (
            vueInstance?.slider?.el instanceof HTMLElement &&
            typeof vueInstance?.slider?.events?.touchstart === "function" &&
            typeof vueInstance?.slider?.events?.touchmove === "function" &&
            typeof vueInstance?.slider?.events?.touchend === "function" &&
            typeof vueInstance?.slider?._bindEvents === "function"
          );
        },
        set(vueInstance) {
          let $bindTarget = vueInstance.slider.el;
          $bindTarget.removeEventListener("touchstart", vueInstance.slider.events.touchstart);
          $bindTarget.removeEventListener("touchmove", vueInstance.slider.events.touchmove);
          $bindTarget.removeEventListener("touchend", vueInstance.slider.events.touchend);
          vueInstance.slider._bindEvents = () => {};
          log$1.success(`成功禁用滑动，清除touchstart、touchmove、touchend事件，覆盖_bindEvents函数`);
        },
      });
    },
    addCommentModule() {
      log$1.info(`新增评论模块`);
      if (!this.$data.isInitCommentModule) {
        this.$data.isInitCommentModule = true;
        CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.Viewer);
        addStyle(MobileCommentModuleStyle);
        addStyle(
          `
				.comment-container{
					position: relative;
				}
				.comment-container .reply-header{
					position: sticky;
					top: 0;
					z-index: 999;
					left: 0;
					right: 0;
					background: #fff;
				}
				#comment-module-wrapper{
					position: fixed;
					top: 0;
					left: 0;
					z-index: 2000;
					display: none;
					width: 100vw;
					height: 100vh;
					background-color: #fff;
					overflow-x: hidden;
				}
				.close-comment-module-btn{
					position: fixed;
					right: 20px;
					bottom: 20px;
					z-index: 2001;
					display: none;
					justify-content: center;
					align-items: center;
					width: 40px;
					height: 40px;
					color: #fff;
					border-radius: 100%;
					background-color: var(--bili-color);
				}
			`
        );
        addStyle(
          `
				.comment-module-show-btn{
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 0 12px 20px 12px;
					height: 40px;
					color: #fff;
					border-radius: 4px;
					background-color: var(--bili-color);
				}
			`
        );
      }
      domUtils.waitNode(".m-video-info", 1e4).then(($videoInfo) => {
        if (!$videoInfo) {
          log$1.error(`获取视频信息元素失败`);
          return;
        }
        domUtils.remove(".comment-module-show-btn");
        domUtils.remove(".close-comment-module-btn");
        domUtils.remove("#comment-module-wrapper");
        const history_hash = "comment-module";
        let gestureBack = new GestureBack({
          hash: history_hash,
          useUrl: true,
          beforeHistoryBackCallBack(isUrlChange) {
            let $viewerClose = $(".viewer-button.viewer-close");
            if ($viewerClose) {
              $viewerClose.click();
            }
            if (isUrlChange) {
              $closeCommentModuleBtn.click();
            }
          },
        });
        let $commentModuleShowBtn = domUtils.createElement("div", {
          className: "comment-module-show-btn",
          innerHTML: `查看评论`,
        });
        let $closeCommentModuleBtn = domUtils.createElement("span", {
          className: "close-comment-module-btn",
          innerHTML: "×",
        });
        domUtils.on($commentModuleShowBtn, "click", (event) => {
          domUtils.preventEvent(event);
          domUtils.css($commentModuleWrapper, { display: "block" });
          domUtils.css($closeCommentModuleBtn, { display: "flex" });
          gestureBack.enterGestureBackMode();
        });
        domUtils.on($closeCommentModuleBtn, "click", (event) => {
          domUtils.preventEvent(event);
          domUtils.css($commentModuleWrapper, { display: "" });
          domUtils.css($closeCommentModuleBtn, { display: "" });
          gestureBack.quitGestureBackMode(false);
        });
        domUtils.append($videoInfo, $commentModuleShowBtn);
        let $commentModuleWrapper = domUtils.createElement("div", {
          id: "comment-module-wrapper",
        });
        domUtils.append(document.body, $commentModuleWrapper);
        domUtils.after($commentModuleWrapper, $closeCommentModuleBtn);
        MobileCommentModule.init($commentModuleWrapper);
      });
    },
    addDescModule() {
      log$1.info(`新增简介模块`);
      if (!this.$data.isInitDescModule) {
        this.$data.isInitDescModule = true;
        addStyle(
          `
				${BilibiliData.className.mVideo} .m-video-info .bottom-wrapper{
					flex-direction: column;
					align-items: flex-start;
					height: auto;
				}
			`
        );
        addStyle(
          `
				.video-desc-wrapper {
					color: #9499A0;
					font-size: 14px;
					width: 100%;

					.video-desc-text {
						margin: 10px 0px;
						white-space: pre-wrap;
					}
	
					.video-view-info-wrapper {
						display: flex;
						align-items: center;
						justify-content: flex-start;
						gap: 10px;
						margin: 5px 0px;
	
						.video-info-icon{
							display: flex;
							align-items: center;
							gap: 2px;
						}
						.video-info-text{
							display: flex;
							align-items: center;
							line-height: 1rem;
						}
					}
					.video-desc-controls-wrapper{
						margin: 10px 0px;
						display: flex;
						justify-content: space-around;
						align-items: center;
	
						.video-info-icon {
							display: flex;
							flex-direction: column;
							align-items: center;
							gap: 2px;
						}
					}
				}
	
			`
        );
      }
      domUtils.remove(BilibiliData.className.mVideo + "  .m-video-info .video-desc-wrapper");
      VueUtils.waitVuePropToSet(BilibiliData.className.mVideo + "  .m-video-info .bottom-wrapper", {
        check(vueInstance) {
          return typeof vueInstance?.info?.bvid === "string";
        },
        set(vueInstance, target) {
          let info = vueInstance.info;
          let upInfo = vueInstance.upInfo;
          upInfo.follower;
          upInfo.archive_count;
          let view = info.stat.view;
          let danmakuCount = info.stat.danmaku;
          info.ctime;
          let bvid = info.bvid;
          let desc = info.desc;
          let like = info.stat.like;
          let coin = info.stat.coin;
          let favorite = info.stat.favorite;
          let share = info.stat.share;
          let $descWrapper = domUtils.createElement("div", {
            className: "video-desc-wrapper",
            innerHTML: `
							<div class="video-view-info-wrapper">
								<div class="video-info-icon">
									<svg
										class="stats-item__icon"
										style="width: 16px; height: 16px"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										viewBox="0 0 16 16"
										width="16"
										height="16">
										<path
											d="M8 3.3320333333333334C6.321186666666667 3.3320333333333334 4.855333333333333 3.4174399999999996 3.820593333333333 3.5013466666666666C3.1014733333333333 3.5596599999999996 2.5440733333333334 4.109013333333333 2.48 4.821693333333333C2.4040466666666664 5.666533333333334 2.333333333333333 6.780666666666666 2.333333333333333 7.998666666666666C2.333333333333333 9.216733333333334 2.4040466666666664 10.330866666666665 2.48 11.175699999999999C2.5440733333333334 11.888366666666666 3.1014733333333333 12.437733333333334 3.820593333333333 12.496066666666666C4.855333333333333 12.579933333333333 6.321186666666667 12.665333333333333 8 12.665333333333333C9.678999999999998 12.665333333333333 11.144933333333334 12.579933333333333 12.179733333333333 12.496033333333333C12.898733333333332 12.4377 13.456 11.888533333333331 13.520066666666667 11.176033333333333C13.595999999999998 10.331533333333333 13.666666666666666 9.217633333333332 13.666666666666666 7.998666666666666C13.666666666666666 6.779766666666667 13.595999999999998 5.665846666666667 13.520066666666667 4.821366666666666C13.456 4.108866666666666 12.898733333333332 3.55968 12.179733333333333 3.5013666666666663C11.144933333333334 3.417453333333333 9.678999999999998 3.3320333333333334 8 3.3320333333333334zM3.7397666666666667 2.50462C4.794879999999999 2.41906 6.288386666666666 2.3320333333333334 8 2.3320333333333334C9.7118 2.3320333333333334 11.2054 2.4190733333333334 12.260533333333331 2.5046399999999998C13.458733333333331 2.6018133333333333 14.407866666666665 3.5285199999999994 14.516066666666667 4.73182C14.593933333333332 5.597933333333334 14.666666666666666 6.7427 14.666666666666666 7.998666666666666C14.666666666666666 9.2547 14.593933333333332 10.399466666666665 14.516066666666667 11.2656C14.407866666666665 12.468866666666665 13.458733333333331 13.395566666666667 12.260533333333331 13.492766666666665C11.2054 13.578333333333333 9.7118 13.665333333333333 8 13.665333333333333C6.288386666666666 13.665333333333333 4.794879999999999 13.578333333333333 3.7397666666666667 13.492799999999999C2.541373333333333 13.395599999999998 1.5922066666666668 12.468633333333333 1.4840200000000001 11.265266666666665C1.4061199999999998 10.3988 1.3333333333333333 9.253866666666667 1.3333333333333333 7.998666666666666C1.3333333333333333 6.743533333333333 1.4061199999999998 5.598579999999999 1.4840200000000001 4.732153333333333C1.5922066666666668 3.5287466666666667 2.541373333333333 2.601793333333333 3.7397666666666667 2.50462z"
											fill="currentColor"></path>
										<path
											d="M9.8092 7.3125C10.338433333333333 7.618066666666666 10.338433333333333 8.382 9.809166666666666 8.687533333333333L7.690799999999999 9.910599999999999C7.161566666666666 10.216133333333332 6.5 9.8342 6.500006666666666 9.223066666666666L6.500006666666666 6.776999999999999C6.500006666666666 6.165873333333334 7.161566666666666 5.783913333333333 7.690799999999999 6.089479999999999L9.8092 7.3125z"
											fill="currentColor"></path>
									</svg>
									<span class="video-info-text" data-value="${view}">${BilibiliUtils.parseCount(view)}</span>
								</div>
								<div class="video-info-icon">
									<svg
										class="stats-item__icon"
										style="width: 16px; height: 16px"
										xmlns="http://www.w3.org/2000/svg"
										xmlns:xlink="http://www.w3.org/1999/xlink"
										viewBox="0 0 16 16"
										width="16"
										height="16">
										<path
											d="M8 3.3320333333333334C6.321186666666667 3.3320333333333334 4.855333333333333 3.4174399999999996 3.820593333333333 3.5013466666666666C3.1014733333333333 3.5596599999999996 2.5440733333333334 4.109013333333333 2.48 4.821693333333333C2.4040466666666664 5.666533333333334 2.333333333333333 6.780666666666666 2.333333333333333 7.998666666666666C2.333333333333333 9.216733333333334 2.4040466666666664 10.330866666666665 2.48 11.175699999999999C2.5440733333333334 11.888366666666666 3.1014733333333333 12.437733333333334 3.820593333333333 12.496066666666666C4.855333333333333 12.579933333333333 6.321186666666667 12.665333333333333 8 12.665333333333333C9.678999999999998 12.665333333333333 11.144933333333334 12.579933333333333 12.179733333333333 12.496033333333333C12.898733333333332 12.4377 13.456 11.888533333333331 13.520066666666667 11.176033333333333C13.595999999999998 10.331533333333333 13.666666666666666 9.217633333333332 13.666666666666666 7.998666666666666C13.666666666666666 6.779766666666667 13.595999999999998 5.665846666666667 13.520066666666667 4.821366666666666C13.456 4.108866666666666 12.898733333333332 3.55968 12.179733333333333 3.5013666666666663C11.144933333333334 3.417453333333333 9.678999999999998 3.3320333333333334 8 3.3320333333333334zM3.7397666666666667 2.50462C4.794879999999999 2.41906 6.288386666666666 2.3320333333333334 8 2.3320333333333334C9.7118 2.3320333333333334 11.2054 2.4190733333333334 12.260533333333331 2.5046399999999998C13.458733333333331 2.6018133333333333 14.407866666666665 3.5285199999999994 14.516066666666667 4.73182C14.593933333333332 5.597933333333334 14.666666666666666 6.7427 14.666666666666666 7.998666666666666C14.666666666666666 9.2547 14.593933333333332 10.399466666666665 14.516066666666667 11.2656C14.407866666666665 12.468866666666665 13.458733333333331 13.395566666666667 12.260533333333331 13.492766666666665C11.2054 13.578333333333333 9.7118 13.665333333333333 8 13.665333333333333C6.288386666666666 13.665333333333333 4.794879999999999 13.578333333333333 3.7397666666666667 13.492799999999999C2.541373333333333 13.395599999999998 1.5922066666666668 12.468633333333333 1.4840200000000001 11.265266666666665C1.4061199999999998 10.3988 1.3333333333333333 9.253866666666667 1.3333333333333333 7.998666666666666C1.3333333333333333 6.743533333333333 1.4061199999999998 5.598579999999999 1.4840200000000001 4.732153333333333C1.5922066666666668 3.5287466666666667 2.541373333333333 2.601793333333333 3.7397666666666667 2.50462z"
											fill="currentColor"></path>
										<path
											d="M10.583333333333332 7.166666666666666L6.583333333333333 7.166666666666666C6.307193333333332 7.166666666666666 6.083333333333333 6.942799999999999 6.083333333333333 6.666666666666666C6.083333333333333 6.390526666666666 6.307193333333332 6.166666666666666 6.583333333333333 6.166666666666666L10.583333333333332 6.166666666666666C10.859466666666666 6.166666666666666 11.083333333333332 6.390526666666666 11.083333333333332 6.666666666666666C11.083333333333332 6.942799999999999 10.859466666666666 7.166666666666666 10.583333333333332 7.166666666666666z"
											fill="currentColor"></path>
										<path
											d="M11.583333333333332 9.833333333333332L7.583333333333333 9.833333333333332C7.3072 9.833333333333332 7.083333333333333 9.609466666666666 7.083333333333333 9.333333333333332C7.083333333333333 9.0572 7.3072 8.833333333333332 7.583333333333333 8.833333333333332L11.583333333333332 8.833333333333332C11.859466666666666 8.833333333333332 12.083333333333332 9.0572 12.083333333333332 9.333333333333332C12.083333333333332 9.609466666666666 11.859466666666666 9.833333333333332 11.583333333333332 9.833333333333332z"
											fill="currentColor"></path>
										<path
											d="M5.25 6.666666666666666C5.25 6.942799999999999 5.02614 7.166666666666666 4.75 7.166666666666666L4.416666666666666 7.166666666666666C4.140526666666666 7.166666666666666 3.9166666666666665 6.942799999999999 3.9166666666666665 6.666666666666666C3.9166666666666665 6.390526666666666 4.140526666666666 6.166666666666666 4.416666666666666 6.166666666666666L4.75 6.166666666666666C5.02614 6.166666666666666 5.25 6.390526666666666 5.25 6.666666666666666z"
											fill="currentColor"></path>
										<path
											d="M6.25 9.333333333333332C6.25 9.609466666666666 6.02614 9.833333333333332 5.75 9.833333333333332L5.416666666666666 9.833333333333332C5.140526666666666 9.833333333333332 4.916666666666666 9.609466666666666 4.916666666666666 9.333333333333332C4.916666666666666 9.0572 5.140526666666666 8.833333333333332 5.416666666666666 8.833333333333332L5.75 8.833333333333332C6.02614 8.833333333333332 6.25 9.0572 6.25 9.333333333333332z"
											fill="currentColor"></path>
									</svg>
									<span class="video-info-text" data-value="${danmakuCount}">${BilibiliUtils.parseCount(danmakuCount)}</span>
								</div>
								<span class="video-info-text">${utils.formatTime(info.ctime * 1e3, "yyyy年MM月dd日 HH:mm:ss")}</span>
							</div>
							<div class="video-bvid">${bvid}</div>
							<div class="video-desc-text">${desc}</div>
							<div class="video-desc-controls-wrapper">
								<div class="video-info-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 36 36"
										xmlns="http://www.w3.org/2000/svg"
										class="video-like-icon video-toolbar-item-icon">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M9.77234 30.8573V11.7471H7.54573C5.50932 11.7471 3.85742 13.3931 3.85742 15.425V27.1794C3.85742 29.2112 5.50932 30.8573 7.54573 30.8573H9.77234ZM11.9902 30.8573V11.7054C14.9897 10.627 16.6942 7.8853 17.1055 3.33591C17.2666 1.55463 18.9633 0.814421 20.5803 1.59505C22.1847 2.36964 23.243 4.32583 23.243 6.93947C23.243 8.50265 23.0478 10.1054 22.6582 11.7471H29.7324C31.7739 11.7471 33.4289 13.402 33.4289 15.4435C33.4289 15.7416 33.3928 16.0386 33.3215 16.328L30.9883 25.7957C30.2558 28.7683 27.5894 30.8573 24.528 30.8573H11.9911H11.9902Z"
											fill="currentColor"></path>
									</svg>
									<span data-value="${like}">${BilibiliUtils.parseCount(like)}</span>
								</div>
								<div class="video-info-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 28 28"
										xmlns="http://www.w3.org/2000/svg"
										class="video-coin-icon video-toolbar-item-icon">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M14.045 25.5454C7.69377 25.5454 2.54504 20.3967 2.54504 14.0454C2.54504 7.69413 7.69377 2.54541 14.045 2.54541C20.3963 2.54541 25.545 7.69413 25.545 14.0454C25.545 17.0954 24.3334 20.0205 22.1768 22.1771C20.0201 24.3338 17.095 25.5454 14.045 25.5454ZM9.66202 6.81624H18.2761C18.825 6.81624 19.27 7.22183 19.27 7.72216C19.27 8.22248 18.825 8.62807 18.2761 8.62807H14.95V10.2903C17.989 10.4444 20.3766 12.9487 20.3855 15.9916V17.1995C20.3854 17.6997 19.9799 18.1052 19.4796 18.1052C18.9793 18.1052 18.5738 17.6997 18.5737 17.1995V15.9916C18.5667 13.9478 16.9882 12.2535 14.95 12.1022V20.5574C14.95 21.0577 14.5444 21.4633 14.0441 21.4633C13.5437 21.4633 13.1382 21.0577 13.1382 20.5574V12.1022C11.1 12.2535 9.52148 13.9478 9.51448 15.9916V17.1995C9.5144 17.6997 9.10883 18.1052 8.60856 18.1052C8.1083 18.1052 7.70273 17.6997 7.70265 17.1995V15.9916C7.71158 12.9487 10.0992 10.4444 13.1382 10.2903V8.62807H9.66202C9.11309 8.62807 8.66809 8.22248 8.66809 7.72216C8.66809 7.22183 9.11309 6.81624 9.66202 6.81624Z"
											fill="currentColor"></path>
									</svg>
									<span data-value="${coin}">${BilibiliUtils.parseCount(coin)}</span>
								</div>
								<div class="video-info-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 28 28"
										xmlns="http://www.w3.org/2000/svg"
										class="video-fav-icon video-toolbar-item-icon">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M19.8071 9.26152C18.7438 9.09915 17.7624 8.36846 17.3534 7.39421L15.4723 3.4972C14.8998 2.1982 13.1004 2.1982 12.4461 3.4972L10.6468 7.39421C10.1561 8.36846 9.25639 9.09915 8.19315 9.26152L3.94016 9.91102C2.63155 10.0734 2.05904 11.6972 3.04049 12.6714L6.23023 15.9189C6.96632 16.6496 7.29348 17.705 7.1299 18.7605L6.39381 23.307C6.14844 24.6872 7.62063 25.6614 8.84745 25.0119L12.4461 23.0634C13.4276 22.4951 14.6544 22.4951 15.6359 23.0634L19.2345 25.0119C20.4614 25.6614 21.8518 24.6872 21.6882 23.307L20.8703 18.7605C20.7051 17.705 21.0339 16.6496 21.77 15.9189L24.9597 12.6714C25.9412 11.6972 25.3687 10.0734 24.06 9.91102L19.8071 9.26152Z"
											fill="currentColor"></path>
									</svg>
									<span data-value="${favorite}">${BilibiliUtils.parseCount(favorite)}</span>
								</div>
								<div class="video-info-icon">
									<svg
										width="24"
										height="24"
										viewBox="0 0 28 28"
										xmlns="http://www.w3.org/2000/svg"
										class="video-share-icon video-toolbar-item-icon">
										<path
											d="M12.6058 10.3326V5.44359C12.6058 4.64632 13.2718 4 14.0934 4C14.4423 4 14.78 4.11895 15.0476 4.33606L25.3847 12.7221C26.112 13.3121 26.2087 14.3626 25.6007 15.0684C25.5352 15.1443 25.463 15.2144 25.3847 15.2779L15.0476 23.6639C14.4173 24.1753 13.4791 24.094 12.9521 23.4823C12.7283 23.2226 12.6058 22.8949 12.6058 22.5564V18.053C7.59502 18.053 5.37116 19.9116 2.57197 23.5251C2.47607 23.6489 2.00031 23.7769 2.00031 23.2122C2.00031 16.2165 3.90102 10.3326 12.6058 10.3326Z"
											fill="currentColor"></path>
									</svg>
									<span data-value="${share}">${BilibiliUtils.parseCount(share)}</span>
								</div>
							</div>
						`,
          });
          target.appendChild($descWrapper);
        },
      });
    },
  };
  const artPlayerCSS = ".artplayer-container {\r\n  width: 100vw;\r\n  height: 35vh;\r\n}\r\n";
  const BilibiliOpenApp = {
    getUrl($ele) {
      if ($ele == null) {
        return;
      }
      return $ele.getAttribute("universallink");
    },
    jumpToUrl(event) {
      let $click = event.target;
      let $biliOpenApp = $click.querySelector("bili-open-app") || $click.querySelector("m-open-app");
      if ($biliOpenApp) {
        let url = BilibiliOpenApp.getUrl($biliOpenApp);
        if (url) {
          BilibiliUtils.goToUrl(url);
        } else {
          Qmsg.error("获取bili-open-app的Url失败");
          log$1.error("获取bili-open-app的Url失败");
        }
      } else {
        Qmsg.error("未获取到<bili-open-app>元素");
        log$1.error("未获取到<bili-open-app>元素");
      }
    },
  };
  const BilibiliLogUtils = {
    filteringSensitiveSearchParamData(data2) {
      const sensitiveData = utils.assign({}, data2, true);
      Reflect.deleteProperty(sensitiveData, "access_key");
      Reflect.deleteProperty(sensitiveData, "access_token");
      return sensitiveData;
    },
    failToast(data2) {
      log$1.error(data2);
      alert(JSON.stringify(data2, null, 4));
    },
  };
  const BilibiliBangumiApi = {
    async getPlayUrl(option) {
      let searchParamsData = {
        avid: "",
        cid: "",
        ep_id: "",
        qn: 127,
        fnver: 0,
        fnval: 16 | 1024 | 2048,

        fourk: 1,
      };
      searchParamsData = utils.assign(searchParamsData, option);
      let serverHostList = BilibiliApiProxy.getBangumiProxyHost();
      log$1.info(`番剧播放地址请求数据`);
      let failReponseJSON = [];
      let result = void 0;
      const urlPath = "/pgc/player/web/playurl";
      log$1.info(`请求路径：${urlPath}`);
      for (let index = 0; index < serverHostList.length; index++) {
        const serverHostInfo = serverHostList[index];
        const serverHost = serverHostInfo.host;
        const proxyServerSearchParamsData = {};
        if (serverHost !== BilibiliApiConfig.web_host) {
          utils.assign(
            proxyServerSearchParamsData,
            BilibiliApiProxy.getBangumiProxySearchParam({
              area: serverHostInfo.area,
            }),
            true
          );
          log$1.info(`代理服务器数据: ${JSON.stringify(serverHostInfo)}`);
          log$1.info(
            `代理服务器请求参数：${JSON.stringify(
              BilibiliLogUtils.filteringSensitiveSearchParamData(proxyServerSearchParamsData)
            )}`
          );
        }
        let url = `https://${serverHost}${urlPath}?${utils.toSearchParamsStr(
          searchParamsData
        )}&${utils.toSearchParamsStr(proxyServerSearchParamsData)}`;
        let getResponse = await httpx.get(url, {
          responseType: "json",
          fetch: false,
          allowInterceptConfig: false,
          headers: {
            Referer: "https://www.bilibili.com/",
          },
        });
        if (!getResponse.status) {
          log$1.error(`代理服务器：${serverHost} 请求失败`);
          continue;
        }
        let responseData = utils.toJSON(getResponse.data.responseText);
        responseData.result;
        if (
          !BilibiliApiResponseCheck.isWebApiSuccess(responseData) ||
          BilibiliApiResponseCheck.isAreaLimit(responseData)
        ) {
          log$1.error(`请求失败，当前代理服务器：${serverHost} ${JSON.stringify(responseData)}`);
          failReponseJSON.push(responseData);
          continue;
        }
        result = responseData.result;
        break;
      }
      if (result == null) {
        BilibiliLogUtils.failToast(failReponseJSON);
      }
      return result;
    },
    async getPlayUrlHTML5(option) {
      let searchParamsData = {
        avid: "",
        cid: "",
        ep_id: "",
        bsource: "",
      };
      searchParamsData = utils.assign(searchParamsData, option);
      log$1.info(`（原版api）番剧播放地址请求数据`);
      const urlPath = "/pgc/player/web/playurl/html5";
      let url = `https://${BilibiliApiConfig.web_host}${urlPath}?${utils.toSearchParamsStr(searchParamsData)}`;
      let getResponse = await httpx.get(url, {
        responseType: "json",
        fetch: true,
        headers: {
          Host: "www.bilibili.com",
          Referer: "https://www.bilibili.com",
        },
      });
      if (!getResponse.status) {
        return;
      }
      let responseData = utils.toJSON(getResponse.data.responseText);
      if (!BilibiliApiResponseCheck.isWebApiSuccess(responseData)) {
        BilibiliLogUtils.failToast(responseData);
        return;
      }
      let responseResult = responseData.result;
      return responseResult;
    },
  };
  const TAG = "[artplayer-plugin-airborneHelper]：";
  const AirborneHelperEvent = {
    $data: {
      tipJumpToastTimeoutId: void 0,
      tipJumpToastInfo: void 0,
      successJumpToastInfo: void 0,
    },
    $event: {
      "video:timeupdate": () => {
        if (AirborneHelperEvent.$data.tipJumpToastTimeoutId != null) {
          return;
        }
        if (!AirborneHelper.$data.art.playing) {
          return;
        }
        const beforeToastTime = 5;
        let currentTime = AirborneHelper.$data.art.currentTime;
        let findIndex = AirborneHelper.$data.option.clip_info_list.findIndex((item) => {
          let jumpTime = item.start;
          if (jumpTime === 0) {
            return currentTime <= 1;
          } else {
            return currentTime >= jumpTime - beforeToastTime && currentTime < jumpTime;
          }
        });
        if (findIndex !== -1) {
          let toastCloseCallBack = function () {
            clearTimeout(AirborneHelperEvent.$data.tipJumpToastTimeoutId);
            AirborneHelperEvent.$data.tipJumpToastTimeoutId = void 0;
            AirborneHelperEvent.$data.tipJumpToastInfo?.close();
            AirborneHelperEvent.$data.tipJumpToastInfo = void 0;
            AirborneHelper.$data.option.clip_info_list.splice(findIndex, 1);
          };
          let findValue = AirborneHelper.$data.option.clip_info_list[findIndex];
          let plugin_toast = AirborneHelper.$data.art.plugins[ArtPlayer_PLUGIN_TOAST_KEY];
          let timeout = (findValue.start - currentTime) * 1e3;
          AirborneHelperEvent.$data.tipJumpToastTimeoutId = setTimeout(() => {
            AirborneHelper.$data.art.currentTime = findValue.end;
            AirborneHelperEvent.$data.tipJumpToastTimeoutId = void 0;
            if (AirborneHelperEvent.$data.successJumpToastInfo) {
              AirborneHelperEvent.$data.successJumpToastInfo.close();
              AirborneHelperEvent.$data.successJumpToastInfo = void 0;
            }
            AirborneHelperEvent.$data.successJumpToastInfo = plugin_toast.toast({
              text: "空降成功~o(*≧▽≦)ツ┏━┓",
              closeCallback() {
                AirborneHelperEvent.$data.successJumpToastInfo = void 0;
              },
            });
          }, timeout);
          if (AirborneHelperEvent.$data.tipJumpToastInfo) {
            AirborneHelperEvent.$data.tipJumpToastInfo.close();
            AirborneHelperEvent.$data.tipJumpToastInfo = void 0;
          }
          AirborneHelperEvent.$data.tipJumpToastInfo = plugin_toast.toast({
            text: typeof findValue.toastText === "string" ? findValue.toastText : "站稳扶好，准备起飞~",
            timeout: timeout < 2e3 ? 2e3 : timeout,
            showCloseBtn: false,
            jumpText: typeof findValue.toastText === "string" ? "不跳过" : "坠机",
            jumpClickCallback: () => {
              toastCloseCallBack();
            },
          });
          setTimeout(
            () => {
              if (AirborneHelperEvent.$data.tipJumpToastInfo) {
                AirborneHelperEvent.$data.tipJumpToastInfo.close();
                AirborneHelperEvent.$data.tipJumpToastInfo = void 0;
              }
            },
            (beforeToastTime + 3) * 1e3
          );
        }
      },
    },
    bind() {
      Object.keys(this.$event).forEach((eventName) => {
        AirborneHelper.$data.art.on(eventName, this.$event[eventName]);
      });
    },
    unbind() {
      Object.keys(this.$event).forEach((eventName) => {
        AirborneHelper.$data.art.off(eventName, this.$event[eventName]);
      });
      clearTimeout(AirborneHelperEvent.$data.tipJumpToastTimeoutId);
      AirborneHelperEvent.$data.tipJumpToastTimeoutId = void 0;
      if (AirborneHelperEvent.$data.successJumpToastInfo) {
        AirborneHelperEvent.$data.successJumpToastInfo.close();
        AirborneHelperEvent.$data.successJumpToastInfo = void 0;
      }
      if (AirborneHelperEvent.$data.tipJumpToastInfo) {
        AirborneHelperEvent.$data.tipJumpToastInfo.close();
        AirborneHelperEvent.$data.tipJumpToastInfo = void 0;
      }
    },
  };
  const AirborneHelper = {
    $key: {
      plugin_KEY: "plugin-airborne-helper",
    },
    $data: {
      art: null,
      option: null,
    },
    init(art, option) {
      this.$data.art = art;
      this.update(option);
    },
    update(option) {
      this.$data.option = option;
      console.log(TAG + "更新配置", option);
      AirborneHelperEvent.unbind();
      if (option.clip_info_list.length) {
        AirborneHelperEvent.bind();
      }
    },
  };
  const artplayerPluginAirborneHelper = (option) => {
    return (art) => {
      AirborneHelper.init(art, option);
      return {
        name: AirborneHelper.$key.plugin_KEY,
        update(option2) {
          AirborneHelper.update(option2);
        },
      };
    };
  };
  const ArtPlayer_PLUGIN_AIRBORNE_HELPER_KEY = AirborneHelper.$key.plugin_KEY;
  const TAG_FLV = "[flvjs]：";
  const generateBangumiVideoSelectSetting = (option) => {
    return option.epList.map((item) => {
      return {
        isDefault: item.ep_id === option.ep_id && item.aid === option.aid && item.cid === option.cid,
        title: GenerateArtPlayerEpTitle(item.long_title, item.title),
        aid: item.aid,
        bvid: item.bvid,
        cid: item.cid,
        ep_id: item.ep_id,
        onSelect(selectItem, index) {
          BlibiliBangumiPlayer.updateArtPlayerVideoInfo(item, option.epList);
        },
      };
    });
  };
  const BilibiliBangumiArtPlayer = {
    $data: {
      art: null,
      flv: null,
      currentOption: null,
      from: "bangumi",
    },
    resetEnv(isInit) {
      if (isInit) {
        Reflect.set(this.$data, "art", null);
        Reflect.set(this.$data, "flv", null);
      }
      Reflect.set(this.$data, "currentOption", null);
    },
    flvPlayer() {
      if (this.$data.currentOption == null) {
        console.error(TAG_FLV + "获取当前配置为空");
        return;
      }
      let flvInfoList = this.$data.currentOption.flvInfo;
      if (this.$data.flv != null || flvInfoList == null) {
        this.$data.flv?.detachMediaElement();
        this.$data.flv?.destroy();
      }
      let currentOption = this.$data.currentOption;
      console.log(TAG_FLV + "加载视频", flvInfoList);
      if (flvInfoList.length > 1) {
        this.$data.flv = flvjs.createPlayer(
          {
            type: "flv",
            filesize: currentOption.flvTotalSize,
            duration: currentOption.flvTotalDuration,
            segments: flvInfoList.map((item) => {
              return {
                url: item.url,
                duration: item.duration,
                filesize: item.size,
              };
            }),
          },
          {
            stashInitialSize: 1024 * 100,
          }
        );
      } else {
        this.$data.flv = flvjs.createPlayer(
          {
            type: "flv",
            url: flvInfoList[0].url,
          },
          {
            stashInitialSize: 1024 * 100,
          }
        );
      }
      this.$data.flv.attachMediaElement(this.$data.art.video);
      this.$data.flv.load();
    },
    async init(option) {
      this.resetEnv(true);
      this.$data.currentOption = option;
      const localArtDanmakuOption_KEY = "artplayer-bangumi-danmaku-option";
      const artPlayerDanmakuOptionHelper = new ArtPlayerDanmakuOptionHelper(localArtDanmakuOption_KEY);
      const localArtDanmakuOption = artPlayerDanmakuOptionHelper.getLocalArtDanmakuOption();
      const artOption = {
        ...ArtPlayerCommonOption(),
        container: option.container,
        settings: [],
        plugins: [
          artplayerPluginToast(),
          artplayPluginQuality({
            from: BilibiliBangumiArtPlayer.$data.from,
            qualityList: option.quality,
          }),
        ],
      };
      if (option.isFlv) {
        if (Array.isArray(artOption.quality)) {
          artOption.quality.length = 0;
        } else {
          artOption.quality = [];
        }
        artOption.type = "flv";
        if (option.flvInfo.length === 0) {
          BilibiliLogUtils.failToast("视频播放地址为空，无法播放！");
          return;
        }
        artOption.url = option.flvInfo[0].url;
        artOption.customType = {
          flv: (video, url, art) => {
            if (!flvjs.isSupported()) {
              art.notice.show = "Unsupported playback format: flv";
              return;
            }
            this.flvPlayer();
          },
        };
      } else {
        artOption.type = "mp4";
      }
      if (Panel.getValue("artplayer-plugin-bangumi-danmaku-enable")) {
        artOption.plugins.push(
          artplayerPluginDanmuku({
            ...ArtPlayerDanmakuCommonOption(),
            danmuku: option.danmukuUrl,

            speed: localArtDanmakuOption.speed,
            margin: localArtDanmakuOption["margin"],
            opacity: localArtDanmakuOption["opacity"],
            modes: localArtDanmakuOption["modes"],
            fontSize: localArtDanmakuOption["fontSize"],
            antiOverlap: localArtDanmakuOption["antiOverlap"],
            synchronousPlayback: localArtDanmakuOption["synchronousPlayback"],
            visible: localArtDanmakuOption["visible"],
            beforeEmit(danmu) {
              return new Promise((resolve) => {
                console.log(danmu);
                setTimeout(() => {
                  resolve(true);
                }, 1e3);
              });
            },
          })
        );
      }
      if (Panel.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")) {
        artOption.plugins.push(
          artplayerPluginM4SAudioSupport({
            from: BilibiliBangumiArtPlayer.$data.from,
            audioList: option.audioList || [],
          })
        );
      }
      if (Panel.getValue("artplayer-plugin-bangumi-epChoose-enable")) {
        artOption.plugins.push(
          artplayerPluginEpChoose({
            EP_LIST: generateBangumiVideoSelectSetting(option),
            automaticBroadcast: true,
          })
        );
      }
      if (Panel.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")) {
        artOption.plugins.push(
          artplayerPluginBilibiliCCSubTitle({
            from: BilibiliBangumiArtPlayer.$data.from,
            cid: option.cid,
            aid: option.aid,
            bvid: option.bvid,
            ep_id: option.ep_id,
          })
        );
      }
      if (Panel.getValue("artplayer-plugin-bangumi-toptoolbar-enable")) {
        artOption.plugins.push(
          artplayerPluginTopToolBar({
            onlineInfoParams: {
              aid: option.aid,
              cid: option.cid,
              bvid: option.bvid,
            },
            title: option.videoTitle,
            showWrap: true,
            showTitle: true,
            showOnlineTotal: true,
          })
        );
      }
      if (Panel.getValue("artplayer-plugin-bangumi-airborneHelper-enable")) {
        artOption.plugins.push(
          artplayerPluginAirborneHelper({
            clip_info_list: option.clip_info_list,
          })
        );
      }
      if (Panel.getValue("artplayer-plugin-bangumi-statistics-enable")) {
        artOption.plugins.push(
          artplayerPluginVideoStatistics({
            data: [],
          })
        );
      }
      this.$data.art = new Artplayer(artOption);
      artPlayerDanmakuOptionHelper.onConfigChange(this.$data.art);
      return this.$data.art;
    },
    async update(art, option) {
      this.resetEnv(false);
      this.$data.currentOption = option;
      log$1.info(`更新新的播放信息`, option);
      art.pause();
      log$1.info(`暂停视频`);
      art.currentTime = 0;
      log$1.info(`重置播放进度`);
      this.updatePluginInfo(art, option);
      art.play();
      log$1.info("播放");
    },
    updatePluginInfo(art, option) {
      let plugin_quality = art.plugins[ArtPlayer_PLUGIN_QUALITY_KEY];
      plugin_quality.update({
        from: BilibiliBangumiArtPlayer.$data.from,
        qualityList: option.quality,
      });
      log$1.info(`更新画质`, option.quality);
      if (Panel.getValue("artplayer-plugin-bangumi-danmaku-enable")) {
        art.plugins.artplayerPluginDanmuku.config({
          danmuku: option.danmukuUrl,
        });
        art.plugins.artplayerPluginDanmuku.load();
        log$1.info(`更新弹幕姬`, option.danmukuUrl);
      }
      if (Panel.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")) {
        let plugin_m4sAudioSupport = art.plugins[ArtPlayer_PLUGIN_M4S_AUDIO_SUPPORT_KEY];
        plugin_m4sAudioSupport.update({
          from: BilibiliBangumiArtPlayer.$data.from,
          audioList: option.audioList || [],
        });
        log$1.info(`更新音频`, option.audioList);
      }
      if (Panel.getValue("artplayer-plugin-bangumi-epChoose-enable")) {
        let plugin_epChoose = art.plugins[ArtPlayer_PLUGIN_EP_CHOOSE_KEY];
        plugin_epChoose.update({
          EP_LIST: generateBangumiVideoSelectSetting(option),
          automaticBroadcast: true,
        });
        log$1.info(`更新选集信息`, option.epList);
      }
      if (Panel.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")) {
        let plugin_bilibiliCCSubTitle = art.plugins[ArtPlayer_PLUGIN_BILIBILI_CC_SUBTITLE_KEY];
        const subTitleOption = {
          from: BilibiliBangumiArtPlayer.$data.from,
          cid: option.cid,
          aid: option.aid,
          ep_id: option.ep_id,
        };
        plugin_bilibiliCCSubTitle.update(subTitleOption);
        log$1.info(`更新字幕`, subTitleOption);
      }
      if (Panel.getValue("artplayer-plugin-bangumi-toptoolbar-enable")) {
        let plugin_topToolBar = art.plugins[ArtPlayer_PLUGIN_TOP_TOOLBAR_KEY];
        const topToolBarOption = {
          showRight: true,
          showRightFollow: true,
          showWrap: true,
          showTitle: true,
          showOnlineTotal: true,
          title: option.videoTitle,
          onlineInfoParams: {
            aid: option.aid,
            cid: option.cid,
            bvid: option.bvid,
          },
        };
        plugin_topToolBar.update(topToolBarOption);
        log$1.info(`更新顶部标题`, topToolBarOption);
      }
      if (Panel.getValue("artplayer-plugin-bangumi-airborneHelper-enable")) {
        let plugin_airborneHelper = art.plugins[ArtPlayer_PLUGIN_AIRBORNE_HELPER_KEY];
        plugin_airborneHelper.update({
          clip_info_list: option.clip_info_list,
        });
        log$1.info(`更新空降助手信息`, option.clip_info_list);
      }
    },
  };
  const ReactUtils = {
    async waitReactPropsToSet($el, reactPropNameOrNameList, checkOption) {
      if (!Array.isArray(reactPropNameOrNameList)) {
        reactPropNameOrNameList = [reactPropNameOrNameList];
      }
      if (!Array.isArray(checkOption)) {
        checkOption = [checkOption];
      }
      function getTarget() {
        let __target__ = null;
        if (typeof $el === "string") {
          __target__ = domUtils.selector($el);
        } else if (typeof $el === "function") {
          __target__ = $el();
        } else if ($el instanceof HTMLElement) {
          __target__ = $el;
        }
        return __target__;
      }
      if (typeof $el === "string") {
        let $ele = await domUtils.waitNode($el, 1e4);
        if (!$ele) {
          return;
        }
      }
      checkOption.forEach((needSetOption) => {
        if (typeof needSetOption.msg === "string") {
          log$1.info(needSetOption.msg);
        }
        function checkTarget() {
          let $targetEl = getTarget();
          if ($targetEl == null) {
            return {
              status: false,
              isTimeout: true,
              inst: null,
              $el: $targetEl,
            };
          }
          let reactInst = utils.getReactInstance($targetEl);
          if (reactInst == null) {
            return {
              status: false,
              isTimeout: false,
              inst: null,
              $el: $targetEl,
            };
          }
          let findPropNameIndex = Array.from(reactPropNameOrNameList).findIndex((__propName__) => {
            let reactPropInst2 = reactInst[__propName__];
            if (!reactPropInst2) {
              return false;
            }
            let checkResult = needSetOption.check(reactPropInst2, $targetEl);
            checkResult = Boolean(checkResult);
            return checkResult;
          });
          let reactPropName = reactPropNameOrNameList[findPropNameIndex];
          let reactPropInst = reactInst[reactPropName];
          return {
            status: findPropNameIndex !== -1,
            isTimeout: false,
            inst: reactPropInst,
            $el: $targetEl,
          };
        }
        utils
          .waitPropertyByInterval(
            () => {
              return getTarget();
            },
            () => checkTarget().status,
            250,
            1e4
          )
          .then(() => {
            let checkTargetResult = checkTarget();
            if (checkTargetResult.status) {
              let reactInst = checkTargetResult.inst;
              needSetOption.set(reactInst, checkTargetResult.$el);
            } else {
              if (typeof needSetOption.failWait === "function") {
                needSetOption.failWait(checkTargetResult.isTimeout);
              }
            }
          });
      });
    },
  };
  function handleDashVideoQualityInfo(dashInfo) {
    let acceptVideoQualityInfoList = [];
    dashInfo.video.forEach((dashVideoInfo) => {
      if (!dashInfo.accept_quality.includes(dashVideoInfo.id)) {
        return;
      }
      let findSupportFormat = dashInfo.support_formats.find((formatsItem) => formatsItem.quality === dashVideoInfo.id);
      let videoUrl = BilibiliCDNProxy.findBetterCDN(
        dashVideoInfo.base_url,
        dashVideoInfo.baseUrl,
        dashVideoInfo.backup_url,
        dashVideoInfo.backupUrl
      );
      videoUrl = BilibiliCDNProxy.replaceBangumiVideoCDN(videoUrl);
      let qualityName = findSupportFormat?.new_description;
      acceptVideoQualityInfoList.push({
        name: qualityName,
        url: videoUrl,
        type: dashVideoInfo.mimeType,
        id: dashVideoInfo.id,
        size: dashVideoInfo.size,
        quality: dashVideoInfo.id,
        vip: Boolean(findSupportFormat?.need_vip),
        bandwidth: dashVideoInfo.bandwidth,
        frameRate: dashVideoInfo.frameRate,
        codecid: dashVideoInfo.codecid,
        codecs: dashVideoInfo.codecs,
      });
    });
    return acceptVideoQualityInfoList;
  }
  const GenerateVideoTitle = (ep_id, title) => {
    return `第${ep_id}话 ${title}`;
  };
  const handleQueryVideoQualityData = (bangumiInfo, userChooseVideoCodingCode) => {
    let qualityInfoList = [];
    if (bangumiInfo?.dash?.video?.length) {
      let dashBangumiInfo = bangumiInfo;
      qualityInfoList = [
        ...handleDashVideoQualityInfo({
          accept_quality: dashBangumiInfo.accept_quality,
          support_formats: dashBangumiInfo.support_formats,
          video: dashBangumiInfo.dash.video,
        }),
      ];
      if (qualityInfoList.length === 0) {
        if (dashBangumiInfo.dash.video.length !== 0) {
          log$1.warn(
            `当前选择的视频编码id为: ${userChooseVideoCodingCode}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`
          );
          qualityInfoList = [
            ...handleDashVideoQualityInfo({
              accept_quality: dashBangumiInfo.accept_quality,
              support_formats: dashBangumiInfo.support_formats,
              video: dashBangumiInfo.dash.video,
            }),
          ];
        }
      }
    } else {
      let mp4BangumiInfo = bangumiInfo;
      if (mp4BangumiInfo.durls.length === 0) {
        if (mp4BangumiInfo.durl != null) {
          mp4BangumiInfo.durls.push({
            quality: mp4BangumiInfo.quality,
            durl: mp4BangumiInfo.durl,
          });
        }
      }
      mp4BangumiInfo.durls.forEach((durlInfo) => {
        if (!mp4BangumiInfo.accept_quality.includes(durlInfo.quality)) {
          return;
        }
        if (!durlInfo.durl.length) {
          return;
        }
        let currentDurl = durlInfo["durl"][0];
        let findSupportFormat = bangumiInfo.support_formats.find(
          (formatsItem) => formatsItem.quality === durlInfo.quality
        );
        let videoUrl = BilibiliCDNProxy.findBetterCDN(currentDurl.url, currentDurl.backup_url);
        let qualityName = findSupportFormat?.new_description;
        qualityInfoList.push({
          name: qualityName,
          url: videoUrl,
          type: "audio/mp4",
          id: durlInfo.quality,
          size: currentDurl.size,
          quality: durlInfo.quality,
          vip: Boolean(findSupportFormat?.need_vip),
          bandwidth: 0,
          frameRate: "",
          codecid: 0,
          codecs: "",
        });
      });
    }
    return qualityInfoList;
  };
  const GenerateArtPlayerOption = async (EP_INFO, EP_LIST) => {
    const { aid, bvid, cid, ep_id, title, long_title } = EP_INFO;
    log$1.info(`解析番剧信息 aid:${aid} cid:${cid} ep_id:${ep_id}`);
    const videoTitle = GenerateVideoTitle(title, long_title);
    const audioInfo = [];
    let qualityInfo = [];
    let clip_info_list = [];
    let isFlv = false;
    let flvInfo = [];
    let flvTotalDuration = 0;
    let flvTotalSize = 0;
    if (Panel.getValue("bili-bangumi-unlockAreaLimit")) {
      const bangumiInfo = await BilibiliBangumiApi.getPlayUrl({
        avid: aid,
        cid,
        ep_id,
      });
      if (!bangumiInfo) {
        return;
      }
      if (Array.isArray(bangumiInfo?.clip_info_list)) {
        clip_info_list = bangumiInfo.clip_info_list;
      } else if (Array.isArray(bangumiInfo?.clip_info)) {
        clip_info_list = bangumiInfo.clip_info;
      }
      if (bangumiInfo.type.toLowerCase() === "flv") {
        isFlv = true;
        bangumiInfo.durl.forEach((durlInfo) => {
          let videoUrl = BilibiliCDNProxy.findBetterCDN(durlInfo.url, durlInfo.backup_url);
          videoUrl = BilibiliCDNProxy.replaceBangumiVideoCDN(videoUrl);
          flvTotalDuration += durlInfo.length;
          flvTotalSize += durlInfo.size;
          flvInfo.push({
            order: durlInfo.order,
            url: videoUrl,
            duration: durlInfo.length,
            length: durlInfo.length,
            size: durlInfo.size,
          });
        });
      } else if (bangumiInfo.type.toLowerCase() === "dash" || bangumiInfo.type.toLowerCase() === "mp4") {
        (bangumiInfo?.dash?.audio || []).forEach((item) => {
          let audioUrl = BilibiliCDNProxy.findBetterCDN(item.baseUrl, item.base_url, item.baseUrl, item.backup_url);
          audioUrl = BilibiliCDNProxy.replaceBangumiVideoCDN(audioUrl);
          audioInfo.push({
            url: audioUrl,
            id: item.id,
            size: item.size,
            text: VideoSoundQualityCode[item.id] || "",
            bandwidth: item.bandwidth,
            codecs: item.codecs,
            mimeType: item.mimeType || item.mime_type,
          });
        });
        log$1.info(`ArtPlayer: 获取的音频信息`, audioInfo);
        qualityInfo = qualityInfo.concat(handleQueryVideoQualityData(bangumiInfo));
        log$1.info(`ArtPlayer: 获取的视频画质信息`, qualityInfo);
      } else {
        BilibiliLogUtils.failToast("暂未适配的视频格式：" + bangumiInfo["format"]);
        return;
      }
    } else {
      const bangumiInfo = await BilibiliBangumiApi.getPlayUrlHTML5({
        avid: aid,
        cid,
        ep_id,
      });
      if (!bangumiInfo) {
        return;
      }
      if (Array.isArray(bangumiInfo?.clip_info_list)) {
        clip_info_list = bangumiInfo.clip_info_list;
      } else if (Array.isArray(bangumiInfo?.clip_info)) {
        clip_info_list = bangumiInfo.clip_info;
      }
      qualityInfo = qualityInfo.concat(handleQueryVideoQualityData(bangumiInfo));
    }
    const currentVideoQuality = qualityInfo.map((item, index) => {
      return {
        html: item.name,
        url: item.url,
        quality: item.quality,
        mimeType: item.type,
        codecid: item.codecid,
        codecs: item.codecs,
        frameRate: item.frameRate,
        bandwidth: item.bandwidth,
      };
    });
    const artPlayerOption = {
      container: null,
      epList: EP_LIST,
      cid,
      aid,
      bvid,
      ep_id,
      videoTitle,
      danmukuUrl: `https://api.bilibili.com/x/v1/dm/list.so?oid=${cid}`,
      quality: currentVideoQuality,
      clip_info_list,
      isFlv,
      flvInfo,
      flvTotalDuration,
      flvTotalSize,
    };
    artPlayerOption.url = qualityInfo?.[0]?.url;
    if (audioInfo.length) {
      artPlayerOption.audioList = audioInfo.map((item, index) => {
        return {
          isDefault: index === 0,
          url: item.url,
          soundQualityCode: item.id,
          soundQualityCodeText: item.text,
          bandwidth: item.bandwidth,
          codecs: item.codecs,
          mimeType: item.mimeType,
          size: item.size,
        };
      });
    }
    return artPlayerOption;
  };
  const BlibiliBangumiPlayer = {
    $data: {
      art: null,
    },
    updateArtPlayerVideoInfo(ep_info, ep_list) {
      const that = this;
      ReactUtils.waitReactPropsToSet(
        BilibiliData.className.bangumi_new + ` [class^="Player_container"]`,
        "reactFiber",
        {
          check(reactInstance) {
            return (
              typeof reactInstance?.return?.memoizedState?.queue?.lastRenderedState?.[0]?.epInfo?.bvid === "string"
            );
          },
          async set(reactInstance) {
            let epInfo = reactInstance?.return?.memoizedState?.queue?.lastRenderedState?.[0]?.epInfo;
            const $playerWrapper = $("#bilibiliPlayer");
            if (ep_info == null) {
              ep_info = epInfo;
            }
            if (ep_list == null) {
              ep_list = [];
              let $epList = $(BilibiliData.className.bangumi_new + ` [class^="EpisodeList_episodeListWrap"]`);
              if ($epList) {
                let react = utils.getReactInstance($epList);
                let epList = react?.reactFiber?.return?.memoizedState?.memoizedState?.[0]?.episodes;
                if (Array.isArray(epList)) {
                  ep_list = epList;
                }
              }
            }
            const artPlayerOption = await GenerateArtPlayerOption(ep_info, ep_list);
            if (artPlayerOption == null) {
              return;
            }
            let $artPlayer = $("#artplayer");
            if (!$artPlayer) {
              const $artPlayerContainer = domUtils.createElement("div", {
                className: "artplayer-container",
                innerHTML: `
									<div id="artplayer"></div>
									`,
              });
              $artPlayer = $artPlayerContainer.querySelector("#artplayer");
              domUtils.after($playerWrapper, $artPlayerContainer);
            }
            artPlayerOption.container = $artPlayer;
            if (that.$data.art == null) {
              let art = await BilibiliBangumiArtPlayer.init(artPlayerOption);
              if (art) {
                that.$data.art = art;
              } else {
                return;
              }
              that.$data.art.volume = 1;
            } else {
              BilibiliBangumiArtPlayer.update(that.$data.art, artPlayerOption);
            }
          },
        }
      );
    },
  };
  const BilibiliBangumi = {
    $data: {
      art: null,
    },
    init() {
      Panel.execMenuOnce("bili-bangumi-initialScale", () => {
        BilibiliUtils.initialScale();
      });
      Panel.execMenuOnce("bili-bangumi-hook-callApp", () => {
        this.hookCallApp();
      });
      Panel.execMenu("bili-bangumi-cover-clicl-event-chooseEp", () => {
        this.setChooseEpClickEvent();
      });
      Panel.execMenu("bili-bangumi-cover-clicl-event-other", () => {
        this.setClickOtherVideo();
      });
      Panel.execMenu("bili-bangumi-cover-clicl-event-recommend", () => {
        this.setRecommendClickEvent();
      });
      this.coverVideoPlayer();
    },
    hookCallApp() {
      let oldSetTimeout = _unsafeWindow.setTimeout;
      _unsafeWindow.setTimeout = function (...args) {
        let callString = args[0].toString();
        if (callString.includes("autoOpenApp")) {
          log$1.success("阻止唤醒App", args);
          return;
        }
        return Reflect.apply(oldSetTimeout, this, args);
      };
    },
    setChooseEpClickEvent() {
      domUtils
        .waitNode(BilibiliData.className.bangumi + " .ep-list-pre-wrapper ul.ep-list-pre-container")
        .then(($preContainer) => {
          log$1.info("覆盖【选集】的点击事件");
          domUtils.on(
            $preContainer,
            "click",
            "li.episode-item",
            function (event) {
              domUtils.preventEvent(event);
              BilibiliOpenApp.jumpToUrl(event);
            },
            {
              capture: true,
            }
          );
        });
      domUtils
        .waitNode(BilibiliData.className.bangumi + " .ep-list-pre-wrapper ul.season-list-wrapper")
        .then(($listWapper) => {
          log$1.info("覆盖【xx季】的点击事件");
          domUtils.on(
            $listWapper,
            "click",
            "li",
            function (event) {
              domUtils.preventEvent(event);
              BilibiliOpenApp.jumpToUrl(event);
            },
            {
              capture: true,
            }
          );
        });
      domUtils.waitNode(BilibiliData.className.bangumi + " .ep-list-pre-header").then(($preHeader) => {
        log$1.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件");
        domUtils.on(
          $preHeader,
          "click",
          function (event) {
            domUtils.preventEvent(event);
          },
          {
            capture: true,
          }
        );
      });
      domUtils.on(
        document,
        "click",
        [
          BilibiliData.className.bangumi_new + ` [class^="EpisodeList_episodeListWrap"] m-open-app[universallink]`,
          BilibiliData.className.bangumi_new + ` [class^="SeasonList_container"] m-open-app[universallink]`,
        ],
        (event, selectorTarget) => {
          let url = BilibiliOpenApp.getUrl(selectorTarget);
          if (!url) {
            Qmsg.error("获取跳转链接失败");
            return;
          }
          BilibiliUtils.goToUrl(url);
        },
        {
          capture: true,
        }
      );
    },
    setClickOtherVideo() {
      domUtils
        .waitNode(BilibiliData.className.bangumi + " .section-preview-wrapper ul.ep-list-pre-container")
        .then(($preContainer) => {
          log$1.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件");
          domUtils.on(
            $preContainer,
            "click",
            "li.section-preview-item",
            function (event) {
              domUtils.preventEvent(event);
              BilibiliOpenApp.jumpToUrl(event);
            },
            {
              capture: true,
            }
          );
        });
      domUtils.waitNode(BilibiliData.className.bangumi + " .section-preview-header").then(($previewHeader) => {
        log$1.info("覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件");
        domUtils.on(
          $previewHeader,
          "click",
          function (event) {
            domUtils.preventEvent(event);
          },
          {
            capture: true,
          }
        );
      });
      domUtils.on(
        document,
        "click",
        BilibiliData.className.bangumi_new + ` [class^="SectionPanel_container"] m-open-app[universallink]`,
        (event, selectorTarget) => {
          let url = BilibiliOpenApp.getUrl(selectorTarget);
          if (!url) {
            Qmsg.error("获取跳转链接失败");
            return;
          }
          BilibiliUtils.goToUrl(url);
        },
        {
          capture: true,
        }
      );
    },
    setRecommendClickEvent() {
      domUtils.waitNode(BilibiliData.className.bangumi + " .recom-wrapper ul.recom-list").then(($recomList) => {
        log$1.info("覆盖【更多推荐】番剧的点击事件");
        domUtils.on(
          $recomList,
          "click",
          "li.recom-item-v2",
          function (event) {
            domUtils.preventEvent(event);
            BilibiliOpenApp.jumpToUrl(event);
          },
          {
            capture: true,
          }
        );
      });
      domUtils.on(
        document,
        "click",
        BilibiliData.className.bangumi_new + ` [class^="Footer_container"] m-open-app[universallink]`,
        (event, selectorTarget) => {
          let url = BilibiliOpenApp.getUrl(selectorTarget);
          if (!url) {
            Qmsg.error("获取跳转链接失败");
            return;
          }
          BilibiliUtils.goToUrl(url);
        },
        {
          capture: true,
        }
      );
    },
    coverVideoPlayer() {
      if (document.querySelector("#artplayer")) {
        log$1.warn("已存在播放器，更新播放信息");
      } else {
        addStyle(
          `
			.player-wrapper,
			.open-app-bar,
			${BilibiliData.className.bangumi_new} [class^="Player_videoWrap"] > div:not(.artplayer-container){
				display: none !important;
			}
			
			${artPlayerCommonCSS}
			
			${artPlayerCSS}
			
			.artplayer-container{
				height: -webkit-fill-available;
				height: 100%;
			}
			`
        );
        let controlsPadding = Panel.getValue("bili-bangumi-artplayer-controlsPadding-left-right", 0);
        if (controlsPadding != 0) {
          addStyle(
            `
				@media (orientation: landscape) {
					.art-video-player .art-layers .art-layer-top-wrap,
					/* 底部 */
					.art-video-player .art-bottom{
						padding-left: ${controlsPadding}px !important;
						padding-right: ${controlsPadding}px !important;
					}
					
					/* 锁定图标 */
					.art-video-player  .art-layer-lock{
						--art-lock-left-size: ${controlsPadding}px;
					}
				}
				`
          );
        }
      }
      BlibiliBangumiPlayer.updateArtPlayerVideoInfo();
    },
  };
  const BilibiliSearchApi = {
    async getSearchInputPlaceholder() {
      let getResponse = await httpx.get("https://api.bilibili.com/x/web-interface/wbi/search/default", {
        fetch: true,
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
          "cache-control": "no-cache",
          pragma: "no-cache",
          "sec-ch-ua": '""',
          "sec-ch-ua-mobile": "?1",
          "sec-ch-ua-platform": '""',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
        },
        allowInterceptConfig: false,
      });
      if (!getResponse.status) {
        return;
      }
      let responseData = utils.toJSON(getResponse.data.responseText);
      if (!BilibiliApiResponseCheck.isWebApiSuccess(responseData)) {
        return;
      }
      return responseData.data;
    },
    async getBangumiSearchResult(config) {
      let searchParamsData = {
        search_type: "media_bangumi",
        keyword: config.keyword,
        from_client: "BROWSER",
        drm_tech_type: "2",
        module: "bangumi",
        area: config.area.toLowerCase(),
        access_key: BilibiliQrCodeLogin.getAccessToken(),
      };
      let url = `https://${config.host}/x/web-interface/search/type?${utils.toSearchParamsStr(searchParamsData)}`;
      let getResponse = await httpx.get(url, {
        fetch: false,
        headers: {
          "User-Agent": utils.getRandomAndroidUA(),
        },
      });
      if (!getResponse.status) {
        return;
      }
      let data2 = utils.toJSON(getResponse.data.responseText);
      if (!BilibiliApiResponseCheck.isWebApiSuccess(data2)) {
        log$1.error(`请求失败，当前代理服务器信息：${JSON.stringify(config.host)}`);
        log$1.error(`请求失败，当前请求的响应信息：${JSON.stringify(data2)}`);
        return {
          isSuccess: false,
          data: data2,
        };
      }
      return {
        isSuccess: true,
        data: data2.data.result,
      };
    },
  };
  const beautifyCSS =
    "#app .m-search {\r\n  --card-img-width: 90px;\r\n  --card-img-height: calc(var(--card-img-width) * 1.33);\r\n  --card-desc-color: #808080;\r\n  --card-desc-size: 0.8em;\r\n  --card-badge-item-size: 0.7em;\r\n  --card-badge-item-padding: 0.1em 0.2em;\r\n  --card-badge-item-border-radius: 3px;\r\n  --card-ep-item-border-radius: 4px;\r\n  --card-ep-item-padding-top-bottom: 13px;\r\n  --card-ep-item-padding-left-right: 13px;\r\n  --card-ep-item-badge-padding: 2px;\r\n}\r\n.gm-result-panel {\r\n  padding-top: 23.46667vmin;\r\n  background: #f4f4f4;\r\n}\r\n.gm-card-cover {\r\n  position: relative;\r\n}\r\n.gm-card-cover img {\r\n  width: var(--card-img-width);\r\n  height: var(--card-img-height);\r\n  border-radius: 8px;\r\n}\r\n.gm-card-container {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n\r\n.gm-card-box {\r\n  padding: 0px 10px;\r\n}\r\n\r\n.gm-card-item em {\r\n  color: var(--bili-color);\r\n  font-style: unset;\r\n}\r\n\r\n.gm-card-title {\r\n  font-family: 微软雅黑;\r\n  font-size: 1em;\r\n}\r\n\r\n.gm-card-display-info,\r\n.gm-card-styles,\r\nspan.gm-card-media_score-user_count {\r\n  font-size: var(--card-desc-size);\r\n  color: var(--card-desc-color);\r\n}\r\n\r\n.gm-card-info-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 3px;\r\n  justify-content: flex-start;\r\n}\r\n.gm-card-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\nspan.gm-card-media_score-score {\r\n  color: #f77c2e;\r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n}\r\n\r\n.gm-card-media_score {\r\n  display: flex;\r\n  align-items: flex-end;\r\n  gap: 0.5em;\r\n}\r\n.gm-card-item {\r\n  padding: 1.6vmin;\r\n  background: #fff;\r\n  margin: 10px 0px;\r\n  border-radius: 6px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  overflow: hidden;\r\n}\r\n.gm-card-badges {\r\n  background: var(--bili-color);\r\n  color: #fff;\r\n  padding: 3px;\r\n  font-size: 12px;\r\n  border-radius: 3px;\r\n  white-space: nowrap;\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n}\r\n.gm-card-badge-info-item {\r\n  font-size: var(--card-badge-item-size);\r\n  padding: var(--card-badge-item-padding);\r\n  border-radius: var(--card-badge-item-border-radius);\r\n}\r\n.gm-card-eps {\r\n  display: flex;\r\n  overflow: auto;\r\n  gap: 10px;\r\n}\r\n\r\n.gm-card-ep-conatiner {\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  padding: var(--card-ep-item-padding-top-bottom) var(--card-ep-item-padding-left-right);\r\n  background: #edeff3;\r\n  border-radius: var(--card-ep-item-border-radius);\r\n  font-size: 14px;\r\n  position: relative;\r\n}\r\n\r\n.gm-card-ep-badges-container {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  font-size: calc(var(--card-ep-item-padding-top-bottom) - var(--card-ep-item-badge-padding));\r\n}\r\n\r\n.gm-card-ep-badge-top-right {\r\n  border-top-right-radius: var(--card-ep-item-border-radius);\r\n  border-bottom-left-radius: var(--card-ep-item-border-radius);\r\n  padding: var(--card-ep-item-badge-padding);\r\n}\r\n.gm-card-ep-info-container {\r\n  min-width: 30px;\r\n}\r\n";
  const BilibiliExtraSearch = {
    $flag_css: {
      enableOtherAreaSearchBangumi: false,
    },
    init() {
      addStyle(beautifyCSS);
      domUtils.ready(() => {
        Panel.execMenu("bili-search-enableOtherAreaSearchBangumi", () => {
          this.enableOtherAreaSearchBangumi();
        });
      });
    },
    enableOtherAreaSearchBangumi() {
      if (!this.$flag_css.enableOtherAreaSearchBangumi) {
        this.$flag_css.enableOtherAreaSearchBangumi = true;
        addStyle(
          `
			.m-search-result .tabs{
				overflow: auto;
				white-space: nowrap;
			}
			.m-search-result .tabs .tab-item{
				display: inline-block;
				height: 8vmin;
				line-height: 8vmin;
				color: #757575;
				font-size: 3.73333vmin;
				margin-top: 1.86667vmin;
				padding: 0 2.33vmin;
			}
			.m-search-result .tabs .tab-item:first-child{
				padding-left: 0;
			}
			.m-search-result .tabs .tab-item:last-child{
				padding-right: 0;
			}
			.m-search-result .tabs .tab-item.on{
				color: var(--bili-color);
				border-bottom: 0.53333vmin solid var(--bili-color);
			}
			`
        );
      }
      domUtils.waitNode(".m-search-result .tabs:not(:has(.gm-tab-item))").then(($tabs) => {
        let enableSearchServer = BilibiliApiProxy.getSearchProxyHost();
        enableSearchServer.forEach((proxyServerInfo) => {
          let $tab = domUtils.createElement(
            "a",
            {
              className: "tab-item gm-tab-item",
              innerHTML: `番剧（${proxyServerInfo.name}）`,
            },
            {
              "data-area": proxyServerInfo.area,
              "data-host": proxyServerInfo.host,
            }
          );
          $tabs.appendChild($tab);
        });
        const refreshTabActive = ($tab) => {
          $tabs.querySelectorAll(".tab-item").forEach(($ele) => $tab != $ele && $ele.classList.remove("on"));
          $tab.classList.add("on");
        };
        domUtils.on($tabs, "click", ".tab-item", async (event) => {
          let $tab = event.target;
          refreshTabActive($tab);
          let $resultPanel = document.querySelector(".result-panel");
          let $oldGmResultPanel = document.querySelector(".gm-result-panel");
          if ($oldGmResultPanel) {
            $oldGmResultPanel.remove();
            domUtils.show($resultPanel);
          }
          if (!$tab.classList.contains("gm-tab-item")) {
            return;
          }
          let area = $tab.dataset.area;
          let host = $tab.dataset.host;
          let $searchResult = document.querySelector(".m-search-result");
          let searchResultVueIns = VueUtils.getVue($searchResult);
          searchResultVueIns.switchTab(233);
          domUtils.hide($resultPanel);
          let keyword = searchResultVueIns.keyword;
          let $loading = Qmsg.loading("搜索中，请稍后...");
          let searchBangumiResultInfo = await BilibiliSearchApi.getBangumiSearchResult({
            keyword,
            area,
            host,
          });
          $loading.close();
          if (!searchBangumiResultInfo) {
            return;
          }
          if (!searchBangumiResultInfo.isSuccess) {
            alert(JSON.stringify(searchBangumiResultInfo.data, null, 2));
            return;
          }
          let searchBangumiResultData = searchBangumiResultInfo.data;
          log$1.info("搜索结果：", searchBangumiResultData);
          let $gmResultPanel = domUtils.createElement("div", {
            className: "gm-result-panel",
            innerHTML: `
						<div class="gm-list-view">
							<div class="gm-video-list-box">
								<div class="gm-video-list">
									<div class="gm-card-box"></div>
								</div>
							</div>
						</div>
					`,
          });
          let $gmCardBox = $gmResultPanel.querySelector(".gm-card-box");
          searchBangumiResultData.forEach((searchBangumiResultItem) => {
            $gmCardBox.appendChild(this.createSearchResultVideoItem(searchBangumiResultItem));
          });
          $searchResult.appendChild($gmResultPanel);
        });
      });
    },
    createSearchResultVideoItem(option) {
      let $item = domUtils.createElement(
        "div",
        {
          className: "gm-card-item",
          innerHTML: `
				<div class="gm-card-container">
					<div class="gm-card-cover">
						<div class="gm-card-badges">${option.season_type_name}</div>
						<img src="${option.cover}" alt="封面">
					</div>
					<div class="gm-card-info">
						<div class="gm-card-info-container">
							<div class="gm-card-title">${option.title}</div>
							<div class="gm-card-display-info">
							</div>
							<div class="gm-card-styles">${option.styles || Reflect.get(option, "style") || Reflect.get(option, "styles_v2") || ""}</div>
						</div>
						<div class="gm-card-media_score">
							
						</div>
					</div>
					<div class="gm-card-ferture">
					</div>
				</div>
				<div class="gm-card-eps">
					
				</div>
				`,
        },
        {
          "data-url": option.url,
          "data-type": option.type,
          "data-media_id": option.media_id,
          "data-pgc_season_id": option.pgc_season_id,
          "data-is_follow": option.is_follow,
          "data-is_selection": option.is_selection,
        }
      );
      Reflect.set($item, "data-option", option);
      domUtils.on($item, "click", (event) => {
        domUtils.preventEvent(event);
        window.open(option.url, "_blank");
      });
      let $displayInfo = $item.querySelector(".gm-card-display-info");
      let totalDisplayInfo = [];
      if (Array.isArray(option?.display_info)) {
        totalDisplayInfo = totalDisplayInfo.concat(option.display_info);
      }
      if (Array.isArray(option?.badges)) {
        totalDisplayInfo = totalDisplayInfo.concat(option.badges);
      }
      totalDisplayInfo = utils.uniqueArray(totalDisplayInfo, (item) => item.text);
      totalDisplayInfo.forEach((displayInfo) => {
        let $displayInfoItem = domUtils.createElement("span", {
          className: "gm-card-badge-info-item",
          innerText: displayInfo.text,
        });
        if (typeof displayInfo.border_color === "string") {
          $displayInfoItem.style.border = `1px solid ${displayInfo.border_color}`;
          $displayInfoItem.style.color = displayInfo.border_color;
        }
        domUtils.append($displayInfo, $displayInfoItem);
      });
      if (option.pubtime) {
        domUtils.append(
          $displayInfo,
          `
				<span>${utils.formatTime(option.pubtime * 1e3, "yyyy")}</span>
				`
        );
      }
      let areas = option.areas || Reflect.get(option, "area");
      if (areas) {
        if ($displayInfo.children.length) {
          domUtils.append(
            $displayInfo,
            `
					<span> | </span>
				`
          );
        }
        domUtils.append(
          $displayInfo,
          `
					<span>${areas}</span>
				`
        );
      }
      let $mediaScore = $item.querySelector(".gm-card-media_score");
      if (option.media_score && option.media_score.user_count) {
        domUtils.append(
          $mediaScore,
          `
				<span class="gm-card-media_score-score">${option.media_score?.score || 0}分</span>
				<span class="gm-card-media_score-user_count">${option.media_score?.user_count || 0}人参与</span>
				`
        );
      }
      let $eps = $item.querySelector(".gm-card-eps");
      let epsList = [...(option.eps || []), ...(Reflect.get(option, "episodes_new") || [])].filter((item) =>
        utils.isNotNull(item)
      );
      epsList.forEach((epsItem) => {
        let title = epsItem.title || epsItem.long_title;
        let url = epsItem.url || Reflect.get(epsItem, "uri");
        let $epItem = domUtils.createElement(
          "div",
          {
            className: "gm-card-ep-conatiner",
            innerHTML: `
				<div class="gm-card-ep-badges-container">
					
				</div>
				<div class="gm-card-ep-info-container">
					${title}
				</div>`,
          },
          {
            "data-id": epsItem.id,
            "data-url": url,
            "data-title": title,
            "data-long_title": epsItem.long_title,
          }
        );
        let $epBadges = $epItem.querySelector(".gm-card-ep-badges-container");
        $epItem.querySelector(".gm-card-ep-info-container");
        if (Array.isArray(epsItem.badges) && epsItem.badges.length) {
          let epItemBadgeInfo = epsItem.badges[0];
          let $badge = domUtils.createElement("span", {
            className: "gm-card-ep-badge-top-right",
            innerText: epItemBadgeInfo.text,
          });
          if (typeof epItemBadgeInfo.bg_color === "string") {
            $badge.style.backgroundColor = epItemBadgeInfo.bg_color;
          }
          if (typeof epItemBadgeInfo.text_color === "string") {
            $badge.style.color = epItemBadgeInfo.text_color;
          }
          domUtils.append($epBadges, $badge);
        }
        domUtils.on($epItem, "click", (event) => {
          domUtils.preventEvent(event);
          window.open(url, "_blank");
        });
        $eps.appendChild($epItem);
      });
      return $item;
    },
    searchBangumi() {},
  };
  const BilibiliSearchBeautify = {
    $flag: { mutationSearchResult: false },
    init() {
      this.mutationSearchResult();
    },
    mutationSearchResult() {
      if (this.$flag.mutationSearchResult) {
        return;
      }
      this.$flag.mutationSearchResult = true;
      addStyle(
        `
        .bangumi-list{
            padding: 0 10px;
        }
        `
      );
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        callback: utils.debounce(() => {
          document.querySelectorAll(".m-search-bangumi-item").forEach(($bangumiItem) => {
            let vueIns = VueUtils.getVue($bangumiItem);
            if (!vueIns) {
              return;
            }
            let info = vueIns.info;
            if (!info) {
              return;
            }
            let $newBangumiItem = BilibiliExtraSearch.createSearchResultVideoItem(info);
            domUtils.after($bangumiItem, $newBangumiItem);
            $bangumiItem.remove();
          });
        }),
      });
    },
  };
  const BilibiliSearchVueProp = {
    init() {
      Panel.execMenuOnce("bili-search-vue-prop-noCallApp", () => {
        this.noCallApp();
      });
      Panel.execMenuOnce("bili-search-vue-prop-openAppDialog", () => {
        this.openAppDialog();
      });
    },
    noCallApp() {
      let lockFn = new utils.LockFunction(() => {
        $$(".video-list .card-box > div:not([data-gm-inject-no-call-app])").forEach(($card) => {
          let vueIns = VueUtils.getVue($card);
          if (!vueIns) {
            return;
          }
          if (typeof vueIns.noCallApp === "boolean") {
            Object.defineProperty(vueIns, "noCallApp", {
              value: true,
              writable: false,
              enumerable: true,
              configurable: true,
            });
            $card.setAttribute("data-gm-inject-no-call-app", "true");
          }
        });
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        callback() {
          lockFn.run();
        },
      });
    },
    openAppDialog() {
      let lockFn = new utils.LockFunction(() => {
        $$(".video-list .card-box > div:not([data-gm-inject-openAppDialog])").forEach(($card) => {
          let vueIns = VueUtils.getVue($card);
          if (!vueIns) {
            return;
          }
          if (typeof vueIns.openAppDialog === "boolean") {
            Object.defineProperty(vueIns, "openAppDialog", {
              value: false,
              writable: false,
              enumerable: true,
              configurable: true,
            });
            $card.setAttribute("data-gm-inject-openAppDialog", "true");
          }
        });
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        callback() {
          lockFn.run();
        },
      });
    },
  };
  const BilibiliSearch = {
    init() {
      if (BilibiliRouter.isSearchResult()) {
        BilibiliExtraSearch.init();
      }
      BilibiliSearchVueProp.init();
      Panel.execMenuOnce("bili-search-cover-cancel", () => {
        this.coverCancel();
      });
      Panel.execMenu("bili-search-beautifySearchResult", () => {
        BilibiliSearchBeautify.init();
      });
      Panel.execMenuOnce("bili-search-cover-card-result-click-event", () => {
        this.coverCardResultClickEvent();
      });
      domUtils.ready(() => {
        Panel.execMenu("bili-search-inputAutoFocus", () => {
          this.inputAutoFocus();
        });
      });
    },
    coverCancel() {
      log$1.info("覆盖【取消】按钮的点击事件");
      domUtils.on(
        document,
        "click",
        "a.cancel",
        (event) => {
          log$1.info(`点击取消按钮`);
          domUtils.preventEvent(event);
          window.history.back();
        },
        { capture: true }
      );
    },
    inputAutoFocus() {
      let searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has("keyword")) {
        log$1.warn(`当前在搜索结果页面，不执行输入框自动获取焦点`);
        return;
      }
      log$1.info(`输入框自动获取焦点`);
      domUtils.waitNode(`.m-search .m-search-search-bar input[type="search"]`, 1e4).then(($input) => {
        if (!$input) {
          log$1.error("获取输入框失败");
          return;
        }
        $input.focus();
      });
    },
    coverCardResultClickEvent() {
      log$1.info(`覆盖搜索结果点击事件`);
      domUtils.on(
        document,
        "click",
        ".video-list .card-box > div",
        (evt, selectorTarget) => {
          let $card = selectorTarget;
          let vueIns = VueUtils.getVue($card);
          if (!vueIns) {
            return;
          }
          let cardClick = vueIns.cardClick;
          if (typeof cardClick !== "function") {
            return;
          }
          domUtils.preventEvent(evt);
          cardClick(evt);
        },
        {
          capture: true,
        }
      );
    },
  };
  const BilibiliLiveBlockNode = {
    init() {
      Panel.execMenuOnce("bili-live-block-chatRoom", () => {
        return this.blockChatRoom();
      });
      Panel.execMenuOnce("bili-live-block-brush-prompt", () => {
        return this.blockBrushPrompt();
      });
      Panel.execMenuOnce("bili-live-block-control-panel", () => {
        return this.blockControlPanel();
      });
    },
    blockChatRoom() {
      log$1.info("屏蔽聊天室");
      return CommonUtil.addBlockCSS("#chat-items");
    },
    blockBrushPrompt() {
      log$1.info("屏蔽xxx进入直播间");
      return CommonUtil.addBlockCSS("#brush-prompt");
    },
    blockControlPanel() {
      log$1.info("屏蔽底部工具栏");
      return CommonUtil.addBlockCSS(".control-panel");
    },
  };
  const BilibiliLive = {
    init() {
      BilibiliLiveBlockNode.init();
      Panel.execMenuOnce("bili-live-prevent-openAppBtn", () => {
        this.preventOpenAppBtn();
      });
    },
    preventOpenAppBtn() {
      domUtils.waitNode("body").then(($body) => {
        log$1.info("阻止.open-app-btn元素触发点击事件");
        domUtils.on(
          $body,
          "click",
          ".open-app-btn",
          function (event, selectorTarget) {
            const vueInst = VueUtils.getVue(selectorTarget);
            if (typeof vueInst?.open === "function") {
              vueInst.open = function () {
                log$1.info(`成功阻止.open-app-btn元素触发点击事件`);
              };
            }
          },
          {
            capture: true,
          }
        );
      });
    },
  };
  const BilibiliOpusVariable = {
    $data: {
      dispatchCallBackList: [],
    },
    init() {
      Panel.execMenu("bili-opus-variable-autoOpenApp", () => {
        this.autoOpenApp();
      });
      Panel.execMenu("bili-opus-variable-go404", () => {
        this.go404();
      });
      Panel.execMenu("bili-opus-variable-handleFallback", () => {
        this.dispatch((vueInstance, fnName) => {
          if (
            typeof fnName === "string" &&
            fnName === "opus/handleFallback" &&
            ![1, 2].includes(vueInstance.fallback.type)
          ) {
            log$1.success(`禁止调用handleFallback函数前往404`);
            if (
              typeof vueInstance?.showComment === "boolean" &&
              vueInstance.showComment &&
              typeof vueInstance?.initFullComment === "function"
            ) {
              vueInstance.initFullComment();
            }
            return false;
          }
        });
      });
    },
    isLimit() {
      log$1.info(`等待 观察并覆盖变量isLimit`);
      VueUtils.watchVuePropChange(
        BilibiliData.className.opus,
        (vueInstance) => vueInstance.isLimit,
        (vueInstance) => {
          vueInstance.isLimit = false;
          log$1.success(`观察者：覆盖变量isLimit=false`);
        }
      );
    },
    autoOpenApp() {
      VueUtils.waitVuePropToSet(BilibiliData.className.opus, {
        msg: "等待 覆盖函数autoOpenApp",
        check(vueInstance) {
          return typeof vueInstance?.autoOpenApp === "function";
        },
        set(vueInstance) {
          log$1.success(`成功 覆盖函数autoOpenApp`);
          vueInstance.autoOpenApp = function () {
            log$1.success(`禁止调用autoOpenApp函数`);
          };
        },
      });
    },
    go404() {
      VueUtils.waitVuePropToSet(BilibiliData.className.opus, {
        msg: "等待 覆盖函数go404",
        check(vueInstance) {
          return typeof vueInstance?.go404 === "function";
        },
        set(vueInstance) {
          log$1.success(`成功 覆盖函数go404`);
          vueInstance.go404 = function () {
            log$1.success(`禁止调用go404函数`);
          };
        },
      });
    },
    fallback() {
      VueUtils.waitVuePropToSet(BilibiliData.className.opus, {
        msg: "等待 覆盖对象fallback",
        check(vueInstance) {
          return typeof vueInstance?.fallback?.type === "number";
        },
        set(vueInstance) {
          log$1.success(`成功 覆盖对象fallback`);
          vueInstance.$watch(
            () => vueInstance?.fallback,
            () => {
              vueInstance.fallback = null;
              log$1.success(`覆盖对象fallback`);
            },
            {
              deep: true,
              immediate: true,
            }
          );
        },
      });
    },
    dispatch(callback) {
      let callbackStr = callback.toString();
      for (let index = 0; index < this.$data.dispatchCallBackList.length; index++) {
        const fn = this.$data.dispatchCallBackList[index];
        if (fn.toString() === callbackStr) {
          return;
        }
      }
      log$1.info(`添加dispatch回调判断`);
      this.$data.dispatchCallBackList.push(callback);
      if (this.$data.dispatchCallBackList.length > 1) {
        return;
      }
      const that = this;
      VueUtils.waitVuePropToSet(BilibiliData.className.opus, {
        msg: "等待 覆盖函数dispatch",
        check(vueInstance) {
          return typeof vueInstance?.$store?.dispatch === "function";
        },
        set(vueInstance) {
          log$1.success(`成功 覆盖函数dispatch`);
          let originDispatch = vueInstance.$store.dispatch;
          vueInstance.$store.dispatch = function (...args) {
            let fnName = args[0];
            for (let index = 0; index < that.$data.dispatchCallBackList.length; index++) {
              const fn = that.$data.dispatchCallBackList[index];
              if (typeof fn === "function") {
                let result = fn(vueInstance, fnName);
                if (typeof result === "boolean" && !result) {
                  return;
                }
              }
            }
            return Reflect.apply(originDispatch, this, args);
          };
        },
      });
    },
  };
  const BilibiliOpus = {
    init() {
      BilibiliOpusVariable.init();
      Panel.execMenuOnce("bili-opus-cover-topicJump", () => {
        this.coverTopicJump();
      });
      Panel.execMenuOnce("bili-opus-automaticallyExpandToReadFullText", () => {
        BilibiliOpusVariable.isLimit();
        return this.automaticallyExpandToReadFullText();
      });
      Panel.execMenuOnce("bili-opus-cover-header", () => {
        this.coverHeaderJump();
      });
    },
    coverTopicJump() {
      log$1.info("覆盖话题跳转点击事件");
      domUtils.on(
        document,
        "click",
        BilibiliData.className.opus + " .launch-app-btn.opus-module-topic",
        function (event) {
          let $click = event.target;
          let vueObj = VueUtils.getVue($click);
          if (!vueObj) {
            Qmsg.error("获取话题的__vue__失败");
            return;
          }
          let data2 = vueObj?.$props?.data;
          let jump_url = data2?.jump_url;
          if (utils.isNull(jump_url)) {
            Qmsg.error("获取话题的jump_url失败");
            return;
          }
          log$1.info("话题的跳转信息: ", data2);
          BilibiliUtils.goToUrl(jump_url);
        },
        {
          capture: true,
        }
      );
    },
    automaticallyExpandToReadFullText() {
      log$1.info("自动展开阅读全文");
      let result = [
        CommonUtil.addBlockCSS(BilibiliData.className.opus + " .opus-read-more"),
        addStyle(
          `
			${BilibiliData.className.opus} .opus-module-content{
				overflow: unset !important;
				max-height: unset !important;
			}
			`
        ),
      ];
      return result;
    },
    coverHeaderJump() {
      log$1.info("覆盖header点击事件");
      domUtils.on(
        document,
        "click",
        BilibiliData.className.opus + " .opus-module-author",
        function (event) {
          domUtils.preventEvent(event);
          let $click = event.target;
          let vueObj = VueUtils.getVue($click);
          if (!vueObj) {
            Qmsg.error("获取vue属性失败");
            return;
          }
          let mid = vueObj?.data?.mid;
          if (!mid) {
            Qmsg.error("获取mid失败");
            return;
          }
          BilibiliUtils.goToUrl(BilibiliUrl.getUserSpaceUrl(mid));
        },
        {
          capture: true,
        }
      );
    },
  };
  const BilibiliDynamic = {
    init() {
      Panel.execMenuOnce("bili-dynamic-cover-topicJump", () => {
        this.coverTopicJump();
      });
      Panel.execMenuOnce("bili-dynamic-cover-atJump", () => {
        this.coverAtJump();
      });
      Panel.execMenuOnce("bili-dynamic-cover-referenceJump", () => {
        this.coverReferenceJump();
      });
      Panel.execMenuOnce("bili-dynamic-cover-header", () => {
        this.coverHeaderJump();
      });
    },
    coverHeaderJump() {
      log$1.info("覆盖header点击事件");
      domUtils.on(
        document,
        "click",
        BilibiliData.className.dynamic + " .launch-app-btn .dyn-header",
        function (event) {
          domUtils.preventEvent(event);
          let $click = event.target;
          let vueObj = VueUtils.getVue($click);
          if (!vueObj) {
            Qmsg.error("获取vue属性失败");
            return;
          }
          let url = vueObj.url;
          if (!url) {
            Qmsg.error("获取url失败");
            return;
          }
          BilibiliUtils.goToUrl(url);
        },
        {
          capture: true,
        }
      );
    },
    coverTopicJump() {
      log$1.info("覆盖话题跳转点击事件");
      domUtils.on(
        document,
        "click",
        BilibiliData.className.dynamic + " .launch-app-btn .bili-dyn-topic",
        function (event) {
          domUtils.preventEvent(event);
          let $click = event.target;
          let vueObj = VueUtils.getVue($click);
          if (!vueObj) {
            Qmsg.error("获取vue属性失败");
            return;
          }
          let data2 = vueObj?.$props?.data;
          let jump_url = data2?.jump_url;
          if (utils.isNull(jump_url)) {
            Qmsg.error("获取jump_url失败");
            return;
          }
          log$1.info("话题的跳转信息: ", data2);
          BilibiliUtils.goToUrl(jump_url);
        },
        {
          capture: true,
        }
      );
    },
    coverAtJump() {
      log$1.info("覆盖@ 跳转");
      domUtils.on(
        document,
        "click",
        BilibiliData.className.dynamic + " .at",
        function (event) {
          domUtils.preventEvent(event);
          let $click = event.target;
          let oid = $click.getAttribute("data-oid") || VueUtils.getVue($click)?.$props?.rid;
          if (utils.isNull(oid)) {
            Qmsg.error("获取data-oid或rid失败");
            return;
          }
          log$1.info("用户的oid: " + oid);
          BilibiliUtils.goToUrl(BilibiliUrl.getUserSpaceDynamicUrl(oid));
        },
        {
          capture: true,
        }
      );
    },
    coverReferenceJump() {
      log$1.info("覆盖引用的点击事件");
      domUtils.on(
        document,
        "click",
        BilibiliData.className.dynamic + " .dyn-content .reference .dyn-orig-author",
        function (event) {
          domUtils.preventEvent(event);
          let $click = event.target;
          let url = $click.getAttribute("data-url");
          if (!url) {
            Qmsg.error("获取data-url失败");
            return;
          }
          BilibiliUtils.goToUrl(url);
        },
        {
          capture: true,
        }
      );
      domUtils.on(
        document,
        "click",
        BilibiliData.className.dynamic + " .dyn-content .reference .dyn-archive",
        function (event) {
          domUtils.preventEvent(event);
          let $click = event.target;
          let vueObj = VueUtils.getVue($click);
          if (!vueObj) {
            Qmsg.error("获取vue属性失败");
            return;
          }
          let jump_url = vueObj?.data?.jump_url;
          if (utils.isNull(jump_url)) {
            Qmsg.error("获取jump_url失败");
            return;
          }
          BilibiliUtils.goToUrl(jump_url);
        },
        {
          capture: true,
        }
      );
    },
  };
  const BilibiliHook = {
    $isHook: {
      windowPlayerAgent: false,
      hookWebpackJsonp_openApp: false,
      overRideLaunchAppBtn_Vue_openApp: false,
      overRideBiliOpenApp: false,
      overRideWxTaghandleClick: false,
    },
    $data: {
      setTimeout: [],
    },
    windowWebPack(webpackName = "webpackJsonp", mainCoreData, checkCallBack) {
      let originObject = void 0;
      OriginPrototype.Object.defineProperty(_unsafeWindow, webpackName, {
        get() {
          return originObject;
        },
        set(newValue) {
          log$1.success("成功劫持webpack，当前webpack名：" + webpackName);
          originObject = newValue;
          const originPush = originObject.push;
          originObject.push = function (...args) {
            let _mainCoreData = args[0][0];
            if (
              mainCoreData == _mainCoreData ||
              (Array.isArray(mainCoreData) &&
                Array.isArray(_mainCoreData) &&
                JSON.stringify(mainCoreData) === JSON.stringify(_mainCoreData))
            ) {
              Object.keys(args[0][1]).forEach((keyName) => {
                let originSwitchFunc = args[0][1][keyName];
                args[0][1][keyName] = function (..._args) {
                  let result = originSwitchFunc.call(this, ..._args);
                  _args[0] = checkCallBack(_args[0]);
                  return result;
                };
              });
            }
            return originPush.call(this, ...args);
          };
        },
      });
    },
    setTimeout(matchStr) {
      this.$data.setTimeout.push(matchStr);
      if (this.$data.setTimeout.length > 1) {
        log$1.info("window.setTimeout hook新增劫持判断参数：" + matchStr);
        return;
      }
      _unsafeWindow.setTimeout = function (...args) {
        let callBackString = args[0].toString();
        if (callBackString.match(matchStr)) {
          log$1.success("劫持setTimeout的函数", callBackString);
          return;
        }
        return OriginPrototype.setTimeout.apply(this, args);
      };
    },
    overRideLaunchAppBtn_Vue_openApp() {
      if (this.$isHook.overRideLaunchAppBtn_Vue_openApp) {
        return;
      }
      this.$isHook.overRideLaunchAppBtn_Vue_openApp = true;
      function overrideOpenApp(vueObj) {
        if (typeof vueObj.openApp !== "function") {
          return;
        }
        let openAppStr = vueObj.openApp.toString();
        if (openAppStr.includes("阻止唤醒App")) {
          return;
        }
        vueObj.openApp = function (...args) {
          log$1.success("openApp：阻止唤醒App", args);
        };
      }
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
          attributes: true,
        },
        immediate: true,
        callback() {
          document.querySelectorAll(".launch-app-btn").forEach(($launchAppBtn) => {
            let vueObj = VueUtils.getVue($launchAppBtn);
            if (!vueObj) {
              return;
            }
            overrideOpenApp(vueObj);
            if (vueObj.$children && vueObj.$children.length) {
              vueObj.$children.forEach(($child) => {
                overrideOpenApp($child);
              });
            }
          });
        },
      });
    },
    overRideBiliOpenApp() {
      if (this.$isHook.overRideBiliOpenApp) {
        return;
      }
      this.$isHook.overRideBiliOpenApp = true;
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
          attributes: true,
        },
        immediate: true,
        callback() {
          [...Array.from($$("bili-open-app")), ...Array.from($$("m-open-app"))].forEach(($biliOpenApp) => {
            if ($biliOpenApp.hasAttribute("data-inject-opener-open")) {
              return;
            }
            let opener = Reflect.get($biliOpenApp, "opener");
            if (opener == null) {
              return;
            }
            let originOpen = opener?.open;
            if (typeof originOpen === "function") {
              Reflect.set(opener, "open", (config) => {
                log$1.success(`拦截bili-open-app.open跳转: ${JSON.stringify(config)}`);
                if (typeof config?.universalLink === "string") {
                  BilibiliUtils.goToUrl(config.universalLink);
                }
              });
              $biliOpenApp.setAttribute("data-inject-opener-open", "true");
            }
          });
        },
      });
    },
    overRideWxTaghandleClick() {
      if (this.$isHook.overRideWxTaghandleClick) {
        return;
      }
      this.$isHook.overRideWxTaghandleClick = true;
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
          attributes: true,
        },
        immediate: true,
        callback() {
          [...Array.from($$(".wx-tag"))].forEach(($el) => {
            if ($el.hasAttribute("data-inject-vueins-handle-click")) {
              return;
            }
            let vueIns = VueUtils.getVue($el);
            if (vueIns) {
              if (typeof vueIns?.handleClick === "function") {
                vueIns.handleClick = function () {
                  if (typeof vueIns["goToVideo"] === "function") {
                    vueIns.goToVideo();
                  } else {
                    Qmsg.error(".wx-tag不存在goToVideo函数", {
                      consoleLogContent: true,
                    });
                  }
                };
                $el.setAttribute("data-inject-vueins-handle-click", "true");
              }
              if (
                Array.isArray(vueIns?.$children) &&
                vueIns.$children.length &&
                typeof vueIns.$children[0].handleClick === "function"
              ) {
                vueIns.$children[0].handleClick = vueIns.handleClick;
              }
            }
          });
        },
      });
    },
  };
  const BilibiliRecommendCSS =
    '#app .m-head .m-recommend-view {\r\n  display: none;\r\n}\r\n\r\n#app .m-head .suspension .channel-menu:has(.recommend-tag.is-avtive) .v-switcher__header__anchor {\r\n  display: none !important;\r\n}\r\n#app .m-head .suspension .channel-menu:has(.recommend-tag.is-avtive) a.v-switcher__header__tabs__item {\r\n  color: #505050 !important;\r\n}\r\n#app .m-head .suspension .channel-menu:has(.recommend-tag.is-avtive) a.recommend-tag {\r\n  color: var(--bili-color) !important;\r\n}\r\n#app .m-head .suspension .channel-menu:has(.recommend-tag.is-avtive) a.recommend-tag span:after {\r\n  content: " ";\r\n  position: relative;\r\n  background: var(--bili-color);\r\n  width: 30.4375px;\r\n  height: 0.53333vmin;\r\n  display: block;\r\n  bottom: 3px;\r\n}\r\n\r\n#app .m-head:has(.recommend-tag.is-avtive) .suspension + div {\r\n  display: none;\r\n}\r\n#app .m-head:has(.recommend-tag.is-avtive) .m-recommend-view {\r\n  display: unset;\r\n}\r\n\r\n#app .m-head .m-recommend-view {\r\n  background-color: #f0f1f3;\r\n}\r\n#app .m-head .m-recommend-view .list-view .video-list-box .video-list {\r\n  padding: 0 1.33333vmin;\r\n  margin-bottom: 5.33333vmin;\r\n}\r\n#app .m-head .m-recommend-view .list-view .video-list-box .video-list .card-box {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n}\r\n#app .m-head .m-recommend-view .list-view .video-list-box .video-list .card-box .v-card .card {\r\n  position: relative;\r\n}\r\n#app .m-head .m-recommend-view .list-view .video-list-box .video-list .card-box .v-card .card .bfs-img-wrap {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n#app\r\n  .m-head\r\n  .m-recommend-view\r\n  .list-view\r\n  .video-list-box\r\n  .video-list\r\n  .card-box\r\n  .v-card\r\n  .card\r\n  .bfs-img-wrap\r\n  .bfs-img.b-img {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  background: transparent;\r\n}\r\n#app\r\n  .m-head\r\n  .m-recommend-view\r\n  .list-view\r\n  .video-list-box\r\n  .video-list\r\n  .card-box\r\n  .v-card\r\n  .card\r\n  .bfs-img-wrap\r\n  .bfs-img.b-img\r\n  picture.b-img__inner {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n#app\r\n  .m-head\r\n  .m-recommend-view\r\n  .list-view\r\n  .video-list-box\r\n  .video-list\r\n  .card-box\r\n  .v-card\r\n  .card\r\n  .bfs-img-wrap\r\n  .bfs-img.b-img\r\n  picture.b-img__inner\r\n  img {\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n  object-fit: cover;\r\n}\r\n#app .m-head .m-recommend-view .list-view .video-list-box .video-list .card-box .v-card .card .count {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  font-size: 3.2vmin;\r\n  padding: 1.33333vmin 1.6vmin;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n  color: #fff;\r\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);\r\n}\r\n#app .m-head .m-recommend-view .list-view .video-list-box .video-list .card-box .v-card .title {\r\n  font-size: 3.2vmin;\r\n  color: #212121;\r\n  margin-top: 1.6vmin;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n}\r\n#app\r\n  .m-head\r\n  .m-recommend-view\r\n  .list-view\r\n  .video-list-box\r\n  .video-list\r\n  .card-box\r\n  .v-card\r\n  .gm-up-info\r\n  .gm-up-name\r\n  .gm-picture-text {\r\n  padding: 1px 4px;\r\n  border: 1px solid var(--bili-color);\r\n  color: var(--bili-color);\r\n  border-radius: 2px;\r\n  margin-right: 4px;\r\n  font-size: 2vmin;\r\n}\r\n\r\n#app .m-head .m-recommend-view .list-view .video-list-box .video-list .card-box .v-card .count > span {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1.33333vmin;\r\n}\r\n';
  var XOR_CODE = 23442827791579n;
  var MAX_AID = 1n << 51n;
  var BASE = 58n;
  var data = "FcwAPNKTMug3GV5Lj7EJnHpWsx4tb8haYeviqBz6rkCy12mUSDQX9RdoZf";
  function av2bv(aid) {
    const bytes = ["B", "V", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
    let bvIndex = bytes.length - 1;
    let tmp = (MAX_AID | BigInt(aid)) ^ XOR_CODE;
    while (tmp > 0) {
      bytes[bvIndex] = data[Number(tmp % BigInt(BASE))];
      tmp = tmp / BASE;
      bvIndex -= 1;
    }
    [bytes[3], bytes[9]] = [bytes[9], bytes[3]];
    [bytes[4], bytes[7]] = [bytes[7], bytes[4]];
    return bytes.join("");
  }
  const fixCover = (url) => {
    if (url.startsWith("http://")) {
      url = url.replace(/^http/, "https");
    }
    return url;
  };
  const BilibiliRecommend = {
    $flag: {
      isInitCSS: false,
      isLoadingNextPage: false,
    },
    $data: {
      intersectionObserver: null,
      loadNums: 0,
    },
    $ele: {
      $listView: null,
      $videoListBox: null,
      $videoList: null,
      $cardBox: null,
      $listViewShim: null,
    },
    $cardGoto: {
      av: "av",
      picture: "picture",
    },
    init() {
      this.setCSS();
      domUtils.ready(() => {
        this.addRecommendTag();
      });
    },
    setCSS() {
      if (this.$flag.isInitCSS) {
        return;
      }
      this.$flag.isInitCSS = true;
      addStyle(BilibiliRecommendCSS);
    },
    reset() {
      log$1.info("重置状态");
      this.$flag.isLoadingNextPage = false;
      this.removeScrollEvent();
      Object.keys(this.$ele).forEach((key) => {
        this.$ele[key] = null;
      });
    },
    addRecommendTag() {
      if (document.querySelector(".channel-menu a.recommend-tag")) {
        return;
      }
      let $vSwitcher = document.querySelector(".channel-menu .v-switcher");
      if (!$vSwitcher) {
        log$1.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");
        Qmsg.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");
        return;
      }
      let $recommendTag = domUtils.createElement(
        "a",
        {
          className: "v-switcher__header__tabs__item recommend-tag",
          innerHTML: "<span>推荐</span>",
        },
        {
          href: "javascript:;",
        }
      );
      let $recommendView = domUtils.createElement("div", {
        className: "m-recommend-view",
        innerHTML: `
            <div class="list-view">
                <div class="video-list-box">
                    <div class="video-list">
                        <div class="card-box">

                        </div>
                    </div>
                </div>
                <div class="list-view__shim">

				</div>
            </div>
            `,
      });
      this.$ele.$listView = $recommendView.querySelector(".list-view");
      this.$ele.$videoListBox = $recommendView.querySelector(".video-list-box");
      this.$ele.$videoList = $recommendView.querySelector(".video-list");
      this.$ele.$cardBox = $recommendView.querySelector(".card-box");
      this.$ele.$listViewShim = $recommendView.querySelector(".list-view__shim");
      this.$ele.$listViewShim.style.cssText = `z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;`;
      let $myHead = document.querySelector("#app .m-head");
      if ($myHead) {
        $myHead.appendChild($recommendView);
      }
      domUtils.on($recommendTag, "click", (event) => {
        domUtils.preventEvent(event);
        $recommendTag.classList.add("is-avtive");
        this.recommendClickEvent();
      });
      domUtils.on(
        $vSwitcher,
        "click",
        () => {
          $recommendTag.classList.remove("is-avtive");
        },
        {
          capture: true,
        }
      );
      domUtils.on(this.$ele.$cardBox, "click", ".v-card", (event) => {
        domUtils.preventEvent(event);
        let $click = event.target;
        window.open($click.href, "_blank");
      });
      domUtils.before($vSwitcher, $recommendTag);
      this.setScrollEvent();
      if (window.location.hash === "#/recommend/") {
        log$1.info("当前hash为推荐视频，出动触发");
        $recommendTag.click();
      }
    },
    async recommendClickEvent() {
      BilibiliUtils.goToUrl("#/recommend/", true);
    },
    setScrollEvent() {
      log$1.success("推荐视频监听滚动: IntersectionObserver");
      this.$data.intersectionObserver = new IntersectionObserver(
        async (entries) => {
          if (!this.$flag.isLoadingNextPage && entries[0].isIntersecting) {
            this.$flag.isLoadingNextPage = true;
            let flag = await this.scrollEvent();
            this.$flag.isLoadingNextPage = false;
            if (this.$data.loadNums <= 1 && flag) {
              domUtils.hide(this.$ele.$listViewShim, false);
              await utils.sleep(500);
              domUtils.show(this.$ele.$listViewShim, false);
            } else {
              domUtils.show(this.$ele.$listViewShim, false);
            }
          }
        },
        { threshold: 0, rootMargin: "0px 0px 0px 0px" }
      );
      this.$data.intersectionObserver.observe(this.$ele.$listViewShim);
    },
    removeScrollEvent() {
      this.$data.intersectionObserver?.disconnect();
      this.$data.intersectionObserver = null;
    },
    async scrollEvent() {
      let videoInfo = await this.getRecommendVideoInfo();
      if (!videoInfo) {
        return false;
      }
      log$1.success("获取推荐视频信息", videoInfo);
      let $fragment = document.createDocumentFragment();
      let allowLoadPictureCard = Panel.getValue("bili-head-recommend-push-graphic");
      videoInfo.forEach((videoInfoItem) => {
        let $ele = null;
        if (videoInfoItem.goto === this.$cardGoto.av) {
          $ele = this.getRecommendItemAVElement(videoInfoItem);
        } else if (videoInfoItem.goto === this.$cardGoto.picture) {
          if (allowLoadPictureCard) {
            $ele = this.getRecommendItemPictureElement(videoInfoItem);
          } else {
            return;
          }
        } else {
          log$1.error("该goto暂未适配", videoInfoItem);
          return;
        }
        $fragment.appendChild($ele);
      });
      this.$ele.$cardBox.appendChild($fragment);
      this.$data.loadNums++;
      return true;
    },
    async getRecommendVideoInfo() {
      let getData = {
        appkey: AppKeyInfo.ios.appkey,
        access_key: BilibiliQrCodeLogin.getAccessTokenInfo()?.access_token || "",
      };
      let Api = "https://app.bilibili.com/x/v2/feed/index";
      let getResp = await httpx.get(Api + "?" + utils.toSearchParamsStr(getData), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      if (!getResp.status) {
        return;
      }
      let data2 = utils.toJSON(getResp.data.responseText);
      if (!BilibiliApiResponseCheck.isWebApiSuccess(data2)) {
        Qmsg.error(data2["message"]);
        return;
      }
      return data2.data.items;
    },
    getRecommendItemPictureElement(data2) {
      let goto = data2.goto;
      let param = data2.param;
      let url = "/opus/" + param;
      let upName = data2.args.up_name;
      let title = data2.title;
      let cover = fixCover(data2.cover);
      let likeCount = data2.cover_left_text_1;
      let $vCard = domUtils.createElement(
        "a",
        {
          className: "v-card",
          href: url,
          innerHTML: `
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${cover}">
                                <img src="${cover}" alt="${title}">
                            </picture>
                        </div>
                    </div>
                    <div class="count">
                        <span>
                            <i class="iconfont like2"></i>
                            ${likeCount}
                        </span>
                    </div>
                </div>
                <p class="title">${title}</p>
                <div class="gm-up-info">
                    <div class="gm-up-name">
                        <p class="gm-picture-text">图文</p>
                        ${upName}
                    </div>
                    <div class="gm-video-handle">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                            </path>
                        </svg>
                    </div>
                </div>
                `,
        },
        {
          "data-param": param,
          "data-title": title,
          "data-goto": goto,
        }
      );
      $vCard["data-picture"] = data2;
      return $vCard;
    },
    getRecommendItemAVElement(data2) {
      let goto = data2.goto;
      let aid = data2?.player_args?.aid || data2.args.aid;
      let bvid = av2bv(aid);
      let url = "/video/" + bvid;
      let upName = data2.args.up_name;
      let title = data2.title;
      let cover = fixCover(data2.cover);
      let playCount = data2.cover_left_text_1;
      let commentCount = data2.cover_left_text_2;
      let videoTime = data2.cover_right_text;
      let $vCard = domUtils.createElement(
        "a",
        {
          className: "v-card",
          href: url,
          innerHTML: `
                <div class="card">
                    <div class="bfs-img-wrap">
                        <div class="bfs-img b-img">
                            <picture class="b-img__inner">
                                <source type="image/webp" srcset="${cover}">
                                <img src="${cover}" alt="${title}">
                            </picture>
                        </div>
                    </div>
                    <div class="count">
                        <span>
                            <i class="iconfont icon_shipin_bofangshu">
								<svg class="stats-item__icon" style="width: 16px; height: 16px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="16" height="16"><path d="M8 3.3320333333333334C6.321186666666667 3.3320333333333334 4.855333333333333 3.4174399999999996 3.820593333333333 3.5013466666666666C3.1014733333333333 3.5596599999999996 2.5440733333333334 4.109013333333333 2.48 4.821693333333333C2.4040466666666664 5.666533333333334 2.333333333333333 6.780666666666666 2.333333333333333 7.998666666666666C2.333333333333333 9.216733333333334 2.4040466666666664 10.330866666666665 2.48 11.175699999999999C2.5440733333333334 11.888366666666666 3.1014733333333333 12.437733333333334 3.820593333333333 12.496066666666666C4.855333333333333 12.579933333333333 6.321186666666667 12.665333333333333 8 12.665333333333333C9.678999999999998 12.665333333333333 11.144933333333334 12.579933333333333 12.179733333333333 12.496033333333333C12.898733333333332 12.4377 13.456 11.888533333333331 13.520066666666667 11.176033333333333C13.595999999999998 10.331533333333333 13.666666666666666 9.217633333333332 13.666666666666666 7.998666666666666C13.666666666666666 6.779766666666667 13.595999999999998 5.665846666666667 13.520066666666667 4.821366666666666C13.456 4.108866666666666 12.898733333333332 3.55968 12.179733333333333 3.5013666666666663C11.144933333333334 3.417453333333333 9.678999999999998 3.3320333333333334 8 3.3320333333333334zM3.7397666666666667 2.50462C4.794879999999999 2.41906 6.288386666666666 2.3320333333333334 8 2.3320333333333334C9.7118 2.3320333333333334 11.2054 2.4190733333333334 12.260533333333331 2.5046399999999998C13.458733333333331 2.6018133333333333 14.407866666666665 3.5285199999999994 14.516066666666667 4.73182C14.593933333333332 5.597933333333334 14.666666666666666 6.7427 14.666666666666666 7.998666666666666C14.666666666666666 9.2547 14.593933333333332 10.399466666666665 14.516066666666667 11.2656C14.407866666666665 12.468866666666665 13.458733333333331 13.395566666666667 12.260533333333331 13.492766666666665C11.2054 13.578333333333333 9.7118 13.665333333333333 8 13.665333333333333C6.288386666666666 13.665333333333333 4.794879999999999 13.578333333333333 3.7397666666666667 13.492799999999999C2.541373333333333 13.395599999999998 1.5922066666666668 12.468633333333333 1.4840200000000001 11.265266666666665C1.4061199999999998 10.3988 1.3333333333333333 9.253866666666667 1.3333333333333333 7.998666666666666C1.3333333333333333 6.743533333333333 1.4061199999999998 5.598579999999999 1.4840200000000001 4.732153333333333C1.5922066666666668 3.5287466666666667 2.541373333333333 2.601793333333333 3.7397666666666667 2.50462z" fill="currentColor"></path><path d="M9.8092 7.3125C10.338433333333333 7.618066666666666 10.338433333333333 8.382 9.809166666666666 8.687533333333333L7.690799999999999 9.910599999999999C7.161566666666666 10.216133333333332 6.5 9.8342 6.500006666666666 9.223066666666666L6.500006666666666 6.776999999999999C6.500006666666666 6.165873333333334 7.161566666666666 5.783913333333333 7.690799999999999 6.089479999999999L9.8092 7.3125z" fill="currentColor"></path></svg>
							</i>
                            ${playCount}
                        </span>
                        <span>
                            <i class="iconfont icon_shipin_danmushu">
								<svg class="stats-item__icon" style="width: 16px; height: 16px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" width="16" height="16"><path d="M8 3.3320333333333334C6.321186666666667 3.3320333333333334 4.855333333333333 3.4174399999999996 3.820593333333333 3.5013466666666666C3.1014733333333333 3.5596599999999996 2.5440733333333334 4.109013333333333 2.48 4.821693333333333C2.4040466666666664 5.666533333333334 2.333333333333333 6.780666666666666 2.333333333333333 7.998666666666666C2.333333333333333 9.216733333333334 2.4040466666666664 10.330866666666665 2.48 11.175699999999999C2.5440733333333334 11.888366666666666 3.1014733333333333 12.437733333333334 3.820593333333333 12.496066666666666C4.855333333333333 12.579933333333333 6.321186666666667 12.665333333333333 8 12.665333333333333C9.678999999999998 12.665333333333333 11.144933333333334 12.579933333333333 12.179733333333333 12.496033333333333C12.898733333333332 12.4377 13.456 11.888533333333331 13.520066666666667 11.176033333333333C13.595999999999998 10.331533333333333 13.666666666666666 9.217633333333332 13.666666666666666 7.998666666666666C13.666666666666666 6.779766666666667 13.595999999999998 5.665846666666667 13.520066666666667 4.821366666666666C13.456 4.108866666666666 12.898733333333332 3.55968 12.179733333333333 3.5013666666666663C11.144933333333334 3.417453333333333 9.678999999999998 3.3320333333333334 8 3.3320333333333334zM3.7397666666666667 2.50462C4.794879999999999 2.41906 6.288386666666666 2.3320333333333334 8 2.3320333333333334C9.7118 2.3320333333333334 11.2054 2.4190733333333334 12.260533333333331 2.5046399999999998C13.458733333333331 2.6018133333333333 14.407866666666665 3.5285199999999994 14.516066666666667 4.73182C14.593933333333332 5.597933333333334 14.666666666666666 6.7427 14.666666666666666 7.998666666666666C14.666666666666666 9.2547 14.593933333333332 10.399466666666665 14.516066666666667 11.2656C14.407866666666665 12.468866666666665 13.458733333333331 13.395566666666667 12.260533333333331 13.492766666666665C11.2054 13.578333333333333 9.7118 13.665333333333333 8 13.665333333333333C6.288386666666666 13.665333333333333 4.794879999999999 13.578333333333333 3.7397666666666667 13.492799999999999C2.541373333333333 13.395599999999998 1.5922066666666668 12.468633333333333 1.4840200000000001 11.265266666666665C1.4061199999999998 10.3988 1.3333333333333333 9.253866666666667 1.3333333333333333 7.998666666666666C1.3333333333333333 6.743533333333333 1.4061199999999998 5.598579999999999 1.4840200000000001 4.732153333333333C1.5922066666666668 3.5287466666666667 2.541373333333333 2.601793333333333 3.7397666666666667 2.50462z" fill="currentColor"></path><path d="M10.583333333333332 7.166666666666666L6.583333333333333 7.166666666666666C6.307193333333332 7.166666666666666 6.083333333333333 6.942799999999999 6.083333333333333 6.666666666666666C6.083333333333333 6.390526666666666 6.307193333333332 6.166666666666666 6.583333333333333 6.166666666666666L10.583333333333332 6.166666666666666C10.859466666666666 6.166666666666666 11.083333333333332 6.390526666666666 11.083333333333332 6.666666666666666C11.083333333333332 6.942799999999999 10.859466666666666 7.166666666666666 10.583333333333332 7.166666666666666z" fill="currentColor"></path><path d="M11.583333333333332 9.833333333333332L7.583333333333333 9.833333333333332C7.3072 9.833333333333332 7.083333333333333 9.609466666666666 7.083333333333333 9.333333333333332C7.083333333333333 9.0572 7.3072 8.833333333333332 7.583333333333333 8.833333333333332L11.583333333333332 8.833333333333332C11.859466666666666 8.833333333333332 12.083333333333332 9.0572 12.083333333333332 9.333333333333332C12.083333333333332 9.609466666666666 11.859466666666666 9.833333333333332 11.583333333333332 9.833333333333332z" fill="currentColor"></path><path d="M5.25 6.666666666666666C5.25 6.942799999999999 5.02614 7.166666666666666 4.75 7.166666666666666L4.416666666666666 7.166666666666666C4.140526666666666 7.166666666666666 3.9166666666666665 6.942799999999999 3.9166666666666665 6.666666666666666C3.9166666666666665 6.390526666666666 4.140526666666666 6.166666666666666 4.416666666666666 6.166666666666666L4.75 6.166666666666666C5.02614 6.166666666666666 5.25 6.390526666666666 5.25 6.666666666666666z" fill="currentColor"></path><path d="M6.25 9.333333333333332C6.25 9.609466666666666 6.02614 9.833333333333332 5.75 9.833333333333332L5.416666666666666 9.833333333333332C5.140526666666666 9.833333333333332 4.916666666666666 9.609466666666666 4.916666666666666 9.333333333333332C4.916666666666666 9.0572 5.140526666666666 8.833333333333332 5.416666666666666 8.833333333333332L5.75 8.833333333333332C6.02614 8.833333333333332 6.25 9.0572 6.25 9.333333333333332z" fill="currentColor"></path></svg>
							</i>
                            ${commentCount}
                        </span>
                        <span class="gm-video-duration">${videoTime}</span>
                    </div>
                </div>
                <p class="title">${title}</p>
                <div class="gm-up-info">
                    <div class="gm-up-name">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
                            </path>
                        </svg>
                        ${upName}
                    </div>
                    <div class="gm-video-handle">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                            </path>
                        </svg>
                    </div>
                </div>
                `,
        },
        {
          "data-aid": aid,
          "data-title": title,
          "data-goto": goto,
        }
      );
      $vCard["data-video"] = data2;
      return $vCard;
    },
  };
  const BilibiliHead = {
    $flag: {
      isInit_reconfigurationTinyAppSettingButton: false,
      isInit_beautifyTopNavBar_css: false,
    },
    init() {
      Panel.execMenuOnce("bili-head-supplementaryVideoStreamingInformation", () => {
        this.addVideoListUPInfo();
      });
      Panel.execMenu("bili-head-recommend-enable", () => {
        BilibiliRecommend.init();
      });
    },
    addVideoListUPInfo() {
      log$1.info("添加视频列表UP主信息");
      addStyle(
        `
		${BilibiliData.className.head} .video-list .card-box .gm-up-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: var(--pd-width);
		}
		${BilibiliData.className.head} .video-list .card-box .gm-up-info .gm-up-name {
			display: flex;
			align-items: center;
			font-size: 3vmin;
			color: #999A9E;
		}
		${BilibiliData.className.head} .video-list .card-box .gm-up-info .gm-up-name svg {
			margin-right: calc(var(--pd-width) / 2);
			width: 3vmin;
			height: 3vmin;
		}
		${BilibiliData.className.head} .gm-video-duration{
			margin: 0 auto;
		}
        `
      );
      domUtils.waitNode(BilibiliData.className.head + " .video-list .card-box").then(() => {
        let lockFunc = new utils.LockFunction(() => {
          document
            .querySelectorAll(BilibiliData.className.head + " .video-list .card-box .v-card")
            .forEach(($vcard) => {
              let vueObj = VueUtils.getVue($vcard);
              let upName = vueObj?.info?.author?.name || vueObj?.info?.owner?.name;
              let duration = vueObj?.info?.duration;
              if (upName && !$vcard.querySelector(".gm-up-info")) {
                let $upInfo = document.createElement("div");
                $upInfo.innerHTML = `
                                    <div class="gm-up-name">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path fill="#999A9E" d="M896 736v-448c0-54.4-41.6-96-96-96h-576C169.6 192 128 233.6 128 288v448c0 54.4 41.6 96 96 96h576c54.4 0 96-41.6 96-96zM800 128C889.6 128 960 198.4 960 288v448c0 89.6-70.4 160-160 160h-576C134.4 896 64 825.6 64 736v-448C64 198.4 134.4 128 224 128h576zM419.2 544V326.4h60.8v240c0 96-57.6 144-147.2 144S192 665.6 192 569.6V326.4h60.8v217.6c0 51.2 3.2 108.8 83.2 108.8s83.2-57.6 83.2-108.8z m288-38.4c28.8 0 60.8-16 60.8-60.8 0-48-28.8-60.8-60.8-60.8H614.4v121.6h92.8z m3.2-179.2c102.4 0 121.6 70.4 121.6 115.2 0 48-19.2 115.2-121.6 115.2H614.4V704h-60.8V326.4h156.8z">
                                            </path>
                                        </svg>
                                        ${upName}
                                    </div>
                                    <div class="gm-video-handle">
                                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path fill="#2E2F30" d="M512 256a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z m0 341.333333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z m0 341.333334a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z">
                                            </path>
                                        </svg>
                                    </div>`;
                $upInfo.className = "gm-up-info";
                $vcard.appendChild($upInfo);
              }
              if (duration) {
                let $count = $vcard.querySelector(".count");
                if ($count && !$count.querySelector(".gm-video-duration")) {
                  let showDuration = typeof duration === "string" ? duration : BilibiliUtils.parseDuration(duration);
                  let $duration = document.createElement("span");
                  $duration.className = "gm-video-duration";
                  $duration.innerHTML = showDuration;
                  $count.appendChild($duration);
                }
              }
            });
        }, 25);
        utils.mutationObserver(document.body, {
          config: {
            subtree: true,
            childList: true,
            attributes: true,
          },
          callback() {
            lockFunc.run();
          },
        });
      });
    },
    async reconfigurationTinyAppSettingButton() {
      log$1.info(`重构tinyApp右上角的设置按钮图标`);
      if (!this.$flag.isInit_reconfigurationTinyAppSettingButton) {
        this.$flag.isInit_reconfigurationTinyAppSettingButton = true;
        addStyle(
          `

			.nav-bar .right{
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
			}
			.gm-face{
				width: 6.4vmin;
				height: 6.4vmin;
				display: -webkit-box;
				display: -ms-flexbox;
				display: flex;
				-webkit-box-pack: center;
				-ms-flex-pack: center;
				justify-content: center;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				margin-right: 3.2vmin;
				border-radius: 3.2vmin;
				overflow: hidden;
			}
			.gm-face-avatar{
				width: 100%;
				height: 100%;
				overflow: hidden;
			}
			.gm-face-avatar img{
				width: 100%;
				height: 100%;
				-o-object-fit: cover;
				object-fit: cover;
			}
			`
        );
      }
      let $iconConfig = await domUtils.waitNode(".nav-bar .icon-config", 1e4);
      if (!$iconConfig) {
        log$1.error("未找到设置按钮图标，无法重构");
        return;
      }
      $iconConfig.outerHTML = `
		<div class="gm-face">
			<div class="gm-face-avatar">
				<img src="http://i0.hdslb.com/bfs/face/member/noface.jpg">
			</div>
		</div>
		`;
      let isLogin = false;
      let uid = null;
      let $gmFace = document.querySelector(".gm-face");
      let $img = $gmFace.querySelector("img");
      VueUtils.waitVuePropToSet("#app", [
        {
          check(vueIns) {
            return typeof vueIns?.$store?.state?.common?.userInfo?.isLogin === "boolean";
          },
          set(vueIns) {
            let userInfo = vueIns?.$store?.state?.common?.userInfo;
            isLogin = userInfo?.isLogin;
            if (isLogin) {
              uid = userInfo?.mid;
              if (uid == null) {
                log$1.warn(`当前是脚本设置的isLogin但其实未登录账号`);
                isLogin = false;
                return;
              }
              userInfo?.uname;
              $img.src = userInfo?.face || $img.src;
            } else {
              log$1.warn(`经检测，Bilibili尚未登录账号`);
            }
          },
        },
      ]);
      domUtils.on($gmFace, "click", (event) => {
        domUtils.preventEvent(event);
        if (isLogin) {
          if (uid != null) {
            let url = BilibiliUrl.getUserSpaceUrl(uid);
            BilibiliUtils.goToUrl(url, false);
          } else {
            Qmsg.error("获取用户id失败");
          }
        } else {
          BilibiliUtils.goToLogin(window.location.href);
        }
      });
    },
    beautifyTopNavBar() {
      log$1.info(`美化顶部navbar`);
      if (!this.$flag.isInit_beautifyTopNavBar_css) {
        this.$flag.isInit_beautifyTopNavBar_css = true;
        addStyle(
          `
			/* 隐藏logo */
			.${BilibiliData.className.head} .m-navbar .logo,
			/* 隐藏原有的搜索图标 */
			.${BilibiliData.className.head} .m-navbar .icon-search{
				display: none !important;
			}
			/* 设置右侧的宽度撑开、逆反 */
			.${BilibiliData.className.head} .m-navbar .right{
				width: 100%;
				display: flex;
				flex-direction: row-reverse;
				justify-content: flex-end;
			}
			/* 头像 */
			.${BilibiliData.className.head} .m-navbar .gm-face{
				flex: 0 auto;
				margin-top: 1.86667vmin;
			}
			/* 新的输入框 */
			.${BilibiliData.className.head} .m-navbar .gm-input-area{
				flex: 1;
				margin-top: 1.86667vmin;
				height: 8vmin;
				line-height: 8vmin;
				padding: 0 3.2vmin;
				background: #f4f4f4;
				border-radius: 4.53333vmin;
				display: flex;
			}
			/* 输入框前面的搜索图标 */
			.${BilibiliData.className.head} .m-navbar .gm-input-area .ic_search_tab{
				color: #a0a0a0;
				vertical-align: middle;
				font-size: 4.33333vmin;
			}
			/* 输入框内容 */
			.${BilibiliData.className.head} .m-navbar .gm-input-area input[type="search"]{
				font-size: 3.46667vmin;
				color: #505050;
				border: none;
				background: transparent;
				width: 61.33333vmin;
				user-select: none !important;!i;!;
				padding-left: 2.122vmin;
				pointer-events: none;
			}
			/* 调整首页顶部搜索框的样式 */
			.${BilibiliData.className.head} .m-navbar .right .search {
				border: 1px solid #ccc;
				width: 100% !important;
				height: auto !important;
				border-radius: 1rem;
				display: flex;
				align-items: center;
				padding: 2px 6px;
			}
			`
        );
      }
      domUtils.waitNode(".m-head .m-navbar .icon-search", 1e4).then(async ($iconSearch) => {
        if (!$iconSearch) {
          return;
        }
        if ($iconSearch.parentElement.querySelector(".gm-input-area")) {
          return;
        }
        let $inputAreaContainer = domUtils.createElement("div", {
          className: "gm-input-area",
          innerHTML: `
						<i class="iconfont ic_search_tab"></i>
						<input type="search" placeholder="" readonly="" disabled="">
					`,
        });
        let $input = $inputAreaContainer.querySelector("input");
        domUtils.on($inputAreaContainer, "click", (event) => {
          domUtils.preventEvent(event);
          BilibiliUtils.goToUrl("/search", true);
        });
        domUtils.after($iconSearch, $inputAreaContainer);
        let hotWordInfo = await BilibiliSearchApi.getSearchInputPlaceholder();
        if (hotWordInfo != null) {
          log$1.info(`热点信息：`, hotWordInfo);
          $input.placeholder = hotWordInfo.show_name || hotWordInfo.name;
        }
      });
    },
  };
  const BilibiliReadMobile = {
    init() {
      this.removeAds();
      Panel.onceExec("bili-pc-read-mobile-autoExpand", () => {
        return this.autoExpand();
      });
    },
    removeAds() {
      CommonUtil.addBlockCSS("body>.h5-download-bar");
    },
    autoExpand() {
      log$1.info("自动展开");
      return [
        addStyle(
          `
			${BilibiliPCData.className.read.mobile} .limit{
				overflow: unset !important;
				max-height: unset !important;
			}`
        ),
        CommonUtil.addBlockCSS(BilibiliPCData.className.read.mobile + " .read-more"),
      ];
    },
  };
  const BilibiliSpace = {
    init() {
      Panel.execMenuOnce("bili-space-repairRealJump", () => {
        this.repairRealJump();
      });
      Panel.execMenuOnce("bili-space-coverDynamicStateCardVideo", () => {
        this.coverDynamicStateCardVideo();
      });
    },
    repairRealJump() {
      let lockFn = new utils.LockFunction(() => {
        $$(BilibiliData.className.space + " .wx-tag.open-app-wrapper").forEach(($el) => {
          let vueIns = VueUtils.getVue($el);
          if (typeof vueIns?.disabled === "boolean") {
            vueIns.disabled = false;
          }
        });
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          lockFn.run();
        },
      });
      return;
    },
    coverDynamicStateCardVideo() {
      log$1.info(`覆盖动态视频的点击事件`);
      domUtils.on(
        document,
        "click",
        ".card-content .main .wings",
        (event) => {
          let $wings = event.target;
          let $card = $wings.closest(".card");
          if (!$card) {
            Qmsg.error("未找到对应的.card元素");
            return;
          }
          let vueIns = VueUtils.getVue($card);
          if (!vueIns) {
            Qmsg.error("未找到对应的vue实例");
            return;
          }
          let url = vueIns?.shareData?.default?.url;
          if (!url) {
            Qmsg.error("未找到对应的url");
            return;
          }
          BilibiliUtils.goToUrl(url);
        },
        {
          capture: true,
        }
      );
    },
  };
  const BilibiliVueProp = {
    init() {
      Panel.execMenu("bili-noCallApp", () => {
        this.noCallApp();
      });
      Panel.execMenu("bili-setLogin", () => {
        this.setLogin();
      });
      Panel.execMenu("bili-setIsClient", () => {
        this.setIsClient();
      });
    },
    noCallApp() {
      VueUtils.waitVuePropToSet("#app", [
        {
          msg: "设置参数 $store.state.common.noCallApp",
          check(vueIns) {
            return typeof vueIns?.$store?.state?.common?.noCallApp === "boolean";
          },
          set(vueIns) {
            log$1.success("成功设置参数 $store.state.common.noCallApp=true");
            vueIns.$store.state.common.noCallApp = true;
          },
        },
      ]);
    },
    setLogin() {
      let GM_Cookie = new utils.GM_Cookie();
      let cookie_DedeUserID = GM_Cookie.get("DedeUserID");
      if (cookie_DedeUserID != null) {
        log$1.info("Cookie DedeUserID已存在：", cookie_DedeUserID.value);
      } else {
        GM_Cookie.set(
          {
            name: "DedeUserID",
            value: "2333",
          },
          (error) => {
            if (error) {
              log$1.error(error);
            } else {
              log$1.success("Cookie成功设置DedeUserID=>2333");
            }
          }
        );
      }
      VueUtils.waitVuePropToSet("#app", [
        {
          msg: "设置参数 $store.state.common.userInfo.isLogin",
          check(vueObj) {
            return typeof vueObj?.$store?.state?.common?.userInfo?.isLogin === "boolean";
          },
          set(vueObj) {
            log$1.success("成功设置参数 $store.state.common.userInfo.isLogin=true");
            vueObj.$store.state.common.userInfo.isLogin = true;
          },
        },
        {
          msg: "设置参数 $store.state.loginInfo.isLogin",
          check(vueObj) {
            return typeof vueObj?.$store?.state?.loginInfo?.isLogin === "boolean";
          },
          set(vueObj) {
            log$1.success("成功设置参数 $store.state.loginInfo.isLogin=true");
            vueObj.$store.state.loginInfo.isLogin = true;
          },
        },
      ]);
    },
    setIsClient() {
      VueUtils.waitVuePropToSet("#app", [
        {
          msg: "设置参数 $store.state.video.isClient",
          check(vueIns) {
            return typeof typeof vueIns?.$store?.state?.video?.isClient === "boolean";
          },
          set(vueIns) {
            log$1.success("成功设置参数 $store.state.video.isClient=true");
            vueIns.$store.state.video.isClient = true;
          },
        },
        {
          msg: "设置参数 $store.state.opus.isClient=true",
          check(vueIns) {
            return typeof vueIns?.$store?.state?.opus?.isClient === "boolean";
          },
          set(vueIns) {
            log$1.success("成功设置参数 $store.state.opus.isClient");
            vueIns.$store.state.opus.isClient = true;
          },
        },
        {
          msg: "设置参数 $store.state.playlist.isClient",
          check(vueIns) {
            return typeof vueIns?.$store?.state?.playlist?.isClient === "boolean";
          },
          set(vueIns) {
            log$1.success("成功设置参数 $store.state.playlist.isClient=true");
            vueIns.$store.state.playlist.isClient = true;
          },
        },
        {
          msg: "设置参数 $store.state.ver.bili",
          check(vueIns) {
            return typeof vueIns?.$store?.state?.ver?.bili === "boolean";
          },
          set(vueIns) {
            log$1.success("成功设置参数 $store.state.ver.bili=true");
            vueIns.$store.state.ver.bili = true;
          },
        },
        {
          msg: "设置参数 $store.state.ver.biliVer",
          check(vueIns) {
            return typeof vueIns?.$store?.state?.ver?.biliVer === "number";
          },
          set(vueIns) {
            log$1.success("成功设置参数 $store.state.ver.biliVer=2333333");
            vueIns.$store.state.ver.biliVer = 2333333;
          },
        },
      ]);
    },
    setTinyApp() {
      VueUtils.waitVuePropToSet("#app", [
        {
          msg: "设置参数 $store.state.common.tinyApp",
          check(vueIns) {
            return typeof vueIns?.$store?.state?.common?.tinyApp === "boolean";
          },
          set(vueIns) {
            vueIns.$store.state.common.tinyApp = true;
            log$1.success("成功设置参数 $store.state.common.tinyApp=true");
            Panel.onceExec("bili-tinyApp-init-css", () => {
              addStyle(
                `
							.tiny-app .reply-input,.tiny-app .reply-item .info .name .right,.tiny-app .reply-item .info .toolbar,.tiny-app .sub-reply-input {
								display: block;
							}
						`
              );
            });
          },
        },
      ]);
    },
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
  const UIInput = function (
    text,
    key,
    defaultValue,
    description,
    changeCallback,
    placeholder = "",
    isNumber,
    isPassword,
    afterAddToUListCallBack,
    valueChangeCallback
  ) {
    const result = {
      text,
      type: "input",
      isNumber: Boolean(isNumber),
      isPassword: Boolean(isPassword),
      attributes: {},
      props: {},
      description,
      afterAddToUListCallBack,
      getValue() {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      callback(event, value, valueAsNumber) {
        if (typeof changeCallback === "function") {
          const result2 = changeCallback(event, value, valueAsNumber);
          if (result2) {
            return;
          }
        }
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      placeholder,
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
  const UISwitch = function (
    text,
    key,
    defaultValue,
    clickCallBack,
    description,
    afterAddToUListCallBack,
    disabled,
    valueChangeCallBack
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
        log$1.success(`${value ? "开启" : "关闭"} ${text}`);
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      afterAddToUListCallBack,
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
  const UITextArea = function (
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
        const storageApiValue = this.props[PROPS_STORAGE_API];
        const value = storageApiValue.get(key, defaultValue);
        if (Array.isArray(value)) {
          return value.join("\n");
        }
        return value;
      },
      callback(event, value) {
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
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
  class RuleEditView {
    option;
    constructor(option) {
      this.option = option;
    }
    async showView() {
      let $dialog = __pops__.confirm({
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
        mask: {
          enable: true,
        },
        style: `
                ${__pops__.config.cssText.panelCSS}
                
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
            `,
        width:
          typeof this.option.width === "function" ? this.option.width() : window.innerWidth > 500 ? "500px" : "88vw",
        height:
          typeof this.option.height === "function" ? this.option.height() : window.innerHeight > 500 ? "500px" : "80vh",
      });
      let $form = $dialog.$shadowRoot.querySelector(".rule-form-container");
      $dialog.$shadowRoot.querySelector("input[type=submit]");
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
    $data = {
      isFilteredData: [],
    };
    constructor(option) {
      this.option = option;
    }
    showView() {
      let $alert = __pops__.alert({
        title: {
          text: this.option.title,
          position: "center",
        },
        content: {
          text: `
                <div class="filter-container"></div>
                `,
        },
        btn: {
          ok: {
            text: "关闭",
            type: "default",
          },
        },
        drag: true,
        mask: {
          enable: true,
        },
        width: window.innerWidth > 500 ? "350px" : "80vw",
        height: window.innerHeight > 500 ? "300px" : "70vh",
        style: `
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
            `,
      });
      let $filterContainer = $alert.$shadowRoot.querySelector(".filter-container");
      let $fragment = document.createDocumentFragment();
      this.option.filterOption.forEach((filterOption) => {
        let $button = domUtils.createElement(
          "button",
          {
            innerText: filterOption.name,
          },
          {
            type: "button",
          }
        );
        let execFilterAndCloseDialog = async () => {
          this.$data.isFilteredData = [];
          let allRuleInfo = await this.option.getAllRuleInfo();
          allRuleInfo.forEach(async (ruleInfo) => {
            let filterResult = await filterOption.filterCallBack(ruleInfo.data);
            if (filterResult) {
              domUtils.show(ruleInfo.$el, false);
            } else {
              domUtils.hide(ruleInfo.$el, false);
              this.$data.isFilteredData.push(ruleInfo.data);
            }
          });
          if (typeof this.option.execFilterCallBack === "function") {
            await this.option.execFilterCallBack();
          }
          $alert.close();
        };
        domUtils.on($button, "click", async (event) => {
          domUtils.preventEvent(event);
          if (typeof filterOption.callback === "function") {
            let result = await filterOption.callback(event, execFilterAndCloseDialog);
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
    getFilteredData() {
      return this.$data.isFilteredData;
    }
  }
  class RuleView {
    option;
    constructor(option) {
      this.option = option;
    }
    async showView(filterCallBack) {
      let $popsConfirm = __pops__.confirm({
        title: {
          text: this.option.title,
          position: "center",
        },
        content: {
          text: `
                    <div class="rule-view-container">
                    </div>
                    `,
          html: true,
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
              this.showEditView(false, await this.option.getAddData(), $popsConfirm.$shadowRoot);
            },
          },
          close: {
            enable: true,
            callback(event) {
              $popsConfirm.close();
            },
          },
          cancel: {
            enable: this.option?.bottomControls?.filter?.enable || false,
            type: "default",
            text: "过滤",
            callback: async (details, event) => {
              if (typeof this.option?.bottomControls?.filter?.callback === "function") {
                let result = await this.option.bottomControls.filter.callback();
                if (typeof result === "boolean" && !result) {
                  return;
                }
              }
              let getAllRuleElement = () => {
                return Array.from($popsConfirm.$shadowRoot.querySelectorAll(".rule-view-container .rule-item"));
              };
              let $button = event.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");
              if (domUtils.text($button).includes("取消")) {
                let cancelFilterResult = await this.option?.bottomControls?.filter?.cancelFilterCallback?.({
                  $button,
                  getAllRuleElement,
                });
                if (typeof cancelFilterResult === "boolean" && !cancelFilterResult) {
                  return;
                }
                getAllRuleElement().forEach(($el) => {
                  domUtils.show($el, false);
                });
                domUtils.text($button, "过滤");
              } else {
                let ruleFilterView = new RuleFilterView({
                  title: this.option.bottomControls?.filter?.title ?? "过滤规则",
                  filterOption: this.option.bottomControls?.filter?.option || [],
                  execFilterCallBack: async () => {
                    domUtils.text($button, "取消过滤");
                    await this.option.bottomControls?.filter?.execFilterCallBack?.();
                    const isFilteredData = ruleFilterView.getFilteredData();
                    if (isFilteredData.length) {
                      domUtils.text($button, `取消过滤(${isFilteredData.length})`);
                    }
                  },
                  getAllRuleInfo: () => {
                    return getAllRuleElement().map(($el) => {
                      return {
                        data: this.parseRuleItemElement($el).data,
                        $el,
                      };
                    });
                  },
                });
                ruleFilterView.showView();
              }
            },
          },
          other: {
            enable: this.option?.bottomControls?.clear?.enable || true,
            type: "xiaomi-primary",
            text: `清空所有(${(await this.option.data()).length})`,
            callback: (event) => {
              let $askDialog = __pops__.confirm({
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
                    callback: async (popsEvent) => {
                      log$1.success("清空所有");
                      if (typeof this.option?.bottomControls?.clear?.callback === "function") {
                        this.option.bottomControls.clear.callback();
                      }
                      let data2 = await this.option.data();
                      if (data2.length) {
                        Qmsg.error("清理失败");
                        return;
                      } else {
                        Qmsg.success("清理成功");
                      }
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
        mask: {
          enable: true,
        },
        width: window.innerWidth > 500 ? "500px" : "88vw",
        height: window.innerHeight > 500 ? "500px" : "80vh",
        style: `
            ${__pops__.config.cssText.panelCSS}
            
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
      });
      let allData = await this.option.data();
      let changeButtonText = false;
      let isFilteredDataLength = 0;
      for (let index = 0; index < allData.length; index++) {
        let item = allData[index];
        let $ruleItemList = await this.appendRuleItemElement($popsConfirm.$shadowRoot, item);
        let isNotFilterFlag = true;
        if (typeof filterCallBack === "function") {
          isNotFilterFlag = filterCallBack(item);
        } else if (typeof filterCallBack === "number" && !isNaN(filterCallBack)) {
          isNotFilterFlag =
            (await this.option.bottomControls?.filter?.option[filterCallBack]?.filterCallBack(item)) ?? isNotFilterFlag;
        }
        if (!isNotFilterFlag) {
          changeButtonText = true;
          domUtils.hide($ruleItemList, false);
          isFilteredDataLength++;
        }
      }
      if (changeButtonText) {
        let $button = $popsConfirm.$shadowRoot.querySelector(".pops-confirm-btn-cancel span");
        domUtils.text($button, `取消过滤${isFilteredDataLength ? `(${isFilteredDataLength})` : ""}`);
      }
    }
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
        getView: async (data2) => {
          return await this.option.itemControls.edit.getView(data2, isEdit);
        },
        btn: {
          ok: {
            enable: true,
            text: isEdit ? "修改" : "添加",
          },
          cancel: {
            callback: async (detail, event) => {
              detail.close();
              await dialogCloseCallBack(false);
            },
          },
          close: {
            callback: async (detail, event) => {
              detail.close();
              await dialogCloseCallBack(false);
            },
          },
        },
        onsubmit: async ($form, data2) => {
          let result = await this.option.itemControls.edit.onsubmit($form, isEdit, data2);
          if (result.success) {
            if (isEdit) {
              Qmsg.success("修改成功");
              $parentShadowRoot &&
                (await this.updateRuleItemElement(result.data, $editRuleItemElement, $parentShadowRoot));
            } else {
              $parentShadowRoot && (await this.appendRuleItemElement($parentShadowRoot, result.data));
            }
          } else {
            if (isEdit) {
              log$1.error("修改失败");
            }
          }
          return result;
        },
        style: this.option.itemControls.edit.style,
        width: this.option.itemControls.edit.width,
        height: this.option.itemControls.edit.height,
      });
      editView.showView();
    }
    parseViewElement($shadowRoot) {
      let $container = $shadowRoot.querySelector(".rule-view-container");
      let $deleteBtn = $shadowRoot.querySelector(".pops-confirm-btn button.pops-confirm-btn-other");
      return {
        $container,
        $deleteBtn,
      };
    }
    parseRuleItemElement($ruleElement) {
      let $enable = $ruleElement.querySelector(".rule-controls-enable");
      let $enableSwitch = $enable.querySelector(".pops-panel-switch");
      let $enableSwitchInput = $enable.querySelector(".pops-panel-switch__input");
      let $enableSwitchCore = $enable.querySelector(".pops-panel-switch__core");
      let $edit = $ruleElement.querySelector(".rule-controls-edit");
      let $delete = $ruleElement.querySelector(".rule-controls-delete");
      return {
        $enable,
        $enableSwitch,
        $enableSwitchInput,
        $enableSwitchCore,
        $edit,
        $delete,
        data: Reflect.get($ruleElement, "data-rule"),
      };
    }
    async createRuleItemElement(data2, $shadowRoot) {
      let name = await this.option.getDataItemName(data2);
      let $ruleItem = domUtils.createElement("div", {
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
      Reflect.set($ruleItem, "data-rule", data2);
      let switchCheckedClassName = "pops-panel-switch-is-checked";
      const { $enable, $enableSwitch, $enableSwitchCore, $enableSwitchInput, $delete, $edit } =
        this.parseRuleItemElement($ruleItem);
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
          await this.option.itemControls.enable.callback(data2, isChecked);
        });
        if (await this.option.itemControls.enable.getEnable(data2)) {
          $enableSwitch.classList.add(switchCheckedClassName);
        }
      } else {
        $enable.remove();
      }
      if (this.option.itemControls.edit.enable) {
        domUtils.on($edit, "click", (event) => {
          domUtils.preventEvent(event);
          this.showEditView(true, data2, $shadowRoot, $ruleItem, (newData) => {
            data2 = null;
            data2 = newData;
          });
        });
      } else {
        $edit.remove();
      }
      if (this.option.itemControls.delete.enable) {
        domUtils.on($delete, "click", (event) => {
          domUtils.preventEvent(event);
          let $askDialog = __pops__.confirm({
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
                callback: async (popsEvent) => {
                  log$1.success("删除数据");
                  let flag = await this.option.itemControls.delete.deleteCallBack(data2);
                  if (flag) {
                    Qmsg.success("成功删除该数据");
                    $ruleItem.remove();
                    await this.updateDeleteAllBtnText($shadowRoot);
                    $askDialog.close();
                  } else {
                    Qmsg.error("删除该数据失败");
                  }
                },
              },
              cancel: {
                text: "取消",
                enable: true,
              },
            },
            mask: {
              enable: true,
            },
            width: "300px",
            height: "200px",
          });
        });
      } else {
        $delete.remove();
      }
      return $ruleItem;
    }
    async appendRuleItemElement($shadowRoot, data2) {
      let { $container } = this.parseViewElement($shadowRoot);
      let $ruleItem = [];
      let iteratorData = Array.isArray(data2) ? data2 : [data2];
      for (let index = 0; index < iteratorData.length; index++) {
        let item = iteratorData[index];
        let $item = await this.createRuleItemElement(item, $shadowRoot);
        $container.appendChild($item);
        $ruleItem.push($item);
      }
      await this.updateDeleteAllBtnText($shadowRoot);
      return $ruleItem;
    }
    async updateRuleContaienrElement($shadowRoot) {
      this.clearContent($shadowRoot);
      const { $container } = this.parseViewElement($shadowRoot);
      let data2 = await this.option.data();
      await this.appendRuleItemElement($shadowRoot, data2);
      await this.updateDeleteAllBtnText($shadowRoot);
    }
    async updateRuleItemElement(data2, $oldRuleItem, $shadowRoot) {
      let $newRuleItem = await this.createRuleItemElement(data2, $shadowRoot);
      $oldRuleItem.after($newRuleItem);
      $oldRuleItem.remove();
    }
    clearContent($shadowRoot) {
      const { $container } = this.parseViewElement($shadowRoot);
      domUtils.html($container, "");
    }
    setDeleteBtnText($shadowRoot, text, isHTML = false) {
      const { $deleteBtn } = this.parseViewElement($shadowRoot);
      if (isHTML) {
        domUtils.html($deleteBtn, text);
      } else {
        domUtils.text($deleteBtn, text);
      }
    }
    async updateDeleteAllBtnText($shadowRoot) {
      let data2 = await this.option.data();
      this.setDeleteBtnText($shadowRoot, `清空所有(${data2.length})`);
    }
  }
  const BilibiliComponentDetectionRule = {
    $data: {
      whiteList: [],
      ruleData: [],
    },
    $key: {
      STORAGE_KEY: "bili-componentDetection-rule",
    },
    init() {
      this.$data.whiteList.length = 0;
      this.$data.ruleData.length = 0;
      let allData = this.getData();
      allData.forEach((data2) => {
        if (!data2.enable) {
          return;
        }
        this.$data.ruleData.push(data2);
      });
    },
    showView() {
      let panelHandlerComponents = __pops__.config.PanelHandlerComponents();
      function generateStorageApi(data2, handler) {
        return {
          get(key, defaultValue) {
            return data2[key] ?? defaultValue;
          },
          set(key, value) {
            data2[key] = value;
          },
        };
      }
      let ruleView = new RuleView({
        title: "成分检测",
        data: () => {
          return this.getData();
        },
        getAddData: () => {
          return this.getTemplateData();
        },
        getDataItemName: (data2) => {
          return data2["name"];
        },
        updateData: (data2) => {
          return this.updateData(data2);
        },
        deleteData: (data2) => {
          return this.deleteData(data2);
        },
        getData: (data2) => {
          let allData = this.getData();
          let findValue = allData.find((item) => item.uuid === data2.uuid);
          return findValue ?? data2;
        },
        itemControls: {
          enable: {
            enable: true,
            getEnable(data2) {
              return data2.enable;
            },
            callback: (data2, enable) => {
              data2.enable = enable;
              this.updateData(data2);
            },
          },
          edit: {
            enable: true,
            getView: (data2, isEdit) => {
              let $fragment = document.createDocumentFragment();
              let templateData = this.getTemplateData();
              if (!isEdit) {
                data2 = templateData;
              }
              let enable_template = UISwitch("启用", "enable", templateData.enable);
              Reflect.set(enable_template.props, PROPS_STORAGE_API, generateStorageApi(data2));
              let $enable = panelHandlerComponents.createSectionContainerItem_switch(enable_template);
              let name_template = UIInput("规则名称", "name", "", templateData.name, void 0, "必填");
              Reflect.set(name_template.props, PROPS_STORAGE_API, generateStorageApi(data2));
              let $name = panelHandlerComponents.createSectionContainerItem_input(name_template);
              let isShowDisplayName_template = UISwitch(
                "是否显示标签名称",
                "isShowDisplayName",
                templateData.data.isShowDisplayName
              );
              Reflect.set(isShowDisplayName_template.props, PROPS_STORAGE_API, generateStorageApi(data2.data));
              let $isShowDisplayName =
                panelHandlerComponents.createSectionContainerItem_switch(isShowDisplayName_template);
              let displayName_template = UIInput(
                "标签名称",
                "displayName",
                templateData.data.displayName,
                "例如：原神"
              );
              Reflect.set(displayName_template.props, PROPS_STORAGE_API, generateStorageApi(data2.data));
              let $displayName = panelHandlerComponents.createSectionContainerItem_input(displayName_template);
              let isShowDisplayIcon_template = UISwitch(
                "是否显示标签图标",
                "isShowDisplayIcon",
                templateData.data.isShowDisplayIcon
              );
              Reflect.set(isShowDisplayIcon_template.props, PROPS_STORAGE_API, generateStorageApi(data2.data));
              let $isShowDisplayIcon =
                panelHandlerComponents.createSectionContainerItem_switch(isShowDisplayIcon_template);
              let displayIcon_template = UIInput(
                "标签图标",
                "displayIcon",
                templateData.data.displayIcon,
                "Url或base64"
              );
              Reflect.set(displayIcon_template.props, PROPS_STORAGE_API, generateStorageApi(data2.data));
              let $displayIcon = panelHandlerComponents.createSectionContainerItem_input(displayIcon_template);
              let keywords_template = UITextArea(
                "关键词",
                "keywords",
                "",
                "用于匹配标题、简介、转发内容的关键词",
                void 0,
                "多个关键词换行"
              );
              Reflect.set(keywords_template.props, PROPS_STORAGE_API, {
                get(key, defaultValue) {
                  let value = data2.data[key] ?? defaultValue;
                  if (typeof value === "string") {
                    return value.split("\n");
                  }
                  return value;
                },
                set(key, value) {
                  if (typeof value === "string") {
                    value = value.split("\n");
                  }
                  data2.data[key] = value;
                },
              });
              let $keywords = panelHandlerComponents.createSectionContainerItem_textarea(keywords_template);
              let followings_template = UITextArea("关注的用户", "followings", "", "用户id", void 0, "多个用户id换行");
              Reflect.set(followings_template.props, PROPS_STORAGE_API, {
                get(key, defaultValue) {
                  let value = data2.data[key] ?? defaultValue;
                  if (typeof value === "string") {
                    return value
                      .split("\n")
                      .map((it) => Number(it))
                      .filter((it) => !isNaN(it));
                  }
                  return value;
                },
                set(key, value) {
                  if (typeof value === "string") {
                    value = value
                      .split("\n")
                      .map((it) => Number(it))
                      .filter((it) => !isNaN(it));
                  }
                  data2.data[key] = value;
                },
              });
              let $followings = panelHandlerComponents.createSectionContainerItem_textarea(followings_template);
              let blacklist_template = UITextArea("黑名单", "blacklist", "", "", void 0, "多个用户id换行");
              Reflect.set(blacklist_template.props, PROPS_STORAGE_API, {
                get(key, defaultValue) {
                  let value = data2.data[key] ?? defaultValue;
                  if (typeof value === "string") {
                    return value
                      .split("\n")
                      .map((it) => Number(it))
                      .filter((it) => !isNaN(it));
                  }
                  return value;
                },
                set(key, value) {
                  if (typeof value === "string") {
                    value = value
                      .split("\n")
                      .map((it) => Number(it))
                      .filter((it) => !isNaN(it));
                  }
                  data2.data[key] = value;
                },
              });
              let $blacklist = panelHandlerComponents.createSectionContainerItem_textarea(blacklist_template);
              $fragment.append(
                $enable,
                $name,
                $isShowDisplayName,
                $displayName,
                $isShowDisplayIcon,
                $displayIcon,
                $keywords,
                $followings,
                $blacklist
              );
              return $fragment;
            },
            onsubmit: ($form, isEdit, editData) => {
              let $ulist_li = $form.querySelectorAll(".rule-form-ulist > li");
              let data2 = this.getTemplateData();
              if (isEdit) {
                data2.uuid = editData.uuid;
              }
              try {
                $ulist_li.forEach(($li) => {
                  let formConfig = Reflect.get($li, "__formConfig__");
                  let attrs = Reflect.get(formConfig, "attributes");
                  let storageApi = Reflect.get($li, PROPS_STORAGE_API);
                  let key = Reflect.get(attrs, ATTRIBUTE_KEY);
                  let defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
                  let value = storageApi.get(key, defaultValue);
                  if (Reflect.has(data2, key)) {
                    Reflect.set(data2, key, value);
                  } else if (Reflect.has(data2.data, key)) {
                    Reflect.set(data2.data, key, value);
                  } else {
                    log$1.error(`${key}不在数据中`);
                  }
                });
                if (data2.name.trim() === "") {
                  Qmsg.error("规则名称不能为空");
                  return {
                    success: false,
                    data: data2,
                  };
                }
                if (isEdit) {
                  return {
                    success: this.updateData(data2),
                    data: data2,
                  };
                } else {
                  return {
                    success: this.addData(data2),
                    data: data2,
                  };
                }
              } catch (error) {
                log$1.error(error);
                return {
                  success: false,
                  data: data2,
                };
              } finally {
                this.init();
              }
            },
            style: `
                    .pops-panel-textarea textarea{
                        height: 150px;
                    }
					.pops-panel-item-left-desc-text{
						line-height: normal;
						margin-top: 6px;
						font-size: 0.8em;
						color: rgb(108, 108, 108);
						max-width: 100px;
					}
                    `,
          },
          delete: {
            enable: true,
            deleteCallBack: (data2) => {
              return this.deleteData(data2);
            },
          },
        },
      });
      ruleView.showView();
    },
    getTemplateData() {
      return {
        uuid: utils.generateUUID(),
        enable: true,
        name: "",
        data: {
          isShowDisplayIcon: true,
          displayIcon: "",
          isShowDisplayName: true,
          displayName: "",
          keywords: [],
          blacklist: [],
          followings: [],
        },
      };
    },
    getData() {
      return _GM_getValue(this.$key.STORAGE_KEY, []);
    },
    setData(data2) {
      _GM_setValue(this.$key.STORAGE_KEY, data2);
    },
    addData(data2) {
      let localData = this.getData();
      let findIndex = localData.findIndex((item) => item.uuid == data2.uuid);
      if (findIndex === -1) {
        localData.push(data2);
        _GM_setValue(this.$key.STORAGE_KEY, localData);
        return true;
      } else {
        return false;
      }
    },
    updateData(data2) {
      let localData = this.getData();
      let index = localData.findIndex((item) => item.uuid == data2.uuid);
      let updateFlag = false;
      if (index !== -1) {
        updateFlag = true;
        localData[index] = data2;
      }
      this.setData(localData);
      return updateFlag;
    },
    deleteData(data2) {
      let localData = this.getData();
      let index = localData.findIndex((item) => item.uuid == data2.uuid);
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
      let $a = document.createElement("a");
      $a.href = blobUrl;
      $a.download = fileName;
      $a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 1500);
    },
    importRule() {
      let $alert = __pops__.alert({
        title: {
          text: "请选择导入方式",
          position: "center",
        },
        content: {
          text: `
                    <div class="import-mode" data-mode="local">本地导入</div>
                    <div class="import-mode" data-mode="network">网络导入</div>
                `,
          html: true,
        },
        width: PanelUISize.info.width,
        height: PanelUISize.info.height,
        style: `
                .import-mode{
                    display: inline-block;
                    margin: 10px;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `,
      });
      let $local = $alert.$shadowRoot.querySelector(".import-mode[data-mode='local']");
      let $network = $alert.$shadowRoot.querySelector(".import-mode[data-mode='network']");
      domUtils.on($local, "click", (event) => {
        domUtils.preventEvent(event);
        $alert.close();
        let $input = domUtils.createElement("input", {
          type: "file",
          accept: ".json",
        });
        domUtils.on($input, ["propertychange", "input"], (event2) => {
          if (!$input.files?.length) {
            return;
          }
          let uploadFile = $input.files[0];
          let fileReader = new FileReader();
          fileReader.onload = () => {
            let data2 = utils.toJSON(fileReader.result);
            if (!Array.isArray(data2)) {
              log$1.error("不是正确的规则文件", data2);
              Qmsg.error("不是正确的规则文件");
              return;
            }
            this.setData(data2);
            Qmsg.success(`成功导入 ${data2.length}条规则`);
          };
          fileReader.readAsText(uploadFile, "UTF-8");
        });
        $input.click();
      });
      domUtils.on($network, "click", (event) => {
        domUtils.preventEvent(event);
        $alert.close();
        __pops__.prompt({
          title: {
            text: "网络导入",
            position: "center",
          },
          content: {
            text: "",
            placeholder: "url",
            focus: true,
          },
          btn: {
            ok: {
              callback: async (eventDetails, event2) => {
                let url = eventDetails.text;
                if (utils.isNull(url)) {
                  Qmsg.error("请填入完整的url");
                  return;
                }
                let response = await httpx.get(url);
                if (!response.status) {
                  return;
                }
                let data2 = utils.toJSON(response.data.responseText);
                if (!Array.isArray(data2)) {
                  log$1.error("不是正确的规则文件", response, data2);
                  Qmsg.error("不是正确的规则文件");
                  return;
                }
                this.setData(data2);
                eventDetails.close();
                Qmsg.success(`成功导入 ${data2.length}条规则`);
              },
            },
          },
          width: PanelUISize.info.width,
          height: "auto",
        });
      });
    },
  };
  const BilibiliComponentDetection = {
    $data: {
      searchIcon: `
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        `,
    },
    init() {
      BilibiliComponentDetectionRule.init();
      addStyle(
        `
            .composition-checkable,
			.composition-checked{
                display: inline-flex;
                vertical-align: middle;
            }
			/* 查询按钮 */
			.composition-checkable .composition-badge-control {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				width: fit-content;
				background: #574AB830;
				border-radius: 8px;
				margin: 0 6px 0 6px;
				font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
			}

			.composition-checkable .composition-name-control {
				color: #7367F0;
				padding: 2px 8px;
                font-size: 0.8rem;
                display: flex;
                align-items: center;
                height: 20px;
                line-height: normal;
			}
            
			.composition-checkable .composition-name-control svg {
				vertical-align: middle;
                width: 1em;
                height: 1em;
			}
			/* ↑查询按钮 */

			/* 标签按钮 */
			.composition-checked .composition-badge {
				display: inline-flex;
 				justify-content: center;
 				align-items: center;
				width: fit-content;
 				background: #574AB825;
 				border-radius: 10px;
 				margin: 0 6px 0 6px;
 				font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
				font-weight: normal;
				cursor: pointer;
			}

			.composition-checked .composition-name {
				color: #574AB8;
				padding: 2px 8px;
                font-size: 0.8rem;
			}

			.composition-checked .composition-icon {
				color: #574AB8 !important;
				background: transparent !important;
				border-radius: 50% !important;
				width: 1.44rem !important;
				height: 1.44rem !important;
				border: 2px solid #574AB880 !important;
				margin: -6px;
				display: flex !important;
				justify-content: center !important;
				align-items: center !important;
				font-size: 1rem !important;
			}
			.composition-checked .composition-badge > *:first-child{
				margin-left: 6px;
			}
			.composition-checked .composition-badge > *:last-child{
				margin-right: 6px;
			}
			.composition-checked .composition-badge .composition-icon,
			.composition-checked .composition-badge .composition-name{
				margin: 0;
			}
        `
      );
      domUtils.ready(() => {
        let lockFn = new utils.LockFunction(async () => {
          $$(".reply-item:not([data-is-inject-search-label])").forEach(($replyItem) => {
            $replyItem.setAttribute("data-is-inject-search-label", "");
            let $floorTime =
              $replyItem.querySelector(".info .floor-time") || $replyItem.querySelector(".content-warp .user-info");
            let { $container, $compositionNameControl } = this.createSearchButton(() => {
              let $userName = $replyItem.querySelector(".user-name[data-user-id]");
              if (!$userName) {
                throw new TypeError("获取用户名元素失败");
              }
              let mid = $userName.getAttribute("data-user-id");
              if (mid == null) {
                throw new TypeError("获取mid失败");
              }
              return mid;
            });
            domUtils.after($floorTime, $container);
          });
          [
            ...Array.from($$(".reply-item .member-link[data-url]:not([data-is-inject-search-label])")),
            ...Array.from($$(".reply-item .jump-link.user[data-user-id]:not([data-is-inject-search-label])")),
            ...Array.from($$(".reply-item .sub-user-name[data-user-id]:not([data-is-inject-search-label])")),
          ].forEach(($memberLink) => {
            $memberLink.setAttribute("data-is-inject-search-label", "");
            let { $container: $memberContainer, $compositionNameControl: $memberCompositionNameControl } =
              this.createSearchButton(() => {
                let spaceUrl = $memberLink.getAttribute("href");
                let mid = spaceUrl.match(/space.bilibili.com\/([\d]+)/i)?.[1];
                if (mid == null) {
                  throw new TypeError("获取mid失败");
                }
                return mid;
              });
            domUtils.after($memberLink, $memberContainer);
          });
          $$(".m-space-info .base:not([data-is-inject-search-label])").forEach(($base) => {
            $base.setAttribute("data-is-inject-search-label", "");
            let $spaceInfo = $base.closest(".m-space-info");
            let { $container } = this.createSearchButton(() => {
              let vueIns = VueUtils.getVue($spaceInfo);
              if (!vueIns) {
                throw new TypeError("获取vue属性失败");
              }
              let mid = vueIns.info.mid;
              if (mid == null) {
                throw new TypeError("获取mid失败");
              }
              return mid;
            });
            domUtils.after($base, $container);
          });
        });
        utils.mutationObserver(document, {
          config: {
            subtree: true,
            childList: true,
          },
          immediate: true,
          callback: () => {
            lockFn.run();
          },
        });
      });
    },
    async queryUserInfo(mid) {
      let followingPN = 1;
      let allFollowingData = [];
      while (true) {
        log$1.info(`正在获取用户的关注：${mid} ==> 第${followingPN}页`);
        let followingData = await BilibiliUserApi.following(mid, followingPN);
        if (!followingData) {
          log$1.error("获取关注列表失败");
          break;
        }
        if (typeof followingData === "string") {
          log$1.error("获取关注列表失败，原因：" + followingData);
          break;
        }
        if (!followingData.list.length) {
          break;
        }
        allFollowingData = allFollowingData.concat(followingData.list);
        if (followingData.list.length === followingData.total && followingPN === 1) {
          break;
        }
        followingPN++;
        utils.sleep(250);
      }
      let spaceOffset = "";
      let spacePNCount = 1;
      let allSpaceContentData = [];
      while (true) {
        log$1.info(`正在获取用户的空间动态：${mid} ==> 偏移：${spaceOffset}`);
        let spaceData = await BilibiliUserApi.space(mid, spaceOffset);
        if (!spaceData) {
          log$1.error("获取用户空间动态数据失败");
          break;
        }
        if (typeof spaceData === "string") {
          log$1.error("获取用户空间动态数据失败，原因：" + spaceData);
          break;
        }
        if (spaceOffset === spaceData.offset && spaceOffset != "") {
          break;
        }
        spaceOffset = spaceData.offset;
        allSpaceContentData = allSpaceContentData.concat(spaceData.items);
        if (!spaceData.has_more) {
          break;
        }
        spacePNCount++;
        if (spacePNCount > 5) {
          log$1.info(`最多请求5页空间动态的数据`);
          break;
        }
        utils.sleep(250);
      }
      let result = {
        following: [],
        space: [],
      };
      allFollowingData.forEach((followingData) => {
        result.following.push({
          name: followingData.uname,
          mid: followingData.mid,
          sign: followingData.sign,
        });
      });
      allSpaceContentData.forEach((spaceData) => {
        if (spaceData.orig == null) {
          let contentInfo = {
            title: spaceData.modules.module_dynamic.major?.archive?.title,
            desc: spaceData.modules.module_dynamic.major?.archive?.desc || spaceData.modules.module_dynamic.desc?.text,
            pub_ts: spaceData.modules.module_author.pub_ts * 1e3,
            id_str: spaceData.id_str,
          };
          result.space.push({
            contentInfo,
          });
        } else {
          let contentInfo = {
            title: null,
            desc: spaceData.modules.module_dynamic.desc?.text,
            pub_ts: spaceData.modules.module_author.pub_ts * 1e3,
            id_str: spaceData.id_str,
          };
          let forwardInfo = {
            mid: spaceData.orig.modules.module_author.mid,
            name: spaceData.orig.modules.module_author.name,
            title: spaceData.orig.modules.module_dynamic?.major?.archive?.title || null,
            desc:
              spaceData.orig.modules.module_dynamic.desc?.text ??
              spaceData.orig.modules.module_dynamic?.major?.archive?.desc,
            pub_ts: spaceData.orig.modules.module_author.pub_ts * 1e3,
            id_str: spaceData.orig.id_str,
          };
          if (
            typeof forwardInfo.desc === "string" &&
            Array.isArray(spaceData.orig.modules.module_dynamic?.desc?.rich_text_nodes)
          ) {
            spaceData.orig.modules.module_dynamic.desc.rich_text_nodes.forEach((richInfo) => {
              if (richInfo.type === "RICH_TEXT_NODE_TYPE_AT") {
                forwardInfo.desc = forwardInfo.desc?.replace(richInfo.text, "");
              }
            });
          }
          result.space.push({
            contentInfo,
            forwardInfo,
          });
        }
      });
      return result;
    },
    createSearchButton(queryMIDFn) {
      let $compositionCheckable = domUtils.createElement("div", {
        className: "composition-checkable",
        innerHTML: `
                <div class="composition-badge-control">
                    <span class="composition-name-control">
                        ${this.$data.searchIcon}
                    </span>
                </div>
            `,
      });
      let $compositionNameControl = $compositionCheckable.querySelector(".composition-name-control");
      domUtils.on($compositionCheckable, "click", async (event) => {
        domUtils.preventEvent(event);
        if ($compositionCheckable.hasAttribute("data-is-searching")) {
          log$1.error("正在搜索中，请稍后再试");
          return;
        }
        $compositionCheckable.setAttribute("data-is-searching", "");
        domUtils.html($compositionNameControl, "...");
        try {
          if (BilibiliComponentDetectionRule.$data.ruleData.length === 0) {
            Qmsg.warning("未配置规则，请在设置中进行添加");
            domUtils.html($compositionNameControl, this.$data.searchIcon);
            return;
          }
          let mid = queryMIDFn();
          this.clearLabel($compositionCheckable);
          let userInfo = await this.queryUserInfo(mid);
          this.handleShowLabel(mid, userInfo, $compositionCheckable);
          domUtils.html($compositionNameControl, this.$data.searchIcon);
        } catch (error) {
          log$1.error(error);
          Qmsg.error(error.message, {
            timeout: 3500,
          });
          domUtils.html($compositionNameControl, "重试");
        } finally {
          $compositionCheckable.removeAttribute("data-is-searching");
        }
      });
      return {
        $container: $compositionCheckable,
        $compositionNameControl,
      };
    },
    createLabel(data2) {
      let $label = domUtils.createElement("div", {
        className: "composition-checked",
        innerHTML: `
				<div class="composition-badge">
				</div>
			`,
      });
      let $badge = $label.querySelector(".composition-badge");
      if (data2.rule.data.isShowDisplayName) {
        let $compositionName = domUtils.createElement("span", {
          className: "composition-name",
          innerHTML: data2.rule.data.displayName,
        });
        domUtils.append($badge, $compositionName);
      }
      if (data2.rule.data.isShowDisplayIcon) {
        let $compositionIcon = null;
        if (data2.rule.data.displayIcon.startsWith("http")) {
          $compositionIcon = domUtils.createElement(
            "img",
            {
              className: "composition-icon",
              src: data2.rule.data.displayIcon,
            },
            {
              referrer: "no-referrer",
              referrerPolicy: "no-referrer",
            }
          );
        } else {
          $compositionIcon = domUtils.createElement("span", {
            className: "composition-icon",
            innerHTML: data2.rule.data.displayIcon,
          });
        }
        domUtils.append($badge, $compositionIcon);
      }
      domUtils.on($badge, "click", (event) => {
        domUtils.preventEvent(event);
        __pops__.alert({
          title: {
            text: "识别信息",
            html: false,
            position: "center",
          },
          content: {
            text: `
						${data2.matchedInfoList
              .map((it) => {
                let $el = domUtils.createElement("div", {
                  className: "reason-container",
                  innerHTML: `
										<div class="reason-text"><span>原因：</span>${it.reason}</div>
										<div class="reason-text"><span>匹配：</span>${
                      typeof it.reasonLink === "string"
                        ? `
											<a href="${it.reasonLink}" target="_blank">${it.reasonText}</a>
										`
                        : it.reasonText
                    }</div>
									`,
                });
                if (typeof it.reasonTime === "number") {
                  let $reasonTime = domUtils.createElement("div", {
                    className: "reason-text",
                    innerHTML: `
										<span>时间：</span>${utils.formatTime(it.reasonTime)}
										`,
                  });
                  domUtils.append($el, $reasonTime);
                }
                return $el.outerHTML;
              })
              .join("\n")}
					`,
            html: true,
          },
          btn: {
            ok: { enable: false },
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true,
            },
          },
          width: PanelUISize.setting.width,
          height: PanelUISize.setting.height,
          style: `
					.reason-container{
						color: #7367F0;
						margin: 10px 10px;
					}
				`,
        });
      });
      return $label;
    },
    clearLabel($ele) {
      while (true) {
        let $prev = domUtils.prev($ele);
        if (!$prev) {
          break;
        }
        if ($prev?.classList?.contains("composition-checked")) {
          $prev.remove();
        } else {
          break;
        }
      }
    },
    handleShowLabel(mid, data2, $searchContainer) {
      if (BilibiliComponentDetectionRule.$data.ruleData.length === 0) {
        Qmsg.warning("未配置规则，请在设置中进行添加");
        return;
      }
      mid = mid.toString();
      if (BilibiliComponentDetectionRule.$data.whiteList.includes(mid)) {
        return;
      }
      let matchedAllRule = [];
      let pushMatchedRule = (rule, matchedInfo) => {
        let findValue = matchedAllRule.find((it) => it.rule === rule);
        if (findValue) {
          findValue.matchedInfoList.push(matchedInfo);
        } else {
          matchedAllRule.push({
            rule,
            matchedInfoList: [matchedInfo],
          });
        }
      };
      BilibiliComponentDetectionRule.$data.ruleData.forEach((ruleData) => {
        if (Array.isArray(ruleData.data.blacklist) && ruleData.data.blacklist.find((it) => it.toString() === mid)) {
          pushMatchedRule(ruleData, {
            reason: "黑名单用户",
            reasonText: mid,
            reasonLink: BilibiliUrl.getUserSpaceUrl(mid),
            reasonTime: null,
          });
          return;
        }
        if (Array.isArray(ruleData.data.followings)) {
          let reason = "关注列表";
          let reasonText = "";
          let checkFlag = ruleData.data.followings.some((followId) => {
            let __check__flag__ = data2.following.some((followingData) => {
              return followingData.mid.toString() === followId.toString();
            });
            if (__check__flag__) {
              reasonText = followId.toString();
            }
            return __check__flag__;
          });
          if (checkFlag) {
            pushMatchedRule(ruleData, {
              reason,
              reasonText,
              reasonLink: BilibiliUrl.getUserSpaceUrl(reasonText),
              reasonTime: null,
            });
          }
        }
        if (Array.isArray(ruleData.data.keywords)) {
          ruleData.data.keywords.forEach((keyword) => {
            for (let spaceIndex = 0; spaceIndex < data2.space.length; spaceIndex++) {
              const spaceData = data2.space[spaceIndex];
              let reason = "";
              let reasonText = keyword;
              let reasonLink = `/opus/${spaceData.contentInfo.id_str}`;
              let reasonTime = spaceData.contentInfo.pub_ts;
              if (spaceData.forwardInfo == null) {
                if (typeof spaceData.contentInfo.desc === "string" && spaceData.contentInfo.desc.match(keyword)) {
                  reason = "投稿视频简介";
                } else if (
                  typeof spaceData.contentInfo.title === "string" &&
                  spaceData.contentInfo.title.match(keyword)
                ) {
                  reason = "投稿视频标题";
                }
              } else {
                if (typeof spaceData.contentInfo.desc === "string" && spaceData.contentInfo.desc.match(keyword)) {
                  reason = "空间动态转发";
                } else if (
                  typeof spaceData.forwardInfo?.title === "string" &&
                  spaceData.forwardInfo.title.match(keyword)
                ) {
                  reason = "空间动态视频标题";
                } else if (
                  typeof spaceData.forwardInfo?.desc === "string" &&
                  spaceData.forwardInfo.desc.match(keyword)
                ) {
                  reason = "空间动态视频简介";
                }
              }
              if (reason !== "") {
                pushMatchedRule(ruleData, {
                  reason,
                  reasonText,
                  reasonLink,
                  reasonTime,
                });
              }
            }
          });
        }
      });
      utils.sortListByProperty(
        matchedAllRule,
        (value) => {
          return value.matchedInfoList.length;
        },
        true
      );
      matchedAllRule.forEach((it) => {
        let $label = this.createLabel(it);
        domUtils.before($searchContainer, $label);
      });
    },
  };
  const BilibiliPlayListPlayer = {
    $flag: {
      isWatchVideoChange: false,
    },
    $data: {
      art: null,
    },
    init() {},
    updateArtPlayerVideoInfo(videoInfo, isEpChoose) {
      const that = this;
      VueUtils.waitVuePropToSet(BilibiliData.className.playlist + " .playlist-player", {
        msg: "等待覆盖playlist播放器",
        check(vueInstance) {
          return (
            typeof vueInstance?.aid === "number" &&
            typeof vueInstance?.cid === "number" &&
            typeof vueInstance?.bvid === "string"
          );
        },
        async set(vueInstance) {
          $(".playlist-player .player-container")?.remove();
          let $player = $(BilibiliData.className.playlist + " .playlist-player");
          let $playerContainer = $(BilibiliData.className.playlist);
          let playerContainerVueInstance = VueUtils.getVue($playerContainer);
          let { aid, cid, bvid } = vueInstance;
          let { title, cover: pic } = playerContainerVueInstance.video;
          log$1.info(`视频播放信息 => aid：${aid} bvid：${bvid} cid：${cid}`);
          if (videoInfo == null) {
            videoInfo = {
              aid,
              bvid,
              cid,
              pic,
              title,
            };
          }
          const artPlayerOption = await GenerateArtPlayerOption$1(videoInfo);
          if (artPlayerOption == null) {
            return;
          }
          let $artPlayer = $("#artplayer");
          if (!$artPlayer) {
            const $artPlayerContainer = domUtils.createElement("div", {
              className: "artplayer-container",
              innerHTML: `
								<div id="artplayer"></div>
							`,
            });
            $artPlayer = $artPlayerContainer.querySelector("#artplayer");
            domUtils.append($player, $artPlayerContainer);
          }
          artPlayerOption.container = $artPlayer;
          if (that.$data.art == null) {
            let art = await BilibiliVideoArtPlayer.init(artPlayerOption);
            if (art) {
              that.$data.art = art;
            } else {
              return;
            }
            that.$data.art.volume = 1;
            that.$data.art.once("ready", () => {
              Panel.execMenu("bili-video-playerAutoPlayVideoFullScreen", async () => {
                log$1.info(`自动进入全屏`);
                that.$data.art.fullscreen = true;
                that.$data.art.once("fullscreenError", () => {
                  log$1.warn("未成功进入全屏，需要用户交互操作，使用网页全屏代替");
                  that.$data.art.fullscreenWeb = true;
                });
              });
            });
            that.$data.art.on("video:ended", () => {
              log$1.info("视频播放结束，自动下一集");
              let $controlPanel = $(BilibiliData.className.playlist + " .control-panel");
              if (!$controlPanel) {
                log$1.error("未找到播放列表，无法自动播放下一集");
                return;
              }
              let controlVueInstance = VueUtils.getVue($controlPanel);
              if (controlVueInstance == null) {
                log$1.error("未找到播放列表的Vue实例，无法自动播放下一集");
                return;
              }
              let { playMode, mediaList, videoIndex } = vueInstance.$store.state.playlist;
              if (videoIndex >= mediaList.length - 1) {
                log$1.info(`播放列表已播放完毕`);
              } else {
                let $currentVideoCard = $(`.video-card[index="${videoIndex}"]`);
                let currentVideoCardVueInstance = VueUtils.getVue($currentVideoCard);
                let p = currentVideoCardVueInstance.p;
                if (p >= currentVideoCardVueInstance.video.page) {
                  let $nextVideoCard = $(`.video-card[index="${videoIndex + 1}"]`);
                  let nextVideoCardVueInstance = VueUtils.getVue($nextVideoCard);
                  nextVideoCardVueInstance.changeVideo();
                  log$1.info(`当前播放列表共：${mediaList.length - 1}个，即将播放下一个视频，第${videoIndex + 2}个`);
                } else {
                  p++;
                  currentVideoCardVueInstance.changeVideo(p);
                  log$1.info(`当前播放列表共：${mediaList.length - 1}个，即将播放第${videoIndex + 2}-${p}`);
                }
              }
            });
          } else {
            await BilibiliVideoArtPlayer.update(that.$data.art, artPlayerOption);
          }
        },
      });
      VueUtils.waitVuePropToSet(BilibiliData.className.playlist + " .playlist-player", {
        msg: "等待监听playlist播放列表改变",
        check(vueInstance) {
          return typeof vueInstance.$watch === "function";
        },
        set(vueInstance) {
          if (!that.$flag.isWatchVideoChange) {
            that.$flag.isWatchVideoChange = true;
            vueInstance.$watch("cid", (newVal, oldVal) => {
              log$1.info(`切换播放视频`);
              that.updateArtPlayerVideoInfo();
            });
          }
        },
      });
    },
  };
  const BilibiliPlayList = {
    init() {
      this.coverVideoPlayer();
    },
    coverVideoPlayer() {
      if (document.querySelector("#artplayer")) {
        log$1.warn("已存在播放器，更新播放信息");
      } else {
        addStyle(
          `
			#app .playlist .playlist-player .player-container{
				display: none !important;
			}
			
			${artPlayerCommonCSS}
			
			${artPlayerCSS$1}
			
			`
        );
      }
      BilibiliPlayListPlayer.updateArtPlayerVideoInfo();
    },
  };
  const BilibiliPlayerToast = {
    $flag: {
      isInitCSS: false,
    },
    $data: {
      originToast: "mplayer-toast",
      showClassName: "mplayer-show",
      prefix: "mplayer-toast-gm",
    },
    $el: {
      get $mplayer() {
        return document.querySelector(".mplayer");
      },
    },
    toast(config) {
      if (typeof config === "string") {
        config = {
          text: config,
        };
      }
      this.initCSS();
      let $parent = config.parent ?? this.$el.$mplayer;
      if (!$parent) {
        throw new TypeError("toast parent is null");
      }
      this.mutationMPlayerOriginToast($parent);
      let $toast = domUtils.createElement("div", {
        "data-from": "gm",
      });
      domUtils.addClass($toast, this.$data.prefix);
      domUtils.addClass($toast, this.$data.showClassName);
      if (config.showCloseBtn) {
        let $closeBtn = domUtils.createElement("div", {
          className: this.$data.prefix + "-close",
          innerHTML: `
                    <span class="bp-svgicon">
                        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.47 4.47a.75.75 0 011.06 0l5.541 5.54 5.54-5.54a.75.75 0 011.061 1.06l-5.54 5.541 5.54 5.54a.75.75 0 01.073.977l-.073.084a.75.75 0 01-1.06 0l-5.541-5.54-5.54 5.54a.75.75 0 01-1.061-1.06l5.54-5.541-5.54-5.54a.75.75 0 01-.073-.977z" fill="#FEFEFE" fill-rule="evenodd">
                            </path>
                        </svg>
                    </span>
                `,
        });
        $toast.appendChild($closeBtn);
        domUtils.on($closeBtn, "click", (event) => {
          domUtils.preventEvent(event);
          this.closeToast($toast);
        });
      }
      let $text = domUtils.createElement("span", {
        className: this.$data.prefix + "-text",
        innerText: config.text,
      });
      $toast.appendChild($text);
      if (typeof config.timeText === "string" && config.timeText.trim() != "") {
        let $time = domUtils.createElement("span", {
          className: this.$data.prefix + "-time",
          innerText: config.timeText,
        });
        $toast.appendChild($time);
      }
      if (typeof config.jumpText === "string" && config.jumpText.trim() != "") {
        let $jump = domUtils.createElement("span", {
          className: this.$data.prefix + "-jump",
          innerText: config.jumpText,
        });
        $toast.appendChild($jump);
        domUtils.on($jump, "click", (event) => {
          if (typeof config.jumpClickCallback === "function") {
            domUtils.preventEvent(event);
            config.jumpClickCallback(event);
          }
        });
      }
      this.setTransitionendEvent($toast);
      let timeout = typeof config.timeout === "number" && !isNaN(config.timeout) ? config.timeout : 3500;
      Array.from(document.querySelectorAll(`.mplayer-toast`)).forEach(($mplayerOriginToast) => {
        if ($mplayerOriginToast.hasAttribute("data-is-set-transitionend")) {
          return;
        }
        $mplayerOriginToast.setAttribute("data-is-set-transitionend", "true");
        if ($mplayerOriginToast.textContent?.includes("记忆你上次看到")) {
          setTimeout(() => {
            let $close = $mplayerOriginToast.querySelector(".mplayer-toast-close");
            if ($close) {
              $close.click();
            } else {
              $mplayerOriginToast.remove();
            }
          }, 3e3);
        }
        this.setTransitionendEvent($mplayerOriginToast);
      });
      $parent.appendChild($toast);
      setTimeout(() => {
        this.closeToast($toast);
      }, timeout);
      return {
        $toast,
        close: () => {
          this.closeToast($toast);
        },
      };
    },
    initCSS() {
      if (this.$flag.isInitCSS) {
        return;
      }
      this.$flag.isInitCSS = true;
      addStyle(
        `
		.${this.$data.prefix}.mplayer-show {
			opacity: 1;
			visibility: visible;
			z-index: 40;
		}

		.mplayer-toast, .${this.$data.prefix} {
			-webkit-transition-property: opacity, bottom;
			transition-property: opacity, bottom;
		}

		.${this.$data.prefix} {
			background-color: rgba(0, 0, 0, .8);
			border-radius: 4px;
			bottom: 48px;
			color: #fafafa;
			font-size: 12px;
			left: 8px;
			line-height: 24px;
			opacity: 0;
			overflow: hidden;
			padding: 6px 8px;
			position: absolute;
			text-align: center;
			-webkit-transition: opacity .3s;
			transition: opacity .3s;
			visibility: hidden;
			z-index: 4;
		}

		.${this.$data.prefix}-close {
			fill: #fff;
			float: left;
			height: 14px;
			margin-right: 4px;
			position: relative;
			top: 1px;
			width: 26px;
		}

		.${this.$data.prefix}-jump {
			color: #f25d8e;
			margin: 0 8px 0 16px;
			text-decoration: none;
		}

		`
      );
    },
    mutationMPlayerOriginToast($parent) {
      let $mplayer = this.$el.$mplayer;
      if (!$mplayer) {
        return;
      }
      if ($mplayer.hasAttribute("data-mutation")) {
        return;
      }
      log$1.success(`添加观察器，动态更新toast的位置`);
      $mplayer.setAttribute("data-mutation", "gm");
      utils.mutationObserver($mplayer, {
        config: {
          subtree: true,
          childList: true,
        },
        immediate: true,
        callback: () => {
          this.updatePageToastBottom();
        },
      });
    },
    updatePageToastBottom() {
      let pageToastList = Array.from(document.querySelectorAll(`.${this.$data.prefix}`)).concat(
        Array.from(
          document.querySelectorAll(".".concat(this.$data.originToast).concat(".").concat(this.$data.showClassName))
        )
      );
      if (pageToastList.length) {
        let count = pageToastList.length - 1;
        const toastHeight = 46;
        pageToastList.forEach(($pageToast, index) => {
          let bottom = toastHeight + toastHeight * (count - index);
          $pageToast.setAttribute("data-transition", "move");
          $pageToast.style.bottom = bottom + "px";
        });
      }
    },
    closeToast($ele) {
      $ele.classList.remove(this.$data.showClassName);
    },
    getTransitionendEventNameList() {
      return ["webkitTransitionEnd", "mozTransitionEnd", "MSTransitionEnd", "otransitionend", "transitionend"];
    },
    setTransitionendEvent($toast) {
      let that = this;
      let animationEndNameList = this.getTransitionendEventNameList();
      domUtils.on(
        $toast,
        animationEndNameList,
        function (event) {
          let dataTransition = $toast.getAttribute("data-transition");
          if (!$toast.classList.contains(that.$data.showClassName)) {
            $toast.remove();
            return;
          }
          if (dataTransition === "move") {
            $toast.removeAttribute("data-transition");
            return;
          }
        },
        {
          capture: true,
        }
      );
    },
  };
  let _ajaxHooker_ = null;
  const XhrHook = {
    get ajaxHooker() {
      if (_ajaxHooker_ == null) {
        log$1.info("启用ajaxHooker拦截网络");
        _ajaxHooker_ = utils.ajaxHooker();
      }
      return _ajaxHooker_;
    },
  };
  const BilibiliNetworkHook = {
    $flag: {
      is_hook_video_playurl: false,
      is_hook_bangumi_html5: false,
      is_hook_live_playurl: false,
    },
    init() {
      if (BilibiliRouter.isLive()) {
        Panel.execMenuOnce("bili-live-cdn-hook", () => {
          this.hook_live_playurl();
        });
      }
    },
    hook_video_playurl() {
      if (this.$flag.is_hook_video_playurl) {
        return;
      }
      this.$flag.is_hook_video_playurl = true;
      XhrHook.ajaxHooker.hook((request) => {
        if (request.url.includes("//api.bilibili.com/x/player/wbi/playurl")) {
          if (request.url.startsWith("//")) {
            request.url = window.location.protocol + request.url;
          }
          let playUrl = new URL(request.url);
          playUrl.searchParams.set("platform", "html5");
          playUrl.searchParams.set("qn", VideoQualityNameMap["1080P60 高帧率"].toString());
          playUrl.searchParams.set("high_quality", "1");
          playUrl.searchParams.set("fnver", "0");
          playUrl.searchParams.set("fourk", "1");
          if (playUrl.searchParams.has("__t")) {
            playUrl.searchParams.delete("__t");
            return;
          }
          request.url = playUrl.toString();
          request.response = (res) => {
            let data2 = utils.toJSON(res.responseText);
            let unlockQuality = data2?.["data"]?.["quality"];
            let support_formats = data2?.["data"]?.["support_formats"];
            log$1.info("当前解锁的quality值：" + unlockQuality);
            if (unlockQuality && support_formats) {
              let findValue = support_formats.find((item) => {
                return item["quality"] == unlockQuality;
              });
              if (findValue) {
                let qualityText = findValue["new_description"] || findValue["display_desc"];
                log$1.info("成功解锁画质 " + qualityText);
                BilibiliPlayerToast.toast(`成功解锁画质 ${qualityText}`);
              }
            }
          };
        }
      });
    },
    hook_bangumi_html5() {
      if (this.$flag.is_hook_bangumi_html5) {
        return;
      }
      this.$flag.is_hook_bangumi_html5 = true;
      XhrHook.ajaxHooker.hook((request) => {
        if (request.url.includes("//api.bilibili.com/pgc/player/web/playurl/html5")) {
          if (request.url.startsWith("//")) {
            request.url = window.location.protocol + request.url;
          }
          let playUrlInst = new URL(request.url);
          playUrlInst.pathname = "/pgc/player/web/playurl";
          playUrlInst.searchParams.delete("bsource");
          playUrlInst.searchParams.set("qn", VideoQualityNameMap["1080P60 高帧率"].toString());
          playUrlInst.searchParams.set("fnval", "1");
          playUrlInst.searchParams.set("fnver", "0");
          playUrlInst.searchParams.set("fourk", "1");
          playUrlInst.searchParams.set("from_client", "BROWSER");
          playUrlInst.searchParams.set("drm_tech_type", "2");
          request.url = playUrlInst.toString();
          request.response = (res) => {
            let data2 = utils.toJSON(res.responseText);
            let result = data2["result"];
            log$1.info("当前解锁的quality值：" + result["quality"]);
            if (result["quality"] && result["support_formats"]) {
              let findValue = result["support_formats"].find((item) => {
                return item["quality"] == result["quality"];
              });
              if (findValue) {
                log$1.info("当前已解锁的画质：" + findValue["new_description"] || findValue["display_desc"]);
              }
            }
          };
        }
      });
    },
    hook_live_playurl() {
      if (this.$flag.is_hook_live_playurl) {
        return;
      }
      this.$flag.is_hook_live_playurl = true;
      XhrHook.ajaxHooker.hook((request) => {
        if (!Panel.getValue("bili-live-cdn-hook")) return;
        if (request.url.startsWith("data:")) {
          return;
        }
        const url = CommonUtil.fixUrl(request.url);
        let playUrlInst = new URL(url);
        const pathname = playUrlInst.pathname;
        if (pathname.startsWith("/xlive/web-room/v2/index/getRoomPlayInfo")) {
          playUrlInst.searchParams.set("qn", "30000");
          request.url = playUrlInst.toString();
          request.response = (res) => {
            const data2 = typeof res.responseText === "string" ? utils.toJSON(res.responseText) : res.json;
            const stream = data2?.data?.playurl_info?.playurl?.stream;
            if (Array.isArray(stream)) {
              stream.forEach((streamItem) => {
                const format = streamItem?.format;
                if (!Array.isArray(format)) {
                  return;
                }
                format.forEach((formatItem) => {
                  const codec = formatItem?.codec;
                  if (!Array.isArray(codec)) {
                    return;
                  }
                  formatItem?.format_name;
                  codec.forEach((codecItem) => {
                    codecItem?.codec_name;
                    const url_info = codecItem?.url_info;
                    if (!Array.isArray(url_info)) {
                      return;
                    }
                    url_info.forEach((urlInfoItem) => {
                      const host = urlInfoItem?.host;
                      if (typeof host === "string") {
                        urlInfoItem.host = BilibiliCDNProxy.replaceLiveVideoCDN(host);
                      }
                    });
                  });
                });
              });
            } else {
              log$1.error("直播请求信息中返回的steam不是数组", data2);
            }
          };
        } else if (playUrlInst.hostname.endsWith(".bilivideo.com")) {
          request.url = BilibiliCDNProxy.replaceLiveVideoCDN(url);
        }
      });
    },
  };
  const Bilibili = {
    init() {
      BilibiliNetworkHook.init();
      BilibiliGlobalData.init();
      BilibiliVueProp.init();
      Panel.execMenuOnce("bili-allowCopy", () => {
        return addStyle(
          `
				.v-drawer{
					-webkit-user-select: unset !important;
					-moz-user-select: unset !important;
					user-select: unset !important;
				}
			`
        );
      });
      Panel.onceExec("listenRouterChange", () => {
        this.listenRouterChange();
      });
      Panel.execMenuOnce("bili-hookSetTimeout_autoOpenApp", () => {
        log$1.info("hook  window.setTimeout autoOpenApp");
        BilibiliHook.setTimeout("autoOpenApp");
        BilibiliHook.setTimeout("bilibili://");
        BilibiliHook.setTimeout("void 0 !== y && document[y]");
      });
      Panel.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp", () => {
        log$1.info("覆盖元素.launch-app-btn上的openApp");
        BilibiliHook.overRideLaunchAppBtn_Vue_openApp();
      });
      Panel.execMenuOnce("bili-cover-bili-open-app-open", () => {
        log$1.info(`覆盖元素bili-open-app上的opener.open`);
        BilibiliHook.overRideBiliOpenApp();
      });
      Panel.execMenuOnce("bili-cover-wx-tag-handleClick", () => {
        log$1.info(`覆盖元素.wx-tag的handleClick函数`);
        BilibiliHook.overRideWxTaghandleClick();
      });
      Panel.execMenuOnce("bili-head-beautify", () => {
        log$1.info("添加美化CSS");
        return addStyle(BilibiliBeautifyCSS);
      });
      Panel.execMenuOnce("bili-componentDetection", () => {
        BilibiliComponentDetection.init();
      });
      if (BilibiliRouter.isVideo()) {
        log$1.info("Router: 视频稿件");
        BilibiliVideo.init();
      } else if (BilibiliRouter.isOpus()) {
        log$1.info("Router: 专栏稿件");
        BilibiliOpus.init();
      } else if (BilibiliPCRouter.isReadMobile()) {
        log$1.info("PC-Router: 专栏稿件");
        BilibiliReadMobile.init();
      } else if (BilibiliRouter.isDynamic()) {
        log$1.info("Router: 动态");
        BilibiliDynamic.init();
      } else if (BilibiliRouter.isBangumi()) {
        log$1.info("Router: 番剧");
        BilibiliBangumi.init();
      } else if (BilibiliRouter.isSearch()) {
        log$1.info("Router: 搜索");
        BilibiliSearch.init();
      } else if (BilibiliRouter.isLive()) {
        log$1.info("Router: 直播");
        BilibiliLive.init();
      } else if (BilibiliRouter.isTopicDetail()) {
        log$1.info("Router: 话题");
      } else if (BilibiliRouter.isHead()) {
        log$1.info("Router: 首页之类的");
        BilibiliHead.init();
      } else if (BilibiliRouter.isSpace()) {
        log$1.info("Router: 个人空间");
        BilibiliSpace.init();
      } else if (BilibiliRouter.isPlayList()) {
        log$1.info(`Router: 播放列表`);
        BilibiliPlayList.init();
      } else {
        log$1.error("该Router暂未适配，可能是首页之类：" + window.location.href);
      }
      domUtils.ready(() => {});
    },
    listenRouterChange() {
      VueUtils.waitVuePropToSet("#app", {
        msg: "监听路由变化",
        check: (vueInstance) => {
          return typeof vueInstance?.$router?.afterEach === "function";
        },
        set: (vueInstance) => {
          log$1.success("成功设置监听路由变化");
          vueInstance.$router.beforeHooks.splice(0, 0, (to, from, next) => {
            log$1.info("路由变化 => 更新前", {
              to,
              from,
            });
            if (to["hash"] === "#/seeCommentReply" || from["hash"] === "#/seeCommentReply") {
              log$1.info("该路由变化判定为#/seeCommentReply");
              next();
              return;
            }
            if (Panel.getValue("bili-repairVueRouter404")) {
              if (to.name === "space") {
                log$1.info(`修复空间跳转404`);
                window.location.href = to.fullPath;
                return;
              }
            }
            if (to.fullPath.startsWith("/video")) {
              if (
                from.fullPath.startsWith("/video") &&
                Panel.getValue("bili-video-forceThisPageToRefreshAndRedirect")
              ) {
                log$1.info(`强制本页刷新`);
                window.location.href = to.fullPath;
                return;
              } else if (BilibiliRouter.isHead() && Panel.getValue("bili-head-openVideoInNewTab")) {
                log$1.info(`当前是首页，新标签页打开`);
                window.open(to.fullPath, "_blank");
                return;
              }
            } else if (to.fullPath.startsWith("/bangumi")) {
              if (from.fullPath.startsWith("/bangumi")) {
                log$1.info(`番剧 => 番剧`);
                window.location.href = to.fullPath;
                return;
              } else if (BilibiliRouter.isHead() && Panel.getValue("bili-head-openVideoInNewTab")) {
                log$1.info(`首页 => 番剧`);
                window.open(to.fullPath, "_blank");
                return;
              }
            }
            next();
          });
          vueInstance.$router.afterHooks.splice(0, 0, (to, from) => {
            log$1.info("路由变化 => 更新后", {
              to,
              from,
            });
            if (to["hash"] === "#/seeCommentReply" || from["hash"] === "#/seeCommentReply") {
              log$1.info("该路由变化判定为#/seeCommentReply，不重载");
              return;
            }
            Panel.execMenu("bili-listenRouterChange", () => {
              Bilibili.init();
            });
          });
        },
      });
    },
  };
  const UISelect = function (text, key, defaultValue, data2, selectCallBack, description, valueChangeCallBack) {
    let selectData = [];
    if (typeof data2 === "function") {
      selectData = data2();
    } else {
      selectData = data2;
    }
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
      callback(event, isSelectedValue, isSelectedText) {
        const value = isSelectedValue;
        log$1.info(`选择：${isSelectedText}`);
        if (typeof selectCallBack === "function") {
          const result2 = selectCallBack(event, value, isSelectedText);
          if (result2) {
            return;
          }
        }
        const storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      data: selectData,
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
      result.disable = Boolean(disable);
    });
    return result;
  };
  const SettingUICommon = {
    id: "panel-common",
    title: "通用",
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
                    "监听路由-重载所有功能",
                    "bili-listenRouterChange",
                    true,
                    void 0,
                    "用于处理页面跳转(本页)时功能不生效问题"
                  ),
                  UISwitch(
                    "修复VueRouter跳转404问题",
                    "bili-repairVueRouter404",
                    true,
                    void 0,
                    "例如：点击UP主正确进入空间"
                  ),
                  UISwitch(
                    "新标签页打开",
                    "bili-go-to-url-blank",
                    false,
                    void 0,
                    "通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接"
                  ),
                  UISwitch("允许复制", "bili-allowCopy", true, void 0, "一般用于处理楼层的回复弹窗内无法选中复制问题"),
                ],
              },
            ],
          },
          {
            text: "变量设置",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch("noCallApp", "bili-noCallApp", true, void 0, "$store.state.common.noCallApp=true"),
                  UISwitch(
                    "isLogin",
                    "bili-setLogin",
                    true,
                    void 0,
                    ["$store.state.common.userInfo.isLogin=true", "$store.state.loginInfo.isLogin=true"].join("<br>")
                  ),
                  UISwitch(
                    "isClient",
                    "bili-setIsClient",
                    true,
                    void 0,
                    [
                      "$store.state.video.isClient=true",
                      "$store.state.opus.isClient=true",
                      "$store.state.playlist.isClient=true",
                      "$store.state.ver.bili=true",
                      "$store.state.ver.biliVer=2333",
                    ].join("<br>")
                  ),
                ],
              },
            ],
          },
          {
            text: "劫持/拦截",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "覆盖.launch-app-btn openApp",
                    "bili-overrideLaunchAppBtn_Vue_openApp",
                    true,
                    void 0,
                    "覆盖.launch-app-btn元素上的openApp函数，可阻止点击唤醒/下载App"
                  ),
                  UISwitch(
                    "覆盖bili-open-app opener.open",
                    "bili-cover-bili-open-app-open",
                    true,
                    void 0,
                    "覆盖bili-open-app/m-open-app元素上的opener.open函数，可阻止点击唤醒/下载App，如果存在有效链接，会自动跳转"
                  ),
                  UISwitch(
                    "覆盖.wx-tag的handleClick",
                    "bili-cover-wx-tag-handleClick",
                    true,
                    void 0,
                    "覆盖.wx-tag元素上的点击事件，让它直接打开视频"
                  ),
                  UISwitch(
                    "劫持setTimeout-autoOpenApp",
                    "bili-hookSetTimeout_autoOpenApp",
                    true,
                    void 0,
                    "阻止自动调用App"
                  ),
                ],
              },
            ],
          },
          {
            type: "deepMenu",
            text: "成分检测",
            forms: [
              {
                type: "forms",
                text: "",
                forms: [
                  UISwitch("启用", "bili-componentDetection", true, void 0, "启用后可检测用户的成分信息"),
                  UIButton("自定义规则", "检测用户成分的规则", "管理", void 0, false, false, "primary", () => {
                    BilibiliComponentDetectionRule.showView();
                  }),
                ],
              },
              {
                type: "forms",
                text: "",
                forms: [
                  UIButton("数据导入", "导入自定义规则数据", "导入", void 0, false, false, "primary", () => {
                    BilibiliComponentDetectionRule.importRule();
                  }),
                  UIButton("数据导出", "导出自定义规则数据", "导出", void 0, false, false, "primary", () => {
                    BilibiliComponentDetectionRule.exportRule("成分检测.json");
                  }),
                ],
              },
            ],
          },
        ],
      },
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "数据配置",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UIInput(
                    "access_token",
                    "bili-head-recommend-access_token",
                    BilibiliQrCodeLogin.getAccessToken(),
                    "填入access_token，可用于获取推荐视频数据、番剧搜索、番剧播放等",
                    (event, value, valueAsNumber) => {
                      BilibiliQrCodeLogin.setAccessTokenInfo({
                        access_token: value,
                        expireAt: BilibiliQrCodeLogin.generateExpireAt(),
                      });
                    },
                    void 0,
                    false,
                    true
                  ),
                ],
              },
            ],
          },
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
                    (event, isSelectValue, isSelectText) => {
                      log$1.info("设置当前Qmsg弹出位置" + isSelectText);
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
          },
          {
            text: "Cookie配置",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch("启用", "httpx-use-cookie-enable", false, void 0, "启用后，将根据下面的配置进行添加cookie"),
                  UISwitch(
                    "使用document.cookie",
                    "httpx-use-document-cookie",
                    false,
                    void 0,
                    "自动根据请求的域名来获取对应的cookie"
                  ),
                  UITextArea(
                    "bilibili.com",
                    "httpx-cookie-bilibili.com",
                    "",
                    void 0,
                    void 0,
                    "Cookie格式：xxx=xxxx;xxx=xxxx"
                  ),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const SettingUIHead = {
    id: "panel-head",
    title: "首页",
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
                  UISwitch("美化显示", "bili-head-beautify", true, void 0, "调整瀑布流视频卡片样式类似哔哩哔哩App"),
                  UISwitch("美化顶部NavBar", "bili-beautifyTopNavBar", true, void 0, "类似哔哩哔哩App的样式"),
                  UISwitch(
                    "补充推荐视频信息",
                    "bili-head-supplementaryVideoStreamingInformation",
                    true,
                    void 0,
                    "给视频添加UP主名，当前视频总时长信息"
                  ),
                  UISwitch("新标签页打开", "bili-head-openVideoInNewTab", false, void 0, "包括视频、番剧"),
                ],
              },
            ],
          },
          {
            text: "推荐视频",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "bili-head-recommend-enable",
                    true,
                    void 0,
                    "添加【推荐】标签，数据来源为App端(如果填入了access_token的话)"
                  ),
                  UISwitch(
                    "显示【图文】",
                    "bili-head-recommend-push-graphic",
                    true,
                    void 0,
                    "加载App端推送的【图文】卡片"
                  ),
                ],
              },
            ],
          },
        ],
      },
    ],
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
  const SettingUIVideo = {
    id: "panel-video",
    title: "视频",
    isDefault() {
      return BilibiliRouter.isVideo();
    },
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
                    "强制本页刷新跳转",
                    "bili-video-forceThisPageToRefreshAndRedirect",
                    false,
                    void 0,
                    "用于处理内存泄露问题"
                  ),

                  UISwitch("新增评论模块", "bili-video-addCommentModule", true, void 0, "用于查看当前视频的评论"),
                  UISwitch(
                    "新增简介模块",
                    "bili-video-addDescModule",
                    true,
                    void 0,
                    "用于查看当前视频的播放量、简介、一键三连等信息"
                  ),
                ],
              },
            ],
          },
          {
            text: "ArtPlayer播放器",
            type: "deepMenu",
            forms: [
              {
                text: "功能",
                type: "forms",
                forms: [
                  UISwitch("启用", "bili-video-enableArtPlayer", true, void 0, "使用artplayer代替页面的播放器"),
                  UISelect(
                    "播放的视频类型",
                    "bili-video-playType",
                    "mp4",
                    [
                      {
                        text: "mp4",
                        value: "mp4",
                      },
                      {
                        text: "dash",
                        value: "dash",
                      },
                    ],
                    void 0,
                    "当选择dash时会有画质更高的选项"
                  ),
                  UISwitch("自动播放视频", "bili-video-playerAutoPlayVideo", false, void 0, ""),
                  UISwitch("自动进入全屏", "bili-video-playerAutoPlayVideoFullScreen", false, void 0, ""),
                ],
              },
              {
                text: "控件设置",
                type: "forms",
                forms: [
                  UISlider(
                    "controls左右边距",
                    "bili-video-artplayer-controlsPadding-left-right",
                    0,
                    0,
                    50,
                    void 0,
                    (value) => {
                      return value + "px";
                    },
                    "可用于全屏横屏适配屏幕",
                    1
                  ),
                ],
              },
              {
                text: "插件",
                type: "forms",
                forms: [
                  UISwitch("弹幕", "artplayer-plugin-video-danmaku-enable", true, void 0, "哔哩哔哩 (゜-゜)つロ 干杯~"),
                  UISwitch(
                    "Dash Audio Support",
                    "artplayer-plugin-video-m4sAudioSupport-enable",
                    true,
                    void 0,
                    "视频类型为dash时，该插件可支持播放音频"
                  ),
                  UISwitch(
                    "选集",
                    "artplayer-plugin-video-epChoose-enable",
                    true,
                    void 0,
                    "当视频播放完毕后会自动连播"
                  ),
                  UISwitch(
                    "CC字幕",
                    "artplayer-plugin-video-cc-subtitle-enable",
                    true,
                    void 0,
                    "字幕支持插件，如果存在繁体字幕，则自动生成简体字幕"
                  ),
                  UISwitch(
                    "顶部工具栏",
                    "artplayer-plugin-video-toptoolbar-enable",
                    true,
                    void 0,
                    "显示视频标题和当前观看人数"
                  ),
                  UISwitch(
                    "视频统计信息",
                    "artplayer-plugin-video-statistics-enable",
                    true,
                    void 0,
                    "用于显示当前视频信息的弹窗"
                  ),
                ],
              },
              {
                text: "加速CDN设置（dash）",
                type: "forms",
                forms: [
                  UISelect(
                    "视频-UPOS服务器设置",
                    "bili-video-uposServerSelect",
                    BilibiliCDNServerList[0].host,
                    BilibiliCDNServerList.map((item) => {
                      return {
                        text: item.name,
                        value: item.host,
                      };
                    }),
                    void 0,
                    "设置视频流的服务器，可加快视频加载速度"
                  ),
                  UIInput(
                    "视频-自定义UPOS服务器",
                    "bili-video-uposServerSelect-own",
                    "",
                    "自定义的服务器优先级大于上面选择的服务器",
                    void 0,
                    "请输入upos服务器的域名"
                  ),
                  UISelect(
                    "音频-UPOS服务器设置",
                    "bili-video-uposServerSelect-audio",
                    BilibiliCDNServerList[0].host,
                    BilibiliCDNServerList.map((item) => {
                      return {
                        text: item.name,
                        value: item.host,
                      };
                    }),
                    void 0,
                    "设置音频的服务器，可加快音频加载速度"
                  ),
                  UIInput(
                    "音频-自定义UPOS服务器",
                    "bili-video-uposServerSelect-audio-own",
                    "",
                    "自定义的服务器优先级大于上面选择的服务器",
                    void 0,
                    "请输入upos服务器的域名"
                  ),
                ],
              },
            ],
          },
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch("UP主信息", "bili-video-cover-UpWrapper", true, void 0, "点击UP主头像/名称可跳转至UP主空间"),
                  UISwitch(
                    "相关视频",
                    "bili-video-cover-bottomRecommendVideo",
                    true,
                    void 0,
                    "点击下面的相关视频可正确跳转至该视频"
                  ),
                  UISwitch(
                    "选集",
                    "bili-video-cover-seasonNew",
                    true,
                    void 0,
                    "点击下面的选集列表内的视频可正确跳转至该视频"
                  ),
                ],
              },
            ],
          },
          {
            text: "劫持/拦截",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [UISwitch("阻止调用App", "bili-video-hook-callApp", true, void 0, "处理函数: PlayerAgent")],
              },
            ],
          },
        ],
      },
    ],
  };
  const SettingUIOpus = {
    id: "panel-opus",
    title: "专栏",
    isDefault() {
      return BilibiliRouter.isOpus();
    },
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
                    "自动展开阅读全文",
                    "bili-opus-automaticallyExpandToReadFullText",
                    true,
                    void 0,
                    "屏蔽【展开阅读全文】按钮并自动处理全文高度"
                  ),
                ],
              },
            ],
          },
          {
            text: "变量设置",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch("autoOpenApp", "bili-opus-variable-autoOpenApp", true, void 0, "autoOpenApp函数置空"),
                  UISwitch("go404", "bili-opus-variable-go404", true, void 0, "go404函数置空，可禁止前往404页面"),
                  UISwitch("handleFallback", "bili-opus-variable-handleFallback", true, void 0, "禁止前往404页面"),
                ],
              },
            ],
          },
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch("话题", "bili-opus-cover-topicJump", true, void 0, "点击话题正确跳转"),
                  UISwitch(
                    "header用户",
                    "bili-opus-cover-header",
                    true,
                    void 0,
                    "点击内容上的发布本动态的用户正确跳转个人空间"
                  ),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const SettingUIDynamic = {
    id: "panel-dynamic",
    title: "动态",
    isDefault() {
      return BilibiliRouter.isDynamic();
    },
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch("话题", "bili-dynamic-cover-topicJump", true, void 0, "点击话题正确跳转"),
                  UISwitch(
                    "header用户",
                    "bili-dynamic-cover-header",
                    true,
                    void 0,
                    "点击内容上的发布本动态的用户正确跳转个人空间"
                  ),
                  UISwitch("@用户", "bili-dynamic-cover-atJump", true, void 0, "点击@用户正确跳转个人空间"),
                  UISwitch("引用", "bili-dynamic-cover-referenceJump", true, void 0, "点击引用的视频|用户正确跳转"),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const SettingUIBangumi = {
    id: "panel-bangumi",
    title: "番剧",
    isDefault() {
      return BilibiliRouter.isBangumi();
    },
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
                forms: [UISwitch("固定缩放倍率", "bili-bangumi-initialScale", true, void 0, "")],
              },
            ],
          },
          {
            text: "ArtPlayer播放器",
            type: "deepMenu",
            forms: [
              {
                text: "控件设置",
                type: "forms",
                forms: [
                  UISlider(
                    "controls左右边距",
                    "bili-bangumi-artplayer-controlsPadding-left-right",
                    0,
                    0,
                    50,
                    void 0,
                    (value) => {
                      return value + "px";
                    },
                    "可用于全屏横屏适配屏幕",
                    1
                  ),
                ],
              },
              {
                text: "插件",
                type: "forms",
                forms: [
                  UISwitch(
                    "弹幕",
                    "artplayer-plugin-bangumi-danmaku-enable",
                    true,
                    void 0,
                    "哔哩哔哩 (゜-゜)つロ 干杯~"
                  ),
                  UISwitch(
                    "Dash Audio Support",
                    "artplayer-plugin-bangumi-m4sAudioSupport-enable",
                    true,
                    void 0,
                    "视频类型为dash时，该插件可支持播放音频"
                  ),
                  UISwitch(
                    "选集",
                    "artplayer-plugin-bangumi-epChoose-enable",
                    true,
                    void 0,
                    "当视频播放完毕后会自动连播"
                  ),
                  UISwitch(
                    "CC字幕",
                    "artplayer-plugin-bangumi-cc-subtitle-enable",
                    true,
                    void 0,
                    "字幕支持插件，如果存在繁体字幕，则自动生成简体字幕"
                  ),
                  UISwitch(
                    "顶部工具栏",
                    "artplayer-plugin-bangumi-toptoolbar-enable",
                    true,
                    void 0,
                    "显示视频标题和当前观看人数"
                  ),
                  UISwitch(
                    "空降助手",
                    "artplayer-plugin-bangumi-airborneHelper-enable",
                    true,
                    void 0,
                    "如果获取到的信息中存在空降信息，如跳过片头片尾，那么会自动跳过"
                  ),
                  UISwitch(
                    "视频统计信息",
                    "artplayer-plugin-bangumi-statistics-enable",
                    true,
                    void 0,
                    "用于显示当前视频信息的弹窗"
                  ),
                ],
              },
              {
                text: "解除区域限制",
                type: "forms",
                forms: [
                  UISwitch(
                    "解锁番剧限制",
                    "bili-bangumi-unlockAreaLimit",
                    false,
                    void 0,
                    "使用户可以观看区域外版权番剧"
                  ),
                  UISwitch(
                    "生成简中字幕",
                    "bili-bangumi-generateSimpleChineseSubtitle",
                    true,
                    void 0,
                    "根据繁体字幕自动生成简体中文字幕"
                  ),
                ],
              },
              {
                text: "加速CDN设置（dash）",
                type: "forms",
                forms: [
                  UISelect(
                    "视频-UPOS服务器设置",
                    "bili-bangumi-uposServerSelect",
                    BilibiliCDNServerList[0].host,
                    BilibiliCDNServerList.map((item) => {
                      return {
                        text: item.name,
                        value: item.host,
                      };
                    }),
                    void 0,
                    "设置视频流的服务器，可加快视频加载速度"
                  ),
                  UIInput(
                    "视频-自定义UPOS服务器",
                    "bili-bangumi-uposServerSelect-own",
                    "",
                    "自定义的服务器优先级大于上面选择的服务器",
                    void 0,
                    "请输入upos服务器的域名"
                  ),
                  UISelect(
                    "音频-UPOS服务器设置",
                    "bili-bangumi-uposServerSelect-audio",
                    BilibiliCDNServerList[0].host,
                    BilibiliCDNServerList.map((item) => {
                      return {
                        text: item.name,
                        value: item.host,
                      };
                    }),
                    void 0,
                    "设置音频的服务器，可加快音频加载速度"
                  ),
                  UIInput(
                    "音频-自定义UPOS服务器",
                    "bili-bangumi-uposServerSelect-audio-own",
                    "",
                    "自定义的服务器优先级大于上面选择的服务器",
                    void 0,
                    "请输入upos服务器的域名"
                  ),
                ],
              },
              {
                text: "<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>解析服务器</a>",
                type: "forms",
                forms: [
                  UIInput(
                    "中国大陆",
                    "bili-bangumi-proxyApiServer-default",
                    "",
                    "用于请求播放地址的代理",
                    void 0,
                    "bilibili优化.example.com"
                  ),
                  UIInput(
                    "香港",
                    "bili-bangumi-proxyApiServer-hk",
                    "",
                    "用于请求播放地址的代理",
                    void 0,
                    "bilibili优化.example.com"
                  ),
                  UIInput(
                    "台湾",
                    "bili-bangumi-proxyApiServer-tw",
                    "",
                    "用于请求播放地址的代理",
                    void 0,
                    "bilibili优化.example.com"
                  ),
                  UIInput(
                    "泰国/东南亚",
                    "bili-bangumi-proxyApiServer-tha-or-sea",
                    "",
                    "用于请求播放地址的代理",
                    void 0,
                    "bilibili优化.example.com"
                  ),
                ],
              },
            ],
          },
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【选集】",
                    "bili-bangumi-cover-clicl-event-chooseEp",
                    true,
                    void 0,
                    "让【选集】的视频列表可点击跳转"
                  ),
                  UISwitch(
                    "【其它】",
                    "bili-bangumi-cover-clicl-event-other",
                    true,
                    void 0,
                    "让【PV&其他】、【预告】、【主题曲】、【香境剧场】等的视频列表可点击跳转"
                  ),
                  UISwitch(
                    "【更多推荐】",
                    "bili-bangumi-cover-clicl-event-recommend",
                    true,
                    void 0,
                    "让【更多推荐】的视频列表可点击跳转"
                  ),
                ],
              },
            ],
          },
          {
            text: "劫持/拦截",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [UISwitch("阻止调用App", "bili-bangumi-hook-callApp", true, void 0, "")],
              },
            ],
          },
        ],
      },
    ],
  };
  const SettingUISearch = {
    id: "panel-search",
    title: "搜索",
    isDefault() {
      return BilibiliRouter.isSearch();
    },
    forms: [
      {
        type: "forms",
        text: "",
        forms: [
          {
            type: "deepMenu",
            text: "功能",
            forms: [
              {
                type: "forms",
                text: "",
                forms: [
                  UISwitch("搜索框自动获取焦点", "bili-search-inputAutoFocus", true, void 0, ""),
                  UISwitch("美化搜索结果", "bili-search-beautifySearchResult", true, void 0, "重构搜索结果的样式"),
                  UISwitch(
                    "开启其它地区番剧搜索",
                    "bili-search-enableOtherAreaSearchBangumi",
                    false,
                    void 0,
                    "在搜索页面添加其它地区番剧搜索结果，需要解析服务器支持"
                  ),
                ],
              },
              {
                text: "<a href='https://github.com/yujincheng08/BiliRoaming/wiki/%E5%85%AC%E5%85%B1%E8%A7%A3%E6%9E%90%E6%9C%8D%E5%8A%A1%E5%99%A8' target='_blank'>搜索服务器</a>",
                type: "forms",
                forms: [
                  UIInput(
                    "香港",
                    "bili-search-proxyApiServer-hk",
                    "",
                    "用于搜索番剧结果的代理",
                    void 0,
                    "bilibili优化.example.com"
                  ),
                  UIInput(
                    "台湾",
                    "bili-search-proxyApiServer-tw",
                    "",
                    "用于搜索番剧结果的代理",
                    void 0,
                    "bilibili优化.example.com"
                  ),
                  UIInput(
                    "泰国/东南亚",
                    "bili-search-proxyApiServer-tha-or-sea",
                    "",
                    "用于搜索番剧结果的代理",
                    void 0,
                    "bilibili优化.example.com"
                  ),
                ],
              },
            ],
          },
          {
            type: "deepMenu",
            text: "覆盖点击事件",
            forms: [
              {
                type: "forms",
                text: "",
                forms: [
                  UISwitch("取消", "bili-search-cover-cancel", false, void 0, "点击取消按钮回退至上一页"),
                  UISwitch(
                    "搜索结果",
                    "bili-search-cover-card-result-click-event",
                    true,
                    void 0,
                    "修复点击搜索结果不跳转视频的问题"
                  ),
                ],
              },
            ],
          },
          {
            text: "变量设置",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch("noCallApp", "bili-search-vue-prop-noCallApp", true, void 0, "noCallApp = true"),
                  UISwitch(
                    "openAppDialog",
                    "bili-search-vue-prop-openAppDialog",
                    true,
                    void 0,
                    "openAppDialog = false"
                  ),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const SettingUISpace = {
    id: "panel-space",
    title: "个人空间",
    isDefault() {
      return BilibiliRouter.isSpace();
    },
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
                    "修复正确跳转",
                    "bili-space-repairRealJump",
                    true,
                    void 0,
                    "修复视频|动态的正确跳转，避免跳转404"
                  ),
                ],
              },
            ],
          },
          {
            text: "覆盖点击事件",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "动态视频",
                    "bili-space-coverDynamicStateCardVideo",
                    true,
                    void 0,
                    "点击发布动态的视频可正常跳转至该视频"
                  ),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const SettingUILive = {
    id: "panel-live",
    title: "直播",
    isDefault() {
      return BilibiliRouter.isLive();
    },
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            type: "deepMenu",
            text: "功能",
            forms: [
              {
                text: "加速CDN设置",
                type: "forms",
                forms: [
                  UISwitch("启用", "bili-live-cdn-hook", false, void 0, "开启后，劫持网络请求并替换返回的视频流CDN"),
                  UISelect(
                    "直播视频流-UPOS服务器设置",
                    "bili-live-uposServerSelect",
                    BilibiliCDNServerList[0].host,
                    BilibiliCDNServerList.map((item) => {
                      return {
                        text: item.name,
                        value: item.host,
                      };
                    }),
                    void 0,
                    "设置视频流的服务器，可加快视频加载速度"
                  ),
                  UIInput(
                    "直播视频流-自定义UPOS服务器",
                    "bili-live-uposServerSelect-own",
                    "",
                    "自定义的服务器优先级大于上面选择的服务器",
                    void 0,
                    "请输入upos服务器的域名"
                  ),
                ],
              },
            ],
          },
          {
            text: "屏蔽",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch("【屏蔽】聊天室", "bili-live-block-chatRoom", false, void 0, "直接不显示底部的聊天室"),
                  UISwitch(
                    "【屏蔽】xxx进入直播间",
                    "bili-live-block-brush-prompt",
                    false,
                    void 0,
                    "直接不显示底部的xxx进入直播间"
                  ),
                  UISwitch(
                    "【屏蔽】控制面板",
                    "bili-live-block-control-panel",
                    false,
                    void 0,
                    "屏蔽底部的发个弹幕、送礼"
                  ),
                ],
              },
            ],
          },
          {
            text: "劫持/拦截",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "阻止open-app-btn元素点击事件触发",
                    "bili-live-prevent-openAppBtn",
                    true,
                    void 0,
                    "开启后可不跳转至唤醒App页面"
                  ),
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const SettingUITopicDetail = {
    id: "panel-topic-detail",
    title: "话题",
    isDefault() {
      return BilibiliRouter.isTopicDetail();
    },
    forms: [],
  };
  PanelContent.addContentConfig([
    SettingUICommon,
    SettingUIHead,
    SettingUIVideo,
    SettingUIOpus,
    SettingUIDynamic,
    SettingUIBangumi,
    SettingUITopicDetail,
    SettingUISearch,
    SettingUISpace,
    SettingUILive,
  ]);
  PanelMenu.addMenuOption([
    {
      key: "go_to_login",
      text: "🛠 前往登录",
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback() {
        BilibiliUtils.goToLogin();
      },
    },
    {
      key: "go_to_login_to_parse_access_key",
      text: "🛠 扫码并解析access_key",
      autoReload: false,
      isStoreValue: false,
      showText(text) {
        return text;
      },
      callback() {
        BilibiliQrCodeLogin.init();
      },
    },
  ]);
  Panel.init();
  Bilibili.init();
  __pops__.config.cssText.index += `
/* bilibili颜色 #FB7299 */
.pops{
    --bili-color: #FB7299;
    --bili-color-rgb: 251, 114, 153;
}
`;
  __pops__.config.cssText.panelCSS += `

.pops-slider{
    --pops-slider-main-bg-color: var(--bili-color);
    --pops-slider-color-primary: var(--bili-color);
}
aside.pops-panel-aside .pops-is-visited, aside.pops-panel-aside ul li:hover{
    color: rgb(var(--bili-color-rgb));
    background: rgba(var(--bili-color-rgb), 0.1);
}
/* switch的 */
.pops-panel-switch.pops-panel-switch-is-checked span.pops-panel-switch__core{
    border-color: rgb(var(--bili-color-rgb),var(--pops-bd-opacity));
    background-color: rgb(var(--bili-color-rgb),var(--pops-bg-opacity));
}
.pops button[type="primary"],
.pops button[type="primary"]:active ,
.pops button[type="primary"]:hover{
    --button-color: #ffffff;
    --button-bd-color: var(--bili-color);
    --button-bg-color: var(--bili-color);
}
`;
})(Qmsg, DOMUtils, Utils, pops, MD5, Artplayer, artplayerPluginDanmuku, Viewer, MD5);
