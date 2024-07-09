import type { ParseHTMLReturnType, PopsDOMUtilsCreateElementAttributesMap } from "../types/PopsDOMUtilsEventType";
import { PopsDOMUtilsEvent } from "./PopsDOMUtilsEvent";
declare class PopsDOMUtils extends PopsDOMUtilsEvent {
    /** 获取 animationend 在各个浏览器的兼容名 */
    getAnimationEndNameList(): string[];
    /** 获取 transitionend 在各个浏览器的兼容名 */
    getTransitionEndNameList(): string[];
    /**
     * 实现jQuery中的$().offset();
     * @param {HTMLElement} element
     * @returns
     */
    offset(element: HTMLElement): DOMRect;
    /**
     * 获取元素的宽度
     * @param element 要获取宽度的元素
     * @param isShow 是否已进行isShow，避免爆堆栈
     * @returns 元素的宽度，单位为像素
     * @example
     * // 获取元素a.xx的宽度
     * DOMUtils.width(document.querySelector("a.xx"))
     * DOMUtils.width("a.xx")
     * > 100
     * // 获取window的宽度
     * DOMUtils.width(window)
     * > 400
     * @example
     * // 设置元素a.xx的宽度为200
     * DOMUtils.width(document.querySelector("a.xx"),200)
     * DOMUtils.width("a.xx",200)
     */
    width(element: HTMLElement | string | Window | Document | typeof globalThis, isShow?: boolean): number;
    /**
     * 获取元素的高度
     * @param element 要获取高度的元素
     * @param isShow 是否已进行isShow，避免爆堆栈
     * @returns 元素的高度，单位为像素
     * @example
     * // 获取元素a.xx的高度
     * DOMUtils.height(document.querySelector("a.xx"))
     * DOMUtils.height("a.xx")
     * > 100
     * // 获取window的高度
     * DOMUtils.height(window)
     * > 700
     * @example
     * // 设置元素a.xx的高度为200
     * DOMUtils.height(document.querySelector("a.xx"),200)
     * DOMUtils.height("a.xx",200)
     */
    height(element: HTMLElement | string | Window | Document | typeof globalThis, isShow?: boolean): number;
    /**
     * 获取元素的外部宽度（包括边框和外边距）
     * @param {HTMLElement|string} element 要获取外部宽度的元素
     * @param {boolean} [isShow=false] 是否已进行isShow，避免爆堆栈
     * @returns {number} 元素的外部宽度，单位为像素
     * @example
     * // 获取元素a.xx的外部宽度
     * DOMUtils.outerWidth(document.querySelector("a.xx"))
     * DOMUtils.outerWidth("a.xx")
     * > 100
     * // 获取window的外部宽度
     * DOMUtils.outerWidth(window)
     * > 400
     */
    outerWidth(element: HTMLElement | string | Window | Document, isShow?: boolean): number;
    /**
     * 获取元素的外部高度（包括边框和外边距）
     * @param {HTMLElement|string} element 要获取外部高度的元素
     * @param {boolean} [isShow=false] 是否已进行isShow，避免爆堆栈
     * @returns {number} 元素的外部高度，单位为像素
     * @example
     * // 获取元素a.xx的外部高度
     * DOMUtils.outerHeight(document.querySelector("a.xx"))
     * DOMUtils.outerHeight("a.xx")
     * > 100
     * // 获取window的外部高度
     * DOMUtils.outerHeight(window)
     * > 700
     */
    outerHeight(element: HTMLElement | string | Window, isShow?: boolean): number;
    /**
     * 添加className
     * @param element 目标元素
     * @param className className属性
     */
    addClassName(element: HTMLElement, className: string): void;
    /**
     * 删除className
     * @param element 目标元素
     * @param className className属性
     */
    removeClassName(element: HTMLElement, className: string): void;
    /**
     * 判断元素是否包含某个className
     * @param element 目标元素
     * @param className className属性
     */
    containsClassName(element: HTMLElement, className: string): boolean;
    /**
     * 获取元素的样式属性值
     * @param element 目标元素
     * @param property 样式属性名或包含多个属性名和属性值的对象
     * @example
     * // 获取元素a.xx的CSS属性display
     * DOMUtils.css(document.querySelector("a.xx"),"display");
     * DOMUtils.css("a.xx","display");
     * > "none"
     * */
    css(element: HTMLElement | string, property: keyof CSSStyleDeclaration): string;
    /**
     * 获取元素的样式属性值
     * @param element 目标元素
     * @param property 样式属性名或包含多个属性名和属性值的对象
     * @example
     * // 获取元素a.xx的CSS属性display
     * DOMUtils.css(document.querySelector("a.xx"),"display");
     * DOMUtils.css("a.xx","display");
     * > "none"
     * */
    css(element: HTMLElement | string, property: string): string;
    /**
     * 设置元素的样式属性
     * @param element 目标元素
     * @param property 样式属性名或包含多个属性名和属性值的对象
     * @param value 样式属性值
     * @example
     * // 设置元素a.xx的CSS属性display为block
     * DOMUtils.css(document.querySelector("a.xx"),"display","block");
     * DOMUtils.css(document.querySelector("a.xx"),"display","block !important");
     * DOMUtils.css("a.xx","display","block");
     * DOMUtils.css("a.xx","display","block !important");
     * @example
     * // 设置元素a.xx的CSS属性top为10px
     * DOMUtils.css(document.querySelector("a.xx"),"top","10px");
     * DOMUtils.css(document.querySelector("a.xx"),"top",10);
     * */
    css(element: HTMLElement | string, property: keyof CSSStyleDeclaration & string, value: string | number): string;
    /**
     * 设置元素的样式属性
     * @param element 目标元素
     * @param property 样式属性名或包含多个属性名和属性值的对象
     * @param value 样式属性值
     * @example
     * // 设置元素a.xx的CSS属性display为block
     * DOMUtils.css(document.querySelector("a.xx"),{ display: "block" }});
     * DOMUtils.css(document.querySelector("a.xx"),{ display: "block !important" }});
     * @example
     * // 设置元素a.xx的CSS属性top为10px
     * DOMUtils.css(document.querySelector("a.xx"),{ top: "10px" });
     * DOMUtils.css(document.querySelector("a.xx"),{ top: 10 });
     * */
    css(element: HTMLElement | string, property: {
        [P in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[P];
    } | {
        [key: string]: string | number;
    }): string;
    /**
     * 创建元素
     * @param tagName 标签名
     * @param property 属性
     * @param attributes 元素上的自定义属性
     * @example
     * // 创建一个DIV元素，且属性class为xxx
     * DOMUtils.createElement("div",undefined,{ class:"xxx" });
     * > <div class="xxx"></div>
     * @example
     * // 创建一个DIV元素
     * DOMUtils.createElement("div");
     * > <div></div>
     * @example
     * // 创建一个DIV元素
     * DOMUtils.createElement("div","测试");
     * > <div>测试</div>
     */
    createElement<K extends keyof HTMLElementTagNameMap>(
    /** 元素名 */
    tagName: K, 
    /** 属性 */
    property?: ({
        [P in keyof HTMLElementTagNameMap[K]]?: HTMLElementTagNameMap[K][P];
    } & {
        [key: string]: any;
    }) | string, 
    /** 自定义属性 */
    attributes?: PopsDOMUtilsCreateElementAttributesMap): HTMLElementTagNameMap[K];
    /**
     * 获取文字的位置信息
     * @param input 输入框
     * @param selectionStart 起始位置
     * @param selectionEnd 结束位置
     * @param debug 是否是调试模式
     * + true 不删除临时节点元素
     * + false 删除临时节点元素
     */
    getTextBoundingRect(input: HTMLInputElement, selectionStart: number | string, selectionEnd: number | string, debug: boolean): DOMRect;
    /**
     * 使用className来隐藏元素
     * @param ele
     * @param isImportant 是否使用!important
     */
    cssHide(ele: Element | null, isImportant?: boolean): void;
    /**
     * cssHide的反向使用
     * @param ele
     */
    cssShow(ele: Element | null): void;
    /**
     * 将字符串转为Element元素
     * @param html
     * @param useParser 是否使用DOMParser来生成元素，有些时候通过DOMParser生成的元素有点问题
     * + true 使用DOMPraser来转换字符串
     * + false （默认）创建一个div，里面放入字符串，然后提取firstChild
     * @param isComplete 是否是完整的
     * + true 如果useParser为true，那么返回整个使用DOMParser转换成的Document
     * 如果useParser为false，返回一个DIV元素，DIV元素内包裹着需要转换的字符串
     * + false （默认）如果useParser为true，那么返回整个使用DOMParser转换成的Document的body
     * 如果useParser为false，返回一个DIV元素的firstChild
     * @example
     * // 将字符串转为Element元素
     * DOMUtils.parseHTML("<a href='xxxx'></a>")
     * > <a href="xxxx"></a>
     * @example
     * // 使用DOMParser将字符串转为Element元素
     * DOMUtils.parseHTML("<a href='xxxx'></a>",true)
     * > <a href="xxxx"></a>
     * @example
     * // 由于需要转换的元素是多个元素，将字符串转为完整的Element元素
     * DOMUtils.parseHTML("<a href='xxxx'></a><a href='xxxx'></a>",false, true)
     * > <div><a href="xxxx"></a><a href='xxxx'></a></div>
     * @example
     * // 由于需要转换的元素是多个元素，使用DOMParser将字符串转为完整的Element元素
     * DOMUtils.parseHTML("<a href='xxxx'></a><a href='xxxx'></a>",true, true)
     * > #document
     */
    parseHTML<T1 extends boolean, T2 extends boolean>(html: string, useParser?: T1, isComplete?: T2): ParseHTMLReturnType<T1, T2>;
    /**
     * 函数在元素内部末尾添加子元素或HTML字符串
     * @param element 目标元素
     * @param content 子元素或HTML字符串
     * @example
     * // 元素a.xx的内部末尾添加一个元素
     * DOMUtils.append(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.append("a.xx","'<b class="xx"></b>")
     * */
    append(element: Element | Node | ShadowRoot | HTMLElement | string, content: HTMLElement | string | (HTMLElement | string | Element)[] | NodeList): void;
    /**
     * 把元素标签添加到head内
     */
    appendHead($ele: HTMLElement): void;
    /**
     * 把元素添加进body内
     * @param $ele
     */
    appendBody($ele: HTMLElement): void;
    /**
     * 判断元素是否已显示或已连接
     * @param element
     */
    isShow(element: HTMLElement): boolean;
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
}
declare const popsDOMUtils: PopsDOMUtils;
export { popsDOMUtils };
