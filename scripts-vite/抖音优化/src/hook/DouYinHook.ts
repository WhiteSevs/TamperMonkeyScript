import { unsafeWindow } from "ViteGM";
import { DOMUtils, log, utils } from "@/env";
import { Panel } from "@components/setting/panel";
import { DouYinRouter } from "@/router/DouYinRouter";
import { Hook } from "@components/hook/Hook";

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
    const cookieHandler = new utils.GM_Cookie();
    const cookieNameList = ["__ac_signature", "__ac_referer", "__ac_nonce"];
    cookieNameList.forEach((cookieName) => {
      cookieHandler.delete(
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
    Hook.document_addEventListener((target, eventName, listener, option) => {
      if (["keydown", "keypress", "keyup"].includes(eventName) && typeof listener === "function") {
        return function (this: Document, ...eventArgs: any[]) {
          const event = eventArgs[0] as KeyboardEvent;
          /** 键名 */
          const key = event.key;
          /** 键值字符串 */
          const code = event.code;
          /** 键值 */
          const keyCodeValue = event.charCode || event.keyCode || event.which;
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

          const keyboardConfigList: {
            enableKey: string;
            code: string[];
            otherCodeList?: KeyboardOtherCodeName[];
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

          if (DouYinRouter.isIndex()) {
            // 主站
            keyboardConfigList.push(
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
            keyboardConfigList.push(
              {
                enableKey: "dy-live-threeScreen",
                code: ["KeyS"],
              },
              {
                enableKey: "dy-live-refresh",
                code: ["KeyE"],
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
              }
            );
          }
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
          if (currentClickTime - latestClickTime <= 288) {
            latestClickTime = currentClickTime;
            log.success("阻止触发双击点赞");
            return;
          }
          latestClickTime = currentClickTime;
          Reflect.apply(listener, this, eventArgs);
        };
      }
    });
  },
};
