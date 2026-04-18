type PanelMenuResultHandlerOption = {
  /**
   * 需要判断执行的键名
   *
   * 调用函数
   * + `checkMenuExec`
   */
  keyList: string[];
  /**
   * 获取键的是否启用的值
   *
   * 调用函数
   * + `getEnableStatus`
   */
  getValue(key: string): boolean;
  /**
   * 如果传入该函数，则keyList会被当成入参传入
   *
   * 调用函数
   * + `checkMenuExec`
   */
  checkExec?: (
    /**
     * 键名列表
     */
    keyList: string[]
  ) => boolean;
};

type PanelMenuExecMenuResultInst = {
  /**
   * 样式元素
   */
  $css?: (Element | null | undefined)[] | (Element | null | undefined);
  /**
   * 卸载函数，在菜单项为关闭状态时执行卸载
   */
  destory?: () => void;
};

type PanelMenuExecMenuResult =
  | PanelMenuExecMenuResultInst
  | Element
  | null
  | undefined
  | void
  | (Element | undefined | null | (() => void))[]
  | any
  | any[];

class PanelMenuResultsHandler {
  private data = {
    /**
     * 存储菜单返回的值，在监听到值改变且值为false时执行删除元素
     *
     * 例如：元素
     */
    storeNodeList: [] as Element[],
    /**
     * 执行卸载的函数
     */
    destoryFnList: [] as ((...args: any[]) => void)[],
  };
  private option = {} as PanelMenuResultHandlerOption;
  constructor(option: PanelMenuResultHandlerOption) {
    this.option = option;
  }
  /**
   * 处理返回值
   *
   * 存储元素，卸载函数
   * @param enableValue 启用状态
   * @param args 支持以下类型
   * + [Element、null、undefined、Function]
   * + Element
   * + Function
   * + null
   * + undefined
   * + ExecMenuResultInst
   */
  handlerResult(enableValue: boolean, args: any) {
    /**
     * 存储的元素（动态添加）
     */
    const dynamicMenuStoreNodeList: typeof this.data.storeNodeList = [];
    /**
     * 存储的卸载函数
     */
    const dynamicDestoryFnList: ((...args: any[]) => void)[] = [];
    let resultValueList: any[] = [];
    if (Array.isArray(args)) {
      resultValueList = resultValueList.concat(args);
    } else {
      // 额外处理ExecMenuResultInst类型
      const handleArgs = (obj: any) => {
        if (typeof obj === "object" && obj != null) {
          if (obj instanceof Element) {
            // 元素
            resultValueList.push(obj);
          } else {
            // 对象
            // 数组或其它
            if (Array.isArray(obj)) {
              handleArgs(obj);
            } else {
              const { $css, destory } = obj as PanelMenuExecMenuResultInst;
              // 判断 $css 类型
              if ($css != null) {
                // 元素
                if (Array.isArray($css)) {
                  resultValueList = resultValueList.concat($css);
                } else if ($css instanceof Element) {
                  resultValueList.push($css);
                } else {
                  // TODO
                }
              }
              // 判断 destory 类型
              if (typeof destory === "function") {
                resultValueList.push(destory);
              }
            }
          }
        } else {
          resultValueList.push(obj);
        }
      };
      handleArgs(args);
    }
    const handleResult = (it: any) => {
      if (it == null) {
        // 空的
        return;
      }
      if (it instanceof Element) {
        // 元素
        dynamicMenuStoreNodeList.push(it);
        return;
      }
      if (typeof it === "function") {
        // 函数（判断为卸载函数）
        dynamicDestoryFnList.push(it);
        return;
      }
    };
    for (const it of resultValueList) {
      const flag = handleResult(it);
      if (typeof flag === "boolean" && !flag) {
        break;
      }
      if (Array.isArray(it)) {
        // 数组套数组
        for (const it2 of it) {
          const flag2 = handleResult(it2);
          if (typeof flag2 === "boolean" && !flag2) {
            break;
          }
        }
      }
    }
    // 先执行旧的卸载函数和移除添加的元素
    // 清理之前存储的元素列表
    this.clearStoreNodeList();
    // 执行卸载函数
    this.execDestoryFnAndClear();
    if (enableValue) {
      // 执行
      // 追加存储的元素列表
      // 追加卸载函数
      this.data.storeNodeList = this.data.storeNodeList.concat(dynamicMenuStoreNodeList);
      this.data.destoryFnList = this.data.destoryFnList.concat(dynamicDestoryFnList);
    }
  }
  /**
   * 获取值
   */
  getEnableStatus(key: string) {
    const value = this.option.getValue(key);
    return Boolean(value);
  }
  /**
   * 清空已添加的元素
   */
  clearStoreNodeList = () => {
    for (let index = this.data.storeNodeList.length - 1; index >= 0; index--) {
      const $css = this.data.storeNodeList[index];
      $css?.remove();
      this.data.storeNodeList.splice(index, 1);
    }
  };
  /**
   * 执行卸载函数并清除
   */
  execDestoryFnAndClear = () => {
    for (let index = this.data.destoryFnList.length - 1; index >= 0; index--) {
      const destoryFnItem = this.data.destoryFnList[index];
      destoryFnItem();
      this.data.destoryFnList.splice(index, 1);
    }
  };
  /**
   * 判断执行
   */
  checkMenuExec() {
    let flag = false;
    if (typeof this.option.checkExec === "function") {
      flag = this.option.checkExec(this.option.keyList);
    } else {
      flag = this.option.keyList.every((key) => this.getEnableStatus(key));
    }
    return flag;
  }
}

export {
  PanelMenuResultsHandler,
  type PanelMenuExecMenuResult,
  type PanelMenuExecMenuResultInst,
  type PanelMenuResultHandlerOption,
};
