import type { WindowApiOption } from "./types/WindowApi";
import { WindowApi } from "./WindowApi";

class ElementSelector {
  windowApi: typeof WindowApi.prototype;
  constructor(windowApiOption?: WindowApiOption) {
    this.windowApi = new WindowApi(windowApiOption);
  }
  /**
   * 选择器，可使用以下的额外语法
   *
   *
   * **前置语法**
   *
   * + `xpath:` 作用：执行xpath语法，会对当前js环境下的`Document`进行节点获取
   *
   * **末尾语法**
   * + `:contains([text])` 作用: 找到包含指定文本内容的指定元素
   * + `:empty` 作用:找到既没有文本内容也没有子元素的指定元素
   * + `:regexp([text])` 作用: 找到符合正则表达式的内容的指定元素
   * @param selector 选择器
   * @param parent 指定父元素，默认为`document`
   * @example
   * DOMUtils.selector("div:contains('测试')")
   * > div.xxx
   * @example
   * DOMUtils.selector("div:empty")
   * > div.xxx
   * @example
   * DOMUtils.selector("div:regexp('^xxxx$')")
   * > div.xxx
   */
  selector<K extends keyof HTMLElementTagNameMap>(
    selector: K,
    parent?: Element | Document | DocumentFragment | ShadowRoot
  ): HTMLElementTagNameMap[K] | undefined;
  selector<E extends Element = HTMLElement>(
    selector: string,
    parent?: Element | Document | DocumentFragment | ShadowRoot
  ): E | undefined;
  selector<E extends Element = HTMLElement>(
    selector: string,
    parent?: Element | Document | DocumentFragment | ShadowRoot
  ) {
    return this.selectorAll<E>(selector, parent)[0];
  }
  /**
   * 选择器，可使用以下的额外语法
   *
   * **前置语法**
   *
   * + `xpath:` 作用：执行xpath语法，会对当前js环境下的`Document`进行节点获取
   *
   * **末尾语法**
   * + `:contains([text])` 作用: 找到包含指定文本内容的指定元素
   * + `:empty` 作用:找到既没有文本内容也没有子元素的指定元素
   * + `:regexp([text])` 作用: 找到符合正则表达式的内容的指定元素
   * @param selector 选择器
   * @param parent 指定父元素，默认为`document`
   * @example
   * DOMUtils.selectorAll("div:contains('测试')")
   * > [div.xxx]
   * @example
   * DOMUtils.selectorAll("div:empty")
   * > [div.xxx]
   * @example
   * DOMUtils.selectorAll("div:regexp('^xxxx$')")
   * > [div.xxx]
   * @example
   * DOMUtils.selectorAll("div:regexp(/^xxx/ig)")
   * > [div.xxx]
   */
  selectorAll<K extends keyof HTMLElementTagNameMap>(
    selector: K,
    parent?: Element | Document | DocumentFragment | ShadowRoot
  ): HTMLElementTagNameMap[K][];
  selectorAll<E extends Element = HTMLElement>(
    selector: string,
    parent?: Element | Document | DocumentFragment | ShadowRoot
  ): E[];
  selectorAll<E extends Element = HTMLElement>(
    selector: string,
    parent?: Element | Document | DocumentFragment | ShadowRoot
  ) {
    const context = this;
    parent = parent || context.windowApi.document;
    selector = selector.trim();
    if (selector.startsWith("xpath:")) {
      selector = selector.replace(/^xpath:/i, "");
      const xpathResult = context.windowApi.document.evaluate(
        selector,
        parent,
        null,
        XPathResult.ORDERED_NODE_ITERATOR_TYPE,
        null
      );
      const result: E[] = [];
      let iterateNext = xpathResult.iterateNext();
      while (iterateNext) {
        result.push(iterateNext as E);
        iterateNext = xpathResult.iterateNext();
      }
      return result;
    } else if (selector.match(/[^\s]{1}:empty$/gi)) {
      // empty 语法
      selector = selector.replace(/:empty$/gi, "");
      return Array.from(parent.querySelectorAll<E>(selector)).filter(($ele) => {
        return $ele?.innerHTML?.trim() === "";
      });
    } else if (selector.match(/[^\s]{1}:contains\("(.*)"\)$/i) || selector.match(/[^\s]{1}:contains\('(.*)'\)$/i)) {
      // contains 语法
      const textMatch = selector.match(/:contains\(("|')(.*)("|')\)$/i);
      const text = textMatch![2];
      selector = selector.replace(/:contains\(("|')(.*)("|')\)$/gi, "");
      return Array.from(parent.querySelectorAll<E>(selector)).filter(($ele) => {
        // @ts-ignore
        return ($ele?.textContent || $ele?.innerText)?.includes(text);
      });
    } else if (selector.match(/[^\s]{1}:regexp\("(.*)"\)$/i) || selector.match(/[^\s]{1}:regexp\('(.*)'\)$/i)) {
      // regexp 语法
      const textMatch = selector.match(/:regexp\(("|')(.*)("|')\)$/i);
      let pattern = textMatch![2];
      const flagMatch = pattern.match(/("|'),[\s]*("|')([igm]{0,3})$/i);
      let flags = "";
      if (flagMatch) {
        pattern = pattern.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi, "");
        flags = flagMatch[3];
      }
      const regexp = new RegExp(pattern, flags);
      selector = selector.replace(/:regexp\(("|')(.*)("|')\)$/gi, "");
      return Array.from(parent.querySelectorAll<E>(selector)).filter(($ele) => {
        // @ts-ignore
        return Boolean(($ele?.textContent || $ele?.innerText)?.match(regexp));
      });
    } else {
      // 普通语法
      return Array.from(parent.querySelectorAll<E>(selector));
    }
  }
  /**
   * 匹配元素，可使用以下的额外语法
   *
   * + :contains([text]) 作用: 找到包含指定文本内容的指定元素
   * + :empty 作用:找到既没有文本内容也没有子元素的指定元素
   * + :regexp([text]) 作用: 找到符合正则表达式的内容的指定元素
   * @param $el 元素
   * @param selector 选择器
   * @example
   * DOMUtils.matches("div:contains('测试')")
   * > true
   * @example
   * DOMUtils.matches("div:empty")
   * > true
   * @example
   * DOMUtils.matches("div:regexp('^xxxx$')")
   * > true
   * @example
   * DOMUtils.matches("div:regexp(/^xxx/ig)")
   * > false
   */
  matches($el: HTMLElement | Element | null | undefined, selector: string): boolean {
    selector = selector.trim();
    if ($el == null) return false;
    if ($el instanceof Document) return false;

    if (selector.match(/[^\s]{1}:empty$/gi)) {
      // empty 语法
      selector = selector.replace(/:empty$/gi, "");
      return $el.matches(selector) && $el?.innerHTML?.trim() === "";
    } else if (selector.match(/[^\s]{1}:contains\("(.*)"\)$/i) || selector.match(/[^\s]{1}:contains\('(.*)'\)$/i)) {
      // contains 语法
      const textMatch = selector.match(/:contains\(("|')(.*)("|')\)$/i);
      const text = textMatch![2];
      selector = selector.replace(/:contains\(("|')(.*)("|')\)$/gi, "");
      // @ts-ignore
      let content = $el?.textContent || $el?.innerText;
      if (typeof content !== "string") {
        content = "";
      }
      return $el.matches(selector) && content?.includes(text);
    } else if (selector.match(/[^\s]{1}:regexp\("(.*)"\)$/i) || selector.match(/[^\s]{1}:regexp\('(.*)'\)$/i)) {
      // regexp 语法
      const textMatch = selector.match(/:regexp\(("|')(.*)("|')\)$/i);
      let pattern = textMatch![2];
      const flagMatch = pattern.match(/("|'),[\s]*("|')([igm]{0,3})$/i);
      let flags = "";
      if (flagMatch) {
        pattern = pattern.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi, "");
        flags = flagMatch[3];
      }
      const regexp = new RegExp(pattern, flags);
      selector = selector.replace(/:regexp\(("|')(.*)("|')\)$/gi, "");
      // @ts-ignore
      let content = $el?.textContent || $el?.innerText;
      if (typeof content !== "string") {
        content = "";
      }
      return $el.matches(selector) && Boolean(content?.match(regexp));
    } else {
      // 普通语法
      return $el.matches(selector);
    }
  }
  /**
   * 根据选择器获取上层元素，可使用以下的额外语法
   *
   * + :contains([text]) 作用: 找到包含指定文本内容的指定元素
   * + :empty 作用:找到既没有文本内容也没有子元素的指定元素
   * + :regexp([text]) 作用: 找到符合正则表达式的内容的指定元素
   * @param $el 元素
   * @param selector 选择器
   * @example
   * DOMUtils.closest("div:contains('测试')")
   * > div.xxx
   * @example
   * DOMUtils.closest("div:empty")
   * > div.xxx
   * @example
   * DOMUtils.closest("div:regexp('^xxxx$')")
   * > div.xxxx
   * @example
   * DOMUtils.closest("div:regexp(/^xxx/ig)")
   * > null
   */
  closest<K extends keyof HTMLElementTagNameMap>(
    $el: HTMLElement | Element | null | undefined,
    selector: string
  ): HTMLElementTagNameMap[K] | null;
  closest<E extends Element = Element>($el: HTMLElement | Element | null | undefined, selector: string): E | null;
  closest<E extends Element = Element>($el: HTMLElement | Element | null | undefined, selector: string): E | null {
    selector = selector.trim();

    if ($el == null) return null;
    if ($el instanceof Document) return null;

    if (selector.match(/[^\s]{1}:empty$/gi)) {
      // empty 语法
      selector = selector.replace(/:empty$/gi, "");
      const $closest = $el?.closest<E>(selector);
      if ($closest && $closest?.innerHTML?.trim() === "") {
        return $closest;
      }
      return null;
    } else if (selector.match(/[^\s]{1}:contains\("(.*)"\)$/i) || selector.match(/[^\s]{1}:contains\('(.*)'\)$/i)) {
      // contains 语法
      const textMatch = selector.match(/:contains\(("|')(.*)("|')\)$/i);
      const text = textMatch![2];
      selector = selector.replace(/:contains\(("|')(.*)("|')\)$/gi, "");
      const $closest = $el?.closest<E>(selector);
      if ($closest) {
        // @ts-ignore
        const content = $el?.textContent || $el?.innerText;
        if (typeof content === "string" && content.includes(text)) {
          return $closest;
        }
      }
      return null;
    } else if (selector.match(/[^\s]{1}:regexp\("(.*)"\)$/i) || selector.match(/[^\s]{1}:regexp\('(.*)'\)$/i)) {
      // regexp 语法
      const textMatch = selector.match(/:regexp\(("|')(.*)("|')\)$/i);
      let pattern = textMatch![2];
      const flagMatch = pattern.match(/("|'),[\s]*("|')([igm]{0,3})$/i);
      let flags = "";
      if (flagMatch) {
        pattern = pattern.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi, "");
        flags = flagMatch[3];
      }
      const regexp = new RegExp(pattern, flags);
      selector = selector.replace(/:regexp\(("|')(.*)("|')\)$/gi, "");
      const $closest = $el?.closest<E>(selector);
      if ($closest) {
        // @ts-ignore
        const content = $el?.textContent || $el?.innerText;
        if (typeof content === "string" && content.match(regexp)) {
          return $closest;
        }
      }
      return null;
    } else {
      // 普通语法
      const $closest = $el?.closest<E>(selector);
      return $closest;
    }
  }
}

const elementSelector = new ElementSelector();

export { elementSelector, ElementSelector };
