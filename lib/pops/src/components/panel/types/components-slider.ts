import type { PopsPanelCommonDetails } from "./components-common";

/**
 * pops.panel的 slider
 */
export interface PopsPanelSliderDetails extends PopsPanelCommonDetails<PopsPanelSliderDetails> {
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
   * 类型
   * @default "slider"
   */
  type: "slider";
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
  getToolTipContent?: (value: number) => string;
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
