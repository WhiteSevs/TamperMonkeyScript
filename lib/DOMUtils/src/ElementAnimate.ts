import { CommonUtils } from "./CommonUtils";
import { elementSelector } from "./ElementSelector";
import type { DOMUtilsTargetElementType } from "./types/global";
import type { WindowApiOption } from "./types/WindowApi";
import { ElementWait } from "./ElementWait";
import { WindowApi } from "./WindowApi";

class ElementAnimate extends ElementWait {
  windowApi: typeof WindowApi.prototype;
  constructor(windowApiOption?: WindowApiOption) {
    super(windowApiOption);
    this.windowApi = new WindowApi(windowApiOption);
  }
  /**
   * 在一定时间内改变元素的样式属性，实现动画效果
   * @param element 需要进行动画的元素
   * @param styles 动画结束时元素的样式属性
   * @param duration 动画持续时间，单位为毫秒
   * @param callback 动画结束后执行的函数
   * @example
   * // 监听元素a.xx的从显示变为隐藏
   * DOMUtils.animate(document.querySelector("a.xx"),{ top:100},1000,function(){
   *   console.log("已往上位移100px")
   * })
   */
  animate(
    element: DOMUtilsTargetElementType,
    styles: CSSStyleDeclaration,
    duration: number = 1000,
    callback: (() => void) | undefined | null = null
  ) {
    const context = this;
    if (typeof element === "string") {
      element = elementSelector.selectorAll(element);
    }
    if (element == null) {
      return;
    }
    if (CommonUtils.isNodeList(element)) {
      // 设置
      element.forEach(($ele) => {
        context.animate($ele as HTMLElement, styles, duration, callback);
      });
      return;
    }
    if (typeof duration !== "number" || duration <= 0) {
      throw new TypeError("duration must be a positive number");
    }
    if (typeof callback !== "function" && callback !== void 0) {
      throw new TypeError("callback must be a function or null");
    }
    if (typeof styles !== "object" || styles === void 0) {
      throw new TypeError("styles must be an object");
    }
    if (Object.keys(styles).length === 0) {
      throw new Error("styles must contain at least one property");
    }
    const start = performance.now();
    const from: {
      [prop: string]: any;
    } = {};
    const to: {
      [prop: string]: any;
    } = {};
    for (const prop in styles) {
      from[prop] = element.style[prop] || context.windowApi.globalThis.getComputedStyle(element)[prop];
      to[prop] = styles[prop];
    }
    const timer = CommonUtils.setInterval(function () {
      const timePassed = performance.now() - start;
      let progress = timePassed / duration;
      if (progress > 1) {
        progress = 1;
      }
      for (const prop in styles) {
        element.style[prop] = from[prop] + (to[prop] - from[prop]) * progress + "px";
      }
      if (progress === 1) {
        CommonUtils.clearInterval(timer);
        if (callback) {
          callback();
        }
      }
    }, 10);
  }
  /**
   * 显示元素
   * @param target 当前元素
   * @param checkVisiblie 是否检测元素是否显示
   * + true （默认）如果检测到还未显示，则强制使用display: unset !important;
   * + false 不检测，直接设置display属性为空
   * @example
   * // 显示a.xx元素
   * DOMUtils.show(document.querySelector("a.xx"))
   * DOMUtils.show(document.querySelectorAll("a.xx"))
   * DOMUtils.show("a.xx")
   */
  show(target: DOMUtilsTargetElementType, checkVisiblie: boolean = true) {
    const context = this;
    if (target == null) {
      return;
    }
    if (typeof target === "string") {
      target = elementSelector.selectorAll(target);
    }
    if (target instanceof NodeList || target instanceof Array) {
      target = target as HTMLElement[];
      for (const element of target) {
        context.show(element, checkVisiblie);
      }
    } else {
      target = target as HTMLElement;
      target.style.display = "";
      if (checkVisiblie) {
        if (!CommonUtils.isShow(target)) {
          /* 仍然是不显示，尝试使用强覆盖 */
          target.style.setProperty("display", "unset", "important");
        }
      }
    }
  }
  /**
   * 隐藏元素
   * @param target 当前元素
   * @param checkVisiblie 是否检测元素是否显示
   * + true （默认）如果检测到显示，则强制使用display: none !important;
   * + false 不检测，直接设置display属性为none
   * @example
   * // 隐藏a.xx元素
   * DOMUtils.hide(document.querySelector("a.xx"))
   * DOMUtils.hide(document.querySelectorAll("a.xx"))
   * DOMUtils.hide("a.xx")
   */
  hide(target: DOMUtilsTargetElementType, checkVisiblie: boolean = true) {
    const context = this;
    if (target == null) {
      return;
    }
    if (typeof target === "string") {
      target = elementSelector.selectorAll(target);
    }
    if (target instanceof NodeList || target instanceof Array) {
      target = target as HTMLElement[];
      for (const element of target) {
        context.hide(element, checkVisiblie);
      }
    } else {
      target = target as HTMLElement;
      target.style.display = "none";
      if (checkVisiblie) {
        if (CommonUtils.isShow(target)) {
          /* 仍然是显示，尝试使用强覆盖 */
          target.style.setProperty("display", "none", "important");
        }
      }
    }
  }
  /**
   * 淡入元素
   * @param element 当前元素
   * @param duration 动画持续时间（毫秒），默认400毫秒
   * @param callback 动画结束的回调
   * @example
   * // 元素a.xx淡入
   * DOMUtils.fadeIn(document.querySelector("a.xx"),2500,()=>{
   *   console.log("淡入完毕");
   * })
   * DOMUtils.fadeIn("a.xx",undefined,()=>{
   *   console.log("淡入完毕");
   * })
   */
  fadeIn(element: DOMUtilsTargetElementType, duration: number = 400, callback?: () => void) {
    if (element == null) {
      return;
    }
    const context = this;
    if (typeof element === "string") {
      element = elementSelector.selectorAll(element);
    }
    if (CommonUtils.isNodeList(element)) {
      // 设置
      element.forEach(($ele) => {
        context.fadeIn($ele as HTMLElement, duration, callback);
      });
      return;
    }
    element.style.opacity = "0";
    element.style.display = "";
    let start: number = null as any;
    let timer: number = null as any;
    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      element = element as HTMLElement;
      element.style.opacity = Math.min(progress / duration, 1).toString();
      if (progress < duration) {
        context.windowApi.window.requestAnimationFrame(step);
      } else {
        if (callback && typeof callback === "function") {
          callback();
        }
        context.windowApi.window.cancelAnimationFrame(timer);
      }
    }
    timer = context.windowApi.window.requestAnimationFrame(step);
  }
  /**
   * 淡出元素
   * @param element 当前元素
   * @param duration 动画持续时间（毫秒），默认400毫秒
   * @param callback 动画结束的回调
   * @example
   * // 元素a.xx淡出
   * DOMUtils.fadeOut(document.querySelector("a.xx"),2500,()=>{
   *   console.log("淡出完毕");
   * })
   * DOMUtils.fadeOut("a.xx",undefined,()=>{
   *   console.log("淡出完毕");
   * })
   */
  fadeOut(element: DOMUtilsTargetElementType, duration: number = 400, callback?: () => void) {
    const context = this;
    if (element == null) {
      return;
    }
    if (typeof element === "string") {
      element = elementSelector.selectorAll(element);
    }
    if (CommonUtils.isNodeList(element)) {
      // 设置
      element.forEach(($ele) => {
        context.fadeOut($ele as HTMLElement, duration, callback);
      });
      return;
    }
    element.style.opacity = "1";
    let start: number = null as any;
    let timer: number = null as any;
    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      element = element as HTMLElement;
      element.style.opacity = Math.max(1 - progress / duration, 0).toString();
      if (progress < duration) {
        context.windowApi.window.requestAnimationFrame(step);
      } else {
        element.style.display = "none";
        if (typeof callback === "function") {
          callback();
        }
        context.windowApi.window.cancelAnimationFrame(timer);
      }
    }
    timer = context.windowApi.window.requestAnimationFrame(step);
  }
  /**
   * 切换元素的显示和隐藏状态
   * @param element 当前元素
   * @param checkVisiblie 是否检测元素是否显示
   * @example
   * // 如果元素a.xx当前是隐藏，则显示，如果是显示，则隐藏
   * DOMUtils.toggle(document.querySelector("a.xx"))
   * DOMUtils.toggle("a.xx")
   */
  toggle(element: DOMUtilsTargetElementType, checkVisiblie?: boolean) {
    const context = this;
    if (typeof element === "string") {
      element = elementSelector.selectorAll(element);
    }
    if (element == null) {
      return;
    }
    if (CommonUtils.isNodeList(element)) {
      // 设置
      element.forEach(($ele) => {
        context.toggle($ele as HTMLElement);
      });
      return;
    }
    if (context.windowApi.globalThis.getComputedStyle(element).getPropertyValue("display") === "none") {
      context.show(element, checkVisiblie);
    } else {
      context.hide(element, checkVisiblie);
    }
  }
}

const elementAnimate = new ElementAnimate();

export { elementAnimate, ElementAnimate };
