/**
 * 自己常用的元素节点工具类
 * @copyright  GPL-3.0-only
 * @author  WhiteSevs
 * @version  1.3
 * @namespace
 **/
(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      (global.DOMUtils = factory()));
})(this, function () {
  "use strict";
  const DOMUtils = {};
  /**
   * 获取或设置元素的属性值
   * @param {HTMLElement|string} element 目标元素
   * @param {string} attrName - 属性名
   * @param {string} [attrValue] - 属性值（可选）
   * @returns {string|undefined} - 如果传入了attrValue，则返回undefined；否则返回属性值
   * */
  DOMUtils.attr = function (element, attrName, attrValue) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (attrValue === undefined) {
      return element.getAttribute(attrName);
    } else {
      element.setAttribute(attrName, attrValue);
    }
  };

  /**
   * 创建元素
   * @param {string} tagName 元素类型
   * @param {object} property 元素属性
   * @returns {Element}
   */
  DOMUtils.createElement = function (tagName, property) {
    let tempElement = document.createElement(tagName);
    if (typeof property === "string") {
      tempElement.innerHTML = property;
      return tempElement;
    }
    if (property == null) {
      return tempElement;
    }
    Object.keys(property).forEach((key) => {
      if (key in tempElement && typeof property[key] !== "object") {
        tempElement[key] = property[key];
      } else {
        tempElement.setAttribute(key, property[key]);
      }
    });
    return tempElement;
  };

  /**
   * 获取或设置元素的样式属性值
   * @param {Element|string} element 目标元素
   * @param {string|object} property - 样式属性名或包含多个属性名和属性值的对象
   * @param {string} [value] - 样式属性值（可选）
   * @returns {string|undefined} - 如果传入了value，则返回undefined；否则返回样式属性值
   * */
  DOMUtils.css = function (element, property, value) {
    /**
     * 把纯数字没有px的加上
     */
    function handlePixe(propertyName, propertyValue) {
      let allowAddPixe = ["width", "height", "top", "left", "right", "bottom"];
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
    if (typeof property === "string") {
      if (value === undefined) {
        return element.style[property];
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
   * @param {Element|element} element 目标元素
   * @param {string} [text] - 文本内容（可选）
   * @returns {string|undefined} - 如果传入了text，则返回undefined；否则返回文本内容
   * */
  DOMUtils.text = function (element, text) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (text === undefined) {
      return element.textContent;
    } else {
      if ("textContent" in element) {
        element.textContent = text;
      }
    }
  };
  /**
   * 获取或设置元素的HTML内容
   * @param {Element|string} element 目标元素
   * @param {string} [html] - HTML内容（可选）
   * @returns {string|undefined} - 如果传入了html，则返回undefined；否则返回HTML内容
   * */
  DOMUtils.html = function (element, html) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (html === undefined) {
      return element.innerHTML;
    } else {
      if ("innerHTML" in element) {
        element.innerHTML = html;
      }
    }
  };
  /**
   * 绑定或触发元素的click事件
   * @param {Element|string} element 目标元素
   * @param {function} [handler] - 事件处理函数（可选）
   * @returns {DOMUtils} - 原型链
   * @function
   * */
  DOMUtils.click = function (element, handler) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (handler === undefined) {
      DOMUtils.trigger(element, "click");
    } else {
      DOMUtils.on(element, "click", null, handler);
    }
    return this;
  };

  /**
   * 绑定或触发元素的blur事件
   * @param {Element|string} element 目标元素
   * @param {function} [handler] - 事件处理函数（可选）
   * @returns {DOMUtils} - 原型链
   * */
  DOMUtils.blur = function (element, handler) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (handler === undefined) {
      DOMUtils.trigger(element, "blur");
    } else {
      DOMUtils.on(element, "blur", null, handler);
    }
    return this;
  };
  /**
   * 绑定或触发元素的focus事件
   * @param {Element|string} element 目标元素
   * @param {function} [handler] - 事件处理函数（可选）
   * @returns {DOMUtils} - 原型链
   * */
  DOMUtils.focus = function (element, handler) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (handler === undefined) {
      DOMUtils.trigger(element, "focus");
    } else {
      DOMUtils.on(element, "focus", null, handler);
    }
    return this;
  };
  /**
   * 获取或设置元素的value属性值
   * @param {Element|string} element 目标元素
   * @param {string} [value] - value属性值（可选）
   * @returns {string|undefined} - 如果传入了value，则返回undefined；否则返回value属性值
   * */
  DOMUtils.val = function (element, value) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (value === undefined) {
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
   * @param {Element|string} element 目标元素
   * @param {string} propName - 属性名
   * @param {string} [propValue] - 属性值（可选）
   * @returns {string|undefined} - 如果传入了propValue，则返回undefined；否则返回属性值
   * */
  DOMUtils.prop = function (element, propName, propValue) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (propValue === undefined) {
      return element[propName];
    } else {
      element[propName] = propValue;
    }
  };

  /**
   * 移除元素的属性
   * @param {Element|string} element 目标元素
   * @param {string} attrName - 属性名
   * @returns {DOMUtils} - 原型链
   * */
  DOMUtils.removeAttr = function (element, attrName) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    element.removeAttribute(attrName);
    return this;
  };

  /**
   * 移除元素class名
   * @param {Element|string} element 目标元素
   * @param {string} className class名
   * @returns {DOMUtils} 原型链
   */
  DOMUtils.removeClass = function (element, className) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    element.classList.remove(className);
    return this;
  };

  /**
   * 移除元素的属性
   * @param {Element|string} element 目标元素
   * @param {string} propName - 属性名
   * @returns {DOMUtils} - 原型链
   * */
  DOMUtils.removeProp = function (element, propName) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    delete element[propName];
    return this;
  };

  /**
   * 将一个元素替换为另一个元素
   * @param {Element|string} element 目标元素
   * @param {Element|string} newElement 新元素
   * @returns {DOMUtils} 原型链
   */
  DOMUtils.replaceWith = function (element, newElement) {
    if (typeof element === "string") {
      element = document.querySelector(element);
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
    return this;
  };

  /**
   * 给元素添加class
   * @param {Element|string} element 目标元素
   * @param {string} className - class名
   * @returns {DOMUtils} - 原型链
   * */
  DOMUtils.addClass = function (element, className) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    element.classList.add(className);
    return this;
  };
  /**
   * 函数在元素内部末尾添加子元素或HTML字符串
   * @param {Element|string} element 目标元素
   * @param {object|string} content - 子元素或HTML字符串
   * @returns {DOMUtils} - 原型链
   * */
  DOMUtils.append = function (element, content) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == null) {
      return this;
    }
    if (typeof content === "string") {
      element.insertAdjacentHTML("beforeend", content);
    } else {
      element.appendChild(content);
    }
    return this;
  };

  /**
   * 函数 在元素内部开头添加子元素或HTML字符串
   * @param {Element|string} element 目标元素
   * @param {object|string} content - 子元素或HTML字符串
   * @returns {DOMUtils} - 原型链
   * */
  DOMUtils.prepend = function (element, content) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == null) {
      return this;
    }
    if (typeof content === "string") {
      element.insertAdjacentHTML("afterbegin", content);
    } else {
      element.insertBefore(content, element.firstChild);
    }
    return this;
  };
  /**
   * 在元素后面添加兄弟元素或HTML字符串
   * @param {Element|string} element 目标元素
   * @param {object|string} content - 兄弟元素或HTML字符串
   * @returns {DOMUtils} - 原型链
   * */
  DOMUtils.after = function (element, content) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == null) {
      return this;
    }
    if (typeof content === "string") {
      element.insertAdjacentHTML("afterend", content);
    } else {
      element.parentElement.insertBefore(content, element.nextSibling);
    }
    return this;
  };

  /**
   * 在元素前面添加兄弟元素或HTML字符串
   * @param {Element|string} element 目标元素
   * @param {object|string} content - 兄弟元素或HTML字符串
   * @returns {DOMUtils} - 原型链
   * */
  DOMUtils.before = function (element, content) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == null) {
      return this;
    }
    if (typeof content === "string") {
      element.insertAdjacentHTML("beforebegin", content);
    } else {
      element.parentElement.insertBefore(content, element);
    }
    return this;
  };

  /**
   * 移除元素
   * @param {Element|string|NodeList} element 目标元素
   * @returns {DOMUtils} - 原型链
   * */
  DOMUtils.remove = function (element) {
    if (typeof element === "string") {
      element = document.querySelectorAll(element);
    }
    if (element instanceof NodeList || element instanceof Array) {
      element.forEach(function (item) {
        DOMUtils.remove(item);
      });
    } else {
      element.remove();
    }
    return this;
  };
  /**
   * 移除元素的所有子元素
   * @param {Element|string} element 目标元素
   * @returns {DOMUtils} - 原型链
   * */
  DOMUtils.empty = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    return this;
  };
  /**
   * 绑定事件
   * @param {Element|string} element 需要绑定的元素
   * @param {String|Array} eventType 需要监听的事件
   * @param {HTMLElement?} selector 子元素选择器
   * @param {Function} callback 事件触发的回调函数
   * @param {Boolean} capture 表示事件是否在捕获阶段触发。默认为false，即在冒泡阶段触发
   * @param {Boolean} once 表示事件是否只触发一次。默认为false
   * @param {Boolean} passive 表示事件监听器是否不会调用preventDefault()。默认为false
   * @returns {DOMUtils} - 原型链
   * @function
   */
  DOMUtils.on = function (
    element,
    eventType,
    selector,
    callback,
    capture = false,
    once = false,
    passive = false
  ) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == null) {
      return this;
    }
    let eventTypeList = [];
    if (Array.isArray(eventType)) {
      eventTypeList = eventType;
    } else if (typeof eventType === "string") {
      eventTypeList = eventType.split(" ");
    }
    if (typeof selector === "function") {
      /* 这是为没有selector的情况 */
      callback = selector;
      selector = null;
    }
    eventTypeList.forEach((_eventType_) => {
      if (selector) {
        element.addEventListener(
          _eventType_,
          function (event) {
            let target = event.target;
            if (target.matches(selector)) {
              callback.call(target, event);
            }
          },
          capture,
          once,
          passive
        );
      } else {
        element.addEventListener(
          _eventType_,
          function (event) {
            callback.call(event.target, event);
          },
          capture,
          once,
          passive
        );
      }
    });

    if (callback && callback.delegate) {
      element.setAttribute("data-delegate", selector);
    }

    let events = element.events || {};
    events[eventType] = events[eventType] || [];
    events[eventType].push({
      selector: selector,
      callback: callback,
    });
    element.events = events;

    return this;
  };
  /**
   * 取消绑定事件
   * @param {Element|string} element 需要取消绑定的元素
   * @param {String|Array} eventType 需要取消监听的事件
   * @param {HTMLElement} selector 子元素选择器
   * @param {Function} callback 事件触发的回调函数
   * @param {Boolean} useCapture 表示事件是否在捕获阶段处理，它是一个可选参数，默认为false，表示在冒泡阶段处理事件。
   * 如果在添加事件监听器时指定了useCapture为true，则在移除事件监听器时也必须指定为true
   * @returns {DOMUtils} - 原型链
   */
  DOMUtils.off = function (
    element,
    eventType,
    selector,
    callback,
    useCapture = false
  ) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    let events = element.events || {};
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
    eventTypeList.forEach((_eventType_) => {
      let handlers = events[eventType] || [];
      for (let i = 0; i < handlers.length; i++) {
        if (
          (!selector || handlers[i].selector === selector) &&
          (!callback || handlers[i].callback === callback)
        ) {
          element.removeEventListener(
            _eventType_,
            handlers[i].callback,
            useCapture
          );
          handlers.splice(i--, 1);
        }
      }
      if (handlers.length === 0) {
        delete events[eventType];
      }
    });
    element.events = events;
    return this;
  };
  /**
   * 主动触发事件
   * @param {Element|string} element 需要触发的元素
   * @param {String|Array} eventType 需要触发的事件
   * @returns {DOMUtils} - 原型链
   */
  DOMUtils.trigger = function (element, eventType) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    let events = element.events || {};
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
    eventTypeList.forEach((_eventType_) => {
      let event = new Event(_eventType_);
      element.dispatchEvent(event);
    });
    return this;
  };
  /**
   * 设置或返回被选元素相对于文档的偏移坐标
   * @param {Element|string} element
   * @returns {Object}
   */
  DOMUtils.offset = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
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
   * @param {Element|string} element - 要获取宽度的元素
   * @returns {Number} - 元素的宽度，单位为像素
   */
  DOMUtils.width = function (element) {
    if (element == window) {
      return window.document.documentElement.clientWidth;
    }
    if (typeof element === "string") {
      element = document.querySelector(element);
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
    let oldCSS_display = element.style.display;
    let oldCSS_visibility = element.style.visibility;
    let oldCSS_position = element.style.position;
    element.style.display = "block";
    element.style.visibility = "hidden";
    element.style.position = "absolute";
    let view = element.ownerDocument.defaultView;
    if (!view || !view.opener) {
      view = window;
    }
    let styles = view.getComputedStyle(element);
    let elementWidth =
      element.clientWidth -
      parseFloat(styles.paddingLeft) -
      parseFloat(styles.paddingRight);
    element.style.display = oldCSS_display;
    element.style.visibility = oldCSS_visibility;
    element.style.position = oldCSS_position;
    return elementWidth;
  };
  /**
   * 获取元素的高度
   * @param {Element|string} element - 要获取高度的元素
   * @returns {Number} - 元素的高度，单位为像素
   */
  DOMUtils.height = function (element) {
    if (element == window) {
      return window.document.documentElement.clientHeight;
    }
    if (typeof element === "string") {
      element = document.querySelector(element);
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
    let oldCSS_display = element.style.display;
    let oldCSS_visibility = element.style.visibility;
    let oldCSS_position = element.style.position;
    element.style.display = "block";
    element.style.visibility = "hidden";
    element.style.position = "absolute";
    let view = element.ownerDocument.defaultView;
    if (!view || !view.opener) {
      view = window;
    }
    let styles = view.getComputedStyle(element);
    let elementHeight =
      element.clientHeight -
      parseFloat(styles.paddingTop) -
      parseFloat(styles.paddingBottom);
    element.style.display = oldCSS_display;
    element.style.visibility = oldCSS_visibility;
    element.style.position = oldCSS_position;
    return elementHeight;
  };
  /**
   * 获取元素的外部宽度（包括边框和外边距）
   * @param {Element|string} element - 要获取外部宽度的元素
   * @returns {Number} - 元素的外部宽度，单位为像素
   */
  DOMUtils.outerWidth = function (element) {
    if (element == window) {
      return window.innerWidth;
    }
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    let style = getComputedStyle(element, null);
    return (
      element.offsetWidth +
      parseFloat(style.marginLeft) +
      parseFloat(style.marginRight)
    );
  };
  /**
   * 获取元素的外部高度（包括边框和外边距）
   * @param {Element|string} element - 要获取外部高度的元素
   * @returns {Number} - 元素的外部高度，单位为像素
   */
  DOMUtils.outerHeight = function (element) {
    if (element == window) {
      return window.innerHeight;
    }
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    let style = getComputedStyle(element, null);
    return (
      element.offsetHeight +
      parseFloat(style.marginTop) +
      parseFloat(style.marginBottom)
    );
  };

  /**
   * 等待文档加载完成后执行指定的函数
   * @param {Function} callback - 需要执行的函数
   * @returns {DOMUtils} - 原型链
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
    return this;
  };

  /**
   * 在一定时间内改变元素的样式属性，实现动画效果
   * @param {Element|string} element - 需要进行动画的元素
   * @param {Object} styles - 动画结束时元素的样式属性
   * @param {Number} [duration=1000] - 动画持续时间，单位为毫秒
   * @param {Function} [callback=null] - 动画结束后执行的函数
   * @returns {DOMUtils} - 原型链
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
    if (typeof duration !== "number" || duration <= 0) {
      throw new TypeError("duration must be a positive number");
    }
    if (typeof callback !== "function" && callback !== null) {
      throw new TypeError("callback must be a function or null");
    }
    if (typeof styles !== "object" || styles === null) {
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
    return this;
  };

  /**
   * 将一个元素包裹在指定的HTML元素中
   * @param {Element|string} element 要包裹的元素
   * @param {string} wrapperHTML 要包裹的HTML元素的字符串表示形式
   * @returns {DOMUtils} - 原型链
   */
  DOMUtils.wrap = function (element, wrapperHTML) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    // 创建一个新的div元素，并将wrapperHTML作为其innerHTML
    let wrapper = document.createElement("div");
    wrapper.innerHTML = wrapperHTML;

    // 将要包裹的元素插入到wrapper中
    element.parentElement.insertBefore(wrapper, element);

    // 将要包裹的元素移动到wrapper中
    wrapper.insertBefore(element, wrapper.firstChild);
    return this;
  };
  /**
   * 获取当前元素的前一个兄弟元素
   * @param {Element|string} element - 当前元素
   * @returns {Element} - 前一个兄弟元素
   */
  DOMUtils.prev = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    return element.previousElementSibling;
  };

  /**
   * 获取当前元素的后一个兄弟元素
   * @param {Element|string} element - 当前元素
   * @returns {Element} - 后一个兄弟元素
   */
  DOMUtils.next = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    return element.nextElementSibling;
  };

  /**
   * 获取当前元素的所有兄弟元素
   * @param {Element|string} element - 当前元素
   * @returns {Array} - 所有兄弟元素
   */
  DOMUtils.siblings = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    return Array.from(element.parentElement.children).filter(
      (child) => child !== element
    );
  };

  /**
   * 获取当前元素的父元素
   * @param {Element|NodeList|string} element - 当前元素
   * @returns {Element|Array} - 父元素
   */
  DOMUtils.parent = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
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
   * @returns {Element}
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
   * @param {Element|string} element - 当前元素
   * @param {Function} handler - 事件处理函数
   * @returns {DOMUtils} - 原型链
   */
  DOMUtils.hover = function (element, handler) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    DOMUtils.on(element, "mouseenter", null, handler);
    DOMUtils.on(element, "mouseleave", null, handler);
    return this;
  };

  /**
   * 显示元素
   * @param {Element|string} element - 当前元素
   * @returns {DOMUtils} - 原型链
   */
  DOMUtils.show = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    element.style.display = "";
    return this;
  };

  /**
   * 隐藏元素
   * @param {Element|string} element - 当前元素
   * @returns {DOMUtils} - 原型链
   */
  DOMUtils.hide = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    element.style.display = "none";
    return this;
  };

  /**
   * 当按键松开时触发事件
   * @param {Element|string} element - 当前元素
   * @param {Function} handler - 事件处理函数
   * @returns {DOMUtils} - 原型链
   */
  DOMUtils.keyup = function (element, handler) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    DOMUtils.on(element, "keyup", null, handler);
    return this;
  };

  /**
   * 当按键按下时触发事件
   * @param {Element|string} element - 当前元素
   * @param {Function} handler - 事件处理函数
   * @returns {DOMUtils} - 原型链
   */
  DOMUtils.keydown = function (element, handler) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    DOMUtils.on(element, "keydown", null, handler);
    return this;
  };

  /**
   * 淡入元素
   * @param {Element|string} element - 当前元素
   * @param {Number} duration - 动画持续时间（毫秒）
   * @param {Function} callback 动画结束的回调
   * @returns {DOMUtils} - 原型链
   */
  DOMUtils.fadeIn = function (element, duration = 400, callback) {
    if (typeof element === "string") {
      element = document.querySelector(element);
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
    return this;
  };

  /**
   * 淡出元素
   * @param {Element|string} element - 当前元素
   * @param {Number} duration - 动画持续时间（毫秒）
   * @param {Function} callback 动画结束的回调
   * @returns {DOMUtils} - 原型链
   */
  DOMUtils.fadeOut = function (element, duration = 400, callback) {
    if (typeof element === "string") {
      element = document.querySelector(element);
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
    return this;
  };

  /**
   * 为指定元素的子元素绑定事件
   * @param {Element|string} element - 当前元素
   * @param {String} selector - 子元素选择器
   * @param {String} type - 事件类型
   * @param {Function} handler - 事件处理函数
   * @returns {DOMUtils} - 原型链
   */
  DOMUtils.delegate = function (element, selector, type, handler) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    element.addEventListener(type, (event) => {
      let target = event.target.closest(selector);
      if (target && element.contains(target)) {
        handler.call(target, event);
      }
    });
    return this;
  };

  /**
   * 切换元素的显示和隐藏状态
   * @param {Element|string} element - 当前元素
   * @returns {DOMUtils} - 原型链
   */
  DOMUtils.toggle = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element.style.display === "none") {
      DOMUtils.show(element);
    } else {
      DOMUtils.hide(element);
    }
    return this;
  };
  return DOMUtils;
});
