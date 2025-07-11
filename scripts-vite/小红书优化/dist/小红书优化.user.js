// ==UserScript==
// @name         小红书优化
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.7.11
// @author       WhiteSevs
// @description  屏蔽登录弹窗、屏蔽广告、优化评论浏览、优化图片浏览、允许复制、禁止唤醒App、禁止唤醒弹窗、修复正确跳转等
// @license      GPL-3.0-only
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAx9JREFUWEfNl09MU0EQxn/beFTDDRI41FAMcNGbBw62oPEGid6UULxg1EhEEzExgdBEEzRqlKDxZCHgDZJ6U8TWAyaQGIsHMQLSA0S8VYQT2NXp9tnX0vKnpi2TNH1vd3bmm5lv9+0o0kQ73SXsc7QCx1EcjU9rnOl6O3pXRNAqCjqCIsB6LKQioYh9rbK/6MMnWojFHgElO3KwWyUBBD1q9q3fWvoPgHY1dIHu2a3N3PRVt5ob98naOABdVd+K5nluxnJc5dBe9TU4qHS128lvRzDnOufoH4iyETukihJ9EnSH0i5PAFRj7oH8z0r9UmlXw0fQZrsVWhQRKcFCEepvQo0DcNXrQgeechDtbQAVpbCyBiurqUmqqYSD+2FyOnPyZE50ln7A4vKWCc5egvIyCA3DzV4YeZ00UlEGQ/eN88670HsjOTczZ8bbvXCiDqbC8HkeBkahuhLE5sBICqDdAzh9yjh1n4OlZZgdTxqcDEPfIAw9SI1aMjg1DVrDpe5tAIRewOJ36LyXzIAgv+IFz1ljXN5FJAOjrwwIcd583YwfO2L0JHvW2qqGjKXYnAExJkYfDyYBaGWibmyDGhe0t/z9bikDSMQO4NZlEO5YJTggfHCBf8SUIo0TqQCEPB8C0Ddg6m5xQIj4xAcXu+DLPASHjY5/1BDUDkAyWF6amXjCkcYLW5Sg1gWBZ3C7H6Y+mWdJ48y35LiQ0HvGGLHzIFsJLAJLSSQzssYmmzMg0TVfM9vMqqMYkcwIejEiv59rhliy3URP2H6n3/zXJsbsO+ipz+huCUCQSb2E3eJQRNL+ZsIQS/a1ALQIKDtCxu0i4EUs8GPvk7YEXFPbNrvAmj5ZJ3dB49wSYbTlUIgqANJFzoFfq4aE8izBiC0h49iEmctagszUyevoHvgYFf1zXEwA6PBeuJLVXwUe5pVp2Yyr2HmVaMUW8tYNZXWuI6xrT6IxcbeiHYVtTCT62ZDf1pp5ekB1FaYU2qfmgvGLQWpzKi0adOfxlhxF0ZGxObUiT7RqbjRNoJ0oVZIzINMNy5Eehtg7NvCrSChqz/IfgUZkW/BhLsQAAAAASUVORK5CYII=
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://www.xiaohongshu.com/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.11/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.1.11/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.8/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.js
// @resource     ViewerCSS  https://fastly.jsdelivr.net/npm/viewerjs@1.11.7/dist/viewer.min.css
// @connect      edith.xiaohongshu.com
// @grant        GM_deleteValue
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_unregisterMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function (Qmsg, DOMUtils, Utils, pops, Viewer) {
  'use strict';

  var _GM_deleteValue = /* @__PURE__ */ (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
  var _GM_getResourceText = /* @__PURE__ */ (() => typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0)();
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_registerMenuCommand = /* @__PURE__ */ (() => typeof GM_registerMenuCommand != "undefined" ? GM_registerMenuCommand : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_unregisterMenuCommand = /* @__PURE__ */ (() => typeof GM_unregisterMenuCommand != "undefined" ? GM_unregisterMenuCommand : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  var _monkeyWindow = /* @__PURE__ */ (() => window)();
  const blockCSS$2 = "/* 用户主页 */\r\n/* 底部的-App内打开 */\r\n.launch-app-container.bottom-bar,\r\n/* 顶部的-打开看看 */\r\n.main-container > .scroll-view-container > .launch-app-container:first-child,\r\n/* 底部的-打开小红书看更多精彩内容 */\r\n.bottom-launch-app-tip.show-bottom-bar,\r\n/* 首页-顶部横幅 */\r\n#app .launch-app-container,\r\n/* 笔记-顶部横幅 */\r\n.note-view-container .nav-bar-box-expand ,\r\n.note-view-container .nav-bar-box-expand+.placeholder-expand,\r\n/* 404页面 顶部的打开看看 */\r\n.not-found-container .nav-bar-box-expand:has(.share-info-box):has(.launch-btn),\r\n/* 404页面 底部的-App内打开 */\r\n.not-found-container #fmp {\r\n	display: none !important;\r\n}\r\n";
  const ScriptRouter = {
    /**
     * 判断是否是笔记页面
     */
    isArticle() {
      return globalThis.location.pathname.startsWith("/discovery/item/") || globalThis.location.pathname.startsWith("/explore/");
    },
    /**
     * 判断是否是用户主页页面
     */
    isUserHome() {
      return globalThis.location.pathname.startsWith("/user/profile/");
    },
    /**
     * 判断是否是主页
     */
    isHome() {
      return globalThis.location.href === "https://www.xiaohongshu.com/" || globalThis.location.href === "https://www.xiaohongshu.com";
    },
    /**
     * 判断是否是搜索页面
     */
    isSearch() {
      return globalThis.location.pathname.startsWith("/search_result/");
    }
  };
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
        if (window.innerWidth < 550) {
          return "88vw";
        } else if (window.innerWidth < 700) {
          return "550px";
        } else {
          return "700px";
        }
      },
      get height() {
        if (window.innerHeight < 450) {
          return "70vh";
        } else if (window.innerHeight < 550) {
          return "450px";
        } else {
          return "550px";
        }
      }
    }
  };
  class StorageUtils {
    /** 存储的键名 */
    storageKey;
    listenerData;
    /**
     * 存储的键名，可以是多层的，如：a.b.c
     *
     * 那就是
     * {
     *  "a": {
     *     "b": {
     *       "c": {
     *         ...你的数据
     *       }
     *     }
     *   }
     * }
     * @param key
     */
    constructor(key) {
      if (typeof key === "string") {
        let trimKey = key.trim();
        if (trimKey == "") {
          throw new Error("key参数不能为空字符串");
        }
        this.storageKey = trimKey;
      } else {
        throw new Error("key参数类型错误，必须是字符串");
      }
      this.listenerData = new Utils.Dictionary();
    }
    /**
     * 获取本地值
     */
    getLocalValue() {
      let localValue = _GM_getValue(this.storageKey);
      if (localValue == null) {
        localValue = {};
        this.setLocalValue(localValue);
      }
      return localValue;
    }
    /**
     * 设置本地值
     * @param value
     */
    setLocalValue(value) {
      _GM_setValue(this.storageKey, value);
    }
    /**
     * 设置值
     * @param key 键
     * @param value 值
     */
    set(key, value) {
      let oldValue = this.get(key);
      let localValue = this.getLocalValue();
      Reflect.set(localValue, key, value);
      this.setLocalValue(localValue);
      this.triggerValueChangeListener(key, oldValue, value);
    }
    /**
     * 获取值
     * @param key 键
     * @param defaultValue 默认值
     */
    get(key, defaultValue) {
      let localValue = this.getLocalValue();
      return Reflect.get(localValue, key) ?? defaultValue;
    }
    /**
     * 获取所有值
     */
    getAll() {
      let localValue = this.getLocalValue();
      return localValue;
    }
    /**
     * 删除值
     * @param key 键
     */
    delete(key) {
      let oldValue = this.get(key);
      let localValue = this.getLocalValue();
      Reflect.deleteProperty(localValue, key);
      this.setLocalValue(localValue);
      this.triggerValueChangeListener(key, oldValue, void 0);
    }
    /**
     * 判断是否存在该值
     */
    has(key) {
      let localValue = this.getLocalValue();
      return Reflect.has(localValue, key);
    }
    /**
     * 获取所有键
     */
    keys() {
      let localValue = this.getLocalValue();
      return Reflect.ownKeys(localValue);
    }
    /**
     * 获取所有值
     */
    values() {
      let localValue = this.getLocalValue();
      return Reflect.ownKeys(localValue).map(
        (key) => Reflect.get(localValue, key)
      );
    }
    /**
     * 清空所有值
     */
    clear() {
      _GM_deleteValue(this.storageKey);
    }
    /**
     * 监听值改变
     * + .set
     * + .delete
     * @param key 监听的键
     * @param callback 值改变的回调函数
     */
    addValueChangeListener(key, callback) {
      let listenerId = Math.random();
      let listenerData = this.listenerData.get(key) || [];
      listenerData.push({
        id: listenerId,
        key,
        callback
      });
      this.listenerData.set(key, listenerData);
      return listenerId;
    }
    /**
     * 移除监听
     * @param listenerId 监听的id或键名
     */
    removeValueChangeListener(listenerId) {
      let flag = false;
      for (const [key, listenerData] of this.listenerData.entries()) {
        for (let index = 0; index < listenerData.length; index++) {
          const value = listenerData[index];
          if (typeof listenerId === "string" && value.key === listenerId || typeof listenerId === "number" && value.id === listenerId) {
            listenerData.splice(index, 1);
            index--;
            flag = true;
          }
        }
        this.listenerData.set(key, listenerData);
      }
      return flag;
    }
    /**
     * 主动触发监听器
     * @param key 键
     * @param oldValue （可选）旧值
     * @param newValue （可选）新值
     */
    triggerValueChangeListener(key, oldValue, newValue) {
      if (!this.listenerData.has(key)) {
        return;
      }
      let listenerData = this.listenerData.get(key);
      for (let index = 0; index < listenerData.length; index++) {
        const data = listenerData[index];
        if (typeof data.callback === "function") {
          let value = this.get(key);
          let __newValue;
          let __oldValue;
          if (typeof oldValue !== "undefined" && arguments.length >= 2) {
            __oldValue = oldValue;
          } else {
            __oldValue = value;
          }
          if (typeof newValue !== "undefined" && arguments.length > 2) {
            __newValue = newValue;
          } else {
            __newValue = value;
          }
          data.callback(key, __oldValue, __newValue);
        }
      }
    }
  }
  const PopsPanelStorageApi = new StorageUtils(KEY);
  const PanelContent = {
    $data: {
      /**
       * @private
       */
      __contentConfig: null,
      get contentConfig() {
        if (this.__contentConfig == null) {
          this.__contentConfig = new utils.Dictionary();
        }
        return this.__contentConfig;
      }
    },
    /**
     * 设置所有配置项，用于初始化默认的值
     *
     * 如果是第一组添加的话，那么它默认就是设置菜单打开的配置
     * @param configList 配置项
     */
    addContentConfig(configList) {
      if (!Array.isArray(configList)) {
        configList = [configList];
      }
      let index = this.$data.contentConfig.keys().length;
      this.$data.contentConfig.set(index, configList);
    },
    /**
     * 获取所有的配置内容，用于初始化默认的值
     */
    getAllContentConfig() {
      return this.$data.contentConfig.values().flat();
    },
    /**
     * 获取配置内容
     * @param index 配置索引
     */
    getConfig(index = 0) {
      return this.$data.contentConfig.get(index) ?? [];
    },
    /**
     * 获取默认左侧底部的配置项
     */
    getDefaultBottomContentConfig() {
      return [
        {
          id: "script-version",
          title: `版本：${_GM_info?.script?.version || "未知"}`,
          isBottom: true,
          forms: [],
          clickFirstCallback(event, rightHeaderElement, rightContainerElement) {
            window.open(
              _GM_info?.script?.namespace || "https://github.com/WhiteSevs/TamperMonkeyScript",
              "_blank"
            );
            return false;
          }
        }
      ];
    }
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
          }
        }
      ],
      get menuOption() {
        return this.__menuOption;
      }
    },
    init() {
      this.initExtensionsMenu();
    },
    /**
     * 初始化菜单项
     */
    initExtensionsMenu() {
      if (!Panel.isTopWindow()) {
        return;
      }
      GM_Menu.add(this.$data.menuOption);
    },
    /**
     * 添加菜单项
     * @param option 菜单配置
     */
    addMenuOption(option) {
      if (!Array.isArray(option)) {
        option = [option];
      }
      this.$data.menuOption.push(...option);
    },
    /**
     * 更新菜单项
     * @param option 菜单配置
     */
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
    /**
     * 获取菜单项
     * @param [index=0] 索引
     */
    getMenuOption(index = 0) {
      return this.$data.menuOption[index];
    },
    /**
     * 删除菜单项
     * @param [index=0] 索引
     */
    deleteMenuOption(index = 0) {
      this.$data.menuOption.splice(index, 1);
    }
  };
  const Panel = {
    /** 数据 */
    $data: {
      /**
       * @private
       */
      __configDefaultValueData: null,
      /**
       * @private
       */
      __onceExecMenuData: null,
      /**
       * @private
       */
      __onceExecData: null,
      /**
       * @private
       */
      __panelConfig: {},
      $panel: null,
      /**
       * 菜单项的默认值
       */
      get configDefaultValueData() {
        if (this.__configDefaultValueData == null) {
          this.__configDefaultValueData = new utils.Dictionary();
        }
        return this.__configDefaultValueData;
      },
      /**
       * 成功只执行了一次的项
       */
      get onceExecMenuData() {
        if (this.__onceExecMenuData == null) {
          this.__onceExecMenuData = new utils.Dictionary();
        }
        return this.__onceExecMenuData;
      },
      /**
       * 成功只执行了一次的项
       */
      get onceExecData() {
        if (this.__onceExecData == null) {
          this.__onceExecData = new utils.Dictionary();
        }
        return this.__onceExecData;
      },
      /** 脚本名，一般用在设置的标题上 */
      get scriptName() {
        return SCRIPT_NAME;
      },
      /**
       * pops.panel的默认配置
       */
      get panelConfig() {
        return this.__panelConfig;
      },
      set panelConfig(value) {
        this.__panelConfig = value;
      },
      /** 菜单项的总值在本地数据配置的键名 */
      key: KEY,
      /** 菜单项在attributes上配置的菜单键 */
      attributeKeyName: ATTRIBUTE_KEY,
      /** 菜单项在attributes上配置的菜单默认值 */
      attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE
    },
    init() {
      this.initContentDefaultValue();
      PanelMenu.init();
    },
    /** 判断是否是顶层窗口 */
    isTopWindow() {
      return _unsafeWindow.top === _unsafeWindow.self;
    },
    /** 初始化菜单项的默认值保存到本地数据中 */
    initContentDefaultValue() {
      const initDefaultValue = (config) => {
        if (!config.attributes) {
          return;
        }
        if (config.type === "button" || config.type === "forms" || config.type === "deepMenu") {
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
          this.setDefaultValue(__key, __defaultValue);
        });
      };
      const loopInitDefaultValue = (configList) => {
        for (let index = 0; index < configList.length; index++) {
          let configItem = configList[index];
          initDefaultValue(configItem);
          let childForms = configItem.forms;
          if (childForms && Array.isArray(childForms)) {
            loopInitDefaultValue(childForms);
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
    },
    /**
     * 设置初始化使用的默认值
     */
    setDefaultValue(key, defaultValue) {
      if (this.$data.configDefaultValueData.has(key)) {
        log.warn("请检查该key(已存在): " + key);
      }
      this.$data.configDefaultValueData.set(key, defaultValue);
    },
    /**
     * 设置值
     * @param key 键
     * @param value 值
     */
    setValue(key, value) {
      PopsPanelStorageApi.set(key, value);
    },
    /**
     * 获取值
     * @param key 键
     * @param defaultValue 默认值
     */
    getValue(key, defaultValue) {
      let localValue = PopsPanelStorageApi.get(key);
      if (localValue == null) {
        if (this.$data.configDefaultValueData.has(key)) {
          return this.$data.configDefaultValueData.get(key);
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
      PopsPanelStorageApi.delete(key);
    },
    /**
     * 判断该键是否存在
     * @param key 键
     */
    hasKey(key) {
      return PopsPanelStorageApi.has(key);
    },
    /**
     * 监听调用setValue、deleteValue
     * @param key 需要监听的键
     * @param callback
     */
    addValueChangeListener(key, callback) {
      let listenerId = PopsPanelStorageApi.addValueChangeListener(
        key,
        (__key, __newValue, __oldValue) => {
          callback(key, __oldValue, __newValue);
        }
      );
      return listenerId;
    },
    /**
     * 移除监听
     * @param listenerId 监听的id
     */
    removeValueChangeListener(listenerId) {
      PopsPanelStorageApi.removeValueChangeListener(listenerId);
    },
    /**
     * 主动触发菜单值改变的回调
     * @param key 菜单键
     * @param newValue 想要触发的新值，默认使用当前值
     * @param oldValue 想要触发的旧值，默认使用当前值
     */
    triggerMenuValueChange(key, newValue, oldValue) {
      PopsPanelStorageApi.triggerValueChangeListener(key, oldValue, newValue);
    },
    /**
     * 移除已执行的仅执行一次的菜单
     * @param key 键
     */
    deleteExecMenuOnce(key) {
      this.$data.onceExecMenuData.delete(key);
      let flag = PopsPanelStorageApi.removeValueChangeListener(key);
      return flag;
    },
    /**
     * 移除已执行的仅执行一次的菜单
     * @param key 键
     */
    deleteOnceExec(key) {
      this.$data.onceExecData.delete(key);
    },
    /**
     * 执行菜单
     *
     * @param queryKey 键|键数组
     * @param callback 执行的回调函数
     * @param checkExec 判断是否执行回调
     *
     * （默认）如果想要每个菜单是`与`关系，即每个菜单都判断为开启，那么就判断它们的值&就行
     *
     * 如果想要任意菜单存在true再执行，那么判断它们的值|就行
     *
     * + 返回值都为`true`，执行回调，如果回调返回了<style>元素，该元素会在监听到值改变时被移除掉
     * + 返回值有一个为`false`，则不执行回调，且移除之前回调函数返回的<style>元素
     * @param once 是否只执行一次，默认true
     *
     * + true （默认）只执行一次，且会监听键的值改变
     * + false 不会监听键的值改变
     */
    exec(queryKey, callback, checkExec, once = true) {
      const that = this;
      let queryKeyFn;
      if (typeof queryKey === "string" || Array.isArray(queryKey)) {
        queryKeyFn = () => queryKey;
      } else {
        queryKeyFn = queryKey;
      }
      let isArrayKey = false;
      let queryKeyResult = queryKeyFn();
      let keyList = [];
      if (Array.isArray(queryKeyResult)) {
        isArrayKey = true;
        keyList = queryKeyResult;
      } else {
        keyList.push(queryKeyResult);
      }
      let findNotInDataKey = keyList.find(
        (it) => !this.$data.configDefaultValueData.has(it)
      );
      if (findNotInDataKey) {
        log.warn(`${findNotInDataKey} 键不存在`);
        return;
      }
      let storageKey = JSON.stringify(keyList);
      if (once) {
        if (this.$data.onceExecMenuData.has(storageKey)) {
          return;
        }
        this.$data.onceExecMenuData.set(storageKey, 1);
      }
      let storeValueList = [];
      let listenerIdList = [];
      let dynamicAddStyleNodeCallback = (value, $style) => {
        let dynamicResultList = [];
        if (!Array.isArray($style)) {
          $style = [$style];
        }
        $style.forEach(($styleItem) => {
          if ($styleItem == null) {
            return;
          }
          if ($styleItem instanceof HTMLStyleElement) {
            dynamicResultList.push($styleItem);
            return;
          }
        });
        {
          storeValueList = storeValueList.concat(dynamicResultList);
        }
      };
      let getMenuValue = (key) => {
        let value = this.getValue(key);
        return value;
      };
      let clearBeforeStoreValue = () => {
        for (let index = 0; index < storeValueList.length; index++) {
          let $css = storeValueList[index];
          $css.remove();
          storeValueList.splice(index, 1);
          index--;
        }
      };
      let checkMenuExec = () => {
        let flag = false;
        if (typeof checkExec === "function") {
          flag = checkExec(keyList);
        } else {
          flag = keyList.every((key) => getMenuValue(key));
        }
        return flag;
      };
      let valueChangeCallback = (valueOption) => {
        let execFlag = checkMenuExec();
        let resultList = [];
        if (execFlag) {
          let valueList = keyList.map((key) => this.getValue(key));
          let callbackResult = callback({
            value: isArrayKey ? valueList : valueList[0],
            addStyleElement: (...args) => {
              return dynamicAddStyleNodeCallback(true, ...args);
            }
          });
          if (!Array.isArray(callbackResult)) {
            callbackResult = [callbackResult];
          }
          callbackResult.forEach((it) => {
            if (it == null) {
              return;
            }
            if (it instanceof HTMLStyleElement) {
              resultList.push(it);
              return;
            }
          });
        }
        clearBeforeStoreValue();
        storeValueList = [...resultList];
      };
      once && keyList.forEach((key) => {
        let listenerId = this.addValueChangeListener(
          key,
          (key2, newValue, oldValue) => {
            valueChangeCallback();
          }
        );
        listenerIdList.push(listenerId);
      });
      valueChangeCallback();
      let result = {
        /**
         * 清空菜单执行情况
         *
         * + 清空存储的元素列表
         * + 清空值改变的监听器
         * + 清空存储的一次执行的键
         */
        clear() {
          this.clearStoreStyleElements();
          this.removeValueChangeListener();
          once && that.$data.onceExecMenuData.delete(storageKey);
        },
        /**
         * 清空存储的元素列表
         */
        clearStoreStyleElements: () => {
          return clearBeforeStoreValue();
        },
        /**
         * 移除值改变的监听器
         */
        removeValueChangeListener: () => {
          listenerIdList.forEach((listenerId) => {
            this.removeValueChangeListener(listenerId);
          });
        }
      };
      return result;
    },
    /**
     * 自动判断菜单是否启用，然后执行回调
     * @param key
     * @param callback 回调
     * @param [isReverse=false] 逆反判断菜单启用
     */
    execMenu(key, callback, isReverse = false) {
      return this.exec(
        key,
        (option) => {
          return callback(option);
        },
        (keyList) => {
          let execFlag = keyList.every((__key__) => {
            let flag = !!this.getValue(__key__);
            isReverse && (flag = !flag);
            return flag;
          });
          return execFlag;
        },
        false
      );
    },
    /**
     * 自动判断菜单是否启用，然后执行回调，只会执行一次
     *
     * 它会自动监听值改变（设置中的修改），改变后如果未执行，则执行一次
     * @param key
     * @param callback 回调
     * @param getValueFn 自定义处理获取当前值，值true是启用并执行回调，值false是不执行回调
     * @param handleValueChangeFn 自定义处理值改变时的回调，值true是启用并执行回调，值false是不执行回调
     */
    execMenuOnce(key, callback) {
      return this.exec(
        key,
        callback,
        (keyList) => {
          let execFlag = keyList.every((__key__) => {
            let flag = !!this.getValue(__key__);
            return flag;
          });
          return execFlag;
        },
        true
      );
    },
    /**
     * 根据key执行一次
     * @param key 键
     * @param callback 回调
     */
    onceExec(key, callback) {
      if (typeof key !== "string") {
        throw new TypeError("key 必须是字符串");
      }
      if (this.$data.onceExecData.has(key)) {
        return;
      }
      callback();
      this.$data.onceExecData.set(key, 1);
    },
    /**
     * 显示设置面板
     * @param content 显示的内容配置
     * @param [title] 标题
     * @param [preventDefaultContentConfig=false] 是否阻止默认添加内容配置（版本号）
     */
    showPanel(content, title = `${SCRIPT_NAME}-设置`, preventDefaultContentConfig = false) {
      let notHasBottomVersionContentConfig = content.some((it) => {
        let isBottom = typeof it.isBottom === "function" ? it.isBottom() : Boolean(it.isBottom);
        return !isBottom && it.id !== "script-version";
      });
      if (!preventDefaultContentConfig && notHasBottomVersionContentConfig) {
        content.push(...PanelContent.getDefaultBottomContentConfig());
      }
      let $panel = __pops.panel({
        ...{
          title: {
            text: title,
            position: "center",
            html: false,
            style: ""
          },
          content,
          btn: {
            close: {
              enable: true,
              callback: (details, event) => {
                details.close();
                this.$data.$panel = null;
              }
            }
          },
          mask: {
            enable: true,
            clickEvent: {
              toClose: true,
              toHide: false
            },
            clickCallBack: (originalRun, config) => {
              originalRun();
              this.$data.$panel = null;
            }
          },
          width: PanelUISize.setting.width,
          height: PanelUISize.setting.height,
          drag: true,
          only: true
        },
        ...this.$data.panelConfig
      });
      this.$data.$panel = $panel;
    }
  };
  const CommonUtil = {
    /**
     * 移除元素（未出现也可以等待出现）
     * @param selector 元素选择器
     */
    waitRemove(...args) {
      args.forEach((selector) => {
        if (typeof selector !== "string") {
          return;
        }
        utils.waitNodeList(selector).then((nodeList) => {
          nodeList.forEach(($el) => $el.remove());
        });
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
     * 设置GM_getResourceText的style内容
     * @param resourceMapData 资源数据
     * @example
     * setGMResourceCSS({
     *   keyName: "ViewerCSS",
     *   url: "https://example.com/example.css",
     * })
     */
    setGMResourceCSS(resourceMapData) {
      let cssText = typeof _GM_getResourceText === "function" ? _GM_getResourceText(resourceMapData.keyName) : null;
      if (typeof cssText === "string" && cssText) {
        addStyle(cssText);
      } else {
        CommonUtil.loadStyleLink(resourceMapData.url);
      }
    },
    /**
     * 添加<link>标签
     * @param url
     * @example
     * loadStyleLink("https://example.com/example.css")
     */
    async loadStyleLink(url) {
      let $link = document.createElement("link");
      $link.rel = "stylesheet";
      $link.type = "text/css";
      $link.href = url;
      DOMUtils.ready(() => {
        document.head.appendChild($link);
      });
    },
    /**
     * 添加<script>标签
     * @param url
     * @example
     * loadStyleLink("https://example.com/example.js")
     */
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
    /**
     * 将url修复，例如只有search的链接修复为完整的链接
     *
     * 注意：不包括http转https
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
      let urlInstance = new URL(url);
      urlInstance.protocol = "https:";
      return urlInstance.toString();
    },
    /**
     * 禁止页面滚动，默认锁定html和body
     * @example
     * lockScroll();
     * @example
     * lockScroll(document.body);
     */
    lockScroll(...args) {
      let $hidden = document.createElement("style");
      $hidden.innerHTML = /*css*/
      `
			.pops-overflow-hidden-important {
				overflow: hidden !important;
			}
		`;
      let $elList = [document.documentElement, document.body].concat(
        ...args || []
      );
      $elList.forEach(($el) => {
        $el.classList.add("pops-overflow-hidden-important");
      });
      (document.head || document.documentElement).appendChild($hidden);
      return {
        /**
         * 解除锁定
         */
        recovery() {
          $elList.forEach(($el) => {
            $el.classList.remove("pops-overflow-hidden-important");
          });
          $hidden.remove();
        }
      };
    },
    /**
     * 获取剪贴板文本
     */
    async getClipboardText() {
      function readClipboardText(resolve) {
        navigator.clipboard.readText().then((clipboardText) => {
          resolve(clipboardText);
        }).catch((error) => {
          log.error("读取剪贴板内容失败👉", error);
          resolve("");
        });
      }
      function requestPermissionsWithClipboard(resolve) {
        navigator.permissions.query({
          // @ts-ignore
          name: "clipboard-read"
        }).then((permissionStatus) => {
          readClipboardText(resolve);
        }).catch((error) => {
          log.error(
            "申请剪贴板权限失败，尝试直接读取👉",
            error.message ?? error.name ?? error.stack
          );
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
              once: true
            }
          );
        }
      });
    },
    /**
     * html转义
     * @param unsafe
     */
    escapeHtml(unsafe) {
      return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/©/g, "&copy;").replace(/®/g, "&reg;").replace(/™/g, "&trade;").replace(/→/g, "&rarr;").replace(/←/g, "&larr;").replace(/↑/g, "&uarr;").replace(/↓/g, "&darr;").replace(/—/g, "&mdash;").replace(/–/g, "&ndash;").replace(/…/g, "&hellip;").replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br>").replace(/\r/g, "<br>").replace(/\n/g, "<br>").replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
    }
  };
  const GM_RESOURCE_MAPPING = {
    Viewer: {
      keyName: "ViewerCSS",
      url: "https://fastly.jsdelivr.net/npm/viewerjs@latest/dist/viewer.min.css"
    }
  };
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
  const utils = Utils.noConflict();
  const domUtils = DOMUtils.noConflict();
  const __pops = pops;
  const log = new utils.Log(
    _GM_info,
    _unsafeWindow.console || _monkeyWindow.console
  );
  let SCRIPT_NAME = _GM_info?.script?.name || void 0;
  pops.config.Utils.AnyTouch();
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
            return Panel.getValue(
              PanelSettingConfig.qmsg_config_position.key,
              PanelSettingConfig.qmsg_config_position.defaultValue
            );
          }
        },
        maxNums: {
          get() {
            return Panel.getValue(
              PanelSettingConfig.qmsg_config_maxnums.key,
              PanelSettingConfig.qmsg_config_maxnums.defaultValue
            );
          }
        },
        showReverse: {
          get() {
            return Panel.getValue(
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
        if ($ele?.classList?.contains("qmsg-shadow-container")) {
          return false;
        }
        if ($ele?.closest("qmsg") && $ele.getRootNode() instanceof ShadowRoot) {
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
  const httpx = new utils.Httpx({
    xmlHttpRequest: _GM_xmlhttpRequest,
    logDetails: DEBUG
  });
  httpx.interceptors.request.use((data) => {
    return data;
  });
  httpx.interceptors.response.use(void 0, (data) => {
    log.error("拦截器-请求错误", data);
    if (data.type === "onabort") {
      Qmsg.warning("请求取消", { consoleLogContent: true });
    } else if (data.type === "onerror") {
      Qmsg.error("请求异常", { consoleLogContent: true });
    } else if (data.type === "ontimeout") {
      Qmsg.error("请求超时", { consoleLogContent: true });
    } else {
      Qmsg.error("其它错误", { consoleLogContent: true });
    }
    return data;
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
  const addStyle = utils.addStyle.bind(utils);
  document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);
  new utils.GM_Cookie();
  const _SCRIPT_NAME_ = SCRIPT_NAME || "小红书优化";
  const __viewer = Viewer;
  const XHS_BASE_URL = "https://edith.xiaohongshu.com";
  const XHSApi = {
    /**
     * 获取页信息
     */
    async getPageInfo(note_id, cursor = "", xsec_token = "", top_comment_id = "", image_formats = "jpg,webp") {
      const Api = `/api/sns/web/v2/comment/page`;
      const SearchParamsData = {
        note_id,
        cursor,
        top_comment_id,
        image_formats,
        xsec_token
      };
      const SearchParams = Api + "?" + utils.toSearchParamsStr(SearchParamsData);
      let getResp = await httpx.get(`${XHS_BASE_URL}${SearchParams}`, {
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent": utils.getRandomPCUA(),
          Origin: "https://www.xiaohongshu.com",
          Referer: "https://www.xiaohongshu.com/"
          // "X-S": signInfo.xs,
          // "X-T": signInfo.xt,
        }
      });
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      log.info(["获取页信息", data]);
      if (data["code"] === 0 || data["success"]) {
        return data["data"];
      } else if (data["code"] === -101) {
        return;
      } else {
        Qmsg.error(data["msg"]);
      }
    },
    /**
     * 获取楼中楼页信息
     */
    async getLzlPageInfo(note_id = "", root_comment_id = "", num = 10, cursor = "", image_formats = "jpg,webp,avif", top_comment_id = "") {
      const Api = `/api/sns/web/v2/comment/sub/page`;
      let ApiData = {
        note_id,
        root_comment_id,
        num,
        cursor,
        image_formats,
        top_comment_id
      };
      Api + "?" + utils.toSearchParamsStr(ApiData);
      let url = `${XHS_BASE_URL}${Api}?${utils.toSearchParamsStr(ApiData)}`;
      let getResp = await httpx.get(url, {
        headers: {
          Accept: "application/json, text/plain, */*",
          "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Host: "edith.xiaohongshu.com",
          Origin: "https://www.xiaohongshu.com",
          Referer: "https://www.xiaohongshu.com/"
          // "X-S": signInfo.xs,
          // "X-T": signInfo.xt,
          // "X-S-Common": signInfo.xsCommon,
          // "X-B3-Traceid": signInfo.traceId,
        },
        onerror() {
        }
      });
      if (!getResp.status) {
        if (getResp.data.status === 406 && utils.isNotNull(getResp.data.responseText)) {
          let errorData = utils.toJSON(getResp.data.responseText);
          if (errorData["code"] == -1) {
            Qmsg.error("获取楼中楼信息失败，验证x-s、x-t、x-s-common失败");
          } else {
            Qmsg.error("获取楼中楼信息失败");
          }
        } else {
          Qmsg.error("请求异常");
        }
        log.error(["获取楼中楼信息失败", getResp]);
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      log.info(["获取楼中楼页信息", data]);
      if (data["code"] === 0 || data["success"]) {
        return data["data"];
      } else {
        Qmsg.error(data["msg"]);
      }
    },
    /**
     * 获取搜索推荐内容
     * @param searchText
     */
    async getSearchRecommend(searchText) {
      let getResp = await httpx.get(
        `https://edith.xiaohongshu.com/api/sns/web/v1/search/recommend?keyword=${searchText}`,
        {
          fetch: true
        }
      );
      if (!getResp.status) {
        return;
      }
      let data = utils.toJSON(getResp.data.responseText);
      if (!(data.success || data.code === 1e3)) {
        return;
      }
      return data.data.sug_items;
    }
  };
  const Hook = {
    $data: {
      /** 存储 document.addEventListener 的hook实例 */
      document_addEventListener: [],
      /** 存储 Element.prototype.addEventListener 的hook实例 */
      element_addEventListener: [],
      /** 存储 setTimeout 的hook实例 */
      setTimeout: [],
      /** 存储 setInterval 的hook实例 */
      setInterval: [],
      /** 存储 Function.prototype.apply 的hook实例 */
      function_apply: [],
      /** 存储 Function.prototype.call 的hook实例 */
      function_call: [],
      /** 存储 Object.defineProperty 的hook实例 */
      defineProperty: []
    },
    /**
     * 劫持 document.addEventListener
     * @param handler
     */
    document_addEventListener(handler) {
      this.$data.document_addEventListener.push(handler);
      log.info("document.addEventListener hook新增劫持判断回调");
      if (this.$data.document_addEventListener.length > 1) {
        return;
      }
      const that = this;
      let weakMap = /* @__PURE__ */ new WeakMap();
      const originAddEventListener = _unsafeWindow.document.addEventListener;
      const originRemoveEventListener = _unsafeWindow.document.removeEventListener;
      _unsafeWindow.document.addEventListener = function(...args) {
        let target = this;
        let eventName = args[0];
        let listener = args[1];
        let options = args[2];
        for (let index = 0; index < that.$data.document_addEventListener.length; index++) {
          const callback = that.$data.document_addEventListener[index];
          const result = Reflect.apply(callback, this, [
            target,
            eventName,
            listener,
            options
          ]);
          if (typeof result === "function") {
            args[1] = result;
            weakMap.set(listener, {
              eventName,
              fn: result,
              options
            });
            break;
          } else if (typeof result === "boolean" && !result) {
            return;
          }
        }
        return Reflect.apply(originAddEventListener, this, args);
      };
      _unsafeWindow.document.removeEventListener = function(...args) {
        let eventName = args[0];
        let listener = args[1];
        let options = args[2];
        if (weakMap.has(listener)) {
          const {
            eventName: __eventName__,
            fn: __listener__,
            options: __options__
          } = weakMap.get(listener);
          let flag = false;
          if (eventName === __eventName__) {
            if (typeof options === "boolean" && options === __options__) {
              flag = true;
            } else if (typeof options === "object" && typeof __options__ === "object" && options["capture"] === __options__["capture"]) {
              flag = true;
            } else if (options == options) {
              flag = true;
            }
          }
          if (flag) {
            args[1] = __listener__;
          }
        }
        return Reflect.apply(originRemoveEventListener, this, args);
      };
    },
    /**
     * 劫持 Element.property.addEventListener
     * @param handler
     */
    element_addEventListener(handler) {
      this.$data.element_addEventListener.push(handler);
      log.info("Element.prototype.addEventListener hook新增劫持判断回调");
      if (this.$data.element_addEventListener.length > 1) {
        return;
      }
      const that = this;
      let weakMap = /* @__PURE__ */ new WeakMap();
      const originAddEventListener = _unsafeWindow.Element.prototype.addEventListener;
      const originRemoveEventListener = _unsafeWindow.Element.prototype.removeEventListener;
      _unsafeWindow.Element.prototype.addEventListener = function(...args) {
        let target = this;
        let eventName = args[0];
        let listener = args[1];
        let options = args[2];
        for (let index = 0; index < that.$data.element_addEventListener.length; index++) {
          const callback = that.$data.element_addEventListener[index];
          const result = Reflect.apply(callback, this, [
            target,
            eventName,
            listener,
            options
          ]);
          if (typeof result === "function") {
            args[1] = result;
            weakMap.set(listener, {
              eventName,
              fn: result,
              options
            });
            break;
          } else if (typeof result === "boolean" && !result) {
            return;
          }
        }
        return Reflect.apply(originAddEventListener, this, args);
      };
      _unsafeWindow.Element.prototype.removeEventListener = function(...args) {
        let eventName = args[0];
        let listener = args[1];
        let options = args[2];
        if (weakMap.has(listener)) {
          const {
            eventName: __eventName__,
            fn: __listener__,
            options: __options__
          } = weakMap.get(listener);
          let flag = false;
          if (__eventName__ === eventName) {
            if (typeof options === "boolean" && options === __options__) {
              flag = true;
            } else if (typeof options === "object" && typeof __options__ === "object" && options["capture"] === __options__["capture"]) {
              flag = true;
            } else if (options == __options__) {
              flag = true;
            }
          }
          if (flag) {
            args[1] = __listener__;
          }
        }
        return Reflect.apply(originRemoveEventListener, this, args);
      };
    },
    /**
     * 劫持 window.setTimeout
     *
     * @param handler
     */
    setTimeout(handler) {
      this.$data.setTimeout.push(handler);
      log.info("window.setTimeout hook新增劫持");
      if (this.$data.setTimeout.length > 1) {
        return;
      }
      const that = this;
      let originSetTimeout = _unsafeWindow.setTimeout;
      _unsafeWindow.setTimeout = function(...args) {
        let fn = args[0];
        let timeout = args[1];
        for (let index = 0; index < that.$data.setTimeout.length; index++) {
          const item = that.$data.setTimeout[index];
          const result = item(fn, timeout);
          if (typeof result === "boolean" && !result) {
            return;
          }
        }
        return Reflect.apply(originSetTimeout, this, args);
      };
    },
    /**
     * 劫持 window.setInterval
     * @param handler
     */
    setInterval(handler) {
      this.$data.setInterval.push(handler);
      log.info("window.setInterval hook新增劫持");
      if (this.$data.setInterval.length > 1) {
        return;
      }
      const that = this;
      let originSetInterval = _unsafeWindow.setInterval;
      _unsafeWindow.setInterval = function(...args) {
        let fn = args[0];
        let timeout = args[1];
        for (let index = 0; index < that.$data.setInterval.length; index++) {
          const item = that.$data.setInterval[index];
          const result = item(fn, timeout);
          if (typeof result === "boolean" && !result) {
            return;
          }
        }
        return Reflect.apply(originSetInterval, this, args);
      };
    },
    /**
     * 劫持 Function.prototype.apply
     * @param handler
     */
    function_apply(handler) {
      this.$data.function_apply.push(handler);
      log.info("Function.prototype.apply hook新增劫持");
      if (this.$data.function_apply.length > 1) {
        return;
      }
      const that = this;
      let originApply = _unsafeWindow.Function.prototype.apply;
      _unsafeWindow.Function.prototype.apply = function(...args) {
        let thisArg = args[0];
        let argArray = args[1];
        let fn = this;
        for (let index = 0; index < that.$data.function_apply.length; index++) {
          let item = that.$data.function_apply[index];
          if (typeof item.paramsHandler === "function") {
            let handlerResult = item.paramsHandler(fn, thisArg, argArray);
            if (handlerResult != null) {
              if (handlerResult.args) {
                args[0] = handlerResult.args.thisArg;
                args[1] = handlerResult.args.argArray;
                fn = handlerResult.args.fn;
              }
              if (handlerResult.preventDefault) {
                if ("result" in handlerResult) {
                  return handlerResult.result;
                }
                return;
              }
              break;
            }
          }
        }
        let result = originApply.call(fn, ...args);
        for (let index = 0; index < that.$data.function_apply.length; index++) {
          let item = that.$data.function_apply[index];
          if (typeof item.returnsHandler === "function") {
            let handlerResult = item.returnsHandler(fn, args[0], args[1], result);
            result = handlerResult.result;
          }
        }
        return result;
      };
    },
    /**
     * 劫持 Function.prototype.call
     * @param handler
     */
    function_call(handler) {
      this.$data.function_call.push(handler);
      log.info("Function.prototype.call hook新增劫持");
      if (this.$data.function_call.length > 1) {
        return;
      }
      const that = this;
      let originCall = _unsafeWindow.Function.prototype.call;
      _unsafeWindow.Function.prototype.call = function(...args) {
        let thisArg = args[0];
        let argArray = args.slice(1);
        let fn = this;
        for (let index = 0; index < that.$data.function_call.length; index++) {
          let item = that.$data.function_call[index];
          if (typeof item.paramsHandler === "function") {
            let handlerResult = item.paramsHandler(fn, thisArg, argArray);
            if (handlerResult != null) {
              if (handlerResult.args) {
                args[0] = handlerResult.args.thisArg;
                args.splice(1, argArray.length, ...handlerResult.args.argArray);
                fn = handlerResult.args.fn;
              }
              if (handlerResult.preventDefault) {
                if ("result" in handlerResult) {
                  return handlerResult.result;
                }
                return;
              }
              break;
            }
          }
        }
        let result = originCall.apply(fn, args);
        for (let index = 0; index < that.$data.function_call.length; index++) {
          let item = that.$data.function_call[index];
          if (typeof item.returnsHandler === "function") {
            let handlerResult = item.returnsHandler(fn, args[0], args[1], result);
            result = handlerResult.result;
          }
        }
        return result;
      };
    },
    /**
     * 劫持 Object.defineProperty
     * @package handler
     */
    defineProperty(handler) {
      this.$data.defineProperty.push(handler);
      log.info("Object.defineProperty hook新增劫持");
      if (this.$data.defineProperty.length > 1) {
        return;
      }
      const that = this;
      let originDefineProperty = _unsafeWindow.Object.defineProperty;
      _unsafeWindow.Object.defineProperty = function(...args) {
        let target = args[0];
        let key = args[1];
        let attributes = args[2];
        for (let index = 0; index < that.$data.defineProperty.length; index++) {
          const item = that.$data.defineProperty[index];
          const result = item(target, key, attributes);
          if (result != null) {
            args[0] = result.target;
            args[1] = result.key;
            args[2] = result.attributes;
            break;
          }
        }
        return Reflect.apply(originDefineProperty, this, args);
      };
    },
    /**
     * 劫持webpack
     * @param webpackName 当前全局变量的webpack名
     * @param mainCoreData 需要劫持的webpack的顶部core
     * 例如：(window.webpackJsonp = window.webpackJsonp || []).push([["core:0"],{}])
     * 此时mainCoreData是["core:0"]
     * @param handler 如果mainCoreData匹配上，则调用此回调函数，替换的话把传入的值进行处理后再返回它就行
     */
    window_webpack(webpackName = "webpackJsonp", mainCoreData, handler) {
      let originWebPack = void 0;
      _unsafeWindow.Object.defineProperty(_unsafeWindow, webpackName, {
        get() {
          return originWebPack;
        },
        set(newValue) {
          log.success("成功劫持webpack，当前webpack名：" + webpackName);
          originWebPack = newValue;
          const originWebPackPush = originWebPack.push;
          originWebPack.push = function(...args) {
            let _mainCoreData = args[0][0];
            if (mainCoreData == _mainCoreData || Array.isArray(mainCoreData) && Array.isArray(_mainCoreData) && JSON.stringify(mainCoreData) === JSON.stringify(_mainCoreData)) {
              Object.keys(args[0][1]).forEach((keyName) => {
                let originSwitchFunc = args[0][1][keyName];
                args[0][1][keyName] = function(..._args) {
                  let result = originSwitchFunc.call(this, ..._args);
                  _args[0] = handler(_args[0]);
                  return result;
                };
              });
            }
            return Reflect.apply(originWebPackPush, this, args);
          };
        }
      });
    }
  };
  const XHS_Hook = {
    /**
     * 劫持webpack
     * 笔记的
     */
    webpackChunkranchi() {
      let originObject = void 0;
      let webpackName = "webpackChunkranchi";
      Object.defineProperty(_unsafeWindow, webpackName, {
        get() {
          return originObject;
        },
        set(newValue) {
          originObject = newValue;
          const oldPush = originObject.push;
          originObject.push = function(...args) {
            args[0][0];
            if (typeof args[0][1] === "object") {
              Object.keys(args[0][1]).forEach((keyName, index) => {
                if (typeof args[0][1][keyName] === "function" && args[0][1][keyName].toString().startsWith(
                  "function(e,n,t){t.d(n,{Z:function(){return y}});"
                ) && args[0][1][keyName].toString().includes("jumpToApp") && Panel.getValue("little-red-book-hijack-webpack-scheme")) {
                  let oldFunc = args[0][1][keyName];
                  args[0][1][keyName] = function(...args_1) {
                    log.success(["成功劫持scheme唤醒", args_1]);
                    let oldD = args_1[2].d;
                    args_1[2].d = function(...args_2) {
                      if (args_2.length === 2 && typeof args_2[1]?.["Z"] === "function") {
                        let oldZ = args_2[1]["Z"];
                        if (oldZ.toString() === "function(){return y}") {
                          args_2[1]["Z"] = function(...args_3) {
                            let result = oldZ.call(this, ...args_3);
                            if (typeof result === "function" && result.toString().includes("jumpToApp")) {
                              return function() {
                                return {
                                  jumpToApp(data) {
                                    log.success(["拦截唤醒", data]);
                                    if (data["deeplink"]?.startsWith(
                                      "xhsdiscover://user/"
                                    )) {
                                      let userId = data["deeplink"].replace(
                                        /^xhsdiscover:\/\/user\//,
                                        ""
                                      );
                                      let userHomeUrl = window.location.origin + `/user/profile/${userId}`;
                                      window.open(userHomeUrl, "_blank");
                                    }
                                  }
                                };
                              };
                            }
                            return result;
                          };
                        }
                      }
                      return oldD.call(this, ...args_2);
                    };
                    return oldFunc.call(this, ...args_1);
                  };
                }
              });
            }
            return oldPush.call(this, ...args);
          };
        }
      });
    },
    /**
     * 劫持vue，恢复属性__Ivue__
     */
    hookVue() {
      const assign = _unsafeWindow.Object.assign;
      let isRun = false;
      _unsafeWindow.Object.assign = function(...args) {
        if (args.length == 2 && args[1]?.render !== void 0 && !isRun) {
          let b = args[1];
          const originRender = b.render;
          let isInject = false;
          b.render = function(...args2) {
            if (!isInject) {
              args2[5]["_"].appContext.mixins.push({
                mounted() {
                  this.$el["__Ivue__"] = this;
                }
              });
              isInject = true;
            }
            return originRender.call(this, ...args2);
          };
          isRun = true;
        }
        return Reflect.apply(assign, this, args);
      };
    },
    /**
     * 劫持唤醒
     */
    setTimeout() {
      Hook.setTimeout((fn) => {
        let fnStr = fn.toString();
        if (fnStr === "function(){r()}" || fnStr === "function(){u()}") {
          log.success(["成功劫持setTimeout唤醒", fn]);
          return false;
        }
      });
    },
    /**
     * 劫持唤醒
     */
    call() {
      Hook.function_call({
        paramsHandler(fn, thisArg, argArray) {
          fn.toString();
          if (argArray[0]?.label === 0 && Array.isArray(argArray[0]?.ops) && Array.isArray(argArray[0]?.trys) && typeof argArray[0]?.sent === "function") {
            log.success([`成功劫持call唤醒`, fn, thisArg, argArray]);
            return {
              args: {
                fn,
                thisArg,
                // 置空
                argArray: []
              }
            };
          } else if (typeof thisArg === "string" && thisArg.startsWith("https://oia.xiaohongshu.com/oia")) {
            log.success([`成功劫持call跳转下载页面`, fn, thisArg, argArray]);
            return {
              preventDefault: true
            };
          }
        }
      });
    }
  };
  const M_XHSArticleBlock = {
    /**
     * 允许复制
     */
    allowCopy() {
      log.info("允许复制");
      return addStyle(
        /*css*/
        `
        *{
            -webkit-user-select: unset;
            user-select: unset;
        }
        `
      );
    },
    /**
     * 屏蔽底部搜索发现
     */
    blockBottomSearchFind() {
      log.info("屏蔽底部搜索发现");
      return CommonUtil.addBlockCSS(
        ".hotlist-container",
        /* 一大块空白区域 */
        ".safe-area-bottom.margin-placeholder"
      );
    },
    /**
     * 屏蔽底部工具栏
     */
    blockBottomToorBar() {
      log.info("屏蔽底部工具栏");
      return CommonUtil.addBlockCSS(".engage-bar-container");
    },
    /**
     * 屏蔽视频笔记的作者热门笔记
     */
    blockAuthorHotNote() {
      log.info("屏蔽视频笔记的作者热门笔记");
      return CommonUtil.addBlockCSS(
        ".user-notes-box.user-notes-clo-layout-container"
      );
    },
    /**
     * 屏蔽视频笔记的热门推荐
     */
    blockHotRecommendNote() {
      log.info("屏蔽视频笔记的热门推荐");
      return CommonUtil.addBlockCSS("#new-note-view-container .recommend-box");
    }
  };
  const M_XHSArticleVideo = {
    /**
     * 优化视频笔记的描述（可滚动）
     */
    optimizeVideoNoteDesc() {
      log.info("优化视频笔记的描述（可滚动）");
      return addStyle(
        /*css*/
        `
    .author-box .author-desc-wrapper .author-desc{
      max-height: 70px !important;
      overflow: auto !important;
    }
    /* 展开按钮 */
    .author-box .author-desc-wrapper .author-desc .author-desc-trigger{
      display: none !important;
    }`
      );
    }
  };
  const blockCSS$1 = "/* 底部的App内打开 */\r\n.bottom-button-box,\r\n/* 顶部的打开看看 */\r\n.nav-bar-box {\r\n  display: none !important;\r\n}\r\n";
  const M_XHSArticle = {
    init() {
      addStyle(blockCSS$1);
      if (Panel.getValue("little-red-book-hijack-webpack-mask") || Panel.getValue("little-red-book-hijack-webpack-scheme")) {
        log.info("劫持webpack");
        XHS_Hook.setTimeout();
        XHS_Hook.call();
      }
      Panel.execMenuOnce("little-red-book-shieldBottomSearchFind", () => {
        return M_XHSArticleBlock.blockBottomSearchFind();
      });
      Panel.execMenuOnce("little-red-book-shieldBottomToorBar", () => {
        return M_XHSArticleBlock.blockBottomToorBar();
      });
      Panel.execMenuOnce("little-red-book-optimizeImageBrowsing", () => {
        M_XHSArticle.optimizeImageBrowsing();
      });
      Panel.execMenuOnce("little-red-book-optimizeVideoNoteDesc", () => {
        return M_XHSArticleVideo.optimizeVideoNoteDesc();
      });
      Panel.execMenuOnce("little-red-book-shieldAuthorHotNote", () => {
        return M_XHSArticleBlock.blockAuthorHotNote();
      });
      Panel.execMenuOnce("little-red-book-shieldHotRecommendNote", () => {
        return M_XHSArticleBlock.blockHotRecommendNote();
      });
      domUtils.ready(function() {
        Panel.execMenu("little-red-book-optimizeCommentBrowsing", () => {
          M_XHSArticle.optimizeCommentBrowsing();
        });
      });
    },
    /**
     * 优化评论浏览
     */
    optimizeCommentBrowsing() {
      log.info("优化评论浏览");
      const Comments = {
        QmsgLoading: void 0,
        scrollFunc: void 0,
        noteId: "",
        xsec_token: "",
        noteData: {},
        commentData: {},
        emojiMap: {},
        emojiNameList: [],
        currentCursor: void 0,
        commentContainer: void 0,
        init() {
          this.emojiMap = utils.toJSON(_unsafeWindow.localStorage.getItem("redmoji"))?.["redmojiMap"] || {};
          this.emojiNameList = Object.keys(this.emojiMap);
          this.scrollFunc = new utils.LockFunction(this.scrollEvent, this);
          const __INITIAL_STATE__ = (
            // @ts-ignore
            _unsafeWindow["__INITIAL_STATE__"]
          );
          const noteData = __INITIAL_STATE__.noteData ?? __INITIAL_STATE__.data.noteData;
          Comments.noteData = noteData.data.noteData;
          Comments.commentData = noteData.data.commentData;
          Comments.noteId = Comments.noteData.noteId;
          Comments.xsec_token = __INITIAL_STATE__.noteData.routeQuery.xsec_token;
          log.info(["笔记数据", Comments.noteData]);
          log.info(["评论数据", Comments.commentData]);
        },
        /**
         *
         * @param data
         */
        getCommentHTML(data) {
          return (
            /*html*/
            `
				<div class="little-red-book-comments-avatar">
						<a target="_blank" href="/user/profile/${data.user_id}">
							<img src="${data.user_avatar}" crossorigin="anonymous">
						</a>
				</div>
				<div class="little-red-book-comments-content-wrapper">
					<div class="little-red-book-comments-author-wrapper">
						<div class="little-red-book-comments-author">
							<a href="/user/profile/${data.user_id}" class="little-red-book-comments-author-name" target="_blank">
								${data.user_nickname}
							</a>
						</div>
						<div class="little-red-book-comments-content">
							${data.content}
						</div>
						<div class="little-red-book-comments-info">
							<div class="little-red-book-comments-info-date">
								<span class="little-red-book-comments-create-time">${utils.formatTime(
            data.create_time
          )}</span>
								<span class="little-red-book-comments-location">${data.ip_location}</span>
							</div>
						</div>
					</div>
				</div>
            `
          );
        },
        /**
         * 获取内容元素
         * @param {object} data
         * @returns
         */
        getCommentElement(data) {
          let content = data["content"];
          let create_time = data["create_time"] || parseInt(data["time"]);
          let id = data["id"];
          let ip_location = data["ip_location"] || data["ipLocation"];
          let sub_comment_has_more = data["sub_comment_has_more"];
          let sub_comment_count = parseInt(data["sub_comment_count"]) || 0;
          let sub_comment_cursor = data["sub_comment_cursor"];
          let sub_comments = data["sub_comments"] || data["subComments"];
          let user_avatar = (data["user_info"] || data["user"])["image"];
          let user_nickname = (data["user_info"] || data["user"])["nickname"];
          let user_id = data?.["user_info"]?.["user_id"] || data?.["user"]?.["userId"];
          content = Comments.converContent(content);
          let commentItemElement = domUtils.createElement("div", {
            className: "little-red-book-comments-item",
            innerHTML: (
              /*html*/
              `
					<div class="little-red-book-comments-parent">
					${Comments.getCommentHTML({
              user_id,
              user_avatar,
              user_nickname,
              content,
              create_time,
              ip_location
            })}
					</div>
					`
            )
          });
          if (sub_comment_has_more && Array.isArray(sub_comments)) {
            sub_comments.forEach((subCommentInfo) => {
              let subCommentElement = domUtils.createElement("div", {
                className: "little-red-book-comments-reply-container",
                innerHTML: Comments.getCommentHTML({
                  user_id: subCommentInfo["user_info"]["user_id"],
                  user_avatar: subCommentInfo["user_info"]["image"],
                  user_nickname: subCommentInfo["user_info"]["nickname"],
                  content: Comments.converContent(subCommentInfo["content"]),
                  create_time: subCommentInfo["create_time"],
                  ip_location: subCommentInfo["ip_location"]
                })
              });
              commentItemElement.appendChild(subCommentElement);
            });
            if (sub_comment_count !== sub_comments.length) {
              let endReplyCount = sub_comment_count - sub_comments.length;
              let lzlCursor = sub_comment_cursor;
              let showMoreElement = domUtils.createElement("div", {
                className: "little-red-book-comments-reply-show-more",
                innerText: `展开 ${endReplyCount} 条回复`
              });
              async function showMoreEvent() {
                let QmsgLoading = Qmsg.loading("加载中，请稍后...");
                let pageInfo2 = await XHSApi.getLzlPageInfo(
                  Comments.noteId,
                  id,
                  10,
                  lzlCursor,
                  void 0
                );
                QmsgLoading.close();
                if (!pageInfo2) {
                  return;
                }
                lzlCursor = pageInfo2.cursor;
                endReplyCount = endReplyCount - pageInfo2.comments.length;
                showMoreElement.innerText = `展开 ${endReplyCount} 条回复`;
                pageInfo2.comments.forEach((subCommentInfo) => {
                  let subCommentElement = domUtils.createElement("div", {
                    className: "little-red-book-comments-reply-container",
                    innerHTML: Comments.getCommentHTML({
                      user_id: subCommentInfo["user_info"]["user_id"],
                      user_avatar: subCommentInfo["user_info"]["image"],
                      user_nickname: subCommentInfo["user_info"]["nickname"],
                      content: Comments.converContent(subCommentInfo["content"]),
                      create_time: subCommentInfo["create_time"],
                      ip_location: subCommentInfo["ip_location"]
                    })
                  });
                  domUtils.before(showMoreElement, subCommentElement);
                });
                if (!pageInfo2.has_more) {
                  domUtils.off(
                    showMoreElement,
                    "click",
                    void 0,
                    showMoreEvent,
                    {
                      capture: true
                    }
                  );
                  showMoreElement.remove();
                }
              }
              domUtils.on(showMoreElement, "click", void 0, showMoreEvent, {
                capture: true
              });
              commentItemElement.appendChild(showMoreElement);
            }
          }
          return commentItemElement;
        },
        /**
         * 转换内容字符串中的emoji
         */
        converContent(content) {
          Comments.emojiNameList.forEach((emojiName) => {
            if (content.includes(emojiName)) {
              content = content.replaceAll(
                emojiName,
                /*html*/
                `<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${Comments.emojiMap[emojiName]}">`
              );
            }
          });
          return content;
        },
        /**
         * 滚动事件
         */
        async scrollEvent() {
          if (!utils.isNearBottom(window.innerHeight / 3)) {
            return;
          }
          if (this.QmsgLoading == null) {
            this.QmsgLoading = Qmsg.loading("加载中，请稍后...");
          }
          let pageInfo2 = await XHSApi.getPageInfo(
            Comments.noteId,
            Comments.currentCursor,
            Comments.xsec_token
          );
          if (this.QmsgLoading) {
            this.QmsgLoading.close();
            this.QmsgLoading = void 0;
          }
          if (!pageInfo2) {
            return;
          }
          Comments.currentCursor = pageInfo2.cursor;
          pageInfo2.comments.forEach((commentItem) => {
            let commentItemElement = Comments.getCommentElement(commentItem);
            Comments.commentContainer.appendChild(commentItemElement);
          });
          if (!pageInfo2.has_more) {
            Qmsg.info("已加载全部评论");
            Comments.removeScrollEventListener();
            return;
          }
        },
        /**
         * 添加滚动监听
         */
        addSrollEventListener() {
          log.success("添加滚动监听事件");
          domUtils.on(document, "scroll", void 0, Comments.scrollFunc.run, {
            capture: true,
            once: false,
            passive: true
          });
        },
        /**
         * 移除滚动监听
         */
        removeScrollEventListener() {
          log.success("移除滚动监听事件");
          domUtils.off(document, "scroll", void 0, Comments.scrollFunc.run, {
            capture: true
          });
        }
      };
      utils.waitNode(".narmal-note-container").then(async () => {
        log.info("优化评论浏览-笔记元素出现");
        let noteViewContainer = document.querySelector(
          ".note-view-container"
        );
        let commentContainer = domUtils.createElement("div", {
          className: "little-red-book-comments-container",
          innerHTML: (
            /*html*/
            `
                <style>
                    .little-red-book-comments-parent {
                        position: relative;
                        display: flex;
                        padding: 8px;
                        width: 100%;
                    }
                    
                    .little-red-book-comments-reply-container {
                        position: relative;
                        display: flex;
                        padding: 8px;
                        width: 100%;
                        padding-left: 52px;
                    }
                    .little-red-book-comments-container {
                        background: #fff;
                        position: relative;
                        padding: 8px 8px;
                    }
                    
                    .little-red-book-comments-item {
                        position: relative;
                    }
                    
                    .little-red-book-comments-avatar {
                        flex: 0 0 auto;
                    }
                    
                    .little-red-book-comments-avatar img {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        border-radius: 100%;
                        border: 1px solid rgba(0,0,0,0.08);
                        object-fit: cover;
                        width: 40px;
                        height: 40px;
                    }
                    .little-red-book-comments-content-wrapper {
                        margin-left: 12px;
                        display: flex;
                        flex-direction: column;
                        font-size: 14px;
                        flex-grow: 1;
                    }
                    
                    .little-red-book-comments-author {display: flex;justify-content: space-between;align-items: center;}
                    
                    a.little-red-book-comments-author-name {
                        line-height: 18px;
                        color: rgba(51,51,51,0.6);
                    }
                    
                    .little-red-book-comments-content {
                        margin-top: 4px;
                        line-height: 140%;
                        color: #333;
                    }
                    
                    .little-red-book-comments-info {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        font-size: 12px;
                        line-height: 16px;
                        color: rgba(51,51,51,0.6);
                    }
                    
                    .little-red-book-comments-info-date {
                        margin: 8px 0;
                    }
                    
                    span.little-red-book-comments-location {
                        margin-left: 4px;
                        line-height: 120%;
                    }
                    img.little-red-book-note-content-emoji {
                        margin: 0 1px;
                        height: 16px;
                        transform: translateY(2px);
                        position: relative;
                    }
                    .little-red-book-comments-reply-container .little-red-book-comments-avatar img {
                        width: 24px;
                        height: 24px;
                    }
                    .little-red-book-comments-total{
                        font-size: 14px;
                        color: rgba(51,51,51,0.6);
                        margin-left: 8px;
                        margin-bottom: 12px;
                    }
                    .little-red-book-comments-reply-show-more {
                    padding-left: calc(52px + 24px + 12px);
                    height: 32px;
                    line-height: 32px;
                    color: #13386c;
                    cursor: pointer;
                    font-weight: 500;
                    font-size: 14px;
                    }
                </style>
          `
          )
        });
        Comments.commentContainer = commentContainer;
        Comments.init();
        let totalElement = domUtils.createElement("div", {
          className: "little-red-book-comments-total",
          innerHTML: `共 ${Comments.commentData["commentCount"] ?? Comments.noteData["comments"]} 条评论`
        });
        commentContainer.appendChild(totalElement);
        if (Comments.commentData && Comments.commentData["comments"]) {
          log.info("从固定的评论中加载");
          Comments.commentData["comments"].forEach((commentItem) => {
            let commentItemElement = Comments.getCommentElement(commentItem);
            commentContainer.appendChild(commentItemElement);
          });
        }
        domUtils.append(noteViewContainer, commentContainer);
      });
    },
    /**
     * 优化图片浏览
     */
    optimizeImageBrowsing() {
      log.info("优化图片浏览");
      CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.Viewer);
      function viewIMG(imgSrcList = [], index = 0) {
        let viewerULNodeHTML = "";
        imgSrcList.forEach((item) => {
          viewerULNodeHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
        });
        let viewerULNode = domUtils.createElement("ul", {
          innerHTML: viewerULNodeHTML
        });
        let viewer = new __viewer(viewerULNode, {
          inline: false,
          url: "data-src",
          zIndex: utils.getMaxZIndex() + 100,
          hidden: () => {
            viewer.destroy();
          }
        });
        index = index < 0 ? 0 : index;
        viewer.view(index);
        viewer.zoomTo(1);
        viewer.show();
      }
      domUtils.on(document, "click", ".note-image-box", function(event) {
        let clickElement = event.target;
        let imgElement = clickElement.querySelector("img");
        let imgList = [];
        let imgBoxList = [];
        if (clickElement.closest(".onix-carousel-item")) {
          imgBoxList = Array.from(
            clickElement.closest(".onix-carousel-item").parentElement.querySelectorAll("img")
          );
        } else {
          imgBoxList = [imgElement];
        }
        let index = imgBoxList.findIndex((value) => {
          return value == imgElement;
        });
        imgBoxList.forEach((element) => {
          let imgSrc = element.getAttribute("src") || element.getAttribute("data-src") || element.getAttribute("alt");
          if (imgSrc) {
            imgList.push(imgSrc);
          }
        });
        log.success(["点击浏览图片👉", imgList[index]]);
        viewIMG(imgList, index);
      });
    }
  };
  const M_XHSHome = {
    init() {
      domUtils.ready(() => {
        Panel.execMenuOnce("little-red-book-repariClick", () => {
          M_XHSHome.repariClick();
        });
      });
    },
    /**
     * 修复正确的点击跳转-用户主页
     * 点啥都不好使，都会跳转至下载页面
     */
    repariClick() {
      log.info("修复正确的点击跳转");
      domUtils.on(
        document,
        "click",
        void 0,
        function(event) {
          let clickElement = event.target;
          log.info(["点击的按钮元素", clickElement]);
          if (clickElement?.className?.includes("follow-btn")) {
            log.success("点击-关注按钮");
          } else if (clickElement?.closest("button.reds-button.message-btn")) {
            log.success("点击-私信按钮");
          } else if (clickElement?.closest("div.reds-tab-item")) {
            log.success("点击-笔记/收藏按钮");
          } else if (clickElement?.closest("section.reds-note-card")) {
            log.success("点击-笔记卡片");
            let sectionElement = clickElement?.closest(
              "section.reds-note-card"
            );
            let note_id = sectionElement.getAttribute("id") || utils.toJSON(sectionElement.getAttribute("impression"))?.["noteTarget"]?.["value"]?.["noteId"];
            if (note_id) {
              window.open(
                `https://www.xiaohongshu.com/discovery/item/${clickElement?.closest("section.reds-note-card")?.getAttribute("id")}`,
                "_blank"
              );
            } else {
              Qmsg.error("获取笔记note_id失败");
            }
          }
          utils.preventEvent(event);
          return false;
        },
        {
          capture: true
        }
      );
    }
  };
  const M_XHS = {
    init() {
      Panel.execMenuOnce("little-red-book-shieldAd", () => {
        log.info("注入默认屏蔽CSS");
        return addStyle(blockCSS$2);
      });
      Panel.execMenuOnce("little-red-book-allowCopy", () => {
        return M_XHS.allowCopy();
      });
      if (ScriptRouter.isArticle()) {
        M_XHSArticle.init();
      } else if (ScriptRouter.isUserHome()) {
        M_XHSHome.init();
      }
    },
    /**
     * 允许复制
     */
    allowCopy() {
      log.info("允许复制文字");
      return addStyle(
        /*css*/
        `
        *{
            -webkit-user-select: unset !important;
            user-select: unset !important;
        }
        `
      );
    }
  };
  const blockCSS = "";
  const XHSBlock = {
    init() {
      Panel.execMenuOnce("pc-xhs-shieldAd", () => {
        return addStyle(blockCSS);
      });
      Panel.execMenuOnce("pc-xhs-shield-select-text-search-position", () => {
        return this.blockSelectTextVisibleSearchPosition();
      });
      Panel.execMenuOnce("pc-xhs-shield-topToolbar", () => {
        return this.blockTopToolbar();
      });
      domUtils.ready(() => {
        Panel.execMenuOnce("pc-xhs-shield-login-dialog", () => {
          this.blockLoginContainer();
        });
      });
    },
    /**
     * 屏蔽登录弹窗显示
     */
    blockLoginContainer() {
      log.info("添加屏蔽登录弹窗CSS，监听登录弹窗出现");
      CommonUtil.addBlockCSS(".login-container");
      utils.mutationObserver(document.body, {
        config: {
          subtree: true,
          childList: true
        },
        callback: () => {
          let $close = document.querySelector(
            ".login-container .icon-btn-wrapper"
          );
          if ($close) {
            $close.click();
            log.success("登录弹窗出现，关闭");
          }
        }
      });
    },
    /**
     * 屏蔽选择文字弹出的搜索提示
     */
    blockSelectTextVisibleSearchPosition() {
      log.info("屏蔽选择文字弹出的搜索提示");
      return CommonUtil.addBlockCSS(".search-position");
    },
    /**
     * 【屏蔽】顶部工具栏
     */
    blockTopToolbar() {
      log.info("【屏蔽】顶部工具栏");
      return [
        CommonUtil.addBlockCSS("#headerContainer", ".header-container"),
        addStyle(
          /*css*/
          `
			/* 主内容去除padding */
			#mfContainer{
				padding-top: 0 !important;
			}
			.outer-link-container{
				margin-top: 0 !important;
				height: 100vh !important;
				padding: 30px 0;
			}
			#noteContainer{
				height: 100%;
			}
			`
        )
      ];
    }
  };
  const XHSUrlApi = {
    /**
     * 获取搜索链接
     * @param searchText 
     * @returns 
     */
    getSearchUrl(searchText) {
      return `https://www.xiaohongshu.com/search_result?keyword=${searchText}&source=web_explore_feed`;
    }
  };
  const VueUtils = {
    /**
     * 获取vue2实例
     * @param $el
     */
    getVue($el) {
      if ($el == null) {
        return;
      }
      return $el["__vue__"] || $el["__Ivue__"] || $el["__IVue__"];
    },
    /**
     * 获取vue3实例
     * @param $el
     */
    getVue3($el) {
      if ($el == null) {
        return;
      }
      return $el["__vueParentComponent"];
    },
    /**
     * 等待vue属性并进行设置
     * @param $el 目标对象
     * @param checkOption 需要设置的配置
     */
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
          log.info(needSetOption.msg);
        }
        function checkTarget() {
          let $targetEl = getTarget();
          if ($targetEl == null) {
            return {
              status: false,
              isTimeout: true,
              inst: null,
              $el: $targetEl
            };
          }
          let vueInst = VueUtils.getVue($targetEl);
          if (vueInst == null) {
            return {
              status: false,
              isTimeout: false,
              inst: null,
              $el: $targetEl
            };
          }
          let checkResult = needSetOption.check(vueInst, $targetEl);
          checkResult = Boolean(checkResult);
          return {
            status: checkResult,
            isTimeout: false,
            inst: vueInst,
            $el: $targetEl
          };
        }
        utils.waitVueByInterval(
          () => {
            return getTarget();
          },
          () => checkTarget().status,
          250,
          1e4
        ).then((result) => {
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
    /**
     * 观察vue属性的变化
     * @param $el 目标对象
     * @param key 需要观察的属性
     * @param callback 监听回调
     * @param watchConfig 监听配置
     * @param failWait 当检测失败/超时触发该回调
     */
    watchVuePropChange($el, key, callback, watchConfig, failWait) {
      let config = utils.assign(
        {
          immediate: true,
          deep: false
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
          failWait
        });
      });
    },
    /**
     * 前往网址
     * @param $el 包含vue属性的元素
     * @param path 需要跳转的路径
     * @param [useRouter=false] 是否强制使用Vue的Router来进行跳转，默认false
     */
    goToUrl($el, path, useRouter = false) {
      if ($el == null) {
        Qmsg.error("跳转Url: $vueNode为空");
        log.error("跳转Url: $vueNode为空：" + path);
        return;
      }
      let vueInstance = VueUtils.getVue($el);
      if (vueInstance == null) {
        Qmsg.error("获取vue属性失败", { consoleLogContent: true });
        return;
      }
      let $router = vueInstance.$router;
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
            log.info("后退！");
            option.vueInst.$router.back();
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
  const XHS_Article = {
    init() {
      if (Panel.getValue("pc-xhs-search-open-blank-btn") || Panel.getValue("pc-xhs-search-open-blank-keyboard-enter")) {
        this.optimizationSearch();
      }
      Panel.execMenuOnce("pc-xhs-article-fullWidth", () => {
        return this.fullWidth();
      });
    },
    /**
     * 优化搜索
     */
    optimizationSearch() {
      function blankSearchText(searchText, isBlank = true) {
        {
          let $searchText = document.querySelector("#search-input");
          if ($searchText) {
            let searchText2 = $searchText.value;
            let searchUrl = XHSUrlApi.getSearchUrl(searchText2);
            log.info("搜索内容: " + searchText2);
            window.open(searchUrl, isBlank ? "_blank" : "_self");
          } else {
            Qmsg.error("未找到搜索的输入框");
          }
        }
      }
      utils.waitNode("#search-input").then(($searchInput) => {
        $searchInput.placeholder = "搜索小红书";
        Panel.execMenu("pc-xhs-search-open-blank-keyboard-enter", () => {
          domUtils.listenKeyboard(
            $searchInput,
            "keydown",
            (keyName, keyValue, otherCodeList, event) => {
              if (keyName === "Enter" && !otherCodeList.length) {
                log.info("按下回车键");
                utils.preventEvent(event);
                $searchInput.blur();
                blankSearchText();
              }
            }
          );
        });
      });
      utils.waitNode("#search-input + .input-button .search-icon").then(($searchIconBtn) => {
        Panel.execMenu("pc-xhs-search-open-blank-btn", () => {
          domUtils.on(
            $searchIconBtn,
            "click",
            (event) => {
              utils.preventEvent(event);
              log.info("点击搜索按钮");
              blankSearchText();
            },
            {
              capture: true
            }
          );
        });
      });
    },
    /**
     * 笔记宽屏
     */
    fullWidth() {
      log.info("笔记宽屏");
      let noteContainerWidth = Panel.getValue(
        "pc-xhs-article-fullWidth-widthSize",
        90
      );
      return addStyle(
        /*css*/
        `
		.main-container .main-content{
			padding-left: 0 !important;
		}
		.outer-link-container{
			width: 100% !important;
		}
		/* 隐藏左侧工具栏 */
		.main-container .side-bar{
			display: none !important;
		}
		#noteContainer{
			width: ${noteContainerWidth}vw;
		}
		`
      );
    },
    /**
     * 转换笔记发布时间
     */
    transformPublishTime() {
      log.info(`转换笔记发布时间`);
      let lockFn = new utils.LockFunction(() => {
        $$(".note-content:not([data-edit-date])").forEach(
          ($noteContent) => {
            let vueInstance = VueUtils.getVue($noteContent);
            if (!vueInstance) {
              return;
            }
            let note = vueInstance?._?.props?.note;
            if (note == null) {
              return;
            }
            let publishTime = note.time;
            let lastUpdateTime = note.lastUpdateTime;
            let ipLocation = note.ipLocation;
            if (typeof publishTime === "number") {
              let detailTimeLocationInfo = [];
              detailTimeLocationInfo.push(
                `发布：${utils.formatTime(publishTime)}`
              );
              if (typeof lastUpdateTime === "number") {
                detailTimeLocationInfo.push(
                  `修改：${utils.formatTime(lastUpdateTime)}`
                );
              }
              if (typeof ipLocation === "string" && utils.isNotNull(ipLocation)) {
                detailTimeLocationInfo.push(ipLocation);
              }
              let $date = $noteContent.querySelector(".date");
              domUtils.html($date, detailTimeLocationInfo.join("<br>"));
              $noteContent.setAttribute("data-edit-date", "");
            }
          }
        );
      });
      utils.mutationObserver(document, {
        config: {
          subtree: true,
          childList: true
        },
        callback: () => {
          lockFn.run();
        }
      });
    }
  };
  const XHS = {
    init() {
      Panel.execMenuOnce("pc-xhs-hook-vue", () => {
        XHS_Hook.hookVue();
      });
      Panel.execMenuOnce("pc-xhs-allowCopy", () => {
        XHS.allowPCCopy();
      });
      Panel.execMenuOnce("pc-xhs-open-blank-article", () => {
        XHS.openBlankArticle();
      });
      XHSBlock.init();
      Panel.execMenuOnce("pc-xhs-article-showPubsliushTime", () => {
        XHS_Article.transformPublishTime();
      });
      if (ScriptRouter.isArticle()) {
        log.info("Router: 笔记页面");
        XHS_Article.init();
      }
    },
    /**
     * 允许复制
     */
    allowPCCopy() {
      log.success("允许复制文字");
      domUtils.on(
        _unsafeWindow,
        "copy",
        void 0,
        function(event) {
          utils.preventEvent(event);
          let selectText = _unsafeWindow.getSelection();
          if (selectText) {
            utils.setClip(selectText.toString());
          } else {
            log.error("未选中任何内容");
          }
          return false;
        },
        {
          capture: true
        }
      );
    },
    /**
     * 新标签页打开文章
     */
    openBlankArticle() {
      log.success("新标签页打开文章");
      domUtils.on(
        document,
        "click",
        ".feeds-container .note-item",
        function(event) {
          utils.preventEvent(event);
          let $click = event.target;
          let $url = $click.querySelector("a.cover[href]");
          let url = $url?.href;
          if (url) {
            log.info("跳转文章: " + url);
            let urlInstance = new URL(url);
            urlInstance.pathname = urlInstance.pathname.replace(
              /^\/user\/profile\/[a-z0-9A-Z]+\//i,
              "/discovery/item/"
            );
            url = urlInstance.toString();
            window.open(url, "_blank");
          } else {
            Qmsg.error("未找到文章链接");
          }
        },
        {
          capture: true
        }
      );
    }
  };
  const PanelComponents = {
    $data: {
      __storeApiFn: null,
      get storeApiValue() {
        if (!this.__storeApiFn) {
          this.__storeApiFn = new Utils.Dictionary();
        }
        return this.__storeApiFn;
      }
    },
    /**
     * 获取自定义的存储接口
     * @param type 组件类型
     */
    getStorageApi(type) {
      if (!this.hasStorageApi(type)) {
        return;
      }
      return this.$data.storeApiValue.get(type);
    },
    /**
     * 判断是否存在自定义的存储接口
     * @param type 组件类型
     */
    hasStorageApi(type) {
      return this.$data.storeApiValue.has(type);
    },
    /**
     * 设置自定义的存储接口
     * @param type 组件类型
     * @param storageApiValue 存储接口
     */
    setStorageApi(type, storageApiValue) {
      this.$data.storeApiValue.set(type, storageApiValue);
    },
    /**
     * 初始化组件的存储接口属性
     *
     * @param type 组件类型
     * @param config 组件配置，必须包含prop属性
     * @param storageApiValue 存储接口
     */
    initComponentsStorageApi(type, config, storageApiValue) {
      let propsStorageApi;
      if (this.hasStorageApi(type)) {
        propsStorageApi = this.getStorageApi(type);
      } else {
        propsStorageApi = storageApiValue;
      }
      this.setComponentsStorageApiProperty(config, propsStorageApi);
    },
    /**
     * 设置组件的存储接口属性
     * @param config 组件配置，必须包含prop属性
     * @param storageApiValue 存储接口
     */
    setComponentsStorageApiProperty(config, storageApiValue) {
      Reflect.set(config.props, PROPS_STORAGE_API, storageApiValue);
    }
  };
  const UISelect = function(text, key, defaultValue, data, changeCallback, description) {
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
        let storageApiValue = this.props[PROPS_STORAGE_API];
        return storageApiValue.get(key, defaultValue);
      },
      callback(event, isSelectedValue, isSelectedText) {
        let value = isSelectedValue;
        log.info(`选择：${isSelectedText}`);
        if (typeof changeCallback === "function") {
          let result2 = changeCallback(event, value, isSelectedText);
          if (result2) {
            return;
          }
        }
        let storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      data: selectData
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi(
      "select",
      result,
      {
        get(key2, defaultValue2) {
          return Panel.getValue(key2, defaultValue2);
        },
        set(key2, value) {
          Panel.setValue(key2, value);
        }
      }
    );
    return result;
  };
  const UISwitch = function(text, key, defaultValue, clickCallback, description, afterAddToUListCallBack) {
    let result = {
      text,
      type: "switch",
      description,
      attributes: {},
      props: {},
      getValue() {
        let storageApiValue = this.props[PROPS_STORAGE_API];
        return Boolean(storageApiValue.get(key, defaultValue));
      },
      callback(event, __value) {
        let value = Boolean(__value);
        log.success(`${value ? "开启" : "关闭"} ${text}`);
        let storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      afterAddToUListCallBack
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi(
      "switch",
      result,
      {
        get(key2, defaultValue2) {
          return Panel.getValue(key2, defaultValue2);
        },
        set(key2, value) {
          Panel.setValue(key2, value);
        }
      }
    );
    return result;
  };
  const SettingUI_Common = {
    id: "xhs-panel-config-common",
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
                    "允许复制",
                    "pc-xhs-allowCopy",
                    true,
                    void 0,
                    "可以选择文字并复制"
                  ),
                  UISwitch(
                    "新标签页打开文章",
                    "pc-xhs-open-blank-article",
                    false,
                    void 0,
                    "点击文章不会在本页展开，会打开新标签页"
                  )
                ]
              }
            ]
          },
          {
            text: "搜索",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "新标签页打开-搜索按钮",
                    "pc-xhs-search-open-blank-btn",
                    false,
                    void 0,
                    "点击右边的搜索按钮直接新标签页打开搜索内容"
                  ),
                  UISwitch(
                    "新标签页打开-回车键",
                    "pc-xhs-search-open-blank-keyboard-enter",
                    false,
                    void 0,
                    "按下回车键直接新标签页打开搜索内容"
                  )
                ]
              }
            ]
          },
          {
            text: "屏蔽",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "【屏蔽】广告",
                    "pc-xhs-shieldAd",
                    true,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】登录弹窗",
                    "pc-xhs-shield-login-dialog",
                    true,
                    void 0,
                    "屏蔽会自动弹出的登录弹窗"
                  ),
                  UISwitch(
                    "【屏蔽】选择文字弹出的搜索提示",
                    "pc-xhs-shield-select-text-search-position",
                    false,
                    void 0,
                    "屏蔽元素"
                  ),
                  UISwitch(
                    "【屏蔽】顶部工具栏",
                    "pc-xhs-shield-topToolbar",
                    false,
                    void 0,
                    "屏蔽元素"
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
                    "劫持Vue",
                    "pc-xhs-hook-vue",
                    true,
                    void 0,
                    "恢复__vue__属性"
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
          }
        ]
      }
    ]
  };
  const UISlider = function(text, key, defaultValue, min, max, changeCallback, getToolTipContent, description, step) {
    let result = {
      text,
      type: "slider",
      description,
      attributes: {},
      props: {},
      getValue() {
        let storageApiValue = this.props[PROPS_STORAGE_API];
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
        if (typeof changeCallback === "function") {
          let result2 = changeCallback(event, value);
          if (result2) {
            return;
          }
        }
        let storageApiValue = this.props[PROPS_STORAGE_API];
        storageApiValue.set(key, value);
      },
      min,
      max,
      step
    };
    Reflect.set(result.attributes, ATTRIBUTE_KEY, key);
    Reflect.set(result.attributes, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
    PanelComponents.initComponentsStorageApi(
      "slider",
      result,
      {
        get(key2, defaultValue2) {
          return Panel.getValue(key2, defaultValue2);
        },
        set(key2, value) {
          Panel.setValue(key2, value);
        }
      }
    );
    return result;
  };
  const SettingUI_Article = {
    id: "xhs-panel-config-article",
    title: "笔记",
    forms: [
      {
        type: "forms",
        text: "功能",
        forms: [
          UISwitch(
            "显示发布、修改的绝对时间",
            "pc-xhs-article-showPubsliushTime",
            false,
            void 0,
            "注：需要开启<code>通用</code>-<code>劫持/拦截</code>-<code>劫持Vue</code>"
          )
        ]
      },
      {
        text: "笔记宽屏",
        type: "forms",
        forms: [
          UISwitch(
            "启用",
            "pc-xhs-article-fullWidth",
            false,
            void 0,
            `让笔记占据宽屏，当页面可视宽度>=960px时才会触发该功能，当前页面可视宽度: ${window.innerWidth}px`
          ),
          UISlider(
            "占据范围",
            "pc-xhs-article-fullWidth-widthSize",
            90,
            30,
            100,
            (event, value) => {
              let $noteContainer = document.querySelector("#noteContainer");
              if (!$noteContainer) {
                log.error("未找到笔记容器");
                return;
              }
              $noteContainer.style.width = `${value}vw`;
            },
            (value) => {
              return `${value}%，默认：90%`;
            },
            "调整笔记页面占据的页面范围"
          )
        ]
      }
    ]
  };
  const MSettingUI_Common = {
    id: "little-red-book-panel-config-common",
    title: "通用",
    forms: [
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
          }
        ]
      },
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
                    "【屏蔽】广告",
                    "little-red-book-shieldAd",
                    true,
                    void 0,
                    "如：App内打开"
                  ),
                  UISwitch(
                    "【屏蔽】底部搜索发现",
                    "little-red-book-shieldBottomSearchFind",
                    true,
                    void 0,
                    "建议开启"
                  ),
                  UISwitch(
                    "【屏蔽】底部工具栏",
                    "little-red-book-shieldBottomToorBar",
                    true,
                    void 0,
                    "建议开启"
                  )
                ]
              }
            ]
          }
          // {
          // 	text: "劫持/拦截",
          // 	type: "deepMenu",
          // 	forms: [
          // 		{
          // 			text: "",
          // 			type: "forms",
          // 			forms: [
          // 				UISwitch(
          // 					"劫持Vue",
          // 					"little-red-book-hijack-vue",
          // 					true,
          // 					void 0,
          // 					"恢复__vue__属性"
          // 				),
          // 			],
          // 		},
          // 	],
          // },
        ]
      }
    ]
  };
  const MSettingUI_Home = {
    id: "little-red-book-panel-config-home",
    title: "主页",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "劫持/拦截",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "劫持点击事件",
                    "little-red-book-repariClick",
                    true,
                    void 0,
                    "可阻止点击跳转至下载页面"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  const MSettingUI_Notes = {
    id: "little-red-book-panel-config-note",
    title: "笔记",
    forms: [
      {
        text: "",
        type: "forms",
        forms: [
          {
            text: "视频笔记",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "优化视频描述",
                    "little-red-book-optimizeVideoNoteDesc",
                    true,
                    void 0,
                    "让视频描述可以滚动显示更多"
                  ),
                  UISwitch(
                    "【屏蔽】作者热门笔记",
                    "little-red-book-shieldAuthorHotNote",
                    true,
                    void 0,
                    "建议开启"
                  ),
                  UISwitch(
                    "【屏蔽】热门推荐",
                    "little-red-book-shieldHotRecommendNote",
                    true,
                    void 0,
                    "建议开启"
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
            text: "功能",
            type: "deepMenu",
            forms: [
              {
                text: "",
                type: "forms",
                forms: [
                  UISwitch(
                    "优化评论浏览",
                    "little-red-book-optimizeCommentBrowsing",
                    true,
                    void 0,
                    "目前仅可加载部分评论"
                  ),
                  UISwitch(
                    "优化图片浏览",
                    "little-red-book-optimizeImageBrowsing",
                    true,
                    void 0,
                    "更方便的浏览图片"
                  ),
                  UISwitch(
                    "允许复制",
                    "little-red-book-allowCopy",
                    true,
                    void 0,
                    "可以复制笔记的内容"
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
                    "劫持webpack-弹窗",
                    "little-red-book-hijack-webpack-mask",
                    true,
                    void 0,
                    "如：打开App弹窗、登录弹窗"
                  ),
                  UISwitch(
                    "劫持webpack-唤醒App",
                    "little-red-book-hijack-webpack-scheme",
                    true,
                    void 0,
                    "禁止跳转商店小红书详情页/小红书"
                  )
                ]
              }
            ]
          }
        ]
      }
    ]
  };
  addStyle(
    /*css*/
    `
.qmsg svg.animate-turn {
    fill: none;
}
`
  );
  PanelContent.addContentConfig([SettingUI_Common, SettingUI_Article]);
  PanelContent.addContentConfig([
    MSettingUI_Common,
    MSettingUI_Home,
    MSettingUI_Notes
  ]);
  const defaultMenuOption = PanelMenu.getMenuOption();
  defaultMenuOption.text = "⚙ PC-设置";
  PanelMenu.updateMenuOption(defaultMenuOption);
  PanelMenu.addMenuOption({
    key: "show_mobile_setting",
    text: "⚙ 移动端-设置",
    autoReload: false,
    isStoreValue: false,
    showText(text) {
      return text;
    },
    callback: () => {
      Panel.showPanel(PanelContent.getConfig(1), `${_SCRIPT_NAME_}-移动端设置`);
    }
  });
  Panel.init();
  let isMobile = utils.isPhone();
  let CHANGE_ENV_SET_KEY = "change_env_set";
  let chooseMode = _GM_getValue(CHANGE_ENV_SET_KEY);
  GM_Menu.add({
    key: CHANGE_ENV_SET_KEY,
    text: `⚙ 自动: ${isMobile ? "移动端" : "PC端"}`,
    autoReload: false,
    isStoreValue: false,
    showText(text) {
      if (chooseMode == null) {
        return text;
      }
      return text + ` 手动: ${chooseMode == 1 ? "移动端" : chooseMode == 2 ? "PC端" : "未知"}`;
    },
    callback: () => {
      let allowValue = [0, 1, 2];
      let chooseText = window.prompt(
        "请输入当前脚本环境判定\n\n自动判断: 0\n移动端: 1\nPC端: 2",
        "0"
      );
      if (!chooseText) {
        return;
      }
      let chooseMode2 = parseInt(chooseText);
      if (isNaN(chooseMode2)) {
        Qmsg.error("输入的不是规范的数字");
        return;
      }
      if (!allowValue.includes(chooseMode2)) {
        Qmsg.error("输入的值必须是0或1或2");
        return;
      }
      if (chooseMode2 == 0) {
        _GM_deleteValue(CHANGE_ENV_SET_KEY);
      } else {
        _GM_setValue(CHANGE_ENV_SET_KEY, chooseMode2);
      }
    }
  });
  if (chooseMode != null) {
    log.info(`手动判定为${chooseMode === 1 ? "移动端" : "PC端"}`);
    if (chooseMode == 1) {
      M_XHS.init();
    } else if (chooseMode == 2) {
      XHS.init();
    } else {
      Qmsg.error("意外，手动判定的值不在范围内");
      _GM_deleteValue(CHANGE_ENV_SET_KEY);
    }
  } else {
    if (isMobile) {
      log.info("自动判定为移动端");
      M_XHS.init();
    } else {
      log.info("自动判定为PC端");
      XHS.init();
    }
  }

})(Qmsg, DOMUtils, Utils, pops, Viewer);