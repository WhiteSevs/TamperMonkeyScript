import { WindowApi } from "./WindowApi";
/** 通用工具类 */
declare const DOMUtilsCommonUtils: {
    windowApi: WindowApi;
    /**
     * 判断元素是否已显示或已连接
     * @param element
     */
    isShow(element: HTMLElement): boolean;
    /**
     * 在CSP策略下设置innerHTML
     * @param $el 元素
     * @param text 文本
     */
    setSafeHTML($el: HTMLElement, text: string): void;
    /**
     * 用于显示元素并获取它的高度宽度等其它属性
     * @param element
     */
    showElement(element: HTMLElement): {
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
     * 删除对象上的属性
     * @param target
     * @param propName
     */
    delete(target: any, propName: any): void;
};
export { DOMUtilsCommonUtils };
