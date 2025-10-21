import type { PopsTitleConfig, PopsDragConfig, PopsCommonConfig } from "../../../types/components";

import type { PopsEventConfig } from "../../../types/event";

/**
 * pops.iframe的按钮的点击回调参数event
 */
export interface PopsBtnIframeCallBackEvent {
  /**
   * 动画元素（包裹着弹窗元素）
   */
  animElement: HTMLElement;
  /**
   * 弹窗元素
   */
  popsElement: HTMLElement;
  /**
   * 遮罩层元素，如果未设置，那么不存在
   */
  maskElement?: HTMLElement;
  /**
   * iframe元素
   */
  iframePopsElement: HTMLIFrameElement;
  /**
   * 使用的方法名
   */
  function: "iframe";
  /**
   * 唯一id
   */
  guid: string;
}

/**
 * pops.iframe
 */
export interface PopsIframeDetails extends PopsTitleConfig, PopsDragConfig, PopsCommonConfig {
  /**
   * 加载配置
   */
  loading: {
    /**
     * 是否启用加载中的loading
     */
    enable: boolean;
    /**
     * 是否启用loading图标
     */
    icon: boolean;
    /**
     * 文字
     */
    text: string;
  };
  /**
   * 按钮配置
   */
  btn: {
    /**
     * 最小化
     */
    min: {
      /**
       * 点击的回调函数
       */
      callback: (
        eventConfig: PopsEventConfig & {
          iframeElement: HTMLIFrameElement;
        },
        event: MouseEvent | PointerEvent
      ) => void;
    };
    /**
     * 最大化
     */
    max: {
      /**
       * 点击的回调函数
       */
      callback: (
        eventConfig: PopsEventConfig & {
          iframeElement: HTMLIFrameElement;
        },
        event: MouseEvent | PointerEvent
      ) => void;
    };
    /**
     * 窗口化
     */
    mise: {
      /**
       * 点击的回调函数
       */
      callback: (
        eventConfig: PopsEventConfig & {
          iframeElement: HTMLIFrameElement;
        },
        event: MouseEvent | PointerEvent
      ) => void;
    };
    /**
     * 关闭
     */
    close: {
      /**
       * 点击的回调函数
       */
      callback: (
        eventConfig: PopsEventConfig & {
          iframeElement: HTMLIFrameElement;
        },
        event: MouseEvent | PointerEvent
      ) => void;
    };
  };
  /**
   * 加载的地址，默认为window.location.href
   * @default window.location.href
   */
  url?: string;
  /**
   * 右上角按钮顺序：最小化、最大化、窗口化、关闭
   */
  topRightButton: "min|max|mise|close";
  /**
   * 是否启用沙箱，默认false
   * @default false
   */
  sandbox?: boolean;
  /**
   * 加载完毕的回调
   */
  loadEndCallBack?: (
    details: PopsEventConfig & {
      iframeElement: HTMLIFrameElement;
    }
  ) => void;
}
