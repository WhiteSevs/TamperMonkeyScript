import type { PopsType } from "./main";

/**
 * 事件配置
 */
export interface PopsEventConfig {
  /** 最外层包裹的元素 */
  $shadowContainer: HTMLDivElement;
  /** ShadowRoot */
  $shadowRoot: ShadowRoot | HTMLElement;
  /** -> 动画层 */
  $el: HTMLDivElement;
  /** 动画层 */
  $anim: HTMLDivElement;
  /** 主元素 */
  $pops: HTMLDivElement;
  /** 遮罩层 */
  $mask?: HTMLDivElement;
  /** 当前弹窗类型 */
  mode: PopsType;
  /** 唯一id */
  guid: string;
  /**
   * 关闭弹窗
   */
  close(): Promise<void>;
  /**
   * 隐藏弹窗
   */
  hide(): Promise<void>;
  /**
   * 显示弹出
   */
  show($parent?: HTMLElement | Document | ShadowRoot): Promise<void>;
}

/**
 * 处理过的事件配置
 */
export interface PopsHandlerEventConfig extends PopsEventConfig {
  /** 当前按钮类型 */
  type: "cancel" | "close" | "ok" | "other";
}
