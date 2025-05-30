import { DOMUtilsEvent } from "./DOMUtilsEvent";
import type { DOMUtilsCreateElementAttributesMap } from "./types/DOMUtilsEvent";
import { ParseHTMLReturnType, type DOMUtilsTargetElementType } from "./types/global";
import type { WindowApiOption } from "./types/WindowApi";
declare class DOMUtils extends DOMUtilsEvent {
    constructor(option?: WindowApiOption);
    /** 版本号 */
    version: string;
    /**
     * 获取元素的属性值
     * @param element 目标元素
     * @param attrName 属性名
     * @example
     * // 获取a.xx元素的href属性
     * DOMUtils.attr(document.querySelector("a.xx"),"href");
     * DOMUtils.attr("a.xx","href");
     * > https://xxxx....
     */
    attr(element: DOMUtilsTargetElementType, attrName: string): string;
    /**
     * 设置元素的属性值
     * @param element 目标元素
     * @param attrName 属性名
     * @param attrValue 属性值
     * @example
     * // 修改a.xx元素的href属性为abcd
     * DOMUtils.attr(document.querySelector("a.xx"),"href","abcd");
     * DOMUtils.attr("a.xx","href","abcd");
     */
    attr(element: DOMUtilsTargetElementType, attrName: string, attrValue: string | boolean | number): void;
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
    attributes?: DOMUtilsCreateElementAttributesMap): HTMLElementTagNameMap[K];
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
    css(element: DOMUtilsTargetElementType, property: keyof Omit<CSSStyleDeclaration, "zIndex"> | "z-index"): string;
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
    css(element: DOMUtilsTargetElementType, property: string): string;
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
    css(element: DOMUtilsTargetElementType, property: (keyof Omit<CSSStyleDeclaration, "zIndex"> | "z-index") & string, value: string | number): string;
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
    css(element: DOMUtilsTargetElementType, property: {
        [P in keyof Omit<CSSStyleDeclaration, "zIndex">]?: CSSStyleDeclaration[P];
    } | {
        "z-index": string | number;
    } | {
        [key: string]: string | number;
    }): string;
    /**
     * 获取元素的文本内容，优先返回textContent
     * @param element 目标元素
     * @returns 如果传入了text，则返回undefined；否则返回文本内容
     * @example
     * // 设置元素a.xx的文本内容为abcd
     * DOMUtils.text(document.querySelector("a.xx"),"abcd")
     * DOMUtils.text("a.xx","abcd")
     * DOMUtils.text("a.xx",document.querySelector("b"))
     * */
    text(element: DOMUtilsTargetElementType): string;
    /**
     * 设置元素的文本内容
     * @param element 目标元素
     * @param text （可选）文本内容
     * @returns 如果传入了text，则返回undefined；否则返回文本内容
     * @example
     * // 设置元素a.xx的文本内容为abcd
     * DOMUtils.text(document.querySelector("a.xx"),"abcd")
     * DOMUtils.text("a.xx","abcd")
     * DOMUtils.text("a.xx",document.querySelector("b"))
     * */
    text(element: DOMUtilsTargetElementType, text: string | HTMLElement | Element | number): void;
    /**
     * 设置元素的HTML内容
     * @param element 目标元素
     * @param html （可选）HTML内容|元素
     * @returns 如果传入了html，则返回undefined；否则返回HTML内容
     * @example
     * // 设置元素a.xx的文本内容为<b>abcd</b>
     * DOMUtils.html(document.querySelector("a.xx"),"<b>abcd</b>")
     * DOMUtils.html("a.xx","<b>abcd</b>")
     * DOMUtils.html("a.xx",document.querySelector("b"))
     * */
    html(element: DOMUtilsTargetElementType, html: string | HTMLElement | Element | number): void;
    /**
     * 获取元素的HTML内容
     * @param element 目标元素
     * @param html （可选）HTML内容|元素
     * @returns 如果传入了html，则返回undefined；否则返回HTML内容
     * @example
     * // 设置元素a.xx的文本内容为<b>abcd</b>
     * DOMUtils.html(document.querySelector("a.xx"),"<b>abcd</b>")
     * DOMUtils.html("a.xx","<b>abcd</b>")
     * DOMUtils.html("a.xx",document.querySelector("b"))
     * */
    html(element: DOMUtilsTargetElementType): string;
    /**
     * 获取移动元素的transform偏移
     */
    getTransform(element: HTMLElement, isShow?: boolean): {
        transformLeft: number;
        transformTop: number;
    };
    /**
     * 设置元素的value属性值
     * @param element 目标元素
     * @param value （可选）value属性值
     * @returns 如果传入了value，则返回undefined；否则返回value属性值
     * > true
     * @example
     * // 修改元素input.xx的复选框值为true
     * DOMUtils.val(document.querySelector("input.xx"),true)
     * DOMUtils.val("input.xx",true)
     * */
    val(element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | string | (HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)[] | NodeListOf<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, value: string | boolean | number): void;
    /**
     * 获取value属性值
     * @param element 目标元素
     * @example
     * // 获取元素textarea的值
     * DOMUtils.val(document.querySelector("textarea.xx"))
     * */
    val(element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | string | (HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)[] | NodeListOf<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): string;
    /**
     * 获取value属性值
     * @param element 目标元素
     * @example
     * // 获取元素input.xx的复选框值
     * DOMUtils.val(document.querySelector("input.xx"))
     * DOMUtils.val("input.xx")
     * */
    val(element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | (HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)[] | NodeListOf<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): boolean | string;
    /**
     * 获取元素的属性值
     * @param element 目标元素
     * @param propName 属性名
     * @param propValue 属性值
     * @example
     * // 获取元素a.xx的属性data-value
     * DOMUtils.val(document.querySelector("a.xx"),"data-value")
     * DOMUtils.val("a.xx","data-value")
     * > undefined
     * */
    prop<T extends any>(element: DOMUtilsTargetElementType, propName: string): T;
    /**
     * 设置元素的属性值
     * @param element 目标元素
     * @param propName 属性名
     * @param propValue 属性值
     * @example
     * // 设置元素a.xx的属性data-value为1
     * DOMUtils.val(document.querySelector("a.xx"),"data-value",1)
     * DOMUtils.val("a.xx","data-value",1)
     * */
    prop<T extends any>(element: DOMUtilsTargetElementType, propName: string, propValue: T): void;
    /**
     * 移除元素的属性
     * @param element 目标元素
     * @param attrName 属性名
     * @example
     * // 移除元素a.xx的属性data-value
     * DOMUtils.removeAttr(document.querySelector("a.xx"),"data-value")
     * DOMUtils.removeAttr("a.xx","data-value")
     * */
    removeAttr(element: DOMUtilsTargetElementType, attrName: string): void;
    /**
     * 移除元素class名
     * @param element 目标元素
     * @param className 类名
     * @example
     * // 移除元素a.xx的className为xx
     * DOMUtils.removeClass(document.querySelector("a.xx"),"xx")
     * DOMUtils.removeClass("a.xx","xx")
     */
    removeClass(element: DOMUtilsTargetElementType, className?: string | string[] | undefined | null): void;
    /**
     * 移除元素的属性
     * @param element 目标元素
     * @param propName 属性名
     * @example
     * // 移除元素a.xx的href属性
     * DOMUtils.removeProp(document.querySelector("a.xx"),"href")
     * DOMUtils.removeProp("a.xx","href")
     * */
    removeProp(element: DOMUtilsTargetElementType, propName: string): void;
    /**
     * 将一个元素替换为另一个元素
     * @param element 目标元素
     * @param newElement 新元素
     * @example
     * // 替换元素a.xx为b.xx
     * DOMUtils.replaceWith(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.replaceWith("a.xx",'<b class="xx"></b>')
     */
    replaceWith(element: DOMUtilsTargetElementType, newElement: HTMLElement | string | Node): void;
    /**
     * 给元素添加class
     * @param element 目标元素
     * @param className class名
     * @example
     * // 元素a.xx的className添加_vue_
     * DOMUtils.addClass(document.querySelector("a.xx"),"_vue_")
     * DOMUtils.addClass("a.xx","_vue_")
     * */
    addClass(element: DOMUtilsTargetElementType, className: string | string[]): void;
    /**
     * 判断元素是否存在className
     * @param element
     * @param className
     */
    hasClass(element: DOMUtilsTargetElementType, className: string | string[]): boolean;
    /**
     * 函数在元素内部末尾添加子元素或HTML字符串
     * @param element 目标元素
     * @param content 子元素或HTML字符串
     * @example
     * // 元素a.xx的内部末尾添加一个元素
     * DOMUtils.append(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.append("a.xx","'<b class="xx"></b>")
     * */
    append(element: DOMUtilsTargetElementType, content: HTMLElement | string | (HTMLElement | string | Element)[] | NodeList): void;
    /**
     * 函数 在元素内部开头添加子元素或HTML字符串
     * @param element 目标元素
     * @param content 子元素或HTML字符串
     * @example
     * // 元素a.xx内部开头添加一个元素
     * DOMUtils.prepend(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.prepend("a.xx","'<b class="xx"></b>")
     * */
    prepend(element: DOMUtilsTargetElementType, content: HTMLElement | string): void;
    /**
     * 在元素后面添加兄弟元素或HTML字符串
     * @param element 目标元素
     * @param content 兄弟元素或HTML字符串
     * @example
     * // 元素a.xx后面添加一个元素
     * DOMUtils.after(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.after("a.xx","'<b class="xx"></b>")
     * */
    after(element: DOMUtilsTargetElementType, content: HTMLElement | string): void;
    /**
     * 在元素前面添加兄弟元素或HTML字符串
     * @param element 目标元素
     * @param content 兄弟元素或HTML字符串
     * @example
     * // 元素a.xx前面添加一个元素
     * DOMUtils.before(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.before("a.xx","'<b class="xx"></b>")
     * */
    before(element: DOMUtilsTargetElementType, content: HTMLElement | string): void;
    /**
     * 移除元素
     * @param element 目标元素
     * @example
     * // 元素a.xx前面添加一个元素
     * DOMUtils.remove(document.querySelector("a.xx"))
     * DOMUtils.remove(document.querySelectorAll("a.xx"))
     * DOMUtils.remove("a.xx")
     * */
    remove(element: DOMUtilsTargetElementType): void;
    /**
     * 移除元素的所有子元素
     * @param element 目标元素
     * @example
     * // 移除元素a.xx元素的所有子元素
     * DOMUtils.empty(document.querySelector("a.xx"))
     * DOMUtils.empty("a.xx")
     * */
    empty(element: DOMUtilsTargetElementType): void;
    /**
     * 获取元素相对于文档的偏移坐标（加上文档的滚动条）
     * @param element 目标元素
     * @example
     * // 获取元素a.xx的对于文档的偏移坐标
     * DOMUtils.offset(document.querySelector("a.xx"))
     * DOMUtils.offset("a.xx")
     * > 0
     */
    offset(element: HTMLElement | string): {
        /** y轴偏移 */
        top: number;
        /** x轴偏移 */
        left: number;
    } | undefined;
    /**
     * 获取元素的宽度
     * @param element 要获取宽度的元素
     * @param value 宽度值
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
    width(element: HTMLElement | string | Window | typeof globalThis | Document, isShow?: boolean): number;
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
    height(element: HTMLElement | string | Window | typeof globalThis | Document, isShow?: boolean): number;
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
    outerWidth(element: HTMLElement | string | Window | typeof globalThis | Document, isShow?: boolean): number;
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
    outerHeight(element: HTMLElement | string | Window | typeof globalThis | Document, isShow?: boolean): number;
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
     * 将一个元素包裹在指定的HTML元素中
     * @param element 要包裹的元素
     * @param wrapperHTML 要包裹的HTML元素的字符串表示形式
     * @example
     * // 将a.xx元素外面包裹一层div
     * DOMUtils.wrap(document.querySelector("a.xx"),"<div></div>")
     */
    wrap(element: DOMUtilsTargetElementType, wrapperHTML: string): void;
    /**
     * 获取当前元素的前一个兄弟元素
     * @param element 当前元素
     * @returns 前一个兄弟元素
     * @example
     * // 获取a.xx元素前一个兄弟元素
     * DOMUtils.prev(document.querySelector("a.xx"))
     * DOMUtils.prev("a.xx")
     * > <div ...>....</div>
     */
    prev(element: HTMLElement | string): HTMLElement;
    /**
     * 获取当前元素的后一个兄弟元素
     * @param element 当前元素
     * @returns 后一个兄弟元素
     * @example
     * // 获取a.xx元素前一个兄弟元素
     * DOMUtils.next(document.querySelector("a.xx"))
     * DOMUtils.next("a.xx")
     * > <div ...>....</div>
     */
    next(element: HTMLElement | string): HTMLElement;
    /**
     * 取消挂载在window下的DOMUtils并返回DOMUtils
     * @example
     * let DOMUtils = window.DOMUtils.noConflict()
     */
    noConflict(): this;
    /**
     * 获取当前元素的所有兄弟元素
     * @param element 当前元素
     * @returns 所有兄弟元素
     * @example
     * // 获取a.xx元素所有兄弟元素
     * DOMUtils.siblings(document.querySelector("a.xx"))
     * DOMUtils.siblings("a.xx")
     * > (3) [div.logo-wrapper, div.forum-block, div.more-btn-desc]
     */
    siblings(element: HTMLElement | string): HTMLElement[];
    /**
     * 获取当前元素的父元素
     * @param element 当前元素
     * @returns 父元素
     * @example
     * // 获取a.xx元素的父元素
     * DOMUtils.parent(document.querySelector("a.xx"))
     * DOMUtils.parent("a.xx")
     * > <div ...>....</div>
     */
    parent(element: HTMLElement | string): HTMLElement;
    /**
     * 获取当前元素的父元素
     * @param element 当前元素
     * @returns 父元素
     * @example
     * // 获取a.xx元素的父元素
     * DOMUtils.parent(document.querySelector("a.xx"))
     * DOMUtils.parent("a.xx")
     * > <div ...>....</div>
     */
    parent(element: HTMLElement[] | NodeList): HTMLElement[];
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
     * 序列化表单元素
     * @param $form 表单元素
     * @example
     * DOMUtils.serialize(document.querySelector("form"))
     * > xxx=xxx&aaa=
     */
    serialize($form: HTMLFormElement): string;
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
    /**
     * 创建一个新的DOMUtils实例
     * @param option
     * @returns
     */
    createDOMUtils(option?: WindowApiOption): DOMUtils;
    /**
     * 获取文字的位置信息
     * @param $input 输入框
     * @param selectionStart 起始位置
     * @param selectionEnd 结束位置
     * @example
     * DOMUtils.getTextBoundingRect(document.querySelector("input"));
     */
    getTextBoundingRect($input: HTMLInputElement, selectionStart?: number | string, selectionEnd?: number | string): DOMRect;
}
declare let domUtils: DOMUtils;
export { domUtils as DOMUtils };
