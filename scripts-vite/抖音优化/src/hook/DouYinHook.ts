import { cookieManager, DOMUtils, log, utils } from "@/env";
import { DouYinLiveMessage } from "@/main/live/DouYinLiveMessage";
import { DouYinLiveMessageFilter } from "@/main/live/DouYinLiveMessageFilter";
import { DouYinRouter } from "@/router/DouYinRouter";
import { DouYinElement } from "@/utils/DouYinElement";
import { OriginPrototype } from "@components/env.base";
import { Hook } from "@components/hook/Hook";
import { Panel } from "@components/setting/panel";

export const DouYinHook = {
  $data: {
    hookElementAddEventListener: <
      ((
        target: Element,
        eventName: string,
        callback: Function,
        option: boolean | AddEventListenerOptions | undefined
      ) => Function | void)[]
    >[],
  },
  init() {
    Panel.execMenuOnce("hookKeyboard", () => {
      return DouYinHook.hookKeyboard();
    });
    Panel.execMenu("dy-cookie-remove__ac__", () => {
      this.removeCookie();
    });
    Panel.onceExec("dy-video-or-live-doubleClickAction", () => {
      if (DouYinRouter.isIndex()) {
        const videoAction = Panel.getValue<string>("dy-video-doubleClickAction");
        if (videoAction === "") return;
      } else if (DouYinRouter.isLive()) {
        const liveAction = Panel.getValue<string>("dy-live-doubleClickAction");
        if (liveAction === "") return;
      }
      this.disableDoubleClickLike();
    });
    // if (DouYinRouter.isLive()) {
    //   Panel.execMenuOnce("live-danmu-shield-rule-enable", () => {
    //     this.liveMessage();
    //   });
    // }
  },
  /**
   * 移除Cookie
   */
  removeCookie() {
    const cookieNameList = ["__ac_signature", "__ac_referer", "__ac_nonce"];
    cookieNameList.forEach((cookieName) => {
      cookieManager.delete(
        {
          name: cookieName,
          firstPartyDomain: "",
        },
        (error) => {
          if (error) {
            log.error(`移除Cookie失败 ==> ${cookieName}`, error);
          } else {
            log.success(`移除Cookie成功 ==> ${cookieName}`);
          }
        }
      );
    });
  },
  /**
   * 劫持按键监听
   */
  hookKeyboard() {
    type KeyboardOtherCodeName = "ctrl" | "alt" | "meta" | "shift";
    /**
     * 是否禁止触发快捷键
     *
     * 检测是否是在.pops组件库内的输入控件（input、textarea）内或者评论区输入框等...
     */
    const isDisableTriggerKeyboard = ($el: Element | null | undefined) => {
      if ($el == null) return false;
      const isInputNode = ["input", "textarea"].includes($el?.tagName?.toLowerCase());
      if (isInputNode) return true;
      const isCommentEditor = Boolean(
        $el?.closest(".DraftEditor-editorContainer") || $el?.closest(".im-richtext-container")
      );
      if (isCommentEditor) return true;
      const isInPops = $el?.closest(".pops") && $el?.getRootNode() instanceof ShadowRoot;
      if (isInPops) return true;
      return false;
    };
    let timeId: number;

    Hook.document_addEventListener((target, eventName, listener) => {
      if (["keydown", "keypress", "keyup"].includes(eventName) && typeof listener === "function") {
        return function (this: Document, ...eventArgs: any[]) {
          const keyboardEvent = eventArgs[0] as KeyboardEvent;
          /** 键值字符串 */
          const code = keyboardEvent.code;
          /** 组合键列表 */
          const otherCodeList: KeyboardOtherCodeName[] = [];
          if (keyboardEvent.ctrlKey) {
            otherCodeList.push("ctrl");
          }
          if (keyboardEvent.altKey) {
            otherCodeList.push("alt");
          }
          if (keyboardEvent.metaKey) {
            otherCodeList.push("meta");
          }
          if (keyboardEvent.shiftKey) {
            otherCodeList.push("shift");
          }

          const $active = document.activeElement;
          const $shadowRootActive = $active?.shadowRoot?.activeElement;
          if (isDisableTriggerKeyboard($shadowRootActive ?? $active)) {
            // 在输入框内时，禁止触发快捷键
            return;
          }

          let keyboardConfigList: {
            enableKey: string;
            code: string[];
            otherCodeList?: KeyboardOtherCodeName[];
            callback?: (event: { code: string; otherCodeList: KeyboardOtherCodeName[] }) => void;
          }[] = [
            {
              // 取消赞|空格
              enableKey: "dy-keyboard-hook-likeOrDislike",
              code: ["KeyZ"],
              callback(evt) {
                // 必须是空格时才执行下面的
                if (evt.code !== "Space") return;
                if (DouYinRouter.isChat()) return;
                utils.workerClearTimeout(timeId);
                timeId = utils.workerSetTimeout(() => {
                  const videosInViewVideoList = DouYinElement.getInViewVideo();
                  const playInViewList = DouYinElement.getInViewPlayButton();
                  if (!videosInViewVideoList.length && !playInViewList.length) {
                    log.error("未找到在可视区域内的视频或播放按钮");
                    return;
                  }
                  const video = videosInViewVideoList[0];
                  const player = playInViewList[0];
                  if (video) {
                    const $video = videosInViewVideoList[0].$el;
                    if ($video.paused) {
                      log.info(`当前视频处于暂停状态，开始播放`);
                      $video.play();
                    } else {
                      log.info(`当前视频处于播放状态，暂停播放`);
                      $video.pause();
                    }
                  } else {
                    const $play = player.$el;
                    log.info(`当前视频播放按钮状态：${player.state}，点击切换状态`, $play);
                    $play.click();
                  }
                }, 288);
              },
            },
            {
              enableKey: "dy-keyboard-hook-comment",
              code: ["KeyX"],
            },
            {
              enableKey: "dy-keyboard-hook-danmaku-enable",
              code: ["KeyB"],
            },
            {
              enableKey: "dy-keyboard-hook-collect-enable",
              code: ["KeyC"],
            },
            {
              enableKey: "dy-keyboard-hook-copyShareLink",
              code: ["KeyV"],
            },
            {
              enableKey: "dy-keyboard-hook-clearScreen",
              code: ["KeyJ"],
            },
            {
              enableKey: "dy-keyboard-hook-automaticBroadcast",
              code: ["KeyK"],
            },
            {
              enableKey: "dy-keyboard-hook-videoInfo",
              code: ["KeyI"],
            },
            {
              enableKey: "dy-keyboard-hook-notInterested",
              code: ["KeyR"],
            },
            {
              enableKey: "dy-keyboard-hook-enterAuthorHomePage",
              code: ["KeyF"],
            },
            {
              enableKey: "dy-keyboard-hook-follow",
              code: ["KeyG"],
            },
            {
              enableKey: "dy-keyboard-hook-search",
              code: ["KeyF"],
              otherCodeList: ["shift"],
            },
            {
              enableKey: "dy-keyboard-hook-closeTheCurrentPageWithOneClick",
              code: ["KeyQ"],
              otherCodeList: ["shift"],
            },
            {
              enableKey: "dy-keyboard-hook-pageUpAndDown",
              code: ["ArrowUp", "ArrowDown"],
            },
            {
              enableKey: "dy-keyboard-hook-fastForwardAndFastBack",
              code: ["ArrowLeft", "ArrowRight"],
            },
            {
              enableKey: "dy-keyboard-hook-pause",
              code: ["Space"],
            },
            {
              enableKey: "dy-keyboard-hook-fullScreenInsideThePage",
              code: ["KeyY"],
            },
            {
              enableKey: "dy-keyboard-hook-fullScreen",
              code: ["KeyH"],
            },
            {
              enableKey: "dy-keyboard-hook-watchItOutLater",
              code: ["KeyL"],
            },
            {
              enableKey: "dy-keyboard-hook-volumeAdjustment",
              code: ["Minus"],
              otherCodeList: ["shift"],
            },
            {
              enableKey: "dy-keyboard-hook-listOfCallShortcutKeys",
              code: ["Slash"],
              otherCodeList: ["shift"],
            },
            {
              enableKey: "dy-keyboard-hook-closeTheShortcutKeyList",
              code: ["Escape"],
            },
            {
              enableKey: "dy-keyboard-hook-relevantRecommendation",
              code: ["KeyN"],
            },
            {
              enableKey: "dy-keyboard-hook-listenToDouyin",
              code: ["KeyT"],
            },
            {
              enableKey: "dy-keyboard-hook-smallWindowPlay",
              code: ["KeyU"],
            },
            {
              enableKey: "dy-keyboard-hook-recommendVideo",
              code: ["KeyP"],
            },
          ];

          const otherKeyboardConfigList: typeof keyboardConfigList = [];
          if (DouYinRouter.isIndex()) {
            // 主站
            otherKeyboardConfigList.push(
              {
                enableKey: "dy-keyboard-hook-arrowUp-w",
                code: ["KeyW"],
              },
              {
                enableKey: "dy-keyboard-hook-arrowDown-s",
                code: ["KeyS"],
              },
              {
                enableKey: "dy-keyboard-hook-videoRewind",
                code: ["KeyA"],
              },
              {
                enableKey: "dy-keyboard-hook-videoFastForward",
                code: ["KeyD"],
              }
            );
          } else if (DouYinRouter.isLive()) {
            // 直播
            otherKeyboardConfigList.push(
              {
                enableKey: "dy-live-threeScreen",
                code: ["KeyS"],
              },
              {
                enableKey: "dy-live-refresh",
                code: ["KeyR"],
              },
              {
                enableKey: "dy-live-screenRotation",
                code: ["KeyD"],
              },
              {
                enableKey: "dy-live-enableSmallWindowMode",
                code: ["KeyU"],
              },
              {
                enableKey: "dy-live-switchLiveRoom",
                code: ["ArrowUp", "ArrowDown"],
              },
              {
                enableKey: "dy-live-quickGift",
                code: ["KeyE"],
              }
            );

            keyboardConfigList = utils.uniqueArray(keyboardConfigList, otherKeyboardConfigList, (it1, it2) => {
              const compare1 = it1.code.toSorted().toString();
              const compare2 = it2.code.toSorted().toString();
              return compare1 === compare2;
            });
          }
          keyboardConfigList = otherKeyboardConfigList.concat(keyboardConfigList);
          for (let index = 0; index < keyboardConfigList.length; index++) {
            const keyboardConfig = keyboardConfigList[index];
            if (keyboardConfig.code.includes(code)) {
              // code 匹配
              if (Array.isArray(keyboardConfig.otherCodeList)) {
                const findValue = keyboardConfig.otherCodeList.find((item) => !otherCodeList.includes(item));
                if (findValue) {
                  // otherCodeList 不匹配
                  continue;
                }
              }
              if (!Panel.getValue(keyboardConfig.enableKey)) {
                // 未启用
                continue;
              }
              // 阻止触发
              if (typeof keyboardConfig.callback === "function") {
                keyboardConfig.callback({
                  code: code,
                  otherCodeList: otherCodeList,
                });
              }
              return;
            }
          }
          // 触发原始回调
          return Reflect.apply(listener, this, eventArgs);
        };
      }
    });
  },
  /**
   * 禁用双击点赞
   */
  disableDoubleClickLike() {
    let latestClickTime: number | null = null;
    let preventFlag = true;
    const check = () => {
      preventFlag = false;
      if (DouYinRouter.isIndex()) {
        const videoAction = Panel.getValue<string>("dy-video-doubleClickAction");
        if (videoAction === "") return;
      } else if (DouYinRouter.isLive()) {
        const liveAction = Panel.getValue<string>("dy-live-doubleClickAction");
        if (liveAction === "") return;
      }
      preventFlag = true;
    };
    Panel.addValueChangeListener("dy-video-doubleClickAction", check);
    Panel.addValueChangeListener("dy-live-doubleClickAction", check);
    Hook.element_addEventListener((target, eventName, listener) => {
      const listenerStr = listener.toString();
      if (
        eventName === "click" &&
        target instanceof HTMLElement &&
        ((DouYinRouter.isIndex() &&
          target?.classList?.contains("xgplayer") &&
          listenerStr.match(/video|innerContainer|video.__canvas|mouse/)) ||
          (DouYinRouter.isLive() && target?.classList?.contains("douyin-player")))
      ) {
        log.success(`hook：success click double event listener`);
        return function (this: any, ...eventArgs: any[]) {
          if (!preventFlag) return;
          if (latestClickTime == null) {
            // first click
            latestClickTime = Date.now();
          }
          const currentClickTime = Date.now();
          const [event] = eventArgs;
          const calcValue = currentClickTime - latestClickTime;
          if (calcValue > 50 && calcValue <= 288) {
            latestClickTime = currentClickTime;
            log.success("阻止触发双击点赞：" + calcValue);
            if (event instanceof Event) {
              const $target = event.target;
              if ($target && $target instanceof HTMLVideoElement) {
                // 因为双击会暂停视频，所以这里再播放
                if ($target.paused) {
                  const listener = DOMUtils.on($target, "play", () => {
                    log.info(`双击前该视频在暂停中，这里触发播放，主动暂停视频`);
                    utils.workerClearTimeout(timeId);
                    $target.pause();
                    listener.off();
                  });
                  const timeId = utils.workerSetTimeout(() => {
                    listener.off();
                  }, 1000);
                } else {
                  const listener = DOMUtils.on($target, "pause", () => {
                    log.info(`双击前该视频在播放中，这里触发暂停，主动播放视频`);
                    utils.workerClearTimeout(timeId);
                    $target.play();
                    listener.off();
                  });
                  const timeId = utils.workerSetTimeout(() => {
                    listener.off();
                  }, 1000);
                }
              }
            }
            return;
          }
          // 更新最后点击的时间
          latestClickTime = currentClickTime;
          const ret = Reflect.apply(listener, this, eventArgs);
          return ret;
        };
      }
    });
  },
  /**
   * 对直播消息过滤的劫持
   */
  liveMessage() {
    log.info(`对直播消息过滤的劫持`);
    Hook.window_webpack(
      "webpackChunkdouyin_live_v2",
      () => {
        return true;
      },
      (webpackExports) => {
        if (webpackExports == null || typeof webpackExports?.exports !== "object" || webpackExports?.exports == null) {
          return webpackExports;
        }
        if (webpackExports.loaded) return webpackExports;
        const values = OriginPrototype.Object.values(webpackExports?.exports);
        values.forEach((value) => {
          if (typeof value !== "function") {
            return;
          }
          if (
            typeof value.prototype?.start === "function" &&
            typeof value.prototype?.pause === "function" &&
            typeof value.prototype?.stop === "function" &&
            typeof value.prototype?.registerPublisher === "function" &&
            typeof value.prototype?.unregisterPublisher === "function" &&
            typeof value.prototype?.destroy === "function" &&
            typeof value.prototype?.getPlugin === "function" &&
            typeof value.prototype?.registerPlugin === "function" &&
            typeof value.prototype?.unregisterPlugin === "function"
          ) {
            log.success(`success hook live webpack：${webpackExports.id}`);
            // @ts-expect-error
            const version: string = value?.VERSION;
            log.success(`version：${version}`);
            const start = value.prototype.start;
            value.prototype.start = function (...args: any[]) {
              // const _onMessage = this?._onMessage;
              const decoder: {
                decode: (data: Uint8Array, method: string) => any;
                encode: Function;
                loadSchema: Function;
              } = this?.decoder;
              if (typeof decoder?.decode === "function") {
                log.success(`hook live message decode success`);
                const decode = decoder?.decode;
                this.decoder.decode = async function (...args2: any[]) {
                  const [, method] = args2;
                  const payload = await Reflect.apply(decode, this, args2);
                  const flag = await DouYinLiveMessage.execFilter(
                    {
                      payload: payload,
                    },
                    method
                  );
                  if (typeof flag === "boolean" && flag) {
                    log.success(`过滤：`, payload);
                    return;
                  }
                  return payload;
                };
              }
              if (typeof start === "function") {
                const startResult = Reflect.apply(start, this, args);
                return startResult;
              }
            };
          }
        });
        return webpackExports;
      }
    );
  },
  /**
   * 劫持消息解码函数
   */
  async hookLiveMessageDecoder() {
    DouYinLiveMessageFilter.init();
    // return DouYinLiveMessage.filterMessage();
    const decoder = await DOMUtils.wait(() => {
      // @ts-expect-error
      const __MESSAGE_INSTANCE__ = unsafeWindow["__MESSAGE_INSTANCE__"];
      const decoder: {
        decode: (data: Uint8Array, method: string) => any;
        encode: Function;
        loadSchema: Function;
      } = __MESSAGE_INSTANCE__?.decoder;
      return {
        data: decoder,
        success: typeof decoder?.decode === "function",
      };
    }, 5000);
    if (!decoder) {
      log.warn("can't find live message decoder");
      return DouYinLiveMessage.filterMessage();
    }
    log.success("hook live message decode success");
    const decode = decoder?.decode;
    decoder.decode = async function (...args2: any[]) {
      const [data, method] = args2;
      const payload = await Reflect.apply(decode, this, args2);
      const flag = await DouYinLiveMessage.execFilter(
        {
          payload: payload,
        },
        method
      );
      if (typeof flag === "boolean" && flag) {
        if (import.meta.env.DEV) {
          log.success(`过滤：`, payload);
        }
        return {};
      }
      return payload;
    };
    return [
      () => {
        decoder.decode = decode;
      },
    ];
  },
};
