import { GM_getValue, GM_setValue } from "ViteGM";
import { DOMUtils, log, utils } from "../env.base";

/** 本地存储快捷键的键配置 */
type ShortCutKeyboardOption = {
  /** 键盘名 */
  keyName: string;
  /** 键盘数值 */
  keyValue: number | string;
  /** 其它快捷键名 */
  ohterCodeList: string[] | ("ctrl" | "shift" | "alt")[];
};

/** 本地存储快捷键的配置 */
type ShortCutLocalStorageOption = {
  /** 键名 */
  key: string;
  /** 值 */
  value: ShortCutKeyboardOption | null;
};

type ShortCutOptionWindow = {
  /**
   * 需要触发的目标 全局
   * @default "window"
   */
  target?: "window";
  /**
   * 触发该快捷键的回调
   * @param key 当前`key`
   */
  callback(key: string): void | Promise<void>;
};

type ShortCutOptionElement = {
  /**
   * 需要触发的目标 元素选择器
   *
   * target不能为document，因为会先触发window的事件
   * @default "window"
   */
  target?: string | Element | (() => IPromise<Element | void | Promise<void>>);
  /**
   * 触发该快捷键的回调
   * @param key 当前`key`
   */
  callback(key: string): void | Promise<void>;
};

/** 监听全局的快捷键配置 */
type ShortCutOption = {
  [key: string]: ShortCutOptionWindow | ShortCutOptionElement;
};

/**
 * 快捷键
 */
class ShortCut {
  /**
   * 本地配置存储的键
   */
  private KEY: string = "short-cut";
  #data = {
    /**
     * 其它实例的快捷键的配置
     *
     * 这里一般是用于在录入快捷键时判断是否存在重复的快捷键
     */
    otherShortCutOptions: [] as ShortCutLocalStorageOption[],
    /**
     * 当前本地的配置
     */
    localOptions: [] as ShortCutLocalStorageOption[],
    /**
     * 当前等待按下的按键实例
     */
    currentWaitEnterPressInstanceHandler: null as Function | null,
  };
  #flag = {
    /**
     * 是否存在等待按下的按键
     */
    isWaitPress: false,
  };
  /**
   * @param KEY 存储的键
   */
  constructor(KEY?: string) {
    if (typeof KEY === "string") {
      this.KEY = KEY;
    }
    this.initData();
  }
  /**
   * 初始化配置默认值
   * @param key 键
   * @param option 配置
   */
  initConfig(key: string, option: ShortCutKeyboardOption) {
    if (this.hasOption(key)) {
      // 已存在该配置，跳过设置
    } else {
      this.setOption(key, option);
    }
  }
  /**
   * 初始化/重新加载数据
   */
  initData(localOptions?: ShortCutLocalStorageOption[]) {
    this.#data.localOptions.length = 0;
    this.#data.localOptions = localOptions ?? this.getLocalAllOptions();
  }
  /**
   * 判断当前是否正在等待键盘按下按键
   */
  isWaitKeyboardPress(): boolean {
    return this.#flag.isWaitPress;
  }
  /**
   * 获取存储的键
   */
  getStorageKey(): string {
    return this.KEY;
  }
  /**
   * 获取本地存储的所有值
   */
  getLocalAllOptions(): ShortCutLocalStorageOption[] {
    const allOptions = GM_getValue<ShortCutLocalStorageOption[]>(this.KEY, []);
    return allOptions;
  }
  /**
   * 判断是否存在该配置
   * @param key 键
   */
  hasOption(key: string): boolean {
    const localOptions = this.getLocalAllOptions();
    const findOption = localOptions.find((item) => item.key === key);
    return !!findOption;
  }
  /**
   * 判断是否存在该配置的value值
   * @param key 键
   */
  hasOptionValue(key: string): boolean {
    if (this.hasOption(key)) {
      const option = this.getOption(key);
      return !(option?.value == null);
    } else {
      return false;
    }
  }
  /**
   * 获取配置
   * @param key 键
   * @param defaultValue 默认值
   */
  getOption(key: string, defaultValue?: ShortCutLocalStorageOption): ShortCutLocalStorageOption | undefined {
    const localOptions = this.getLocalAllOptions();
    const findOption = localOptions.find((item) => item.key === key);
    return findOption ?? defaultValue;
  }
  /**
   * 设置配置
   *
   * 存在就修改
   *
   * 不存在就添加
   * @param key 键
   * @param value 配置
   */
  setOption(key: string, value: ShortCutKeyboardOption) {
    const localOptions = this.getLocalAllOptions();
    const findIndex = localOptions.findIndex((item) => item.key === key);
    if (findIndex == -1) {
      // 不存在，添加新配置
      localOptions.push({
        key: key,
        value: value,
      });
    } else {
      // 存在，修改配置
      Reflect.set(localOptions[findIndex], "value", value);
    }
    this.initData(localOptions);
    GM_setValue(this.KEY, localOptions);
  }
  /**
   * 清空当前已有配置录入的值
   * @param key
   */
  emptyOption(key: string): boolean {
    let flag = false;
    const localOptions = this.getLocalAllOptions();
    const findIndex = localOptions.findIndex((item) => item.key === key);
    if (findIndex !== -1) {
      // 存在，设置value为null
      localOptions[findIndex].value = null;
      flag = true;
    }
    this.initData(localOptions);
    GM_setValue(this.KEY, localOptions);
    return flag;
  }
  /**
   * 删除配置
   * @param key 键
   */
  deleteOption(key: string): boolean {
    let flag = false;
    const localOptions = this.getLocalAllOptions();
    const findValueIndex = localOptions.findIndex((item) => item.key === key);
    if (findValueIndex !== -1) {
      localOptions.splice(findValueIndex, 1);
      flag = true;
    }
    this.initData(localOptions);
    GM_setValue(this.KEY, localOptions);
    return flag;
  }
  /**
   * 把配置的快捷键转成文字
   * @param keyboardValue
   */
  translateKeyboardValueToButtonText(keyboardValue: ShortCutKeyboardOption) {
    let result = "";
    keyboardValue.ohterCodeList.forEach((ohterCodeKey) => {
      result += utils.stringTitleToUpperCase(ohterCodeKey, true) + " + ";
    });
    if (keyboardValue.keyName === " ") {
      // 空格
      result += utils.stringTitleToUpperCase("space");
    } else {
      result += utils.stringTitleToUpperCase(keyboardValue.keyName);
    }
    return result;
  }
  /**
   * 获取快捷键显示的文字
   * @param key 本地存储的快捷键键名
   * @param defaultShowText 默认显示的文字
   */
  getShowText(key: string, defaultShowText: string) {
    if (this.hasOption(key)) {
      // 存在配置，转为需要显示的文字
      const localOption = this.getOption(key)!;
      if (localOption.value == null) {
        return defaultShowText;
      } else {
        return this.translateKeyboardValueToButtonText(localOption.value);
      }
    } else {
      // 没有录入配置，显示为默认的文字
      return defaultShowText;
    }
  }
  /**
   * 初始化全局键盘监听
   * @param shortCutOption 快捷键配置 一般是{ "键名": { callback: ()=>{}}}，键名是本地存储的自定义快捷键的键名
   * @param config 配置
   */
  initGlobalKeyboardListener(
    shortCutOption: ShortCutOption | ShortCutOption[],
    config?: {
      /** 是否阻止默认行为 */
      isPrevent?: boolean;
      /** 是否仅阻止事件的传播 */
      onlyStopPropagation?: boolean;
      /** 是否使用捕获 */
      capture?: boolean;
      /** 在调用配置的快捷键之前触发的回调，如果返回false则不触配置的快捷键的回调 */
      beforeCallBack?: () => void | boolean | Promise<void | boolean>;
    }
  ) {
    if (!this.#data.localOptions.length) {
      log.warn("快捷键配置为空");
      return;
    }
    /**
     * 设置监听事件
     * @param $target 监听目标
     * @param option 监听的配置
     */
    const setListenKeyboard = (
      $target: Element | Window,
      option: {
        menuKey: string;
        option: ShortCutOptionWindow | ShortCutOptionElement;
      }[]
    ) => {
      DOMUtils.onKeyboard(
        $target,
        "keydown",
        async (keyName, keyValue, ohterCodeList, event) => {
          if (this.#flag.isWaitPress) {
            return;
          }
          if (config?.isPrevent) {
            DOMUtils.preventEvent(event);
          }
          if (config?.onlyStopPropagation) {
            DOMUtils.preventEvent(event, true);
          }
          // 判断是否存在对应的快捷键配置
          const tempOption = {
            keyName: keyName,
            keyValue: keyValue,
            ohterCodeList: ohterCodeList,
          };
          const tempOptionStr = JSON.stringify(tempOption);
          const findShortcuts = this.#data.localOptions.filter((item) => {
            const __option = item.value;
            const __optionStr = JSON.stringify(__option);
            if (__optionStr === tempOptionStr) {
              return true;
            }
            return false;
          });
          if (findShortcuts.length) {
            for (const findShortcut of findShortcuts) {
              log.info("调用快捷键", findShortcut);
              if (typeof config?.beforeCallBack === "function") {
                const flag = await config.beforeCallBack();
                if (typeof flag === "boolean" && !flag) {
                  return;
                }
              }
              // 找快捷键对应的配置
              const targetOptions = option.filter((item) => {
                return item.menuKey === findShortcut.key;
              });
              if (targetOptions.length) {
                for (const option of targetOptions) {
                  await option.option.callback(findShortcut.key);
                }
              }
            }
          }
        },
        {
          capture: Boolean(config?.capture),
        }
      );
    };
    /**
     * 全局的配置
     */
    const WindowShortCutOptions: {
      menuKey: string;
      option: ShortCutOptionWindow;
    }[] = [];
    /**
     * 元素的配置
     */
    const ElementShortCutOptions: {
      menuKey: string;
      option: ShortCutOptionElement;
    }[] = [];
    if (!Array.isArray(shortCutOption)) {
      shortCutOption = [shortCutOption];
    }
    shortCutOption.forEach((shortCutOptionItem) => {
      Object.keys(shortCutOptionItem).forEach((menuKey) => {
        const option = shortCutOptionItem[menuKey];
        if (option.target == null || (typeof option.target === "string" && option.target === "")) {
          // null|undefined|""
          option.target = "window";
        }
        if (option.target === "window") {
          // 全局的
          WindowShortCutOptions.push({
            menuKey: menuKey,
            option: option as ShortCutOptionWindow,
          });
        } else {
          // 元素的
          ElementShortCutOptions.push({
            menuKey: menuKey,
            option: option as ShortCutOptionElement,
          });
        }
      });
    });

    // 先设置监听window的快捷键
    setListenKeyboard(window, WindowShortCutOptions);
    // 再设置监听元素的快捷键
    DOMUtils.onReady(() => {
      ElementShortCutOptions.forEach(async (ElementShortCutOption) => {
        const option = ElementShortCutOption.option;
        let target: Element | null | undefined | void = null;
        if (typeof option.target === "string") {
          target = await DOMUtils.waitNode(option.target, 10000);
        } else if (typeof option.target === "function") {
          target = await option.target();
        } else {
          target = option.target;
        }
        if (target) {
          setListenKeyboard(target, [ElementShortCutOption]);
        }
      });
    });
  }
  /**
   * 录入快捷键
   * @param key 本地存储的快捷键键名
   */
  async enterShortcutKeys(key: string): Promise<{
    /** 是否成功录入 */
    status: boolean;
    /** 当前配置的键名 */
    key: string;
    /** 录入的快捷键配置 */
    option: ShortCutKeyboardOption;
    /** 冲突的本地快捷键配置列表 */
    localConflictOptions: ShortCutLocalStorageOption[];
  }> {
    this.#flag.isWaitPress = true;
    return new Promise((resolve) => {
      const keyboardListener = DOMUtils.onKeyboard(window, "keyup", (keyName, keyValue, ohterCodeList) => {
        const currentOption: ShortCutKeyboardOption = {
          keyName: keyName,
          keyValue: keyValue,
          ohterCodeList: ohterCodeList,
        };
        let result = {} as Awaited<ReturnType<typeof this.enterShortcutKeys>>;
        try {
          /**
           * 当前录入的快捷键配置
           */
          const shortcutJSONString = JSON.stringify(currentOption);
          let allOptions = this.getLocalAllOptions();
          if (Array.isArray(this.#data.otherShortCutOptions)) {
            allOptions = allOptions.concat(this.#data.otherShortCutOptions);
          }
          // 检测重复配置
          const localConflictOptions = allOptions.filter((localValue) => {
            if (localValue.key === key) {
              // 忽略同一配置
              return false;
            }
            /**
             * 本地的快捷键配置
             */
            const localShortCutJSONString = JSON.stringify(localValue.value);
            if (localValue.value != null && shortcutJSONString === localShortCutJSONString) {
              // .value不为null且json字符串相同
              // 配置冲突
              return true;
            }
            return false;
          });
          if (localConflictOptions.length) {
            // 存在本地冲突的快捷键配置
            result = {
              status: false,
              key: key,
              option: currentOption,
              localConflictOptions: localConflictOptions,
            };
            return result;
          }
          this.setOption(key, currentOption);
          result = {
            status: true,
            key: key,
            option: currentOption,
            localConflictOptions: [],
          };
        } catch (error) {
          log.error(error);
          result = {
            status: false,
            key: key,
            option: currentOption,
            localConflictOptions: [],
          };
        } finally {
          if (typeof this.#data.currentWaitEnterPressInstanceHandler === "function") {
            this.#data.currentWaitEnterPressInstanceHandler();
          }
          this.#data.currentWaitEnterPressInstanceHandler = null;
          resolve(result);
        }
      });
      this.#data.currentWaitEnterPressInstanceHandler = null;
      this.#data.currentWaitEnterPressInstanceHandler = () => {
        this.#flag.isWaitPress = false;
        keyboardListener.off();
        this.#data.currentWaitEnterPressInstanceHandler = null;
      };
    });
  }
  /**
   * 取消当前的录入快捷键操作
   */
  cancelEnterShortcutKeys() {
    if (typeof this.#data.currentWaitEnterPressInstanceHandler === "function") {
      this.#data.currentWaitEnterPressInstanceHandler();
    }
  }
}

export {
  ShortCut
};

export type { 
  ShortCutOption,
  ShortCutKeyboardOption,
  ShortCutLocalStorageOption, ShortCutOptionElement,
  ShortCutOptionWindow 
};

