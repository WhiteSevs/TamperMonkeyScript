import type { ParseHTMLReturnType, PopsDOMUtils_EventType, PopsDOMUtilsCreateElementAttributesMap, PopsDOMUtilsEventListenerOption, PopsDOMUtilsEventListenerOptionsAttribute, PopsDOMUtils_Event, PopsDOMUtilsElementEventType } from "../types/PopsDOMUtilsEventType";
declare class PopsDOMUtilsEvent {
    /**
     * 绑定事件
     * @param element 需要绑定的元素|元素数组|window
     * @param eventType 需要监听的事件
     * @param callback 绑定事件触发的回调函数
     * @param option
     * + capture 表示事件是否在捕获阶段触发。默认为false，即在冒泡阶段触发
     * + once 表示事件是否只触发一次。默认为false
     * + passive 表示事件监听器是否不会调用preventDefault()。默认为false
     * @example
     * // 监听元素a.xx的click事件
     * DOMUtils.on(document.querySelector("a.xx"),"click",(event)=>{
     *    console.log("事件触发",event)
     * })
     * DOMUtils.on("a.xx","click",(event)=>{
     *    console.log("事件触发",event)
     * })
     */
    on<T extends PopsDOMUtils_EventType>(element: PopsDOMUtilsElementEventType, eventType: T | T[], callback: (this: HTMLElement, event: PopsDOMUtils_Event[T]) => void, option?: PopsDOMUtilsEventListenerOption | boolean): void;
    /**
     * 绑定事件
     * @param element 需要绑定的元素|元素数组|window
     * @param eventType 需要监听的事件
     * @param callback 绑定事件触发的回调函数
     * @param option
     * + capture 表示事件是否在捕获阶段触发。默认为false，即在冒泡阶段触发
     * + once 表示事件是否只触发一次。默认为false
     * + passive 表示事件监听器是否不会调用preventDefault()。默认为false
     * @example
     * // 监听元素a.xx的click事件
     * DOMUtils.on(document.querySelector("a.xx"),"click",(event)=>{
     *    console.log("事件触发",event)
     * })
     * DOMUtils.on("a.xx","click",(event)=>{
     *    console.log("事件触发",event)
     * })
     */
    on<T extends Event>(element: PopsDOMUtilsElementEventType, eventType: string | string[], callback: (this: HTMLElement, event: T) => void, option?: PopsDOMUtilsEventListenerOption | boolean): void;
    /**
     * 绑定事件
     * @param element 需要绑定的元素|元素数组|window
     * @param eventType 需要监听的事件
     * @param selector 子元素选择器
     * @param callback 绑定事件触发的回调函数
     * @param option
     * + capture 表示事件是否在捕获阶段触发。默认为false，即在冒泡阶段触发
     * + once 表示事件是否只触发一次。默认为false
     * + passive 表示事件监听器是否不会调用preventDefault()。默认为false
     * @example
     * // 监听元素a.xx的click、tap、hover事件
     * DOMUtils.on(document.querySelector("a.xx"),"click tap hover",(event, selectorTarget)=>{
     *    console.log("事件触发", event, selectorTarget)
     * })
     * DOMUtils.on("a.xx",["click","tap","hover"],(event, selectorTarget)=>{
     *    console.log("事件触发", event, selectorTarget)
     * })
     * @example
     * // 监听全局document下的子元素a.xx的click事件
     * DOMUtils.on(document,"click tap hover","a.xx",(event, selectorTarget)=>{
     *    console.log("事件触发", event, selectorTarget)
     * })
     */
    on<T extends PopsDOMUtils_EventType>(element: PopsDOMUtilsElementEventType, eventType: T | T[], selector: string | string[] | undefined | null, callback: (this: HTMLElement, event: PopsDOMUtils_Event[T], selectorTarget: HTMLElement) => void, option?: PopsDOMUtilsEventListenerOption | boolean): void;
    /**
     * 绑定事件
     * @param element 需要绑定的元素|元素数组|window
     * @param eventType 需要监听的事件
     * @param selector 子元素选择器
     * @param callback 绑定事件触发的回调函数
     * @param option
     * + capture 表示事件是否在捕获阶段触发。默认为false，即在冒泡阶段触发
     * + once 表示事件是否只触发一次。默认为false
     * + passive 表示事件监听器是否不会调用preventDefault()。默认为false
     * @example
     * // 监听元素a.xx的click、tap、hover事件
     * DOMUtils.on(document.querySelector("a.xx"),"click tap hover",(event, selectorTarget)=>{
     *    console.log("事件触发", event, selectorTarget)
     * })
     * DOMUtils.on("a.xx",["click","tap","hover"],(event, selectorTarget)=>{
     *    console.log("事件触发", event, selectorTarget)
     * })
     * @example
     * // 监听全局document下的子元素a.xx的click事件
     * DOMUtils.on(document,"click tap hover","a.xx",(event, selectorTarget)=>{
     *    console.log("事件触发", event, selectorTarget)
     * })
     */
    on<T extends Event>(element: PopsDOMUtilsElementEventType, eventType: string | string[], selector: string | string[] | undefined | null, callback: (this: HTMLElement, event: T, selectorTarget: HTMLElement) => void, option?: PopsDOMUtilsEventListenerOption | boolean): void;
    /**
     * 取消绑定事件
     * @param element 需要取消绑定的元素|元素数组
     * @param eventType 需要取消监听的事件
     * @param callback 通过DOMUtils.on绑定的事件函数
     * @param option
     * + capture 如果在添加事件监听器时指定了useCapture为true，则在移除事件监听器时也必须指定为true
     * @param filter (可选)过滤函数，对元素属性上的事件进行过滤出想要删除的事件
     * @example
     * // 取消监听元素a.xx所有的click事件
     * DOMUtils.off(document.querySelector("a.xx"),"click")
     * DOMUtils.off("a.xx","click")
     */
    off<T extends PopsDOMUtils_EventType>(element: PopsDOMUtilsElementEventType, eventType: T | T[], callback?: (this: HTMLElement, event: PopsDOMUtils_Event[T]) => void, option?: EventListenerOptions | boolean, filter?: (value: PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
    /**
     * 取消绑定事件
     * @param element 需要取消绑定的元素|元素数组
     * @param eventType 需要取消监听的事件
     * @param callback 通过DOMUtils.on绑定的事件函数
     * @param option
     * + capture 如果在添加事件监听器时指定了useCapture为true，则在移除事件监听器时也必须指定为true
     * @param filter (可选)过滤函数，对元素属性上的事件进行过滤出想要删除的事件
     * @example
     * // 取消监听元素a.xx的click事件
     * DOMUtils.off(document.querySelector("a.xx"),"click")
     * DOMUtils.off("a.xx","click")
     */
    off<T extends Event>(element: PopsDOMUtilsElementEventType, eventType: string | string[], callback?: (this: HTMLElement, event: T) => void, option?: EventListenerOptions | boolean, filter?: (value: PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
    /**
     * 取消绑定事件
     * @param element 需要取消绑定的元素|元素数组
     * @param eventType 需要取消监听的事件
     * @param selector 子元素选择器
     * @param callback 通过DOMUtils.on绑定的事件函数
     * @param option
     * + capture 如果在添加事件监听器时指定了useCapture为true，则在移除事件监听器时也必须指定为true
     * @param filter (可选)过滤函数，对元素属性上的事件进行过滤出想要删除的事件
     * @example
     * // 取消监听元素a.xx的click、tap、hover事件
     * DOMUtils.off(document.querySelector("a.xx"),"click tap hover")
     * DOMUtils.off("a.xx",["click","tap","hover"])
     */
    off<T extends PopsDOMUtils_EventType>(element: PopsDOMUtilsElementEventType, eventType: T | T[], selector?: string | string[] | undefined | null, callback?: (this: HTMLElement, event: PopsDOMUtils_Event[T], selectorTarget: HTMLElement) => void, option?: EventListenerOptions | boolean, filter?: (value: PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
    /**
     * 取消绑定事件
     * @param element 需要取消绑定的元素|元素数组
     * @param eventType 需要取消监听的事件
     * @param selector 子元素选择器
     * @param callback 通过DOMUtils.on绑定的事件函数
     * @param option
     * + capture 如果在添加事件监听器时指定了useCapture为true，则在移除事件监听器时也必须指定为true
     * @param filter (可选)过滤函数，对元素属性上的事件进行过滤出想要删除的事件
     * @example
     * // 取消监听元素a.xx的click、tap、hover事件
     * DOMUtils.off(document.querySelector("a.xx"),"click tap hover")
     * DOMUtils.off("a.xx",["click","tap","hover"])
     */
    off<T extends Event>(element: PopsDOMUtilsElementEventType, eventType: string | string[], selector?: string | string[] | undefined | null, callback?: (this: HTMLElement, event: T, selectorTarget: HTMLElement) => void, option?: EventListenerOptions | boolean, filter?: (value: PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
    /**
     * 取消绑定所有的事件
     * @param element 需要取消绑定的元素|元素数组
     * @param eventType （可选）需要取消监听的事件
     */
    offAll(element: PopsDOMUtilsElementEventType, eventType?: string): void;
    /**
     * 取消绑定所有的事件
     * @param element 需要取消绑定的元素|元素数组
     * @param eventType （可选）需要取消监听的事件
     */
    offAll(element: PopsDOMUtilsElementEventType, eventType?: PopsDOMUtils_EventType | PopsDOMUtils_EventType[]): void;
    /**
     * 等待文档加载完成后执行指定的函数
     * @param callback 需要执行的函数
     * @example
     * DOMUtils.ready(function(){
     *   console.log("文档加载完毕")
     * })
     */
    ready<T extends (...args: any[]) => any>(callback: T): void;
    /**
     * 主动触发事件
     * @param element 需要触发的元素|元素数组|window
     * @param eventType 需要触发的事件
     * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
     * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件,默认true
     * @example
     * // 触发元素a.xx的click事件
     * DOMUtils.trigger(document.querySelector("a.xx"),"click")
     * DOMUtils.trigger("a.xx","click")
     * // 触发元素a.xx的click、tap、hover事件
     * DOMUtils.trigger(document.querySelector("a.xx"),"click tap hover")
     * DOMUtils.trigger("a.xx",["click","tap","hover"])
     */
    trigger(element: HTMLElement | string | NodeList | any[] | Window | Document, eventType: string | string[], details?: object, useDispatchToTriggerEvent?: boolean): void;
    /**
     * 主动触发事件
     * @param element 需要触发的元素|元素数组|window
     * @param eventType 需要触发的事件
     * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
     * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件,默认true
     * @example
     * // 触发元素a.xx的click事件
     * DOMUtils.trigger(document.querySelector("a.xx"),"click")
     * DOMUtils.trigger("a.xx","click")
     * // 触发元素a.xx的click、tap、hover事件
     * DOMUtils.trigger(document.querySelector("a.xx"),"click tap hover")
     * DOMUtils.trigger("a.xx",["click","tap","hover"])
     */
    trigger(element: HTMLElement | string | NodeList | any[] | Window | Document, eventType: PopsDOMUtils_EventType | PopsDOMUtils_EventType[], details?: object, useDispatchToTriggerEvent?: boolean): void;
    /**
     * 绑定或触发元素的click事件
     * @param element 目标元素
     * @param handler （可选）事件处理函数
     * @param details （可选）赋予触发的Event的额外属性
     * @param useDispatchToTriggerEvent （可选）是否使用dispatchEvent来触发事件,默认true
     * @example
     * // 触发元素a.xx的click事件
     * DOMUtils.click(document.querySelector("a.xx"))
     * DOMUtils.click("a.xx")
     * DOMUtils.click("a.xx"，function(){
     *  console.log("触发click事件成功")
     * })
     * */
    click(element: HTMLElement | string | Window, handler?: (event: PopsDOMUtils_Event["click"]) => void, details?: any, useDispatchToTriggerEvent?: boolean): void;
    /**
     * 绑定或触发元素的blur事件
     * @param element 目标元素
     * @param handler （可选）事件处理函数
     * @param details （可选）赋予触发的Event的额外属性
     * @param useDispatchToTriggerEvent （可选）是否使用dispatchEvent来触发事件,默认true
     * @example
     * // 触发元素a.xx的blur事件
     * DOMUtils.blur(document.querySelector("a.xx"))
     * DOMUtils.blur("a.xx")
     * DOMUtils.blur("a.xx"，function(){
     *  console.log("触发blur事件成功")
     * })
     * */
    blur(element: HTMLElement | string | Window, handler?: (event: PopsDOMUtils_Event["blur"]) => void, details?: object, useDispatchToTriggerEvent?: boolean): void;
    /**
     * 绑定或触发元素的focus事件
     * @param element 目标元素
     * @param handler （可选）事件处理函数
     * @param details （可选）赋予触发的Event的额外属性
     * @param useDispatchToTriggerEvent （可选）是否使用dispatchEvent来触发事件,默认true
     * @example
     * // 触发元素a.xx的focus事件
     * DOMUtils.focus(document.querySelector("a.xx"))
     * DOMUtils.focus("a.xx")
     * DOMUtils.focus("a.xx"，function(){
     *  console.log("触发focus事件成功")
     * })
     * */
    focus(element: HTMLElement | string | Window, handler?: (event: PopsDOMUtils_Event["focus"]) => void, details?: object, useDispatchToTriggerEvent?: boolean): void;
    /**
     * 当鼠标移入或移出元素时触发事件
     * @param element 当前元素
     * @param handler 事件处理函数
     * @param option 配置
     * @example
     * // 监听a.xx元素的移入或移出
     * DOMUtils.hover(document.querySelector("a.xx"),()=>{
     *   console.log("移入/移除");
     * })
     * DOMUtils.hover("a.xx",()=>{
     *   console.log("移入/移除");
     * })
     */
    hover(element: HTMLElement | string, handler: (event: PopsDOMUtils_Event["hover"]) => void, option?: boolean | AddEventListenerOptions): void;
    /**
     * 当按键松开时触发事件
     * keydown - > keypress - > keyup
     * @param target 当前元素
     * @param handler 事件处理函数
     * @param option 配置
     * @example
     * // 监听a.xx元素的按键松开
     * DOMUtils.keyup(document.querySelector("a.xx"),()=>{
     *   console.log("按键松开");
     * })
     * DOMUtils.keyup("a.xx",()=>{
     *   console.log("按键松开");
     * })
     */
    keyup(target: HTMLElement | string | Window | typeof globalThis, handler: (event: PopsDOMUtils_Event["keyup"]) => void, option?: boolean | AddEventListenerOptions): void;
    /**
     * 当按键按下时触发事件
     * keydown - > keypress - > keyup
     * @param target 目标
     * @param handler 事件处理函数
     * @param option 配置
     * @example
     * // 监听a.xx元素的按键按下
     * DOMUtils.keydown(document.querySelector("a.xx"),()=>{
     *   console.log("按键按下");
     * })
     * DOMUtils.keydown("a.xx",()=>{
     *   console.log("按键按下");
     * })
     */
    keydown(target: HTMLElement | Window | typeof globalThis | string, handler: (event: PopsDOMUtils_Event["keydown"]) => void, option?: boolean | AddEventListenerOptions): void;
    /**
     * 当按键按下时触发事件
     * keydown - > keypress - > keyup
     * @param target 目标
     * @param handler 事件处理函数
     * @param option 配置
     * @example
     * // 监听a.xx元素的按键按下
     * DOMUtils.keypress(document.querySelector("a.xx"),()=>{
     *   console.log("按键按下");
     * })
     * DOMUtils.keypress("a.xx",()=>{
     *   console.log("按键按下");
     * })
     */
    keypress(target: HTMLElement | Window | typeof globalThis | string, handler: (event: PopsDOMUtils_Event["keypress"]) => void, option?: boolean | AddEventListenerOptions): void;
    /**
     * 阻止事件传递
     * @param element 要进行处理的元素
     * @param eventNameList （可选）要阻止的事件名|列表
     * @param capture （可选）是否捕获，默认false
     * @example
     * Utils.preventEvent(document.querySelector("a"),"click")
     * @example
     * Utils.preventEvent(event);
     */
    preventEvent(event: Event): boolean;
    /**
     * 阻止事件传递
     * @param element 要进行处理的元素
     * @param eventNameList （可选）要阻止的事件名|列表
     * @param capture （可选）是否捕获，默认false
     * @example
     * Utils.preventEvent(document.querySelector("a"),"click")
     * @example
     * Utils.preventEvent(event);
     */
    preventEvent(element: HTMLElement, eventNameList?: string | string[], capture?: boolean): boolean;
    /**
     * 选择器，可使用以下的额外语法
     *
     * + :contains([text]) 作用: 找到包含指定文本内容的指定元素
     * + :empty 作用:找到既没有文本内容也没有子元素的指定元素
     * + :regexp([text]) 作用: 找到符合正则表达式的内容的指定元素
     * @param selector 选择器
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
    selector<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | undefined;
    selector<E extends Element = Element>(selector: string): E | undefined;
    /**
     * 选择器，可使用以下的额外语法
     *
     * + :contains([text]) 作用: 找到包含指定文本内容的指定元素
     * + :empty 作用:找到既没有文本内容也没有子元素的指定元素
     * + :regexp([text]) 作用: 找到符合正则表达式的内容的指定元素
     * @param selector 选择器
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
    selectorAll<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K][];
    selectorAll<E extends Element = Element>(selector: string): E[];
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
declare class PopsDOMUtils extends PopsDOMUtilsEvent {
    /** 获取 animationend 在各个浏览器的兼容名 */
    getAnimationEndNameList(): string[];
    /** 获取 transitionend 在各个浏览器的兼容名 */
    getTransitionEndNameList(): string[];
    /**
     * 实现jQuery中的$().offset();
     * @param element
     * @param calcScroll 计算滚动距离
     */
    offset(element: HTMLElement, calcScroll?: boolean): DOMRect;
    /**
     * 获取元素的宽度
     * @param element 要获取宽度的元素
     * @param isShow 是否已进行isShow，避免爆堆栈
     * @param parent 用于判断是否已显示的父元素载体
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
    width(element: HTMLElement | string | Window | Document | typeof globalThis, isShow?: boolean, parent?: HTMLElement | ShadowRoot): number;
    /**
     * 获取元素的高度
     * @param element 要获取高度的元素
     * @param isShow 是否已进行isShow，避免爆堆栈
     * @param parent 用于判断是否已显示的父元素载体
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
    height(element: HTMLElement | string | Window | Document | typeof globalThis, isShow?: boolean, parent?: HTMLElement | ShadowRoot): number;
    /**
     * 获取元素的外部宽度（包括边框和外边距）
     * @param element 要获取外部宽度的元素
     * @param 是否已进行isShow，避免爆堆栈
     * @param parent 用于判断是否已显示的父元素载体
     * @returns 元素的外部宽度，单位为像素
     * @example
     * // 获取元素a.xx的外部宽度
     * DOMUtils.outerWidth(document.querySelector("a.xx"))
     * DOMUtils.outerWidth("a.xx")
     * > 100
     * // 获取window的外部宽度
     * DOMUtils.outerWidth(window)
     * > 400
     */
    outerWidth(element: HTMLElement | string | Window | Document, isShow?: boolean, parent?: HTMLElement | ShadowRoot): number;
    /**
     * 获取元素的外部高度（包括边框和外边距）
     * @param element 要获取外部高度的元素
     * @param isShow 是否已进行isShow，避免爆堆栈
     * @param parent 用于判断是否已显示的父元素载体
     * @returns 元素的外部高度，单位为像素
     * @example
     * // 获取元素a.xx的外部高度
     * DOMUtils.outerHeight(document.querySelector("a.xx"))
     * DOMUtils.outerHeight("a.xx")
     * > 100
     * // 获取window的外部高度
     * DOMUtils.outerHeight(window)
     * > 700
     */
    outerHeight(element: HTMLElement | string | Window, isShow?: boolean, parent?: HTMLElement | ShadowRoot): number;
    /**
     * 添加className
     * @param $el 目标元素
     * @param className className属性
     */
    addClassName($el: Element | undefined | null, className: string): void;
    /**
     * 删除className
     * @param $el 目标元素
     * @param className className属性
     */
    removeClassName($el: Element | undefined | null, className: string): void;
    /**
     * 判断元素是否包含某个className
     * @param $el 目标元素
     * @param className className属性
     */
    containsClassName($el: HTMLElement | undefined | null, className: string): boolean;
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
        [P in keyof HTMLElementTagNameMap[K]]?: HTMLElementTagNameMap[K][P] extends string | boolean | number ? HTMLElementTagNameMap[K][P] : never;
    } & {
        [key: string]: any;
    }) | string, 
    /** 自定义属性 */
    attributes?: PopsDOMUtilsCreateElementAttributesMap): HTMLElementTagNameMap[K];
    /**
     * 字符串转HTMLElement
     * @param elementString
     * @returns
     */
    parseTextToDOM<R extends HTMLElement>(elementString: string): R;
    /**
     * 获取文字的位置信息
     * @param input 输入框
     * @param selectionStart 起始位置
     * @param selectionEnd 结束位置
     * @param debug 是否是调试模式
     * + true 不删除临时节点元素
     * + false 删除临时节点元素
     */
    getTextBoundingRect(input: HTMLInputElement | HTMLTextAreaElement, selectionStart: number | string, selectionEnd: number | string, debug: boolean): DOMRect;
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
    toElement<T1 extends boolean, T2 extends boolean>(html: string, useParser?: T1, isComplete?: T2): ParseHTMLReturnType<T1, T2>;
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
     * @param $ele
     * @param parent 父元素
     */
    showElement($ele: HTMLElement, ownParent?: Node): {
        /**
         * 强制显示的克隆的元素
         */
        cloneNode: HTMLElement;
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
     * 在元素前面添加兄弟元素或HTML字符串
     * @param element 目标元素
     * @param content 兄弟元素或HTML字符串
     * @example
     * // 元素a.xx前面添加一个元素
     * DOMUtils.before(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.before("a.xx","'<b class="xx"></b>")
     * */
    before(element: HTMLElement | Element | string, content: HTMLElement | string): void;
    /**
     * 在元素后面添加兄弟元素或HTML字符串
     * @param element 目标元素
     * @param content 兄弟元素或HTML字符串
     * @example
     * // 元素a.xx后面添加一个元素
     * DOMUtils.after(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.after("a.xx","'<b class="xx"></b>")
     * */
    after(element: HTMLElement | Element | string, content: HTMLElement | string): void;
    /**
     * 获取CSS Rule
     * @param sheet
     * @returns
     */
    getKeyFrames(sheet: CSSStyleSheet): {};
    /**
     * 颜色转换函数
     * @method hexToRgb hex 颜色转 rgb 颜色
     * @method rgbToHex rgb 颜色转 Hex 颜色
     * @method getDarkColor 加深颜色值
     * @method getLightColor 变浅颜色值
     */
    calcColor(): {
        hexToRgb: (str: string) => any;
        rgbToHex: (r: any, g: any, b: any) => string;
        getDarkColor: (color: string, level: number) => string;
        getLightColor: (color: string, level: number) => string;
    };
    /**
     * 获取移动元素的transform偏移
     * @param element 元素
     */
    getTransform(element: HTMLElement): {
        transformLeft: number;
        transformTop: number;
    };
    /**
     * 监input、textarea的输入框值改变的事件
     */
    onInput($el: HTMLInputElement | HTMLTextAreaElement, callback: (evt: InputEvent) => void | Promise<void>, option?: PopsDOMUtilsEventListenerOption | boolean): {
        off: () => void;
    };
}
declare const popsDOMUtils: PopsDOMUtils;
export { popsDOMUtils };
