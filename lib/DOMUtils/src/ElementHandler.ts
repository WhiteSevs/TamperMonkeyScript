import { ElementEvent } from "./ElementEvent";
import type { WindowApiOption } from "./types/WindowApi";
import { WindowApi } from "./WindowApi";

class ElementHandler extends ElementEvent {
  windowApi: typeof WindowApi.prototype;
  constructor(windowApiOption?: WindowApiOption) {
    super(windowApiOption);
    this.windowApi = new WindowApi(windowApiOption);
  }
  /**
   * 获取元素的选择器字符串
   * @param $el
   * @example
   * DOMUtils.getElementSelector(document.querySelector("a"))
   * > '.....'
   */
  getElementSelector($el: HTMLElement): string {
    const that = this;
    if (!$el) return void 0 as any as string;
    if (!$el.parentElement) return void 0 as any as string;
    /* 如果元素有id属性，则直接返回id选择器 */
    if ($el.id) return `#${$el.id}`;

    /* 递归地获取父元素的选择器 */
    let selector = that.getElementSelector($el.parentElement);
    if (!selector) {
      return $el.tagName.toLowerCase();
    }
    /* 如果有多个相同类型的兄弟元素，则需要添加索引 */
    if ($el.parentElement.querySelectorAll($el.tagName).length > 1) {
      const index = Array.prototype.indexOf.call($el.parentElement.children, $el) + 1;
      selector += ` > ${$el.tagName.toLowerCase()}:nth-child(${index})`;
    } else {
      selector += ` > ${$el.tagName.toLowerCase()}`;
    }
    return selector;
  }
}

const elementHandler = new ElementHandler();

export { elementHandler, ElementHandler };
