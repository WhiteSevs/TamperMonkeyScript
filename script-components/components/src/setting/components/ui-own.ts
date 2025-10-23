import type { PopsPanelOwnDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-own";
import type { PopsPanelRightAsideContainerOptions } from "@whitesev/pops/dist/types/src/components/panel/types/components-common";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { ATTRIBUTE_INIT, ATTRIBUTE_INIT_MORE_VALUE, ATTRIBUTE_PLUGIN_SEARCH_CONFIG } from "../panel-config";

/**
 * 搜索配置项
 */
export type UIOwnSearchConfig = {
  /**
   * 左侧文字
   */
  text: string;
  /**
   * （可选）左侧下面的描述文字
   */
  desc?: string;
};
/**
 * 自定义配置
 * @param getLiElementCallBack
 * @param initConfig （可选）初始化的配置，{"键": "默认值", "键2": "默认值2"}
 * @param searchConfig （可选）搜索配置项，用于搜索插件进行搜索内容
 * @param attr （可选）元素的属性
 * @param props （可选）元素的属性
 * @param afterAddToUListCallBack （可选）在添加到元素后触发该回调
 */
export const UIOwn = function (
  getLiElementCallBack: ($li: HTMLLIElement) => HTMLLIElement,
  initConfig?: { [key: string]: any },
  searchConfig?: UIOwnSearchConfig,
  attr?: {
    [key: string]: string | number | boolean;
  },
  props?:
    | {
        [K in keyof HTMLElement]?: HTMLElement[K];
      }
    | undefined,
  afterAddToUListCallBack?:
    | ((formConfig: PopsPanelFormsTotalDetails, containerOption: PopsPanelRightAsideContainerOptions) => void)
    | undefined
): PopsPanelOwnDetails {
  const result: PopsPanelOwnDetails = {
    type: "own",
    attributes: attr || {},
    props: props || {},
    getLiElementCallBack: getLiElementCallBack,
    afterAddToUListCallBack: afterAddToUListCallBack,
  };

  if (typeof initConfig === "object" && initConfig !== null && Object.keys(initConfig).length > 0) {
    Reflect.set(result.attributes!, ATTRIBUTE_INIT_MORE_VALUE, initConfig);
  } else {
    Reflect.set(result.attributes!, ATTRIBUTE_INIT, () => false);
  }
  if (typeof searchConfig === "object" && searchConfig !== null) {
    Reflect.set(result.attributes!, ATTRIBUTE_PLUGIN_SEARCH_CONFIG, searchConfig);
  }
  return result;
};
