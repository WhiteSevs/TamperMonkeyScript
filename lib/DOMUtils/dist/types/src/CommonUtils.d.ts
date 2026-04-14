import { WindowApi } from "./WindowApi";
/** 通用工具类 */
export declare const CommonUtils: {
    windowApi: WindowApi;
    /**
     * 判断元素是否已显示或已连接
     * @param $el
     */
    isShow($el: Element): boolean;
    /**
     * 创建安全的html
     * @param text 字符串
     */
    createSafeHTML(text: string): any;
    /**
     * 在CSP策略下设置innerHTML
     * @param $el 元素
     * @param text 文本
     */
    setSafeHTML($el: Element, text: string): void;
    /**
     * 用于强制显示元素并获取它的高度宽度等其它属性
     * @param $el
     */
    forceShow($el: Element): {
        /**
         * 恢复修改的style
         */
        recovery(): void;
    };
    /**
     * 获取元素上的Float格式的属性px
     * @param element
     * @param styleName style名
     */
    getStyleValue(element: Element | CSSStyleDeclaration, styleName: string): number;
    /**
     * 判断是否是window，例如window、self、globalThis
     * @param obj
     */
    isWin(obj: any): boolean;
    /**
     * 判断对象是否是元素
     * @param $el
     * @returns
     * + true 是元素
     * + false 不是元素
     * @example
     * DOMUtilsCommonUtils.isDOM(document.querySelector("a"))
     * > true
     */
    isDOM($el: any): boolean;
    /**
     * 删除对象上的属性
     * @param obj
     * @param propName
     */
    delete(obj: any, propName: any): boolean | undefined;
    /**
     * 判断是否是元素列表
     * @param $el
     */
    isNodeList($el: any): $el is any[] | NodeList;
    /** 获取 animationend 在各个浏览器的兼容名 */
    getAnimationEndNameList(): string[];
    /** 获取 transitionend 在各个浏览器的兼容名 */
    getTransitionEndNameList(): string[];
};
