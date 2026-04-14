import type { PopsAlertConfig } from "../components/alert/types";
import type { PopsConfirmConfig } from "../components/confirm/types";
import type { PopsDrawerConfig } from "../components/drawer/types";
import type { PopsFolderConfig } from "../components/folder/types";
import type { PopsIframeConfig } from "../components/iframe/types";
import type { PopsLoadingConfig } from "../components/loading/types";
import type { PopsPanelConfig } from "../components/panel/types";
import type { PopsPromptConfig } from "../components/prompt/types";
import type { PopsRightClickMenuConfig } from "../components/rightClickMenu/types";
import type { PopsToolTipConfig } from "../components/tooltip/types";
import { PopsAnimation } from "../PopsAnimation";
import { PopsCore } from "../PopsCore";
import { PopsInstData } from "../PopsInst";
import type { PopsInstGeneralConfig } from "../types/inst";
import type { PopsInstStoreType } from "../types/main";
import { popsDOMUtils } from "../utils/PopsDOMUtils";
import { PopsInstanceUtils } from "../utils/PopsInstanceUtils";
import { popsUtils } from "../utils/PopsUtils";

export const PopsInstHandler = {
  /**
   * 删除配置中对应的对象
   * @param totalInstConfigList 配置实例列表
   * @param  guid 唯一标识
   * @param isAll 是否全部删除
   */
  async removeInstance(totalInstConfigList: PopsInstGeneralConfig[][], guid?: string, isAll = false) {
    /**
     * 移除元素实例
     * @param instCommonConfig
     */
    const removeInst = async (instCommonConfig: PopsInstGeneralConfig) => {
      await instCommonConfig.emitter.emit("pops:before-destory", instCommonConfig);
      popsDOMUtils.remove(instCommonConfig?.$anim);
      popsDOMUtils.remove(instCommonConfig?.$pops);
      popsDOMUtils.remove(instCommonConfig?.$mask);
      popsDOMUtils.remove(instCommonConfig?.$shadowContainer);
      await instCommonConfig.emitter.emit("pops:destory");
      // 再清空全部监听的事件
      await instCommonConfig.emitter.offAll();
    };
    const asyncInstTask: Promise<void>[] = [];
    // [ inst[], inst[],...]
    for (const instConfigList of totalInstConfigList) {
      for (let index = 0; index < instConfigList.length; index++) {
        const instConfigItem = instConfigList[index];
        // 移除全部或者guid相同
        if (isAll || (typeof guid === "string" && instConfigItem.guid === guid)) {
          // 判断是否有动画
          const animName = instConfigItem.$anim.getAttribute("anim")!;
          if (PopsAnimation.hasAnim(animName)) {
            const reverseAnimName = animName + "-reverse";
            popsDOMUtils.css(instConfigItem.$anim, "width", "100%");
            popsDOMUtils.css(instConfigItem.$anim, "height", "100%");
            popsDOMUtils.css(instConfigItem.$anim, "animation-name", reverseAnimName);
            if (PopsAnimation.hasAnim(popsDOMUtils.css(instConfigItem.$anim, "animation-name"))) {
              asyncInstTask.push(
                new Promise<void>((resolve) => {
                  popsDOMUtils.on(
                    instConfigItem.$anim,
                    popsDOMUtils.getAnimationEndNameList(),
                    async () => {
                      await removeInst(instConfigItem);
                      resolve();
                    },
                    {
                      capture: true,
                    }
                  );
                })
              );
            } else {
              asyncInstTask.push(removeInst(instConfigItem));
            }
          } else {
            asyncInstTask.push(removeInst(instConfigItem));
          }
          instConfigList.splice(index, 1);
          index--;
        }
      }
    }
    await Promise.all(asyncInstTask);
    return totalInstConfigList;
  },
  /**
   * 显示
   * @param popsType
   * @param instConfigList
   * @param guid
   * @param config
   * @param $anim
   * @param $mask
   */
  show(
    config:
      | PopsAlertConfig
      | PopsDrawerConfig
      | PopsPromptConfig
      | PopsConfirmConfig
      | PopsIframeConfig
      | PopsLoadingConfig
      | PopsPanelConfig
      | PopsFolderConfig,
    popsType: PopsInstStoreType,
    instConfigList: PopsInstGeneralConfig[],
    guid: string,
    $anim: HTMLElement,
    $mask?: HTMLElement
  ) {
    // oxlint-disable-next-line no-async-promise-executor
    return new Promise<void>(async (resolve) => {
      const $pops = $anim.querySelector<HTMLDivElement>(".pops[type-value]")!;

      const fintInst = instConfigList.find((instConfigItem) => instConfigItem.guid === guid);
      if (fintInst) {
        // 由于是隐蔽状态
        // 先设置好动画状态
        // 再显示，会自执行动画
        const checkVisible = () => {
          if (!PopsInstanceUtils.isHide($anim)) {
            return true;
          } else {
            return false;
          }
        };
        const startAnim = async () => {
          if (popsType === "drawer") {
            // drawer是抽屉
            // 单独处理动画
            const drawerConfig = config as Required<PopsDrawerConfig>;
            await popsUtils.sleep(drawerConfig.openDelay ?? 0);
            if ($mask) {
              popsDOMUtils.css($mask, "display", "");
            }
            const direction = drawerConfig.direction!;
            const size = drawerConfig.size!.toString();
            if (["top", "bottom"].includes(direction)) {
              $pops.style.setProperty("height", size);
            } else if (["left", "right"].includes(direction)) {
              $pops.style.setProperty("width", size);
            } else {
              console.error("未知direction：", direction);
            }
          } else {
            instConfigItem.$anim.style.width = "";
            instConfigItem.$anim.style.height = "";
            Reflect.set(instConfigItem.$anim.style, "animation-name", animName);
          }
          instConfigItem.$anim.style.display = "";
          if (instConfigItem.$mask) {
            instConfigItem.$mask.style.display = "";
          }
        };
        const endCallback = () => {
          fintInst.emitter.emit("pops:show", instConfigItem);
        };
        const instConfigItem = fintInst;
        const animName = instConfigItem.$anim!.getAttribute("anim")!.replace("-reverse", "");
        fintInst.emitter.emit("pops:before-show", instConfigItem);
        if (checkVisible() && PopsAnimation.hasAnim(animName)) {
          /**
           * 动画结束的回调
           */
          const animationendCallBack = () => {
            listener.off();
            endCallback();
            resolve();
          };
          const listener = popsDOMUtils.on(
            instConfigItem.$anim,
            popsDOMUtils.getAnimationEndNameList(),
            animationendCallBack,
            {
              capture: true,
            }
          );
          await startAnim();
        } else {
          await startAnim();
          endCallback();
          resolve();
        }
      } else {
        console.error("show-error: 该实例未存储");
        resolve();
      }
    });
  },
  /**
   * 隐藏
   * @param popsType
   * @param instConfigList
   * @param guid
   * @param config
   * @param $anim
   * @param $mask
   */
  hide(
    config:
      | PopsAlertConfig
      | PopsDrawerConfig
      | PopsPromptConfig
      | PopsConfirmConfig
      | PopsIframeConfig
      | PopsLoadingConfig
      | PopsPanelConfig
      | PopsFolderConfig,
    popsType: PopsInstStoreType,
    instConfigList: PopsInstGeneralConfig[],
    guid: string,
    $anim: HTMLElement,
    $mask?: HTMLElement
  ) {
    // oxlint-disable-next-line no-async-promise-executor
    return new Promise<void>(async (resolve) => {
      const $pops = $anim.querySelector<HTMLDivElement>(".pops[type-value]")!;
      const fintInst = instConfigList.find((instConfigItem) => instConfigItem.guid === guid);
      if (fintInst) {
        // 由于是已显示状态
        // 先执行动画
        // 再隐藏
        // 存在实例
        const checkVisible = () => {
          if (!PopsInstanceUtils.isHide($anim)) {
            return true;
          } else {
            return false;
          }
        };
        const startAnim = async () => {
          if (popsType === "drawer") {
            // drawer是抽屉
            // 单独处理动画
            const drawerConfig = config as Required<PopsDrawerConfig>;
            await popsUtils.sleep(drawerConfig.closeDelay ?? 0);
            if ($mask) {
              popsDOMUtils.css($mask, "display", "none");
            }
            const direction = drawerConfig.direction!;
            const size = "0";
            if (["top", "bottom"].includes(direction)) {
              $pops.style.setProperty("height", size);
            } else if (["left", "right"].includes(direction)) {
              $pops.style.setProperty("width", size);
            } else {
              console.error("未知direction: ", direction);
            }
          } else {
            instConfigItem.$anim.style.width = "100%";
            instConfigItem.$anim.style.height = "100%";
            Reflect.set(instConfigItem.$anim.style, "animation-name", reverseAnimName);
          }
        };
        const endCallback = () => {
          instConfigItem.$anim.style.display = "none";
          if (instConfigItem.$mask) {
            instConfigItem.$mask.style.display = "none";
          }
          fintInst.emitter.emit("pops:hide", instConfigItem);
        };
        const instConfigItem = fintInst;
        const animName = instConfigItem.$anim!.getAttribute("anim")!.replace("-reverse", "");
        const reverseAnimName = animName + "-reverse";
        fintInst.emitter.emit("pops:before-hide", instConfigItem);
        if (!checkVisible() && PopsAnimation.hasAnim(reverseAnimName)) {
          /**
           * 动画结束的回调
           */
          const animationendCallBack = () => {
            listener.off();
            endCallback();
            resolve();
          };
          const listener = popsDOMUtils.on(
            instConfigItem.$anim,
            popsDOMUtils.getAnimationEndNameList(),
            animationendCallBack,
            {
              capture: true,
              once: true,
            }
          );
          await startAnim();
        } else {
          await startAnim();
          endCallback();
          resolve();
        }
      } else {
        console.error("hide-error: 该实例未存储");
        resolve();
      }
    });
  },
  /**
   * 关闭
   * @param popsType
   * @param instConfigList
   * @param guid
   * @param config
   * @param $anim
   */
  async close(
    config:
      | PopsAlertConfig
      | PopsDrawerConfig
      | PopsPromptConfig
      | PopsConfirmConfig
      | PopsIframeConfig
      | PopsLoadingConfig
      | PopsPanelConfig
      | PopsFolderConfig,
    popsType: string,
    instConfigList: PopsInstGeneralConfig[],
    guid: string,
    $anim: HTMLElement
  ) {
    // 判断组件内部是否有rightClickMenu、tooltip、searchSuggestion组件
    // 有的话也需要关闭
    PopsInstData.rightClickMenu.forEach((itemConfig) => {
      const config = itemConfig.config as PopsRightClickMenuConfig;
      if (config.$target instanceof HTMLElement) {
        const $root = config.$target.getRootNode();
        if ($root instanceof HTMLElement && $root.parentElement == null) {
          // 触发销毁元素
          itemConfig.emitter.emit("pops:before-destory", itemConfig);
        }
      }
    });
    PopsInstData.tooltip.forEach((itemConfig) => {
      const config = itemConfig.config as PopsToolTipConfig;
      if (config.$target instanceof HTMLElement) {
        const $root = config.$target.getRootNode();
        if ($root instanceof HTMLElement && $root.parentElement == null) {
          // 触发销毁元素
          itemConfig.emitter.emit("pops:before-destory", itemConfig);
        }
      }
    });
    // eslint-disable-next-line no-async-promise-executor
    await new Promise<void>(async (resolve) => {
      const $pops = $anim.querySelector<HTMLDivElement>(".pops[type-value]")!;
      const drawerConfig = config as Required<PopsDrawerConfig>;
      const startAnim = () => {
        /**
         * 弹窗已关闭的回调
         */
        const transtionEndCallback = async (event: Event) => {
          if ((event as TransitionEvent).propertyName !== "transform") {
            return;
          }
          listener.off();
          await PopsInstHandler.removeInstance([instConfigList], guid);
          resolve();
        };
        // 监听过渡结束
        const listener = popsDOMUtils.on($pops, popsDOMUtils.getTransitionEndNameList(), transtionEndCallback, {
          once: true,
        });
        const popsTransForm = globalThis.getComputedStyle($pops).transform;
        if (popsTransForm !== "none") {
          // 不存在动画
          // 直接移除实例
          listener.emit({ propertyName: "transform" });
          return;
        }
        if (["top"].includes(drawerConfig.direction)) {
          $pops.style.setProperty("transform", "translateY(-100%)");
        } else if (["bottom"].includes(drawerConfig.direction)) {
          $pops.style.setProperty("transform", "translateY(100%)");
        } else if (["left"].includes(drawerConfig.direction)) {
          $pops.style.setProperty("transform", "translateX(-100%)");
        } else if (["right"].includes(drawerConfig.direction)) {
          $pops.style.setProperty("transform", "translateX(100%)");
        } else {
          console.error("未知direction: ", drawerConfig.direction);
        }
      };
      if (popsType === "drawer") {
        await popsUtils.sleep(drawerConfig.closeDelay ?? 0);
        startAnim();
      } else {
        await PopsInstHandler.removeInstance([instConfigList], guid);
        resolve();
      }
    });
  },
  /**
   * 拖拽元素
   * 说明：
   * + 元素的position为absolute或者fixed
   * + 会为元素的
   * @param $move 需要拖拽的元素
   * @param options 配置
   */
  drag(
    $move: HTMLElement,
    options: {
      dragElement: HTMLElement;
      limit: boolean;
      emitClick?: boolean;
      extraDistance: number;
      container?: Window | typeof globalThis | HTMLElement;
      startCallBack?: (moveElement: HTMLElement, left: number, top: number) => void;
      moveCallBack?: (moveElement: HTMLElement, left: number, top: number) => void;
      endCallBack?: (moveElement: HTMLElement, left: number, top: number) => void;
      preventEvent?: (event: TouchEvent | PointerEvent) => boolean;
    }
  ) {
    options = Object.assign(
      {
        limit: true,
        extraDistance: 3,
        container: PopsCore.globalThis,
        emitClick: true,
      },
      options
    );
    let isMove = false;
    // 点击元素，left偏移
    let clickElementLeftOffset = 0;
    // 点击元素，top偏移
    let clickElementTopOffset = 0;
    const AnyTouch = popsUtils.AnyTouch();
    const anyTouchElement = new AnyTouch(options.dragElement, {
      preventDefault(event: Event) {
        if (typeof options.preventEvent === "function") {
          return options.preventEvent(event as any);
        } else {
          // 返回true阻止滑动
          return true;
        }
      },
    });
    popsDOMUtils.css(options.dragElement, {
      cursor: "move",
    });
    /**
     * 修改移动的元素的style
     */
    function changeMoveElementStyle(element: HTMLElement) {
      const old_transitionDuration = element.style.transitionDuration;
      if (globalThis.getComputedStyle(element).transitionDuration !== "0s") {
        element.style.transitionDuration = "0s";
      }
      return () => {
        element.style.transitionDuration = old_transitionDuration;
      };
    }
    /**
     * 获取容器的高度、宽度，一般是window为容器
     */
    function getContainerWidthOrHeight(container: HTMLElement | Window | typeof globalThis) {
      container = container ?? globalThis;
      return {
        width: popsDOMUtils.width(container),
        height: popsDOMUtils.height(container),
      };
    }
    /**
     * 获取容器的最小left、top偏移
     */

    function getContainerTopOrLeft(container: HTMLElement | Window | typeof globalThis) {
      container = container ?? globalThis;
      if (popsUtils.isWin(container)) {
        return {
          left: 0,
          top: 0,
        };
      } else {
        const rect = (container as HTMLElement).getBoundingClientRect();
        return {
          left: rect.left,
          top: rect.top,
        };
      }
    }
    // 获取transform偏移
    let transformInfo = popsDOMUtils.getTransform($move);

    let resumeMoveElementStyle: ((...args: any[]) => any) | null = null;

    anyTouchElement.on("pan", function (event) {
      if (!isMove) {
        isMove = true;
        const rect = options.dragElement.getBoundingClientRect();
        clickElementLeftOffset = event.x - rect.left;
        clickElementTopOffset = event.y - rect.top;
        transformInfo = popsDOMUtils.getTransform($move);
        resumeMoveElementStyle = changeMoveElementStyle($move);
        if (typeof options.startCallBack === "function") {
          options.startCallBack($move, clickElementLeftOffset, clickElementTopOffset);
        }
      }

      /** 当前移动的left偏移 */
      let currentMoveLeftOffset = event.x - clickElementLeftOffset + transformInfo.transformLeft;
      /** 当前移动的top偏移 */
      let currentMoveTopOffset = event.y - clickElementTopOffset + transformInfo.transformTop;
      // 拖拽移动
      if (event.phase === "move") {
        if (options.limit) {
          // 限制在容器内移动
          // left偏移最大值
          const maxLeftOffset =
            getContainerWidthOrHeight(options.container!).width -
            popsDOMUtils.width($move) +
            transformInfo.transformLeft;
          const { left: minLeftOffset, top: minTopOffset } = getContainerTopOrLeft(options.container!);
          // top偏移的最大值
          const maxTopOffset =
            getContainerWidthOrHeight(options.container!).height -
            popsDOMUtils.height($move) +
            transformInfo.transformTop;
          if (currentMoveLeftOffset > maxLeftOffset) {
            // 不允许超过容器的最大宽度
            currentMoveLeftOffset = maxLeftOffset;
          }
          if (currentMoveTopOffset > maxTopOffset) {
            // 不允许超过容器的最大高度
            currentMoveTopOffset = maxTopOffset;
          }
          if (currentMoveLeftOffset - options.extraDistance * 2 < minLeftOffset + transformInfo.transformLeft) {
            // 不允许left偏移小于容器最小值
            currentMoveLeftOffset = minLeftOffset + transformInfo.transformLeft;
            // 最左边 +额外距离
            currentMoveLeftOffset += options.extraDistance;
          } else {
            // 最右边 -额外距离
            currentMoveLeftOffset -= options.extraDistance;
          }
          if (currentMoveTopOffset - options.extraDistance * 2 < minTopOffset + transformInfo.transformTop) {
            // 不允许top偏移小于容器最小值
            currentMoveTopOffset = minTopOffset + transformInfo.transformTop;
            // 最上面 +额外距离
            currentMoveTopOffset += options.extraDistance;
          } else {
            // 最下面 -额外距离
            currentMoveTopOffset -= options.extraDistance;
          }
        }
        if (typeof options.moveCallBack === "function") {
          options.moveCallBack($move, currentMoveLeftOffset, currentMoveTopOffset);
        }

        popsDOMUtils.css($move, {
          left: currentMoveLeftOffset + "px",
          top: currentMoveTopOffset + "px",
        });
      }

      // 停止拖拽
      if (event.phase === "end") {
        isMove = false;
        if (typeof resumeMoveElementStyle === "function") {
          resumeMoveElementStyle();
          resumeMoveElementStyle = null;
        }
        if (typeof options.endCallBack === "function") {
          options.endCallBack($move, currentMoveLeftOffset, currentMoveTopOffset);
        }
      }
    });
    if (options.emitClick) {
      // 因为会覆盖上面的点击事件，主动触发一下
      anyTouchElement.on(["tap"], function (event) {
        event.changedPoints.forEach((item) => {
          popsDOMUtils.emit(item.target! as HTMLElement, "click", void 0, true);
        });
      });
    }
  },
};
