import type { PopsInstGeneralConfig } from "./inst";

export type EventMap = {
  "pops:before-show": (config: PopsInstGeneralConfig) => IPromise<void>;
  "pops:show": (config: PopsInstGeneralConfig) => IPromise<void>;
  "pops:before-hide": (config: PopsInstGeneralConfig) => IPromise<void>;
  "pops:hide": (config: PopsInstGeneralConfig) => IPromise<void>;
  "pops:before-destory": (config: PopsInstGeneralConfig) => IPromise<void>;
  "pops:destory": () => IPromise<void>;
  "pops:before-append-to-page": (
    $shadowRoot: ShadowRoot | HTMLElement,
    $shadowContainer: HTMLDivElement
  ) => IPromise<void>;
};

export type CustomEventMap = {
  [K in string]: (...args: any[]) => IPromise<void>;
};
