import type { PopsPanelGeneralConfig } from "./components-common";

/**
 * pops.panel的 slider
 */
export interface PopsPanelSliderConfig extends PopsPanelGeneralConfig<PopsPanelSliderConfig> {
  /**
   * 组件类型
   */
  type: "slider";
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
   * 是否显示滑块的hover提示
   * @default true
   */
  isShowHoverTip?: boolean | (() => boolean);
  /**
   * 是否显示滑块的值的文本
   * @default false
   */
  isShowValueText?: boolean | (() => boolean);
  /**
   * 滑块值的显示文本的所在位置
   * @default "left"
   */
  valueTextPosition?: "left" | "right";
  /**
   * 滑块值的显示文本的宽度
   *
   * 如果显示的文字宽度超过，那么会造成滑块计算的宽度抖动，所以需要设置一个固定的宽度
   *
   * 请给它设置一个可能会显示的最长文字的宽度
   * @default "2em"
   */
  valueTextWidth?: string | ((value: number) => string);
  /**
   * 获取显示在左边|右边的文字
   * @param value 滑块的值
   */
  getShowValueText?(value: number): string;
  /**
   * 获取该项的值的回调函数
   */
  getValue(): number;
  /**
   * 滑块的值改变触发的回调函数
   */
  callback(event: InputEvent, value: number): void;
  /**
   * 获取tooltip的提示内容，可自定义，默认为slider的值
   */
  getToolTipContent?(value: number): string;
  /**
   * 滑块的最小值
   */
  min: number;
  /**
   * 滑块的最大值
   */
  max: number;
  /**
   * （可选）每次滑动的间隔值
   * @default 1
   */
  step?: number;
}
