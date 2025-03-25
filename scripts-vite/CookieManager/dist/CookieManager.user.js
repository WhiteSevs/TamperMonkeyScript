// ==UserScript==
// @name         CookieManager
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.3.25
// @author       WhiteSevs
// @description  简单而强大的Cookie编辑器，允许您快速创建、编辑和删除Cookie
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/NJREFUeF7tWm1u4jAQjVHusfR3jMQNlp5ky0l2e5K2Jym9ARLO79JzEMgyKF5FqeN5YzuwQPoHqRl/zPObN5NxVHbnf+rO/c9GAEYG3DkCYwjcOQFGETxbCGitF1mWLeq6/qGUmtZ1PW1+t0qpN2PMn0uwcTAA5vP5tKqqp8bhJ8C5R2PMCrBLajIIAFprOs3fkp0eGfFaluVSMiaFbVIAQhy3Tlw1AA3dXyjGQ0/lagFoxO091PGrZkAq5wmEq2NASuevDgCB889HXVjleb6tqmraaASbHeq6ptpgm+f5cr1eb2PDyzdenAUawfsENuXM60VRvBydQ+oCWmJljHkE1go2EQOgtSbB86q9L54FAJIubMuyfAj2DhgoAmA2m1FlR+nO+6eUWm42m9c+IwREO9YYI9ojt7fuc9HkRVF8Uv0OLPLsq+0F82T/DQDCKs8bu1rrGgDxZELh5LKdTCYfPpah88MMkGy6WdwpghL6A054mQaMx/oBaOy3F2xS2ZtNg/SsqqqocrnrUAqRhBggTF0I8MlsYjUCAiCA/skc5CYaHACO/rZq42oDzpHQ55RyXWNRgWQZ0Ef/xvFlu4sjzBShPkPjXPtzDQwGIM/zB1edzjEG2n06I7aUZgFwpS3u1dVX6LSyg83zv8DiKgSWeABczkSUut82ZJun0h4iggaSJhEGuKq20FLXWRylaKm5ABkMAN/Efb0CbjNDCSiXJlkGeOL5GwuYk/TG4xDiyYFOrGEB8NXuVtCoe0M3Pb445jbDVZs0/rRhpegX7T4nEUFJB8erTX3iyTVJulkHFU4uW6EMEN/y9KFgGdPuFQAC2HuK3JtlKgCIbtF9f8ebom12euncV3DRfFxzlkvXEAM4eiL5OMbGp+Lc3rgMAAHQIM02QmOcZMb23hr7AEDoLwEgeRgIAOstuny1A0J/GACOagJnxKYu4UTiH6E/DAAZpipUQvsHRGlqhDb1Bm3Jd8ME9wrZQsgeGbFgt9u9h765nbN/gJ6+iAGxLDhX/wCNfXuwMANoAFC0OGOcU2TJRQkjImzp2x0vAsCCIA0F7lS4ig5RTu5do28OMQAtJiA3xHbd0P4B4ru1CfrKLAgAqR6E9A8knmdZFuS8WAS7mxI2MaT9AxSDYOejAZBqgqR/wHmPtr25eYJDoD1xbI3AbbL7PFTwXOskAaAljPQBxWBt7r6yWApg2z4ZAO2Kkb4RTtnmHsLxoEJIgjSFxX6/XxwOh5+Cj6L+LdF6Z/gY8kvy5AxwgdQG46S8nc/lm/9RY5U+j/uixid6uSk5lEE1IHYjlxp/FgZcyjlk3REABKVbthkZcMuni/g2MgBB6ZZt/gJwetZfo7objAAAAABJRU5ErkJggg==
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.6.3/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.0.2/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.0/dist/index.umd.js
// @connect      *
// @grant        GM_cookie
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (Qmsg, DOMUtils, Utils, pops) {
  'use strict';

  var _a;
  var _GM_cookie = /* @__PURE__ */ (() => typeof GM_cookie != "undefined" ? GM_cookie : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const PanelSettingConfig = {
    /** Toast位置 */
    qmsg_config_position: {
      key: "qmsg-config-position",
      defaultValue: "bottom"
    },
    /** 最多显示的数量 */
    qmsg_config_maxnums: {
      key: "qmsg-config-maxnums",
      defaultValue: 3
    },
    /** 逆序弹出 */
    qmsg_config_showreverse: {
      key: "qmsg-config-showreverse",
      defaultValue: false
    }
  };
  const _SCRIPT_NAME_ = "CookieManager";
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
  __pops.GlobalConfig.setGlobalConfig({
    zIndex: () => {
      let maxZIndex = Utils.getMaxZIndex(void 0, void 0, ($ele) => {
        var _a2;
        if ((_a2 = $ele == null ? void 0 : $ele.classList) == null ? void 0 : _a2.contains("qmsg-shadow-container")) {
          return false;
        }
        if (($ele == null ? void 0 : $ele.closest("qmsg")) && $ele.getRootNode() instanceof ShadowRoot) {
          return false;
        }
      });
      let popsMaxZIndex = pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
      return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
    },
    mask: {
      // 开启遮罩层
      enable: true,
      // 取消点击遮罩层的事件
      clickEvent: {
        toClose: false,
        toHide: false
      }
    }
  });
  const GM_Menu = new utils.GM_Menu({
    GM_getValue: _GM_getValue,
    GM_setValue: _GM_setValue,
    GM_registerMenuCommand: _GM_registerMenuCommand,
    GM_unregisterMenuCommand: _GM_unregisterMenuCommand
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
  const utilsCookieManager = new Utils.GM_Cookie();
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
    id: "view-general",
    title: "通用",
    forms: [
      {
        text: "Toast配置",
        type: "forms",
        forms: [
          UISelect(
            "Toast位置",
            PanelSettingConfig.qmsg_config_position.key,
            PanelSettingConfig.qmsg_config_position.defaultValue,
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
            PanelSettingConfig.qmsg_config_maxnums.key,
            PanelSettingConfig.qmsg_config_maxnums.defaultValue,
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
            PanelSettingConfig.qmsg_config_showreverse.key,
            PanelSettingConfig.qmsg_config_showreverse.defaultValue,
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
            "启用GM_cookie Api",
            "use-GM-cookie",
            false,
            void 0,
            "获取到的Cookie信息会更完善，需要脚本管理器支持该函数"
          )
        ]
      }
    ]
  };
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
      return _unsafeWindow.top === _unsafeWindow.self;
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
        zIndex() {
          let maxZIndex = Utils.getMaxZIndex();
          let popsMaxZIndex = __pops.config.InstanceUtils.getPopsMaxZIndex().zIndex;
          return Utils.getMaxValue(maxZIndex, popsMaxZIndex) + 100;
        },
        width: PanelUISize.setting.width,
        height: PanelUISize.setting.height,
        drag: true,
        only: true
      });
    },
    /**
     * 获取配置内容
     */
    getPanelContentConfig() {
      let configList = [Component_Common];
      return configList;
    }
  };
  const CookieManager = {
    get cookieManagerApiName() {
      let managerApi = PopsPanel.getValue(
        "cookie-manager-api",
        "document.cookie"
      );
      return managerApi;
    },
    get cookieManager() {
      if (this.cookieManagerApiName === "GM_cookie") {
        return _GM_cookie;
      } else if (this.cookieManagerApiName === "cookieStore") {
        let cookieStore = _unsafeWindow.cookieStore;
        return {
          list(options, callback) {
            cookieStore.getAll().then((result) => {
              callback(result);
            }).catch((reason) => {
              log.error(reason);
              Qmsg.error(reason.toString());
            });
          },
          set(cookieInfo, callback) {
            cookieStore.set(cookieInfo).then(() => {
              callback();
            }).catch((reason) => {
              callback(reason);
            });
          },
          delete(cookieInfo, callback) {
            cookieStore.delete(cookieInfo).then((result) => {
              callback();
            }).catch((reason) => {
              callback(reason);
            });
          }
        };
      } else {
        return utilsCookieManager;
      }
    },
    /**
     * 查询所有Cookie
     */
    queryAllCookie() {
      return new Promise((resolve) => {
        this.cookieManager.list({}, (cookieListResult) => {
          let __cookieListResult__ = cookieListResult || [];
          __cookieListResult__ = __cookieListResult__.sort(
            (a, b) => a.name.localeCompare(b.name)
          );
          resolve(__cookieListResult__);
        });
      });
    },
    /**
     * 清除所有Cookie
     */
    deleteAllCookie() {
      return new Promise((resolve) => {
        this.cookieManager.list({}, async (cookieListResult) => {
          const __cookieListResult__ = cookieListResult || [];
          const result = {
            success: 0,
            error: 0
          };
          for (let index = 0; index < __cookieListResult__.length; index++) {
            const cookieListItem = __cookieListResult__[index];
            let deleteError = await new Promise((deleteResolve) => {
              this.deleteCookie(cookieListItem).then((deleteResult) => {
                deleteResolve(deleteResult);
              });
            });
            if (deleteError) {
              result.error++;
            } else {
              result.success++;
            }
          }
          resolve(result);
        });
      });
    },
    /**
     * 添加Cookie
     */
    addCookie(cookieInfo) {
      return new Promise((resolve) => {
        delete cookieInfo.hostOnly;
        CookieManager.cookieManager.set(cookieInfo, (error) => {
          log.info(["添加Cookie", cookieInfo]);
          resolve(error);
        });
      });
    },
    /**
     * 删除Cookie
     */
    deleteCookie(cookieInfo) {
      return new Promise((resolve) => {
        CookieManager.cookieManager.delete(cookieInfo, (error) => {
          log.info(["删除Cookie", cookieInfo]);
          resolve(error);
        });
      });
    },
    /**
     * 更新Cookie
     */
    updateCookie(cookieInfo) {
      return new Promise(async (resolve) => {
        let result;
        try {
          log.info(["更新Cookie", cookieInfo]);
          let deleteError = await CookieManager.deleteCookie(cookieInfo);
          log.error(deleteError);
          if (deleteError) {
            throw new TypeError(deleteError.toString());
          }
          let addError = await CookieManager.addCookie(cookieInfo);
          log.error(addError);
          if (addError) {
            throw new TypeError(addError.toString());
          }
        } catch (error) {
          result = error;
        } finally {
          resolve(result);
        }
      });
    }
  };
  let edit_ui_input = (text, getValue, setValue, disabled) => {
    let config = {
      text,
      type: "input",
      isNumber: false,
      isPassword: false,
      props: {},
      attributes: {},
      description: "",
      getValue() {
        return getValue();
      },
      callback(event, value) {
        setValue(value);
      },
      placeholder: "",
      disabled: Boolean(disabled)
    };
    return config;
  };
  let edit_ui_select = (text, data, getValue, setValue, disabled) => {
    let config = {
      text,
      type: "select",
      description: "",
      attributes: {},
      props: {},
      getValue() {
        return getValue();
      },
      callback(event, isSelectedValue, isSelectedText) {
        let value = isSelectedValue;
        setValue(value);
      },
      // @ts-ignore
      data,
      disabled: Boolean(disabled)
    };
    return config;
  };
  const CookieManagerEditView = {
    init() {
    },
    /**
     * 显示视图
     * @param cookieInfo 需要编辑的cookie
     * @param dialogCloseCallBack 弹窗关闭的回调
     */
    showView(__cookieInfo__, dialogCloseCallBack) {
      let isEdit = !!__cookieInfo__;
      let cookieInfo = utils.assign(
        {
          name: "",
          value: "",
          domain: window.location.hostname,
          path: "/",
          secure: false,
          hostOnly: false,
          httpOnly: false,
          sameSite: "lax",
          expirationDate: Date.now() + 60 * 60 * 24 * 30 * 1e3
        },
        __cookieInfo__,
        true
      );
      if (CookieManager.cookieManagerApiName === "cookieStore") {
        if (cookieInfo.expires) {
          cookieInfo.expirationDate = cookieInfo.expires;
        }
      }
      let $dialog = __pops.confirm({
        title: {
          text: isEdit ? "编辑Cookie" : "添加Cookie",
          position: "center"
        },
        content: {
          text: "",
          html: true
        },
        drag: true,
        btn: {
          position: "center",
          ok: {
            text: isEdit ? "编辑" : "添加",
            async callback(eventDetails, event) {
              let valid = CookieManagerEditView.validCookieInfo(cookieInfo);
              if (!valid) {
                return;
              }
              cookieInfo.value = encodeURIComponent(cookieInfo.value);
              if (CookieManager.cookieManagerApiName === "document.cookie") {
                cookieInfo.domain = "";
              } else if (CookieManager.cookieManagerApiName === "GM_cookie") {
                cookieInfo.expirationDate = Math.floor(
                  cookieInfo.expirationDate / 1e3
                );
              }
              if (isEdit) {
                let result = await CookieManager.updateCookie(cookieInfo);
                if (result) {
                  Qmsg.error(result.toString());
                } else {
                  Qmsg.success("修改成功");
                  eventDetails.close();
                }
              } else {
                let result = await CookieManager.addCookie(cookieInfo);
                if (result) {
                  Qmsg.error(result.toString());
                } else {
                  Qmsg.success("添加成功");
                  eventDetails.close();
                }
              }
              if (typeof dialogCloseCallBack === "function") {
                dialogCloseCallBack(cookieInfo);
              }
            }
          },
          cancel: {
            text: "取消"
          }
        },
        mask: {
          enable: true
        },
        width: window.innerWidth > 350 ? "350px" : "80vw",
        height: PanelUISize.setting.height,
        style: (
          /*css*/
          `
                ${__pops.config.cssText.panelCSS}

                .pops-panel-input input:disabled{
                    color: #b4b4b4;
                }
                .pops-confirm-content{
                    padding: 10px;
                }
                .pops-confirm-content li{
                    display: flex;
                    flex-direction: column;
                }
                .pops-panel-item-left-text{
                    margin-bottom: 5px;
                }
                .pops-panel-input.pops-input-disabled{
                    border: 1px solid #dcdfe6;
                }
				#cookie-item-property-expires{
					border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));
					border-radius: 4px;
					background-color: #ffffff;
					width: 100%;
					height: 32px;
					padding: 0px 8px;
				}
				#cookie-item-property-expires:hover{
					box-shadow: 0 0 0 1px #c0c4cc inset;
				}
				#cookie-item-property-expires:focus,
				#cookie-item-property-expires:focus-within{
					outline: 0;
					border: 1px solid #409eff;
					border-radius: 4px;
					box-shadow: none;
				}
            `
        )
      });
      let $editContent = $dialog.$shadowRoot.querySelector(
        ".pops-confirm-content"
      );
      let panelHandleContentUtils = __pops.config.panelHandleContentUtils();
      let $name = panelHandleContentUtils.createSectionContainerItem_input(
        edit_ui_input(
          "name",
          () => cookieInfo.name,
          (value) => cookieInfo.name = value,
          isEdit
        )
      );
      let $value = panelHandleContentUtils.createSectionContainerItem_input(
        edit_ui_input(
          "value",
          () => cookieInfo.value,
          (value) => cookieInfo.value = value
        )
      );
      let $domain = panelHandleContentUtils.createSectionContainerItem_input(
        edit_ui_input(
          "domain",
          () => cookieInfo.domain,
          (value) => cookieInfo.domain = value
        )
      );
      let $path = panelHandleContentUtils.createSectionContainerItem_input(
        edit_ui_input(
          "path",
          () => cookieInfo.path,
          (value) => cookieInfo.path = value
        )
      );
      let $expires;
      if (cookieInfo.session) {
        $expires = panelHandleContentUtils.createSectionContainerItem_input(
          edit_ui_input(
            "expires",
            () => "会话",
            (value) => {
            },
            true
          )
        );
      } else {
        $expires = panelHandleContentUtils.createSectionContainerItem_own({
          type: "own",
          getLiElementCallBack: function(liElement) {
            let $li = domUtils.createElement("li", {
              innerHTML: (
                /*html*/
                `
							<div class="pops-panel-item-left-text">
								<p class="pops-panel-item-left-main-text">expires</p>
							</div>
							<div class="pops-panel-item-right-wrapper">
								<input type="datetime-local" id="cookie-item-property-expires">
							</div>
						`
              )
            });
            let $dateTime = $li.querySelector(
              "#cookie-item-property-expires"
            );
            $dateTime.valueAsNumber = cookieInfo.expirationDate;
            domUtils.on(
              $dateTime,
              ["change", "input", "propertychange"],
              (event) => {
                utils.preventEvent(event);
                cookieInfo.expirationDate = $dateTime.valueAsNumber;
              }
            );
            return $li;
          }
        });
      }
      let $httpOnly = panelHandleContentUtils.createSectionContainerItem_select(
        edit_ui_select(
          "httpOnly",
          [
            {
              text: "true",
              value: true
            },
            {
              text: "false",
              value: false
            }
          ],
          () => cookieInfo.httpOnly,
          (value) => cookieInfo.httpOnly = value
        )
      );
      let $secure = panelHandleContentUtils.createSectionContainerItem_select(
        edit_ui_select(
          "secure",
          [
            {
              text: "true",
              value: true
            },
            {
              text: "false",
              value: false
            }
          ],
          () => cookieInfo.secure,
          (value) => cookieInfo.secure = value
        )
      );
      let sameSiteData = [
        {
          text: "no_restriction",
          value: "no_restriction"
        },
        {
          text: "lax",
          value: "lax"
        },
        {
          text: "strict",
          value: "strict"
        },
        {
          text: "unspecified",
          value: "unspecified"
        }
      ];
      if (CookieManager.cookieManagerApiName === "cookieStore") {
        sameSiteData = [
          {
            text: "lax",
            value: "lax"
          },
          {
            text: "strict",
            value: "strict"
          },
          {
            text: "none",
            value: "none"
          }
        ];
      }
      let $sameSite = panelHandleContentUtils.createSectionContainerItem_select(
        edit_ui_select(
          "sameSite",
          sameSiteData,
          () => cookieInfo.sameSite,
          (value) => cookieInfo.sameSite = value
        )
      );
      domUtils.append($editContent, [$name, $value]);
      if (CookieManager.cookieManagerApiName === "GM_cookie") {
        domUtils.append($editContent, [
          $domain,
          $path,
          $expires,
          $httpOnly,
          $secure,
          $sameSite
        ]);
      } else if (CookieManager.cookieManagerApiName === "cookieStore") {
        domUtils.append($editContent, [$domain, $path, $expires, $sameSite]);
      }
    },
    /**
     * Cookie信息校验
     */
    validCookieInfo(cookieInfo) {
      if (cookieInfo.name == null || cookieInfo.name == "") {
        Qmsg.error("name不能为空");
        return false;
      }
      if (cookieInfo.domain == null || cookieInfo.domain == "") {
        Qmsg.error("domain不能为空");
        return false;
      }
      if (cookieInfo.path == null || cookieInfo.path == "") {
        Qmsg.error("path不能为空");
        return false;
      }
      return true;
    }
  };
  const CookieManagerView = {
    init() {
      this.registerMenu();
    },
    /**
     * 显示视图
     */
    async showView() {
      const $alert = __pops.alert({
        title: {
          text: "Cookie编辑器",
          html: false,
          position: "center"
        },
        content: {
          text: (
            /*html*/
            `
                    <div class="cookie-wrapper">
                        <div class="cookie-search-wrapper">
                            <div class="cookie-search-inner">
                                <input type="text" placeholder="搜索Cookie名称">
                            </div>
                            <div class="cookie-search-setting">
                                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4368" width="28" height="28">
                                    <path fill="#2c2c2c" d="M439.264 208a16 16 0 0 0-16 16v67.968a239.744 239.744 0 0 0-46.496 26.896l-58.912-34a16 16 0 0 0-21.856 5.856l-80 138.56a16 16 0 0 0 5.856 21.856l58.896 34a242.624 242.624 0 0 0 0 53.728l-58.88 34a16 16 0 0 0-6.72 20.176l0.848 1.68 80 138.56a16 16 0 0 0 21.856 5.856l58.912-34a239.744 239.744 0 0 0 46.496 26.88V800a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-67.968a239.744 239.744 0 0 0 46.512-26.896l58.912 34a16 16 0 0 0 21.856-5.856l80-138.56a16 16 0 0 0-4.288-20.832l-1.568-1.024-58.896-34a242.624 242.624 0 0 0 0-53.728l58.88-34a16 16 0 0 0 6.72-20.176l-0.848-1.68-80-138.56a16 16 0 0 0-21.856-5.856l-58.912 34a239.744 239.744 0 0 0-46.496-26.88V224a16 16 0 0 0-16-16h-160z m32 48h96v67.376l28.8 12.576c13.152 5.76 25.632 12.976 37.184 21.52l25.28 18.688 58.448-33.728 48 83.136-58.368 33.68 3.472 31.2a194.624 194.624 0 0 1 0 43.104l-3.472 31.2 58.368 33.68-48 83.136-58.432-33.728-25.296 18.688c-11.552 8.544-24.032 15.76-37.184 21.52l-28.8 12.576V768h-96v-67.376l-28.784-12.576c-13.152-5.76-25.632-12.976-37.184-21.52l-25.28-18.688-58.448 33.728-48-83.136 58.368-33.68-3.472-31.2a194.624 194.624 0 0 1 0-43.104l3.472-31.2-58.368-33.68 48-83.136 58.432 33.728 25.296-18.688a191.744 191.744 0 0 1 37.184-21.52l28.8-12.576V256z m47.28 144a112 112 0 1 0 0 224 112 112 0 0 0 0-224z m0 48a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="cookie-control-wrapper">
                            <button class="cookie-control-refresh" type="default">刷新</button>
                            <button class="cookie-control-add" type="default">添加</button>
                            <button class="cookie-control-copy-all" type="default">复制全部</button>
                            <button class="cookie-control-clear-all" type="default">清除全部</button>
                            <div class="cookie-setting"> 
                                <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4368" width="28" height="28">
                                    <path fill="#2c2c2c" d="M439.264 208a16 16 0 0 0-16 16v67.968a239.744 239.744 0 0 0-46.496 26.896l-58.912-34a16 16 0 0 0-21.856 5.856l-80 138.56a16 16 0 0 0 5.856 21.856l58.896 34a242.624 242.624 0 0 0 0 53.728l-58.88 34a16 16 0 0 0-6.72 20.176l0.848 1.68 80 138.56a16 16 0 0 0 21.856 5.856l58.912-34a239.744 239.744 0 0 0 46.496 26.88V800a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-67.968a239.744 239.744 0 0 0 46.512-26.896l58.912 34a16 16 0 0 0 21.856-5.856l80-138.56a16 16 0 0 0-4.288-20.832l-1.568-1.024-58.896-34a242.624 242.624 0 0 0 0-53.728l58.88-34a16 16 0 0 0 6.72-20.176l-0.848-1.68-80-138.56a16 16 0 0 0-21.856-5.856l-58.912 34a239.744 239.744 0 0 0-46.496-26.88V224a16 16 0 0 0-16-16h-160z m32 48h96v67.376l28.8 12.576c13.152 5.76 25.632 12.976 37.184 21.52l25.28 18.688 58.448-33.728 48 83.136-58.368 33.68 3.472 31.2a194.624 194.624 0 0 1 0 43.104l-3.472 31.2 58.368 33.68-48 83.136-58.432-33.728-25.296 18.688c-11.552 8.544-24.032 15.76-37.184 21.52l-28.8 12.576V768h-96v-67.376l-28.784-12.576c-13.152-5.76-25.632-12.976-37.184-21.52l-25.28-18.688-58.448 33.728-48-83.136 58.368-33.68-3.472-31.2a194.624 194.624 0 0 1 0-43.104l3.472-31.2-58.368-33.68 48-83.136 58.432 33.728 25.296-18.688a191.744 191.744 0 0 1 37.184-21.52l28.8-12.576V256z m47.28 144a112 112 0 1 0 0 224 112 112 0 0 0 0-224z m0 48a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="cookie-list-wrapper">
                        </div>
                    </div>
                `
          ),
          html: true
        },
        btn: {
          ok: {
            enable: false
          }
        },
        mask: {
          enable: true
        },
        drag: true,
        width: PanelUISize.setting.width,
        height: PanelUISize.setting.height,
        style: (
          /*css*/
          `
                ${__pops.config.cssText.panelCSS}
                .cookie-wrapper{
                    display: flex;
                    flex-direction: column;
                    padding: 10px;
                    gap: 10px;
                }
                .cookie-control-wrapper{
                    display: flex;
					flex-wrap: wrap;
                    padding: 0px 10px;
                    gap: 5px;
                    --button-margin-left: 0px;
                }
                .cookie-search-wrapper{
                    display: flex;
                    align-items: center;
                }
                .cookie-search-inner{
                    width: 100%;
                    padding: 0px 10px;
                }
                .cookie-search-inner input{
                    height: 30px;
                    padding: 5px;
                    width: 100%;
                }
                .cookie-search-inner input:focus-visible{
                    outline: none;
                }
                .cookie-setting,
                .cookie-search-setting{
                    display: flex;
                    align-items: center;
                }
                .cookie-setting svg,
                .cookie-search-setting svg{
                    cursor: pointer;
                }
                .cookie-list-wrapper{
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                .cookie-item{
                    display: flex;
                    flex-direction: column;
                    padding: 10px 10px;
                    margin: 0px 10px;
                    background: #f1efef;
                    border-radius: 10px;
                    gap: 5px;
                    box-sizing: border-box;
                    width: 100%;
                }
                .cookie-item-group{
                    display: flex;
                    align-items: center;
                }
                .cookie-item-group-left{
                    width: 100px;
                    min-width: 100px;
                    max-width: 100px;
                    text-transform: capitalize
                }
                .cookie-item-group-control .cookie-item-group-right{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .cookie-item-group-control .cookie-item-group-control-copy,
                .cookie-item-group-control .cookie-item-group-control-edit,
                .cookie-item-group-control .cookie-item-group-control-delete{
                    display: flex;
                    align-items: center;
                }
                .cookie-item-group-control .cookie-item-group-control-delete svg{
                    width: 16px;
                    height: 16px;
                }
                .cookie-item-group-control svg{
                    cursor: pointer;
                }
            `
        )
      });
      const $search = $alert.$shadowRoot.querySelector(
        ".cookie-search-inner input"
      );
      const $searchSetting = $alert.$shadowRoot.querySelector(
        ".cookie-search-setting"
      );
      const $refresh = $alert.$shadowRoot.querySelector(
        ".cookie-control-refresh"
      );
      const $add = $alert.$shadowRoot.querySelector(
        ".cookie-control-add"
      );
      const $copyAll = $alert.$shadowRoot.querySelector(
        ".cookie-control-copy-all"
      );
      const $clearAll = $alert.$shadowRoot.querySelector(
        ".cookie-control-clear-all"
      );
      const $setting = $alert.$shadowRoot.querySelector(".cookie-setting");
      const $cookieListWrapper = $alert.$shadowRoot.querySelector(
        ".cookie-list-wrapper"
      );
      let createCookieItemElement = (cookieInfo) => {
        const $cookieItem = domUtils.createElement("div", {
          className: "cookie-item",
          innerHTML: (
            /*html*/
            `
                `
          )
        });
        const cookieProperty = [
          {
            leftText: "name",
            rightText: cookieInfo.name
          },
          {
            leftText: "value",
            rightText: PopsPanel.getValue("decode-cookie-value") ? decodeURIComponent(cookieInfo.value) : encodeURIComponent(cookieInfo.value)
          }
        ];
        if (CookieManager.cookieManagerApiName === "GM_cookie") {
          cookieInfo = cookieInfo;
          cookieProperty.push(
            {
              leftText: "domain",
              rightText: cookieInfo.domain
            },
            {
              leftText: "path",
              rightText: cookieInfo.path
            },
            {
              leftText: "session",
              rightText: JSON.stringify(cookieInfo.session)
            },
            {
              leftText: "expires",
              rightText: cookieInfo.session ? "会话" : cookieInfo.expirationDate ? new Date(cookieInfo.expirationDate * 1e3).toISOString() : "未知"
            },
            {
              leftText: "httpOnly",
              rightText: JSON.stringify(cookieInfo.httpOnly)
            },
            {
              leftText: "hostOnly",
              rightText: JSON.stringify(cookieInfo.hostOnly)
            },
            {
              leftText: "secure",
              rightText: JSON.stringify(cookieInfo.secure)
            },
            {
              leftText: "sameSite",
              rightText: cookieInfo.sameSite
            }
          );
        } else if (CookieManager.cookieManagerApiName === "cookieStore") {
          cookieInfo = cookieInfo;
          cookieProperty.push(
            {
              leftText: "domain",
              rightText: cookieInfo.domain
            },
            {
              leftText: "path",
              rightText: cookieInfo.path
            },
            {
              leftText: "expires",
              rightText: cookieInfo.expires ? new Date(cookieInfo.expires).toISOString() : "未知"
            },
            {
              leftText: "secure",
              rightText: JSON.stringify(cookieInfo.secure)
            },
            {
              leftText: "sameSite",
              rightText: cookieInfo.sameSite
            }
          );
        }
        cookieProperty.forEach((it) => {
          const $cookieItemGroup = domUtils.createElement("div", {
            className: "cookie-item-group",
            innerHTML: (
              /*html*/
              `
                        <div class="cookie-item-group-left">
                            <p>${it.leftText}</p>
                        </div>
                        <div class="cookie-item-group-right">
                            <p>${it.rightText}</p>
                        </div>
                    `
            )
          });
          domUtils.append($cookieItem, $cookieItemGroup);
        });
        let $cookieItemGroupControl = domUtils.createElement("div", {
          className: "cookie-item-group cookie-item-group-control",
          innerHTML: (
            /*html*/
            `
                    <div class="cookie-item-group-left">操作</div>
                    <div class="cookie-item-group-right">
                        <div class="cookie-item-group-control-copy">
                            <svg t="1742795616339" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M880 247.008l-162.016-166.016Q700.992 64 677.984 64h-316.992q-26.016 0-46.016 18.016-16.992 15.008-23.008 36.992H231.968q-43.008 0-73.504 31.008t-30.496 76v627.008q0 44 30.496 75.488T231.968 960h508q43.008 0 73.504-31.488t30.496-75.488v-63.008q23.008-6.016 37.504-25.504t14.496-44.512V287.008q0-24-16-40z m-168-160.992l-3.008-3.008z m98.016 177.984L744 196z m-126.016-116.992l108 110.016h-108V147.008zM676.992 128zM204.992 948q4 0.992 4.992 2.016-2.016-0.992-4.992-2.016z m27.008 4q-6.016 0-12-0.992 4.992 0.992 12 0.992z m543.008-99.008q0 15.008-10.016 25.504t-24.992 10.496H232q-14.016 0-24.512-10.496t-10.496-25.504V225.984q0-15.008 10.496-25.504t24.512-10.496h58.016v531.008q0 30.016 20.992 51.008t50.016 20.992H775.04v60z m52-132.992q0 2.016-2.016 2.016h-464q-2.016 0-2.016-2.016V136.992q0-2.016 2.016-2.016h251.008v156.992q0 15.008 10.016 24.992t24 10.016h180.992v392.992z m9.984 64q4-0.992 8.992-2.016-4.992 0.992-8.992 2.016z m-244-168.992h-107.008q-15.008 0-24.992 10.496t-10.016 24.992 10.016 24.992 24.992 10.496h107.008q14.016 0 24.512-10.496t10.496-24.992-10.496-24.992-24.512-10.496z m107.008-111.008h-214.016q-14.016 0-24.512 10.496t-10.496 24.992 10.496 24.992 24.512 10.496h214.016q14.016 0 24-10.496t10.016-24.992-10.016-24.992-24-10.496z m-240.992 36q0 4 0.992 8-0.992-4-0.992-8zM700 512z m12 52l4-2.016z m-260.992-135.488q0 14.496 10.496 24.992t24.512 10.496h214.016q14.016 0 24-10.496t10.016-24.992-10.016-24.992-24-10.496h-214.016q-14.016 0-24.512 10.496t-10.496 24.992z m8 1.504z"></path>
                            </svg>
                        </div>
                        <div class="cookie-item-group-control-edit">
                            <svg t="1742795710451" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M800 960 224 960c-52.928 0-96-43.072-96-96L128 224c0-52.928 43.072-96 96-96l448 0c17.696 0 32 14.336 32 32s-14.304 32-32 32L224 192C206.368 192 192 206.368 192 224l0 640c0 17.664 14.368 32 32 32l576 0c17.664 0 32-14.336 32-32L832 352c0-17.664 14.304-32 32-32s32 14.336 32 32l0 512C896 916.928 852.928 960 800 960zM612 448c-8.192 0-16.384-3.136-22.624-9.376-12.512-12.512-12.512-32.736 0-45.248l318.016-318.016c12.512-12.512 32.736-12.512 45.248 0s12.512 32.736 0 45.248l-318.016 318.016C628.384 444.896 620.192 448 612 448zM480 448 288 448c-17.664 0-32-14.336-32-32s14.336-32 32-32l192 0c17.664 0 32 14.336 32 32S497.664 448 480 448zM672 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l384 0c17.696 0 32 14.304 32 32S689.696 640 672 640z"></path>
                            </svg>
                        </div>
                        <div class="cookie-item-group-control-delete">
                            ${__pops.config.iconSVG.delete}
                        </div>
                    </div>
                `
          )
        });
        let $cookieItemCopy = $cookieItemGroupControl.querySelector(
          ".cookie-item-group-control-copy"
        );
        let $cookieItemEdit = $cookieItemGroupControl.querySelector(
          ".cookie-item-group-control-edit"
        );
        let $cookieItemDelete = $cookieItemGroupControl.querySelector(
          ".cookie-item-group-control-delete"
        );
        domUtils.on($cookieItemCopy, "click", (event) => {
          utils.preventEvent(event);
          let cookieText = cookieInfo.value;
          utils.setClip(cookieText).then((status) => {
            if (status) {
              Qmsg.success("复制成功");
            } else {
              Qmsg.error("复制失败");
            }
          });
        });
        domUtils.on($cookieItemEdit, "click", (event) => {
          utils.preventEvent(event);
          CookieManagerEditView.showView(cookieInfo, (__cookieInfo__) => {
            var _a2;
            let $newCookieItem = createCookieItemElement(__cookieInfo__);
            domUtils.after($cookieItem, $newCookieItem);
            (_a2 = $cookieItem.parentElement) == null ? void 0 : _a2.removeChild($cookieItem);
          });
        });
        domUtils.on($cookieItemDelete, "click", (event) => {
          utils.preventEvent(event);
          let result = confirm("确定删除该Cookie？");
          if (!result) {
            return;
          }
          CookieManager.deleteCookie(cookieInfo).then((status) => {
            var _a2;
            if (!status) {
              Qmsg.success("删除成功");
              (_a2 = $cookieItem.parentElement) == null ? void 0 : _a2.removeChild($cookieItem);
            } else {
              log.error(status);
              Qmsg.error("删除失败");
            }
          });
        });
        domUtils.append($cookieItem, [$cookieItemGroupControl]);
        return $cookieItem;
      };
      let updateCookieListGroup = async (filterCallBack) => {
        let cookieList = await CookieManager.queryAllCookie();
        if (typeof filterCallBack === "function") {
          cookieList = cookieList.filter(filterCallBack);
        }
        domUtils.empty($cookieListWrapper);
        let $fragment = document.createDocumentFragment();
        cookieList.forEach((cookieItem) => {
          if (
            // @ts-ignore
            cookieItem.session && PopsPanel.getValue("exclude-session-cookie")
          ) {
            return;
          }
          const $cookieItem = createCookieItemElement(cookieItem);
          domUtils.append($fragment, $cookieItem);
        });
        domUtils.append($cookieListWrapper, $fragment);
      };
      updateCookieListGroup();
      domUtils.on(
        $search,
        ["input", "propertychange"],
        utils.debounce((event) => {
          updateCookieListGroup((cookieItem) => {
            let searchText = domUtils.val($search);
            let enableRegExp = PopsPanel.getValue(
              "search-config-use-regexp"
            );
            return enableRegExp ? Boolean(cookieItem.name.match(new RegExp(searchText))) : cookieItem.name.includes(searchText);
          });
        })
      );
      domUtils.listenKeyboard(
        $search,
        "keypress",
        (keyName, keyValue, otherCodeList) => {
          if (keyName === "Enter" && otherCodeList.length === 0) {
            utils.dispatchEvent($search, "input");
          }
        }
      );
      domUtils.on($searchSetting, "click", (event) => {
        utils.preventEvent(event);
        let $settingAlert = __pops.alert({
          title: {
            text: "搜索配置",
            position: "center"
          },
          content: {
            text: "",
            html: true
          },
          btn: {
            ok: {
              enable: false
            }
          },
          drag: true,
          mask: {
            clickEvent: {
              toClose: true
            }
          },
          width: PanelUISize.info.width,
          height: PanelUISize.info.height,
          style: (
            /*css*/
            `
                    ${__pops.config.cssText.panelCSS}

                    .pops-alert-content li{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 10px;
                    }
                    .pops-panel-item-left-desc-text{
                        line-height: normal;
                        margin-top: 6px;
                        font-size: 0.8em;
                        color: rgb(108, 108, 108);
                    }
                `
          )
        });
        let $content = $settingAlert.$shadowRoot.querySelector(
          ".pops-alert-content"
        );
        let panelHandleContentUtils = __pops.config.panelHandleContentUtils();
        let $useRegExp = panelHandleContentUtils.createSectionContainerItem_switch(
          UISwitch(
            "启用正则表达式",
            "search-config-use-regexp",
            false,
            void 0,
            "使用正则表达式搜索Cookie名称"
          )
        );
        domUtils.append($content, $useRegExp);
      });
      domUtils.on($refresh, "click", (event) => {
        utils.preventEvent(event);
        let searchText = domUtils.val($search);
        if (searchText == "") {
          updateCookieListGroup();
        } else {
          utils.dispatchEvent($search, "input");
        }
      });
      domUtils.on($add, "click", (event) => {
        utils.preventEvent(event);
        CookieManagerEditView.showView(void 0, (__cookieInfo__) => {
          updateCookieListGroup();
        });
      });
      domUtils.on($copyAll, "click", (event) => {
        utils.preventEvent(event);
        CookieManager.queryAllCookie().then((cookieList) => {
          cookieList = cookieList.filter((it) => {
            return !(it.session && PopsPanel.getValue("exclude-session-cookie"));
          });
          if (cookieList.length === 0) {
            Qmsg.warning("没有Cookie可以复制");
            return;
          }
          let cookieText = cookieList.map((it) => {
            let cookieItemValueText = it.value;
            return `${it.name}=${cookieItemValueText}; `;
          }).join("");
          utils.setClip(cookieText).then((status) => {
            if (status) {
              Qmsg.success("复制成功");
            } else {
              Qmsg.error("复制失败");
            }
          });
        });
      });
      domUtils.on($clearAll, "click", (event) => {
        utils.preventEvent(event);
        let result = window.confirm("确定清除全部Cookie？");
        if (!result) {
          return;
        }
        CookieManager.deleteAllCookie().then((deleteInfo) => {
          if (deleteInfo.error) {
            Qmsg.warning(
              `清除成功：${deleteInfo.success} 失败：${deleteInfo.error}`
            );
          } else {
            Qmsg.success("清除成功");
          }
          updateCookieListGroup();
        });
      });
      domUtils.on($setting, "click", (event) => {
        utils.preventEvent(event);
        let $settingAlert = __pops.alert({
          title: {
            text: "设置",
            position: "center"
          },
          content: {
            text: "",
            html: true
          },
          btn: {
            ok: {
              enable: false
            }
          },
          drag: true,
          mask: {
            clickEvent: {
              toClose: true
            }
          },
          width: PanelUISize.info.width,
          height: PanelUISize.info.height,
          style: (
            /*css*/
            `
                    ${__pops.config.cssText.panelCSS}

                    .pops-alert-content li{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 10px;
                    }
                    .pops-panel-item-left-desc-text{
                        line-height: normal;
                        margin-top: 6px;
                        font-size: 0.8em;
                        color: rgb(108, 108, 108);
                    }
                `
          )
        });
        let $content = $settingAlert.$shadowRoot.querySelector(
          ".pops-alert-content"
        );
        let panelHandleContentUtils = __pops.config.panelHandleContentUtils();
        let $useGM_cookie = panelHandleContentUtils.createSectionContainerItem_select(
          UISelect(
            "CookieManager Api",
            "cookie-manager-api",
            "document.cookie",
            [
              {
                text: "document.cookie",
                value: "document.cookie"
              },
              {
                text: "cookieStore",
                value: "cookieStore"
              },
              {
                text: "GM_cookie",
                value: "GM_cookie"
              }
            ],
            () => {
              updateCookieListGroup();
            },
            "操作Cookie的Api函数"
          )
        );
        let $decodeValue = panelHandleContentUtils.createSectionContainerItem_switch(
          UISwitch(
            "解码Cookie值",
            "decode-cookie-value",
            false,
            () => {
              updateCookieListGroup();
            },
            "对Cookie值进行解码"
          )
        );
        let $excludeSessionCookie = panelHandleContentUtils.createSectionContainerItem_switch(
          UISwitch(
            "排除Session Cookie",
            "exclude-session-cookie",
            false,
            () => {
              updateCookieListGroup();
            },
            "过滤掉浏览器会话Cookie"
          )
        );
        domUtils.append($content, [
          $useGM_cookie,
          $decodeValue,
          $excludeSessionCookie
        ]);
      });
    },
    /**
     * 注册脚本菜单
     */
    registerMenu() {
      const that = this;
      GM_Menu.add({
        key: "cookie_manager_view",
        text: "⚙ Cookie管理",
        autoReload: false,
        isStoreValue: false,
        showText(text, enable) {
          return text;
        },
        callback(data) {
          that.showView();
        }
      });
    }
  };
  PopsPanel.init();
  CookieManagerView.init();

})(Qmsg, DOMUtils, Utils, pops);