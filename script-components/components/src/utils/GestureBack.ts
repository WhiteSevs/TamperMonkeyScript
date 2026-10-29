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
  beforeHistoryBackCallBack?: (opt: { hash: string; isFromPopStateEvent: boolean }) => IPromise<void | {
    isPreventDefault?: boolean;
  }>;
  /** 调用退出手势模式后执行的回调函数 @default null */
  afterHistoryBackCallBack?: (opt: { hash: string; isFromPopStateEvent: boolean }) => IPromise<void>;
  /** 进入后调用 */
  onEnter?(): void;
  /** 退出后调用 */
  onQuite?(): void;
};
/**
 * 手势返回
 */
class GestureBack {
  /**
   * 是否正在后退
   */
  isQuiting = false;
  isEntering = false;
  /**
   * 已推送次数
   */
  pushCount = 0;
  config: Required<GestureBackConfig>;
  constructor(config: GestureBackConfig) {
    // @ts-ignore
    this.config = config;
    this.enterGestureBackMode = this.enterGestureBackMode.bind(this);
    this.quitGestureBackMode = this.quitGestureBackMode.bind(this);
    this.popStateEvent = this.popStateEvent.bind(this);
    if (this.config.hash.trim() == "") {
      throw new Error("hash不能为空");
    }
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
    if (this.isEntering) {
      return;
    }
    if (this.isQuiting) {
      return;
    }
    this.quitGestureBackMode(void 0, true);
  }
  fixHash(hash: string) {
    if (!hash.startsWith("#")) {
      // 完善hash
      // /xxx
      // xxxx
      if (!hash.startsWith("/")) {
        hash = "/" + hash;
      }
      hash = "#" + hash;
    } else if (!hash.startsWith("#/")) {
      // #xx
      hash = hash.replace(/^#/, "#/");
    }
    return hash;
  }
  /**
   * 进入手势模式
   * @param hash 传入的话就是追加手势记录
   */
  async enterGestureBackMode(hash?: string) {
    try {
      this.isEntering = true;
      const isAddPushRecord = hash != null;
      log.success(isAddPushRecord ? "追加手势记录 " + hash : "进入手势模式");
      let pushUrl = hash ?? this.config.hash;
      pushUrl = this.fixHash(pushUrl);
      if (this.config.useUrl) {
        pushUrl =
          this.config.win.location.origin +
          this.config.win.location.pathname +
          this.config.win.location.search +
          pushUrl;
      }
      this.config.win.history.pushState({}, "", pushUrl);
      if (isAddPushRecord) {
        await utils.sleep(this.config.backDelayTime || 150);
        return;
      }
      DOMUtils.off(this.config.win, "popstate", this.popStateEvent, {
        capture: true,
      });
      log.success("监听popstate事件");
      DOMUtils.on(this.config.win, "popstate", this.popStateEvent, {
        capture: true,
      });

      if (typeof this.config.onEnter == "function") {
        this.config.onEnter();
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.isEntering = false;
    }
  }
  /**
   * 退出手势模式
   * @param isFromPopStateEvent 是否是由监听的事件触发的
   */
  async quitGestureBackMode(hash: string = this.config.hash, isFromPopStateEvent: boolean = false) {
    try {
      this.isQuiting = true;
      if (typeof this.config.beforeHistoryBackCallBack === "function") {
        const result = await this.config.beforeHistoryBackCallBack({
          hash,
          isFromPopStateEvent,
        });
        if (typeof result == "object" && result) {
          if (result.isPreventDefault) {
            log.info("取消手势退出");
            return;
          }
        }
      }
      log.success("开始检测并退出手势模式");
      let maxDate = Date.now() + 1000 * 5;
      hash = this.fixHash(hash);
      while (1) {
        if (Date.now() > maxDate) {
          log.error("未知情况，history.back()失败，无法退出手势模式");
          break;
        }
        // 当前浏览器的hash和传入的hash相同，则进行后退
        if (this.config.win.location.hash == hash) {
          this.back();
          log.info("history.back()");
          await utils.sleep(this.config.backDelayTime);
        } else {
          break;
        }
      }
      const configFixHash = this.fixHash(this.config.hash);
      if (hash != configFixHash) {
        // 传入的hash和配置的hash不同，则不移除popstate事件
        return;
      }
      log.success("移除popstate事件");
      DOMUtils.off(this.config.win, "popstate", this.popStateEvent, {
        capture: true,
      });
      if (typeof this.config.afterHistoryBackCallBack === "function") {
        await this.config.afterHistoryBackCallBack({ hash, isFromPopStateEvent });
      }
      if (typeof this.config.onEnter == "function") {
        this.config.onQuite();
      }
      log.success("成功完整退出手势模式");
    } catch (e) {
      console.error(e);
    } finally {
      this.isQuiting = false;
    }
  }
  back() {
    if (this.config.win.location.hash == "") {
      return false;
    }
    this.config.win.history.back();
    return true;
  }
}

export { GestureBack, type GestureBackConfig };
