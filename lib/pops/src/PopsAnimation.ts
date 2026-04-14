import { PopsCSS } from "./PopsCSS";
import { popsDOMUtils } from "./utils/PopsDOMUtils";
import { popsUtils } from "./utils/PopsUtils";

export const PopsAnimation = {
  $data: {} as { [key: string]: CSSKeyframesRule },
  $flag: {
    /** 是否初始化 */
    isInit: false,
  },
  init() {
    if (!this.$flag.isInit) {
      this.$flag.isInit = true;
      // 处理获取当前所有的动画名
      const $style = popsDOMUtils.createElement("style", {
        innerHTML: PopsCSS.anim,
      });
      popsDOMUtils.appendHead($style);
      this.$data = null as any;
      this.$data = popsDOMUtils.getKeyFrames($style.sheet!);
      popsUtils.setTimeout(() => {
        popsDOMUtils.remove($style);
      }, 50);
    }
  },
  /**
   * 判断是否存在某个动画名
   */
  hasAnim(name: string) {
    return Object.prototype.hasOwnProperty.call(this.$data, name);
  },
  /**
   * 带动画的进入元素
   * @param $el 当前元素
   * @param $next 切换的元素
   * @param option 配置
   */
  createSwitchElementWithAnimation(
    $el: HTMLElement,
    $next: HTMLElement,
    option: {
      /**
       * 是否使用动画
       * @default true
       */
      useAnimation?: boolean;
      /**
       * 动画配置
       *
       * + `duration`: 默认`220`
       * + `easing`: 默认`"ease-in-out"`
       */
      animOptions?: KeyframeAnimationOptions;
      /** 为$next内部添加元素 */
      enterToAddElementCallback: () => IPromise<void>;
      /** 退出时移除$next元素 */
      exitToRemoveElementCallback?: () => IPromise<void>;
    }
  ) {
    const animOptions: KeyframeAnimationOptions = {
      // 150 220 300
      duration: 220,
      easing: "ease-in-out",
      ...(option.animOptions ?? {}),
    };
    if (option.useAnimation == null) {
      option.useAnimation = true;
    }
    return {
      /**
       * 进入
       */
      async enter() {
        const transitionEndCallback = async () => {
          // 先直接隐藏旧的容器
          popsDOMUtils.cssHide($el, true);
          // 添加元素
          await option.enterToAddElementCallback();
        };
        // 进入下一层
        if (option.useAnimation && typeof document.startViewTransition == "function") {
          // 处理添加的元素的动画
          const transition = document.startViewTransition(transitionEndCallback);
          await transition.ready;
          await $next.animate(
            // 从右向左移入（进入动画）
            [
              {
                // from
                transform: "translateX(100%)",
              },
              {
                // to
                transform: "translateX(0)",
              },
            ],
            animOptions
          ).finished;
          await transition.finished;
        } else {
          await transitionEndCallback();
        }
      },
      /**
       * 退出
       */
      async exit() {
        // 返回上一层菜单
        const transitionEndCallback = async () => {
          // 显示上层菜单
          popsDOMUtils.cssShow($el);
          // 移除下一层的菜单
          popsDOMUtils.remove($next);
          if (typeof option.exitToRemoveElementCallback === "function") {
            await option.exitToRemoveElementCallback();
          }
        };
        if (option.useAnimation && typeof document.startViewTransition == "function") {
          const leaveTransition = document.startViewTransition(transitionEndCallback);
          await leaveTransition.ready;
          await Promise.all([
            // 从原位置向右移出
            $next.animate(
              [
                {
                  // from
                  transform: "translateX(0)",
                },
                {
                  // to
                  transform: "translateX(100%)",
                },
              ],
              animOptions
            ).finished,
            // 从最左边向右移入
            $el.animate(
              [
                {
                  // from
                  transform: "translateX(-100%)",
                },
                {
                  // to
                  transform: "translateX(0)",
                },
              ],
              animOptions
            ).finished,
          ]);
          await leaveTransition.finished;
        } else {
          await transitionEndCallback();
        }
      },
    };
  },
};
