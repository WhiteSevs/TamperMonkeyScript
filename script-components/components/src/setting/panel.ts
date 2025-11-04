import type {
  PopsPanelContentConfig,
  PopsPanelConfig,
  PopsPanelViewConfig,
} from "@whitesev/pops/dist/types/src/components/panel/types/index";
import type { PopsPanelDeepViewConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-deepMenu";
import type { PopsPanelContainerConfig } from "@whitesev/pops/dist/types/src/components/panel/types/components-container";
import type { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import { unsafeWindow } from "ViteGM";
import { DOMUtils, log, pops, SCRIPT_NAME, utils } from "../base.env";
import {
  ATTRIBUTE_DEFAULT_VALUE,
  ATTRIBUTE_INIT,
  ATTRIBUTE_INIT_MORE_VALUE,
  ATTRIBUTE_KEY,
  ATTRIBUTE_PLUGIN_SEARCH_CONFIG,
  KEY,
} from "./panel-config";
import { PanelUISize } from "./panel-ui-size";
import { PopsPanelStorageApi } from "./panel-storage";
import { PanelMenu } from "./panel-menu";
import { PanelContent } from "./panel-content";
import { CommonUtil } from "./../utils/CommonUtil";
import Qmsg from "qmsg";
import type { UIOwnSearchConfig } from "./components/ui-own";

export type ExecMenuCallBackOption<T = any> = {
  /**
   * 当前菜单项的值
   *
   * 如果queryKey|key是string[]，那么value也是对应的string[]
   * @example
   * 例如：[key1, key2]，这时候值为：[value1, value2]
   */
  value: T;
  /**
   * 主动添加元素|销毁函数，一般用于异步函数主动使用
   * @example
   * addStoreValue(HTMLElement)
   * @example
   * addStoreValue([HTMLElement])
   * @example
   * addStoreValue(Function))
   * @example
   * addStoreValue([Function)])
   */
  addStoreValue: (...args: ExecMenuResult) => void;
};
export type ExecMenuResultInst = {
  /**
   * 样式元素
   */
  $css?: (Element | null | undefined)[] | (Element | null | undefined);
  /**
   * 卸载函数，在菜单项为关闭状态时执行卸载
   */
  destory?: () => void;
};
export type OnceExecMenuStoreData = {
  /**
   * 重载菜单执行
   *
   * 当Router改变时，某些对应Router判断才生效的css需要重新执行才会添加
   *
   * 调用该函数会无视once的值
   *
   * + 清空存储的元素列表
   * + 清空存储的卸载函数
   * + 执行菜单项的回调
   */
  reload(): void;
  /**
   * 清空菜单执行情况
   *
   * + 清空存储的元素列表
   * + 清空存储的卸载函数
   * + 清空值改变的监听器
   * + 清空存储的一次执行的键
   */
  clear(): void;
  /**
   * 执行卸载函数，该函数是由菜单执行回调的返回值中的函数构成
   */
  destory(): void;
  /**
   * 清空存储的元素列表
   */
  clearStoreStyleElements: () => void;
  /**
   * 移除值改变的监听器
   */
  removeValueChangeListener: () => void;
  /**
   * 清空存储的一次执行的键
   */
  clearOnceExecMenuData: () => void;
};
export type ExecMenuResult =
  | ExecMenuResultInst
  | Element
  | null
  | undefined
  | void
  | (Element | undefined | null | (() => void))[]
  | any
  | any[];
export type UrlChangeWithExecMenuOnceEventConfig = {
  /** 当前url */
  url: string;
  /** 更新前的url */
  beforeUrl: string;
};
/**
 * 面板
 */
const Panel = {
  /** 数据 */
  $data: {
    /** @private */
    __contentConfigInitDefaultValue: null as UtilsDictionary<string, any> | null,
    /** @private */
    __onceExecMenuData: null as UtilsDictionary<string, OnceExecMenuStoreData> | null,
    /** @private */
    __urlChangeReloadMenuExecOnce: null as UtilsDictionary<
      string,
      (config?: UrlChangeWithExecMenuOnceEventConfig) => IPromise<void>
    > | null,
    /** @private */
    __onceExecData: null as UtilsDictionary<string, number> | null,
    /** @private */
    __panelConfig: {} as Partial<PopsPanelConfig>,
    /**
     * 面板
     */
    $panel: null as ReturnType<typeof pops.panel> | null,
    /**
     * 面板配置
     */
    panelContent: [] as PopsPanelContentConfig[],
    /**
     * 菜单项初始化的默认值
     */
    get contentConfigInitDefaultValue() {
      if (this.__contentConfigInitDefaultValue == null) {
        this.__contentConfigInitDefaultValue = new utils.Dictionary();
      }
      return this.__contentConfigInitDefaultValue;
    },
    /**
     * 菜单项初始化时禁用的键
     */
    contentConfigInitDisabledKeys: <string[]>[],
    /**
     * 成功只执行了一次的菜单项
     *
     * + .exec
     * + .execMenu
     * + .execMenuOnce
     */
    get onceExecMenuData() {
      if (this.__onceExecMenuData == null) {
        this.__onceExecMenuData = new utils.Dictionary();
      }
      return this.__onceExecMenuData;
    },
    /**
     * 菜单项在url改变时需要重新加载的菜单回调
     *
     * + .execMenuOnce
     */
    get urlChangeReloadMenuExecOnce() {
      if (this.__urlChangeReloadMenuExecOnce == null) {
        this.__urlChangeReloadMenuExecOnce = new utils.Dictionary();
      }
      return this.__urlChangeReloadMenuExecOnce;
    },
    /**
     * 成功只执行了一次的项
     *
     * + .onceExec
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
    attributeDefaultValueName: ATTRIBUTE_DEFAULT_VALUE,
  },
  init() {
    this.initContentDefaultValue();
    PanelMenu.init();
  },
  /** 判断是否是顶层窗口 */
  isTopWindow() {
    return unsafeWindow.top === unsafeWindow.self;
  },
  /**
   * 对菜单配置项的键进行默认值初始化储存（到内存中）
   */
  initContentDefaultValue() {
    /**
     * 设置默认值
     * @param config
     */
    const initDefaultValue = (config: PopsPanelContainerConfig | PopsPanelViewConfig) => {
      if (!config.attributes) {
        /* 必须配置attributes属性，用于存储菜单的键和默认值 */
        return;
      }

      // 排除掉不需要初始化默认值的配置
      if (config.type === "button" || config.type === "container" || config.type === "deepMenu") {
        return;
      }

      const attributes = config.attributes;
      /* 调用初始化方法，返回false则阻止默认行为 */
      let __attr_init__ = attributes[ATTRIBUTE_INIT];
      if (typeof __attr_init__ === "function") {
        let __attr_result__ = __attr_init__();
        if (typeof __attr_result__ === "boolean" && !__attr_result__) {
          return;
        }
      }

      /**
       * 初始化配置对象，每个是需要配置的键值对
       *
       * key是菜单键
       *
       * value是默认值
       */
      let menuDefaultConfig = new Map<string, any>();
      /* 普通的 键名 */
      let key = attributes[ATTRIBUTE_KEY];
      if (key != null) {
        // 键名对应的默认值
        const defaultValue = attributes[ATTRIBUTE_DEFAULT_VALUE];
        menuDefaultConfig.set(key, defaultValue);
      }
      /* 待初始化默认值的配置项 */
      let moreMenuDefaultConfig = attributes[ATTRIBUTE_INIT_MORE_VALUE];
      if (typeof moreMenuDefaultConfig === "object" && moreMenuDefaultConfig) {
        // 追加|覆盖
        Object.keys(moreMenuDefaultConfig).forEach((key) => {
          const defaultValue = moreMenuDefaultConfig[key];
          menuDefaultConfig.set(key, defaultValue);
        });
      }
      if (!menuDefaultConfig.size) {
        log.warn(["请先配置键", config]);
        return;
      }
      if (config.type === "switch") {
        let disabled = typeof config.disabled === "function" ? config.disabled() : config.disabled;
        if (typeof disabled === "boolean" && disabled) {
          this.$data.contentConfigInitDisabledKeys.push(...menuDefaultConfig.keys());
        }
      }
      // 循环初始化默认值
      for (const [__key, __defaultValue] of menuDefaultConfig.entries()) {
        // 设置默认值
        this.setDefaultValue(__key, __defaultValue);
      }
    };
    /** 嵌套循环初始化默认值 */
    const loopInitDefaultValue = (configList: PopsPanelContentConfig["views"]) => {
      for (let index = 0; index < configList.length; index++) {
        let configItem = configList[index];
        initDefaultValue(configItem);
        let childViews = (<PopsPanelContainerConfig>configItem).views;
        if (childViews && Array.isArray(childViews)) {
          /* 存在子配置forms */
          loopInitDefaultValue(childViews);
        }
      }
    };
    const contentConfigList = [...PanelContent.getAllContentConfig()];
    for (let index = 0; index < contentConfigList.length; index++) {
      let leftContentConfigItem = contentConfigList[index];
      if (!leftContentConfigItem.views) {
        /* 不存在forms */
        continue;
      }
      // 循环左侧容器内存储的右侧配置项
      const rightContentConfigList = leftContentConfigItem.views;
      if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
        loopInitDefaultValue(rightContentConfigList);
      }
    }

    // 去重
    this.$data.contentConfigInitDisabledKeys = [...new Set(this.$data.contentConfigInitDisabledKeys)];
  },
  /**
   * 设置初始化使用的默认值
   * @param key 键
   * @param defaultValue 默认值
   */
  setDefaultValue(key: string, defaultValue: any) {
    /* 存储到缓存中*/
    if (this.$data.contentConfigInitDefaultValue.has(key)) {
      log.warn("请检查该key(已存在): " + key);
    }
    this.$data.contentConfigInitDefaultValue.set(key, defaultValue);
  },
  /**
   * 获取初始化存储的默认值
   * @param key 键
   */
  getDefaultValue<T>(key: string): T {
    return this.$data.contentConfigInitDefaultValue.get(key);
  },
  /**
   * 设置值
   * @param key 键
   * @param value 值
   */
  setValue(key: string, value: any) {
    PopsPanelStorageApi.set(key, value);
  },
  /**
   * 获取值
   * @param key 键
   * @param defaultValue 默认值
   */
  getValue<T extends any = boolean | undefined>(key: string, defaultValue?: T): T {
    const localValue = PopsPanelStorageApi.get<T>(key);
    if (localValue == null) {
      /* 值不存在或值为null/undefined或只有键但无值 */
      if (this.$data.contentConfigInitDefaultValue.has(key)) {
        /* 先判断是否是菜单配置的键 */
        /* 是的话取出值并返回 */
        return this.$data.contentConfigInitDefaultValue.get(key);
      }
      return defaultValue as T;
    }
    return localValue;
  },
  /**
   * 删除值
   * @param key 键
   */
  deleteValue(key: string) {
    PopsPanelStorageApi.delete(key);
  },
  /**
   * 判断该键是否存在
   * @param key 键
   */
  hasKey(key: string) {
    return PopsPanelStorageApi.has(key);
  },
  /**
   * 监听调用setValue、deleteValue
   * @param key 需要监听的键
   * @param callback
   */
  addValueChangeListener(key: string, callback: (key: string, oldValue: any, newValue: any) => void) {
    const listenerId = PopsPanelStorageApi.addValueChangeListener(key, (__key, __newValue, __oldValue) => {
      callback(key, __oldValue, __newValue);
    });
    return listenerId;
  },
  /**
   * 移除监听
   * @param listenerId 监听的id
   */
  removeValueChangeListener(listenerId: number) {
    PopsPanelStorageApi.removeValueChangeListener(listenerId);
  },
  /**
   * 主动触发菜单值改变的回调
   * @param key 菜单键
   * @param newValue 想要触发的新值，默认使用当前值
   * @param oldValue 想要触发的旧值，默认使用当前值
   */
  triggerMenuValueChange(key: string, newValue?: any, oldValue?: any) {
    PopsPanelStorageApi.triggerValueChangeListener(key, oldValue, newValue);
  },
  /**
   * 执行菜单
   *
   * @param queryKey 判断的键，如果是字符串列表，那么它们的判断处理方式是与关系
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
  async exec<T = any>(
    queryKey: string | string[] | (() => string | string[]),
    callback: (option: ExecMenuCallBackOption<T>) => ExecMenuResult,
    checkExec?: (
      /** 键名列表 */
      keyList: string[]
    ) => boolean,
    once: boolean = true
  ) {
    const that = this;

    let queryKeyFn: () => string | string[];
    if (typeof queryKey === "string" || Array.isArray(queryKey)) {
      queryKeyFn = () => queryKey;
    } else {
      queryKeyFn = queryKey;
    }
    // 执行的键名是否是数组格式
    let isArrayKey = false;
    const queryKeyResult = queryKeyFn();
    /** 所有的键名 */
    let keyList = <string[]>[];
    if (Array.isArray(queryKeyResult)) {
      isArrayKey = true;
      keyList = queryKeyResult;
    } else {
      keyList.push(queryKeyResult);
    }

    const findNotInDataKey = keyList.find((it) => !this.$data.contentConfigInitDefaultValue.has(it));
    if (findNotInDataKey) {
      log.warn(`${findNotInDataKey} 键不存在`);
      return;
    }
    /** 存储的键 */
    const storageKey = JSON.stringify(keyList);
    if (once) {
      // 仅执行一次
      if (this.$data.onceExecMenuData.has(storageKey)) {
        // log.warn(`${storageKey} 键已执行过，请勿重复执行`);
        return this.$data.onceExecMenuData.get(storageKey)!;
      }
    }
    /**
     * 存储菜单返回的值，在监听到值改变且值为false时执行删除元素
     *
     * 例如：元素
     */
    let storeValueList: Element[] = [];
    /** 所有监听的id列表 */
    const listenerIdList: number[] = [];
    /**
     * 执行卸载的函数
     */
    let destoryFnList: ((...args: any[]) => void)[] = [];
    /**
     * 主动添加存储值
     * @param args 支持以下类型
     * + [Element、null、undefined、Function]
     * + Element
     * + Function
     * + null
     * + undefined
     * + ExecMenuResultInst
     */
    const addStoreValueCallback = (enableValue: boolean, args: any) => {
      let dynamicMenuStoreValueList: typeof storeValueList = [];
      let dynamicDestoryFnList: ((...args: any[]) => void)[] = [];
      let resultValueList: any[] = [];
      if (Array.isArray(args)) {
        resultValueList = resultValueList.concat(args);
      } else {
        // 额外处理ExecMenuResultInst类型
        if (typeof args === "object" && args != null) {
          if (args instanceof Element) {
            // 元素
            resultValueList.push(args);
          } else {
            const { $css, destory } = args as ExecMenuResultInst;
            if ($css != null) {
              // 元素
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
          // 空的
          continue;
        }
        if (it instanceof Element) {
          // 元素
          dynamicMenuStoreValueList.push(it);
          continue;
        }
        if (typeof it === "function") {
          // 函数（判断为卸载函数）
          destoryFnList.push(it);
          continue;
        }
      }
      if (enableValue) {
        // 执行
        // 追加存储的元素列表
        // 追加卸载函数
        storeValueList = storeValueList.concat(dynamicMenuStoreValueList);
        destoryFnList = destoryFnList.concat(dynamicDestoryFnList);
      } else {
        // 不执行
        // 清理之前存储的元素列表
        execClearStoreStyleElements();
        // 执行卸载函数
        execDestory();
      }
    };
    /**
     * 获取值
     */
    const getMenuValue = (key: string) => {
      const value = this.getValue<boolean>(key);
      return Boolean(value);
    };
    /**
     * 清空之前存储的值（例如：元素）
     */
    const execClearStoreStyleElements = () => {
      for (let index = 0; index < storeValueList.length; index++) {
        const $css = storeValueList[index];
        $css?.remove();
        storeValueList.splice(index, 1);
        index--;
      }
    };
    /**
     * 执行卸载函数
     */
    const execDestory = () => {
      for (let index = 0; index < destoryFnList.length; index++) {
        const destoryFnItem = destoryFnList[index];
        destoryFnItem();
        destoryFnList.splice(index, 1);
        index--;
      }
    };
    /**
     * 判断执行
     */
    const checkMenuExec = () => {
      let flag = false;
      if (typeof checkExec === "function") {
        flag = checkExec(keyList);
      } else {
        flag = keyList.every((key) => getMenuValue(key));
      }
      return flag;
    };
    /**
     * 值改变触发的回调
     */
    const valueChangeCallback = async (
      /**
       * 值改变的参数
       */
      valueOption?: { key: string; newValue: any; oldValue: any }
    ) => {
      const execFlag = checkMenuExec();
      if (execFlag) {
        // 开启，执行回调
        const valueList = keyList.map((key) => this.getValue<T>(key));
        const callbackResult: ExecMenuResult = await callback({
          value: (isArrayKey ? valueList : valueList[0]) as T,
          addStoreValue: (...args: any[]) => {
            return addStoreValueCallback(true, args);
          },
        });
        addStoreValueCallback(true, callbackResult);
      } else {
        addStoreValueCallback(false, []);
      }
    };
    // 仅执行一次
    // 那么需要添加值改变监听
    once &&
      keyList.forEach((key) => {
        const listenerId = this.addValueChangeListener(key, (key, newValue, oldValue) => {
          return valueChangeCallback({
            key,
            newValue,
            oldValue,
          });
        });
        listenerIdList.push(listenerId);
      });
    await valueChangeCallback();

    const result: OnceExecMenuStoreData = {
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
  /**
   * 自动判断菜单是否启用，如果启用，执行回调，如果不启用，执行卸载函数
   * @param key 判断的键，如果是字符串列表，那么它们的判断处理方式是与关系
   * @param callback 回调
   * @param isReverse 逆反判断菜单启用，默认false
   * @param once 是否是只执行一次，默认false
   */
  async execMenu<T = any>(
    key: string | string[],
    callback: (option: ExecMenuCallBackOption<T>) => ExecMenuResult,
    isReverse: boolean = false,
    once: boolean = false
  ) {
    return await this.exec<T>(
      key,
      async (option) => {
        return await callback(option);
      },
      (keyList) => {
        const execFlag = keyList.every((__key__) => {
          let flag = !!this.getValue(__key__);
          const disabled = Panel.$data.contentConfigInitDisabledKeys.includes(__key__);
          if (disabled) {
            // 被禁用
            flag = false;
            log.warn(`.execMenu${once ? "Once" : ""} ${__key__} 被禁用`);
          }

          isReverse && (flag = !flag);
          return flag;
        });
        return execFlag;
      },
      once
    );
  },
  /**
   * 自动判断菜单是否启用，然后执行回调，只会执行一次
   *
   * 它会自动监听值改变（设置中的修改），改变后如果未执行，则执行一次
   * @param key 判断的键，如果是字符串列表，那么它们的判断处理方式是与关系
   * @param callback 回调
   * @param isReverse 逆反判断菜单启用，默认false
   * @param listenUrlChange 监听url改变，重载菜单执行，默认为false，注意，如果用此函数执行了监听Router改变，请设置该值false，否则会反复触发
   */
  async execMenuOnce<T = any>(
    key: string | string[],
    callback: (option: ExecMenuCallBackOption<T>) => ExecMenuResult,
    isReverse: boolean = false,
    listenUrlChange: boolean = false
  ) {
    const result = await this.execMenu<T>(key, callback, isReverse, true);
    if (listenUrlChange) {
      if (result) {
        // result可能是新的返回值或者是旧的存储的返回值
        const urlChangeEvent = () => {
          result.reload();
        };
        // 移除旧的监听
        this.removeUrlChangeWithExecMenuOnceListener(key);
        // 添加新的监听
        this.addUrlChangeWithExecMenuOnceListener(key, urlChangeEvent);
      }
    }
    return result;
  },
  /**
   * 移除已执行的仅执行一次的菜单
   * + .exec
   * + .execMenu
   * + .execMenuOnce
   * @param key 键
   */
  deleteExecMenuOnce(key: string | string[]) {
    key = this.transformKey(key);
    this.$data.onceExecMenuData.delete(key);
    this.$data.urlChangeReloadMenuExecOnce.delete(key);
    const flag = PopsPanelStorageApi.removeValueChangeListener(key);
    return flag;
  },
  /**
   * 根据key执行一次，该key不会和execMenu|exec|execMenuOnce已执行的key冲突
   * @param key 键
   * @param callback 回调
   */
  onceExec(key: string | string[], callback: () => void) {
    key = this.transformKey(key);
    if (typeof key !== "string") {
      throw new TypeError("key 必须是字符串");
    }
    if (this.$data.onceExecData.has(key)) {
      // log.warn(`${key} 键已执行（最多一次），请勿重复执行`);
      return;
    }
    callback();
    this.$data.onceExecData.set(key, 1);
  },
  /**
   * 移除已执行的仅执行一次的菜单
   * + .onceExec
   * @param key 键
   */
  deleteOnceExec(key: string | string[]) {
    key = this.transformKey(key);
    this.$data.onceExecData.delete(key);
  },
  /**
   * 添加触发url改变的监听
   * @param key 键
   * @param callback 回调
   */
  addUrlChangeWithExecMenuOnceListener(key: string | string[], callback: () => IPromise<void>) {
    key = this.transformKey(key);
    this.$data.urlChangeReloadMenuExecOnce.set(key, callback);
  },
  /**
   * 移除触发url改变的监听
   * @param key 键
   */
  removeUrlChangeWithExecMenuOnceListener(key: string | string[]) {
    key = this.transformKey(key);
    this.$data.urlChangeReloadMenuExecOnce.delete(key);
  },
  /**
   * 判断是否有触发url改变的监听
   * @param key 键
   */
  hasUrlChangeWithExecMenuOnceListener(key: string | string[]) {
    key = this.transformKey(key);
    return this.$data.urlChangeReloadMenuExecOnce.has(key);
  },
  /**
   * 主动触发url改变的监听
   * @param config 配置
   */
  async triggerUrlChangeWithExecMenuOnceEvent(config?: UrlChangeWithExecMenuOnceEventConfig) {
    const values = this.$data.urlChangeReloadMenuExecOnce.values();
    for (const callback of values) {
      await callback(config);
    }
  },
  /**
   * 显示设置面板
   * @param content 显示的内容配置
   * @param [title] 标题
   * @param [preventDefaultContentConfig=false] 是否阻止默认添加内容配置（版本号），默认false
   * @param [preventRegisterSearchPlugin=false] 是否阻止默认添加搜索组件，默认false
   */
  showPanel(
    content: PopsPanelContentConfig[],
    title: string = `${SCRIPT_NAME}-设置`,
    preventDefaultContentConfig: boolean = false,
    preventRegisterSearchPlugin: boolean = false
  ) {
    this.$data.$panel = null;
    this.$data.panelContent = [];
    // 判断是否已有脚本版本号
    let checkHasBottomVersionContentConfig =
      content.findIndex((it) => {
        let isBottom = typeof it.isBottom === "function" ? it.isBottom() : Boolean(it.isBottom);
        return isBottom && it.id === "script-version";
      }) !== -1;
    if (!preventDefaultContentConfig && !checkHasBottomVersionContentConfig) {
      content.push(...PanelContent.getDefaultBottomContentConfig());
    }
    let $panel = pops.panel({
      ...{
        title: {
          text: title,
          position: "center",
          html: false,
          style: "",
        },
        content: content,
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
  /**
   * 注册设置面板的搜索功能（双击左侧选项第一个）
   * @param config 配置项
   */
  registerConfigSearch(config: {
    $panel: ReturnType<typeof pops.panel>;
    content: PopsPanelContentConfig[];
    searchDialogStyle?: string;
  }) {
    const { $panel, content } = config;
    type SearchPath = {
      index?: number;
      name: string | undefined;
      matchedData?: {
        path: string;
        formConfig: any;
        matchedText: string | undefined;
        description?: string;
      };
      next?: SearchPath;
    };
    const asyncQueryProperty = async <T extends any = any>(
      target: any,
      handler: (target: T) => IPromise<{
        /**
         * 是否是需要的属性
         * + true 将目标值赋值给data
         * + false 不是需要的，data为下一个处理的对象
         */
        isFind: boolean;
        /**
         * 对象/目标值
         */
        data: any;
      }>
    ): Promise<Awaited<T>> => {
      if (target == null) {
        // @ts-ignore
        return;
      }
      const handleResult = await handler(target);
      if (handleResult && typeof handleResult.isFind === "boolean" && handleResult.isFind) {
        return handleResult.data;
      }
      return await asyncQueryProperty(handleResult.data, handler);
    };
    /**
     * 监听元素滚动进入视窗
     */
    const scrollToElementAndListen = ($el: Element, callback?: () => void) => {
      // 创建 IntersectionObserver 监听元素是否进入视口
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 元素完全进入视口，滚动结束
              callback?.();
              observer.disconnect(); // 停止监听
            }
          });
        },
        {
          root: null, // 使用视口作为根
          threshold: 1.0, // 元素完全进入视口时触发
        }
      );
      observer.observe($el);
      $el.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    /**
     * 添加闪烁样式
     */
    const addFlashingClass = ($el: Element) => {
      const flashingClassName = "pops-flashing";
      DOMUtils.animationend($el as HTMLElement, () => {
        $el.classList.remove(flashingClassName);
      });
      $el.classList.add(flashingClassName);
    };
    /**
     * 双击触发的事件
     */
    const dbclick_callback = (evt: MouseEvent | PointerEvent | TouchEvent) => {
      if (evt.type === "dblclick" && isMobileTouch) {
        // 禁止在移动端触发dblclick事件
        return;
      }
      DOMUtils.preventEvent(evt);
      clickElement = null;
      const $alert = pops.alert({
        title: {
          text: "搜索配置",
          position: "center",
        },
        content: {
          text: /*html*/ `
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
        style: /*css*/ `
					${pops.config.cssText.panelCSS}

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

      const $searchWrapper = $alert.$shadowRoot.querySelector<HTMLElement>(".search-wrapper")!;
      const $searchInput = $alert.$shadowRoot.querySelector<HTMLInputElement>(".search-config-text")!;
      const $searchResultWrapper = $alert.$shadowRoot.querySelector<HTMLElement>(".search-result-wrapper")!;

      $searchInput.focus();

      /**
       * 清空搜索结果
       */
      const clearSearchResult = () => {
        DOMUtils.empty($searchResultWrapper);
      };
      /**
       * 创建搜索结果项
       */
      const createSearchResultItem = (pathInfo: SearchPath) => {
        const searchPath: SearchPath = utils.queryProperty(pathInfo, (target) => {
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
        const $item = DOMUtils.createElement("div", {
          className: "search-result-item",
          innerHTML: /*html*/ `
							<div class="search-result-item-path">${searchPath.matchedData?.path}</div>
							<div class="search-result-item-description">${searchPath.matchedData?.description ?? ""}</div>
						`,
        });
        // 点击进行定位项
        const panelHandlerComponents = pops.config.PanelHandlerComponents();
        DOMUtils.on($item, "click", (clickItemEvent) => {
          const $asideItems = $panel.$shadowRoot.querySelectorAll<HTMLLIElement>(
            "aside.pops-panel-aside .pops-panel-aside-top-container li"
          );
          const $targetAsideItem = $asideItems[pathInfo.index!];
          if (!$targetAsideItem) {
            Qmsg.error(`左侧项下标${pathInfo.index}不存在`);
            return;
          }
          $targetAsideItem.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          $targetAsideItem.click();
          asyncQueryProperty<SearchPath>(pathInfo.next, async (target) => {
            if (target?.next) {
              // 还在里面
              // 那这里的是deepMenu
              const $findDeepMenu = await DOMUtils.waitNode(() => {
                return Array.from(
                  $panel.$shadowRoot.querySelectorAll<HTMLElement>(".pops-panel-deepMenu-nav-item")
                ).find(($deepMenu) => {
                  const viewConfig: PopsPanelDeepViewConfig = Reflect.get(
                    $deepMenu,
                    panelHandlerComponents.$data.nodeStoreConfigKey
                  );
                  // 找到对应的二级菜单
                  return typeof viewConfig === "object" && viewConfig != null && viewConfig.text === target.name;
                });
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
              const $findTargetMenu = await DOMUtils.waitNode(() => {
                return Array.from(
                  $panel.$shadowRoot.querySelectorAll<HTMLLIElement>(`li:not(.pops-panel-deepMenu-nav-item)`)
                ).find(($menuItem) => {
                  const viewConfig: PopsPanelDeepViewConfig = Reflect.get(
                    $menuItem,
                    panelHandlerComponents.$data.nodeStoreConfigKey
                  );
                  return viewConfig === target.matchedData?.formConfig;
                });
              }, 2500);
              if ($findTargetMenu) {
                scrollToElementAndListen($findTargetMenu);
                const $fold = $findTargetMenu.closest<HTMLElement>(`.pops-panel-forms-fold[data-fold-enable]`);
                // 折叠状态
                if ($fold) {
                  const $foldWrapper = $fold.querySelector<HTMLElement>(".pops-panel-forms-fold-container")!;
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
      /**
       * 执行搜索
       */
      const execSearch = (searchText: string) => {
        const searchTextRegExp = new RegExp(searchText, "i");
        const searchConfigResult: SearchPath[] = [];
        const loopContentConfig = (configList: PopsPanelContentConfig["views"], path: SearchPath) => {
          for (let index = 0; index < configList.length; index++) {
            const configItem = configList[index];

            const child_forms = (<PopsPanelContainerConfig>configItem).views;
            if (child_forms && Array.isArray(child_forms)) {
              // 存在子配置forms
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
                }) as SearchPath;
                deepNext.next = {
                  name: configItem.text,
                };
              }
              loopContentConfig(child_forms, deepMenuPath);
            } else {
              // 无子配置forms
              let text: string | undefined;
              let description: string | undefined;
              if (configItem.type === "own") {
                // own有自己的搜索配置
                const searchConfig: UIOwnSearchConfig | undefined = Reflect.get(
                  configItem.attributes || {},
                  ATTRIBUTE_PLUGIN_SEARCH_CONFIG
                );
                if (searchConfig) {
                  // 左侧文字
                  if (typeof searchConfig.text === "string") {
                    text = searchConfig.text;
                  }
                  // 描述
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
                }) as SearchPath;
                deepNext.next = {
                  name: text,
                  matchedData: {
                    path: "",
                    formConfig: configItem,
                    matchedText: delayMatchedTextList[matchedIndex],
                    description: description,
                  },
                };

                const pathList: string[] = [];
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
                deepNext.next!.matchedData!.path = pathStr;
                searchConfigResult.push(matchedPath);
              }
            }
          }
        };

        for (let index = 0; index < content.length; index++) {
          const leftContentConfigItem = content[index];
          if (!leftContentConfigItem.views) {
            /* 不存在 */
            continue;
          }
          if (leftContentConfigItem.isBottom && leftContentConfigItem.id === "script-version") {
            // 版本号项不处理搜索
            continue;
          }
          // 循环左侧容器内存储的右侧配置项
          const rightContentConfigList = leftContentConfigItem.views;
          if (rightContentConfigList && Array.isArray(rightContentConfigList)) {
            let text = leftContentConfigItem.title;
            if (typeof text === "function") {
              text = text();
            }
            loopContentConfig(rightContentConfigList, {
              index: index,
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

      DOMUtils.on(
        $searchInput,
        "input",
        utils.debounce((evt2) => {
          DOMUtils.preventEvent(evt2);
          let searchText = DOMUtils.val($searchInput).trim();
          if (searchText === "") {
            // 不执行搜索
            clearSearchResult();
            return;
          }
          execSearch(searchText);
        }, 200)
      );
    };
    const $asideItems = $panel.$shadowRoot.querySelectorAll<HTMLElement>(
      `aside.pops-panel-aside .pops-panel-aside-item:not(#script-version)`
    );
    // 为每一项单独监听双击事件
    $asideItems.forEach(($asideItem) => {
      DOMUtils.on($asideItem, "dblclick", dbclick_callback);
    });
    let clickElement: Element | null = null;
    let isDoubleClick = false;
    let timer: number | undefined = void 0;
    /** 是否是移动端点击 */
    let isMobileTouch = false;
    DOMUtils.on<TouchEvent>(
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
          /* 判定为双击 */
          dbclick_callback(evt);
        } else {
          timer = setTimeout(() => {
            isDoubleClick = false;
            // 判断为单击
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
      DOMUtils.createElement("style", {
        type: "text/css",
        textContent: /*css*/ `
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
  /**
   * 把key:string[]转为string
   */
  transformKey(key: string | string[]) {
    if (Array.isArray(key)) {
      const keyArray = key.sort();
      return JSON.stringify(keyArray);
    } else {
      return key;
    }
  },
};

if (import.meta.hot) {
  Reflect.set(unsafeWindow, "PopsPanel", Panel);
}
export { Panel };
