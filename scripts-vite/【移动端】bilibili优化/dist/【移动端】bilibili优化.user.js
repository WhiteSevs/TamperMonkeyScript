// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.10.1
// @author       WhiteSevs
// @description  移动端专用，免登录（但登录后可以看更多评论）、阻止跳转App、App端推荐视频流、解锁视频画质(番剧解锁需配合其它插件)、美化显示、去广告等
// @license      GPL-3.0-only
// @icon         https://i0.hdslb.com/bfs/static/jinkela/long/images/512.png
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://m.bilibili.com/*
// @match        *://live.bilibili.com/*
// @match        *://www.bilibili.com/read/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/497907/1413262/QRCodeJS.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.3.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.3.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.7.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/md5@2.3.0/dist/md5.min.js
// @require      https://fastly.jsdelivr.net/npm/flv.js@1.6.2/dist/flv.js
// @require      https://fastly.jsdelivr.net/npm/artplayer-plugin-danmuku@5.1.4/dist/artplayer-plugin-danmuku.js
// @require      https://fastly.jsdelivr.net/npm/artplayer@5.1.7/dist/artplayer.js
// @connect      *
// @connect      m.bilibili.com
// @connect      www.bilibili.com
// @connect      api.bilibili.com
// @connect      app.bilibili.com
// @connect      passport.bilibili.com
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(a=>{if(typeof GM_addStyle=="function"){GM_addStyle(a);return}function n(e){let p=document.createElement("style");return p.innerHTML=e,document.head?document.head.appendChild(p):document.documentElement.appendChild(p),p}n(a)})(' @charset "UTF-8";.m-video2-awaken-btn,.openapp-dialog,.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-home .launch-app-btn.home-float-openapp,.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp{display:none!important}#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp,#app .video .m-video-season-panel .launch-app-btn .open-app{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp,#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn,#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp{display:none!important}#app.main-container bili-open-app.btn-download{display:none!important}#app .read-app-main bili-open-app{display:none!important}html{--bili-color: #fb7299;--bili-color-rgb: 251, 114, 153} ');

(function (Qmsg, Utils, DOMUtils, pops, md5, Artplayer, artplayerPluginDanmuku, flvjs) {
  'use strict';

  var _a;
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
      cookieRule: [
        {
          key: "httpx-cookie-bilibili.com",
          hostname: /bilibili.com/g
        }
      ]
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
  const _SCRIPT_NAME_ = "【移动端】bilibili优化";
  const utils = Utils.noConflict();
  const domutils = DOMUtils.noConflict();
  const __pops = pops;
  const QRCodeJS = _monkeyWindow.QRCode || _unsafeWindow.QRCode;
  const log = new utils.Log(
    _GM_info,
    _unsafeWindow.console || _monkeyWindow.console
  );
  const SCRIPT_NAME = ((_a = _GM_info == null ? void 0 : _GM_info.script) == null ? void 0 : _a.name) || _SCRIPT_NAME_;
  const GMCookie = new utils.GM_Cookie();
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
            let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex(maxZIndex).zIndex;
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
  httpx.interceptors.request.use((data2) => {
    HttpxCookieManager.handle(data2);
    return data2;
  });
  httpx.interceptors.response.use(void 0, (data2) => {
    log.error(["拦截器-请求错误", data2]);
    if (data2.type === "onabort") {
      Qmsg.warning("请求取消");
    } else if (data2.type === "onerror") {
      Qmsg.error("请求异常");
    } else if (data2.type === "ontimeout") {
      Qmsg.error("请求超时");
    } else {
      Qmsg.error("其它错误");
    }
    return data2;
  });
  httpx.config({
    logDetails: DEBUG
  });
  const OriginPrototype = {
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
  };
  const addStyle = utils.addStyle.bind(utils);
  const KEY = "GM_Panel";
  const ATTRIBUTE_INIT = "data-init";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  const UISwitch = function(text, key, defaultValue, clickCallBack, description) {
    let result = {
      text,
      type: "switch",
      description,
      attributes: {},
      getValue() {
        return Boolean(PopsPanel.getValue(key, defaultValue));
      },
      callback(event, value) {
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        if (typeof clickCallBack === "function") {
          if (clickCallBack(event, value)) {
            return;
          }
        }
        PopsPanel.setValue(key, Boolean(value));
      },
      afterAddToUListCallBack: void 0
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = Boolean(defaultValue);
    }
    return result;
  };
  const UITextArea = function(text, key, defaultValue, description, changeCallBack, placeholder = "", disabled) {
    let result = {
      text,
      type: "textarea",
      attributes: {},
      description,
      placeholder,
      disabled,
      getValue() {
        let localValue = PopsPanel.getValue(key, defaultValue);
        return localValue;
      },
      callback(event, value) {
        PopsPanel.setValue(key, value);
      }
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
    }
    return result;
  };
  const UISelect = function(text, key, defaultValue, data2, callback, description) {
    let selectData = [];
    if (typeof data2 === "function") {
      selectData = data2();
    } else {
      selectData = data2;
    }
    let result = {
      text,
      type: "select",
      description,
      attributes: {},
      getValue() {
        return PopsPanel.getValue(key, defaultValue);
      },
      callback(event, isSelectedValue, isSelectedText) {
        PopsPanel.setValue(key, isSelectedValue);
        if (typeof callback === "function") {
          callback(event, isSelectedValue, isSelectedText);
        }
      },
      data: selectData
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
    }
    return result;
  };
  const UISlider = function(text, key, defaultValue, min, max, step, changeCallBack, getToolTipContent, description) {
    let result = {
      text,
      type: "slider",
      description,
      attributes: {},
      getValue() {
        return PopsPanel.getValue(key, defaultValue);
      },
      getToolTipContent(value) {
        if (typeof getToolTipContent === "function") {
          return getToolTipContent(value);
        } else {
          return `${value}`;
        }
      },
      callback(event, value) {
        if (typeof changeCallBack === "function") {
          if (changeCallBack(event, value)) {
            return;
          }
        }
        PopsPanel.setValue(key, value);
      },
      min,
      max,
      step
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
    }
    return result;
  };
  const UIOwn = function(getLiElementCallBack, initConfig, props, afterAddToUListCallBack) {
    let result = {
      attributes: {},
      type: "own",
      props,
      getLiElementCallBack,
      afterAddToUListCallBack
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_INIT] = () => {
        if (initConfig) {
          Object.keys(initConfig).forEach((key) => {
            let defaultValue = initConfig[key];
            if (PopsPanel.$data.data.has(key)) {
              log.warn("请检查该key(已存在): " + key);
            }
            PopsPanel.$data.data.set(key, defaultValue);
          });
        }
        return false;
      };
    }
    return result;
  };
  const BilibiliPlayerToast = {
    $flag: {
      isInitCSS: false
    },
    $data: {
      /** 默认的toast的className */
      originToast: "mplayer-toast",
      /** 让Toast显示的className */
      showClassName: "mplayer-show",
      /** 自定义的toast的class，避免和页面原有的toast冲突 */
      prefix: "mplayer-toast-gm"
    },
    $el: {
      get $mplayer() {
        return document.querySelector(".mplayer");
      }
    },
    /**
     * 弹出吐司
     * @param config
     */
    toast(config) {
      if (typeof config === "string") {
        config = {
          text: config
        };
      }
      this.initCSS();
      let $parent = config.parent ?? this.$el.$mplayer;
      if (!$parent) {
        throw new TypeError("toast parent is null");
      }
      this.mutationMPlayerOriginToast($parent);
      let $toast = domutils.createElement("div", {
        "data-from": "gm"
      });
      domutils.addClass($toast, this.$data.prefix);
      domutils.addClass($toast, this.$data.showClassName);
      if (config.showCloseBtn) {
        let $closeBtn = domutils.createElement("div", {
          className: this.$data.prefix + "-close",
          innerHTML: (
            /*html*/
            `
                    <span class="bp-svgicon">
                        <svg width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.47 4.47a.75.75 0 011.06 0l5.541 5.54 5.54-5.54a.75.75 0 011.061 1.06l-5.54 5.541 5.54 5.54a.75.75 0 01.073.977l-.073.084a.75.75 0 01-1.06 0l-5.541-5.54-5.54 5.54a.75.75 0 01-1.061-1.06l5.54-5.541-5.54-5.54a.75.75 0 01-.073-.977z" fill="#FEFEFE" fill-rule="evenodd">
                            </path>
                        </svg>
                    </span>
                `
          )
        });
        $toast.appendChild($closeBtn);
        domutils.on($closeBtn, "click", (event) => {
          utils.preventEvent(event);
          this.closeToast($toast);
        });
      }
      let $text = domutils.createElement("span", {
        className: this.$data.prefix + "-text",
        innerText: config.text
      });
      $toast.appendChild($text);
      if (typeof config.timeText === "string" && config.timeText.trim() != "") {
        let $time = domutils.createElement("span", {
          className: this.$data.prefix + "-time",
          innerText: config.timeText
        });
        $toast.appendChild($time);
      }
      if (typeof config.jumpText === "string" && config.jumpText.trim() != "") {
        let $jump = domutils.createElement("span", {
          className: this.$data.prefix + "-jump",
          innerText: config.jumpText
        });
        $toast.appendChild($jump);
        domutils.on($jump, "click", (event) => {
          if (typeof config.jumpClickCallback === "function") {
            utils.preventEvent(event);
            config.jumpClickCallback(event);
          }
        });
      }
      this.setTransitionendEvent($toast);
      let timeout = typeof config.timeout === "number" && !isNaN(config.timeout) ? config.timeout : 3500;
      Array.from(
        document.querySelectorAll(`.mplayer-toast`)
      ).forEach(($mplayerOriginToast) => {
        var _a2;
        if ($mplayerOriginToast.hasAttribute("data-is-set-transitionend")) {
          return;
        }
        $mplayerOriginToast.setAttribute("data-is-set-transitionend", "true");
        if ((_a2 = $mplayerOriginToast.textContent) == null ? void 0 : _a2.includes("记忆你上次看到")) {
          setTimeout(() => {
            let $close = $mplayerOriginToast.querySelector(
              ".mplayer-toast-close"
            );
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
        }
      };
    },
    /**
     * 初始化css
     */
    initCSS() {
      if (this.$flag.isInitCSS) {
        return;
      }
      this.$flag.isInitCSS = true;
      addStyle(
        /*css*/
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
    /**
     * 观察mplayer
     * 用于关闭页面自己的toast
     * 动态更新自己的toast位置
     */
    mutationMPlayerOriginToast($parent) {
      let $mplayer = this.$el.$mplayer;
      if (!$mplayer) {
        return;
      }
      if ($mplayer.hasAttribute("data-mutation")) {
        return;
      }
      log.success(`添加观察器，动态更新toast的位置`);
      $mplayer.setAttribute("data-mutation", "gm");
      utils.mutationObserver($mplayer, {
        config: {
          subtree: true,
          childList: true
        },
        immediate: true,
        callback: () => {
          this.updatePageToastBottom();
        }
      });
    },
    /**
     * 更新页面上的bottom的位置
     */
    updatePageToastBottom() {
      let pageToastList = Array.from(
        document.querySelectorAll(`.${this.$data.prefix}`)
      ).concat(
        Array.from(
          document.querySelectorAll(
            ".".concat(this.$data.originToast).concat(".").concat(this.$data.showClassName)
          )
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
    /**
     * 关闭吐司
     */
    closeToast($ele) {
      $ele.classList.remove(this.$data.showClassName);
    },
    /**
     * 获取事件名称列表
     * @private
     */
    getTransitionendEventNameList() {
      return [
        "webkitTransitionEnd",
        "mozTransitionEnd",
        "MSTransitionEnd",
        "otransitionend",
        "transitionend"
      ];
    },
    /**
     * 监听过渡结束
     * @private
     */
    setTransitionendEvent($toast) {
      let that = this;
      let animationEndNameList = this.getTransitionendEventNameList();
      domutils.on(
        $toast,
        animationEndNameList,
        function(event) {
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
          capture: true
        }
      );
    }
  };
  const BilibiliRouter = {
    /**
     * 视频页面
     * + /video/
     */
    isVideo() {
      return window.location.pathname.startsWith("/video/");
    },
    /**
     * 番剧
     * + /banggumi/
     */
    isBangumi() {
      return window.location.pathname.startsWith("/bangumi/");
    },
    /**
     * 搜索
     * + /search
     */
    isSearch() {
      return window.location.pathname.startsWith("/search");
    },
    /**
     * 搜索结果页面
     *
     * + /search?keyword=xxx
     */
    isSearchResult() {
      let urlSearchParams = new URLSearchParams(window.location.search);
      return this.isSearch() && urlSearchParams.has("keyword");
    },
    /**
     * 直播
     * + live.bilibili.com
     */
    isLive() {
      return window.location.hostname === "live.bilibili.com";
    },
    /**
     * 专栏稿件
     * + /opus
     */
    isOpus() {
      return window.location.pathname.startsWith("/opus");
    },
    /**
     * 话题
     * + /topic-detail
     */
    isTopicDetail() {
      return window.location.pathname.startsWith("/topic-detail");
    },
    /**
     * 动态
     * + /dynamic
     */
    isDynamic() {
      return window.location.pathname.startsWith("/dynamic");
    },
    /**
     * 首页
     * + /
     * + /channel
     */
    isHead() {
      return window.location.pathname === "/" || window.location.pathname.startsWith("/channel");
    },
    /**
     * 个人空间
     * + /space
     */
    isSpace() {
      return window.location.pathname.startsWith("/space");
    }
  };
  const BilibiliPCRouter = {
    /**
     * 桌面端
     */
    isPC() {
      return window.location.hostname === "www.bilibili.com";
    },
    /**
     * 应该是动态？
     */
    isReadMobile() {
      return this.isPC() && window.location.pathname.startsWith("/read/mobile");
    }
  };
  let _ajaxHooker_ = null;
  const XhrHook = {
    get ajaxHooker() {
      if (_ajaxHooker_ == null) {
        log.info("启用ajaxHooker拦截网络");
        _ajaxHooker_ = utils.ajaxHooker();
      }
      return _ajaxHooker_;
    }
  };
  const BilibiliVideoPlayUrlQN = {
    /**
     * 仅mp4方式支持
     * + 6
     */
    "240P 极速": 6,
    /**
     * 仅mp4方式支持
     * + 16
     */
    "360P 流畅": 16,
    /**
     * 仅mp4方式支持
     * + 32
     */
    "480P 清晰": 32,
    /**
     * web端默认值
     *
     * B站前端需要登录才能选择，但是直接发送请求可以不登录就拿到720P的取流地址
     *
     * 无720P时则为720P60
     * + 64
     */
    "720P 高清": 64,
    /**
     * 需要认证登录账号
     * + 74
     */
    "720P60 高帧率": 74,
    /**
     * TV端与APP端默认值
     *
     * 需要认证登录账号
     * + 80
     */
    "1080P 高清": 80,
    /**
     * 大多情况需求认证大会员账号
     * + 112
     */
    "1080P+ 高码率": 112,
    /**
     * 大多情况需求认证大会员账号
     * + 116
     */
    "1080P60 高帧率": 116,
    /**
     * 需要fnval&128=128且fourk=1
     *
     * 大多情况需求认证大会员账号
     * + 120
     */
    "4K 超清": 120,
    /**
     * 仅支持dash方式
     *
     * 需要fnval&64=64
     * + 125
     */
    "HDR 真彩色": 125,
    /**
     * 仅支持dash方式
     *
     * 需要fnval&512=512
     *
     * 大多情况需求认证大会员账号
     * + 126
     */
    杜比视界: 126,
    /**
     * 仅支持dash方式
     *
     * 需要fnval&1024=1024
     *
     * 大多情况需求认证大会员账号
     * + 127
     */
    "8K 超高清": 127
  };
  const BilibiliVideoPlayUrlQN_Value = {};
  Object.keys(BilibiliVideoPlayUrlQN).forEach((text) => {
    Reflect.set(
      BilibiliVideoPlayUrlQN_Value,
      BilibiliVideoPlayUrlQN[text],
      text
    );
  });
  const BilibiliNetworkHook = {
    $flag: {
      is_hook_video_playurl: false,
      is_hook_bangumi_html5: false
    },
    init() {
      if (BilibiliRouter.isVideo()) {
        PopsPanel.execMenuOnce("bili-video-xhr-unlockQuality", () => {
          this.hook_video_playurl();
        });
      } else if (BilibiliRouter.isBangumi()) ;
    },
    /**
     * 视频播放地址获取
     *
     * + //api.bilibili.com/x/player/wbi/playurl
     * + //api.bilibili.com/x/player/playurl
     *
     */
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
          playUrl.searchParams.set(
            "qn",
            BilibiliVideoPlayUrlQN["1080P60 高帧率"].toString()
          );
          playUrl.searchParams.set("high_quality", "1");
          playUrl.searchParams.set("fnver", "0");
          playUrl.searchParams.set("fourk", "1");
          if (playUrl.searchParams.has("__t")) {
            playUrl.searchParams.delete("__t");
            return;
          }
          request.url = playUrl.toString();
          request.response = (res) => {
            var _a2, _b;
            let data2 = utils.toJSON(res.responseText);
            let unlockQuality = (_a2 = data2 == null ? void 0 : data2["data"]) == null ? void 0 : _a2["quality"];
            let support_formats = (_b = data2 == null ? void 0 : data2["data"]) == null ? void 0 : _b["support_formats"];
            log.info("当前解锁的quality值：" + unlockQuality);
            if (unlockQuality) {
              BilibiliPlayer.initVideoQualityInfo(unlockQuality);
            }
            if (unlockQuality && support_formats) {
              let findValue = support_formats.find((item) => {
                return item["quality"] == unlockQuality;
              });
              if (findValue) {
                let qualityText = findValue["new_description"] || findValue["display_desc"];
                log.info("成功解锁画质 " + qualityText);
                BilibiliPlayerToast.toast(`成功解锁画质 ${qualityText}`);
              }
            }
          };
        }
      });
    },
    /**
     * 番剧播放地址获取
     *
     * + //api.bilibili.com/pgc/player/web/playurl/html5
     *
     */
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
          let playUrl = new URL(request.url);
          playUrl.pathname = "/pgc/player/web/playurl";
          playUrl.searchParams.delete("bsource");
          playUrl.searchParams.set(
            "qn",
            BilibiliVideoPlayUrlQN["1080P60 高帧率"].toString()
          );
          playUrl.searchParams.set("fnval", "1");
          playUrl.searchParams.set("fnver", "0");
          playUrl.searchParams.set("fourk", "1");
          playUrl.searchParams.set("from_client", "BROWSER");
          playUrl.searchParams.set("drm_tech_type", "2");
          request.url = playUrl.toString();
          request.response = (res) => {
            let data2 = utils.toJSON(res.responseText);
            let result = data2["result"];
            log.info("当前解锁的quality值：" + result["quality"]);
            if (result["quality"] && result["support_formats"]) {
              let findValue = result["support_formats"].find((item) => {
                return item["quality"] == result["quality"];
              });
              if (findValue) {
                log.info(
                  "当前已解锁的画质：" + findValue["new_description"] || findValue["display_desc"]
                );
              }
            }
          };
        }
      });
    }
  };
  const BilibiliApiUtils = {
    /**
     * 合并并检查是否传入aid或者bvid
     */
    mergeAndCheckSearchParamsData(searchParamsData, config) {
      if ("aid" in config && config["aid"] != null) {
        Reflect.set(searchParamsData, "aid", config.aid);
      } else if ("bvid" in config && config["bvid"] != null) {
        Reflect.set(searchParamsData, "bvid", config.bvid);
      } else {
        throw new TypeError("avid or bvid must give one");
      }
    }
  };
  const BilibiliApiConfig = {
    web_host: "api.bilibili.com"
  };
  const BilibiliVideoCodingCode = {
    AVC: 7,
    HEVC: 12,
    AV1: 13
  };
  const BilibiliResponseCheck = {
    /**
     * check json has {code: 0, message: "0"}
     */
    isWebApiSuccess(json) {
      return (json == null ? void 0 : json.code) === 0 && ((json == null ? void 0 : json.message) === "0" || (json == null ? void 0 : json.message) === "success");
    },
    /**
     * 是否是区域限制
     */
    isAreaLimit(data2) {
      let areaLimitCode = {
        "6002003": "抱歉您所在地区不可观看！"
      };
      let flag = false;
      Object.keys(areaLimitCode).forEach((code) => {
        let codeMsg = areaLimitCode[code];
        if (data2.code.toString() === code.toString() || data2.message.includes(codeMsg)) {
          flag = true;
        }
      });
      return flag;
    }
  };
  const BilibiliVideoApi = {
    /**
     * 获取视频播放地址，avid或bvid必须给一个
     * + /x/player/playurl
     * @param config
     * @param extraParams 额外参数，一般用于hook network参数内的判断
     */
    async playUrl(config, extraParams) {
      let searchParamsData = {
        cid: config.cid,
        qn: config.qn ?? BilibiliVideoPlayUrlQN["1080P60 高帧率"],
        high_quality: config.high_quality ?? 1,
        fnval: config.fnval ?? 1,
        // 固定0
        fnver: config.fnver ?? 0,
        // 是否允许 4K 视频
        fourk: config.fourk ?? 1
      };
      if (config.setPlatformHTML5) {
        Reflect.set(searchParamsData, "platform", "html5");
      }
      BilibiliApiUtils.mergeAndCheckSearchParamsData(searchParamsData, config);
      if (typeof extraParams === "object") {
        Object.assign(searchParamsData, extraParams);
      }
      let getResp = await httpx.get(
        "https://api.bilibili.com/x/player/playurl?" + utils.toSearchParamsStr(searchParamsData),
        {
          responseType: "json",
          fetch: true
        }
      );
      if (!getResp.status) {
        return;
      }
      let data2 = utils.toJSON(getResp.data.responseText);
      if (data2["code"] !== 0) {
        return;
      }
      return data2["data"];
    },
    /**
     * 获取视频在线观看人数
     * + /x/player/online/total
     */
    async onlineTotal(config) {
      let searchParamsData = {
        cid: config.cid
      };
      BilibiliApiUtils.mergeAndCheckSearchParamsData(searchParamsData, config);
      if ("aid" in config) {
        Reflect.set(searchParamsData, "aid", config.aid);
      } else if ("bvid" in config) {
        Reflect.set(searchParamsData, "bvid", config.bvid);
      } else {
        throw new TypeError("avid or bvid must give one");
      }
      let httpxResponse = await httpx.get(
        `https://${BilibiliApiConfig.web_host}/x/player/online/total?${utils.toSearchParamsStr(searchParamsData)}`,
        {
          responseType: "json",
          fetch: true
        }
      );
      if (!httpxResponse.status) {
        return;
      }
      let data2 = utils.toJSON(httpxResponse.data.responseText);
      if (!BilibiliResponseCheck.isWebApiSuccess(data2)) {
        log.error(`获取在线观看人数失败: ${JSON.stringify(data2)}`);
      }
      return data2["data"];
    },
    /**
     * 点赞视频（web端）
     * @param config
     */
    async like(config) {
      var _a2;
      let searchParamsData = {
        like: config.like,
        csrf: ((_a2 = GMCookie.get("bili_jct")) == null ? void 0 : _a2.value) || ""
      };
      BilibiliApiUtils.mergeAndCheckSearchParamsData(searchParamsData, config);
      let getResp = await httpx.get(
        "https://api.bilibili.com/x/web-interface/archive/like?" + utils.toSearchParamsStr(searchParamsData),
        {
          fetch: true
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
    }
  };
  const VueUtils = {
    /**
     * 获取元素上的__vue__属性
     * @param element
     */
    getVue(element) {
      return element == null ? void 0 : element.__vue__;
    },
    /**
     * 等待vue属性并进行设置
     * @param $target 目标对象
     * @param needSetList 需要设置的配置
     */
    waitVuePropToSet($target, needSetList) {
      if (!Array.isArray(needSetList)) {
        VueUtils.waitVuePropToSet($target, [needSetList]);
        return;
      }
      function getTarget() {
        let __target__ = null;
        if (typeof $target === "string") {
          __target__ = document.querySelector($target);
        } else if (typeof $target === "function") {
          __target__ = $target();
        } else if ($target instanceof HTMLElement) {
          __target__ = $target;
        }
        return __target__;
      }
      needSetList.forEach((needSetOption) => {
        if (typeof needSetOption.msg === "string") {
          log.info(needSetOption.msg);
        }
        function checkVue() {
          let target = getTarget();
          if (target == null) {
            return false;
          }
          let vueObj = VueUtils.getVue(target);
          if (vueObj == null) {
            return false;
          }
          let needOwnCheck = needSetOption.check(vueObj);
          return Boolean(needOwnCheck);
        }
        utils.waitVueByInterval(
          () => {
            return getTarget();
          },
          checkVue,
          250,
          1e4
        ).then((result) => {
          if (!result) {
            return;
          }
          let target = getTarget();
          let vueObj = VueUtils.getVue(target);
          if (vueObj == null) {
            return;
          }
          needSetOption.set(vueObj);
        });
      });
    },
    /**
     * 前往网址
     * @param $vueNode 包含vue属性的元素
     * @param path 需要跳转的路径
     * @param [useRouter=false] 是否强制使用Vue的Router来进行跳转
     */
    goToUrl($vueNode, path, useRouter = false) {
      if ($vueNode == null) {
        Qmsg.error("跳转Url: 获取根元素#app失败");
        log.error("跳转Url: 获取根元素#app失败：" + path);
        return;
      }
      let vueObj = VueUtils.getVue($vueNode);
      if (vueObj == null) {
        log.error("获取vue属性失败");
        Qmsg.error("获取vue属性失败");
        return;
      }
      let $router = vueObj.$router;
      let isBlank = true;
      log.info("即将跳转URL：" + path);
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
            log.info("不同域名，直接本页打开，不用Router：" + path);
            window.location.href = path;
            return;
          }
        }
        log.info("$router push跳转Url：" + path);
        $router.push(path);
      }
    },
    /**
     * 手势返回
     * @param option 配置
     */
    hookGestureReturnByVueRouter(option) {
      function popstateEvent() {
        log.success("触发popstate事件");
        resumeBack(true);
      }
      function banBack() {
        log.success("监听地址改变");
        option.vueInstance.$router.history.push(option.hash);
        domutils.on(window, "popstate", popstateEvent);
      }
      async function resumeBack(isFromPopState = false) {
        domutils.off(window, "popstate", popstateEvent);
        let callbackResult = option.callback(isFromPopState);
        if (callbackResult) {
          return;
        }
        while (1) {
          if (option.vueInstance.$router.history.current.hash === option.hash) {
            log.info("后退！");
            option.vueInstance.$router.back();
            await utils.sleep(250);
          } else {
            return;
          }
        }
      }
      banBack();
      return {
        resumeBack
      };
    }
  };
  const BilibiliHook = {
    $isHook: {
      windowPlayerAgent: false,
      hookWebpackJsonp_openApp: false,
      overRideLaunchAppBtn_Vue_openApp: false,
      overRideBiliOpenApp: false
    },
    $data: {
      setTimeout: []
    },
    /**
     * 劫持webpack
     * @param webpackName 当前全局变量的webpack名
     * @param mainCoreData 需要劫持的webpack的顶部core，例如：(window.webpackJsonp = window.webpackJsonp || []).push([["core:0"],{}])
     * @param checkCallBack 如果mainCoreData匹配上，则调用此回调函数
     */
    windowWebPack(webpackName = "webpackJsonp", mainCoreData, checkCallBack) {
      let originObject = void 0;
      OriginPrototype.Object.defineProperty(_unsafeWindow, webpackName, {
        get() {
          return originObject;
        },
        set(newValue) {
          log.success("成功劫持webpack，当前webpack名：" + webpackName);
          originObject = newValue;
          const originPush = originObject.push;
          originObject.push = function(...args) {
            let _mainCoreData = args[0][0];
            if (mainCoreData == _mainCoreData || Array.isArray(mainCoreData) && Array.isArray(_mainCoreData) && JSON.stringify(mainCoreData) === JSON.stringify(_mainCoreData)) {
              Object.keys(args[0][1]).forEach((keyName) => {
                let originSwitchFunc = args[0][1][keyName];
                args[0][1][keyName] = function(..._args) {
                  let result = originSwitchFunc.call(this, ..._args);
                  _args[0] = checkCallBack(_args[0]);
                  return result;
                };
              });
            }
            return originPush.call(this, ...args);
          };
        }
      });
    },
    /**
     * window.PlayerAgent
     */
    windowPlayerAgent() {
      if (this.$isHook.windowPlayerAgent) {
        return;
      }
      this.$isHook.windowPlayerAgent = true;
      let PlayerAgent = void 0;
      OriginPrototype.Object.defineProperty(_unsafeWindow, "PlayerAgent", {
        get() {
          return new Proxy(
            {},
            {
              get(target, key) {
                if (key === "openApp") {
                  return function(...args) {
                    let data2 = args[0];
                    log.info(["调用PlayerAgent.openApp", data2]);
                    if (data2["event"] === "fullScreen") {
                      let $wideScreen = document.querySelector(
                        ".mplayer-btn-widescreen"
                      );
                      if ($wideScreen) {
                        $wideScreen.click();
                      } else {
                        log.warn(
                          "主动再次点击全屏按钮失败，原因：未获取到.mplayer-btn-widescreen元素"
                        );
                      }
                    }
                  };
                } else {
                  return PlayerAgent[key];
                }
              }
            }
          );
        },
        set(v) {
          PlayerAgent = v;
        }
      });
    },
    /**
     * 劫持全局setTimeout
     * + 视频页面/video
     *
     * window.setTimeout
     * @param matchStr 需要进行匹配的函数字符串
     */
    setTimeout(matchStr) {
      this.$data.setTimeout.push(matchStr);
      if (this.$data.setTimeout.length > 1) {
        log.info("window.setTimeout hook新增劫持判断参数：" + matchStr);
        return;
      }
      _unsafeWindow.setTimeout = function(...args) {
        let callBackString = args[0].toString();
        if (callBackString.match(matchStr)) {
          log.success(["劫持setTimeout的函数", callBackString]);
          return;
        }
        return OriginPrototype.setTimeout.apply(this, args);
      };
    },
    /**
     * 覆盖元素.launch-app-btn上的openApp
     *
     * 页面上有很多
     */
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
        vueObj.openApp = function(...args) {
          log.success(["openApp：阻止唤醒App", args]);
        };
      }
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
          attributes: true
        },
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
        }
      });
    },
    /**
     * 覆盖元素bili-open-app上的opener.open
     *
     * 页面上有很多
     */
    overRideBiliOpenApp() {
      if (this.$isHook.overRideBiliOpenApp) {
        return;
      }
      this.$isHook.overRideBiliOpenApp = true;
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true,
          attributes: true
        },
        callback() {
          document.querySelectorAll("bili-open-app").forEach(($biliOpenApp) => {
            if ($biliOpenApp.hasAttribute("data-inject-opener-open")) {
              return;
            }
            let opener = Reflect.get($biliOpenApp, "opener");
            if (opener == null) {
              return;
            }
            let originOpen = opener == null ? void 0 : opener.open;
            if (typeof originOpen === "function") {
              Reflect.set(opener, "open", (config) => {
                log.success(
                  `拦截bili-open-app.open跳转: ${JSON.stringify(config)}`
                );
              });
              $biliOpenApp.setAttribute("data-inject-opener-open", "true");
            }
          });
        }
      });
    }
  };
  const BilibiliVideoHook = {
    init() {
      PopsPanel.execMenuOnce("bili-video-hook-callApp", () => {
        log.info("hook window.PlayerAgent");
        BilibiliHook.windowPlayerAgent();
      });
    }
  };
  const BilibiliUtils = {
    /**
     * 前往网址
     * @param path
     * @param [useRouter=false] 是否强制使用Router
     */
    goToUrl(path, useRouter = false) {
      let $app = document.querySelector("#app");
      if ($app == null) {
        Qmsg.error("跳转Url: 获取根元素#app失败");
        log.error("跳转Url: 获取根元素#app失败：" + path);
        return;
      }
      let vueObj = VueUtils.getVue($app);
      if (vueObj == null) {
        log.error("获取#app的vue属性失败");
        Qmsg.error("获取#app的vue属性失败");
        return;
      }
      let $router = vueObj.$router;
      let isGoToUrlBlank = PopsPanel.getValue("bili-go-to-url-blank");
      log.info("即将跳转URL：" + path);
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
            log.info("不同域名，直接本页打开，不用Router：" + path);
            window.location.href = path;
            return;
          }
        }
        log.info("$router push跳转Url：" + path);
        $router.push(path);
      }
    },
    /**
     * 前往登录
     */
    goToLogin(fromUrl = "") {
      window.open(
        `https://passport.bilibili.com/h5-app/passport/login?gourl=${encodeURIComponent(
        fromUrl
      )}`
      );
    },
    /**
     * 转换时长为显示的时长
     *
     * + 30 => 0:30
     * + 120 => 2:00
     * + 14400 => 4:00:00
     * @param duration 秒
     */
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
    /**
     * 手势返回
     */
    hookGestureReturnByVueRouter(option) {
      function popstateEvent() {
        log.success("触发popstate事件");
        resumeBack(true);
      }
      function banBack() {
        log.success("监听地址改变");
        option.vueObj.$router.history.push(option.hash);
        domutils.on(window, "popstate", popstateEvent);
      }
      async function resumeBack(isFromPopState = false) {
        domutils.off(window, "popstate", popstateEvent);
        let callbackResult = option.callback(isFromPopState);
        if (callbackResult) {
          return;
        }
        while (1) {
          if (option.vueObj.$router.history.current.hash === option.hash) {
            log.info("后退！");
            option.vueObj.$router.back();
            await utils.sleep(250);
          } else {
            return;
          }
        }
      }
      banBack();
      return {
        resumeBack
      };
    },
    /**
     * 加载<script>标签到页面
     */
    loadScript(src) {
      let $script = document.createElement("script");
      $script.src = src;
      document.head.appendChild($script);
      return new Promise((resolve) => {
        $script.onload = function() {
          log.success("script标签加载完毕：" + src);
          setTimeout(() => {
            resolve(true);
          }, 100);
        };
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
     * 固定meta viewport缩放倍率为1
     */
    initialScale() {
      log.info("设置<meta>的viewport固定缩放倍率为1并移除页面原有的<meta>");
      domutils.ready(() => {
        let meta = domutils.createElement(
          "meta",
          {},
          {
            name: "viewport",
            content: "width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover"
          }
        );
        domutils.remove("meta[name='viewport']");
        utils.waitNode("head").then(() => {
          document.head.appendChild(meta);
        });
      });
    }
  };
  const BilibiliUrlUtils = {
    /**
     * 获取用户个人空间链接
     * @param userId 用户id
     */
    getUserSpaceUrl(userId) {
      return `https://m.bilibili.com/space/${userId}`;
    },
    /**
     * 获取用户个人空间动态链接-dynamic
     * @param id 该动态的id
     */
    getUserSpaceDynamicUrl(id) {
      return `https://m.bilibili.com/dynamic/${id}`;
    },
    /**
     * 获取用户个人空间动态链接-opus
     * @param id 该动态的id
     */
    getUserSpaceOpusUrl(id) {
      return `https://m.bilibili.com/opus/${id}`;
    },
    /**
     * 获取视频链接
     * @param id bv/av号
     */
    getVideoUrl(id) {
      return `https://m.bilibili.com/video/${id}`;
    }
  };
  const BilibiliData = {
    className: {
      bangumi: "#app.main-container",
      dynamic: "#app .m-dynamic",
      opus: "#app .m-opus",
      search: "#app .m-search",
      "topic-detail": "#app .topic-detail",
      video: "#app .video",
      head: "#app .m-head"
    }
  };
  const BilibiliPCData = {
    className: {
      read: {
        mobile: "#app .read-app-main"
      }
    }
  };
  const BilibiliVideoBeautifyCSS = '@charset "UTF-8";\r\n#app .video {\r\n	/* 下面的推荐视频卡片 */\r\n}\r\n#app .video .video-list .card-box {\r\n	--left-card-width: 33%;\r\n	--right-child-padding: 1.333vmin;\r\n	/* 开启了bili-video-beautify */\r\n}\r\n#app .video .video-list .card-box .v-card-toapp {\r\n	width: 100%;\r\n	border-bottom: 1px solid #b5b5b5;\r\n	padding-left: 0;\r\n	padding-right: 0;\r\n}\r\n#app .video .video-list .card-box .v-card-toapp > a {\r\n	display: flex;\r\n	flex-wrap: nowrap;\r\n	gap: var(--right-child-padding);\r\n}\r\n#app .video .video-list .card-box .v-card-toapp > a .card {\r\n	width: var(--left-card-width);\r\n	height: 80px;\r\n	flex: 0 auto;\r\n}\r\n#app .video .video-list .card-box .v-card-toapp > a .card .count {\r\n	background: transparent;\r\n}\r\n#app .video .video-list .card-box .v-card-toapp > a .card .count .left {\r\n	display: list-item;\r\n}\r\n#app\r\n	.video\r\n	.video-list\r\n	.card-box\r\n	.v-card-toapp\r\n	> a\r\n	.card\r\n	.count\r\n	.left\r\n	span.item {\r\n	display: none;\r\n}\r\n#app .video .video-list .card-box .v-card-toapp > a .card .count .duration {\r\n	background: rgba(0, 0, 0, 0.4);\r\n	border-radius: 0.6vmin;\r\n	padding: 0px 0.5vmin;\r\n	right: 1vmin;\r\n	bottom: 1vmin;\r\n}\r\n#app .video .video-list .card-box .v-card-toapp > a .title {\r\n	flex: 1;\r\n	/*padding: var(--right-child-padding);*/\r\n	padding-top: 0;\r\n	margin-top: 0;\r\n	display: -webkit-box;\r\n	-webkit-line-clamp: 2;\r\n	-webkit-box-orient: vertical;\r\n	overflow: hidden;\r\n}\r\n#app .video .video-list .card-box .gm-right-container {\r\n	display: flex;\r\n	flex-direction: column;\r\n	width: calc(100% - var(--left-card-width));\r\n}\r\n#app .video .video-list .card-box .gm-right-container > * {\r\n	padding: var(--right-child-padding);\r\n	padding-bottom: 0;\r\n}\r\n#app .video .video-list .card-box .gm-right-container .left {\r\n	gap: 1rem;\r\n}\r\n#app .video .video-list .card-box .gm-right-container .left span {\r\n	display: flex;\r\n	align-items: safe center;\r\n	gap: 1vmin;\r\n}\r\n#app .video .video-list .card-box .gm-right-container .gm-up-name,\r\n#app .video .video-list .card-box .gm-right-container .left {\r\n	color: #999;\r\n	font-size: 3vmin;\r\n	transform-origin: left;\r\n	display: flex;\r\n	/*align-items: safe center;*/\r\n	align-items: safe flex-end;\r\n}\r\n#app .video .video-list .card-box .gm-right-container .gm-up-name svg{\r\n	width: 3vmin;\r\n	height: 3vmin;\r\n}\r\n#app .video .video-list .card-box .gm-right-container .gm-up-name-text {\r\n	margin-left: 1vmin;\r\n}\r\n#app .video .video-list .card-box .gm-right-container .num {\r\n	margin-right: 4vmin;\r\n}\r\n#app .video .video-list .card-box > a.v-card {\r\n	width: 100%;\r\n	border-bottom: 1px solid #b5b5b5;\r\n	padding-left: 0;\r\n	padding-right: 0;\r\n	display: flex;\r\n	flex-wrap: nowrap;\r\n}\r\n#app .video .video-list .card-box > a.v-card .card {\r\n	width: var(--left-card-width);\r\n	height: 100%;\r\n	flex: 0 auto;\r\n}\r\n#app .video .video-list .card-box > a.v-card .card .count {\r\n	background: transparent;\r\n}\r\n#app .video .video-list .card-box > a.v-card .card .count span {\r\n	display: none;\r\n}\r\n#app .video .video-list .card-box > a.v-card .card .count .duration {\r\n	background-color: rgba(0, 0, 0, 0.3);\r\n	border-radius: 4px;\r\n	color: #fff;\r\n	font-size: 12px;\r\n	height: 16px;\r\n	line-height: 16px;\r\n	margin-left: auto;\r\n	padding-left: 4px;\r\n	padding-right: 4px;\r\n}\r\n#app .video .video-list .card-box > a.v-card .title {\r\n	flex: 1;\r\n	/*padding: var(--right-child-padding);*/\r\n	padding-top: 0;\r\n	margin-top: 0;\r\n	display: -webkit-box;\r\n	-webkit-line-clamp: 2;\r\n	-webkit-box-orient: vertical;\r\n	overflow: hidden;\r\n}\r\n';
  const BilibiliVideoVueProp = {
    $data: {
      isInitPlayer: false,
      isUnlockUpower: false
    },
    init() {
      PopsPanel.execMenu("bili-video-initPlayer", () => {
        this.initPlayer();
      });
      PopsPanel.execMenu("bili-video-setVideoPlayer", () => {
        this.setVideoPlayer();
      });
      PopsPanel.execMenu("bili-video-unlockUpower", () => {
        this.unlockUpower();
      });
    },
    /**
     * 设置了某些vue属性后，会导致视频不出现播放按钮
     */
    initPlayer() {
      if (this.$data.isInitPlayer) {
        return;
      }
      this.$data.isInitPlayer = true;
      let that = this;
      utils.waitNode("#bilibiliPlayer", 3e3).then(async ($bilibiliPlayer) => {
        if (!$bilibiliPlayer) {
          that.$data.isInitPlayer = false;
          return;
        }
        await utils.sleep(300);
        let playerClassName = "m-video-player";
        VueUtils.waitVuePropToSet("." + playerClassName, [
          {
            msg: "等待设置参数 fullScreenCallApp",
            check(vueIns) {
              return typeof (vueIns == null ? void 0 : vueIns.fullScreenCallApp) === "boolean";
            },
            set(vueIns) {
              vueIns.fullScreenCallApp = false;
              log.success("成功设置参数 fullScreenCallApp=false");
            }
          },
          {
            msg: "等待设置参数 gameMode",
            check(vueObj) {
              return typeof (vueObj == null ? void 0 : vueObj.gameMode) === "boolean";
            },
            set(vueObj) {
              vueObj.gameMode = true;
              log.success("成功设置参数 gameMode=true");
            }
          },
          {
            msg: "等待获取函数 initPlayer()",
            check(vueObj) {
              return typeof (vueObj == null ? void 0 : vueObj.initPlayer) === "function";
            },
            set(vueObj) {
              that.$data.isInitPlayer = false;
              function intervalCheck() {
                let intervalId = void 0;
                let timeoutId = void 0;
                let checkCount = 1;
                let isSuccess = false;
                let lockFunc = new utils.LockFunction(async () => {
                  var _a2, _b, _c, _d;
                  let $playerVideo = document.querySelector(
                    "#bilibiliPlayer video"
                  );
                  let $posterImg = document.querySelector(
                    "#bilibiliPlayer img.mplayer-poster"
                  );
                  if ($playerVideo && $posterImg && $posterImg.src !== "") {
                    isSuccess = true;
                    (_a2 = BilibiliPlayer.player) == null ? void 0 : _a2.off("restart_call_app");
                    (_b = BilibiliPlayer.player) == null ? void 0 : _b.off("force_call_app_show");
                    log.success("<video>标签和视频封面图已成功初始化");
                    await utils.sleep(1e3);
                    PopsPanel.execMenu(
                      ["bili-coverQuality", "bili-rememberUserChooseQuality"],
                      () => {
                        BilibiliPlayerUI.coverQuality(true);
                      }
                    );
                    BilibiliPlayer.init();
                    return;
                  }
                  if (_unsafeWindow.BPlayerMobile == null) {
                    log.error("未加载player播放器，主动引入script标签");
                    await BilibiliUtils.loadScript(
                      "https://s1.hdslb.com/bfs/static/player/main/html5/mplayer.js?v=2876316"
                    );
                    await utils.sleep(300);
                  }
                  try {
                    vueObj.initPlayer(true);
                  } catch (error) {
                    log.error(error);
                    try {
                      log.info(`强制重载player播放器失败，使用普通调用`);
                      vueObj.initPlayer();
                    } catch (error2) {
                      log.error(error2);
                    }
                  }
                  log.success(
                    "第 " + checkCount + " 次未检测到视频，调用初始化视频函数 initPlayer()"
                  );
                  await utils.sleep(300);
                  (_c = BilibiliPlayer.player) == null ? void 0 : _c.off("restart_call_app");
                  (_d = BilibiliPlayer.player) == null ? void 0 : _d.off("force_call_app_show");
                  checkCount++;
                });
                intervalId = setInterval(async () => {
                  await lockFunc.run();
                  if (isSuccess) {
                    clearTimeout(timeoutId);
                    clearInterval(intervalId);
                  }
                }, 600);
                timeoutId = setTimeout(() => {
                  log.warn("检测视频超时5s，取消检测");
                  clearInterval(intervalId);
                }, 5e3);
              }
              intervalCheck();
            }
          }
        ]);
      });
    },
    /**
     * + __vue__.info.is_upower_exclusive=false
     * + __vue__.info.is_upower_play=false
     * + __vue__.info.is_upower_preview=false
     */
    unlockUpower() {
      VueUtils.waitVuePropToSet(BilibiliData.className.video, [
        {
          msg: "设置属性 __vue__.info.is_upower_exclusive",
          check(vueIns) {
            var _a2;
            return typeof ((_a2 = vueIns == null ? void 0 : vueIns.info) == null ? void 0 : _a2.is_upower_exclusive) === "boolean";
          },
          set(vueIns) {
            vueIns.info.is_upower_exclusive = false;
            log.success("成功设置属性  __vue__.info.is_upower_exclusive=false");
          }
        },
        {
          msg: "设置属性 __vue__.info.is_upower_play",
          check(vueObj) {
            var _a2;
            return typeof ((_a2 = vueObj == null ? void 0 : vueObj.info) == null ? void 0 : _a2.is_upower_play) === "boolean";
          },
          set(vueObj) {
            vueObj.info.is_upower_play = false;
            log.success("成功设置属性  __vue__.info.is_upower_play=false");
          }
        },
        {
          msg: "设置属性 __vue__.info.is_upower_preview",
          check(vueObj) {
            var _a2;
            return typeof ((_a2 = vueObj == null ? void 0 : vueObj.info) == null ? void 0 : _a2.is_upower_preview) === "boolean";
          },
          set(vueObj) {
            vueObj.info.is_upower_preview = false;
            BilibiliVideoVueProp.initPlayer();
            log.success("成功设置属性  __vue__.info.is_upower_preview=false");
          }
        }
      ]);
    },
    /**
     * 修改视频播放器设置参数
     *
     * + __vue__.playBtnNoOpenApp: `true`
     * + __vue__.playBtnOpenApp: `false`
     * + __vue__.coverOpenApp: `false`
     */
    setVideoPlayer() {
      VueUtils.waitVuePropToSet(
        BilibiliData.className.video + " .m-video-player",
        [
          {
            msg: "设置参数 playBtnNoOpenApp",
            check(vueIns) {
              return typeof vueIns.playBtnNoOpenApp === "boolean";
            },
            set(vueIns) {
              vueIns.playBtnNoOpenApp = true;
              log.success("成功设置参数 playBtnNoOpenApp=true");
            }
          },
          {
            msg: "设置参数 playBtnOpenApp",
            check(vueObj) {
              return typeof vueObj.playBtnOpenApp === "boolean";
            },
            set(vueObj) {
              vueObj.playBtnOpenApp = false;
              log.success("成功设置参数 playBtnOpenApp=false");
            }
          },
          {
            msg: "设置参数 coverOpenApp",
            check(vueObj) {
              return typeof vueObj.coverOpenApp === "boolean";
            },
            set(vueObj) {
              vueObj.coverOpenApp = false;
              log.success("成功设置参数 coverOpenApp=false");
            }
          }
        ]
      );
    }
  };
  const BilibiliVideo = {
    $data: {
      /** 是否已添加美化CSS */
      isAddBeautifyCSS: false
    },
    init() {
      BilibiliVideoHook.init();
      BilibiliVideoVueProp.init();
      PopsPanel.execMenuOnce("bili-video-repairVideoBottomAreaHeight", () => {
        return this.repairVideoBottomAreaHeight();
      });
      PopsPanel.execMenuOnce(
        "bili-video-autoClickContinueToWatchOnTheWebpage",
        () => {
          this.autoClickContinueToWatchOnTheWebpage();
        }
      );
      PopsPanel.execMenu("bili-video-beautify", () => {
        this.beautify();
      });
      PopsPanel.execMenuOnce("bili-video-cover-bottomRecommendVideo", () => {
        this.coverBottomRecommendVideo();
      });
      PopsPanel.execMenuOnce("bili-video-gestureReturnToCloseCommentArea", () => {
        this.gestureReturnToCloseCommentArea();
      });
      PopsPanel.execMenuOnce("bili-video-cover-seasonNew", () => {
        this.coverSeasonNew();
      });
      domutils.ready(() => {
        PopsPanel.execMenuOnce("bili-video-optimizationScroll", () => {
          this.optimizationScroll();
        });
        PopsPanel.execMenu("bili-video-disableSwipeTab", () => {
          this.disableSwipeTab();
        });
      });
    },
    /**
     * 美化显示
     */
    beautify() {
      log.info("美化显示");
      if (!this.$data.isAddBeautifyCSS) {
        this.$data.isAddBeautifyCSS = true;
        addStyle(BilibiliVideoBeautifyCSS);
      }
      utils.waitNode(
        BilibiliData.className.video + " .bottom-tab .list-view .card-box",
        1e4
      ).then(($cardBox) => {
        if (!$cardBox) {
          log.error("$cardBox is null");
          return;
        }
        function handleVCardToApp($vCard) {
          var _a2, _b;
          let $originTitle = $vCard.querySelector(".title");
          let $originLeft = $vCard.querySelector(".count .left");
          let isHandled = Boolean($vCard.querySelector(".gm-right-container"));
          let vueObj = VueUtils.getVue($vCard);
          if ($originTitle && $originLeft && vueObj && !isHandled) {
            let upName = (_b = (_a2 = vueObj == null ? void 0 : vueObj.info) == null ? void 0 : _a2.owner) == null ? void 0 : _b.name;
            if (upName == null) {
              log.error("美化显示-handleVCardToApp：获取up主名字失败");
              return;
            }
            let $originCount = $vCard.querySelector(".count");
            let $title = $originTitle.cloneNode(true);
            let $left = $originLeft.cloneNode(true);
            domutils.hide($originTitle);
            if ($originCount) {
              domutils.hide($originCount);
            }
            let $isOpenAppWeakened = $vCard.querySelector(".open-app.weakened");
            if ($isOpenAppWeakened) {
              domutils.hide($isOpenAppWeakened);
            }
            let $upInfo = document.createElement("div");
            $upInfo.className = "gm-up-name";
            $upInfo.innerHTML = /*html*/
            `
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
            domutils.after($originTitle, $rightContainer);
            $rightContainer.appendChild($title);
            $rightContainer.appendChild($rightBottom);
            $rightBottom.appendChild($upInfo);
            $rightBottom.appendChild($left);
          }
        }
        function handleVCard($vCard) {
          var _a2, _b, _c;
          let $originTitle = $vCard.querySelector(".title");
          let $originCount = $vCard.querySelector(".count");
          let isHandled = Boolean($vCard.querySelector(".gm-right-container"));
          let vueObj = VueUtils.getVue($vCard);
          if ($originTitle && $originCount && vueObj && !isHandled) {
            let duration = (_a2 = vueObj == null ? void 0 : vueObj.info) == null ? void 0 : _a2.duration;
            if (duration == null) {
              log.error("美化显示-handleVCard：获取视频时长失败");
              return;
            }
            let upName = (_c = (_b = vueObj == null ? void 0 : vueObj.info) == null ? void 0 : _b.owner) == null ? void 0 : _c.name;
            if (upName == null) {
              log.error("美化显示-handleVCard：获取up主名字失败");
              return;
            }
            let $cloneTitle = $originTitle.cloneNode(true);
            let $cloneCount = $originCount.cloneNode(true);
            domutils.hide($originTitle);
            let $duration = document.createElement("div");
            $duration.className = "duration";
            $duration.innerText = BilibiliUtils.parseDuration(duration);
            $cloneCount.className = "left";
            let $upInfo = document.createElement("div");
            $originCount.appendChild($duration);
            $upInfo.className = "gm-up-name";
            $upInfo.innerHTML = /*html*/
            `
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
            domutils.after($originTitle, $rightContainer);
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
        let $videoRoot = document.querySelector(
          BilibiliData.className.video
        );
        if ($videoRoot) {
          utils.mutationObserver($videoRoot, {
            config: {
              subtree: true,
              attributes: true,
              childList: true
            },
            callback() {
              lockFunc.run();
            }
          });
        } else {
          log.error("未找到视频根节点");
        }
      });
    },
    /**
     * 修复视频底部区域高度
     */
    repairVideoBottomAreaHeight() {
      log.info("修复视频底部区域高度");
      return addStyle(
        /*css*/
        `
		${BilibiliData.className.video} {
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
			${BilibiliData.className.video}{
				.m-video-info-new{
					margin-top: 72vmin;
				}
			}
		}
		`
      );
    },
    /**
     * 自动点击【继续在网页观看】
     */
    autoClickContinueToWatchOnTheWebpage() {
      domutils.on(
        document,
        "click",
        BilibiliData.className.video + " .main-info .btn",
        function() {
          log.info("触发点击【立即播放】，自动等待弹窗出现");
          utils.waitNode(".to-see", 1e4).then(($toSee) => {
            if (!$toSee) {
              log.error("弹窗按钮【继续在网页观看】10秒内未出现，取消等待");
              return;
            }
            log.success("自动点击 继续在网页观看");
            $toSee.click();
          });
        }
      );
    },
    /**
     * 覆盖视频标题区域的点击事件
     */
    coverBottomRecommendVideo() {
      log.info("覆盖 相关视频 点击事件");
      domutils.on(
        document,
        "click",
        BilibiliData.className.video + " .list-view .card-box .launch-app-btn",
        function(event) {
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
          log.info("相关视频的bvid: " + bvid);
          BilibiliUtils.goToUrl(BilibiliUrlUtils.getVideoUrl(bvid));
          utils.preventEvent(event);
        },
        {
          capture: true
        }
      );
    },
    /**
     * 覆盖选集视频列表的点击事件
     */
    coverSeasonNew() {
      log.info("覆盖 选集视频列表 点击事件");
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
        log.info("相关视频的bvid: " + bvid);
        BilibiliUtils.goToUrl(BilibiliUrlUtils.getVideoUrl(bvid));
        utils.preventEvent(event);
      }
      domutils.on(
        document,
        "click",
        BilibiliData.className.video + " .m-video-season-new .video-card .launch-app-btn",
        ClickCallBack,
        {
          capture: true
        }
      );
      domutils.on(
        document,
        "click",
        BilibiliData.className.video + " .m-video-season-panel .season-video-item .launch-app-btn",
        ClickCallBack,
        {
          capture: true
        }
      );
    },
    /**
     * 手势返回关闭评论区
     */
    gestureReturnToCloseCommentArea() {
      log.info("手势返回关闭评论区，全局监听document点击.sub-reply-preview");
      utils.waitNode("#app").then(($app) => {
        utils.waitVueByInterval(
          $app,
          () => {
            var _a2, _b;
            let vueObj = VueUtils.getVue($app);
            if (vueObj == null) {
              return false;
            }
            return typeof ((_b = (_a2 = vueObj == null ? void 0 : vueObj.$router) == null ? void 0 : _a2.options) == null ? void 0 : _b.scrollBehavior) != null;
          },
          250,
          1e4
        ).then((result) => {
          let appVue = VueUtils.getVue($app);
          if (!appVue) {
            log.error("获取#app的vue属性失败");
            return;
          }
          let oldScrollBehavior = appVue.$router.options.scrollBehavior;
          appVue.$router.options.scrollBehavior = function(to, from, scrollInfo) {
            if (to["hash"] === "#/seeCommentReply") {
              log.info("当前操作为打开评论区，scrollBehavior返回null");
              return null;
            } else if (to["hash"] === "" && from["hash"] === "#/seeCommentReply") {
              log.info("当前操作为关闭评论区，scrollBehavior返回null");
              return null;
            }
            return oldScrollBehavior.call(this, ...arguments);
          };
        });
      });
      domutils.on(document, "click", ".sub-reply-preview", function(event) {
        let $app = document.querySelector("#app");
        let appVue = VueUtils.getVue($app);
        if (!appVue) {
          log.error("获取#app元素失败");
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
              log.error("评论区关闭失败，原因：元素dialog-close-icon获取失败");
            }
            return true;
          }
        });
        utils.waitNode(".dialog-close-icon").then(($dialogCloseIcon) => {
          domutils.on(
            $dialogCloseIcon,
            "click",
            function() {
              hookGestureReturnByVueRouter.resumeBack(false);
            },
            {
              capture: true,
              once: true
            }
          );
        });
      });
    },
    /**
     * 进入全屏
     */
    enterVideoFullScreen() {
      utils.waitNode(".mplayer-btn-widescreen", 5e3).then(($btnWideScreen) => {
        if (!$btnWideScreen) {
          log.error("获取全屏按钮失败");
          Qmsg.error("获取全屏按钮失败");
          return;
        }
        if ($btnWideScreen.closest(".mplayer-wide")) {
          log.warn("当前的全屏按钮是【退出全屏】，不点击");
          return;
        }
        log.info(`进入全屏`);
        $btnWideScreen.click();
      });
    },
    /**
     * 优化滚动显示view
     */
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
      domutils.on(
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
              log.info(`视频区域的最大高度为 ${videoPlayerMaxHeight}px`);
              log.info(`视频区域的最大top为 ${videoPlayerMaxPaddingTop}px`);
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
          let navbarHeight = domutils.height($mNavBar);
          let bottomTabTop = $bottomTab.getBoundingClientRect().top;
          if (bottomTabTop < navbarHeight) {
            if ($bottomTabVAffix.hasAttribute("data-is-fixed")) ;
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
          passive: true
        }
      );
    },
    /**
     * 禁止滑动切换tab
     */
    disableSwipeTab() {
      log.info(`禁止滑动切换tab`);
      VueUtils.waitVuePropToSet(".m-video-bottom-tab", {
        msg: "等待tab的vue属性touchstart、touchmove、touchend事件，_bindEvents函数",
        check(vueInstance) {
          var _a2, _b, _c, _d, _e, _f, _g, _h;
          return ((_a2 = vueInstance == null ? void 0 : vueInstance.slider) == null ? void 0 : _a2.el) instanceof HTMLElement && typeof ((_c = (_b = vueInstance == null ? void 0 : vueInstance.slider) == null ? void 0 : _b.events) == null ? void 0 : _c.touchstart) === "function" && typeof ((_e = (_d = vueInstance == null ? void 0 : vueInstance.slider) == null ? void 0 : _d.events) == null ? void 0 : _e.touchmove) === "function" && typeof ((_g = (_f = vueInstance == null ? void 0 : vueInstance.slider) == null ? void 0 : _f.events) == null ? void 0 : _g.touchend) === "function" && typeof ((_h = vueInstance == null ? void 0 : vueInstance.slider) == null ? void 0 : _h._bindEvents) === "function";
        },
        set(vueInstance) {
          let $bindTarget = vueInstance.slider.el;
          $bindTarget.removeEventListener(
            "touchstart",
            vueInstance.slider.events.touchstart
          );
          $bindTarget.removeEventListener(
            "touchmove",
            vueInstance.slider.events.touchmove
          );
          $bindTarget.removeEventListener(
            "touchend",
            vueInstance.slider.events.touchend
          );
          vueInstance.slider._bindEvents = () => {
          };
          log.success(
            `成功禁用滑动，清除touchstart、touchmove、touchend事件，覆盖_bindEvents函数`
          );
        }
      });
    }
  };
  const BilibiliPlayerUI = {
    $flag: {
      /** 是否已经添加CSS */
      isInitCSS: false,
      /** 是否已经覆盖mplayer */
      isCoverMPlayer: false
    },
    $el: {
      /** 播放器右边菜单 */
      get $mplayerRight() {
        return document.querySelector(".mplayer-right");
      }
    },
    /** 右侧面板菜单 */
    $mPlayerRight: {
      /** 被访问状态的className */
      __activeClassName: "gf-mplayer-right-item-active",
      /** 每一个项的className */
      __itemClassName: "gf-mplayer-right-item",
      /** 显示右侧菜单的className */
      __showMPlayerRightClassName: "gf-mplayer-right-show",
      /** 显示右侧菜单 */
      showMPlayerRight(delayTime = 50) {
        if (delayTime > 0) {
          setTimeout(() => {
            this.showMPlayerRight(0);
          }, 50);
          return;
        }
        BilibiliPlayerUI.$el.$mplayerRight.classList.add(
          this.__showMPlayerRightClassName
        );
      },
      /** 隐藏右侧菜单 */
      hideMPlayerRight() {
        BilibiliPlayerUI.$el.$mplayerRight.classList.remove(
          this.__showMPlayerRightClassName
        );
      },
      /** 清空右侧菜单 */
      clearMPlayerRight() {
        BilibiliPlayerUI.$el.$mplayerRight.innerHTML = "";
      },
      /** 设置某个项访问状态 */
      setActive($el) {
        $el.classList.add(this.__activeClassName);
      },
      /** 切换某个项访问状态，并清空其它的访问状态 */
      switchActive($el) {
        this.clearAllActive();
        this.setActive($el);
      },
      /** 判断该项是否是访问状态 */
      isActive($el) {
        return $el.classList.contains(this.__activeClassName);
      },
      /** 清空某个项访问状态 */
      clearActive($el) {
        $el.classList.remove(this.__activeClassName);
      },
      /** 清空所有项的访问状态 */
      clearAllActive() {
        BilibiliPlayerUI.$el.$mplayerRight.querySelectorAll("." + this.__activeClassName).forEach((item) => item.classList.remove(this.__activeClassName));
      },
      /** 创建一个项 */
      createMPlayerItem(text) {
        return domutils.createElement("div", {
          className: this.__itemClassName,
          innerHTML: text ?? ""
        });
      }
    },
    init() {
      if (!this.$flag.isInitCSS) {
        this.$flag.isInitCSS = true;
        addStyle(
          /*css*/
          `
			.mplayer-right {
				--mplayer-right-w: 8em;
				--mplayer-right-deviation: var(--mplayer-right-w);
				background: #181212;
				width: var(--mplayer-right-w) !important;
				opacity: 0.9 !important;
				visibility: visible !important;
				color: #ffffff;
				-webkit-transform: translateX(8em) !important;
				transform: translateX(8em) !important;
				z-index: 1000;
				overflow-y: auto;
				display: block;
				align-content: center;
				position: absolute;
				transition: transform .4s;
				top: 0;
				bottom: 0;
				right: 0;
			}
			.gf-mplayer-right-show{
				-webkit-transform: translateX(0) !important;
				transform: translateX(0) !important;
			}
			.gf-mplayer-right-item{
				width: 100%;
				text-align: center;
				align-content: center;
				padding: 1em 0px;
			}
			.gf-mplayer-right-item-active {
				color: var(--bili-color);
			}
			`
        );
      }
      PopsPanel.execMenuOnce("bili-coverSpeedBtn", () => {
        this.coverMPlayer();
        this.coverSpeedBtn();
      });
      PopsPanel.execMenuOnce("bili-coverQuality", () => {
        this.coverMPlayer();
        this.coverQuality();
      });
      PopsPanel.onceExec("bili-repairPlayerToastCloseBtn", () => {
        this.repairPlayerToastCloseBtn();
      });
    },
    /**
     * 设置.mplayer全局点击监听，用于取消.mplayer-right
     */
    coverMPlayer() {
      if (this.$flag.isCoverMPlayer) {
        return;
      }
      this.$flag.isCoverMPlayer = true;
      domutils.on(
        document,
        "click",
        (event) => {
          var _a2, _b, _c;
          let $click = event.target;
          if (((_a2 = this.$el) == null ? void 0 : _a2.$mplayerRight) && !((_c = (_b = this.$el) == null ? void 0 : _b.$mplayerRight) == null ? void 0 : _c.contains($click))) {
            this.$mPlayerRight.hideMPlayerRight();
          }
        },
        { capture: true }
      );
    },
    /**
     * 覆盖【倍速】按钮
     */
    coverSpeedBtn() {
      domutils.on(
        document,
        "click",
        ".mplayer-control-btn-speed",
        async (event) => {
          utils.preventEvent(event);
          log.info("点击【倍速】");
          this.$mPlayerRight.hideMPlayerRight();
          this.$mPlayerRight.clearMPlayerRight();
          let speedList = [
            {
              text: "5.0X",
              value: 5
            },
            {
              text: "3.0X",
              value: 3
            },
            {
              text: "2.0X",
              value: 2
            },
            {
              text: "1.5X",
              value: 1.5
            },
            {
              text: "1.25X",
              value: 1.25
            },
            {
              text: "1.0X",
              value: 1
            },
            {
              text: "0.75X",
              value: 0.75
            },
            {
              text: "0.5X",
              value: 0.5
            },
            {
              text: "0.25X",
              value: 0.25
            }
          ];
          let videoBackRate = await BilibiliPlayer.getVideoPlayBackRate();
          let $isActive = void 0;
          speedList.forEach((item) => {
            let $mplayerItem = this.$mPlayerRight.createMPlayerItem(item.text);
            if (videoBackRate == item.value) {
              $isActive = $mplayerItem;
            }
            domutils.on($mplayerItem, "click", async (__event__) => {
              utils.preventEvent(__event__);
              await BilibiliPlayer.setVideoSpeed(item.value);
              this.$mPlayerRight.switchActive($mplayerItem);
              this.$mPlayerRight.hideMPlayerRight();
            });
            this.$el.$mplayerRight.appendChild($mplayerItem);
          });
          if ($isActive) {
            this.$mPlayerRight.switchActive($isActive);
            $isActive.scrollIntoView({
              block: "center"
            });
          }
          this.$mPlayerRight.showMPlayerRight();
        },
        {
          capture: true
        }
      );
    },
    /**
     * 覆盖【清晰度】按钮
     * @param initChooseQuality 是否初始化选择清晰度
     */
    coverQuality(initChooseQuality) {
      const userChooseVideoQuality_KEY = "userChooseVideoQuality";
      let qualityItemClickEvent = async (itemData, $mplayerItem) => {
        if ($mplayerItem && this.$mPlayerRight.isActive($mplayerItem)) {
          log.info(`该项已选中，无需重复点击`);
          return;
        }
        BilibiliPlayerToast.toast("切换中，请稍后");
        let playerPromise = await BilibiliPlayer.$player.playerPromise();
        let bvid = playerPromise.config.bvid;
        let cid = playerPromise.config.cid;
        if (!bvid) {
          BilibiliPlayerToast.toast("获取bvid失败");
          return;
        }
        let videoInfo = await BilibiliVideoApi.playUrl(
          {
            bvid,
            cid,
            qn: itemData.quality,
            setPlatformHTML5: true
          },
          {
            __t: Date.now()
          }
        );
        if (!videoInfo) {
          BilibiliPlayerToast.toast("获取视频信息失败");
          log.error("获取视频信息失败");
          return;
        }
        log.success(["切换清晰度-成功获取当前视频的具体信息", videoInfo]);
        let quality = videoInfo.quality;
        if (!(videoInfo.durl && Array.isArray(videoInfo.durl) && videoInfo.durl.length > 0)) {
          log.error("请求的视频信息内没有视频地址url");
          BilibiliPlayerToast.toast("请求的视频信息内没有视频地址url");
          return;
        }
        if (quality != itemData.quality) {
          log.error(
            `切换画质失败，请求到的画质和切换的画质不同，切换的: ${itemData.quality}，请求到的: ${quality}`
          );
          BilibiliPlayerToast.toast("切换画质失败，画质不同");
          return;
        }
        let url = videoInfo.durl[0].url;
        if (playerPromise.video && playerPromise.video instanceof HTMLVideoElement) {
          let setVideoUrlStatus = await BilibiliPlayer.setVideoUrl(url);
          if (setVideoUrlStatus.success) {
            log.success(`已成功切换至 ${itemData.text}`);
            BilibiliPlayer.$data.videoQuality.forEach((globalQualityItem) => {
              if (globalQualityItem.quality == itemData.quality) {
                globalQualityItem.isActive = true;
              } else {
                globalQualityItem.isActive = false;
              }
            });
            if ($mplayerItem) {
              this.$mPlayerRight.switchActive($mplayerItem);
            }
            BilibiliPlayerToast.toast(`已成功切换至 ${itemData.text}`);
            _GM_setValue(userChooseVideoQuality_KEY, quality);
            BilibiliDanmaku.init();
          } else {
            log.error("切换画质失败，未成功设置video的src");
            BilibiliPlayerToast.toast("切换画质失败，" + setVideoUrlStatus.msg);
          }
        } else {
          log.error("切换画质失败，未获取到video");
          BilibiliPlayerToast.toast("切换画质失败，未获取到video");
        }
        this.$mPlayerRight.hideMPlayerRight();
      };
      let qualityBtnEvent = async (event) => {
        log.info("点击【清晰度】");
        this.$mPlayerRight.hideMPlayerRight();
        this.$mPlayerRight.clearMPlayerRight();
        let qualityInfoList = [];
        if (!BilibiliPlayer.$data.videoQuality.length) {
          let playerPromise = await BilibiliPlayer.$player.playerPromise();
          let playerQuality = playerPromise.videoQuality;
          Object.keys(BilibiliVideoPlayUrlQN).forEach((qualityName) => {
            let qualityValue = BilibiliVideoPlayUrlQN[qualityName];
            qualityInfoList.push({
              text: qualityName,
              quality: qualityValue,
              isActive: playerQuality == qualityValue
            });
          });
        } else {
          qualityInfoList = [...BilibiliPlayer.$data.videoQuality];
        }
        console.log(`获取当前视频的清晰度: `, qualityInfoList);
        utils.sortListByProperty(qualityInfoList, (value) => {
          return value.quality;
        });
        let $isActive = void 0;
        qualityInfoList.forEach((item) => {
          let $mplayerItem = this.$mPlayerRight.createMPlayerItem(item.text);
          if (item.isActive) {
            $isActive = $mplayerItem;
          }
          domutils.on($mplayerItem, "click", async (__event__) => {
            utils.preventEvent(__event__);
            qualityItemClickEvent(item, $mplayerItem);
          });
          this.$el.$mplayerRight.appendChild($mplayerItem);
        });
        if ($isActive) {
          this.$mPlayerRight.switchActive($isActive);
          $isActive.scrollIntoView({
            block: "center"
          });
        } else {
          log.warn(`意外情况，没有一个选中的清晰度`);
        }
        this.$mPlayerRight.showMPlayerRight();
      };
      if (initChooseQuality) {
        let userChooseVideoQuality = _GM_getValue(
          userChooseVideoQuality_KEY
        );
        if (userChooseVideoQuality) {
          let findIndex = BilibiliPlayer.$data.videoQuality.findIndex(
            (item) => item.quality == userChooseVideoQuality && !item.isActive
          );
          if (findIndex != -1) {
            qualityItemClickEvent({
              text: BilibiliVideoPlayUrlQN_Value[userChooseVideoQuality],
              quality: userChooseVideoQuality,
              isActive: true
            });
          }
        }
      } else {
        domutils.on(
          document,
          "click",
          ".mplayer-control-btn-quality",
          async (event) => {
            utils.preventEvent(event);
            qualityBtnEvent();
          },
          {
            capture: true
          }
        );
      }
    },
    /**
     * 修复toast的关闭按钮点击无效的问题
     */
    repairPlayerToastCloseBtn() {
      domutils.on(
        document,
        "click",
        ".mplayer-toast.mplayer-show .mplayer-toast-close",
        (event) => {
          let $mplayerShow = event.target.closest(
            ".mplayer-show"
          );
          $mplayerShow.classList.remove("mplayer-show");
        }
      );
    }
  };
  const BilibiliPlayer = {
    /** 获取player对象 */
    get player() {
      return _unsafeWindow.player;
    },
    $player: {
      /** 获取player的异步结果 */
      async playerPromise() {
        await utils.waitPropertyByInterval(
          _unsafeWindow,
          () => {
            var _a2, _b;
            return typeof BilibiliPlayer.player === "object" && typeof ((_a2 = BilibiliPlayer.player) == null ? void 0 : _a2.playerPromise) === "object" && ((_b = BilibiliPlayer.player) == null ? void 0 : _b.playerPromise) != null;
          },
          250,
          1e4
        );
        let playerPromise = await BilibiliPlayer.player.playerPromise;
        return playerPromise;
      },
      /** 将番剧页面的h5 player转为player对象 */
      parseBiliH5PlayerToPlayer($h5Player) {
        let $player = $h5Player.player;
        let options = $h5Player.options;
        let player = {
          container: $player["elem"],
          config: options,
          danmaku: $player["danmaku"],
          video: $player["video"],
          videoQuality: options["qn"],
          // @ts-ignore
          VideoInfo: {
            avid: options["aid"],
            bvid: options["bvid"],
            cid: options["cid"],
            video_type: options["video_type"]
          }
        };
        let winPlayer = {
          playerPromise: new Promise((resolve) => {
            resolve(player);
          })
        };
        _unsafeWindow.player = winPlayer;
      }
    },
    $data: {
      /** 视频清晰度信息 */
      videoQuality: [],
      /**
       * 劫持网络请求解锁的值
       */
      hookUnlockQuality: 0
    },
    init() {
      this.$data.videoQuality = [];
      this.$data.hookUnlockQuality = 0;
      this.setVideoSpeed(1);
      BilibiliPlayerUI.init();
      this.initPlayerVideoInfo();
      PopsPanel.execMenu("bili-video-playerAutoPlayVideo", () => {
        this.autoPlay();
      });
      PopsPanel.execMenu("bili-video-playerAutoPlayVideoCheckMute", () => {
        this.listenVideoMuteState();
      });
      this.mutatuinCloseOriginToast();
      setTimeout(() => {
        BilibiliDanmaku.init();
      }, 500);
    },
    /**
     * 对视频画质清晰度初始化
     */
    initVideoQualityInfo(quality) {
      this.$data.hookUnlockQuality = quality;
      this.$data.videoQuality.forEach((item) => {
        if (item.quality == quality) {
          item.isActive = true;
        }
      });
    },
    /**
     * 监听视频静音状态
     *
     * 如果静音了，toast一下
     */
    async listenVideoMuteState() {
      let playerPromise = await this.$player.playerPromise();
      let $video = playerPromise.video;
      const attrKey = "data-is-listen-mute";
      if (!($video instanceof HTMLVideoElement)) {
        log.error("player.playerPromise中video不是HTMLVideoElement");
        return;
      }
      if ($video.hasAttribute(attrKey)) {
        return;
      }
      $video.setAttribute(attrKey, "true");
      log.success(`添加video的play事件监听，视频播放检测静音状态`);
      function checkVideoMuted() {
        let isMute = $video.muted;
        if ($video.muted) {
          log.warn(`当前静音状态，Qmsg提示让用户自行选择是否取消静音`);
          let $toast = BilibiliPlayerToast.toast({
            text: "当前视频为静音状态",
            jumpText: "取消静音",
            timeout: 8e3,
            showCloseBtn: true,
            jumpClickCallback(event) {
              var _a2;
              log.info(`设置静音状态：${!isMute}`);
              (_a2 = BilibiliPlayer.player) == null ? void 0 : _a2.setMute(!isMute);
              $toast.close();
            }
          });
        } else {
          log.info(`当前视频非静音状态`);
        }
      }
      domutils.on(
        $video,
        "play",
        async (event) => {
          await utils.sleep(500);
          checkVideoMuted();
          $video.removeAttribute(attrKey);
        },
        {
          once: true
        }
      );
      checkVideoMuted();
    },
    /**
     * 设置视频播放倍速
     * @param value 倍速值
     */
    async setVideoSpeed(value) {
      return new Promise(async (resolve, reject) => {
        try {
          let playerPromise = await this.$player.playerPromise();
          await utils.waitPropertyByInterval(
            async () => {
              playerPromise = await BilibiliPlayer.$player.playerPromise();
              return playerPromise;
            },
            () => {
              return typeof playerPromise.video != null && playerPromise.video instanceof HTMLVideoElement;
            },
            250,
            1e4
          );
          playerPromise.video.playbackRate = value;
          log.success(`设置视频播放倍速: ${value}`);
          let config = await BilibiliDanmaku.DanmakuCoreConfig();
          config.videoSpeed = value;
          log.success(`设置弹幕配置的视频播放倍速: ${value}`);
          resolve(true);
        } catch (error) {
          reject(error);
        }
      });
    },
    /**
     * 自动播放
     */
    async autoPlay() {
      return new Promise(async (resolve, reject) => {
        var _a2;
        try {
          let playerPromise = await this.$player.playerPromise();
          await utils.sleep(500);
          log.success("player：自动播放视频");
          (_a2 = BilibiliPlayer.player) == null ? void 0 : _a2.play();
          await utils.sleep(500);
          PopsPanel.execMenu("bili-video-playerAutoPlayVideoFullScreen", () => {
            BilibiliVideo.enterVideoFullScreen();
          });
        } catch (error) {
          reject(error);
        }
      });
    },
    /**
     * 获取视频播放倍速
     */
    async getVideoPlayBackRate() {
      return new Promise(async (resolve, reject) => {
        try {
          let playerPromise = await this.$player.playerPromise();
          await utils.waitPropertyByInterval(
            async () => {
              playerPromise = await BilibiliPlayer.$player.playerPromise();
              return playerPromise;
            },
            () => {
              return typeof playerPromise.video != null && playerPromise.video instanceof HTMLVideoElement;
            },
            250,
            1e4
          );
          resolve(playerPromise.video.playbackRate);
        } catch (error) {
          reject(error);
        }
      });
    },
    /**
     * 根据avid或者bvid初始化视频的播放地址信息
     *
     * 一般用来给清晰度按钮使用
     */
    async initPlayerVideoInfo() {
      let playerPromise = await this.$player.playerPromise();
      let bvid = playerPromise.config.bvid;
      let cid = playerPromise.config.cid;
      if (!bvid) {
        log.error("获取bvid失败");
        return;
      }
      let videoInfo = await BilibiliVideoApi.playUrl({
        bvid,
        cid
      });
      if (!videoInfo) {
        return;
      }
      log.success(["成功获取当前视频的具体信息", videoInfo]);
      let quality = videoInfo.quality;
      if (videoInfo.durl == null || Array.isArray(videoInfo.durl) && !videoInfo.durl.length) {
        log.error("意外情况，获取到的视频地址信息是空的");
        return;
      }
      videoInfo.durl[0].url;
      let support_formats = videoInfo.support_formats;
      this.$data.videoQuality = support_formats.map((item) => {
        if (item.quality <= BilibiliVideoPlayUrlQN["720P 高清"]) {
          return {
            text: item.new_description,
            quality: item.quality,
            isActive: false
          };
        }
      }).filter((item) => item != null);
      this.initVideoQualityInfo(quality);
    },
    /**
     * 设置视频地址
     * @param url 视频地址
     * @returns
     * + true 设置成功
     * + false 设置失败
     */
    async setVideoUrl(url) {
      try {
        let getResp = await httpx.head(url, {
          fetch: true,
          fetchInit: {
            credentials: "same-origin"
          },
          allowInterceptConfig: false
        });
        if (!getResp.status) {
          return {
            success: false,
            msg: "测试视频地址连接失败，状态码：" + getResp.data.status
          };
        }
        let playerPromise = await BilibiliPlayer.$player.playerPromise();
        if (playerPromise.video && playerPromise.video instanceof HTMLVideoElement) {
          let originVideoTime = playerPromise.video.currentTime;
          playerPromise.video.src = url;
          playerPromise.video.currentTime = originVideoTime;
          await utils.sleep(500);
          try {
            playerPromise.video.play();
            if (playerPromise.video.paused) {
              playerPromise.video.play();
            }
          } catch (error) {
            log.error(error);
          }
          return {
            success: true,
            msg: "设置成功"
          };
        } else {
          return {
            success: false,
            msg: "不存在video元素"
          };
        }
      } catch (error) {
        log.error(error);
        return {
          success: false,
          msg: error.toString()
        };
      }
    },
    /**
     * 观察器监听播放器的记忆你上次看到xx 跳转
     * 不知道是什么问题它不会自动关闭，且点击跳转无法应
     * 那我们主动关闭它
     */
    mutatuinCloseOriginToast() {
      let mutationObserver = utils.mutationObserver(document.documentElement, {
        config: {
          subtree: true,
          childList: true
        },
        immediate: true,
        callback: () => {
          document.querySelectorAll(
            `.mplayer-toast:not([data-from="gm"])`
          ).forEach(($ele) => {
            var _a2;
            if ($ele.hasAttribute("data-is-delay-close")) {
              return;
            }
            if ((_a2 = $ele.textContent) == null ? void 0 : _a2.includes("记忆你上次看到")) {
              $ele.setAttribute("data-is-delay-close", "true");
              setTimeout(() => {
                let $close = $ele.querySelector(
                  ".mplayer-toast-close"
                );
                if ($close) {
                  $close.click();
                } else {
                  $ele.remove();
                }
              }, 3e3);
            }
          });
        }
      });
      setTimeout(() => {
        mutationObserver.disconnect();
      }, 1e4);
    }
  };
  const BilibiliDanmakuFilter = {
    key: "bili-danmaku-filter",
    /** 弹幕类型 */
    mode: {
      6: "从左往右",
      5: "顶部",
      4: "底部",
      1: "从右往左"
    },
    $player: {
      async danmakuArray() {
        var _a2, _b;
        await utils.waitPropertyByInterval(
          _unsafeWindow,
          () => {
            var _a3;
            return typeof BilibiliPlayer.player === "object" && typeof ((_a3 = BilibiliPlayer.player) == null ? void 0 : _a3.playerPromise) === "object";
          },
          250,
          1e4
        );
        let playerPromise = await BilibiliPlayer.$player.playerPromise();
        await utils.waitPropertyByInterval(
          async () => {
            playerPromise = await BilibiliPlayer.$player.playerPromise();
          },
          () => {
            var _a3, _b2, _c, _d, _e, _f;
            return typeof ((_b2 = (_a3 = playerPromise == null ? void 0 : playerPromise.danmaku) == null ? void 0 : _a3.danmakuCore) == null ? void 0 : _b2.danmakuArray) === "object" && ((_d = (_c = playerPromise == null ? void 0 : playerPromise.danmaku) == null ? void 0 : _c.danmakuCore) == null ? void 0 : _d.danmakuArray) != null && Array.isArray((_f = (_e = playerPromise == null ? void 0 : playerPromise.danmaku) == null ? void 0 : _e.danmakuCore) == null ? void 0 : _f.danmakuArray);
          },
          250,
          1e4
        );
        let danmakuArray = (_b = (_a2 = playerPromise == null ? void 0 : playerPromise.danmaku) == null ? void 0 : _a2.danmakuCore) == null ? void 0 : _b.danmakuArray;
        return danmakuArray;
      },
      async danmakuFilter() {
        var _a2, _b, _c;
        await utils.waitPropertyByInterval(
          _unsafeWindow,
          () => {
            var _a3;
            return typeof BilibiliPlayer.player === "object" && typeof ((_a3 = BilibiliPlayer.player) == null ? void 0 : _a3.playerPromise) === "object";
          },
          250,
          1e4
        );
        let playerPromise = await BilibiliPlayer.$player.playerPromise();
        await utils.waitPropertyByInterval(
          async () => {
            playerPromise = await BilibiliPlayer.$player.playerPromise();
          },
          () => {
            var _a3, _b2, _c2;
            return typeof ((_c2 = (_b2 = (_a3 = playerPromise == null ? void 0 : playerPromise.danmaku) == null ? void 0 : _a3.danmakuCore) == null ? void 0 : _b2.config) == null ? void 0 : _c2.danmakuFilter) === "function";
          },
          250,
          1e4
        );
        let danmakuFilter = (_c = (_b = (_a2 = playerPromise == null ? void 0 : playerPromise.danmaku) == null ? void 0 : _a2.danmakuCore) == null ? void 0 : _b.config) == null ? void 0 : _c.danmakuFilter;
        return danmakuFilter;
      }
    },
    $data: {
      danmakuArray: []
    },
    $fn: {
      updateDanmakuArray: new utils.LockFunction(async () => {
        BilibiliDanmakuFilter.$data.danmakuArray = await BilibiliDanmakuFilter.$player.danmakuArray();
      }, 250)
    },
    /** 初始化弹幕过滤器 */
    async init() {
      let totalRule = this.parseRule();
      let danmakuFilter = await this.$player.danmakuFilter();
      let that = this;
      if (typeof danmakuFilter == "function") {
        let playerPromise = await BilibiliPlayer.$player.playerPromise();
        await utils.waitPropertyByInterval(
          async () => {
            playerPromise = await BilibiliPlayer.$player.playerPromise();
          },
          () => {
            var _a2, _b, _c;
            return typeof ((_c = (_b = (_a2 = playerPromise == null ? void 0 : playerPromise.danmaku) == null ? void 0 : _a2.danmakuCore) == null ? void 0 : _b.config) == null ? void 0 : _c.danmakuFilter) === "function";
          },
          250,
          1e4
        );
        let isBangumi = BilibiliRouter.isBangumi();
        let ownFilter = function(danmaConfig) {
          let isFilter = false;
          isFilter = that.filter(danmaConfig, totalRule);
          if (isBangumi) {
            isFilter = !isFilter;
          }
          return isFilter;
        };
        Reflect.set(
          playerPromise.danmaku.danmakuCore.config,
          "danmakuFilter",
          ownFilter
        );
        log.success(`成功覆盖danmakuFilter`);
      }
    },
    /** 更新弹幕列表 */
    updateDanmakuArray() {
      this.$fn.updateDanmakuArray.run();
    },
    /**
     * 判断是否需要过滤
     * @param danmaConfig
     * @param totalRule
     * @param danmakuArray
     */
    filter(danmaConfig, totalRule) {
      this.updateDanmakuArray();
      let filterFlag = false;
      if (!filterFlag) {
        if (PopsPanel.getValue("bili-danmaku-filter-type-roll")) {
          if (danmaConfig.mode === 1 || danmaConfig.mode === 6) {
            filterFlag = true;
          }
        }
      }
      if (!filterFlag) {
        if (PopsPanel.getValue("bili-danmaku-filter-type-top")) {
          if (danmaConfig.mode === 5 || danmaConfig.mode === 1 || danmaConfig.mode === 6) {
            filterFlag = true;
          }
        }
      }
      if (!filterFlag) {
        if (PopsPanel.getValue("bili-danmaku-filter-type-bottom")) {
          if (danmaConfig.mode === 4) {
            filterFlag = true;
          }
        }
      }
      if (!filterFlag) {
        if (PopsPanel.getValue("bili-danmaku-filter-type-colour")) {
          if (danmaConfig.color !== 16777215) {
            filterFlag = true;
          }
        }
      }
      if (!filterFlag) {
        if (PopsPanel.getValue("bili-danmaku-filter-type-repeat")) {
          let findIndex = this.$data.danmakuArray.findIndex(
            (__danmaConfig__, __index__) => {
              return danmaConfig.text === __danmaConfig__.text && danmaConfig != __danmaConfig__;
            }
          );
          if (findIndex != -1) {
            filterFlag = true;
          }
        }
      }
      if (!filterFlag) {
        if (PopsPanel.getValue("bili-danmaku-filter")) {
          for (let ruleIndex = 0; ruleIndex < totalRule.length; ruleIndex++) {
            const rule = totalRule[ruleIndex];
            if (typeof danmaConfig.text === "string" && danmaConfig.text.match(rule)) {
              filterFlag = true;
              break;
            }
          }
        }
      }
      return filterFlag;
    },
    /** 解析规则 */
    parseRule() {
      let localRule = this.getValue();
      let rule = [];
      localRule.split("\n").forEach((ruleItemStr) => {
        let ruleItem = ruleItemStr.trim();
        let regExpRule = new RegExp(
          utils.parseStringToRegExpString(ruleItem),
          "ig"
        );
        rule.push(regExpRule);
      });
      return rule;
    },
    getValue() {
      return _GM_getValue(this.key, "");
    },
    setValue(value = "") {
      _GM_setValue(this.key, value);
    }
  };
  const BilibiliDanmaku = {
    /** 弹幕字体 */
    fontFamily: [
      {
        text: "黑体",
        value: "SimHei, 'Microsoft JhengHei'"
      },
      {
        text: "宋体",
        value: "SimSun"
      },
      {
        text: "新宋体",
        value: "NSimSun"
      },
      {
        text: "仿宋",
        value: "FangSong"
      },
      {
        text: "微软雅黑",
        value: "'Microsoft YaHei'"
      },
      {
        text: "微软雅黑 Light",
        value: "'Microsoft Yahei UI Light'"
      },
      {
        text: "Noto Sans DemiLight",
        value: "'Noto Sans CJK SC DemiLight'"
      },
      {
        text: "'Noto Sans CJK SC Regular'",
        value: "'Noto Sans CJK SC Regular'"
      }
    ],
    /** 初始化 */
    init() {
      BilibiliDanmakuFilter.init();
      let opacity = PopsPanel.getValue("bili-danmaku-opacity");
      let area = PopsPanel.getValue("bili-danmaku-area");
      let fontSize = PopsPanel.getValue("bili-danmaku-fontSize");
      let duration = PopsPanel.getValue("bili-danmaku-duration");
      let bold = PopsPanel.getValue("bili-danmaku-bold");
      let fullScreenSync = PopsPanel.getValue(
        "bili-danmaku-fullScreenSync"
      );
      let speedSync = PopsPanel.getValue("bili-danmaku-speedSync");
      let fontFamily = PopsPanel.getValue("bili-danmaku-fontFamily");
      PopsPanel.execMenuOnce(
        "bili-danmaku-container-top",
        (value) => {
          return this.setContainerTop(value);
        },
        void 0,
        void 0,
        () => true
      );
      this.setOpacity(opacity);
      this.setArea(area);
      this.setFontSize(fontSize);
      this.setDuration(duration);
      this.setBold(bold);
      this.setFullScreenSync(fullScreenSync);
      this.setSpeedSync(speedSync);
      this.setFontFamily(fontFamily);
    },
    async DanmakuCoreConfig() {
      let playerPromise = await BilibiliPlayer.$player.playerPromise();
      await utils.waitPropertyByInterval(
        async () => {
          playerPromise = await BilibiliPlayer.$player.playerPromise();
          return playerPromise;
        },
        () => {
          var _a2, _b, _c, _d;
          return typeof ((_b = (_a2 = playerPromise == null ? void 0 : playerPromise.danmaku) == null ? void 0 : _a2.danmakuCore) == null ? void 0 : _b.config) === "object" && ((_d = (_c = playerPromise == null ? void 0 : playerPromise.danmaku) == null ? void 0 : _c.danmakuCore) == null ? void 0 : _d.config) != null;
        },
        250,
        1e4
      );
      return playerPromise.danmaku.danmakuCore.config;
    },
    /**
     * 设置弹幕容器距离顶部的距离
     * @param topPx
     */
    setContainerTop(topPx) {
      let containerTopPx = parseInt(topPx.toString());
      if (isNaN(containerTopPx)) {
        return;
      }
      log.success(`设置弹幕容器距离顶部的距离: ${topPx}`);
      return addStyle(
        /*css*/
        `
		.mplayer-danmaku-container{
			top: ${containerTopPx}px !important;
		}
		`
      );
    },
    /**
     * 设置 不透明度
     * @param value
     */
    setOpacity(value) {
      this.DanmakuCoreConfig().then((config) => {
        if ("opacity" in config) {
          config.opacity = value;
          log.success(`设置-弹幕不透明度: ${value}`);
        } else {
          log.error("设置-弹幕不透明度失败, 不存在 opacity 属性");
        }
      });
    },
    /**
     * 设置 显示区域
     * @param value
     */
    setArea(value) {
      let areaMapping = {
        25: "1/4屏",
        50: "半屏",
        75: "3/4屏",
        100: "全屏"
      };
      this.DanmakuCoreConfig().then((config) => {
        if ("danmakuArea" in config) {
          config.danmakuArea = value;
          log.success(`设置-显示区域: ${value} => ${areaMapping[value]}`);
        } else {
          log.error("设置-显示区域失败, 不存在 danmakuArea 属性");
        }
      });
    },
    /**
     * 设置 字体大小
     * @param value
     */
    setFontSize(value) {
      this.DanmakuCoreConfig().then((config) => {
        if ("fontSize" in config) {
          config.fontSize = value;
          log.success(`设置-字体大小: ${value}`);
        } else {
          log.error("设置-字体大小失败, 不存在 fontSize 属性");
        }
      });
    },
    /**
     * 设置 持续时间（弹幕速度）
     * @param value
     */
    setDuration(value) {
      this.DanmakuCoreConfig().then((config) => {
        if ("duration" in config) {
          config.duration = value;
          log.success(`设置-持续时间（弹幕速度）: ${value}`);
        } else {
          log.error("设置-持续时间（弹幕速度）失败, 不存在 duration 属性");
        }
      });
    },
    /**
     * 设置 粗体
     * @param value
     */
    setBold(value) {
      this.DanmakuCoreConfig().then((config) => {
        if ("bold" in config) {
          config.bold = value;
          log.success(`设置-粗体: ${value}`);
        } else {
          log.error("设置-粗体失败, 不存在 bold 属性");
        }
      });
    },
    /**
     * 弹幕随屏幕缩放
     * @param value
     */
    setFullScreenSync(value) {
      this.DanmakuCoreConfig().then((config) => {
        if ("fullScreenSync" in config) {
          config.fullScreenSync = value;
          log.success(`设置-弹幕随屏幕缩放: ${value}`);
        } else {
          log.error("设置-弹幕随屏幕缩放失败, 不存在 fullScreenSync 属性");
        }
      });
    },
    /**
     * 弹幕字体
     * @param value
     */
    setFontFamily(value) {
      this.DanmakuCoreConfig().then((config) => {
        if ("fontFamily" in config) {
          config.fontFamily = value;
          log.success(`设置-弹幕字体: ${value}`);
        } else {
          log.error("设置-弹幕字体失败, 不存在 fontFamily 属性");
        }
      });
    },
    /**
     * 弹幕速度同步播放倍数
     * @param value
     */
    setSpeedSync(value) {
      this.DanmakuCoreConfig().then(async (config) => {
        let playerPromise = await BilibiliPlayer.$player.playerPromise();
        await utils.waitPropertyByInterval(
          async () => {
            playerPromise = await BilibiliPlayer.$player.playerPromise();
            return playerPromise;
          },
          () => {
            return typeof playerPromise.video === "object" && playerPromise.video != null && playerPromise.video instanceof HTMLVideoElement;
          },
          250,
          1e4
        );
        let videoSpeed = playerPromise.video.playbackRate;
        if ("videoSpeed" in config) {
          config.videoSpeed = videoSpeed;
          log.success(`设置-当前视频播放倍速: ${videoSpeed}`);
        } else {
          log.error("设置-弹幕速度同步播放倍数失败, 不存在 videoSpeed 属性");
        }
        if ("speedSync" in config) {
          config.speedSync = value;
          log.success(`设置-弹幕速度同步播放倍数: ${value}`);
        } else {
          log.error("设置-弹幕速度同步播放倍数失败, 不存在 speedSync 属性");
        }
      });
    }
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
                  UISwitch(
                    "允许复制",
                    "bili-allowCopy",
                    true,
                    void 0,
                    "一般用于处理楼层的回复弹窗内无法选中复制问题"
                  )
                ]
              }
            ]
          },
          {
            type: "deepMenu",
            text: "播放器",
            forms: [
              {
                text: "功能",
                type: "forms",
                forms: [
                  UISwitch(
                    "记住选择的清晰度",
                    "bili-rememberUserChooseQuality",
                    true,
                    void 0,
                    "需开启 - 修复【清晰度】按钮"
                  ),
                  UISwitch(
                    "修复【倍速】按钮",
                    "bili-coverSpeedBtn",
                    true,
                    void 0,
                    "可以自行选择视频倍速"
                  ),
                  UISwitch(
                    "修复【清晰度】按钮",
                    "bili-coverQuality",
                    true,
                    void 0,
                    "可查看当前视频的清晰度"
                  )
                ]
              }
            ]
          },
          {
            type: "deepMenu",
            text: "弹幕",
            forms: [
              {
                text: "弹幕设置",
                type: "forms",
                forms: [
                  UISlider(
                    "顶部距离",
                    "bili-danmaku-container-top",
                    0,
                    0,
                    100,
                    1,
                    void 0,
                    (value) => {
                      return `${value}px`;
                    },
                    "设置弹幕容器距离顶部的距离"
                  ),
                  UISlider(
                    "不透明度",
                    "bili-danmaku-opacity",
                    0.75,
                    0.2,
                    1,
                    0.01,
                    (event, value) => {
                      BilibiliDanmaku.setOpacity(value);
                    },
                    (value) => {
                      return `${parseInt((value * 100).toString())}%`;
                    }
                  ),
                  UISelect(
                    "显示区域",
                    "bili-danmaku-area",
                    25,
                    [
                      {
                        text: "1/4屏",
                        value: 25
                      },
                      {
                        text: "半屏",
                        value: 50
                      },
                      {
                        text: "3/4屏",
                        value: 75
                      },
                      {
                        text: "全屏",
                        value: 100
                      }
                    ],
                    (event, isSelectValue, isSelectText) => {
                      BilibiliDanmaku.setArea(isSelectValue);
                    }
                  ),
                  UISlider(
                    "字体大小",
                    "bili-danmaku-fontSize",
                    0.7,
                    0.2,
                    2,
                    0.1,
                    (event, value) => {
                      BilibiliDanmaku.setFontSize(value);
                    },
                    (value) => {
                      return `${parseInt((value * 100).toString())}%`;
                    }
                  ),
                  UISelect(
                    "弹幕速度",
                    "bili-danmaku-duration",
                    6,
                    [
                      {
                        text: "极慢",
                        value: 10
                      },
                      {
                        text: "较慢",
                        value: 8
                      },
                      {
                        text: "适中",
                        value: 6
                      },
                      {
                        text: "较快",
                        value: 4
                      },
                      {
                        text: "极快",
                        value: 2
                      }
                    ],
                    (event, isSelectValue, isSelectText) => {
                      BilibiliDanmaku.setDuration(isSelectValue);
                    }
                  ),
                  UISwitch(
                    "弹幕随屏幕缩放",
                    "bili-danmaku-fullScreenSync",
                    false,
                    (event, value) => {
                      BilibiliDanmaku.setFullScreenSync(value);
                    }
                  ),
                  UISwitch(
                    "弹幕速度同步播放倍数",
                    "bili-danmaku-speedSync",
                    true,
                    (event, value) => {
                      BilibiliDanmaku.setSpeedSync(value);
                    }
                  )
                ]
              },
              {
                type: "forms",
                text: "",
                forms: [
                  UISelect(
                    "弹幕字体",
                    "bili-danmaku-fontFamily",
                    (() => {
                      let findItem = BilibiliDanmaku.fontFamily.find(
                        (item) => item.text === "黑体"
                      );
                      return findItem.value;
                    })(),
                    BilibiliDanmaku.fontFamily,
                    (event, isSelectValue, isSelectText) => {
                      BilibiliDanmaku.setFontFamily(isSelectValue);
                    }
                  ),
                  UISwitch("粗体", "bili-danmaku-bold", true, (event, value) => {
                    BilibiliDanmaku.setBold(value);
                  })
                ]
              },
              {
                text: "按类型屏蔽",
                type: "forms",
                forms: [
                  UIOwn(
                    (liElement) => {
                      let $dmSetting = domutils.createElement("div", {
                        className: "bpx-player-dm-setting-left-block-content",
                        innerHTML: (
                          /*html*/
                          `
											<style>
												.bpx-player-dm-setting-left-block-content{
													display: flex;
													gap: 20px;
													overflow-x: auto;
													align-items: center;
													flex-wrap: wrap;
													text-wrap: nowrap;
												}
												.bpx-player-block-filter-type{
													display: flex;
													flex-direction: column;
													max-width: unset !important;
													margin-left: 0px !important;
													text-align: center !important;
												}
												.bpx-player-block-filter-image{

												}
												..bpx-player-block-filter-image svg{
													enable-background: new 0 0 28 28;
												}
												.bpx-player-block-filter-label{

												}

												/* 图标状态 */
												.bpx-player-block-filter-type .bpx-player-block-filter-image-enable{
													display: none;
													fill: var(--bili-color, #00a1d6);
													color: var(--bili-color, #00a1d6);
												}
												.bpx-player-block-filter-type[data-value="true"] .bpx-player-block-filter-label{
													color: var(--bili-color, #00a1d6);
												}
												.bpx-player-block-filter-type[data-value="true"] .bpx-player-block-filter-image{
													display: none;
												}
												.bpx-player-block-filter-type[data-value="true"] .bpx-player-block-filter-image-enable{
													display: unset;
												}
											</style>
											<div class="bpx-player-block-filter-type bpx-player-block-repeat" data-key="bili-danmaku-filter-type-repeat" data-type="repeat">
												<span class="bpx-player-block-filter-image">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 28 28">
													<path d="M23 3L5 3C4.86899 3 4.74037 3.00716 4.61 3.02C4.47963 3.03284 4.34849 3.05444 4.22 3.08C4.09151 3.10556 3.96537 3.13197 3.84 3.17C3.71464 3.20803 3.59103 3.24987 3.47 3.3C3.34897 3.35013 3.22554 3.40825 3.11 3.47C2.99447 3.53176 2.88893 3.59722 2.78 3.67C2.67107 3.74279 2.56127 3.82689 2.46 3.91C2.35873 3.99311 2.26263 4.07737 2.17 4.17C2.07737 4.26263 1.99311 4.35873 1.91 4.46C1.82689 4.56127 1.74279 4.67107 1.67 4.78C1.59722 4.88893 1.53175 4.99447 1.47 5.11C1.40824 5.22554 1.35013 5.34897 1.3 5.47C1.24987 5.59103 1.20803 5.71464 1.17 5.84C1.13197 5.96537 1.10556 6.09151 1.08 6.22C1.05444 6.34849 1.03284 6.47963 1.02 6.61C1.00716 6.74037 1 6.86899 1 7L1 21C1 21.131 1.00716 21.2596 1.02 21.39C1.03284 21.5203 1.05444 21.6515 1.08 21.78C1.10556 21.9085 1.13197 22.0347 1.17 22.16C1.20803 22.2854 1.24987 22.409 1.3 22.53C1.35013 22.6511 1.40825 22.7745 1.47 22.89C1.53176 23.0055 1.59722 23.1111 1.67 23.22C1.74279 23.3289 1.82689 23.4387 1.91 23.54C1.99311 23.6413 2.07737 23.7374 2.17 23.83C2.26263 23.9227 2.35873 24.0069 2.46 24.09C2.56127 24.1731 2.67107 24.2572 2.78 24.33C2.88893 24.4027 2.99447 24.4682 3.11 24.53C3.22554 24.5917 3.34897 24.6499 3.47 24.7C3.59103 24.7501 3.71464 24.7919 3.84 24.83C3.96537 24.868 4.09151 24.8945 4.22 24.92C4.34849 24.9456 4.47963 24.9672 4.61 24.98C4.74037 24.9929 4.86899 25 5 25L23 25C23.131 25 23.2596 24.9929 23.39 24.98C23.5203 24.9672 23.6515 24.9456 23.78 24.92C23.9085 24.8945 24.0347 24.868 24.16 24.83C24.2854 24.7919 24.409 24.7501 24.53 24.7C24.6511 24.6499 24.7745 24.5917 24.89 24.53C25.0055 24.4682 25.1111 24.4027 25.22 24.33C25.3289 24.2572 25.4387 24.1731 25.54 24.09C25.6413 24.0069 25.7374 23.9227 25.83 23.83C25.9227 23.7374 26.0069 23.6413 26.09 23.54C26.1731 23.4387 26.2572 23.3289 26.33 23.22C26.4028 23.1111 26.4683 23.0055 26.53 22.89C26.5917 22.7745 26.6499 22.6511 26.7 22.53C26.7501 22.409 26.7919 22.2854 26.83 22.16C26.868 22.0347 26.8945 21.9085 26.92 21.78C26.9456 21.6515 26.9672 21.5203 26.98 21.39C26.9929 21.2596 27 21.131 27 21L27 7C27 6.86899 26.9929 6.74037 26.98 6.61C26.9672 6.47963 26.9456 6.34849 26.92 6.22C26.8945 6.09151 26.868 5.96537 26.83 5.84C26.7919 5.71464 26.7501 5.59103 26.7 5.47C26.6499 5.34897 26.5917 5.22554 26.53 5.11C26.4683 4.99447 26.4028 4.88893 26.33 4.78C26.2572 4.67107 26.1731 4.56127 26.09 4.46C26.0069 4.35873 25.9227 4.26263 25.83 4.17C25.7374 4.07737 25.6413 3.99311 25.54 3.91C25.4387 3.82689 25.3289 3.74278 25.22 3.67C25.1111 3.59722 25.0055 3.53176 24.89 3.47C24.7745 3.40825 24.6511 3.35013 24.53 3.3C24.409 3.24987 24.2854 3.20803 24.16 3.17C24.0347 3.13197 23.9085 3.10556 23.78 3.08C23.6515 3.05444 23.5203 3.03284 23.39 3.02C23.2596 3.00716 23.131 3 23 3ZM13 11L19 11C19.0657 11 19.1356 11.0072 19.2 11.02C19.2644 11.0328 19.3193 11.0549 19.38 11.08C19.4407 11.1051 19.5054 11.1335 19.56 11.17C19.6146 11.2065 19.6636 11.2436 19.71 11.29C19.7564 11.3364 19.7935 11.3854 19.83 11.44C19.8665 11.4946 19.8949 11.5593 19.92 11.62C19.9451 11.6807 19.9672 11.7356 19.98 11.8C19.9928 11.8644 20 11.9343 20 12C20 12.0657 19.9928 12.1356 19.98 12.2C19.9672 12.2644 19.9451 12.3193 19.92 12.38C19.8949 12.4407 19.8665 12.5054 19.83 12.56C19.7935 12.6146 19.7564 12.6636 19.71 12.71C19.6636 12.7564 19.6146 12.7935 19.56 12.83C19.5054 12.8665 19.4407 12.8949 19.38 12.92C19.3193 12.9451 19.2644 12.9672 19.2 12.98C19.1356 12.9928 19.0657 13 19 13L13 13C12.9343 13 12.8644 12.9928 12.8 12.98C12.7356 12.9672 12.6807 12.9451 12.62 12.92C12.5593 12.8949 12.4946 12.8665 12.44 12.83C12.3854 12.7935 12.3364 12.7564 12.29 12.71C12.2435 12.6636 12.2065 12.6146 12.17 12.56C12.1335 12.5054 12.1051 12.4407 12.08 12.38C12.0549 12.3193 12.0328 12.2644 12.02 12.2C12.0072 12.1356 12 12.0657 12 12C12 11.9343 12.0072 11.8644 12.02 11.8C12.0328 11.7356 12.0549 11.6807 12.08 11.62C12.1051 11.5593 12.1335 11.4946 12.17 11.44C12.2065 11.3854 12.2435 11.3364 12.29 11.29C12.3364 11.2436 12.3854 11.2065 12.44 11.17C12.4946 11.1335 12.5593 11.1051 12.62 11.08C12.6807 11.0549 12.7356 11.0328 12.8 11.02C12.8644 11.0072 12.9343 11 13 11ZM9 13L7 13L7 11L9 11L9 13ZM9 17L7 17L7 15L9 15L9 17ZM19 17L13 17C12.9343 17 12.8644 16.9928 12.8 16.98C12.7356 16.9672 12.6807 16.9451 12.62 16.92C12.5593 16.8949 12.4946 16.8665 12.44 16.83C12.3854 16.7935 12.3364 16.7564 12.29 16.71C12.2435 16.6636 12.2065 16.6146 12.17 16.56C12.1335 16.5054 12.1051 16.4407 12.08 16.38C12.0549 16.3193 12.0328 16.2644 12.02 16.2C12.0072 16.1356 12 16.0657 12 16C12 15.9343 12.0072 15.8644 12.02 15.8C12.0328 15.7356 12.0549 15.6807 12.08 15.62C12.1051 15.5593 12.1335 15.4946 12.17 15.44C12.2065 15.3854 12.2435 15.3364 12.29 15.29C12.3364 15.2435 12.3854 15.2065 12.44 15.17C12.4946 15.1335 12.5593 15.1051 12.62 15.08C12.6807 15.0549 12.7356 15.0328 12.8 15.02C12.8644 15.0072 12.9343 15 13 15L19 15C19.0657 15 19.1356 15.0072 19.2 15.02C19.2644 15.0328 19.3193 15.0549 19.38 15.08C19.4407 15.1051 19.5054 15.1335 19.56 15.17C19.6146 15.2065 19.6636 15.2435 19.71 15.29C19.7564 15.3364 19.7935 15.3854 19.83 15.44C19.8665 15.4946 19.8949 15.5593 19.92 15.62C19.9451 15.6807 19.9672 15.7356 19.98 15.8C19.9928 15.8644 20 15.9343 20 16C20 16.0657 19.9928 16.1356 19.98 16.2C19.9672 16.2644 19.9451 16.3193 19.92 16.38C19.8949 16.4407 19.8665 16.5054 19.83 16.56C19.7935 16.6146 19.7564 16.6636 19.71 16.71C19.6636 16.7564 19.6146 16.7935 19.56 16.83C19.5054 16.8665 19.4407 16.8949 19.38 16.92C19.3193 16.9451 19.2644 16.9672 19.2 16.98C19.1356 16.9928 19.0657 17 19 17Z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-image-enable">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 28 28">
														<g clip-path="url(#clip-path-UVHcF64rhIOX1dnvvwfXL)">
															<path d="M23 15C24.487 15 25.866 15.469 27 16.26L27 7C27 6.86899 26.9929 6.74037 26.98 6.61C26.9672 6.47963 26.9456 6.34849 26.92 6.22C26.8945 6.09151 26.868 5.96537 26.83 5.84C26.7919 5.71464 26.7501 5.59103 26.7 5.47C26.6499 5.34897 26.5917 5.22554 26.53 5.11C26.4683 4.99447 26.4028 4.88893 26.33 4.78C26.2572 4.67107 26.1731 4.56127 26.09 4.46C26.0069 4.35873 25.9227 4.26263 25.83 4.17C25.7374 4.07737 25.6413 3.99311 25.54 3.91C25.4387 3.82689 25.3289 3.74278 25.22 3.67C25.1111 3.59722 25.0055 3.53176 24.89 3.47C24.7745 3.40825 24.6511 3.35013 24.53 3.3C24.409 3.24987 24.2854 3.20803 24.16 3.17C24.0347 3.13197 23.9085 3.10556 23.78 3.08C23.6515 3.05444 23.5203 3.03284 23.39 3.02C23.2596 3.00716 23.131 3 23 3L5 3C4.86899 3 4.74037 3.00716 4.61 3.02C4.47963 3.03284 4.34849 3.05444 4.22 3.08C4.09151 3.10556 3.96537 3.13197 3.84 3.17C3.71464 3.20803 3.59103 3.24987 3.47 3.3C3.34897 3.35013 3.22554 3.40825 3.11 3.47C2.99447 3.53176 2.88893 3.59722 2.78 3.67C2.67107 3.74279 2.56127 3.82689 2.46 3.91C2.35873 3.99311 2.26263 4.07737 2.17 4.17C2.07737 4.26263 1.99311 4.35873 1.91 4.46C1.82689 4.56127 1.74279 4.67107 1.67 4.78C1.59722 4.88893 1.53175 4.99447 1.47 5.11C1.40824 5.22554 1.35013 5.34897 1.3 5.47C1.24987 5.59103 1.20803 5.71464 1.17 5.84C1.13197 5.96537 1.10556 6.09151 1.08 6.22C1.05444 6.34849 1.03284 6.47963 1.02 6.61C1.00716 6.74037 1 6.86899 1 7L1 21C1 21.131 1.00716 21.2596 1.02 21.39C1.03284 21.5203 1.05444 21.6515 1.08 21.78C1.10556 21.9085 1.13197 22.0347 1.17 22.16C1.20803 22.2854 1.24987 22.409 1.3 22.53C1.35013 22.6511 1.40825 22.7745 1.47 22.89C1.53176 23.0055 1.59722 23.1111 1.67 23.22C1.74279 23.3289 1.82689 23.4387 1.91 23.54C1.99311 23.6413 2.07737 23.7374 2.17 23.83C2.26263 23.9227 2.35873 24.0069 2.46 24.09C2.56127 24.1731 2.67107 24.2572 2.78 24.33C2.88893 24.4027 2.99447 24.4682 3.11 24.53C3.22554 24.5917 3.34897 24.6499 3.47 24.7C3.59103 24.7501 3.71464 24.7919 3.84 24.83C3.96537 24.868 4.09151 24.8945 4.22 24.92C4.34849 24.9456 4.47963 24.9672 4.61 24.98C4.74037 24.9929 4.86899 25 5 25L16.67 25C16.6071 24.8673 16.5545 24.7364 16.5 24.6C16.4455 24.4636 16.3958 24.3196 16.35 24.18C16.3042 24.0404 16.2569 23.9021 16.22 23.76C16.1831 23.6178 16.1579 23.4742 16.13 23.33C16.1021 23.1857 16.0788 23.0457 16.06 22.9C16.0413 22.7543 16.01 22.6066 16.01 22.46C16.01 22.3134 16 22.1669 16 22.02C16 21.8731 16.01 21.7266 16.01 21.58C16.01 21.4333 16.0319 21.2857 16.05 21.14C16.0681 20.9942 16.0927 20.8443 16.12 20.7C16.1472 20.5557 16.1837 20.4124 16.22 20.27C16.2563 20.1277 16.2949 19.9898 16.34 19.85C16.3851 19.7102 16.4362 19.5667 16.49 19.43C16.5439 19.2933 16.5977 19.163 16.66 19.03C16.7223 18.897 16.7895 18.7689 16.86 18.64C16.9306 18.5111 17.0015 18.3841 17.08 18.26C17.1585 18.1359 17.2439 18.0089 17.33 17.89C17.4162 17.771 17.5065 17.6533 17.6 17.54C17.6935 17.4267 17.7895 17.3172 17.89 17.21C17.9904 17.1029 18.093 17.0007 18.2 16.9C18.3069 16.7993 18.4169 16.7038 18.53 16.61C18.6431 16.5163 18.7612 16.4264 18.88 16.34C18.9988 16.2535 19.1161 16.1688 19.24 16.09C19.364 16.0112 19.4913 15.9409 19.62 15.87C19.7487 15.7992 19.8771 15.7327 20.01 15.67C20.1429 15.6074 20.2835 15.5441 20.42 15.49C20.5565 15.4359 20.6903 15.3854 20.83 15.34C20.9697 15.2945 21.1177 15.2565 21.26 15.22C21.4023 15.1834 21.5457 15.1475 21.69 15.12C21.8343 15.0925 21.9743 15.0784 22.12 15.06C22.2657 15.0416 22.4134 15.01 22.56 15.01C22.7067 15.01 22.8531 15 23 15ZM13 11L19 11C19.0657 11 19.1356 11.0072 19.2 11.02C19.2644 11.0328 19.3193 11.0549 19.38 11.08C19.4407 11.1051 19.5054 11.1335 19.56 11.17C19.6146 11.2065 19.6636 11.2436 19.71 11.29C19.7564 11.3364 19.7935 11.3854 19.83 11.44C19.8665 11.4946 19.8949 11.5593 19.92 11.62C19.9451 11.6807 19.9672 11.7356 19.98 11.8C19.9928 11.8644 20 11.9343 20 12C20 12.0657 19.9928 12.1356 19.98 12.2C19.9672 12.2644 19.9451 12.3193 19.92 12.38C19.8949 12.4407 19.8665 12.5054 19.83 12.56C19.7935 12.6146 19.7564 12.6636 19.71 12.71C19.6636 12.7564 19.6146 12.7935 19.56 12.83C19.5054 12.8665 19.4407 12.8949 19.38 12.92C19.3193 12.9451 19.2644 12.9672 19.2 12.98C19.1356 12.9928 19.0657 13 19 13L13 13C12.9343 13 12.8644 12.9928 12.8 12.98C12.7356 12.9672 12.6807 12.9451 12.62 12.92C12.5593 12.8949 12.4946 12.8665 12.44 12.83C12.3854 12.7935 12.3364 12.7564 12.29 12.71C12.2435 12.6636 12.2065 12.6146 12.17 12.56C12.1335 12.5054 12.1051 12.4407 12.08 12.38C12.0549 12.3193 12.0328 12.2644 12.02 12.2C12.0072 12.1356 12 12.0657 12 12C12 11.9343 12.0072 11.8644 12.02 11.8C12.0328 11.7356 12.0549 11.6807 12.08 11.62C12.1051 11.5593 12.1335 11.4946 12.17 11.44C12.2065 11.3854 12.2435 11.3364 12.29 11.29C12.3364 11.2436 12.3854 11.2065 12.44 11.17C12.4946 11.1335 12.5593 11.1051 12.62 11.08C12.6807 11.0549 12.7356 11.0328 12.8 11.02C12.8644 11.0072 12.9343 11 13 11ZM9 13L7 13L7 11L9 11L9 13ZM9 17L7 17L7 15L9 15L9 17ZM12 16C12 15.9343 12.0072 15.8644 12.02 15.8C12.0328 15.7356 12.0549 15.6807 12.08 15.62C12.1051 15.5593 12.1335 15.4946 12.17 15.44C12.2065 15.3854 12.2435 15.3364 12.29 15.29C12.3364 15.2435 12.3854 15.2065 12.44 15.17C12.4946 15.1335 12.5593 15.1051 12.62 15.08C12.6807 15.0549 12.7356 15.0328 12.8 15.02C12.8644 15.0072 12.9343 15 13 15L17 15C17.0657 15 17.1356 15.0072 17.2 15.02C17.2644 15.0328 17.3193 15.0549 17.38 15.08C17.4407 15.1051 17.5054 15.1335 17.56 15.17C17.6146 15.2065 17.6636 15.2435 17.71 15.29C17.7564 15.3364 17.7935 15.3854 17.83 15.44C17.8665 15.4946 17.8949 15.5593 17.92 15.62C17.9451 15.6807 17.9672 15.7356 17.98 15.8C17.9928 15.8644 18 15.9343 18 16C18 16.0657 17.9928 16.1356 17.98 16.2C17.9672 16.2644 17.9451 16.3193 17.92 16.38C17.8949 16.4407 17.8665 16.5054 17.83 16.56C17.7935 16.6146 17.7564 16.6636 17.71 16.71C17.6636 16.7564 17.6146 16.7935 17.56 16.83C17.5054 16.8665 17.4407 16.8949 17.38 16.92C17.3193 16.9451 17.2644 16.9672 17.2 16.98C17.1356 16.9928 17.0657 17 17 17L13 17C12.9343 17 12.8644 16.9928 12.8 16.98C12.7356 16.9672 12.6807 16.9451 12.62 16.92C12.5593 16.8949 12.4946 16.8665 12.44 16.83C12.3854 16.7935 12.3364 16.7564 12.29 16.71C12.2435 16.6636 12.2065 16.6146 12.17 16.56C12.1335 16.5054 12.1051 16.4407 12.08 16.38C12.0549 16.3193 12.0328 16.2644 12.02 16.2C12.0072 16.1356 12 16.0657 12 16Z">
															</path>
															<path d="M26.6292 18.2151C26.5713 18.1572 26.5121 18.1007 26.4514 18.0458C26.3907 17.9908 26.3288 17.9374 26.2655 17.8854C26.2022 17.8335 26.1377 17.7831 26.072 17.7343C26.0062 17.6856 25.9393 17.6385 25.8712 17.593C25.8032 17.5475 25.734 17.5037 25.6638 17.4616C25.5936 17.4195 25.5224 17.3792 25.4502 17.3407C25.378 17.302 25.3049 17.2652 25.2309 17.2302C25.1569 17.1952 25.082 17.1621 25.0064 17.1308C24.9308 17.0994 24.8544 17.0699 24.7773 17.0423C24.7003 17.0148 24.6226 16.9891 24.5442 16.9654C24.4658 16.9416 24.3869 16.9197 24.3076 16.8999C24.2281 16.88 24.1483 16.8621 24.068 16.846C23.9877 16.8301 23.9071 16.8161 23.8261 16.8041C23.7451 16.7921 23.6639 16.7821 23.5825 16.774C23.501 16.766 23.4193 16.76 23.3375 16.756C23.2558 16.752 23.174 16.75 23.0921 16.75C23.0103 16.75 22.9285 16.752 22.8467 16.756C22.765 16.76 22.6833 16.766 22.6018 16.774C22.5204 16.7821 22.4392 16.7921 22.3582 16.8041C22.2772 16.8161 22.1965 16.8301 22.1163 16.846C22.036 16.8621 21.9561 16.88 21.8767 16.8999C21.7973 16.9197 21.7185 16.9416 21.6401 16.9654C21.5617 16.9891 21.484 17.0148 21.407 17.0423C21.3299 17.0699 21.2535 17.0994 21.1779 17.1308C21.1022 17.1621 21.0274 17.1952 20.9535 17.2302C20.8794 17.2652 20.8063 17.302 20.7341 17.3407C20.6619 17.3792 20.5907 17.4195 20.5205 17.4616C20.4503 17.5037 20.3811 17.5475 20.3131 17.593C20.245 17.6385 20.1781 17.6856 20.1123 17.7343C20.0465 17.7831 19.982 17.8335 19.9188 17.8854C19.8555 17.9374 19.7935 17.9908 19.7328 18.0458C19.6722 18.1007 19.613 18.1572 19.5551 18.2151C19.4972 18.273 19.4407 18.3322 19.3858 18.3928C19.3308 18.4535 19.2774 18.5155 19.2254 18.5788C19.1735 18.642 19.1231 18.7065 19.0743 18.7723C19.0256 18.8381 18.9785 18.905 18.933 18.9731C18.8875 19.0411 18.8437 19.1103 18.8016 19.1805C18.7595 19.2507 18.7192 19.3219 18.6807 19.3941C18.642 19.4663 18.6052 19.5394 18.5702 19.6135C18.5352 19.6874 18.5021 19.7622 18.4708 19.8379C18.4394 19.9135 18.4099 19.9899 18.3823 20.067C18.3548 20.144 18.3291 20.2217 18.3054 20.3001C18.2816 20.3785 18.2597 20.4573 18.2399 20.5367C18.22 20.6161 18.2021 20.696 18.186 20.7763C18.1701 20.8565 18.1561 20.9372 18.1441 21.0182C18.1321 21.0992 18.1221 21.1804 18.114 21.2618C18.106 21.3433 18.1 21.425 18.096 21.5067C18.092 21.5885 18.09 21.6703 18.09 21.7521C18.09 21.834 18.092 21.9158 18.096 21.9975C18.1 22.0793 18.106 22.161 18.114 22.2425C18.1221 22.3239 18.1321 22.4051 18.1441 22.4861C18.1561 22.5671 18.1701 22.6477 18.186 22.728C18.2021 22.8083 18.22 22.8881 18.2399 22.9676C18.2597 23.047 18.2816 23.1259 18.3054 23.2042C18.3291 23.2826 18.3548 23.3603 18.3823 23.4373C18.4099 23.5144 18.4394 23.5908 18.4708 23.6664C18.5021 23.742 18.5352 23.8169 18.5702 23.8909C18.6052 23.9649 18.642 24.038 18.6807 24.1102C18.7192 24.1824 18.7595 24.2536 18.8016 24.3238C18.8437 24.394 18.8875 24.4632 18.933 24.5312C18.9785 24.5993 19.0256 24.6662 19.0743 24.732C19.1231 24.7977 19.1735 24.8622 19.2254 24.9255C19.2774 24.9888 19.3308 25.0507 19.3858 25.1114C19.4407 25.1721 19.4972 25.2313 19.5551 25.2892C19.6129 25.3475 19.6721 25.4044 19.7326 25.4598C19.7932 25.5152 19.8551 25.569 19.9184 25.6214C19.9816 25.6737 20.0461 25.7245 20.1119 25.7736C20.1776 25.8228 20.2445 25.8703 20.3126 25.9162C20.3807 25.9621 20.4499 26.0063 20.5201 26.0488C20.5904 26.0912 20.6617 26.1319 20.7339 26.1708C20.8062 26.2098 20.8794 26.247 20.9535 26.2824C21.0275 26.3177 21.1024 26.3512 21.1782 26.3829C21.2539 26.4145 21.3304 26.4443 21.4076 26.4723C21.4848 26.5001 21.5627 26.5261 21.6412 26.5502C21.7197 26.5743 21.7987 26.5964 21.8783 26.6165C21.9579 26.6367 22.0379 26.6549 22.1183 26.6711C22.1988 26.6874 22.2796 26.7017 22.3608 26.714C22.442 26.7262 22.5234 26.7365 22.6051 26.7447C22.6868 26.7529 22.7686 26.7592 22.8506 26.7634C22.9326 26.7676 23.0146 26.7698 23.0967 26.77C23.1788 26.7702 23.2609 26.7684 23.3429 26.7645C23.4249 26.7606 23.5068 26.7548 23.5885 26.7469C23.6702 26.739 23.7516 26.7291 23.8329 26.7172C23.9141 26.7053 23.995 26.6914 24.0755 26.6755C24.156 26.6597 24.2362 26.6418 24.3159 26.6219C24.3955 26.6021 24.4746 26.5803 24.5532 26.5566C24.6318 26.5329 24.7098 26.5073 24.7871 26.4797C24.8645 26.4521 24.9411 26.4227 25.0169 26.3913C25.0928 26.36 25.1679 26.3269 25.2421 26.2918C25.3164 26.2568 25.3898 26.2199 25.4622 26.1813C25.5346 26.1427 25.6061 26.1023 25.6765 26.0601C25.7469 26.0179 25.8163 25.9741 25.8846 25.9285C25.9529 25.883 26.02 25.8357 26.086 25.7868C26.1519 25.738 26.2166 25.6875 26.2801 25.6355C26.3436 25.5834 26.4057 25.5298 26.4665 25.4747C26.5274 25.4196 26.5868 25.363 26.6449 25.3049C26.703 25.2468 26.7596 25.1874 26.8147 25.1265C26.8698 25.0657 26.9234 25.0036 26.9755 24.9401C27.0275 24.8766 27.078 24.8119 27.1268 24.746C27.1757 24.68 27.223 24.6129 27.2685 24.5446C27.3141 24.4763 27.3579 24.4069 27.4002 24.3365C27.4423 24.2661 27.4827 24.1946 27.5213 24.1222C27.5599 24.0498 27.5968 23.9764 27.6318 23.9021C27.6669 23.8279 27.7 23.7528 27.7313 23.6769C27.7627 23.6011 27.7921 23.5245 27.8197 23.4471C27.8473 23.3698 27.8729 23.2918 27.8966 23.2132C27.9203 23.1346 27.9421 23.0555 27.9619 22.9759C27.9818 22.8962 27.9997 22.8161 28.0155 22.7356C28.0314 22.655 28.0453 22.5741 28.0572 22.4929C28.0691 22.4116 28.079 22.3302 28.0869 22.2485C28.0948 22.1668 28.1006 22.0849 28.1045 22.0029C28.1084 21.9209 28.1102 21.8388 28.11 21.7567C28.1098 21.6746 28.1076 21.5926 28.1034 21.5106C28.0992 21.4286 28.0929 21.3468 28.0847 21.2651C28.0765 21.1834 28.0662 21.102 28.054 21.0208C28.0417 20.9396 28.0274 20.8588 28.0111 20.7783C27.9949 20.6979 27.9767 20.6179 27.9565 20.5383C27.9364 20.4587 27.9143 20.3797 27.8902 20.3012C27.8661 20.2227 27.8401 20.1448 27.8123 20.0676C27.7843 19.9904 27.7545 19.9139 27.7229 19.8382C27.6912 19.7624 27.6577 19.6875 27.6224 19.6135C27.587 19.5394 27.5498 19.4662 27.5108 19.3939C27.4719 19.3217 27.4312 19.2504 27.3888 19.1801C27.3463 19.1099 27.3021 19.0407 27.2562 18.9726C27.2103 18.9045 27.1628 18.8376 27.1136 18.7719C27.0645 18.7061 27.0137 18.6416 26.9614 18.5784C26.909 18.5151 26.8552 18.4532 26.7998 18.3926C26.7444 18.3321 26.6875 18.2729 26.6292 18.2151ZM20.9697 23.8746C20.8606 23.7655 20.7605 23.6488 20.6694 23.5242C20.5782 23.3997 20.4972 23.2689 20.4262 23.132C20.3553 22.9949 20.2954 22.8532 20.2463 22.707C20.1972 22.5607 20.1596 22.4116 20.1334 22.2596C20.1073 22.1075 20.0931 21.9543 20.0906 21.8001C20.0881 21.6458 20.0975 21.4922 20.1187 21.3394C20.1399 21.1866 20.1727 21.0363 20.2171 20.8886C20.2615 20.7408 20.3169 20.5973 20.3834 20.4581L24.3862 24.4609C24.247 24.5274 24.1035 24.5828 23.9557 24.6272C23.808 24.6716 23.6577 24.7044 23.5049 24.7256C23.3521 24.7468 23.1985 24.7562 23.0442 24.7537C22.8899 24.7512 22.7368 24.7369 22.5847 24.7109C22.4327 24.6847 22.2836 24.6471 22.1373 24.598C21.991 24.5489 21.8494 24.4889 21.7123 24.418C21.5753 24.3471 21.4446 24.266 21.32 24.1749C21.1955 24.0838 21.0787 23.9837 20.9697 23.8746ZM25.8009 23.0472L21.7981 19.0444C21.9373 18.9781 22.0807 18.9229 22.2285 18.8788C22.3762 18.8345 22.5265 18.8019 22.6793 18.7808C22.832 18.7598 22.9855 18.7506 23.1397 18.7532C23.2938 18.7557 23.4469 18.7701 23.5989 18.7963C23.7508 18.8225 23.8998 18.8601 24.046 18.9092C24.1922 18.9583 24.3337 19.0183 24.4707 19.0892C24.6076 19.1602 24.7382 19.2412 24.8626 19.3323C24.9871 19.4233 25.1038 19.5233 25.2129 19.6324C25.3219 19.7414 25.422 19.8582 25.513 19.9826C25.6041 20.107 25.6851 20.2377 25.756 20.3746C25.8269 20.5116 25.887 20.6531 25.9361 20.7993C25.9852 20.9454 26.0228 21.0945 26.049 21.2464C26.0752 21.3984 26.0896 21.5515 26.0921 21.7056C26.0947 21.8598 26.0855 22.0133 26.0645 22.166C26.0434 22.3188 26.0107 22.4691 25.9665 22.6168C25.9224 22.7646 25.8672 22.908 25.8009 23.0472Z">
															</path>
														</g>
													</svg>
												</span>
												<span class="bpx-player-block-filter-label">重复</span>
											</div>
											<div class="bpx-player-block-filter-type bpx-player-block-roll" data-key="bili-danmaku-filter-type-roll" data-type="roll">
												<span class="bpx-player-block-filter-image">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 28 28">
														<path d="M23 3H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM11 9h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm-3 2H6V9h2v2zm4 4h-2v-2h2v2zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-image-enable">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28">
														<path d="M23 15c1.487 0 2.866.464 4 1.255V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h11.674A7 7 0 0 1 23 15zM11 9h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm-3 2H6V9h2v2zm4 4h-2v-2h2v2zm2-1a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1z"></path>
														<path d="M26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-label">滚动</span>
											</div>
											<div class="bpx-player-block-filter-type bpx-player-block-top" data-key="bili-danmaku-filter-type-top" data-type="top">
												<span class="bpx-player-block-filter-image">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 28 28">
														<path d="M23 3H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM9 9H7V7h2v2zm4 0h-2V7h2v2zm4 0h-2V7h2v2zm4 0h-2V7h2v2z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-image-enable">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28">
														<path d="M23 15c1.487 0 2.866.464 4 1.255V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h11.674A7 7 0 0 1 23 15zm-4-8h2v2h-2V7zM9 9H7V7h2v2zm4 0h-2V7h2v2zm2-2h2v2h-2V7z"></path>
														<path d="M26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-label">顶部</span>
											</div>
											<div class="bpx-player-block-filter-type bpx-player-block-bottom" data-key="bili-danmaku-filter-type-bottom" data-type="bottom">
												<span class="bpx-player-block-filter-image">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 28 28">
														<path d="M23 3H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM9 21H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-image-enable">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28">
														<path d="M23 15c1.487 0 2.866.464 4 1.255V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h11.674A7 7 0 0 1 23 15zM9 21H7v-2h2v2zm4 0h-2v-2h2v2z"></path>
														<path d="M26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-label">底部</span>
											</div>
											<div class="bpx-player-block-filter-type bpx-player-block-colour" data-key="bili-danmaku-filter-type-colour" data-type="colour">
												<span class="bpx-player-block-filter-image">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 28 28">
														<path d="M17.365 11.118c0-.612-.535-1.147-1.147-1.147s-1.147.535-1.147 1.147c0 .611.535 1.147 1.147 1.147s1.147-.536 1.147-1.147zM12.93 9.665c-.764 0-1.376.611-1.376 1.3 0 .689.612 1.301 1.376 1.301s1.376-.612 1.376-1.301-.612-1.3-1.376-1.3zM9.794 11.883c-.764 0-1.376.612-1.376 1.3 0 .689.612 1.3 1.376 1.3s1.376-.611 1.376-1.3c.001-.688-.611-1.3-1.376-1.3zM10.023 15.171c-.612 0-1.147.536-1.147 1.148 0 .611.535 1.146 1.147 1.146s1.147-.535 1.147-1.146c.001-.612-.535-1.148-1.147-1.148zM17.823 12.953c-.611 0-1.147.535-1.147 1.147s.536 1.147 1.147 1.147c.612 0 1.148-.535 1.148-1.147s-.536-1.147-1.148-1.147z"></path>
														<path d="M23.177 3H4.824C2.683 3 1 4.833 1 7.167v13.665C1 23.167 2.683 25 4.824 25h18.353C25.318 25 27 23.167 27 20.833V7.167C27 4.833 25.318 3 23.177 3zm-3.442 13.624c-1.987.612-4.129-.154-5.046.764-.918.918 1.529 1.606 0 2.219-1.988.84-7.341-.535-8.182-4.053-.841-3.441 2.905-6.5 5.888-7.035 2.906-.535 6.041.841 8.181 2.982 2.065 2.141.765 4.74-.841 5.123z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-image-enable">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28">
														<path d="M17.823 15.247c.612 0 1.148-.535 1.148-1.147s-.536-1.147-1.148-1.147c-.611 0-1.147.535-1.147 1.147s.536 1.147 1.147 1.147zM17.365 11.118c0-.612-.535-1.147-1.147-1.147s-1.147.535-1.147 1.147c0 .611.535 1.147 1.147 1.147s1.147-.536 1.147-1.147z"></path>
														<path d="M18.235 16.872c-1.483.086-2.859-.172-3.546.516-.918.918 1.529 1.606 0 2.219-1.988.84-7.341-.535-8.182-4.053-.841-3.441 2.905-6.5 5.888-7.035 2.906-.535 6.041.841 8.181 2.982 1.208 1.253 1.265 2.663.782 3.694A6.938 6.938 0 0 1 23 15c1.487 0 2.866.464 4 1.255V7.167C27 4.833 25.318 3 23.177 3H4.824C2.683 3 1 4.833 1 7.167v13.665C1 23.167 2.683 25 4.824 25h11.85A6.97 6.97 0 0 1 16 22c0-2.025.86-3.85 2.235-5.128z"></path><path d="M8.876 16.319c0 .611.535 1.146 1.147 1.146s1.147-.535 1.147-1.146c0-.612-.535-1.148-1.147-1.148s-1.147.536-1.147 1.148zM9.794 11.883c-.764 0-1.376.612-1.376 1.3 0 .689.612 1.3 1.376 1.3s1.376-.611 1.376-1.3c.001-.688-.611-1.3-1.376-1.3zM11.553 10.965c0 .689.612 1.301 1.376 1.301s1.376-.612 1.376-1.301-.612-1.3-1.376-1.3-1.376.611-1.376 1.3zM26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-label">彩色</span>
											</div>
											<!-- <div class="bpx-player-block-filter-type bpx-player-block-senior" data-key="bili-danmaku-filter-type-senior" data-type="senior">
												<span class="bpx-player-block-filter-image">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" viewBox="0 0 28 28">
														<path d="M23 3H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM7.849 11.669l.447-.828.492.782.894.184-.536.736.134.966-.85-.321-.804.414.045-.967L7 11.946l.849-.277zm3.352 7.101-1.43-.506L8.43 19v-1.565L7.357 16.33l1.43-.506.67-1.381.894 1.289 1.475.23-.894 1.289.269 1.519zm7.95-3.9-2.816-.69-2.458 1.565-.223-2.946-2.145-1.933 2.637-1.151L15.263 7l1.877 2.255 2.86.23-1.52 2.531.671 2.854z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-image">
													<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28">
														<path d="M23 15c1.487 0 2.866.464 4 1.255V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h11.674A7 7 0 0 1 23 15zM7.849 11.669l.447-.828.492.782.894.184-.536.736.134.966-.85-.321-.804.414.045-.967L7 11.946l.849-.277zm3.352 7.101-1.43-.506L8.43 19v-1.565L7.357 16.33l1.43-.506.67-1.381.894 1.289 1.475.23-.894 1.289.269 1.519zm2.453-5.971-2.145-1.933 2.637-1.151L15.263 7l1.877 2.255 2.86.23-1.52 2.531.67 2.854-2.816-.69-2.458 1.565-.222-2.946z"></path>
														<path d="M26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z"></path>
													</svg>
												</span>
												<span class="bpx-player-block-filter-label">高级</span>
											</div>	 -->
											`
                        )
                      });
                      $dmSetting.querySelectorAll(
                        ".bpx-player-block-filter-type"
                      ).forEach(($filterItem) => {
                        let $label = $filterItem.querySelector(
                          ".bpx-player-block-filter-label"
                        );
                        let key = $filterItem.getAttribute("data-key");
                        let value = PopsPanel.getValue(key);
                        $filterItem.setAttribute("data-value", String(value));
                        domutils.on($filterItem, "click", (event) => {
                          utils.preventEvent(event);
                          let __value = PopsPanel.getValue(key);
                          let switchValue = !__value;
                          if (__value) {
                            $filterItem.setAttribute(
                              "data-value",
                              String(switchValue)
                            );
                          } else {
                            $filterItem.setAttribute(
                              "data-value",
                              String(switchValue)
                            );
                          }
                          log.success(
                            `${$label.innerText} ${switchValue ? "开启" : "关闭"}`
                          );
                          PopsPanel.setValue(key, switchValue);
                        });
                      });
                      liElement.appendChild($dmSetting);
                      return liElement;
                    },
                    {
                      "bili-danmaku-filter-type-repeat": false,
                      "bili-danmaku-filter-type-roll": false,
                      "bili-danmaku-filter-type-top": false,
                      "bili-danmaku-filter-type-bottom": false,
                      "bili-danmaku-filter-type-colour": false
                      // "bili-danmaku-filter-type-senior": false,
                    }
                  ),
                  UISwitch(
                    "屏蔽词",
                    "bili-danmaku-filter",
                    false,
                    void 0,
                    "开启后可使用↓自定义的规则过滤弹幕"
                  ),
                  UIOwn((liElement) => {
                    let textareaDiv = domutils.createElement(
                      "div",
                      {
                        className: "pops-panel-textarea",
                        innerHTML: (
                          /*html*/
                          `
												<textarea placeholder="请输入规则，每行一个，可正则" style="height:200px;"></textarea>`
                        )
                      },
                      {
                        style: "width: 100%;"
                      }
                    );
                    let $textarea = textareaDiv.querySelector("textarea");
                    $textarea.value = BilibiliDanmakuFilter.getValue();
                    domutils.on(
                      $textarea,
                      ["input", "propertychange"],
                      void 0,
                      utils.debounce(function(event) {
                        BilibiliDanmakuFilter.setValue($textarea.value);
                      }, 200)
                    );
                    liElement.appendChild(textareaDiv);
                    return liElement;
                  })
                ]
              }
            ]
          },
          {
            text: "变量设置",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "isLogin",
                    "bili-setLogin",
                    true,
                    void 0,
                    "$store.state.common.noCallApp=true<br>$store.state.common.userInfo.isLogin=true<br>$store.state.loginInfo.isLogin=true"
                  ),
                  UISwitch(
                    "isClient",
                    "bili-setIsClient",
                    true,
                    void 0,
                    "$store.state.video.isClient=true<br>$store.state.opus.isClient=true<br>$store.state.playlist.isClient=true<br>$store.state.ver.bili=true<br>$store.state.ver.biliVer=2333"
                  ),
                  UISwitch(
                    "tinyApp",
                    "bili-setTinyApp",
                    true,
                    void 0,
                    "$store.state.common.tinyApp=true"
                  )
                ]
              }
            ]
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
                    "覆盖bili-open-app元素上的opener.open函数，可阻止点击唤醒/下载App"
                  ),
                  UISwitch(
                    "劫持setTimeout-autoOpenApp",
                    "bili-hookSetTimeout_autoOpenApp",
                    true,
                    void 0,
                    "阻止自动调用App"
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
                    "自动根据请求的域名来获取对应的cookie"
                  ),
                  UITextArea(
                    "bilibili.com",
                    "httpx-cookie-bilibili.com",
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
      }
    ]
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
                    "调整视频底部区域高度",
                    "bili-video-repairVideoBottomAreaHeight",
                    true,
                    void 0,
                    "添加margin-top"
                  ),
                  UISwitch(
                    "自动点击【继续在网页观看】",
                    "bili-video-autoClickContinueToWatchOnTheWebpage",
                    true,
                    void 0,
                    "可避免弹窗出现且自动点击后播放视频"
                  ),
                  UISwitch(
                    "美化底部推荐视频",
                    "bili-video-beautify",
                    true,
                    void 0,
                    "调整底部推荐视频卡片样式类似哔哩哔哩App"
                  ),
                  UISwitch(
                    "手势返回关闭评论区",
                    "bili-video-gestureReturnToCloseCommentArea",
                    true,
                    void 0,
                    "当浏览器手势触发浏览器回退页面时，关闭评论区"
                  ),
                  UISwitch(
                    "强制本页刷新跳转",
                    "bili-video-forceThisPageToRefreshAndRedirect",
                    false,
                    void 0,
                    "用于解决跳转播放视频时，播放当前视频会有上一个播放视频的声音的情况"
                  ),
                  UISwitch(
                    "initPlayer",
                    "bili-video-initPlayer",
                    true,
                    void 0,
                    "自动执行初始化播放器"
                  ),
                  UISwitch(
                    "检测是否静音",
                    "bili-video-playerAutoPlayVideoCheckMute",
                    false,
                    void 0,
                    "在播放视频时自动检测视频是否静音，有的话弹出Toast"
                  )
                ]
              },
              {
                text: "自动播放视频",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "bili-video-playerAutoPlayVideo",
                    false,
                    void 0,
                    "需开启【initPlayer】"
                  ),
                  UISwitch(
                    "自动进入全屏",
                    "bili-video-playerAutoPlayVideoFullScreen",
                    false,
                    void 0,
                    "需开启【自动播放视频】"
                  )
                ]
              },
              {
                type: "forms",
                text: "底部Tab",
                forms: [
                  UISwitch(
                    "滚动固钉Tab",
                    "bili-video-optimizationScroll",
                    true,
                    void 0,
                    "向下滚动时，自动跳转视频区域大小且对Tab进行吸附处理"
                  ),
                  UISwitch(
                    "禁止滑动切换Tab",
                    "bili-video-disableSwipeTab",
                    false,
                    void 0,
                    "禁止左右滑动切换Tab"
                  )
                ]
              }
            ]
          },
          {
            text: "变量设置",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "playBtnNoOpenApp",
                    "bili-video-setVideoPlayer",
                    true,
                    void 0,
                    "playBtnNoOpenApp=true<br>playBtnOpenApp=false<br>coverOpenApp=false"
                  ),
                  UISwitch(
                    "解锁充电限制",
                    "bili-video-unlockUpower",
                    false,
                    void 0,
                    "is_upower_exclusive=true<br>is_upower_play=false<br>is_upower_preview=false"
                  )
                ]
              }
            ]
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
                  )
                ]
              }
            ]
          },
          {
            text: "网络拦截",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "解锁清晰度",
                    "bili-video-xhr-unlockQuality",
                    true,
                    void 0,
                    "最高清晰度为720P"
                  )
                ]
              }
            ]
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
                    "阻止调用App",
                    "bili-video-hook-callApp",
                    true,
                    void 0,
                    "处理函数: PlayerAgent"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const AppKeyInfo = {
    /** 云视听小电视(TV版) 不过用这个无法解锁番剧 */
    tv: {
      appkey: "4409e2ce8ffd12b8",
      appsec: "59b43e04ad6965f34319062b478f83dd",
      mobi_app: "android_tv_yst"
    },
    /** web_ios */
    ios: {
      appkey: "27eb53fc9058f8c3",
      appsec: "c2ed53a74eeefe3cf99fbd01d8c9c375",
      mobi_app: "ipnone"
    }
  };
  function appSign(params, appkey, appsec) {
    params.appkey = appkey;
    const searchParams = new URLSearchParams(params);
    searchParams.sort();
    return md5(searchParams.toString() + appsec);
  }
  const BilibiliLoginApi = {
    /**
     * 获取登录二维码信息（TV端）
     * https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/login/login_action/QR.md#%E7%94%B3%E8%AF%B7%E4%BA%8C%E7%BB%B4%E7%A0%81(TV%E7%AB%AF)
     */
    async getQrCodeInfo() {
      var _a2;
      let Api = "https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code";
      let postData = {
        /** APP 密钥 APP 方式必要 */
        appkey: AppKeyInfo.ios.appkey,
        /** TV 端 id */
        local_id: "0",
        /** 当前时间戳 APP 方式必要 */
        ts: "0",
        /** APP 签名 APP 方式必要 */
        // sign: "",
        /** 平台标识 会被拼接到返回的 url query */
        mobi_app: AppKeyInfo.ios.mobi_app,
        csrf: ((_a2 = GMCookie.get("bili_jct")) == null ? void 0 : _a2.value) || ""
      };
      let sign = appSign(postData, AppKeyInfo.ios.appkey, AppKeyInfo.ios.appsec);
      let postResp = await httpx.post(
        Api,
        {
          data: utils.toSearchParamsStr({
            ...postData,
            sign
          }),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          responseType: "json",
          fetch: true
        }
        // sign: 'e134154ed6add881d28fbdf68653cd9c',
      );
      log.info(postResp);
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
    /**
     * 获取auth_code对应的链接的扫码状态
     * @param auth_code
     * @returns
     */
    async poll(auth_code) {
      let Api = "https://passport.bilibili.com/x/passport-tv-login/qrcode/poll";
      let postData = {
        appkey: AppKeyInfo.ios.appkey,
        auth_code,
        local_id: "0",
        ts: "0"
      };
      let sign = appSign(postData, AppKeyInfo.ios.appkey, AppKeyInfo.ios.appsec);
      let postResp = await httpx.post(Api, {
        data: utils.toSearchParamsStr({
          ...postData,
          sign
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        responseType: "json",
        fetch: true
      });
      if (!postResp.status) {
        return { success: false, message: "网络错误", action: void 0 };
      }
      const json = utils.toJSON(postResp.data.responseText);
      log.info(json);
      const msgMap = {
        "0": "成功",
        "-3": "API校验密匙错误",
        "-400": "请求错误",
        "-404": "啥都木有",
        "86038": "二维码已失效",
        "86039": "二维码尚未确认",
        "86090": "二维码已扫码未确认"
      };
      if (!BilibiliResponseCheck.isWebApiSuccess(json)) {
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
        accessKeyExpireAt
      };
    }
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
    /**'
     * 获取二维码信息
     */
    getQRCodeInfo: async function() {
      log.info("正在申请二维码...");
      let qrcodeInfo = await BilibiliLoginApi.getQrCodeInfo();
      log.info(["获取到二维码信息", qrcodeInfo]);
      return qrcodeInfo;
    },
    /**
     * 确认扫码
     * @param qrcodeInfo
     */
    async confirmScanQrcode(qrcodeInfo) {
      let $alert = __pops.alert({
        title: {
          text: "请扫描二维码登录",
          position: "center",
          html: false,
          style: ""
        },
        content: {
          text: (
            /*html*/
            `<div id="bili-qrcode-canvas"></div>`
          ),
          html: true
        },
        btn: {
          ok: {
            enable: false
          },
          close: {
            enable: true,
            callback(event) {
              isUserCloseScanDialog = true;
              event.close();
            }
          }
        },
        mask: {
          enable: true,
          clickEvent: {
            toClose: false,
            toHide: false
          }
        },
        only: true,
        width: "310px",
        height: "365px",
        drag: true,
        dragLimit: true,
        style: (
          /*css*/
          `
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `
        )
      });
      let $biliQrcodeCanvas = $alert.$shadowRoot.querySelector(
        "#bili-qrcode-canvas"
      );
      let qrcode = new QRCodeJS($biliQrcodeCanvas, {
        text: qrcodeInfo.url,
        width: 300,
        height: 300,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCodeJS.CorrectLevel.H
      });
      let isUserCloseScanDialog = false;
      while (true) {
        if (isUserCloseScanDialog) {
          log.error("用户关闭扫码登录弹窗、取消扫码登录");
          break;
        }
        log.info("正在等待扫码登录...");
        let pollInfo = await BilibiliLoginApi.poll(qrcodeInfo.auth_code);
        if (pollInfo == null ? void 0 : pollInfo.success) {
          this.setAccessTokenInfo({
            access_token: pollInfo.accessKey,
            expireAt: pollInfo.accessKeyExpireAt
          });
          log.info(["扫码登录成功", pollInfo]);
          log.success("扫码登录成功");
          Qmsg.success("扫码登录成功");
          break;
        } else {
          if ((pollInfo == null ? void 0 : pollInfo.action) === "refresh") {
            log.info("刷新二维码");
            Qmsg.info("刷新二维码");
            let qrcodeInfo2 = await this.getQRCodeInfo();
            if (qrcodeInfo2) {
              qrcode.clear();
              qrcode.makeCode(qrcodeInfo2.url);
            }
          } else if (pollInfo.action === "wait") {
            if (pollInfo.message === "二维码已扫码未确认") {
              log.info("已扫码，等待确认...");
              __pops.loading({
                parent: $biliQrcodeCanvas,
                content: {
                  text: "已扫码，等待确认"
                },
                mask: {
                  enable: true
                }
              });
            }
          } else {
            log.error(pollInfo.message);
            Qmsg.error(pollInfo.message);
            break;
          }
        }
        await utils.sleep(1500);
      }
      $alert.close();
    },
    /**
     * 生成过期时间
     * @param monthNumber xx月后过期
     * @returns
     */
    generateExpireAt(monthNumber = 6) {
      return (/* @__PURE__ */ new Date()).getTime() + 1e3 * 60 * 60 * 24 * 30 * monthNumber;
    },
    /**
     * 设置获取到的access_token和过期时间
     * @param data
     */
    setAccessTokenInfo(data2) {
      _GM_setValue("bili-accessTokenInfo", data2);
    },
    /**
     * 获取access_token和过期时间
     * 自动根据过期时间处理数据
     * @returns
     */
    getAccessTokenInfo() {
      let data2 = _GM_getValue("bili-accessTokenInfo");
      if (data2 && data2.expireAt > Date.now()) {
        return data2;
      } else {
        return null;
      }
    },
    /**
     * 获取access_token
     * @returns
     */
    getAccessToken() {
      var _a2;
      return ((_a2 = this.getAccessTokenInfo()) == null ? void 0 : _a2.access_token) || "";
    }
  };
  const BilibiliApiProxy = {
    /**
     * 获取番剧代理服务器
     *
     * 轮询查询播放地址
     */
    getBangumiProxyHost() {
      let serverHost = [
        {
          name: "中国大陆",
          area: "",
          host: PopsPanel.getValue(
            "bili-bangumi-proxyApiServer-default",
            ""
          ).trim() || BilibiliApiConfig.web_host
        }
      ];
      if (!PopsPanel.getValue("bili-bangumi-unlockAreaLimit")) {
        return serverHost;
      }
      let hk_host = PopsPanel.getValue("bili-bangumi-proxyApiServer-hk");
      if (utils.isNotNull(hk_host)) {
        serverHost.push({
          name: "香港",
          area: "hk",
          host: hk_host
        });
      }
      let tw_host = PopsPanel.getValue("bili-bangumi-proxyApiServer-tw");
      if (utils.isNotNull(tw_host)) {
        serverHost.push({
          name: "台湾",
          area: "tw",
          host: tw_host
        });
      }
      let tha_host = PopsPanel.getValue(
        "bili-bangumi-proxyApiServer-tha-or-sea"
      );
      if (utils.isNotNull(tha_host)) {
        serverHost.push({
          name: "泰国/东南亚",
          area: "th",
          host: tha_host
        });
      }
      return serverHost;
    },
    /**
     * 获取搜索代理服务器
     *
     * 因为有些代理服务器虽然能拉取播放地址，但是不能使用搜索功能
     *
     * 特地区分开
     *
     * 如果没有填入服务器，则从番剧代理服务器中获取
     *
     * 搜索番剧结果
     */
    getSearchProxyHost() {
      let bangumiProxyHost = this.getBangumiProxyHost();
      let serverHost = [];
      let hk_host = PopsPanel.getValue("bili-search-proxyApiServer-hk");
      if (utils.isNotNull(hk_host)) {
        serverHost.push({
          name: "香港",
          area: "hk",
          host: hk_host
        });
      } else {
        let bangumi_hk_host = bangumiProxyHost.find((item) => item.area === "hk");
        if (bangumi_hk_host) {
          serverHost.push(bangumi_hk_host);
        }
      }
      let tw_host = PopsPanel.getValue("bili-search-proxyApiServer-tw");
      if (utils.isNotNull(tw_host)) {
        serverHost.push({
          name: "台湾",
          area: "tw",
          host: tw_host
        });
      } else {
        let bangumi_tw_host = bangumiProxyHost.find((item) => item.area === "tw");
        if (bangumi_tw_host) {
          serverHost.push(bangumi_tw_host);
        }
      }
      let tha_host = PopsPanel.getValue(
        "bili-search-proxyApiServer-tha-or-sea"
      );
      if (utils.isNotNull(tha_host)) {
        serverHost.push({
          name: "泰国/东南亚",
          area: "th",
          host: tha_host
        });
      } else {
        let bangumi_tha_host = bangumiProxyHost.find(
          (item) => item.area === "th"
        );
        if (bangumi_tha_host) {
          serverHost.push;
        }
      }
      return serverHost;
    },
    /**
     * 获取番剧代理参数
     */
    getBangumiProxySearchParam(option = {}) {
      let proxyData = {
        from_client: "BROWSER",
        drm_tech_type: 2,
        module: "bangumi",
        area: (option == null ? void 0 : option.area) || "",
        access_key: BilibiliQrCodeLogin.getAccessToken()
      };
      return proxyData;
    }
  };
  const BilibiliCDNProxy = {
    /**
     * 筛选出更好的cdn
     *
     * 通过playurl获取到的url信息默认的base_url|baseUrl可能是辣鸡的mcdn节点，而upos节点在backupUrl|backup_url中
     *
     * 筛选最好的节点
     *
     * 传入参数顺序base_url=>baseUrl=>backup_url=>backupUrl，即好的在后面
     */
    findBetterCDN(...args) {
      let urlList = [];
      args.forEach((arg) => {
        if (Array.isArray(arg)) {
          urlList = urlList.concat(
            arg.filter((item) => typeof item === "string")
          );
        } else {
          if (typeof arg === "string") {
            urlList.push(arg);
          }
        }
      });
      let betterCDN = urlList.find((url) => {
        let urlObj = new URL(url);
        if (urlObj.host.startsWith("upos")) {
          return url;
        }
      });
      if (betterCDN) {
        return betterCDN;
      } else {
        return urlList[0];
      }
    },
    /**
     * 视频CDN替换
     *
     * 有以下类型
     * .mcdn.bilivideo 辣鸡路线
     *
     */
    replaceVideoCDN(url) {
      try {
        let urlObj = new URL(url);
        let userChooseCDN = PopsPanel.getValue(
          "bili-bangumi-uposServerSelect"
        );
        let chooseUposCDN = this.getUposCDNServerList().find((item) => {
          return item.host === userChooseCDN;
        });
        if (utils.isNull(chooseUposCDN)) {
          return url;
        }
        let chooseUposCDNHost = chooseUposCDN.host;
        let originHost = urlObj.host;
        if (originHost.includes("mirror")) {
          log.info(`原Host为：${originHost}`);
          log.info(`替换CDN为：${JSON.stringify(chooseUposCDN)}`);
          urlObj.host = chooseUposCDNHost;
        }
        return urlObj.toString();
      } catch (error) {
        log.error(["视频upos替换失败", error]);
        log.error(error);
        return url;
      }
    },
    /**
     * 获取upos服务器列表
     * @link https://github.com/the1812/Bilibili-Evolved/issues/3234#issuecomment-1504764774
     */
    getUposCDNServerList() {
      const serverList = [
        {
          name: "不替换",
          host: ""
        },
        {
          name: "ali（阿里云）",
          host: "upos-sz-mirrorali.bilivideo.com"
        },
        {
          name: "alib（阿里云）",
          host: "upos-sz-mirroralib.bilivideo.com"
        },
        {
          name: "alio1（阿里云）",
          host: "upos-sz-mirroralio1.bilivideo.com"
        },
        {
          name: "cos（腾讯云）",
          host: "upos-sz-mirrorcos.bilivideo.com"
        },
        {
          name: "cosb（腾讯云，VOD加速类型）",
          host: "upos-sz-mirrorcosb.bilivideo.com"
        },
        {
          name: "coso1（腾讯云）",
          host: "upos-sz-mirrorcoso1.bilivideo.com"
        },
        {
          name: "hw（华为云，融合CDN）",
          host: "upos-sz-mirrorhw.bilivideo.com"
        },
        {
          name: "hwb（华为云，融合CDN）",
          host: "upos-sz-mirrorhwb.bilivideo.com"
        },
        {
          name: "hwo1（华为云，融合CDN）",
          host: "upos-sz-mirrorhwo1.bilivideo.com"
        },
        {
          name: "08c（华为云，融合CDN）",
          host: "upos-sz-mirror08c.bilivideo.com"
        },
        {
          name: "08h（华为云，融合CDN）",
          host: "upos-sz-mirror08h.bilivideo.com"
        },
        {
          name: "08ct（华为云，融合CDN）",
          host: "upos-sz-mirror08ct.bilivideo.com"
        },
        {
          name: "tf_hw（华为云）",
          host: "upos-tf-all-hw.bilivideo.com"
        },
        {
          name: "tf_tx（腾讯云）",
          host: "upos-tf-all-tx.bilivideo.com"
        },
        {
          name: "akamai（Akamai海外）",
          host: "upos-hz-mirrorakam.akamaized.net"
        },
        {
          name: "aliov（阿里云海外）",
          host: "upos-sz-mirroraliov.bilivideo.com"
        },
        {
          name: "cosov（腾讯云海外）",
          host: "upos-sz-mirrorcosov.bilivideo.com"
        },
        {
          name: "hwov（华为云海外）",
          host: "upos-sz-mirrorhwov.bilivideo.com"
        },
        {
          name: "hk_bcache（Bilibili海外）",
          host: "cn-hk-eq-bcache-01.bilivideo.com"
        },
        {
          name: "alibstar1（阿里云海外-东南亚）",
          host: "upos-sz-mirroralibstar1.bilivideo.com"
        },
        {
          name: "cosbstar1（腾讯云海外-东南亚）",
          host: "upos-sz-mirrorcosbstar1.bilivideo.com"
        },
        {
          name: "hwbstar1（华为云海外-东南亚）",
          host: "upos-sz-mirrorhwbstar1.bilivideo.com"
        },
        {
          name: "akamai（Akamai海外-东南亚）",
          host: "upos-bstar1-mirrorakam.akamaized.net"
        }
      ];
      return serverList;
    }
  };
  const UIInput = function(text, key, defaultValue, description, changeCallBack, placeholder = "", isNumber, isPassword) {
    let result = {
      text,
      type: "input",
      isNumber: Boolean(isNumber),
      isPassword: Boolean(isPassword),
      attributes: {},
      description,
      getValue() {
        let localValue = PopsPanel.getValue(key, defaultValue);
        return localValue;
      },
      callback(event, value) {
        if (typeof changeCallBack === "function") {
          if (changeCallBack(event, value)) {
            return;
          }
        }
        PopsPanel.setValue(key, value);
      },
      placeholder
    };
    if (result.attributes) {
      result.attributes[ATTRIBUTE_KEY] = key;
      result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
    }
    return result;
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
                forms: [
                  UISwitch(
                    "固定缩放倍率",
                    "bili-bangumi-initialScale",
                    true,
                    void 0,
                    ""
                  )
                ]
              }
            ]
          },
          {
            text: "变量设置",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "pay",
                    "bili-bangumi-setPay",
                    true,
                    void 0,
                    "$store.state.userStat.pay=1<br>$store.state.mediaInfo.user_status.pay=1"
                  )
                ]
              }
            ]
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
                  )
                ]
              }
            ]
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
                    "阻止调用App",
                    "bili-bangumi-hook-callApp",
                    true,
                    void 0,
                    ""
                  )
                ]
              }
            ]
          },
          {
            text: "解除区域限制",
            type: "deepMenu",
            forms: [
              {
                text: "",
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
                    false,
                    void 0,
                    "根据繁体字幕自动生成简体中文字幕"
                  )
                ]
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
                  )
                ]
              },
              {
                text: "加速CDN设置",
                type: "forms",
                forms: [
                  UISelect(
                    "UPOS服务器设置",
                    "bili-bangumi-uposServerSelect",
                    "",
                    BilibiliCDNProxy.getUposCDNServerList().map((item) => {
                      return {
                        text: item.name,
                        value: item.host
                      };
                    }),
                    void 0,
                    "设置解锁番剧的服务器，可加快视频加载速度"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
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
                  UISwitch(
                    "搜索框自动获取焦点",
                    "bili-search-inputAutoFocus",
                    false,
                    void 0,
                    ""
                  ),
                  UISwitch(
                    "开启其它地区番剧搜索",
                    "bili-search-enableOtherAreaSearchBangumi",
                    false,
                    void 0,
                    "在搜索页面添加其它地区番剧搜索结果，需要解析服务器支持"
                  )
                ]
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
                  )
                ]
              }
            ]
          },
          {
            type: "deepMenu",
            text: "覆盖点击事件",
            forms: [
              {
                type: "forms",
                text: "",
                forms: [
                  UISwitch(
                    "取消",
                    "bili-search-cover-cancel",
                    false,
                    void 0,
                    "点击取消按钮回退至上一页"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
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
            text: "屏蔽",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】聊天室",
                    "bili-live-block-chatRoom",
                    false,
                    void 0,
                    "直接不显示底部的聊天室"
                  ),
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
                  )
                ]
              }
            ]
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
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
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
                  )
                ]
              }
            ]
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
                    "话题",
                    "bili-opus-cover-topicJump",
                    true,
                    void 0,
                    "点击话题正确跳转"
                  ),
                  UISwitch(
                    "header用户",
                    "bili-opus-cover-header",
                    true,
                    void 0,
                    "点击内容上的发布本动态的用户正确跳转个人空间"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
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
                  UISwitch(
                    "话题",
                    "bili-dynamic-cover-topicJump",
                    true,
                    void 0,
                    "点击话题正确跳转"
                  ),
                  UISwitch(
                    "header用户",
                    "bili-dynamic-cover-header",
                    true,
                    void 0,
                    "点击内容上的发布本动态的用户正确跳转个人空间"
                  ),
                  UISwitch(
                    "@用户",
                    "bili-dynamic-cover-atJump",
                    true,
                    void 0,
                    "点击@用户正确跳转个人空间"
                  ),
                  UISwitch(
                    "引用",
                    "bili-dynamic-cover-referenceJump",
                    true,
                    void 0,
                    "点击引用的视频|用户正确跳转"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
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
                  UISwitch(
                    "美化显示",
                    "bili-head-beautify",
                    true,
                    void 0,
                    "调整瀑布流视频卡片样式类似哔哩哔哩App"
                  ),
                  UISwitch(
                    "美化顶部NavBar",
                    "bili-beautifyTopNavBar",
                    true,
                    void 0,
                    "类似哔哩哔哩App的样式"
                  ),
                  UISwitch(
                    "补充推荐视频信息",
                    "bili-head-supplementaryVideoStreamingInformation",
                    true,
                    void 0,
                    "给视频添加UP主名，当前视频总时长信息"
                  )
                ]
              }
            ]
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
                    false,
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
                  UIInput(
                    "access_token",
                    "bili-head-recommend-access_token",
                    BilibiliQrCodeLogin.getAccessToken(),
                    "填入access_token，即可获取推荐视频数据",
                    (event, value, valueAsNumber) => {
                      BilibiliQrCodeLogin.setAccessTokenInfo({
                        access_token: value,
                        expireAt: BilibiliQrCodeLogin.generateExpireAt()
                      });
                    },
                    void 0,
                    false,
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
                  )
                ]
              }
            ]
          }
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
        },
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
          }
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
          }
        }
      ]);
    },
    /** 初始化本地设置默认的值 */
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
    addValueChangeListener(key, callback) {
      let listenerId = Math.random();
      this.$listener.listenData.set(key, {
        id: listenerId,
        key,
        callback
      });
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
      this.$listener.listenData.delete(deleteKey);
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
     * 根据key执行一次
     * @param key
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
        isMobile: this.isMobile(),
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
        return "92vw";
      } else {
        return "550px";
      }
    },
    /**
     * 获取设置面板的高度
     */
    getHeight() {
      if (window.innerHeight < 550) {
        return "80vh";
      } else {
        return "450px";
      }
    },
    /**
     * 获取配置内容
     */
    getPanelContentConfig() {
      let configList = [
        SettingUICommon,
        SettingUIHead,
        SettingUIVideo,
        SettingUIOpus,
        SettingUIDynamic,
        SettingUIBangumi,
        // SettingUITopicDetail,
        SettingUISearch,
        SettingUISpace,
        SettingUILive
      ];
      return configList;
    }
  };
  const BilibiliBeautifyCSS = '@charset "UTF-8";\r\n/* 主页 */\r\n#app .m-head {\r\n	--bg-color: #f0f1f3;\r\n	--bg-rever-color: #ffffff;\r\n	--pd-width: 1.3333vmin;\r\n	--bd-circle: 1.3333vmin;\r\n	--card-height: 30vmin;\r\n	--icon-font-size: 3.2vmin;\r\n	--icon-text-font-size: 2.6vmin;\r\n	--icon-font-margin-right: 3vmin;\r\n	--title-font-size: 2.8vmin;\r\n	background-color: var(--bg-color);\r\n}\r\n#app .m-head .m-home {\r\n	background-color: var(--bg-color);\r\n}\r\n/* 美化视频卡片 */\r\n#app .m-head .video-list .card-box .v-card {\r\n	background-color: var(--bg-rever-color);\r\n	padding: 0px;\r\n	margin: 0px;\r\n	width: calc(50% - var(--pd-width) / 2);\r\n	border-radius: var(--bd-circle);\r\n	margin-top: var(--pd-width);\r\n	display: grid;\r\n	/* 视频封面区域 */\r\n}\r\n#app .m-head .video-list .card-box .v-card .card {\r\n	background: var(--bg-rever-color);\r\n	border-radius: unset;\r\n	border-top-left-radius: var(--bd-circle);\r\n	border-top-right-radius: var(--bd-circle);\r\n	height: var(--card-height);\r\n}\r\n#app .m-head .video-list .card-box .v-card .card .count {\r\n	display: flex;\r\n	justify-content: safe flex-start;\r\n	padding-right: 0;\r\n}\r\n#app .m-head .video-list .card-box .v-card .card .count .iconfont {\r\n	font-size: var(--icon-text-font-size);\r\n}\r\n#app .m-head .video-list .card-box .v-card .card .count > span {\r\n	font-size: var(--icon-text-font-size);\r\n	margin-right: var(--icon-font-margin-right);\r\n}\r\n/* 视频标题区域 */\r\n#app .m-head .video-list .card-box .v-card .title {\r\n	padding: 0;\r\n	margin: var(--pd-width);\r\n	font-size: var(--title-font-size);\r\n}\r\n/* 两列 => 左边的 */\r\n#app .m-head .video-list .card-box .v-card:nth-child(2n-1) {\r\n	/*background-color: red;*/\r\n	margin-right: calc(var(--pd-width) / 2);\r\n}\r\n/* 两列 => 右边的 */\r\n#app .m-head .video-list .card-box .v-card:nth-child(2n) {\r\n	/*background-color: rebeccapurple;*/\r\n	margin-left: calc(var(--pd-width) / 2);\r\n}\r\n';
  const artPlayerCSS = ".artplayer-container {\r\n	--bili-color: #f25d8e;\r\n}\r\n.artplayer-container {\r\n	width: 100vw;\r\n	height: 35vh;\r\n}\r\n#artplayer {\r\n	width: 100%;\r\n	height: 100%;\r\n}\r\n.art-video-player {\r\n	width: 100% !important;\r\n}\r\n/* 播放时隐藏进度条 */\r\n.art-hide-cursor .art-progress {\r\n	display: none !important;\r\n}\r\n/* 大会员画质 */\r\n.art-player-quality-badge-bigvip {\r\n	border-radius: 8px;\r\n	-webkit-box-sizing: border-box;\r\n	box-sizing: border-box;\r\n	display: block;\r\n	padding: 2px 5px;\r\n	background-color: var(--bili-color);\r\n	color: #fff;\r\n	margin-left: 16px;\r\n}\r\n/* 选中的清晰度中如果有大会员文字，隐藏 */\r\n.art-selector-value .art-player-quality-badge-bigvip {\r\n	display: none !important;\r\n}\r\n/* 不知道为什么背景模糊了 */\r\n.art-video-player.art-backdrop .art-settings {\r\n	backdrop-filter: unset !important;\r\n}\r\n/* 竖屏且宽度小于550px */\r\n@media (max-width: 550px) and (orientation: portrait) {\r\n	/* 隐藏 清晰度选择 */\r\n	.art-control.art-control-quality,\r\n	/* 隐藏 画质选择按钮 */\r\n	.art-control.art-control-quality,\r\n	/* 隐藏 弹幕设置按钮 */\r\n	.artplayer-plugin-danmuku .apd-config ,\r\n    /* 隐藏 弹幕输入框 */\r\n	.artplayer-plugin-danmuku .apd-emitter {\r\n		display: none !important;\r\n	}\r\n	/* 弹幕库靠右对齐 */\r\n	.artplayer-plugin-danmuku {\r\n		justify-content: right;\r\n	}\r\n}\r\n/* 横屏 */\r\n@media (orientation: landscape) {\r\n	/* 限制弹幕输入框的最大宽度 */\r\n	.artplayer-plugin-danmuku .apd-emitter {\r\n		max-width: 260px;\r\n	}\r\n}\r\n\r\n/* 插件-在线观看人数  */\r\n.art-layer-top-wrap {\r\n	--layer-top-wrap-follow-text-font-size: 0.8em;\r\n	--layer-top-wrap-follow-icon-size: 1em;\r\n	position: absolute;\r\n	top: 0px;\r\n	right: 0px;\r\n	color: #fff;\r\n	display: -webkit-box;\r\n	display: -ms-flexbox;\r\n	display: flex;\r\n	left: 0;\r\n	-webkit-transition: all 0.2s ease-in-out;\r\n	transition: all 0.2s ease-in-out;\r\n	width: 100%;\r\n	background: rgba(0, 0, 0, 0.8);\r\n	padding: calc(var(--art-padding));\r\n	z-index: 60;\r\n}\r\n.art-hide-cursor .art-layer-top-wrap {\r\n	display: none;\r\n}\r\n.art-layer-top-wrap .art-player-top-wrap {\r\n}\r\n.art-layer-top-wrap .art-player-top-title-text {\r\n}\r\n/* 下面的当前在线观看人数 */\r\n.art-layer-top-wrap .art-player-top-follow {\r\n	margin-top: var(--art-padding);\r\n	gap: var(--layer-top-wrap-follow-text-font-size);\r\n	font-size: var(--layer-top-wrap-follow-text-font-size);\r\n	display: flex;\r\n	align-items: center;\r\n	position: absolute;\r\n}\r\n.art-layer-top-wrap .art-player-top-follow .art-player-top-follow-icon {\r\n	width: var(--layer-top-wrap-follow-icon-size);\r\n	height: var(--layer-top-wrap-follow-icon-size);\r\n}\r\n.art-layer-top-wrap .art-player-top-follow-text {\r\n	text-wrap: nowrap;\r\n}\r\n/* 插件-在线观看人数  */\r\n";
  const BilibiliOpenApp = {
    getUrl($ele) {
      if ($ele == null) {
        return;
      }
      return $ele.getAttribute("universallink");
    },
    /**
     * 直接跳转Url
     * @param event
     */
    jumpToUrl(event) {
      let $click = event.target;
      let $biliOpenApp = $click.querySelector("bili-open-app");
      if ($biliOpenApp) {
        let url = BilibiliOpenApp.getUrl($biliOpenApp);
        if (url) {
          BilibiliUtils.goToUrl(url);
        } else {
          Qmsg.error("获取bili-open-app的Url失败");
          log.error("获取bili-open-app的Url失败");
        }
      } else {
        Qmsg.error("未获取到<bili-open-app>元素");
        log.error("未获取到<bili-open-app>元素");
      }
    }
  };
  const BilibiliLogUtils = {
    /**
     * 过滤searchParam的敏感数据
     */
    filteringSensitiveSearchParamData(data2) {
      const sensitiveData = utils.assign({}, data2, true);
      Reflect.deleteProperty(sensitiveData, "access_key");
      Reflect.deleteProperty(sensitiveData, "access_token");
      return sensitiveData;
    },
    /**
     * 请求失败的信息弹窗
     */
    failToast(data2) {
      log.error(data2);
      alert(JSON.stringify(data2, null, 4));
    }
  };
  const BilibiliBangumiApi = {
    /**
     * 轮询获取番剧播放地址
     */
    async getPlayUrl(option) {
      let searchParamsData = {
        avid: "",
        cid: "",
        ep_id: "",
        // 8K 超高清
        qn: 127,
        /** 固定值 */
        fnver: 0,
        // dash且需求 av1 编码且需求 8K 分辨率
        fnval: 16 | 1024 | 2048,
        // mp4格式
        // fnval: 1,
        /** 是否允许4K视频 */
        fourk: 1
      };
      searchParamsData = utils.assign(searchParamsData, option);
      let serverHostList = BilibiliApiProxy.getBangumiProxyHost();
      log.info(`番剧播放地址请求数据`);
      let failReponseJSON = [];
      let result = void 0;
      const urlPath = "/pgc/player/web/playurl";
      log.info(`请求路径：${urlPath}`);
      for (let index = 0; index < serverHostList.length; index++) {
        const serverHostInfo = serverHostList[index];
        const serverHost = serverHostInfo.host;
        const proxyServerSearchParamsData = {};
        if (serverHost !== BilibiliApiConfig.web_host) {
          utils.assign(
            proxyServerSearchParamsData,
            BilibiliApiProxy.getBangumiProxySearchParam({
              area: serverHostInfo.area
            }),
            true
          );
          log.info(`代理服务器数据: ${JSON.stringify(serverHostInfo)}`);
          log.info(
            `代理服务器请求参数：${JSON.stringify(
            BilibiliLogUtils.filteringSensitiveSearchParamData(
              proxyServerSearchParamsData
            )
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
            Referer: "https://www.bilibili.com/"
          }
        });
        if (!getResponse.status) {
          log.error(`代理服务器：${serverHost} 请求失败`);
          continue;
        }
        let responseData = utils.toJSON(getResponse.data.responseText);
        responseData.result;
        if (!BilibiliResponseCheck.isWebApiSuccess(responseData) || BilibiliResponseCheck.isAreaLimit(responseData)) {
          log.error(
            `请求失败，当前代理服务器：${serverHost} ${JSON.stringify(
            responseData
          )}`
          );
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
    /**
     * 获取番剧播放地址-html5，获取的是mp4的
     */
    async getPlayUrlHTML5(option) {
      let searchParamsData = {
        avid: "",
        cid: "",
        ep_id: "",
        bsource: ""
        // qn: 116,
        // fnver: 0,
        // fnval: 1,
        // fourk: 1,
        // from_client: "BROWSER",
        // drm_tech_type: 2,
      };
      searchParamsData = utils.assign(searchParamsData, option);
      log.info(`（原版api）番剧播放地址请求数据`);
      const urlPath = "/pgc/player/web/playurl/html5";
      let url = `https://${BilibiliApiConfig.web_host}${urlPath}?${utils.toSearchParamsStr(searchParamsData)}`;
      let getResponse = await httpx.get(url, {
        responseType: "json",
        fetch: true,
        headers: {
          Host: "www.bilibili.com",
          Referer: "https://www.bilibili.com"
        }
      });
      if (!getResponse.status) {
        return;
      }
      let responseData = utils.toJSON(getResponse.data.responseText);
      if (!BilibiliResponseCheck.isWebApiSuccess(responseData)) {
        BilibiliLogUtils.failToast(responseData);
        return;
      }
      let responseResult = responseData.result;
      return responseResult;
    }
  };
  const M4SAudio = {
    art: null,
    audio: new Audio(),
    userEvent: {
      onRestart: void 0
    },
    events: {
      play: () => {
        M4SAudio.syncAudioProgress();
        M4SAudio.syncAudioVolumn();
        M4SAudio.audio.play();
        M4SAudio.syncAudioProgress();
      },
      seek: (currentTime) => {
        M4SAudio.syncAudioProgress();
      },
      pause: () => {
        M4SAudio.audio.pause();
        M4SAudio.syncAudioProgress();
      },
      restart: (url) => {
        if (typeof M4SAudio.userEvent.onRestart === "function") {
          let newAudioUrl = M4SAudio.userEvent.onRestart(url);
          if (typeof newAudioUrl === "string") {
            M4SAudio.audio.src = newAudioUrl;
          }
        }
        M4SAudio.syncAudioProgress();
      },
      muted: (state) => {
        M4SAudio.audio.muted = state;
        M4SAudio.syncAudioVolumn();
      },
      destroy: () => {
        M4SAudio.audio.pause();
      },
      error: (error, reconnectTime) => {
        M4SAudio.audio.pause();
      },
      "video:ended": () => {
        M4SAudio.audio.pause();
        M4SAudio.syncAudioProgress();
      },
      "video:ratechange": () => {
        M4SAudio.audio.playbackRate = M4SAudio.art.playbackRate;
      },
      "video:waiting": () => {
        M4SAudio.audio.pause();
        M4SAudio.syncAudioProgress();
      },
      "video:playing": () => {
        M4SAudio.syncAudioProgress();
        M4SAudio.audio.play();
        M4SAudio.syncAudioProgress();
      },
      "video:volumechange": () => {
        M4SAudio.syncAudioVolumn();
        M4SAudio.syncAudioProgress();
      }
    },
    /**
     * 更新
     * @param url
     */
    update(url) {
      this.unbind();
      if (utils.isNull(url)) {
        this.audio.src = "";
      } else {
        this.audio.src = url;
        this.bind();
      }
    },
    /**
     * 音频同步视频进度
     */
    syncAudioProgress() {
      this.audio.currentTime = this.art.currentTime;
    },
    /**
     * 同步音量
     */
    syncAudioVolumn() {
      this.audio.volume = this.art.volume;
    },
    /**
     * 绑定事件
     */
    bind() {
      Object.keys(this.events).forEach((eventName) => {
        this.art.on(
          eventName,
          this.events[eventName]
        );
      });
    },
    /**
     * 取消绑定事件
     */
    unbind() {
      Object.keys(this.events).forEach((eventName) => {
        this.art.off(
          eventName,
          this.events[eventName]
        );
      });
    }
  };
  const artplayerPluginM4SAudioSupport = (option) => {
    return (art) => {
      M4SAudio.art = art;
      log.info("加载番剧音频：" + option.url);
      if (typeof option.onRestart === "function") {
        M4SAudio.userEvent.onRestart = option.onRestart;
      }
      M4SAudio.update(option.url);
      return {
        name: "plugin-bilibili-m4sAudio",
        /** 主动更新音频 */
        update(url) {
          M4SAudio.update(url);
          M4SAudio.syncAudioVolumn();
          M4SAudio.syncAudioProgress();
        }
      };
    };
  };
  const chinese = {
    S: "万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲乾尽脏拼冲里",
    T: "萬與醜專業叢東絲丟兩嚴喪個丬豐臨爲麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價衆優夥會傴傘偉傳傷倀倫傖僞佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農冢馮沖決況凍淨淒涼凌減湊凜幾鳳鳧憑凱擊凼鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳勐勩勻匭匱區醫華協單賣盧滷臥衛卻巹廠廳歷厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號嘆嘰籲後嚇呂嗎唚噸聽啓吳嘸囈嘔嚦唄員咼嗆嗚詠咔嚨嚀噝吒咴鹹哌響啞噠嘵嗶噦譁噲嚌噥喲嘜嗊嘮啢嗩唣喚唿嘖嗇囀齧囉嘽嘯噴嘍嚳囁呵噯噓嚶囑嚕噼囂嚯團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壠壚壘墾垧堊墊埡墶壋塏堖塒壎堝埝垵塹墮壪牆壯聲殼壺壼處備復夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗嬀姍姜婁婭嬈嬌孌娛媧嫺嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屓屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崬巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔嵛嶁嵴巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠御憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣愍慍憤憒願懾憖憷懣懶懍戇戔戲戧戰戩戶扎撲扦執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據捻擄摑擲撣摻摜揸攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖札術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒桊椏橈楨檔榿橋樺檜槳樁夢檮棶檢櫺槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞檐檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳匯漢污湯洶沓溝沒灃漚瀝淪滄渢潙滬沵濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗涌濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣溼潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦漤瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煅煳熘愛爺牘犛牽犧犢犟狀獷獁猶狽狍獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽珉珏琺瓏璫琿璡璉瑣瓊瑤璦璇瓔瓚甕甌電畫暢畲疇癤療瘧癘瘍癧瘡瘋皰痾癰痙癢瘂癆瘓癇癡癉瘮瘞瘻癟癱癮癭癩癬癲癯皚皺皸盞鹽監蓋盜盤瞘眥矓着睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜硅碩硤磽磑礄確礆礙磧磣鹼碹磙禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌籤簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糹糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺紲紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽鞝緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒繮繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚肷腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艹藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞莜萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪藁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襉褸襤襁襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖谷豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗贊贇贈贍贏贛赬趙趕趨趲躉躍蹌跖躒踐躂蹺蹕躚躋踊躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郄郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏鉅鑑鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷鉢鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐗銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦杴錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閒閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉鞴韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飈飛饗饜飣飢飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鮎鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鮎鯛鯨鰺鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鰲鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鷽鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鵾鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜志制諮只裏系範鬆沒嚐嚐鬧面準鍾別閒乾盡髒拼衝裡"
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
      const isChinese = code > 13312 && code < 40899 || code > 63744 && code < 64106;
      if (!isChinese) {
        result += letter;
        continue;
      }
      index = src.indexOf(letter);
      if (index !== -1)
        result += des.charAt(index);
      else
        result += letter;
    }
    return result;
  };
  const Chinese = {
    s2t: (str, custom) => {
      if (custom) {
        for (let s = 0; s < custom.length; s++) {
          if (str.includes(custom[s].src))
            str = str.replaceAll(custom[s].src, custom[s].des);
        }
        return tranStr(str, true);
      } else {
        return tranStr(str, true);
      }
    },
    t2s: (str, custom) => {
      if (custom) {
        for (let s = 0; s < custom.length; s++) {
          if (str.includes(custom[s].src))
            str = str.replaceAll(custom[s].src, custom[s].des);
        }
        return tranStr(str, false);
      } else {
        return tranStr(str, false);
      }
    }
  };
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
          des: this.des[index]
        });
      }
      for (let index = 0; index < this.more_src.length; index++) {
        this._custom_str.push({
          src: this.more_src[index],
          des: this.more_des[index]
        });
      }
    },
    getCustomStr() {
      return this._custom_str;
    }
  };
  const SubTitleEvent = {
    /**
     * 重置
     */
    reset() {
      this.unbind();
    },
    /**
     * 绑定事件
     */
    bind() {
      SubTitle.art.on("video:timeupdate", this.event.bind(this));
    },
    /**
     * 取消绑定事件
     */
    unbind() {
      SubTitle.clearSubTitle();
      SubTitle.art.off("video:timeupdate", this.event);
    },
    /**
     * 事件
     */
    event() {
      var _a2;
      let currentTime = SubTitle.art.currentTime;
      let currentSubTitleData = (_a2 = SubTitleData.allSubTitleInfo[SubTitleData.currentSelectIndex]) == null ? void 0 : _a2.data;
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
      let $allSubTitleLine = Array.from(
        SubTitle.$el.$subtitle.querySelectorAll(".art-subtitle-line")
      );
      for (let index = 0; index < $allSubTitleLine.length; index++) {
        const $oldSubtitleLine = $allSubTitleLine[index];
        const { from: oldFrom, to: oldTo } = Reflect.get(
          $oldSubtitleLine,
          "data-subtitle-line-info"
        );
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
    }
  };
  const SubTitleSettingLayer = {
    config: {
      NAME: "setting-bilibili-cc-subtitle"
    },
    /**
     * 重置菜单
     */
    reset() {
      let oldSetting = SubTitle.art.setting.option.find(
        (item) => item.name === this.config.NAME
      );
      if (oldSetting) {
        SubTitle.art.setting.remove(this.config.NAME);
      }
    },
    /**
     * 获取默认的layer配置项
     */
    getDefaultSettingOption: () => {
      return {
        name: SubTitleSettingLayer.config.NAME,
        width: 200,
        html: "字幕",
        tooltip: SubTitleSettingLayer.getDefaultSelector().html,
        icon: '<img width="22" heigth="22" src="https://artplayer.org/assets/img/subtitle.svg">',
        selector: [],
        onSelect: function(item) {
          if (typeof item.callback === "function") {
            item.callback();
          }
          return item.html;
        }
      };
    },
    /**
     * 获取默认的selector配置项
     */
    getDefaultSelector: () => {
      return {
        default: true,
        html: "无",
        callback() {
          SubTitleEvent.unbind();
        }
      };
    }
  };
  const SubTitleData = {
    /**
     * 所有的字幕信息
     */
    allSubTitleInfo: [],
    /**
     * 当前选择的字幕下标
     */
    currentSelectIndex: -1,
    /**
     * 重置所有data数据
     */
    reset() {
      this.allSubTitleInfo = [];
      this.currentSelectIndex = -1;
    }
  };
  const SubTitle = {
    art: null,
    $el: {
      /**
       * 字幕容器
       */
      $subtitle: null
    },
    /**
     * 更新字幕信息
     * @param option
     */
    async update(option) {
      var _a2;
      SubTitleData.reset();
      SubTitleSettingLayer.reset();
      SubTitleEvent.reset();
      const settingOption = SubTitleSettingLayer.getDefaultSettingOption();
      const defaultSelector = SubTitleSettingLayer.getDefaultSelector();
      (_a2 = settingOption.selector) == null ? void 0 : _a2.push(defaultSelector);
      this.art.setting.add(settingOption);
      this.$el.$subtitle = this.art.template.$subtitle;
      const videoInfoResponse = await httpx.get(
        `https://${BilibiliApiConfig.web_host}/x/player/v2?cid=${option.cid}&aid=${option.aid}&ep_id=${option.ep_id}`,
        {
          fetch: true,
          allowInterceptConfig: false,
          responseType: "json",
          headers: {
            Host: "www.bilibili.com",
            Referer: "https://www.bilibili.com"
          }
        }
      );
      if (!videoInfoResponse.status) {
        console.error(
          "[artplayer-plugin-bilibiliCCSubTitle]：获取视频信息失败",
          videoInfoResponse
        );
        return;
      }
      console.log(
        "[artplayer-plugin-bilibiliCCSubTitle]：视频字幕信息",
        videoInfoResponse
      );
      const videoInfoResultJSON = utils.toJSON(
        videoInfoResponse.data.responseText
      );
      if (!BilibiliResponseCheck.isWebApiSuccess(videoInfoResultJSON)) {
        console.error(
          "[artplayer-plugin-bilibiliCCSubTitle]：获取视频信息失败",
          videoInfoResultJSON
        );
        return;
      }
      let subTitleUrlInfoList = videoInfoResultJSON["data"]["subtitle"]["subtitles"];
      if (!subTitleUrlInfoList.length) {
        console.warn(
          "[artplayer-plugin-bilibiliCCSubTitle]：获取字幕链接列表为空",
          videoInfoResultJSON
        );
        return;
      }
      for (let index = 0; index < subTitleUrlInfoList.length; index++) {
        const subTitleUrlInfo = subTitleUrlInfoList[index];
        const subTitleInfoResponse = await httpx.get(
          subTitleUrlInfo.subtitle_url,
          {
            responseType: "json",
            allowInterceptConfig: false,
            fetch: false,
            headers: {
              // Host: "www.bilibili.com",
              // Referer: "https://www.bilibili.com",
              "User-Agent": utils.getRandomPCUA()
            }
          }
        );
        if (subTitleInfoResponse.status) {
          const subTitleInfoJSON = utils.toJSON(
            subTitleInfoResponse.data.responseText
          );
          const subTitleInfo = subTitleInfoJSON["body"];
          let currentIndex = SubTitleData.allSubTitleInfo.length;
          SubTitleData.allSubTitleInfo.push({
            name: subTitleUrlInfo.lan_doc,
            data: subTitleInfo,
            lan: subTitleUrlInfo.lan
          });
          settingOption.selector.push({
            html: subTitleUrlInfo.lan_doc,
            callback() {
              SubTitleData.currentSelectIndex = currentIndex;
              SubTitleEvent.unbind();
              SubTitleEvent.bind();
            }
          });
        }
      }
      PopsPanel.execMenu("bili-bangumi-generateSimpleChineseSubtitle", () => {
        let subTitleHant = SubTitleData.allSubTitleInfo.find((item) => {
          return item.lan === "zh-Hant" || item.name.includes("繁体");
        });
        if (!subTitleHant) {
          return;
        }
        let simpleChineseSubtitleData = [];
        subTitleHant.data.forEach((item) => {
          const { content, ...otherData } = item;
          const translateContent = Chinese.t2s(
            content,
            SubTitleCustomStr.getCustomStr()
          );
          simpleChineseSubtitleData.push({
            content: translateContent,
            ...otherData
          });
        });
        let subTitleName = "简体（自动生成）";
        SubTitleData.allSubTitleInfo.push({
          name: subTitleName,
          lan: "zh-CN",
          data: simpleChineseSubtitleData
        });
        let currentIndex = SubTitleData.allSubTitleInfo.length - 1;
        settingOption.selector.push({
          html: subTitleName,
          callback() {
            SubTitleData.currentSelectIndex = currentIndex;
            SubTitleEvent.unbind();
            SubTitleEvent.bind();
          }
        });
      });
      console.log(
        "[artplayer-plugin-bilibiliCCSubTitle]：加载视频CC字幕信息",
        SubTitleData.allSubTitleInfo
      );
      this.art.setting.update(settingOption);
    },
    /**
     * 清空字幕
     */
    clearSubTitle() {
      if (this.$el.$subtitle) {
        this.$el.$subtitle.innerHTML = "";
      }
    },
    /**
     * 更新artplayer实例
     * @param art
     */
    updateArtPlayer(art) {
      this.art = art;
    }
  };
  function artplayerPluginBilibiliCCSubTitle(option) {
    return async (art) => {
      SubTitleCustomStr.generteCustomStr();
      SubTitle.updateArtPlayer(art);
      SubTitle.update(option);
      return {
        name: "plugin-bilibili-cc-subtitle",
        /** 更新视频时调用，更新字幕 */
        update(option2) {
          SubTitle.update(option2);
        }
      };
    };
  }
  const TopToolBarUtils = {
    show($el) {
      $el.style.display = "";
    },
    hide($el) {
      $el.style.display = "none";
    }
  };
  const TopToolBarEvent = {
    events: {
      control: (state) => {
        if (!state) {
          return;
        }
        TopToolBar.updateOnlineTotal(TopToolBar.option);
      }
    },
    /**
     * 绑定事件
     */
    bind() {
      Object.keys(this.events).forEach((eventName) => {
        TopToolBar.art.on(
          eventName,
          this.events[eventName]
        );
      });
    },
    /**
     * 取消绑定事件
     */
    unbind() {
      Object.keys(this.events).forEach((eventName) => {
        TopToolBar.art.off(
          eventName,
          this.events[eventName]
        );
      });
    }
  };
  const TopToolBar = {
    art: null,
    $el: {
      /** 容器 */
      $topWrap: null,
      $topTitle: null,
      /** 视频标题 */
      $topTitleText: null,
      /** 视频标题的下面的容器 */
      $topTitleFollow: null,
      /** 视频标题下面的在线观看人数 */
      $topTitleFollowText: null,
      /** 右侧容器 */
      $topRight: null,
      /** 右侧容器的下面的容器 */
      $topRightFollow: null
    },
    option: {},
    /**
     * 初始化
     */
    init(option) {
      this.option = null;
      this.option = option;
      this.art.layers.add({
        name: "top-wrap",
        html: (
          /*html*/
          `
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
            `
        ),
        mounted: async function($topWrap) {
          TopToolBar.$el.$topWrap = $topWrap;
          TopToolBar.$el.$topTitle = $topWrap.querySelector(
            ".art-player-top-title"
          );
          TopToolBar.$el.$topTitleText = $topWrap.querySelector(
            ".art-player-top-title-text"
          );
          TopToolBar.$el.$topTitleFollow = $topWrap.querySelector(
            ".art-player-top-follow"
          );
          TopToolBar.$el.$topTitleFollowText = $topWrap.querySelector(
            ".art-player-top-follow-text"
          );
          TopToolBar.$el.$topRight = $topWrap.querySelector(
            ".art-player-top-right"
          );
          TopToolBar.$el.$topRightFollow = $topWrap.querySelector(
            ".art-player-top-right-follow"
          );
          TopToolBarUtils.hide(TopToolBar.$el.$topTitleFollow);
          TopToolBar.update(option);
          TopToolBarEvent.bind();
        }
      });
    },
    /**
     * 更新配置
     */
    update(option) {
      TopToolBar.updateWrap(option);
      TopToolBar.updateTitle(option);
      TopToolBar.updateOnlineTotal(option);
      TopToolBar.updateRight(option);
    },
    /**
     * 更新标题
     * @param option
     * @returns
     */
    updateTitle(option) {
      console.log(
        `[artplayer-plugin-TopToolBar]: 更新标题 ==> ${JSON.stringify(option)}`
      );
      if (typeof option.title === "string") {
        TopToolBar.$el.$topTitleText.innerText = option.title;
      }
      if (option.showTitle) {
        TopToolBarUtils.show(TopToolBar.$el.$topTitle);
      } else {
        TopToolBarUtils.hide(TopToolBar.$el.$topTitle);
      }
    },
    /**
     * 更新在线观看人数
     */
    async updateOnlineTotal(option) {
      console.log(
        `[artplayer-plugin-TopToolBar]: 更新在线观看人数 ==> ${JSON.stringify(
        option
      )}`
      );
      let onlineTotalInfo = await BilibiliVideoApi.onlineTotal({
        aid: option.aid,
        bvid: option.bvid,
        cid: option.cid
      });
      if (!onlineTotalInfo) {
        return;
      }
      TopToolBar.$el.$topTitleFollowText.innerText = `${onlineTotalInfo["total"] || onlineTotalInfo["count"] || 0}人正在看`;
      if (option.showOnlineTotal) {
        TopToolBarUtils.show(TopToolBar.$el.$topTitleFollow);
      } else {
        TopToolBarUtils.hide(TopToolBar.$el.$topTitleFollow);
      }
      console.log(
        `[artplayer-plugin-TopToolBar]: 更新在线观看人数，请求的数据 ==> ${JSON.stringify(
        onlineTotalInfo
      )}`
      );
    },
    /**
     * 更新视图
     * @param option
     */
    updateWrap(option) {
      console.log(
        `[artplayer-plugin-TopToolBar]: 更新总视图 ==> ${JSON.stringify(option)}`
      );
      if (option.showWrap) {
        TopToolBarUtils.show(this.$el.$topWrap);
      } else {
        TopToolBarUtils.hide(this.$el.$topWrap);
      }
    },
    /**
     * 更新右侧视图
     */
    updateRight(option) {
      console.log(
        `[artplayer-plugin-TopToolBar]: 更新右侧视图 ==> ${JSON.stringify(
        option
      )}`
      );
      if (option.showRight) {
        TopToolBarUtils.show(this.$el.$topRight);
      } else {
        TopToolBarUtils.hide(this.$el.$topRight);
      }
      if (option.showRightFollow) {
        TopToolBarUtils.show(this.$el.$topRightFollow);
      } else {
        TopToolBarUtils.hide(this.$el.$topRightFollow);
      }
    }
  };
  const artplayerPluginTopToolBar = (option) => {
    return (art) => {
      TopToolBar.art = art;
      TopToolBar.init(option);
      return {
        name: "plugin-bilibili-topToolBar",
        update(option2) {
          TopToolBar.update(option2);
        },
        updateWrap(option2) {
          utils.assign(TopToolBar.option, option2);
          TopToolBar.updateWrap(option2);
        },
        updateTitle(option2) {
          utils.assign(TopToolBar.option, option2);
          TopToolBar.updateTitle(option2);
        },
        updateOnlineTotal(option2) {
          utils.assign(TopToolBar.option, option2);
          TopToolBar.updateOnlineTotal(option2);
        },
        updateRight(option2) {
          utils.assign(TopToolBar.option, option2);
          TopToolBar.updateRight(option2);
        }
      };
    };
  };
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
    fullscreenWebOff: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_177"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_177)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -18,-20 -18,-20 C-19.049999237060547,-20 -19.920000076293945,-19.18000030517578 -19.989999771118164,-18.149999618530273 C-19.989999771118164,-18.149999618530273 -20,-18 -20,-18 C-20,-18 -20,-12 -20,-12 C-20,-12 -26,-12 -26,-12 C-27.049999237060547,-12 -27.920000076293945,-11.180000305175781 -27.989999771118164,-10.149999618530273 C-27.989999771118164,-10.149999618530273 -28,-10 -28,-10 C-28,-10 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -14,-4 -14,-4 C-12.949999809265137,-4 -12.079999923706055,-4.820000171661377 -12.010000228881836,-5.849999904632568 C-12.010000228881836,-5.849999904632568 -12,-6 -12,-6 C-12,-6 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M18,-20 C18,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-6 12,-6 C12,-4.949999809265137 12.819999694824219,-4.079999923706055 13.850000381469727,-4.010000228881836 C13.850000381469727,-4.010000228881836 14,-4 14,-4 C14,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-10 28,-10 C28,-11.050000190734863 27.18000030517578,-11.920000076293945 26.149999618530273,-11.989999771118164 C26.149999618530273,-11.989999771118164 26,-12 26,-12 C26,-12 20,-12 20,-12 C20,-12 20,-18 20,-18 C20,-19.049999237060547 19.18000030517578,-19.920000076293945 18.149999618530273,-19.989999771118164 C18.149999618530273,-19.989999771118164 18,-20 18,-20z M-14,4 C-14,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,10 -28,10 C-28,11.050000190734863 -27.18000030517578,11.920000076293945 -26.149999618530273,11.989999771118164 C-26.149999618530273,11.989999771118164 -26,12 -26,12 C-26,12 -20,12 -20,12 C-20,12 -20,18 -20,18 C-20,19.049999237060547 -19.18000030517578,19.920000076293945 -18.149999618530273,19.989999771118164 C-18.149999618530273,19.989999771118164 -18,20 -18,20 C-18,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,6 -12,6 C-12,4.949999809265137 -12.819999694824219,4.079999923706055 -13.850000381469727,4.010000228881836 C-13.850000381469727,4.010000228881836 -14,4 -14,4z M26,4 C26,4 14,4 14,4 C12.949999809265137,4 12.079999923706055,4.820000171661377 12.010000228881836,5.849999904632568 C12.010000228881836,5.849999904632568 12,6 12,6 C12,6 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 18,20 18,20 C19.049999237060547,20 19.920000076293945,19.18000030517578 19.989999771118164,18.149999618530273 C19.989999771118164,18.149999618530273 20,18 20,18 C20,18 20,12 20,12 C20,12 26,12 26,12 C27.049999237060547,12 27.920000076293945,11.180000305175781 27.989999771118164,10.149999618530273 C27.989999771118164,10.149999618530273 28,10 28,10 C28,10 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>`
  };
  const GenerateArtPlayerEPSelectSetting = (option) => {
    return {
      name: "bili-video-choose-ep",
      icon: `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2295" width="24" height="24"><path d="M983.745542 312.673133a510.516437 510.516437 0 0 0-109.673817-162.745211A510.516437 510.516437 0 0 0 511.999823 0.000353 510.516437 510.516437 0 0 0 149.927922 149.927922 510.516437 510.516437 0 0 0 0.000353 511.999823a510.516437 510.516437 0 0 0 149.927569 362.071902A510.516437 510.516437 0 0 0 511.999823 1023.999294a510.516437 510.516437 0 0 0 362.071902-149.927569A510.516437 510.516437 0 0 0 1023.999294 511.999823c0-69.137584-13.488538-136.121238-40.253752-199.32669z m-62.852348 372.029408a443.779955 443.779955 0 0 1-95.05535 140.994061 441.908508 441.908508 0 0 1-313.73209 129.941935c-59.886283 0-118.042361-11.758333-172.667407-34.851274a443.779955 443.779955 0 0 1-141.029372-95.090661 441.908508 441.908508 0 0 1-129.941934-313.696779c0-59.886283 11.758333-118.042361 34.851274-172.667407a443.779955 443.779955 0 0 1 95.09066-141.029371 441.908508 441.908508 0 0 1 313.696779-129.941935c59.886283 0 118.077671 11.758333 172.667408 34.851274a443.779955 443.779955 0 0 1 141.064682 95.090661 441.908508 441.908508 0 0 1 129.941934 313.696778c0 59.886283-11.793643 118.042361-34.851274 172.667408zM388.413744 706.206519l317.792775-211.86185-317.792775-211.861849v423.723699z" p-id="2296"></path></svg>`,
      html: "选集",
      // icon: `<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>`,
      selector: option.epList.map((item) => {
        return {
          html: GenerateVideoTitle(item.title, item.long_title),
          default: item.ep_id === option.ep_id && item.aid === option.aid && item.cid === option.cid,
          ep_info: item
        };
      }),
      onSelect: function(item) {
        let select_EP_Info = item.ep_info;
        BlibiliBangumiPlayer.updateArtPlayerVideoInfo(
          select_EP_Info,
          option.epList
        );
        return item.html;
      }
    };
  };
  const BilibiliArtPlayer = {
    art: null,
    flv: null,
    /** 当前的配置项 */
    currentOption: null,
    /**
     * 重置环境变量
     */
    resetEnv() {
      this.art = null;
      this.flv = null;
      this.currentOption = null;
    },
    /**
     * flv播放
     *
     * 切换url时自动调用
     * @param videoInfoList 可能多个，可能只有一个
     */
    flvPlayer() {
      var _a2, _b;
      if (this.currentOption == null) {
        console.error("flv获取当前配置为空");
        return;
      }
      let flvInfoList = this.currentOption.flvInfo;
      if (this.flv != null || flvInfoList == null) {
        (_a2 = this.flv) == null ? void 0 : _a2.detachMediaElement();
        (_b = this.flv) == null ? void 0 : _b.destroy();
      }
      let currentOption = this.currentOption;
      console.log("加载视频", flvInfoList);
      if (flvInfoList.length > 1) {
        this.flv = flvjs.createPlayer(
          {
            type: "flv",
            filesize: currentOption.flvTotalSize,
            duration: currentOption.flvTotalDuration,
            segments: flvInfoList.map((item) => {
              return {
                url: item.url,
                duration: item.duration,
                filesize: item.size
              };
            })
          },
          {
            stashInitialSize: 1024 * 100
          }
        );
      } else {
        this.flv = flvjs.createPlayer(
          {
            type: "flv",
            url: flvInfoList[0].url
          },
          {
            stashInitialSize: 1024 * 100
          }
        );
      }
      this.flv.attachMediaElement(this.art.video);
      this.flv.load();
    },
    /**
     * 初始化播放器
     * @param option
     */
    async init(option) {
      this.resetEnv();
      this.currentOption = option;
      const localArtDanmakuOption_KEY = "artplayer-bangumi-danmaku-option";
      const defaultDanmakuOption = {
        speed: 5,
        margin: [10, "75%"],
        opacity: 1,
        modes: [0, 1, 2],
        fontSize: 18,
        antiOverlap: true,
        synchronousPlayback: false,
        visible: true
      };
      const localArtDanmakuOption = utils.assign(
        defaultDanmakuOption,
        _GM_getValue(
          localArtDanmakuOption_KEY,
          {}
        )
      );
      const artOption = {
        /** 容器 */
        container: option.container,
        /** 链接 */
        url: "",
        // poster: 'https://artplayer.org/assets/sample/poster.jpg',
        /** 默认音量 */
        volume: 1,
        /** 是否是直播 */
        isLive: false,
        /** 是否静音 */
        muted: false,
        /** 是否自动播放 */
        autoplay: false,
        /** 是否显示视频画中画按钮 */
        pip: false,
        /** 播放器是否自动调整大小 */
        autoSize: true,
        /** 播放器是否自动运行迷你模式 */
        autoMini: false,
        /** 是否显示截图按钮 */
        screenshot: false,
        /** 是否显示视频设置按钮 */
        setting: true,
        /** 是否循环播放 */
        loop: false,
        /** 是否显示视频翻转按钮 */
        flip: true,
        /** 是否显示视频播放速率按钮 */
        playbackRate: true,
        /** 是否显示视频宽高比按钮 */
        aspectRatio: true,
        /** 是否显示视频窗口全屏按钮 */
        fullscreen: true,
        /** 是否显示视频网页全屏按钮 */
        fullscreenWeb: true,
        /** 是否启用播放器字幕偏移 */
        subtitleOffset: true,
        /** 是否启用播放器迷你进度条 */
        miniProgressBar: true,
        /** 保证页面只存在一个实例 */
        mutex: true,
        /** UI中是否使用背景 */
        backdrop: true,
        /** 移动端是否使用playsInline */
        playsInline: true,
        /** 是否使用自动播放 */
        autoPlayback: true,
        /** 是否使用airplay */
        airplay: true,
        /** 播放器颜色主题 */
        theme: "#23ade5",
        /** 播放器语言 */
        lang: navigator.language.toLowerCase(),
        /** 覆盖video属性 */
        moreVideoAttr: {
          crossOrigin: "anonymous"
        },
        /** 自定义设置列表 */
        settings: [
          // {
          // 	html: "音量",
          // 	icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="24" height="24" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_94"><rect width="88" height="88" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_96"><path d="M0,0 L88,0 L88,88 L0,88z"></path></clipPath></defs><g clip-path="url(#__lottie_element_94)"><g clip-path="url(#__lottie_element_96)" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g transform="matrix(0.9999997615814209,0,0,0.9999997615814209,28.000003814697266,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M15.5600004196167,-25.089000701904297 C15.850000381469727,-24.729000091552734 16,-24.288999557495117 16,-23.839000701904297 C16,-23.839000701904297 16,23.840999603271484 16,23.840999603271484 C16,24.94099998474121 15.100000381469727,25.840999603271484 14,25.840999603271484 C13.550000190734863,25.840999603271484 13.109999656677246,25.680999755859375 12.75,25.400999069213867 C12.75,25.400999069213867 -4,12.00100040435791 -4,12.00100040435791 C-4,12.00100040435791 -8,12.00100040435791 -8,12.00100040435791 C-12.420000076293945,12.00100040435791 -16,8.420999526977539 -16,4.000999927520752 C-16,4.000999927520752 -16,-3.999000072479248 -16,-3.999000072479248 C-16,-8.418999671936035 -12.420000076293945,-11.99899959564209 -8,-11.99899959564209 C-8,-11.99899959564209 -4,-11.99899959564209 -4,-11.99899959564209 C-4,-11.99899959564209 12.75,-25.39900016784668 12.75,-25.39900016784668 C13.609999656677246,-26.089000701904297 14.869999885559082,-25.948999404907227 15.5600004196167,-25.089000701904297z"></path></g></g><g style="display: none;" transform="matrix(1.0053564310073853,0,0,1.0053564310073853,56.00461959838867,44.0004997253418)" opacity="0.039782297805396355"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-4,-13.859000205993652 C0.7799999713897705,-11.08899974822998 4,-5.919000148773193 4,0.0010000000474974513 C4,5.921000003814697 0.7799999713897705,11.090999603271484 -4,13.861000061035156 C-4,13.861000061035156 -4,-13.859000205993652 -4,-13.859000205993652z"></path></g></g><g style="display: none;" transform="matrix(1.0126574039459229,0,0,1.0126574039459229,64.37825012207031,44.0057487487793)" opacity="0.017782484959038527"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-6.236000061035156,-28.895999908447266 C4.803999900817871,-23.615999221801758 11.984000205993652,-12.456000328063965 11.984000205993652,-0.006000000052154064 C11.984000205993652,12.454000473022461 4.794000148773193,23.624000549316406 -6.265999794006348,28.893999099731445 C-8.255999565124512,29.8439998626709 -10.645999908447266,29.003999710083008 -11.595999717712402,27.003999710083008 C-12.545999526977539,25.013999938964844 -11.696000099182129,22.624000549316406 -9.706000328063965,21.673999786376953 C-1.406000018119812,17.724000930786133 3.9839999675750732,9.343999862670898 3.9839999675750732,-0.006000000052154064 C3.9839999675750732,-9.345999717712402 -1.3960000276565552,-17.715999603271484 -9.675999641418457,-21.676000595092773 C-11.675999641418457,-22.625999450683594 -12.515999794006348,-25.016000747680664 -11.565999984741211,-27.006000518798828 C-10.616000175476074,-29.006000518798828 -8.22599983215332,-29.84600067138672 -6.236000061035156,-28.895999908447266z"></path></g></g><g style="display: none;" transform="matrix(1.000211238861084,0,0,1.000211238861084,56.002986907958984,44)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-4,-13.859000205993652 C0.7799999713897705,-11.08899974822998 4,-5.919000148773193 4,0.0010000000474974513 C4,5.921000003814697 0.7799999713897705,11.090999603271484 -4,13.861000061035156 C-4,13.861000061035156 -4,-13.859000205993652 -4,-13.859000205993652z"></path></g></g><g style="display: none;" transform="matrix(1.000205397605896,0,0,1.000205397605896,64.00399017333984,44.00699996948242)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-6.236000061035156,-28.895999908447266 C4.803999900817871,-23.615999221801758 11.984000205993652,-12.456000328063965 11.984000205993652,-0.006000000052154064 C11.984000205993652,12.454000473022461 4.794000148773193,23.624000549316406 -6.265999794006348,28.893999099731445 C-8.255999565124512,29.8439998626709 -10.645999908447266,29.003999710083008 -11.595999717712402,27.003999710083008 C-12.545999526977539,25.013999938964844 -11.696000099182129,22.624000549316406 -9.706000328063965,21.673999786376953 C-1.406000018119812,17.724000930786133 3.9839999675750732,9.343999862670898 3.9839999675750732,-0.006000000052154064 C3.9839999675750732,-9.345999717712402 -1.3960000276565552,-17.715999603271484 -9.675999641418457,-21.676000595092773 C-11.675999641418457,-22.625999450683594 -12.515999794006348,-25.016000747680664 -11.565999984741211,-27.006000518798828 C-10.616000175476074,-29.006000518798828 -8.22599983215332,-29.84600067138672 -6.236000061035156,-28.895999908447266z"></path></g></g><g transform="matrix(0.9999995231628418,0,0,0.9999995231628418,55.99999237060547,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-4,-13.859000205993652 C0.7799999713897705,-11.08899974822998 4,-5.919000148773193 4,0.0010000000474974513 C4,5.921000003814697 0.7799999713897705,11.090999603271484 -4,13.861000061035156 C-4,13.861000061035156 -4,-13.859000205993652 -4,-13.859000205993652z"></path></g></g><g transform="matrix(0.9999995231628418,0,0,0.9999995231628418,64.01399230957031,44.00699996948242)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-6.236000061035156,-28.895999908447266 C4.803999900817871,-23.615999221801758 11.984000205993652,-12.456000328063965 11.984000205993652,-0.006000000052154064 C11.984000205993652,12.454000473022461 4.794000148773193,23.624000549316406 -6.265999794006348,28.893999099731445 C-8.255999565124512,29.8439998626709 -10.645999908447266,29.003999710083008 -11.595999717712402,27.003999710083008 C-12.545999526977539,25.013999938964844 -11.696000099182129,22.624000549316406 -9.706000328063965,21.673999786376953 C-1.406000018119812,17.724000930786133 3.9839999675750732,9.343999862670898 3.9839999675750732,-0.006000000052154064 C3.9839999675750732,-9.345999717712402 -1.3960000276565552,-17.715999603271484 -9.675999641418457,-21.676000595092773 C-11.675999641418457,-22.625999450683594 -12.515999794006348,-25.016000747680664 -11.565999984741211,-27.006000518798828 C-10.616000175476074,-29.006000518798828 -8.22599983215332,-29.84600067138672 -6.236000061035156,-28.895999908447266z"></path></g></g></g></g></svg>`,
          // 	tooltip: volume.toString(),
          // 	range: [100, 0, 100, 1],
          // 	onChange: function (item, $dom, event) {
          // 		// 实际值在0~10之间且间隔为1
          // 		let selectValue = parseFloat((item.range / 100).toString());
          // 		let showToolTip = item.range.toString();
          // 		art.volume = selectValue;
          // 		return item.range;
          // 	},
          // },
          {
            name: "video-playback-codeid",
            html: "播放策略",
            tooltip: "默认",
            icon: `<svg t="1727413004405" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3183" width="24" height="24"><path d="M170.666667 256h682.666666c23.466667 0 42.666667 19.2 42.666667 42.666667v170.666666h85.333333V256c0-46.933333-38.4-85.333333-85.333333-85.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333333v512c0 46.933333 38.4 85.333333 85.333333 85.333333h384v-85.333333H170.666667c-23.466667 0-42.666667-19.2-42.666667-42.666667V298.666667c0-23.466667 19.2-42.666667 42.666667-42.666667z" p-id="3184"></path><path d="M640 512L384 341.333333v341.333334zM968.96 786.346667c1.28-12.373333 1.706667-24.746667 0.426667-36.693334l45.653333-36.266666c4.266667-3.413333 5.12-8.96 2.56-13.653334l-43.946667-76.373333c-2.56-4.693333-8.106667-6.4-13.226666-4.693333l-54.613334 21.333333a146.773333 146.773333 0 0 0-32-17.92l-8.533333-58.026667a10.624 10.624 0 0 0-10.666667-9.386666h-88.32c-5.12 0-9.813333 3.84-10.666666 8.96l-8.533334 58.026666c-11.093333 4.693333-21.76 11.093333-31.573333 17.92l-54.613333-21.333333c-5.12-2.133333-10.666667 0-13.226667 4.693333l-43.946667 76.373334c-2.56 4.693333-1.706667 10.24 2.56 13.653333l45.653334 36.693333c-1.28 12.373333-1.706667 24.746667-0.426667 36.693334l-45.653333 36.266666c-4.266667 3.413333-5.12 8.96-2.56 13.653334l43.946666 76.373333c2.56 4.693333 8.106667 6.4 13.226667 4.693333l54.186667-21.333333c9.813333 7.253333 20.48 13.226667 32 17.92l8.533333 58.026667c0.853333 5.12 5.12 8.96 10.666667 8.96h88.32c5.12 0 9.813333-3.84 10.666666-8.96l8.533334-58.026667c11.093333-4.693333 21.76-11.093333 31.573333-17.92l54.613333 21.333333c5.12 2.133333 10.666667 0 13.226667-4.693333l43.946667-76.373333c2.56-4.693333 1.706667-10.24-2.56-13.653334l-45.226667-36.266666zM810.666667 832c-35.413333 0-64-28.586667-64-64s28.586667-64 64-64 64 28.586667 64 64-28.586667 64-64 64z" p-id="3185"></path></svg>`,
            selector: [
              {
                default: true,
                html: "默认",
                value: BilibiliVideoCodingCode["AV1"]
              },
              {
                html: "AV1",
                value: BilibiliVideoCodingCode["AV1"]
              },
              {
                html: "HEVC",
                value: BilibiliVideoCodingCode["HEVC"]
              },
              {
                html: "AVC",
                value: BilibiliVideoCodingCode["AVC"]
              }
            ],
            onSelect: function(item) {
              PopsPanel.setValue("bili-bangumi-videoCodingCode", item.value);
              return item.html;
            }
          },
          GenerateArtPlayerEPSelectSetting(option)
        ],
        /** 自定义右键菜单 */
        contextmenu: [
          // {
          // 	html: "Custom menu",
          // 	click: function (contextmenu) {
          // 		console.info("You clicked on the custom menu");
          // 		contextmenu.show = false;
          // 	},
          // },
        ],
        /**  */
        layers: [
          // {
          //     html: '<img width="100" src="https://artplayer.org/assets/sample/layer.png">',
          //     click: function () {
          //         window.open('https://aimu.app');
          //         console.info('You clicked on the custom layer');
          //     },
          //     style: {
          //         position: 'absolute',
          //         top: '20px',
          //         right: '20px',
          //         opacity: '.9',
          //     },
          // },
        ],
        /**  */
        quality: [...option.quality],
        // thumbnails: {
        // 	url: "https://artplayer.org/assets/sample/thumbnails.png",
        // 	number: 60,
        // 	column: 10,
        // 	scale: 0.85,
        // },
        // subtitle: {
        // 	url: "https://artplayer.org/assets/sample/subtitle.srt",
        // 	type: "srt",
        // 	style: {
        // 		color: "#fe9200",
        // 		fontSize: "20px",
        // 	},
        // 	encoding: "utf-8",
        // },
        highlight: [
          // {
          // 	time: 15,
          // 	text: "One more chance",
          // },
          // {
          // 	time: 30,
          // 	text: "谁でもいいはずなのに",
          // },
          // {
          // 	time: 45,
          // 	text: "夏の想い出がまわる",
          // },
          // {
          // 	time: 60,
          // 	text: "こんなとこにあるはずもないのに",
          // },
          // {
          // 	time: 75,
          // 	text: "终わり",
          // },
        ],
        controls: [
          // {
          //     position: 'right',
          //     html: 'Control',
          //     index: 1,
          //     tooltip: 'Control Tooltip',
          //     style: {
          //         marginRight: '20px',
          //     },
          //     click: function () {
          //         console.info('You clicked on the custom control');
          //     },
          // },
        ],
        icons: ArtPlayerBiliBiliIcon,
        plugins: [
          artplayerPluginDanmuku({
            danmuku: option.danmukuUrl,
            // 以下为非必填
            speed: localArtDanmakuOption.speed,
            // 弹幕持续时间，范围在[1 ~ 10]
            /**
                            * [{
                                       name: "1/4",
                                       value: [10, "75%"]
                                   }, {
                                       name: "半屏",
                                       value: [10, "50%"]
                                   }, {
                                       name: "3/4",
                                       value: [10, "25%"]
                                   }, {
                                       name: "满屏",
                                       value: [10, 10]
                                   }]
                            */
            margin: localArtDanmakuOption["margin"],
            // 弹幕上下边距，支持像素数字和百分比
            opacity: localArtDanmakuOption["opacity"],
            // 弹幕透明度，范围在[0 ~ 1]
            color: "#FFFFFF",
            // 默认弹幕颜色，可以被单独弹幕项覆盖
            mode: 0,
            // 默认弹幕模式: 0: 滚动，1: 顶部，2: 底部
            modes: localArtDanmakuOption["modes"],
            // 弹幕可见的模式
            fontSize: localArtDanmakuOption["fontSize"],
            // 弹幕字体大小，支持像素数字和百分比
            antiOverlap: localArtDanmakuOption["antiOverlap"],
            // 弹幕是否防重叠
            synchronousPlayback: localArtDanmakuOption["synchronousPlayback"],
            // 是否同步播放速度
            mount: void 0,
            // 弹幕发射器挂载点, 默认为播放器控制栏中部
            heatmap: true,
            // 是否开启热力图
            width: 800,
            // 当播放器宽度小于此值时，弹幕发射器置于播放器底部
            points: [],
            // 热力图数据
            filter: (danmu) => danmu.text.length <= 100,
            // 弹幕载入前的过滤器
            beforeVisible: () => true,
            // 弹幕显示前的过滤器，返回 true 则可以发送
            visible: localArtDanmakuOption["visible"],
            // 弹幕层是否可见
            emitter: false,
            // 是否开启弹幕发射器
            maxLength: 50,
            // 弹幕输入框最大长度, 范围在[1 ~ 1000]
            lockTime: 3,
            // 输入框锁定时间，范围在[1 ~ 60]
            theme: utils.isThemeDark() ? "dark" : "light",
            // 弹幕主题，支持 dark 和 light，只在自定义挂载时生效
            // OPACITY: {}, // 不透明度配置项
            // FONT_SIZE: {}, // 弹幕字号配置项
            // MARGIN: {}, // 显示区域配置项
            // SPEED: {}, // 弹幕速度配置项
            // COLOR: [], // 颜色列表配置项
            // 手动发送弹幕前的过滤器，返回 true 则可以发送，可以做存库处理
            beforeEmit(danmu) {
              return new Promise((resolve) => {
                console.log(danmu);
                setTimeout(() => {
                  resolve(true);
                }, 1e3);
              });
            }
          }),
          artplayerPluginM4SAudioSupport({
            url: option.audioUrl
          }),
          artplayerPluginBilibiliCCSubTitle({
            cid: option.cid,
            aid: option.aid,
            ep_id: option.ep_id
          }),
          artplayerPluginTopToolBar({
            aid: option.aid,
            cid: option.cid,
            bvid: option.bvid,
            title: option.videoTitle,
            showWrap: true,
            showTitle: true,
            showOnlineTotal: true
          })
        ]
      };
      if (option.isFlv) {
        artOption.quality = [];
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
          }
        };
      } else {
        artOption.type = "mp4";
      }
      if (typeof option.url === "string") {
        artOption.url = option.url;
      } else if (typeof option.url === "function") {
        let url = await option.url();
        artOption.url = url;
      }
      this.art = new Artplayer(artOption);
      this.art.on(
        // @ts-ignore
        "artplayerPluginDanmuku:config",
        (option2) => {
          Object.keys(localArtDanmakuOption).forEach((key) => {
            if (Reflect.has(option2, key)) {
              let value = Reflect.get(option2, key);
              Reflect.set(localArtDanmakuOption, key, value);
            }
          });
          _GM_setValue(localArtDanmakuOption_KEY, localArtDanmakuOption);
        }
      );
      return this.art;
    },
    /**
     * 更新新的播放信息
     * @param option
     */
    async update(art, option) {
      this.resetEnv();
      this.currentOption = option;
      let videoUrl = "";
      if (typeof option.url === "string") {
        videoUrl = option.url;
      } else if (typeof option.url === "function") {
        let url = await option.url();
        videoUrl = url;
      }
      log.info([`更新新的播放信息`, option]);
      art.pause();
      log.info(`暂停视频`);
      art.currentTime = 0;
      log.info(`重置播放进度`);
      art.url = videoUrl;
      log.info(`更新视频地址`);
      art.quality = option.quality;
      log.info(`更新画质地址`);
      art.plugins["plugin-bilibili-m4sAudio"].update(option.audioUrl);
      log.info([`更新音频`, option.audioUrl]);
      const subTitleOption = {
        cid: option.cid,
        aid: option.aid,
        ep_id: option.ep_id
      };
      art.plugins["plugin-bilibili-cc-subtitle"].update(subTitleOption);
      log.info([`更新字幕`, subTitleOption]);
      const topToolBarOption = {
        aid: option.aid,
        cid: option.cid,
        bvid: option.bvid,
        title: option.videoTitle,
        showWrap: true,
        showTitle: true,
        showOnlineTotal: true
      };
      art.plugins["plugin-bilibili-topToolBar"].update(topToolBarOption);
      log.info([`更新顶部标题`, topToolBarOption]);
      art.setting.update(GenerateArtPlayerEPSelectSetting(option));
      log.info([`更新选集信息`, option.epList]);
      art.play();
      log.info("播放");
    }
  };
  const ArtPlayerVideoConfig = {
    /**
     * 获取用户选择的视频编码
     */
    getUserChooseVideoCodingCode() {
      let userChooseVideoCodingCode = PopsPanel.getValue(
        "bili-bangumi-videoCodingCode",
        BilibiliVideoCodingCode.AV1
      );
      if (!Object.values(BilibiliVideoCodingCode).includes(
        userChooseVideoCodingCode
      )) {
        log.error(
          "意外情况，选择的编码格式不是允许的编码，将强制使用默认，防止过滤掉的视频链接为空：" + userChooseVideoCodingCode
        );
        userChooseVideoCodingCode = BilibiliVideoCodingCode.AV1;
      }
      return userChooseVideoCodingCode;
    }
  };
  const VideoSoundQualityCode = {
    "30216": "64K",
    "30232": "132K",
    "30280": "192K",
    "30250": "杜比全景声",
    "30251": "Hi-Res无损"
  };
  function filterArrayWithMaxSize(arr) {
    const map = {};
    arr.forEach((item) => {
      if (!map[item.id] || item.size > map[item.id].size) {
        map[item.id] = item;
      }
    });
    const result = Object.values(map);
    return result;
  }
  function filterDashVideoQualityInfo(dashInfo, config) {
    let result = [];
    dashInfo.video.forEach((dashVideoInfo) => {
      if (!dashInfo.accept_quality.includes(dashVideoInfo.id)) {
        return;
      }
      if (config.codecid != null && dashVideoInfo.codecid !== config.codecid) {
        return;
      }
      let findSupportFormat = dashInfo.support_formats.find(
        (formatsItem) => formatsItem.quality === dashVideoInfo.id
      );
      let videoUrl = BilibiliCDNProxy.findBetterCDN(
        dashVideoInfo.base_url,
        dashVideoInfo.baseUrl,
        dashVideoInfo.backup_url,
        dashVideoInfo.backupUrl
      );
      videoUrl = BilibiliCDNProxy.replaceVideoCDN(videoUrl);
      let qualityName = findSupportFormat == null ? void 0 : findSupportFormat.new_description;
      result.push({
        name: qualityName,
        url: videoUrl,
        type: dashVideoInfo.mimeType,
        id: dashVideoInfo.id,
        size: dashVideoInfo.size,
        quality: dashVideoInfo.id,
        vip: Boolean(findSupportFormat == null ? void 0 : findSupportFormat.need_vip)
      });
    });
    return result;
  }
  const GenerateVideoTitle = (ep_id, title) => {
    return `第${ep_id}话 ${title}`;
  };
  const GenerateArtPlayerOption = async (EP_INFO, EP_LIST) => {
    var _a2;
    const { aid, bvid, cid, ep_id, title, long_title } = EP_INFO;
    log.info(`解析番剧信息 aid:${aid} cid:${cid} ep_id:${ep_id}`);
    const videoTitle = GenerateVideoTitle(title, long_title);
    const audioInfo = [];
    let qualityInfo = [];
    let isFlv = false;
    let flvInfo = [];
    let flvTotalDuration = 0;
    let flvTotalSize = 0;
    if (PopsPanel.getValue("bili-bangumi-unlockAreaLimit")) {
      const bangumiInfo = await BilibiliBangumiApi.getPlayUrl({
        avid: aid,
        cid,
        ep_id
      });
      if (!bangumiInfo) {
        return;
      }
      let userChooseVideoCodingCode = ArtPlayerVideoConfig.getUserChooseVideoCodingCode();
      if (bangumiInfo.type.toLowerCase() === "flv") {
        isFlv = true;
        bangumiInfo.durl.forEach((durlInfo) => {
          let videoUrl = BilibiliCDNProxy.findBetterCDN(
            durlInfo.url,
            durlInfo.backup_url
          );
          videoUrl = BilibiliCDNProxy.replaceVideoCDN(videoUrl);
          flvTotalDuration += durlInfo.length;
          flvTotalSize += durlInfo.size;
          flvInfo.push({
            order: durlInfo.order,
            url: videoUrl,
            duration: durlInfo.length,
            length: durlInfo.length,
            size: durlInfo.size
          });
        });
      } else if (bangumiInfo.type.toLowerCase() === "dash" || bangumiInfo.type.toLowerCase() === "mp4") {
        bangumiInfo.dash.audio.forEach((item) => {
          let audioUrl = item.base_url || item.baseUrl;
          audioUrl = BilibiliCDNProxy.replaceVideoCDN(audioUrl);
          audioInfo.push({
            url: audioUrl,
            id: item.id,
            size: item.size,
            text: VideoSoundQualityCode[item.id] || ""
          });
        });
        audioInfo.sort((leftItem, rightItem) => {
          return rightItem.id - leftItem.id;
        });
        log.info([`ArtPlayer: 获取的音频信息`, audioInfo]);
        qualityInfo = [
          ...filterDashVideoQualityInfo(
            {
              accept_quality: bangumiInfo.accept_quality,
              support_formats: bangumiInfo.support_formats,
              video: bangumiInfo.dash.video
            },
            {
              codecid: userChooseVideoCodingCode
            }
          )
        ];
        if (qualityInfo.length === 0) {
          if (bangumiInfo.dash.video.length !== 0) {
            log.warn(
              `当前选择的视频编码id为: ${userChooseVideoCodingCode}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`
            );
            qualityInfo = [];
            qualityInfo = [
              ...filterDashVideoQualityInfo(
                {
                  accept_quality: bangumiInfo.accept_quality,
                  support_formats: bangumiInfo.support_formats,
                  video: bangumiInfo.dash.video
                },
                {}
              )
            ];
          }
        }
        qualityInfo = filterArrayWithMaxSize(qualityInfo);
        qualityInfo.sort((leftItem, rightItem) => {
          return rightItem.quality - leftItem.quality;
        });
        log.info([`ArtPlayer: 获取的视频画质信息`, qualityInfo]);
      } else {
        BilibiliLogUtils.failToast(
          "暂未适配的视频格式：" + bangumiInfo["format"]
        );
        return;
      }
    } else {
      const bangumiInfo = await BilibiliBangumiApi.getPlayUrlHTML5({
        avid: aid,
        cid,
        ep_id
      });
      if (!bangumiInfo) {
        return;
      }
      if (bangumiInfo.durls.length === 0) {
        if (bangumiInfo.durl != null) {
          bangumiInfo.durls.push({
            quality: bangumiInfo.quality,
            durl: bangumiInfo.durl
          });
        }
      }
      bangumiInfo.durls.forEach((durlInfo) => {
        if (!bangumiInfo.accept_quality.includes(durlInfo.quality)) {
          return;
        }
        if (!durlInfo.durl.length) {
          return;
        }
        let currentDurl = durlInfo["durl"][0];
        let findSupportFormat = bangumiInfo.support_formats.find(
          (formatsItem) => formatsItem.quality === durlInfo.quality
        );
        let videoUrl = BilibiliCDNProxy.findBetterCDN(
          currentDurl.url,
          currentDurl.backup_url
        );
        let qualityName = findSupportFormat == null ? void 0 : findSupportFormat.new_description;
        qualityInfo.push({
          name: qualityName,
          url: videoUrl,
          type: "audio/mp4",
          id: durlInfo.quality,
          size: currentDurl.size,
          quality: durlInfo.quality,
          vip: Boolean(findSupportFormat == null ? void 0 : findSupportFormat.need_vip)
        });
      });
    }
    const currentVideoQuality = qualityInfo.map((item, index) => {
      return {
        default: index === 0,
        html: item.name,
        url: item.url
      };
    });
    const artPlayerOption = {
      // @ts-ignore
      container: null,
      epList: EP_LIST,
      cid,
      aid,
      bvid,
      ep_id,
      videoTitle,
      danmukuUrl: `https://api.bilibili.com/x/v1/dm/list.so?oid=${cid}`,
      quality: currentVideoQuality,
      isFlv,
      flvInfo,
      flvTotalDuration,
      flvTotalSize
    };
    artPlayerOption.url = (_a2 = qualityInfo == null ? void 0 : qualityInfo[0]) == null ? void 0 : _a2.url;
    if (audioInfo.length) {
      artPlayerOption.audioUrl = audioInfo[0].url;
    }
    return artPlayerOption;
  };
  const BlibiliBangumiPlayer = {
    /**
     * 更新播放器的信息
     */
    updateArtPlayerVideoInfo(ep_info, ep_list) {
      VueUtils.waitVuePropToSet(".player-wrapper", {
        msg: "等待player-wrapper加载完成",
        check(vueInstance) {
          var _a2, _b, _c;
          return typeof ((_a2 = vueInstance == null ? void 0 : vueInstance.EP_INFO) == null ? void 0 : _a2.aid) === "number" && typeof ((_b = vueInstance == null ? void 0 : vueInstance.EP_INFO) == null ? void 0 : _b.cid) === "number" && typeof ((_c = vueInstance == null ? void 0 : vueInstance.EP_INFO) == null ? void 0 : _c.ep_id) === "number";
        },
        async set(vueInstance) {
          const $playerWrapper = document.querySelector(".player-wrapper");
          if (ep_info == null) {
            ep_info = vueInstance.EP_INFO;
          }
          if (ep_list == null) {
            ep_list = vueInstance.EP_LIST;
          }
          const artPlayerOption = await GenerateArtPlayerOption(ep_info, ep_list);
          if (artPlayerOption == null) {
            return;
          }
          let $artPlayer = document.querySelector("#artplayer");
          if (!$artPlayer) {
            const $artPlayerContainer = domutils.createElement("div", {
              className: "artplayer-container",
              innerHTML: (
                /*html*/
                `
						<div id="artplayer"></div>
						`
              )
            });
            $artPlayer = $artPlayerContainer.querySelector("#artplayer");
            domutils.after($playerWrapper, $artPlayerContainer);
          }
          artPlayerOption.container = $artPlayer;
          if (BilibiliBangumi.$data.art == null) {
            let art = await BilibiliArtPlayer.init(artPlayerOption);
            if (art) {
              BilibiliBangumi.$data.art = art;
            } else {
              return;
            }
            Reflect.set(_unsafeWindow, "art", BilibiliBangumi.$data.art);
            BilibiliBangumi.$data.art.on("restart", (url) => {
              let findQuality = artPlayerOption.quality.find((item) => {
                return item.url === url;
              });
              if (findQuality) {
                console.log("切换画质：", findQuality);
              }
            });
            BilibiliBangumi.$data.art.volume = 1;
          } else {
            BilibiliArtPlayer.update(BilibiliBangumi.$data.art, artPlayerOption);
          }
        }
      });
    }
  };
  const BilibiliBangumi = {
    $data: {
      art: null
    },
    init() {
      PopsPanel.execMenuOnce("bili-bangumi-initialScale", () => {
        BilibiliUtils.initialScale();
      });
      PopsPanel.execMenuOnce("bili-bangumi-hook-callApp", () => {
        this.hookCallApp();
      });
      PopsPanel.execMenu("bili-bangumi-cover-clicl-event-chooseEp", () => {
        this.setChooseEpClickEvent();
      });
      PopsPanel.execMenu("bili-bangumi-cover-clicl-event-other", () => {
        this.setClickOtherVideo();
      });
      PopsPanel.execMenu("bili-bangumi-cover-clicl-event-recommend", () => {
        this.setRecommendClickEvent();
      });
      this.coverVideoPlayer();
    },
    /**
     * 阻止唤醒App
     */
    hookCallApp() {
      let oldSetTimeout = _unsafeWindow.setTimeout;
      _unsafeWindow.setTimeout = function(...args) {
        let callString = args[0].toString();
        if (callString.includes("autoOpenApp")) {
          log.success(["阻止唤醒App", args]);
          return;
        }
        return oldSetTimeout.apply(this, args);
      };
    },
    /**
     * 设置已购买番剧(会员？)
     *
     * + $store.state.userStat.pay 1
     * + $store.state.mediaInfo.user_status.pay 1
     */
    setPay() {
      VueUtils.waitVuePropToSet("#app", [
        {
          msg: "设置参数 $store.state.userStat.pay",
          check(vueIns) {
            var _a2, _b, _c;
            return typeof typeof ((_c = (_b = (_a2 = vueIns == null ? void 0 : vueIns.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.userStat) == null ? void 0 : _c.pay) === "number";
          },
          set(vueIns) {
            log.success("成功设置参数 $store.state.userStat.pay=1");
            vueIns.$store.state.userStat.pay = 1;
          }
        },
        {
          msg: "设置参数 $store.state.mediaInfo.user_status.pay",
          check(vueObj) {
            var _a2, _b, _c, _d;
            return typeof ((_d = (_c = (_b = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.mediaInfo) == null ? void 0 : _c.user_status) == null ? void 0 : _d.pay) === "number";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.mediaInfo.user_status.pay=1");
            vueObj.$store.state.mediaInfo.user_status.pay = 1;
          }
        }
      ]);
    },
    /**
     * 覆盖【选集】的点击事件
     */
    setChooseEpClickEvent() {
      utils.waitNode(
        BilibiliData.className.bangumi + " .ep-list-pre-wrapper ul.ep-list-pre-container"
      ).then(($preContainer) => {
        log.info("覆盖【选集】的点击事件");
        domutils.on(
          $preContainer,
          "click",
          "li.episode-item",
          function(event) {
            utils.preventEvent(event);
            BilibiliOpenApp.jumpToUrl(event);
          },
          {
            capture: true
          }
        );
      });
      utils.waitNode(
        BilibiliData.className.bangumi + " .ep-list-pre-wrapper ul.season-list-wrapper"
      ).then(($listWapper) => {
        log.info("覆盖【xx季】的点击事件");
        domutils.on(
          $listWapper,
          "click",
          "li",
          function(event) {
            utils.preventEvent(event);
            BilibiliOpenApp.jumpToUrl(event);
          },
          {
            capture: true
          }
        );
      });
      utils.waitNode(
        BilibiliData.className.bangumi + " .ep-list-pre-header"
      ).then(($preHeader) => {
        log.info("覆盖【选集】右上角的【全xx话】Arrow的点击事件");
        domutils.on(
          $preHeader,
          "click",
          function(event) {
            utils.preventEvent(event);
          },
          {
            capture: true
          }
        );
      });
    },
    /**
     * 覆盖【PV&其他】、【预告】、【主题曲】的点击事件
     */
    setClickOtherVideo() {
      utils.waitNode(
        BilibiliData.className.bangumi + " .section-preview-wrapper ul.ep-list-pre-container"
      ).then(($preContainer) => {
        log.info("覆盖【PV&其他】、【预告】、【主题曲】的点击事件");
        domutils.on(
          $preContainer,
          "click",
          "li.section-preview-item",
          function(event) {
            utils.preventEvent(event);
            BilibiliOpenApp.jumpToUrl(event);
          },
          {
            capture: true
          }
        );
      });
      utils.waitNode(
        BilibiliData.className.bangumi + " .section-preview-header"
      ).then(($previewHeader) => {
        log.info(
          "覆盖【PV&其他】、【预告】、【主题曲】右上角的Arrow的点击事件"
        );
        domutils.on(
          $previewHeader,
          "click",
          function(event) {
            utils.preventEvent(event);
          },
          {
            capture: true
          }
        );
      });
    },
    /**
     * 覆盖【更多推荐】番剧的点击事件
     */
    setRecommendClickEvent() {
      utils.waitNode(
        BilibiliData.className.bangumi + " .recom-wrapper ul.recom-list"
      ).then(($recomList) => {
        log.info("覆盖【更多推荐】番剧的点击事件");
        domutils.on(
          $recomList,
          "click",
          "li.recom-item-v2",
          function(event) {
            utils.preventEvent(event);
            BilibiliOpenApp.jumpToUrl(event);
          },
          {
            capture: true
          }
        );
      });
    },
    /**
     * 覆盖视频播放器
     */
    coverVideoPlayer() {
      if (document.querySelector("#artplayer")) {
        log.warn("已存在播放器，更新播放信息");
      } else {
        addStyle(
          /*css*/
          `
			.player-wrapper,
			.open-app-bar{
				display: none !important;
			}
			${artPlayerCSS}
			`
        );
      }
      BlibiliBangumiPlayer.updateArtPlayerVideoInfo();
    }
  };
  const BilibiliSearchApi = {
    /**
     * 获取输入框的placeholder的热点关键词
     */
    async getSearchInputPlaceholder() {
      let getResponse = await httpx.get(
        "https://api.bilibili.com/x/web-interface/wbi/search/default",
        {
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
            "sec-fetch-site": "same-site"
          },
          allowInterceptConfig: false
        }
      );
      if (!getResponse.status) {
        return;
      }
      let responseData = utils.toJSON(getResponse.data.responseText);
      if (!BilibiliResponseCheck.isWebApiSuccess(responseData)) {
        return;
      }
      return responseData.data;
    },
    /**
     * 从代理服务器拉取番剧搜索结果
     */
    async getBangumiSearchResult(config) {
      let searchParamsData = {
        search_type: "media_bangumi",
        keyword: config.keyword,
        from_client: "BROWSER",
        drm_tech_type: "2",
        module: "bangumi",
        area: config.area.toLowerCase(),
        access_key: BilibiliQrCodeLogin.getAccessToken()
      };
      let url = `https://${config.host}/x/web-interface/search/type?${utils.toSearchParamsStr(searchParamsData)}`;
      let getResponse = await httpx.get(url, {
        fetch: false,
        headers: {
          "User-Agent": utils.getRandomAndroidUA()
        }
      });
      if (!getResponse.status) {
        return;
      }
      let data2 = utils.toJSON(getResponse.data.responseText);
      if (!BilibiliResponseCheck.isWebApiSuccess(data2)) {
        log.error(`请求失败，当前代理服务器信息：${JSON.stringify(config.host)}`);
        log.error(`请求失败，当前请求的响应信息：${JSON.stringify(data2)}`);
        return;
      }
      return data2.data.result;
    }
  };
  const BilibiliExtraSearch = {
    $flag_css: {
      enableOtherAreaSearchBangumi: false
    },
    $data: {},
    init() {
      domutils.ready(() => {
        PopsPanel.execMenu("bili-search-enableOtherAreaSearchBangumi", () => {
          this.enableOtherAreaSearchBangumi();
        });
      });
    },
    /**
     * 初始化搜索的tab
     */
    enableOtherAreaSearchBangumi() {
      if (!this.$flag_css.enableOtherAreaSearchBangumi) {
        this.$flag_css.enableOtherAreaSearchBangumi = true;
        addStyle(
          /*css*/
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
				color: #fb7299;
				border-bottom: 0.53333vmin solid #fb7299;
			}
			`
        );
        addStyle(
          /*css*/
          `
			.gm-result-panel {
				padding-top: 23.46667vmin;
				background: #f4f4f4;
				--card-img-width: 100px;
				--card-img-height: calc(var(--card-img-width) * 1.2 );
				--card-desc-color: #808080;
				--card-desc-size: 0.8em;
			}
			.gm-card-cover{
			}
			.gm-card-cover img {
				width: var(--card-img-width);
				height: var(--card-img-height);
				border-radius: 8px;
			}
			.gm-card-container {
				display: flex;
				gap: 15px;
			}
	
			.gm-card-box {
				padding: 0px 10px;
			}
	
			.gm-card-item em {
				color: var(--bili-color);
				font-style: unset;
			}
	
			.gm-card-title {
				font-family: 微软雅黑;
				font-size: 1em;
			}
	
			.gm-card-pubtime,
			.gm-card-styles,
			span.gm-card-media_score-user_count {
				font-size: var(--card-desc-size);
				color: var(--card-desc-color);
			}
	
			.gm-card-info-container {
				display: flex;
				flex-direction: column;
				gap: 3px;
				justify-content: flex-start;
			}
			.gm-card-info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
			span.gm-card-media_score-score {
				color: #F77C2E;
				font-size: 1.2em;
				font-weight: bold;
			}
	
			.gm-card-media_score {
				display: flex;
				align-items: flex-end;
				gap: 0.5em;
			}
			.gm-card-item {
				padding: 1.6vmin;
				background: #fff;
				margin: 10px 0px;
				border-radius: 6px;
				display: flex;
				flex-direction: column;
				gap: 15px;
			}
			.gm-card-badges {
				background: var(--bili-color);
				color: #fff;
				padding: 3px;
				font-size: 12px;
				border-radius: 3px;
				white-space: nowrap;
				position: absolute;
				margin: 5px 0px 0px calc(var(--card-img-width) - 36px );
			}
			.gm-card-eps {
				display: flex;
				overflow: auto;
				gap: 10px;
			}
	
			.gm-card-eps-item {
				text-align: center;
				white-space: nowrap;
			}
	
			.gm-card-eps-item-info {
				min-width: 60px;
				height: 40px;
				background: #edeff3;
				padding: 10px;
				border-radius: 8px;
			}
			`
        );
      }
      utils.waitNode(".m-search-result .tabs:not(:has(.gm-tab-item))").then(($tabs) => {
        let enableSearchServer = BilibiliApiProxy.getSearchProxyHost();
        enableSearchServer.forEach((proxyServerInfo) => {
          let $tab = domutils.createElement(
            "a",
            {
              className: "tab-item gm-tab-item",
              innerHTML: `番剧（${proxyServerInfo.name}）`
            },
            {
              "data-area": proxyServerInfo.area,
              "data-host": proxyServerInfo.host
            }
          );
          $tabs.appendChild($tab);
        });
        const refreshTabActive = ($tab) => {
          $tabs.querySelectorAll(".tab-item").forEach(($ele) => $tab != $ele && $ele.classList.remove("on"));
          $tab.classList.add("on");
        };
        domutils.on($tabs, "click", ".tab-item", async (event) => {
          let $tab = event.target;
          refreshTabActive($tab);
          let $resultPanel = document.querySelector(".result-panel");
          let $oldGmResultPanel = document.querySelector(".gm-result-panel");
          if ($oldGmResultPanel) {
            $oldGmResultPanel.remove();
            domutils.show($resultPanel);
          }
          if (!$tab.classList.contains("gm-tab-item")) {
            return;
          }
          let area = $tab.dataset.area;
          let host = $tab.dataset.host;
          let $searchResult = document.querySelector(".m-search-result");
          let searchResultVueIns = VueUtils.getVue($searchResult);
          searchResultVueIns.switchTab(233);
          domutils.hide($resultPanel);
          let keyword = searchResultVueIns.keyword;
          let $loading = Qmsg.loading("搜索中，请稍后...");
          let searchBangumiResult = await BilibiliSearchApi.getBangumiSearchResult({
            keyword,
            area,
            host
          });
          $loading.close();
          if (!searchBangumiResult) {
            return;
          }
          log.info(["搜索结果：", searchBangumiResult]);
          let $gmResultPanel = domutils.createElement("div", {
            className: "gm-result-panel",
            innerHTML: (
              /*html*/
              `
					<div class="gm-list-view">
						<div class="gm-video-list-box">
							<div class="gm-video-list">
								<div class="gm-card-box"></div>
							</div>
						</div>
					</div>

					`
            )
          });
          let $gmCardBox = $gmResultPanel.querySelector(".gm-card-box");
          searchBangumiResult.forEach((searchBangumiResultItem) => {
            $gmCardBox.appendChild(
              this.createSearchResultVideoItem(searchBangumiResultItem)
            );
          });
          $searchResult.appendChild($gmResultPanel);
        });
      });
    },
    /**
     * 创建搜索结果项
     */
    createSearchResultVideoItem(option) {
      var _a2, _b;
      let $item = domutils.createElement(
        "div",
        {
          className: "gm-card-item",
          innerHTML: (
            /*html*/
            `
			<div class="gm-card-container">
				<div class="gm-card-cover">
					<img src="${option.cover}" alt="封面">
				</div>
				<div class="gm-card-badges">${option.season_type_name}</div>
				<div class="gm-card-info">
					<div class="gm-card-info-container">
						<div class="gm-card-title">${option.title}</div>
						<div class="gm-card-pubtime">
						</div>
						<div class="gm-card-styles">${option.styles || ""}</div>
					</div>
					<div class="gm-card-media_score">
						
					</div>
				</div>
				<div class="gm-card-ferture">
				</div>
			</div>
			<div class="gm-card-eps">
				
			</div>
			`
          )
        },
        {
          "data-url": option.url,
          "data-type": option.type,
          "data-media_id": option.media_id,
          "data-pgc_season_id": option.pgc_season_id,
          "data-is_follow": option.is_follow,
          "data-is_selection": option.is_selection
        }
      );
      domutils.on($item, "click", (event) => {
        utils.preventEvent(event);
        window.open(option.url, "_blank");
      });
      let $pubtime = $item.querySelector(".gm-card-pubtime");
      if (option.pubtime) {
        domutils.append(
          $pubtime,
          /*html*/
          `
			<span>${utils.formatTime(option.pubtime * 1e3, "yyyy")}</span>
			`
        );
      }
      if (option.areas) {
        if ($pubtime.children.length) {
          domutils.append(
            $pubtime,
            /*html*/
            `
					<span> | </span>
				`
          );
        }
        domutils.append(
          $pubtime,
          /*html*/
          `
					<span>${option.areas}</span>
				`
        );
      }
      let $mediaScore = $item.querySelector(".gm-card-media_score");
      if (option.media_score && option.media_score.user_count) {
        domutils.append(
          $mediaScore,
          /*html*/
          `
				<span class="gm-card-media_score-score">${((_a2 = option.media_score) == null ? void 0 : _a2.score) || 0}分</span>
				<span class="gm-card-media_score-user_count">${((_b = option.media_score) == null ? void 0 : _b.user_count) || 0}人参与</span>
				`
        );
      }
      let $eps = $item.querySelector(".gm-card-eps");
      if (Array.isArray(option.eps)) {
        option.eps.forEach((epsItem) => {
          let $epsItem = domutils.createElement(
            "div",
            {
              className: "gm-card-eps-item",
              innerHTML: (
                /*html*/
                `
					<div class="gm-card-eps-item-badges">
						
					</div>
					<div class="gm-card-eps-item-info">
						${epsItem.title}
					</div>`
              )
            },
            {
              "data-id": epsItem.id,
              "data-url": epsItem.url,
              "data-title": epsItem.title,
              "data-long_title": epsItem.long_title
            }
          );
          domutils.on($epsItem, "click", (event) => {
            utils.preventEvent(event);
            window.open(epsItem.url, "_blank");
          });
          $eps.appendChild($epsItem);
        });
      }
      return $item;
    },
    /**
     * 搜索番剧(从自定义服务器拉取搜索结果)
     */
    searchBangumi() {
    }
  };
  const BilibiliSearch = {
    init() {
      if (BilibiliRouter.isSearchResult()) {
        BilibiliExtraSearch.init();
      }
      PopsPanel.execMenuOnce("bili-search-cover-cancel", () => {
        this.coverCancel();
      });
      domutils.ready(() => {
        PopsPanel.execMenu("bili-search-inputAutoFocus", () => {
          this.inputAutoFocus();
        });
      });
    },
    /**
     * 覆盖【取消】按钮的点击事件
     */
    coverCancel() {
      log.info("覆盖【取消】按钮的点击事件");
      domutils.on(
        document,
        "click",
        "a.cancel",
        (event) => {
          log.info(`点击取消按钮`);
          utils.preventEvent(event);
          window.history.back();
        },
        { capture: true }
      );
    },
    /**
     * 输入框自动获取焦点
     */
    inputAutoFocus() {
      let searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has("keyword")) {
        log.warn(`当前在搜索结果页面，不执行输入框自动获取焦点`);
        return;
      }
      log.info(`输入框自动获取焦点`);
      utils.waitNode(
        `.m-search .m-search-search-bar input[type="search"]`,
        1e4
      ).then(($input) => {
        if (!$input) {
          log.error("获取输入框失败");
          return;
        }
        $input.focus();
      });
    }
  };
  const BilibiliLiveBlockNode = {
    init() {
      PopsPanel.execMenuOnce("bili-live-block-chatRoom", () => {
        return this.blockChatRoom();
      });
      PopsPanel.execMenuOnce("bili-live-block-brush-prompt", () => {
        return this.blockBrushPrompt();
      });
      PopsPanel.execMenuOnce("bili-live-block-control-panel", () => {
        return this.blockControlPanel();
      });
    },
    /**
     * 屏蔽聊天室
     */
    blockChatRoom() {
      log.info("屏蔽聊天室");
      return BilibiliUtils.addBlockCSS("#chat-items");
    },
    /**
     * 屏蔽xxx进入直播间
     */
    blockBrushPrompt() {
      log.info("屏蔽xxx进入直播间");
      return BilibiliUtils.addBlockCSS("#brush-prompt");
    },
    /**
     * 屏蔽底部工具栏
     */
    blockControlPanel() {
      log.info("屏蔽底部工具栏");
      return BilibiliUtils.addBlockCSS(".control-panel");
    }
  };
  const BilibiliLive = {
    init() {
      BilibiliLiveBlockNode.init();
      PopsPanel.execMenuOnce("bili-live-prevent-openAppBtn", () => {
        this.preventOpenAppBtn();
      });
    },
    /**
     * 阻止触发打开App
     */
    preventOpenAppBtn() {
      utils.waitNode("body").then(($body) => {
        log.info("阻止.open-app-btn元素触发点击事件");
        domutils.on(
          $body,
          "click",
          ".open-app-btn",
          function(event) {
            utils.preventEvent(event);
          },
          {
            capture: true
          }
        );
        domutils.on(
          $body,
          "click",
          "#web-player-controller-wrap-el",
          function(event) {
            utils.preventEvent(event);
          },
          {
            capture: true
          }
        );
      });
    }
  };
  const BilibiliOpus = {
    init() {
      PopsPanel.execMenuOnce("bili-opus-cover-topicJump", () => {
        this.coverTopicJump();
      });
      PopsPanel.execMenuOnce(
        "bili-opus-automaticallyExpandToReadFullText",
        () => {
          return this.automaticallyExpandToReadFullText();
        }
      );
      PopsPanel.execMenuOnce("bili-opus-cover-header", () => {
        this.coverHeaderJump();
      });
    },
    /**
     * 覆盖话题跳转点击事件
     */
    coverTopicJump() {
      log.info("覆盖话题跳转点击事件");
      domutils.on(
        document,
        "click",
        BilibiliData.className.opus + " .launch-app-btn.opus-module-topic",
        function(event) {
          var _a2;
          let $click = event.target;
          let vueObj = VueUtils.getVue($click);
          if (!vueObj) {
            Qmsg.error("获取话题的__vue__失败");
            return;
          }
          let data2 = (_a2 = vueObj == null ? void 0 : vueObj.$props) == null ? void 0 : _a2.data;
          let jump_url = data2 == null ? void 0 : data2.jump_url;
          if (utils.isNull(jump_url)) {
            Qmsg.error("获取话题的jump_url失败");
            return;
          }
          log.info(["话题的跳转信息: ", data2]);
          BilibiliUtils.goToUrl(jump_url);
        },
        {
          capture: true
        }
      );
    },
    /**
     * 自动展开阅读全文
     */
    automaticallyExpandToReadFullText() {
      log.info("自动展开阅读全文");
      return [
        BilibiliUtils.addBlockCSS(
          BilibiliData.className.opus + " .opus-read-more"
        ),
        addStyle(
          /*css*/
          `
			${BilibiliData.className.opus} .opus-module-content{
				overflow: unset !important;
				max-height: unset !important;
			}
			`
        )
      ];
    },
    /**
     * 覆盖header点击事件
     */
    coverHeaderJump() {
      log.info("覆盖header点击事件");
      domutils.on(
        document,
        "click",
        BilibiliData.className.opus + " .opus-module-author",
        function(event) {
          var _a2;
          utils.preventEvent(event);
          let $click = event.target;
          let vueObj = VueUtils.getVue($click);
          if (!vueObj) {
            Qmsg.error("获取vue属性失败");
            return;
          }
          let mid = (_a2 = vueObj == null ? void 0 : vueObj.data) == null ? void 0 : _a2.mid;
          if (!mid) {
            Qmsg.error("获取mid失败");
            return;
          }
          BilibiliUtils.goToUrl(BilibiliUrlUtils.getUserSpaceUrl(mid));
        },
        {
          capture: true
        }
      );
    }
  };
  const BilibiliDynamic = {
    init() {
      PopsPanel.execMenuOnce("bili-dynamic-cover-topicJump", () => {
        this.coverTopicJump();
      });
      PopsPanel.execMenuOnce("bili-dynamic-cover-atJump", () => {
        this.coverAtJump();
      });
      PopsPanel.execMenuOnce("bili-dynamic-cover-referenceJump", () => {
        this.coverReferenceJump();
      });
      PopsPanel.execMenuOnce("bili-dynamic-cover-header", () => {
        this.coverHeaderJump();
      });
    },
    /**
     * 覆盖header点击事件
     */
    coverHeaderJump() {
      log.info("覆盖header点击事件");
      domutils.on(
        document,
        "click",
        BilibiliData.className.dynamic + " .launch-app-btn .dyn-header",
        function(event) {
          utils.preventEvent(event);
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
          capture: true
        }
      );
    },
    /**
     * 覆盖话题跳转点击事件
     */
    coverTopicJump() {
      log.info("覆盖话题跳转点击事件");
      domutils.on(
        document,
        "click",
        BilibiliData.className.dynamic + " .launch-app-btn .bili-dyn-topic",
        function(event) {
          var _a2;
          utils.preventEvent(event);
          let $click = event.target;
          let vueObj = VueUtils.getVue($click);
          if (!vueObj) {
            Qmsg.error("获取vue属性失败");
            return;
          }
          let data2 = (_a2 = vueObj == null ? void 0 : vueObj.$props) == null ? void 0 : _a2.data;
          let jump_url = data2 == null ? void 0 : data2.jump_url;
          if (utils.isNull(jump_url)) {
            Qmsg.error("获取jump_url失败");
            return;
          }
          log.info(["话题的跳转信息: ", data2]);
          BilibiliUtils.goToUrl(jump_url);
        },
        {
          capture: true
        }
      );
    },
    /**
     * 覆盖@ 跳转
     */
    coverAtJump() {
      log.info("覆盖@ 跳转");
      domutils.on(
        document,
        "click",
        BilibiliData.className.dynamic + " .at",
        function(event) {
          var _a2, _b;
          utils.preventEvent(event);
          let $click = event.target;
          let oid = $click.getAttribute("data-oid") || ((_b = (_a2 = VueUtils.getVue($click)) == null ? void 0 : _a2.$props) == null ? void 0 : _b.rid);
          if (utils.isNull(oid)) {
            Qmsg.error("获取data-oid或rid失败");
            return;
          }
          log.info("用户的oid: " + oid);
          BilibiliUtils.goToUrl(BilibiliUrlUtils.getUserSpaceDynamicUrl(oid));
        },
        {
          capture: true
        }
      );
    },
    /**
     * 覆盖引用的点击事件
     */
    coverReferenceJump() {
      log.info("覆盖引用的点击事件");
      domutils.on(
        document,
        "click",
        BilibiliData.className.dynamic + " .dyn-content .reference .dyn-orig-author",
        function(event) {
          utils.preventEvent(event);
          let $click = event.target;
          let url = $click.getAttribute("data-url");
          if (!url) {
            Qmsg.error("获取data-url失败");
            return;
          }
          BilibiliUtils.goToUrl(url);
        },
        {
          capture: true
        }
      );
      domutils.on(
        document,
        "click",
        BilibiliData.className.dynamic + " .dyn-content .reference .dyn-archive",
        function(event) {
          var _a2;
          utils.preventEvent(event);
          let $click = event.target;
          let vueObj = VueUtils.getVue($click);
          if (!vueObj) {
            Qmsg.error("获取vue属性失败");
            return;
          }
          let jump_url = (_a2 = vueObj == null ? void 0 : vueObj.data) == null ? void 0 : _a2.jump_url;
          if (utils.isNull(jump_url)) {
            Qmsg.error("获取jump_url失败");
            return;
          }
          BilibiliUtils.goToUrl(jump_url);
        },
        {
          capture: true
        }
      );
    }
  };
  const BilibiliRecommendCSS = '#app .m-head .m-recommend-view {\r\n	display: none;\r\n}\r\n\r\n#app\r\n	.m-head\r\n	.suspension\r\n	.channel-menu:has(.recommend-tag.is-avtive)\r\n	.v-switcher__header__anchor {\r\n	display: none !important;\r\n}\r\n#app\r\n	.m-head\r\n	.suspension\r\n	.channel-menu:has(.recommend-tag.is-avtive)\r\n	a.v-switcher__header__tabs__item {\r\n	color: #505050 !important;\r\n}\r\n#app\r\n	.m-head\r\n	.suspension\r\n	.channel-menu:has(.recommend-tag.is-avtive)\r\n	a.recommend-tag {\r\n	color: #fb7299 !important;\r\n}\r\n#app\r\n	.m-head\r\n	.suspension\r\n	.channel-menu:has(.recommend-tag.is-avtive)\r\n	a.recommend-tag\r\n	span:after {\r\n	content: " ";\r\n	position: relative;\r\n	background: #fb7299;\r\n	width: 30.4375px;\r\n	height: 0.53333vmin;\r\n	display: block;\r\n	bottom: 3px;\r\n}\r\n\r\n#app .m-head:has(.recommend-tag.is-avtive) .suspension + div {\r\n	display: none;\r\n}\r\n#app .m-head:has(.recommend-tag.is-avtive) .m-recommend-view {\r\n	display: unset;\r\n}\r\n\r\n#app .m-head .m-recommend-view {\r\n	background-color: #f0f1f3;\r\n}\r\n#app .m-head .m-recommend-view .list-view .video-list-box .video-list {\r\n	padding: 0 1.33333vmin;\r\n	margin-bottom: 5.33333vmin;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box {\r\n	display: -webkit-box;\r\n	display: -ms-flexbox;\r\n	display: flex;\r\n	-ms-flex-wrap: wrap;\r\n	flex-wrap: wrap;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.card {\r\n	position: relative;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.card\r\n	.bfs-img-wrap {\r\n	position: absolute;\r\n	top: 0;\r\n	left: 0;\r\n	width: 100%;\r\n	height: 100%;\r\n	overflow: hidden;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.card\r\n	.bfs-img-wrap\r\n	.bfs-img.b-img {\r\n	position: relative;\r\n	width: 100%;\r\n	height: 100%;\r\n	overflow: hidden;\r\n	background: transparent;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.card\r\n	.bfs-img-wrap\r\n	.bfs-img.b-img\r\n	picture.b-img__inner {\r\n	display: block;\r\n	width: 100%;\r\n	height: 100%;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.card\r\n	.bfs-img-wrap\r\n	.bfs-img.b-img\r\n	picture.b-img__inner\r\n	img {\r\n	width: 100%;\r\n	height: 100%;\r\n	-o-object-fit: cover;\r\n	object-fit: cover;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.card\r\n	.count {\r\n	position: absolute;\r\n	bottom: 0;\r\n	left: 0;\r\n	width: 100%;\r\n	font-size: 3.2vmin;\r\n	padding: 1.33333vmin 1.6vmin;\r\n	display: -webkit-box;\r\n	display: -ms-flexbox;\r\n	display: flex;\r\n	-webkit-box-pack: justify;\r\n	-ms-flex-pack: justify;\r\n	justify-content: space-between;\r\n	color: #fff;\r\n	background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.title {\r\n	font-size: 3.2vmin;\r\n	color: #212121;\r\n	margin-top: 1.6vmin;\r\n	overflow: hidden;\r\n	text-overflow: ellipsis;\r\n	display: -webkit-box;\r\n	-webkit-line-clamp: 2;\r\n	-webkit-box-orient: vertical;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.gm-up-info\r\n	.gm-up-name\r\n	.gm-picture-text {\r\n	padding: 1px 4px;\r\n	border: 1px solid #fb7299;\r\n	color: #fb7299;\r\n	border-radius: 2px;\r\n	margin-right: 4px;\r\n	font-size: 2vmin;\r\n}\r\n';
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
      /** 是否已初始化CSS */
      isInitCSS: false,
      /** 是否正在加载下一页 */
      isLoadingNextPage: false
    },
    $data: {
      /** 监听滚动的观察器 */
      intersectionObserver: null
    },
    $ele: {
      $listView: null,
      $videoListBox: null,
      $videoList: null,
      $cardBox: null,
      $listViewShim: null
    },
    $cardGoto: {
      av: "av",
      picture: "picture"
    },
    init() {
      this.setCSS();
      domutils.ready(() => {
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
    /**
     * 重置状态
     */
    reset() {
      log.info("重置状态");
      this.$flag.isLoadingNextPage = false;
      this.removeScrollEvent();
      Object.keys(this.$ele).forEach((key) => {
        this.$ele[key] = null;
      });
    },
    /**
     * 添加推荐标签
     */
    addRecommendTag() {
      if (document.querySelector(".channel-menu a.recommend-tag")) {
        return;
      }
      let $vSwitcher = document.querySelector(
        ".channel-menu .v-switcher"
      );
      if (!$vSwitcher) {
        log.error("添加推荐标签失败，原因：.channel-menu .v-switcher不存在");
        return;
      }
      let $recommendTag = domutils.createElement(
        "a",
        {
          className: "v-switcher__header__tabs__item recommend-tag",
          innerHTML: "<span>推荐</span>"
        },
        {
          href: "javascript:;"
        }
      );
      let $recommendView = domutils.createElement("div", {
        className: "m-recommend-view",
        innerHTML: (
          /*html*/
          `
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
            `
        )
      });
      this.$ele.$listView = $recommendView.querySelector(
        ".list-view"
      );
      this.$ele.$videoListBox = $recommendView.querySelector(
        ".video-list-box"
      );
      this.$ele.$videoList = $recommendView.querySelector(
        ".video-list"
      );
      this.$ele.$cardBox = $recommendView.querySelector(
        ".card-box"
      );
      this.$ele.$listViewShim = $recommendView.querySelector(
        ".list-view__shim"
      );
      this.$ele.$listViewShim.style.cssText = `z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;`;
      let $myHead = document.querySelector("#app .m-head");
      if ($myHead) {
        $myHead.appendChild($recommendView);
      }
      domutils.on($recommendTag, "click", (event) => {
        utils.preventEvent(event);
        $recommendTag.classList.add("is-avtive");
        this.recommendClickEvent();
      });
      domutils.on(
        $vSwitcher,
        "click",
        () => {
          $recommendTag.classList.remove("is-avtive");
        },
        {
          capture: true
        }
      );
      domutils.on(this.$ele.$cardBox, "click", ".v-card", (event) => {
        utils.preventEvent(event);
        let $click = event.target;
        window.open($click.href, "_blank");
      });
      domutils.before($vSwitcher, $recommendTag);
      this.setScrollEvent();
      if (window.location.hash === "#/recommend/") {
        log.info("当前hash为推荐视频，出动触发");
        $recommendTag.click();
      }
    },
    /**
     * 推荐标签的点击事件（切换router）
     */
    async recommendClickEvent() {
      BilibiliUtils.goToUrl("#/recommend/", true);
    },
    /**
     * 设置滚动观察事件
     */
    setScrollEvent() {
      log.success("监听滚动: IntersectionObserver");
      this.$data.intersectionObserver = new IntersectionObserver(
        async (entries) => {
          if (!this.$flag.isLoadingNextPage && entries[0].isIntersecting) {
            this.$flag.isLoadingNextPage = true;
            await this.scrollEvent();
            this.$flag.isLoadingNextPage = false;
          }
        },
        { threshold: 0 }
      );
      this.$data.intersectionObserver.observe(this.$ele.$listViewShim);
    },
    /**
     * 移除滚动观察事件
     */
    removeScrollEvent() {
      var _a2;
      (_a2 = this.$data.intersectionObserver) == null ? void 0 : _a2.disconnect();
      this.$data.intersectionObserver = null;
    },
    /**
     * 滚动事件
     */
    async scrollEvent() {
      let videoInfo = await this.getRecommendVideoInfo();
      if (!videoInfo) {
        return;
      }
      log.success(["获取推荐视频信息", videoInfo]);
      let $fragment = document.createDocumentFragment();
      let allowLoadPictureCard = PopsPanel.getValue(
        "bili-head-recommend-push-graphic"
      );
      videoInfo.forEach((videoInfoItem) => {
        let $ele = null;
        if (videoInfoItem.goto === this.$cardGoto.av) {
          $ele = this.getRecommendItemAVElement(
            videoInfoItem
          );
        } else if (allowLoadPictureCard && videoInfoItem.goto === this.$cardGoto.picture) {
          $ele = this.getRecommendItemPictureElement(
            videoInfoItem
          );
        } else {
          log.error(["该goto暂未适配", videoInfoItem]);
          return;
        }
        $fragment.appendChild($ele);
      });
      this.$ele.$cardBox.appendChild($fragment);
    },
    /**
     * 获取推荐视频信息
     */
    async getRecommendVideoInfo() {
      var _a2;
      let getData = {
        appkey: AppKeyInfo.ios.appkey,
        access_key: ((_a2 = BilibiliQrCodeLogin.getAccessTokenInfo()) == null ? void 0 : _a2.access_token) || ""
      };
      let Api = "https://app.bilibili.com/x/v2/feed/index";
      let getResp = await httpx.get(
        Api + "?" + utils.toSearchParamsStr(getData),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );
      if (!getResp.status) {
        return;
      }
      let data2 = utils.toJSON(
        getResp.data.responseText
      );
      if (!BilibiliResponseCheck.isWebApiSuccess(data2)) {
        Qmsg.error(data2["message"]);
        return;
      }
      return data2.data.items;
    },
    /**
     * 获取推荐视频的每一个元素 图文
     * + picture
     */
    getRecommendItemPictureElement(data2) {
      let goto = data2.goto;
      let param = data2.param;
      let url = "/opus/" + param;
      let upName = data2.args.up_name;
      let title = data2.title;
      let cover = fixCover(data2.cover);
      let likeCount = data2.cover_left_text_1;
      let $vCard = domutils.createElement(
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
                `
        },
        {
          "data-param": param,
          "data-title": title,
          "data-goto": goto
        }
      );
      $vCard["data-picture"] = data2;
      return $vCard;
    },
    /**
     * 获取推荐视频的每一个元素
     * + av
     */
    getRecommendItemAVElement(data2) {
      var _a2;
      let goto = data2.goto;
      let aid = ((_a2 = data2 == null ? void 0 : data2.player_args) == null ? void 0 : _a2.aid) || data2.args.aid;
      let bvid = av2bv(aid);
      let url = "/video/" + bvid;
      let upName = data2.args.up_name;
      let title = data2.title;
      let cover = fixCover(data2.cover);
      let playCount = data2.cover_left_text_1;
      let commentCount = data2.cover_left_text_2;
      let videoTime = data2.cover_right_text;
      let $vCard = domutils.createElement(
        "a",
        {
          className: "v-card",
          href: url,
          innerHTML: (
            /*html*/
            `
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
                            <i class="iconfont icon_shipin_bofangshu"></i>
                            ${playCount}
                        </span>
                        <span>
                            <i class="iconfont icon_shipin_danmushu"></i>
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
                `
          )
        },
        {
          "data-aid": aid,
          "data-title": title,
          "data-goto": goto
        }
      );
      $vCard["data-video"] = data2;
      return $vCard;
    }
  };
  const BilibiliHead = {
    $flag: {
      isInit_reconfigurationTinyAppSettingButton: false,
      isInit_beautifyTopNavBar_css: false
    },
    init() {
      PopsPanel.execMenuOnce(
        "bili-head-supplementaryVideoStreamingInformation",
        () => {
          this.addVideoListUPInfo();
        }
      );
      PopsPanel.execMenu("bili-head-recommend-enable", () => {
        BilibiliRecommend.init();
      });
    },
    /**
     * 添加视频列表UP主信息
     */
    addVideoListUPInfo() {
      log.info("添加视频列表UP主信息");
      addStyle(
        /*css*/
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
      utils.waitNode(
        BilibiliData.className.head + " .video-list .card-box"
      ).then(() => {
        let lockFunc = new utils.LockFunction(() => {
          document.querySelectorAll(
            BilibiliData.className.head + " .video-list .card-box .v-card"
          ).forEach(($vcard) => {
            var _a2, _b, _c, _d, _e;
            let vueObj = VueUtils.getVue($vcard);
            let upName = ((_b = (_a2 = vueObj == null ? void 0 : vueObj.info) == null ? void 0 : _a2.author) == null ? void 0 : _b.name) || ((_d = (_c = vueObj == null ? void 0 : vueObj.info) == null ? void 0 : _c.owner) == null ? void 0 : _d.name);
            let duration = (_e = vueObj == null ? void 0 : vueObj.info) == null ? void 0 : _e.duration;
            if (upName && !$vcard.querySelector(".gm-up-info")) {
              let $upInfo = document.createElement("div");
              $upInfo.innerHTML = /*html*/
              `
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
            attributes: true
          },
          callback() {
            lockFunc.run();
          }
        });
      });
    },
    /**
     * 重构tinyApp右上角的设置按钮图标，改为用户头像什么的
     */
    async reconfigurationTinyAppSettingButton() {
      log.info(`重构tinyApp右上角的设置按钮图标`);
      if (!this.$flag.isInit_reconfigurationTinyAppSettingButton) {
        this.$flag.isInit_reconfigurationTinyAppSettingButton = true;
        addStyle(
          /*css*/
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
      let $iconConfig = await utils.waitNode(".nav-bar .icon-config", 1e4);
      if (!$iconConfig) {
        log.error("未找到设置按钮图标，无法重构");
        return;
      }
      $iconConfig.outerHTML = /*html*/
      `
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
            var _a2, _b, _c, _d;
            return typeof ((_d = (_c = (_b = (_a2 = vueIns == null ? void 0 : vueIns.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.common) == null ? void 0 : _c.userInfo) == null ? void 0 : _d.isLogin) === "boolean";
          },
          set(vueIns) {
            var _a2, _b, _c;
            let userInfo = (_c = (_b = (_a2 = vueIns == null ? void 0 : vueIns.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.common) == null ? void 0 : _c.userInfo;
            isLogin = userInfo == null ? void 0 : userInfo.isLogin;
            if (isLogin) {
              uid = userInfo == null ? void 0 : userInfo.mid;
              if (uid == null) {
                log.warn(`当前是脚本设置的isLogin但其实未登录账号`);
                isLogin = false;
                return;
              }
              userInfo == null ? void 0 : userInfo.uname;
              $img.src = (userInfo == null ? void 0 : userInfo.face) || $img.src;
            } else {
              log.warn(`经检测，Bilibili尚未登录账号`);
            }
          }
        }
      ]);
      domutils.on($gmFace, "click", (event) => {
        utils.preventEvent(event);
        if (isLogin) {
          if (uid != null) {
            let url = BilibiliUrlUtils.getUserSpaceUrl(uid);
            BilibiliUtils.goToUrl(url, false);
          } else {
            Qmsg.error("获取用户id失败");
          }
        } else {
          BilibiliUtils.goToLogin(window.location.href);
        }
      });
    },
    /**
     * 美化顶部navbar
     */
    beautifyTopNavBar() {
      log.info(`美化顶部navbar`);
      if (!this.$flag.isInit_beautifyTopNavBar_css) {
        this.$flag.isInit_beautifyTopNavBar_css = true;
        addStyle(
          /*css*/
          `
			/* 隐藏logo */
			.m-head .m-navbar .logo,
			/* 隐藏原有的搜索图标 */
			.m-head .m-navbar .icon-search{
				display: none !important;
			}
			/* 设置右侧的宽度撑开、逆反 */
			.m-head .m-navbar .right{
				width: 100%;
				display: flex;
				flex-direction: row-reverse;
				justify-content: flex-end;
			}
			/* 头像 */
			.m-head .m-navbar .gm-face{
				flex: 0 auto;
				margin-top: 1.86667vmin;
			}
			/* 新的输入框 */
			.m-head .m-navbar .gm-input-area{
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
			.m-head .m-navbar .gm-input-area .ic_search_tab{
				color: #a0a0a0;
				vertical-align: middle;
				font-size: 4.33333vmin;
			}
			/* 输入框内容 */
			.m-head .m-navbar .gm-input-area input[type="search"]{
				font-size: 3.46667vmin;
				color: #505050;
				border: none;
				background: transparent;
				width: 61.33333vmin;
				user-select: none !important;!i;!;
				padding-left: 2.122vmin;
				pointer-events: none;
			}
			`
        );
      }
      utils.waitNode(".m-head .m-navbar .icon-search", 1e4).then(async ($iconSearch) => {
        if (!$iconSearch) {
          return;
        }
        if ($iconSearch.parentElement.querySelector(".gm-input-area")) {
          return;
        }
        let $inputAreaContainer = domutils.createElement("div", {
          className: "gm-input-area",
          innerHTML: (
            /*html*/
            `
						<i class="iconfont ic_search_tab"></i>
						<input type="search" placeholder="" readonly="" disabled="">
					`
          )
        });
        let $input = $inputAreaContainer.querySelector("input");
        domutils.on($inputAreaContainer, "click", (event) => {
          utils.preventEvent(event);
          BilibiliUtils.goToUrl("/search", true);
        });
        domutils.after($iconSearch, $inputAreaContainer);
        let hotWordInfo = await BilibiliSearchApi.getSearchInputPlaceholder();
        if (hotWordInfo != null) {
          log.info([`热点信息：`, hotWordInfo]);
          $input.placeholder = hotWordInfo.show_name || hotWordInfo.name;
        }
      });
    }
  };
  const BilibiliVueProp = {
    init() {
      PopsPanel.execMenu("bili-setLogin", () => {
        this.setLogin();
      });
      PopsPanel.execMenu("bili-setIsClient", () => {
        this.setIsClient();
      });
      PopsPanel.execMenu("bili-setTinyApp", () => {
        this.setTinyApp();
        domutils.ready(() => {
          BilibiliHead.reconfigurationTinyAppSettingButton().then(() => {
            PopsPanel.execMenu("bili-beautifyTopNavBar", () => {
              BilibiliHead.beautifyTopNavBar();
            });
          });
        });
      });
    },
    /**
     * 设置登录
     *
     * + $store.state.common.noCallApp
     * + $store.state.common.userInfo.isLogin
     * + $store.state.loginInfo.isLogin
     */
    setLogin() {
      let GM_Cookie = new utils.GM_Cookie();
      let cookie_DedeUserID = GM_Cookie.get("DedeUserID");
      if (cookie_DedeUserID != null) {
        log.info(["Cookie DedeUserID已存在：", cookie_DedeUserID.value]);
      } else {
        GM_Cookie.set(
          {
            name: "DedeUserID",
            value: "2333"
          },
          (error) => {
            if (error) {
              log.error(error);
            } else {
              log.success("Cookie成功设置DedeUserID=>2333");
            }
          }
        );
      }
      VueUtils.waitVuePropToSet("#app", [
        {
          msg: "设置参数 $store.state.common.noCallApp",
          check(vueIns) {
            var _a2, _b, _c;
            return typeof ((_c = (_b = (_a2 = vueIns == null ? void 0 : vueIns.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.common) == null ? void 0 : _c.noCallApp) === "boolean";
          },
          set(vueIns) {
            log.success("成功设置参数 $store.state.common.noCallApp=true");
            vueIns.$store.state.common.noCallApp = true;
          }
        },
        {
          msg: "设置参数 $store.state.common.userInfo.isLogin",
          check(vueObj) {
            var _a2, _b, _c, _d;
            return typeof ((_d = (_c = (_b = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.common) == null ? void 0 : _c.userInfo) == null ? void 0 : _d.isLogin) === "boolean";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.common.userInfo.isLogin=true");
            vueObj.$store.state.common.userInfo.isLogin = true;
          }
        },
        {
          msg: "设置参数 $store.state.loginInfo.isLogin",
          check(vueObj) {
            var _a2, _b, _c;
            return typeof ((_c = (_b = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.loginInfo) == null ? void 0 : _c.isLogin) === "boolean";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.loginInfo.isLogin=true");
            vueObj.$store.state.loginInfo.isLogin = true;
          }
        }
      ]);
    },
    /**
     * 设置为客户端(不确定是否有用)
     *
     * + $store.state.video.isClient
     * + $store.state.opus.isClient
     * + $store.state.playlist.isClient
     * + $store.state.ver.bili
     * + $store.state.ver.biliVer 2333333
     */
    setIsClient() {
      VueUtils.waitVuePropToSet("#app", [
        {
          msg: "设置参数 $store.state.video.isClient",
          check(vueIns) {
            var _a2, _b, _c;
            return typeof typeof ((_c = (_b = (_a2 = vueIns == null ? void 0 : vueIns.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.video) == null ? void 0 : _c.isClient) === "boolean";
          },
          set(vueIns) {
            log.success("成功设置参数 $store.state.video.isClient=true");
            vueIns.$store.state.video.isClient = true;
          }
        },
        {
          msg: "设置参数 $store.state.opus.isClient=true",
          check(vueObj) {
            var _a2, _b, _c;
            return typeof ((_c = (_b = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.opus) == null ? void 0 : _c.isClient) === "boolean";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.opus.isClient");
            vueObj.$store.state.opus.isClient = true;
          }
        },
        {
          msg: "设置参数 $store.state.playlist.isClient",
          check(vueObj) {
            var _a2, _b, _c;
            return typeof ((_c = (_b = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.playlist) == null ? void 0 : _c.isClient) === "boolean";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.playlist.isClient=true");
            vueObj.$store.state.playlist.isClient = true;
          }
        },
        {
          msg: "设置参数 $store.state.ver.bili",
          check(vueObj) {
            var _a2, _b, _c;
            return typeof ((_c = (_b = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.ver) == null ? void 0 : _c.bili) === "boolean";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.ver.bili=true");
            vueObj.$store.state.ver.bili = true;
          }
        },
        {
          msg: "设置参数 $store.state.ver.biliVer",
          check(vueObj) {
            var _a2, _b, _c;
            return typeof ((_c = (_b = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.ver) == null ? void 0 : _c.biliVer) === "number";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.ver.biliVer=2333333");
            vueObj.$store.state.ver.biliVer = 2333333;
          }
        }
      ]);
    },
    /**
     * 设置为微应用(可以看评论且视频稿件变大)
     *
     * + __vue__.$store.state.common.tinyApp `true`
     */
    setTinyApp() {
      VueUtils.waitVuePropToSet("#app", [
        {
          msg: "设置参数 $store.state.common.tinyApp",
          check(vueIns) {
            var _a2, _b, _c;
            return typeof ((_c = (_b = (_a2 = vueIns == null ? void 0 : vueIns.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.common) == null ? void 0 : _c.tinyApp) === "boolean";
          },
          set(vueIns) {
            vueIns.$store.state.common.tinyApp = true;
            log.success("成功设置参数 $store.state.common.tinyApp=true");
          }
        }
      ]);
    }
  };
  const BilibiliReadMobile = {
    init() {
      PopsPanel.onceExec("bili-pc-read-mobile-autoExpand", () => {
        return this.autoExpand();
      });
    },
    /**
     * 自动展开
     */
    autoExpand() {
      log.info("自动展开");
      return [
        addStyle(
          /*css*/
          `
			${BilibiliPCData.className.read.mobile} .limit{
				overflow: unset !important;
				max-height: unset !important;
			}`
        ),
        // 屏蔽 【展开阅读全文】
        BilibiliUtils.addBlockCSS(
          BilibiliPCData.className.read.mobile + " .read-more"
        )
      ];
    }
  };
  const BilibiliSpace = {
    init() {
      PopsPanel.execMenuOnce("bili-space-repairRealJump", () => {
        this.repairRealJump();
      });
    },
    /**
     * 修复视频|动态的正确跳转
     */
    repairRealJump() {
      domutils.on(
        document,
        "click",
        (event) => {
          let $click = event.target;
          let $forwardingCard = $click.closest(".main .forwardingCard") || $click.matches(".main .forwardingCard") && $click;
          if ($forwardingCard) {
            utils.preventEvent(event);
            let dynamicId = $forwardingCard.getAttribute("id");
            log.info(`获取的动态id为：${dynamicId}`);
            let url = BilibiliUrlUtils.getUserSpaceDynamicUrl(dynamicId);
            BilibiliUtils.goToUrl(url);
          }
        },
        {
          capture: true
        }
      );
    }
  };
  const Bilibili = {
    init() {
      BilibiliNetworkHook.init();
      BilibiliVueProp.init();
      PopsPanel.execMenuOnce("bili-allowCopy", () => {
        return addStyle(
          /*css*/
          `
				.v-drawer{
					-webkit-user-select: unset !important;
					-moz-user-select: unset !important;
					user-select: unset !important;
				}
			`
        );
      });
      PopsPanel.onceExec("listenRouterChange", () => {
        this.listenRouterChange();
      });
      PopsPanel.execMenuOnce("bili-hookSetTimeout_autoOpenApp", () => {
        log.info("hook  window.setTimeout autoOpenApp");
        BilibiliHook.setTimeout("autoOpenApp");
        BilibiliHook.setTimeout("bilibili://");
        BilibiliHook.setTimeout("void 0 !== y && document[y]");
      });
      PopsPanel.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp", () => {
        log.info("覆盖元素.launch-app-btn上的openApp");
        BilibiliHook.overRideLaunchAppBtn_Vue_openApp();
      });
      PopsPanel.execMenuOnce("bili-cover-bili-open-app-open", () => {
        log.info(`覆盖元素bili-open-app上的opener.open`);
        BilibiliHook.overRideBiliOpenApp();
      });
      PopsPanel.execMenuOnce("bili-head-beautify", () => {
        log.info("添加美化CSS");
        addStyle(BilibiliBeautifyCSS);
      });
      if (BilibiliRouter.isVideo()) {
        log.info("Router: 视频稿件");
        BilibiliVideo.init();
      } else if (BilibiliRouter.isOpus()) {
        log.info("Router: 专栏稿件");
        BilibiliOpus.init();
      } else if (BilibiliPCRouter.isReadMobile()) {
        log.info("PC-Router: 专栏稿件");
        BilibiliReadMobile.init();
      } else if (BilibiliRouter.isDynamic()) {
        log.info("Router: 动态");
        BilibiliDynamic.init();
      } else if (BilibiliRouter.isBangumi()) {
        log.info("Router: 番剧");
        BilibiliBangumi.init();
      } else if (BilibiliRouter.isSearch()) {
        log.info("Router: 搜索");
        BilibiliSearch.init();
      } else if (BilibiliRouter.isLive()) {
        log.info("Router: 直播");
        BilibiliLive.init();
      } else if (BilibiliRouter.isTopicDetail()) {
        log.info("Router: 话题");
      } else if (BilibiliRouter.isHead()) {
        log.info("Router: 首页之类的");
        BilibiliHead.init();
      } else if (BilibiliRouter.isSpace()) {
        log.info("Router: 个人空间");
        BilibiliSpace.init();
      } else {
        log.error("该Router暂未适配，可能是首页之类：" + window.location.href);
      }
      domutils.ready(() => {
        if (BilibiliRouter.isBangumi()) {
          let isInitPlayer = false;
          VueUtils.waitVuePropToSet(
            () => document.querySelector(".player-wrapper"),
            [
              {
                msg: "等待获取.player-wrapper上的$0.__vue__.player.player.on_video_play",
                check(vueIns) {
                  var _a2, _b;
                  return typeof ((_b = (_a2 = vueIns == null ? void 0 : vueIns.player) == null ? void 0 : _a2.player) == null ? void 0 : _b.on_video_play) == "function";
                },
                set(vueIns) {
                  var _a2, _b;
                  log.success(
                    `成功覆盖.player-wrapper上的$0.__vue__.player.player.on_video_play`
                  );
                  let originFn = (_b = (_a2 = vueIns == null ? void 0 : vueIns.player) == null ? void 0 : _a2.player) == null ? void 0 : _b.on_video_play;
                  if (originFn.prototype.isHook) {
                    log.warn("函数on_video_play已被hook，取消覆盖");
                  }
                  let on_video_play = function($video) {
                    if (!isInitPlayer) {
                      isInitPlayer = true;
                      BilibiliPlayer.$player.parseBiliH5PlayerToPlayer(
                        vueIns.player
                      );
                      BilibiliPlayer.init();
                    }
                    return originFn.apply(this, arguments);
                  };
                  on_video_play.prototype.isHook = true;
                  vueIns.player.player.on_video_play = on_video_play;
                }
              }
            ]
          );
        } else if (BilibiliRouter.isVideo()) {
          BilibiliPlayer.init();
        }
      });
    },
    /**
     * 监听路由变化
     */
    listenRouterChange() {
      utils.waitNode("#app").then(($app) => {
        let check = function(vueObj) {
          var _a2;
          return typeof ((_a2 = vueObj == null ? void 0 : vueObj.$router) == null ? void 0 : _a2.afterEach) === "function";
        };
        utils.waitVueByInterval($app, check).then(() => {
          let vueObj = VueUtils.getVue($app);
          if (vueObj == null) {
            return;
          }
          if (check(vueObj)) {
            log.success("成功设置监听路由变化");
            $app.__vue__.$router.beforeEach(
              (to, from, next) => {
                log.info([
                  "路由变化 => 更新前",
                  {
                    to,
                    from
                  }
                ]);
                if (PopsPanel.getValue("bili-repairVueRouter404")) {
                  if (to.name === "space") {
                    window.location.href = to.fullPath;
                    return;
                  }
                }
                if (to.fullPath.startsWith("/video") && from.fullPath.startsWith("/video") && PopsPanel.getValue(
                  "bili-video-forceThisPageToRefreshAndRedirect"
                )) {
                  window.location.href = to.fullPath;
                  return;
                }
                next();
              }
            );
            $app.__vue__.$router.afterEach(
              (to, from) => {
                log.info([
                  "路由变化 => 更新后",
                  {
                    to,
                    from
                  }
                ]);
                if (to["hash"] === "#/seeCommentReply" || from["hash"] === "#/seeCommentReply") {
                  log.info("该路由变化判定为#/seeCommentReply，不重载");
                  return;
                }
                PopsPanel.execMenu("bili-listenRouterChange", () => {
                  Bilibili.init();
                });
              }
            );
          }
        });
      });
    }
  };
  PopsPanel.init();
  Bilibili.init();
  __pops.config.cssText.index += /*css*/
`
/* bilibili颜色 #FB7299 */
.pops{
    --bili-color: #FB7299;
    --bili-color-rgb: 251, 114, 153;
}
`  ;
  __pops.config.cssText.panelCSS += /*css*/
`

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
`  ;

})(Qmsg, Utils, DOMUtils, pops, MD5, Artplayer, artplayerPluginDanmuku, MD5);