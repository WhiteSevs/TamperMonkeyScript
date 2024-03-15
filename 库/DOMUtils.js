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
  const OriginPrototype = {
    Array: {
      isArray: Array.isArray,
    },
    Function: {
      hasOwnProperty: globalThis.Function.prototype.hasOwnProperty,
      apply: globalThis.Function.prototype.apply,
      call: globalThis.Function.prototype.call,
    },
    Object: {
      assign: globalThis.Object.assign,
      defineProperty: globalThis.Object.defineProperty,
      create: globalThis.Object.create,
      entries: globalThis.Object.entries,
      freeze: globalThis.Object.freeze,
      getOwnPropertySymbols: globalThis.Object.getOwnPropertySymbols,
      getOwnPropertyDescriptor: globalThis.Object.getOwnPropertyDescriptor,
      getPrototypeOf: globalThis.Object.getPrototypeOf,
      hasOwnProperty: globalThis.Object.hasOwnProperty,
      keys: globalThis.Object.keys,
      toString: globalThis.Object.toString,
      values: globalThis.Object.values,
    },
    Reflect: {
      deleteProperty: globalThis.Reflect.deleteProperty,
      get: globalThis.Reflect.get,
      has: globalThis.Reflect.has,
      set: globalThis.Reflect.set,
    },
    URL: {
      createObjectURL: globalThis.URL.createObjectURL,
    },
    setTimeout: globalThis.setTimeout,
    clearTimeout: globalThis.clearTimeout,
    setInterval: globalThis.setInterval,
    clearInterval: globalThis.clearInterval,
    getComputedStyle: globalThis.getComputedStyle,
  };
  /** @type {DOMUtils} */
  const DOMUtils = {};
  DOMUtils.version = "2024-3-15";

  /** 通用工具类 */
  const CommonDOMUtils = {
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
      let dupNode = element.cloneNode(true);
      dupNode.setAttribute(
        "style",
        "visibility: hidden !important;display:block !important;"
      );
      document.documentElement.appendChild(dupNode);
      return {
        recovery() {
          dupNode.remove();
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
      if (typeof unsafeWindow !== "undefined" && target === unsafeWindow) {
        return true;
      }
      if (target?.Math?.toString() !== "[object Math]") {
        return false;
      }
      return true;
    },
  };

  /* 数据 */
  const DOMUtilsData = {
    /** .on绑定的事件 */
    SymbolEvents: Symbol(
      "events_" +
        (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    ),
  };

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
    OriginPrototype.Object.keys(property).forEach((key) => {
      let value = property[key];
      tempElement[key] = value;
    });
    OriginPrototype.Object.keys(attributes).forEach((key) => {
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
        return OriginPrototype.getComputedStyle(element).getPropertyValue(
          property
        );
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

  DOMUtils.getTransform = function (element, isShow = false) {
    let transform_left = 0;
    let transform_top = 0;
    if (!(isShow || (!isShow && CommonDOMUtils.isShow(element)))) {
      /* 未显示 */
      let { recovery } = CommonDOMUtils.showElement(element);
      let transformInfo = DOMUtils.getTransform(element, true);
      recovery();
      return transformInfo;
    }
    let elementTransform = OriginPrototype.getComputedStyle(element).transform;
    if (
      elementTransform !== "none" &&
      elementTransform != null &&
      elementTransform !== ""
    ) {
      let elementTransformSplit = elementTransform
        .match(/\((.+)\)/)[1]
        .split(",");
      transform_left = Math.abs(parseInt(elementTransformSplit[4]));
      transform_top = Math.abs(parseInt(elementTransformSplit[5]));
    }
    return {
      transformLeft: transform_left,
      transformTop: transform_top,
    };
  };

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

  DOMUtils.removeAttr = function (element, attrName) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    element.removeAttribute(attrName);
  };

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

  DOMUtils.removeProp = function (element, propName) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    delete element[propName];
  };

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

  DOMUtils.addClass = function (element, className) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    element.classList.add(className);
  };

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

  DOMUtils.remove = function (target) {
    if (typeof target === "string") {
      target = document.querySelectorAll(target);
    }
    if (target == void 0) {
      return;
    }
    if (target instanceof NodeList || target instanceof Array) {
      for (const element of target) {
        DOMUtils.remove(element);
      }
    } else {
      target.remove();
    }
  };

  DOMUtils.empty = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    element.innerHTML = "";
  };

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
    if (element == null) {
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
    /**
     * 如果是once，那么删除该监听和元素上的事件和监听
     */
    function checkOptionOnceToRemoveEventListener() {
      if (_option_.once) {
        DOMUtils.off(element, eventType, selector, callback, option);
      }
    }
    elementList.forEach((elementItem) => {
      function ownCallBack(event) {
        let target = event.target;
        if (_selector_) {
          /* 存在自定义子元素选择器 */
          let totalParent = CommonDOMUtils.isWin(elementItem)
            ? document.documentElement
            : elementItem;
          if (target.matches(_selector_)) {
            /* 当前目标可以被selector所匹配到 */
            _callback_.call(target, event);
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
            _callback_.call(closestElement, event);
            checkOptionOnceToRemoveEventListener();
          }
        } else {
          _callback_.call(elementItem, event);
          checkOptionOnceToRemoveEventListener();
        }
      }

      /* 遍历事件名设置元素事件 */
      eventTypeList.forEach((eventName) => {
        elementItem.addEventListener(eventName, ownCallBack, _option_);

        if (_callback_ && _callback_.delegate) {
          elementItem.setAttribute("data-delegate", _selector_);
        }
        /* 获取对象上的事件 */
        let elementEvents = elementItem[DOMUtilsData.SymbolEvents] || {};
        /* 初始化对象上的xx事件 */
        elementEvents[eventName] = elementEvents[eventName] || [];
        elementEvents[eventName].push({
          selector: _selector_,
          option: _option_,
          callback: ownCallBack,
          originCallBack: _callback_,
        });
        /* 覆盖事件 */
        elementItem[DOMUtilsData.SymbolEvents] = elementEvents;
      });
    });
  };

  DOMUtils.off = function (
    element,
    eventType,
    selector,
    callback,
    option,
    filter
  ) {
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
    if (element == null) {
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
     * 子元素选择器
     * @type {?string}
     */
    let _selector_ = selector;
    /**
     * 事件的回调函数
     * @type {(event:Event)=>{}}
     */
    let _callback_ = callback;

    /**
     * 事件的配置
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
      /* 获取对象上的事件 */
      let elementEvents = elementItem[DOMUtilsData.SymbolEvents] || {};
      eventTypeList.forEach((eventName) => {
        /** @type {DOMUtilsEventListenerOptionsAttribute[]} */
        let handlers = elementEvents[eventName] || [];
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
          delete elementEvents[eventType];
        }
      });
      elementItem[DOMUtilsData.SymbolEvents] = elementEvents;
    });
  };

  DOMUtils.offAll = function (element, eventType) {
    if (typeof element === "string") {
      element = document.querySelectorAll(element);
    }
    if (element == null) {
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
    elementList.forEach((elementItem) => {
      OriginPrototype.Object.getOwnPropertySymbols(elementItem).forEach(
        (symbolEvents) => {
          if (!symbolEvents.toString().startsWith("Symbol(events_")) {
            return;
          }
          let elementEvents = elementItem[symbolEvents] || {};
          let iterEventNameList = eventTypeList.length
            ? eventTypeList
            : OriginPrototype.Object.keys(elementEvents);
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
            delete elementItem[symbolEvents][eventName];
          });
        }
      );
    });
  };

  DOMUtils.trigger = function (
    element,
    eventType,
    details,
    useDispatchToTriggerEvent = true
  ) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == null) {
      return;
    }
    let elementList = [];
    if (element instanceof NodeList || Array.isArray(element)) {
      elementList = [...element];
    } else {
      elementList = [element];
    }
    let eventTypeList = [];
    if (Array.isArray(eventType)) {
      eventTypeList = eventType;
    } else if (typeof eventType === "string") {
      eventTypeList = eventType.split(" ");
    }

    elementList.forEach((elementItem) => {
      /* 获取对象上的事件 */
      let events = elementItem[DOMUtilsData.SymbolEvents] || {};
      eventTypeList.forEach((_eventType_) => {
        let event = null;
        if (details && details instanceof Event) {
          event = details;
        } else {
          event = new Event(_eventType_);
          if (details) {
            OriginPrototype.Object.keys(details).forEach((keyName) => {
              event[keyName] = details[keyName];
            });
          }
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

  DOMUtils.offset = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    let rect = element.getBoundingClientRect();
    return {
      top: rect.top + globalThis.scrollY,
      left: rect.left + globalThis.scrollX,
    };
  };

  DOMUtils.width = function (element, isShow = false) {
    if (CommonDOMUtils.isWin(element)) {
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
    if (isShow || (!isShow && CommonDOMUtils.isShow(element))) {
      /* 已显示 */
      /* 不从style中获取对应的宽度，因为可能使用了class定义了width !important */

      /* 如果element.style.width为空  则从css里面获取是否定义了width信息如果定义了 则读取css里面定义的宽度width */
      if (parseFloat(CommonDOMUtils.getStyleValue(element, "width")) > 0) {
        return parseFloat(CommonDOMUtils.getStyleValue(element, "width"));
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
      let { recovery } = CommonDOMUtils.showElement(element);
      let width = DOMUtils.width(element, true);
      recovery();
      return width;
    }
  };

  DOMUtils.height = function (element, isShow = false) {
    if (CommonDOMUtils.isWin(element)) {
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
    if (isShow || (!isShow && CommonDOMUtils.isShow(element))) {
      /* 已显示 */
      /* 从style中获取对应的高度，因为可能使用了class定义了width !important */
      /* 如果element.style.height为空  则从css里面获取是否定义了height信息如果定义了 则读取css里面定义的高度height */
      if (parseFloat(CommonDOMUtils.getStyleValue(element, "height")) > 0) {
        return parseFloat(CommonDOMUtils.getStyleValue(element, "height"));
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
      let { recovery } = CommonDOMUtils.showElement(element);
      let height = DOMUtils.height(element, true);
      recovery();
      return height;
    }
  };

  DOMUtils.outerWidth = function (element, isShow = false) {
    if (CommonDOMUtils.isWin(element)) {
      return window.innerWidth;
    }
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (isShow || (!isShow && CommonDOMUtils.isShow(element))) {
      let style = OriginPrototype.getComputedStyle(element, null);
      let marginLeft = CommonDOMUtils.getStyleValue(style, "marginLeft");
      let marginRight = CommonDOMUtils.getStyleValue(style, "marginRight");
      return element.offsetWidth + marginLeft + marginRight;
    } else {
      let { recovery } = CommonDOMUtils.showElement(element);
      let outerWidth = DOMUtils.outerWidth(element, true);
      recovery();
      return outerWidth;
    }
  };

  DOMUtils.outerHeight = function (element, isShow = false) {
    if (CommonDOMUtils.isWin(element)) {
      return window.innerHeight;
    }
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (isShow || (!isShow && CommonDOMUtils.isShow(element))) {
      let style = OriginPrototype.getComputedStyle(element, null);
      let marginTop = CommonDOMUtils.getStyleValue(style, "marginTop");
      let marginBottom = CommonDOMUtils.getStyleValue(style, "marginBottom");
      return element.offsetHeight + marginTop + marginBottom;
    } else {
      let { recovery } = CommonDOMUtils.showElement(element);
      let outerHeight = DOMUtils.outerHeight(element, true);
      recovery();
      return outerHeight;
    }
  };

  DOMUtils.ready = function (callback) {
    function completed() {
      document.removeEventListener("DOMContentLoaded", completed);
      globalThis.removeEventListener("load", completed);
      callback();
    }
    if (
      document.readyState === "complete" ||
      (document.readyState !== "loading" && !document.documentElement.doScroll)
    ) {
      OriginPrototype.setTimeout(callback);
    } else {
      /* 监听DOMContentLoaded事件 */
      document.addEventListener("DOMContentLoaded", completed);
      /* 监听load事件 */
      globalThis.addEventListener("load", completed);
    }
  };

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
    if (OriginPrototype.Object.keys(styles).length === 0) {
      throw new Error("styles must contain at least one property");
    }
    let start = performance.now();
    let from = {};
    let to = {};
    for (let prop in styles) {
      from[prop] =
        element.style[prop] || OriginPrototype.getComputedStyle(element)[prop];
      to[prop] = styles[prop];
    }
    let timer = OriginPrototype.setInterval(function () {
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
        OriginPrototype.clearInterval(timer);
        if (callback) {
          callback();
        }
      }
    }, 10);
  };

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

  DOMUtils.prev = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    return element.previousElementSibling;
  };

  DOMUtils.next = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    return element.nextElementSibling;
  };

  DOMUtils.noConflict = function () {
    if (window.DOMUtils) {
      delete window.DOMUtils;
    }
    if (AnotherDOMUtils) {
      window.DOMUtils = AnotherDOMUtils;
    }
    return DOMUtils;
  };

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

  DOMUtils.hover = function (element, handler, option) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    DOMUtils.on(element, "mouseenter", null, handler, option);
    DOMUtils.on(element, "mouseleave", null, handler, option);
  };

  DOMUtils.show = function (target) {
    if (target == void 0) {
      return;
    }
    if (typeof target === "string") {
      target = document.querySelectorAll(target);
    }
    if (target instanceof NodeList || target instanceof Array) {
      for (const element of target) {
        DOMUtils.show(element);
      }
    } else {
      target.style.display = "";
    }
  };

  DOMUtils.hide = function (target) {
    if (target == void 0) {
      return;
    }
    if (typeof target === "string") {
      target = document.querySelectorAll(target);
    }
    if (target instanceof NodeList || target instanceof Array) {
      for (const element of target) {
        DOMUtils.hide(element);
      }
    } else {
      target.style.display = "none";
    }
  };

  DOMUtils.keyup = function (target, handler, option) {
    if (target == void 0) {
      return;
    }
    if (typeof target === "string") {
      target = document.querySelector(target);
    }
    DOMUtils.on(target, "keyup", null, handler, option);
  };

  DOMUtils.keydown = function (target, handler, option) {
    if (target == void 0) {
      return;
    }
    if (typeof target === "string") {
      target = document.querySelector(target);
    }
    DOMUtils.on(target, "keydown", null, handler, option);
  };

  DOMUtils.keypress = function (target, handler, option) {
    if (target == void 0) {
      return;
    }
    if (typeof target === "string") {
      target = document.querySelector(target);
    }
    DOMUtils.on(target, "keypress", null, handler, option);
  };

  DOMUtils.fadeIn = function (element, duration = 400, callback) {
    if (element == void 0) {
      return;
    }
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
  };

  DOMUtils.fadeOut = function (element, duration = 400, callback) {
    if (element == void 0) {
      return;
    }
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
  };

  DOMUtils.toggle = function (element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element == void 0) {
      return;
    }
    if (
      OriginPrototype.getComputedStyle(element).getPropertyValue("display") ===
      "none"
    ) {
      DOMUtils.show(element);
    } else {
      DOMUtils.hide(element);
    }
  };
  return DOMUtils;
});
