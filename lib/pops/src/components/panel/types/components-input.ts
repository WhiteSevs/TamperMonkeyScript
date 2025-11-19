import type { PopsPanelGeneralConfig } from "./components-common";

/**
 * pops.panel的input的字符串type类型
 */
export type PopsPanelInputStringType = "text" | "color" | "search" | "email" | "tel" | "url";
/**
 * pops.panel的input的日期type类型
 */
export type PopsPanelInputDateType = "date" | "datetime-local" | "time" | "month" | "week";
/**
 * pops.panel的input的数字ype类型
 */
export type PopsPanelInputNumberType = "number";
/**
 * pops.panel的input的密码type类型
 */
export type PopsPanelInputPasswordType = "password";
/**
 * pops.panel的input的文件type类型
 */
export type PopsPanelInputFileType = "file";
/**
 * pops.panel的input的type类型
 */
export type PopsPanelInputType =
  | PopsPanelInputStringType
  | PopsPanelInputDateType
  | PopsPanelInputNumberType
  | PopsPanelInputPasswordType
  | PopsPanelInputFileType;
/**
 * pops.panel的 input
 */
export interface PopsPanelInputConfig extends PopsPanelGeneralConfig<PopsPanelInputConfig> {
  /**
   * 组件类型
   */
  type: "input";
  /**
   * （可选）输入框类型
   * @default "text"
   */
  inputType?: PopsPanelInputType;
  /**
   * 显示在左边的文字
   */
  text: string;
  /**
   * （可选）左边的文字下面的描述
   * @default ""
   */
  description?: string;
  /**
   * （可选）是否禁用
   * @default false
   */
  disabled?: boolean | (() => boolean);
  /**
   * 获取该项的值的回调函数
   *
   * 组件初始化后会调用一次，用于初始话默认值
   */
  getValue(): string | number | Date;
  /**
   * 输入框的值改变触发的回调函数
   * @param event 输入事件
   * @param value 输入框的值
   * @param valueAsNumber 如果inputType为number或日期类型，存在该值，类型为number（可能为isNaN），否则为undefined
   * @param valueAsDate 如果inputType为日期类型，存在该值，类型为Date（可能为null），否则为undefined
   */
  callback(
    event: InputEvent,
    value: string,
    valueAsNumber?: number,
    valueAsDate?: Date | null
  ): void | {
    valid: boolean;
    message?: string;
  };
  /**
   * （可选）输入框内的提示
   * @default ""
   */
  placeholder?: string;
  /**
   * （可选）初始化后调用的回调函数
   */
  handlerCallBack?($li: HTMLLIElement, $input: HTMLInputElement): void;
}
