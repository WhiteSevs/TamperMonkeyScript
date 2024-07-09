import { PopsCore } from "../Core";
import type {
	ParseHTMLReturnType,
	PopsDOMUtilsCreateElementAttributesMap,
} from "../types/PopsDOMUtilsEventType";
import { PopsDOMUtilsEvent } from "./PopsDOMUtilsEvent";
import { popsUtils } from "./PopsUtils";

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
	 * @param {HTMLElement} element
	 * @returns
	 */
	offset(element: HTMLElement) {
		let rect = element.getBoundingClientRect();
		let win = element.ownerDocument.defaultView;
		let resultRect = new DOMRect(
			parseFloat((rect.left + (win?.pageXOffset || 0)).toString()),
			parseFloat((rect.top + (win?.pageYOffset || 0)).toString()),
			rect.width,
			rect.height
		);
		return resultRect;
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
		element: HTMLElement | string | Window | Document | typeof globalThis,
		isShow?: boolean
	): number;
	width(
		element: HTMLElement | string | Window | Document | typeof globalThis,
		isShow: boolean = false
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
			let { recovery } = popsDOMUtils.showElement(element);
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
		element: HTMLElement | string | Window | Document | typeof globalThis,
		isShow?: boolean
	): number;
	height(
		element: HTMLElement | string | Window | Document | typeof globalThis,
		isShow: boolean = false
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
			let { recovery } = popsDOMUtils.showElement(element);
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
			let { recovery } = popsDOMUtils.showElement(element);
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
			let { recovery } = popsDOMUtils.showElement(element);
			let outerHeight = DOMUtilsContext.outerHeight(element, true);
			recovery();
			return outerHeight;
		}
	}
	/**
	 * 添加className
	 * @param element 目标元素
	 * @param className className属性
	 */
	addClassName(element: HTMLElement, className: string) {
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
	removeClassName(element: HTMLElement, className: string) {
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
	containsClassName(element: HTMLElement, className: string): boolean {
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
		attributes?: PopsDOMUtilsCreateElementAttributesMap
	): HTMLElementTagNameMap[K] {
		let tempElement = PopsCore.document.createElement(tagName);
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
	 * 获取文字的位置信息
	 * @param input 输入框
	 * @param selectionStart 起始位置
	 * @param selectionEnd 结束位置
	 * @param debug 是否是调试模式
	 * + true 不删除临时节点元素
	 * + false 删除临时节点元素
	 */
	getTextBoundingRect(
		input: HTMLInputElement,
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
			ele.classList.add("pops-hide-important");
		} else {
			ele.classList.add("pops-hide");
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
		ele.classList.remove("pops-hide-important");
		ele.classList.remove("pops-hide");
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
				ele.insertAdjacentHTML("beforeend", text as string);
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
	 * @param element
	 */
	showElement(element: HTMLElement) {
		let dupNode = element.cloneNode(true) as HTMLElement;
		dupNode.setAttribute(
			"style",
			"visibility: hidden !important;display:block !important;"
		);
		PopsCore.document.documentElement.appendChild(dupNode);
		return {
			/**
			 * 恢复修改的style
			 */
			recovery() {
				dupNode.remove();
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
}

const popsDOMUtils = new PopsDOMUtils();
export { popsDOMUtils };
