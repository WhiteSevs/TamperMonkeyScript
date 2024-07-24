define((function () { 'use strict';

    /** 通用工具类 */
    const DOMUtilsCommonUtils = {
        windowApi: {
            window: window,
            document: document,
        },
        /**
         * 判断元素是否已显示或已连接
         * @param element
         */
        isShow(element) {
            return Boolean(element.getClientRects().length);
        },
        /**
         * 用于显示元素并获取它的高度宽度等其它属性
         * @param element
         */
        showElement(element) {
            let dupNode = element.cloneNode(true);
            dupNode.setAttribute("style", "visibility: hidden !important;display:block !important;");
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
        getStyleValue(element, styleName) {
            let view = null;
            let styles = null;
            if (element instanceof CSSStyleDeclaration) {
                /* 直接就获取了style属性 */
                styles = element;
            }
            else {
                view = element.ownerDocument.defaultView;
                if (!view || !view.opener) {
                    view = window;
                }
                styles = view.getComputedStyle(element);
            }
            let value = parseFloat(styles[styleName]);
            if (isNaN(value)) {
                return 0;
            }
            else {
                return value;
            }
        },
        /**
         * 判断是否是window，例如window、self、globalThis
         * @param target
         */
        isWin(target) {
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
        delete(target, propName) {
            if (typeof Reflect === "object" && Reflect.deleteProperty) {
                Reflect.deleteProperty(target, propName);
            }
            else {
                delete target[propName];
            }
        },
    };

    /* 数据 */
    const DOMUtilsData = {
        /** .on绑定的事件 */
        SymbolEvents: Symbol("events_" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)),
    };

    const OriginPrototype = {
        Object: {
            defineProperty: Object.defineProperty,
        },
    };

    class WindowApi {
        /** 默认的配置 */
        defaultApi = {
            document: document,
            window: window,
            globalThis: globalThis,
            self: self,
            top: top,
        };
        /** 使用的配置 */
        api;
        constructor(option) {
            if (!option) {
                option = Object.assign({}, this.defaultApi);
            }
            this.api = Object.assign({}, option);
        }
        get document() {
            return this.api.document;
        }
        get window() {
            return this.api.window;
        }
        get globalThis() {
            return this.api.globalThis;
        }
        get self() {
            return this.api.self;
        }
        get top() {
            return this.api.top;
        }
    }

    class DOMUtilsEvent {
        windowApi;
        constructor(windowApiOption) {
            this.windowApi = new WindowApi(windowApiOption);
        }
        on(element, eventType, selector, callback, option) {
            /**
             * 获取option配置
             * @param args
             * @param startIndex
             * @param option
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
                }
                else if (typeof args[startIndex] === "object" &&
                    ("capture" in args[startIndex] ||
                        "once" in args[startIndex] ||
                        "passive" in args[startIndex])) {
                    option.capture = args[startIndex].capture;
                    option.once = args[startIndex].once;
                    option.passive = args[startIndex].passive;
                }
                return option;
            }
            let DOMUtilsContext = this;
            let args = arguments;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelectorAll(element);
            }
            if (element == null) {
                return;
            }
            let elementList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                element = element;
                elementList = [...element];
            }
            else {
                elementList.push(element);
            }
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventTypeList.concat(eventType);
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventTypeList.concat(eventType.split(" "));
            }
            let _selector_ = selector;
            let _callback_ = callback;
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
            }
            else {
                /* 这是存在selector的情况 */
                _option_ = getOption(args, 4, _option_);
            }
            /**
             * 如果是once，那么删除该监听和元素上的事件和监听
             */
            function checkOptionOnceToRemoveEventListener() {
                if (_option_.once) {
                    DOMUtilsContext.off(element, eventType, selector, callback, option);
                }
            }
            elementList.forEach((elementItem) => {
                function ownCallBack(event) {
                    let target = event.target;
                    if (_selector_) {
                        /* 存在自定义子元素选择器 */
                        let totalParent = DOMUtilsCommonUtils.isWin(elementItem)
                            ? DOMUtilsContext.windowApi.document.documentElement
                            : elementItem;
                        if (target.matches(_selector_)) {
                            /* 当前目标可以被selector所匹配到 */
                            _callback_.call(target, event);
                            checkOptionOnceToRemoveEventListener();
                        }
                        else if (target.closest(_selector_) &&
                            totalParent.contains(target.closest(_selector_))) {
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
                    }
                    else {
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
        }
        off(element, eventType, selector, callback, option, filter) {
            /**
             * 获取option配置
             * @param args1
             * @param startIndex
             * @param option
             */
            function getOption(args1, startIndex, option) {
                if (typeof args1[startIndex] === "boolean") {
                    option.capture = args1[startIndex];
                }
                else if (typeof args1[startIndex] === "object" &&
                    "capture" in args1[startIndex]) {
                    option.capture = args1[startIndex].capture;
                }
                return option;
            }
            let DOMUtilsContext = this;
            let args = arguments;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelectorAll(element);
            }
            if (element == null) {
                return;
            }
            let elementList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                element = element;
                elementList = [...element];
            }
            else {
                elementList.push(element);
            }
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventTypeList.concat(eventType);
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventTypeList.concat(eventType.split(" "));
            }
            /**
             * 子元素选择器
             */
            let _selector_ = selector;
            /**
             * 事件的回调函数
             */
            let _callback_ = callback;
            /**
             * 事件的配置
             */
            let _option_ = {
                capture: false,
            };
            if (typeof selector === "function") {
                /* 这是为没有selector的情况 */
                _selector_ = void 0;
                _callback_ = selector;
                _option_ = getOption(args, 3, _option_);
            }
            else {
                _option_ = getOption(args, 4, _option_);
            }
            elementList.forEach((elementItem) => {
                /* 获取对象上的事件 */
                let elementEvents = elementItem[DOMUtilsData.SymbolEvents] || {};
                eventTypeList.forEach((eventName) => {
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
                        if (!_callback_ ||
                            handler.callback === _callback_ ||
                            handler.originCallBack === _callback_) {
                            /* callback不为空，进行callback判断 */
                            flag = true;
                        }
                        if (flag) {
                            elementItem.removeEventListener(eventName, handler.callback, _option_);
                            handlers.splice(index--, 1);
                        }
                    }
                    if (handlers.length === 0) {
                        /* 如果没有任意的handler，那么删除该属性 */
                        DOMUtilsCommonUtils.delete(elementEvents, eventType);
                    }
                });
                elementItem[DOMUtilsData.SymbolEvents] = elementEvents;
            });
        }
        /**
         * 取消绑定所有的事件
         * @param element 需要取消绑定的元素|元素数组
         * @param eventType （可选）需要取消监听的事件
         */
        offAll(element, eventType) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelectorAll(element);
            }
            if (element == null) {
                return;
            }
            let elementList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                elementList = [...element];
            }
            else {
                elementList.push(element);
            }
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventTypeList.concat(eventType);
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventTypeList.concat(eventType.split(" "));
            }
            elementList.forEach((elementItem) => {
                Object.getOwnPropertySymbols(elementItem).forEach((symbolEvents) => {
                    if (!symbolEvents.toString().startsWith("Symbol(events_")) {
                        return;
                    }
                    let elementEvents = elementItem[symbolEvents] || {};
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
                        DOMUtilsCommonUtils.delete(elementItem[symbolEvents], eventName);
                    });
                });
            });
        }
        /**
         * 等待文档加载完成后执行指定的函数
         * @param callback 需要执行的函数
         * @example
         * DOMUtils.ready(function(){
         *   console.log("文档加载完毕")
         * })
         */
        ready(callback) {
            if (typeof callback !== "function") {
                return;
            }
            let DOMUtilsContext = this;
            /**
             * 检测文档是否加载完毕
             */
            function checkDOMReadyState() {
                try {
                    if (DOMUtilsContext.windowApi.document.readyState === "complete" ||
                        (DOMUtilsContext.windowApi.document.readyState !== "loading" &&
                            !DOMUtilsContext.windowApi.document.documentElement
                                .doScroll)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                catch (error) {
                    return false;
                }
            }
            /**
             * 成功加载完毕后触发的回调函数
             */
            function completed() {
                removeDomReadyListener();
                callback();
            }
            let targetList = [
                {
                    target: DOMUtilsContext.windowApi.document,
                    eventType: "DOMContentLoaded",
                    callback: completed,
                },
                {
                    target: DOMUtilsContext.windowApi.window,
                    eventType: "load",
                    callback: completed,
                },
            ];
            /**
             * 添加监听
             */
            function addDomReadyListener() {
                for (let index = 0; index < targetList.length; index++) {
                    let item = targetList[index];
                    item.target.addEventListener(item.eventType, item.callback);
                }
            }
            /**
             * 移除监听
             */
            function removeDomReadyListener() {
                for (let index = 0; index < targetList.length; index++) {
                    let item = targetList[index];
                    item.target.removeEventListener(item.eventType, item.callback);
                }
            }
            if (checkDOMReadyState()) {
                /* 检查document状态 */
                setTimeout(callback);
            }
            else {
                /* 添加监听 */
                addDomReadyListener();
            }
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
        trigger(element, eventType, details, useDispatchToTriggerEvent = true) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            let elementList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                element = element;
                elementList = [...element];
            }
            else {
                elementList = [element];
            }
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventType;
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventType.split(" ");
            }
            elementList.forEach((elementItem) => {
                /* 获取对象上的事件 */
                let events = elementItem[DOMUtilsData.SymbolEvents] || {};
                eventTypeList.forEach((_eventType_) => {
                    let event = null;
                    if (details && details instanceof Event) {
                        event = details;
                    }
                    else {
                        event = new Event(_eventType_);
                        if (details) {
                            Object.keys(details).forEach((keyName) => {
                                event[keyName] = details[keyName];
                            });
                        }
                    }
                    if (useDispatchToTriggerEvent == false && _eventType_ in events) {
                        events[_eventType_].forEach((eventsItem) => {
                            eventsItem.callback(event);
                        });
                    }
                    else {
                        elementItem.dispatchEvent(event);
                    }
                });
            });
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
        click(element, handler, details, useDispatchToTriggerEvent) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (handler == null) {
                DOMUtilsContext.trigger(element, "click", details, useDispatchToTriggerEvent);
            }
            else {
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
        blur(element, handler, details, useDispatchToTriggerEvent) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (handler === null) {
                DOMUtilsContext.trigger(element, "blur", details, useDispatchToTriggerEvent);
            }
            else {
                DOMUtilsContext.on(element, "blur", null, handler);
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
        focus(element, handler, details, useDispatchToTriggerEvent) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (handler == null) {
                DOMUtilsContext.trigger(element, "focus", details, useDispatchToTriggerEvent);
            }
            else {
                DOMUtilsContext.on(element, "focus", null, handler);
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
        hover(element, handler, option) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            DOMUtilsContext.on(element, "mouseenter", null, handler, option);
            DOMUtilsContext.on(element, "mouseleave", null, handler, option);
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
        keyup(target, handler, option) {
            let DOMUtilsContext = this;
            if (target == null) {
                return;
            }
            if (typeof target === "string") {
                target = DOMUtilsContext.windowApi.document.querySelector(target);
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
        keydown(target, handler, option) {
            let DOMUtilsContext = this;
            if (target == null) {
                return;
            }
            if (typeof target === "string") {
                target = DOMUtilsContext.windowApi.document.querySelector(target);
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
        keypress(target, handler, option) {
            let DOMUtilsContext = this;
            if (target == null) {
                return;
            }
            if (typeof target === "string") {
                target = DOMUtilsContext.windowApi.document.querySelector(target);
            }
            DOMUtilsContext.on(target, "keypress", null, handler, option);
        }
    }

    class DOMUtils extends DOMUtilsEvent {
        constructor(option) {
            super(option);
        }
        /** 版本号 */
        version = "2024.7.24";
        attr(element, attrName, attrValue) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (attrValue == null) {
                return element.getAttribute(attrName);
            }
            else {
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
        createElement(
        /** 元素名 */
        tagName, 
        /** 属性 */
        property, 
        /** 自定义属性 */
        attributes) {
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
                tempElement[key] = value;
            });
            Object.keys(attributes).forEach((key) => {
                let value = attributes[key];
                if (typeof value === "object") {
                    /* object转字符串 */
                    value = JSON.stringify(value);
                }
                else if (typeof value === "function") {
                    /* function转字符串 */
                    value = value.toString();
                }
                tempElement.setAttribute(key, value);
            });
            return tempElement;
        }
        css(element, property, value) {
            let DOMUtilsContext = this;
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
                if (typeof propertyValue === "string" &&
                    allowAddPixe.includes(propertyName) &&
                    propertyValue.match(/[0-9]$/gi)) {
                    propertyValue = propertyValue + "px";
                }
                return propertyValue;
            }
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (typeof property === "string") {
                if (value == null) {
                    return getComputedStyle(element).getPropertyValue(property);
                }
                else {
                    if (value === "string" && value.includes("!important")) {
                        element.style.setProperty(property, value, "important");
                    }
                    else {
                        value = handlePixe(property, value);
                        element.style.setProperty(property, value);
                    }
                }
            }
            else if (typeof property === "object") {
                for (let prop in property) {
                    if (typeof property[prop] === "string" &&
                        property[prop].includes("!important")) {
                        element.style.setProperty(prop, property[prop], "important");
                    }
                    else {
                        property[prop] = handlePixe(prop, property[prop]);
                        element.style.setProperty(prop, property[prop]);
                    }
                }
            }
        }
        text(element, text) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (text == null) {
                return element.textContent || element.innerText;
            }
            else {
                if (text instanceof Node) {
                    text = text.textContent || text.innerText;
                }
                if ("textContent" in element) {
                    element.textContent = text;
                }
                else if ("innerText" in element) {
                    element.innerText = text;
                }
            }
        }
        html(element, html) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (html == null) {
                return element.innerHTML;
            }
            else {
                if (html instanceof Node) {
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
        getTransform(element, isShow = false) {
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
            if (elementTransform != null &&
                elementTransform !== "none" &&
                elementTransform !== "") {
                let elementTransformSplit = elementTransform
                    .match(/\((.+)\)/)?.[1]
                    .split(",");
                if (elementTransformSplit) {
                    transform_left = Math.abs(parseInt(elementTransformSplit[4]));
                    transform_top = Math.abs(parseInt(elementTransformSplit[5]));
                }
                else {
                    transform_left = 0;
                    transform_top = 0;
                }
            }
            return {
                transformLeft: transform_left,
                transformTop: transform_top,
            };
        }
        val(element, value) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (value == null) {
                if (element.localName === "input" &&
                    (element.type === "checkbox" || element.type === "radio")) {
                    return element.checked;
                }
                else {
                    return element.value;
                }
            }
            else {
                if (element.localName === "input" &&
                    (element.type === "checkbox" || element.type === "radio")) {
                    element.checked = !!value;
                }
                else {
                    element.value = value;
                }
            }
        }
        prop(element, propName, propValue) {
            let DOMUtilsContext = this;
            if (element == null) {
                return;
            }
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (propValue == null) {
                return element[propName];
            }
            else {
                element[propName] = propValue;
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
        removeAttr(element, attrName) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
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
        removeClass(element, className) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
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
        removeProp(element, propName) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
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
        replaceWith(element, newElement) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
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
            }
            else {
                element.parentElement.replaceChild(newElement, element);
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
        addClass(element, className) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
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
        append(element, content) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            function elementAppendChild(ele, text) {
                if (typeof content === "string") {
                    ele.insertAdjacentHTML("beforeend", text);
                }
                else {
                    ele.appendChild(text);
                }
            }
            if (Array.isArray(content) || content instanceof NodeList) {
                /* 数组 */
                let fragment = DOMUtilsContext.windowApi.document.createDocumentFragment();
                content.forEach((ele) => {
                    if (typeof ele === "string") {
                        ele = this.parseHTML(ele, true, false);
                    }
                    fragment.appendChild(ele);
                });
                element.appendChild(fragment);
            }
            else {
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
        prepend(element, content) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (typeof content === "string") {
                element.insertAdjacentHTML("afterbegin", content);
            }
            else {
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
        after(element, content) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (typeof content === "string") {
                element.insertAdjacentHTML("afterend", content);
            }
            else {
                element.parentElement.insertBefore(content, element.nextSibling);
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
        before(element, content) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (typeof content === "string") {
                element.insertAdjacentHTML("beforebegin", content);
            }
            else {
                element.parentElement.insertBefore(content, element);
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
        remove(target) {
            let DOMUtilsContext = this;
            if (typeof target === "string") {
                target = DOMUtilsContext.windowApi.document.querySelectorAll(target);
            }
            if (target == null) {
                return;
            }
            if (target instanceof NodeList || target instanceof Array) {
                target = target;
                for (const element of target) {
                    DOMUtilsContext.remove(element);
                }
            }
            else {
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
        empty(element) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
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
        offset(element) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
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
        width(element, isShow = false) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (DOMUtilsCommonUtils.isWin(element)) {
                return DOMUtilsContext.windowApi.window.document.documentElement
                    .clientWidth;
            }
            if (element.nodeType === 9) {
                /* Document文档节点 */
                element = element;
                return Math.max(element.body.scrollWidth, element.documentElement.scrollWidth, element.body.offsetWidth, element.documentElement.offsetWidth, element.documentElement.clientWidth);
            }
            if (isShow ||
                (!isShow && DOMUtilsCommonUtils.isShow(element))) {
                /* 已显示 */
                /* 不从style中获取对应的宽度，因为可能使用了class定义了width !important */
                element = element;
                /* 如果element.style.width为空  则从css里面获取是否定义了width信息如果定义了 则读取css里面定义的宽度width */
                if (parseFloat(DOMUtilsCommonUtils.getStyleValue(element, "width").toString()) > 0) {
                    return parseFloat(DOMUtilsCommonUtils.getStyleValue(element, "width").toString());
                }
                /* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetWidth来进行计算 */
                if (element.offsetWidth > 0) {
                    let borderLeftWidth = DOMUtilsCommonUtils.getStyleValue(element, "borderLeftWidth");
                    let borderRightWidth = DOMUtilsCommonUtils.getStyleValue(element, "borderRightWidth");
                    let paddingLeft = DOMUtilsCommonUtils.getStyleValue(element, "paddingLeft");
                    let paddingRight = DOMUtilsCommonUtils.getStyleValue(element, "paddingRight");
                    let backHeight = parseFloat(element.offsetWidth.toString()) -
                        parseFloat(borderLeftWidth.toString()) -
                        parseFloat(borderRightWidth.toString()) -
                        parseFloat(paddingLeft.toString()) -
                        parseFloat(paddingRight.toString());
                    return parseFloat(backHeight.toString());
                }
                return 0;
            }
            else {
                /* 未显示 */
                element = element;
                let { recovery } = DOMUtilsCommonUtils.showElement(element);
                let width = DOMUtilsContext.width(element, true);
                recovery();
                return width;
            }
        }
        height(element, isShow = false) {
            let DOMUtilsContext = this;
            if (DOMUtilsCommonUtils.isWin(element)) {
                return DOMUtilsContext.windowApi.window.document.documentElement
                    .clientHeight;
            }
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                // @ts-ignore
                return;
            }
            if (element.nodeType === 9) {
                element = element;
                /* Document文档节点 */
                return Math.max(element.body.scrollHeight, element.documentElement.scrollHeight, element.body.offsetHeight, element.documentElement.offsetHeight, element.documentElement.clientHeight);
            }
            if (isShow ||
                (!isShow && DOMUtilsCommonUtils.isShow(element))) {
                element = element;
                /* 已显示 */
                /* 从style中获取对应的高度，因为可能使用了class定义了width !important */
                /* 如果element.style.height为空  则从css里面获取是否定义了height信息如果定义了 则读取css里面定义的高度height */
                if (parseFloat(DOMUtilsCommonUtils.getStyleValue(element, "height").toString()) > 0) {
                    return parseFloat(DOMUtilsCommonUtils.getStyleValue(element, "height").toString());
                }
                /* 如果从css里获取到的值不是大于0  可能是auto 则通过offsetHeight来进行计算 */
                if (element.offsetHeight > 0) {
                    let borderTopWidth = DOMUtilsCommonUtils.getStyleValue(element, "borderTopWidth");
                    let borderBottomWidth = DOMUtilsCommonUtils.getStyleValue(element, "borderBottomWidth");
                    let paddingTop = DOMUtilsCommonUtils.getStyleValue(element, "paddingTop");
                    let paddingBottom = DOMUtilsCommonUtils.getStyleValue(element, "paddingBottom");
                    let backHeight = parseFloat(element.offsetHeight.toString()) -
                        parseFloat(borderTopWidth.toString()) -
                        parseFloat(borderBottomWidth.toString()) -
                        parseFloat(paddingTop.toString()) -
                        parseFloat(paddingBottom.toString());
                    return parseFloat(backHeight.toString());
                }
                return 0;
            }
            else {
                /* 未显示 */
                element = element;
                let { recovery } = DOMUtilsCommonUtils.showElement(element);
                let height = DOMUtilsContext.height(element, true);
                recovery();
                return height;
            }
        }
        outerWidth(element, isShow = false) {
            let DOMUtilsContext = this;
            if (DOMUtilsCommonUtils.isWin(element)) {
                return DOMUtilsContext.windowApi.window.innerWidth;
            }
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                // @ts-ignore
                return;
            }
            element = element;
            if (isShow || (!isShow && DOMUtilsCommonUtils.isShow(element))) {
                let style = getComputedStyle(element, null);
                let marginLeft = DOMUtilsCommonUtils.getStyleValue(style, "marginLeft");
                let marginRight = DOMUtilsCommonUtils.getStyleValue(style, "marginRight");
                return element.offsetWidth + marginLeft + marginRight;
            }
            else {
                let { recovery } = DOMUtilsCommonUtils.showElement(element);
                let outerWidth = DOMUtilsContext.outerWidth(element, true);
                recovery();
                return outerWidth;
            }
        }
        outerHeight(element, isShow = false) {
            let DOMUtilsContext = this;
            if (DOMUtilsCommonUtils.isWin(element)) {
                return DOMUtilsContext.windowApi.window.innerHeight;
            }
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                // @ts-ignore
                return;
            }
            element = element;
            if (isShow || (!isShow && DOMUtilsCommonUtils.isShow(element))) {
                let style = getComputedStyle(element, null);
                let marginTop = DOMUtilsCommonUtils.getStyleValue(style, "marginTop");
                let marginBottom = DOMUtilsCommonUtils.getStyleValue(style, "marginBottom");
                return element.offsetHeight + marginTop + marginBottom;
            }
            else {
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
        animate(element, styles, duration = 1000, callback = null) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
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
        }
        /**
         * 将一个元素包裹在指定的HTML元素中
         * @param element 要包裹的元素
         * @param wrapperHTML 要包裹的HTML元素的字符串表示形式
         * @example
         * // 将a.xx元素外面包裹一层div
         * DOMUtils.wrap(document.querySelector("a.xx"),"<div></div>")
         */
        wrap(element, wrapperHTML) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            element = element;
            // 创建一个新的div元素，并将wrapperHTML作为其innerHTML
            let wrapper = DOMUtilsContext.windowApi.document.createElement("div");
            wrapper.innerHTML = wrapperHTML;
            let wrapperFirstChild = wrapper.firstChild;
            // 将要包裹的元素插入目标元素前面
            element.parentElement.insertBefore(wrapperFirstChild, element);
            // 将要包裹的元素移动到wrapper中
            wrapperFirstChild.appendChild(element);
        }
        prev(element) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            return element.previousElementSibling;
        }
        next(element) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            return element.nextElementSibling;
        }
        /**
         * 取消挂载在window下的DOMUtils并返回DOMUtils
         * @example
         * let DOMUtils = window.DOMUtils.noConflict()
         */
        noConflict() {
            let DOMUtilsContext = this;
            if (DOMUtilsContext.windowApi.window.DOMUtils) {
                DOMUtilsCommonUtils.delete(window, "DOMUtils");
            }
            DOMUtilsContext.windowApi.window.DOMUtils = this;
            return this;
        }
        siblings(element) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            return Array.from(element.parentElement
                .children).filter((child) => child !== element);
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
        parent(element) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (element instanceof NodeList || element instanceof Array) {
                element = element;
                let resultArray = [];
                element.forEach((eleItem) => {
                    resultArray.push(DOMUtilsContext.parent(eleItem));
                });
                return resultArray;
            }
            else {
                return element.parentElement;
            }
        }
        parseHTML(html, useParser = false, isComplete = false) {
            let DOMUtilsContext = this;
            function parseHTMLByDOMParser() {
                let parser = new DOMParser();
                if (isComplete) {
                    return parser.parseFromString(html, "text/html");
                }
                else {
                    return parser.parseFromString(html, "text/html").body.firstChild;
                }
            }
            function parseHTMLByCreateDom() {
                let tempDIV = DOMUtilsContext.windowApi.document.createElement("div");
                tempDIV.innerHTML = html;
                if (isComplete) {
                    return tempDIV;
                }
                else {
                    return tempDIV.firstChild;
                }
            }
            if (useParser) {
                return parseHTMLByDOMParser();
            }
            else {
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
        show(target) {
            let DOMUtilsContext = this;
            if (target == null) {
                return;
            }
            if (typeof target === "string") {
                target = DOMUtilsContext.windowApi.document.querySelectorAll(target);
            }
            if (target instanceof NodeList || target instanceof Array) {
                target = target;
                for (const element of target) {
                    DOMUtilsContext.show(element);
                }
            }
            else {
                target = target;
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
        hide(target) {
            let DOMUtilsContext = this;
            if (target == null) {
                return;
            }
            if (typeof target === "string") {
                target = DOMUtilsContext.windowApi.document.querySelectorAll(target);
            }
            if (target instanceof NodeList || target instanceof Array) {
                target = target;
                for (const element of target) {
                    DOMUtilsContext.hide(element);
                }
            }
            else {
                target = target;
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
        fadeIn(element, duration = 400, callback) {
            if (element == null) {
                return;
            }
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            element = element;
            element.style.opacity = "0";
            element.style.display = "";
            let start = null;
            let timer = null;
            function step(timestamp) {
                if (!start)
                    start = timestamp;
                let progress = timestamp - start;
                element = element;
                element.style.opacity = Math.min(progress / duration, 1).toString();
                if (progress < duration) {
                    DOMUtilsContext.windowApi.window.requestAnimationFrame(step);
                }
                else {
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
        fadeOut(element, duration = 400, callback) {
            let DOMUtilsContext = this;
            if (element == null) {
                return;
            }
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            element = element;
            element.style.opacity = "1";
            let start = null;
            let timer = null;
            function step(timestamp) {
                if (!start)
                    start = timestamp;
                let progress = timestamp - start;
                element = element;
                element.style.opacity = Math.max(1 - progress / duration, 0).toString();
                if (progress < duration) {
                    DOMUtilsContext.windowApi.window.requestAnimationFrame(step);
                }
                else {
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
        toggle(element) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.windowApi.document.querySelector(element);
            }
            if (element == null) {
                return;
            }
            if (getComputedStyle(element).getPropertyValue("display") === "none") {
                DOMUtilsContext.show(element);
            }
            else {
                DOMUtilsContext.hide(element);
            }
        }
        /**
         * 创建一个新的DOMUtils实例
         * @param option
         * @returns
         */
        createDOMUtils(option) {
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
        getTextBoundingRect($input, selectionStart, selectionEnd) {
            let DOMUtilsContext = this;
            // Basic parameter validation
            if (!$input || !("value" in $input))
                return $input;
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
            if (selectionStart < 0)
                selectionStart = 0;
            else
                selectionStart = Math.min($input.value.length, selectionStart);
            if (typeof selectionEnd == "string")
                selectionEnd = parseFloat(selectionEnd);
            if (typeof selectionEnd != "number" ||
                isNaN(selectionEnd) ||
                selectionEnd < selectionStart) {
                selectionEnd = selectionStart;
            }
            if (selectionEnd < 0)
                selectionEnd = 0;
            else
                selectionEnd = Math.min($input.value.length, selectionEnd);
            // If available (thus IE), use the createTextRange method
            // @ts-ignore
            if (typeof $input.createTextRange == "function") {
                let range = $input.createTextRange();
                range.collapse(true);
                range.moveStart("character", selectionStart);
                range.moveEnd("character", selectionEnd - selectionStart);
                return range.getBoundingClientRect();
            }
            // createTextRange is not supported, create a fake text range
            let offset = getInputOffset(), topPos = offset.top, leftPos = offset.left, width = getInputCSS("width", true), height = getInputCSS("height", true);
            // Styles to simulate a node in an input field
            let cssDefaultStyles = "white-space:pre;padding:0;margin:0;", listOfModifiers = [
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
            topPos += getInputCSS("padding-top", true);
            topPos += getInputCSS("border-top-width", true);
            leftPos += getInputCSS("padding-left", true);
            leftPos += getInputCSS("border-left-width", true);
            leftPos += 1; //Seems to be necessary
            for (let index = 0; index < listOfModifiers.length; index++) {
                let property = listOfModifiers[index];
                // @ts-ignore
                cssDefaultStyles += property + ":" + getInputCSS(property) + ";";
            }
            // End of CSS variable checks
            // 不能为空，不然获取不到高度
            let text = $input.value || "G", textLen = text.length, fakeClone = DOMUtilsContext.windowApi.document.createElement("div");
            if (selectionStart > 0)
                appendPart(0, selectionStart);
            var fakeRange = appendPart(selectionStart, selectionEnd);
            if (textLen > selectionEnd)
                appendPart(selectionEnd, textLen);
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
            function appendPart(start, end) {
                var span = DOMUtilsContext.windowApi.document.createElement("span");
                span.style.cssText = cssDefaultStyles; //Force styles to prevent unexpected results
                span.textContent = text.substring(start, end);
                fakeClone.appendChild(span);
                return span;
            }
            // Computing offset position
            function getInputOffset() {
                let body = DOMUtilsContext.windowApi.document.body, win = DOMUtilsContext.windowApi.document.defaultView, docElem = DOMUtilsContext.windowApi.document.documentElement, $box = DOMUtilsContext.windowApi.document.createElement("div");
                $box.style.paddingLeft = $box.style.width = "1px";
                body.appendChild($box);
                var isBoxModel = $box.offsetWidth == 2;
                body.removeChild($box);
                let $boxRect = $input.getBoundingClientRect();
                var clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, scrollTop = win.pageYOffset ||
                    (isBoxModel && docElem.scrollTop) ||
                    body.scrollTop, scrollLeft = win.pageXOffset ||
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
            function getInputCSS(prop, isNumber) {
                var val = DOMUtilsContext.windowApi.document
                    .defaultView.getComputedStyle($input, null)
                    .getPropertyValue(prop);
                return isNumber ? parseFloat(val) : val;
            }
        }
    }
    let domUtils = new DOMUtils();

    return domUtils;

}));
//# sourceMappingURL=index.amd.js.map
