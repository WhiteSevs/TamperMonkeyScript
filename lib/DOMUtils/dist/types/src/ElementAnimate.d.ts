import type { DOMUtilsTargetElementType } from "./types/global";
import type { WindowApiOption } from "./types/WindowApi";
import { ElementWait } from "./ElementWait";
import { WindowApi } from "./WindowApi";
declare class ElementAnimate extends ElementWait {
    windowApi: typeof WindowApi.prototype;
    constructor(windowApiOption?: WindowApiOption);
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
    animate(element: DOMUtilsTargetElementType, styles: CSSStyleDeclaration, duration?: number, callback?: (() => void) | undefined | null): void;
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
    show(target: DOMUtilsTargetElementType, checkVisiblie?: boolean): void;
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
    hide(target: DOMUtilsTargetElementType, checkVisiblie?: boolean): void;
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
    fadeIn(element: DOMUtilsTargetElementType, duration?: number, callback?: () => void): void;
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
    fadeOut(element: DOMUtilsTargetElementType, duration?: number, callback?: () => void): void;
    /**
     * 切换元素的显示和隐藏状态
     * @param element 当前元素
     * @param checkVisiblie 是否检测元素是否显示
     * @example
     * // 如果元素a.xx当前是隐藏，则显示，如果是显示，则隐藏
     * DOMUtils.toggle(document.querySelector("a.xx"))
     * DOMUtils.toggle("a.xx")
     */
    toggle(element: DOMUtilsTargetElementType, checkVisiblie?: boolean): void;
}
declare const elementAnimate: ElementAnimate;
export { elementAnimate, ElementAnimate };
