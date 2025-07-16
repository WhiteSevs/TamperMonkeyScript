import type {
	ParseHTMLReturnType,
	PopsDOMUtils_EventType,
	PopsDOMUtilsCreateElementAttributesMap,
	PopsDOMUtilsEventListenerOption,
	PopsDOMUtilsEventListenerOptionsAttribute,
	PopsDOMUtils_Event,
	PopsDOMUtilsElementEventType,
} from "../types/PopsDOMUtilsEventType";
import { SymbolEvents } from "./PopsDOMUtilsEventsConfig";
import { OriginPrototype, PopsCore } from "../PopsCore";
import { popsUtils } from "./PopsUtils";
import { PopsSafeUtils } from "./PopsSafeUtils";
import { PopsCommonCSSClassName } from "../config/CommonCSSClassName";

class PopsDOMUtilsEvent {
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
	on<T extends PopsDOMUtils_EventType>(
		element: PopsDOMUtilsElementEventType,
		eventType: T | T[],
		callback: (this: HTMLElement, event: PopsDOMUtils_Event[T]) => void,
		option?: PopsDOMUtilsEventListenerOption | boolean
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
		element: PopsDOMUtilsElementEventType,
		eventType: string | string[],
		callback: (this: HTMLElement, event: T) => void,
		option?: PopsDOMUtilsEventListenerOption | boolean
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
	on<T extends PopsDOMUtils_EventType>(
		element: PopsDOMUtilsElementEventType,
		eventType: T | T[],
		selector: string | string[] | undefined | null,
		callback: (
			this: HTMLElement,
			event: PopsDOMUtils_Event[T],
			selectorTarget: HTMLElement
		) => void,
		option?: PopsDOMUtilsEventListenerOption | boolean
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
	on<T extends Event>(
		element: PopsDOMUtilsElementEventType,
		eventType: string | string[],
		selector: string | string[] | undefined | null,
		callback: (
			this: HTMLElement,
			event: T,
			selectorTarget: HTMLElement
		) => void,
		option?: PopsDOMUtilsEventListenerOption | boolean
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
		eventType:
			| PopsDOMUtils_EventType
			| PopsDOMUtils_EventType[]
			| string
			| string[],
		selector:
			| string
			| string[]
			| undefined
			| ((this: HTMLElement, event: T, selectorTarget: HTMLElement) => void)
			| null,
		callback?:
			| ((this: HTMLElement, event: T, selectorTarget: HTMLElement) => void)
			| PopsDOMUtilsEventListenerOption
			| boolean,
		option?: PopsDOMUtilsEventListenerOption | boolean
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
			option: PopsDOMUtilsEventListenerOption
		) {
			let currentParam = args[startIndex];
			if (typeof currentParam === "boolean") {
				option.capture = currentParam;
				if (typeof args[startIndex + 1] === "boolean") {
					option.once = args[startIndex + 1];
				}
				if (typeof args[startIndex + 2] === "boolean") {
					option.passive = args[startIndex + 2];
				}
			} else if (
				typeof currentParam === "object" &&
				("capture" in currentParam ||
					"once" in currentParam ||
					"passive" in currentParam ||
					"isComposedPath" in currentParam)
			) {
				option.capture = currentParam.capture;
				option.once = currentParam.once;
				option.passive = currentParam.passive;
				option.isComposedPath = currentParam.isComposedPath;
			}
			return option;
		}

		let DOMUtilsContext = this;
		let args = arguments;
		if (typeof element === "string") {
			element = DOMUtilsContext.selectorAll(element);
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
		// 事件名
		let eventTypeList: string[] = [];
		if (Array.isArray(eventType)) {
			eventTypeList = eventTypeList.concat(
				eventType.filter(
					(eventTypeItem) =>
						typeof eventTypeItem === "string" && eventTypeItem.toString() !== ""
				)
			);
		} else if (typeof eventType === "string") {
			eventTypeList = eventTypeList.concat(
				eventType.split(" ").filter((eventTypeItem) => eventTypeItem !== "")
			);
		}
		// 子元素选择器
		let selectorList: string[] = [];
		if (Array.isArray(selector)) {
			selectorList = selectorList.concat(
				selector.filter(
					(selectorItem) =>
						typeof selectorItem === "string" && selectorItem.toString() !== ""
				)
			);
		} else if (typeof selector === "string") {
			selectorList.push(selector);
		}
		// 事件回调
		let listenerCallBack: (
			this: HTMLElement,
			event: Event,
			selectorTarget?: HTMLElement
		) => void = callback as any;
		// 事件配置
		let listenerOption: PopsDOMUtilsEventListenerOption = {
			capture: false,
			once: false,
			passive: false,
			isComposedPath: false,
		};
		if (typeof selector === "function") {
			// 这是为没有selector的情况
			// 那么它就是callback
			listenerCallBack = selector as any;
			listenerOption = getOption(args, 3, listenerOption);
		} else {
			// 这是存在selector的情况
			listenerOption = getOption(args, 4, listenerOption);
		}
		/**
		 * 如果是once，那么删除该监听和元素上的事件和监听
		 */
		function checkOptionOnceToRemoveEventListener() {
			if (listenerOption.once) {
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
			/**
			 * 事件回调
			 * @param event
			 */
			function domUtilsEventCallBack(event: Event) {
				if (selectorList.length) {
					/* 存在子元素选择器 */
					// 这时候的this和target都是子元素选择器的元素
					let eventTarget = listenerOption.isComposedPath
						? (event.composedPath()[0] as HTMLElement)
						: (event.target as HTMLElement);
					let totalParent = elementItem;
					if (popsUtils.isWin(totalParent)) {
						if (totalParent === (PopsCore.document as any as HTMLElement)) {
							totalParent = PopsCore.document.documentElement;
						}
					}
					let findValue = selectorList.find((selectorItem) => {
						// 判断目标元素是否匹配选择器
						if (DOMUtilsContext.matches(eventTarget, selectorItem)) {
							/* 当前目标可以被selector所匹配到 */
							return true;
						}
						/* 在上层与主元素之间寻找可以被selector所匹配到的 */
						let $closestMatches = DOMUtilsContext.closest<HTMLElement>(
							eventTarget,
							selectorItem
						);
						if ($closestMatches && totalParent?.contains($closestMatches)) {
							eventTarget = $closestMatches;
							return true;
						}
						return false;
					});
					if (findValue) {
						// 这里尝试使用defineProperty修改event的target值
						try {
							OriginPrototype.Object.defineProperty(event, "target", {
								get() {
									return eventTarget;
								},
							});
						} catch (error) {}
						listenerCallBack.call(eventTarget, event as any, eventTarget);
						checkOptionOnceToRemoveEventListener();
					}
				} else {
					// 这时候的this指向监听的元素
					listenerCallBack.call(elementItem, event as any);
					checkOptionOnceToRemoveEventListener();
				}
			}

			/* 遍历事件名设置元素事件 */
			eventTypeList.forEach((eventName) => {
				elementItem.addEventListener(
					eventName,
					domUtilsEventCallBack,
					listenerOption
				);
				/* 获取对象上的事件 */
				let elementEvents: {
					[k: string]: PopsDOMUtilsEventListenerOptionsAttribute[];
				} = Reflect.get(elementItem, SymbolEvents) || {};
				/* 初始化对象上的xx事件 */
				elementEvents[eventName] = elementEvents[eventName] || [];
				elementEvents[eventName].push({
					selector: selectorList,
					option: listenerOption,
					callback: domUtilsEventCallBack,
					originCallBack: listenerCallBack,
				});
				/* 覆盖事件 */
				Reflect.set(elementItem, SymbolEvents, elementEvents);
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
	 * // 取消监听元素a.xx所有的click事件
	 * DOMUtils.off(document.querySelector("a.xx"),"click")
	 * DOMUtils.off("a.xx","click")
	 */
	off<T extends PopsDOMUtils_EventType>(
		element: PopsDOMUtilsElementEventType,
		eventType: T | T[],
		callback?: (this: HTMLElement, event: PopsDOMUtils_Event[T]) => void,
		option?: EventListenerOptions | boolean,
		filter?: (
			value: PopsDOMUtilsEventListenerOptionsAttribute,
			index: number,
			array: PopsDOMUtilsEventListenerOptionsAttribute[]
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
		element: PopsDOMUtilsElementEventType,
		eventType: string | string[],
		callback?: (this: HTMLElement, event: T) => void,
		option?: EventListenerOptions | boolean,
		filter?: (
			value: PopsDOMUtilsEventListenerOptionsAttribute,
			index: number,
			array: PopsDOMUtilsEventListenerOptionsAttribute[]
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
	off<T extends PopsDOMUtils_EventType>(
		element: PopsDOMUtilsElementEventType,
		eventType: T | T[],
		selector?: string | string[] | undefined | null,
		callback?: (
			this: HTMLElement,
			event: PopsDOMUtils_Event[T],
			selectorTarget: HTMLElement
		) => void,
		option?: EventListenerOptions | boolean,
		filter?: (
			value: PopsDOMUtilsEventListenerOptionsAttribute,
			index: number,
			array: PopsDOMUtilsEventListenerOptionsAttribute[]
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
		element: PopsDOMUtilsElementEventType,
		eventType: string | string[],
		selector?: string | string[] | undefined | null,
		callback?: (
			this: HTMLElement,
			event: T,
			selectorTarget: HTMLElement
		) => void,
		option?: EventListenerOptions | boolean,
		filter?: (
			value: PopsDOMUtilsEventListenerOptionsAttribute,
			index: number,
			array: PopsDOMUtilsEventListenerOptionsAttribute[]
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
		eventType:
			| PopsDOMUtils_EventType
			| PopsDOMUtils_EventType[]
			| string
			| string[],
		selector:
			| string
			| string[]
			| undefined
			| ((this: HTMLElement, event: T, selectorTarget: HTMLElement) => void)
			| null,
		callback?:
			| ((this: HTMLElement, event: T, selectorTarget: HTMLElement) => void)
			| EventListenerOptions
			| boolean,
		option?:
			| EventListenerOptions
			| boolean
			| ((
					value: PopsDOMUtilsEventListenerOptionsAttribute,
					index: number,
					array: PopsDOMUtilsEventListenerOptionsAttribute[]
			  ) => boolean),
		filter?: (
			value: PopsDOMUtilsEventListenerOptionsAttribute,
			index: number,
			array: PopsDOMUtilsEventListenerOptionsAttribute[]
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
			let currentParam: EventListenerOptions | boolean = args1[startIndex];
			if (typeof currentParam === "boolean") {
				option.capture = currentParam;
			} else if (
				typeof currentParam === "object" &&
				"capture" in currentParam
			) {
				option.capture = currentParam.capture;
			}
			return option;
		}
		let DOMUtilsContext = this;
		let args = arguments;
		if (typeof element === "string") {
			element = DOMUtilsContext.selectorAll(element);
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
			eventTypeList = eventTypeList.concat(
				eventType.filter(
					(eventTypeItem) =>
						typeof eventTypeItem === "string" && eventTypeItem.toString() !== ""
				)
			);
		} else if (typeof eventType === "string") {
			eventTypeList = eventTypeList.concat(
				eventType.split(" ").filter((eventTypeItem) => eventTypeItem !== "")
			);
		}
		// 子元素选择器
		let selectorList: string[] = [];
		if (Array.isArray(selector)) {
			selectorList = selectorList.concat(
				selector.filter(
					(selectorItem) =>
						typeof selectorItem === "string" && selectorItem.toString() !== ""
				)
			);
		} else if (typeof selector === "string") {
			selectorList.push(selector);
		}
		/**
		 * 事件的回调函数
		 */
		let listenerCallBack: (
			this: HTMLElement,
			event: T,
			selectorTarget: HTMLElement
		) => void = callback as any;

		/**
		 * 事件的配置
		 */
		let listenerOption: EventListenerOptions = {
			capture: false,
		};
		if (typeof selector === "function") {
			// 这是为没有selector的情况
			// 那么它就是callback
			listenerCallBack = selector;
			listenerOption = getOption(args, 3, listenerOption);
		} else {
			// 这是存在selector的情况
			listenerOption = getOption(args, 4, listenerOption);
		}
		// 是否移除所有事件
		let isRemoveAll = false;
		if (args.length === 2) {
			// 目标函数、事件名
			isRemoveAll = true;
		} else if (
			(args.length === 3 && typeof args[2] === "string") ||
			Array.isArray(args[2])
		) {
			// 目标函数、事件名、子元素选择器
			isRemoveAll = true;
		}
		elementList.forEach((elementItem) => {
			/* 获取对象上的事件 */
			let elementEvents: {
				[key: string]: PopsDOMUtilsEventListenerOptionsAttribute[];
			} = Reflect.get(elementItem, SymbolEvents) || {};
			eventTypeList.forEach((eventName) => {
				let handlers = elementEvents[eventName] || [];
				if (typeof filter === "function") {
					handlers = handlers.filter(filter);
				}
				for (let index = 0; index < handlers.length; index++) {
					let handler = handlers[index];
					let flag = true;
					if (
						flag &&
						listenerCallBack &&
						handler.originCallBack !== listenerCallBack
					) {
						// callback不同
						flag = false;
					}
					if (flag && selectorList.length && Array.isArray(handler.selector)) {
						if (
							JSON.stringify(handler.selector) !== JSON.stringify(selectorList)
						) {
							// 子元素选择器不同
							flag = false;
						}
					}
					if (flag && listenerOption.capture !== handler.option.capture) {
						// 事件的配置项不同
						flag = false;
					}
					if (flag || isRemoveAll) {
						elementItem.removeEventListener(
							eventName,
							handler.callback,
							handler.option
						);
						handlers.splice(index--, 1);
					}
				}
				if (handlers.length === 0) {
					/* 如果没有任意的handler，那么删除该属性 */
					popsUtils.delete(elementEvents, eventType);
				}
			});
			Reflect.set(elementItem, SymbolEvents, elementEvents);
		});
	}
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
	offAll(
		element: PopsDOMUtilsElementEventType,
		eventType?: PopsDOMUtils_EventType | PopsDOMUtils_EventType[]
	): void;
	/**
	 * 取消绑定所有的事件
	 * @param element 需要取消绑定的元素|元素数组
	 * @param eventType （可选）需要取消监听的事件
	 */
	offAll(
		element: PopsDOMUtilsElementEventType,
		eventType?: PopsDOMUtils_EventType | PopsDOMUtils_EventType[] | string
	) {
		if (typeof element === "string") {
			element = PopsCore.document.querySelectorAll(element);
		}
		if (element == null) {
			return;
		}
		let elementList: HTMLElement[] = [];
		if (element instanceof NodeList || Array.isArray(element)) {
			elementList = [...(element as HTMLElement[])];
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
			Object.getOwnPropertySymbols(elementItem).forEach((__symbolEvents) => {
				if (!__symbolEvents.toString().startsWith("Symbol(events_")) {
					return;
				}
				let elementEvents = (elementItem as any)[__symbolEvents] || {};
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
					popsUtils.delete((elementItem as any)[__symbolEvents], eventName);
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
				target: PopsCore.document,
				eventType: "DOMContentLoaded",
				callback: completed,
			},
			{
				target: PopsCore.window,
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
			popsUtils.setTimeout(callback, 0);
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
		eventType: string | string[],
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
		eventType: PopsDOMUtils_EventType | PopsDOMUtils_EventType[],
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
		eventType: PopsDOMUtils_EventType | PopsDOMUtils_EventType[] | string,
		details?: object,
		useDispatchToTriggerEvent: boolean = true
	) {
		if (typeof element === "string") {
			element = PopsCore.document.querySelector(element) as HTMLElement;
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
			let events = elementItem[SymbolEvents] || {};
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
		handler?: (event: PopsDOMUtils_Event["click"]) => void,
		details?: any,
		useDispatchToTriggerEvent?: boolean
	) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = PopsCore.document.querySelector(element) as HTMLElement;
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
		handler?: (event: PopsDOMUtils_Event["blur"]) => void,
		details?: object,
		useDispatchToTriggerEvent?: boolean
	) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = PopsCore.document.querySelector(element) as HTMLElement;
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
		handler?: (event: PopsDOMUtils_Event["focus"]) => void,
		details?: object,
		useDispatchToTriggerEvent?: boolean
	) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = PopsCore.document.querySelector(element) as HTMLElement;
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
		handler: (event: PopsDOMUtils_Event["hover"]) => void,
		option?: boolean | AddEventListenerOptions
	) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = PopsCore.document.querySelector(element) as HTMLElement;
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
		handler: (event: PopsDOMUtils_Event["keyup"]) => void,
		option?: boolean | AddEventListenerOptions
	) {
		let DOMUtilsContext = this;
		if (target == null) {
			return;
		}
		if (typeof target === "string") {
			target = PopsCore.document.querySelector(target) as HTMLElement;
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
		handler: (event: PopsDOMUtils_Event["keydown"]) => void,
		option?: boolean | AddEventListenerOptions
	) {
		let DOMUtilsContext = this;
		if (target == null) {
			return;
		}
		if (typeof target === "string") {
			target = PopsCore.document.querySelector(target) as HTMLElement;
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
		handler: (event: PopsDOMUtils_Event["keypress"]) => void,
		option?: boolean | AddEventListenerOptions
	) {
		let DOMUtilsContext = this;
		if (target == null) {
			return;
		}
		if (typeof target === "string") {
			target = PopsCore.document.querySelector(target) as HTMLElement;
		}
		DOMUtilsContext.on(target, "keypress", null, handler, option);
	}

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
	preventEvent(
		element: HTMLElement,
		eventNameList?: string | string[],
		capture?: boolean
	): boolean;
	preventEvent(
		element: HTMLElement | Event,
		eventNameList: string | string[] = [],
		capture?: boolean
	): boolean | undefined {
		function stopEvent(event: Event) {
			/* 阻止事件的默认行为发生。例如，当点击一个链接时，浏览器会默认打开链接的URL */
			event?.preventDefault();
			/* 停止事件的传播，阻止它继续向更上层的元素冒泡，事件将不会再传播给其他的元素 */
			event?.stopPropagation();
			/* 阻止事件传播，并且还能阻止元素上的其他事件处理程序被触发 */
			event?.stopImmediatePropagation();
			return false;
		}
		if (arguments.length === 1) {
			/* 直接阻止事件 */
			return stopEvent(arguments[0]);
		} else {
			/* 添加对应的事件来阻止触发 */
			if (typeof eventNameList === "string") {
				eventNameList = [eventNameList];
			}
			eventNameList.forEach((eventName) => {
				(element as HTMLElement).addEventListener(eventName, stopEvent, {
					capture: Boolean(capture),
				});
			});
		}
	}
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
	selector<K extends keyof HTMLElementTagNameMap>(
		selector: K
	): HTMLElementTagNameMap[K] | undefined;
	selector<E extends Element = Element>(selector: string): E | undefined;
	selector<E extends Element = Element>(selector: string) {
		return this.selectorAll<E>(selector)[0];
	}
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
	selectorAll<K extends keyof HTMLElementTagNameMap>(
		selector: K
	): HTMLElementTagNameMap[K][];
	selectorAll<E extends Element = Element>(selector: string): E[];
	selectorAll<E extends Element = Element>(selector: string) {
		selector = selector.trim();
		if (selector.match(/[^\s]{1}:empty$/gi)) {
			// empty 语法
			selector = selector.replace(/:empty$/gi, "");
			return Array.from(PopsCore.document.querySelectorAll<E>(selector)).filter(
				($ele) => {
					return $ele?.innerHTML?.trim() === "";
				}
			);
		} else if (
			selector.match(/[^\s]{1}:contains\("(.*)"\)$/i) ||
			selector.match(/[^\s]{1}:contains\('(.*)'\)$/i)
		) {
			// contains 语法
			let textMatch = selector.match(/:contains\(("|')(.*)("|')\)$/i);
			let text = textMatch![2];
			selector = selector.replace(/:contains\(("|')(.*)("|')\)$/gi, "");
			return Array.from(PopsCore.document.querySelectorAll<E>(selector)).filter(
				($ele) => {
					// @ts-ignore
					return ($ele?.textContent || $ele?.innerText)?.includes(text);
				}
			);
		} else if (
			selector.match(/[^\s]{1}:regexp\("(.*)"\)$/i) ||
			selector.match(/[^\s]{1}:regexp\('(.*)'\)$/i)
		) {
			// regexp 语法
			let textMatch = selector.match(/:regexp\(("|')(.*)("|')\)$/i);
			let pattern = textMatch![2];
			let flagMatch = pattern.match(/("|'),[\s]*("|')([igm]{0,3})$/i);
			let flags = "";
			if (flagMatch) {
				pattern = pattern.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi, "");
				flags = flagMatch[3];
			}
			let regexp = new RegExp(pattern, flags);
			selector = selector.replace(/:regexp\(("|')(.*)("|')\)$/gi, "");
			return Array.from(PopsCore.document.querySelectorAll<E>(selector)).filter(
				($ele) => {
					// @ts-ignore
					return Boolean(($ele?.textContent || $ele?.innerText)?.match(regexp));
				}
			);
		} else {
			// 普通语法
			return Array.from(PopsCore.document.querySelectorAll<E>(selector));
		}
	}
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
	matches(
		$el: HTMLElement | Element | null | undefined,
		selector: string
	): boolean {
		selector = selector.trim();
		if ($el == null) {
			return false;
		}

		if (selector.match(/[^\s]{1}:empty$/gi)) {
			// empty 语法
			selector = selector.replace(/:empty$/gi, "");
			return $el.matches(selector) && $el?.innerHTML?.trim() === "";
		} else if (
			selector.match(/[^\s]{1}:contains\("(.*)"\)$/i) ||
			selector.match(/[^\s]{1}:contains\('(.*)'\)$/i)
		) {
			// contains 语法
			let textMatch = selector.match(/:contains\(("|')(.*)("|')\)$/i);
			let text = textMatch![2];
			selector = selector.replace(/:contains\(("|')(.*)("|')\)$/gi, "");
			// @ts-ignore
			let content = $el?.textContent || $el?.innerText;
			if (typeof content !== "string") {
				content = "";
			}
			return $el.matches(selector) && content?.includes(text);
		} else if (
			selector.match(/[^\s]{1}:regexp\("(.*)"\)$/i) ||
			selector.match(/[^\s]{1}:regexp\('(.*)'\)$/i)
		) {
			// regexp 语法
			let textMatch = selector.match(/:regexp\(("|')(.*)("|')\)$/i);
			let pattern = textMatch![2];
			let flagMatch = pattern.match(/("|'),[\s]*("|')([igm]{0,3})$/i);
			let flags = "";
			if (flagMatch) {
				pattern = pattern.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi, "");
				flags = flagMatch[3];
			}
			let regexp = new RegExp(pattern, flags);
			selector = selector.replace(/:regexp\(("|')(.*)("|')\)$/gi, "");
			// @ts-ignore
			let content = $el?.textContent || $el?.innerText;
			if (typeof content !== "string") {
				content = "";
			}
			return $el.matches(selector) && Boolean(content?.match(regexp));
		} else {
			// 普通语法
			return $el.matches(selector);
		}
	}
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
	closest<K extends keyof HTMLElementTagNameMap>(
		$el: HTMLElement | Element,
		selector: string
	): HTMLElementTagNameMap[K] | null;
	closest<E extends Element = Element>(
		$el: HTMLElement | Element,
		selector: string
	): E | null;
	closest<E extends Element = Element>(
		$el: HTMLElement | Element,
		selector: string
	): E | null {
		selector = selector.trim();

		if (selector.match(/[^\s]{1}:empty$/gi)) {
			// empty 语法
			selector = selector.replace(/:empty$/gi, "");
			let $closest = $el?.closest<E>(selector);
			if ($closest && $closest?.innerHTML?.trim() === "") {
				return $closest;
			}
			return null;
		} else if (
			selector.match(/[^\s]{1}:contains\("(.*)"\)$/i) ||
			selector.match(/[^\s]{1}:contains\('(.*)'\)$/i)
		) {
			// contains 语法
			let textMatch = selector.match(/:contains\(("|')(.*)("|')\)$/i);
			let text = textMatch![2];
			selector = selector.replace(/:contains\(("|')(.*)("|')\)$/gi, "");
			let $closest = $el?.closest<E>(selector);
			if ($closest) {
				// @ts-ignore
				let content = $el?.textContent || $el?.innerText;
				if (typeof content === "string" && content.includes(text)) {
					return $closest;
				}
			}
			return null;
		} else if (
			selector.match(/[^\s]{1}:regexp\("(.*)"\)$/i) ||
			selector.match(/[^\s]{1}:regexp\('(.*)'\)$/i)
		) {
			// regexp 语法
			let textMatch = selector.match(/:regexp\(("|')(.*)("|')\)$/i);
			let pattern = textMatch![2];
			let flagMatch = pattern.match(/("|'),[\s]*("|')([igm]{0,3})$/i);
			let flags = "";
			if (flagMatch) {
				pattern = pattern.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi, "");
				flags = flagMatch[3];
			}
			let regexp = new RegExp(pattern, flags);
			selector = selector.replace(/:regexp\(("|')(.*)("|')\)$/gi, "");
			let $closest = $el?.closest<E>(selector);
			if ($closest) {
				// @ts-ignore
				let content = $el?.textContent || $el?.innerText;
				if (typeof content === "string" && content.match(regexp)) {
					return $closest;
				}
			}
			return null;
		} else {
			// 普通语法
			let $closest = $el?.closest<E>(selector);
			return $closest;
		}
	}
}

class PopsDOMUtils extends PopsDOMUtilsEvent {
	/** 获取 animationend 在各个浏览器的兼容名 */
	getAnimationEndNameList() {
		return [
			"webkitAnimationEnd",
			"mozAnimationEnd",
			"MSAnimationEnd",
			"oanimationend",
			"animationend",
		];
	}
	/** 获取 transitionend 在各个浏览器的兼容名 */
	getTransitionEndNameList() {
		return [
			"webkitTransitionEnd",
			"mozTransitionEnd",
			"MSTransitionEnd",
			"otransitionend",
			"transitionend",
		];
	}
	/**
	 * 实现jQuery中的$().offset();
	 * @param element
	 * @param calcScroll 计算滚动距离
	 */
	offset(element: HTMLElement, calcScroll: boolean = true) {
		let rect = element.getBoundingClientRect();
		let win = element.ownerDocument.defaultView;
		let resultRect = new DOMRect(
			calcScroll
				? parseFloat((rect.left + (win?.pageXOffset || 0)).toString())
				: rect.left,
			calcScroll
				? parseFloat((rect.top + (win?.pageYOffset || 0)).toString())
				: rect.top,
			rect.width,
			rect.height
		);
		return resultRect;
	}
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
	width(
		element: HTMLElement | string | Window | Document | typeof globalThis,
		isShow?: boolean,
		parent?: HTMLElement | ShadowRoot
	): number;
	width(
		element: HTMLElement | string | Window | Document | typeof globalThis,
		isShow: boolean = false,
		parent?: HTMLElement | ShadowRoot
	) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = PopsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (popsUtils.isWin(element)) {
			return PopsCore.window.document.documentElement.clientWidth;
		}
		if ((element as HTMLElement).nodeType === 9) {
			/* Document文档节点 */
			element = element as Document;
			return Math.max(
				element.body.scrollWidth,
				element.documentElement.scrollWidth,
				element.body.offsetWidth,
				element.documentElement.offsetWidth,
				element.documentElement.clientWidth
			);
		}
		if (isShow || (!isShow && popsDOMUtils.isShow(element as HTMLElement))) {
			/* 已显示 */
			/* 不从style中获取对应的宽度，因为可能使用了class定义了width !important */
			element = element as HTMLElement;
			/* 如果element.style.width为空  则从css里面获取是否定义了width信息如果定义了 则读取css里面定义的宽度width */
			if (
				parseFloat(popsDOMUtils.getStyleValue(element, "width").toString()) > 0
			) {
				return parseFloat(
					popsDOMUtils.getStyleValue(element, "width").toString()
				);
			}

			/* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetWidth来进行计算 */
			if (element.offsetWidth > 0) {
				let borderLeftWidth = popsDOMUtils.getStyleValue(
					element,
					"borderLeftWidth"
				);
				let borderRightWidth = popsDOMUtils.getStyleValue(
					element,
					"borderRightWidth"
				);
				let paddingLeft = popsDOMUtils.getStyleValue(element, "paddingLeft");
				let paddingRight = popsDOMUtils.getStyleValue(element, "paddingRight");
				let backHeight =
					parseFloat(element.offsetWidth.toString()) -
					parseFloat(borderLeftWidth.toString()) -
					parseFloat(borderRightWidth.toString()) -
					parseFloat(paddingLeft.toString()) -
					parseFloat(paddingRight.toString());
				return parseFloat(backHeight.toString());
			}
			return 0;
		} else {
			/* 未显示 */
			element = element as HTMLElement;
			let { cloneNode, recovery } = popsDOMUtils.showElement(element, parent);
			let width = DOMUtilsContext.width(cloneNode, true, parent);
			recovery();
			return width;
		}
	}

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
	height(
		element: HTMLElement | string | Window | Document | typeof globalThis,
		isShow?: boolean,
		parent?: HTMLElement | ShadowRoot
	): number;
	height(
		element: HTMLElement | string | Window | Document | typeof globalThis,
		isShow: boolean = false,
		parent?: HTMLElement | ShadowRoot
	) {
		let DOMUtilsContext = this;
		if (popsUtils.isWin(element)) {
			return PopsCore.window.document.documentElement.clientHeight;
		}
		if (typeof element === "string") {
			element = PopsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if ((element as Document).nodeType === 9) {
			element = element as Document;
			/* Document文档节点 */
			return Math.max(
				element.body.scrollHeight,
				element.documentElement.scrollHeight,
				element.body.offsetHeight,
				element.documentElement.offsetHeight,
				element.documentElement.clientHeight
			);
		}
		if (isShow || (!isShow && popsDOMUtils.isShow(element as HTMLElement))) {
			element = element as HTMLElement;
			/* 已显示 */
			/* 从style中获取对应的高度，因为可能使用了class定义了width !important */
			/* 如果element.style.height为空  则从css里面获取是否定义了height信息如果定义了 则读取css里面定义的高度height */
			if (
				parseFloat(popsDOMUtils.getStyleValue(element, "height").toString()) > 0
			) {
				return parseFloat(
					popsDOMUtils.getStyleValue(element, "height").toString()
				);
			}

			/* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetHeight来进行计算 */
			if (element.offsetHeight > 0) {
				let borderTopWidth = popsDOMUtils.getStyleValue(
					element,
					"borderTopWidth"
				);
				let borderBottomWidth = popsDOMUtils.getStyleValue(
					element,
					"borderBottomWidth"
				);
				let paddingTop = popsDOMUtils.getStyleValue(element, "paddingTop");
				let paddingBottom = popsDOMUtils.getStyleValue(
					element,
					"paddingBottom"
				);
				let backHeight =
					parseFloat(element.offsetHeight.toString()) -
					parseFloat(borderTopWidth.toString()) -
					parseFloat(borderBottomWidth.toString()) -
					parseFloat(paddingTop.toString()) -
					parseFloat(paddingBottom.toString());
				return parseFloat(backHeight.toString());
			}
			return 0;
		} else {
			/* 未显示 */
			element = element as HTMLElement;
			let { cloneNode, recovery } = popsDOMUtils.showElement(element, parent);
			let height = DOMUtilsContext.height(cloneNode, true, parent);
			recovery();
			return height;
		}
	}
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
	outerWidth(
		element: HTMLElement | string | Window | Document,
		isShow?: boolean,
		parent?: HTMLElement | ShadowRoot
	): number;
	outerWidth(
		element: HTMLElement | string | Window | Document,
		isShow: boolean = false,
		parent?: HTMLElement | ShadowRoot
	) {
		let DOMUtilsContext = this;
		if (popsUtils.isWin(element)) {
			return PopsCore.window.innerWidth;
		}
		if (typeof element === "string") {
			element = PopsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		element = element as HTMLElement;
		if (isShow || (!isShow && popsDOMUtils.isShow(element))) {
			let style = getComputedStyle(element, null);
			let marginLeft = popsDOMUtils.getStyleValue(style, "marginLeft");
			let marginRight = popsDOMUtils.getStyleValue(style, "marginRight");
			return element.offsetWidth + marginLeft + marginRight;
		} else {
			let { cloneNode, recovery } = popsDOMUtils.showElement(element, parent);
			let outerWidth = DOMUtilsContext.outerWidth(cloneNode, true, parent);
			recovery();
			return outerWidth;
		}
	}
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
	outerHeight(
		element: HTMLElement | string | Window,
		isShow?: boolean,
		parent?: HTMLElement | ShadowRoot
	): number;
	outerHeight(
		element: HTMLElement | string | Window,
		isShow: boolean = false,
		parent?: HTMLElement | ShadowRoot
	): number {
		let DOMUtilsContext = this;
		if (popsUtils.isWin(element)) {
			return PopsCore.window.innerHeight;
		}
		if (typeof element === "string") {
			element = PopsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			// @ts-ignore
			return;
		}
		element = element as HTMLElement;
		if (isShow || (!isShow && popsDOMUtils.isShow(element))) {
			let style = getComputedStyle(element, null);
			let marginTop = popsDOMUtils.getStyleValue(style, "marginTop");
			let marginBottom = popsDOMUtils.getStyleValue(style, "marginBottom");
			return element.offsetHeight + marginTop + marginBottom;
		} else {
			let { cloneNode, recovery } = popsDOMUtils.showElement(element, parent);
			let outerHeight = DOMUtilsContext.outerHeight(cloneNode, true, parent);
			recovery();
			return outerHeight;
		}
	}
	/**
	 * 添加className
	 * @param element 目标元素
	 * @param className className属性
	 */
	addClassName(element: Element | undefined | null, className: string) {
		if (element == null) {
			return;
		}
		if (typeof className !== "string") {
			return;
		}
		if (className.trim() === "") {
			return;
		}
		element.classList.add(className);
	}
	/**
	 * 删除className
	 * @param element 目标元素
	 * @param className className属性
	 */
	removeClassName(element: Element | undefined | null, className: string) {
		if (element == null) {
			return;
		}
		if (typeof className !== "string") {
			return;
		}
		if (className.trim() === "") {
			return;
		}
		element.classList.remove(className);
	}
	/**
	 * 判断元素是否包含某个className
	 * @param element 目标元素
	 * @param className className属性
	 */
	containsClassName(
		element: HTMLElement | undefined | null,
		className: string
	): boolean {
		if (element == null) {
			return false;
		}
		if (typeof className !== "string") {
			return false;
		}
		if (className.trim() === "") {
			return false;
		}
		return element.classList.contains(className);
	}
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
	css(
		element: HTMLElement | string,
		property: keyof CSSStyleDeclaration
	): string;
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
	css(
		element: HTMLElement | string,
		property: keyof CSSStyleDeclaration & string,
		value: string | number
	): string;
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
	css(
		element: HTMLElement | string,
		property:
			| {
					[P in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[P];
			  }
			| {
					[key: string]: string | number;
			  }
	): string;
	css(
		element: HTMLElement | string,
		property:
			| keyof CSSStyleDeclaration
			| string
			| {
					[P in keyof CSSStyleDeclaration]?:
						| string
						| number
						| CSSStyleDeclaration[P];
			  },
		value?: string | number
	) {
		/**
		 * 把纯数字没有px的加上
		 */
		function handlePixe(propertyName: string, propertyValue: string | number) {
			let allowAddPixe = [
				"width",
				"height",
				"top",
				"left",
				"right",
				"bottom",
				"font-size",
			];
			if (typeof propertyValue === "number") {
				propertyValue = propertyValue.toString();
			}
			if (
				typeof propertyValue === "string" &&
				allowAddPixe.includes(propertyName) &&
				propertyValue.match(/[0-9]$/gi)
			) {
				propertyValue = propertyValue + "px";
			}
			return propertyValue;
		}
		if (typeof element === "string") {
			element = PopsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		let setStyleProperty = (
			propertyName: string,
			propertyValue: string | number
		) => {
			if (
				typeof propertyValue === "string" &&
				propertyValue.trim().endsWith("!important")
			) {
				propertyValue = propertyValue
					.trim()
					.replace(/!important$/gi, "")
					.trim();
				element.style.setProperty(propertyName, propertyValue, "important");
			} else {
				propertyValue = handlePixe(propertyName, propertyValue);
				element.style.setProperty(propertyName, propertyValue);
			}
		};
		if (typeof property === "string") {
			if (value == null) {
				return getComputedStyle(element).getPropertyValue(property);
			} else {
				setStyleProperty(property, value);
			}
		} else if (typeof property === "object") {
			for (let prop in property) {
				let value = property[prop];
				setStyleProperty(prop, value!);
			}
		}
	}
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
		property?:
			| ({
					[P in keyof HTMLElementTagNameMap[K]]?: HTMLElementTagNameMap[K][P] extends
						| string
						| boolean
						| number
						? HTMLElementTagNameMap[K][P]
						: never;
			  } & {
					[key: string]: any;
			  })
			| string,
		/** 自定义属性 */
		attributes?: PopsDOMUtilsCreateElementAttributesMap
	): HTMLElementTagNameMap[K] {
		let tempElement = PopsCore.document.createElement(tagName);
		if (typeof property === "string") {
			PopsSafeUtils.setSafeHTML(tempElement, property);
			return tempElement;
		}
		if (property == null) {
			property = {};
		}
		if (attributes == null) {
			attributes = {};
		}
		Object.keys(property).forEach((key) => {
			let value = property[key];
			if (key === "innerHTML") {
				PopsSafeUtils.setSafeHTML(tempElement, value);
				return;
			}
			// @ts-ignore
			tempElement[key] = value;
		});
		Object.keys(attributes).forEach((key) => {
			let value = attributes[key];
			if (typeof value === "object") {
				/* object转字符串 */
				value = JSON.stringify(value);
			} else if (typeof value === "function") {
				/* function转字符串 */
				value = value.toString();
			}
			tempElement.setAttribute(key, value);
		});
		return tempElement;
	}
	/**
	 * 字符串转HTMLElement
	 * @param elementString
	 * @returns
	 */
	parseTextToDOM<R extends HTMLElement>(elementString: string): R {
		/* 去除前后的换行和空格 */
		elementString = elementString
			.replace(/^[\n|\s]*/g, "")
			.replace(/[\n|\s]*$/g, "");
		let targetElement = this.createElement("div", {
			innerHTML: elementString,
		});
		return targetElement.firstChild as any as R;
	}
	/**
	 * 获取文字的位置信息
	 * @param input 输入框
	 * @param selectionStart 起始位置
	 * @param selectionEnd 结束位置
	 * @param debug 是否是调试模式
	 * + true 不删除临时节点元素
	 * + false 删除临时节点元素
	 */
	getTextBoundingRect(
		input: HTMLInputElement | HTMLTextAreaElement,
		selectionStart: number | string,
		selectionEnd: number | string,
		debug: boolean
	): DOMRect {
		// Basic parameter validation
		if (!input || !("value" in input)) return input;
		if (typeof selectionStart == "string")
			selectionStart = parseFloat(selectionStart);
		if (typeof selectionStart != "number" || isNaN(selectionStart)) {
			selectionStart = 0;
		}
		if (selectionStart < 0) selectionStart = 0;
		else selectionStart = Math.min(input.value.length, selectionStart);
		if (typeof selectionEnd == "string")
			selectionEnd = parseFloat(selectionEnd);
		if (
			typeof selectionEnd != "number" ||
			isNaN(selectionEnd) ||
			selectionEnd < selectionStart
		) {
			selectionEnd = selectionStart;
		}
		if (selectionEnd < 0) selectionEnd = 0;
		else selectionEnd = Math.min(input.value.length, selectionEnd);

		// If available (thus IE), use the createTextRange method
		if (typeof (input as any).createTextRange == "function") {
			var range = (input as any).createTextRange();
			range.collapse(true);
			range.moveStart("character", selectionStart);
			range.moveEnd("character", selectionEnd - selectionStart);
			return range.getBoundingClientRect();
		}
		// createTextRange is not supported, create a fake text range
		var offset = getInputOffset(),
			topPos = offset.top,
			leftPos = offset.left,
			width = getInputCSS("width", true),
			height = getInputCSS("height", true);

		// Styles to simulate a node in an input field
		var cssDefaultStyles = "white-space:pre;padding:0;margin:0;",
			listOfModifiers = [
				"direction",
				"font-family",
				"font-size",
				"font-size-adjust",
				"font-variant",
				"font-weight",
				"font-style",
				"letter-spacing",
				"line-height",
				"text-align",
				"text-indent",
				"text-transform",
				"word-wrap",
				"word-spacing",
			];
		// @ts-ignore
		topPos += getInputCSS<number>("padding-top", true);
		// @ts-ignore
		topPos += getInputCSS("border-top-width", true);
		// @ts-ignore
		leftPos += getInputCSS("padding-left", true);
		// @ts-ignore
		leftPos += getInputCSS("border-left-width", true);
		leftPos += 1; //Seems to be necessary

		for (var i = 0; i < listOfModifiers.length; i++) {
			var property = listOfModifiers[i];
			// @ts-ignore
			cssDefaultStyles += property + ":" + getInputCSS(property) + ";";
		}
		// End of CSS variable checks
		// 不能为空，不然获取不到高度
		var text = input.value || "G",
			textLen = text.length,
			fakeClone = document.createElement("div");
		if (selectionStart > 0) appendPart(0, selectionStart);
		var fakeRange = appendPart(selectionStart, selectionEnd);
		if (textLen > selectionEnd) appendPart(selectionEnd, textLen);

		// Styles to inherit the font styles of the element
		fakeClone.style.cssText = cssDefaultStyles;

		// Styles to position the text node at the desired position
		fakeClone.style.position = "absolute";
		fakeClone.style.top = topPos + "px";
		fakeClone.style.left = leftPos + "px";
		fakeClone.style.width = width + "px";
		fakeClone.style.height = height + "px";
		PopsCore.document.body.appendChild(fakeClone);
		var returnValue = fakeRange.getBoundingClientRect(); //Get rect

		if (!debug) fakeClone.parentNode!.removeChild(fakeClone); //Remove temp
		return returnValue;

		// Local functions for readability of the previous code
		/**
		 *
		 * @param start
		 * @param end
		 */
		function appendPart(start: number, end: number): HTMLSpanElement {
			var span = document.createElement("span");
			span.style.cssText = cssDefaultStyles; //Force styles to prevent unexpected results
			span.textContent = text.substring(start, end);
			fakeClone.appendChild(span);
			return span;
		}
		// Computing offset position
		function getInputOffset() {
			var body = document.body,
				win = document.defaultView,
				docElem = document.documentElement,
				box = document.createElement("div");
			box.style.paddingLeft = box.style.width = "1px";
			body.appendChild(box);
			var isBoxModel = box.offsetWidth == 2;
			body.removeChild(box);
			// @ts-ignore
			box = input.getBoundingClientRect();
			var clientTop = docElem.clientTop || body.clientTop || 0,
				clientLeft = docElem.clientLeft || body.clientLeft || 0,
				scrollTop =
					// @ts-ignore
					win.pageYOffset ||
					(isBoxModel && docElem.scrollTop) ||
					body.scrollTop,
				scrollLeft =
					// @ts-ignore
					win.pageXOffset ||
					(isBoxModel && docElem.scrollLeft) ||
					body.scrollLeft;
			return {
				// @ts-ignore
				top: box.top + scrollTop - clientTop,
				// @ts-ignore
				left: box.left + scrollLeft - clientLeft,
			};
		}
		/**
		 *
		 * @param prop
		 * @param isnumber
		 * @returns
		 */
		function getInputCSS(prop: string, isnumber: boolean) {
			var val = PopsCore.document
				.defaultView!.getComputedStyle(input, null)
				.getPropertyValue(prop);
			// @ts-ignore
			return isnumber ? parseFloat(val) : val;
		}
	}
	/**
	 * 使用className来隐藏元素
	 * @param ele
	 * @param isImportant 是否使用!important
	 */
	cssHide(ele: Element | null, isImportant = false) {
		if (ele == null) {
			return;
		}
		if (isImportant) {
			popsDOMUtils.addClassName(ele, PopsCommonCSSClassName.hideImportant);
		} else {
			popsDOMUtils.addClassName(ele, PopsCommonCSSClassName.hide);
		}
	}
	/**
	 * cssHide的反向使用
	 * @param ele
	 */
	cssShow(ele: Element | null) {
		if (ele == null) {
			return;
		}
		popsDOMUtils.removeClassName(ele, PopsCommonCSSClassName.hide);
		popsDOMUtils.removeClassName(ele, PopsCommonCSSClassName.hideImportant);
	}
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
	parseHTML<T1 extends boolean, T2 extends boolean>(
		html: string,
		useParser?: T1,
		isComplete?: T2
	): ParseHTMLReturnType<T1, T2>;
	parseHTML(html: string, useParser = false, isComplete = false) {
		function parseHTMLByDOMParser() {
			let parser = new DOMParser();
			if (isComplete) {
				return parser.parseFromString(html, "text/html");
			} else {
				return parser.parseFromString(html, "text/html").body.firstChild;
			}
		}
		function parseHTMLByCreateDom() {
			let tempDIV = PopsCore.document.createElement("div");
			PopsSafeUtils.setSafeHTML(tempDIV, html);
			if (isComplete) {
				return tempDIV;
			} else {
				return tempDIV.firstChild;
			}
		}
		if (useParser) {
			return parseHTMLByDOMParser();
		} else {
			return parseHTMLByCreateDom();
		}
	}

	/**
	 * 函数在元素内部末尾添加子元素或HTML字符串
	 * @param element 目标元素
	 * @param content 子元素或HTML字符串
	 * @example
	 * // 元素a.xx的内部末尾添加一个元素
	 * DOMUtils.append(document.querySelector("a.xx"),document.querySelector("b.xx"))
	 * DOMUtils.append("a.xx","'<b class="xx"></b>")
	 * */
	append(
		element: Element | Node | ShadowRoot | HTMLElement | string,
		content:
			| HTMLElement
			| string
			| (HTMLElement | string | Element)[]
			| NodeList
	) {
		if (typeof element === "string") {
			element = PopsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		function elementAppendChild(ele: HTMLElement, text: HTMLElement | string) {
			if (typeof content === "string") {
				ele.insertAdjacentHTML(
					"beforeend",
					PopsSafeUtils.getSafeHTML(text as string)
				);
			} else {
				ele.appendChild(text as HTMLElement);
			}
		}
		if (Array.isArray(content) || content instanceof NodeList) {
			/* 数组 */
			let fragment = PopsCore.document.createDocumentFragment();
			content.forEach((ele) => {
				if (typeof ele === "string") {
					ele = this.parseHTML(ele, true, false);
				}
				fragment.appendChild(ele);
			});
			element.appendChild(fragment);
		} else {
			elementAppendChild(element as HTMLElement, content);
		}
	}
	/**
	 * 把元素标签添加到head内
	 */
	appendHead($ele: HTMLElement) {
		if (PopsCore.document.head) {
			PopsCore.document.head.appendChild($ele);
		} else {
			PopsCore.document.documentElement.appendChild($ele);
		}
	}
	/**
	 * 把元素添加进body内
	 * @param $ele
	 */
	appendBody($ele: HTMLElement) {
		if (PopsCore.document.body) {
			PopsCore.document.body.appendChild($ele);
		} else {
			PopsCore.document.documentElement.appendChild($ele);
		}
	}

	/**
	 * 判断元素是否已显示或已连接
	 * @param element
	 */
	isShow(element: HTMLElement) {
		return Boolean(element.getClientRects().length);
	}
	/**
	 * 用于显示元素并获取它的高度宽度等其它属性
	 * @param $ele
	 * @param parent 父元素
	 */
	showElement($ele: HTMLElement, ownParent?: Node) {
		/** 克隆元素 */
		let $cloneNode = $ele.cloneNode(true) as HTMLElement;
		$cloneNode.setAttribute(
			"style",
			"visibility: hidden !important;display:block !important;"
		);
		let $parent: Node = PopsCore.document.documentElement;
		// 这里需要的是先获取元素的父节点，把元素同样添加到父节点中
		let $root = $ele.getRootNode();
		if (ownParent == null) {
			if ($root == $ele) {
				// 未添加到任意节点中，那么直接添加到页面中去
				$parent = PopsCore.document.documentElement;
			} else {
				// 添加到父节点中
				$parent = $root;
			}
		} else {
			// 自定义的父节点
			$parent = ownParent;
		}
		$parent.appendChild($cloneNode);
		return {
			/**
			 * 强制显示的克隆的元素
			 */
			cloneNode: $cloneNode,
			/**
			 * 恢复修改的style
			 */
			recovery() {
				$cloneNode.remove();
			},
		};
	}
	/**
	 * 获取元素上的Float格式的属性px
	 * @param element
	 * @param styleName style名
	 */
	getStyleValue(element: HTMLElement | CSSStyleDeclaration, styleName: string) {
		let view = null;
		let styles = null;
		if (element instanceof CSSStyleDeclaration) {
			/* 直接就获取了style属性 */
			styles = element;
		} else {
			view = element.ownerDocument.defaultView;
			if (!view || !view.opener) {
				view = window;
			}
			styles = view.getComputedStyle(element);
		}
		let value = parseFloat(styles[styleName as any]);
		if (isNaN(value)) {
			return 0;
		} else {
			return value;
		}
	}
	/**
	 * 在元素前面添加兄弟元素或HTML字符串
	 * @param element 目标元素
	 * @param content 兄弟元素或HTML字符串
	 * @example
	 * // 元素a.xx前面添加一个元素
	 * DOMUtils.before(document.querySelector("a.xx"),document.querySelector("b.xx"))
	 * DOMUtils.before("a.xx","'<b class="xx"></b>")
	 * */
	before(
		element: HTMLElement | Element | string,
		content: HTMLElement | string
	) {
		if (typeof element === "string") {
			element = PopsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (typeof content === "string") {
			element.insertAdjacentHTML(
				"beforebegin",
				PopsSafeUtils.getSafeHTML(content)
			);
		} else {
			element!.parentElement!.insertBefore(content, element);
		}
	}
	/**
	 * 在元素后面添加兄弟元素或HTML字符串
	 * @param element 目标元素
	 * @param content 兄弟元素或HTML字符串
	 * @example
	 * // 元素a.xx后面添加一个元素
	 * DOMUtils.after(document.querySelector("a.xx"),document.querySelector("b.xx"))
	 * DOMUtils.after("a.xx","'<b class="xx"></b>")
	 * */
	after(
		element: HTMLElement | Element | string,
		content: HTMLElement | string
	) {
		if (typeof element === "string") {
			element = PopsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (typeof content === "string") {
			element.insertAdjacentHTML(
				"afterend",
				PopsSafeUtils.getSafeHTML(content)
			);
		} else {
			element!.parentElement!.insertBefore(content, element.nextSibling);
		}
	}
	/**
	 * 获取CSS Rule
	 * @param sheet
	 * @returns
	 */
	getKeyFrames(sheet: CSSStyleSheet) {
		let result = {};
		Object.keys(sheet.cssRules).forEach((key) => {
			if (
				(sheet.cssRules as any)[key].type === 7 &&
				(sheet.cssRules as any)[key].name.startsWith("pops-anim-")
			) {
				(result as any)[(sheet.cssRules as any)[key].name] = (
					sheet.cssRules as any
				)[key];
			}
		});
		return result;
	}
	/**
	 * 颜色转换函数
	 * @method hexToRgb hex 颜色转 rgb 颜色
	 * @method rgbToHex rgb 颜色转 Hex 颜色
	 * @method getDarkColor 加深颜色值
	 * @method getLightColor 变浅颜色值
	 */
	calcColor() {
		function useChangeColor() {
			/**
			 * hex 颜色转 rgb 颜色
			 */
			const hexToRgb = (
				/**
				 * hex 颜色值
				 */
				str: string
			): any => {
				let hexs: any = "";
				let reg = /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
				if (!reg.test(str)) {
					console.warn("输入错误的hex");
					return "";
				}
				str = str.replace("#", "");
				hexs = str.match(/../g);
				for (let i = 0; i < 3; i++) hexs[i] = parseInt(hexs[i], 16);
				return hexs;
			};

			/**
			 * rgb转hex
			 */
			const rgbToHex = (
				/**
				 * 红色
				 */
				r: any,
				/**
				 * 绿色
				 */
				g: any,
				/**
				 * 蓝色
				 */
				b: any
			): string => {
				let reg = /^\d{1,3}$/;
				if (!reg.test(r) || !reg.test(g) || !reg.test(b)) {
					console.warn("输入错误的rgb颜色值");
					return "";
				}
				let hexs = [r.toString(16), g.toString(16), b.toString(16)];
				for (let i = 0; i < 3; i++)
					if (hexs[i].length == 1) hexs[i] = `0${hexs[i]}`;
				return `#${hexs.join("")}`;
			};

			/**
			 * 获取深色
			 */
			const getDarkColor = (
				/**
				 * 颜色值字符串
				 */
				color: string,
				/**
				 * 加深的程度，限0-1之间
				 */
				level: number
			): string => {
				let reg = /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
				if (!reg.test(color)) {
					console.warn("输入错误的hex颜色值");
					return "";
				}
				let rgb = useChangeColor().hexToRgb(color);
				for (let i = 0; i < 3; i++) rgb[i] = Math.floor(rgb[i] * (1 - level));
				return useChangeColor().rgbToHex(rgb[0], rgb[1], rgb[2]);
			};

			/**
			 * 获取颜色变浅后的颜色值
			 */
			const getLightColor = (
				/**
				 * 颜色值字符串
				 */
				color: string,
				/**
				 * 加深的程度，限0-1之间
				 */
				level: number
			): string => {
				let reg = /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
				if (!reg.test(color)) {
					console.warn("输入错误的hex颜色值");
					return "";
				}
				let rgb = useChangeColor().hexToRgb(color);
				for (let i = 0; i < 3; i++)
					rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);
				return useChangeColor().rgbToHex(rgb[0], rgb[1], rgb[2]);
			};
			return {
				hexToRgb,
				rgbToHex,
				getDarkColor,
				getLightColor,
			};
		}
		return useChangeColor();
	}
}

const popsDOMUtils = new PopsDOMUtils();
export { popsDOMUtils };
