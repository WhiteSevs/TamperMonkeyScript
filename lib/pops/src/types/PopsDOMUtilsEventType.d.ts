export type PopsDOMUtilsEventObject<T extends Node> = Event & {
	target: T;
};

export type PopsDOMUtilsCreateElementAttributesMap = {
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

export interface PopsDOMUtils_MouseEvent {
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
	hover: MouseEvent;
}
export type PopsDOMUtils_MouseEventType = keyof PopsDOMUtils_MouseEvent;
/**
 * 鼠标事件
 */
export interface PopsDOMUtils_KeyboardEvent {
	keydown: KeyboardEvent;
	keypress: KeyboardEvent;
	keyup: KeyboardEvent;
}
export type PopsDOMUtils_KeyboardEventType = keyof PopsDOMUtils_KeyboardEvent;
/**
 * 框架/对象事件
 */
export interface PopsDOMUtils_Frame_Object_Event {
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
export type PopsDOMUtils_Frame_Object_EventType =
	keyof PopsDOMUtils_Frame_Object_Event;
/**
 * 表单事件
 */
export interface PopsDOMUtils_FormEvent {
	blur: Event;
	change: Event;
	focus: Event;
	focusin: Event;
	focusout: Event;
	input: Event;
	reset: Event;
	search: Event;
}
export type PopsDOMUtils_FormEventType = keyof PopsDOMUtils_FormEvent;

/**
 * 剪贴板事件
 */
export interface PopsDOMUtils_ClipboardEvent {
	copy: ClipboardEvent;
	cut: ClipboardEvent;
	paste: ClipboardEvent;
}
export type PopsDOMUtils_ClipboardEventType = keyof PopsDOMUtils_ClipboardEvent;

/**
 * 打印事件
 */
export interface PopsDOMUtils_PrintEvent {
	afterprint: Event;
	beforeprint: Event;
}
export type PopsDOMUtils_PrintEventType = keyof PopsDOMUtils_PrintEvent;

/**
 * 拖动事件
 */
export interface PopsDOMUtils_DragEvent {
	drag: DragEvent;
	dragend: DragEvent;
	dragenter: DragEvent;
	dragleave: DragEvent;
	dragover: DragEvent;
	dragstart: DragEvent;
	drop: DragEvent;
}
export type PopsDOMUtils_DragEventType = keyof PopsDOMUtils_DragEvent;

/**
 * 多媒体（Media）事件
 */
export interface PopsDOMUtils_MediaEvent {
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
export type PopsDOMUtils_MediaEventType = keyof PopsDOMUtils_MediaEvent;

/**
 * 动画事件
 */
export interface PopsDOMUtils_AnimationEvent {
	animationend: AnimationEvent;
	animationiteration: AnimationEvent;
	animationstart: AnimationEvent;
}
export type PopsDOMUtils_AnimationEventType = keyof PopsDOMUtils_AnimationEvent;

/**
 * 过渡事件
 */
export interface PopsDOMUtils_TransitionEvent {
	transitionend: TransitionEvent;
}
export type PopsDOMUtils_TransitionEventType =
	keyof PopsDOMUtils_TransitionEvent;

/**
 * 触摸事件
 */
export interface PopsDOMUtils_TouchEvent {
	touchstart: TouchEvent;
	touchmove: TouchEvent;
	touchend: TouchEvent;
	touchcancel: TouchEvent;
	touchenter: TouchEvent;
	touchleave: TouchEvent;
}
export type PopsDOMUtils_TouchEventType = keyof PopsDOMUtils_TouchEvent;
/**
 * 其它事件
 */
export interface PopsDOMUtils_OtherEvent {
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
export type PopsDOMUtils_OtherEventType = keyof PopsDOMUtils_OtherEvent;

/**
 * 全部事件
 */
export type PopsDOMUtils_Event = PopsDOMUtils_MouseEvent &
	PopsDOMUtils_KeyboardEvent &
	PopsDOMUtils_Frame_Object_Event &
	PopsDOMUtils_FormEvent &
	PopsDOMUtils_ClipboardEvent &
	PopsDOMUtils_PrintEvent &
	PopsDOMUtils_DragEvent &
	PopsDOMUtils_MediaEvent &
	PopsDOMUtils_AnimationEvent &
	PopsDOMUtils_TransitionEvent &
	PopsDOMUtils_TouchEvent &
	PopsDOMUtils_OtherEvent;

/**
 * 事件类型
 */
export type PopsDOMUtils_EventType = keyof PopsDOMUtils_Event;

/**
 * 元素上的events属性
 */
export interface PopsDOMUtilsEventListenerOptionsAttribute {
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

export type PopsDOMUtilsElementEventType =
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
	| Node;

export type ParseHTMLReturnType<T1, T2> = T1 extends true
	? T2 extends true
		? Document
		: HTMLElement
	: HTMLElement;
