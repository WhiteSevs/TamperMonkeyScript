export type DOMUtilsEventObject<T extends Node> = Event & {
  target: T;
};

export type DOMUtilsCreateElementAttributesMap = {
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
export interface DOMUtils_MouseEvent {
  /** 鼠标点击事件 */
  click: MouseEvent | PointerEvent;
  /** 鼠标中键点击事件 */
  auxclick: PointerEvent;
  /** 右键菜单事件 */
  contextmenu: MouseEvent | PointerEvent;
  /** 鼠标双击事件 */
  dblclick: MouseEvent | PointerEvent;
  /** 鼠标按下事件 */
  mousedown: MouseEvent | PointerEvent;
  /** 鼠标进入元素事件 */
  mouseenter: MouseEvent | PointerEvent;
  /** 鼠标离开元素事件 */
  mouseleave: MouseEvent | PointerEvent;
  /** 鼠标移动事件 */
  mousemove: MouseEvent | PointerEvent;
  /** 鼠标悬停在元素上事件 */
  mouseover: MouseEvent | PointerEvent;
  /** 鼠标从元素上移出事件 */
  mouseout: MouseEvent | PointerEvent;
  /** 鼠标按键释放事件 */
  mouseup: MouseEvent | PointerEvent;
  /** 鼠标悬停事件 */
  hover: MouseEvent;
}
export type DOMUtils_MouseEventType = keyof DOMUtils_MouseEvent;
/**
 * 键盘事件
 */
export interface DOMUtils_KeyboardEvent {
  /** 键盘按下事件 */
  keydown: KeyboardEvent;
  /** 键盘按压事件(字符键) */
  keypress: KeyboardEvent;
  /** 键盘释放事件 */
  keyup: KeyboardEvent;
}
export type DOMUtils_KeyboardEventType = keyof DOMUtils_KeyboardEvent;
/**
 * 指针事件
 */
export interface DOMUtils_PointerEvent {
  /**
   * 当定点设备进入某个元素的命中检测 范围时触发。
   */
  pointerover: PointerEvent;
  /**
   * 当定点设备进入某个元素或其子元素的命中检测范围时，或做为某一类不支悬停（hover）状态的设备所触发的 poinerdown 事件的后续事件时所触发。（详情可见 pointerdown 事件类型）。
   */
  pointerenter: PointerEvent;
  /**
   * 当某指针得以激活时触发。
   */
  pointerdown: PointerEvent;
  /**
   * 当某指针改变其坐标时触发。
   */
  pointermove: PointerEvent;
  /**
   * 当某指针不再活跃时触发。
   */
  pointerup: PointerEvent;
  /**
   * 当浏览器认为某指针不会再生成新的后续事件时触发（例如某设备不再活跃）
   */
  pointercancel: PointerEvent;
  /**
   * 可能由若干原因触发该事件，包括：定位设备移出了某命中检测的边界；不支持悬浮状态的设备发生 pointerup 事件（见 pointerup 事件）；作为 pointercancel 事件的后续事件（见 pointercancel 事件）；当数位板检测到数位笔离开了悬浮区域时。
   */
  pointerout: PointerEvent;
  /**
   * 当定点设备移出某元素的命中检测边界时触发。对于笔形设备来说，当数位板检测到笔移出了悬浮范围时触发。
   */
  pointerleave: PointerEvent;
  /**
   * 当某元素接受到一个指针捕捉时触发。
   */
  gotpointercapture: PointerEvent;
  /**
   * 当针对某个指针的指针捕捉得到释放时触发。
   */
  lostpointercapture: PointerEvent;
}
export type DOMUtils_PointerEventType = keyof DOMUtils_PointerEvent;
/**
 * 框架/对象事件
 */
export interface DOMUtils_Frame_Object_Event {
  /** 资源加载被中止事件 */
  abort: Event;
  /** 页面即将卸载前事件 */
  beforeunload: Event;
  /** JavaScript错误事件 */
  error: Event;
  /** URL哈希值改变事件 */
  hashchange: Event;
  /** 页面加载完成事件 */
  load: Event;
  /** 页面显示事件(包括缓存页面) */
  pageshow: Event;
  /** 页面隐藏事件 */
  pagehide: Event;
  /** 窗口大小调整事件 */
  resize: Event;
  /** 滚动事件 */
  scroll: Event;
  /** 页面卸载事件 */
  unload: Event;
}
export type DOMUtils_Frame_Object_EventType = keyof DOMUtils_Frame_Object_Event;
/**
 * 表单事件
 */
export interface DOMUtils_FormEvent {
  /** 元素失去焦点事件 */
  blur: Event;
  /** 表单控件值改变事件 */
  change: Event;
  /** 元素获得焦点事件 */
  focus: Event;
  /** 元素将要获得焦点事件(不冒泡) */
  focusin: Event;
  /** 元素将要失去焦点事件(不冒泡) */
  focusout: Event;
  /** 输入框内容改变事件 */
  input: Event;
  /** 表单重置事件 */
  reset: Event;
  /** 搜索框搜索事件 */
  search: Event;
}
export type DOMUtils_FormEventType = keyof DOMUtils_FormEvent;

/**
 * 剪贴板事件
 */
export interface DOMUtils_ClipboardEvent {
  /** 复制事件 */
  copy: ClipboardEvent;
  /** 剪切事件 */
  cut: ClipboardEvent;
  /** 粘贴事件 */
  paste: ClipboardEvent;
}
export type DOMUtils_ClipboardEventType = keyof DOMUtils_ClipboardEvent;

/**
 * 打印事件
 */
export interface DOMUtils_PrintEvent {
  /** 打印之后事件 */
  afterprint: Event;
  /** 打印之前事件 */
  beforeprint: Event;
}
export type DOMUtils_PrintEventType = keyof DOMUtils_PrintEvent;

/**
 * 拖动事件
 */
export interface DOMUtils_DragEvent {
  /** 拖动元素时触发事件 */
  drag: DragEvent;
  /** 拖动结束事件 */
  dragend: DragEvent;
  /** 拖动进入有效放置目标事件 */
  dragenter: DragEvent;
  /** 拖动离开有效放置目标事件 */
  dragleave: DragEvent;
  /** 拖动在有效放置目标上移动事件 */
  dragover: DragEvent;
  /** 开始拖动元素事件 */
  dragstart: DragEvent;
  /** 拖动元素被放置事件 */
  drop: DragEvent;
}
export type DOMUtils_DragEventType = keyof DOMUtils_DragEvent;

/**
 * 多媒体（Media）事件
 */
export interface DOMUtils_MediaEvent {
  /** 音频/视频加载过程中被中断事件 */
  abort: Event;
  /** 可以开始播放时触发事件 */
  canplay: Event;
  /** 可以流畅播放到结尾时触发事件 */
  canplaythrough: Event;
  /** 媒体时长发生变化事件 */
  durationchange: Event;
  /** 媒体资源变为空时触发事件 */
  emptied: Event;
  /** 媒体播放完毕事件 */
  ended: Event;
  /** 加载媒体时发生错误事件 */
  error: Event;
  /** 媒体第一帧加载完成事件 */
  loadeddata: Event;
  /** 媒体元数据加载完成事件 */
  loadedmetadata: Event;
  /** 开始寻找媒体文件时触发事件 */
  loadstart: Event;
  /** 媒体暂停事件 */
  pause: Event;
  /** 媒体开始播放事件 */
  play: Event;
  /** 媒体实际开始播放事件 */
  playing: Event;
  /** 浏览器正在获取媒体数据事件 */
  progress: Event;
  /** 播放速度改变事件 */
  ratechange: Event;
  /** 完成跳转到新位置事件 */
  seeked: Event;
  /** 正在跳转到新位置事件 */
  seeking: Event;
  /** 获取媒体数据异常缓慢事件 */
  stalled: Event;
  /** 浏览器故意停止下载媒体事件 */
  suspend: Event;
  /** 播放位置改变事件 */
  timeupdate: Event;
  /** 音量改变事件 */
  volumechange: Event;
  /** 等待数据时触发事件 */
  waiting: Event;
}
export type DOMUtils_MediaEventType = keyof DOMUtils_MediaEvent;

/**
 * 动画事件
 */
export interface DOMUtils_AnimationEvent {
  /** CSS动画结束事件 */
  animationend: AnimationEvent;
  /** CSS动画重复播放事件 */
  animationiteration: AnimationEvent;
  /** CSS动画开始事件 */
  animationstart: AnimationEvent;
}
export type DOMUtils_AnimationEventType = keyof DOMUtils_AnimationEvent;

/**
 * 过渡事件
 */
export interface DOMUtils_TransitionEvent {
  transitionend: TransitionEvent;
}
export type DOMUtils_TransitionEventType = keyof DOMUtils_TransitionEvent;

/**
 * 触摸事件
 */
export interface DOMUtils_TouchEvent {
  /** 触摸开始事件 */
  touchstart: TouchEvent;
  /** 触摸移动事件 */
  touchmove: TouchEvent;
  /** 触摸结束事件 */
  touchend: TouchEvent;
  /** 触摸被中断事件 */
  touchcancel: TouchEvent;
  /** 触摸进入元素事件 */
  touchenter: TouchEvent;
  /** 触摸离开元素事件 */
  touchleave: TouchEvent;
}
export type DOMUtils_TouchEventType = keyof DOMUtils_TouchEvent;
/**
 * 其它事件
 */
export interface DOMUtils_OtherEvent {
  /** 接收到消息事件 */
  message: Event;
  /** 浏览器上线事件 */
  online: Event;
  /** 浏览器离线事件 */
  offline: Event;
  /** 浏览器历史记录改变事件 */
  popstate: Event;
  /** 上下文菜单显示事件 */
  show: Event;
  /** Web Storage变化事件 */
  storage: Event;
  /** details元素打开/关闭事件 */
  toggle: Event;
  /** 鼠标滚轮滚动事件 */
  wheel: Event;
  /** IE特有属性改变事件 */
  propertychange: Event;
  /** 全屏状态改变事件 */
  fullscreenchange: Event;
  /** DOM内容加载完成事件 */
  DOMContentLoaded: Event;
}
export type DOMUtils_OtherEventType = keyof DOMUtils_OtherEvent;

/**
 * 全部事件
 */
export declare type DOMUtils_Event = DOMUtils_MouseEvent &
  DOMUtils_KeyboardEvent &
  DOMUtils_PointerEvent &
  DOMUtils_Frame_Object_Event &
  DOMUtils_FormEvent &
  DOMUtils_ClipboardEvent &
  DOMUtils_PrintEvent &
  DOMUtils_DragEvent &
  DOMUtils_MediaEvent &
  DOMUtils_AnimationEvent &
  DOMUtils_TransitionEvent &
  DOMUtils_TouchEvent &
  DOMUtils_OtherEvent;

/**
 * 事件类型
 */
export declare type DOMUtils_EventType = keyof DOMUtils_Event;

/**
 * 元素上的events属性
 */
export declare interface DOMUtilsEventListenerOptionsAttribute {
  /**
   * DOMUtils的handlerCallBack，元素上的监听事件就是它，移除事件时也需要传入这个函数
   */
  handlerCallBack: (event: Event, $selector?: HTMLElement) => void;
  /**
   * 属性配置
   */
  option: DOMUtilsEventListenerOption;
  /**
   * 用户添加的事件
   */
  callback: (event: Event, $selector?: HTMLElement) => void;
  /**
   * 子元素选择器
   */
  selector?: string[];
}

/**
 * 事件的额外配置
 */
export declare type DOMUtilsEventListenerOption = AddEventListenerOptions & {
  /**
   * 是否使用 event.composedPath() 来代替 event.target
   *
   * 一般用于设置了selector参数
   */
  isComposedPath?: boolean;
};
export declare type DOMUtilsElementEventType =
  | HTMLElement
  | string
  | NodeList
  | (HTMLElement | Window | Document | Element | typeof globalThis)[]
  | Window
  | Document
  | Element
  | null
  | typeof globalThis
  | ShadowRoot
  | EventTarget
  | ChildNode
  | Node
  | DocumentFragment;

/**
 * 通过.on执行后的返回值
 */
export declare interface DOMUtilsAddEventListenerResult {
  /**
   * 取消绑定的监听事件
   * @param filter (可选)过滤函数，对元素属性上的事件进行过滤出想要删除的事件
   */
  off(
    filter?: (
      value: DOMUtilsEventListenerOptionsAttribute,
      index: number,
      array: DOMUtilsEventListenerOptionsAttribute[]
    ) => boolean
  ): void;
  /**
   * 主动触发事件
   * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
   * @param useDispatchToEmit 是否使用dispatchEvent来触发事件，默认true，如果为false，则直接调用callback，但是这种会让使用了selectorTarget的没有值
   */
  emit(details?: object, useDispatchToEmit?: boolean): void;
}

/**
 * 传递的双击配置信息
 */
export declare type DOMUtilsDoubleClickOption = {
  /**
   * 是否是双击
   *
   * + `true`：双击
   * + `false`：单击
   */
  isDoubleClick: boolean;
};

/**
 * 双击的处理函数
 */
export declare type DOMUtilsDoubleClickHandler = (
  event: MouseEvent | PointerEvent | TouchEvent,
  option: DOMUtilsDoubleClickOption
) => void | Promise<void>;

/**
 * 双击的处理函数（传入了selector）
 */
export declare type DOMUtilsDoubleClickHandlerWithSelector<T = HTMLElement> = (
  event: MouseEvent | PointerEvent | TouchEvent,
  $selector: T,
  option: DOMUtilsDoubleClickOption
) => void | Promise<void>;
