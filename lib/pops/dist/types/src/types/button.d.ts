import type { PopsEventConfig, PopsHandlerEventConfig } from "./event";
import type { PopsIconType } from "./icon";
import type { PopsType } from "./main";

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
 * 按钮的点击回调参数event
 */
export interface PopsBtnCallBackEvent {
  /**
   * 元素
   */
  element: HTMLElement;
  /**
   * 动画元素（包裹着弹窗元素）
   */
  animElement: HTMLElement;
  /**
   * 弹窗元素
   */
  popsElement: HTMLElement;
  /**
   * 遮罩层元素
   */
  maskElement: HTMLElement | undefined;
  /**
   * 按钮调用类型
   */
  type: PopsButtonType;
  /**
   * 调用的方法
   */
  mode: PopsType;
  /**
   * 唯一id
   */
  guid: string;
  /**
   * 关闭弹窗
   */
  close(): void;
  /**
   * 隐藏弹窗
   */
  hide(): void;
  /**
   * 显示弹窗
   */
  show(): void;
}

/**
 * 按钮配置
 */
export interface PopsButtonDetails<T = object> {
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
export type PopsButtonDetailsAnyType<T = object> = Omit<PopsButtonDetails<T>, "type"> & {
  /**
   * 按钮样式类型
   * @default "default"
   */
  type: string;
};

/** prompt的点击回调 */
export interface PopsPromptButtonDetails extends PopsButtonDetails {
  callback(
    eventConfig: PopsHandlerEventConfig & {
      text: string;
    },
    event: PointerEvent | MouseEvent
  ): void;
}
/**
 * 右上角关闭按钮点击回调的配置
 */
export interface PopsHeaderCloseButtonClickCallBackEvent {
  /**
   * 动画元素（包裹着弹窗元素）
   */
  animElement: HTMLElement;
  /**
   * 遮罩层元素，如果未设置，那么不存在
   */
  maskElement?: HTMLElement;
  /**
   * 按钮调用类型
   */
  type: string;
  /**
   * 唯一id
   */
  guid: string;
  /**
   * 关闭弹窗
   */
  close(): void;
  /**
   * 隐藏弹窗
   */
  hide(): void;
  /**
   * 显示弹窗
   */
  show(): void;
  /**
   * 输入的内容
   */
  text: string;
}
/**
 * 顶部关闭按钮配置
 */
export interface PopsHeaderCloseButtonDetails {
  /**
   * 是否启用按钮
   */
  enable?: boolean;
  /**
   * 按钮点击的回调
   *
   * 如果传入该值，那么将不会自动关闭弹窗
   */
  callback?: (details: PopsEventConfig, event: PointerEvent | MouseEvent) => void;
}
