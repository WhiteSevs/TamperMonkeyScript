import { WindowApi } from "./WindowApi";

/** 通用工具类 */
export const CommonUtils = {
  windowApi: new WindowApi({
    document: document,
    window: window,
    top: top!,
    setTimeout: globalThis.setTimeout.bind(globalThis),
    clearTimeout: globalThis.clearTimeout.bind(globalThis),
    setInterval: globalThis.setInterval.bind(globalThis),
    clearInterval: globalThis.clearInterval.bind(globalThis),
  }),
  /**
   * 判断元素是否已显示或已连接
   * @param $el
   */
  isShow($el: Element) {
    return Boolean($el.getClientRects().length);
  },
  /**
   * 创建安全的html
   * @param text 字符串
   */
  createSafeHTML(text: string) {
    if (window.trustedTypes) {
      const policy = window.trustedTypes.createPolicy("safe-innerHTML", {
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
  setSafeHTML($el: Element, text: string) {
    // 创建 TrustedHTML 策略（需 CSP 允许）
    $el.innerHTML = this.createSafeHTML(text);
  },
  /**
   * 用于强制显示元素并获取它的高度宽度等其它属性
   * @param $el
   */
  forceShow($el: Element) {
    const $clone = $el.cloneNode(true) as HTMLElement;
    $clone.setAttribute("style", "visibility: hidden !important;display:block !important;");
    this.windowApi.document.documentElement.appendChild($clone);
    return {
      /**
       * 恢复修改的style
       */
      recovery() {
        $clone.remove();
      },
    };
  },
  /**
   * 获取元素上的Float格式的属性px
   * @param element
   * @param styleName style名
   */
  getStyleValue(element: Element | CSSStyleDeclaration, styleName: string) {
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
    const value = parseFloat(styles[styleName as any]);
    if (isNaN(value)) {
      return 0;
    } else {
      return value;
    }
  },
  /**
   * 判断是否是window，例如window、self、globalThis
   * @param obj
   */
  isWin(obj: any) {
    if (typeof obj !== "object") {
      return false;
    }
    if (obj instanceof Node) {
      return false;
    }
    if (obj === globalThis) {
      return true;
    }
    if (obj === window) {
      return true;
    }
    if (obj === self) {
      return true;
    }
    if (obj === globalThis) {
      return true;
    }
    if (obj === window) {
      return true;
    }
    if (obj === self) {
      return true;
    }
    if (typeof unsafeWindow !== "undefined" && obj === unsafeWindow) {
      return true;
    }
    if (obj?.Math?.toString() !== "[object Math]") {
      return false;
    }
    return true;
  },
  /**
   * 判断对象是否是元素
   * @param $el
   * @returns
   * + true 是元素
   * + false 不是元素
   * @example
   * DOMUtilsCommonUtils.isDOM(document.querySelector("a"))
   * > true
   */
  isDOM($el: any): boolean {
    return $el instanceof Node;
  },
  /**
   * 删除对象上的属性
   * @param obj
   * @param propName
   */
  delete(obj: any, propName: any) {
    if (typeof Reflect === "object" && Reflect != null && Reflect.deleteProperty) {
      return Reflect.deleteProperty(obj, propName);
    } else {
      delete obj[propName];
    }
  },
  /**
   * 判断是否是元素列表
   * @param $el
   */
  isNodeList($el: any): $el is any[] | NodeList {
    return Array.isArray($el) || $el instanceof NodeList;
  },
  /** 获取 animationend 在各个浏览器的兼容名 */
  getAnimationEndNameList() {
    return ["webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend", "animationend"];
  },
  /** 获取 transitionend 在各个浏览器的兼容名 */
  getTransitionEndNameList() {
    return ["webkitTransitionEnd", "mozTransitionEnd", "MSTransitionEnd", "otransitionend", "transitionend"];
  },
};
