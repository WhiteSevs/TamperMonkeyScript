import { CommonDOMUtils } from "./CommonDOMUtils";
import { DOMUtilsCore } from "./DOMUtilsCore";
import { DOMUtilsData } from "./Data";
import { OriginPrototype } from "./OriginPrototype";

class DOMUtils {
	constructor(option?: DOMUtilsCoreOption) {
		DOMUtilsCore.init(option);
	}
	/** 版本号 */
	version = "2024.5.24";
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
	attr(element: HTMLElement | string, attrName: string): string;
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
	attr(element: HTMLElement | string, attrName: string, attrValue?: string) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (attrValue == null) {
			return element.getAttribute(attrName);
		} else {
			element.setAttribute(attrName, attrValue);
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
					[P in keyof HTMLElementTagNameMap[K]]?: HTMLElementTagNameMap[K][P];
			  } & {
					[key: string]: any;
			  })
			| string,
		/** 自定义属性 */
		attributes?: DOMUtilsCreateElementAttributesMap
	): HTMLElementTagNameMap[K] {
		let tempElement = DOMUtilsCore.document.createElement(tagName);
		if (typeof property === "string") {
			tempElement.innerHTML = property;
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
			(tempElement as any)[key] = value;
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
		property: keyof CSSStyleDeclaration & string
	): string;
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
		property: {
			[P in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[P];
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
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (typeof property === "string") {
			if (value == null) {
				return getComputedStyle(element).getPropertyValue(property);
			} else {
				if (value === "string" && value.includes("!important")) {
					element.style.setProperty(property, value, "important");
				} else {
					value = handlePixe(property, value);
					element.style.setProperty(property, value);
				}
			}
		} else if (typeof property === "object") {
			for (let prop in property) {
				if (
					typeof property[prop] === "string" &&
					(property[prop] as string).includes("!important")
				) {
					element.style.setProperty(
						prop,
						property[prop] as string,
						"important"
					);
				} else {
					property[prop] = handlePixe(prop, property[prop] as string);
					element.style.setProperty(prop, property[prop] as string);
				}
			}
		}
	}
	/**
	 * 获取元素的文本内容
	 * @param element 目标元素
	 * @param text （可选）文本内容
	 * @returns 如果传入了text，则返回undefined；否则返回文本内容
	 * @example
	 * // 设置元素a.xx的文本内容为abcd
	 * DOMUtils.text(document.querySelector("a.xx"),"abcd")
	 * DOMUtils.text("a.xx","abcd")
	 * DOMUtils.text("a.xx",document.querySelector("b"))
	 * */
	text(element: HTMLElement | string): string;
	/**
	 * 设置元素的文本内容
	 * @param element 目标元素
	 * @param text （可选）文本内容
	 * @returns 如果传入了text，则返回undefined；否则返回文本内容
	 * @example
	 * // 设置元素a.xx的文本内容为abcd
	 * DOMUtils.text(document.querySelector("a.xx"),"abcd")
	 * DOMUtils.text("a.xx","abcd")
	 * DOMUtils.text("a.xx",document.querySelector("b"))
	 * */
	text(
		element: HTMLElement | string,
		text: string | HTMLElement | Element
	): void;
	text(element: HTMLElement | string, text?: string | HTMLElement | Element) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (text == null) {
			return element.textContent || element.innerText;
		} else {
			if (text instanceof Node) {
				text = text.textContent || (text as HTMLElement).innerText;
			}
			if ("textContent" in element) {
				element.textContent = text as string;
			} else if ("innerText" in element) {
				(element as HTMLElement).innerText = text as string;
			}
		}
	}

	/**
	 * 设置元素的HTML内容
	 * @param element 目标元素
	 * @param html （可选）HTML内容|元素
	 * @returns 如果传入了html，则返回undefined；否则返回HTML内容
	 * @example
	 * // 设置元素a.xx的文本内容为<b>abcd</b>
	 * DOMUtils.html(document.querySelector("a.xx"),"<b>abcd</b>")
	 * DOMUtils.html("a.xx","<b>abcd</b>")
	 * DOMUtils.html("a.xx",document.querySelector("b"))
	 * */
	html(
		element: HTMLElement | string,
		html: string | HTMLElement | Element
	): void;
	/**
	 * 获取元素的HTML内容
	 * @param element 目标元素
	 * @param html （可选）HTML内容|元素
	 * @returns 如果传入了html，则返回undefined；否则返回HTML内容
	 * @example
	 * // 设置元素a.xx的文本内容为<b>abcd</b>
	 * DOMUtils.html(document.querySelector("a.xx"),"<b>abcd</b>")
	 * DOMUtils.html("a.xx","<b>abcd</b>")
	 * DOMUtils.html("a.xx",document.querySelector("b"))
	 * */
	html(element: HTMLElement | string): string;
	html(element: HTMLElement | string, html?: string | HTMLElement | Element) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (html == null) {
			return element.innerHTML;
		} else {
			if (html instanceof Node) {
				html = html.innerHTML;
			}
			if ("innerHTML" in element) {
				element.innerHTML = html;
			}
		}
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
		handler?: (event: PointerEvent | MouseEvent) => void,
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
		handler?: (event: Event) => void,
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
		handler?: (event: Event) => void,
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
	 * 获取移动元素的transform偏移
	 */
	getTransform(
		element: HTMLElement,
		isShow: boolean = false
	): {
		transformLeft: number;
		transformTop: number;
	} {
		let DOMUtilsContext = this;
		let transform_left = 0;
		let transform_top = 0;
		if (!(isShow || (!isShow && CommonDOMUtils.isShow(element)))) {
			/* 未显示 */
			let { recovery } = CommonDOMUtils.showElement(element);
			let transformInfo = DOMUtilsContext.getTransform(element, true);
			recovery();
			return transformInfo;
		}
		let elementTransform = getComputedStyle(element).transform;
		if (
			elementTransform != null &&
			elementTransform !== "none" &&
			elementTransform !== ""
		) {
			let elementTransformSplit = elementTransform
				.match(/\((.+)\)/)?.[1]
				.split(",");
			if (elementTransformSplit) {
				transform_left = Math.abs(parseInt(elementTransformSplit[4]));
				transform_top = Math.abs(parseInt(elementTransformSplit[5]));
			} else {
				transform_left = 0;
				transform_top = 0;
			}
		}
		return {
			transformLeft: transform_left,
			transformTop: transform_top,
		};
	}

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
	val(element: HTMLInputElement | string, value: string | boolean): void;
	/**
	 * 获取value属性值
	 * @param element 目标元素
	 * @example
	 * // 获取元素textarea的值
	 * DOMUtils.val(document.querySelector("textarea.xx"))
	 * */
	val(element: HTMLInputElement | string): string;
	/**
	 * 获取value属性值
	 * @param element 目标元素
	 * @example
	 * // 获取元素input.xx的复选框值
	 * DOMUtils.val(document.querySelector("input.xx"))
	 * DOMUtils.val("input.xx")
	 * */
	val(element: HTMLInputElement): boolean | string;
	val(element: HTMLInputElement | string, value?: string | boolean) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(
				element
			) as HTMLInputElement;
		}
		if (element == null) {
			return;
		}
		if (value == null) {
			if (
				element.localName === "input" &&
				(element.type === "checkbox" || element.type === "radio")
			) {
				return element.checked;
			} else {
				return element.value;
			}
		} else {
			if (
				element.localName === "input" &&
				(element.type === "checkbox" || element.type === "radio")
			) {
				element.checked = !!value;
			} else {
				element.value = value as string;
			}
		}
	}

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
	prop<T extends any>(element: HTMLElement | string, propName: string): T;
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
	prop<T extends any>(
		element: HTMLElement | string,
		propName: string,
		propValue: T
	): void;
	prop(element: HTMLElement | string, propName: string, propValue?: any) {
		if (element == null) {
			return;
		}
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (propValue == null) {
			return (element as any)[propName];
		} else {
			(element as any)[propName] = propValue;
		}
	}
	/**
	 * 移除元素的属性
	 * @param element 目标元素
	 * @param attrName 属性名
	 * @example
	 * // 移除元素a.xx的属性data-value
	 * DOMUtils.removeAttr(document.querySelector("a.xx"),"data-value")
	 * DOMUtils.removeAttr("a.xx","data-value")
	 * */
	removeAttr(element: HTMLElement | string, attrName: string) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		element.removeAttribute(attrName);
	}
	/**
	 * 移除元素class名
	 * @param element 目标元素
	 * @param className 类名
	 * @example
	 * // 移除元素a.xx的className为xx
	 * DOMUtils.removeClass(document.querySelector("a.xx"),"xx")
	 * DOMUtils.removeClass("a.xx","xx")
	 */
	removeClass(element: HTMLElement | string, className: string) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (className == null) {
			return;
		}
		element.classList.remove(className);
	}
	/**
	 * 移除元素的属性
	 * @param element 目标元素
	 * @param propName 属性名
	 * @example
	 * // 移除元素a.xx的href属性
	 * DOMUtils.removeProp(document.querySelector("a.xx"),"href")
	 * DOMUtils.removeProp("a.xx","href")
	 * */
	removeProp(element: HTMLElement | string, propName: string) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		CommonDOMUtils.delete(element, propName);
	}
	/**
	 * 将一个元素替换为另一个元素
	 * @param element 目标元素
	 * @param newElement 新元素
	 * @example
	 * // 替换元素a.xx为b.xx
	 * DOMUtils.replaceWith(document.querySelector("a.xx"),document.querySelector("b.xx"))
	 * DOMUtils.replaceWith("a.xx",'<b class="xx"></b>')
	 */
	replaceWith(
		element: HTMLElement | string | NodeList | HTMLElement[] | Node,
		newElement: HTMLElement | string | Node
	) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (typeof newElement === "string") {
			newElement = DOMUtilsContext.parseHTML(newElement, false, false);
		}
		if (element instanceof NodeList || element instanceof Array) {
			element.forEach((item) => {
				DOMUtilsContext.replaceWith(item, newElement);
			});
		} else {
			element!.parentElement!.replaceChild(newElement as Node, element);
		}
	}
	/**
	 * 给元素添加class
	 * @param element 目标元素
	 * @param className class名
	 * @example
	 * // 元素a.xx的className添加_vue_
	 * DOMUtils.addClass(document.querySelector("a.xx"),"_vue_")
	 * DOMUtils.addClass("a.xx","_vue_")
	 * */
	addClass(element: HTMLElement | string, className: string) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		element.classList.add(className);
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
	append(element: HTMLElement | string, content: HTMLElement | string) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (typeof content === "string") {
			element.insertAdjacentHTML("beforeend", content);
		} else {
			element.appendChild(content);
		}
	}
	/**
	 * 函数 在元素内部开头添加子元素或HTML字符串
	 * @param element 目标元素
	 * @param content 子元素或HTML字符串
	 * @example
	 * // 元素a.xx内部开头添加一个元素
	 * DOMUtils.prepend(document.querySelector("a.xx"),document.querySelector("b.xx"))
	 * DOMUtils.prepend("a.xx","'<b class="xx"></b>")
	 * */
	prepend(element: HTMLElement | string, content: HTMLElement | string) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (typeof content === "string") {
			element.insertAdjacentHTML("afterbegin", content);
		} else {
			element.insertBefore(content, element.firstChild);
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
	after(element: HTMLElement | string, content: HTMLElement | string) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (typeof content === "string") {
			element.insertAdjacentHTML("afterend", content);
		} else {
			element!.parentElement!.insertBefore(content, element.nextSibling);
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
	before(element: HTMLElement | string, content: HTMLElement | string) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (typeof content === "string") {
			element.insertAdjacentHTML("beforebegin", content);
		} else {
			element!.parentElement!.insertBefore(content, element);
		}
	}
	/**
	 * 移除元素
	 * @param target 目标元素
	 * @example
	 * // 元素a.xx前面添加一个元素
	 * DOMUtils.remove(document.querySelector("a.xx"))
	 * DOMUtils.remove(document.querySelectorAll("a.xx"))
	 * DOMUtils.remove("a.xx")
	 * */
	remove(target: HTMLElement | string | NodeList | HTMLElement[]) {
		let DOMUtilsContext = this;
		if (typeof target === "string") {
			target = DOMUtilsCore.document.querySelectorAll(
				target
			) as NodeListOf<HTMLElement>;
		}
		if (target == null) {
			return;
		}
		if (target instanceof NodeList || target instanceof Array) {
			target = target as HTMLElement[];
			for (const element of target) {
				DOMUtilsContext.remove(element);
			}
		} else {
			target.remove();
		}
	}
	/**
	 * 移除元素的所有子元素
	 * @param element 目标元素
	 * @example
	 * // 移除元素a.xx元素的所有子元素
	 * DOMUtils.empty(document.querySelector("a.xx"))
	 * DOMUtils.empty("a.xx")
	 * */
	empty(element: HTMLElement | string) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		element.innerHTML = "";
	}
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
		eventType: DOMUtils_EventType | DOMUtils_EventType[],
		callback: (event: T) => void,
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
		eventType: DOMUtils_EventType | DOMUtils_EventType[],
		selector: string | undefined | null,
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
					let totalParent = CommonDOMUtils.isWin(elementItem)
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
		eventType: DOMUtils_EventType | DOMUtils_EventType[],
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
		eventType: DOMUtils_EventType | DOMUtils_EventType[],
		selector?: string | undefined,
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
					CommonDOMUtils.delete(elementEvents, eventType);
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
					CommonDOMUtils.delete((elementItem as any)[symbolEvents], eventName);
				});
			});
		});
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
	 * 获取元素相对于文档的偏移坐标（加上文档的滚动条）
	 * @param element 目标元素
	 * @example
	 * // 获取元素a.xx的对于文档的偏移坐标
	 * DOMUtils.offset(document.querySelector("a.xx"))
	 * DOMUtils.offset("a.xx")
	 * > 0
	 */
	offset(element: HTMLElement | string) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		let rect = element.getBoundingClientRect();
		return {
			/** y轴偏移 */
			top: rect.top + DOMUtilsCore.globalThis.scrollY,
			/** x轴偏移 */
			left: rect.left + DOMUtilsCore.globalThis.scrollX,
		};
	}
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
	width(
		element: HTMLElement | string | Window | Document,
		isShow?: boolean
	): number;
	width(
		element: HTMLElement | string | Window | Document,
		isShow: boolean = false
	) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (CommonDOMUtils.isWin(element)) {
			return DOMUtilsCore.window.document.documentElement.clientWidth;
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
		if (isShow || (!isShow && CommonDOMUtils.isShow(element as HTMLElement))) {
			/* 已显示 */
			/* 不从style中获取对应的宽度，因为可能使用了class定义了width !important */
			element = element as HTMLElement;
			/* 如果element.style.width为空  则从css里面获取是否定义了width信息如果定义了 则读取css里面定义的宽度width */
			if (
				parseFloat(CommonDOMUtils.getStyleValue(element, "width").toString()) >
				0
			) {
				return parseFloat(
					CommonDOMUtils.getStyleValue(element, "width").toString()
				);
			}

			/* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetWidth来进行计算 */
			if (element.offsetWidth > 0) {
				let borderLeftWidth = CommonDOMUtils.getStyleValue(
					element,
					"borderLeftWidth"
				);
				let borderRightWidth = CommonDOMUtils.getStyleValue(
					element,
					"borderRightWidth"
				);
				let paddingLeft = CommonDOMUtils.getStyleValue(element, "paddingLeft");
				let paddingRight = CommonDOMUtils.getStyleValue(
					element,
					"paddingRight"
				);
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
			let { recovery } = CommonDOMUtils.showElement(element);
			let width = DOMUtilsContext.width(element, true);
			recovery();
			return width;
		}
	}

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
	height(
		element: HTMLElement | string | Window | Document,
		isShow?: boolean
	): number;
	height(
		element: HTMLElement | string | Window | Document,
		isShow: boolean = false
	) {
		let DOMUtilsContext = this;
		if (CommonDOMUtils.isWin(element)) {
			return DOMUtilsCore.window.document.documentElement.clientHeight;
		}
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			// @ts-ignore
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
		if (isShow || (!isShow && CommonDOMUtils.isShow(element as HTMLElement))) {
			element = element as HTMLElement;
			/* 已显示 */
			/* 从style中获取对应的高度，因为可能使用了class定义了width !important */
			/* 如果element.style.height为空  则从css里面获取是否定义了height信息如果定义了 则读取css里面定义的高度height */
			if (
				parseFloat(CommonDOMUtils.getStyleValue(element, "height").toString()) >
				0
			) {
				return parseFloat(
					CommonDOMUtils.getStyleValue(element, "height").toString()
				);
			}

			/* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetHeight来进行计算 */
			if (element.offsetHeight > 0) {
				let borderTopWidth = CommonDOMUtils.getStyleValue(
					element,
					"borderTopWidth"
				);
				let borderBottomWidth = CommonDOMUtils.getStyleValue(
					element,
					"borderBottomWidth"
				);
				let paddingTop = CommonDOMUtils.getStyleValue(element, "paddingTop");
				let paddingBottom = CommonDOMUtils.getStyleValue(
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
			let { recovery } = CommonDOMUtils.showElement(element);
			let height = DOMUtilsContext.height(element, true);
			recovery();
			return height;
		}
	}
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
	outerWidth(
		element: HTMLElement | string | Window | Document,
		isShow?: boolean
	): number;
	outerWidth(
		element: HTMLElement | string | Window | Document,
		isShow: boolean = false
	) {
		let DOMUtilsContext = this;
		if (CommonDOMUtils.isWin(element)) {
			return DOMUtilsCore.window.innerWidth;
		}
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			// @ts-ignore
			return;
		}
		element = element as HTMLElement;
		if (isShow || (!isShow && CommonDOMUtils.isShow(element))) {
			let style = getComputedStyle(element, null);
			let marginLeft = CommonDOMUtils.getStyleValue(style, "marginLeft");
			let marginRight = CommonDOMUtils.getStyleValue(style, "marginRight");
			return element.offsetWidth + marginLeft + marginRight;
		} else {
			let { recovery } = CommonDOMUtils.showElement(element);
			let outerWidth = DOMUtilsContext.outerWidth(element, true);
			recovery();
			return outerWidth;
		}
	}
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
	outerHeight(
		element: HTMLElement | string | Window,
		isShow: boolean = false
	): number {
		let DOMUtilsContext = this;
		if (CommonDOMUtils.isWin(element)) {
			return DOMUtilsCore.window.innerHeight;
		}
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			// @ts-ignore
			return;
		}
		element = element as HTMLElement;
		if (isShow || (!isShow && CommonDOMUtils.isShow(element))) {
			let style = getComputedStyle(element, null);
			let marginTop = CommonDOMUtils.getStyleValue(style, "marginTop");
			let marginBottom = CommonDOMUtils.getStyleValue(style, "marginBottom");
			return element.offsetHeight + marginTop + marginBottom;
		} else {
			let { recovery } = CommonDOMUtils.showElement(element);
			let outerHeight = DOMUtilsContext.outerHeight(element, true);
			recovery();
			return outerHeight;
		}
	}

	/**
	 * 等待文档加载完成后执行指定的函数
	 * @param callback 需要执行的函数
	 * @example
	 * DOMUtils.ready(function(){
	 *   console.log("文档加载完毕")
	 * })
	 */
	ready(callback: () => void) {
		let DOMUtilsContext = this;
		function completed() {
			DOMUtilsContext.off(document, "DOMContentLoaded", completed);
			DOMUtilsContext.off(globalThis, "load", completed);
			callback();
		}
		if (
			document.readyState === "complete" ||
			(document.readyState !== "loading" &&
				!(document.documentElement as any).doScroll)
		) {
			setTimeout(callback);
		} else {
			/* 监听DOMContentLoaded事件 */
			DOMUtilsContext.on(document, "DOMContentLoaded", completed);
			/* 监听load事件 */
			DOMUtilsContext.on(globalThis, "load", completed);
		}
	}
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
		duration: number = 1000,
		callback: (() => void) | undefined | null = null
	) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (typeof duration !== "number" || duration <= 0) {
			throw new TypeError("duration must be a positive number");
		}
		if (typeof callback !== "function" && callback !== void 0) {
			throw new TypeError("callback must be a function or null");
		}
		if (typeof styles !== "object" || styles === void 0) {
			throw new TypeError("styles must be an object");
		}
		if (Object.keys(styles).length === 0) {
			throw new Error("styles must contain at least one property");
		}
		let start = performance.now();
		let from: {
			[prop: string]: any;
		} = {};
		let to: {
			[prop: string]: any;
		} = {};
		for (let prop in styles) {
			from[prop] = element.style[prop] || getComputedStyle(element)[prop];
			to[prop] = styles[prop];
		}
		let timer = setInterval(function () {
			let timePassed = performance.now() - start;
			let progress = timePassed / duration;
			if (progress > 1) {
				progress = 1;
			}
			for (let prop in styles) {
				element.style[prop] =
					from[prop] + (to[prop] - from[prop]) * progress + "px";
			}
			if (progress === 1) {
				clearInterval(timer);
				if (callback) {
					callback();
				}
			}
		}, 10);
	}
	/**
	 * 将一个元素包裹在指定的HTML元素中
	 * @param element 要包裹的元素
	 * @param wrapperHTML 要包裹的HTML元素的字符串表示形式
	 * @example
	 * // 将a.xx元素外面包裹一层div
	 * DOMUtils.wrap(document.querySelector("a.xx"),"<div></div>")
	 */
	wrap(element: HTMLElement | string | Node, wrapperHTML: string) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		element = element as HTMLElement;
		// 创建一个新的div元素，并将wrapperHTML作为其innerHTML
		let wrapper = DOMUtilsCore.document.createElement("div");
		wrapper.innerHTML = wrapperHTML;

		let wrapperFirstChild = wrapper.firstChild as HTMLElement;
		// 将要包裹的元素插入目标元素前面
		(element.parentElement as HTMLElement).insertBefore(
			wrapperFirstChild,
			element
		);

		// 将要包裹的元素移动到wrapper中
		wrapperFirstChild.appendChild(element);
	}
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
	prev(element: HTMLElement | string) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		return element.previousElementSibling as HTMLElement;
	}

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
	next(element: HTMLElement | string) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		return element.nextElementSibling as HTMLElement;
	}
	/**
	 * 取消挂载在window下的DOMUtils并返回DOMUtils
	 * @example
	 * let DOMUtils = window.DOMUtils.noConflict()
	 */
	noConflict() {
		if ((DOMUtilsCore.window as any).DOMUtils) {
			CommonDOMUtils.delete(window, "DOMUtils");
		}
		(DOMUtilsCore.window as any).DOMUtils = this;
		return this;
	}
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
	siblings(element: HTMLElement | string) {
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		return Array.from(
			(element.parentElement as HTMLElement)
				.children as HTMLCollectionOf<HTMLElement>
		).filter((child) => child !== element);
	}
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
	parent(element: HTMLElement | string): HTMLElement;
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
	parent(element: HTMLElement[] | NodeList): HTMLElement[];
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
	parent(element: HTMLElement | NodeList | string | HTMLElement[]) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (element instanceof NodeList || element instanceof Array) {
			element = element as HTMLElement[];
			let resultArray: HTMLElement[] = [];
			element.forEach((eleItem) => {
				resultArray.push(DOMUtilsContext.parent(eleItem));
			});
			return resultArray;
		} else {
			return element.parentElement;
		}
	}
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
			let tempDIV = DOMUtilsCore.document.createElement("div");
			tempDIV.innerHTML = html;
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
	 * 显示元素
	 * @param target 当前元素
	 * @example
	 * // 显示a.xx元素
	 * DOMUtils.show(document.querySelector("a.xx"))
	 * DOMUtils.show(document.querySelectorAll("a.xx"))
	 * DOMUtils.show("a.xx")
	 */
	show(target: HTMLElement | string | NodeList | HTMLElement[]) {
		let DOMUtilsContext = this;
		if (target == null) {
			return;
		}
		if (typeof target === "string") {
			target = DOMUtilsCore.document.querySelectorAll(target);
		}
		if (target instanceof NodeList || target instanceof Array) {
			target = target as HTMLElement[];
			for (const element of target) {
				DOMUtilsContext.show(element);
			}
		} else {
			target = target as HTMLElement;
			target.style.display = "";
			if (!CommonDOMUtils.isShow(target)) {
				/* 仍然是不显示，尝试使用强覆盖 */
				target.style.setProperty("display", "unset", "important");
			}
		}
	}
	/**
	 * 隐藏元素
	 * @param target 当前元素
	 * @example
	 * // 隐藏a.xx元素
	 * DOMUtils.hide(document.querySelector("a.xx"))
	 * DOMUtils.hide(document.querySelectorAll("a.xx"))
	 * DOMUtils.hide("a.xx")
	 */
	hide(target: HTMLElement | string | NodeList | HTMLElement[]) {
		let DOMUtilsContext = this;
		if (target == null) {
			return;
		}
		if (typeof target === "string") {
			target = DOMUtilsCore.document.querySelectorAll(target);
		}
		if (target instanceof NodeList || target instanceof Array) {
			target = target as HTMLElement[];
			for (const element of target) {
				DOMUtilsContext.hide(element);
			}
		} else {
			target = target as HTMLElement;
			target.style.display = "none";
			if (CommonDOMUtils.isShow(target)) {
				/* 仍然是显示，尝试使用强覆盖 */
				target.style.setProperty("display", "none", "important");
			}
		}
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
		handler: (event: KeyboardEvent) => void,
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
		handler: (event: KeyboardEvent) => void,
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
		handler: (event: KeyboardEvent) => void,
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
		duration: number = 400,
		callback?: () => void
	) {
		if (element == null) {
			return;
		}
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		element = element as HTMLElement;
		element.style.opacity = "0";
		element.style.display = "";
		let start: number = null as any;
		let timer: number = null as any;
		function step(timestamp: number) {
			if (!start) start = timestamp;
			let progress = timestamp - start;
			element = element as HTMLElement;
			element.style.opacity = Math.min(progress / duration, 1).toString();
			if (progress < duration) {
				DOMUtilsCore.window.requestAnimationFrame(step);
			} else {
				if (callback && typeof callback === "function") {
					callback();
				}
				DOMUtilsCore.window.cancelAnimationFrame(timer);
			}
		}
		timer = DOMUtilsCore.window.requestAnimationFrame(step);
	}
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
		duration: number = 400,
		callback?: () => void
	) {
		if (element == null) {
			return;
		}
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		element = element as HTMLElement;
		element.style.opacity = "1";
		let start: number = null as any;
		let timer: number = null as any;
		function step(timestamp: number) {
			if (!start) start = timestamp;
			let progress = timestamp - start;
			element = element as HTMLElement;
			element.style.opacity = Math.max(1 - progress / duration, 0).toString();
			if (progress < duration) {
				DOMUtilsCore.window.requestAnimationFrame(step);
			} else {
				element.style.display = "none";
				if (typeof callback === "function") {
					callback();
				}
				DOMUtilsCore.window.cancelAnimationFrame(timer);
			}
		}
		timer = DOMUtilsCore.window.requestAnimationFrame(step);
	}
	/**
	 * 切换元素的显示和隐藏状态
	 * @param element 当前元素
	 * @example
	 * // 如果元素a.xx当前是隐藏，则显示，如果是显示，则隐藏
	 * DOMUtils.toggle(document.querySelector("a.xx"))
	 * DOMUtils.toggle("a.xx")
	 */
	toggle(element: HTMLElement | string) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsCore.document.querySelector(element) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (getComputedStyle(element).getPropertyValue("display") === "none") {
			DOMUtilsContext.show(element);
		} else {
			DOMUtilsContext.hide(element);
		}
	}
	/**
	 * 创建一个新的DOMUtils实例
	 * @param option
	 * @returns
	 */
	createDOMUtils(option?: DOMUtilsCoreOption) {
		return new DOMUtils(option);
	}
}

let domUtils = new DOMUtils();

export { domUtils as DOMUtils };
