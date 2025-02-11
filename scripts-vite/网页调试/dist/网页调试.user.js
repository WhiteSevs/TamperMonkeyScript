// ==UserScript==
// @name         网页调试
// @namespace    https://greasyfork.org/zh-CN/scripts/475228
// @version      2025.2.12
// @author       WhiteSevs
// @description  内置多种网页调试工具，包括：Eruda、vConsole、PageSpy、Chii，可在设置菜单中进行详细配置
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@58ba73dabe08e81725f8552d6037682530045f87/lib/Eruda/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@9f63667d501ec8df5bdb4af680f37793f393754f/lib/VConsole/index.js
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@c58f3bcbec7aadfd5758206106639e5bf6645b0d/lib/PageSpy/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.6.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.4.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.9.7/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.8/dist/index.umd.js
// @resource     Resource_erudaBenchmark       https://fastly.jsdelivr.net/npm/eruda-benchmark@2.0.1
// @resource     Resource_erudaCode            https://fastly.jsdelivr.net/npm/eruda-code@2.2.0
// @resource     Resource_erudaFeatures        https://fastly.jsdelivr.net/npm/eruda-features@2.1.0
// @resource     Resource_erudaGeolocation     https://fastly.jsdelivr.net/gh/WhiteSevs/eruda-geolocation@38b60386bcb6280de4cccac7b31169a2abdb2edf/eruda-geolocation.js
// @resource     Resource_erudaMonitor         https://fastly.jsdelivr.net/npm/eruda-monitor@1.1.1
// @resource     Resource_erudaOrientation     https://fastly.jsdelivr.net/npm/eruda-orientation@2.1.1
// @resource     Resource_erudaOutlinePlugin   https://fastly.jsdelivr.net/npm/eruda-outline-plugin@0.0.5
// @resource     Resource_erudaPixel           https://fastly.jsdelivr.net/npm/eruda-pixel@1.0.13
// @resource     Resource_erudaTiming          https://fastly.jsdelivr.net/npm/eruda-timing@2.0.1
// @resource     Resource_erudaTouches         https://fastly.jsdelivr.net/npm/eruda-touches@2.1.0
// @resource     Resource_erudaVue             https://fastly.jsdelivr.net/npm/eruda-vue@1.1.1
// @resource     Resource_vConsoleVueDevtools  https://fastly.jsdelivr.net/npm/vue-vconsole-devtools@1.0.9
// @connect      *
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

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  var _a;
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
  const versionJSON = '{\n  "eruda": {\n    "version": "3.4.1",\n    "plugin": {\n      "eruda-monitor": "1.1.1",\n      "eruda-features": "2.1.0",\n      "eruda-timing": "2.0.1",\n      "eruda-code": "2.2.0",\n      "eruda-benchmark": "2.0.1",\n      "eruda-orientation": "2.1.1",\n      "eruda-vue": "1.1.1",\n      "eruda-touches": "2.1.0",\n      "eruda-outline-plugin": "0.0.5",\n      "eruda-pixel": "1.0.13"\n    }\n  },\n  "vconsole": {\n    "version": "3.15.1",\n    "plugin": {\n      "vue-vconsole-devtools": "1.0.9"\n    }\n  },\n  "@huolala-tech/page-spy-browser": {\n    "version": "2.1.1"\n  }\n}';
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
  const PanelSettingConfig = {
    qmsg_config_position: {
      key: "qmsg-config-position",
      defaultValue: "bottom"
    },
    qmsg_config_maxnums: {
      key: "qmsg-config-maxnums",
      defaultValue: 3
    },
    qmsg_config_showreverse: {
      key: "qmsg-config-showreverse",
      defaultValue: false
    },
    httpx_cookie_manager_enable: {
      key: "httpx-use-cookie-enable",
      defaultValue: false
    },
    httpx_cookie_manager_use_document_cookie: {
      key: "httpx-use-document-cookie",
      defaultValue: false
    },
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
  class HttpxCookieManager {
    /**
     * cookie规则，在这里填入
     * @param cookieRule
     * @example
     * {
     *     key: "cookie-example-com",
     *     hostname: "example.com",
     * }
     */
    constructor(cookieRule) {
      __publicField(this, "$data", {
        /** 是否启用 */
        get enable() {
          return PopsPanel.getValue(
            PanelSettingConfig.httpx_cookie_manager_enable.key,
            PanelSettingConfig.httpx_cookie_manager_enable.defaultValue
          );
        },
        /**
         * 是否使用document.cookie
         * + true 使用document.cookie额外添加cookie的header
         */
        get useDocumentCookie() {
          return PopsPanel.getValue(
            PanelSettingConfig.httpx_cookie_manager_use_document_cookie.key,
            PanelSettingConfig.httpx_cookie_manager_use_document_cookie.defaultValue
          );
        },
        /**
         * cookie规则，在这里填入
         * @example
         * {
         *     key: "cookie-example-com",
         *     hostname: "example.com",
         * }
         */
        cookieRule: []
      });
      if (Array.isArray(cookieRule)) {
        this.$data.cookieRule = cookieRule;
      }
    }
    /**
     * 补充cookie末尾分号
     */
    fixCookieSplit(str) {
      if (utils.isNotNull(str) && !str.trim().endsWith(";")) {
        str += ";";
      }
      return str;
    }
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
    }
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
  }
  const httpxCookieManager = new HttpxCookieManager([]);
  const unsafeWin = _unsafeWindow;
  const console$1 = unsafeWin.console;
  const _SCRIPT_NAME_ = "网页调试";
  const utils = Utils.noConflict();
  DOMUtils.noConflict();
  const __pops = pops;
  const log = new utils.Log(
    _GM_info,
    unsafeWin.console || _monkeyWindow.console
  );
  const SCRIPT_NAME = ((_a = _GM_info == null ? void 0 : _GM_info.script) == null ? void 0 : _a.name) || _SCRIPT_NAME_;
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
            return PopsPanel.getValue(
              PanelSettingConfig.qmsg_config_position.key,
              PanelSettingConfig.qmsg_config_position.defaultValue
            );
          }
        },
        maxNums: {
          get() {
            return PopsPanel.getValue(
              PanelSettingConfig.qmsg_config_maxnums.key,
              PanelSettingConfig.qmsg_config_maxnums.defaultValue
            );
          }
        },
        showReverse: {
          get() {
            return PopsPanel.getValue(
              PanelSettingConfig.qmsg_config_showreverse.key,
              PanelSettingConfig.qmsg_config_showreverse.defaultValue
            );
          }
        },
        zIndex: {
          get() {
            let maxZIndex = Utils.getMaxZIndex();
            let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
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
  httpx.interceptors.request.use((data) => {
    httpxCookieManager.handle(data);
    return data;
  });
  httpx.interceptors.response.use(void 0, (data) => {
    log.error("拦截器-请求错误", data);
    if (data.type === "onabort") {
      Qmsg.warning("请求取消");
    } else if (data.type === "onerror") {
      Qmsg.error("请求异常");
    } else if (data.type === "ontimeout") {
      Qmsg.error("请求超时");
    } else {
      Qmsg.error("其它错误");
    }
    return data;
  });
  httpx.config({
    logDetails: DEBUG
  });
  ({
    Object: {
      defineProperty: unsafeWin.Object.defineProperty
    },
    Function: {
      apply: unsafeWin.Function.prototype.apply,
      call: unsafeWin.Function.prototype.call
    },
    Element: {
      appendChild: unsafeWin.Element.prototype.appendChild
    },
    setTimeout: unsafeWin.setTimeout
  });
  utils.addStyle.bind(utils);
  document.querySelector.bind(document);
  document.querySelectorAll.bind(document);
  const copy = _GM_setClipboard || utils.setClip.bind(utils);
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
        return window.innerWidth < 550 ? "88vw" : "550px";
      },
      get height() {
        return window.innerHeight < 450 ? "70vh" : "450px";
      }
    },
    /**
     * 信息界面，一般用于提示信息之类
     */
    info: {
      get width() {
        return window.innerWidth < 350 ? "350px" : "350px";
      },
      get height() {
        return window.innerHeight < 250 ? "250px" : "250px";
      }
    }
  };
  const UISelect = function(text, key, defaultValue, data, callback, description) {
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
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(event, isSelectedValue, isSelectedText) {
        let value = isSelectedValue;
        log.info(`选择：${isSelectedText}`);
        this.props[PROPS_STORAGE_API].set(key, value);
      },
      data: selectData
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    Reflect.set(result.props, PROPS_STORAGE_API, {
      get(key2, defaultValue2) {
        return PopsPanel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        PopsPanel.setValue(key2, value);
      }
    });
    return result;
  };
  const UISwitch = function(text, key, defaultValue, clickCallBack, description, afterAddToUListCallBack) {
    let result = {
      text,
      type: "switch",
      description,
      attributes: {},
      props: {},
      getValue() {
        return Boolean(
          this.props[PROPS_STORAGE_API].get(key, defaultValue)
        );
      },
      callback(event, __value) {
        let value = Boolean(__value);
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        if (typeof clickCallBack === "function") {
          if (clickCallBack(event, value)) {
            return;
          }
        }
        this.props[PROPS_STORAGE_API].set(key, value);
      },
      afterAddToUListCallBack
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    Reflect.set(result.props, PROPS_STORAGE_API, {
      get(key2, defaultValue2) {
        return PopsPanel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        PopsPanel.setValue(key2, value);
      }
    });
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
            PanelSettingConfig.debugTool.key,
            PanelSettingConfig.debugTool.defaultValue,
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
            PanelSettingConfig.allowRunInIframe.key,
            PanelSettingConfig.allowRunInIframe.defaultValue,
            void 0,
            "如果指定本脚本的容器并没有在iframe内执行本脚本，那么该功能将不会生效"
          ),
          UISwitch(
            "主动加载调试工具",
            PanelSettingConfig.autoLoadDebugTool.key,
            PanelSettingConfig.autoLoadDebugTool.defaultValue,
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
  const UIInput = function(text, key, defaultValue, description, changeCallBack, placeholder = "", isNumber, isPassword) {
    let result = {
      text,
      type: "input",
      isNumber: Boolean(isNumber),
      isPassword: Boolean(isPassword),
      props: {},
      attributes: {},
      description,
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(event, value) {
        this.props[PROPS_STORAGE_API].set(key, value);
      },
      placeholder
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    Reflect.set(result.props, PROPS_STORAGE_API, {
      get(key2, defaultValue2) {
        return PopsPanel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        PopsPanel.setValue(key2, value);
      }
    });
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
            PanelSettingConfig.vconsole_auto_open_panel.key,
            PanelSettingConfig.vconsole_auto_open_panel.defaultValue,
            void 0,
            "加载完毕后自动显示面板内容"
          ),
          UISelect(
            "默认展示的面板元素",
            PanelSettingConfig.vconsole_default_show_panel_name.key,
            PanelSettingConfig.vconsole_default_show_panel_name.defaultValue,
            [
              {
                text: "Log",
                value: "default"
              },
              {
                text: "System",
                value: "system",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.vConsole_panel_system.key
                  );
                }
              },
              {
                text: "Network",
                value: "network",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.vConsole_panel_network.key
                  );
                }
              },
              {
                text: "Element",
                value: "element",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.vConsole_panel_element.key
                  );
                }
              },
              {
                text: "Storage",
                value: "storage",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.vConsole_panel_storage.key
                  );
                }
              },
              {
                text: "Stats",
                value: "stats",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.vConsole_plugin_Resource_vConsole_Stats.key
                  );
                }
              },
              {
                text: "exportLog",
                value: "exportlog",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog.key
                  );
                }
              },
              {
                text: "Vue",
                value: "vue",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.key
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
            PanelSettingConfig.vConsole_panel_system.key,
            PanelSettingConfig.vConsole_panel_system.defaultValue,
            void 0,
            "控制台"
          ),
          UISwitch(
            "Network",
            PanelSettingConfig.vConsole_panel_network.key,
            PanelSettingConfig.vConsole_panel_network.defaultValue,
            void 0,
            "元素"
          ),
          UISwitch(
            "Element",
            PanelSettingConfig.vConsole_panel_element.key,
            PanelSettingConfig.vConsole_panel_element.defaultValue,
            void 0,
            "网络"
          ),
          UISwitch(
            "Storage",
            PanelSettingConfig.vConsole_panel_storage.key,
            PanelSettingConfig.vConsole_panel_storage.defaultValue,
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
            PanelSettingConfig.vConsole_theme.key,
            PanelSettingConfig.vConsole_theme.defaultValue,
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
            PanelSettingConfig.vconsole_disableLogScrolling.key,
            PanelSettingConfig.vconsole_disableLogScrolling.defaultValue
          ),
          UISwitch(
            "显示日志的输出时间",
            PanelSettingConfig.vconsole_showTimestamps.key,
            PanelSettingConfig.vconsole_showTimestamps.defaultValue
          ),
          UIInput(
            "日志的上限数量",
            PanelSettingConfig.vconsole_maxLogNumber.key,
            PanelSettingConfig.vconsole_maxLogNumber.defaultValue,
            "请输入数字",
            void 0,
            void 0,
            true
          ),
          UIInput(
            "请求记录的上限数量",
            PanelSettingConfig.vconsole_maxNetworkNumber.key,
            PanelSettingConfig.vconsole_maxNetworkNumber.defaultValue,
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
            PanelSettingConfig.vConsole_storage_defaultStorages_cookies.key,
            PanelSettingConfig.vConsole_storage_defaultStorages_cookies.defaultValue,
            void 0,
            "显示Cookies"
          ),
          UISwitch(
            "LocalStorage",
            PanelSettingConfig.vConsole_storage_defaultStorages_localStorage.key,
            PanelSettingConfig.vConsole_storage_defaultStorages_localStorage.defaultValue,
            void 0,
            "显示LocalStorage"
          ),
          UISwitch(
            "SessionStorage",
            PanelSettingConfig.vConsole_storage_defaultStorages_sessionStorage.key,
            PanelSettingConfig.vConsole_storage_defaultStorages_sessionStorage.defaultValue,
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
            PanelSettingConfig.vConsole_plugin_Resource_vConsole_Stats.key,
            PanelSettingConfig.vConsole_plugin_Resource_vConsole_Stats.defaultValue,
            void 0,
            "A vConsole plugin which can show Stats in front-end."
          ),
          UISwitch(
            "vconsole-outputlog-plugin",
            PanelSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog.key,
            PanelSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog.defaultValue,
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
            PanelSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.key,
            PanelSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.defaultValue,
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
            PanelSettingConfig.eruda_auto_open_panel.key,
            PanelSettingConfig.eruda_auto_open_panel.defaultValue,
            void 0,
            "加载完毕后自动显示面板内容"
          ),
          UISelect(
            "默认展示的面板元素",
            PanelSettingConfig.eruda_default_show_panel_name.key,
            PanelSettingConfig.eruda_default_show_panel_name.defaultValue,
            [
              {
                text: "Console",
                value: "console",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_panel_console.key
                  );
                }
              },
              {
                text: "Elements",
                value: "elements",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_panel_elements.key
                  );
                }
              },
              {
                text: "Network",
                value: "network",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_panel_network.key
                  );
                }
              },
              {
                text: "Resources",
                value: "resources",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_panel_resources.key
                  );
                }
              },
              {
                text: "Sources",
                value: "sources",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_panel_sources.key
                  );
                }
              },
              {
                text: "Info",
                value: "info",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_panel_info.key
                  );
                }
              },
              {
                text: "Snippets",
                value: "snippets",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_panel_snippets.key
                  );
                }
              },
              {
                text: "Monitor",
                value: "monitor",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_plugin_Resource_erudaMonitor.key
                  );
                }
              },
              {
                text: "Features",
                value: "features",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_plugin_Resource_erudaFeatures.key
                  );
                }
              },
              {
                text: "Timing",
                value: "timing",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_plugin_Resource_erudaTiming.key
                  );
                }
              },
              {
                text: "Code",
                value: "code",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_plugin_Resource_erudaCode.key
                  );
                }
              },
              {
                text: "Benchmark",
                value: "benchmark",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_plugin_Resource_erudaBenchmark.key
                  );
                }
              },
              {
                text: "Geolocation",
                value: "geolocation",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_plugin_Resource_erudaGeolocation.key
                  );
                }
              },
              {
                text: "Orientation",
                value: "orientation",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_plugin_Resource_erudaOrientation.key
                  );
                }
              },
              {
                text: "Touches",
                value: "touches",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_plugin_Resource_erudaTouches.key
                  );
                }
              },
              {
                text: "Outline",
                value: "outline",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.key
                  );
                }
              },
              {
                text: "Pixel",
                value: "pixel",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_plugin_Resource_erudaPixel.key
                  );
                }
              },
              {
                text: "Vue",
                value: "vue",
                disable() {
                  return !PopsPanel.getValue(
                    PanelSettingConfig.eruda_plugin_Resource_erudaVue.key
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
            PanelSettingConfig.eruda_panel_console.key,
            PanelSettingConfig.eruda_panel_console.defaultValue,
            void 0,
            "控制台"
          ),
          UISwitch(
            "Elements",
            PanelSettingConfig.eruda_panel_elements.key,
            PanelSettingConfig.eruda_panel_elements.defaultValue,
            void 0,
            "元素"
          ),
          UISwitch(
            "Network",
            PanelSettingConfig.eruda_panel_network.key,
            PanelSettingConfig.eruda_panel_network.defaultValue,
            void 0,
            "网络"
          ),
          UISwitch(
            "Resources",
            PanelSettingConfig.eruda_panel_resources.key,
            PanelSettingConfig.eruda_panel_resources.defaultValue,
            void 0,
            "资源"
          ),
          UISwitch(
            "Sources",
            PanelSettingConfig.eruda_panel_sources.key,
            PanelSettingConfig.eruda_panel_sources.defaultValue,
            void 0,
            "源代码"
          ),
          UISwitch(
            "Info",
            PanelSettingConfig.eruda_panel_info.key,
            PanelSettingConfig.eruda_panel_info.defaultValue,
            void 0,
            "信息"
          ),
          UISwitch(
            "Snippets",
            PanelSettingConfig.eruda_panel_snippets.key,
            PanelSettingConfig.eruda_panel_snippets.defaultValue,
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
            PanelSettingConfig.eruda_plugin_Resource_erudaMonitor.key,
            PanelSettingConfig.eruda_plugin_Resource_erudaMonitor.defaultValue,
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
            PanelSettingConfig.eruda_plugin_Resource_erudaFeatures.key,
            PanelSettingConfig.eruda_plugin_Resource_erudaFeatures.defaultValue,
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
            PanelSettingConfig.eruda_plugin_Resource_erudaTiming.key,
            PanelSettingConfig.eruda_plugin_Resource_erudaTiming.defaultValue,
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
            PanelSettingConfig.eruda_plugin_Resource_erudaCode.key,
            PanelSettingConfig.eruda_plugin_Resource_erudaCode.defaultValue,
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
            PanelSettingConfig.eruda_plugin_Resource_erudaBenchmark.key,
            PanelSettingConfig.eruda_plugin_Resource_erudaBenchmark.defaultValue,
            void 0,
            `
						v${DebugToolVersionConfig.eruda.plugin["eruda-benchmark"]}
						<br>
						运行 JavaScript 性能测试
                    `
          ),
          UISwitch(
            "eruda-geolocation",
            PanelSettingConfig.eruda_plugin_Resource_erudaGeolocation.key,
            PanelSettingConfig.eruda_plugin_Resource_erudaGeolocation.defaultValue,
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
            PanelSettingConfig.eruda_plugin_Resource_erudaOrientation.key,
            PanelSettingConfig.eruda_plugin_Resource_erudaOrientation.defaultValue,
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
            PanelSettingConfig.eruda_plugin_Resource_erudaVue.key,
            PanelSettingConfig.eruda_plugin_Resource_erudaVue.defaultValue,
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
            PanelSettingConfig.eruda_plugin_Resource_erudaTouches.key,
            PanelSettingConfig.eruda_plugin_Resource_erudaTouches.defaultValue,
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
            PanelSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.key,
            PanelSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.defaultValue,
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
            PanelSettingConfig.eruda_plugin_Resource_erudaPixel.key,
            PanelSettingConfig.eruda_plugin_Resource_erudaPixel.defaultValue,
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
            PanelSettingConfig.pagespy_disable_run_in_debug_client.key,
            PanelSettingConfig.pagespy_disable_run_in_debug_client.defaultValue,
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
            PanelSettingConfig.pagespy_api.key,
            PanelSettingConfig.pagespy_api.defaultValue,
            "",
            void 0,
            "服务器地址的 Host"
          ),
          UIInput(
            "clientOrigin",
            PanelSettingConfig.pagespy_clientOrigin.key,
            PanelSettingConfig.pagespy_clientOrigin.defaultValue,
            "",
            void 0,
            "服务器地址的 Origin"
          ),
          UIInput(
            "project",
            PanelSettingConfig.pagespy_project.key,
            PanelSettingConfig.pagespy_project.defaultValue,
            void 0,
            void 0,
            "项目名称"
          ),
          UIInput(
            "title",
            PanelSettingConfig.pagespy_title.key,
            PanelSettingConfig.pagespy_title.defaultValue,
            void 0,
            void 0,
            "自定义标题"
          ),
          UISwitch(
            "autoRender",
            PanelSettingConfig.pagespy_autoRender.key,
            PanelSettingConfig.pagespy_autoRender.defaultValue,
            void 0,
            "自动渲染「圆形白底带 Logo」"
          ),
          UISelect(
            "enableSSL",
            PanelSettingConfig.pagespy_enableSSL.key,
            PanelSettingConfig.pagespy_enableSSL.defaultValue,
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
            PanelSettingConfig.pagespy_offline.key,
            PanelSettingConfig.pagespy_offline.defaultValue,
            void 0,
            `是否进入 "离线模式"，具体表现为 PageSpy 不会创建房间、建立 WebSocket 连接。`
          ),
          UISwitch(
            "serializeData",
            PanelSettingConfig.pagespy_serializeData.key,
            PanelSettingConfig.pagespy_serializeData.defaultValue,
            void 0,
            `是否允许 SDK 在收集离线日志时，序列化非基本类型的数据，序列化的目的是方便在回放时查看`
          ),
          UISwitch(
            "useSecret",
            PanelSettingConfig.pagespy_useSecret.key,
            PanelSettingConfig.pagespy_useSecret.defaultValue,
            void 0,
            `是否启用权限认证功能。启用后，SDK 会生成 6 位数的随机 “密钥”；调试端进入房间时要求输入对应的密钥`
          ),
          UIInput(
            "messageCapacity",
            PanelSettingConfig.pagespy_messageCapacity.key,
            PanelSettingConfig.pagespy_messageCapacity.defaultValue,
            "调试端进入房间后可以看到之前的数据量的大小",
            void 0,
            `指定 SDK 在本地最多缓存多少条数据记录`
          )
        ]
      }
    ]
  };
  const UISlider = function(text, key, defaultValue, min, max, changeCallBack, getToolTipContent, description, step) {
    let result = {
      text,
      type: "slider",
      description,
      attributes: {},
      props: {},
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
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
        this.props[PROPS_STORAGE_API].set(key, value);
      },
      min,
      max,
      step
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    Reflect.set(result.props, PROPS_STORAGE_API, {
      get(key2, defaultValue2) {
        return PopsPanel.getValue(key2, defaultValue2);
      },
      set(key2, value) {
        PopsPanel.setValue(key2, value);
      }
    });
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
              let url = PopsPanel.getValue(
                "chii-debug-url",
                DebugToolConfig.chii.defaultConfig.url
              );
              window.open(url, "_blank");
            },
            void 0,
            () => {
              return Boolean(
                PopsPanel.getValue(
                  PanelSettingConfig.chii_script_embedded.key,
                  PanelSettingConfig.chii_script_embedded.defaultValue
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
            PanelSettingConfig.chii_script_embedded.key,
            PanelSettingConfig.chii_script_embedded.defaultValue,
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
            PanelSettingConfig.chii_disable_run_in_debug_url.key,
            PanelSettingConfig.chii_disable_run_in_debug_url.defaultValue,
            void 0,
            "调试端是下面配置的【调试页面Url】"
          ),
          UISwitch(
            "检测script加载",
            PanelSettingConfig.chii_check_script_load.key,
            PanelSettingConfig.chii_check_script_load.defaultValue,
            void 0,
            "失败会有alert提示弹出"
          ),
          UIInput(
            "调试页面Url",
            PanelSettingConfig.chii_debug_url.key,
            PanelSettingConfig.chii_debug_url.defaultValue,
            "请输入链接Url",
            void 0,
            "配置【调试页面】的Url"
          ),
          UIInput(
            "来源js",
            PanelSettingConfig.chii_target_js.key,
            PanelSettingConfig.chii_target_js.defaultValue,
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
            PanelSettingConfig.chii_embedded_height_enable.key,
            PanelSettingConfig.chii_embedded_height_enable.defaultValue,
            void 0,
            "开启后将自动覆盖面板高度"
          ),
          UISlider(
            "高度设定",
            PanelSettingConfig.chii_embedded_height.key,
            PanelSettingConfig.chii_embedded_height.defaultValue,
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
      let contentConfigList = this.getPanelContentConfig();
      this.initPanelConfigDefaultValue([...contentConfigList]);
      this.registerMenu();
    },
    /** 判断是否是顶层窗口 */
    isTopWindow() {
      return window.top === window.self;
    },
    /** 初始化进行注册油猴菜单 */
    registerMenu() {
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
        }
      ]);
    },
    /** 初始化菜单项的默认值保存到本地数据中 */
    initPanelConfigDefaultValue(contentConfigList) {
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
          if (config.type !== "button") {
            log.warn("请先配置键", config);
          }
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
    addValueChangeListener(key, callback, option) {
      let listenerId = Math.random();
      this.$listener.listenData.set(key, {
        id: listenerId,
        key,
        callback
      });
      if (option) {
        if (option.immediate) {
          callback(key, this.getValue(key), this.getValue(key));
        }
      }
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
      if (typeof deleteKey === "string") {
        this.$listener.listenData.delete(deleteKey);
      } else {
        console.warn("没有找到对应的监听器");
      }
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
     * 根据自定义key只执行一次
     * @param key 自定义key
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
        width: PanelUISize.setting.width,
        height: PanelUISize.setting.height,
        drag: true,
        only: true,
        zIndex() {
          let maxZIndex = Utils.getMaxZIndex();
          let popsMaxZIndex = __pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
          return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
        },
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
      });
    },
    /**
     * 获取配置内容
     */
    getPanelContentConfig() {
      let configList = [
        PanelUI_globalSetting,
        PanelUI_eruda,
        PanelUI_vConsole,
        PanelUI_pagespy,
        PanelUI_chii
      ];
      return configList;
    }
  };
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
  const Eruda = () => {
    initEruda("Eruda", unsafeWin);
    let Eruda2 = unsafeWin.Eruda || globalThis.Eruda;
    if (!Eruda2) {
      alert("调试工具【eruda】注册全局失败，请反馈开发者");
      return;
    }
    let inintPanelList = [];
    if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_console.key)) {
      inintPanelList.push("console");
    }
    if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_elements.key)) {
      inintPanelList.push("elements");
    }
    if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_network.key)) {
      inintPanelList.push("network");
    }
    if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_resources.key)) {
      inintPanelList.push("resources");
    }
    if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_sources.key)) {
      inintPanelList.push("sources");
    }
    if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_info.key)) {
      inintPanelList.push("info");
    }
    if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_snippets.key)) {
      inintPanelList.push("snippets");
    }
    DebugToolConfig.eruda.version = Eruda2.version;
    Eruda2.init({
      tool: inintPanelList
    });
    console$1.log(`eruda当前版本：${Eruda2.version}`);
    console$1.log(`eruda项目地址：${DebugToolConfig.eruda.homeUrl}`);
    console$1.log("eruda的全局变量名: Eruda");
    if (PopsPanel.getValue(
      PanelSettingConfig.eruda_plugin_Resource_erudaMonitor.key
    )) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            PanelSettingConfig.eruda_plugin_Resource_erudaMonitor.resource
          )
        );
        Eruda2.add(erudaMonitor);
      } catch (error) {
        console$1.error("插件【eruda-monitor】加载失败，原因：", error);
      }
    }
    if (PopsPanel.getValue(
      PanelSettingConfig.eruda_plugin_Resource_erudaFeatures.key
    )) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            PanelSettingConfig.eruda_plugin_Resource_erudaFeatures.resource
          )
        );
        Eruda2.add(erudaFeatures);
      } catch (error) {
        console$1.error("插件【eruda-features】加载失败，原因：", error);
      }
    }
    if (PopsPanel.getValue(PanelSettingConfig.eruda_plugin_Resource_erudaTiming.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            PanelSettingConfig.eruda_plugin_Resource_erudaTiming.resource
          )
        );
        Eruda2.add(erudaTiming);
      } catch (error) {
        console$1.error("插件【eruda-timing】加载失败，原因：", error);
      }
    }
    if (PopsPanel.getValue(PanelSettingConfig.eruda_plugin_Resource_erudaCode.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            PanelSettingConfig.eruda_plugin_Resource_erudaCode.resource
          )
        );
        Eruda2.add(erudaCode);
      } catch (error) {
        console$1.error("插件【eruda-code】加载失败，原因：", error);
      }
    }
    if (PopsPanel.getValue(
      PanelSettingConfig.eruda_plugin_Resource_erudaBenchmark.key
    )) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            PanelSettingConfig.eruda_plugin_Resource_erudaBenchmark.resource
          )
        );
        Eruda2.add(erudaBenchmark);
      } catch (error) {
        console$1.error("插件【eruda-benchmark】加载失败，原因：", error);
      }
    }
    if (PopsPanel.getValue(
      PanelSettingConfig.eruda_plugin_Resource_erudaGeolocation.key
    )) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            PanelSettingConfig.eruda_plugin_Resource_erudaGeolocation.resource
          )
        );
        Eruda2.add(erudaGeolocation);
      } catch (error) {
        console$1.error("插件【eruda-geolocation】加载失败，原因：", error);
      }
    }
    if (PopsPanel.getValue(
      PanelSettingConfig.eruda_plugin_Resource_erudaOrientation.key
    )) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            PanelSettingConfig.eruda_plugin_Resource_erudaOrientation.resource
          )
        );
        Eruda2.add(erudaOrientation);
      } catch (error) {
        console$1.error("插件【eruda-orientation】加载失败，原因：", error);
      }
    }
    if (PopsPanel.getValue(
      PanelSettingConfig.eruda_plugin_Resource_erudaTouches.key
    )) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            PanelSettingConfig.eruda_plugin_Resource_erudaTouches.resource
          )
        );
        Eruda2.add(erudaTouches);
      } catch (error) {
        console$1.error("插件【eruda-touches】加载失败，原因：", error);
      }
    }
    if (PopsPanel.getValue(
      PanelSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.key
    )) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            PanelSettingConfig.eruda_plugin_Resource_erudaOutlinePlugin.resource
          )
        );
        Eruda2.add(erudaOutlinePlugin);
      } catch (error) {
        console$1.error("插件【eruda-outline-plugin】加载失败，原因：", error);
      }
    }
    if (PopsPanel.getValue(PanelSettingConfig.eruda_plugin_Resource_erudaPixel.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            PanelSettingConfig.eruda_plugin_Resource_erudaPixel.resource
          )
        );
        Eruda2.add(erudaPixel);
      } catch (error) {
        console$1.error("插件【eruda-pixel】加载失败，原因：", error);
      }
    }
    if (PopsPanel.getValue(PanelSettingConfig.eruda_plugin_Resource_erudaVue.key)) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            PanelSettingConfig.eruda_plugin_Resource_erudaVue.resource
          )
        );
        Eruda2.add(erudaVue);
      } catch (error) {
        console$1.error("插件【eruda-vue】加载失败，原因：", error);
      }
    }
    if (PopsPanel.getValue(PanelSettingConfig.eruda_auto_open_panel.key)) {
      let defaultShowName = PopsPanel.getValue(
        PanelSettingConfig.eruda_default_show_panel_name.key,
        PanelSettingConfig.eruda_default_show_panel_name.defaultValue
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
      constructor(vConsole22, VConsole2) {
        __publicField(this, "vConsole");
        __publicField(this, "VConsole");
        __publicField(this, "dom");
        __publicField(this, "requestID");
        __publicField(this, "stats");
        __publicField(this, "addStyle", (target) => {
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
        });
        __publicField(this, "show", () => {
          if (!this.stats) {
            this.stats = new Stats();
            this.stats.showPanel(1);
            this.dom = this.stats.dom;
            document.body.appendChild(this.dom);
            this.requestID = requestAnimationFrame(this.loop);
          }
        });
        __publicField(this, "changePanel", (type) => {
          if (!this.stats) {
            this.show();
          }
          this.stats.setMode(Number(type));
        });
        __publicField(this, "loop", () => {
          this.stats.update();
          this.requestID = requestAnimationFrame(this.loop);
        });
        __publicField(this, "close", () => {
          if (this.requestID) {
            cancelAnimationFrame(this.requestID);
          }
          if (this.dom) {
            document.body.removeChild(this.dom);
          }
          this.stats = null;
          this.requestID = null;
          this.dom = null;
        });
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
                console$1.error(
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
    }
    return new VConsoleStatsPlugin(vConsole2, VConsole);
  };
  const vConsolePluginExportLog = (vConsole2, VConsole) => {
    class VConsoleOutputLogsPlugin {
      constructor(vConsole22, VConsole2, logItemSelector) {
        __publicField(this, "vConsole");
        __publicField(this, "VConsole");
        __publicField(this, "$");
        __publicField(this, "dom");
        __publicField(this, "logItemSelector");
        __publicField(this, "funDownload", (content, filename) => {
          var eleLink = document.createElement("a");
          eleLink.download = filename;
          eleLink.style.display = "none";
          var blob = new Blob([content]);
          eleLink.href = URL.createObjectURL(blob);
          document.body.appendChild(eleLink);
          eleLink.click();
          document.body.removeChild(eleLink);
        });
        __publicField(this, "getAllLogContent", () => {
          let logRowsElement = document.querySelectorAll(this.logItemSelector);
          let logText = "";
          for (let index = 0; index < logRowsElement.length; index++) {
            const ele = logRowsElement[index];
            logText += `${ele.textContent}
`;
          }
          return logText;
        });
        __publicField(this, "export", () => {
          let logText = this.getAllLogContent();
          this.funDownload(
            logText,
            `${(/* @__PURE__ */ new Date()).toLocaleDateString() + " " + (/* @__PURE__ */ new Date()).toLocaleTimeString()}.log`
          );
        });
        __publicField(this, "copyText", () => {
          let logText = this.getAllLogContent();
          utils.setClip(logText);
        });
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
          console$1.log("[vConsole-exportlog-plugin] -- load");
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
    if (PopsPanel.getValue(PanelSettingConfig.vConsole_panel_system.key)) {
      initPanelList.push("system");
    }
    if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_network.key)) {
      initPanelList.push("network");
    }
    if (PopsPanel.getValue(PanelSettingConfig.eruda_panel_elements.key)) {
      initPanelList.push("element");
    }
    if (PopsPanel.getValue(PanelSettingConfig.vConsole_panel_storage.key)) {
      initPanelList.push("storage");
    }
    if (PopsPanel.getValue(PanelSettingConfig.vConsole_theme.key) === "auto") {
      if (utils.isThemeDark()) ;
    } else {
      PopsPanel.getValue(PanelSettingConfig.vConsole_theme.key);
    }
    let defaultStorages = [];
    if (PopsPanel.getValue(
      PanelSettingConfig.vConsole_storage_defaultStorages_cookies.key
    )) {
      defaultStorages.push("cookies");
    }
    if (PopsPanel.getValue(
      PanelSettingConfig.vConsole_storage_defaultStorages_localStorage.key
    )) {
      defaultStorages.push("localStorage");
    }
    if (PopsPanel.getValue(
      PanelSettingConfig.vConsole_storage_defaultStorages_sessionStorage.key
    )) {
      defaultStorages.push("sessionStorage");
    }
    let vConsole2 = new VConsole({
      defaultPlugins: initPanelList,
      theme: "light",
      onReady() {
        if (PopsPanel.getValue(PanelSettingConfig.vconsole_auto_open_panel.key)) {
          vConsole2.show();
        }
      },
      disableLogScrolling: PopsPanel.getValue(
        PanelSettingConfig.vconsole_disableLogScrolling.key
      ),
      log: {
        maxLogNumber: PopsPanel.getValue(
          PanelSettingConfig.vconsole_maxLogNumber.key,
          PanelSettingConfig.vconsole_maxLogNumber.defaultValue
        ),
        showTimestamps: PopsPanel.getValue(
          PanelSettingConfig.vconsole_showTimestamps.key
        ),
        maxNetworkNumber: PopsPanel.getValue(
          PanelSettingConfig.vconsole_maxNetworkNumber.key,
          PanelSettingConfig.vconsole_maxNetworkNumber.defaultValue
        )
      },
      storage: {
        defaultStorages
      }
    });
    DebugToolConfig.vConsole.version = vConsole2.version;
    unsafeWin.vConsole = vConsole2;
    console$1.log(`VConsole当前版本：${vConsole2.version}`);
    console$1.log(`VConsole项目地址：${DebugToolConfig.vConsole.homeUrl}`);
    console$1.log("VConsole的实例化的全局变量名: vConsole");
    if (PopsPanel.getValue(
      PanelSettingConfig.vConsole_plugin_Resource_vConsole_Stats.key
    )) {
      try {
        vConsolePluginState(vConsole2, VConsole);
      } catch (error) {
        console$1.error("插件【vconsole-stats-plugin】加载失败，原因：", error);
      }
    }
    if (PopsPanel.getValue(
      PanelSettingConfig.vConsole_plugin_Resource_vConsole_ExportLog.key
    )) {
      try {
        vConsolePluginExportLog(vConsole2, VConsole);
      } catch (error) {
        console$1.error("插件【vconsole-outputlog-plugin】加载失败，原因：", error);
      }
    }
    if (PopsPanel.getValue(
      PanelSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.key
    )) {
      try {
        WebSiteDebugUtil.evalPlugin(
          _GM_getResourceText(
            PanelSettingConfig.vConsole_plugin_Resource_vConsoleVueDevtools.resource
          )
        );
        const Devtools = unsafeWin.vueVconsoleDevtools;
        Devtools.initPlugin(vConsole2);
      } catch (error) {
        console$1.error(
          "插件【vconsole-vue-devtools-plugin】加载失败，原因：",
          error
        );
      }
    }
    if (PopsPanel.getValue(PanelSettingConfig.vconsole_auto_open_panel.key)) {
      let defaultShowName = PopsPanel.getValue(
        PanelSettingConfig.vconsole_default_show_panel_name.key,
        PanelSettingConfig.vconsole_default_show_panel_name.defaultValue
      );
      vConsole2.show();
      setTimeout(() => {
        vConsole2.showPlugin(defaultShowName);
      }, 250);
    }
  };
  const PageSpy = () => {
    let api = PopsPanel.getValue(
      PanelSettingConfig.pagespy_api.key,
      PanelSettingConfig.pagespy_api.defaultValue
    );
    let clientOrigin = PopsPanel.getValue(
      PanelSettingConfig.pagespy_clientOrigin.key,
      PanelSettingConfig.pagespy_clientOrigin.defaultValue
    );
    if (PopsPanel.getValue(
      PanelSettingConfig.pagespy_disable_run_in_debug_client.key
    )) {
      if (window.location.hostname.includes(api)) {
        console$1.log("禁止在调试端运行 ==> hostname包含api");
        return;
      }
      if (window.location.origin.includes(clientOrigin)) {
        console$1.log("禁止在调试端运行 ==> origin包含clientOrigin");
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
      project: PopsPanel.getValue(
        PanelSettingConfig.pagespy_project.key,
        PanelSettingConfig.pagespy_project.defaultValue
      ),
      // title 供用户提供自定义参数，可以用于区分当前调试的客户端
      // 对应的信息显示在每个调试连接面板的「设备id」下方
      title: PopsPanel.getValue(
        PanelSettingConfig.pagespy_title.key,
        PanelSettingConfig.pagespy_title.defaultValue
      ),
      // 指示 SDK 初始化完成，是否自动在客户端左下角渲染「圆形白底带 Logo」的控件
      // 如果设置为 false, 可以调用 window.$pageSpy.render() 手动渲染
      autoRender: PopsPanel.getValue(
        PanelSettingConfig.pagespy_autoRender.key,
        PanelSettingConfig.pagespy_autoRender.defaultValue
      ),
      // 手动指定 PageSpy 服务的 scheme。
      // 这在 SDK 无法正确分析出 scheme 可以使用，例如 PageSpy 的浏览器插件
      // 是通过 chrome-extension://xxx/sdk/index.min.js 引入 SDK，这会
      // 被 SDK 解析成无效的 "chrome-extension://" 并回退到 ["http://", "ws://"]。
      //   - （默认）传值 undefined 或者 null：SDK 会自动分析；
      //   - 传递 boolean 值：
      //     - true：SDK 将通过 ["https://", "wss://"] 访问 PageSpy 服务
      //     - false：SDK 将通过 ["http://", "ws://"] 访问 PageSpy 服务
      enableSSL: PopsPanel.getValue(
        PanelSettingConfig.pagespy_enableSSL.key,
        PanelSettingConfig.pagespy_enableSSL.defaultValue
      ),
      // 在 PageSpy@1.7.4 支持离线回放功能后，客户端集成的 SDK 可以不用和调试端建立连接，
      // 通过 DataHarborPlugin 收集数据、导出离线日志，成为新的使用方式。
      // 默认值 false。用户设置为其他值时，会进入 "离线模式"，具体表现为 PageSpy 不会创建房间、建立 WebSocket 连接。
      // 仅适用浏览器环境的 SDK
      offline: PopsPanel.getValue(
        PanelSettingConfig.pagespy_offline.key,
        PanelSettingConfig.pagespy_offline.defaultValue
      ),
      // PageSpy 内置的插件都是开箱即用的，你可以手动指定禁用哪些插件
      // disabledPlugins: [],
      // 是否允许 SDK 在收集离线日志时，序列化非基本类型的数据，序列化的目的是方便在回放时查看
      serializeData: PopsPanel.getValue(
        PanelSettingConfig.pagespy_serializeData.key,
        PanelSettingConfig.pagespy_serializeData.defaultValue
      ),
      // 是否启用权限认证功能。启用后，SDK 会生成 6 位数的随机 “密钥”；调试端进入房间时要求输入对应的密钥
      useSecret: PopsPanel.getValue(
        PanelSettingConfig.pagespy_useSecret.key,
        PanelSettingConfig.pagespy_useSecret.defaultValue
      ),
      // SDK 在调试端进入房间之前会在内存中缓存数据，以便于调试端进入房间后可以看到之前的数据。
      // 但数据体积会越来越大，因此可以指定 SDK 在本地最多缓存多少条数据记录。
      messageCapacity: PopsPanel.getValue(
        PanelSettingConfig.pagespy_messageCapacity.key,
        PanelSettingConfig.pagespy_messageCapacity.defaultValue
      )
    });
    unsafeWin.$pageSpy = $pageSpy;
    console$1.log($pageSpy);
    DebugToolConfig.pageSpy.version = unsafeWin.$pageSpy.version;
    console$1.log("PageSpy全局变量：$pageSpy");
  };
  const ChiiPluginHeight = {
    $data: {
      get key() {
        return PanelSettingConfig.chii_embedded_height.key;
      },
      winHeight: parseInt(window.innerHeight.toString()),
      get winHalfHeight() {
        return PanelSettingConfig.chii_embedded_height.defaultValue;
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
        console$1.log(value);
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
      return PopsPanel.getValue(this.$data.key);
    },
    /**
     *
     * @param value
     */
    setGMLocalHeight(value) {
      if (typeof value !== "number") {
        console$1.log(value);
        throw new TypeError(`${this.$data.key}的值必须是number`);
      }
      PopsPanel.setValue(this.$data.key, value);
    }
  };
  const Chii = () => {
    let debugUrl = PopsPanel.getValue(
      PanelSettingConfig.chii_debug_url.key,
      PanelSettingConfig.chii_debug_url.defaultValue
    );
    if (window.location.href.startsWith(debugUrl) && PopsPanel.getValue(
      PanelSettingConfig.chii_check_script_load.key,
      PanelSettingConfig.chii_disable_run_in_debug_url.defaultValue
    )) {
      console$1.log("禁止在调试端运行 ==> href包含debugUrl");
      return;
    }
    PopsPanel.execMenu(PanelSettingConfig.chii_embedded_height_enable.key, () => {
      ChiiPluginHeight.init();
    });
    if (PopsPanel.getValue(PanelSettingConfig.chii_check_script_load.key)) {
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
    let scriptJsUrl = PopsPanel.getValue(
      PanelSettingConfig.chii_target_js.key,
      PanelSettingConfig.chii_target_js.defaultValue
    );
    let scriptEmbedded = PopsPanel.getValue(
      PanelSettingConfig.chii_script_embedded.key,
      PanelSettingConfig.chii_script_embedded.defaultValue
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
      if (PopsPanel.isTopWindow()) {
        return true;
      }
      if (!PopsPanel.getValue(PanelSettingConfig.allowRunInIframe.key)) {
        return false;
      }
      this.$data.iframeUrlList.push(window.location.href);
      try {
        top.console.log("iframe信息：" + window.location.href);
      } catch (error) {
        console$1.error(error);
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
      let debugTool = PopsPanel.getValue(
        PanelSettingConfig.debugTool.key
      );
      debugTool = debugTool.toString().toLowerCase();
      console$1.log(`网页调试：当前使用的调试工具【${debugTool}】`);
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
        console$1.error("当前未配置该调试工具的运行");
      }
    },
    /**
     * 在脚本菜单中添加控制当前的调试工具状态的菜单按钮
     */
    registerDebugToolMenuControls() {
      if (!PopsPanel.isTopWindow()) {
        console$1.warn("不在iframe内重复添加菜单按钮");
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
        console$1.log("未创建隐藏【调试工具】的style元素 => 创建元素");
        this.$ele.hideDebugToolCSSNode = this.createDebugToolHideCSS();
      }
      if (!this.isInjectDebugToolHideCSS()) {
        console$1.log("页面不存在隐藏【调试工具】的style元素 => 添加元素");
        document.documentElement.appendChild(this.$ele.hideDebugToolCSSNode);
      }
    },
    /**
     * 显示当前的调试工具
     */
    showCurrentDebugTool() {
      if (this.$ele.hideDebugToolCSSNode) {
        console$1.log("页面存在隐藏【调试工具】的style元素 => 移除元素");
        document.documentElement.removeChild(this.$ele.hideDebugToolCSSNode);
        this.$ele.hideDebugToolCSSNode = void 0;
      }
      if (!this.$data.isLoadDebugTool) {
        console$1.log("尚未运行【调试工具】 => 运行调试工具");
        this.execDebugTool();
      }
    }
  };
  const WebSiteDebug = {
    init() {
      if (DebugTool.handleToolWithIframe()) {
        if (PopsPanel.getValue(PanelSettingConfig.autoLoadDebugTool.key)) {
          DebugTool.execDebugTool();
        } else {
          DebugTool.registerDebugToolMenuControls();
        }
      }
    }
  };
  PopsPanel.init();
  WebSiteDebug.init();

})(Qmsg, DOMUtils, Utils, pops);