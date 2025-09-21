import type { WindowApiOption } from "./types/WindowApi";

export class WindowApi {
  /** 默认的配置 */
  private defaultApi: Required<WindowApiOption> = {
    document: document,
    window: window,
    globalThis: globalThis,
    self: self,
    top: top!,
    setTimeout: globalThis.setTimeout.bind(globalThis),
    setInterval: globalThis.setInterval.bind(globalThis),
    clearTimeout: globalThis.clearTimeout.bind(globalThis),
    clearInterval: globalThis.clearInterval.bind(globalThis),
  };
  /** 使用的配置 */
  private api: Required<WindowApiOption>;
  constructor(option?: WindowApiOption) {
    if (option) {
      if (option.globalThis == null) {
        option.globalThis = option.window;
      }
      if (option.self == null) {
        option.self = option.window;
      }
    }
    if (!option) {
      option = Object.assign({}, this.defaultApi);
    }
    this.api = Object.assign({}, option as Required<WindowApiOption>);
  }
  get document() {
    return this.api.document;
  }
  get window() {
    return this.api.window;
  }
  get globalThis() {
    return this.api.globalThis;
  }
  get self() {
    return this.api.self;
  }
  get top() {
    return this.api.top;
  }
  get setTimeout() {
    return this.api.setTimeout;
  }
  get clearTimeout() {
    return this.api.clearTimeout;
  }
  get setInterval() {
    return this.api.setInterval;
  }
  get clearInterval() {
    return this.api.clearInterval;
  }
}
