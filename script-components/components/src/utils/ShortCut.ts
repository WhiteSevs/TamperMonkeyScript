import { GM_getValue, GM_setValue } from "ViteGM";
import { DOMUtils, log, utils } from "../base.env";

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
   */
  callback(): void;
};

type ShortCutOptionElement = {
  /**
   * 需要触发的目标 元素选择器
   *
   * target不能为document，因为会先触发window的事件
   * @default "window"
   */
  target?: string | Element | (() => IPromise<Element | void>);
  /**
   * 触发该快捷键的回调
   */
  callback(): void;
};

/** 监听全局的快捷键配置 */
type ShortCutOption = {
  [key: string]: ShortCutOptionWindow | ShortCutOptionElement;
};

/** 快捷键 */
class ShortCut {
  /** 存储的键 */
  private key: string = "short-cut";
  /** 配置 */
  private $data;
  /** 是否存在等待按下的按键 */
  isWaitPress: boolean = false;
  /**
   * 当前等待按下的按键实例
   */
  private currentWaitEnterPressInstanceHandler: Function | null = null;
  constructor(key?: string) {
    if (typeof key === "string") {
      this.key = key;
    }
    this.$data = {
      /**
       * 其它实例的快捷键的配置
       *
       * 这里一般是用于在录入快捷键时判断是否存在重复的快捷键
       */
      otherShortCutOptions: [] as ShortCutLocalStorageOption[],
    };
  }
  /**
   * 初始化配置默认值
   */
  initConfig(key: string, option: ShortCutKeyboardOption) {
    if (this.hasOption(key)) {
      // 已存在该配置，跳过设置
    } else {
      this.setOption(key, option);
    }
  }
  /** 获取存储的键 */
  getStorageKey(): string {
    return this.key;
  }
  /**
   * 获取本地存储的所有值
   */
  getLocalAllOptions(): ShortCutLocalStorageOption[] {
    return GM_getValue<ShortCutLocalStorageOption[]>(this.key, []);
  }
  /**
   * 判断是否存在该配置
   * @param key 键
   */
  hasOption(key: string): boolean {
    let localOptions = this.getLocalAllOptions();
    let findOption = localOptions.find((item) => item.key === key);
    return !!findOption;
  }
  /**
   * 判断是否存在该配置的value值
   * @param key 键
   */
  hasOptionValue(key: string): boolean {
    if (this.hasOption(key)) {
      let option = this.getOption(key);
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
    let localOptions = this.getLocalAllOptions();
    let findOption = localOptions.find((item) => item.key === key);
    return findOption ?? defaultValue;
  }
  /**
   * 设置配置
   * @param key 键
   * @param value 配置
   */
  setOption(key: string, value: ShortCutKeyboardOption) {
    let localOptions = this.getLocalAllOptions();
    let findIndex = localOptions.findIndex((item) => item.key === key);
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
    GM_setValue(this.key, localOptions);
  }
  /**
   * 清空当前已有配置录入的值
   * @param key
   */
  emptyOption(key: string): boolean {
    let result = false;
    let localOptions = this.getLocalAllOptions();
    let findIndex = localOptions.findIndex((item) => item.key === key);
    if (findIndex !== -1) {
      // 存在，设置value为null
      localOptions[findIndex].value = null;
      result = true;
    }
    GM_setValue(this.key, localOptions);
    return result;
  }
  /**
   * 删除配置
   * @param key 键
   */
  deleteOption(key: string): boolean {
    let result = false;
    let localValue = this.getLocalAllOptions();
    let findValueIndex = localValue.findIndex((item) => item.key === key);
    if (findValueIndex !== -1) {
      localValue.splice(findValueIndex, 1);
      result = true;
    }
    GM_setValue(this.key, localValue);
    return result;
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
    result += utils.stringTitleToUpperCase(keyboardValue.keyName);
    return result;
  }
  /**
   * 获取快捷键显示的文字
   * @param key 本地存储的快捷键键名
   * @param defaultShowText 默认显示的文字
   */
  getShowText(key: string, defaultShowText: string) {
    if (this.hasOption(key)) {
      /* 获取到，转需要显示的文字 */
      let localOption = this.getOption(key)!;
      if (localOption.value == null) {
        return defaultShowText;
      } else {
        return this.translateKeyboardValueToButtonText(localOption.value);
      }
    } else {
      /* 没有录入配置，显示为默认的文字 */
      return defaultShowText;
    }
  }
  /**
   * 录入快捷键
   * @param key 本地存储的快捷键键名
   */
  async enterShortcutKeys(key: string): Promise<{
    /** 是否成功录入 */
    status: boolean;
    /** 设置面板中的键名 */
    key: string;
    /** 快捷键配置 */
    option: ShortCutKeyboardOption;
  }> {
    const that = this;
    return new Promise((resolve) => {
      this.isWaitPress = true;
      let keyboardListener = DOMUtils.onKeyboard(window, "keyup", (keyName, keyValue, ohterCodeList) => {
        const currentOption: ShortCutKeyboardOption = {
          keyName: keyName,
          keyValue: keyValue,
          ohterCodeList: ohterCodeList,
        };
        let result = {} as Awaited<ReturnType<typeof this.enterShortcutKeys>>;
        try {
          const shortcutJSONString = JSON.stringify(currentOption);
          const allOptions = this.getLocalAllOptions();
          if (Array.isArray(this.$data.otherShortCutOptions)) {
            allOptions.push(...this.$data.otherShortCutOptions);
          }
          for (let index = 0; index < allOptions.length; index++) {
            let localValue = allOptions[index];
            if (localValue.key === key) {
              // 同一个配置的就不做判断了
              continue;
            }
            const localShortCutJSONString = JSON.stringify(localValue.value);
            // 是否被其它快捷键占用
            let isUsedByOtherOption = false;
            if (localValue.value != null && shortcutJSONString === localShortCutJSONString) {
              // .value不为null且相同
              isUsedByOtherOption = true;
            }
            if (isUsedByOtherOption) {
              // 快捷键被占用
              result = {
                status: false,
                key: localValue.key,
                option: currentOption,
              };
              return;
            }
          }
          this.setOption(key, currentOption);
          result = {
            status: true,
            key: key,
            option: currentOption,
          };
        } catch (error) {
          console.log(error);
          result = {
            status: false,
            key: key,
            option: currentOption,
          };
        } finally {
          that.isWaitPress = false;
          keyboardListener.removeListen();
          that.currentWaitEnterPressInstanceHandler = null;
          resolve(result);
        }
      });
      that.currentWaitEnterPressInstanceHandler = null;
      that.currentWaitEnterPressInstanceHandler = () => {
        that.isWaitPress = false;
        keyboardListener.removeListen();
      };
    });
  }
  /**
   * 取消当前的录入快捷键操作
   */
  cancelEnterShortcutKeys() {
    if (typeof this.currentWaitEnterPressInstanceHandler === "function") {
      this.currentWaitEnterPressInstanceHandler();
    }
  }
  /**
   * 初始化全局键盘监听
   * @param shortCutOption 快捷键配置 一般是{ "键名": { callback: ()=>{}}}，键名是本地存储的自定义快捷键的键名
   * @param config 配置
   */
  initGlobalKeyboardListener(
    shortCutOption: ShortCutOption,
    config?: {
      /** 是否阻止默认行为 */
      isPrevent?: boolean;
      /** 是否使用捕获 */
      capture?: boolean;
    }
  ) {
    let localOptions = this.getLocalAllOptions();
    if (!localOptions.length) {
      log.warn("没有设置快捷键");
      return;
    }
    const that = this;
    /**
     * 设置监听事件
     * @param $ele 监听目标
     * @param option 监听的配置
     */
    function setListenKeyboard($ele: Element | Window, option: ShortCutOption) {
      DOMUtils.onKeyboard(
        $ele,
        "keydown",
        (keyName, keyValue, ohterCodeList, event) => {
          if (that.isWaitPress) {
            return;
          }
          if (config?.isPrevent) {
            DOMUtils.preventEvent(event);
          }
          /** 获取本地存储的已有的配置 */
          localOptions = that.getLocalAllOptions();
          // 判断是否存在对应的快捷键配置
          let findShortcutIndex = localOptions.findIndex((item) => {
            let option = item.value;
            let tempOption = {
              keyName: keyName,
              keyValue: keyValue,
              ohterCodeList: ohterCodeList,
            };
            if (JSON.stringify(option) === JSON.stringify(tempOption)) {
              return item;
            }
          });
          if (findShortcutIndex != -1) {
            let findShortcut = localOptions[findShortcutIndex];
            if (findShortcut.key in option) {
              log.info(["调用快捷键", findShortcut]);
              option[findShortcut.key].callback();
            }
          }
        },
        {
          capture: Boolean(config?.capture),
        }
      );
    }
    // 全局的配置
    let WindowShortCutOption: {
      [key: string]: ShortCutOptionWindow;
    } = {};
    // 元素的配置
    let ElementShortCutOption: {
      [key: string]: ShortCutOptionElement;
    } = {};
    Object.keys(shortCutOption).forEach((localKey) => {
      let option = shortCutOption[localKey];
      if (option.target == null || (typeof option.target === "string" && option.target === "")) {
        // null|undefined|""
        option.target = "window";
      }
      if (option.target === "window") {
        // 全局的
        Reflect.set(WindowShortCutOption, localKey, option);
      } else {
        // 元素的
        Reflect.set(ElementShortCutOption, localKey, option);
      }
    });
    setListenKeyboard(window, WindowShortCutOption);

    DOMUtils.onReady(() => {
      Object.keys(ElementShortCutOption).forEach(async (localKey) => {
        let option = ElementShortCutOption[localKey];
        if (typeof option.target === "string") {
          DOMUtils.waitNode(option.target, 10000).then(($ele) => {
            if (!$ele) {
              return;
            }
            let __option: ShortCutOption = {};
            Reflect.set(__option, localKey, option);
            setListenKeyboard($ele, __option);
          });
        } else if (typeof option.target === "function") {
          let target = await option.target();
          if (target == null) {
            return;
          }
          let __option: ShortCutOption = {};
          Reflect.set(__option, localKey, option);
          setListenKeyboard(target, __option);
        } else {
          let __option: ShortCutOption = {};
          Reflect.set(__option, localKey, option);
          setListenKeyboard(option.target!, __option);
        }
      });
    });
  }
}

export {
  ShortCut,
  type ShortCutKeyboardOption,
  type ShortCutLocalStorageOption,
  type ShortCutOption,
  type ShortCutOptionElement,
  type ShortCutOptionWindow,
};
