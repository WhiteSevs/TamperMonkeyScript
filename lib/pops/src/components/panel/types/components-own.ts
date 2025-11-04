import type { PopsPanelGeneralConfig } from "./components-common";

/**
 * pops.panel的 own
 * 自定义的
 */
export interface PopsPanelOwnConfig extends PopsPanelGeneralConfig<PopsPanelOwnConfig> {
  /**
   * 类型
   */
  type: "own";
  /**
   * 获取自定义<li>标签元素
   */
  getLiElementCallBack: (liElement: HTMLLIElement) => HTMLLIElement;
}
