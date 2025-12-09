import { DOMUtils, log, utils, cookieManager } from "@/env";
import { DouYinRouter } from "@/router/DouYinRouter";
import { DouYinElement } from "@/utils/DouYinElement";
import { Hook } from "@components/hook/Hook";
import { Panel } from "@components/setting/panel";
import Qmsg from "qmsg";

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
    Panel.onceExec("hookKeyboard", () => {
      DouYinHook.disableShortCut();
    });
    Panel.execMenu("dy-cookie-remove__ac__", () => {
      this.removeCookie();
    });
    if (DouYinRouter.isIndex()) {
      Panel.execMenuOnce("dy-video-disableDoubleClickLike", () => {
        DouYinHook.disableDoubleClickLike();
      });
    } else if (DouYinRouter.isLive()) {
      Panel.execMenuOnce("dy-live-disableDoubleClickLike", () => {
        DouYinHook.disableDoubleClickLike();
      });
    }
  },
  /**
   * 移除环境检测
   */
  removeEnvCheck() {
    log.info("移除环境检测");
    Hook.setInterval((fn) => {
      const funcStr = fn.toString().trim();
      if (funcStr.includes("debugger")) {
        log.success(["拦截→", [funcStr]]);
        return false;
      }
      if (funcStr.includes("checkEXp")) {
        log.success(["拦截→", [funcStr]]);
        return false;
      }
    });
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
   * 禁用快捷键
   */
  disableShortCut() {
    type KeyboardOtherCodeName = "ctrl" | "alt" | "meta" | "shift";
    /**
     * 检测是否是在.pops组件库内的输入控件（input、textarea）内
     */
    const isInPopsComponentsRequireInputNode = ($el: Element | null | undefined) => {
      if ($el == null) return false;
      const isInputNode = ["input", "textarea"].includes($el?.tagName?.toLowerCase());
      const isInPops = $el?.closest(".pops") && $el?.getRootNode() instanceof ShadowRoot;
      return isInputNode && isInPops;
    };
    let timeId: number;
    Hook.document_addEventListener((target, eventName, listener, option) => {
      if (["keydown", "keypress", "keyup"].includes(eventName) && typeof listener === "function") {
        return function (this: Document, ...eventArgs: any[]) {
          const event = eventArgs[0] as KeyboardEvent;
          /** 键名 */
          const key = event.key;
          /** 键值字符串 */
          const code = event.code;
          /** 组合键列表 */
          const otherCodeList: KeyboardOtherCodeName[] = [];
          if (event.ctrlKey) {
            otherCodeList.push("ctrl");
          }
          if (event.altKey) {
            otherCodeList.push("alt");
          }
          if (event.metaKey) {
            otherCodeList.push("meta");
          }
          if (event.shiftKey) {
            otherCodeList.push("shift");
          }

          const $active = document.activeElement;
          const $shadowRootActive = $active?.shadowRoot?.activeElement;
          if (isInPopsComponentsRequireInputNode($shadowRootActive ?? $active)) {
            // 在输入框内时，禁止触发快捷键
            return;
          }

          let keyboardConfigList: {
            enableKey: string;
            code: string[];
            otherCodeList?: KeyboardOtherCodeName[];
            callback?: () => void;
          }[] = [
            {
              enableKey: "dy-keyboard-hook-likeOrDislike",
              code: ["KeyZ"],
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

          let otherKeyboardConfigList: typeof keyboardConfigList = [];

          if (DouYinRouter.isIndex()) {
            // 主站
            otherKeyboardConfigList = [
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
              },
              // 禁用双击点赞，包括长按空格的
              {
                enableKey: "dy-video-disableDoubleClickLike",
                code: ["Space"],
                callback() {
                  utils.workerClearTimeout(timeId);
                  timeId = utils.workerSetTimeout(() => {
                    const videosInViewVideoList = DouYinElement.getInViewVideo();
                    if (!videosInViewVideoList.length) {
                      Qmsg.error("未找到在可视区域内的视频");
                      return;
                    }
                    const $video = videosInViewVideoList[0].$el;
                    if ($video.paused) {
                      log.info(`当前视频处于暂停状态，开始播放`);
                      $video.play();
                    } else {
                      log.info(`当前视频处于播放状态，暂停播放`);
                      $video.pause();
                    }
                  }, 288);
                },
              },
            ];
          } else if (DouYinRouter.isLive()) {
            // 直播
            otherKeyboardConfigList = [
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
            ];
          }
          // 去重
          // 比如直播的KeyR和推荐视频的不感兴趣快捷键重复了
          keyboardConfigList = utils.uniqueArray(keyboardConfigList, otherKeyboardConfigList, (it1, it2) => {
            const compare1 = JSON.stringify(it1.code.toSorted());
            const compare2 = JSON.stringify(it2.code.toSorted());
            return compare1 === compare2;
          });
          keyboardConfigList = otherKeyboardConfigList.concat(keyboardConfigList);
          for (let index = 0; index < keyboardConfigList.length; index++) {
            const keyboardConfig = keyboardConfigList[index];
            if (keyboardConfig.code.includes(code)) {
              if (Array.isArray(keyboardConfig.otherCodeList)) {
                const findValue = keyboardConfig.otherCodeList.find((item) => !otherCodeList.includes(item));
                if (findValue) {
                  continue;
                }
              }
              if (!Panel.getValue(keyboardConfig.enableKey)) {
                // 未启用
                continue;
              }
              // 阻止触发
              if (typeof keyboardConfig.callback === "function") {
                keyboardConfig.callback();
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
    let latestClickTime = Date.now();
    Hook.element_addEventListener((target, eventName, listener, option) => {
      const listenerStr = listener.toString();
      if (
        eventName === "click" &&
        target instanceof HTMLElement &&
        target?.classList?.contains("xgplayer") &&
        listenerStr.match(/video|innerContainer|video.__canvas|mouse/)
      ) {
        return function (this: any, ...eventArgs: any[]) {
          const currentClickTime = Date.now();
          const [event] = eventArgs;
          if (currentClickTime - latestClickTime <= 288) {
            latestClickTime = currentClickTime;
            log.success("阻止触发双击点赞");
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
          latestClickTime = currentClickTime;
          const ret = Reflect.apply(listener, this, eventArgs);
          return ret;
        };
      }
    });
  },
};
