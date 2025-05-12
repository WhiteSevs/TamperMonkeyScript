(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.DOMUtils = factory());
})(this, (function () { 'use strict';

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
            if (option) {
                if (option.globalThis == null) {
                    option.globalThis = option.window;
                }
                if (option.self == null) {
                    option.self = option.window;
                }
            }
            if (!option) {
                option = Object.assign({}, this.defaultApi);
            }
            // @ts-ignore
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

    /** 通用工具类 */
    const DOMUtilsCommonUtils = {
        windowApi: new WindowApi({
            document: document,
            window: window,
            top: top,
        }),
        /**
         * 判断元素是否已显示或已连接
         * @param element
         */
        isShow(element) {
            return Boolean(element.getClientRects().length);
        },
        /**
         * 获取安全的html
         */
        getSafeHTML(text) {
            // @ts-ignore
            if (globalThis.trustedTypes) {
                // @ts-ignore
                const policy = globalThis.trustedTypes.createPolicy("safe-innerHTML", {
                    createHTML: (html) => html,
                });
                return policy.createHTML(text);
            }
            else {
                return text;
            }
        },
        /**
         * 在CSP策略下设置innerHTML
         * @param $el 元素
         * @param text 文本
         */
        setSafeHTML($el, text) {
            // 创建 TrustedHTML 策略（需 CSP 允许）
            $el.innerHTML = this.getSafeHTML(text);
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
        /** .on添加在元素存储的事件 */
        SymbolEvents: Symbol("events_" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)),
    };

    const OriginPrototype = {
        Object: {
            defineProperty: Object.defineProperty,
        },
    };

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
                let currentParam = args[startIndex];
                if (typeof currentParam === "boolean") {
                    option.capture = currentParam;
                    if (typeof args[startIndex + 1] === "boolean") {
                        option.once = args[startIndex + 1];
                    }
                    if (typeof args[startIndex + 2] === "boolean") {
                        option.passive = args[startIndex + 2];
                    }
                }
                else if (typeof currentParam === "object" &&
                    ("capture" in currentParam ||
                        "once" in currentParam ||
                        "passive" in currentParam ||
                        "isComposedPath" in currentParam)) {
                    option.capture = currentParam.capture;
                    option.once = currentParam.once;
                    option.passive = currentParam.passive;
                    option.isComposedPath = currentParam.isComposedPath;
                }
                return option;
            }
            let DOMUtilsContext = this;
            let args = arguments;
            if (typeof element === "string") {
                element = DOMUtilsContext.selectorAll(element);
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
            // 事件名
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventTypeList.concat(eventType);
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventTypeList.concat(eventType.split(" "));
            }
            // 子元素选择器
            let selectorList = [];
            if (Array.isArray(selector)) {
                selectorList = selectorList.concat(selector);
            }
            else if (typeof selector === "string") {
                selectorList.push(selector);
            }
            // 事件回调
            let listenerCallBack = callback;
            // 事件配置
            let listenerOption = {
                capture: false,
                once: false,
                passive: false,
                isComposedPath: false,
            };
            if (typeof selector === "function") {
                /* 这是为没有selector的情况 */
                listenerCallBack = selector;
                listenerOption = getOption(args, 3, listenerOption);
            }
            else {
                /* 这是存在selector的情况 */
                listenerOption = getOption(args, 4, listenerOption);
            }
            /**
             * 如果是once，那么删除该监听和元素上的事件和监听
             */
            function checkOptionOnceToRemoveEventListener() {
                if (listenerOption.once) {
                    DOMUtilsContext.off(element, eventType, selector, callback, option);
                }
            }
            elementList.forEach((elementItem) => {
                /**
                 * 事件回调
                 * @param event
                 */
                function domUtilsEventCallBack(event) {
                    if (selectorList.length) {
                        /* 存在子元素选择器 */
                        // 这时候的this和target都是子元素选择器的元素
                        let eventTarget = listenerOption.isComposedPath
                            ? event.composedPath()[0]
                            : event.target;
                        let totalParent = DOMUtilsCommonUtils.isWin(elementItem) ||
                            // @ts-ignore
                            elementItem === DOMUtilsContext.windowApi.document
                            ? DOMUtilsContext.windowApi.document.documentElement
                            : elementItem;
                        let findValue = selectorList.find((selectorItem) => {
                            // 判断目标元素是否匹配选择器
                            if (eventTarget?.matches(selectorItem)) {
                                /* 当前目标可以被selector所匹配到 */
                                return true;
                            }
                            /* 在上层与主元素之间寻找可以被selector所匹配到的 */
                            let $closestMatches = eventTarget?.closest(selectorItem);
                            if ($closestMatches && totalParent?.contains($closestMatches)) {
                                eventTarget = $closestMatches;
                                return true;
                            }
                            return false;
                        });
                        if (findValue) {
                            // 这里尝试使用defineProperty修改event的target值
                            try {
                                OriginPrototype.Object.defineProperty(event, "target", {
                                    get() {
                                        return eventTarget;
                                    },
                                });
                            }
                            catch (error) { }
                            listenerCallBack.call(eventTarget, event, eventTarget);
                            checkOptionOnceToRemoveEventListener();
                        }
                    }
                    else {
                        // 这时候的this指向监听的元素
                        listenerCallBack.call(elementItem, event);
                        checkOptionOnceToRemoveEventListener();
                    }
                }
                /* 遍历事件名设置元素事件 */
                eventTypeList.forEach((eventName) => {
                    elementItem.addEventListener(eventName, domUtilsEventCallBack, listenerOption);
                    /* 获取对象上的事件 */
                    let elementEvents = elementItem[DOMUtilsData.SymbolEvents] || {};
                    /* 初始化对象上的xx事件 */
                    elementEvents[eventName] = elementEvents[eventName] || [];
                    elementEvents[eventName].push({
                        selector: selectorList,
                        option: listenerOption,
                        callback: domUtilsEventCallBack,
                        originCallBack: listenerCallBack,
                    });
                    /* 覆盖事件 */
                    // @ts-ignore
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
                let currentParam = args1[startIndex];
                if (typeof currentParam === "boolean") {
                    option.capture = currentParam;
                }
                else if (typeof currentParam === "object" &&
                    "capture" in currentParam) {
                    option.capture = currentParam.capture;
                }
                return option;
            }
            let DOMUtilsContext = this;
            let args = arguments;
            if (typeof element === "string") {
                element = DOMUtilsContext.selectorAll(element);
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
            // 子元素选择器
            let selectorList = [];
            if (Array.isArray(selector)) {
                selectorList = selectorList.concat(selector);
            }
            else if (typeof selector === "string") {
                selectorList.push(selector);
            }
            /**
             * 事件的回调函数
             */
            let listenerCallBack = callback;
            /**
             * 事件的配置
             */
            let listenerOption = {
                capture: false,
            };
            if (typeof selector === "function") {
                /* 这是为没有selector的情况 */
                listenerCallBack = selector;
                listenerOption = getOption(args, 3, listenerOption);
            }
            else {
                listenerOption = getOption(args, 4, listenerOption);
            }
            // 是否移除所有事件
            let isRemoveAll = false;
            if (args.length === 2) {
                // 目标函数、事件名
                isRemoveAll = true;
            }
            else if ((args.length === 3 && typeof args[2] === "string") ||
                Array.isArray(args[2])) {
                // 目标函数、事件名、子元素选择器
                isRemoveAll = true;
            }
            elementList.forEach((elementItem) => {
                /* 获取对象上的事件 */
                // @ts-ignore
                let elementEvents = elementItem[DOMUtilsData.SymbolEvents] || {};
                eventTypeList.forEach((eventName) => {
                    let handlers = elementEvents[eventName] || [];
                    if (typeof filter === "function") {
                        handlers = handlers.filter(filter);
                    }
                    for (let index = 0; index < handlers.length; index++) {
                        let handler = handlers[index];
                        let flag = true;
                        if (flag &&
                            listenerCallBack &&
                            handler.originCallBack !== listenerCallBack) {
                            // callback不同
                            flag = false;
                        }
                        if (flag && selectorList.length && Array.isArray(handler.selector)) {
                            if (JSON.stringify(handler.selector) !== JSON.stringify(selectorList)) {
                                // 子元素选择器不同
                                flag = false;
                            }
                        }
                        if (flag && listenerOption.capture !== handler.option.capture) {
                            // 事件的配置项不同
                            flag = false;
                        }
                        if (flag || isRemoveAll) {
                            elementItem.removeEventListener(eventName, handler.callback, handler.option);
                            handlers.splice(index--, 1);
                        }
                    }
                    if (handlers.length === 0) {
                        /* 如果没有任意的handler，那么删除该属性 */
                        DOMUtilsCommonUtils.delete(elementEvents, eventType);
                    }
                });
                // @ts-ignore
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
                element = DOMUtilsContext.selectorAll(element);
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
                        // @ts-ignore
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
                element = DOMUtilsContext.selectorAll(element);
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.click($ele, handler, details, useDispatchToTriggerEvent);
                });
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.focus($ele, handler, details, useDispatchToTriggerEvent);
                });
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.focus($ele, handler, details, useDispatchToTriggerEvent);
                });
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.hover($ele, handler, option);
                });
                return;
            }
            DOMUtilsContext.on(element, "mouseenter", null, handler, option);
            DOMUtilsContext.on(element, "mouseleave", null, handler, option);
        }
        /**
         * 当按键松开时触发事件
         * keydown - > keypress - > keyup
         * @param element 当前元素
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
        keyup(element, handler, option) {
            let DOMUtilsContext = this;
            if (element == null) {
                return;
            }
            if (typeof element === "string") {
                element = DOMUtilsContext.selectorAll(element);
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.keyup($ele, handler, option);
                });
                return;
            }
            DOMUtilsContext.on(element, "keyup", null, handler, option);
        }
        /**
         * 当按键按下时触发事件
         * keydown - > keypress - > keyup
         * @param element 目标
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
        keydown(element, handler, option) {
            let DOMUtilsContext = this;
            if (element == null) {
                return;
            }
            if (typeof element === "string") {
                element = DOMUtilsContext.selectorAll(element);
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.keydown($ele, handler, option);
                });
                return;
            }
            DOMUtilsContext.on(element, "keydown", null, handler, option);
        }
        /**
         * 当按键按下时触发事件
         * keydown - > keypress - > keyup
         * @param element 目标
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
        keypress(element, handler, option) {
            let DOMUtilsContext = this;
            if (element == null) {
                return;
            }
            if (typeof element === "string") {
                element = DOMUtilsContext.selectorAll(element);
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.keypress($ele, handler, option);
                });
                return;
            }
            DOMUtilsContext.on(element, "keypress", null, handler, option);
        }
        /**
         * 监听某个元素键盘按键事件或window全局按键事件
         * 按下有值的键时触发，按下Ctrl\Alt\Shift\Meta是无值键。按下先触发keydown事件，再触发keypress事件。
         * @param element 需要监听的对象，可以是全局Window或者某个元素
         * @param eventName 事件名，默认keypress
         * @param callback 自己定义的回调事件，参数1为当前的key，参数2为组合按键，数组类型，包含ctrl、shift、alt和meta（win键或mac的cmd键）
         * @param options 监听事件的配置
         * @example
            Utils.listenKeyboard(window,(keyName,keyValue,otherKey,event)=>{
                if(keyName === "Enter"){
                    console.log("回车按键的值是："+keyValue)
                }
                if(otherKey.indexOf("ctrl") && keyName === "Enter" ){
                    console.log("Ctrl和回车键");
              }
            })
         * @example
        字母和数字键的键码值(keyCode)
          按键	键码	按键	键码	按键	键码	按键	键码
          A	65	J	74	S	83	1	49
          B	66	K	75	T	84	2	50
          C	67	L	76	U	85	3	51
          D	68	M	77	V	86	4	52
          E	69	N	78	W	87	5	53
          F	70	O	79	X	88	6	54
          G	71	P	80	Y	89	7	55
          H	72	Q	81	Z	90	8	56
          I	73	R	82	0	48	9	57
      
          数字键盘上的键的键码值(keyCode)
          功能键键码值(keyCode)
          按键	键码	按键  	键码	按键	键码	按键	键码
          0	96	8	104	F1	112	F7	118
          1	97	9	105	F2	113	F8	119
          2	98	*	106	F3	114	F9	120
          3	99	+	107	F4	115	F10	121
          4	100	Enter	108	F5	116	F11	122
          5	101	-	109	F6	117	F12	123
          6	102	.	110
          7	103	/	111
          
          控制键键码值(keyCode)
          按键		键码	按键		键码	按键		键码	按键		键码
          BackSpace	8	Esc		27	→		39	-_		189
          Tab		9	Spacebar	32	↓		40	.>		190
          Clear		12	Page Up		33	Insert		45	/?		191
          Enter		13	Page Down	34	Delete		46	`~		192
          Shift		16	End		35	Num Lock	144	[{		219
          Control		17	Home		36	;:		186	\|		220
          Alt		18	←		37	=+		187	]}		221
          Cape Lock	20	↑		38	,<		188	'"		222
      
          多媒体键码值(keyCode)
          按键		键码
          音量加		175
          音量减		174
          停止		179
          静音		173
          浏览器		172
          邮件		180
          搜索		170
          收藏		171
         **/
        listenKeyboard(element, eventName = "keypress", callback, options) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.selectorAll(element);
            }
            let keyboardEventCallBack = function (event) {
                /** 键名 */
                let keyName = event.key || event.code;
                /** 键值 */
                let keyValue = event.charCode || event.keyCode || event.which;
                /** 组合键列表 */
                let otherCodeList = [];
                if (event.ctrlKey) {
                    otherCodeList.push("ctrl");
                }
                if (event.altKey) {
                    otherCodeList.push("alt");
                }
                if (event.metaKey) {
                    otherCodeList.push("meta");
                }
                if (event.shiftKey) {
                    otherCodeList.push("shift");
                }
                if (typeof callback === "function") {
                    callback(keyName, keyValue, otherCodeList, event);
                }
            };
            DOMUtilsContext.on(element, eventName, keyboardEventCallBack, options);
            return {
                removeListen: () => {
                    DOMUtilsContext.off(element, eventName, keyboardEventCallBack, options);
                },
            };
        }
        selector(selector) {
            return this.selectorAll(selector)[0];
        }
        selectorAll(selector) {
            const context = this;
            selector = selector.trim();
            if (selector.match(/[^\s]{1}:empty$/gi)) {
                // empty 语法
                selector = selector.replace(/:empty$/gi, "");
                return Array.from(context.windowApi.document.querySelectorAll(selector)).filter(($ele) => {
                    return $ele?.innerHTML?.trim() === "";
                });
            }
            else if (selector.match(/[^\s]{1}:contains\("(.*)"\)$/i) ||
                selector.match(/[^\s]{1}:contains\('(.*)'\)$/i)) {
                // contains 语法
                let textMatch = selector.match(/:contains\(("|')(.*)("|')\)$/i);
                let text = textMatch[2];
                selector = selector.replace(/:contains\(("|')(.*)("|')\)$/gi, "");
                return Array.from(context.windowApi.document.querySelectorAll(selector)).filter(($ele) => {
                    // @ts-ignore
                    return ($ele?.textContent || $ele?.innerText)?.includes(text);
                });
            }
            else if (selector.match(/[^\s]{1}:regexp\("(.*)"\)$/i) ||
                selector.match(/[^\s]{1}:regexp\('(.*)'\)$/i)) {
                // regexp 语法
                let textMatch = selector.match(/:regexp\(("|')(.*)("|')\)$/i);
                let pattern = textMatch[2];
                let flagMatch = pattern.match(/("|'),[\s]*("|')([igm]{0,3})$/i);
                let flags = "";
                if (flagMatch) {
                    pattern = pattern.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi, "");
                    flags = flagMatch[3];
                }
                let regexp = new RegExp(pattern, flags);
                selector = selector.replace(/:regexp\(("|')(.*)("|')\)$/gi, "");
                return Array.from(context.windowApi.document.querySelectorAll(selector)).filter(($ele) => {
                    // @ts-ignore
                    return Boolean(($ele?.textContent || $ele?.innerText)?.match(regexp));
                });
            }
            else {
                // 普通语法
                return Array.from(context.windowApi.document.querySelectorAll(selector));
            }
        }
    }

    /**
     * 判断是否是元素列表
     * @param $ele
     */
    const isNodeList = ($ele) => {
        return Array.isArray($ele) || $ele instanceof NodeList;
    };
    class DOMUtils extends DOMUtilsEvent {
        constructor(option) {
            super(option);
        }
        /** 版本号 */
        version = "2025.5.12";
        attr(element, attrName, attrValue) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                if (attrValue == null) {
                    // 获取属性
                    return DOMUtilsContext.attr(element[0], attrName, attrValue);
                }
                else {
                    // 设置属性
                    element.forEach(($ele) => {
                        DOMUtilsContext.attr($ele, attrName, attrValue);
                    });
                    return;
                }
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
                DOMUtilsContext.html(tempElement, property);
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
                if (key === "innerHTML") {
                    DOMUtilsContext.html(tempElement, value);
                    return;
                }
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                if (typeof property === "string") {
                    if (value == null) {
                        // 获取属性
                        return DOMUtilsContext.css(element[0], property);
                    }
                    else {
                        // 设置属性
                        element.forEach(($ele) => {
                            DOMUtilsContext.css($ele, property);
                        });
                        return;
                    }
                }
                else if (typeof property === "object") {
                    // 设置属性
                    element.forEach(($ele) => {
                        DOMUtilsContext.css($ele, property);
                    });
                    return;
                }
                else ;
                return;
            }
            let setStyleProperty = (propertyName, propertyValue) => {
                if (typeof propertyValue === "string" &&
                    propertyValue.trim().endsWith("!important")) {
                    propertyValue = propertyValue
                        .trim()
                        .replace(/!important$/gi, "")
                        .trim();
                    element.style.setProperty(propertyName, propertyValue, "important");
                }
                else {
                    propertyValue = handlePixe(propertyName, propertyValue);
                    element.style.setProperty(propertyName, propertyValue);
                }
            };
            if (typeof property === "string") {
                if (value == null) {
                    return DOMUtilsContext.windowApi.globalThis
                        .getComputedStyle(element)
                        .getPropertyValue(property);
                }
                else {
                    setStyleProperty(property, value);
                }
            }
            else if (typeof property === "object") {
                for (let prop in property) {
                    let value = property[prop];
                    setStyleProperty(prop, value);
                }
            }
            else {
                // 其他情况
                throw new TypeError("property must be string or object");
            }
        }
        text(element, text) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                if (text == null) {
                    // 获取
                    return DOMUtilsContext.text(element[0]);
                }
                else {
                    // 设置
                    element.forEach(($ele) => {
                        DOMUtilsContext.text($ele, text);
                    });
                }
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                if (html == null) {
                    // 获取
                    return DOMUtilsContext.html(element[0]);
                }
                else {
                    // 设置
                    element.forEach(($ele) => {
                        DOMUtilsContext.html($ele, html);
                    });
                }
                return;
            }
            if (html == null) {
                // 获取
                return element.innerHTML;
            }
            else {
                // 设置
                if (html instanceof Element) {
                    html = html.innerHTML;
                }
                if ("innerHTML" in element) {
                    DOMUtilsCommonUtils.setSafeHTML(element, html);
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
            let elementTransform = DOMUtilsContext.windowApi.globalThis.getComputedStyle(element).transform;
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                if (value == null) {
                    // 获取
                    return DOMUtilsContext.val(element[0]);
                }
                else {
                    // 设置
                    element.forEach(($ele) => {
                        DOMUtilsContext.val($ele, value);
                    });
                }
                return;
            }
            if (value == null) {
                // 获取
                if (element.localName === "input" &&
                    (element.type === "checkbox" || element.type === "radio")) {
                    return element.checked;
                }
                else {
                    return element.value;
                }
            }
            else {
                // 设置
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
            if (typeof element === "string") {
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                if (propValue == null) {
                    // 获取
                    return DOMUtilsContext.prop(element[0], propName);
                }
                else {
                    // 设置
                    element.forEach(($ele) => {
                        DOMUtilsContext.prop($ele, propName, propValue);
                    });
                }
                return;
            }
            if (propValue == null) {
                return Reflect.get(element, propName);
            }
            else {
                if (element instanceof Element && propName === "innerHTML") {
                    DOMUtilsContext.html(element, propValue);
                }
                else {
                    Reflect.set(element, propName, propValue);
                }
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.removeAttr($ele, attrName);
                });
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.removeClass($ele, className);
                });
                return;
            }
            if (className == null) {
                // 清空全部className
                element.className = "";
            }
            else {
                if (!Array.isArray(className)) {
                    className = className.split(" ");
                }
                className.forEach((itemClassName) => {
                    element.classList.remove(itemClassName);
                });
            }
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.removeProp($ele, propName);
                });
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.replaceWith($ele, newElement);
                });
                return;
            }
            if (typeof newElement === "string") {
                newElement = DOMUtilsContext.parseHTML(newElement, false, false);
            }
            element.parentElement.replaceChild(newElement, element);
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.addClass($ele, className);
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
                element.classList.add(itemClassName);
            });
        }
        /**
         * 判断元素是否存在className
         * @param element
         * @param className
         */
        hasClass(element, className) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return false;
            }
            if (isNodeList(element)) {
                let flag = true;
                for (let index = 0; index < element.length; index++) {
                    const $ele = element[index];
                    flag = flag && DOMUtilsContext.hasClass($ele, className);
                }
                return flag;
            }
            if (!element?.classList) {
                return false;
            }
            if (!Array.isArray(className)) {
                className = className.split(" ");
            }
            for (let index = 0; index < className.length; index++) {
                const item = className[index].trim();
                if (!element.classList.contains(item)) {
                    return false;
                }
            }
            return true;
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.append($ele, content);
                });
                return;
            }
            function elementAppendChild(ele, text) {
                if (typeof content === "string") {
                    ele.insertAdjacentHTML("beforeend", DOMUtilsCommonUtils.getSafeHTML(text));
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
                        ele = DOMUtilsContext.parseHTML(ele, true, false);
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.prepend($ele, content);
                });
                return;
            }
            if (typeof content === "string") {
                element.insertAdjacentHTML("afterbegin", DOMUtilsCommonUtils.getSafeHTML(content));
            }
            else {
                let $firstChild = element.firstChild;
                if ($firstChild == null) {
                    element.prepend(content);
                }
                else {
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
        after(element, content) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.after($ele, content);
                });
                return;
            }
            if (typeof content === "string") {
                element.insertAdjacentHTML("afterend", DOMUtilsCommonUtils.getSafeHTML(content));
            }
            else {
                let $parent = element.parentElement;
                let $nextSlibling = element.nextSibling;
                if (!$parent || $nextSlibling) {
                    // 任意一个不行
                    element.after(content);
                }
                else {
                    element.parentElement.insertBefore(content, element.nextSibling);
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
        before(element, content) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.before($ele, content);
                });
                return;
            }
            if (typeof content === "string") {
                element.insertAdjacentHTML("beforebegin", DOMUtilsCommonUtils.getSafeHTML(content));
            }
            else {
                let $parent = element.parentElement;
                if (!$parent) {
                    element.before(content);
                }
                else {
                    $parent.insertBefore(content, element);
                }
            }
        }
        /**
         * 移除元素
         * @param element 目标元素
         * @example
         * // 元素a.xx前面添加一个元素
         * DOMUtils.remove(document.querySelector("a.xx"))
         * DOMUtils.remove(document.querySelectorAll("a.xx"))
         * DOMUtils.remove("a.xx")
         * */
        remove(element) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                element.forEach(($ele) => {
                    DOMUtilsContext.remove($ele);
                });
                return;
            }
            element.remove();
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.empty($ele);
                });
                return;
            }
            DOMUtilsContext.html(element, "");
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
                element = DOMUtilsContext.selector(element);
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
                element = DOMUtilsContext.selector(element);
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
                element = DOMUtilsContext.selector(element);
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
                element = DOMUtilsContext.selector(element);
            }
            if (element == null) {
                // @ts-ignore
                return;
            }
            element = element;
            if (isShow || (!isShow && DOMUtilsCommonUtils.isShow(element))) {
                let style = DOMUtilsContext.windowApi.globalThis.getComputedStyle(element, null);
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
                element = DOMUtilsContext.selector(element);
            }
            if (element == null) {
                // @ts-ignore
                return;
            }
            element = element;
            if (isShow || (!isShow && DOMUtilsCommonUtils.isShow(element))) {
                let style = DOMUtilsContext.windowApi.globalThis.getComputedStyle(element, null);
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.animate($ele, styles, duration, callback);
                });
                return;
            }
            if (typeof duration !== "number" || duration <= 0) {
                throw new TypeError("duration must be a positive number");
            }
            if (typeof callback !== "function" && callback !== undefined) {
                throw new TypeError("callback must be a function or null");
            }
            if (typeof styles !== "object" || styles === undefined) {
                throw new TypeError("styles must be an object");
            }
            if (Object.keys(styles).length === 0) {
                throw new Error("styles must contain at least one property");
            }
            let start = performance.now();
            let from = {};
            let to = {};
            for (let prop in styles) {
                from[prop] =
                    element.style[prop] ||
                        DOMUtilsContext.windowApi.globalThis.getComputedStyle(element)[prop];
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.wrap($ele, wrapperHTML);
                });
                return;
            }
            element = element;
            // 创建一个新的div元素，并将wrapperHTML作为其innerHTML
            let wrapper = DOMUtilsContext.windowApi.document.createElement("div");
            DOMUtilsContext.html(wrapper, wrapperHTML);
            let wrapperFirstChild = wrapper.firstChild;
            // 将要包裹的元素插入目标元素前面
            let parentElement = element.parentElement;
            parentElement.insertBefore(wrapperFirstChild, element);
            // 将要包裹的元素移动到wrapper中
            wrapperFirstChild.appendChild(element);
        }
        prev(element) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.selector(element);
            }
            if (element == null) {
                return;
            }
            return element.previousElementSibling;
        }
        next(element) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.selector(element);
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
                element = DOMUtilsContext.selector(element);
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
                element = DOMUtilsContext.selector(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                let resultArray = [];
                element.forEach(($ele) => {
                    resultArray.push(DOMUtilsContext.parent($ele));
                });
                return resultArray;
            }
            else {
                return element.parentElement;
            }
        }
        parseHTML(html, useParser = false, isComplete = false) {
            let DOMUtilsContext = this;
            // 去除html前后的空格
            html = html.trim();
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
                DOMUtilsContext.html(tempDIV, html);
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
         * 序列化表单元素
         * @param $form 表单元素
         * @example
         * DOMUtils.serialize(document.querySelector("form"))
         * > xxx=xxx&aaa=
         */
        serialize($form) {
            const elements = $form.elements;
            let serializedArray = [];
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element.name &&
                    !element.disabled &&
                    (element.checked ||
                        [
                            "text",
                            "hidden",
                            "password",
                            "textarea",
                            "select-one",
                            "select-multiple",
                        ].includes(element.type))) {
                    if (element.type === "select-multiple") {
                        for (let j = 0; j < element.options.length; j++) {
                            if (element.options[j].selected) {
                                serializedArray.push({
                                    name: element.name,
                                    value: element.options[j].value,
                                });
                            }
                        }
                    }
                    else {
                        serializedArray.push({ name: element.name, value: element.value });
                    }
                }
            }
            return serializedArray
                .map((item) => `${encodeURIComponent(item.name)}=${encodeURIComponent(item.value)}`)
                .join("&");
        }
        /**
         * 显示元素
         * @param target 当前元素
         * @param checkVisiblie 是否检测元素是否显示
         * + true （默认）如果检测到还未显示，则强制使用display: unset !important;
         * + false 不检测，直接设置display属性为空
         * @example
         * // 显示a.xx元素
         * DOMUtils.show(document.querySelector("a.xx"))
         * DOMUtils.show(document.querySelectorAll("a.xx"))
         * DOMUtils.show("a.xx")
         */
        show(target, checkVisiblie = true) {
            let DOMUtilsContext = this;
            if (target == null) {
                return;
            }
            if (typeof target === "string") {
                target = DOMUtilsContext.selectorAll(target);
            }
            if (target instanceof NodeList || target instanceof Array) {
                target = target;
                for (const element of target) {
                    DOMUtilsContext.show(element, checkVisiblie);
                }
            }
            else {
                target = target;
                target.style.display = "";
                if (checkVisiblie) {
                    if (!DOMUtilsCommonUtils.isShow(target)) {
                        /* 仍然是不显示，尝试使用强覆盖 */
                        target.style.setProperty("display", "unset", "important");
                    }
                }
            }
        }
        /**
         * 隐藏元素
         * @param target 当前元素
         * @param checkVisiblie 是否检测元素是否显示
         * + true （默认）如果检测到显示，则强制使用display: none !important;
         * + false 不检测，直接设置display属性为none
         * @example
         * // 隐藏a.xx元素
         * DOMUtils.hide(document.querySelector("a.xx"))
         * DOMUtils.hide(document.querySelectorAll("a.xx"))
         * DOMUtils.hide("a.xx")
         */
        hide(target, checkVisiblie = true) {
            let DOMUtilsContext = this;
            if (target == null) {
                return;
            }
            if (typeof target === "string") {
                target = DOMUtilsContext.selectorAll(target);
            }
            if (target instanceof NodeList || target instanceof Array) {
                target = target;
                for (const element of target) {
                    DOMUtilsContext.hide(element, checkVisiblie);
                }
            }
            else {
                target = target;
                target.style.display = "none";
                if (checkVisiblie) {
                    if (DOMUtilsCommonUtils.isShow(target)) {
                        /* 仍然是显示，尝试使用强覆盖 */
                        target.style.setProperty("display", "none", "important");
                    }
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.fadeIn($ele, duration, callback);
                });
                return;
            }
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
                element = DOMUtilsContext.selectorAll(element);
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.fadeOut($ele, duration, callback);
                });
                return;
            }
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
         * @param checkVisiblie 是否检测元素是否显示
         * @example
         * // 如果元素a.xx当前是隐藏，则显示，如果是显示，则隐藏
         * DOMUtils.toggle(document.querySelector("a.xx"))
         * DOMUtils.toggle("a.xx")
         */
        toggle(element, checkVisiblie) {
            let DOMUtilsContext = this;
            if (typeof element === "string") {
                element = DOMUtilsContext.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    DOMUtilsContext.toggle($ele);
                });
                return;
            }
            if (DOMUtilsContext.windowApi.globalThis
                .getComputedStyle(element)
                .getPropertyValue("display") === "none") {
                DOMUtilsContext.show(element, checkVisiblie);
            }
            else {
                DOMUtilsContext.hide(element, checkVisiblie);
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
//# sourceMappingURL=index.umd.js.map
