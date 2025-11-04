import type { PopsEventConfig, PopsHandlerEventConfig } from "./event";
import type { PopsIconType } from "./icon";

/**
 * 按钮类型
 */
export type PopsButtonType = "close" | "ok" | "cancel" | "other";
/**
 * 按钮样式类型
 */
export type PopsButtonStyleType =
  | "default"
  | "primary"
  | "xiaomi-primary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "violet";

/**
 * 按钮大小
 */
export type PopsButtonSize = "large" | "small";

/**
 * 按钮配置
 */
export interface PopsGlobalButtonConfig<T = object> {
  /**
   * 是否启用按钮
   */
  enable: boolean;
  /**
   * 图标按钮，如果名字为内置的，则使用内置的，否则为自定义的svg
   */
  icon: PopsIconType;
  /**
   * 图标按钮是否放在右边
   */
  rightIcon: boolean;
  /**
   * 图标按钮是否是旋转360°
   * @default false
   */
  iconIsLoading: boolean;
  /**
   * 按钮尺寸大小
   * @default ""
   */
  size: PopsButtonSize | "";
  /**
   * 按钮样式类型
   * @default "default"
   */
  type: PopsButtonStyleType;
  /**
   * 按钮文字，默认为空
   */
  text: string;
  /**
   * 按钮点击的回调
   *
   * 如果传入该值，那么将不会自动关闭弹窗
   */
  callback(eventConfig: PopsHandlerEventConfig & T, event: PointerEvent | MouseEvent): void;
}

/**
 * 按钮配置（匹配任意类型）
 */
export type PopsButtonConfigAnyType<T = object> = Omit<PopsGlobalButtonConfig<T>, "type"> & {
  /**
   * 按钮样式类型
   * @default "default"
   */
  type: string;
};

/**
 * 顶部关闭按钮配置
 */
export interface PopsHeaderCloseButtonConfig {
  /**
   * 是否启用按钮
   */
  enable?: boolean;
  /**
   * 按钮点击的回调
   *
   * 如果传入该值，那么将不会自动关闭弹窗
   */
  callback?: (eventConfig: PopsEventConfig, event: PointerEvent | MouseEvent) => void;
}
