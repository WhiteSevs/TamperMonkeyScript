import type { PopsAlertConfig } from "../../alert/types";
import type { PopsPanelGeneralConfig } from "./components-common";

export interface PopsPanelSelectMultipleDataOption<T> {
  /**
   * 真正的值
   */
  value: T;
  /**
   * 显示的文字
   */
  text:
    | string
    | ((
        /** 当前的值 */
        value: T,
        /** 所有选中的配置信息 */
        allSelectedInfo: PopsPanelSelectMultipleDataOption<T>[]
      ) => string);
  /**
   * 显示的文字是否是html
   * @default false
   */
  isHTML?: boolean;
  /**
   * （可选）是否禁用项
   * 触发条件：
   * + 点击select元素
   * + select元素触发change事件
   * @param value 当前的值
   * @param allSelectedInfo 所有选中的配置信息
   */
  disable?(value: T, allSelectedInfo: PopsPanelSelectMultipleDataOption<T>[]): boolean;
}
/**
 * pops.panel的 select
 */
export interface PopsPanelSelectMultipleConfig<T = any>
  extends PopsPanelGeneralConfig<PopsPanelSelectMultipleConfig<T>> {
  /**
   * 组件类型
   */
  type: "select-multiple";
  /**
   * 显示在左边的文字
   */
  text: string;
  /**
   * （可选）左边的文字下面的描述
   */
  description?: string;
  /**
   * （可选）是否禁用
   */
  disabled?: boolean | (() => boolean);
  /**
   * 提示文字
   */
  placeholder?: string | (() => string);
  /**
   * 获取该项的值的回调函数
   */
  getValue(): T[];
  /**
   * 选择器的值改变触发的回调函数
   * @param isSelectedInfo 当前已选中的信息
   */
  callback?(isSelectedInfo: PopsPanelSelectMultipleDataOption<T>[]): void;
  /**
   * 点击某个项的元素触发该回调
   * @param event 点击事件
   * @returns 如果返回boolean为false，则不会触发默认的点击事件
   */
  clickCallBack?(
    event: PointerEvent | MouseEvent,
    /** 当前已选中的信息 */
    isSelectedInfo: PopsPanelSelectMultipleDataOption<T>[]
  ): void | boolean;
  /**
   * 点击标签tag的关闭图标触发该回调
   * 如果返回boolean类型且为false，则阻止默认的事件
   */
  closeIconClickCallBack?: (
    event: PointerEvent | MouseEvent,
    data: {
      /** 标签元素 */
      $tag: HTMLElement;
      /** 关闭图标元素 */
      $closeIcon: HTMLElement;
      /** 值 */
      value: T;
      /** 显示的文字 */
      text: PopsPanelSelectMultipleDataOption<T>["text"];
    }
  ) => void | boolean;
  /**
   * 选择列表内的数据
   */
  data: PopsPanelSelectMultipleDataOption<T>[];
  /**
   * 弹出的下拉列表弹窗的配置
   */
  selectConfirmDialogConfig?: Partial<PopsAlertConfig>;
}
