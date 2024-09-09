// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.9.9
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
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.2.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.3.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.5.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/md5@2.3.0/dist/md5.min.js
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

(a=>{function e(n){if(typeof n!="string")throw new TypeError("cssText must be a string");let p=document.createElement("style");return p.setAttribute("type","text/css"),p.innerHTML=n,document.head?document.head.appendChild(p):document.body?document.body.appendChild(p):document.documentElement.childNodes.length===0?document.documentElement.appendChild(p):document.documentElement.insertBefore(p,document.documentElement.childNodes[0]),p}if(typeof GM_addStyle=="function"){GM_addStyle(a);return}e(a)})(' @charset "UTF-8";.m-video2-awaken-btn,.openapp-dialog,.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-home .launch-app-btn.home-float-openapp,.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp{display:none!important}#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp,#app .video .m-video-season-panel .launch-app-btn .open-app{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp,#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn,#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp{display:none!important}#app.main-container bili-open-app.btn-download{display:none!important}#app .read-app-main bili-open-app{display:none!important}html{--bili-color: #fb7299;--bili-color-rgb: 251, 114, 153} ');

(function (Qmsg, Utils, DOMUtils, pops, md5) {
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
  const BilibiliPlayerToast = {
    $flag: {
      isInitCSS: false
    },
    $data: {
      /** 让Toast显示的className */
      showClassName: "mplayer-show"
    },
    toast(config) {
      if (typeof config === "string") {
        config = {
          text: config
        };
      }
      if (!this.$flag.isInitCSS) {
        this.$flag.isInitCSS = true;
        addStyle(
          /*css*/
          `
            .mplayer-toast{
                -webkit-transition-property: opacity, bottom;
                transition-property: opacity, bottom;
            }
            `
        );
      }
      let $toast = domutils.createElement(
        "div",
        {
          className: "mplayer-toast " + this.$data.showClassName
        },
        {
          "data-from": "gm"
        }
      );
      if (config.showCloseBtn) {
        let $closeBtn = domutils.createElement("div", {
          className: "mplayer-toast-close",
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
      }
      let $text = domutils.createElement("span", {
        className: "mplayer-toast-text",
        innerText: config.text
      });
      $toast.appendChild($text);
      if (typeof config.timeText === "string" && config.timeText.trim() != "") {
        let $time = domutils.createElement("span", {
          className: "mplayer-toast-time",
          innerText: config.timeText
        });
        $toast.appendChild($time);
      }
      if (typeof config.jumpText === "string" && config.jumpText.trim() != "") {
        let $jump = domutils.createElement("span", {
          className: "mplayer-toast-jump",
          innerText: config.jumpText
        });
        $toast.appendChild($jump);
      }
      let $parent = config.parent ?? document.querySelector(".mplayer");
      this.setTransitionendEvent($toast);
      let timeout = typeof config.timeout === "number" && !isNaN(config.timeout) ? config.timeout : 3500;
      if ($parent) {
        let pageToastList = Array.from(
          document.querySelectorAll(
            `.mplayer-toast[data-from="gm"]`
          )
        );
        Array.from(
          document.querySelectorAll(
            `.mplayer-toast:not([data-from="gm"])`
          )
        ).forEach(($ele) => {
          if (!$ele.classList.contains(this.$data.showClassName)) {
            $ele.remove();
            return;
          }
          this.setTransitionendEvent($ele);
        });
        if (pageToastList.length > 1) {
          for (let index = 0; index <= pageToastList.length - 1 - 1; index++) {
            const $ele = pageToastList[index];
            $ele.classList.remove(this.$data.showClassName);
            pageToastList.splice(index, 1);
            index--;
          }
        }
        if (pageToastList.length) {
          if (pageToastList.length > 1) {
            log.warn("意外情况。pageToastList内不止一个");
          }
          const $ele = pageToastList[0];
          let bottom = 46 + 46 * 1;
          $ele.setAttribute("data-transition", "move");
          $ele.style.bottom = bottom + "px";
          Reflect.set($ele, "__nextToast", $toast);
        } else {
          $parent.appendChild($toast);
        }
      } else {
        throw new TypeError("toast parent is null");
      }
      setTimeout(() => {
        $toast.classList.remove(this.$data.showClassName);
      }, timeout);
      return $toast;
    },
    /**
     * 监听过渡结束
     */
    setTransitionendEvent($toast) {
      let animationEndNameList = [
        "webkitTransitionEnd",
        "mozTransitionEnd",
        "MSTransitionEnd",
        "otransitionend",
        "transitionend"
      ];
      let that = this;
      domutils.on(
        $toast,
        animationEndNameList,
        function(event) {
          let $nextToast = Reflect.get($toast, "__nextToast");
          let dataTransition = $toast.getAttribute("data-transition");
          if ($nextToast) {
            domutils.after($toast, $nextToast);
          }
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
      } else if (BilibiliRouter.isBangumi()) {
        PopsPanel.execMenuOnce("bili-bangumi-xhr-unlockQuality", () => {
          this.hook_bangumi_html5();
        });
      }
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
              BilibiliPlayer.$data.videoQuality.forEach((item) => {
                if (item.quality == unlockQuality) {
                  item.isActive = true;
                }
              });
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
  const BilibiliApi_Video = {
    /**
     * 获取视频播放地址，avid或bvid必须给一个
     * + /x/player/playurl
     * @param config
     * @param extraParams 额外参数，一般用于hook network参数内的判断
     */
    async playUrl(config, extraParams) {
      let getData = {
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
        Reflect.set(getData, "platform", "html5");
      }
      if ("avid" in config) {
        Reflect.set(getData, "avid", config.avid);
      } else if ("bvid" in config) {
        Reflect.set(getData, "bvid", config.bvid);
      } else {
        throw new TypeError("avid or bvid must give one");
      }
      if (typeof extraParams === "object") {
        Object.assign(getData, extraParams);
      }
      let getResp = await httpx.get(
        "https://api.bilibili.com/x/player/playurl?" + utils.toSearchParamsStr(getData),
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
     * 点赞视频（web端）
     * @param config
     */
    async like(config) {
      var _a2;
      let getData = {
        like: config.like,
        csrf: ((_a2 = GMCookie.get("bili_jct")) == null ? void 0 : _a2.value) || ""
      };
      if ("avid" in config) {
        Reflect.set(getData, "avid", config.avid);
      } else if ("bvid" in config) {
        Reflect.set(getData, "bvid", config.bvid);
      } else {
        throw new TypeError("avid or bvid must give one");
      }
      let getResp = await httpx.get(
        "https://api.bilibili.com/x/web-interface/archive/like?" + utils.toSearchParamsStr(getData),
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
        let videoInfo = await BilibiliApi_Video.playUrl(
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
      videoQuality: []
    },
    init() {
      this.$data.videoQuality = [];
      BilibiliDanmaku.init();
      this.setVideoSpeed(1);
      BilibiliPlayerUI.init();
      this.generateVideoInfo();
      PopsPanel.execMenu("bili-video-playerAutoPlayVideo", () => {
        this.autoPlay();
      });
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
        try {
          let playerPromise = await this.$player.playerPromise();
          setTimeout(() => {
            var _a2;
            log.success("player：自动播放视频");
            (_a2 = BilibiliPlayer.player) == null ? void 0 : _a2.play();
          }, 500);
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
     * 根据avid或者bvid获取视频的播放地址信息
     *
     * 一般用来给清晰度按钮使用
     */
    async generateVideoInfo() {
      let playerPromise = await this.$player.playerPromise();
      let bvid = playerPromise.config.bvid;
      let cid = playerPromise.config.cid;
      if (!bvid) {
        log.error("获取bvid失败");
        return;
      }
      let videoInfo = await BilibiliApi_Video.playUrl({
        bvid,
        cid
      });
      if (!videoInfo) {
        return;
      }
      log.success(["成功获取当前视频的具体信息", videoInfo]);
      videoInfo.quality;
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
        playerPromise.danmaku.danmakuCore.config.danmakuFilter = ownFilter;
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
     * @returns
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
            console.log("重复：" + findIndex);
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
                  ),
                  UISwitch(
                    "记住选择的清晰度",
                    "bili-rememberUserChooseQuality",
                    true,
                    void 0,
                    "需开启 - 修复【清晰度】按钮"
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
                    "修复视频底部区域高度",
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
                    "美化显示",
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
                    "自动播放视频",
                    "bili-video-playerAutoPlayVideo",
                    true,
                    void 0,
                    "需开启【initPlayer】"
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
            text: "变量设置",
            type: "deepMenu",
            forms: [
              {
                text: "变量设置",
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
            text: "网络拦截",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "解锁清晰度",
                    "bili-bangumi-xhr-unlockQuality",
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
                    "bili-bangumi-hook-callApp",
                    true,
                    void 0,
                    ""
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
  const TVKeyInfo = {
    appkey: "4409e2ce8ffd12b8",
    appsec: "59b43e04ad6965f34319062b478f83dd"
  };
  function appSign(params, appkey, appsec) {
    params.appkey = appkey;
    const searchParams = new URLSearchParams(params);
    searchParams.sort();
    return md5(searchParams.toString() + appsec);
  }
  const BilibiliUtils = {
    /**
     * 获取元素上的__vue__属性
     * @param element
     * @returns
     */
    getVue(element) {
      return element == null ? void 0 : element.__vue__;
    },
    /**
     * 等待vue属性并进行设置
     */
    waitVuePropToSet($target, needSetList) {
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
      if (!Array.isArray(needSetList)) {
        this.waitVuePropToSet($target, [needSetList]);
        return;
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
          let vueObj = BilibiliUtils.getVue(target);
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
          let vueObj = BilibiliUtils.getVue(target);
          if (vueObj == null) {
            return;
          }
          needSetOption.set(vueObj);
        });
      });
    },
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
      let vueObj = BilibiliUtils.getVue($app);
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
    }
  };
  function isWebApiSuccess(json) {
    return (json == null ? void 0 : json.code) === 0 && ((json == null ? void 0 : json.message) === "0" || (json == null ? void 0 : json.message) === "success");
  }
  const BilibiliApi_Login = {
    /**
     * 获取登录二维码信息（TV端）
     * https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/docs/login/login_action/QR.md#%E7%94%B3%E8%AF%B7%E4%BA%8C%E7%BB%B4%E7%A0%81(TV%E7%AB%AF)
     */
    async getQrCodeInfo() {
      var _a2;
      let Api = "https://passport.bilibili.com/x/passport-tv-login/qrcode/auth_code";
      let postData = {
        appkey: TVKeyInfo.appkey,
        local_id: "0",
        csrf: ((_a2 = GMCookie.get("bili_jct")) == null ? void 0 : _a2.value) || "",
        ts: "0"
      };
      let sign = appSign(postData, TVKeyInfo.appkey, TVKeyInfo.appsec);
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
      return data2.data;
    },
    async poll(auth_code) {
      let Api = "https://passport.bilibili.com/x/passport-tv-login/qrcode/poll";
      let postData = {
        appkey: TVKeyInfo.appkey,
        auth_code,
        local_id: "0",
        ts: "0"
      };
      let sign = appSign(postData, TVKeyInfo.appkey, TVKeyInfo.appsec);
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
      const msgMap = {
        "0": "成功",
        "-3": "API校验密匙错误",
        "-400": "请求错误",
        "-404": "啥都木有",
        "86038": "二维码已失效",
        "86039": "二维码尚未确认",
        "86090": "二维码已扫码未确认"
      };
      if (!isWebApiSuccess(json)) {
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
      let qrcodeInfo = await BilibiliApi_Login.getQrCodeInfo();
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
        let pollInfo = await BilibiliApi_Login.poll(qrcodeInfo.auth_code);
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
     * @param [isReverse=false] 逆反判断菜单启用
     */
    execMenu(key, callback, isReverse = false) {
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
     */
    execMenuOnce(key, callback, getValueFn, handleValueChangeFn) {
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
      let changeCallBack = (currentValue) => {
        let resultList = [];
        if (currentValue) {
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
          if (changedMainValue !== void 0) {
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
      if (window.innerHeight > 450) {
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
  const BilibiliHook = {
    $isHook: {
      windowPlayerAgent: false,
      hookWebpackJsonp_openApp: false,
      overRideLaunchAppBtn_Vue_openApp: false
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
            let vueObj = BilibiliUtils.getVue($launchAppBtn);
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
        BilibiliUtils.waitVuePropToSet("." + playerClassName, [
          {
            msg: "等待设置参数 fullScreenCallApp",
            check(vueObj) {
              return typeof (vueObj == null ? void 0 : vueObj.fullScreenCallApp) === "boolean";
            },
            set(vueObj) {
              vueObj.fullScreenCallApp = false;
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
      BilibiliUtils.waitVuePropToSet(BilibiliData.className.video, [
        {
          msg: "设置属性 __vue__.info.is_upower_exclusive",
          check(vueObj) {
            var _a2;
            return typeof ((_a2 = vueObj == null ? void 0 : vueObj.info) == null ? void 0 : _a2.is_upower_exclusive) === "boolean";
          },
          set(vueObj) {
            vueObj.info.is_upower_exclusive = false;
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
      BilibiliUtils.waitVuePropToSet(
        BilibiliData.className.video + " .m-video-player",
        [
          {
            msg: "设置参数 playBtnNoOpenApp",
            check(vueObj) {
              return typeof vueObj.playBtnNoOpenApp === "boolean";
            },
            set(vueObj) {
              vueObj.playBtnNoOpenApp = true;
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
          let vueObj = BilibiliUtils.getVue($vCard);
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
          let vueObj = BilibiliUtils.getVue($vCard);
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
          let vueObj = BilibiliUtils.getVue($click);
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
        let vueObj = BilibiliUtils.getVue($click);
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
            let vueObj = BilibiliUtils.getVue($app);
            if (vueObj == null) {
              return false;
            }
            return typeof ((_b = (_a2 = vueObj == null ? void 0 : vueObj.$router) == null ? void 0 : _a2.options) == null ? void 0 : _b.scrollBehavior) != null;
          },
          250,
          1e4
        ).then((result) => {
          let appVue = BilibiliUtils.getVue($app);
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
        let appVue = BilibiliUtils.getVue($app);
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
    }
  };
  const BilibiliBangumiVueProp = {
    init() {
      PopsPanel.execMenu("bili-bangumi-setPay", () => {
        this.setPay();
      });
    },
    /**
     * 设置已购买番剧(会员？)
     *
     * + $store.state.userStat.pay 1
     * + $store.state.mediaInfo.user_status.pay 1
     */
    setPay() {
      BilibiliUtils.waitVuePropToSet("#app", [
        {
          msg: "设置参数 $store.state.userStat.pay",
          check(vueObj) {
            var _a2, _b, _c;
            return typeof typeof ((_c = (_b = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.userStat) == null ? void 0 : _c.pay) === "number";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.userStat.pay=1");
            vueObj.$store.state.userStat.pay = 1;
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
    }
  };
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
  const BilibiliBangumi = {
    init() {
      BilibiliBangumiVueProp.init();
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
      BilibiliUtils.waitVuePropToSet("#app", [
        {
          msg: "设置参数 $store.state.userStat.pay",
          check(vueObj) {
            var _a2, _b, _c;
            return typeof typeof ((_c = (_b = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.userStat) == null ? void 0 : _c.pay) === "number";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.userStat.pay=1");
            vueObj.$store.state.userStat.pay = 1;
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
    }
  };
  const BilibiliSearch = {
    init() {
      PopsPanel.execMenuOnce("bili-search-cover-cancel", () => {
        this.coverCancel();
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
          let vueObj = BilibiliUtils.getVue($click);
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
          let vueObj = BilibiliUtils.getVue($click);
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
          let vueObj = BilibiliUtils.getVue($click);
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
          let vueObj = BilibiliUtils.getVue($click);
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
          let oid = $click.getAttribute("data-oid") || ((_b = (_a2 = BilibiliUtils.getVue($click)) == null ? void 0 : _a2.$props) == null ? void 0 : _b.rid);
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
          let vueObj = BilibiliUtils.getVue($click);
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
        appkey: TVKeyInfo.appkey,
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
      if (!isWebApiSuccess(data2)) {
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
            let vueObj = BilibiliUtils.getVue($vcard);
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
          Bilibili.reconfigurationTinyAppSettingButton();
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
      BilibiliUtils.waitVuePropToSet("#app", [
        {
          msg: "设置参数 $store.state.common.noCallApp",
          check(vueObj) {
            var _a2, _b, _c;
            return typeof ((_c = (_b = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.common) == null ? void 0 : _c.noCallApp) === "boolean";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.common.noCallApp=true");
            vueObj.$store.state.common.noCallApp = true;
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
      BilibiliUtils.waitVuePropToSet("#app", [
        {
          msg: "设置参数 $store.state.video.isClient",
          check(vueObj) {
            var _a2, _b, _c;
            return typeof typeof ((_c = (_b = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.video) == null ? void 0 : _c.isClient) === "boolean";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.video.isClient=true");
            vueObj.$store.state.video.isClient = true;
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
      BilibiliUtils.waitVuePropToSet("#app", [
        {
          msg: "设置参数 $store.state.common.tinyApp",
          check(vueObj) {
            var _a2, _b, _c;
            return typeof ((_c = (_b = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.common) == null ? void 0 : _c.tinyApp) === "boolean";
          },
          set(vueObj) {
            vueObj.$store.state.common.tinyApp = true;
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
      });
      PopsPanel.execMenuOnce("bili-overrideLaunchAppBtn_Vue_openApp", () => {
        log.info("覆盖元素.launch-app-btn上的openApp");
        BilibiliHook.overRideLaunchAppBtn_Vue_openApp();
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
          BilibiliUtils.waitVuePropToSet(
            () => document.querySelector(".player-wrapper"),
            [
              {
                msg: "等待获取.player-wrapper上的$0.__vue__.player.player.on_video_play",
                check(vueObj) {
                  var _a2, _b;
                  return typeof ((_b = (_a2 = vueObj == null ? void 0 : vueObj.player) == null ? void 0 : _a2.player) == null ? void 0 : _b.on_video_play) == "function";
                },
                set(vueObj) {
                  var _a2, _b;
                  log.success(
                    `成功覆盖.player-wrapper上的$0.__vue__.player.player.on_video_play`
                  );
                  let originFn = (_b = (_a2 = vueObj == null ? void 0 : vueObj.player) == null ? void 0 : _a2.player) == null ? void 0 : _b.on_video_play;
                  if (originFn.prototype.isHook) {
                    log.warn("函数on_video_play已被hook，取消覆盖");
                  }
                  let on_video_play = function($video) {
                    if (!isInitPlayer) {
                      isInitPlayer = true;
                      BilibiliPlayer.$player.parseBiliH5PlayerToPlayer(
                        vueObj.player
                      );
                      BilibiliPlayer.init();
                    }
                    return originFn.apply(this, arguments);
                  };
                  on_video_play.prototype.isHook = true;
                  vueObj.player.player.on_video_play = on_video_play;
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
          let vueObj = BilibiliUtils.getVue($app);
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
    },
    /**
     * 重构tinyApp右上角的设置按钮图标，改为用户头像什么的
     */
    reconfigurationTinyAppSettingButton() {
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
      utils.waitNode(".nav-bar .icon-config", 1e4).then(($iconConfig) => {
        if (!$iconConfig) {
          return;
        }
        $iconConfig.outerHTML = `
			<div class="gm-face">
				<div class="gm-face-avatar">
					<img src="https://i0.hdslb.com/bfs/face/member/noface.jpg@48w_48h_1c.webp">
				</div>
			</div>
			`;
        let isLogin = false;
        let uid = null;
        let $gmFace = document.querySelector(".gm-face");
        let $img = $gmFace.querySelector("img");
        BilibiliUtils.waitVuePropToSet("#app", [
          {
            check(vueObj) {
              var _a2, _b, _c, _d;
              return typeof ((_d = (_c = (_b = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.common) == null ? void 0 : _c.userInfo) == null ? void 0 : _d.isLogin) === "boolean";
            },
            set(vueObj) {
              var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
              isLogin = (_d = (_c = (_b = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b.common) == null ? void 0 : _c.userInfo) == null ? void 0 : _d.isLogin;
              uid = (_h = (_g = (_f = (_e = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _e.state) == null ? void 0 : _f.common) == null ? void 0 : _g.userInfo) == null ? void 0 : _h.mid;
              (_l = (_k = (_j = (_i = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _i.state) == null ? void 0 : _j.common) == null ? void 0 : _k.userInfo) == null ? void 0 : _l.uname;
              $img.src = (_p = (_o = (_n = (_m = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _m.state) == null ? void 0 : _n.common) == null ? void 0 : _o.userInfo) == null ? void 0 : _p.face;
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

})(Qmsg, Utils, DOMUtils, pops, MD5);