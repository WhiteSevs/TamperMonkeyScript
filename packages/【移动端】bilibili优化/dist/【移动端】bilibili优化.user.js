// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.6.15
// @author       WhiteSevs
// @description  bilibili(哔哩哔哩)优化，免登录等
// @license      GPL-3.0-only
// @icon         https://i0.hdslb.com/bfs/static/jinkela/long/images/512.png
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://m.bilibili.com/*
// @match        *://live.bilibili.com/*
// @require      https://update.greasyfork.org/scripts/494167/1376186/CoverUMD.js
// @require      https://update.greasyfork.org/scripts/456485/1384984/pops.js
// @require      https://update.greasyfork.org/scripts/497907/1394170/QRCodeJS.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.1.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@1.4.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.1.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/md5@2.3.0/dist/md5.min.js
// @connect      *
// @connect      m.bilibili.com
// @connect      www.bilibili.com
// @connect      api.bilibili.com
// @connect      app.bilibili.com
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

(a=>{function e(n){if(typeof n!="string")throw new TypeError("cssText must be a string");let p=document.createElement("style");return p.setAttribute("type","text/css"),p.innerHTML=n,document.head?document.head.appendChild(p):document.body?document.body.appendChild(p):document.documentElement.childNodes.length===0?document.documentElement.appendChild(p):document.documentElement.insertBefore(p,document.documentElement.childNodes[0]),p}if(typeof GM_addStyle=="function"){GM_addStyle(a);return}e(a)})(" .m-video2-awaken-btn,.openapp-dialog,.m-head .launch-app-btn.m-nav-openapp,.m-head .launch-app-btn.home-float-openapp,.m-home .launch-app-btn.home-float-openapp,.m-space .launch-app-btn.m-space-float-openapp,.m-space .launch-app-btn.m-nav-openapp{display:none!important}#app .video .launch-app-btn.m-video-main-launchapp:has([class^=m-video2-awaken]),#app .video .launch-app-btn.m-nav-openapp,#app .video .mplayer-widescreen-callapp,#app .video .launch-app-btn.m-float-openapp,#app .video .m-video-season-panel .launch-app-btn .open-app{display:none!important}#app.LIVE .open-app-btn.bili-btn-warp,#app .m-dynamic .launch-app-btn.m-nav-openapp,#app .m-dynamic .dynamic-float-openapp.dynamic-float-btn,#app .m-opus .float-openapp.opus-float-btn,#app .m-opus .v-switcher .launch-app-btn.list-more,#app .m-opus .opus-nav .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-nav-openapp,#app .topic-detail .launch-app-btn.m-topic-float-openapp{display:none!important}#app.main-container bili-open-app.btn-download{display:none!important} ");

(function (Qmsg, Utils, DOMUtils, md5) {
  'use strict';

  var _a, _b;
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const _SCRIPT_NAME_ = "【移动端】bilibili优化";
  const utils = Utils.noConflict();
  const domutils = DOMUtils.noConflict();
  const pops = _monkeyWindow.pops || _unsafeWindow.pops;
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
    logMaxCount: 2e4,
    autoClearConsole: true,
    tag: true
  });
  Qmsg.config({
    position: "bottom",
    html: true,
    maxNums: 5,
    autoClose: true,
    showClose: false,
    showReverse: true
  });
  const GM_Menu = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand
  });
  const httpx = new utils.Httpx(_GM_xmlhttpRequest);
  httpx.config({
    logDetails: DEBUG,
    onabort() {
      Qmsg.warning("请求取消");
    },
    ontimeout() {
      Qmsg.error("请求超时");
    },
    onerror(response) {
      Qmsg.error("请求异常");
      log.error(["httpx-onerror 请求异常", response]);
    }
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
  const addStyle = utils.addStyle;
  const KEY = "GM_Panel";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
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
  const SettingUICommon = {
    id: "panel-common",
    title: "通用",
    forms: [
      {
        text: "功能",
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
            "修复点击UP主正确进入空间",
            "bili-repairEnterUserHome",
            true,
            void 0,
            "可以修复点击UP主进入个人空间但是跳转404的问题"
          ),
          UISwitch(
            "新标签页打开",
            "bili-go-to-url-blank",
            false,
            void 0,
            "通过开启【覆盖点击事件】相关的设置，通过新标签页打开链接"
          )
        ]
      },
      {
        text: "变量设置",
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
      },
      {
        text: "劫持/拦截",
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
  };
  const BilibiliRouter = {
    /**
     * 判断当前路径
     * + /video/
     */
    isVideo() {
      return window.location.pathname.startsWith("/video/");
    },
    /**
     * 判断当前路径
     * + /banggumi/
     */
    isBangumi() {
      return window.location.pathname.startsWith("/bangumi/");
    },
    /**
     * 判断当前路径
     * + /search
     */
    isSearch() {
      return window.location.pathname.startsWith("/search");
    },
    /**
     * 判断当前路径
     * + live.bilibili.com
     */
    isLive() {
      return window.location.hostname === "live.bilibili.com";
    },
    /**
     * 判断当前路径
     * + /opus
     */
    isOpus() {
      return window.location.pathname.startsWith("/opus");
    },
    /**
     * 判断当前路径
     * + /topic-detail
     */
    isTopicDetail() {
      return window.location.pathname.startsWith("/topic-detail");
    },
    /**
     * 判断当前路径
     * + /dynamic
     */
    isDynamic() {
      return window.location.pathname.startsWith("/dynamic");
    },
    /**
     * 判断当前路径
     * + /
     * + /channel
     */
    isHead() {
      return window.location.pathname === "/" || window.location.pathname.startsWith("/channel");
    }
  };
  const SettingUIVideo = {
    id: "panel-video",
    title: "视频",
    isDefault() {
      return BilibiliRouter.isVideo();
    },
    forms: [
      {
        text: "功能",
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
            "initPlayer",
            "bili-video-initPlayer",
            true,
            void 0,
            "自动执行初始化播放器"
          ),
          UISwitch(
            "强制本页刷新跳转",
            "bili-video-forceThisPageToRefreshAndRedirect",
            false,
            void 0,
            "用于解决跳转播放视频时，播放当前视频会有上一个播放视频的声音的情况"
          )
        ]
      },
      {
        text: "变量设置",
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
      },
      {
        text: "覆盖点击事件",
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
      },
      {
        text: "劫持/拦截",
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
  };
  const SettingUIBangumi = {
    id: "panel-bangumi",
    title: "番剧",
    isDefault() {
      return BilibiliRouter.isBangumi();
    },
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
      },
      {
        text: "覆盖点击事件",
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
      },
      {
        text: "劫持/拦截",
        type: "forms",
        forms: [
          UISwitch("阻止调用App", "bili-bangumi-hook-callApp", true, void 0, "")
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
    forms: []
  };
  const SettingUILive = {
    id: "panel-live",
    title: "直播",
    isDefault() {
      return BilibiliRouter.isLive();
    },
    forms: [
      {
        text: "屏蔽",
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
      },
      {
        text: "劫持/拦截",
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
  };
  const SettingUIOpus = {
    id: "panel-opus",
    title: "专栏",
    isDefault() {
      return BilibiliRouter.isOpus();
    },
    forms: [
      {
        text: "功能",
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
      },
      {
        text: "覆盖点击事件",
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
  };
  const SettingUIDynamic = {
    id: "panel-dynamic",
    title: "动态",
    isDefault() {
      return BilibiliRouter.isDynamic();
    },
    forms: [
      {
        text: "覆盖点击事件",
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
  };
  const SettingUITopicDetail = {
    id: "panel-topic-detail",
    title: "话题",
    isDefault() {
      return BilibiliRouter.isTopicDetail();
    },
    forms: []
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
      addStyle(`${selectorList.join(",\n")}{display: none !important;}`);
    }
  };
  function isWebApiSuccess(json) {
    return (json == null ? void 0 : json.code) === 0 && ((json == null ? void 0 : json.message) === "0" || (json == null ? void 0 : json.message) === "success");
  }
  const BilibiliLogin = {
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
    getQRCodeInfo: async function() {
      log.info("正在申请二维码...");
      let qrcodeInfo = await BilibiliLogin.getQrCodeInfo();
      log.info(["获取到二维码信息", qrcodeInfo]);
      return qrcodeInfo;
    },
    /**
     * 确认扫码
     * @param qrcodeInfo
     */
    async confirmScanQrcode(qrcodeInfo) {
      let $alert = pops.alert({
        title: {
          text: "请扫描二维码登录",
          position: "center",
          html: false,
          style: ""
        },
        content: {
          text: `<div id="bili-qrcode-canvas"></div>`,
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
        style: `
            #bili-qrcode-canvas{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            `
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
        let pollInfo = await BilibiliLogin.poll(qrcodeInfo.auth_code);
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
              pops.loading({
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
        text: "功能",
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
      },
      {
        text: "推荐",
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
            ((_b = BilibiliQrCodeLogin.getAccessTokenInfo()) == null ? void 0 : _b.access_token) || "",
            "填入access_token，即可获取推荐视频数据",
            void 0,
            void 0,
            false,
            true
          )
        ]
      }
    ]
  };
  const PopsPanel = {
    /** 数据 */
    $data: {
      /**
       * 菜单项的默认值
       */
      data: new utils.Dictionary(),
      /**
       * 成功只执行了一次的项
       */
      oneSuccessExecMenu: new utils.Dictionary(),
      /**
       * 成功只执行了一次的项
       */
      onceExec: new utils.Dictionary(),
      /** 脚本名，一般用在设置的标题上 */
      scriptName: SCRIPT_NAME,
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
      listenData: new utils.Dictionary()
    },
    init() {
      this.initPanelDefaultValue();
      this.initExtensionsMenu();
    },
    initExtensionsMenu() {
      if (_unsafeWindow.top !== _unsafeWindow.self) {
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
          text: "🛠 登录并解析access_key",
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
        if (!config["attributes"]) {
          return;
        }
        let key = config.attributes[ATTRIBUTE_KEY];
        let defaultValue = config["attributes"][ATTRIBUTE_DEFAULT_VALUE];
        if (key == null) {
          log.warn(["请先配置键", config]);
          return;
        }
        if (that.$data.data.has(key)) {
          log.warn("请检查该key(已存在): " + key);
        }
        that.$data.data.set(key, defaultValue);
      }
      let contentConfigList = this.getPanelContentConfig();
      for (let index = 0; index < contentConfigList.length; index++) {
        let leftContentConfigItem = contentConfigList[index];
        if (!leftContentConfigItem.forms) {
          continue;
        }
        let rightContentConfigList = leftContentConfigItem.forms;
        for (let formItemIndex = 0; formItemIndex < rightContentConfigList.length; formItemIndex++) {
          let rightContentConfigItem = rightContentConfigList[formItemIndex];
          if (rightContentConfigItem.forms) {
            let childFormConfigList = rightContentConfigItem.forms;
            for (let formChildConfigIndex = 0; formChildConfigIndex < childFormConfigList.length; formChildConfigIndex++) {
              initDefaultValue(childFormConfigList[formChildConfigIndex]);
            }
          } else {
            initDefaultValue(rightContentConfigItem);
          }
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
     */
    execMenu(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (!this.$data.data.has(key)) {
        log.warn(`${key} 键不存在`);
        return;
      }
      let value = PopsPanel.getValue(key);
      if (value) {
        callback(value);
      }
    },
    /**
     * 自动判断菜单是否启用，然后执行回调，只会执行一次
     * @param key
     * @param callback 回调
     */
    execMenuOnce(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (!this.$data.data.has(key)) {
        log.warn(`${key} 键不存在`);
        return;
      }
      let value = PopsPanel.getValue(key);
      if (value) {
        if (this.$data.oneSuccessExecMenu.has(key)) {
          return;
        }
        callback(value);
        this.$data.oneSuccessExecMenu.set(key, 1);
      }
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
      pops.panel({
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
    isMobile() {
      return window.outerWidth < 550;
    },
    /**
     * 获取设置面板的宽度
     */
    getWidth() {
      if (window.outerWidth < 550) {
        return "92dvw";
      } else {
        return "550px";
      }
    },
    /**
     * 获取设置面板的高度
     */
    getHeight() {
      if (window.outerHeight > 450) {
        return "80dvh";
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
        SettingUITopicDetail,
        SettingUISearch,
        SettingUILive
      ];
      return configList;
    }
  };
  const BilibiliBeautifyCSS = "/* 主页 */\r\n#app .m-head {\r\n	--bg-color: #f0f1f3;\r\n	--bg-rever-color: #ffffff;\r\n	--pd-width: 1.3333vmin;\r\n	--bd-circle: 1.3333vmin;\r\n	--card-height: 30vmin;\r\n	--icon-font-size: 3.2vmin;\r\n	--icon-text-font-size: 2.6vmin;\r\n	--icon-font-margin-right: 3vmin;\r\n	--title-font-size: 2.8vmin;\r\n\r\n	background-color: var(--bg-color);\r\n	.m-home {\r\n		background-color: var(--bg-color);\r\n	}\r\n	/* 美化视频卡片 */\r\n	.video-list .card-box {\r\n		.v-card {\r\n			background-color: var(--bg-rever-color);\r\n			padding: 0px;\r\n			margin: 0px;\r\n			width: calc(50% - var(--pd-width) / 2);\r\n			border-radius: var(--bd-circle);\r\n			margin-top: var(--pd-width);\r\n			display: grid;\r\n\r\n			/* 视频封面区域 */\r\n			.card {\r\n				background: var(--bg-rever-color);\r\n				border-radius: unset;\r\n				border-top-left-radius: var(--bd-circle);\r\n				border-top-right-radius: var(--bd-circle);\r\n				height: var(--card-height);\r\n\r\n				.count {\r\n					display: flex;\r\n					justify-content: safe flex-start;\r\n					padding-right: 0;\r\n\r\n					.iconfont {\r\n						font-size: var(--icon-text-font-size);\r\n					}\r\n\r\n					> span {\r\n						font-size: var(--icon-text-font-size);\r\n						margin-right: var(--icon-font-margin-right);\r\n					}\r\n				}\r\n			}\r\n			/* 视频标题区域 */\r\n			.title {\r\n				padding: 0;\r\n				margin: var(--pd-width);\r\n				font-size: var(--title-font-size);\r\n			}\r\n		}\r\n		/* 两列 => 左边的 */\r\n		.v-card:nth-child(2n-1) {\r\n			/*background-color: red;*/\r\n			margin-right: calc(var(--pd-width) / 2);\r\n		}\r\n		/* 两列 => 右边的 */\r\n		.v-card:nth-child(2n) {\r\n			/*background-color: rebeccapurple;*/\r\n			margin-left: calc(var(--pd-width) / 2);\r\n		}\r\n	}\r\n}\r\n";
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
     * @param userId 用户id
     */
    getUserSpaceDynamicUrl(userId) {
      return `https://m.bilibili.com/dynamic/${userId}`;
    },
    /**
     * 获取用户个人空间动态链接-opus
     * @param userId 用户id
     */
    getUserSpaceOpusUrl(userId) {
      return `https://m.bilibili.com/opus/${userId}`;
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
  const BilibiliVideoBeautifyCSS = "#app .video {\r\n	/* 下面的推荐视频卡片 */\r\n	.video-list .card-box {\r\n		--left-card-width: 33%;\r\n		--right-child-padding: 1.333vmin;\r\n		.v-card-toapp {\r\n			width: 100%;\r\n			border-bottom: 1px solid #b5b5b5;\r\n			padding-left: 0;\r\n			padding-right: 0;\r\n\r\n			> a {\r\n				display: flex;\r\n				flex-wrap: nowrap;\r\n				.card {\r\n					width: var(--left-card-width);\r\n					height: 80px;\r\n					flex: 0 auto;\r\n					.count {\r\n						background: transparent;\r\n						.left {\r\n							display: list-item;\r\n							span.item {\r\n								display: none;\r\n							}\r\n						}\r\n\r\n						.duration {\r\n							background: rgba(0, 0, 0, 0.4);\r\n							border-radius: 0.6vmin;\r\n							padding: 0px 0.5vmin;\r\n							right: 1vmin;\r\n							bottom: 1vmin;\r\n						}\r\n					}\r\n				}\r\n\r\n				.title {\r\n					flex: 1;\r\n					padding: var(--right-child-padding);\r\n					margin-top: 0;\r\n				}\r\n			}\r\n		}\r\n\r\n		/* 开启了bili-video-beautify */\r\n		.gm-right-container {\r\n			display: flex;\r\n			flex-direction: column;\r\n			width: calc(100% - var(--left-card-width));\r\n			> * {\r\n				padding: var(--right-child-padding);\r\n			}\r\n			.gm-up-name,\r\n			.left {\r\n				color: #999;\r\n				font-size: 3vmin;\r\n				transform-origin: left;\r\n				display: flex;\r\n				align-items: safe center;\r\n			}\r\n			.gm-up-name-text {\r\n				margin-left: 1vmin;\r\n			}\r\n			.num {\r\n				margin-right: 4vmin;\r\n			}\r\n		}\r\n\r\n		> a.v-card {\r\n			width: 100%;\r\n			border-bottom: 1px solid #b5b5b5;\r\n			padding-left: 0;\r\n			padding-right: 0;\r\n			display: flex;\r\n			flex-wrap: nowrap;\r\n			.card {\r\n				width: var(--left-card-width);\r\n				height: 100%;\r\n				flex: 0 auto;\r\n				.count {\r\n					background: transparent;\r\n					span {\r\n						display: none;\r\n					}\r\n					.duration {\r\n						background-color: rgba(0, 0, 0, 0.3);\r\n						border-radius: 4px;\r\n						color: #fff;\r\n						font-size: 12px;\r\n						height: 16px;\r\n						line-height: 16px;\r\n						margin-left: auto;\r\n						padding-left: 4px;\r\n						padding-right: 4px;\r\n					}\r\n				}\r\n			}\r\n\r\n			.title {\r\n				flex: 1;\r\n				padding: var(--right-child-padding);\r\n				margin-top: 0;\r\n			}\r\n		}\r\n	}\r\n}\r\n";
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
        BilibiliUtils.waitVuePropToSet(".m-video-player", [
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
                  var _a2, _b2, _c, _d;
                  let $playerVideo = document.querySelector(
                    "#bilibiliPlayer video"
                  );
                  if ($playerVideo) {
                    isSuccess = true;
                    (_a2 = _unsafeWindow == null ? void 0 : _unsafeWindow.player) == null ? void 0 : _a2.off("restart_call_app");
                    (_b2 = _unsafeWindow == null ? void 0 : _unsafeWindow.player) == null ? void 0 : _b2.off("force_call_app_show");
                    log.success("<video>标签已成功初始化");
                    return;
                  }
                  if (_unsafeWindow.BPlayerMobile == null) {
                    log.error("未加载player播放器，主动引入script标签");
                    await BilibiliUtils.loadScript(
                      "https://s1.hdslb.com/bfs/static/player/main/html5/mplayer.js?v=2862592"
                    );
                  }
                  vueObj.initPlayer(true);
                  log.success(
                    "第 " + checkCount + " 次未检测到视频，调用初始化视频函数 initPlayer()"
                  );
                  await utils.sleep(300);
                  (_c = _unsafeWindow == null ? void 0 : _unsafeWindow.player) == null ? void 0 : _c.off("restart_call_app");
                  (_d = _unsafeWindow == null ? void 0 : _unsafeWindow.player) == null ? void 0 : _d.off("force_call_app_show");
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
                  log.warn("检测视频超时3s，取消检测");
                  clearInterval(intervalId);
                }, 3e3);
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
        this.repairVideoBottomAreaHeight();
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
     * 美化
     */
    beautify() {
      log.info("美化");
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
        function handleVCardTopApp($vCard) {
          var _a2, _b2;
          let $title = $vCard.querySelector(".title");
          let $left = $vCard.querySelector(".count .left");
          let vueObj = BilibiliUtils.getVue($vCard);
          if ($title && $left && !$vCard.querySelector(".gm-right-container")) {
            let $upInfo = document.createElement("div");
            let upName = (_b2 = (_a2 = vueObj == null ? void 0 : vueObj.info) == null ? void 0 : _a2.owner) == null ? void 0 : _b2.name;
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
            domutils.after($title, $rightContainer);
            $rightContainer.appendChild($title);
            $rightContainer.appendChild($rightBottom);
            $rightBottom.appendChild($upInfo);
            $rightBottom.appendChild($left);
          }
        }
        function handleVCard($vCard) {
          var _a2, _b2, _c;
          let $title = $vCard.querySelector(".title");
          let $count = $vCard.querySelector(".count");
          let vueObj = BilibiliUtils.getVue($vCard);
          if ($title && $count && !$vCard.querySelector(".gm-right-container")) {
            let duration = (_a2 = vueObj == null ? void 0 : vueObj.info) == null ? void 0 : _a2.duration;
            let $duration = document.createElement("div");
            $duration.className = "duration";
            $duration.innerText = BilibiliUtils.parseDuration(duration);
            let $cloneCount = $count.cloneNode(true);
            $cloneCount.className = "left";
            let $upInfo = document.createElement("div");
            let upName = (_c = (_b2 = vueObj == null ? void 0 : vueObj.info) == null ? void 0 : _b2.owner) == null ? void 0 : _c.name;
            $count.appendChild($duration);
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
            domutils.after($title, $rightContainer);
            $rightContainer.appendChild($title);
            $rightContainer.appendChild($rightBottom);
            $rightBottom.appendChild($upInfo);
            $rightBottom.appendChild($cloneCount);
          }
        }
        let lockFunc = new utils.LockFunction(() => {
          document.querySelectorAll(
            BilibiliData.className.video + " .bottom-tab .list-view .card-box .v-card-toapp"
          ).forEach((_$vCard_) => {
            handleVCardTopApp(_$vCard_);
          });
          document.querySelectorAll(
            BilibiliData.className.video + " .bottom-tab .list-view .card-box>a.v-card"
          ).forEach((_$vCard_) => {
            handleVCard(_$vCard_);
          });
        }, 25);
        utils.mutationObserver(
          document.querySelector(BilibiliData.className.video),
          {
            config: {
              subtree: true,
              childList: true
            },
            callback() {
              setTimeout(() => {
                lockFunc.run();
              }, 0);
            }
          }
        );
      });
    },
    /**
     * 修复视频底部区域高度
     */
    repairVideoBottomAreaHeight() {
      log.info("修复视频底部区域高度");
      addStyle(`
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
		`);
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
            var _a2, _b2;
            let vueObj = BilibiliUtils.getVue($app);
            if (vueObj == null) {
              return false;
            }
            return typeof ((_b2 = (_a2 = vueObj == null ? void 0 : vueObj.$router) == null ? void 0 : _a2.options) == null ? void 0 : _b2.scrollBehavior) != null;
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
            var _a2, _b2, _c;
            return typeof typeof ((_c = (_b2 = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b2.userStat) == null ? void 0 : _c.pay) === "number";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.userStat.pay=1");
            vueObj.$store.state.userStat.pay = 1;
          }
        },
        {
          msg: "设置参数 $store.state.mediaInfo.user_status.pay",
          check(vueObj) {
            var _a2, _b2, _c, _d;
            return typeof ((_d = (_c = (_b2 = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b2.mediaInfo) == null ? void 0 : _c.user_status) == null ? void 0 : _d.pay) === "number";
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
            var _a2, _b2, _c;
            return typeof typeof ((_c = (_b2 = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b2.userStat) == null ? void 0 : _c.pay) === "number";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.userStat.pay=1");
            vueObj.$store.state.userStat.pay = 1;
          }
        },
        {
          msg: "设置参数 $store.state.mediaInfo.user_status.pay",
          check(vueObj) {
            var _a2, _b2, _c, _d;
            return typeof ((_d = (_c = (_b2 = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b2.mediaInfo) == null ? void 0 : _c.user_status) == null ? void 0 : _d.pay) === "number";
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
  const BilibiliLive = {
    init() {
      PopsPanel.execMenuOnce("bili-live-prevent-openAppBtn", () => {
        this.preventOpenAppBtn();
      });
      PopsPanel.execMenuOnce("bili-live-block-chatRoom", () => {
        this.blockChatRoom();
      });
      PopsPanel.execMenuOnce("bili-live-block-brush-prompt", () => {
        this.blockBrushPrompt();
      });
      PopsPanel.execMenuOnce("bili-live-block-control-panel", () => {
        this.blockControlPanel();
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
    },
    /**
     * 屏蔽聊天室
     */
    blockChatRoom() {
      log.info("屏蔽聊天室");
      BilibiliUtils.addBlockCSS("#chat-items");
    },
    /**
     * 屏蔽xxx进入直播间
     */
    blockBrushPrompt() {
      log.info("屏蔽xxx进入直播间");
      BilibiliUtils.addBlockCSS("#brush-prompt");
    },
    /**
     * 屏蔽底部工具栏
     */
    blockControlPanel() {
      log.info("屏蔽底部工具栏");
      BilibiliUtils.addBlockCSS(".control-panel");
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
          this.automaticallyExpandToReadFullText();
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
      BilibiliUtils.addBlockCSS(BilibiliData.className.opus + " .opus-read-more");
      addStyle(`
		${BilibiliData.className.opus} .opus-module-content{
			overflow: unset !important;
    		max-height: unset !important;
		}
		`);
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
          var _a2, _b2;
          utils.preventEvent(event);
          let $click = event.target;
          let oid = $click.getAttribute("data-oid") || ((_b2 = (_a2 = BilibiliUtils.getVue($click)) == null ? void 0 : _a2.$props) == null ? void 0 : _b2.rid);
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
  const BilibiliRecommendCSS = '#app .m-head .m-recommend-view {\r\n	display: none;\r\n}\r\n#app .m-head .suspension .channel-menu:has(.recommend-tag.is-avtive) {\r\n	.v-switcher__header__anchor {\r\n		display: none !important;\r\n	}\r\n	a.v-switcher__header__tabs__item {\r\n		color: #505050 !important;\r\n	}\r\n	a.recommend-tag {\r\n		color: #fb7299 !important;\r\n	}\r\n	a.recommend-tag span:after {\r\n		content: " ";\r\n		position: relative;\r\n		background: #fb7299;\r\n		width: 30.4375px;\r\n		height: 0.53333vmin;\r\n		display: block;\r\n		bottom: 3px;\r\n	}\r\n}\r\n#app .m-head:has(.recommend-tag.is-avtive) {\r\n	.suspension + div {\r\n		display: none;\r\n	}\r\n	.m-recommend-view {\r\n		display: unset;\r\n	}\r\n}\r\n\r\n#app .m-head .m-recommend-view {\r\n	background-color: #f0f1f3;\r\n	.list-view {\r\n		.video-list-box {\r\n			.video-list {\r\n				padding: 0 1.33333vmin;\r\n				margin-bottom: 5.33333vmin;\r\n				.card-box {\r\n					display: -webkit-box;\r\n					display: -ms-flexbox;\r\n					display: flex;\r\n					-ms-flex-wrap: wrap;\r\n					flex-wrap: wrap;\r\n					.v-card {\r\n						.card {\r\n							position: relative;\r\n							.bfs-img-wrap {\r\n								position: absolute;\r\n								top: 0;\r\n								left: 0;\r\n								width: 100%;\r\n								height: 100%;\r\n								overflow: hidden;\r\n								.bfs-img.b-img {\r\n									position: relative;\r\n									width: 100%;\r\n									height: 100%;\r\n									overflow: hidden;\r\n									background: transparent;\r\n									picture.b-img__inner {\r\n										display: block;\r\n										width: 100%;\r\n										height: 100%;\r\n										img {\r\n											width: 100%;\r\n											height: 100%;\r\n											-o-object-fit: cover;\r\n											object-fit: cover;\r\n										}\r\n									}\r\n								}\r\n							}\r\n							.count {\r\n								position: absolute;\r\n								bottom: 0;\r\n								left: 0;\r\n								width: 100%;\r\n								font-size: 3.2vmin;\r\n								padding: 1.33333vmin 1.6vmin;\r\n								display: -webkit-box;\r\n								display: -ms-flexbox;\r\n								display: flex;\r\n								-webkit-box-pack: justify;\r\n								-ms-flex-pack: justify;\r\n								justify-content: space-between;\r\n								color: #fff;\r\n								background: linear-gradient(\r\n									0deg,\r\n									rgba(0, 0, 0, 0.85),\r\n									transparent\r\n								);\r\n							}\r\n						}\r\n						.title {\r\n							font-size: 3.2vmin;\r\n							color: #212121;\r\n							margin-top: 1.6vmin;\r\n							overflow: hidden;\r\n							text-overflow: ellipsis;\r\n							display: -webkit-box;\r\n							-webkit-line-clamp: 2;\r\n							-webkit-box-orient: vertical;\r\n						}\r\n						.gm-up-info {\r\n							.gm-up-name {\r\n								.gm-picture-text {\r\n									padding: 1px 4px;\r\n									border: 1px solid #fb7299;\r\n									color: #fb7299;\r\n									border-radius: 2px;\r\n									margin-right: 4px;\r\n									font-size: 2.0vmin;\r\n								}\r\n							}\r\n						}\r\n					}\r\n				}\r\n			}\r\n		}\r\n	}\r\n}\r\n';
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
        innerHTML: `
            <div class="list-view">
                <div class="video-list-box">
                    <div class="video-list">
                        <div class="card-box">

                        </div>
                    </div>
                </div>
                <div class="list-view__shim" style="z-index:-1;user-select:none;pointer-events:none;background:transparent;left:0;bottom:0;width:100%;height:200px;"></div>
            </div>
            `
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
      log.info(["获取推荐视频信息", getResp.data]);
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
      let goto = data2.goto;
      let aid = data2.player_args.aid;
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
      addStyle(`
        ${BilibiliData.className.head}{
            .video-list .card-box{
                .gm-up-info{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: var(--pd-width);

                    .gm-up-name{
                        display: flex;
                        align-items: center;
                        font-size: 2.4vmin;
                        color: #999A9E;
    
                        svg{
                            margin-right: calc(var(--pd-width) / 2);
                        }
                    }
                }
            }
            .gm-video-duration{
                margin: 0 auto;
            }
        }
        `);
      utils.waitNode(
        BilibiliData.className.head + " .video-list .card-box"
      ).then(() => {
        let lockFunc = new utils.LockFunction(() => {
          document.querySelectorAll(
            BilibiliData.className.head + " .video-list .card-box .v-card"
          ).forEach(($vcard) => {
            var _a2, _b2, _c, _d, _e;
            let vueObj = BilibiliUtils.getVue($vcard);
            let upName = ((_b2 = (_a2 = vueObj == null ? void 0 : vueObj.info) == null ? void 0 : _a2.author) == null ? void 0 : _b2.name) || ((_d = (_c = vueObj == null ? void 0 : vueObj.info) == null ? void 0 : _c.owner) == null ? void 0 : _d.name);
            let duration = (_e = vueObj == null ? void 0 : vueObj.info) == null ? void 0 : _e.duration;
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
            var _a2, _b2, _c;
            return typeof ((_c = (_b2 = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b2.common) == null ? void 0 : _c.noCallApp) === "boolean";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.common.noCallApp=true");
            vueObj.$store.state.common.noCallApp = true;
          }
        },
        {
          msg: "设置参数 $store.state.common.userInfo.isLogin",
          check(vueObj) {
            var _a2, _b2, _c, _d;
            return typeof ((_d = (_c = (_b2 = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b2.common) == null ? void 0 : _c.userInfo) == null ? void 0 : _d.isLogin) === "boolean";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.common.userInfo.isLogin=true");
            vueObj.$store.state.common.userInfo.isLogin = true;
          }
        },
        {
          msg: "设置参数 $store.state.loginInfo.isLogin",
          check(vueObj) {
            var _a2, _b2, _c;
            return typeof ((_c = (_b2 = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b2.loginInfo) == null ? void 0 : _c.isLogin) === "boolean";
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
            var _a2, _b2, _c;
            return typeof typeof ((_c = (_b2 = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b2.video) == null ? void 0 : _c.isClient) === "boolean";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.video.isClient=true");
            vueObj.$store.state.video.isClient = true;
          }
        },
        {
          msg: "设置参数 $store.state.opus.isClient=true",
          check(vueObj) {
            var _a2, _b2, _c;
            return typeof ((_c = (_b2 = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b2.opus) == null ? void 0 : _c.isClient) === "boolean";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.opus.isClient");
            vueObj.$store.state.opus.isClient = true;
          }
        },
        {
          msg: "设置参数 $store.state.playlist.isClient",
          check(vueObj) {
            var _a2, _b2, _c;
            return typeof ((_c = (_b2 = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b2.playlist) == null ? void 0 : _c.isClient) === "boolean";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.playlist.isClient=true");
            vueObj.$store.state.playlist.isClient = true;
          }
        },
        {
          msg: "设置参数 $store.state.ver.bili",
          check(vueObj) {
            var _a2, _b2, _c;
            return typeof ((_c = (_b2 = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b2.ver) == null ? void 0 : _c.bili) === "boolean";
          },
          set(vueObj) {
            log.success("成功设置参数 $store.state.ver.bili=true");
            vueObj.$store.state.ver.bili = true;
          }
        },
        {
          msg: "设置参数 $store.state.ver.biliVer",
          check(vueObj) {
            var _a2, _b2, _c;
            return typeof ((_c = (_b2 = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b2.ver) == null ? void 0 : _c.biliVer) === "number";
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
            var _a2, _b2, _c;
            return typeof ((_c = (_b2 = (_a2 = vueObj == null ? void 0 : vueObj.$store) == null ? void 0 : _a2.state) == null ? void 0 : _b2.common) == null ? void 0 : _c.tinyApp) === "boolean";
          },
          set(vueObj) {
            vueObj.$store.state.common.tinyApp = true;
            log.success("成功设置参数 $store.state.common.tinyApp=true");
          }
        }
      ]);
    }
  };
  const Bilibili = {
    init() {
      BilibiliVueProp.init();
      PopsPanel.onceExec("listenRouterChange", () => {
        this.listenRouterChange();
      });
      PopsPanel.execMenuOnce("bili-hookSetTimeout_autoOpenApp", () => {
        log.info("hook  window.setTimeout autoOpenApp");
        BilibiliHook.setTimeout("autoOpenApp");
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
      } else if (BilibiliRouter.isDynamic()) {
        log.info("Router: 动态");
        BilibiliDynamic.init();
      } else if (BilibiliRouter.isBangumi()) {
        log.info("Router: 番剧");
        BilibiliBangumi.init();
      } else if (BilibiliRouter.isSearch()) {
        log.info("Router: 搜索");
      } else if (BilibiliRouter.isLive()) {
        log.info("Router: 直播");
        BilibiliLive.init();
      } else if (BilibiliRouter.isTopicDetail()) {
        log.info("Router: 话题");
      } else if (BilibiliRouter.isHead()) {
        log.info("Router: 首页之类的");
        BilibiliHead.init();
      } else {
        log.error("该Router暂未适配，可能是首页之类：" + window.location.href);
      }
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
        utils.waitVueByInterval($app, check).then((result) => {
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
                if (to.name === "space") {
                  window.location.href = to.fullPath;
                  return;
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

})(Qmsg, Utils, DOMUtils, MD5);