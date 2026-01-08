import type { PopsAlertConfig } from "../components/alert/types";
import type { PopsConfirmConfig } from "../components/confirm/types";
import type { PopsDrawerConfig } from "../components/drawer/types";
import type { PopsFolderConfig } from "../components/folder/types";
import type { PopsIframeConfig } from "../components/iframe/types";
import type { PopsLoadingConfig } from "../components/loading/types";
import type { PopsPanelConfig } from "../components/panel/types";
import type { PopsPromptConfig } from "../components/prompt/types/index";
import type { PopsInstGeneralConfig } from "../types/inst";
import type { PopsInstStoreType } from "../types/main";
import { popsDOMUtils } from "./PopsDOMUtils";
import { popsUtils } from "./PopsUtils";
import { PopsCore } from "../PopsCore";
import { PopsInstData } from "../PopsInst";
import { PopsAnimation } from "../PopsAnimation";
import type { PopsRightClickMenuConfig } from "../components/rightClickMenu/types";
import type { PopsToolTipConfig } from "../components/tooltip/types";

export const PopsInstanceUtils = {
  /**
   * 获取页面中最大的z-index的元素信息
   * @param deviation 获取最大的z-index值的偏移，默认是+1
   * @param node 进行判断的元素，默认是document
   * @param ignoreCallBack 执行元素处理时调用的函数，返回false可忽略不想要处理的元素
   * @example
   * Utils.getMaxZIndexNodeInfo();
   * > {
   *   node: ...,
   *   zIndex: 1001
   * }
   **/
  getMaxZIndexNodeInfo(
    deviation = 1,
    target: Element | ShadowRoot | Document = PopsCore.document,
    ignoreCallBack?: ($ele: Element | HTMLElement | ShadowRoot) => boolean | void
  ): {
    node: Element;
    zIndex: number;
  } {
    deviation = Number.isNaN(deviation) ? 1 : deviation;
    // 最大值 2147483647
    // const maxZIndex = Math.pow(2, 31) - 1;
    // 比较值 2000000000
    const maxZIndexCompare = 2 * Math.pow(10, 9);
    // 当前页面最大的z-index
    let zIndex = 0;
    // 当前的最大z-index的元素，调试使用
    let maxZIndexNode: Element | null = null;
    /**
     * 元素是否可见
     * @param $css
     */
    function isVisibleNode($css: CSSStyleDeclaration): boolean {
      return $css.position !== "static" && $css.display !== "none";
    }
    /**
     * 查询元素的z-index
     * 并比较值是否是已获取的最大值
     * @param $ele
     */
    function queryMaxZIndex($ele: Element) {
      if (typeof ignoreCallBack === "function") {
        const ignoreResult = ignoreCallBack($ele);
        if (typeof ignoreResult === "boolean" && !ignoreResult) {
          return;
        }
      }
      /** 元素的样式 */
      const nodeStyle = PopsCore.window.getComputedStyle($ele);
      // 不对position为static和display为none的元素进行获取它们的z-index
      if (isVisibleNode(nodeStyle)) {
        const nodeZIndex = parseInt(nodeStyle.zIndex);
        if (!isNaN(nodeZIndex)) {
          if (nodeZIndex > zIndex) {
            // 赋值到全局
            zIndex = nodeZIndex;
            maxZIndexNode = $ele;
          }
        }
        // 判断shadowRoot
        if ($ele.shadowRoot != null && $ele instanceof ShadowRoot) {
          $ele.shadowRoot.querySelectorAll("*").forEach(($shadowEle) => {
            queryMaxZIndex($shadowEle);
          });
        }
      }
    }
    target.querySelectorAll("*").forEach(($ele) => {
      queryMaxZIndex($ele);
    });
    zIndex += deviation;
    if (zIndex >= maxZIndexCompare) {
      // 最好不要超过最大值
      zIndex = maxZIndexCompare;
    }
    return {
      node: maxZIndexNode!,
      zIndex: zIndex,
    };
  },
  /**
   * 获取pops所有弹窗中的最大的z-index
   * @param deviation
   */
  getPopsMaxZIndex(deviation: number = 1) {
    deviation = Number.isNaN(deviation) ? 1 : deviation;
    // 最大值 2147483647
    // const browserMaxZIndex = Math.pow(2, 31) - 1;
    // 比较值 2000000000
    const maxZIndex = 2 * Math.pow(10, 9);
    // 当前页面最大的z-index
    let zIndex = 0;
    // 当前的最大z-index的元素，调试使用
    let maxZIndexNode = null as HTMLDivElement | null;

    /**
     * 元素是否可见
     * @param $css
     */
    function isVisibleNode($css: CSSStyleDeclaration): boolean {
      return $css.position !== "static" && $css.display !== "none";
    }
    Object.keys(PopsInstData).forEach((instKeyName) => {
      const instData = PopsInstData[instKeyName as PopsInstStoreType];
      for (let index = 0; index < instData.length; index++) {
        const inst = instData[index];
        const nodeStyle = window.getComputedStyle(inst.$anim);
        // 不对position为static和display为none的元素进行获取它们的z-index
        if (isVisibleNode(nodeStyle)) {
          const nodeZIndex = parseInt(nodeStyle.zIndex);
          if (!isNaN(nodeZIndex)) {
            if (nodeZIndex > zIndex) {
              zIndex = nodeZIndex;
              maxZIndexNode = inst.$anim;
            }
          }
        }
      }
    });
    zIndex += deviation;
    const isOverMaxZIndex = zIndex >= maxZIndex;
    if (isOverMaxZIndex) {
      // 超出z-index最大值
      zIndex = maxZIndex;
    }
    return { zIndex: zIndex, animElement: maxZIndexNode, isOverMaxZIndex };
  },
  /**
   * 获取页面中最大的z-index
   * @param deviation 获取最大的z-index值的偏移，默认是+1
   * @example
   * getMaxZIndex();
   * > 1001
   **/
  getMaxZIndex(deviation = 1): number {
    return this.getMaxZIndexNodeInfo(deviation).zIndex;
  },
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
    const removeInst = function (instCommonConfig: PopsInstGeneralConfig) {
      if (typeof instCommonConfig.beforeRemoveCallBack === "function") {
        // 调用移除签的回调
        instCommonConfig.beforeRemoveCallBack(instCommonConfig);
      }
      instCommonConfig?.$anim?.remove();
      instCommonConfig?.$pops?.remove();
      instCommonConfig?.$mask?.remove();
      instCommonConfig?.$shadowContainer?.remove();
    };
    const asyncInstTask: Promise<void>[] = [];
    // [ inst[], inst[],...]
    totalInstConfigList.forEach((instConfigList) => {
      //  inst[]
      instConfigList.forEach(async (instConfigItem, index) => {
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
                    function () {
                      removeInst(instConfigItem);
                      resolve();
                    },
                    {
                      capture: true,
                    }
                  );
                })
              );
            } else {
              removeInst(instConfigItem);
            }
          } else {
            removeInst(instConfigItem);
          }
          instConfigList.splice(index, 1);
        }
      });
    });
    await Promise.all(asyncInstTask);
    return totalInstConfigList;
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
    return new Promise<void>((resolve) => {
      const $pops = $anim.querySelector<HTMLDivElement>(".pops[type-value]")!;
      if (popsType === "drawer") {
        const drawerConfig = config as Required<PopsDrawerConfig>;
        popsUtils.setTimeout(() => {
          if ($mask) {
            popsDOMUtils.css($mask, "display", "none");
          }
          if (["top", "bottom"].includes(drawerConfig.direction)) {
            $pops.style.setProperty("height", "0");
          } else if (["left", "right"].includes(drawerConfig.direction)) {
            $pops.style.setProperty("width", "0");
          } else {
            console.error("未知direction：", drawerConfig.direction);
          }
          resolve();
        }, drawerConfig.closeDelay);
      } else {
        const fintInst = instConfigList.find((instConfigItem) => instConfigItem.guid === guid);
        if (fintInst) {
          // 存在动画
          const instConfigItem = fintInst;
          instConfigItem.$anim.style.width = "100%";
          instConfigItem.$anim.style.height = "100%";
          Reflect.set(
            instConfigItem.$anim.style,
            "animation-name",
            instConfigItem.$anim.getAttribute("anim") + "-reverse"
          );
          if (PopsAnimation.hasAnim(Reflect.get(instConfigItem.$anim.style, "animation-name"))) {
            /**
             * 动画结束的回调
             */
            function animationendCallBack() {
              instConfigItem.$anim.style.display = "none";
              if (instConfigItem.$mask) {
                instConfigItem.$mask.style.display = "none";
              }
              popsDOMUtils.off(instConfigItem.$anim, popsDOMUtils.getAnimationEndNameList(), animationendCallBack, {
                capture: true,
              });
              resolve();
            }
            popsDOMUtils.on(instConfigItem.$anim, popsDOMUtils.getAnimationEndNameList(), animationendCallBack, {
              capture: true,
            });
          } else {
            instConfigItem.$anim.style.display = "none";
            if (instConfigItem.$mask) {
              instConfigItem.$mask.style.display = "none";
            }

            resolve();
          }
        }
      }
    });
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
    return new Promise<void>((resolve) => {
      const $pops = $anim.querySelector<HTMLDivElement>(".pops[type-value]")!;
      if (popsType === "drawer") {
        const drawerConfig = config as PopsDrawerConfig;
        popsUtils.setTimeout(() => {
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
          resolve();
        }, drawerConfig.openDelay ?? 0);
      } else {
        const fintInst = instConfigList.find((instConfigItem) => instConfigItem.guid === guid);
        if (fintInst) {
          const instConfigItem = fintInst;
          instConfigItem.$anim.style.width = "";
          instConfigItem.$anim.style.height = "";
          Reflect.set(
            instConfigItem.$anim.style,
            "animation-name",
            instConfigItem.$anim!.getAttribute("anim")!.replace("-reverse", "")
          );
          if (PopsAnimation.hasAnim(Reflect.get(instConfigItem.$anim.style, "animation-name"))) {
            /**
             * 动画结束的回调
             */
            function animationendCallBack() {
              popsDOMUtils.off(instConfigItem.$anim, popsDOMUtils.getAnimationEndNameList(), animationendCallBack, {
                capture: true,
              });
              resolve();
            }
            instConfigItem.$anim.style.display = "";
            if (instConfigItem.$mask) {
              instConfigItem.$mask.style.display = "";
            }
            popsDOMUtils.on(instConfigItem.$anim, popsDOMUtils.getAnimationEndNameList(), animationendCallBack, {
              capture: true,
            });
          } else {
            instConfigItem.$anim.style.display = "";
            if (instConfigItem.$mask) {
              instConfigItem.$mask.style.display = "";
            }
            resolve();
          }
        }
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
    // eslint-disable-next-line no-async-promise-executor
    await new Promise<void>(async (resolve) => {
      const $pops = $anim.querySelector<HTMLDivElement>(".pops[type-value]")!;
      const drawerConfig = config as Required<PopsDrawerConfig>;
      /**
       * 动画结束事件
       */
      function transitionendEvent() {
        /**
         * 弹窗已关闭的回调
         */
        async function closeCallBack(event: Event) {
          if ((event as TransitionEvent).propertyName !== "transform") {
            return;
          }
          popsDOMUtils.off($pops, popsDOMUtils.getTransitionEndNameList(), closeCallBack);
          await PopsInstanceUtils.removeInstance([instConfigList], guid);
          resolve();
        }
        // 监听过渡结束
        popsDOMUtils.on($pops, popsDOMUtils.getTransitionEndNameList(), closeCallBack);
        const popsTransForm = getComputedStyle($pops).transform;
        if (popsTransForm !== "none") {
          popsDOMUtils.emit($pops, popsDOMUtils.getTransitionEndNameList(), void 0, true);
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
          console.error("未知direction：", drawerConfig.direction);
        }
      }

      if (popsType === "drawer") {
        popsUtils.setTimeout(() => {
          transitionendEvent();
        }, drawerConfig.closeDelay);
      } else {
        await PopsInstanceUtils.removeInstance([instConfigList], guid);
        resolve();
      }
    });

    // 判断组件内是否有rightClickMenu、tooltip、searchSuggestion组件
    // 有的话也需要关闭
    PopsInstData.rightClickMenu.forEach((itemConfig) => {
      const config = itemConfig.config as PopsRightClickMenuConfig;
      if (config.$target instanceof HTMLElement) {
        const $root = config.$target.getRootNode();
        if ($root instanceof HTMLElement && $root.parentElement == null) {
          // 触发销毁元素
          itemConfig.destory();
        }
      }
    });
    PopsInstData.tooltip.forEach((itemConfig) => {
      const config = itemConfig.config as PopsToolTipConfig;
      if (config.$target instanceof HTMLElement) {
        const $root = config.$target.getRootNode();
        if ($root instanceof HTMLElement && $root.parentElement == null) {
          // 触发销毁元素
          itemConfig.destory();
        }
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
        //if (event.nativeEvent.offsetX) {
        //  clickElementLeftOffset = parseInt(event.nativeEvent.offsetX);
        //} else {
        //  clickElementLeftOffset = parseInt(event.getOffset().x);
        //}
        //if (event.nativeEvent.offsetY) {
        //  clickElementTopOffset = parseInt(event.nativeEvent.offsetY);
        //} else {
        //  clickElementTopOffset = parseInt(event.getOffset().y);
        //}
        resumeMoveElementStyle = changeMoveElementStyle($move);
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
  /**
   * 排序数组
   * @param getBeforeValueFun
   * @param getAfterValueFun
   * @param sortByDesc 排序是否降序，默认降序
   */
  sortElementListByProperty<T, R>(
    getBeforeValueFun: (value: T) => R,
    getAfterValueFun: (value: T) => R,
    sortByDesc = true
  ) {
    if (typeof sortByDesc !== "boolean") {
      throw new TypeError("参数 sortByDesc 必须为boolean类型");
    }
    if (getBeforeValueFun == null || getAfterValueFun == null) {
      throw new Error("获取前面的值或后面的值的方法不能为空");
    }
    return function (after_obj: T, before_obj: T) {
      const beforeValue = getBeforeValueFun(before_obj); //  前
      const afterValue = getAfterValueFun(after_obj); // 后
      if (sortByDesc) {
        if (afterValue > beforeValue) {
          return -1;
        } else if (afterValue < beforeValue) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (afterValue < beforeValue) {
          return -1;
        } else if (afterValue > beforeValue) {
          return 1;
        } else {
          return 0;
        }
      }
    };
  },
};
