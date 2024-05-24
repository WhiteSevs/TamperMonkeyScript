declare type DOMUtilsCreateElementAttributesMap = {
    style?: string;
    id?: string;
    class?: string;
    "data-"?: string;
    type?: string;
    [key: string]: any;
};
/**
 * 鼠标事件
 * + https://blog.csdn.net/weixin_68658847/article/details/126939879
 */
interface DOMUtils_MouseEvent {
    click: MouseEvent | PointerEvent;
    contextmenu: MouseEvent | PointerEvent;
    dblclick: MouseEvent | PointerEvent;
    mousedown: MouseEvent | PointerEvent;
    mouseenter: MouseEvent | PointerEvent;
    mouseleave: MouseEvent | PointerEvent;
    mousemove: MouseEvent | PointerEvent;
    mouseover: MouseEvent | PointerEvent;
    mouseout: MouseEvent | PointerEvent;
    mouseup: MouseEvent | PointerEvent;
}
type DOMUtils_MouseEventType = keyof DOMUtils_MouseEvent;
/**
 * 鼠标事件
 */
interface DOMUtils_KeyboardEvent {
    keydown: KeyboardEvent;
    keypress: KeyboardEvent;
    keyup: KeyboardEvent;
}
type DOMUtils_KeyboardEventType = keyof DOMUtils_KeyboardEvent;
/**
 * 框架/对象事件
 */
interface DOMUtils_Frame_Object_Event {
    abort: Event;
    beforeunload: Event;
    error: Event;
    hashchange: Event;
    load: Event;
    pageshow: Event;
    pagehide: Event;
    resize: Event;
    scroll: Event;
    unload: Event;
}
type DOMUtils_Frame_Object_EventType = keyof DOMUtils_Frame_Object_Event;
/**
 * 表单事件
 */
interface DOMUtils_FormEvent {
    blur: Event;
    change: Event;
    focus: Event;
    focusin: Event;
    focusout: Event;
    input: Event;
    reset: Event;
    search: Event;
}
type DOMUtils_FormEventType = keyof DOMUtils_FormEvent;
/**
 * 剪贴板事件
 */
interface DOMUtils_ClipboardEvent {
    copy: ClipboardEvent;
    cut: ClipboardEvent;
    paste: ClipboardEvent;
}
type DOMUtils_ClipboardEventType = keyof DOMUtils_ClipboardEvent;
/**
 * 打印事件
 */
interface DOMUtils_PrintEvent {
    afterprint: Event;
    beforeprint: Event;
}
type DOMUtils_PrintEventType = keyof DOMUtils_PrintEvent;
/**
 * 拖动事件
 */
interface DOMUtils_DragEvent {
    drag: DragEvent;
    dragend: DragEvent;
    dragenter: DragEvent;
    dragleave: DragEvent;
    dragover: DragEvent;
    dragstart: DragEvent;
    drop: DragEvent;
}
type DOMUtils_DragEventType = keyof DOMUtils_DragEvent;
/**
 * 多媒体（Media）事件
 */
interface DOMUtils_MediaEvent {
    abort: Event;
    canplay: Event;
    canplaythrough: Event;
    durationchange: Event;
    emptied: Event;
    ended: Event;
    error: Event;
    loadeddata: Event;
    loadedmetadata: Event;
    loadstart: Event;
    pause: Event;
    play: Event;
    playing: Event;
    progress: Event;
    ratechange: Event;
    seeked: Event;
    seeking: Event;
    stalled: Event;
    suspend: Event;
    timeupdate: Event;
    volumechange: Event;
    waiting: Event;
}
type DOMUtils_MediaEventType = keyof DOMUtils_MediaEvent;
/**
 * 动画事件
 */
interface DOMUtils_AnimationEvent {
    animationend: AnimationEvent;
    animationiteration: AnimationEvent;
    animationstart: AnimationEvent;
}
type DOMUtils_AnimationEventType = keyof DOMUtils_AnimationEvent;
/**
 * 过渡事件
 */
interface DOMUtils_TransitionEvent {
    transitionend: TransitionEvent;
}
type DOMUtils_TransitionEventType = keyof DOMUtils_TransitionEvent;
/**
 * 触摸事件
 */
interface DOMUtils_TouchEvent {
    touchstart: TouchEvent;
    touchmove: TouchEvent;
    touchend: TouchEvent;
    touchcancel: TouchEvent;
    touchenter: TouchEvent;
    touchleave: TouchEvent;
}
type DOMUtils_TouchEventType = keyof DOMUtils_TouchEvent;
/**
 * 其它事件
 */
interface DOMUtils_OtherEvent {
    message: Event;
    online: Event;
    offline: Event;
    popstate: Event;
    show: Event;
    storage: Event;
    toggle: Event;
    wheel: Event;
    propertychange: Event;
    fullscreenchange: Event;
    DOMContentLoaded: Event;
}
type DOMUtils_OtherEventType = keyof DOMUtils_OtherEvent;
/**
 * 全部事件
 */
declare type DOMUtils_Event = DOMUtils_MouseEvent & DOMUtils_KeyboardEvent & DOMUtils_Frame_Object_Event & DOMUtils_FormEvent & DOMUtils_ClipboardEvent & DOMUtils_PrintEvent & DOMUtils_DragEvent & DOMUtils_MediaEvent & DOMUtils_AnimationEvent & DOMUtils_TransitionEvent & DOMUtils_TouchEvent & DOMUtils_OtherEvent;
/**
 * 事件类型
 */
declare type DOMUtils_EventType = keyof DOMUtils_Event;
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
type ParseHTMLReturnType<T1, T2> = T1 extends true ? T2 extends true ? Document : HTMLElement : HTMLElement;
