import { DOMUtilsCommonUtils } from "./DOMUtilsCommonUtils";
import {
	type DOMUtilsCreateElementAttributesMap,
	DOMUtilsEvent,
} from "./DOMUtilsEvent";
import { ParseHTMLReturnType } from "./types/global";
import { type UtilsWindowApiOption } from "./WindowApi";

class DOMUtils extends DOMUtilsEvent {
	constructor(option?: UtilsWindowApiOption) {
		super(option);
	}
	/** 版本号 */
	version = "2024.10.19";
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
		attrValue: string | boolean | number
	): void;
	attr(element: HTMLElement | string, attrName: string, attrValue?: any) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
		let DOMUtilsContext = this;
		let tempElement = DOMUtilsContext.windowApi.document.createElement(tagName);
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
		let DOMUtilsContext = this;
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
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
	 * 获取元素的文本内容，优先返回textContent
	 * @param element 目标元素
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
		text: string | HTMLElement | Element | number
	): void;
	text(element: HTMLElement | string, text?: any) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
		html: string | HTMLElement | Element | number
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
	html(element: HTMLElement | string, html?: any) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (html == null) {
			return element.innerHTML;
		} else {
			if (html instanceof Element) {
				html = html.innerHTML;
			}
			if ("innerHTML" in element) {
				element.innerHTML = html;
			}
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
		if (!(isShow || (!isShow && DOMUtilsCommonUtils.isShow(element)))) {
			/* 未显示 */
			let { recovery } = DOMUtilsCommonUtils.showElement(element);
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
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
		let DOMUtilsContext = this;
		if (element == null) {
			return;
		}
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		DOMUtilsCommonUtils.delete(element, propName);
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
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
	append(
		element: HTMLElement | string,
		content:
			| HTMLElement
			| string
			| (HTMLElement | string | Element)[]
			| NodeList
	) {
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		function elementAppendChild(ele: HTMLElement, text: HTMLElement | string) {
			if (typeof content === "string") {
				ele.insertAdjacentHTML("beforeend", text as string);
			} else {
				ele.appendChild(text as HTMLElement);
			}
		}
		if (Array.isArray(content) || content instanceof NodeList) {
			/* 数组 */
			let fragment =
				DOMUtilsContext.windowApi.document.createDocumentFragment();
			content.forEach((ele) => {
				if (typeof ele === "string") {
					ele = this.parseHTML(ele, true, false);
				}
				fragment.appendChild(ele);
			});
			element.appendChild(fragment);
		} else {
			elementAppendChild(element, content);
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (typeof content === "string") {
			element.insertAdjacentHTML("afterbegin", content);
		} else {
			let $firstChild = element.firstChild;
			if ($firstChild == null) {
				element.prepend(content);
			} else {
				element.insertBefore(content, element.firstChild);
			}
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (typeof content === "string") {
			element.insertAdjacentHTML("afterend", content);
		} else {
			let $parent = element.parentElement;
			let $nextSlibling = element.nextSibling;
			if (!$parent || $nextSlibling) {
				// 任意一个不行
				element.after(content);
			} else {
				element!.parentElement!.insertBefore(content, element.nextSibling);
			}
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (typeof content === "string") {
			element.insertAdjacentHTML("beforebegin", content);
		} else {
			let $parent = element.parentElement;
			if (!$parent) {
				element.before(content);
			} else {
				$parent.insertBefore(content, element);
			}
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
			target = DOMUtilsContext.windowApi.document.querySelectorAll(
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		element.innerHTML = "";
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		let rect = element.getBoundingClientRect();
		return {
			/** y轴偏移 */
			top: rect.top + DOMUtilsContext.windowApi.globalThis.scrollY,
			/** x轴偏移 */
			left: rect.left + DOMUtilsContext.windowApi.globalThis.scrollX,
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
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		if (DOMUtilsCommonUtils.isWin(element)) {
			return DOMUtilsContext.windowApi.window.document.documentElement
				.clientWidth;
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
		if (
			isShow ||
			(!isShow && DOMUtilsCommonUtils.isShow(element as HTMLElement))
		) {
			/* 已显示 */
			/* 不从style中获取对应的宽度，因为可能使用了class定义了width !important */
			element = element as HTMLElement;
			/* 如果element.style.width为空  则从css里面获取是否定义了width信息如果定义了 则读取css里面定义的宽度width */
			if (
				parseFloat(
					DOMUtilsCommonUtils.getStyleValue(element, "width").toString()
				) > 0
			) {
				return parseFloat(
					DOMUtilsCommonUtils.getStyleValue(element, "width").toString()
				);
			}

			/* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetWidth来进行计算 */
			if (element.offsetWidth > 0) {
				let borderLeftWidth = DOMUtilsCommonUtils.getStyleValue(
					element,
					"borderLeftWidth"
				);
				let borderRightWidth = DOMUtilsCommonUtils.getStyleValue(
					element,
					"borderRightWidth"
				);
				let paddingLeft = DOMUtilsCommonUtils.getStyleValue(
					element,
					"paddingLeft"
				);
				let paddingRight = DOMUtilsCommonUtils.getStyleValue(
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
			let { recovery } = DOMUtilsCommonUtils.showElement(element);
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
		if (DOMUtilsCommonUtils.isWin(element)) {
			return DOMUtilsContext.windowApi.window.document.documentElement
				.clientHeight;
		}
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
		if (
			isShow ||
			(!isShow && DOMUtilsCommonUtils.isShow(element as HTMLElement))
		) {
			element = element as HTMLElement;
			/* 已显示 */
			/* 从style中获取对应的高度，因为可能使用了class定义了width !important */
			/* 如果element.style.height为空  则从css里面获取是否定义了height信息如果定义了 则读取css里面定义的高度height */
			if (
				parseFloat(
					DOMUtilsCommonUtils.getStyleValue(element, "height").toString()
				) > 0
			) {
				return parseFloat(
					DOMUtilsCommonUtils.getStyleValue(element, "height").toString()
				);
			}

			/* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetHeight来进行计算 */
			if (element.offsetHeight > 0) {
				let borderTopWidth = DOMUtilsCommonUtils.getStyleValue(
					element,
					"borderTopWidth"
				);
				let borderBottomWidth = DOMUtilsCommonUtils.getStyleValue(
					element,
					"borderBottomWidth"
				);
				let paddingTop = DOMUtilsCommonUtils.getStyleValue(
					element,
					"paddingTop"
				);
				let paddingBottom = DOMUtilsCommonUtils.getStyleValue(
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
			let { recovery } = DOMUtilsCommonUtils.showElement(element);
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
		if (DOMUtilsCommonUtils.isWin(element)) {
			return DOMUtilsContext.windowApi.window.innerWidth;
		}
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
		}
		if (element == null) {
			// @ts-ignore
			return;
		}
		element = element as HTMLElement;
		if (isShow || (!isShow && DOMUtilsCommonUtils.isShow(element))) {
			let style = getComputedStyle(element, null);
			let marginLeft = DOMUtilsCommonUtils.getStyleValue(style, "marginLeft");
			let marginRight = DOMUtilsCommonUtils.getStyleValue(style, "marginRight");
			return element.offsetWidth + marginLeft + marginRight;
		} else {
			let { recovery } = DOMUtilsCommonUtils.showElement(element);
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
		if (DOMUtilsCommonUtils.isWin(element)) {
			return DOMUtilsContext.windowApi.window.innerHeight;
		}
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
		}
		if (element == null) {
			// @ts-ignore
			return;
		}
		element = element as HTMLElement;
		if (isShow || (!isShow && DOMUtilsCommonUtils.isShow(element))) {
			let style = getComputedStyle(element, null);
			let marginTop = DOMUtilsCommonUtils.getStyleValue(style, "marginTop");
			let marginBottom = DOMUtilsCommonUtils.getStyleValue(
				style,
				"marginBottom"
			);
			return element.offsetHeight + marginTop + marginBottom;
		} else {
			let { recovery } = DOMUtilsCommonUtils.showElement(element);
			let outerHeight = DOMUtilsContext.outerHeight(element, true);
			recovery();
			return outerHeight;
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
		}
		if (element == null) {
			return;
		}
		element = element as HTMLElement;
		// 创建一个新的div元素，并将wrapperHTML作为其innerHTML
		let wrapper = DOMUtilsContext.windowApi.document.createElement("div");
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
		let DOMUtilsContext = this;
		if ((DOMUtilsContext.windowApi.window as any).DOMUtils) {
			DOMUtilsCommonUtils.delete(window, "DOMUtils");
		}
		(DOMUtilsContext.windowApi.window as any).DOMUtils = this;
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
		let DOMUtilsContext = this;
		function parseHTMLByDOMParser() {
			let parser = new DOMParser();
			if (isComplete) {
				return parser.parseFromString(html, "text/html");
			} else {
				return parser.parseFromString(html, "text/html").body.firstChild;
			}
		}
		function parseHTMLByCreateDom() {
			let tempDIV = DOMUtilsContext.windowApi.document.createElement("div");
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
			target = DOMUtilsContext.windowApi.document.querySelectorAll(target);
		}
		if (target instanceof NodeList || target instanceof Array) {
			target = target as HTMLElement[];
			for (const element of target) {
				DOMUtilsContext.show(element);
			}
		} else {
			target = target as HTMLElement;
			target.style.display = "";
			if (!DOMUtilsCommonUtils.isShow(target)) {
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
			target = DOMUtilsContext.windowApi.document.querySelectorAll(target);
		}
		if (target instanceof NodeList || target instanceof Array) {
			target = target as HTMLElement[];
			for (const element of target) {
				DOMUtilsContext.hide(element);
			}
		} else {
			target = target as HTMLElement;
			target.style.display = "none";
			if (DOMUtilsCommonUtils.isShow(target)) {
				/* 仍然是显示，尝试使用强覆盖 */
				target.style.setProperty("display", "none", "important");
			}
		}
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
		let DOMUtilsContext = this;
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
				DOMUtilsContext.windowApi.window.requestAnimationFrame(step);
			} else {
				if (callback && typeof callback === "function") {
					callback();
				}
				DOMUtilsContext.windowApi.window.cancelAnimationFrame(timer);
			}
		}
		timer = DOMUtilsContext.windowApi.window.requestAnimationFrame(step);
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
		let DOMUtilsContext = this;
		if (element == null) {
			return;
		}
		if (typeof element === "string") {
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
				DOMUtilsContext.windowApi.window.requestAnimationFrame(step);
			} else {
				element.style.display = "none";
				if (typeof callback === "function") {
					callback();
				}
				DOMUtilsContext.windowApi.window.cancelAnimationFrame(timer);
			}
		}
		timer = DOMUtilsContext.windowApi.window.requestAnimationFrame(step);
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
			element = DOMUtilsContext.windowApi.document.querySelector(
				element
			) as HTMLElement;
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
	createDOMUtils(option?: UtilsWindowApiOption) {
		return new DOMUtils(option);
	}
	/**
	 * 获取文字的位置信息
	 * @param $input 输入框
	 * @param selectionStart 起始位置
	 * @param selectionEnd 结束位置
	 * @example
	 * DOMUtils.getTextBoundingRect(document.querySelector("input"));
	 */
	getTextBoundingRect(
		$input: HTMLInputElement,
		selectionStart?: number | string,
		selectionEnd?: number | string
	): DOMRect {
		let DOMUtilsContext = this;
		// Basic parameter validation
		if (!$input || !("value" in $input)) return $input;
		if (selectionStart == null) {
			selectionStart = $input.selectionStart || 0;
		}
		if (selectionEnd == null) {
			selectionEnd = $input.selectionEnd || 0;
		}
		if (typeof selectionStart == "string")
			selectionStart = parseFloat(selectionStart);
		if (typeof selectionStart != "number" || isNaN(selectionStart)) {
			selectionStart = 0;
		}
		if (selectionStart < 0) selectionStart = 0;
		else selectionStart = Math.min($input.value.length, selectionStart);
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
		else selectionEnd = Math.min($input.value.length, selectionEnd);

		// If available (thus IE), use the createTextRange method
		// @ts-ignore
		if (typeof $input.createTextRange == "function") {
			let range = ($input as any).createTextRange();
			range.collapse(true);
			range.moveStart("character", selectionStart);
			range.moveEnd("character", selectionEnd - selectionStart);
			return range.getBoundingClientRect();
		}
		// createTextRange is not supported, create a fake text range
		let offset = getInputOffset(),
			topPos = offset.top,
			leftPos = offset.left,
			width = getInputCSS("width", true),
			height = getInputCSS("height", true);

		// Styles to simulate a node in an input field
		let cssDefaultStyles = "white-space:pre;padding:0;margin:0;",
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
		topPos += getInputCSS("padding-top", true) as number;
		topPos += getInputCSS("border-top-width", true) as number;
		leftPos += getInputCSS("padding-left", true) as number;
		leftPos += getInputCSS("border-left-width", true) as number;
		leftPos += 1; //Seems to be necessary

		for (let index = 0; index < listOfModifiers.length; index++) {
			let property = listOfModifiers[index];
			// @ts-ignore
			cssDefaultStyles += property + ":" + getInputCSS(property) + ";";
		}
		// End of CSS variable checks
		// 不能为空，不然获取不到高度
		let text = $input.value || "G",
			textLen = text.length,
			fakeClone = DOMUtilsContext.windowApi.document.createElement("div");
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
		DOMUtilsContext.windowApi.document.body.appendChild(fakeClone);
		var returnValue = fakeRange.getBoundingClientRect(); //Get rect

		fakeClone?.parentNode?.removeChild(fakeClone); //Remove temp
		return returnValue;

		// Local functions for readability of the previous code
		/**
		 *
		 * @param start
		 * @param end
		 * @returns
		 */
		function appendPart(start: number, end: number) {
			var span = DOMUtilsContext.windowApi.document.createElement("span");
			span.style.cssText = cssDefaultStyles; //Force styles to prevent unexpected results
			span.textContent = text.substring(start, end);
			fakeClone.appendChild(span);
			return span;
		}
		// Computing offset position
		function getInputOffset() {
			let body = DOMUtilsContext.windowApi.document.body,
				win = DOMUtilsContext.windowApi.document.defaultView!,
				docElem = DOMUtilsContext.windowApi.document.documentElement,
				$box = DOMUtilsContext.windowApi.document.createElement("div");
			$box.style.paddingLeft = $box.style.width = "1px";
			body.appendChild($box);
			var isBoxModel = $box.offsetWidth == 2;
			body.removeChild($box);
			let $boxRect = $input.getBoundingClientRect();
			var clientTop = docElem.clientTop || body.clientTop || 0,
				clientLeft = docElem.clientLeft || body.clientLeft || 0,
				scrollTop =
					win.pageYOffset ||
					(isBoxModel && docElem.scrollTop) ||
					body.scrollTop,
				scrollLeft =
					win.pageXOffset ||
					(isBoxModel && docElem.scrollLeft) ||
					body.scrollLeft;
			return {
				top: $boxRect.top + scrollTop - clientTop,
				left: $boxRect.left + scrollLeft - clientLeft,
			};
		}
		/**
		 *
		 * @param prop
		 * @param isNumber
		 * @returns
		 */
		function getInputCSS(prop: string, isNumber: boolean) {
			var val = DOMUtilsContext.windowApi.document
				.defaultView!.getComputedStyle($input, null)
				.getPropertyValue(prop);
			return isNumber ? parseFloat(val) : val;
		}
	}
}

let domUtils = new DOMUtils();

export { domUtils as DOMUtils };
