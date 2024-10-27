// ==UserScript==
// @name         【移动端】bilibili优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.10.27
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
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.5/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.3.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.3.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.8.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/md5@2.3.0/dist/md5.min.js
// @require      https://fastly.jsdelivr.net/npm/flv.js@1.6.2/dist/flv.js
// @require      https://fastly.jsdelivr.net/npm/artplayer-plugin-danmuku@5.1.4/dist/artplayer-plugin-danmuku.js
// @require      https://fastly.jsdelivr.net/npm/artplayer@5.2.1/dist/artplayer.js
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

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
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
        log.info("Httpx => 设置cookie:", details);
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
      log.info("获取到二维码信息", qrcodeInfo);
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
          log.info("扫码登录成功", pollInfo);
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
     * + /bangumi/
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
     * + /read/mobile-readlist/
     * + /read/mobile?id=
     */
    isReadMobile() {
      return this.isPC() && window.location.pathname.startsWith("/read/mobile");
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
     * 番剧视频CDN替换
     * @param url 视频url
     */
    replaceBangumiVideoCDN(url) {
      let userChooseCDN = PopsPanel.getValue(
        "bili-bangumi-uposServerSelect"
      );
      return this.replaceVideoCDNHost(url, userChooseCDN);
    },
    /**
     * 视频CDN替换host
     * @param url 视频url
     *
     */
    replaceVideoCDN(url) {
      let userChooseCDN = PopsPanel.getValue(
        "bili-video-uposServerSelect"
      );
      return this.replaceVideoCDNHost(url, userChooseCDN);
    },
    /**
     * 视频CDN替换host
     *
     * 有以下类型
     * .mcdn.bilivideo 辣鸡路线
     * @param url 视频url
     * @param userChooseCDNHost 需要替换的host
     *
     */
    replaceVideoCDNHost(url, userChooseCDNHost) {
      try {
        let urlObj = new URL(url);
        let chooseUposCDN = this.getUposCDNServerList().find((item) => {
          return item.host === userChooseCDNHost;
        });
        if (utils.isNull(chooseUposCDN) || utils.isNull(chooseUposCDN.host)) {
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
        log.error("视频upos替换失败", error);
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
                    "用于处理内存泄露问题"
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
            text: "ArtPlayer播放器",
            type: "deepMenu",
            forms: [
              {
                text: "功能",
                type: "forms",
                forms: [
                  UISwitch(
                    "启用",
                    "bili-video-enableArtPlayer",
                    true,
                    void 0,
                    "使用artplayer代替页面的播放器"
                  ),
                  UISelect(
                    "播放的视频类型",
                    "bili-video-playType",
                    "mp4",
                    [
                      {
                        text: "mp4",
                        value: "mp4"
                      },
                      {
                        text: "dash",
                        value: "dash"
                      }
                    ],
                    void 0,
                    "当选择dash时会有画质更高的选项"
                  ),
                  UISwitch(
                    "自动播放视频",
                    "bili-video-playerAutoPlayVideo",
                    false,
                    void 0,
                    ""
                  ),
                  UISwitch(
                    "自动进入全屏",
                    "bili-video-playerAutoPlayVideoFullScreen",
                    false,
                    void 0,
                    ""
                  )
                ]
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
                    1,
                    void 0,
                    (value) => {
                      return value + "px";
                    },
                    "可用于全屏横屏适配屏幕"
                  )
                ]
              },
              {
                text: "插件",
                type: "forms",
                forms: [
                  UISwitch(
                    "弹幕",
                    "artplayer-plugin-video-danmaku-enable",
                    false,
                    void 0,
                    "哔哩哔哩 (゜-゜)つロ 干杯~"
                  ),
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
                  )
                ]
              },
              {
                text: "加速CDN设置",
                type: "forms",
                forms: [
                  UISelect(
                    "UPOS服务器设置",
                    "bili-video-uposServerSelect",
                    "",
                    BilibiliCDNProxy.getUposCDNServerList().map((item) => {
                      return {
                        text: item.name,
                        value: item.host
                      };
                    }),
                    void 0,
                    "设置视频流的服务器，可加快视频加载速度"
                  ),
                  UISwitch(
                    "作用于Audio上",
                    "bili-video-uposServerSelect-applyAudio",
                    false,
                    void 0,
                    "把m4s类型的audio也进行upos替换"
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
                    1,
                    void 0,
                    (value) => {
                      return value + "px";
                    },
                    "可用于全屏横屏适配屏幕"
                  )
                ]
              },
              {
                text: "插件",
                type: "forms",
                forms: [
                  UISwitch(
                    "弹幕",
                    "artplayer-plugin-bangumi-danmaku-enable",
                    false,
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
                    false,
                    void 0,
                    "如果获取到的信息中存在空降信息，如跳过片头片尾，那么会自动跳过"
                  )
                ]
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
                    false,
                    void 0,
                    "根据繁体字幕自动生成简体中文字幕"
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
                  ),
                  UISwitch(
                    "作用于Audio上",
                    "bili-bangumi-uposServerSelect-applyAudio",
                    false,
                    void 0,
                    "把m4s类型的audio也进行upos替换"
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
                    "美化搜索结果",
                    "bili-search-beautifySearchResult",
                    true,
                    void 0,
                    "重构搜索结果的样式"
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
                    "noCallApp",
                    "bili-search-vue-prop-noCallApp",
                    true,
                    void 0,
                    "noCallApp = true"
                  ),
                  UISwitch(
                    "openAppDialog",
                    "bili-search-vue-prop-openAppDialog",
                    true,
                    void 0,
                    "openAppDialog = false"
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
                  ),
                  UISwitch(
                    "新标签页打开",
                    "bili-head-openVideoInNewTab",
                    false,
                    void 0,
                    "包括视频、番剧"
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
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
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
    }
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
          log.warn("请先配置键", config);
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
  const BilibiliUrl = {
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
    },
    /** 主题色 */
    theme: "#FB7299"
  };
  const BilibiliPCData = {
    className: {
      read: {
        mobile: "#app .read-app-main"
      }
    }
  };
  const BilibiliVideoBeautifyCSS = '@charset "UTF-8";\r\n#app .video {\r\n	/* 下面的推荐视频卡片 */\r\n}\r\n#app .video .video-list .card-box {\r\n	--left-card-width: 33%;\r\n	--right-child-padding: 1.333vmin;\r\n	/* 开启了bili-video-beautify */\r\n}\r\n#app .video .video-list .card-box .v-card-toapp {\r\n	width: 100%;\r\n	border-bottom: 1px solid #b5b5b5;\r\n	padding-left: 0;\r\n	padding-right: 0;\r\n}\r\n#app .video .video-list .card-box .v-card-toapp > a {\r\n	display: flex;\r\n	flex-wrap: nowrap;\r\n	gap: var(--right-child-padding);\r\n}\r\n#app .video .video-list .card-box .v-card-toapp > a .card {\r\n	width: var(--left-card-width);\r\n	height: 80px;\r\n	flex: 0 auto;\r\n}\r\n#app .video .video-list .card-box .v-card-toapp > a .card .count {\r\n	background: transparent;\r\n}\r\n#app .video .video-list .card-box .v-card-toapp > a .card .count .left {\r\n	display: list-item;\r\n}\r\n#app\r\n	.video\r\n	.video-list\r\n	.card-box\r\n	.v-card-toapp\r\n	> a\r\n	.card\r\n	.count\r\n	.left\r\n	span.item {\r\n	display: none;\r\n}\r\n#app .video .video-list .card-box .v-card-toapp > a .card .count .duration {\r\n	background: rgba(0, 0, 0, 0.4);\r\n	border-radius: 0.6vmin;\r\n	padding: 0px 0.5vmin;\r\n	right: 1vmin;\r\n	bottom: 1vmin;\r\n}\r\n#app .video .video-list .card-box .v-card-toapp > a .title {\r\n	/*flex: 1;*/\r\n	/*padding: var(--right-child-padding);*/\r\n	padding-top: 0;\r\n	margin-top: 0;\r\n	display: -webkit-box;\r\n	-webkit-line-clamp: 2;\r\n	-webkit-box-orient: vertical;\r\n	overflow: hidden;\r\n}\r\n#app .video .video-list .card-box .gm-right-container {\r\n	display: flex;\r\n	flex-direction: column;\r\n	width: calc(100% - var(--left-card-width));\r\n	justify-content: space-between;\r\n}\r\n#app .video .video-list .card-box .gm-right-container > * {\r\n	padding: var(--right-child-padding);\r\n	padding-bottom: 0;\r\n}\r\n#app .video .video-list .card-box .gm-right-container .left {\r\n	gap: 1rem;\r\n}\r\n#app .video .video-list .card-box .gm-right-container .left span {\r\n	display: flex;\r\n	align-items: safe center;\r\n	gap: 1vmin;\r\n}\r\n#app .video .video-list .card-box .gm-right-container .gm-up-name,\r\n#app .video .video-list .card-box .gm-right-container .left {\r\n	color: #999;\r\n	font-size: 3vmin;\r\n	transform-origin: left;\r\n	display: flex;\r\n	/*align-items: safe center;*/\r\n	align-items: safe flex-end;\r\n}\r\n#app .video .video-list .card-box .gm-right-container .gm-up-name svg {\r\n	width: 3vmin;\r\n	height: 3vmin;\r\n}\r\n#app .video .video-list .card-box .gm-right-container .gm-up-name-text {\r\n	margin-left: 1vmin;\r\n}\r\n#app .video .video-list .card-box .gm-right-container .num {\r\n	margin-right: 4vmin;\r\n}\r\n#app .video .video-list .card-box > a.v-card {\r\n	width: 100%;\r\n	border-bottom: 1px solid #b5b5b5;\r\n	padding-left: 0;\r\n	padding-right: 0;\r\n	display: flex;\r\n	flex-wrap: nowrap;\r\n}\r\n#app .video .video-list .card-box > a.v-card .card {\r\n	width: var(--left-card-width);\r\n	height: 100%;\r\n	flex: 0 auto;\r\n}\r\n#app .video .video-list .card-box > a.v-card .card .count {\r\n	background: transparent;\r\n}\r\n#app .video .video-list .card-box > a.v-card .card .count span {\r\n	display: none;\r\n}\r\n#app .video .video-list .card-box > a.v-card .card .count .duration {\r\n	background-color: rgba(0, 0, 0, 0.3);\r\n	border-radius: 4px;\r\n	color: #fff;\r\n	font-size: 12px;\r\n	height: 16px;\r\n	line-height: 16px;\r\n	margin-left: auto;\r\n	padding-left: 4px;\r\n	padding-right: 4px;\r\n}\r\n#app .video .video-list .card-box > a.v-card .title {\r\n	flex: 1;\r\n	/*padding: var(--right-child-padding);*/\r\n	padding-top: 0;\r\n	margin-top: 0;\r\n	display: -webkit-box;\r\n	-webkit-line-clamp: 2;\r\n	-webkit-box-orient: vertical;\r\n	overflow: hidden;\r\n}\r\n';
  const artPlayerCSS$1 = ".artplayer-container {\r\n	position: absolute;\r\n	width: 100%;\r\n	height: 100%;\r\n	top: 0;\r\n	left: 0;\r\n	overflow: hidden;\r\n}";
  const artPlayerCommonCSS = "/* 设置播放器基础宽高 */\r\n#artplayer {\r\n	width: 100%;\r\n	height: 100%;\r\n}\r\n/* 通用隐藏class */\r\n.art-video-player .art-common-hide {\r\n	display: none !important;\r\n}\r\n/* 设置播放器基础宽高 */\r\n.art-video-player {\r\n	width: 100% !important;\r\n}\r\n/* 播放时隐藏进度条 */\r\n.art-hide-cursor .art-progress {\r\n	display: none !important;\r\n}\r\n/* 不知道为什么背景模糊了 */\r\n.art-video-player.art-backdrop .art-settings {\r\n	backdrop-filter: unset !important;\r\n}\r\n/* 底部的设置菜单当前选中的提示文字设置文字溢出省略号 */\r\n.art-settings .art-setting-item .art-setting-item-right-tooltip {\r\n	max-width: 100px;\r\n	text-overflow: ellipsis;\r\n	white-space: nowrap;\r\n	overflow: hidden;\r\n}\r\n\r\n/* 竖屏 宽度小于550px */\r\n@media (orientation: portrait) and (max-width: 550px) {\r\n	/* 隐藏 弹幕设置按钮 */\r\n	.artplayer-plugin-danmuku .apd-config ,\r\n    /* 隐藏 弹幕输入框 */\r\n	.artplayer-plugin-danmuku .apd-emitter {\r\n		display: none !important;\r\n	}\r\n	/* 弹幕库靠右对齐 */\r\n	.artplayer-plugin-danmuku {\r\n		justify-content: right;\r\n	}\r\n}\r\n/* 横屏 */\r\n@media (orientation: landscape) {\r\n	/* 限制弹幕输入框的最大宽度 */\r\n	.artplayer-plugin-danmuku .apd-emitter {\r\n		max-width: 260px;\r\n	}\r\n}\r\n\r\n/* 插件-在线观看人数  */\r\n.art-lock .art-layer-top-wrap {\r\n	/* 启用了锁定功能，隐藏底部控制栏，所以这个也同步 */\r\n	display: none !important;\r\n}\r\n.art-layer-top-wrap {\r\n	--layer-top-wrap-follow-text-font-size: 0.8em;\r\n	--layer-top-wrap-follow-icon-size: 1em;\r\n	width: 100%;\r\n	position: absolute;\r\n	top: 0px;\r\n	right: 0px;\r\n	color: #fff;\r\n	display: -webkit-box;\r\n	display: -ms-flexbox;\r\n	display: flex;\r\n	left: 0;\r\n	-webkit-transition: all 0.2s ease-in-out;\r\n	transition: all 0.2s ease-in-out;\r\n	width: 100%;\r\n	background: linear-gradient(to bottom, #000, transparent);\r\n	padding: 10px calc(var(--art-padding));\r\n	z-index: 60;\r\n}\r\n.art-player-top-wrap {\r\n	width: 100%;\r\n}\r\n.art-player-top-wrap .art-player-top-title-text {\r\n	white-space: nowrap;\r\n	text-overflow: ellipsis;\r\n	overflow: hidden;\r\n	max-width: 100%;\r\n}\r\n/* 面板隐藏时，顶部toolbar也隐藏 */\r\n.art-hide-cursor .art-layer-top-wrap {\r\n	transform: translateY(-60px);\r\n}\r\n/*.art-layer-top-wrap .art-player-top-wrap {\r\n}\r\n.art-layer-top-wrap .art-player-top-title-text {\r\n}*/\r\n/* 下面的当前在线观看人数 */\r\n.art-layer-top-wrap .art-player-top-follow {\r\n	margin-top: var(--art-padding);\r\n	gap: var(--layer-top-wrap-follow-text-font-size);\r\n	font-size: var(--layer-top-wrap-follow-text-font-size);\r\n	display: flex;\r\n	align-items: center;\r\n	position: absolute;\r\n}\r\n.art-layer-top-wrap .art-player-top-follow .art-player-top-follow-icon {\r\n	width: var(--layer-top-wrap-follow-icon-size);\r\n	height: var(--layer-top-wrap-follow-icon-size);\r\n}\r\n.art-layer-top-wrap .art-player-top-follow-text {\r\n	text-wrap: nowrap;\r\n}\r\n/* 插件-在线观看人数  */\r\n\r\n/* 插件-锁定 */\r\n.art-video-player .art-layers .art-layer.art-layer-lock {\r\n	/* 放在右边 */\r\n	right: 0;\r\n	left: calc(100% - 20px - var(--art-lock-size) - var(--art-lock-left-size));\r\n}\r\n/* 插件-锁定 */\r\n";
  const BilibiliRequestCheck = {
    /**
     * 合并并检查是否传入aid或者bvid
     */
    mergeAidOrBvidSearchParamsData(searchParamsData, config) {
      if ("aid" in config && config["aid"] != null) {
        Reflect.set(searchParamsData, "aid", config.aid);
      } else if ("bvid" in config && config["bvid"] != null) {
        Reflect.set(searchParamsData, "bvid", config.bvid);
      } else {
        throw new TypeError("avid or bvid must give one");
      }
    }
  };
  const VideoQualityNameMap = {
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
  const VideoQualityMap = {};
  Object.keys(VideoQualityNameMap).forEach((qualityName) => {
    let qualityValue = Reflect.get(VideoQualityNameMap, qualityName);
    Reflect.set(VideoQualityMap, qualityValue, qualityName);
  });
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
        qn: config.qn ?? VideoQualityNameMap["1080P60 高帧率"],
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
      BilibiliRequestCheck.mergeAidOrBvidSearchParamsData(
        searchParamsData,
        config
      );
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
      BilibiliRequestCheck.mergeAidOrBvidSearchParamsData(
        searchParamsData,
        config
      );
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
      BilibiliRequestCheck.mergeAidOrBvidSearchParamsData(
        searchParamsData,
        config
      );
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
  const VideoArtPlayerVideoConfig = {
    /**
     * 获取用户选择的视频编码
     */
    getUserChooseVideoCodingCode() {
      let userChooseVideoCodingCode = PopsPanel.getValue(
        "bili-video-artplayer-videoCodingCode",
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
  const TAG$5 = "[artplayer-plugin-danmuku]：";
  class ArtPlayerDanmakuOptionHelper {
    constructor(localDataKey) {
      __publicField(this, "$data", {
        KEY: "art-player-danmaku-option",
        localArtDanmakuOption: {}
      });
      this.$data.KEY = localDataKey;
      const defaultDanmakuOption = this.getDefaultDanmakuOption();
      this.$data.localArtDanmakuOption = utils.assign(
        defaultDanmakuOption,
        _GM_getValue(this.$data.KEY, {})
      );
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
        visible: true
      };
    }
    getLocalArtDanmakuOption() {
      return this.$data.localArtDanmakuOption;
    }
    /**
     * 移除Danmaku的resize事件，该事件可能会导致浏览器卡死
     */
    repairBrowserNoResponse(art) {
      console.warn(
        TAG$5 + "目前尚未知晓导致浏览器卡死的原因是哪里的问题，但是启用该弹幕插件100%复现，复现操作：点击播放，然后重复全屏和退出全屏，拖动进度到弹幕量最多的时间点，过一会卡死"
      );
    }
    onConfigChange(art) {
      art.on(
        // @ts-ignore
        "artplayerPluginDanmuku:config",
        (option) => {
          Object.keys(this.$data.localArtDanmakuOption).forEach((key) => {
            if (Reflect.has(option, key)) {
              let value = Reflect.get(option, key);
              Reflect.set(this.$data.localArtDanmakuOption, key, value);
            }
          });
          _GM_setValue(this.$data.KEY, this.$data.localArtDanmakuOption);
        }
      );
    }
  }
  const TAG$4 = "[artplayer-plugin-bilibiliCCSubTitle]：";
  const ArtPlayer_PLUGIN_M4S_SUPPORT_SETTING_KEY = "setting-bilibili-m4sAudio";
  const M4SAudioUtils = {
    $flag: {
      /**
       * 是否正在循环中
       */
      isIntervaling: false
    },
    /**
     * 自定义某个函数执行N次和间隔时间
     * @param fn 需要执行的函数
     * @param count 重复执行的次数
     * @param delayTime 重复执行的间隔时间
     */
    intervalHandler(fn, count = 2, delayTime = 900) {
      if (this.$flag.isIntervaling) {
        return;
      }
      this.$flag.isIntervaling = true;
      let intervalCount = 0;
      let callback = () => {
        if (intervalCount > count) {
          this.$flag.isIntervaling = false;
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
      let intervalId = setInterval(callback, delayTime);
    }
  };
  const M4SAudio = {
    $key: {
      plugin_KEY: "plugin-bilibili-m4sAudio"
    },
    $data: {
      /** artplayer实例 */
      art: null,
      /** 播放的音频 */
      audio: new Audio(),
      /** 音频的重新连接的配置 */
      reconnectConfig: {
        /** 最大连接的次数 */
        maxCount: 5,
        /** 尝试重新连接的间隔时间 */
        delayTime: 1e3
      },
      /** 音频的重新连接的信息 */
      reconnectInfo: {
        /** 重新连接的链接url */
        url: "",
        /** 已失败连接的次数 */
        count: 0
      }
    },
    userEvent: {
      onRestart: void 0
    },
    events: {
      /**
       * artplayer 播放
       *
       * 同步进度 - 同步音量 - 播放音频
       */
      play: () => {
        M4SAudio.handler.syncTime();
        M4SAudio.handler.play();
      },
      /**
       * 视频进度更新（主动改变的，而不是播放的改变）
       *
       * 音频同步进度
       * @param currentTime 当前的进度
       */
      seek: (currentTime) => {
        M4SAudioUtils.intervalHandler(() => {
          M4SAudio.handler.syncTime();
          M4SAudio.handler.syncPlayState();
        });
      },
      /**
       * 视频暂停
       *
       * 音频暂停
       */
      pause: () => {
        M4SAudio.handler.syncTime();
        M4SAudio.handler.pause();
      },
      /**
       * 视频重载，这里的音频也重载
       *
       * 触发回调 - 获取新的音频 - 同步进度
       * @param url
       */
      restart: (url) => {
        if (typeof M4SAudio.userEvent.onRestart === "function") {
          let newAudioUrl = M4SAudio.userEvent.onRestart(url);
          M4SAudio.handler.playUrl(newAudioUrl);
        }
        M4SAudio.handler.syncTime();
        M4SAudio.handler.syncPlayState();
      },
      /**
       * 静音状态改变
       * @param state
       */
      muted: (state) => {
        M4SAudio.handler.syncVolume();
        M4SAudio.handler.syncMuted();
      },
      /**
       * artplayer 销毁
       *
       * 音频暂停
       */
      destroy: () => {
        M4SAudio.handler.pause();
      },
      /**
       * 视频出岔子了无法播放
       *
       * 音频暂停 - 同步进度
       * @param error
       * @param reconnectTime
       */
      error: (error, reconnectTime) => {
        M4SAudio.handler.pause();
      },
      /**
       * 当播放器尺寸变化时触发
       *
       * 可能会音视频不停步
       */
      resize: () => {
        M4SAudioUtils.intervalHandler(() => {
          M4SAudio.handler.syncTime();
        });
      },
      /**
       * 当播放器发生窗口全屏时触发
       *
       * 可能会音视频不停步
       */
      fullscreen: () => {
        M4SAudioUtils.intervalHandler(() => {
          M4SAudio.handler.syncTime();
        });
      },
      /**
       * 视频播放完毕
       *
       * 音频暂停
       */
      "video:ended": () => {
        M4SAudio.handler.pause();
      },
      /**
       * 视频倍速改变
       *
       * 同步视频的倍速
       */
      "video:ratechange": () => {
        M4SAudio.handler.syncPlayBackRate();
      },
      /**
       * 视频缓冲暂停
       *
       * 音频暂停 然后同步进度
       */
      "video:waiting": () => {
        M4SAudio.handler.pause();
      },
      /**
       * 视频缓冲恢复，音频也恢复
       */
      "video:playing": () => {
        M4SAudio.handler.syncTime();
        M4SAudio.handler.play();
      },
      /**
       * 切换页面视频会被暂停
       */
      "video:pause": () => {
        M4SAudio.handler.pause();
        M4SAudio.handler.syncTime();
      },
      /**
       * 同步音量
       */
      "video:volumechange": () => {
        M4SAudio.handler.syncTime();
      },
      /**
       * 应该是主动切换的视频，首次播放时可能音频不同步
       */
      "video:timeupdate": () => {
        if (2 <= M4SAudio.$data.art.currentTime && M4SAudio.$data.art.currentTime <= 4) {
          M4SAudio.handler.syncTime();
        }
      }
    },
    audioEvents: {
      loadedmetadata: (event) => {
        console.log(TAG$4 + "Audio预加载完成");
        M4SAudio.$data.reconnectInfo.count = 0;
        M4SAudio.$data.reconnectInfo.url = "";
        M4SAudio.handler.syncPlayState();
        M4SAudio.handler.syncMuted();
        M4SAudio.handler.syncPlayBackRate();
        M4SAudio.handler.syncVolume();
        M4SAudioUtils.intervalHandler(() => {
          M4SAudio.handler.syncTime();
        });
      },
      canplaythrough: (event) => {
        console.log(
          TAG$4 + "浏览器估计该音频可以在不停止内容缓冲的情况下播放媒体直到结束"
        );
        M4SAudioUtils.intervalHandler(() => {
          M4SAudio.handler.syncTime();
        });
      },
      error: (event) => {
        console.error(TAG$4 + `Audio加载失败`, event);
        if (utils.isNull(M4SAudio.$data.reconnectInfo.url)) {
          M4SAudio.$data.reconnectInfo.url = M4SAudio.$data.audio.src;
        }
        if (M4SAudio.$data.reconnectInfo.count < M4SAudio.$data.reconnectConfig.maxCount) {
          console.log(
            TAG$4 + `Audio第${M4SAudio.$data.reconnectInfo.count + 1}次尝试重新连接`
          );
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
      }
    },
    /**
     * 音频工具处理
     */
    handler: {
      /**
       * 播放音频链接，会自行处理判断是否是字符串链接
       */
      playUrl(url) {
        if (typeof url !== "string") {
          return;
        }
        M4SAudio.$data.audio.src = url;
        M4SAudio.unbindAudio();
        if (utils.isNotNull(url)) {
          M4SAudio.bindAudio();
        }
      },
      /** 播放音频 */
      play() {
        if (M4SAudio.$data.audio.paused) {
          M4SAudio.$data.audio.play();
        }
      },
      /** 暂停音频 */
      pause() {
        if (!M4SAudio.$data.audio.paused) {
          M4SAudio.$data.audio.pause();
        }
      },
      /** 同步播放状态 */
      syncPlayState() {
        if (M4SAudio.$data.art.playing) {
          this.play();
        } else {
          this.pause();
        }
      },
      /** 音频同步视频进度 */
      syncTime() {
        let videoTime = M4SAudio.$data.art.currentTime;
        let audioTime = M4SAudio.$data.audio.currentTime;
        if (videoTime - audioTime >= 0.1 || audioTime - videoTime >= 0.1) {
          M4SAudio.$data.audio.currentTime = videoTime;
          this.syncVolume();
          this.syncMuted();
        }
      },
      /** 同步音量 */
      syncVolume() {
        M4SAudio.$data.audio.volume = M4SAudio.$data.art.volume;
      },
      /** 同步静音状态 */
      syncMuted() {
        let artMuted = M4SAudio.$data.art.muted;
        let audioMuted = M4SAudio.$data.audio.muted;
        if (artMuted !== audioMuted) {
          M4SAudio.$data.audio.muted = artMuted;
        }
      },
      /** 同步播放倍速 */
      syncPlayBackRate() {
        let artPlayBackRate = M4SAudio.$data.art.playbackRate;
        let audioPlayBackRate = M4SAudio.$data.audio.playbackRate;
        if (artPlayBackRate !== audioPlayBackRate) {
          M4SAudio.$data.audio.playbackRate = artPlayBackRate;
        }
      }
    },
    /**
     * 更新
     * @param audioList
     */
    update(option) {
      var _a2;
      this.unbind();
      this.unbindAudio();
      const that = this;
      if ((_a2 = option.audioList) == null ? void 0 : _a2.length) {
        let firstAudioInfo = option.audioList[0];
        const storageKey = `artplayer-m4s-audio-${option.from}`;
        const storageAudioInfo = this.$data.art.storage.get(
          storageKey
        );
        let currentSelectAudioInfo = {
          index: 0,
          html: firstAudioInfo.soundQualityCodeText,
          /** 播放的地址 */
          url: firstAudioInfo.url
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
            console.warn(
              TAG$4 + "没有找到上次选的音频代码，使用当前默认第一个音频"
            );
          }
        }
        let selectorList = option.audioList.map((item, index) => {
          return {
            default: index === currentSelectAudioInfo.index,
            html: item.soundQualityCodeText,
            url: item.url,
            soundQualityCode: item.soundQualityCode,
            soundQualityCodeText: item.soundQualityCodeText
          };
        });
        const settingOption = {
          name: ArtPlayer_PLUGIN_M4S_SUPPORT_SETTING_KEY,
          width: 200,
          html: "音频",
          tooltip: currentSelectAudioInfo.html,
          icon: (
            /*html*/
            `
				<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
					<path d="M123.5 438.5h131.3v310.7H123.5zM769.2 438.5h131.3v310.7H769.2z"></path>
					<path d="M859.8 398.8h-48.3c-7.9 0-15.4 1.6-22.5 3.9v-32.4c0-125.2-101.9-227.1-227.1-227.1h-99.7c-125.2 0-227.1 101.9-227.1 227.1v32.4c-7.1-2.3-14.6-3.9-22.5-3.9h-48.3c-40.9 0-74.2 33.3-74.2 74.2v243c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V370.3c0-96.7 78.7-175.4 175.4-175.4h99.7c96.7 0 175.4 78.7 175.4 175.4V716c0 40.9 33.3 74.2 74.2 74.2h48.3c40.9 0 74.2-33.3 74.2-74.2V473c-0.1-40.9-33.3-74.2-74.2-74.2zM235.1 716c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z m647.2 0c0 12.4-10.1 22.5-22.5 22.5h-48.3c-12.4 0-22.5-10.1-22.5-22.5V473c0-12.4 10.1-22.5 22.5-22.5h48.3c12.4 0 22.5 10.1 22.5 22.5v243z"></path>
					<path d="M531.3 652.3c-1.7 0-3.3-0.1-5-0.4-10.2-1.7-18.7-8.3-22.7-17.8l-41.1-95.4-37 43.8c-8.1 9.6-19.9 15.1-32.5 15.1h-71.9V546h67.6l56.6-67.1c6.8-8.1 17-12 27.5-10.4 10.4 1.5 19.1 8.2 23.3 17.9l41.6 96.7 21.9-24c8-8.8 19.5-13.9 31.4-13.9h102.4v51.7H595l-41.6 45.7c-5.6 6.2-13.7 9.7-22.1 9.7z"></path>
				</svg>
				`
          ),
          selector: selectorList,
          onSelect: function(selector) {
            let itemInfo = selector;
            console.log(TAG$4 + "切换音频", itemInfo);
            that.handler.playUrl(itemInfo.url);
            that.$data.art.storage.set(storageKey, {
              soundQualityCode: itemInfo.soundQualityCode
            });
            return selector.html;
          }
        };
        let findSettingValue = M4SAudio.$data.art.setting.find(
          ArtPlayer_PLUGIN_M4S_SUPPORT_SETTING_KEY
        );
        if (findSettingValue) {
          M4SAudio.$data.art.setting.update(settingOption);
        } else {
          M4SAudio.$data.art.setting.add(settingOption);
        }
        log.info("加载m4s的音频：", currentSelectAudioInfo);
        M4SAudio.handler.playUrl(currentSelectAudioInfo.url);
        this.bind();
        this.bindAudio();
      } else {
        M4SAudio.handler.playUrl("");
        let oldSetting = M4SAudio.$data.art.setting.option.find(
          (item) => item.name === ArtPlayer_PLUGIN_M4S_SUPPORT_SETTING_KEY
        );
        if (oldSetting) {
          M4SAudio.$data.art.setting.remove(
            ArtPlayer_PLUGIN_M4S_SUPPORT_SETTING_KEY
          );
        }
      }
    },
    /**
     * 绑定事件
     */
    bind() {
      Object.keys(this.events).forEach((eventName) => {
        this.$data.art.on(
          eventName,
          this.events[eventName]
        );
      });
    },
    bindAudio() {
      Object.keys(this.audioEvents).forEach((eventName) => {
        this.$data.audio.addEventListener(
          eventName,
          this.audioEvents[eventName],
          {
            once: true
          }
        );
      });
    },
    /**
     * 取消绑定事件
     */
    unbind() {
      Object.keys(this.events).forEach((eventName) => {
        this.$data.art.off(
          eventName,
          this.events[eventName]
        );
      });
    },
    unbindAudio() {
      Object.keys(this.audioEvents).forEach((eventName) => {
        this.$data.audio.removeEventListener(
          eventName,
          this.audioEvents[eventName]
        );
      });
    }
  };
  const artplayerPluginM4SAudioSupport = (option) => {
    return (art) => {
      M4SAudio.$data.art = art;
      if (typeof option.onRestart === "function") {
        M4SAudio.userEvent.onRestart = option.onRestart;
      }
      M4SAudio.update({
        from: option.from,
        audioList: option.audioList
      });
      return {
        name: M4SAudio.$key.plugin_KEY,
        update(...args) {
          M4SAudio.update(...args);
          M4SAudio.handler.syncVolume();
          M4SAudio.handler.syncTime();
        }
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
          onlineInfoParams: TopToolBar.$data.option.onlineInfoParams
        });
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
    $data: {
      /** 是否已初始化 */
      isInit: false,
      __option: {},
      /** 配置 */
      option: {}
    },
    $key: {
      plugin_KEY: "plugin-bilibili-topToolBar"
    },
    /**
     * 初始化
     */
    init(option) {
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
          TopToolBar.update(option);
          TopToolBarEvent.bind();
        }
      });
    },
    /**
     * 更新配置
     */
    update(option) {
      if (!this.$data.isInit) {
        this.$data.isInit = true;
        Object.defineProperties(this.$data.option, {
          /** 是否显示容器 @default false */
          showWrap: {
            set(value) {
              TopToolBar.$data.__option.showWrap = value;
            },
            get() {
              return TopToolBar.$data.__option.showWrap;
            }
          },
          /** 是否显示标题 @default false */
          showTitle: {
            set(value) {
              TopToolBar.$data.__option.showTitle = value;
            },
            get() {
              return TopToolBar.$data.__option.showTitle;
            }
          },
          /** 视频标题文字 */
          title: {
            set(value) {
              TopToolBar.$data.__option.title = value;
              if (typeof value === "string") {
                TopToolBar.$el.$topTitleText.innerText = value;
              }
            },
            get() {
              return TopToolBar.$data.__option.title;
            }
          },
          /** 是否显示在线观看人数 @default false */
          showOnlineTotal: {
            set(value) {
              TopToolBar.$data.__option.showOnlineTotal = value;
            },
            get() {
              return TopToolBar.$data.__option.showOnlineTotal;
            }
          },
          /** 在线人数请求参数信息 */
          onlineInfoParams: {
            set(value) {
              TopToolBar.$data.__option.onlineInfoParams = value;
              TopToolBar.updateOnlineTotal({
                showOnlineTotal: this.showOnlineTotal,
                onlineInfoParams: value
              });
            },
            get() {
              return TopToolBar.$data.__option.onlineInfoParams;
            }
          },
          /** 是否显示右侧视图 */
          showRight: {
            set(value) {
              TopToolBar.$data.__option.showRight = value;
            },
            get() {
              return TopToolBar.$data.__option.showRight;
            }
          },
          /** 是否显示右侧下面的follow */
          showRightFollow: {
            set(value) {
              TopToolBar.$data.__option.showRightFollow = value;
            },
            get() {
              return TopToolBar.$data.__option.showRightFollow;
            }
          }
        });
      }
      Object.assign(this.$data.option, option);
    },
    /**
     * 更新在线观看人数
     */
    async updateOnlineTotal(option) {
      if (!option.showOnlineTotal) {
        return;
      }
      let onlineTotalInfo = await BilibiliVideoApi.onlineTotal({
        aid: option.onlineInfoParams.aid,
        bvid: option.onlineInfoParams.bvid,
        cid: option.onlineInfoParams.cid
      });
      if (!onlineTotalInfo) {
        return;
      }
      TopToolBar.$el.$topTitleFollowText.innerText = `${onlineTotalInfo["total"] || onlineTotalInfo["count"] || 0}人正在看`;
    }
  };
  const artplayerPluginTopToolBar = (option) => {
    return (art) => {
      TopToolBar.art = art;
      TopToolBar.init(option);
      return {
        name: TopToolBar.$key.plugin_KEY,
        update(option2) {
          TopToolBar.update(option2);
        }
      };
    };
  };
  const ArtPlayer_PLUGIN_TOP_TOOLBAR_KEY = TopToolBar.$key.plugin_KEY;
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
      SubTitle.art.on("video:timeupdate", this.event, this);
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
    $key: {
      plugin_KEY: "plugin-bilibili-cc-subtitle"
    },
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
      const that = this;
      const STORAGE_KEY = `artplayer-bili-cc-subtitle-${option.from}`;
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
         * 获取默认的配置项
         */
        getDefaultSettingOption: () => {
          return {
            name: SubTitleSettingLayer.config.NAME,
            width: 200,
            html: "字幕",
            tooltip: "",
            icon: (
              /*html*/
              `
					<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 48 48">
						<path d="M0 0h48v48H0z" fill="none"/>
						<path fill="#ffffff" d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"/>
					</svg>
					`
            ),
            selector: [],
            onSelect: function(selector) {
              let itemInfo = selector;
              that.art.storage.set(STORAGE_KEY, {
                lan: itemInfo.subTitle_lan
              });
              SubTitleEvent.unbind();
              SubTitleData.currentSelectIndex = itemInfo.subTitle_index;
              if (itemInfo.subTitle_index !== -1) {
                SubTitleEvent.bind();
              }
              return selector.html;
            }
          };
        },
        /**
         * 获取配置项
         *
         * 因为配置会被动态修改，
         */
        getSettingOption: () => {
          const settingOption2 = SubTitleSettingLayer.getDefaultSettingOption();
          const defaultSelector2 = SubTitleSettingLayer.getDefaultSettingSelector();
          settingOption2.selector.push(defaultSelector2);
          settingOption2.tooltip = defaultSelector2.html;
          return settingOption2;
        },
        /**
         * 获取默认的selector配置项
         */
        getDefaultSettingSelector: () => {
          return {
            default: true,
            html: "无",
            subTitle_lan: "",
            subTitle_index: 0,
            subTitle_data: []
          };
        }
      };
      SubTitleData.reset();
      SubTitleSettingLayer.reset();
      SubTitleEvent.reset();
      const defaultSelector = SubTitleSettingLayer.getDefaultSettingSelector();
      SubTitleData.currentSelectIndex = 0;
      SubTitleData.allSubTitleInfo.push({
        name: defaultSelector.html,
        lan: defaultSelector.subTitle_lan,
        data: defaultSelector.subTitle_data
      });
      this.art.setting.add(SubTitleSettingLayer.getSettingOption());
      const settingOption = SubTitleSettingLayer.getSettingOption();
      this.$el.$subtitle = this.art.template.$subtitle;
      const searchParamsData = {
        cid: option.cid
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
            Referer: "https://www.bilibili.com"
          }
        }
      );
      if (!videoInfoResponse.status) {
        console.error(
          TAG$3 + "网络异常，获取视频的字幕信息失败",
          videoInfoResponse
        );
        return;
      }
      console.log(TAG$3 + "视频的字幕信息", videoInfoResponse);
      const videoInfoResultJSON = utils.toJSON(
        videoInfoResponse.data.responseText
      );
      if (!BilibiliResponseCheck.isWebApiSuccess(videoInfoResultJSON)) {
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
        const subTitleInfoResponse = await httpx.get(
          subTitleUrlInfo.subtitle_url,
          {
            responseType: "json",
            allowInterceptConfig: false,
            headers: {
              // Host: "www.bilibili.com",
              Referer: "https://www.bilibili.com",
              "User-Agent": utils.getRandomPCUA()
            }
          }
        );
        if (subTitleInfoResponse.status) {
          console.log(TAG$3 + "成功获取字幕信息");
          const subTitleInfoJSON = utils.toJSON(
            subTitleInfoResponse.data.responseText
          );
          const subTitleInfo = subTitleInfoJSON["body"];
          let currentIndex = SubTitleData.allSubTitleInfo.length;
          let data2 = {
            name: subTitleUrlInfo.lan_doc,
            lan: subTitleUrlInfo.lan,
            data: subTitleInfo
          };
          SubTitleData.allSubTitleInfo.push(data2);
          settingOption.selector.push({
            html: subTitleUrlInfo.lan_doc,
            subTitle_index: currentIndex,
            subTitle_lan: subTitleUrlInfo.lan,
            subTitle_data: subTitleInfo
          });
        } else {
          console.error(TAG$3 + "请求字幕链接信息失败", subTitleInfoResponse);
        }
      }
      if (PopsPanel.getValue("bili-bangumi-generateSimpleChineseSubtitle")) {
        let subTitleHant = SubTitleData.allSubTitleInfo.find((item) => {
          return item.lan === "zh-Hant" || item.name.includes("繁体");
        });
        if (subTitleHant) {
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
          let currentIndex = SubTitleData.allSubTitleInfo.length;
          SubTitleData.allSubTitleInfo.push({
            name: subTitleName,
            lan: "zh-CN-auto",
            data: simpleChineseSubtitleData
          });
          settingOption.selector.push({
            html: subTitleName,
            subTitle_index: currentIndex,
            subTitle_lan: "zh-CN-auto",
            subTitle_data: simpleChineseSubtitleData
          });
        }
      }
      console.log(TAG$3 + "加载视频CC字幕信息", SubTitleData.allSubTitleInfo);
      let firstSubTitle = settingOption.selector[0];
      let currentSelectSubTitle = {
        index: 0,
        html: firstSubTitle.html
      };
      const storageInfo = this.art.storage.get(
        STORAGE_KEY
      );
      if (storageInfo) {
        const findInfoIndex = settingOption.selector.findIndex(
          (item) => item.subTitle_lan === storageInfo.lan
        );
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
      if (SubTitleData.allSubTitleInfo[SubTitleData.currentSelectIndex].data == null || SubTitleData.allSubTitleInfo[SubTitleData.currentSelectIndex].data.length == 0) ;
      else {
        SubTitleEvent.bind();
      }
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
    return (art) => {
      SubTitleCustomStr.generteCustomStr();
      SubTitle.updateArtPlayer(art);
      SubTitle.update(option);
      return {
        name: SubTitle.$key.plugin_KEY,
        update(option2) {
          SubTitle.update(option2);
        }
      };
    };
  }
  const ArtPlayer_PLUGIN_BILIBILI_CC_SUBTITLE_KEY = SubTitle.$key.plugin_KEY;
  const TAG$2 = "[artplayer-plugin-epChoose]：";
  const GenerateArtPlayerEpTitle = (title, title_id) => {
    if (title_id == null) {
      return title;
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
        callback: item.onSelect
      };
    });
    return {
      name: EpChoose.$key.SETTING_KEY,
      icon: `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2295" width="24" height="24"><path d="M983.745542 312.673133a510.516437 510.516437 0 0 0-109.673817-162.745211A510.516437 510.516437 0 0 0 511.999823 0.000353 510.516437 510.516437 0 0 0 149.927922 149.927922 510.516437 510.516437 0 0 0 0.000353 511.999823a510.516437 510.516437 0 0 0 149.927569 362.071902A510.516437 510.516437 0 0 0 511.999823 1023.999294a510.516437 510.516437 0 0 0 362.071902-149.927569A510.516437 510.516437 0 0 0 1023.999294 511.999823c0-69.137584-13.488538-136.121238-40.253752-199.32669z m-62.852348 372.029408a443.779955 443.779955 0 0 1-95.05535 140.994061 441.908508 441.908508 0 0 1-313.73209 129.941935c-59.886283 0-118.042361-11.758333-172.667407-34.851274a443.779955 443.779955 0 0 1-141.029372-95.090661 441.908508 441.908508 0 0 1-129.941934-313.696779c0-59.886283 11.758333-118.042361 34.851274-172.667407a443.779955 443.779955 0 0 1 95.09066-141.029371 441.908508 441.908508 0 0 1 313.696779-129.941935c59.886283 0 118.077671 11.758333 172.667408 34.851274a443.779955 443.779955 0 0 1 141.064682 95.090661 441.908508 441.908508 0 0 1 129.941934 313.696778c0 59.886283-11.793643 118.042361-34.851274 172.667408zM388.413744 706.206519l317.792775-211.86185-317.792775-211.861849v423.723699z" p-id="2296"></path></svg>`,
      html: "选集",
      selector,
      tooltip,
      onSelect: function(item) {
        if (typeof item.callback === "function") {
          item.callback(item, item.index);
        }
        return item.html;
      },
      mounted(panel, item) {
        panel.setAttribute("data-plugin", EpChoose.$key.SETTING_KEY);
      },
      /**
       * 播放下一集
       */
      playNext() {
        let findIndex = this.selector.findIndex((item) => item.default);
        if (findIndex !== -1 && findIndex + 1 < this.selector.length - 1) {
          findIndex += 1;
          this.onSelect(this.selector[findIndex]);
        } else {
          console.warn(TAG$2 + "当前播放列表已无下一集");
        }
      }
    };
  };
  const EpChooseEvent = {
    $event: {
      /** 自动连播 */
      "video:ended": () => {
        console.log(TAG$2 + "自动连播启用，播放下一集");
        let settingIns = EpChoose.$data.art.setting.find(
          EpChoose.$key.SETTING_KEY
        );
        settingIns.playNext();
      }
    },
    bind(art) {
      Object.keys(this.$event).forEach((eventName) => {
        art.on(
          eventName,
          this.$event[eventName]
        );
      });
    },
    unbind(art) {
      Object.keys(this.$event).forEach((eventName) => {
        art.off(
          eventName,
          this.$event[eventName]
        );
      });
    }
  };
  const EpChoose = {
    $flag: {
      isInitCSS: false
    },
    $key: {
      SETTING_KEY: "setting-ep-choose",
      PLUGIN_KEY: "plugin-ep-choose"
    },
    $data: {
      art: null
    },
    /**
     * 重置环境变量
     */
    resetEnv() {
      Object.keys(this.$data).forEach((key) => {
        Reflect.set(this.$data, key, null);
      });
    },
    /**
     * 初始化
     * @param option
     */
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
          /*css*/
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
    /**
     * 更新
     * @param option
     */
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
    }
  };
  const artplayerPluginEpChoose = (option) => {
    return (art) => {
      EpChoose.init(art, option);
      return {
        name: EpChoose.$key.PLUGIN_KEY,
        update(option2) {
          EpChoose.update(option2);
        }
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
    fullscreenWebOff: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" width="28" height="28" preserveAspectRatio="xMidYMid meet"><defs><clipPath id="__lottie_element_177"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_177)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-14,-20 C-14,-20 -18,-20 -18,-20 C-19.049999237060547,-20 -19.920000076293945,-19.18000030517578 -19.989999771118164,-18.149999618530273 C-19.989999771118164,-18.149999618530273 -20,-18 -20,-18 C-20,-18 -20,-12 -20,-12 C-20,-12 -26,-12 -26,-12 C-27.049999237060547,-12 -27.920000076293945,-11.180000305175781 -27.989999771118164,-10.149999618530273 C-27.989999771118164,-10.149999618530273 -28,-10 -28,-10 C-28,-10 -28,-6 -28,-6 C-28,-4.949999809265137 -27.18000030517578,-4.079999923706055 -26.149999618530273,-4.010000228881836 C-26.149999618530273,-4.010000228881836 -26,-4 -26,-4 C-26,-4 -14,-4 -14,-4 C-12.949999809265137,-4 -12.079999923706055,-4.820000171661377 -12.010000228881836,-5.849999904632568 C-12.010000228881836,-5.849999904632568 -12,-6 -12,-6 C-12,-6 -12,-18 -12,-18 C-12,-19.049999237060547 -12.819999694824219,-19.920000076293945 -13.850000381469727,-19.989999771118164 C-13.850000381469727,-19.989999771118164 -14,-20 -14,-20z M18,-20 C18,-20 14,-20 14,-20 C12.949999809265137,-20 12.079999923706055,-19.18000030517578 12.010000228881836,-18.149999618530273 C12.010000228881836,-18.149999618530273 12,-18 12,-18 C12,-18 12,-6 12,-6 C12,-4.949999809265137 12.819999694824219,-4.079999923706055 13.850000381469727,-4.010000228881836 C13.850000381469727,-4.010000228881836 14,-4 14,-4 C14,-4 26,-4 26,-4 C27.049999237060547,-4 27.920000076293945,-4.820000171661377 27.989999771118164,-5.849999904632568 C27.989999771118164,-5.849999904632568 28,-6 28,-6 C28,-6 28,-10 28,-10 C28,-11.050000190734863 27.18000030517578,-11.920000076293945 26.149999618530273,-11.989999771118164 C26.149999618530273,-11.989999771118164 26,-12 26,-12 C26,-12 20,-12 20,-12 C20,-12 20,-18 20,-18 C20,-19.049999237060547 19.18000030517578,-19.920000076293945 18.149999618530273,-19.989999771118164 C18.149999618530273,-19.989999771118164 18,-20 18,-20z M-14,4 C-14,4 -26,4 -26,4 C-27.049999237060547,4 -27.920000076293945,4.820000171661377 -27.989999771118164,5.849999904632568 C-27.989999771118164,5.849999904632568 -28,6 -28,6 C-28,6 -28,10 -28,10 C-28,11.050000190734863 -27.18000030517578,11.920000076293945 -26.149999618530273,11.989999771118164 C-26.149999618530273,11.989999771118164 -26,12 -26,12 C-26,12 -20,12 -20,12 C-20,12 -20,18 -20,18 C-20,19.049999237060547 -19.18000030517578,19.920000076293945 -18.149999618530273,19.989999771118164 C-18.149999618530273,19.989999771118164 -18,20 -18,20 C-18,20 -14,20 -14,20 C-12.949999809265137,20 -12.079999923706055,19.18000030517578 -12.010000228881836,18.149999618530273 C-12.010000228881836,18.149999618530273 -12,18 -12,18 C-12,18 -12,6 -12,6 C-12,4.949999809265137 -12.819999694824219,4.079999923706055 -13.850000381469727,4.010000228881836 C-13.850000381469727,4.010000228881836 -14,4 -14,4z M26,4 C26,4 14,4 14,4 C12.949999809265137,4 12.079999923706055,4.820000171661377 12.010000228881836,5.849999904632568 C12.010000228881836,5.849999904632568 12,6 12,6 C12,6 12,18 12,18 C12,19.049999237060547 12.819999694824219,19.920000076293945 13.850000381469727,19.989999771118164 C13.850000381469727,19.989999771118164 14,20 14,20 C14,20 18,20 18,20 C19.049999237060547,20 19.920000076293945,19.18000030517578 19.989999771118164,18.149999618530273 C19.989999771118164,18.149999618530273 20,18 20,18 C20,18 20,12 20,12 C20,12 26,12 26,12 C27.049999237060547,12 27.920000076293945,11.180000305175781 27.989999771118164,10.149999618530273 C27.989999771118164,10.149999618530273 28,10 28,10 C28,10 28,6 28,6 C28,4.949999809265137 27.18000030517578,4.079999923706055 26.149999618530273,4.010000228881836 C26.149999618530273,4.010000228881836 26,4 26,4z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z"></path></g></g></g></svg>`
  };
  const ArtPlayerCommonOption = () => {
    return {
      /** 容器 */
      container: "",
      /** 视频地址 */
      url: "",
      /** 视频封面 */
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
      /** 播放器是否自动调整大小(可能有bug) */
      autoSize: false,
      /** 是否显示视频宽高比按钮 */
      aspectRatio: false,
      /** 是否显示视频窗口全屏按钮 */
      fullscreen: true,
      /** 是否显示视频网页全屏按钮 */
      fullscreenWeb: true,
      /** 是否启用播放器字幕偏移 */
      subtitleOffset: true,
      /** 是否启用播放器迷你进度条 */
      miniProgressBar: true,
      /** 保证页面只存在一个实例 */
      mutex: false,
      /** UI中是否使用背景 */
      backdrop: true,
      /** 移动端是否使用playsInline */
      playsInline: false,
      /** 是否使用自动播放 */
      autoPlayback: true,
      /** 是否使用airplay */
      airplay: true,
      /** 是否在移动端显示一个 锁定按钮 ，用于隐藏底部 控制栏 */
      lock: true,
      /** 是否在移动端添加长按视频快进功能 */
      fastForward: true,
      /** 播放器颜色主题 */
      theme: BilibiliData.theme,
      /** 播放器语言 */
      lang: navigator.language.toLowerCase(),
      /** 覆盖video属性 */
      moreVideoAttr: {
        crossOrigin: "anonymous"
      },
      /** 自定义图标 */
      icons: ArtPlayerBiliBiliIcon
    };
  };
  const TAG$1 = "[artplayer-plugin-quality]：";
  const ArtPlayer_PLUGIN_QUALITY_KEY = "artplayer-plugin-quality";
  const Quality = {
    $data: {
      art: null
    },
    init(art, option) {
      Reflect.set(this.$data, "art", null);
      this.$data.art = art;
      this.update(option);
    },
    update(option) {
      const that = this;
      if (option.qualityList.length) {
        let firstQualityInfo = option.qualityList[0];
        const storageKey = `artplayer-quality-${option.from}`;
        const storageQualityInfo = this.$data.art.storage.get(
          storageKey
        );
        let currentSelectQualityInfo = {
          index: 0,
          html: firstQualityInfo.html,
          /** 播放的地址 */
          url: firstQualityInfo.url
        };
        if (storageQualityInfo) {
          const findQualityIndex = option.qualityList.findIndex(
            (item) => item.quality === storageQualityInfo.quality
          );
          if (findQualityIndex !== -1) {
            const findQuality = option.qualityList[findQualityIndex];
            currentSelectQualityInfo.index = findQualityIndex;
            currentSelectQualityInfo.url = findQuality.url;
            currentSelectQualityInfo.html = findQuality.html;
          } else {
            console.warn(TAG$1 + "没有找到上次选的画质，使用当前默认第一个画质");
          }
        }
        let selectorList = option.qualityList.map((item, index) => {
          return {
            default: index === currentSelectQualityInfo.index,
            html: item.html,
            url: item.url,
            quality: item.quality
          };
        });
        const controlsOption = {
          name: ArtPlayer_PLUGIN_QUALITY_KEY,
          index: 10,
          position: "right",
          html: currentSelectQualityInfo.html,
          selector: selectorList,
          onSelect: function(selector) {
            let itemInfo = selector;
            console.log(TAG$1 + "切换画质", itemInfo);
            that.$data.art.switchQuality(itemInfo.url);
            that.$data.art.storage.set(storageKey, {
              quality: itemInfo.quality
            });
            return selector.html;
          }
        };
        if (Reflect.has(this.$data.art.controls, ArtPlayer_PLUGIN_QUALITY_KEY)) {
          this.$data.art.controls.update(controlsOption);
        } else {
          this.$data.art.controls.add(controlsOption);
        }
        this.$data.art.url = currentSelectQualityInfo.url;
      } else {
        if (Reflect.has(this.$data.art.controls, ArtPlayer_PLUGIN_QUALITY_KEY)) {
          this.$data.art.controls.remove(ArtPlayer_PLUGIN_QUALITY_KEY);
        }
      }
    }
  };
  const artplayPluginQuality = (option) => {
    return (art) => {
      Quality.init(art, option);
      return {
        name: ArtPlayer_PLUGIN_QUALITY_KEY,
        update(option2) {
          Quality.update(option2);
        }
      };
    };
  };
  const Toast = {
    $data: {
      art: null
    },
    $key: {
      plugin_KEY: "artplayer-plugin-toast"
    },
    $flag: {
      isInitCSS: false
    },
    $config: {
      /** 默认的toast的className */
      originToast: "art-layer-auto-playback",
      /** 让Toast隐藏的className */
      hideClassName: "art-toast-hide-opacity",
      /** 自定义的toast的class，避免和页面原有的toast冲突 */
      prefix: "mplayer-toast-gm"
    },
    $el: {
      get $originPlayer() {
        return document.querySelector(
          ".art-video-player .art-layers"
        );
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
      let $parent = config.parent ?? this.$el.$originPlayer;
      if (!$parent) {
        throw new TypeError("toast parent is null");
      }
      this.mutationMPlayerOriginToast($parent);
      let $toast = domutils.createElement("div", {
        "data-from": "gm"
      });
      domutils.addClass($toast, this.$config.prefix);
      if (config.showCloseBtn) {
        let $closeBtn = domutils.createElement("div", {
          className: this.$config.prefix + "-close",
          innerHTML: (
            /*html*/
            `
                    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z"></path></svg>
                `
          )
        });
        $toast.appendChild($closeBtn);
        domutils.on(
          $closeBtn,
          "click",
          (event) => {
            utils.preventEvent(event);
            this.closeToast($toast);
          },
          {
            capture: true
          }
        );
      }
      let $text = domutils.createElement("span", {
        className: this.$config.prefix + "-text",
        innerText: config.text
      });
      $toast.appendChild($text);
      if (typeof config.timeText === "string" && config.timeText.trim() != "") {
        let $time = domutils.createElement("span", {
          className: this.$config.prefix + "-time",
          innerText: config.timeText
        });
        $toast.appendChild($time);
      }
      if (typeof config.jumpText === "string" && config.jumpText.trim() != "") {
        let $jump = domutils.createElement("span", {
          className: this.$config.prefix + "-jump",
          innerText: config.jumpText
        });
        $toast.appendChild($jump);
        domutils.on(
          $jump,
          "click",
          (event) => {
            if (typeof config.jumpClickCallback === "function") {
              utils.preventEvent(event);
              config.jumpClickCallback(event);
            }
          },
          {
            capture: true
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
        /*css*/
        `
        .${this.$config.hideClassName}{
            opacity: 0;
            visibility: hidden;
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
      let $mplayer = this.$el.$originPlayer;
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
        document.querySelectorAll(`.${this.$config.prefix}`)
      ).concat(
        Array.from(
          document.querySelectorAll(
            ".".concat(this.$config.originToast)
          )
        )
      );
      if (pageToastList.length) {
        pageToastList.length - 1;
        pageToastList.forEach(($pageToast, index) => {
          $pageToast.setAttribute("data-transition", "move");
          $pageToast.style.bottom = `calc( calc( var(--art-control-height) + var(--art-bottom-gap) ) * ${index + 1} + 10px)`;
        });
      }
    },
    /**
     * 关闭吐司
     */
    closeToast($ele) {
      $ele.classList.add(this.$config.hideClassName);
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
    setTransitionendEvent($toast, config) {
      let that = this;
      let animationEndNameList = this.getTransitionendEventNameList();
      domutils.on(
        $toast,
        animationEndNameList,
        function(event) {
          let dataTransition = $toast.getAttribute("data-transition");
          if ($toast.classList.contains(that.$config.hideClassName)) {
            if (typeof config === "object" && typeof (config == null ? void 0 : config.closeCallback) === "function") {
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
          capture: true
        }
      );
    }
  };
  const artplayerPluginToast = (option) => {
    return (art) => {
      Toast.$data.art = art;
      return {
        name: Toast.$key.plugin_KEY,
        toast(...args) {
          return Toast.toast(...args);
        }
      };
    };
  };
  const ArtPlayer_PLUGIN_TOAST_KEY = Toast.$key.plugin_KEY;
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
                epList: option.epList || []
              },
              true
            );
          }
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
                epList: option.epList || []
              },
              true
            );
          }
        };
      });
    }
  };
  const BilibiliVideoArtPlayer = {
    $data: {
      art: null,
      /** 当前的配置项 */
      currentOption: null
    },
    /**
     * 重置环境变量
     */
    resetEnv(isInit) {
      if (isInit) {
        Reflect.set(this.$data, "art", null);
      }
      Reflect.set(this.$data, "currentOption", null);
    },
    /**
     * 初始化播放器
     * @param option
     */
    async init(option) {
      this.resetEnv(true);
      this.$data.currentOption = option;
      const localArtDanmakuOption_KEY = "artplayer-video-danmaku-option";
      const artPlayerDanmakuOptionHelper = new ArtPlayerDanmakuOptionHelper(
        localArtDanmakuOption_KEY
      );
      const localArtDanmakuOption = artPlayerDanmakuOptionHelper.getLocalArtDanmakuOption();
      const artOption = {
        ...ArtPlayerCommonOption(),
        container: option.container,
        /** 视频封面 */
        poster: option.poster,
        /** 自定义设置列表 */
        settings: [
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
          }
        ],
        plugins: [
          artplayerPluginToast(),
          artplayPluginQuality({
            from: "video",
            qualityList: option.quality
          })
        ]
      };
      artOption.type = "mp4";
      if (PopsPanel.getValue("artplayer-plugin-video-danmaku-enable")) {
        artOption.plugins.push(
          artplayerPluginDanmuku({
            danmuku: option.danmukuUrl,
            // 以下为非必填
            speed: localArtDanmakuOption.speed,
            // 弹幕持续时间，范围在[1 ~ 10]
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
          })
        );
      }
      if (PopsPanel.getValue("artplayer-plugin-video-m4sAudioSupport-enable")) {
        artOption.plugins.push(
          artplayerPluginM4SAudioSupport({
            from: "video",
            showSetting: true,
            audioList: option.audioList || []
          })
        );
      }
      if (PopsPanel.getValue("artplayer-plugin-video-epChoose-enable")) {
        artOption.plugins.push(
          artplayerPluginEpChoose({
            EP_LIST: generateVideoSelectSetting(option),
            automaticBroadcast: true
          })
        );
      }
      if (PopsPanel.getValue("artplayer-plugin-video-cc-subtitle-enable")) {
        artOption.plugins.push(
          artplayerPluginBilibiliCCSubTitle({
            from: "video",
            cid: option.cid,
            aid: option.aid,
            bvid: option.bvid
          })
        );
      }
      if (PopsPanel.getValue("artplayer-plugin-video-toptoolbar-enable")) {
        artOption.plugins.push(
          artplayerPluginTopToolBar({
            onlineInfoParams: {
              aid: option.aid,
              cid: option.cid,
              bvid: option.bvid
            },
            title: option.videoTitle,
            showWrap: true,
            showTitle: true,
            showOnlineTotal: true
          })
        );
      }
      if (PopsPanel.getValue("bili-video-playerAutoPlayVideo")) {
        artOption.muted = true;
        artOption.autoplay = true;
      }
      this.$data.art = new Artplayer(artOption);
      if (PopsPanel.getValue("artplayer-plugin-video-danmaku-enable")) {
        artPlayerDanmakuOptionHelper.repairBrowserNoResponse(this.$data.art);
      }
      artPlayerDanmakuOptionHelper.onConfigChange(this.$data.art);
      return this.$data.art;
    },
    /**
     * 更新新的播放信息
     * @param option
     */
    async update(art, option) {
      this.resetEnv(false);
      this.$data.currentOption = option;
      log.info(`更新新的播放信息`, option);
      art.pause();
      log.info(`暂停视频`);
      art.currentTime = 0;
      log.info(`重置播放进度`);
      this.updatePluginInfo(art, option);
      art.play();
      log.info("播放");
    },
    /**
     * 更新插件数据
     * @param art
     * @param option
     */
    updatePluginInfo(art, option) {
      let plugin_quality = art.plugins[ArtPlayer_PLUGIN_QUALITY_KEY];
      plugin_quality.update({
        from: "video",
        qualityList: option.quality
      });
      log.info(`更新画质`, option.quality);
      if (PopsPanel.getValue("artplayer-plugin-video-danmaku-enable")) {
        art.plugins.artplayerPluginDanmuku.config({
          danmuku: option.danmukuUrl
        });
        art.plugins.artplayerPluginDanmuku.load();
        log.info(`更新弹幕姬`, option.danmukuUrl);
      }
      if (PopsPanel.getValue("artplayer-plugin-video-m4sAudioSupport-enable")) {
        let plugin_m4sAudioSupport = art.plugins[ArtPlayer_PLUGIN_M4S_AUDIO_SUPPORT_KEY];
        plugin_m4sAudioSupport.update({
          from: "video",
          audioList: option.audioList || []
        });
        log.info(`更新音频`, option.audioList);
      }
      if (PopsPanel.getValue("artplayer-plugin-video-epChoose-enable")) {
        let plugin_epChoose = art.plugins[ArtPlayer_PLUGIN_EP_CHOOSE_KEY];
        plugin_epChoose.update({
          EP_LIST: generateVideoSelectSetting(option),
          automaticBroadcast: true
        });
        log.info(`更新选集信息`, option.epList);
      }
      if (PopsPanel.getValue("artplayer-plugin-video-cc-subtitle-enable")) {
        let plugin_bilibiliCCSubTitle = art.plugins[ArtPlayer_PLUGIN_BILIBILI_CC_SUBTITLE_KEY];
        const subTitleOption = {
          from: "video",
          aid: option.aid,
          bvid: option.bvid,
          cid: option.cid
        };
        plugin_bilibiliCCSubTitle.update(subTitleOption);
        log.info(`更新字幕`, subTitleOption);
      }
      if (PopsPanel.getValue("artplayer-plugin-video-toptoolbar-enable")) {
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
            bvid: option.bvid
          }
        };
        plugin_topToolBar.update(topToolBarOption);
        log.info(`更新顶部标题`, topToolBarOption);
      }
    }
  };
  function filterArrayWithMaxSize$1(arr) {
    const map = {};
    arr.forEach((item) => {
      if (!map[item.id] || item.size > map[item.id].size) {
        map[item.id] = item;
      }
    });
    const result = Object.values(map);
    return result;
  }
  function filterDashVideoQualityInfo$1(dashInfo, config) {
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
        quality: dashVideoInfo.id,
        vip: false
      });
    });
    return result;
  }
  const GenerateArtPlayerOption$1 = async (option) => {
    var _a2, _b;
    const audioInfo = [];
    let qualityInfo = [];
    if (PopsPanel.getValue("bili-video-playType", "mp4") === "mp4") {
      const videoPlayInfo = await BilibiliVideoApi.playUrl({
        bvid: option.bvid,
        cid: option.cid,
        fnval: 1,
        fnver: 0,
        fourk: 1,
        high_quality: 1,
        qn: 127,
        setPlatformHTML5: true
      });
      log.info(videoPlayInfo);
      if (!videoPlayInfo) {
        return;
      }
      let currentDurl = videoPlayInfo["durl"][0];
      let findSupportFormat = videoPlayInfo.support_formats.find(
        (formatsItem) => formatsItem.quality === videoPlayInfo.quality
      );
      let videoUrl = BilibiliCDNProxy.findBetterCDN(
        currentDurl.url,
        currentDurl.url || ((_a2 = currentDurl.backup_url) == null ? void 0 : _a2[0])
      );
      let qualityName = findSupportFormat == null ? void 0 : findSupportFormat.new_description;
      qualityInfo.push({
        name: qualityName,
        url: videoUrl,
        type: "audio/mp4",
        id: videoPlayInfo.quality,
        quality: videoPlayInfo.quality,
        vip: false
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
        setPlatformHTML5: false
      });
      log.info(videoPlayInfo);
      if (!videoPlayInfo) {
        return;
      }
      let userChooseVideoCodingCode = VideoArtPlayerVideoConfig.getUserChooseVideoCodingCode();
      videoPlayInfo.dash.audio.forEach((item) => {
        let audioUrl = BilibiliCDNProxy.findBetterCDN(
          item.baseUrl,
          item.base_url,
          item.baseUrl,
          item.backup_url
        );
        if (PopsPanel.getValue("bili-video-uposServerSelect-applyAudio")) {
          audioUrl = BilibiliCDNProxy.replaceVideoCDN(audioUrl);
        }
        audioInfo.push({
          url: audioUrl,
          id: item.id,
          text: VideoSoundQualityCode[item.id] || ""
        });
      });
      audioInfo.sort((leftItem, rightItem) => {
        return rightItem.id - leftItem.id;
      });
      log.info(`ArtPlayer: 获取的音频信息`, audioInfo);
      qualityInfo = [
        ...filterDashVideoQualityInfo$1(
          {
            accept_quality: videoPlayInfo.accept_quality,
            support_formats: videoPlayInfo.support_formats,
            video: videoPlayInfo.dash.video
          },
          {
            codecid: userChooseVideoCodingCode
          }
        )
      ];
      if (qualityInfo.length === 0) {
        if (videoPlayInfo.dash.video.length !== 0) {
          log.warn(
            `当前选择的视频编码id为: ${userChooseVideoCodingCode}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`
          );
          qualityInfo = [];
          qualityInfo = [
            ...filterDashVideoQualityInfo$1(
              {
                accept_quality: videoPlayInfo.accept_quality,
                support_formats: videoPlayInfo.support_formats,
                video: videoPlayInfo.dash.video
              },
              {}
            )
          ];
        }
      }
      qualityInfo = filterArrayWithMaxSize$1(qualityInfo);
      qualityInfo.sort((leftItem, rightItem) => {
        return rightItem.quality - leftItem.quality;
      });
      log.info(`ArtPlayer: 获取的视频画质信息`, qualityInfo);
    }
    const currentVideoQuality = qualityInfo.map((item, index) => {
      return {
        quality: item.quality,
        html: item.name,
        url: item.url
      };
    });
    const artPlayerOption = {
      // @ts-ignore
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
      quality: currentVideoQuality
    };
    artPlayerOption.url = (_b = qualityInfo == null ? void 0 : qualityInfo[0]) == null ? void 0 : _b.url;
    if (audioInfo.length) {
      artPlayerOption.audioList = audioInfo.map((item, index) => {
        return {
          isDefault: index === 0,
          url: item.url,
          soundQualityCode: item.id,
          soundQualityCodeText: item.text
        };
      });
    }
    return artPlayerOption;
  };
  const BilibiliVideoPlayer = {
    $data: {
      art: null
    },
    init() {
      PopsPanel.execMenu("bili-video-enableArtPlayer", () => {
        this.coverVideoPlayer();
      });
    },
    /**
     * 覆盖播放器
     */
    coverVideoPlayer() {
      if (document.querySelector("#artplayer")) {
        log.warn("已存在播放器，更新播放信息");
      } else {
        addStyle(
          /*css*/
          `
            /* 隐藏原本的播放器 */
			#app .video .m-video-player .player-container{
				display: none !important;
			}
			
			${artPlayerCommonCSS}
			
			${artPlayerCSS$1}

			`
        );
        let controlsPadding = PopsPanel.getValue(
          "bili-video-artplayer-controlsPadding-left-right",
          0
        );
        if (controlsPadding != 0) {
          addStyle(
            /*css*/
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
    /**
     * 更新播放信息
     * @param videoInfo
     * @param isEpChoose 是否是从选集内调用的
     */
    updateArtPlayerVideoInfo(videoInfo, isEpChoose) {
      let that = this;
      VueUtils.waitVuePropToSet("#app .video .m-video-player", {
        msg: "等待m-video-player加载完成",
        check(vueInstance) {
          var _a2, _b, _c, _d, _e, _f;
          if (!isEpChoose && BilibiliVideoArtPlayer.$data.currentOption != null) {
            BilibiliVideoArtPlayer.$data.art.pause();
            return typeof ((_a2 = vueInstance == null ? void 0 : vueInstance.info) == null ? void 0 : _a2.aid) === "number" && BilibiliVideoArtPlayer.$data.currentOption.aid !== vueInstance.info.aid && typeof ((_b = vueInstance == null ? void 0 : vueInstance.info) == null ? void 0 : _b.bvid) === "string" && typeof ((_c = vueInstance == null ? void 0 : vueInstance.info) == null ? void 0 : _c.cid) === "number";
          } else {
            return typeof ((_d = vueInstance == null ? void 0 : vueInstance.info) == null ? void 0 : _d.aid) === "number" && typeof ((_e = vueInstance == null ? void 0 : vueInstance.info) == null ? void 0 : _e.bvid) === "string" && typeof ((_f = vueInstance == null ? void 0 : vueInstance.info) == null ? void 0 : _f.cid) === "number";
          }
        },
        async set(vueInstance) {
          var _a2, _b;
          const $mVideoPlayer = document.querySelector(
            "#app .video .m-video-player"
          );
          let { aid, bvid, cid, pic, title } = vueInstance;
          aid = aid || vueInstance.info.aid;
          bvid = bvid || vueInstance.info.bvid;
          cid = cid || vueInstance.info.cid;
          pic = pic || vueInstance.info.pic;
          title = title || vueInstance.info.title;
          let epInfoList = [];
          const $seasonNew = document.querySelector(
            ".m-video-season-new"
          );
          const $partNew = document.querySelector(".m-video-part-new");
          if ($seasonNew && VueUtils.getVue($seasonNew)) {
            let seasonVueIns = VueUtils.getVue($seasonNew);
            let videoList = seasonVueIns == null ? void 0 : seasonVueIns.videoList;
            if (Array.isArray(videoList)) {
              epInfoList = videoList;
            }
          } else if ($partNew && VueUtils.getVue($partNew)) {
            let partVueIns = VueUtils.getVue($partNew);
            let info = partVueIns == null ? void 0 : partVueIns.info;
            let currentPage = partVueIns == null ? void 0 : partVueIns.p;
            let pages = (partVueIns == null ? void 0 : partVueIns.pages) || ((_a2 = partVueIns == null ? void 0 : partVueIns.info) == null ? void 0 : _a2.pages);
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
                  videos: info == null ? void 0 : info.videos,
                  type_id: 0,
                  type_name: "",
                  copyright: info == null ? void 0 : info.copyright,
                  pic: info == null ? void 0 : info.pic,
                  title: info == null ? void 0 : info.title,
                  pubdate: info == null ? void 0 : info.pubdate,
                  ctime: info == null ? void 0 : info.ctime,
                  desc: info == null ? void 0 : info.desc,
                  state: info == null ? void 0 : info.state,
                  duration: info == null ? void 0 : info.duration,
                  rights: info == null ? void 0 : info.rights,
                  author: info == null ? void 0 : info.owner,
                  stat: info == null ? void 0 : info.stat,
                  dynamic: info == null ? void 0 : info.dynamic,
                  dimension: info == null ? void 0 : info.dimension,
                  desc_v2: info == null ? void 0 : info.desc_v2,
                  is_chargeable_season: info == null ? void 0 : info.is_chargeable_season,
                  is_blooper: info == null ? void 0 : info.is_blooper,
                  enable_vt: info == null ? void 0 : info.enable_vt,
                  vt_display: info == null ? void 0 : info.vt_display
                },
                page: (_b = info == null ? void 0 : info.pages) == null ? void 0 : _b[currentPage],
                pages: info == null ? void 0 : info.pages
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
              epList: epInfoList
            };
          }
          log.info(`视频播放信息 => aid：${aid} bvid：${bvid} cid：${cid}`);
          const artPlayerOption = await GenerateArtPlayerOption$1(videoInfo);
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
            domutils.append($mVideoPlayer, $artPlayerContainer);
          }
          artPlayerOption.container = $artPlayer;
          if (BilibiliVideoPlayer.$data.art == null) {
            let art = await BilibiliVideoArtPlayer.init(artPlayerOption);
            if (art) {
              BilibiliVideoPlayer.$data.art = art;
            } else {
              return;
            }
            BilibiliVideoPlayer.$data.art.volume = 1;
            that.$data.art.once("ready", () => {
              PopsPanel.execMenu(
                "bili-video-playerAutoPlayVideoFullScreen",
                async () => {
                  log.info(`自动进入全屏`);
                  that.$data.art.fullscreen = true;
                  that.$data.art.once("fullscreenError", () => {
                    log.warn(
                      "未成功进入全屏，需要用户交互操作，使用网页全屏代替"
                    );
                    that.$data.art.fullscreenWeb = true;
                  });
                }
              );
            });
          } else {
            await BilibiliVideoArtPlayer.update(
              BilibiliVideoPlayer.$data.art,
              artPlayerOption
            );
          }
          $mVideoPlayer.style.paddingTop = "";
        }
      });
    }
  };
  const BilibiliVideo = {
    $data: {
      /** 是否已添加美化CSS */
      isAddBeautifyCSS: false
    },
    init() {
      BilibiliVideoPlayer.init();
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
            $vCard.querySelector(".count");
            let $title = $originTitle.cloneNode(true);
            let $left = $originLeft.cloneNode(true);
            domutils.hide($originTitle);
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
          BilibiliUtils.goToUrl(BilibiliUrl.getVideoUrl(bvid));
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
        BilibiliUtils.goToUrl(BilibiliUrl.getVideoUrl(bvid));
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
  const artPlayerCSS = ".artplayer-container {\r\n	width: 100vw;\r\n	height: 35vh;\r\n}";
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
  const TAG = "[artplayer-plugin-airborneHelper]：";
  const AirborneHelperEvent = {
    $data: {
      tipJumpToastTimeoutId: void 0,
      tipJumpToastInfo: void 0,
      successJumpToastInfo: void 0
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
        let findIndex = AirborneHelper.$data.option.clip_info_list.findIndex(
          (item) => {
            let jumpTime = item.start;
            if (jumpTime === 0) {
              return currentTime <= 1;
            } else {
              return currentTime >= jumpTime - beforeToastTime && currentTime < jumpTime;
            }
          }
        );
        if (findIndex !== -1) {
          let toastCloseCallBack = function() {
            var _a2;
            clearTimeout(AirborneHelperEvent.$data.tipJumpToastTimeoutId);
            AirborneHelperEvent.$data.tipJumpToastTimeoutId = void 0;
            (_a2 = AirborneHelperEvent.$data.tipJumpToastInfo) == null ? void 0 : _a2.close();
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
              }
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
            }
          });
          setTimeout(() => {
            if (AirborneHelperEvent.$data.tipJumpToastInfo) {
              AirborneHelperEvent.$data.tipJumpToastInfo.close();
              AirborneHelperEvent.$data.tipJumpToastInfo = void 0;
            }
          }, (beforeToastTime + 3) * 1e3);
        }
      }
    },
    bind() {
      Object.keys(this.$event).forEach((eventName) => {
        AirborneHelper.$data.art.on(
          eventName,
          this.$event[eventName]
        );
      });
    },
    unbind() {
      Object.keys(this.$event).forEach((eventName) => {
        AirborneHelper.$data.art.off(
          eventName,
          this.$event[eventName]
        );
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
    }
  };
  const AirborneHelper = {
    $key: {
      plugin_KEY: "plugin-airborne-helper"
    },
    $data: {
      art: null,
      option: null
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
    }
  };
  const artplayerPluginAirborneHelper = (option) => {
    return (art) => {
      AirborneHelper.init(art, option);
      return {
        name: AirborneHelper.$key.plugin_KEY,
        update(option2) {
          AirborneHelper.update(option2);
        }
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
        }
      };
    });
  };
  const BilibiliBangumiArtPlayer = {
    $data: {
      art: null,
      flv: null,
      /** 当前的配置项 */
      currentOption: null
    },
    /**
     * 重置环境变量
     */
    resetEnv(isInit) {
      if (isInit) {
        Reflect.set(this.$data, "art", null);
        Reflect.set(this.$data, "flv", null);
      }
      Reflect.set(this.$data, "currentOption", null);
    },
    /**
     * flv播放
     *
     * 切换url时自动调用
     * @param videoInfoList 可能多个，可能只有一个
     */
    flvPlayer() {
      var _a2, _b;
      if (this.$data.currentOption == null) {
        console.error(TAG_FLV + "获取当前配置为空");
        return;
      }
      let flvInfoList = this.$data.currentOption.flvInfo;
      if (this.$data.flv != null || flvInfoList == null) {
        (_a2 = this.$data.flv) == null ? void 0 : _a2.detachMediaElement();
        (_b = this.$data.flv) == null ? void 0 : _b.destroy();
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
                filesize: item.size
              };
            })
          },
          {
            stashInitialSize: 1024 * 100
          }
        );
      } else {
        this.$data.flv = flvjs.createPlayer(
          {
            type: "flv",
            url: flvInfoList[0].url
          },
          {
            stashInitialSize: 1024 * 100
          }
        );
      }
      this.$data.flv.attachMediaElement(this.$data.art.video);
      this.$data.flv.load();
    },
    /**
     * 初始化播放器
     * @param option
     */
    async init(option) {
      this.resetEnv(true);
      this.$data.currentOption = option;
      const localArtDanmakuOption_KEY = "artplayer-bangumi-danmaku-option";
      const artPlayerDanmakuOptionHelper = new ArtPlayerDanmakuOptionHelper(
        localArtDanmakuOption_KEY
      );
      const localArtDanmakuOption = artPlayerDanmakuOptionHelper.getLocalArtDanmakuOption();
      const artOption = {
        ...ArtPlayerCommonOption(),
        container: option.container,
        /** 自定义设置列表 */
        settings: [
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
          }
        ],
        plugins: [
          artplayerPluginToast(),
          artplayPluginQuality({
            from: "bangumi",
            qualityList: option.quality
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
      if (PopsPanel.getValue("artplayer-plugin-bangumi-danmaku-enable")) {
        artOption.plugins.push(
          artplayerPluginDanmuku({
            danmuku: option.danmukuUrl,
            // 以下为非必填
            speed: localArtDanmakuOption.speed,
            // 弹幕持续时间，范围在[1 ~ 10]
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
          })
        );
      }
      if (PopsPanel.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")) {
        artOption.plugins.push(
          artplayerPluginM4SAudioSupport({
            from: "bangumi",
            audioList: option.audioList || [],
            showSetting: true
          })
        );
      }
      if (PopsPanel.getValue("artplayer-plugin-bangumi-epChoose-enable")) {
        artOption.plugins.push(
          artplayerPluginEpChoose({
            EP_LIST: generateBangumiVideoSelectSetting(option),
            automaticBroadcast: true
          })
        );
      }
      if (PopsPanel.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")) {
        artOption.plugins.push(
          artplayerPluginBilibiliCCSubTitle({
            from: "bangumi",
            cid: option.cid,
            aid: option.aid,
            bvid: option.bvid,
            ep_id: option.ep_id
          })
        );
      }
      if (PopsPanel.getValue("artplayer-plugin-bangumi-toptoolbar-enable")) {
        artOption.plugins.push(
          artplayerPluginTopToolBar({
            onlineInfoParams: {
              aid: option.aid,
              cid: option.cid,
              bvid: option.bvid
            },
            title: option.videoTitle,
            showWrap: true,
            showTitle: true,
            showOnlineTotal: true
          })
        );
      }
      if (PopsPanel.getValue("artplayer-plugin-bangumi-airborneHelper-enable")) {
        artOption.plugins.push(
          artplayerPluginAirborneHelper({
            clip_info_list: option.clip_info_list
          })
        );
      }
      this.$data.art = new Artplayer(artOption);
      if (PopsPanel.getValue("artplayer-plugin-bangumi-danmaku-enable")) {
        artPlayerDanmakuOptionHelper.repairBrowserNoResponse(this.$data.art);
      }
      artPlayerDanmakuOptionHelper.onConfigChange(this.$data.art);
      return this.$data.art;
    },
    /**
     * 更新新的播放信息
     * @param art
     * @param option
     */
    async update(art, option) {
      this.resetEnv(false);
      this.$data.currentOption = option;
      log.info(`更新新的播放信息`, option);
      art.pause();
      log.info(`暂停视频`);
      art.currentTime = 0;
      log.info(`重置播放进度`);
      this.updatePluginInfo(art, option);
      art.play();
      log.info("播放");
    },
    /**
     * 更新插件数据
     * @param art
     * @param option
     */
    updatePluginInfo(art, option) {
      let plugin_quality = art.plugins[ArtPlayer_PLUGIN_QUALITY_KEY];
      plugin_quality.update({
        from: "bangumi",
        qualityList: option.quality
      });
      log.info(`更新画质`, option.quality);
      if (PopsPanel.getValue("artplayer-plugin-bangumi-danmaku-enable")) {
        art.plugins.artplayerPluginDanmuku.config({
          danmuku: option.danmukuUrl
        });
        art.plugins.artplayerPluginDanmuku.load();
        log.info(`更新弹幕姬`, option.danmukuUrl);
      }
      if (PopsPanel.getValue("artplayer-plugin-bangumi-m4sAudioSupport-enable")) {
        let plugin_m4sAudioSupport = art.plugins[ArtPlayer_PLUGIN_M4S_AUDIO_SUPPORT_KEY];
        plugin_m4sAudioSupport.update({
          from: "bangumi",
          audioList: option.audioList || []
        });
        log.info(`更新音频`, option.audioList);
      }
      if (PopsPanel.getValue("artplayer-plugin-bangumi-epChoose-enable")) {
        let plugin_epChoose = art.plugins[ArtPlayer_PLUGIN_EP_CHOOSE_KEY];
        plugin_epChoose.update({
          EP_LIST: generateBangumiVideoSelectSetting(option),
          automaticBroadcast: true
        });
        log.info(`更新选集信息`, option.epList);
      }
      if (PopsPanel.getValue("artplayer-plugin-bangumi-cc-subtitle-enable")) {
        let plugin_bilibiliCCSubTitle = art.plugins[ArtPlayer_PLUGIN_BILIBILI_CC_SUBTITLE_KEY];
        const subTitleOption = {
          from: "bangumi",
          cid: option.cid,
          aid: option.aid,
          ep_id: option.ep_id
        };
        plugin_bilibiliCCSubTitle.update(subTitleOption);
        log.info(`更新字幕`, subTitleOption);
      }
      if (PopsPanel.getValue("artplayer-plugin-bangumi-toptoolbar-enable")) {
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
            bvid: option.bvid
          }
        };
        plugin_topToolBar.update(topToolBarOption);
        log.info(`更新顶部标题`, topToolBarOption);
      }
      if (PopsPanel.getValue("artplayer-plugin-bangumi-airborneHelper-enable")) {
        let plugin_airborneHelper = art.plugins[ArtPlayer_PLUGIN_AIRBORNE_HELPER_KEY];
        plugin_airborneHelper.update({
          clip_info_list: option.clip_info_list
        });
        log.info(`更新空降助手信息`, option.clip_info_list);
      }
    }
  };
  const BangumiArtPlayerVideoConfig = {
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
      videoUrl = BilibiliCDNProxy.replaceBangumiVideoCDN(videoUrl);
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
  const handleQueryVideoQualityData = (bangumiInfo, userChooseVideoCodingCode) => {
    var _a2, _b;
    let qualityInfoList = [];
    if ((_b = (_a2 = bangumiInfo == null ? void 0 : bangumiInfo.dash) == null ? void 0 : _a2.video) == null ? void 0 : _b.length) {
      let dashBangumiInfo = bangumiInfo;
      qualityInfoList = [
        ...filterDashVideoQualityInfo(
          {
            accept_quality: dashBangumiInfo.accept_quality,
            support_formats: dashBangumiInfo.support_formats,
            video: dashBangumiInfo.dash.video
          },
          {
            codecid: userChooseVideoCodingCode
          }
        )
      ];
      if (qualityInfoList.length === 0) {
        if (dashBangumiInfo.dash.video.length !== 0) {
          log.warn(
            `当前选择的视频编码id为: ${userChooseVideoCodingCode}，但是过滤出的视频没有一个符合的，所以直接放弃使用自定义选择视频编码`
          );
          qualityInfoList = [];
          qualityInfoList = [
            ...filterDashVideoQualityInfo(
              {
                accept_quality: dashBangumiInfo.accept_quality,
                support_formats: dashBangumiInfo.support_formats,
                video: dashBangumiInfo.dash.video
              },
              {}
            )
          ];
        }
      }
      qualityInfoList = filterArrayWithMaxSize(qualityInfoList);
      qualityInfoList.sort((leftItem, rightItem) => {
        return rightItem.quality - leftItem.quality;
      });
    } else {
      let mp4BangumiInfo = bangumiInfo;
      if (mp4BangumiInfo.durls.length === 0) {
        if (mp4BangumiInfo.durl != null) {
          mp4BangumiInfo.durls.push({
            quality: mp4BangumiInfo.quality,
            durl: mp4BangumiInfo.durl
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
        let videoUrl = BilibiliCDNProxy.findBetterCDN(
          currentDurl.url,
          currentDurl.backup_url
        );
        let qualityName = findSupportFormat == null ? void 0 : findSupportFormat.new_description;
        qualityInfoList.push({
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
    return qualityInfoList;
  };
  const GenerateArtPlayerOption = async (EP_INFO, EP_LIST) => {
    var _a2, _b;
    const { aid, bvid, cid, ep_id, title, long_title } = EP_INFO;
    log.info(`解析番剧信息 aid:${aid} cid:${cid} ep_id:${ep_id}`);
    const videoTitle = GenerateVideoTitle(title, long_title);
    const audioInfo = [];
    let qualityInfo = [];
    let clip_info_list = [];
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
      if (Array.isArray(bangumiInfo == null ? void 0 : bangumiInfo.clip_info_list)) {
        clip_info_list = bangumiInfo.clip_info_list;
      } else if (Array.isArray(bangumiInfo == null ? void 0 : bangumiInfo.clip_info)) {
        clip_info_list = // @ts-ignore
        bangumiInfo.clip_info;
      }
      let userChooseVideoCodingCode = BangumiArtPlayerVideoConfig.getUserChooseVideoCodingCode();
      if (bangumiInfo.type.toLowerCase() === "flv") {
        isFlv = true;
        bangumiInfo.durl.forEach((durlInfo) => {
          let videoUrl = BilibiliCDNProxy.findBetterCDN(
            durlInfo.url,
            durlInfo.backup_url
          );
          videoUrl = BilibiliCDNProxy.replaceBangumiVideoCDN(videoUrl);
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
        (((_a2 = bangumiInfo == null ? void 0 : bangumiInfo.dash) == null ? void 0 : _a2.audio) || []).forEach((item) => {
          let audioUrl = BilibiliCDNProxy.findBetterCDN(
            item.baseUrl,
            item.base_url,
            item.baseUrl,
            item.backup_url
          );
          if (PopsPanel.getValue("bili-bangumi-uposServerSelect-applyAudio")) {
            audioUrl = BilibiliCDNProxy.replaceBangumiVideoCDN(audioUrl);
          }
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
        log.info(`ArtPlayer: 获取的音频信息`, audioInfo);
        qualityInfo = qualityInfo.concat(
          handleQueryVideoQualityData(bangumiInfo, userChooseVideoCodingCode)
        );
        log.info(`ArtPlayer: 获取的视频画质信息`, qualityInfo);
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
      if (Array.isArray(bangumiInfo == null ? void 0 : bangumiInfo.clip_info_list)) {
        clip_info_list = // @ts-ignore
        bangumiInfo.clip_info_list;
      } else if (Array.isArray(bangumiInfo == null ? void 0 : bangumiInfo.clip_info)) {
        clip_info_list = bangumiInfo.clip_info;
      }
      qualityInfo = qualityInfo.concat(handleQueryVideoQualityData(bangumiInfo));
    }
    const currentVideoQuality = qualityInfo.map((item, index) => {
      return {
        html: item.name,
        url: item.url,
        quality: item.quality
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
      clip_info_list,
      isFlv,
      flvInfo,
      flvTotalDuration,
      flvTotalSize
    };
    artPlayerOption.url = (_b = qualityInfo == null ? void 0 : qualityInfo[0]) == null ? void 0 : _b.url;
    if (audioInfo.length) {
      artPlayerOption.audioList = audioInfo.map((item, index) => {
        return {
          isDefault: index === 0,
          url: item.url,
          soundQualityCode: item.id,
          soundQualityCodeText: item.text
        };
      });
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
            let art = await BilibiliBangumiArtPlayer.init(artPlayerOption);
            if (art) {
              BilibiliBangumi.$data.art = art;
            } else {
              return;
            }
            BilibiliBangumi.$data.art.volume = 1;
          } else {
            BilibiliBangumiArtPlayer.update(
              BilibiliBangumi.$data.art,
              artPlayerOption
            );
          }
        }
      });
    }
  };
  const CommonUtils = {
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
  const BilibiliBangumi = {
    $data: {
      art: null
    },
    init() {
      PopsPanel.execMenuOnce("bili-bangumi-initialScale", () => {
        CommonUtils.initialScale();
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
          log.success("阻止唤醒App", args);
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
			
			${artPlayerCommonCSS}
			
			${artPlayerCSS}
			
			`
        );
        let controlsPadding = PopsPanel.getValue(
          "bili-bangumi-artplayer-controlsPadding-left-right",
          0
        );
        if (controlsPadding != 0) {
          addStyle(
            /*css*/
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
        return {
          isSuccess: false,
          data: data2
        };
      }
      return {
        isSuccess: true,
        data: data2.data.result
      };
    }
  };
  const beautifyCSS = "#app .m-search {\r\n	--card-img-width: 90px;\r\n	--card-img-height: calc(var(--card-img-width) * 1.33);\r\n	--card-desc-color: #808080;\r\n	--card-desc-size: 0.8em;\r\n	--card-badge-item-size: 0.7em;\r\n	--card-badge-item-padding: 0.1em 0.2em;\r\n	--card-badge-item-border-radius: 3px;\r\n	--card-ep-item-border-radius: 4px;\r\n	--card-ep-item-padding-top-bottom: 13px;\r\n	--card-ep-item-padding-left-right: 13px;\r\n	--card-ep-item-badge-padding: 2px;\r\n}\r\n.gm-result-panel {\r\n	padding-top: 23.46667vmin;\r\n	background: #f4f4f4;\r\n}\r\n.gm-card-cover {\r\n	position: relative;\r\n}\r\n.gm-card-cover img {\r\n	width: var(--card-img-width);\r\n	height: var(--card-img-height);\r\n	border-radius: 8px;\r\n}\r\n.gm-card-container {\r\n	display: flex;\r\n	gap: 15px;\r\n}\r\n\r\n.gm-card-box {\r\n	padding: 0px 10px;\r\n}\r\n\r\n.gm-card-item em {\r\n	color: var(--bili-color);\r\n	font-style: unset;\r\n}\r\n\r\n.gm-card-title {\r\n	font-family: 微软雅黑;\r\n	font-size: 1em;\r\n}\r\n\r\n.gm-card-display-info,\r\n.gm-card-styles,\r\nspan.gm-card-media_score-user_count {\r\n	font-size: var(--card-desc-size);\r\n	color: var(--card-desc-color);\r\n}\r\n\r\n.gm-card-info-container {\r\n	display: flex;\r\n	flex-direction: column;\r\n	gap: 3px;\r\n	justify-content: flex-start;\r\n}\r\n.gm-card-info {\r\n	display: flex;\r\n	flex-direction: column;\r\n	justify-content: space-between;\r\n}\r\nspan.gm-card-media_score-score {\r\n	color: #f77c2e;\r\n	font-size: 1.2em;\r\n	font-weight: bold;\r\n}\r\n\r\n.gm-card-media_score {\r\n	display: flex;\r\n	align-items: flex-end;\r\n	gap: 0.5em;\r\n}\r\n.gm-card-item {\r\n	padding: 1.6vmin;\r\n	background: #fff;\r\n	margin: 10px 0px;\r\n	border-radius: 6px;\r\n	display: flex;\r\n	flex-direction: column;\r\n	gap: 15px;\r\n	overflow: hidden;\r\n}\r\n.gm-card-badges {\r\n	background: var(--bili-color);\r\n	color: #fff;\r\n	padding: 3px;\r\n	font-size: 12px;\r\n	border-radius: 3px;\r\n	white-space: nowrap;\r\n	position: absolute;\r\n	top: 5px;\r\n	right: 5px;\r\n}\r\n.gm-card-badge-info-item {\r\n	font-size: var(--card-badge-item-size);\r\n	padding: var(--card-badge-item-padding);\r\n	border-radius: var(--card-badge-item-border-radius);\r\n}\r\n.gm-card-eps {\r\n	display: flex;\r\n	overflow: auto;\r\n	gap: 10px;\r\n}\r\n\r\n.gm-card-ep-conatiner {\r\n	text-align: center;\r\n	white-space: nowrap;\r\n	padding: var(--card-ep-item-padding-top-bottom)\r\n		var(--card-ep-item-padding-left-right);\r\n	background: #edeff3;\r\n	border-radius: var(--card-ep-item-border-radius);\r\n	font-size: 14px;\r\n	position: relative;\r\n}\r\n\r\n.gm-card-ep-badges-container {\r\n	position: absolute;\r\n	top: 0;\r\n	right: 0;\r\n	font-size: calc(\r\n		var(--card-ep-item-padding-top-bottom) - var(--card-ep-item-badge-padding)\r\n	);\r\n}\r\n\r\n.gm-card-ep-badge-top-right {\r\n	border-top-right-radius: var(--card-ep-item-border-radius);\r\n	border-bottom-left-radius: var(--card-ep-item-border-radius);\r\n	padding: var(--card-ep-item-badge-padding);\r\n}\r\n.gm-card-ep-info-container {\r\n	min-width: 30px;\r\n}\r\n";
  const BilibiliExtraSearch = {
    $flag_css: {
      enableOtherAreaSearchBangumi: false
    },
    init() {
      addStyle(beautifyCSS);
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
				color: var(--bili-color);
				border-bottom: 0.53333vmin solid var(--bili-color);
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
          let searchBangumiResultInfo = await BilibiliSearchApi.getBangumiSearchResult({
            keyword,
            area,
            host
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
          log.info("搜索结果：", searchBangumiResultData);
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
          searchBangumiResultData.forEach((searchBangumiResultItem) => {
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
      Reflect.set($item, "data-option", option);
      domutils.on($item, "click", (event) => {
        utils.preventEvent(event);
        window.open(option.url, "_blank");
      });
      let $displayInfo = $item.querySelector(
        ".gm-card-display-info"
      );
      let totalDisplayInfo = [];
      if (Array.isArray(option == null ? void 0 : option.display_info)) {
        totalDisplayInfo = totalDisplayInfo.concat(option.display_info);
      }
      if (Array.isArray(option == null ? void 0 : option.badges)) {
        totalDisplayInfo = totalDisplayInfo.concat(option.badges);
      }
      totalDisplayInfo = utils.uniqueArray(totalDisplayInfo, (item) => item.text);
      totalDisplayInfo.forEach((displayInfo) => {
        let $displayInfoItem = domutils.createElement("span", {
          className: "gm-card-badge-info-item",
          innerText: displayInfo.text
        });
        if (typeof displayInfo.border_color === "string") {
          $displayInfoItem.style.border = `1px solid ${displayInfo.border_color}`;
          $displayInfoItem.style.color = displayInfo.border_color;
        }
        domutils.append($displayInfo, $displayInfoItem);
      });
      if (option.pubtime) {
        domutils.append(
          $displayInfo,
          /*html*/
          `
				<span>${utils.formatTime(option.pubtime * 1e3, "yyyy")}</span>
				`
        );
      }
      let areas = option.areas || Reflect.get(option, "area");
      if (areas) {
        if ($displayInfo.children.length) {
          domutils.append(
            $displayInfo,
            /*html*/
            `
					<span> | </span>
				`
          );
        }
        domutils.append(
          $displayInfo,
          /*html*/
          `
					<span>${areas}</span>
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
      let epsList = [
        ...option.eps || [],
        ...Reflect.get(option, "episodes_new") || []
      ].filter((item) => utils.isNotNull(item));
      epsList.forEach((epsItem) => {
        let title = epsItem.title || epsItem.long_title;
        let url = epsItem.url || Reflect.get(epsItem, "uri");
        let $epItem = domutils.createElement(
          "div",
          {
            className: "gm-card-ep-conatiner",
            innerHTML: (
              /*html*/
              `
				<div class="gm-card-ep-badges-container">
					
				</div>
				<div class="gm-card-ep-info-container">
					${title}
				</div>`
            )
          },
          {
            "data-id": epsItem.id,
            "data-url": url,
            "data-title": title,
            "data-long_title": epsItem.long_title
          }
        );
        let $epBadges = $epItem.querySelector(
          ".gm-card-ep-badges-container"
        );
        $epItem.querySelector(
          ".gm-card-ep-info-container"
        );
        if (Array.isArray(epsItem.badges) && epsItem.badges.length) {
          let epItemBadgeInfo = epsItem.badges[0];
          let $badge = domutils.createElement("span", {
            className: "gm-card-ep-badge-top-right",
            innerText: epItemBadgeInfo.text
          });
          if (typeof epItemBadgeInfo.bg_color === "string") {
            $badge.style.backgroundColor = epItemBadgeInfo.bg_color;
          }
          if (typeof epItemBadgeInfo.text_color === "string") {
            $badge.style.color = epItemBadgeInfo.text_color;
          }
          domutils.append($epBadges, $badge);
        }
        domutils.on($epItem, "click", (event) => {
          utils.preventEvent(event);
          window.open(url, "_blank");
        });
        $eps.appendChild($epItem);
      });
      return $item;
    },
    /**
     * 搜索番剧(从自定义服务器拉取搜索结果)
     */
    searchBangumi() {
    }
  };
  const BilibiliSearchBeautify = {
    $flag: { mutationSearchResult: false },
    init() {
      this.mutationSearchResult();
    },
    /**
     * 监听搜索结果改变
     */
    mutationSearchResult() {
      if (this.$flag.mutationSearchResult) {
        return;
      }
      this.$flag.mutationSearchResult = true;
      addStyle(
        /*css*/
        `
        .bangumi-list{
            padding: 0 10px;
        }
        `
      );
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true
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
            domutils.after($bangumiItem, $newBangumiItem);
            $bangumiItem.remove();
          });
        })
      });
    }
  };
  const BilibiliSearchVueProp = {
    init() {
      PopsPanel.execMenuOnce("bili-search-vue-prop-noCallApp", () => {
        this.noCallApp();
      });
      PopsPanel.execMenuOnce("bili-search-vue-prop-openAppDialog", () => {
        this.openAppDialog();
      });
    },
    /**
     * 该属性会让点击搜索结果弹出打开哔哩哔哩app的弹窗
     * + __vue__.noCallApp
     */
    noCallApp() {
      let lockFn = new utils.LockFunction(() => {
        document.querySelectorAll(
          ".video-list .card-box > div:not([data-gm-inject-no-call-app])"
        ).forEach(($div) => {
          let vueIns = VueUtils.getVue($div);
          if (!vueIns) {
            return;
          }
          if (typeof vueIns.noCallApp === "boolean") {
            Object.defineProperty(vueIns, "noCallApp", {
              value: true,
              writable: false,
              enumerable: true,
              configurable: true
            });
            $div.setAttribute("data-gm-inject-no-call-app", "true");
          }
        });
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true
        },
        callback() {
          lockFn.run();
        }
      });
    },
    /**
     * 该属性会让点击搜索结果弹出打开哔哩哔哩app的弹窗
     * + __vue__.openAppDialog
     */
    openAppDialog() {
      let lockFn = new utils.LockFunction(() => {
        document.querySelectorAll(
          ".video-list .card-box > div:not([data-gm-inject-openAppDialog])"
        ).forEach(($div) => {
          let vueIns = VueUtils.getVue($div);
          if (!vueIns) {
            return;
          }
          if (typeof vueIns.openAppDialog === "boolean") {
            Object.defineProperty(vueIns, "openAppDialog", {
              value: false,
              writable: false,
              enumerable: true,
              configurable: true
            });
            $div.setAttribute("data-gm-inject-openAppDialog", "true");
          }
        });
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true
        },
        callback() {
          lockFn.run();
        }
      });
    }
  };
  const BilibiliSearch = {
    init() {
      if (BilibiliRouter.isSearchResult()) {
        BilibiliExtraSearch.init();
      }
      BilibiliSearchVueProp.init();
      PopsPanel.execMenuOnce("bili-search-cover-cancel", () => {
        this.coverCancel();
      });
      PopsPanel.execMenu("bili-search-beautifySearchResult", () => {
        BilibiliSearchBeautify.init();
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
      return CommonUtils.addBlockCSS("#chat-items");
    },
    /**
     * 屏蔽xxx进入直播间
     */
    blockBrushPrompt() {
      log.info("屏蔽xxx进入直播间");
      return CommonUtils.addBlockCSS("#brush-prompt");
    },
    /**
     * 屏蔽底部工具栏
     */
    blockControlPanel() {
      log.info("屏蔽底部工具栏");
      return CommonUtils.addBlockCSS(".control-panel");
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
          log.info("话题的跳转信息: ", data2);
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
        CommonUtils.addBlockCSS(BilibiliData.className.opus + " .opus-read-more"),
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
          BilibiliUtils.goToUrl(BilibiliUrl.getUserSpaceUrl(mid));
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
          log.info("话题的跳转信息: ", data2);
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
          BilibiliUtils.goToUrl(BilibiliUrl.getUserSpaceDynamicUrl(oid));
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
          log.success("劫持setTimeout的函数", callBackString);
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
          log.success("openApp：阻止唤醒App", args);
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
  const BilibiliRecommendCSS = '#app .m-head .m-recommend-view {\r\n	display: none;\r\n}\r\n\r\n#app\r\n	.m-head\r\n	.suspension\r\n	.channel-menu:has(.recommend-tag.is-avtive)\r\n	.v-switcher__header__anchor {\r\n	display: none !important;\r\n}\r\n#app\r\n	.m-head\r\n	.suspension\r\n	.channel-menu:has(.recommend-tag.is-avtive)\r\n	a.v-switcher__header__tabs__item {\r\n	color: #505050 !important;\r\n}\r\n#app\r\n	.m-head\r\n	.suspension\r\n	.channel-menu:has(.recommend-tag.is-avtive)\r\n	a.recommend-tag {\r\n	color: var(--bili-color) !important;\r\n}\r\n#app\r\n	.m-head\r\n	.suspension\r\n	.channel-menu:has(.recommend-tag.is-avtive)\r\n	a.recommend-tag\r\n	span:after {\r\n	content: " ";\r\n	position: relative;\r\n	background: var(--bili-color);\r\n	width: 30.4375px;\r\n	height: 0.53333vmin;\r\n	display: block;\r\n	bottom: 3px;\r\n}\r\n\r\n#app .m-head:has(.recommend-tag.is-avtive) .suspension + div {\r\n	display: none;\r\n}\r\n#app .m-head:has(.recommend-tag.is-avtive) .m-recommend-view {\r\n	display: unset;\r\n}\r\n\r\n#app .m-head .m-recommend-view {\r\n	background-color: #f0f1f3;\r\n}\r\n#app .m-head .m-recommend-view .list-view .video-list-box .video-list {\r\n	padding: 0 1.33333vmin;\r\n	margin-bottom: 5.33333vmin;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box {\r\n	display: -webkit-box;\r\n	display: -ms-flexbox;\r\n	display: flex;\r\n	-ms-flex-wrap: wrap;\r\n	flex-wrap: wrap;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.card {\r\n	position: relative;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.card\r\n	.bfs-img-wrap {\r\n	position: absolute;\r\n	top: 0;\r\n	left: 0;\r\n	width: 100%;\r\n	height: 100%;\r\n	overflow: hidden;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.card\r\n	.bfs-img-wrap\r\n	.bfs-img.b-img {\r\n	position: relative;\r\n	width: 100%;\r\n	height: 100%;\r\n	overflow: hidden;\r\n	background: transparent;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.card\r\n	.bfs-img-wrap\r\n	.bfs-img.b-img\r\n	picture.b-img__inner {\r\n	display: block;\r\n	width: 100%;\r\n	height: 100%;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.card\r\n	.bfs-img-wrap\r\n	.bfs-img.b-img\r\n	picture.b-img__inner\r\n	img {\r\n	width: 100%;\r\n	height: 100%;\r\n	-o-object-fit: cover;\r\n	object-fit: cover;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.card\r\n	.count {\r\n	position: absolute;\r\n	bottom: 0;\r\n	left: 0;\r\n	width: 100%;\r\n	font-size: 3.2vmin;\r\n	padding: 1.33333vmin 1.6vmin;\r\n	display: -webkit-box;\r\n	display: -ms-flexbox;\r\n	display: flex;\r\n	-webkit-box-pack: justify;\r\n	-ms-flex-pack: justify;\r\n	justify-content: space-between;\r\n	color: #fff;\r\n	background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.title {\r\n	font-size: 3.2vmin;\r\n	color: #212121;\r\n	margin-top: 1.6vmin;\r\n	overflow: hidden;\r\n	text-overflow: ellipsis;\r\n	display: -webkit-box;\r\n	-webkit-line-clamp: 2;\r\n	-webkit-box-orient: vertical;\r\n}\r\n#app\r\n	.m-head\r\n	.m-recommend-view\r\n	.list-view\r\n	.video-list-box\r\n	.video-list\r\n	.card-box\r\n	.v-card\r\n	.gm-up-info\r\n	.gm-up-name\r\n	.gm-picture-text {\r\n	padding: 1px 4px;\r\n	border: 1px solid var(--bili-color);\r\n	color: var(--bili-color);\r\n	border-radius: 2px;\r\n	margin-right: 4px;\r\n	font-size: 2vmin;\r\n}\r\n';
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
      log.success("获取推荐视频信息", videoInfo);
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
          log.error("该goto暂未适配", videoInfoItem);
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
          log.info(`热点信息：`, hotWordInfo);
          $input.placeholder = hotWordInfo.show_name || hotWordInfo.name;
        }
      });
    }
  };
  const BilibiliReadMobile = {
    init() {
      this.removeAds();
      PopsPanel.onceExec("bili-pc-read-mobile-autoExpand", () => {
        return this.autoExpand();
      });
    },
    removeAds() {
      CommonUtils.addBlockCSS(
        /* 底部的打开客户端阅读 */
        "body>.h5-download-bar"
      );
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
        CommonUtils.addBlockCSS(
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
      PopsPanel.execMenuOnce("bili-space-coverDynamicStateCardVideo", () => {
        this.coverDynamicStateCardVideo();
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
            let url = BilibiliUrl.getUserSpaceDynamicUrl(dynamicId);
            BilibiliUtils.goToUrl(url);
          }
        },
        {
          capture: true
        }
      );
    },
    /**
     * 覆盖动态视频的点击事件
     */
    coverDynamicStateCardVideo() {
      log.info(`覆盖动态视频的点击事件`);
      domutils.on(document, "click", ".card-content .main .wings", (event) => {
        var _a2, _b;
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
        let url = (_b = (_a2 = vueIns == null ? void 0 : vueIns.shareData) == null ? void 0 : _a2.default) == null ? void 0 : _b.url;
        if (!url) {
          Qmsg.error("未找到对应的url");
          return;
        }
        BilibiliUtils.goToUrl(url);
      }, {
        capture: true
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
        log.info("Cookie DedeUserID已存在：", cookie_DedeUserID.value);
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
  const Bilibili = {
    init() {
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
                log.info("路由变化 => 更新前", {
                  to,
                  from
                });
                if (to["hash"] === "#/seeCommentReply" || from["hash"] === "#/seeCommentReply") {
                  log.info("该路由变化判定为#/seeCommentReply");
                  next();
                  return;
                }
                if (PopsPanel.getValue("bili-repairVueRouter404")) {
                  if (to.name === "space") {
                    window.location.href = to.fullPath;
                    return;
                  }
                }
                if (to.fullPath.startsWith("/video")) {
                  if (from.fullPath.startsWith("/video") && PopsPanel.getValue(
                    "bili-video-forceThisPageToRefreshAndRedirect"
                  )) {
                    window.location.href = to.fullPath;
                    return;
                  } else if (BilibiliRouter.isHead() && PopsPanel.getValue("bili-head-openVideoInNewTab")) {
                    window.open(to.fullPath, "_blank");
                    return;
                  } else if (PopsPanel.getValue("bili-video-enableArtPlayer")) {
                    window.location.href = to.fullPath;
                    return;
                  }
                } else if (to.fullPath.startsWith("/bangumi")) {
                  if (from.fullPath.startsWith("/bangumi")) {
                    window.location.href = to.fullPath;
                    return;
                  } else if (BilibiliRouter.isHead() && PopsPanel.getValue("bili-head-openVideoInNewTab")) {
                    window.open(to.fullPath, "_blank");
                    return;
                  }
                }
                next();
              }
            );
            $app.__vue__.$router.afterEach(
              (to, from) => {
                log.info("路由变化 => 更新后", {
                  to,
                  from
                });
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