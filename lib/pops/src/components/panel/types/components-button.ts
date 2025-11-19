import type { PopsPanelGeneralConfig } from "./components-common";
import type { PopsButtonStyleType } from "../../../types/button";
import type { PopsIconType } from "../../../types/icon";
/**
 * pops.panel的 button
 */
export interface PopsPanelButtonConfig extends PopsPanelGeneralConfig<PopsPanelButtonConfig> {
  /**
   * 组件类型
   */
  type: "button";
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
   * @default false
   */
  disable?: boolean;
  /**
   * 按钮的类型
   */
  buttonType: PopsButtonStyleType;
  /**
   * 按钮的文字
   */
  buttonText: string | (() => string);
  /**
   * 按钮的图标，已配置的svg请看pops.config.iconSVG，或者自定义的图标svg代码，留空则是没有图标
   * @default ""
   */
  buttonIcon?: PopsIconType;
  /**
   * 按钮的图标在右边
   * + true 右边
   * + false 左边
   * @default false
   */
  buttonIsRightIcon?: boolean;
  /**
   * 按钮的图标旋转
   * + true 旋转
   * + false 不旋转
   * @default false
   */
  buttonIconIsLoading?: boolean;
  /**
   * 点击button触发的事件
   */
  callback: (event: MouseEvent | PointerEvent) => void;
}
