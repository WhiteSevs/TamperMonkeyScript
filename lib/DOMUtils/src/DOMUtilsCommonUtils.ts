import { WindowApi } from "./WindowApi";

/** 通用工具类 */
const DOMUtilsCommonUtils = {
	windowApi: new WindowApi({
		document: document,
		window: window,
		top: top!,
	}),
	/**
	 * 判断元素是否已显示或已连接
	 * @param element
	 */
	isShow(element: HTMLElement) {
		return Boolean(element.getClientRects().length);
	},
	/**
	 * 获取安全的html
	 */
	getSafeHTML(text: string) {
		// @ts-ignore
		if (globalThis.trustedTypes) {
			// @ts-ignore
			const policy = globalThis.trustedTypes.createPolicy("safe-innerHTML", {
				createHTML: (html: string) => html,
			});
			return policy.createHTML(text);
		} else {
			return text;
		}
	},
	/**
	 * 在CSP策略下设置innerHTML
	 * @param $el 元素
	 * @param text 文本
	 */
	setSafeHTML($el: HTMLElement, text: string) {
		// 创建 TrustedHTML 策略（需 CSP 允许）
		$el.innerHTML = this.getSafeHTML(text);
	},
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
		this.windowApi.document.documentElement.appendChild(dupNode);
		return {
			/**
			 * 恢复修改的style
			 */
			recovery() {
				dupNode.remove();
			},
		};
	},
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
	},
	/**
	 * 判断是否是window，例如window、self、globalThis
	 * @param target
	 */
	isWin(target: any) {
		if (typeof target !== "object") {
			return false;
		}
		if (target instanceof Node) {
			return false;
		}
		if (target === globalThis) {
			return true;
		}
		if (target === window) {
			return true;
		}
		if (target === self) {
			return true;
		}
		if (target === globalThis) {
			return true;
		}
		if (target === window) {
			return true;
		}
		if (target === self) {
			return true;
		}
		if (typeof unsafeWindow !== "undefined" && target === unsafeWindow) {
			return true;
		}
		if (target?.Math?.toString() !== "[object Math]") {
			return false;
		}
		return true;
	},
	/**
	 * 删除对象上的属性
	 * @param target
	 * @param propName
	 */
	delete(target: any, propName: any) {
		if (typeof Reflect === "object" && Reflect.deleteProperty) {
			Reflect.deleteProperty(target, propName);
		} else {
			delete target[propName];
		}
	},
};
export { DOMUtilsCommonUtils };
