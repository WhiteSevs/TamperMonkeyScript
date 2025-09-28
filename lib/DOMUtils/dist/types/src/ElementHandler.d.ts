import { ElementEvent } from "./ElementEvent";
import type { WindowApiOption } from "./types/WindowApi";
import { WindowApi } from "./WindowApi";
declare class ElementHandler extends ElementEvent {
    windowApi: typeof WindowApi.prototype;
    constructor(windowApiOption?: WindowApiOption);
    /**
     * 获取元素的选择器字符串
     * @param $el
     * @example
     * DOMUtils.getElementSelector(document.querySelector("a"))
     * > '.....'
     */
    getElementSelector($el: HTMLElement): string;
}
declare const elementHandler: ElementHandler;
export { elementHandler, ElementHandler };
