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
    "wheel";

/**
 * 事件类型
 */
type DOMUtils_EventType = DOMUtils_MouseEventType |
    DOMUtils_KeyboardEventType |
    DOMUtils_Frame_Object_EventType |
    DOMUtils_FormEventType |
    DOMUtils_ClipboardEventType |
    DOMUtils_PrintEventType |
    DOMUtils_DragEventType |
    DOMUtils_MediaEventType |
    DOMUtils_AnimationEventType |
    DOMUtils_TransitionEventType |
    DOMUtils_OtherEventType;