import type { PopsGeneralConfig } from "../../../types/components";
import type { PopsIconType } from "../../../types/icon";
import type { PopsPanelGeneralConfig } from "../../panel/types/components-common";

/**
 * 存储在pops.rightClickMenu的右键菜单根元素上的属性
 */
export type PopsRightClickMenuRootStoreNodeValue = {
  child: HTMLElement[];
};
/**
 * 存储在pops.rightClickMenu的右键菜单子菜单的根元素上的属性
 */
export type PopsRightClickMenuChildRootStoreNodeValue = {
  parent: HTMLElement;
  root: HTMLElement;
};
/**
 * 存储在pops.rightClickMenu的右键菜单每一项元素上的属性
 */
export type PopsRightClickMenuItemStoreNodeValue = {
  child?: HTMLElement;
  parent?: HTMLElement;
  root?: HTMLElement;
};

/**
 * pops.rightClickMenu的右键菜单配置
 */
export interface PopsRightClickMenuDataConfig {
  /**
   * svg图标，留空则是没图标
   * @default ""
   */
  icon?: PopsIconType | string;
  /**
   * 图标是否旋转
   * @default false
   */
  iconIsLoading?: boolean;
  /**
   * 文字
   */
  text: IFunction<string>;
  /**
   * 点击的回调函数
   * @param clickEvent 点击菜单的click事件
   * @param contextMenuEvent 触发的contextmenu事件
   * @param $li <li>元素
   * @param $listenerRootNode 右键菜单监听的元素
   * @returns
   * + true(默认) 关闭菜单
   * + false 不关闭菜单
   *
   */
  callback?: (
    clickEvent: PointerEvent,
    contextMenuEvent: PointerEvent,
    $li: HTMLLIElement,
    $listenerRootNode: NonNullable<PopsRightClickMenuConfig["$target"]>
  ) => IPromise<boolean | void>;
  /**
   * 子项配置
   */
  item?: PopsRightClickMenuDataConfig[] | null;
}

/**
 * pops.rightClickMenu
 */
export interface PopsRightClickMenuConfig
  extends Pick<PopsGeneralConfig, "useShadowRoot" | "beforeAppendToPageCallBack" | "zIndex" | "style" | "only"> {
  /**
   * 目标元素
   * @default document.documentElement
   */
  $target?: HTMLElement | Window | EventTarget | Node;
  /**
   * 目标的子元素选择器，默认为空
   * @default null
   */
  targetSelector?: string | null;
  /**
   * 位置
   * @default "fixed"
   */
  position?: "absolute" | "fixed";
  /**
   * 右键菜单数据
   */
  data: PopsRightClickMenuDataConfig[];
  /**
   * 子菜单的左右偏移距离
   * @default 0
   */
  chileMenuLeftOrRightDistance?: number;
  /**
   * 子菜单的上下偏移距离
   * @default 0
   */
  childMenuTopOrBottomDistance?: number;
  /**
   * （可选）元素的className，值为空的话就不设置
   * @default ""
   */
  className?: PopsPanelGeneralConfig<any>["className"];
  /**
   * 是否启用动画，默认false
   *
   * 该动画为从上往下展开
   * @default false
   */
  isAnimation?: boolean;
  /**
   * 是否使用打开动画，默认true
   *
   * 该动画为放大动画
   * @default true
   */
  useScaleAnimation?: boolean;
  /**
   * 是否阻止默认contextmenu事件
   * @default false
   */
  preventDefault?: boolean;
  /**
   * 限制x位置在当前视窗内
   * @default true
   */
  limitPositionXInView?: boolean;
  /**
   * 限制y位置在当前视窗内
   * @default true
   */
  limitPositionYInView?: boolean;
  /**
   * 菜单显示前的回调
   * @returns
   *
   * + `false`：阻止默认行为（显示菜单）
   */
  beforeShowCallBack?(event: PointerEvent): IPromise<false | void>;
}
