/**
 * 鼠标事件
 * + https://blog.csdn.net/weixin_68658847/article/details/126939879
 */
type DOMUtils_MouseEventType =
    "click" |
    "contextmenu" |
    "dblclick" |
    "mousedown" |
    "mouseenter" |
    "mouseleave" |
    "mousemove" |
    "mouseover" |
    "mouseout" |
    "mouseup";

/**
 * 鼠标事件
 */
type DOMUtils_KeyboardEventType = "keydown" | "keypress" | "keyup";

/**
 * 框架/对象事件
 */
type DOMUtils_Frame_Object_EventType = "abort" |
    "beforeunload" |
    "error" |
    "hashchange" |
    "load" |
    "pageshow" |
    "pagehide" |
    "resize" |
    "scroll" |
    "unload";

/**
 * 表单事件
 */
type DOMUtils_FormEventType = "blur" |
    "change" |
    "focus" |
    "focusin" |
    "focusout" |
    "input" |
    "reset" |
    "search";

/**
 * 剪贴板事件
 */
type DOMUtils_ClipboardEventType = "copy" | "cut" | "paste";

/**
 * 打印事件
 */
type DOMUtils_PrintEventType = "afterprint" | "beforeprint";

/**
 * 拖动事件
 */
type DOMUtils_DragEventType = "drag" |
    "dragend" |
    "dragenter" |
    "dragleave" |
    "dragover" |
    "dragstart" |
    "drop";

/**
 * 多媒体（Media）事件
 */
type DOMUtils_MediaEventType = "abort" |
    "canplay" |
    "canplaythrough" |
    "durationchange" |
    "emptied" |
    "ended" |
    "error" |
    "loadeddata" |
    "loadedmetadata" |
    "loadstart" |
    "pause" |
    "play" |
    "playing" |
    "progress" |
    "ratechange" |
    "seeked" |
    "seeking" |
    "stalled" |
    "suspend" |
    "suspend" |
    "timeupdate" |
    "volumechange" |
    "waiting";

/**
 * 动画事件
 */
type DOMUtils_AnimationEventType = "animationend" | "animationiteration" | "animationstart";


/**
 * 过渡事件
 */
type DOMUtils_TransitionEventType = "transitionend";

/**
 * 其它事件
 */
type DOMUtils_OtherEventType = "message" |
    "online" |
    "offline" |
    "popstate" |
    "show" |
    "storage" |
    "toggle" |
    "wheel" |
    "propertychange" |
    "fullscreenchange";

/**
 * 触摸事件
 */
type DOMUtils_TouchEventType = "touchstart" | "touchmove" | "touchend" | "touchcancel" | "touchenter" | "touchleave";

/**
 * 事件类型
 */
declare type DOMUtils_EventType = DOMUtils_MouseEventType |
    DOMUtils_KeyboardEventType |
    DOMUtils_Frame_Object_EventType |
    DOMUtils_FormEventType |
    DOMUtils_ClipboardEventType |
    DOMUtils_PrintEventType |
    DOMUtils_DragEventType |
    DOMUtils_MediaEventType |
    DOMUtils_AnimationEventType |
    DOMUtils_TransitionEventType |
    DOMUtils_OtherEventType |
    DOMUtils_TouchEventType;

type DOMUtilsCreateElementAttributesMap = {
    style?: string;
    id?: string;
    class?: string;
    "data-"?: string;
    type?: string;
}

/**
 * 元素上的events属性
 */
declare interface DOMUtilsEventListenerOptionsAttribute {
    /**
     * 自定义的ownCallBack
     */
    callback: () => void;
    /**
     * 属性配置
     */
    option: AddEventListenerOptions;
    /**
     * 用户添加的事件
     */
    originCallBack: () => void;
    /**
     * 子元素选择器
     */
    selector?: string;
}

type ParseHTMLReturnType<T1, T2> = T1 extends true ? (T2 extends true ? Document : ChildNode)
    : ChildNode;

declare interface DOMUtils {
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
    attr(
        element: HTMLElement | string,
        attrName: string,
    ): string;
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
    attr(
        element: HTMLElement | string,
        attrName: string,
        attrValue: string
    ): void;
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
        property?: {
            [P in keyof HTMLElementTagNameMap[K]]: HTMLElementTagNameMap[K][P]
        },
        /** 自定义属性 */
        attributes?: DOMUtilsCreateElementAttributesMap
    ): HTMLElementTagNameMap[K];
    /**
     * 获取或设置元素的样式属性值
     * @param element 目标元素
     * @param property 样式属性名或包含多个属性名和属性值的对象
     * @param value （可选）样式属性值
     * @returns 如果传入了value，则返回undefined；否则返回样式属性值
     * @example
     * // 获取元素a.xx的CSS属性display
     * DOMUtils.css(document.querySelector("a.xx"),"display");
     * DOMUtils.css("a.xx","display");
     * > "none"
     * @example
     * // 设置元素a.xx的CSS属性display为block
     * DOMUtils.css(document.querySelector("a.xx"),"display","block");
     * DOMUtils.css(document.querySelector("a.xx"),"display","block !important");
     * DOMUtils.css(document.querySelector("a.xx"),{ display: "block" }});
     * DOMUtils.css(document.querySelector("a.xx"),{ display: "block !important" }});
     * DOMUtils.css("a.xx","display","block");
     * DOMUtils.css("a.xx","display","block !important");
     * @example
     * // 设置元素a.xx的CSS属性top为10px
     * DOMUtils.css(document.querySelector("a.xx"),"top","10px");
     * DOMUtils.css(document.querySelector("a.xx"),"top",10);
     * DOMUtils.css(document.querySelector("a.xx"),{ top: "10px" });
     * DOMUtils.css(document.querySelector("a.xx"),{ top: 10 });
     * */
    css<T extends unknown | string>(
        element: HTMLElement | string,
        property: {
            [P in keyof CSSStyleDeclaration]
        } | string,
        value?: T
    ): T extends string ? string : undefined;
    /**
     * 获取或设置元素的文本内容
     * @param element 目标元素
     * @param text （可选）文本内容
     * @returns 如果传入了text，则返回undefined；否则返回文本内容
     * @example
     * // 设置元素a.xx的文本内容为abcd
     * DOMUtils.text(document.querySelector("a.xx"),"abcd")
     * DOMUtils.text("a.xx","abcd")
     * DOMUtils.html("a.xx",document.querySelector("b"))
     * */
    text<T extends unknown | string>(
        element: HTMLElement,
        text?: T
    ): T extends string ? string : undefined;
    /**
     * 获取或设置元素的HTML内容
     * @param element 目标元素
     * @param html （可选）HTML内容|元素
     * @returns 如果传入了html，则返回undefined；否则返回HTML内容
     * @example
     * // 设置元素a.xx的文本内容为<b>abcd</b>
     * DOMUtils.html(document.querySelector("a.xx"),"<b>abcd</b>")
     * DOMUtils.html("a.xx","<b>abcd</b>")
     * DOMUtils.html("a.xx",document.querySelector("b"))
     * */
    html<T extends unknown | string | Element>(
        element: HTMLElement | string,
        html?: T
    ): T extends string | Element ? string : undefined;
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
    click(
        element: HTMLElement | string | Window,
        handler?: (event: PointerEvent | MouseEvent) => void,
        details?: object,
        useDispatchToTriggerEvent?: boolean
    ): void;
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
    blur(
        element: HTMLElement | string | Window,
        handler?: (event: Event) => void,
        details?: object,
        useDispatchToTriggerEvent?: boolean
    ): void;
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
    focus(
        element: HTMLElement | string | Window,
        handler?: (event: Event) => void,
        details?: object,
        useDispatchToTriggerEvent?: boolean
    ): void;
    /**
     * 获取移动元素的transform偏移
     */
    getTransform(element: HTMLElement): {
        transformLeft: number,
        transformTop: number,
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
    val(
        element: HTMLElement | string,
        value: string | boolean,
    ): void;
    /**
     * 获取value属性值
     * @param element 目标元素
     * @example
     * // 获取元素textarea的值
     * DOMUtils.val(document.querySelector("textarea.xx"))
     * */
    val(
        element: HTMLElement
    ): string;
    /**
     * 获取value属性值
     * @param element 目标元素
     * @example
     * // 获取元素input.xx的复选框值
     * DOMUtils.val(document.querySelector("input.xx"))
     * DOMUtils.val("input.xx")
     * */
    val(
        element: HTMLInputElement
    ): boolean | string;
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
    prop(element: HTMLElement | string, propName: string): any;
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
    prop(element: HTMLElement | string, propName: string, propValue: any): void;
    /**
     * 移除元素的属性
     * @param element 目标元素
     * @param attrName 属性名
     * @example
     * // 移除元素a.xx的属性data-value
     * DOMUtils.removeAttr(document.querySelector("a.xx"),"data-value")
     * DOMUtils.removeAttr("a.xx","data-value")
     * */
    removeAttr(element: HTMLElement | string, attrName: string): void;
    /**
     * 移除元素class名
     * @param element 目标元素
     * @param className 类名
     * @example
     * // 移除元素a.xx的className为xx
     * DOMUtils.removeClass(document.querySelector("a.xx"),"xx")
     * DOMUtils.removeClass("a.xx","xx")
     */
    removeClass(element: HTMLElement | string, className: string): void;
    /**
     * 移除元素的属性
     * @param element 目标元素
     * @param propName 属性名
     * @example
     * // 移除元素a.xx的href属性
     * DOMUtils.removeProp(document.querySelector("a.xx"),"href")
     * DOMUtils.removeProp("a.xx","href")
     * */
    removeProp(element: HTMLElement | string, propName: string): void;
    /**
     * 将一个元素替换为另一个元素
     * @param element 目标元素
     * @param newElement 新元素
     * @example
     * // 替换元素a.xx为b.xx
     * DOMUtils.replaceWith(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.replaceWith("a.xx",'<b class="xx"></b>')
     */
    replaceWith(element: HTMLElement | string | NodeList | HTMLElement[], newElement: HTMLElement | string): void;
    /**
     * 给元素添加class
     * @param element 目标元素
     * @param className class名
     * @example
     * // 元素a.xx的className添加_vue_
     * DOMUtils.addClass(document.querySelector("a.xx"),"_vue_")
     * DOMUtils.addClass("a.xx","_vue_")
     * */
    addClass(element: HTMLElement | string, className: string): void;
    /**
     * 函数在元素内部末尾添加子元素或HTML字符串
     * @param element 目标元素
     * @param content 子元素或HTML字符串
     * @example
     * // 元素a.xx的内部末尾添加一个元素
     * DOMUtils.append(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.append("a.xx","'<b class="xx"></b>")
     * */
    append(element: HTMLElement | string, content: HTMLElement | string): void;
    /**
     * 函数 在元素内部开头添加子元素或HTML字符串
     * @param element 目标元素
     * @param content 子元素或HTML字符串
     * @example
     * // 元素a.xx内部开头添加一个元素
     * DOMUtils.prepend(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.prepend("a.xx","'<b class="xx"></b>")
     * */
    prepend(element: HTMLElement | string, content: HTMLElement | string): void;
    /**
     * 在元素后面添加兄弟元素或HTML字符串
     * @param element 目标元素
     * @param content 兄弟元素或HTML字符串
     * @example
     * // 元素a.xx后面添加一个元素
     * DOMUtils.after(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.after("a.xx","'<b class="xx"></b>")
     * */
    after(element: HTMLElement | string, content: HTMLElement | string): void;
    /**
     * 在元素前面添加兄弟元素或HTML字符串
     * @param element 目标元素
     * @param content 兄弟元素或HTML字符串
     * @example
     * // 元素a.xx前面添加一个元素
     * DOMUtils.before(document.querySelector("a.xx"),document.querySelector("b.xx"))
     * DOMUtils.before("a.xx","'<b class="xx"></b>")
     * */
    before(element: HTMLElement | string, content: HTMLElement | string): void;
    /**
     * 移除元素
     * @param target 目标元素
     * @example
     * // 元素a.xx前面添加一个元素
     * DOMUtils.remove(document.querySelector("a.xx"))
     * DOMUtils.remove(document.querySelectorAll("a.xx"))
     * DOMUtils.remove("a.xx")
     * */
    remove(target: HTMLElement | string | NodeList | HTMLElement[]): void;
    /**
     * 移除元素的所有子元素
     * @param element 目标元素
     * @example
     * // 移除元素a.xx元素的所有子元素
     * DOMUtils.empty(document.querySelector("a.xx"))
     * DOMUtils.empty("a.xx")
     * */
    empty(element: HTMLElement | string): void;
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
    on(
        element: HTMLElement | string | NodeList | HTMLElement[] | Window,
        eventType: DOMUtils_EventType | DOMUtils_EventType[],
        callback: (event: Event | PointerEvent | MouseEvent) => void,
        option?: boolean | AddEventListenerOptions,
    ): void;
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
    on(
        element: HTMLElement | string | NodeList | HTMLElement[] | Window,
        eventType: DOMUtils_EventType | DOMUtils_EventType[],
        selector: string,
        callback: (event: Event | MouseEvent | PointerEvent) => void,
        option?: boolean | AddEventListenerOptions,
    ): void;
    /**
     * 取消绑定事件
     * @param element 需要取消绑定的元素|元素数组
     * @param eventType 需要取消监听的事件
     * @example
     * // 取消监听元素a.xx的click事件
     * DOMUtils.off(document.querySelector("a.xx"),"click")
     * DOMUtils.off("a.xx","click")
     */
    off(
        element: HTMLElement | string | NodeList | HTMLElement[] | Window,
        eventType: DOMUtils_EventType | DOMUtils_EventType[],
    ): void;
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
    off(
        element: HTMLElement | string | NodeList | HTMLElement[] | Window,
        eventType: DOMUtils_EventType | DOMUtils_EventType[],
        selector?: string,
        callback?: (event: Event) => void,
        option?: boolean | AddEventListenerOptions,
        filter?: (
            value: DOMUtilsEventListenerOptionsAttribute,
            index: number, array: DOMUtilsEventListenerOptionsAttribute[]
        ) => boolean, ...args: any[]
    ): void;
    /**
     * 取消绑定所有的事件
     * @param element 需要取消绑定的元素|元素数组
     * @param eventType （可选）需要取消监听的事件
     */
    offAll(
        element: HTMLElement | string | NodeList | HTMLElement[] | Window,
        eventType?: DOMUtils_EventType | DOMUtils_EventType[],
    ): void;
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
    trigger(
        element: HTMLElement | string | NodeList | any[] | Window,
        eventType: DOMUtils_EventType | DOMUtils_EventType[],
        details?: object,
        useDispatchToTriggerEvent?: boolean
    ): void;
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
    };
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
    width(element: HTMLElement | string | Window, isShow?: boolean): number;
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
    height(element: HTMLElement | string | Window, isShow?: boolean): number;
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
    outerWidth(element: HTMLElement | string | Window, isShow?: boolean): number;
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
     * 等待文档加载完成后执行指定的函数
     * @param callback 需要执行的函数
     * @example
     * DOMUtils.ready(function(){
     *   console.log("文档加载完毕")
     * })
     */
    ready(callback: () => void): void;
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
    animate(
        element: HTMLElement | string,
        styles: CSSStyleDeclaration,
        duration?: number,
        callback?: () => void
    ): void;
    /**
     * 将一个元素包裹在指定的HTML元素中
     * @param element 要包裹的元素
     * @param wrapperHTML 要包裹的HTML元素的字符串表示形式
     * @example
     * // 将a.xx元素外面包裹一层div
     * DOMUtils.wrap(document.querySelector("a.xx"),"<div></div>")
     */
    wrap(element: HTMLElement | string, wrapperHTML: string): void;
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
    noConflict(): void;
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
    parent(element: HTMLElement | NodeList | string | HTMLElement[]): HTMLElement | HTMLElement[];
    /**
     * 将字符串转为Element元素
     * @param html
     * @param useParser （可选）是否使用DOMParser来生成元素，有些时候通过DOMParser生成的元素有点问题
     * + true 使用DOMPraser来转换字符串
     * + false 创建一个div，里面放入字符串，然后提取firstChild
     * @param isComplete （可选）是否是完整的
     * + true 如果useParser为true，那么返回整个使用DOMParser转换成的Document
     * 如果useParser为false，返回一个DIV元素，DIV元素内包裹着需要转换的字符串
     * + false 如果useParser为true，那么返回整个使用DOMParser转换成的Document的body
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
    parseHTML<T1, T2 extends boolean>(html: string, useParser?: T1, isComplete?: T2): ParseHTMLReturnType<T1, T2>;
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
    hover(
        element: HTMLElement | string,
        handler: (event: Event) => void,
        option?: boolean | AddEventListenerOptions
    ): void;
    /**
     * 显示元素
     * @param target 当前元素
     * @example
     * // 显示a.xx元素
     * DOMUtils.show(document.querySelector("a.xx"))
     * DOMUtils.show(document.querySelectorAll("a.xx"))
     * DOMUtils.show("a.xx")
     */
    show(target: HTMLElement | string | NodeList | HTMLElement[]): void;
    /**
     * 隐藏元素
     * @param target 当前元素
     * @example
     * // 隐藏a.xx元素
     * DOMUtils.hide(document.querySelector("a.xx"))
     * DOMUtils.hide(document.querySelectorAll("a.xx"))
     * DOMUtils.hide("a.xx")
     */
    hide(target: HTMLElement | string | NodeList | HTMLElement[]): void;
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
    keyup(
        target: HTMLElement | string | Window,
        handler: (event: KeyboardEvent) => void,
        option?: boolean | AddEventListenerOptions
    ): void;
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
    keydown(
        target: Node | Window | typeof globalThis | string,
        handler: (event: KeyboardEvent) => void,
        option?: boolean | AddEventListenerOptions
    ): void;
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
    keypress(
        target: Node | Window | typeof globalThis | string,
        handler: (event: KeyboardEvent) => void,
        option?: boolean | AddEventListenerOptions
    ): void;
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
    fadeIn(
        element: HTMLElement | string,
        duration?: number,
        callback?: () => void,
    ): void;
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
    fadeOut(
        element: HTMLElement | string,
        duration?: number,
        callback?: () => void,
    ): void;
    /**
     * 切换元素的显示和隐藏状态
     * @param element 当前元素
     * @example
     * // 如果元素a.xx当前是隐藏，则显示，如果是显示，则隐藏
     * DOMUtils.toggle(document.querySelector("a.xx"))
     * DOMUtils.toggle("a.xx")
     */
    toggle(element: HTMLElement | string): void;
}

declare var DOMUtils: DOMUtils;
