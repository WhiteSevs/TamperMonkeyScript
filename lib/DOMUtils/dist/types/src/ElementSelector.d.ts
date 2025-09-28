import type { WindowApiOption } from "./types/WindowApi";
import { WindowApi } from "./WindowApi";
declare class ElementSelector {
    windowApi: typeof WindowApi.prototype;
    constructor(windowApiOption?: WindowApiOption);
    /**
     * 选择器，可使用以下的额外语法
     *
     * + :contains([text]) 作用: 找到包含指定文本内容的指定元素
     * + :empty 作用:找到既没有文本内容也没有子元素的指定元素
     * + :regexp([text]) 作用: 找到符合正则表达式的内容的指定元素
     * @param selector 选择器
     * @param parent 指定父元素
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
    selector<K extends keyof HTMLElementTagNameMap>(selector: K, parent?: Element | Document | DocumentFragment | ShadowRoot): HTMLElementTagNameMap[K] | undefined;
    selector<E extends Element = HTMLElement>(selector: string, parent?: Element | Document | DocumentFragment | ShadowRoot): E | undefined;
    /**
     * 选择器，可使用以下的额外语法
     *
     * + :contains([text]) 作用: 找到包含指定文本内容的指定元素
     * + :empty 作用:找到既没有文本内容也没有子元素的指定元素
     * + :regexp([text]) 作用: 找到符合正则表达式的内容的指定元素
     * @param selector 选择器
     * @param parent 指定父元素
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
    selectorAll<K extends keyof HTMLElementTagNameMap>(selector: K, parent?: Element | Document | DocumentFragment | ShadowRoot): HTMLElementTagNameMap[K][];
    selectorAll<E extends Element = HTMLElement>(selector: string, parent?: Element | Document | DocumentFragment | ShadowRoot): E[];
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
    matches($el: HTMLElement | Element | null | undefined, selector: string): boolean;
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
    closest<K extends keyof HTMLElementTagNameMap>($el: HTMLElement | Element, selector: string): HTMLElementTagNameMap[K] | null;
    closest<E extends Element = Element>($el: HTMLElement | Element, selector: string): E | null;
}
declare const elementSelector: ElementSelector;
export { elementSelector, ElementSelector };
