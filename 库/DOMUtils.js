/// <reference path="../库.ts/DOMUtils.d.ts" />

/**
 * 自己常用的元素工具类
 * @copyright GPL-3.0-only
 * @author WhiteSev
 **/
(function (global, factory) {
  /**
   * 不使用define
   * typeof define === "function" && define.amd
   * define(factory)
   */
  if (typeof exports === "object" && typeof module !== "undefined") {
    /* 适用于NodeJs或typeScript */
    module.exports = factory();
  } else {
    global = typeof globalThis !== "undefined" ? globalThis : global || self;
    /* 适用于浏览器中，且this对象是window，如果this是其它，那么会在其它对象下注册对象 */
    global.DOMUtils = factory(global.DOMUtils);
  }
})(typeof window !== "undefined" ? window : this, function (AnotherDOMUtils) {
  const DOMUtils = {};
  /**
   * @type {string} 元素工具类的版本
   */
  DOMUtils.version = "2024-1-7";

  let CommonUtils = {
    /**
     * 判断元素是否已显示或已连接
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    isShow(element) {
      return Boolean(element.getClientRects().length);
    },
    /**
     * 用于显示元素并获取它的高度宽度等其它属性
     * @param {HTMLElement} element
     * @returns {{recovery: Function}} - 恢复
     */
    showElement(element) {
      let oldStyleAttribute = element.getAttribute("style");
      element.setAttribute(
        "style",
        "visibility: !important;display:block !important;"
      );
      return {
        recovery() {
          if (oldStyleAttribute) {
            element.setAttribute("style", oldStyleAttribute);
          } else {
            element.removeAttribute("style");
          }
        },
      };
    },
    /**
     * 获取元素上的Float格式的属性px
     * @param {HTMLElement|CSSStyleDeclaration} element
     * @param {string} styleName style名
     * @return {number}
     */
    getStyleValue(element, styleName) {
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
      let value = parseFloat(styles[styleName]);
      if (isNaN(value)) {
        return 0;
      } else {
        return value;
      }
    },
    /**
     * 判断是否是window，例如window、self、globalThis
     * @param {any} target
     * @returns {boolean}
     */
    isWin(target) {
      if (!typeof target === "object") {
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
      if (target?.Math?.toString() !== "[object Math]") {
        return false;
      }
      return true;
    },
  };
  /**
   * 获取或设置元素的属性值
   * @param {HTMLElement|string} element 目标元素
   * @param {string} attrName 属性名
   * @param {string} [attrValue] 属性值（可选）
   * @returns {?string} 如果传入了attrValue，则返回undefined；否则返回属性值
   * @example
   * // 获取a.xx元素的href属性
   * DOMUtils.attr(document.querySelector("a.xx"),"href");
   * DOMUtils.attr("a.xx","href");
   * > https://xxxx....
   * @example
   * // 修改a.xx元素的href属性为abcd
   * DOMUtils.attr(document.querySelector("a.xx"),"href","abcd");
   * DOMUtils.attr("a.xx","href","abcd");
   * */
  DOMUtils.attr = function (element, attrName, attrValue) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (attrValue === void 0) {
      return element.getAttribute(attrName);
    } else {
      element.setAttribute(attrName, attrValue);
    }
  };

  /**
   * 创建元素
   * @param {keyof HTMLElementTagNameMap} tagName 元素类型
   * @param {HTMLElement|undefined} property 元素属性，对已有元素上的属性或者自定义的属性赋值
   * @param {object|undefined} attributes 元素自定义属性，通过setAttribute赋值
   * @returns {HTMLElement}
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
  DOMUtils.createElement = function (tagName, property, attributes) {
    let tempElement = document.createElement(tagName);
    if (typeof property === "string") {
      tempElement.innerHTML = property;
      return tempElement;
    }
    if (property == void 0) {
      property = {};
    }
    if (attributes == void 0) {
      attributes = {};
    }
    Object.keys(property).forEach((key) => {
      let value = property[key];
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
  };

  /**
   * 获取或设置元素的样式属性值
   * @param {HTMLElement|string} element 目标元素
   * @param {CSSStyleDeclaration|string} property 样式属性名或包含多个属性名和属性值的对象
   * @param {any} [value] 样式属性值（可选）
   * @returns {?string} 如果传入了value，则返回undefined；否则返回样式属性值
   * @example
   * // 获取元素a.xx的CSS属性display
   * DOMUtils.css(document.querySelector("a.xx"),"display");
   * DOMUtils.css("a.xx","display");
   * > "none"
   * @example
   * // 设置元素a.xx的CSS属性display为block
   * DOMUtils.css(document.querySelector("a.xx"),"display","block");
   * DOMUtils.css(document.querySelector("a.xx"),"display","block !important");
   * DOMUtils.css(document.querySelector("a.xx"),{ display: "block" }});
   * DOMUtils.css(document.querySelector("a.xx"),{ display: "block !important" }});
   * DOMUtils.css("a.xx","display","block");
   * DOMUtils.css("a.xx","display","block !important");
   * @example
   * // 设置元素a.xx的CSS属性top为10px
   * DOMUtils.css(document.querySelector("a.xx"),"top","10px");
   * DOMUtils.css(document.querySelector("a.xx"),"top",10);
   * DOMUtils.css(document.querySelector("a.xx"),{ top: "10px" });
   * DOMUtils.css(document.querySelector("a.xx"),{ top: 10 });
   * */
  DOMUtils.css = function (element, property, value) {
    /**
     * 把纯数字没有px的加上
     */
    function handlePixe(propertyName, propertyValue) {
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
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (typeof property === "string") {
      if (value === void 0) {
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
          property[prop].includes("!important")
        ) {
          element.style.setProperty(prop, property[prop], "important");
        } else {
          property[prop] = handlePixe(prop, property[prop]);
          element.style.setProperty(prop, property[prop]);
        }
      }
    }
  };
  /**
   * 获取或设置元素的文本内容
   * @param {HTMLElement} element 目标元素
   * @param {HTMLElement|string} [text] 文本内容（可选）
   * @returns {?string} 如果传入了text，则返回undefined；否则返回文本内容
   * @example
   * // 设置元素a.xx的文本内容为abcd
   * DOMUtils.text(document.querySelector("a.xx"),"abcd")
   * DOMUtils.text("a.xx","abcd")
   * DOMUtils.html("a.xx",document.querySelector("b"))
   * */
  DOMUtils.text = function (element, text) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (text === void 0) {
      return element.textContent || element.innerText;
    } else {
      if (text instanceof Node) {
        text = text.textContent || text.innerText;
      }
      if ("textContent" in element) {
        element.textContent = text;
      } else if ("innerText" in element) {
        element.innerText = text;
      }
    }
  };
  /**
   * 获取或设置元素的HTML内容
   * @param {HTMLElement|string} element 目标元素
   * @param {HTMLElement|string} [html] HTML内容|元素（可选）
   * @returns {?string} 如果传入了html，则返回undefined；否则返回HTML内容
   * @example
   * // 设置元素a.xx的文本内容为<b>abcd</b>
   * DOMUtils.html(document.querySelector("a.xx"),"<b>abcd</b>")
   * DOMUtils.html("a.xx","<b>abcd</b>")
   * DOMUtils.html("a.xx",document.querySelector("b"))
   * */
  DOMUtils.html = function (element, html) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (html == void 0) {
      return element.innerHTML;
    } else {
      if (html instanceof Node) {
        html = html.innerHTML;
      }
      if ("innerHTML" in element) {
        element.innerHTML = html;
      }
    }
  };
  /**
   * 绑定或触发元素的click事件
   * @param {HTMLElement|string} element 目标元素
   * @param {function} [handler] 事件处理函数（可选）
   * @param {object|undefined} details 赋予触发的Event的额外属性
   * @param {boolean} [useDispatchToTriggerEvent=true] 是否使用dispatchEvent来触发事件,默认true
   * @example
   * // 触发元素a.xx的click事件
   * DOMUtils.click(document.querySelector("a.xx"))
   * DOMUtils.click("a.xx")
   * DOMUtils.click("a.xx"，function(){
   *  console.log("触发click事件成功")
   * })
   * */
  DOMUtils.click = function (
    element,
    handler,
    details,
    useDispatchToTriggerEvent = true
  ) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (handler === void 0) {
      DOMUtils.trigger(element, "click", details, useDispatchToTriggerEvent);
    } else {
      DOMUtils.on(element, "click", null, handler);
    }
  };

  /**
   * 绑定或触发元素的blur事件
   * @param {HTMLElement|string} element 目标元素
   * @param {function} [handler] 事件处理函数（可选）
   * @param {object|undefined} details 赋予触发的Event的额外属性
   * @param {boolean} [useDispatchToTriggerEvent=true] 是否使用dispatchEvent来触发事件,默认true
   * @example
   * // 触发元素a.xx的blur事件
   * DOMUtils.blur(document.querySelector("a.xx"))
   * DOMUtils.blur("a.xx")
   * DOMUtils.blur("a.xx"，function(){
   *  console.log("触发blur事件成功")
   * })
   * */
  DOMUtils.blur = function (
    element,
    handler,
    details,
    useDispatchToTriggerEvent = true
  ) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (handler === void 0) {
      DOMUtils.trigger(element, "blur", details, useDispatchToTriggerEvent);
    } else {
      DOMUtils.on(element, "blur", null, handler);
    }
  };
  /**
   * 绑定或触发元素的focus事件
   * @param {HTMLElement|string|window} element 目标元素
   * @param {?function} [handler] 事件处理函数（可选）
   * @param {object|undefined} details 赋予触发的Event的额外属性
   * @param {boolean} [useDispatchToTriggerEvent=true] 是否使用dispatchEvent来触发事件,默认true
   * @example
   * // 触发元素a.xx的focus事件
   * DOMUtils.focus(document.querySelector("a.xx"))
   * DOMUtils.focus("a.xx")
   * DOMUtils.focus("a.xx"，function(){
   *  console.log("触发focus事件成功")
   * })
   * */
  DOMUtils.focus = function (
    element,
    handler,
    details,
    useDispatchToTriggerEvent = true
  ) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (handler === void 0) {
      DOMUtils.trigger(element, "focus", details, useDispatchToTriggerEvent);
    } else {
      DOMUtils.on(element, "focus", null, handler);
    }
  };
  /**
   * 获取或设置元素的value属性值
   * @param {HTMLElement|string} element 目标元素
   * @param {string} [value] value属性值（可选）
   * @returns {string|undefined} 如果传入了value，则返回undefined；否则返回value属性值
   * @example
   * // 获取元素input.xx的复选框值
   * DOMUtils.val(document.querySelector("input.xx"))
   * DOMUtils.val("input.xx")
   * > true
   * @example
   * // 修改元素input.xx的复选框值为true
   * DOMUtils.val(document.querySelector("input.xx"),true)
   * DOMUtils.val("input.xx",true)
   * */
  DOMUtils.val = function (element, value) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (value == void 0) {
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
        element.value = value;
      }
    }
  };
  /**
   * 获取或设置元素的属性值
   * @param {HTMLElement|string} element 目标元素
   * @param {string} propName 属性名
   * @param {string} [propValue] 属性值（可选）
   * @returns {string|undefined} 如果传入了propValue，则返回undefined；否则返回属性值
   * @example
   * // 获取元素a.xx的属性data-value
   * DOMUtils.val(document.querySelector("a.xx"),"data-value")
   * DOMUtils.val("a.xx","data-value")
   * > undefined
   * @example
   * // 设置元素a.xx的属性data-value为1
   * DOMUtils.val(document.querySelector("a.xx"),"data-value",1)
   * DOMUtils.val("a.xx","data-value",1)
   * */
  DOMUtils.prop = function (element, propName, propValue) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (propValue == void 0) {
      return element[propName];
    } else {
      element[propName] = propValue;
    }
  };

  /**
   * 移除元素的属性
   * @param {HTMLElement|string} element 目标元素
   * @param {string} attrName 属性名
   * @example
   * // 移除元素a.xx的属性data-value
   * DOMUtils.removeAttr(document.querySelector("a.xx"),"data-value")
   * DOMUtils.removeAttr("a.xx","data-value")
   * */
  DOMUtils.removeAttr = function (element, attrName) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    element.removeAttribute(attrName);
  };

  /**
   * 移除元素class名
   * @param {HTMLElement|string} element 目标元素
   * @param {string} className class名
   * @returns {DOMUtils} 原型链
   * @example
   * // 移除元素a.xx的className为xx
   * DOMUtils.removeClass(document.querySelector("a.xx"),"xx")
   * DOMUtils.removeClass("a.xx","xx")
   */
  DOMUtils.removeClass = function (element, className) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (className == void 0) {
      return;
    }
    element.classList.remove(className);
  };

  /**
   * 移除元素的属性
   * @param {HTMLElement|string} element 目标元素
   * @param {string} propName 属性名
   * @example
   * // 移除元素a.xx的href属性
   * DOMUtils.removeProp(document.querySelector("a.xx"),"href")
   * DOMUtils.removeProp("a.xx","href")
   * */
  DOMUtils.removeProp = function (element, propName) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    delete element[propName];
  };

  /**
   * 将一个元素替换为另一个元素
   * @param {HTMLElement|string} element 目标元素
   * @param {HTMLElement|string} newElement 新元素
   * @returns {DOMUtils} 原型链
   * @example
   * // 替换元素a.xx为b.xx
   * DOMUtils.replaceWith(document.querySelector("a.xx"),document.querySelector("b.xx"))
   * DOMUtils.replaceWith("a.xx",'<b class="xx"></b>')
   */
  DOMUtils.replaceWith = function (element, newElement) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (typeof newElement === "string") {
      newElement = DOMUtils.parseHTML(newElement, false, false);
    }
    if (element instanceof NodeList || element instanceof Array) {
      element.forEach((item) => {
        DOMUtils.replaceWith(item, newElement);
      });
    } else {
      element.parentElement.replaceChild(newElement, element);
    }
  };

  /**
   * 给元素添加class
   * @param {HTMLElement|string} element 目标元素
   * @param {string} className class名
   * @example
   * // 元素a.xx的className添加_vue_
   * DOMUtils.addClass(document.querySelector("a.xx"),"_vue_")
   * DOMUtils.addClass("a.xx","_vue_")
   * */
  DOMUtils.addClass = function (element, className) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    element.classList.add(className);
  };
  /**
   * 函数在元素内部末尾添加子元素或HTML字符串
   * @param {HTMLElement|string} element 目标元素
   * @param {HTMLElement|string} content 子元素或HTML字符串
   * @example
   * // 元素a.xx的内部末尾添加一个元素
   * DOMUtils.append(document.querySelector("a.xx"),document.querySelector("b.xx"))
   * DOMUtils.append("a.xx","'<b class="xx"></b>")
   * */
  DOMUtils.append = function (element, content) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (typeof content === "string") {
      element.insertAdjacentHTML("beforeend", content);
    } else {
      element.appendChild(content);
    }
  };

  /**
   * 函数 在元素内部开头添加子元素或HTML字符串
   * @param {HTMLElement|string} element 目标元素
   * @param {HTMLElement|string} content 子元素或HTML字符串
   * @example
   * // 元素a.xx内部开头添加一个元素
   * DOMUtils.prepend(document.querySelector("a.xx"),document.querySelector("b.xx"))
   * DOMUtils.prepend("a.xx","'<b class="xx"></b>")
   * */
  DOMUtils.prepend = function (element, content) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (typeof content === "string") {
      element.insertAdjacentHTML("afterbegin", content);
    } else {
      element.insertBefore(content, element.firstChild);
    }
  };
  /**
   * 在元素后面添加兄弟元素或HTML字符串
   * @param {HTMLElement|string} element 目标元素
   * @param {HTMLElement|string} content 兄弟元素或HTML字符串
   * @example
   * // 元素a.xx后面添加一个元素
   * DOMUtils.after(document.querySelector("a.xx"),document.querySelector("b.xx"))
   * DOMUtils.after("a.xx","'<b class="xx"></b>")
   * */
  DOMUtils.after = function (element, content) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (typeof content === "string") {
      element.insertAdjacentHTML("afterend", content);
    } else {
      element.parentElement.insertBefore(content, element.nextSibling);
    }
  };

  /**
   * 在元素前面添加兄弟元素或HTML字符串
   * @param {HTMLElement|string} element 目标元素
   * @param {HTMLElement|string} content 兄弟元素或HTML字符串
   * @example
   * // 元素a.xx前面添加一个元素
   * DOMUtils.before(document.querySelector("a.xx"),document.querySelector("b.xx"))
   * DOMUtils.before("a.xx","'<b class="xx"></b>")
   * */
  DOMUtils.before = function (element, content) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (typeof content === "string") {
      element.insertAdjacentHTML("beforebegin", content);
    } else {
      element.parentElement.insertBefore(content, element);
    }
  };

  /**
   * 移除元素
   * @param {HTMLElement|string|NodeList} element 目标元素
   * @example
   * // 元素a.xx前面添加一个元素
   * DOMUtils.remove(document.querySelector("a.xx"))
   * DOMUtils.remove(document.querySelectorAll("a.xx"))
   * DOMUtils.remove("a.xx")
   * */
  DOMUtils.remove = function (element) {
    if (typeof element === "string") {
      element = document.querySelectorAll(element);
    }
    if (element == void 0) {
      return;
    }
    if (element instanceof NodeList || element instanceof Array) {
      element.forEach(function (item) {
        DOMUtils.remove(item);
      });
    } else {
      element.remove();
    }
  };
  /**
   * 移除元素的所有子元素
   * @param {HTMLElement|string} element 目标元素
   * @example
   * // 移除元素a.xx元素的所有子元素
   * DOMUtils.empty(document.querySelector("a.xx"))
   * DOMUtils.empty("a.xx")
   * */
  DOMUtils.empty = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  };
  /**
   * 绑定事件
   * @param {HTMLElement|string|NodeList|Array|Window} element 需要绑定的元素|元素数组|window
   * @param {DOMUtils_EventType|DOMUtils_EventType[]} eventType 需要监听的事件
   * @param {string|undefined} selector 子元素选择器
   * @param {((event: Event)=>void)|undefined} callback 绑定事件触发的回调函数
   * @param {boolean|AddEventListenerOptions|undefined} option
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
  DOMUtils.on = function (element, eventType, selector, callback, option) {
    /**
     * 获取option配置
     * @param {any[]} args
     * @param {number} startIndex
     * @param {AddEventListenerOptions} option
     * @returns {AddEventListenerOptions}
     */
    function getOption(args, startIndex, option) {
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

    let args = arguments;
    if (typeof element === "string") {
      element = document.querySelectorAll(element);
    }
    if (element == void 0) {
      return;
    }
    /**
     * @type {HTMLElement[]}
     */
    let elementList = [];
    if (element instanceof NodeList || Array.isArray(element)) {
      elementList = [...element];
    } else {
      elementList.push(element);
    }
    /**
     * @type {string[]}
     */
    let eventTypeList = [];
    if (Array.isArray(eventType)) {
      eventTypeList = eventTypeList.concat(eventType);
    } else if (typeof eventType === "string") {
      eventTypeList = eventTypeList.concat(eventType.split(" "));
    }
    /**
     * 元素属性上自定义的用于暂存事件的对象名
     */
    let propEventsName = "events";
    /**
     * window属性上自定义的用于暂存事件的对象名
     */
    let windowEventsName = "DOMUtilsGlobalEvents";
    /**
     * @type {?string}
     */
    let _selector_ = selector;
    /**
     * @type {(event:Event)=>{}}
     */
    let _callback_ = callback;
    /**
     * @type {AddEventListenerOptions}
     */
    let _option_ = {
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
    elementList.forEach((elementItem) => {
      let ownCallBack = function (event) {
        let target = event.target;
        if (_selector_) {
          /* 存在自定义子元素选择器 */
          let totalParent = CommonUtils.isWin(elementItem)
            ? document.documentElement
            : elementItem;
          if (target.matches(_selector_)) {
            /* 当前目标可以被selector所匹配到 */
            _callback_.call(target, event);
            return;
          } else if (
            target.closest(_selector_) &&
            totalParent.contains(target.closest(_selector_))
          ) {
            /* 在上层与主元素之间寻找可以被selector所匹配到的 */
            let closestElement = target.closest(_selector_);
            /* event的target值不能直接修改 */
            Object.defineProperty(event, "target", {
              get() {
                return closestElement;
              },
            });
            _callback_.call(closestElement, event);
            return;
          }
        } else {
          _callback_.call(elementItem, event);
        }
      };
      /* 判断元素是否是window */
      let attributeEventName = CommonUtils.isWin(elementItem)
        ? windowEventsName
        : propEventsName;
      /* 遍历事件名设置元素事件 */
      eventTypeList.forEach((eventName) => {
        elementItem.addEventListener(eventName, ownCallBack, _option_);

        if (_callback_ && _callback_.delegate) {
          elementItem.setAttribute("data-delegate", _selector_);
        }

        let elementEvents = elementItem[attributeEventName] || {};
        elementEvents[eventName] = elementEvents[eventName] || [];
        elementEvents[eventName].push({
          selector: _selector_,
          option: _option_,
          callback: ownCallBack,
          originCallBack: _callback_,
        });
        elementItem[attributeEventName] = elementEvents;
      });
    });
  };
  /**
   * 取消绑定事件
   * @param {HTMLElement|string|NodeList|Array|Window} element 需要取消绑定的元素|元素数组
   * @param {DOMUtils_EventType|DOMUtils_EventType[]} eventType 需要取消监听的事件
   * @param {string|undefined} selector 子元素选择器
   * @param {((event:Event)=>void)|undefined} callback 通过DOMUtils.on绑定的事件函数
   * @param {EventListenerOptions|boolean|undefined} option
   * + capture 如果在添加事件监听器时指定了useCapture为true，则在移除事件监听器时也必须指定为true
   * @example
   * // 取消监听元素a.xx的click事件
   * DOMUtils.off(document.querySelector("a.xx"),"click")
   * DOMUtils.off("a.xx","click")
   * // 取消监听元素a.xx的click、tap、hover事件
   * DOMUtils.off(document.querySelector("a.xx"),"click tap hover")
   * DOMUtils.off("a.xx",["click","tap","hover"])
   * // 取消监听全局下的a.xx的点击事件
   * DOMUtils.off(document,"click","a.xx")
   */
  DOMUtils.off = function (element, eventType, selector, callback, option) {
    /**
     * 获取option配置
     * @param {any[]} args
     * @param {number} startIndex
     * @param {EventListenerOptions} option
     * @returns {EventListenerOptions}
     */
    function getOption(args, startIndex, option) {
      if (typeof args[startIndex] === "boolean") {
        option.capture = args[startIndex];
      } else if (
        typeof args[startIndex] === "object" &&
        "capture" in args[startIndex]
      ) {
        option.capture = args[startIndex].capture;
      }
      return option;
    }

    let args = arguments;
    if (typeof element === "string") {
      element = document.querySelectorAll(element);
    }
    if (element == void 0) {
      return;
    }
    /**
     * @type {HTMLElement[]}
     */
    let elementList = [];
    if (element instanceof NodeList || Array.isArray(element)) {
      elementList = [...element];
    } else {
      elementList.push(element);
    }
    /**
     * @type {string[]}
     */
    let eventTypeList = [];
    if (Array.isArray(eventType)) {
      eventTypeList = eventTypeList.concat(eventType);
    } else if (typeof eventType === "string") {
      eventTypeList = eventTypeList.concat(eventType.split(" "));
    }
    /**
     * 元素属性上自定义的用于暂存事件的对象名
     */
    let propEventsName = "events";
    /**
     * window属性上自定义的用于暂存事件的对象名
     */
    let windowEventsName = "DOMUtilsGlobalEvents";
    /**
     * @type {?string}
     */
    let _selector_ = selector;
    /**
     * @type {(event:Event)=>{}}
     */
    let _callback_ = callback;

    /**
     * @type {EventListenerOptions}
     */
    let _option_ = {
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
      let elementEvents = {};
      if (CommonUtils.isWin(elementItem)) {
        elementEvents = elementItem[windowEventsName] || {};
      } else {
        elementEvents = elementItem[propEventsName] || {};
      }
      eventTypeList.forEach((eventName) => {
        let handlers = elementEvents[eventName] || [];
        for (let index = 0; index < handlers.length; index++) {
          let handler = handlers[index];
          if (
            (!_selector_ || handler.selector === _selector_) &&
            (!_callback_ ||
              handler.callback === _callback_ ||
              handler.originCallBack === _callback_)
          ) {
            elementItem.removeEventListener(
              eventName,
              handler.callback,
              _option_
            );
            handlers.splice(index--, 1);
          }
        }
        if (handlers.length === 0) {
          delete elementEvents[eventType];
        }
      });
      if (CommonUtils.isWin(elementItem)) {
        elementItem[windowEventsName] = elementEvents;
      } else {
        elementItem[propEventsName] = elementEvents;
      }
    });
  };

  /**
   * 主动触发事件
   * @param {HTMLElement|string|NodeList|Array|Window} element 需要触发的元素|元素数组|window
   * @param {DOMUtils_EventType|DOMUtils_EventType[]} eventType 需要触发的事件
   * @param {object|undefined} details 赋予触发的Event的额外属性
   * @param {boolean} [useDispatchToTriggerEvent=true] 是否使用dispatchEvent来触发事件,默认true
   * @example
   * // 触发元素a.xx的click事件
   * DOMUtils.trigger(document.querySelector("a.xx"),"click")
   * DOMUtils.trigger("a.xx","click")
   * // 触发元素a.xx的click、tap、hover事件
   * DOMUtils.trigger(document.querySelector("a.xx"),"click tap hover")
   * DOMUtils.trigger("a.xx",["click","tap","hover"])
   */
  DOMUtils.trigger = function (
    element,
    eventType,
    details,
    useDispatchToTriggerEvent = true
  ) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    let elementList = [];
    if (element instanceof NodeList || Array.isArray(element)) {
      elementList = [...element];
    } else {
      elementList = [element];
    }
    let eventTypeList = [];
    if (!eventType) {
      for (let type in events) {
        eventTypeList = [...eventTypeList, type];
      }
    } else if (Array.isArray(eventType)) {
      eventTypeList = eventType;
    } else if (typeof eventType === "string") {
      eventTypeList = eventType.split(" ");
    }

    elementList.forEach((elementItem) => {
      let events = {};
      if (CommonUtils.isWin(elementItem)) {
        events = elementItem["DOMUtilsGlobalEvents"] || {};
      } else {
        events = elementItem.events || {};
      }
      eventTypeList.forEach((_eventType_) => {
        let event = new Event(_eventType_);
        if (details) {
          Object.assign(event, details);
        }
        if (useDispatchToTriggerEvent == false && _eventType_ in events) {
          events[_eventType_].forEach((eventsItem) => {
            eventsItem.callback(event);
          });
        } else {
          elementItem.dispatchEvent(event);
        }
      });
    });
  };
  /**
   * 设置或返回被选元素相对于文档的偏移坐标
   * @param {HTMLElement|string} element
   * @returns { {
   *   top: number,
   *   left: number
   * }}
   * @example
   * // 获取元素a.xx的对于文档的偏移坐标
   * DOMUtils.offset(document.querySelector("a.xx"))
   * DOMUtils.offset("a.xx")
   * > 0
   */
  DOMUtils.offset = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    let rect = element.getBoundingClientRect();
    let win = window;
    return {
      top: rect.top + win.scrollY,
      left: rect.left + win.scrollX,
    };
  };
  /**
   * 获取元素的宽度
   * @param {HTMLElement|string} element 要获取宽度的元素
   * @param {boolean} [isShow=false] 是否已进行isShow，避免爆堆栈
   * @returns {number} 元素的宽度，单位为像素
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
  DOMUtils.width = function (element, isShow = false) {
    if (CommonUtils.isWin(element)) {
      return window.document.documentElement.clientWidth;
    }
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (element.nodeType === 9) {
      /* 文档节点 */
      return Math.max(
        element.body.scrollWidth,
        element.documentElement.scrollWidth,
        element.body.offsetWidth,
        element.documentElement.offsetWidth,
        element.documentElement.clientWidth
      );
    }
    if (CommonUtils.isShow(element)) {
      /* 已显示 */
      /* 不从style中获取对应的宽度，因为可能使用了class定义了width !important */

      /* 如果element.style.width为空  则从css里面获取是否定义了width信息如果定义了 则读取css里面定义的宽度width */
      if (parseFloat(CommonUtils.getStyleValue(element, "width")) > 0) {
        return parseFloat(CommonUtils.getStyleValue(element, "width"));
      }

      /* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetWidth来进行计算 */
      if (element.offsetWidth > 0) {
        let borderLeftWidth = CommonUtils.getStyleValue(
          element,
          "borderLeftWidth"
        );
        let borderRightWidth = CommonUtils.getStyleValue(
          element,
          "borderRightWidth"
        );
        let paddingLeft = CommonUtils.getStyleValue(element, "paddingLeft");
        let paddingRight = CommonUtils.getStyleValue(element, "paddingRight");
        let backHeight =
          parseFloat(element.offsetWidth) -
          parseFloat(borderLeftWidth) -
          parseFloat(borderRightWidth) -
          parseFloat(paddingLeft) -
          parseFloat(paddingRight);
        return parseFloat(backHeight);
      }
      return 0;
    } else {
      /* 未显示 */
      let { recovery } = CommonUtils.showElement(element);
      let width = DOMUtils.width(element, true);
      recovery();
      return width;
    }
  };
  /**
   * 获取元素的高度
   * @param {HTMLElement|string} element 要获取高度的元素
   * @param {boolean} [isShow=false] 是否已进行isShow，避免爆堆栈
   * @returns {number} 元素的高度，单位为像素
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
  DOMUtils.height = function (element, isShow = false) {
    if (CommonUtils.isWin(element)) {
      return window.document.documentElement.clientHeight;
    }
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (element.nodeType === 9) {
      /* 文档节点 */
      return Math.max(
        element.body.scrollHeight,
        element.documentElement.scrollHeight,
        element.body.offsetHeight,
        element.documentElement.offsetHeight,
        element.documentElement.clientHeight
      );
    }
    if (CommonUtils.isShow(element)) {
      /* 已显示 */
      /* 从style中获取对应的高度，因为可能使用了class定义了width !important */
      /* 如果element.style.height为空  则从css里面获取是否定义了height信息如果定义了 则读取css里面定义的高度height */
      if (parseFloat(CommonUtils.getStyleValue(element, "height")) > 0) {
        return parseFloat(CommonUtils.getStyleValue(element, "height"));
      }

      /* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetHeight来进行计算 */
      if (element.offsetHeight > 0) {
        let borderTopWidth = CommonUtils.getStyleValue(
          element,
          "borderTopWidth"
        );
        let borderBottomWidth = CommonUtils.getStyleValue(
          element,
          "borderBottomWidth"
        );
        let paddingTop = CommonUtils.getStyleValue(element, "paddingTop");
        let paddingBottom = CommonUtils.getStyleValue(element, "paddingBottom");
        let backHeight =
          parseFloat(element.offsetHeight) -
          parseFloat(borderTopWidth) -
          parseFloat(borderBottomWidth) -
          parseFloat(paddingTop) -
          parseFloat(paddingBottom);
        return parseFloat(backHeight);
      }
      return 0;
    } else {
      /* 未显示 */
      let { recovery } = CommonUtils.showElement(element);
      let height = DOMUtils.height(element, true);
      recovery();
      return height;
    }
  };
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
  DOMUtils.outerWidth = function (element, isShow = false) {
    if (CommonUtils.isWin(element)) {
      return window.innerWidth;
    }
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (CommonUtils.isShow(element)) {
      let style = getComputedStyle(element, null);
      let marginLeft = CommonUtils.getStyleValue(style, "marginLeft");
      let marginRight = CommonUtils.getStyleValue(style, "marginRight");
      return element.offsetWidth + marginLeft + marginRight;
    } else {
      let { recovery } = CommonUtils.showElement(element);
      let outerWidth = DOMUtils.outerWidth(element, true);
      recovery();
      return outerWidth;
    }
  };
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
  DOMUtils.outerHeight = function (element, isShow = false) {
    if (CommonUtils.isWin(element)) {
      return window.innerHeight;
    }
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (CommonUtils.isShow(element)) {
      let style = getComputedStyle(element, null);
      let marginTop = CommonUtils.getStyleValue(style, "marginTop");
      let marginBottom = CommonUtils.getStyleValue(style, "marginBottom");
      return element.offsetHeight + marginTop + marginBottom;
    } else {
      let { recovery } = CommonUtils.showElement(element);
      let outerHeight = DOMUtils.outerHeight(element, true);
      recovery();
      return outerHeight;
    }
  };

  /**
   * 等待文档加载完成后执行指定的函数
   * @param {Function} callback 需要执行的函数
   * @example
   * DOMUtils.ready(function(){
   *   console.log("文档加载完毕")
   * })
   */
  DOMUtils.ready = function (callback) {
    function completed() {
      document.removeEventListener("DOMContentLoaded", completed);
      window.removeEventListener("load", completed);
      callback();
    }
    if (
      document.readyState === "complete" ||
      (document.readyState !== "loading" && !document.documentElement.doScroll)
    ) {
      window.setTimeout(callback);
    } else {
      /* 监听DOMContentLoaded事件 */
      document.addEventListener("DOMContentLoaded", completed);
      /* 监听load事件 */
      window.addEventListener("load", completed);
    }
  };

  /**
   * 在一定时间内改变元素的样式属性，实现动画效果
   * @param {HTMLElement|string} element 需要进行动画的元素
   * @param {CSSStyleDeclaration} styles 动画结束时元素的样式属性
   * @param {number} [duration=1000] 动画持续时间，单位为毫秒
   * @param {Function} [callback=null] 动画结束后执行的函数
   * @example
   * // 监听元素a.xx的从显示变为隐藏
   * DOMUtils.animate(document.querySelector("a.xx"),{ top:100},1000,function(){
   *   console.log("已往上位移100px")
   * })
   */
  DOMUtils.animate = function (
    element,
    styles,
    duration = 1000,
    callback = null
  ) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
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
    let from = {};
    let to = {};
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
  };

  /**
   * 将一个元素包裹在指定的HTML元素中
   * @param {HTMLElement|string} element 要包裹的元素
   * @param {string} wrapperHTML 要包裹的HTML元素的字符串表示形式
   * @example
   * // 将a.xx元素外面包裹一层div
   * DOMUtils.wrap(document.querySelector("a.xx"),"<div></div>")
   */
  DOMUtils.wrap = function (element, wrapperHTML) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    // 创建一个新的div元素，并将wrapperHTML作为其innerHTML
    let wrapper = document.createElement("div");
    wrapper.innerHTML = wrapperHTML;

    wrapper = wrapper.firstChild;
    // 将要包裹的元素插入目标元素前面
    element.parentElement.insertBefore(wrapper, element);

    // 将要包裹的元素移动到wrapper中
    wrapper.appendChild(element);
  };
  /**
   * 获取当前元素的前一个兄弟元素
   * @param {HTMLElement|string} element 当前元素
   * @returns {?HTMLElement} 前一个兄弟元素
   * @example
   * // 获取a.xx元素前一个兄弟元素
   * DOMUtils.prev(document.querySelector("a.xx"))
   * DOMUtils.prev("a.xx")
   * > <div ...>....</div>
   */
  DOMUtils.prev = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    return element.previousElementSibling;
  };

  /**
   * 获取当前元素的后一个兄弟元素
   * @param {HTMLElement|string} element 当前元素
   * @returns {?HTMLElement} 后一个兄弟元素
   * @example
   * // 获取a.xx元素前一个兄弟元素
   * DOMUtils.next(document.querySelector("a.xx"))
   * DOMUtils.next("a.xx")
   * > <div ...>....</div>
   */
  DOMUtils.next = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    return element.nextElementSibling;
  };

  /**
   * 释放原有的DOMUtils控制权
   * @example
   * let DOMUtils = window.DOMUtils.noConflict()
   */
  DOMUtils.noConflict = function () {
    if (window.DOMUtils) {
      delete window.DOMUtils;
    }
    if (AnotherDOMUtils) {
      window.DOMUtils = AnotherDOMUtils;
    }
    return DOMUtils;
  };

  /**
   * 获取当前元素的所有兄弟元素
   * @param {HTMLElement|string} element 当前元素
   * @returns {HTMLElement[]} 所有兄弟元素
   * @example
   * // 获取a.xx元素所有兄弟元素
   * DOMUtils.siblings(document.querySelector("a.xx"))
   * DOMUtils.siblings("a.xx")
   * > (3) [div.logo-wrapper, div.forum-block, div.more-btn-desc]
   */
  DOMUtils.siblings = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    return Array.from(element.parentElement.children).filter(
      (child) => child !== element
    );
  };

  /**
   * 获取当前元素的父元素
   * @param {HTMLElement|NodeList|string} element 当前元素
   * @returns {?HTMLElement[]|HTMLElement} 父元素
   * @example
   * // 获取a.xx元素的父元素
   * DOMUtils.parent(document.querySelector("a.xx"))
   * DOMUtils.parent("a.xx")
   * > <div ...>....</div>
   */
  DOMUtils.parent = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (element instanceof NodeList || element instanceof Array) {
      let resultArray = [];
      element.forEach((item) => {
        resultArray = resultArray.concat(this.parent(item));
      });
      return resultArray;
    } else {
      return element.parentElement;
    }
  };

  /**
   * 将字符串转为Element元素
   * @param {string} html
   * @param {boolean} useParser 是否使用DOMParser来生成元素，有些时候通过DOMParser生成的元素有点问题
   * @param {boolean} isComplete 是否是完整的
   * @returns {HTMLElement}
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
  DOMUtils.parseHTML = function (html, useParser = false, isComplete = false) {
    function parseHTMLByDOMParser() {
      let parser = new DOMParser();
      if (isComplete) {
        return parser.parseFromString(html, "text/html");
      } else {
        return parser.parseFromString(html, "text/html").body.firstChild;
      }
    }
    function parseHTMLByCreateDom() {
      let tempDIV = document.createElement("div");
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
  };

  /**
   * 当鼠标移入或移出元素时触发事件
   * @param {HTMLElement|string} element 当前元素
   * @param {(event:Event)=>{}} handler 事件处理函数
   * @example
   * // 监听a.xx元素的移入或移出
   * DOMUtils.hover(document.querySelector("a.xx"),()=>{
   *   console.log("移入/移除");
   * })
   * DOMUtils.hover("a.xx",()=>{
   *   console.log("移入/移除");
   * })
   */
  DOMUtils.hover = function (element, handler) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    DOMUtils.on(element, "mouseenter", null, handler);
    DOMUtils.on(element, "mouseleave", null, handler);
  };

  /**
   * 显示元素
   * @param {HTMLElement|string} element 当前元素
   * @example
   * // 显示a.xx元素
   * DOMUtils.show(document.querySelector("a.xx"))
   * DOMUtils.show("a.xx")
   */
  DOMUtils.show = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    element.style.display = "";
  };

  /**
   * 隐藏元素
   * @param {HTMLElement|string} element 当前元素
   * @example
   * // 隐藏a.xx元素
   * DOMUtils.hide(document.querySelector("a.xx"))
   * DOMUtils.hide("a.xx")
   */
  DOMUtils.hide = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    element.style.display = "none";
  };

  /**
   * 当按键松开时触发事件
   * @param {HTMLElement|string} element 当前元素
   * @param {Function} handler 事件处理函数
   * @example
   * // 监听a.xx元素的按键松开
   * DOMUtils.keyup(document.querySelector("a.xx"),()=>{
   *   console.log("按键松开");
   * })
   * DOMUtils.keyup("a.xx",()=>{
   *   console.log("按键松开");
   * })
   */
  DOMUtils.keyup = function (element, handler) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    DOMUtils.on(element, "keyup", null, handler);
  };

  /**
   * 当按键按下时触发事件
   * @param {HTMLElement|string} element 当前元素
   * @param {Function} handler 事件处理函数
   * @example
   * // 监听a.xx元素的按键按下
   * DOMUtils.keydown(document.querySelector("a.xx"),()=>{
   *   console.log("按键按下");
   * })
   * DOMUtils.keydown("a.xx",()=>{
   *   console.log("按键按下");
   * })
   */
  DOMUtils.keydown = function (element, handler) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    DOMUtils.on(element, "keydown", null, handler);
  };

  /**
   * 淡入元素
   * @param {HTMLElement|string} element 当前元素
   * @param {number} [duration=400] 动画持续时间（毫秒），默认400毫秒
   * @param {Function} callback 动画结束的回调
   * @example
   * // 元素a.xx淡入
   * DOMUtils.fadeIn(document.querySelector("a.xx"),2500,()=>{
   *   console.log("淡入完毕");
   * })
   * DOMUtils.fadeIn("a.xx",undefined,()=>{
   *   console.log("淡入完毕");
   * })
   */
  DOMUtils.fadeIn = function (element, duration = 400, callback) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    element.style.opacity = 0;
    element.style.display = "";
    let start = null;
    let timer = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      element.style.opacity = Math.min(progress / duration, 1);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        if (callback && typeof callback === "function") {
          callback();
        }
        window.cancelAnimationFrame(timer);
      }
    }
    timer = window.requestAnimationFrame(step);
  };

  /**
   * 淡出元素
   * @param {HTMLElement|string} element 当前元素
   * @param {number} [duration=400] 动画持续时间（毫秒），默认400毫秒
   * @param {Function} callback 动画结束的回调
   * @example
   * // 元素a.xx淡出
   * DOMUtils.fadeOut(document.querySelector("a.xx"),2500,()=>{
   *   console.log("淡出完毕");
   * })
   * DOMUtils.fadeOut("a.xx",undefined,()=>{
   *   console.log("淡出完毕");
   * })
   */
  DOMUtils.fadeOut = function (element, duration = 400, callback) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    element.style.opacity = 1;
    let start = null;
    let timer = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      element.style.opacity = Math.max(1 - progress / duration, 0);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        element.style.display = "none";
        if (typeof callback === "function") {
          callback();
        }
        window.cancelAnimationFrame(timer);
      }
    }
    timer = window.requestAnimationFrame(step);
  };

  /**
   * 切换元素的显示和隐藏状态
   * @param {HTMLElement|string} element 当前元素
   * @example
   * // 如果元素a.xx当前是隐藏，则显示，如果是显示，则隐藏
   * DOMUtils.toggle(document.querySelector("a.xx"))
   * DOMUtils.toggle("a.xx")
   */
  DOMUtils.toggle = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (getComputedStyle(element).getPropertyValue("display") === "none") {
      DOMUtils.show(element);
    } else {
      DOMUtils.hide(element);
    }
  };
  return DOMUtils;
});
