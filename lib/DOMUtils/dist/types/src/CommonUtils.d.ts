import { WindowApi } from "./WindowApi";
/** 通用工具类 */
export declare const CommonUtils: {
    windowApi: WindowApi;
    /**
     * 判断元素是否已显示或已连接
     * @param $el
     */
    isShow($el: HTMLElement): boolean;
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
    setSafeHTML($el: HTMLElement, text: string): void;
    /**
     * 用于强制显示元素并获取它的高度宽度等其它属性
     * @param $el
     */
    forceShow($el: HTMLElement): {
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
    getStyleValue(element: HTMLElement | CSSStyleDeclaration, styleName: string): number;
    /**
     * 判断是否是window，例如window、self、globalThis
     * @param target
     */
    isWin(target: any): boolean;
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
     * @param target
     * @param propName
     */
    delete(target: any, propName: any): boolean | undefined;
    /**
     * 自动使用 Worker 执行 setTimeout
     */
    setTimeout(callback: (...args: any[]) => any, timeout?: number): number;
    /**
     * 配合 .setTimeout 使用
     */
    clearTimeout(timeId: number | undefined): void;
    /**
     * 自动使用 Worker 执行 setInterval
     */
    setInterval(callback: (...args: any[]) => any, timeout?: number): number;
    /**
     * 配合 .setInterval 使用
     */
    clearInterval(timeId: number | undefined): void;
    /**
     * 判断是否是元素列表
     * @param $ele
     */
    isNodeList($ele: any): $ele is any[] | NodeList;
    /** 获取 animationend 在各个浏览器的兼容名 */
    getAnimationEndNameList(): string[];
    /** 获取 transitionend 在各个浏览器的兼容名 */
    getTransitionEndNameList(): string[];
};
