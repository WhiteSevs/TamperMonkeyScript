import utils from "@whitesev/utils";
import { DOMUtils, log } from "../env.base";

type GestureBackConfig = {
  /** 进入手势模式的hash */
  hash: string;
  /** 当前的window对象 @default self */
  win?: Window & typeof globalThis;
  /** 使用当前url+hash作为url @default false */
  useUrl?: boolean;
  /** 退出手势模式的延迟时间，单位ms @default 150 */
  backDelayTime?: number;
  /** 调用退出手势模式前执行的回调函数 @default null */
  beforeHistoryBackCallBack?: (isUrlChange: boolean) => void;
  /** 调用退出手势模式后执行的回调函数 @default null */
  afterHistoryBackCallBack?: (isUrlChange: boolean) => void;
};
/**
 * 手势返回
 */
class GestureBack {
  /**
   * 是否正在后退
   */
  isBacking = false;
  config: Required<GestureBackConfig>;
  constructor(config: GestureBackConfig) {
    // @ts-ignore
    this.config = config;
    this.enterGestureBackMode = this.enterGestureBackMode.bind(this);
    this.quitGestureBackMode = this.quitGestureBackMode.bind(this);
    this.popStateEvent = this.popStateEvent.bind(this);
    if (typeof this.config.backDelayTime !== "number" || isNaN(this.config.backDelayTime)) {
      this.config.backDelayTime = 150;
    }
    if (this.config.win == null) {
      this.config.win = self;
    }
  }
  /**
   * popstate事件函数
   * @param event
   */
  popStateEvent(event: Event) {
    DOMUtils.preventEvent(event);
    if (this.isBacking) {
      return;
    }
    this.quitGestureBackMode(true);
  }
  /**
   * 进入手势模式
   */
  enterGestureBackMode() {
    /* 监听地址改变 */
    log.success("进入手势模式");
    let pushUrl = this.config.hash;
    if (!pushUrl.startsWith("#")) {
      // 完善hash
      // /xxx
      // xxxx
      if (!pushUrl.startsWith("/")) {
        pushUrl = "/" + pushUrl;
      }
      pushUrl = "#" + pushUrl;
    }
    if (this.config.useUrl) {
      pushUrl =
        this.config.win.location.origin + this.config.win.location.pathname + this.config.win.location.search + pushUrl;
    }
    this.config.win.history.pushState({}, "", pushUrl);
    log.success("监听popstate事件");
    DOMUtils.on(this.config.win, "popstate", this.popStateEvent, {
      capture: true,
    });
  }
  /**
   * 退出手势模式
   * @param isUrlChange 是否是url改变触发的
   */
  async quitGestureBackMode(isUrlChange: boolean = false) {
    this.isBacking = true;
    log.success("退出手势模式");
    if (typeof this.config.beforeHistoryBackCallBack === "function") {
      this.config.beforeHistoryBackCallBack(isUrlChange);
    }
    let maxDate = Date.now() + 1000 * 5;
    while (true) {
      if (Date.now() > maxDate) {
        log.error("未知情况，history.back()失败，无法退出手势模式");
        break;
      }
      if (this.config.win.location.hash.endsWith(this.config.hash)) {
        log.info("history.back()");
        this.config.win.history.back();
        await utils.sleep(this.config.backDelayTime || 150);
      } else {
        break;
      }
    }
    log.success("移除popstate事件");
    DOMUtils.off(this.config.win, "popstate", this.popStateEvent, {
      capture: true,
    });
    this.isBacking = false;
    if (typeof this.config.afterHistoryBackCallBack === "function") {
      this.config.afterHistoryBackCallBack(isUrlChange);
    }
  }
}

export { GestureBack, type GestureBackConfig };
