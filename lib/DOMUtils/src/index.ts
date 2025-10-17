import { CommonUtils } from "./CommonUtils";
import type { DOMUtilsCreateElementAttributesMap } from "./types/DOMUtilsEvent";
import { type DOMUtilsTargetElementType } from "./types/global";
import type { WindowApiOption } from "./types/WindowApi";
import { version } from "../package.json";
import { ElementHandler } from "./ElementHandler";

class DOMUtils extends ElementHandler {
  constructor(option?: WindowApiOption) {
    super(option);
  }
  /** 版本号 */
  version = version;
  /**
   * 取消挂载在window下的DOMUtils并返回DOMUtils
   * @example
   * let DOMUtils = window.DOMUtils.noConflict()
   */
  noConflict() {
    const that = this;
    if (that.windowApi.window.DOMUtils) {
      CommonUtils.delete(window, "DOMUtils");
    }
    that.windowApi.window.DOMUtils = this;
    return this;
  }
  /**
   * 获取元素的属性值
   * @param $el 目标元素
   * @param attrName 属性名
   * @example
   * // 获取a.xx元素的href属性
   * DOMUtils.attr(document.querySelector("a.xx"),"href");
   * DOMUtils.attr("a.xx","href");
   * > https://xxxx....
   */
  attr($el: DOMUtilsTargetElementType | Element, attrName: string): string;
  /**
   * 设置元素的属性值
   * @param $el 目标元素
   * @param attrName 属性名
   * @param attrValue 属性值
   * @example
   * // 修改a.xx元素的href属性为abcd
   * DOMUtils.attr(document.querySelector("a.xx"),"href","abcd");
   * DOMUtils.attr("a.xx","href","abcd");
   */
  attr($el: DOMUtilsTargetElementType | Element, attrName: string, attrValue: string | boolean | number): void;
  attr($el: DOMUtilsTargetElementType | Element, attrName: string, attrValue?: any) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      if (attrValue == null) {
        // 获取属性
        return that.attr($el[0] as HTMLElement, attrName, attrValue);
      } else {
        // 设置属性
        $el.forEach(($elItem) => {
          that.attr($elItem as HTMLElement, attrName, attrValue);
        });
        return;
      }
    }
    if (attrValue == null) {
      return $el.getAttribute(attrName);
    } else {
      $el.setAttribute(attrName, attrValue);
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
  ): HTMLElementTagNameMap[K];
  /**
   * 创建元素
   * @param tagName 自定义的标签名
   * @param property 属性
   * @param attributes 元素上的自定义属性
   * @example
   * // 创建一个custom-div元素，且属性class为xxx
   * DOMUtils.createElement("custom-div",undefined,{ class:"xxx" });
   * > <custom-div class="xxx"></custom-div>
   * @example
   * // 创建一个custom-div元素
   * DOMUtils.createElement("custom-div");
   * > <custom-div></custom-div>
   * @example
   * // 创建一个custom-div元素
   * DOMUtils.createElement("custom-div","测试");
   * > <custom-div>测试</custom-div>
   */
  createElement(
    /** 元素名 */
    tagName: string,
    /** 属性 */
    property?:
      | ({
          [P in keyof HTMLElement]?: HTMLElement[P];
        } & {
          [key: string]: any;
        })
      | string,
    /** 自定义属性 */
    attributes?: DOMUtilsCreateElementAttributesMap
  ): HTMLElement;
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
    const that = this;
    const $el = that.windowApi.document.createElement(tagName);
    if (typeof property === "string") {
      that.html($el, property);
      return $el;
    }
    if (property == null) {
      property = {};
    }
    if (attributes == null) {
      attributes = {};
    }
    Object.keys(property).forEach((key) => {
      const value = property[key];
      if (key === "innerHTML") {
        that.html($el, value);
        return;
      }
      (<any>$el)[key] = value;
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
      $el.setAttribute(key, value);
    });
    return $el;
  }
  /**
   * 获取元素的样式属性值
   * @param $el 目标元素
   * @param property 样式属性名或包含多个属性名和属性值的对象
   * @example
   * // 获取元素a.xx的CSS属性display
   * DOMUtils.css(document.querySelector("a.xx"),"display");
   * DOMUtils.css("a.xx","display");
   * > "none"
   * */
  css($el: DOMUtilsTargetElementType, property: keyof Omit<CSSStyleDeclaration, "zIndex"> | "z-index"): string;
  /**
   * 获取元素的样式属性值
   * @param $el 目标元素
   * @param property 样式属性名或包含多个属性名和属性值的对象
   * @example
   * // 获取元素a.xx的CSS属性display
   * DOMUtils.css(document.querySelector("a.xx"),"display");
   * DOMUtils.css("a.xx","display");
   * > "none"
   * */
  css($el: DOMUtilsTargetElementType, property: string): string;
  /**
   * 设置元素的样式属性
   * @param $el 目标元素
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
    $el: DOMUtilsTargetElementType,
    property: (keyof Omit<CSSStyleDeclaration, "zIndex"> | "z-index") & string,
    value: string | number
  ): string;
  /**
   * 设置元素的样式属性
   * @param $el 目标元素
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
    $el: DOMUtilsTargetElementType,
    property:
      | {
          [P in keyof Omit<CSSStyleDeclaration, "zIndex">]?: CSSStyleDeclaration[P];
        }
      | {
          "z-index": string | number;
        }
      | {
          [key: string]: string | number;
        }
  ): string;
  css(
    $el: DOMUtilsTargetElementType,
    property:
      | keyof Omit<CSSStyleDeclaration, "zIndex">
      | string
      | {
          [P in keyof Omit<CSSStyleDeclaration, "zIndex">]?: string | number | CSSStyleDeclaration[P];
        },
    value?: string | number
  ) {
    const that = this;
    /**
     * 把纯数字没有px的加上
     */
    function handlePixe(propertyName: string, propertyValue: string | number) {
      const allowAddPixe = ["width", "height", "top", "left", "right", "bottom", "font-size"];
      if (typeof propertyValue === "number") {
        propertyValue = propertyValue.toString();
      }
      if (typeof propertyValue === "string" && allowAddPixe.includes(propertyName) && propertyValue.match(/[0-9]$/gi)) {
        propertyValue = propertyValue + "px";
      }
      return propertyValue;
    }
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      if (typeof property === "string") {
        if (value == null) {
          // 获取属性
          return that.css($el[0] as HTMLElement, property);
        } else {
          // 设置属性
          $el.forEach(($elItem) => {
            that.css($elItem as HTMLElement, property);
          });
          return;
        }
      } else if (typeof property === "object") {
        // 设置属性
        $el.forEach(($elItem) => {
          that.css($elItem as HTMLElement, property as object);
        });
        return;
      }
      return;
    }
    const setStyleProperty = (propertyName: string, propertyValue: string | number) => {
      if (typeof propertyValue === "string" && propertyValue.trim().endsWith("!important")) {
        propertyValue = propertyValue
          .trim()
          .replace(/!important$/gi, "")
          .trim();
        $el.style.setProperty(propertyName, propertyValue, "important");
      } else {
        propertyValue = handlePixe(propertyName, propertyValue);
        $el.style.setProperty(propertyName, propertyValue);
      }
    };
    if (typeof property === "string") {
      if (value == null) {
        return that.windowApi.globalThis.getComputedStyle($el).getPropertyValue(property);
      } else {
        setStyleProperty(property, value);
      }
    } else if (typeof property === "object") {
      for (const prop in property) {
        const value = property[prop];
        setStyleProperty(prop, value!);
      }
    } else {
      // 其他情况
      throw new TypeError("property must be string or object");
    }
  }
  /**
   * 获取元素的文本内容，优先返回textContent
   * @param $el 目标元素
   * @returns 如果传入了text，则返回undefined；否则返回文本内容
   * @example
   * // 设置元素a.xx的文本内容为abcd
   * DOMUtils.text(document.querySelector("a.xx"),"abcd")
   * DOMUtils.text("a.xx","abcd")
   * DOMUtils.text("a.xx",document.querySelector("b"))
   * */
  text($el: DOMUtilsTargetElementType | Element | DocumentFragment | Node): string;
  /**
   * 设置元素的文本内容
   * @param $el 目标元素
   * @param text （可选）文本内容
   * @returns 如果传入了text，则返回undefined；否则返回文本内容
   * @example
   * // 设置元素a.xx的文本内容为abcd
   * DOMUtils.text(document.querySelector("a.xx"),"abcd")
   * DOMUtils.text("a.xx","abcd")
   * DOMUtils.text("a.xx",document.querySelector("b"))
   * */
  text(
    $el: DOMUtilsTargetElementType | Element | DocumentFragment | Node,
    text: string | HTMLElement | Element | number
  ): void;
  text($el: DOMUtilsTargetElementType | Element | DocumentFragment | Node, text?: any) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      if (text == null) {
        // 获取
        return that.text($el[0] as HTMLElement);
      } else {
        // 设置
        $el.forEach(($elItem) => {
          that.text($elItem as HTMLElement, text);
        });
      }
      return;
    }
    if (text == null) {
      return $el.textContent || (<HTMLElement>$el).innerText;
    } else {
      if (text instanceof Node) {
        text = text.textContent || (text as HTMLElement).innerText;
      }
      if ("textContent" in $el) {
        $el.textContent = text as string;
      } else if ("innerText" in $el) {
        ($el as HTMLElement).innerText = text as string;
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
  html(element: DOMUtilsTargetElementType, html: string | HTMLElement | Element | number): void;
  /**
   * 获取元素的HTML内容
   * @param $el 目标元素
   * @param html （可选）HTML内容|元素
   * @returns 如果传入了html，则返回undefined；否则返回HTML内容
   * @example
   * // 设置元素a.xx的文本内容为<b>abcd</b>
   * DOMUtils.html(document.querySelector("a.xx"),"<b>abcd</b>")
   * DOMUtils.html("a.xx","<b>abcd</b>")
   * DOMUtils.html("a.xx",document.querySelector("b"))
   * */
  html($el: DOMUtilsTargetElementType): string;
  html($el: DOMUtilsTargetElementType, html?: any) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      if (html == null) {
        // 获取
        return that.html($el[0] as HTMLElement);
      } else {
        // 设置
        $el.forEach(($elItem) => {
          that.html($elItem as HTMLElement, html);
        });
      }
      return;
    }
    if (html == null) {
      // 获取
      return $el.innerHTML;
    } else {
      // 设置
      if (html instanceof Element) {
        html = html.innerHTML;
      }
      if ("innerHTML" in $el) {
        CommonUtils.setSafeHTML($el, html);
      }
    }
  }
  /**
   * 获取移动元素的transform偏移
   */
  getTransform(
    $el: HTMLElement,
    isShow: boolean = false
  ): {
    transformLeft: number;
    transformTop: number;
  } {
    const that = this;
    let transform_left = 0;
    let transform_top = 0;
    if (!(isShow || (!isShow && CommonUtils.isShow($el)))) {
      /* 未显示 */
      const { recovery } = CommonUtils.forceShow($el);
      const transformInfo = that.getTransform($el, true);
      recovery();
      return transformInfo;
    }
    const elementTransform = that.windowApi.globalThis.getComputedStyle($el).transform;
    if (elementTransform != null && elementTransform !== "none" && elementTransform !== "") {
      const elementTransformSplit = elementTransform.match(/\((.+)\)/)?.[1].split(",");
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
   * @param $el 目标元素
   * @param value （可选）value属性值
   * @returns 如果传入了value，则返回undefined；否则返回value属性值
   * > true
   * @example
   * // 修改元素input.xx的复选框值为true
   * DOMUtils.val(document.querySelector("input.xx"),true)
   * DOMUtils.val("input.xx",true)
   * */
  val(
    $el:
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | string
      | (HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)[]
      | NodeListOf<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    value: string | boolean | number
  ): void;
  /**
   * 获取value属性值
   * @param $el 目标元素
   * @example
   * // 获取元素textarea的值
   * DOMUtils.val(document.querySelector("textarea.xx"))
   * */
  val(
    $el:
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | string
      | (HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)[]
      | NodeListOf<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): string;
  /**
   * 获取value属性值
   * @param $el 目标元素
   * @example
   * // 获取元素input.xx的复选框值
   * DOMUtils.val(document.querySelector("input.xx"))
   * DOMUtils.val("input.xx")
   * */
  val(
    $el:
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | (HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)[]
      | NodeListOf<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): boolean | string;
  val(
    $el:
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | string
      | (HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)[]
      | NodeListOf<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    value?: string | boolean | number
  ) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      if (value == null) {
        // 获取
        return that.val($el[0] as HTMLInputElement);
      } else {
        // 设置
        $el.forEach(($elItem) => {
          that.val($elItem as HTMLInputElement, value);
        });
      }
      return;
    }
    if (value == null) {
      // 获取
      if ($el.localName === "input" && ($el.type === "checkbox" || $el.type === "radio")) {
        return ($el as HTMLInputElement).checked;
      } else {
        return $el.value;
      }
    } else {
      // 设置
      if ($el.localName === "input" && ($el.type === "checkbox" || $el.type === "radio")) {
        ($el as HTMLInputElement).checked = !!value;
      } else {
        $el.value = value as string;
      }
    }
  }
  /**
   * 获取元素的属性值
   * @param $el 目标元素
   * @param propName 属性名
   * @param propValue 属性值
   * @example
   * // 获取元素a.xx的属性data-value
   * DOMUtils.val(document.querySelector("a.xx"),"data-value")
   * DOMUtils.val("a.xx","data-value")
   * > undefined
   * */
  prop<T>($el: DOMUtilsTargetElementType | DocumentFragment, propName: string): T;
  /**
   * 设置元素的属性值
   * @param $el 目标元素
   * @param propName 属性名
   * @param propValue 属性值
   * @example
   * // 设置元素a.xx的属性data-value为1
   * DOMUtils.val(document.querySelector("a.xx"),"data-value",1)
   * DOMUtils.val("a.xx","data-value",1)
   * */
  prop<T>($el: DOMUtilsTargetElementType | DocumentFragment, propName: string, propValue: T): void;
  prop($el: DOMUtilsTargetElementType | DocumentFragment, propName: string, propValue?: any) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      if (propValue == null) {
        // 获取
        return that.prop($el[0] as HTMLElement, propName);
      } else {
        // 设置
        $el.forEach(($elItem) => {
          that.prop($elItem as HTMLElement, propName, propValue);
        });
      }
      return;
    }
    if (propValue == null) {
      return Reflect.get($el, propName);
    } else {
      if ($el instanceof Element && propName === "innerHTML") {
        that.html($el, propValue);
      } else {
        Reflect.set($el, propName, propValue);
      }
    }
  }
  /**
   * 移除元素的属性
   * @param $el 目标元素
   * @param attrName 属性名
   * @example
   * // 移除元素a.xx的属性data-value
   * DOMUtils.removeAttr(document.querySelector("a.xx"),"data-value")
   * DOMUtils.removeAttr("a.xx","data-value")
   * */
  removeAttr($el: DOMUtilsTargetElementType | Element, attrName: string) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      // 设置
      $el.forEach(($elItem) => {
        that.removeAttr($elItem as HTMLElement, attrName);
      });
      return;
    }
    $el.removeAttribute(attrName);
  }
  /**
   * 移除元素class名
   * @param $el 目标元素
   * @param className 类名
   * @example
   * // 移除元素a.xx的className为xx
   * DOMUtils.removeClass(document.querySelector("a.xx"),"xx")
   * DOMUtils.removeClass("a.xx","xx")
   */
  removeClass($el: DOMUtilsTargetElementType | Element, className?: string | string[] | undefined | null) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      // 设置
      $el.forEach(($elItem) => {
        that.removeClass($elItem as HTMLElement, className);
      });
      return;
    }
    if (className == null) {
      // 清空全部className
      $el.className = "";
    } else {
      if (!Array.isArray(className)) {
        className = className.trim().split(" ");
      }
      className.forEach((itemClassName) => {
        $el.classList.remove(itemClassName);
      });
    }
  }
  /**
   * 移除元素的属性
   * @param $el 目标元素
   * @param propName 属性名
   * @example
   * // 移除元素a.xx的href属性
   * DOMUtils.removeProp(document.querySelector("a.xx"),"href")
   * DOMUtils.removeProp("a.xx","href")
   * */
  removeProp($el: DOMUtilsTargetElementType | DocumentFragment, propName: string) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      // 设置
      $el.forEach(($elItem) => {
        that.removeProp($elItem as HTMLElement, propName);
      });
      return;
    }
    CommonUtils.delete($el, propName);
  }
  /**
   * 给元素添加class
   * @param $el 目标元素
   * @param className class名
   * @example
   * // 元素a.xx的className添加_vue_
   * DOMUtils.addClass(document.querySelector("a.xx"),"_vue_")
   * DOMUtils.addClass("a.xx","_vue_")
   * */
  addClass($el: DOMUtilsTargetElementType | Element, className: string | string[]) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      // 设置
      $el.forEach(($elItem) => {
        that.addClass($elItem as HTMLElement, className);
      });
      return;
    }
    if (!Array.isArray(className)) {
      className = className.split(" ");
    }
    className.forEach((itemClassName) => {
      if (itemClassName.trim() == "") {
        return;
      }
      $el.classList.add(itemClassName);
    });
  }
  /**
   * 判断元素是否存在className
   * @param $el
   * @param className
   */
  hasClass($el: DOMUtilsTargetElementType | Element, className: string | string[]): boolean {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return false;
    }
    if (CommonUtils.isNodeList($el)) {
      let flag = true;
      for (let index = 0; index < $el.length; index++) {
        const $elItem = $el[index] as HTMLElement;
        flag = flag && that.hasClass($elItem, className);
      }
      return flag;
    }
    if (!$el?.classList) {
      return false;
    }
    if (!Array.isArray(className)) {
      className = className.split(" ");
    }
    for (let index = 0; index < className.length; index++) {
      const item = className[index].trim();
      if (!$el.classList.contains(item)) {
        return false;
      }
    }
    return true;
  }
  /**
   * 函数在元素内部末尾添加子元素或HTML字符串
   * @param $el 目标元素
   * @param content 子元素或HTML字符串
   * @example
   * // 元素a.xx的内部末尾添加一个元素
   * DOMUtils.append(document.querySelector("a.xx"),document.querySelector("b.xx"))
   * DOMUtils.append("a.xx","'<b class="xx"></b>")
   * */
  append(
    $el: DOMUtilsTargetElementType | DocumentFragment,
    content: HTMLElement | string | (HTMLElement | string | Element)[] | NodeList
  ) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }

    if (CommonUtils.isNodeList($el)) {
      // 设置
      $el.forEach(($elItem) => {
        that.append($elItem as HTMLElement, content);
      });
      return;
    }
    function elementAppendChild(ele: HTMLElement | DocumentFragment, text: HTMLElement | string) {
      if (typeof content === "string") {
        if (ele instanceof DocumentFragment) {
          if (typeof text === "string") {
            text = that.toElement(text, true, false);
          }
          ele.appendChild(text);
        } else {
          ele.insertAdjacentHTML("beforeend", CommonUtils.createSafeHTML(text as string));
        }
      } else {
        ele.appendChild(text as HTMLElement);
      }
    }
    if (Array.isArray(content) || content instanceof NodeList) {
      /* 数组 */
      const fragment = that.windowApi.document.createDocumentFragment();
      content.forEach((ele) => {
        if (typeof ele === "string") {
          // 转为元素
          ele = that.toElement(ele, true, false);
        }
        fragment.appendChild(ele);
      });
      $el.appendChild(fragment);
    } else {
      elementAppendChild($el, content);
    }
  }
  /**
   * 函数 在元素内部开头添加子元素或HTML字符串
   * @param $el 目标元素
   * @param content 子元素或HTML字符串
   * @example
   * // 元素a.xx内部开头添加一个元素
   * DOMUtils.prepend(document.querySelector("a.xx"),document.querySelector("b.xx"))
   * DOMUtils.prepend("a.xx","'<b class="xx"></b>")
   * */
  prepend($el: DOMUtilsTargetElementType | DocumentFragment, content: HTMLElement | string) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      // 设置
      $el.forEach(($elItem) => {
        that.prepend($elItem as HTMLElement, content);
      });
      return;
    }
    if (typeof content === "string") {
      if ($el instanceof DocumentFragment) {
        content = that.toElement(content, true, false);
        $el.prepend(content);
      } else {
        $el.insertAdjacentHTML("afterbegin", CommonUtils.createSafeHTML(content));
      }
    } else {
      const $firstChild = $el.firstChild;
      if ($firstChild == null) {
        $el.prepend(content);
      } else {
        $el.insertBefore(content, $firstChild);
      }
    }
  }
  /**
   * 在元素后面添加兄弟元素或HTML字符串
   * @param $el 目标元素
   * @param content 兄弟元素或HTML字符串
   * @example
   * // 元素a.xx后面添加一个元素
   * DOMUtils.after(document.querySelector("a.xx"),document.querySelector("b.xx"))
   * DOMUtils.after("a.xx","'<b class="xx"></b>")
   * */
  after($el: DOMUtilsTargetElementType, content: HTMLElement | string) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      // 设置
      $el.forEach(($elItem) => {
        that.after($elItem as HTMLElement, content);
      });
      return;
    }
    if (typeof content === "string") {
      $el.insertAdjacentHTML("afterend", CommonUtils.createSafeHTML(content));
    } else {
      const $parent = $el.parentElement;
      const $nextSlibling = $el.nextSibling;
      if (!$parent || $nextSlibling) {
        // 任意一个不行
        $el.after(content);
      } else {
        $parent.insertBefore(content, $nextSlibling);
      }
    }
  }
  /**
   * 在元素前面添加兄弟元素或HTML字符串
   * @param $el 目标元素
   * @param content 兄弟元素或HTML字符串
   * @example
   * // 元素a.xx前面添加一个元素
   * DOMUtils.before(document.querySelector("a.xx"),document.querySelector("b.xx"))
   * DOMUtils.before("a.xx","'<b class="xx"></b>")
   * */
  before($el: DOMUtilsTargetElementType, content: HTMLElement | string) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      // 设置
      $el.forEach(($elItem) => {
        that.before($elItem as HTMLElement, content);
      });
      return;
    }
    if (typeof content === "string") {
      $el.insertAdjacentHTML("beforebegin", CommonUtils.createSafeHTML(content));
    } else {
      const $parent = $el.parentElement;
      if (!$parent) {
        $el.before(content);
      } else {
        $parent.insertBefore(content, $el);
      }
    }
  }
  /**
   * 移除元素
   * @param $el 目标元素，可以是数组、单个元素、NodeList、元素选择器
   * @example
   * DOMUtils.remove(document.querySelector("a.xx"))
   * DOMUtils.remove(document.querySelectorAll("a.xx"))
   * DOMUtils.remove("a.xx")
   * DOMUtils.remove([a.xxx, div.xxx, span.xxx])
   * */
  remove($el: DOMUtilsTargetElementType | Element) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      $el.forEach(($elItem) => {
        that.remove($elItem as HTMLElement);
      });
      return;
    }
    if (typeof $el.remove === "function") {
      $el.remove();
    } else if ($el.parentElement) {
      $el.parentElement.removeChild($el);
    } else if ($el.parentNode) {
      $el.parentNode.removeChild($el);
    }
  }
  /**
   * 移除元素的所有子元素
   * @param $el 目标元素
   * @example
   * // 移除元素a.xx元素的所有子元素
   * DOMUtils.empty(document.querySelector("a.xx"))
   * DOMUtils.empty("a.xx")
   * */
  empty($el: DOMUtilsTargetElementType | Element) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      // 设置
      $el.forEach(($elItem) => {
        that.empty($elItem as HTMLElement);
      });
      return;
    }
    if ($el.innerHTML) {
      $el.innerHTML = "";
    } else if ($el.textContent) {
      $el.textContent = "";
    }
  }
  /**
   * 获取元素相对于文档的偏移坐标（加上文档的滚动条）
   * @param $el 目标元素
   * @example
   * // 获取元素a.xx的对于文档的偏移坐标
   * DOMUtils.offset(document.querySelector("a.xx"))
   * DOMUtils.offset("a.xx")
   * > 0
   */
  offset($el: HTMLElement | string) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selector($el) as HTMLElement;
    }
    if ($el == null) {
      return;
    }

    const rect = $el.getBoundingClientRect();
    return {
      /** y轴偏移 */
      top: rect.top + that.windowApi.globalThis.scrollY,
      /** x轴偏移 */
      left: rect.left + that.windowApi.globalThis.scrollX,
    };
  }
  /**
   * 获取元素的宽度
   * @param $el 要获取宽度的元素
   * @param value 宽度值
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
  width($el: HTMLElement | string | Window | typeof globalThis | Document, isShow?: boolean): number;
  width($el: HTMLElement | string | Window | typeof globalThis | Document, isShow: boolean = false): number {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selector<HTMLElement>($el)!;
    }
    if (CommonUtils.isWin($el)) {
      return that.windowApi.window.document.documentElement.clientWidth;
    }
    if (($el as HTMLElement).nodeType === 9) {
      /* Document文档节点 */
      $el = $el as Document;
      return Math.max(
        $el.body.scrollWidth,
        $el.documentElement.scrollWidth,
        $el.body.offsetWidth,
        $el.documentElement.offsetWidth,
        $el.documentElement.clientWidth
      );
    }
    if (isShow || (!isShow && CommonUtils.isShow($el as HTMLElement))) {
      /* 已显示 */
      /* 不从style中获取对应的宽度，因为可能使用了class定义了width !important */
      $el = $el as HTMLElement;
      /* 如果element.style.width为空  则从css里面获取是否定义了width信息如果定义了 则读取css里面定义的宽度width */
      if (parseFloat(CommonUtils.getStyleValue($el, "width").toString()) > 0) {
        return parseFloat(CommonUtils.getStyleValue($el, "width").toString());
      }

      /* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetWidth来进行计算 */
      if ($el.offsetWidth > 0) {
        const borderLeftWidth = CommonUtils.getStyleValue($el, "borderLeftWidth");
        const borderRightWidth = CommonUtils.getStyleValue($el, "borderRightWidth");
        const paddingLeft = CommonUtils.getStyleValue($el, "paddingLeft");
        const paddingRight = CommonUtils.getStyleValue($el, "paddingRight");
        const backHeight =
          parseFloat($el.offsetWidth.toString()) -
          parseFloat(borderLeftWidth.toString()) -
          parseFloat(borderRightWidth.toString()) -
          parseFloat(paddingLeft.toString()) -
          parseFloat(paddingRight.toString());
        return parseFloat(backHeight.toString());
      }
      return 0;
    } else {
      /* 未显示 */
      $el = $el as HTMLElement;
      const { recovery } = CommonUtils.forceShow($el);
      const width = that.width($el, true);
      recovery();
      return width;
    }
  }

  /**
   * 获取元素的高度
   * @param $el 要获取高度的元素
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
  height($el: HTMLElement | string | Window | typeof globalThis | Document, isShow?: boolean): number;
  height($el: HTMLElement | string | Window | typeof globalThis | Document, isShow: boolean = false): number {
    const that = this;
    if (CommonUtils.isWin($el)) {
      return that.windowApi.window.document.documentElement.clientHeight;
    }
    if (typeof $el === "string") {
      $el = that.selector($el) as HTMLElement;
    }
    if (($el as Document).nodeType === 9) {
      $el = $el as Document;
      /* Document文档节点 */
      return Math.max(
        $el.body.scrollHeight,
        $el.documentElement.scrollHeight,
        $el.body.offsetHeight,
        $el.documentElement.offsetHeight,
        $el.documentElement.clientHeight
      );
    }
    if (isShow || (!isShow && CommonUtils.isShow($el as HTMLElement))) {
      $el = $el as HTMLElement;
      /* 已显示 */
      /* 从style中获取对应的高度，因为可能使用了class定义了width !important */
      /* 如果element.style.height为空  则从css里面获取是否定义了height信息如果定义了 则读取css里面定义的高度height */
      if (parseFloat(CommonUtils.getStyleValue($el, "height").toString()) > 0) {
        return parseFloat(CommonUtils.getStyleValue($el, "height").toString());
      }

      /* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetHeight来进行计算 */
      if ($el.offsetHeight > 0) {
        const borderTopWidth = CommonUtils.getStyleValue($el, "borderTopWidth");
        const borderBottomWidth = CommonUtils.getStyleValue($el, "borderBottomWidth");
        const paddingTop = CommonUtils.getStyleValue($el, "paddingTop");
        const paddingBottom = CommonUtils.getStyleValue($el, "paddingBottom");
        const backHeight =
          parseFloat($el.offsetHeight.toString()) -
          parseFloat(borderTopWidth.toString()) -
          parseFloat(borderBottomWidth.toString()) -
          parseFloat(paddingTop.toString()) -
          parseFloat(paddingBottom.toString());
        return parseFloat(backHeight.toString());
      }
      return 0;
    } else {
      /* 未显示 */
      $el = $el as HTMLElement;
      const { recovery } = CommonUtils.forceShow($el);
      const height = that.height($el, true);
      recovery();
      return height;
    }
  }
  /**
   * 获取元素的外部宽度（包括边框和外边距）
   * @param $el 要获取外部宽度的元素
   * @param [isShow=false] 是否已进行isShow，避免爆堆栈
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
  outerWidth($el: HTMLElement | string | Window | typeof globalThis | Document, isShow?: boolean): number;
  outerWidth($el: HTMLElement | string | Window | typeof globalThis | Document, isShow: boolean = false): number {
    const that = this;
    if (CommonUtils.isWin($el)) {
      return that.windowApi.window.innerWidth;
    }
    if (typeof $el === "string") {
      $el = that.selector($el) as HTMLElement;
    }
    $el = $el as HTMLElement;
    if (isShow || (!isShow && CommonUtils.isShow($el))) {
      const style = that.windowApi.globalThis.getComputedStyle($el, null);
      const marginLeft = CommonUtils.getStyleValue(style, "marginLeft");
      const marginRight = CommonUtils.getStyleValue(style, "marginRight");
      return $el.offsetWidth + marginLeft + marginRight;
    } else {
      const { recovery } = CommonUtils.forceShow($el);
      const outerWidth = that.outerWidth($el, true);
      recovery();
      return outerWidth;
    }
  }
  /**
   * 获取元素的外部高度（包括边框和外边距）
   * @param {HTMLElement|string} $el 要获取外部高度的元素
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
  outerHeight($el: HTMLElement | string | Window | typeof globalThis | Document, isShow?: boolean): number;
  outerHeight($el: HTMLElement | string | Window | typeof globalThis | Document, isShow: boolean = false): number {
    const that = this;
    if (CommonUtils.isWin($el)) {
      return that.windowApi.window.innerHeight;
    }
    if (typeof $el === "string") {
      $el = that.selector($el) as HTMLElement;
    }
    $el = $el as HTMLElement;
    if (isShow || (!isShow && CommonUtils.isShow($el))) {
      const style = that.windowApi.globalThis.getComputedStyle($el, null);
      const marginTop = CommonUtils.getStyleValue(style, "marginTop");
      const marginBottom = CommonUtils.getStyleValue(style, "marginBottom");
      return $el.offsetHeight + marginTop + marginBottom;
    } else {
      const { recovery } = CommonUtils.forceShow($el);
      const outerHeight = that.outerHeight($el, true);
      recovery();
      return outerHeight;
    }
  }
  /**
   * 将一个元素替换为另一个元素
   * @param $el 目标元素
   * @param $newEl 新元素
   * @example
   * // 替换元素a.xx为b.xx
   * DOMUtils.replaceWith(document.querySelector("a.xx"),document.querySelector("b.xx"))
   * DOMUtils.replaceWith("a.xx",'<b class="xx"></b>')
   */
  replaceWith($el: DOMUtilsTargetElementType, $newEl: HTMLElement | string | Node) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      // 设置
      $el.forEach(($elItem) => {
        that.replaceWith($elItem as HTMLElement, $newEl);
      });
      return;
    }
    if (typeof $newEl === "string") {
      $newEl = that.toElement($newEl, false, false);
    }
    const $parent = $el.parentElement;
    if ($parent) {
      $parent.replaceChild($newEl as Node, $el);
    } else {
      that.after($el, $newEl as HTMLElement);
      $el.remove();
    }
  }
  /**
   * 将一个元素包裹在指定的HTML元素中
   * @param $el 要包裹的元素
   * @param wrapperHTML 要包裹的HTML元素的字符串表示形式
   * @example
   * // 将a.xx元素外面包裹一层div
   * DOMUtils.wrap(document.querySelector("a.xx"),"<div></div>")
   */
  wrap($el: DOMUtilsTargetElementType, wrapperHTML: string) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selectorAll($el);
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      // 设置
      $el.forEach(($elItem) => {
        that.wrap($elItem as HTMLElement, wrapperHTML);
      });
      return;
    }
    $el = $el as HTMLElement;
    // 创建一个新的div元素，并将wrapperHTML作为其innerHTML
    const $wrapper = that.windowApi.document.createElement("div");
    that.html($wrapper, wrapperHTML);

    const wrapperFirstChild = $wrapper.firstChild as HTMLElement;
    // 将要包裹的元素插入目标元素前面
    const parentElement = $el.parentElement as HTMLElement;
    parentElement.insertBefore(wrapperFirstChild, $el);

    // 将要包裹的元素移动到wrapper中
    wrapperFirstChild.appendChild($el);
  }
  /**
   * 获取当前元素的前一个兄弟元素
   * @param $el 当前元素
   * @returns 前一个兄弟元素
   * @example
   * // 获取a.xx元素前一个兄弟元素
   * DOMUtils.prev(document.querySelector("a.xx"))
   * DOMUtils.prev("a.xx")
   * > <div ...>....</div>
   */
  prev($el: HTMLElement | string): HTMLElement;
  prev($el: HTMLElement | string) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selector($el) as HTMLElement;
    }
    if ($el == null) {
      return;
    }
    return $el.previousElementSibling as HTMLElement;
  }
  /**
   * 获取当前元素的后一个兄弟元素
   * @param $el 当前元素
   * @returns 后一个兄弟元素
   * @example
   * // 获取a.xx元素前一个兄弟元素
   * DOMUtils.next(document.querySelector("a.xx"))
   * DOMUtils.next("a.xx")
   * > <div ...>....</div>
   */
  next($el: HTMLElement | string): HTMLElement;
  next($el: HTMLElement | string) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selector($el) as HTMLElement;
    }
    if ($el == null) {
      return;
    }
    return $el.nextElementSibling as HTMLElement;
  }
  /**
   * 获取当前元素的所有兄弟元素
   * @param element 当前元素
   * @returns 所有兄弟元素
   * @example
   * // 获取a.xx元素所有兄弟元素
   * DOMUtils.siblings(document.querySelector("a.xx"))
   * DOMUtils.siblings("a.xx")
   * > (3)[div.logo-wrapper, div.forum-block, div.more-btn-desc]
   */
  siblings(element: HTMLElement | string): HTMLElement[];
  siblings($el: HTMLElement | string) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selector($el) as HTMLElement;
    }
    if ($el == null) {
      return;
    }
    return Array.from(($el.parentElement as HTMLElement).children as HTMLCollectionOf<HTMLElement>).filter(
      ($child) => $child !== $el
    );
  }
  /**
   * 获取当前元素的父元素
   * @param $el 当前元素
   * @returns 父元素
   * @example
   * // 获取a.xx元素的父元素
   * DOMUtils.parent(document.querySelector("a.xx"))
   * DOMUtils.parent("a.xx")
   * > <div ...>....</div>
   */
  parent($el: HTMLElement | string): HTMLElement;
  /**
   * 获取当前元素的父元素
   * @param $el 当前元素
   * @returns 父元素
   * @example
   * // 获取a.xx元素的父元素
   * DOMUtils.parent(document.querySelector("a.xx"))
   * DOMUtils.parent("a.xx")
   * > <div ...>....</div>
   */
  parent($el: HTMLElement[] | NodeList): HTMLElement[];
  /**
   * 获取当前元素的父元素
   * @param $el 当前元素
   * @returns 父元素
   * @example
   * // 获取a.xx元素的父元素
   * DOMUtils.parent(document.querySelector("a.xx"))
   * DOMUtils.parent("a.xx")
   * > <div ...>....</div>
   */
  parent($el: HTMLElement | Element | Node | NodeList | string | HTMLElement[]) {
    const that = this;
    if (typeof $el === "string") {
      $el = that.selector<HTMLElement>($el)!;
    }
    if ($el == null) {
      return;
    }
    if (CommonUtils.isNodeList($el)) {
      const resultArray: HTMLElement[] = [];
      $el.forEach(($elItem) => {
        resultArray.push(that.parent($elItem as HTMLElement));
      });
      return resultArray;
    } else {
      return $el.parentElement;
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
   * DOMUtils.toElement("<a href='xxxx'></a>")
   * > <a href="xxxx"></a>
   * @example
   * // 使用DOMParser将字符串转为Element元素
   * DOMUtils.toElement("<a href='xxxx'></a>",true)
   * > <a href="xxxx"></a>
   * @example
   * // 由于需要转换的元素是多个元素，将字符串转为完整的Element元素
   * DOMUtils.toElement("<a href='xxxx'></a><a href='xxxx'></a>",false, true)
   * > <div><a href="xxxx"></a><a href='xxxx'></a></div>
   * @example
   * // 由于需要转换的元素是多个元素，使用DOMParser将字符串转为完整的Element元素
   * DOMUtils.toElement("<a href='xxxx'></a><a href='xxxx'></a>",true, true)
   * > #document
   */
  toElement<T1 extends boolean, T2 extends boolean>(
    html: string,
    useParser?: T1,
    isComplete?: T2
  ): T1 extends true ? (T2 extends true ? Document : HTMLElement) : HTMLElement;
  toElement(html: string, useParser = false, isComplete = false) {
    const that = this;
    // 去除html前后的空格
    html = html.trim();
    function parseHTMLByDOMParser() {
      const parser = new DOMParser();
      if (isComplete) {
        return parser.parseFromString(html, "text/html");
      } else {
        return parser.parseFromString(html, "text/html").body.firstChild;
      }
    }
    function parseHTMLByCreateDom() {
      const $el = that.windowApi.document.createElement("div");
      that.html($el, html);
      if (isComplete) {
        return $el;
      } else {
        return $el.firstElementChild ?? $el.firstChild;
      }
    }
    if (useParser) {
      return parseHTMLByDOMParser();
    } else {
      return parseHTMLByCreateDom();
    }
  }
  /**
   * 序列化表单元素
   * @param $form 表单元素
   * @example
   * DOMUtils.serialize(document.querySelector("form"))
   * > xxx=xxx&aaa=
   */
  serialize($form: HTMLFormElement): string {
    const elements = $form.elements;
    const serializedArray: { name: string; value: string }[] = [];

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

      if (
        element.name &&
        !element.disabled &&
        ((element as HTMLInputElement).checked ||
          ["text", "hidden", "password", "textarea", "select-one", "select-multiple"].includes(element.type))
      ) {
        if (element.type === "select-multiple") {
          for (let j = 0; j < (element as HTMLSelectElement).options.length; j++) {
            if ((element as HTMLSelectElement).options[j].selected) {
              serializedArray.push({
                name: (element as HTMLSelectElement).name,
                value: (element as HTMLSelectElement).options[j].value,
              });
            }
          }
        } else {
          serializedArray.push({ name: element.name, value: element.value });
        }
      }
    }

    return serializedArray
      .map((item) => `${encodeURIComponent(item.name)}=${encodeURIComponent(item.value)}`)
      .join("&");
  }
  /**
   * 创建一个新的DOMUtils实例
   * @param option
   * @returns
   */
  createDOMUtils(option?: WindowApiOption) {
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
    const that = this;
    // Basic parameter validation
    if (!$input || !("value" in $input)) return $input;
    if (selectionStart == null) {
      selectionStart = $input.selectionStart || 0;
    }
    if (selectionEnd == null) {
      selectionEnd = $input.selectionEnd || 0;
    }
    if (typeof selectionStart == "string") selectionStart = parseFloat(selectionStart);
    if (typeof selectionStart != "number" || isNaN(selectionStart)) {
      selectionStart = 0;
    }
    if (selectionStart < 0) selectionStart = 0;
    else selectionStart = Math.min($input.value.length, selectionStart);
    if (typeof selectionEnd == "string") selectionEnd = parseFloat(selectionEnd);
    if (typeof selectionEnd != "number" || isNaN(selectionEnd) || selectionEnd < selectionStart) {
      selectionEnd = selectionStart;
    }
    if (selectionEnd < 0) selectionEnd = 0;
    else selectionEnd = Math.min($input.value.length, selectionEnd);

    // If available (thus IE), use the createTextRange method
    if (typeof (<any>$input).createTextRange == "function") {
      const range = ($input as any).createTextRange();
      range.collapse(true);
      range.moveStart("character", selectionStart);
      range.moveEnd("character", selectionEnd - selectionStart);
      return range.getBoundingClientRect();
    }
    // createTextRange is not supported, create a fake text range
    const offset = getInputOffset(),
      width = getInputCSS("width", true),
      height = getInputCSS("height", true);
    let topPos = offset.top;
    let leftPos = offset.left;

    // Styles to simulate a node in an input field
    let cssDefaultStyles = "white-space:pre;padding:0;margin:0;";
    const listOfModifiers = [
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
      const property = listOfModifiers[index];
      cssDefaultStyles += property + ":" + getInputCSS(property, false) + ";";
    }
    // End of CSS variable checks
    // 不能为空，不然获取不到高度
    const text = $input.value || "G",
      textLen = text.length,
      fakeClone = that.windowApi.document.createElement("div");
    if (selectionStart > 0) appendPart(0, selectionStart);
    const fakeRange = appendPart(selectionStart, selectionEnd);
    if (textLen > selectionEnd) appendPart(selectionEnd, textLen);

    // Styles to inherit the font styles of the element
    fakeClone.style.cssText = cssDefaultStyles;

    // Styles to position the text node at the desired position
    fakeClone.style.position = "absolute";
    fakeClone.style.top = topPos + "px";
    fakeClone.style.left = leftPos + "px";
    fakeClone.style.width = width + "px";
    fakeClone.style.height = height + "px";
    that.windowApi.document.body.appendChild(fakeClone);
    const returnValue = fakeRange.getBoundingClientRect(); //Get rect

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
      const span = that.windowApi.document.createElement("span");
      span.style.cssText = cssDefaultStyles; //Force styles to prevent unexpected results
      span.textContent = text.substring(start, end);
      fakeClone.appendChild(span);
      return span;
    }
    // Computing offset position
    function getInputOffset() {
      const body = that.windowApi.document.body,
        win = that.windowApi.document.defaultView!,
        docElem = that.windowApi.document.documentElement,
        $box = that.windowApi.document.createElement("div");
      $box.style.paddingLeft = $box.style.width = "1px";
      body.appendChild($box);
      const isBoxModel = $box.offsetWidth == 2;
      body.removeChild($box);
      const $boxRect = $input.getBoundingClientRect();
      const clientTop = docElem.clientTop || body.clientTop || 0,
        clientLeft = docElem.clientLeft || body.clientLeft || 0,
        scrollTop = win.pageYOffset || (isBoxModel && docElem.scrollTop) || body.scrollTop,
        scrollLeft = win.pageXOffset || (isBoxModel && docElem.scrollLeft) || body.scrollLeft;
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
    function getInputCSS<T extends boolean>(prop: string, isNumber: T): T extends true ? number : string {
      const val = that.windowApi.document.defaultView!.getComputedStyle($input, null).getPropertyValue(prop);
      if (isNumber) {
        return parseFloat(val) as T extends true ? number : string;
      } else {
        return val as T extends true ? number : string;
      }
    }
  }
  /**
   * 在页面中增加style元素，如果html节点存在子节点，添加子节点第一个，反之，添加到html节点的子节点最后一个
   * @param cssText css字符串
   * @returns 返回添加的CSS标签
   * @example
   * DOMUtils.addStyle("html{}");
   * > <style type="text/css">html{}</style>
   */
  addStyle(cssText: string): HTMLStyleElement;
  addStyle(cssText: string): HTMLStyleElement {
    if (typeof cssText !== "string") {
      throw new Error("DOMUtils.addStyle 参数cssText 必须为String类型");
    }
    const $css = this.createElement("style", {
      type: "text/css",
      innerHTML: cssText,
    });
    if (this.windowApi.document.head) {
      /* 插入head最后 */
      this.windowApi.document.head.appendChild($css);
    } else if (this.windowApi.document.documentElement.childNodes.length === 0) {
      /* 插入#html后 */
      this.windowApi.document.documentElement.appendChild($css);
    } else {
      /* 插入#html第一个元素前 */
      this.windowApi.document.documentElement.insertBefore($css, this.windowApi.document.documentElement.childNodes[0]);
    }
    return $css;
  }
  /**
   * 检测点击的地方是否在该元素区域内
   * @param $el 需要检测的元素
   * @returns
   * + true 点击在元素上
   * + false 未点击在元素上
   * @example
   * DOMUtils.checkUserClickInNode(document.querySelector(".xxx"));
   * > false
   **/
  checkUserClickInNode($el: Element | Node | HTMLElement) {
    const that = this;
    if (!CommonUtils.isDOM($el)) {
      throw new Error("Utils.checkUserClickInNode 参数 targetNode 必须为 Element|Node 类型");
    }
    const clickEvent = that.windowApi.window.event as PointerEvent;
    const touchEvent = that.windowApi.window.event as TouchEvent;
    const $click = clickEvent?.composedPath()?.[0] as HTMLElement;

    // 点击的x坐标
    const clickPosX = clickEvent?.clientX != null ? clickEvent.clientX : touchEvent.touches[0].clientX;
    // 点击的y坐标
    const clickPosY = clickEvent?.clientY != null ? clickEvent.clientY : touchEvent.touches[0].clientY;
    const {
      /* 要检测的元素的相对屏幕的横坐标最左边 */
      left: elementPosXLeft,
      /* 要检测的元素的相对屏幕的横坐标最右边 */
      right: elementPosXRight,
      /* 要检测的元素的相对屏幕的纵坐标最上边 */
      top: elementPosYTop,
      /* 要检测的元素的相对屏幕的纵坐标最下边 */
      bottom: elementPosYBottom,
    } = (<HTMLElement>$el).getBoundingClientRect();
    if (
      clickPosX >= elementPosXLeft &&
      clickPosX <= elementPosXRight &&
      clickPosY >= elementPosYTop &&
      clickPosY <= elementPosYBottom
    ) {
      return true;
    } else if (($click && $el.contains($click)) || $click == $el) {
      /* 这种情况是应对在界面中隐藏的元素，getBoundingClientRect获取的都是0 */
      return true;
    } else {
      return false;
    }
  }
  /**
   * 删除某个父元素，父元素可能在上层或上上层或上上上层...
   * @param $el 当前元素
   * @param parentSelector 判断是否满足父元素，参数为当前处理的父元素，满足返回true，否则false
   * @returns
   * + true 已删除
   * + false 未删除
   * @example
   * DOMUtils.deleteParentNode(document.querySelector("a"),".xxx");
   * > true
   **/
  deleteParentNode($el: Node | HTMLElement | Element | null, parentSelector: string): boolean;
  deleteParentNode($el: Node | HTMLElement | Element | null, parentSelector: string) {
    if ($el == null) {
      return;
    }
    if (!CommonUtils.isDOM($el)) {
      throw new Error("DOMUtils.deleteParentNode 参数 target 必须为 Node|HTMLElement 类型");
    }
    if (typeof parentSelector !== "string") {
      throw new Error("DOMUtils.deleteParentNode 参数 targetSelector 必须为 string 类型");
    }
    let result = false;
    const $parent = domUtils.closest($el as HTMLElement, parentSelector);
    if ($parent) {
      this.remove($parent);
      result = true;
    }
    return result;
  }
  /**
   * 定位元素上的字符串，返回一个迭代器
   * @param $el 目标元素
   * @param text 需要定位的字符串
   * @param filter （可选）过滤器函数，返回值为true是排除该元素
   * @example
   * let textIterator = DOMUtils.findElementsWithText(document.documentElement,"xxxx");
   * textIterator.next();
   * > {value: ?HTMLElement, done: boolean, next: Function}
   */
  findElementsWithText<T extends HTMLElement | Element | Node>(
    $el: T,
    text: string,
    filter?: (element: T) => boolean
  ): Generator<HTMLElement | ChildNode, void, any>;
  *findElementsWithText<T extends HTMLElement | Element | Node>(
    $el: T,
    text: string,
    filter?: (element: T) => boolean
  ) {
    const that = this;
    if ((<HTMLElement>$el).outerHTML.includes(text)) {
      if ((<HTMLElement>$el).children.length === 0) {
        const filterResult = typeof filter === "function" ? filter($el) : false;
        if (!filterResult) {
          yield $el as any;
        }
      } else {
        const $text = Array.from($el.childNodes).filter(($child) => $child.nodeType === Node.TEXT_NODE);
        for (const $child of $text) {
          if ((<HTMLElement>$child).textContent.includes(text)) {
            const filterResult = typeof filter === "function" ? filter($el) : false;
            if (!filterResult) {
              yield $child;
            }
          }
        }
      }
    }

    for (let index = 0; index < (<HTMLElement>$el).children.length; index++) {
      const $child = (<HTMLElement>$el).children[index] as T;
      yield* that.findElementsWithText($child, text, filter);
    }
  }
  /**
   * 寻找可见元素，如果元素不可见，则向上找它的父元素直至找到，如果父元素不存在则返回null
   * @param $el
   * @example
   * let visibleElement = DOMUtils.findVisibleElement(document.querySelector("a.xx"));
   * > <HTMLElement>
   */
  findVisibleElement($el: HTMLElement | Element | Node) {
    let $current = $el as HTMLElement;
    while ($current) {
      const rect = $current.getBoundingClientRect();
      if ((rect as any).length) {
        return $current;
      }
      $current = $current.parentElement as HTMLElement;
    }
    return null;
  }
  /**
   * 将元素上的文本或元素使用光标进行选中
   *
   * 注意，如果设置startIndex和endIndex，且元素上并无可选则的坐标，那么会报错
   * @param $el 目标元素
   * @param childTextNode 目标元素下的#text元素
   * @param startIndex （可选）开始坐标，可为空
   * @param endIndex （可选）结束坐标，可为空
   * @example
   * DOMUtils.setElementSelection(document.querySelector("span"));
   */
  setElementSelection(
    $el: HTMLElement | Element | Node,
    childTextNode?: ChildNode,
    startIndex?: number,
    endIndex?: number
  ): void {
    const range = this.windowApi.document.createRange();
    range.selectNodeContents($el);
    if (childTextNode) {
      if (childTextNode.nodeType !== Node.TEXT_NODE) {
        throw new TypeError("childTextNode必须是#text元素");
      }
      if (startIndex != null && endIndex != null) {
        range.setStart(childTextNode, startIndex);
        range.setEnd(childTextNode, endIndex);
      }
    }

    const selection = this.windowApi.globalThis.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
}

const domUtils = new DOMUtils();

export { domUtils as DOMUtils };
