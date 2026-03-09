import { PopsCommonCSSClassName } from "../config/CommonCSSClassName";
import { PopsInstData } from "../PopsInst";
import type { PopsInstStoreType } from "../types/main";
import { popsUtils } from "./PopsUtils";

export const PopsInstanceUtils = {
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
    let maxZIndexNode = null as HTMLElement | null;

    Object.keys(PopsInstData).forEach((instKeyName) => {
      const instData = PopsInstData[instKeyName as PopsInstStoreType];
      for (let index = 0; index < instData.length; index++) {
        const inst = instData[index];
        // 不对position为static和display为none的元素进行获取它们的z-index
        const $elList = [inst.$anim, inst.$pops, inst.$mask].filter((it) => it instanceof HTMLElement);
        const nodeZIndexInfoList = popsUtils.getMaxZIndexNodeInfoFromPoint($elList);
        const maxNodeZIndexInfo = nodeZIndexInfoList[0];
        if (maxNodeZIndexInfo) {
          const nodeZIndex = maxNodeZIndexInfo.zIndex;
          if (nodeZIndex > zIndex) {
            zIndex = nodeZIndex;
            maxZIndexNode = maxNodeZIndexInfo.node! || maxNodeZIndexInfo.positionNode!;
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
  /**
   * 是否是隐藏状态
   *
   * 检测以下项：
   *
   * + `display`: none
   * + `visibility`: hidden
   * + `opacity`: 0
   * + `使用了pops的自定义的隐藏class类`
   * @param $el 需要检测的元素
   */
  isHide($el: Element) {
    let flag = false;
    if (
      $el?.classList?.contains(PopsCommonCSSClassName.hide) ||
      $el?.classList?.contains(PopsCommonCSSClassName.hideImportant)
    ) {
      flag = true;
    } else {
      if ($el instanceof HTMLElement) {
        const style = $el.style;
        flag = style.display.includes("none") || style.visibility.includes("hidden") || style.opacity !== "0";
      }
      if (!flag) {
        const style = globalThis.getComputedStyle($el);
        flag = style.display.includes("none") || style.visibility.includes("hidden") || style.opacity !== "0";
      }
    }
    return flag;
  },
  /**
   * 判断元素是否是在`.pops`内
   * @param $el 目标元素
   */
  isNodeInPopsNode($el: Element) {
    return !!($el.closest(".pops") || $el.matches(".pops"));
  },
  /**
   * 判断是否是`.pops-anim`元素
   * @param $el 目标元素
   */
  isAnimNode($el: Element) {
    return !!(
      $el?.localName?.toLowerCase() === "div" &&
      $el.className &&
      $el.className === "pops-anim" &&
      $el.hasAttribute("anim")
    );
  },
};
