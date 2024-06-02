import { DOMUtilsCommonUtils } from "./DOMUtilsCommonUtils";
import { DOMUtilsCore } from "./DOMUtilsCore";
import { DOMUtilsData } from "./DOMUtilsData";
import { OriginPrototype } from "./DOMUtilsOriginPrototype";

export type DOMUtilsEventObject<T extends Node> = Event & {
	target: T;
};

export declare type DOMUtilsCreateElementAttributesMap = {
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
export type DOMUtils_MouseEventType = keyof DOMUtils_MouseEvent;
/**
 * 鼠标事件
 */
export interface DOMUtils_KeyboardEvent {
	keydown: KeyboardEvent;
	keypress: KeyboardEvent;
	keyup: KeyboardEvent;
}
export type DOMUtils_KeyboardEventType = keyof DOMUtils_KeyboardEvent;
/**
 * 框架/对象事件
 */
export interface DOMUtils_Frame_Object_Event {
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
export type DOMUtils_Frame_Object_EventType = keyof DOMUtils_Frame_Object_Event;
/**
 * 表单事件
 */
export interface DOMUtils_FormEvent {
	blur: Event;
	change: Event;
	focus: Event;
	focusin: Event;
	focusout: Event;
	input: Event;
	reset: Event;
	search: Event;
}
export type DOMUtils_FormEventType = keyof DOMUtils_FormEvent;

/**
 * 剪贴板事件
 */
export interface DOMUtils_ClipboardEvent {
	copy: ClipboardEvent;
	cut: ClipboardEvent;
	paste: ClipboardEvent;
}
export type DOMUtils_ClipboardEventType = keyof DOMUtils_ClipboardEvent;

/**
 * 打印事件
 */
export interface DOMUtils_PrintEvent {
	afterprint: Event;
	beforeprint: Event;
}
export type DOMUtils_PrintEventType = keyof DOMUtils_PrintEvent;

/**
 * 拖动事件
 */
export interface DOMUtils_DragEvent {
	drag: DragEvent;
	dragend: DragEvent;
	dragenter: DragEvent;
	dragleave: DragEvent;
	dragover: DragEvent;
	dragstart: DragEvent;
	drop: DragEvent;
}
export type DOMUtils_DragEventType = keyof DOMUtils_DragEvent;

/**
 * 多媒体（Media）事件
 */
export interface DOMUtils_MediaEvent {
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
export type DOMUtils_MediaEventType = keyof DOMUtils_MediaEvent;

/**
 * 动画事件
 */
export interface DOMUtils_AnimationEvent {
	animationend: AnimationEvent;
	animationiteration: AnimationEvent;
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
	touchstart: TouchEvent;
	touchmove: TouchEvent;
	touchend: TouchEvent;
	touchcancel: TouchEvent;
	touchenter: TouchEvent;
	touchleave: TouchEvent;
}
export type DOMUtils_TouchEventType = keyof DOMUtils_TouchEvent;
/**
 * 其它事件
 */
export interface DOMUtils_OtherEvent {
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
export type DOMUtils_OtherEventType = keyof DOMUtils_OtherEvent;

/**
 * 全部事件
 */
export declare type DOMUtils_Event = DOMUtils_MouseEvent &
	DOMUtils_KeyboardEvent &
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

class DOMUtilsEvent {
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
	on<T extends DOMUtils_EventType>(
		element:
			| HTMLElement
			| string
			| NodeList
			| HTMLElement[]
			| Window
			| Document
			| Element
			| null
			| typeof globalThis,
		eventType: T | T[],
		callback: (event: DOMUtils_Event[T]) => void,
		option?: boolean | AddEventListenerOptions
	): void;
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
	on<T extends Event>(
		element:
			| HTMLElement
			| string
			| NodeList
			| HTMLElement[]
			| Window
			| Document
			| Element
			| null
			| typeof globalThis,
		eventType: string,
		callback: (event: T) => void,
		option?: boolean | AddEventListenerOptions
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
	on<T extends DOMUtils_EventType>(
		element:
			| HTMLElement
			| string
			| NodeList
			| HTMLElement[]
			| Window
			| Document
			| Element
			| null
			| typeof globalThis,
		eventType: T | T[],
		selector: string | undefined | null,
		callback: (event: DOMUtils_Event[T]) => void,
		option?: boolean | AddEventListenerOptions
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
	on<T extends Event>(
		element:
			| HTMLElement
			| string
			| NodeList
			| HTMLElement[]
			| Window
			| Document
			| Element
			| null
			| typeof globalThis,
		eventType: string,
		selector: string | undefined | null,
		callback: (event: T) => void,
		option?: boolean | AddEventListenerOptions
	): void;
	on<T extends Event>(
		element:
			| HTMLElement
			| string
			| NodeList
			| HTMLElement[]
			| Window
			| Document
			| Element
			| null
			| typeof globalThis,
		eventType: DOMUtils_EventType | DOMUtils_EventType[] | string,
		selector: string | undefined | ((event: T) => void) | null,
		callback?: ((event: T) => void) | boolean | AddEventListenerOptions,
		option?: boolean | AddEventListenerOptions
	) {
		/**
		 * 获取option配置
		 * @param args
		 * @param startIndex
		 * @param option
		 */
		function getOption(
			args: IArguments,
			startIndex: number,
			option: AddEventListenerOptions
		) {
			if (typeof args[startIndex] === "boolean") {
				option.capture = args[startIndex];
				if (typeof args[startIndex + 1] === "boolean") {
					option.once = args[startIndex + 1];
				}
				if (typeof args[startIndex + 2] === "boolean") {
					option.passive = args[startIndex + 2];
				}
			} else if (
				typeof args[startIndex] === "object" &&
				("capture" in args[startIndex] ||
					"once" in args[startIndex] ||
					"passive" in args[startIndex])
			) {
				option.capture = args[startIndex].capture;
				option.once = args[startIndex].once;
				option.passive = args[startIndex].passive;
			}
			return option;
		}

		let DOMUtilsContext = this;
		let args = arguments;
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelectorAll(element);
		}
		if (element == null) {
			return;
		}
		let elementList: HTMLElement[] = [];
		if (element instanceof NodeList || Array.isArray(element)) {
			element = element as HTMLElement[];
			elementList = [...element];
		} else {
			elementList.push(element as HTMLElement);
		}

		let eventTypeList: string[] = [];
		if (Array.isArray(eventType)) {
			eventTypeList = eventTypeList.concat(eventType as string[]);
		} else if (typeof eventType === "string") {
			eventTypeList = eventTypeList.concat(eventType.split(" "));
		}
		let _selector_: string | undefined = selector as any;
		let _callback_: (event: T) => void = callback as any;
		let _option_: AddEventListenerOptions = {
			capture: false,
			once: false,
			passive: false,
		};
		if (typeof selector === "function") {
			/* 这是为没有selector的情况 */
			_selector_ = void 0;
			_callback_ = selector;
			_option_ = getOption(args, 3, _option_);
		} else {
			/* 这是存在selector的情况 */
			_option_ = getOption(args, 4, _option_);
		}
		/**
		 * 如果是once，那么删除该监听和元素上的事件和监听
		 */
		function checkOptionOnceToRemoveEventListener() {
			if (_option_.once) {
				DOMUtilsContext.off(
					element,
					eventType as any,
					selector as any,
					callback as any,
					option
				);
			}
		}
		elementList.forEach((elementItem) => {
			function ownCallBack(event: Event) {
				let target = event.target as HTMLElement;
				if (_selector_) {
					/* 存在自定义子元素选择器 */
					let totalParent = DOMUtilsCommonUtils.isWin(elementItem)
						? DOMUtilsCore.document.documentElement
						: elementItem;
					if (target.matches(_selector_)) {
						/* 当前目标可以被selector所匹配到 */
						_callback_.call(target, event as any);
						checkOptionOnceToRemoveEventListener();
					} else if (
						target.closest(_selector_) &&
						totalParent.contains(target.closest(_selector_))
					) {
						/* 在上层与主元素之间寻找可以被selector所匹配到的 */
						let closestElement = target.closest(_selector_);
						/* event的target值不能直接修改 */
						OriginPrototype.Object.defineProperty(event, "target", {
							get() {
								return closestElement;
							},
						});
						_callback_.call(closestElement, event as any);
						checkOptionOnceToRemoveEventListener();
					}
				} else {
					_callback_.call(elementItem, event as any);
					checkOptionOnceToRemoveEventListener();
				}
			}

			/* 遍历事件名设置元素事件 */
			eventTypeList.forEach((eventName) => {
				elementItem.addEventListener(eventName, ownCallBack, _option_);

				if (_callback_ && (_callback_ as any).delegate) {
					elementItem.setAttribute("data-delegate", _selector_ as string);
				}
				/* 获取对象上的事件 */
				let elementEvents =
					(elementItem as any)[DOMUtilsData.SymbolEvents] || {};
				/* 初始化对象上的xx事件 */
				elementEvents[eventName] = elementEvents[eventName] || [];
				elementEvents[eventName].push({
					selector: _selector_,
					option: _option_,
					callback: ownCallBack,
					originCallBack: _callback_,
				});
				/* 覆盖事件 */
				(elementItem as any)[DOMUtilsData.SymbolEvents] = elementEvents;
			});
		});
	}
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
	off<T extends DOMUtils_EventType>(
		element:
			| HTMLElement
			| string
			| NodeList
			| HTMLElement[]
			| Window
			| Document
			| Element
			| null
			| typeof globalThis,
		eventType: T | T[],
		callback?: (event: DOMUtils_Event[T]) => void,
		option?: boolean | AddEventListenerOptions,
		filter?: (
			value: DOMUtilsEventListenerOptionsAttribute,
			index: number,
			array: DOMUtilsEventListenerOptionsAttribute[]
		) => boolean
	): void;
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
	off<T extends Event>(
		element:
			| HTMLElement
			| string
			| NodeList
			| HTMLElement[]
			| Window
			| Document
			| Element
			| null
			| typeof globalThis,
		eventType: string,
		callback?: (event: T) => void,
		option?: boolean | AddEventListenerOptions,
		filter?: (
			value: DOMUtilsEventListenerOptionsAttribute,
			index: number,
			array: DOMUtilsEventListenerOptionsAttribute[]
		) => boolean
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
	off<T extends DOMUtils_EventType>(
		element:
			| HTMLElement
			| string
			| NodeList
			| HTMLElement[]
			| Window
			| Document
			| Element
			| null
			| typeof globalThis,
		eventType: T | T[],
		selector?: string | undefined,
		callback?: (event: DOMUtils_Event[T]) => void,
		option?: boolean | AddEventListenerOptions,
		filter?: (
			value: DOMUtilsEventListenerOptionsAttribute,
			index: number,
			array: DOMUtilsEventListenerOptionsAttribute[]
		) => boolean
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
	off<T extends Event>(
		element:
			| HTMLElement
			| string
			| NodeList
			| HTMLElement[]
			| Window
			| Document
			| Element
			| null
			| typeof globalThis,
		eventType: string,
		selector?: string | undefined,
		callback?: (event: T) => void,
		option?: boolean | AddEventListenerOptions,
		filter?: (
			value: DOMUtilsEventListenerOptionsAttribute,
			index: number,
			array: DOMUtilsEventListenerOptionsAttribute[]
		) => boolean
	): void;
	off<T extends Event>(
		element:
			| HTMLElement
			| string
			| NodeList
			| HTMLElement[]
			| Window
			| Document
			| Element
			| null
			| typeof globalThis,
		eventType: DOMUtils_EventType | DOMUtils_EventType[] | string,
		selector?: string | undefined | ((event: T) => void),
		callback?: ((event: T) => void) | boolean | AddEventListenerOptions,
		option?:
			| boolean
			| AddEventListenerOptions
			| ((
					value: DOMUtilsEventListenerOptionsAttribute,
					index: number,
					array: DOMUtilsEventListenerOptionsAttribute[]
			  ) => boolean),
		filter?: (
			value: DOMUtilsEventListenerOptionsAttribute,
			index: number,
			array: DOMUtilsEventListenerOptionsAttribute[]
		) => boolean
	) {
		/**
		 * 获取option配置
		 * @param args1
		 * @param startIndex
		 * @param option
		 */
		function getOption(
			args1: IArguments,
			startIndex: number,
			option: EventListenerOptions
		) {
			if (typeof args1[startIndex] === "boolean") {
				option.capture = args1[startIndex];
			} else if (
				typeof args1[startIndex] === "object" &&
				"capture" in args1[startIndex]
			) {
				option.capture = args1[startIndex].capture;
			}
			return option;
		}

		let args = arguments;
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelectorAll(element);
		}
		if (element == null) {
			return;
		}
		let elementList: HTMLElement[] = [];
		if (element instanceof NodeList || Array.isArray(element)) {
			element = element as HTMLElement[];
			elementList = [...element];
		} else {
			elementList.push(element as HTMLElement);
		}
		let eventTypeList: string[] = [];
		if (Array.isArray(eventType)) {
			eventTypeList = eventTypeList.concat(eventType as string[]);
		} else if (typeof eventType === "string") {
			eventTypeList = eventTypeList.concat(eventType.split(" "));
		}
		/**
		 * 子元素选择器
		 */
		let _selector_: string | undefined = selector as any;
		/**
		 * 事件的回调函数
		 */
		let _callback_: (event: T) => void = callback as any;

		/**
		 * 事件的配置
		 */
		let _option_: EventListenerOptions = {
			capture: false,
		};
		if (typeof selector === "function") {
			/* 这是为没有selector的情况 */
			_selector_ = void 0;
			_callback_ = selector;
			_option_ = getOption(args, 3, _option_);
		} else {
			_option_ = getOption(args, 4, _option_);
		}
		elementList.forEach((elementItem) => {
			/* 获取对象上的事件 */
			let elementEvents = (elementItem as any)[DOMUtilsData.SymbolEvents] || {};
			eventTypeList.forEach((eventName) => {
				let handlers: DOMUtilsEventListenerOptionsAttribute[] =
					elementEvents[eventName] || [];
				if (typeof filter === "function") {
					handlers = handlers.filter(filter);
				}
				for (let index = 0; index < handlers.length; index++) {
					let handler = handlers[index];
					let flag = false;
					if (!_selector_ || handler.selector === _selector_) {
						/* selector不为空，进行selector判断 */
						flag = true;
					}
					if (
						!_callback_ ||
						handler.callback === _callback_ ||
						handler.originCallBack === _callback_
					) {
						/* callback不为空，进行callback判断 */
						flag = true;
					}

					if (flag) {
						elementItem.removeEventListener(
							eventName,
							handler.callback,
							_option_
						);
						handlers.splice(index--, 1);
					}
				}
				if (handlers.length === 0) {
					/* 如果没有任意的handler，那么删除该属性 */
					DOMUtilsCommonUtils.delete(elementEvents, eventType);
				}
			});
			(elementItem as any)[DOMUtilsData.SymbolEvents] = elementEvents;
		});
	}
	/**
	 * 取消绑定所有的事件
	 * @param element 需要取消绑定的元素|元素数组
	 * @param eventType （可选）需要取消监听的事件
	 */
	offAll(
		element:
			| HTMLElement
			| string
			| NodeList
			| HTMLElement[]
			| Window
			| Element
			| null,
		eventType?: string
	): void;
	/**
	 * 取消绑定所有的事件
	 * @param element 需要取消绑定的元素|元素数组
	 * @param eventType （可选）需要取消监听的事件
	 */
	offAll(
		element:
			| HTMLElement
			| string
			| NodeList
			| HTMLElement[]
			| Window
			| Element
			| null,
		eventType?: DOMUtils_EventType | DOMUtils_EventType[]
	): void;
	/**
	 * 取消绑定所有的事件
	 * @param element 需要取消绑定的元素|元素数组
	 * @param eventType （可选）需要取消监听的事件
	 */
	offAll(
		element:
			| HTMLElement
			| string
			| NodeList
			| HTMLElement[]
			| Window
			| Element
			| null,
		eventType?: DOMUtils_EventType | DOMUtils_EventType[] | string
	) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelectorAll(element);
		}
		if (element == null) {
			return;
		}
		let elementList: HTMLElement[] = [];
		if (element instanceof NodeList || Array.isArray(element)) {
			element = element as HTMLElement[];
			elementList = [...element];
		} else {
			elementList.push(element as HTMLElement);
		}

		let eventTypeList: string[] = [];
		if (Array.isArray(eventType)) {
			eventTypeList = eventTypeList.concat(eventType as string[]);
		} else if (typeof eventType === "string") {
			eventTypeList = eventTypeList.concat(eventType.split(" "));
		}
		elementList.forEach((elementItem) => {
			Object.getOwnPropertySymbols(elementItem).forEach((symbolEvents) => {
				if (!symbolEvents.toString().startsWith("Symbol(events_")) {
					return;
				}
				let elementEvents = (elementItem as any)[symbolEvents] || {};
				let iterEventNameList = eventTypeList.length
					? eventTypeList
					: Object.keys(elementEvents);
				iterEventNameList.forEach((eventName) => {
					let handlers = elementEvents[eventName];
					if (!handlers) {
						return;
					}
					for (const handler of handlers) {
						elementItem.removeEventListener(eventName, handler.callback, {
							capture: handler["option"]["capture"],
						});
					}
					DOMUtilsCommonUtils.delete(
						(elementItem as any)[symbolEvents],
						eventName
					);
				});
			});
		});
	}

	/**
	 * 等待文档加载完成后执行指定的函数
	 * @param callback 需要执行的函数
	 * @example
	 * DOMUtils.ready(function(){
	 *   console.log("文档加载完毕")
	 * })
	 */
	ready<T extends Function>(callback: T) {
		if (typeof callback !== "function") {
			return;
		}
		/**
		 * 检测文档是否加载完毕
		 */
		function checkDOMReadyState() {
			try {
				if (
					document.readyState === "complete" ||
					(document.readyState !== "loading" &&
						!(document.documentElement as any).doScroll)
				) {
					return true;
				} else {
					return false;
				}
			} catch (error) {
				return false;
			}
		}
		/**
		 * 成功加载完毕后触发的回调函数
		 */
		function completed() {
			removeDomReadyListener();
			callback();
		}

		let targetList = [
			{
				target: DOMUtilsCore.document,
				eventType: "DOMContentLoaded",
				callback: completed,
			},
			{
				target: DOMUtilsCore.window,
				eventType: "load",
				callback: completed,
			},
		];
		/**
		 * 添加监听
		 */
		function addDomReadyListener() {
			for (let index = 0; index < targetList.length; index++) {
				let item = targetList[index];
				item.target.addEventListener(item.eventType, item.callback);
			}
		}
		/**
		 * 移除监听
		 */
		function removeDomReadyListener() {
			for (let index = 0; index < targetList.length; index++) {
				let item = targetList[index];
				item.target.removeEventListener(item.eventType, item.callback);
			}
		}
		if (checkDOMReadyState()) {
			/* 检查document状态 */
			setTimeout(callback);
		} else {
			/* 添加监听 */
			addDomReadyListener();
		}
	}
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
		element: HTMLElement | string | NodeList | any[] | Window | Document,
		eventType: string,
		details?: object,
		useDispatchToTriggerEvent?: boolean
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
		element: HTMLElement | string | NodeList | any[] | Window | Document,
		eventType: DOMUtils_EventType | DOMUtils_EventType[],
		details?: object,
		useDispatchToTriggerEvent?: boolean
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
		element: HTMLElement | string | NodeList | any[] | Window | Document,
		eventType: DOMUtils_EventType | DOMUtils_EventType[] | string,
		details?: object,
		useDispatchToTriggerEvent: boolean = true
	) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		let elementList = [];
		if (element instanceof NodeList || Array.isArray(element)) {
			element = element as HTMLElement[];
			elementList = [...element];
		} else {
			elementList = [element];
		}
		let eventTypeList: string[] = [];
		if (Array.isArray(eventType)) {
			eventTypeList = eventType as string[];
		} else if (typeof eventType === "string") {
			eventTypeList = eventType.split(" ");
		}

		elementList.forEach((elementItem) => {
			/* 获取对象上的事件 */
			let events = elementItem[DOMUtilsData.SymbolEvents] || {};
			eventTypeList.forEach((_eventType_) => {
				let event: Event = null as any;
				if (details && details instanceof Event) {
					event = details;
				} else {
					event = new Event(_eventType_);
					if (details) {
						Object.keys(details).forEach((keyName) => {
							(event as any)[keyName] = (details as any)[keyName];
						});
					}
				}
				if (useDispatchToTriggerEvent == false && _eventType_ in events) {
					events[_eventType_].forEach((eventsItem: any) => {
						eventsItem.callback(event);
					});
				} else {
					elementItem.dispatchEvent(event);
				}
			});
		});
	}

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
		handler?: (event: DOMUtils_Event["click"]) => void,
		details?: any,
		useDispatchToTriggerEvent?: boolean
	) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (handler == null) {
			DOMUtilsContext.trigger(
				element,
				"click",
				details,
				useDispatchToTriggerEvent
			);
		} else {
			DOMUtilsContext.on(element, "click", null, handler);
		}
	}
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
		handler?: (event: DOMUtils_Event["blur"]) => void,
		details?: object,
		useDispatchToTriggerEvent?: boolean
	) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (handler === null) {
			DOMUtilsContext.trigger(
				element,
				"blur",
				details,
				useDispatchToTriggerEvent
			);
		} else {
			DOMUtilsContext.on(
				element,
				"blur",
				null,
				handler as (event: Event) => void
			);
		}
	}
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
		handler?: (event: DOMUtils_Event["focus"]) => void,
		details?: object,
		useDispatchToTriggerEvent?: boolean
	) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (handler == null) {
			DOMUtilsContext.trigger(
				element,
				"focus",
				details,
				useDispatchToTriggerEvent
			);
		} else {
			DOMUtilsContext.on(element, "focus", null, handler);
		}
	}
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
		handler: (event: DOMUtils_Event["hover"]) => void,
		option?: boolean | AddEventListenerOptions
	) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		DOMUtilsContext.on(element, "mouseenter", null, handler, option);
		DOMUtilsContext.on(element, "mouseleave", null, handler, option);
	}
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
		target: HTMLElement | string | Window | typeof globalThis,
		handler: (event: DOMUtils_Event["keyup"]) => void,
		option?: boolean | AddEventListenerOptions
	) {
		let DOMUtilsContext = this;
		if (target == null) {
			return;
		}
		if (typeof target === "string") {
			target = DOMUtilsCore.document.querySelector(target) as HTMLElement;
		}
		DOMUtilsContext.on(target, "keyup", null, handler, option);
	}
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
		target: HTMLElement | Window | typeof globalThis | string,
		handler: (event: DOMUtils_Event["keydown"]) => void,
		option?: boolean | AddEventListenerOptions
	) {
		let DOMUtilsContext = this;
		if (target == null) {
			return;
		}
		if (typeof target === "string") {
			target = DOMUtilsCore.document.querySelector(target) as HTMLElement;
		}
		DOMUtilsContext.on(target, "keydown", null, handler, option);
	}
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
		target: HTMLElement | Window | typeof globalThis | string,
		handler: (event: DOMUtils_Event["keypress"]) => void,
		option?: boolean | AddEventListenerOptions
	) {
		let DOMUtilsContext = this;
		if (target == null) {
			return;
		}
		if (typeof target === "string") {
			target = DOMUtilsCore.document.querySelector(target) as HTMLElement;
		}
		DOMUtilsContext.on(target, "keypress", null, handler, option);
	}
}

export { DOMUtilsEvent };
