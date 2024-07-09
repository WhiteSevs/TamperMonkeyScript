import type { PopsDOMUtils_Event, PopsDOMUtils_EventType, PopsDOMUtilsElementEventType, PopsDOMUtilsEventListenerOptionsAttribute } from "../types/PopsDOMUtilsEventType";
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
    on(element: PopsDOMUtilsElementEventType, eventType: string | string[], callback: (event: Event) => void, option?: boolean | AddEventListenerOptions): void;
    on<T extends PopsDOMUtils_EventType>(element: PopsDOMUtilsElementEventType, eventType: T | T[], callback: (event: PopsDOMUtils_Event[T]) => void, option?: boolean | AddEventListenerOptions): void;
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
    on<T extends Event>(element: PopsDOMUtilsElementEventType, eventType: string, callback: (event: T) => void, option?: boolean | AddEventListenerOptions): void;
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
     * DOMUtils.on(document.querySelector("a.xx"),"click tap hover",(event)=>{
     *    console.log("事件触发",event)
     * })
     * DOMUtils.on("a.xx",["click","tap","hover"],(event)=>{
     *    console.log("事件触发",event)
     * })
     * @example
     * // 监听全局document下的子元素a.xx的click事件
     * DOMUtils.on(document,"click tap hover","a.xx",(event)=>{
     *    console.log("事件触发",event)
     * })
     */
    on<T extends PopsDOMUtils_EventType>(element: PopsDOMUtilsElementEventType, eventType: T | T[], selector: string | undefined | null, callback: (event: PopsDOMUtils_Event[T]) => void, option?: boolean | AddEventListenerOptions): void;
    on<T extends Event>(element: PopsDOMUtilsElementEventType, eventType: string | string[], selector: string | undefined | null, callback: (event: T) => void, option?: boolean | AddEventListenerOptions): void;
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
     * DOMUtils.on(document.querySelector("a.xx"),"click tap hover",(event)=>{
     *    console.log("事件触发",event)
     * })
     * DOMUtils.on("a.xx",["click","tap","hover"],(event)=>{
     *    console.log("事件触发",event)
     * })
     * @example
     * // 监听全局document下的子元素a.xx的click事件
     * DOMUtils.on(document,"click tap hover","a.xx",(event)=>{
     *    console.log("事件触发",event)
     * })
     */
    on<T extends Event>(element: PopsDOMUtilsElementEventType, eventType: string, selector: string | undefined | null, callback: (event: T) => void, option?: boolean | AddEventListenerOptions): void;
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
    off(element: PopsDOMUtilsElementEventType, eventType: string | string[], callback?: (event: Event) => void, option?: boolean | AddEventListenerOptions, filter?: (value: PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
    off<T extends PopsDOMUtils_EventType>(element: PopsDOMUtilsElementEventType, eventType: T | T[], callback?: (event: PopsDOMUtils_Event[T]) => void, option?: boolean | AddEventListenerOptions, filter?: (value: PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
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
    off<T extends Event>(element: PopsDOMUtilsElementEventType, eventType: string, callback?: (event: T) => void, option?: boolean | AddEventListenerOptions, filter?: (value: PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
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
    off<T extends PopsDOMUtils_EventType>(element: PopsDOMUtilsElementEventType, eventType: T | T[], selector?: string | undefined, callback?: (event: PopsDOMUtils_Event[T]) => void, option?: boolean | AddEventListenerOptions, filter?: (value: PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
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
    off<T extends Event>(element: PopsDOMUtilsElementEventType, eventType: string | string[], selector?: string | undefined, callback?: (event: T) => void, option?: boolean | AddEventListenerOptions, filter?: (value: PopsDOMUtilsEventListenerOptionsAttribute, index: number, array: PopsDOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
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
    ready<T extends Function>(callback: T): void;
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
}
export { PopsDOMUtilsEvent };
