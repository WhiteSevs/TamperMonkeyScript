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
  guid: string;
  close: () => Promise<void>;
  hide: () => Promise<void>;
  show: () => Promise<void>;
}

/**
 * 处理过的事件配置
 */
export interface PopsHandlerEventConfig extends PopsEventConfig {
  /** 当前按钮类型 */
  type: "cancel" | "close" | "ok" | "other";
}
