import type { PopsAnimation } from "./animation";
import type { PopsPosition, PopsTextAlign, PopsJustifyContent } from "./position";
import type { PopsGlobalButtonConfig, PopsButtonConfigAnyType, PopsHeaderCloseButtonConfig } from "./button";
import type { PopsMaskConfig } from "./mask";
import type { EventEmiter } from "../event/EventEmiter";
import type { EventMap } from "./EventEmitter";

/**
 * 标题配置
 */
export interface PopsTitleConfig {
  title: {
    /**
     * 标题文字
     */
    text?: string;
    /**
     * 标题文字的位置
     * @default "left"
     */
    position?: PopsTextAlign;
    /**
     * 标题文字是否是html
     * @default false
     */
    html?: boolean;
    /**
     * 自定义CSS
     */
    style?: string;
  };
}

/**
 * 内容配置
 */
export interface PopsContentConfig {
  content: {
    /**
     * 内容文字
     */
    text?: string;
    /**
     * 内容文字是否是html
     * @default false
     */
    html?: boolean;
    /**
     * 自定义CSS
     */
    style?: string;
  };
}
/**
 * 按钮配置
 */
export interface PopsButtonConfig {
  btn?: {
    /**
     * 按钮的位置
     * @default "flex-end"
     */
    position?: PopsJustifyContent;
    /**
     * 右上角的关闭按钮
     */
    close?: PopsHeaderCloseButtonConfig;
  };
}
/**
 * 按钮的其它配置
 */
export interface PopsMoreButtonConfig<T = object> {
  btn?: PopsButtonConfig["btn"] & {
    /**
     * 是否合并按钮
     * @default false
     */
    merge?: boolean;
    /**
     * 是否对合并的按钮逆反
     * @default false
     */
    mergeReverse?: boolean;
    /**
     * 是否逆反
     * @default false
     */
    reverse?: boolean;
    /**
     * 确定按钮
     */
    ok?: Partial<PopsGlobalButtonConfig<T> | PopsButtonConfigAnyType<T>>;
    /**
     * 取消按钮
     */
    cancel?: Partial<PopsGlobalButtonConfig<T> | PopsButtonConfigAnyType<T>>;
    /**
     * 其他按钮
     */
    other?: Partial<PopsGlobalButtonConfig<T> | PopsButtonConfigAnyType<T>>;
  };
}
/**
 * 拖拽(标题栏)的配置
 */
export interface PopsDragConfig {
  /**
   *  是否可以按钮标题栏进行拖拽，默认false
   * @default false
   */
  drag?: boolean;
  /**
   * 是否限制拖拽在浏览器窗口内移动，默认true
   * @default true
   */
  dragLimit?: boolean;
  /**
   * 当启用dragLimit时，该参数为弹窗在窗口中的距离边际的距离，默认为3(px)
   * @default 3
   */
  dragExtraDistance?: number;
  /**
   * （可选）拖动中的回调
   * @param moveElement 当前拖动的元素
   * @param left 当前left值
   * @param top 当前的top值
   */
  dragMoveCallBack?: (moveElement: HTMLElement, left: number, top: number) => void;
  /**
   * （可选）拖动结束的回调
   * @param moveElement 当前拖动的元素
   * @param left 当前left值
   * @param top 当前的top值
   */
  dragEndCallBack?: (moveElement: HTMLElement, left: number, top: number) => void;
}
/**
 * 通用配置
 */
export interface PopsGeneralConfig {
  /**
   * 是否使用shadowRoot
   * @default true
   */
  useShadowRoot?: boolean;
  /**
   * 自定义的className
   * @default ""
   */
  class?: string;
  /**
   * 是否是唯一的
   * @default false
   */
  only?: boolean;
  /**
   *  宽度
   * @default "350px"
   */
  width: string;
  /**
   *  高度
   * @default "200px"
   */
  height: string;
  /**
   * 位置
   * @default "center"
   */
  position?: PopsPosition;
  /**
   * 动画
   * @default "pops-anim-fadein-zoom"
   */
  animation?: PopsAnimation | false;
  /**
   * z-index显示层级
   * @default 10000
   */
  zIndex?: IFunction<number>;
  /**
   * 遮罩层
   */
  mask?: PopsMaskConfig;
  /**
   * 是否禁用页面滚动
   *
   * 暂时不会生效
   * @default false
   */
  forbiddenScroll?: boolean;
  /**
   * （可选）自定义style
   * @default null
   */
  style?: string | null;
  /**
   * （可选）自定义浅色模式的style
   *
   * css都在`@media (prefers-color-scheme: light)`内
   * @default null
   */
  lightStyle?: string | null;
  /**
   * （可选）自定义深色模式的style
   *
   * css都在`@media (prefers-color-scheme: dark)`内
   * @default null
   */
  darkStyle?: string | null;
  /**
   * （可选）是否阻止`keydown`事件传播
   *
   * 主要是阻止当`keydown`触发来源为输入框时，即在输入框内按下按键不会触发页面的快捷键
   * @default true 阻止
   */
  stopKeyDownEventPropagation?: boolean;
  /**
   * 可传入自定义事件监听器代替内部的eventEmitter
   *
   * 一般用于监听内部处理的事件
   *
   * 某些事件如：`pops:before-append-to-page`会提前触发，那么就需要自定义的监听器来监听
   */
  emitter?: EventEmiter | null | undefined;
}
