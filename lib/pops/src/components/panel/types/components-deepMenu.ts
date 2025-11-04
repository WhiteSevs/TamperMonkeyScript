import type { PopsPanelViewConfig } from ".";
import type { PopsPanelContainerConfig } from "./components-container";
import type { PopsPanelGeneralConfig } from "./components-common";
/**
 * pops.panel的 深层视图的配置
 */
export interface PopsPanelDeepViewConfig extends PopsPanelGeneralConfig<PopsPanelDeepViewConfig> {
  /**
   * 类型
   */
  type: "deepMenu";
  /**
   * 显示在左边的文字
   */
  text: string;
  /**
   * （可选）左边的文字下面的描述
   */
  description?: string;
  /**
   * （可选）右侧的文字
   */
  rightText?: string;
  /**
   * （可选）右侧的箭头图标，默认启用
   */
  arrowRightIcon?: boolean;
  /**
   * 点击整行触发的事件，可为异步函数
   * @param event click事件
   * @returns
   * + true 表示阻止进入深层菜单
   * + false （默认）表示允许进入深层菜单
   */
  clickCallBack?: (
    event: MouseEvent | PointerEvent,
    viewConfig: PopsPanelDeepViewConfig
  ) => boolean | void | Promise<boolean | void>;
  /**
   * 进入深层菜单后触发的回调
   * @param viewConfig
   */
  afterEnterDeepMenuCallBack?: (
    viewConfig: PopsPanelDeepViewConfig,
    container: {
      /** 右侧的总容器 */
      $sectionContainer: HTMLElement;
      /** 右侧的总容器的标题头容器 */
      $sectionContainerHeaderContainer: HTMLUListElement;
      /** 右侧的总容器的标题头 */
      $sectionContainerHeader: HTMLLIElement;
      /** 右侧的内容容器 */
      $sectionBodyContainer: HTMLUListElement;
    }
  ) => void;
  /**
   * 菜单配置
   */
  views?: (PopsPanelContainerConfig | PopsPanelViewConfig)[];
  /**
   * （可选）头部的标题文字，没有的话默认是text
   */
  headerTitle?: string;
}
