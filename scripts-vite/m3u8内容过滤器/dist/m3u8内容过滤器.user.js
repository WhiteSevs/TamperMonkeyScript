// ==UserScript==
// @name         m3u8内容过滤器
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2024.11.6
// @author       WhiteSevs
// @description  自定义规则对网页中的m3u8的请求内容进行过滤
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://update.greasyfork.org/scripts/494167/1413255/CoverUMD.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.4.7/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.4.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.8.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.5/dist/index.umd.js
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

(function (Qmsg, DOMUtils, Utils, pops) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, key + "" , value);
  var _a;
  var _GM_deleteValue = /* @__PURE__ */ (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const KEY = "GM_Panel";
  const ATTRIBUTE_INIT = "data-init";
  const ATTRIBUTE_KEY = "data-key";
  const ATTRIBUTE_DEFAULT_VALUE = "data-default-value";
  const ATTRIBUTE_INIT_MORE_VALUE = "data-init-more-value";
  const PROPS_STORAGE_API = "data-storage-api";
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
        if (typeof callback === "function") {
          callback(event, value, isSelectedText);
        }
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
  const Component_Common = {
    id: "component-common",
    title: "通用",
    forms: [
      {
        text: "Toast配置",
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
      },
      {
        text: "Cookie配置",
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
            "自动根据请求的域名来设置对应的cookie"
          )
          // UITextArea(
          // 	"tieba.baidu.com",
          // 	"httpx-cookie-tieba.baidu.com",
          // 	"",
          // 	void 0,
          // 	void 0,
          // 	"Cookie格式：xxx=xxxx;xxx=xxxx"
          // ),
        ]
      }
    ]
  };
  const PanelUISize = {
    /**
     * 一般设置界面的尺寸
     */
    setting: {
      width: window.innerWidth < 550 ? "88vw" : "550px",
      height: window.innerHeight < 450 ? "70vh" : "450px"
    },
    /**
     * 功能丰富，aside铺满了的设置界面，要稍微大一点
     */
    settingBig: {
      width: window.innerWidth < 800 ? "92vw" : "800px",
      height: window.innerHeight < 600 ? "80vh" : "600px"
    },
    /**
     * 信息界面，一般用于提示信息之类
     */
    info: {
      width: window.innerWidth < 350 ? "350px" : "350px",
      height: window.innerHeight < 250 ? "250px" : "250px"
    }
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
    /** 初始化进行注册油猴菜单 */
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
        }
      ]);
    },
    /** 初始化菜单项的默认值保存到本地数据中 */
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
        isMobile: this.isMobile(),
        width: PanelUISize.setting.width,
        height: PanelUISize.setting.height,
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
      if (window.innerHeight < 450) {
        return "80vh";
      } else {
        return "450px";
      }
    },
    /**
     * 获取配置内容
     */
    getPanelContentConfig() {
      let configList = [Component_Common];
      return configList;
    }
  };
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
      /**
       * cookie规则，在这里填入
       * @example
       * {
       *     key: "",
       *     hostname: "",
       * }
       */
      cookieRule: []
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
  const _SCRIPT_NAME_ = "m3u8内容过滤器";
  const utils = Utils.noConflict();
  const domUtils = DOMUtils.noConflict();
  const __pops = pops;
  const log = new utils.Log(
    _GM_info,
    _unsafeWindow.console || _monkeyWindow.console
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
  httpx.interceptors.request.use((data) => {
    HttpxCookieManager.handle(data);
    return data;
  });
  httpx.interceptors.response.use(void 0, (data) => {
    log.error(["拦截器-请求错误", data]);
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
  });
  utils.addStyle.bind(utils);
  document.querySelector.bind(document);
  document.querySelectorAll.bind(document);
  const CommonUtils = {
    /**
     * 把时长转为字符串文本
     *
     * @example
     * 126
     * > 02:06:00
     */
    duration2Text(duration) {
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor(duration % 3600 / 60);
      const secs = parseInt((duration % 60).toString());
      return [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        secs.toString().padStart(2, "0")
      ].join(":");
    },
    /**
     * 计算字符串的相似度
     * @param sourceText 源文本
     * @param targetText 比较文本
     */
    similar(sourceText, targetText) {
      if (!sourceText || !targetText) {
        return 0;
      }
      var l = sourceText.length > targetText.length ? sourceText.length : targetText.length;
      var n = sourceText.length;
      var m = targetText.length;
      var d = [];
      var min = function(a, b, c) {
        return a < b ? a < c ? a : c : b < c ? b : c;
      };
      var i, j, si, tj, cost;
      if (n === 0) return m;
      if (m === 0) return n;
      for (i = 0; i <= n; i++) {
        d[i] = [];
        d[i][0] = i;
      }
      for (j = 0; j <= m; j++) {
        d[0][j] = j;
      }
      for (i = 1; i <= n; i++) {
        si = sourceText.charAt(i - 1);
        for (j = 1; j <= m; j++) {
          tj = targetText.charAt(j - 1);
          if (si === tj) {
            cost = 0;
          } else {
            cost = 1;
          }
          d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        }
      }
      let res = 1 - d[n][m] / l;
      return res;
    },
    /**
     * 添加<link>标签
     * @param url
     */
    async addLinkNode(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
      domUtils.ready(() => {
        document.head.appendChild($link);
      });
    },
    /**
     * 将url修复，例如只有search的链接修复为
     * @param url 需要修复的链接
     * @example
     * 修复前：`/xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * @example
     * 修复前：`//xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * @example
     * 修复前：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     * @example
     * 修复前：`xxx/xxx?ss=ssss`
     * 修复后：`https://xxx.xxx.xxx/xxx/xxx?ss=ssss`
     */
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
    /**
     * http转https
     * @param url 需要修复的链接
     * @example
     * 修复前：
     * 修复后：
     * @example
     * 修复前：
     * 修复后：
     */
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
    }
  };
  const NetWorkHook = {
    get ajaxHooker() {
      if (this.__ajaxHooker == null) {
        this.__ajaxHooker = utils.ajaxHooker();
      }
      return this.__ajaxHooker;
    },
    hook() {
      this.ajaxHooker.hook((request) => {
        let url = CommonUtils.fixUrl(request.url);
        try {
          let urlObj = new URL(url);
          let pathName = urlObj.pathname;
          if (!pathName.endsWith(".m3u8")) {
            return;
          }
          request.response = (response) => {
            let m3u8Text = response.responseText;
            if (m3u8Text.trim() === "") {
              return;
            }
            if (!m3u8Text.includes("#EXT-X-ENDLIST")) {
              return;
            }
            let handlerM3U8Text = M3U8Rule.runRule(m3u8Text);
            response.responseText = handlerM3U8Text;
          };
        } catch (error) {
          log.error("m3u8过滤器 hook network出错", error);
        }
      });
    },
    unhook() {
      this.ajaxHooker.unhook();
    }
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
  class RuleEditView {
    constructor(option) {
      __publicField(this, "option");
      this.option = option;
    }
    /**
     * 显示视图
     */
    showView() {
      var _a2;
      let $dialog = __pops.confirm({
        title: {
          text: this.option.title,
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <form class="rule-form-container" onsubmit="return false">
                        <ul class="rule-form-ulist">
                            
                        </ul>
                        <input type="submit" style="display: none;" />
                    </form>
                    `
          ),
          html: true
        },
        btn: utils.assign(
          {
            ok: {
              callback() {
                submitSaveOption();
              }
            }
          },
          this.option.btn || {},
          true
        ),
        mask: {
          enable: true
        },
        style: (
          /*css*/
          `
                ${__pops.config.cssText.panelCSS}
                
                .rule-form-container {
                    
                }
                .rule-form-container li{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 5px 20px;
                    gap: 10px;
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

                ${((_a2 = this.option) == null ? void 0 : _a2.style) ?? ""}
            `
        ),
        width: window.innerWidth > 500 ? "500px" : "88vw",
        height: window.innerHeight > 500 ? "500px" : "80vh"
      });
      let $form = $dialog.$shadowRoot.querySelector(
        ".rule-form-container"
      );
      $dialog.$shadowRoot.querySelector(
        "input[type=submit]"
      );
      let $ulist = $dialog.$shadowRoot.querySelector(".rule-form-ulist");
      let view = this.option.getView(this.option.data());
      $ulist.appendChild(view);
      const submitSaveOption = () => {
        let result = this.option.onsubmit($form, this.option.data());
        if (!result.success) {
          return;
        }
        $dialog.close();
        this.option.dialogCloseCallBack(true);
      };
    }
  }
  class RuleFilterView {
    constructor(option) {
      __publicField(this, "option");
      this.option = option;
    }
    showView() {
      let $alert = __pops.alert({
        title: {
          text: this.option.title,
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                <div class="filter-container"></div>
                `
          )
        },
        btn: {
          ok: {
            text: "关闭",
            type: "default"
          }
        },
        mask: {
          enable: true
        },
        width: window.innerWidth > 500 ? "350px" : "80vw",
        height: window.innerHeight > 500 ? "300px" : "70vh",
        style: (
          /*css*/
          `
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
            `
        )
      });
      let $filterContainer = $alert.$shadowRoot.querySelector(".filter-container");
      let $fragment = document.createDocumentFragment();
      this.option.filterOption.forEach((filterOption) => {
        let $button = document.createElement("button");
        $button.innerText = filterOption.name;
        let execFilterAndCloseDialog = () => {
          this.option.getAllRuleInfo().forEach((ruleInfo) => {
            if (!filterOption.filterCallBack(ruleInfo.data)) {
              domUtils.hide(ruleInfo.$el, false);
            } else {
              domUtils.show(ruleInfo.$el, false);
            }
          });
          if (typeof this.option.execFilterCallBack === "function") {
            this.option.execFilterCallBack();
          }
          $alert.close();
        };
        domUtils.on($button, "click", (event) => {
          utils.preventEvent(event);
          if (typeof filterOption.callback === "function") {
            let result = filterOption.callback(event, execFilterAndCloseDialog);
            if (!result) {
              return;
            }
          }
          execFilterAndCloseDialog();
        });
        $fragment.appendChild($button);
      });
      $filterContainer.appendChild($fragment);
    }
  }
  class RuleView {
    constructor(option) {
      __publicField(this, "option");
      this.option = option;
    }
    /**
     * 显示视图
     */
    showView() {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
      let $popsConfirm = __pops.confirm({
        title: {
          text: this.option.title,
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="rule-view-container">
                    </div>
                    `
          ),
          html: true
        },
        btn: {
          merge: true,
          reverse: false,
          position: "space-between",
          ok: {
            enable: ((_c = (_b = (_a2 = this.option) == null ? void 0 : _a2.bottomControls) == null ? void 0 : _b.add) == null ? void 0 : _c.enable) || true,
            type: "primary",
            text: "添加",
            callback: (event) => {
              this.showEditView(
                $popsConfirm.$shadowRoot,
                false,
                this.option.getAddData()
              );
            }
          },
          close: {
            enable: true,
            callback(event) {
              $popsConfirm.close();
            }
          },
          cancel: {
            enable: ((_f = (_e = (_d = this.option) == null ? void 0 : _d.bottomControls) == null ? void 0 : _e.filter) == null ? void 0 : _f.enable) || false,
            type: "default",
            text: "过滤",
            callback: (details, event) => {
              var _a3, _b2, _c2, _d2, _e2, _f2, _g2;
              if (typeof ((_c2 = (_b2 = (_a3 = this.option) == null ? void 0 : _a3.bottomControls) == null ? void 0 : _b2.filter) == null ? void 0 : _c2.callback) === "function") {
                this.option.bottomControls.filter.callback();
              }
              let getAllRuleElement = () => {
                return Array.from(
                  $popsConfirm.$shadowRoot.querySelectorAll(
                    ".rule-view-container .rule-item"
                  )
                );
              };
              let $button = event.target.closest(".pops-confirm-btn").querySelector(".pops-confirm-btn-cancel span");
              if (domUtils.text($button).includes("取消")) {
                getAllRuleElement().forEach(($el) => {
                  domUtils.show($el, false);
                });
                domUtils.text($button, "过滤");
              } else {
                let ruleFilterView = new RuleFilterView({
                  title: ((_e2 = (_d2 = this.option.bottomControls) == null ? void 0 : _d2.filter) == null ? void 0 : _e2.title) ?? "过滤规则",
                  filterOption: ((_g2 = (_f2 = this.option.bottomControls) == null ? void 0 : _f2.filter) == null ? void 0 : _g2.option) || [],
                  execFilterCallBack() {
                    domUtils.text($button, "取消过滤");
                  },
                  getAllRuleInfo: () => {
                    return getAllRuleElement().map(($el) => {
                      return {
                        data: this.parseRuleItemElement($el).data,
                        $el
                      };
                    });
                  }
                });
                ruleFilterView.showView();
              }
            }
          },
          other: {
            enable: ((_i = (_h = (_g = this.option) == null ? void 0 : _g.bottomControls) == null ? void 0 : _h.clear) == null ? void 0 : _i.enable) || true,
            type: "xiaomi-primary",
            text: `清空所有(${this.option.data().length})`,
            callback: (event) => {
              let $askDialog = __pops.confirm({
                title: {
                  text: "提示",
                  position: "center"
                },
                content: {
                  text: "确定清空所有的数据？",
                  html: false
                },
                btn: {
                  ok: {
                    enable: true,
                    callback: (popsEvent) => {
                      var _a3, _b2, _c2;
                      log.success("清空所有");
                      if (typeof ((_c2 = (_b2 = (_a3 = this.option) == null ? void 0 : _a3.bottomControls) == null ? void 0 : _b2.clear) == null ? void 0 : _c2.callback) === "function") {
                        this.option.bottomControls.clear.callback();
                      }
                      if (this.option.data().length) {
                        Qmsg.error("清理失败");
                        return;
                      } else {
                        Qmsg.success("清理成功");
                      }
                      this.updateDeleteAllBtnText($popsConfirm.$shadowRoot);
                      this.clearContent($popsConfirm.$shadowRoot);
                      $askDialog.close();
                    }
                  },
                  cancel: {
                    text: "取消",
                    enable: true
                  }
                },
                mask: { enable: true },
                width: "300px",
                height: "200px"
              });
            }
          }
        },
        mask: {
          enable: true
        },
        width: window.innerWidth > 500 ? "500px" : "88vw",
        height: window.innerHeight > 500 ? "500px" : "80vh",
        style: (
          /*css*/
          `
            ${__pops.config.cssText.panelCSS}
            
            .rule-item{
                display: flex;
                align-items: center;
                line-height: normal;
                font-size: 16px;
                padding: 4px 4px;
                gap: 6px;
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
                padding: 0px 4px;
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
            `
        )
      });
      let allData = this.option.data();
      allData.forEach((data) => {
        this.appendRuleItemElement($popsConfirm.$shadowRoot, data);
      });
    }
    /**
     * 解析弹窗内的各个元素
     */
    parseViewElement($shadowRoot) {
      let $container = $shadowRoot.querySelector(
        ".rule-view-container"
      );
      let $deleteBtn = $shadowRoot.querySelector(
        ".pops-confirm-btn button.pops-confirm-btn-other"
      );
      return {
        /** 容器 */
        $container,
        /** 左下角的清空按钮 */
        $deleteBtn
      };
    }
    /**
     * 解析每一项的元素
     */
    parseRuleItemElement($ruleElement) {
      let $enable = $ruleElement.querySelector(
        ".rule-controls-enable"
      );
      let $enableSwitch = $enable.querySelector(".pops-panel-switch");
      let $enableSwitchInput = $enable.querySelector(
        ".pops-panel-switch__input"
      );
      let $enableSwitchCore = $enable.querySelector(
        ".pops-panel-switch__core"
      );
      let $edit = $ruleElement.querySelector(".rule-controls-edit");
      let $delete = $ruleElement.querySelector(
        ".rule-controls-delete"
      );
      return {
        /** 启用开关 */
        $enable,
        /** 启用开关的container */
        $enableSwitch,
        /** 启用开关的input */
        $enableSwitchInput,
        /** 启用开关的core */
        $enableSwitchCore,
        /** 编辑按钮 */
        $edit,
        /** 删除按钮 */
        $delete,
        /** 存储在元素上的数据 */
        data: Reflect.get($ruleElement, "data-rule")
      };
    }
    /**
     * 创建一条规则元素
     */
    createRuleItemElement(data, $shadowRoot) {
      let name = this.option.getDataItemName(data);
      let $ruleItem = domUtils.createElement("div", {
        className: "rule-item",
        innerHTML: (
          /*html*/
          `
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
					${__pops.config.iconSVG.edit}
				</div>
				<div class="rule-controls-delete">
					${__pops.config.iconSVG.delete}
				</div>
			</div>
			`
        )
      });
      Reflect.set($ruleItem, "data-rule", data);
      let switchCheckedClassName = "pops-panel-switch-is-checked";
      const {
        $enable,
        $enableSwitch,
        $enableSwitchCore,
        $enableSwitchInput,
        $delete,
        $edit
      } = this.parseRuleItemElement($ruleItem);
      if (this.option.itemControls.enable.enable) {
        domUtils.on($enableSwitchCore, "click", (event) => {
          let isChecked = false;
          if ($enableSwitch.classList.contains(switchCheckedClassName)) {
            $enableSwitch.classList.remove(switchCheckedClassName);
            isChecked = false;
          } else {
            $enableSwitch.classList.add(switchCheckedClassName);
            isChecked = true;
          }
          $enableSwitchInput.checked = isChecked;
          this.option.itemControls.enable.callback(data, isChecked);
        });
        if (this.option.itemControls.enable.getEnable(data)) {
          $enableSwitch.classList.add(switchCheckedClassName);
        }
      } else {
        $enable.remove();
      }
      if (this.option.itemControls.edit.enable) {
        domUtils.on($edit, "click", (event) => {
          utils.preventEvent(event);
          this.showEditView($shadowRoot, true, data, $ruleItem, (newData) => {
            data = null;
            data = newData;
          });
        });
      } else {
        $edit.remove();
      }
      if (this.option.itemControls.delete.enable) {
        domUtils.on($delete, "click", (event) => {
          utils.preventEvent(event);
          let $askDialog = __pops.confirm({
            title: {
              text: "提示",
              position: "center"
            },
            content: {
              text: "确定删除该条数据？",
              html: false
            },
            btn: {
              ok: {
                enable: true,
                callback: (popsEvent) => {
                  log.success("删除数据");
                  let flag = this.option.itemControls.delete.deleteCallBack(data);
                  if (flag) {
                    Qmsg.success("成功删除该数据");
                    $ruleItem.remove();
                    this.updateDeleteAllBtnText($shadowRoot);
                    $askDialog.close();
                  } else {
                    Qmsg.error("删除该数据失败");
                  }
                }
              },
              cancel: {
                text: "取消",
                enable: true
              }
            },
            mask: {
              enable: true
            },
            width: "300px",
            height: "200px"
          });
        });
      } else {
        $delete.remove();
      }
      return $ruleItem;
    }
    /**
     * 添加一个规则元素
     */
    appendRuleItemElement($shadowRoot, data) {
      const { $container } = this.parseViewElement($shadowRoot);
      if (Array.isArray(data)) {
        for (let index = 0; index < data.length; index++) {
          const item = data[index];
          $container.appendChild(this.createRuleItemElement(item, $shadowRoot));
        }
      } else {
        $container.appendChild(this.createRuleItemElement(data, $shadowRoot));
      }
      this.updateDeleteAllBtnText($shadowRoot);
    }
    /**
     * 更新弹窗内容的元素
     */
    updateRuleContaienrElement($shadowRoot) {
      this.clearContent($shadowRoot);
      this.parseViewElement($shadowRoot);
      let data = this.option.data();
      this.appendRuleItemElement($shadowRoot, data);
      this.updateDeleteAllBtnText($shadowRoot);
    }
    /**
     * 更新规则元素
     */
    updateRuleItemElement(data, $oldRuleItem, $shadowRoot) {
      let $newRuleItem = this.createRuleItemElement(data, $shadowRoot);
      $oldRuleItem.after($newRuleItem);
      $oldRuleItem.remove();
    }
    /**
     * 清空内容
     */
    clearContent($shadowRoot) {
      const { $container } = this.parseViewElement($shadowRoot);
      domUtils.html($container, "");
    }
    /**
     * 设置删除按钮的文字
     */
    setDeleteBtnText($shadowRoot, text, isHTML = false) {
      const { $deleteBtn } = this.parseViewElement($shadowRoot);
      if (isHTML) {
        domUtils.html($deleteBtn, text);
      } else {
        domUtils.text($deleteBtn, text);
      }
    }
    /**
     * 更新【清空所有】的按钮的文字
     */
    updateDeleteAllBtnText($shadowRoot) {
      let data = this.option.data();
      this.setDeleteBtnText($shadowRoot, `清空所有(${data.length})`);
    }
    /**
     * 显示编辑视图
     * @param isEdit 是否是编辑状态
     */
    showEditView($parentShadowRoot, isEdit, editData, $editRuleItemElement, updateDataCallBack) {
      let dialogCloseCallBack = (isSubmit) => {
        if (isSubmit) ;
        else {
          if (!isEdit) {
            this.option.deleteData(editData);
          }
          if (typeof updateDataCallBack === "function") {
            let newData = this.option.getData(editData);
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
        getView: (data) => {
          return this.option.itemControls.edit.getView(data, isEdit);
        },
        btn: {
          ok: {
            enable: true,
            text: isEdit ? "修改" : "添加"
          },
          cancel: {
            callback(details, event) {
              details.close();
              dialogCloseCallBack(false);
            }
          },
          close: {
            callback(details, event) {
              details.close();
              dialogCloseCallBack(false);
            }
          }
        },
        onsubmit: ($form, data) => {
          let result = this.option.itemControls.edit.onsubmit(
            $form,
            isEdit,
            data
          );
          if (result.success) {
            if (isEdit) {
              Qmsg.success("修改成功");
              this.updateRuleItemElement(
                result.data,
                $editRuleItemElement,
                $parentShadowRoot
              );
            } else {
              this.appendRuleItemElement($parentShadowRoot, result.data);
            }
          } else {
            if (isEdit) {
              Qmsg.error("修改失败");
            }
          }
          return result;
        },
        style: this.option.itemControls.edit.style
      });
      editView.showView();
    }
  }
  const M3U8Menu = {
    /**
     * 添加已匹配到的规则数量
     */
    updateISMatchedRuleMenu() {
      let option = {
        key: "matched-rule-count",
        text: `🔧 当前页面执行规则数量： ${M3U8Rule.$data.matchedRule.length}`,
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: () => {
        }
      };
      GM_Menu.update(option);
    },
    /**
     * 添加/更新当前已过滤的广告片段的时长
     */
    updateIsFilterAdsDurationInfoMenu(durationTotal) {
      let option = {
        key: "is-filter-segment-duration",
        text: `🍵 已过滤时长：${durationTotal}s`,
        autoReload: false,
        isStoreValue: false,
        showText(text) {
          return text;
        },
        callback: () => {
        }
      };
      GM_Menu.update(option);
    }
  };
  const M3U8Parser = {
    /**
     * 解析播放信息
     * @param EXTINF_Text EXTINF行的文本
     * @param EXTINF_Next_Line_Text  EXTINF行的下一行的文本，一般是文件路径
     * @param currentDuration 当前已统计的时长
     */
    parse_EXTINF(EXTINF_Text, EXTINF_Next_Line_Text, currentDuration) {
      let duration = Number(EXTINF_Text.replace(/(^#EXTINF:\s*|,)/g, ""));
      let startDuration = currentDuration;
      let endDuration = currentDuration + duration;
      let filePath = EXTINF_Next_Line_Text.trim();
      return {
        /** filePath文件路径 */
        filePath,
        /** 该片段的开始的时间 */
        startDuration,
        /** 该片段的结束的时间 */
        endDuration,
        /** 该片段的时长 */
        duration
      };
    }
  };
  const calcIsFiterDuration = (segmentInfo) => {
    M3U8Filter.$data.isFilterDuration += segmentInfo.duration;
    M3U8Menu.updateIsFilterAdsDurationInfoMenu(M3U8Filter.$data.isFilterDuration);
  };
  const M3U8Filter = {
    $data: {
      /** 已过滤的时长 */
      isFilterDuration: 0
    },
    /**
     * 通用-广告过滤-名称长度
     *
     * 该方法仅用于测试，不建议使用，因为无法确定广告片段的格式，可能无法正确过滤广告片段
     * @param m3u8Text m3u8的内容
     * @param config
     */
    filterAdsWithFilePathLength(m3u8Text, config = {
      handlerFilePath(filePath) {
        return filePath;
      }
    }) {
      let m3u8Split = m3u8Text.split("\n");
      let segmentsParseInfo = new utils.Dictionary();
      let durationTotal = 0;
      for (let index = 0; index < m3u8Split.length; index++) {
        const m3u8Info = m3u8Split[index].trim();
        if (!m3u8Info.startsWith("#EXTINF:")) {
          continue;
        }
        let { duration, startDuration, endDuration, filePath } = M3U8Parser.parse_EXTINF(m3u8Info, m3u8Split[index + 1], durationTotal);
        if (config && typeof config.handlerFilePath === "function") {
          let handlerFilePath = config.handlerFilePath(filePath);
          if (typeof handlerFilePath === "string") {
            filePath = handlerFilePath;
          }
        }
        durationTotal += duration;
        let filePathLength = filePath.length.toString();
        let segmentInfo = segmentsParseInfo.get(filePathLength) || [];
        segmentInfo.push({
          filePath,
          startDuration,
          endDuration,
          duration,
          index
        });
        segmentsParseInfo.set(filePathLength, segmentInfo);
        index++;
      }
      let needFilterSegments = [];
      segmentsParseInfo.forEach((value, key) => {
        needFilterSegments.push({
          filePathLength: key,
          segmentsInfoList: value
        });
      });
      needFilterSegments = utils.sortListByProperty(
        needFilterSegments,
        (item) => item.segmentsInfoList.length,
        true
      );
      needFilterSegments.splice(0, 1);
      if (needFilterSegments.length) {
        let adsSegmentIndexList = [];
        needFilterSegments.forEach((item) => {
          item.segmentsInfoList.forEach((segmentInfo) => {
            adsSegmentIndexList.push({
              index: segmentInfo.index,
              data: segmentInfo
            });
          });
        });
        let indexOffset = 0;
        for (let index = 0; index < m3u8Split.length; index++) {
          let findIndex = adsSegmentIndexList.findIndex(
            (item) => item.index === index + indexOffset
          );
          if (findIndex != -1) {
            let adsSegmentInfo = adsSegmentIndexList[findIndex];
            log.info(
              `通杀1：过滤广告片段 ==> 索引：${index + indexOffset} 文件名：${adsSegmentInfo.data.filePath} 开始：${CommonUtils.duration2Text(
              adsSegmentInfo.data.startDuration
            )} 持续时长：${adsSegmentInfo.data.duration}s`
            );
            m3u8Split.splice(index, 2);
            index -= 2;
            adsSegmentIndexList.splice(findIndex, 1);
            indexOffset = indexOffset + 2;
          }
        }
      }
      needFilterSegments.forEach((item) => {
        item.segmentsInfoList.forEach((segmentInfo) => {
          calcIsFiterDuration(segmentInfo);
        });
      });
      return {
        /** 处理后的m3u8文本 */
        m3u8Text: m3u8Split.join("\n"),
        /** 过滤的片段信息 */
        filterInfo: needFilterSegments
      };
    },
    /**
     * 通用-广告过滤-名称相似度
     *
     * 该方法仅用于测试，不建议使用，因为无法确定广告片段的格式，可能无法正确过滤广告片段
     * @param m3u8Text m3u8的内容
     * @param config
     */
    filterAdsWithFilePathSimilar(m3u8Text, config = {
      similarCompareValue: 0.35,
      includePercent: 0.5,
      handlerFilePath(filePath) {
        return filePath;
      }
    }) {
      let m3u8Split = m3u8Text.split("\n");
      let segmentsParseInfoList = [];
      let durationTotal = 0;
      for (let index = 0; index < m3u8Split.length; index++) {
        const m3u8Info = m3u8Split[index].trim();
        if (!m3u8Info.startsWith("#EXTINF:")) {
          continue;
        }
        let { duration, startDuration, endDuration, filePath } = M3U8Parser.parse_EXTINF(m3u8Info, m3u8Split[index + 1], durationTotal);
        if (config && typeof config.handlerFilePath === "function") {
          let handlerFilePath = config.handlerFilePath(filePath);
          if (typeof handlerFilePath === "string") {
            filePath = handlerFilePath;
          }
        }
        durationTotal += duration;
        segmentsParseInfoList.push({
          filePath,
          startDuration,
          endDuration,
          duration,
          index
        });
        index++;
      }
      let isFilterSegmentsInfoList = [];
      let indexOffset = 0;
      for (let index = 0; index < segmentsParseInfoList.length; index++) {
        const segmentInfo = segmentsParseInfoList[index];
        let isAdsSegment = true;
        let similarCount = 0;
        let iteratorSegmentsParseInfoList = segmentsParseInfoList;
        for (let iteratorIndex = 0; iteratorIndex < iteratorSegmentsParseInfoList.length; iteratorIndex++) {
          const compareSegmentInfo = iteratorSegmentsParseInfoList[iteratorIndex];
          let similar = CommonUtils.similar(
            segmentInfo.filePath,
            compareSegmentInfo.filePath
          );
          if (similar >= config.similarCompareValue) {
            similarCount++;
          }
          if (similarCount / iteratorSegmentsParseInfoList.length > config.includePercent) {
            isAdsSegment = false;
            break;
          }
        }
        if (isAdsSegment) {
          isFilterSegmentsInfoList.push(segmentInfo);
          log.info(
            `通杀2：过滤广告片段 ==> 索引：${segmentInfo.index} 文件名：${segmentInfo.filePath} 开始：${CommonUtils.duration2Text(
            segmentInfo.startDuration
          )} 持续时长：${segmentInfo.duration}s`
          );
          m3u8Split.splice(segmentInfo.index - indexOffset, 2);
          indexOffset += 2;
        }
      }
      isFilterSegmentsInfoList.forEach((segmentInfo) => {
        calcIsFiterDuration(segmentInfo);
      });
      return {
        /** 处理后的m3u8文本 */
        m3u8Text: m3u8Split.join("\n"),
        /** 过滤的片段信息 */
        filterInfo: isFilterSegmentsInfoList
      };
    }
  };
  const UITextArea = function(text, key, defaultValue, description, changeCallBack, placeholder = "", disabled) {
    let result = {
      text,
      type: "textarea",
      attributes: {},
      props: {},
      description,
      placeholder,
      disabled,
      getValue() {
        return this.props[PROPS_STORAGE_API].get(key, defaultValue);
      },
      callback(event, value) {
        this.props[PROPS_STORAGE_API].set(key, value);
      }
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
  const M3U8Rule = {
    $key: {
      STORAGE_KEY: "m3u8-rule"
    },
    $data: {
      /** 当前网站匹配到的规则 */
      matchedRule: []
    },
    init() {
      let allData = this.getData();
      this.registerMenu(allData);
      for (let index = 0; index < allData.length; index++) {
        try {
          const ruleOption = allData[index];
          if (ruleOption.enable && window.location.href.match(new RegExp(ruleOption.data.url))) {
            this.$data.matchedRule.push(ruleOption);
          }
        } catch (error) {
          log.error("m3u8过滤器 ==> 规则初始化出错", error);
        }
      }
      if (this.$data.matchedRule.length) {
        log.info("m3u8过滤器 ==> 当前网站执行的规则：", this.$data.matchedRule);
        NetWorkHook.hook();
        M3U8Menu.updateISMatchedRuleMenu();
      }
    },
    /**
     * 注册菜单
     */
    registerMenu(allData) {
      GM_Menu.update([
        {
          key: "m3u8-rule",
          text: `⚙ 自定义规则（${allData.length}条）`,
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.showView();
          }
        },
        {
          key: "m3u8-export-rule",
          text: `⚙ 规则导出`,
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.exportRule();
          }
        },
        {
          key: "m3u8-import-rule",
          text: "⚙ 规则导入",
          autoReload: false,
          isStoreValue: false,
          showText(text) {
            return text;
          },
          callback: () => {
            this.importRule();
          }
        }
      ]);
    },
    /**
     * 获取模板数据
     */
    getTemplateData() {
      return {
        uuid: utils.generateUUID(),
        enable: true,
        name: "",
        data: {
          url: "",
          commonFilterAdsSegmentsFilePathLength: true,
          commonFilterAdsSegmentsFilePathSimilar: false,
          ownFilterCode: ""
        }
      };
    },
    /**
     * 显示视图
     */
    showView() {
      let popsPanelContentUtils = __pops.config.panelHandleContentUtils();
      function generateStorageApi(data) {
        return {
          get(key, defaultValue) {
            return data[key] ?? defaultValue;
          },
          set(key, value) {
            data[key] = value;
          }
        };
      }
      let ruleView = new RuleView({
        title: "m3u8自定义规则",
        data: () => {
          return this.getData();
        },
        getAddData: () => {
          return this.getTemplateData();
        },
        getDataItemName: (data) => {
          return data["name"];
        },
        updateData: (data) => {
          return this.updateData(data);
        },
        deleteData: (data) => {
          return this.deleteData(data);
        },
        getData: (data) => {
          let allData = this.getData();
          let findValue = allData.find((item) => item.uuid === data.uuid);
          return findValue ?? data;
        },
        itemControls: {
          enable: {
            enable: true,
            getEnable(data) {
              return data.enable;
            },
            callback: (data, enable) => {
              data.enable = enable;
              this.updateData(data);
            }
          },
          edit: {
            enable: true,
            getView: (data, isEdit) => {
              let $fragment = document.createDocumentFragment();
              if (!isEdit) {
                data = this.getTemplateData();
              }
              let enable_template = UISwitch("启用", "enable", true);
              Reflect.set(
                enable_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $enable = popsPanelContentUtils.createSectionContainerItem_switch(
                enable_template
              );
              let name_template = UIInput(
                "规则名称",
                "name",
                "",
                "",
                void 0,
                "必填"
              );
              Reflect.set(
                name_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data)
              );
              let $name = popsPanelContentUtils.createSectionContainerItem_input(
                name_template
              );
              let data_url_template = UIInput(
                "匹配网址",
                "url",
                "",
                "",
                void 0,
                "必填，可正则，注意转义"
              );
              Reflect.set(
                data_url_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $data_url = popsPanelContentUtils.createSectionContainerItem_input(
                data_url_template
              );
              let data_commonFilterAdsSegmentsFilePathLength_template = UISwitch(
                "广告通杀1",
                "commonFilterAdsSegmentsFilePathLength",
                true,
                void 0,
                "使用文件名称长度比较"
              );
              Reflect.set(
                data_commonFilterAdsSegmentsFilePathLength_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $data_commonFilterAdsSegmentsFilePathLength = popsPanelContentUtils.createSectionContainerItem_switch(
                data_commonFilterAdsSegmentsFilePathLength_template
              );
              let data_commonFilterAdsSegmentsFilePathSimilar_template = UISwitch(
                "广告通杀2",
                "commonFilterAdsSegmentsFilePathSimilar",
                false,
                void 0,
                "使用文件名称相似度比较"
              );
              Reflect.set(
                data_commonFilterAdsSegmentsFilePathSimilar_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $data_commonFilterAdsSegmentsFilePathSimilar = popsPanelContentUtils.createSectionContainerItem_switch(
                data_commonFilterAdsSegmentsFilePathSimilar_template
              );
              let data_ownFilterCode_template = UITextArea(
                "自定义过滤js",
                "ownFilterCode",
                "",
                "",
                void 0,
                "参数：\n    [m3u8Text]：需要处理的m3u8字符串\n返回：[String]\n\n例如：\nm3u8Text = m3u8Text.replace('','');\nreturn m3u8Text;\n"
              );
              Reflect.set(
                data_ownFilterCode_template.props,
                PROPS_STORAGE_API,
                generateStorageApi(data.data)
              );
              let $data_ownFilterCode = popsPanelContentUtils.createSectionContainerItem_textarea(
                data_ownFilterCode_template
              );
              $fragment.appendChild($enable);
              $fragment.appendChild($name);
              $fragment.appendChild($data_url);
              $fragment.appendChild($data_commonFilterAdsSegmentsFilePathLength);
              $fragment.appendChild($data_commonFilterAdsSegmentsFilePathSimilar);
              $fragment.appendChild($data_ownFilterCode);
              return $fragment;
            },
            onsubmit: ($form, isEdit, editData) => {
              let $ulist_li = $form.querySelectorAll(
                ".rule-form-ulist > li"
              );
              let data = this.getTemplateData();
              if (isEdit) {
                data.uuid = editData.uuid;
              }
              $ulist_li.forEach(($li) => {
                let formConfig = Reflect.get($li, "__formConfig__");
                let attrs = Reflect.get(formConfig, "attributes");
                let storageApi = Reflect.get($li, PROPS_STORAGE_API);
                let key = Reflect.get(attrs, ATTRIBUTE_KEY);
                let defaultValue = Reflect.get(attrs, ATTRIBUTE_DEFAULT_VALUE);
                let value = storageApi.get(key, defaultValue);
                if (Reflect.has(data, key)) {
                  Reflect.set(data, key, value);
                } else if (Reflect.has(data.data, key)) {
                  Reflect.set(data.data, key, value);
                } else {
                  log.error(`${key}不在数据中`);
                }
              });
              if (data.name.trim() === "") {
                Qmsg.error("规则名称不能为空");
                return {
                  success: false,
                  data
                };
              }
              if (data.data.url.trim() === "") {
                Qmsg.error("匹配网址不能为空");
                return {
                  success: false,
                  data
                };
              }
              if (isEdit) {
                return {
                  success: this.updateData(data),
                  data
                };
              } else {
                return {
                  success: this.addData(data),
                  data
                };
              }
            },
            style: (
              /*css*/
              `
                        li[data-key="ownFilterCode"]{
                            gap: 30px;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea{
                            flex: 1;
                        }
                        li[data-key="ownFilterCode"] .pops-panel-textarea textarea{
                            height: 300px;
                        }
                    `
            )
          },
          delete: {
            enable: true,
            deleteCallBack: (data) => {
              return this.deleteData(data);
            }
          }
        },
        bottomControls: {
          filter: {
            enable: true,
            option: [
              {
                name: "过滤【启用】",
                filterCallBack(data) {
                  return data.enable;
                }
              },
              {
                name: "过滤【未启用】",
                filterCallBack(data) {
                  return !data.enable;
                }
              },
              {
                name: "过滤【当前网址运行的规则】",
                filterCallBack(data) {
                  try {
                    return Boolean(
                      window.location.href.match(new RegExp(data.data.url))
                    );
                  } catch (error) {
                    return false;
                  }
                }
              }
            ]
          }
        }
      });
      ruleView.showView();
    },
    /**
     * 执行规则
     */
    runRule(m3u8Text) {
      let handlerM3U8Text = m3u8Text;
      for (let index = 0; index < this.$data.matchedRule.length; index++) {
        try {
          const RuleOption = this.$data.matchedRule[index];
          const RuleOptionData = RuleOption.data;
          if (RuleOptionData.commonFilterAdsSegmentsFilePathLength) {
            const { filterInfo, m3u8Text: __handler_m3u8_text__ } = M3U8Filter.filterAdsWithFilePathLength(handlerM3U8Text);
            handlerM3U8Text = __handler_m3u8_text__;
          }
          if (RuleOptionData.commonFilterAdsSegmentsFilePathSimilar) {
            const { filterInfo, m3u8Text: __handler_m3u8_text__ } = M3U8Filter.filterAdsWithFilePathSimilar(handlerM3U8Text);
            handlerM3U8Text = __handler_m3u8_text__;
          }
          if (RuleOptionData.ownFilterCode.trim() !== "") {
            let ownFilterCodeFunction = new Function(
              "m3u8Text",
              "M3U8Filter",
              "M3U8Parser",
              RuleOptionData.ownFilterCode
            );
            let ownFilter_m3u8_text = ownFilterCodeFunction(
              handlerM3U8Text,
              M3U8Filter,
              M3U8Parser
            );
            if (typeof ownFilter_m3u8_text === "string") {
              handlerM3U8Text = ownFilter_m3u8_text;
            } else {
              log.error(
                "m3u8过滤器 ==> 自定义过滤js代码执行结果不是字符串",
                ownFilter_m3u8_text
              );
            }
          }
          break;
        } catch (error) {
          log.error("m3u8过滤器 ==> 执行m3u8文本过滤时出现异常", error);
        }
      }
      return handlerM3U8Text;
    },
    /**
     * 获取数据
     */
    getData() {
      return _GM_getValue(this.$key.STORAGE_KEY, []);
    },
    /**
     * 设置数据
     * @param data
     */
    setData(data) {
      _GM_setValue(this.$key.STORAGE_KEY, data);
    },
    /**
     * 添加数据
     * @param data
     */
    addData(data) {
      let localData = this.getData();
      let findIndex = localData.findIndex((item) => item.uuid == data.uuid);
      if (findIndex === -1) {
        localData.push(data);
        _GM_setValue(this.$key.STORAGE_KEY, localData);
        return true;
      } else {
        return false;
      }
    },
    /**
     * 更新数据
     * @param data
     */
    updateData(data) {
      let localData = this.getData();
      let index = localData.findIndex((item) => item.uuid == data.uuid);
      let updateFlag = false;
      if (index !== -1) {
        updateFlag = true;
        localData[index] = data;
      }
      this.setData(localData);
      return updateFlag;
    },
    /**
     * 删除数据
     * @param data
     */
    deleteData(data) {
      let localData = this.getData();
      let index = localData.findIndex((item) => item.uuid == data.uuid);
      let deleteFlag = false;
      if (index !== -1) {
        deleteFlag = true;
        localData.splice(index, 1);
      }
      this.setData(localData);
      return deleteFlag;
    },
    /**
     * 清空数据
     */
    clearData() {
      _GM_deleteValue(this.$key.STORAGE_KEY);
    },
    /**
     * 规则导出
     */
    exportRule() {
      let $anchor = domUtils.createElement("a", {
        download: "m3u8-filter-rule.json",
        href: URL.createObjectURL(
          new Blob([JSON.stringify(this.getData(), null, 4)], {
            type: "application/json"
          })
        ),
        target: "_blank"
      });
      document.body.appendChild($anchor);
      $anchor.click();
      setTimeout(() => {
        $anchor.remove();
      }, 1500);
    },
    /**
     * 规则导入
     */
    importRule() {
      let $input = domUtils.createElement("input", {
        type: "file",
        accept: ".json, .txt"
      });
      domUtils.on($input, ["input", "propertychange"], (event) => {
        let files = $input.files;
        if (!files || files.length === 0) {
          $input.value = "";
          return;
        }
        let reader = new FileReader();
        reader.onload = (event2) => {
          let text = event2.target.result;
          if (text == null) {
            Qmsg.error("读取规则文件失败");
            return;
          }
          try {
            let ruleData = utils.toJSON(text);
            if (!Array.isArray(ruleData)) {
              log.error("解析出的规则数据不是数组格式", ruleData);
              Qmsg.error("解析出的规则数据不是数组格式");
              return;
            }
            let coverFlag = window.confirm("是否覆盖本地规则数据？");
            if (coverFlag) {
              this.setData(ruleData);
              Qmsg.success(`成功导入 ${ruleData.length}条数据`);
            }
          } catch (error) {
            log.error("解析规则文件失败", error);
            Qmsg.error("解析规则内容失败");
          }
        };
        reader.readAsText(files[0]);
      });
      $input.click();
    }
  };
  M3U8Rule.init();

})(Qmsg, DOMUtils, Utils, pops);