import type { PopsPanelCommonDetails } from "./components-common";

/**
 * pops.panel的 own
 * 自定义的
 */
export interface PopsPanelOwnDetails extends PopsPanelCommonDetails<PopsPanelOwnDetails> {
  /**
   * 类型
   */
  type: "own";
  /**
   * 获取自定义<li>标签元素
   */
  getLiElementCallBack: (liElement: HTMLLIElement) => HTMLLIElement;
}
