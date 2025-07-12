// ==UserScript==
// @name         图片右键菜单
// @namespace    https://github.com/WhiteSevs/TamperMonkeyScript
// @version      2025.7.12
// @author       WhiteSevs
// @description  在浏览器预览图片页面添加全局右键菜单，右键直接复制该图片的Uri编码，支持自动判断图片类型，包括：jpg、jpeg、png、gif、webp、ico，支持手动判断图片类型，包括：jpg、jpeg、png、gif。
// @license      GPL-3.0-only
// @icon         data:image/png;base64,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
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @match        *://*/*
// @require      https://fastly.jsdelivr.net/gh/WhiteSevs/TamperMonkeyScript@86be74b83fca4fa47521cded28377b35e1d7d2ac/lib/CoverUMD/index.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.7.0/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.5.11/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@2.1.13/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.3.8/dist/index.umd.js
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
            let supportURL = _GM_info?.script?.supportURL || _GM_info?.script?.namespace;
            if (typeof supportURL === "string" && utils.isNotNull(supportURL)) {
              window.open(supportURL, "_blank");
            }
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
  DOMUtils.noConflict();
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
  utils.addStyle.bind(utils);
  document.querySelector.bind(document);
  document.querySelectorAll.bind(document);
  new utils.GM_Cookie();
  const ImageUtils = {
    default: {
      getBase64Image(img, type = "image/png") {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL;
      }
    },
    gif: {
      /**
       * 根据路径返回file
       * @param url 图片链接
       * @param imageName 图片名字
       * @param callback 回调
       */
      getImageFileFromUrl(url, imageName, callback) {
        fetch(url).then((res) => {
          return res.blob();
        }).then((blob) => {
          let imgFile = new File([blob], imageName, { type: "image/gif" });
          callback(imgFile);
        });
      },
      /**
       * 图片路径返回base64
       * @param imageUrl
       */
      chooseStaticImg(imageUrl) {
        let base64Str = null;
        return new Promise((resolve, reject) => {
          this.getImageFileFromUrl(imageUrl, "图片.gif", (file) => {
            let reader = new FileReader();
            reader.onloadend = () => {
              base64Str = reader.result;
              resolve(base64Str);
            };
            reader.readAsDataURL(file);
          });
        });
      }
    },
    /**
     * 网络请求获取图片的类型
     */
    async networkQueryContentType(url) {
      let resp = await httpx.head(url, {
        fetch: true
      });
      if (resp.status && resp.data.responseFetchHeaders.has("Content-Type")) {
        return resp.data.responseFetchHeaders.get("Content-Type");
      }
    }
  };
  const allowImageType = [
    { rule: ".png", type: "image/png" },
    { rule: ".jpg", type: "image/jpg" },
    { rule: ".jpeg", type: "image/jpeg" },
    { rule: ".webp", type: "image/webp" },
    { rule: ".ico", type: "image/ico" },
    { rule: ".gif", type: "image/gif" }
  ];
  const Image = {
    init() {
      let imgList = document.body.querySelectorAll("img");
      if (imgList.length !== 1) {
        log.error("页面中的<img>元素数量不为1");
        return;
      }
      log.info("注入全局右键-图片");
      let imageElement = imgList[0];
      let imageUrl = imageElement.src;
      __pops.rightClickMenu({
        target: _unsafeWindow,
        data: [
          {
            icon: __pops.config.iconSVG.documentCopy,
            iconIsLoading: false,
            text: "自动判断",
            async callback() {
              let imgType = null;
              if (imageUrl.startsWith("http") || imageUrl.startsWith("file:")) {
                let findIndex = -1;
                findIndex = allowImageType.findIndex(
                  (value) => imageUrl.endsWith(value.rule)
                );
                if (findIndex !== -1) {
                  imgType = allowImageType[findIndex].type;
                }
                if (!imgType && imageUrl.startsWith("http")) {
                  Qmsg.info("通过网络请求判断类型");
                  imgType = await ImageUtils.networkQueryContentType(imageUrl);
                  log.info("请求获取的Content-Type：" + imgType);
                  if (imgType) {
                    Qmsg.success("图片类型：" + imgType);
                  }
                }
              }
              if (imgType) {
                if (imgType.endsWith("gif")) {
                  ImageUtils.gif.chooseStaticImg(imageUrl).then((text) => {
                    utils.setClip(text);
                    Qmsg.success("复制成功！");
                  });
                } else {
                  utils.setClip(
                    ImageUtils.default.getBase64Image(imageElement, imgType)
                  );
                  Qmsg.success("复制成功！");
                }
              } else {
                Qmsg.error("未知的图片类型");
              }
            }
          },
          {
            icon: __pops.config.iconSVG.chromeFilled,
            iconIsLoading: false,
            text: "其它类型",
            callback(event) {
              return false;
            },
            item: [
              {
                icon: __pops.config.iconSVG.documentCopy,
                iconIsLoading: false,
                text: "jpg",
                callback() {
                  utils.setClip(
                    ImageUtils.default.getBase64Image(imageElement, "image/jpg")
                  );
                  Qmsg.success("复制成功！");
                }
              },
              {
                icon: __pops.config.iconSVG.documentCopy,
                iconIsLoading: false,
                text: "jpeg",
                callback() {
                  utils.setClip(
                    ImageUtils.default.getBase64Image(imageElement, "image/jpeg")
                  );
                  Qmsg.success("复制成功！");
                }
              },
              {
                icon: __pops.config.iconSVG.documentCopy,
                iconIsLoading: false,
                text: "png",
                callback() {
                  utils.setClip(
                    ImageUtils.default.getBase64Image(imageElement, "image/png")
                  );
                  Qmsg.success("复制成功！");
                }
              },
              {
                icon: __pops.config.iconSVG.documentCopy,
                iconIsLoading: false,
                text: "gif",
                callback() {
                  ImageUtils.gif.chooseStaticImg(imageUrl).then((text) => {
                    utils.setClip(text);
                    Qmsg.success("复制成功！");
                  });
                }
              }
            ]
          }
        ]
      });
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
      }
    ]
  };
  (() => {
    PanelContent.addContentConfig([Component_Common]);
    if (!document.documentElement.hasAttribute("style")) {
      return;
    }
    if (!document.body.hasAttribute("style")) {
      return;
    }
    if (!document.body.children.length) {
      return;
    }
    if (!document.querySelector('meta[name="viewport"]')) {
      return;
    }
    Panel.init();
    Image.init();
  })();

})(Qmsg, DOMUtils, Utils, pops);