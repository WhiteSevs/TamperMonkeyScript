import { log } from "@/env";
import { unsafeWindow } from "ViteGM";

type HookEventListenerHandler<T> = (
	target: T,
	eventName: string,
	listener: Function,
	option: boolean | AddEventListenerOptions | undefined
) => Function | void;

export const Hook = {
	$data: {
		document_addEventListener: <HookEventListenerHandler<Document>[]>[],
		element_addEventListener: <HookEventListenerHandler<Element>[]>[],
	},
	/**
	 * 劫持 document.addEventListener
	 * @param handler
	 */
	document_addEventListener(handler: HookEventListenerHandler<Document>) {
		this.$data.document_addEventListener.push(handler);
		log.info("document.addEventListener hook新增劫持判断回调");
		if (this.$data.document_addEventListener.length > 1) {
			// 2,3,...
			return;
		}
		const that = this;
		/** 存储回调函数 */
		let weakMap = new WeakMap<
			Function,
			{
				eventName: string;
				fn: Function;
				options: AddEventListenerOptions | boolean | undefined;
			}
		>();

		const originAddEventListener = unsafeWindow.document.addEventListener;
		const originRemoveEventListener = unsafeWindow.document.removeEventListener;
		unsafeWindow.document.addEventListener = function (
			this: Document,
			...args: any[]
		) {
			/** 目标元素 */
			let target = this;
			/** 事件名 */
			let eventName = args[0] as string;
			/** 回调函数 */
			let listener = args[1] as Function;
			/** 监听配置 */
			let options = args[2] as boolean | AddEventListenerOptions | undefined;

			for (
				let index = 0;
				index < that.$data.document_addEventListener.length;
				index++
			) {
				const callback = that.$data.document_addEventListener[index];
				const result = callback(target, eventName, listener, options);
				if (typeof result === "function") {
					args[1] = result;
					weakMap.set(listener, {
						eventName: eventName,
						fn: result,
						options: options,
					});
				}
			}
			return Reflect.apply(originAddEventListener, this, args);
		};
		unsafeWindow.document.removeEventListener = function (
			this: HTMLElement,
			...args: any[]
		) {
			/** 事件名 */
			let __eventName = args[0] as string;
			/** 回调函数 */
			let __listener = args[1] as Function;
			/** 监听配置 */
			let __options = args[2] as boolean | EventListenerOptions | undefined;
			if (weakMap.has(__listener)) {
				const { eventName, fn, options } = weakMap.get(__listener)!;
				let flag = false;
				if (eventName === __eventName) {
					if (typeof __options === "boolean" && __options === options) {
						flag = true;
					} else if (
						typeof __options === "object" &&
						typeof options === "object" &&
						__options["capture"] === options["capture"]
					) {
						flag = true;
					}
				}
				if (flag) {
					args[1] = fn;
				}
			}
			// @ts-ignore
			return originRemoveEventListener.apply(this, args);
		};
	},
	/**
	 * 劫持 Element.property.addEventListener
	 * @param handler
	 */
	element_addEventListener(handler: HookEventListenerHandler<Element>) {
		this.$data.element_addEventListener.push(handler);
		log.info("Element.prototype.addEventListener hook新增劫持判断回调");
		if (this.$data.element_addEventListener.length > 1) {
			// 2,3,...
			return;
		}
		const that = this;

		/** 存储回调函数 */
		let weakMap = new WeakMap<
			Function,
			{
				eventName: string;
				fn: Function;
				options: AddEventListenerOptions | boolean | undefined;
			}
		>();

		const originAddEventListener =
			unsafeWindow.Element.prototype.addEventListener;
		const originRemoveEventListener =
			unsafeWindow.Element.prototype.removeEventListener;
		unsafeWindow.Element.prototype.addEventListener = function (
			this: HTMLElement,
			...args: any[]
		) {
			/** 目标元素 */
			let target = this;
			/** 事件名 */
			let eventName = args[0] as string;
			/** 回调函数 */
			let listener = args[1] as Function;
			/** 监听配置 */
			let options = args[2] as boolean | AddEventListenerOptions | undefined;

			for (
				let index = 0;
				index < that.$data.element_addEventListener.length;
				index++
			) {
				const callback = that.$data.element_addEventListener[index];
				const result = callback(target, eventName, listener, options);
				if (typeof result === "function") {
					args[1] = result;
					weakMap.set(listener, {
						eventName: eventName,
						fn: result,
						options: options,
					});
				}
			}
			return Reflect.apply(originAddEventListener, this, args);
		};
		unsafeWindow.Element.prototype.removeEventListener = function (
			this: HTMLElement,
			...args: any[]
		) {
			/** 事件名 */
			let __eventName = args[0] as string;
			/** 回调函数 */
			let __listener = args[1] as Function;
			/** 监听配置 */
			let __options = args[2] as boolean | EventListenerOptions | undefined;
			if (weakMap.has(__listener)) {
				const { eventName, fn, options } = weakMap.get(__listener)!;
				let flag = false;
				if (eventName === __eventName) {
					if (typeof __options === "boolean" && __options === options) {
						flag = true;
					} else if (
						typeof __options === "object" &&
						typeof options === "object" &&
						__options["capture"] === options["capture"]
					) {
						flag = true;
					}
				}
				if (flag) {
					args[1] = fn;
				}
			}
			// @ts-ignore
			return originRemoveEventListener.apply(this, args);
		};
	},
};
