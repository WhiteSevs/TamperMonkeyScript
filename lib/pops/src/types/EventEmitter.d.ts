import type { PopsInstGeneralConfig } from "./inst";

export type EventMap = {
  /**
   * 调用`.show`时触发
   */
  "pops:before-show": (config: PopsInstGeneralConfig) => IPromise<void>;
  /**
   * 调用`.show`时触发
   */
  "pops:show": (config: PopsInstGeneralConfig) => IPromise<void>;
  /**
   * 调用`.hide`时触发
   */
  "pops:before-hide": (config: PopsInstGeneralConfig) => IPromise<void>;
  /**
   * 调用`.hide`时触发
   */
  "pops:hide": (config: PopsInstGeneralConfig) => IPromise<void>;
  /**
   * 调用`.close`时触发
   */
  "pops:before-destory": (config: PopsInstGeneralConfig) => IPromise<void>;
  /**
   * 调用`.close`时触发
   */
  "pops:destory": () => IPromise<void>;
  /**
   * 插入到页面中时触发，但是需要传入`EventEmitter`来监听该事件，否则不触发
   */
  "pops:before-append-to-page": (
    $shadowRoot: ShadowRoot | HTMLElement,
    $shadowContainer: HTMLDivElement
  ) => IPromise<void>;
};

export type CustomEventMap = {
  [K in string]: (...args: any[]) => IPromise<void>;
};
