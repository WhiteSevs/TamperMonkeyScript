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
            setTimeout: globalThis.setTimeout.bind(globalThis),
            setInterval: globalThis.setInterval.bind(globalThis),
            clearTimeout: globalThis.clearTimeout.bind(globalThis),
            clearInterval: globalThis.clearInterval.bind(globalThis),
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
        get setTimeout() {
            return this.api.setTimeout;
        }
        get clearTimeout() {
            return this.api.clearTimeout;
        }
        get setInterval() {
            return this.api.setInterval;
        }
        get clearInterval() {
            return this.api.clearInterval;
        }
    }

    const createCache = (lastNumberWeakMap) => {
        return (collection, nextNumber) => {
            lastNumberWeakMap.set(collection, nextNumber);
            return nextNumber;
        };
    };

    /*
     * The value of the constant Number.MAX_SAFE_INTEGER equals (2 ** 53 - 1) but it
     * is fairly new.
     */
    const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER === undefined ? 9007199254740991 : Number.MAX_SAFE_INTEGER;
    const TWO_TO_THE_POWER_OF_TWENTY_NINE = 536870912;
    const TWO_TO_THE_POWER_OF_THIRTY = TWO_TO_THE_POWER_OF_TWENTY_NINE * 2;
    const createGenerateUniqueNumber = (cache, lastNumberWeakMap) => {
        return (collection) => {
            const lastNumber = lastNumberWeakMap.get(collection);
            /*
             * Let's try the cheapest algorithm first. It might fail to produce a new
             * number, but it is so cheap that it is okay to take the risk. Just
             * increase the last number by one or reset it to 0 if we reached the upper
             * bound of SMIs (which stands for small integers). When the last number is
             * unknown it is assumed that the collection contains zero based consecutive
             * numbers.
             */
            let nextNumber = lastNumber === undefined ? collection.size : lastNumber < TWO_TO_THE_POWER_OF_THIRTY ? lastNumber + 1 : 0;
            if (!collection.has(nextNumber)) {
                return cache(collection, nextNumber);
            }
            /*
             * If there are less than half of 2 ** 30 numbers stored in the collection,
             * the chance to generate a new random number in the range from 0 to 2 ** 30
             * is at least 50%. It's benifitial to use only SMIs because they perform
             * much better in any environment based on V8.
             */
            if (collection.size < TWO_TO_THE_POWER_OF_TWENTY_NINE) {
                while (collection.has(nextNumber)) {
                    nextNumber = Math.floor(Math.random() * TWO_TO_THE_POWER_OF_THIRTY);
                }
                return cache(collection, nextNumber);
            }
            // Quickly check if there is a theoretical chance to generate a new number.
            if (collection.size > MAX_SAFE_INTEGER) {
                throw new Error('Congratulations, you created a collection of unique numbers which uses all available integers!');
            }
            // Otherwise use the full scale of safely usable integers.
            while (collection.has(nextNumber)) {
                nextNumber = Math.floor(Math.random() * MAX_SAFE_INTEGER);
            }
            return cache(collection, nextNumber);
        };
    };

    const LAST_NUMBER_WEAK_MAP = new WeakMap();
    const cache = createCache(LAST_NUMBER_WEAK_MAP);
    const generateUniqueNumber = createGenerateUniqueNumber(cache, LAST_NUMBER_WEAK_MAP);

    const createBrokerFactory = (createOrGetOngoingRequests, extendBrokerImplementation, generateUniqueNumber, isMessagePort) => (brokerImplementation) => {
        const fullBrokerImplementation = extendBrokerImplementation(brokerImplementation);
        return (sender) => {
            const ongoingRequests = createOrGetOngoingRequests(sender);
            sender.addEventListener('message', (({ data: message }) => {
                const { id } = message;
                if (id !== null && ongoingRequests.has(id)) {
                    const { reject, resolve } = ongoingRequests.get(id);
                    ongoingRequests.delete(id);
                    if (message.error === undefined) {
                        resolve(message.result);
                    }
                    else {
                        reject(new Error(message.error.message));
                    }
                }
            }));
            if (isMessagePort(sender)) {
                sender.start();
            }
            const call = (method, params = null, transferables = []) => {
                return new Promise((resolve, reject) => {
                    const id = generateUniqueNumber(ongoingRequests);
                    ongoingRequests.set(id, { reject, resolve });
                    if (params === null) {
                        sender.postMessage({ id, method }, transferables);
                    }
                    else {
                        sender.postMessage({ id, method, params }, transferables);
                    }
                });
            };
            const notify = (method, params, transferables = []) => {
                sender.postMessage({ id: null, method, params }, transferables);
            };
            let functions = {};
            for (const [key, handler] of Object.entries(fullBrokerImplementation)) {
                functions = { ...functions, [key]: handler({ call, notify }) };
            }
            return { ...functions };
        };
    };

    const createCreateOrGetOngoingRequests = (ongoingRequestsMap) => (sender) => {
        if (ongoingRequestsMap.has(sender)) {
            // @todo TypeScript needs to be convinced that has() works as expected.
            return ongoingRequestsMap.get(sender);
        }
        const ongoingRequests = new Map();
        ongoingRequestsMap.set(sender, ongoingRequests);
        return ongoingRequests;
    };

    const createExtendBrokerImplementation = (portMap) => (partialBrokerImplementation) => ({
        ...partialBrokerImplementation,
        connect: ({ call }) => {
            return async () => {
                const { port1, port2 } = new MessageChannel();
                const portId = await call('connect', { port: port1 }, [port1]);
                portMap.set(port2, portId);
                return port2;
            };
        },
        disconnect: ({ call }) => {
            return async (port) => {
                const portId = portMap.get(port);
                if (portId === undefined) {
                    throw new Error('The given port is not connected.');
                }
                await call('disconnect', { portId });
            };
        },
        isSupported: ({ call }) => {
            return () => call('isSupported');
        }
    });

    const isMessagePort = (sender) => {
        return typeof sender.start === 'function';
    };

    const createBroker = createBrokerFactory(createCreateOrGetOngoingRequests(new WeakMap()), createExtendBrokerImplementation(new WeakMap()), generateUniqueNumber, isMessagePort);

    const createClearIntervalFactory = (scheduledIntervalsState) => (clear) => (timerId) => {
        if (typeof scheduledIntervalsState.get(timerId) === 'symbol') {
            scheduledIntervalsState.set(timerId, null);
            clear(timerId).then(() => {
                scheduledIntervalsState.delete(timerId);
            });
        }
    };

    const createClearTimeoutFactory = (scheduledTimeoutsState) => (clear) => (timerId) => {
        if (typeof scheduledTimeoutsState.get(timerId) === 'symbol') {
            scheduledTimeoutsState.set(timerId, null);
            clear(timerId).then(() => {
                scheduledTimeoutsState.delete(timerId);
            });
        }
    };

    const createSetIntervalFactory = (generateUniqueNumber, scheduledIntervalsState) => (set) => (func, delay = 0, ...args) => {
        const symbol = Symbol();
        const timerId = generateUniqueNumber(scheduledIntervalsState);
        scheduledIntervalsState.set(timerId, symbol);
        const schedule = () => set(delay, timerId).then(() => {
            const state = scheduledIntervalsState.get(timerId);
            if (state === undefined) {
                throw new Error('The timer is in an undefined state.');
            }
            if (state === symbol) {
                func(...args);
                // Doublecheck if the interval should still be rescheduled because it could have been cleared inside of func().
                if (scheduledIntervalsState.get(timerId) === symbol) {
                    schedule();
                }
            }
        });
        schedule();
        return timerId;
    };

    const createSetTimeoutFactory = (generateUniqueNumber, scheduledTimeoutsState) => (set) => (func, delay = 0, ...args) => {
        const symbol = Symbol();
        const timerId = generateUniqueNumber(scheduledTimeoutsState);
        scheduledTimeoutsState.set(timerId, symbol);
        set(delay, timerId).then(() => {
            const state = scheduledTimeoutsState.get(timerId);
            if (state === undefined) {
                throw new Error('The timer is in an undefined state.');
            }
            if (state === symbol) {
                // A timeout can be savely deleted because it is only called once.
                scheduledTimeoutsState.delete(timerId);
                func(...args);
            }
        });
        return timerId;
    };

    // Prefilling the Maps with a function indexed by zero is necessary to be compliant with the specification.
    const scheduledIntervalsState = new Map([[0, null]]); // tslint:disable-line no-empty
    const scheduledTimeoutsState = new Map([[0, null]]); // tslint:disable-line no-empty
    const createClearInterval = createClearIntervalFactory(scheduledIntervalsState);
    const createClearTimeout = createClearTimeoutFactory(scheduledTimeoutsState);
    const createSetInterval = createSetIntervalFactory(generateUniqueNumber, scheduledIntervalsState);
    const createSetTimeout = createSetTimeoutFactory(generateUniqueNumber, scheduledTimeoutsState);
    const wrap = createBroker({
        clearInterval: ({ call }) => createClearInterval((timerId) => call('clear', { timerId, timerType: 'interval' })),
        clearTimeout: ({ call }) => createClearTimeout((timerId) => call('clear', { timerId, timerType: 'timeout' })),
        setInterval: ({ call }) => createSetInterval((delay, timerId) => call('set', { delay, now: performance.timeOrigin + performance.now(), timerId, timerType: 'interval' })),
        setTimeout: ({ call }) => createSetTimeout((delay, timerId) => call('set', { delay, now: performance.timeOrigin + performance.now(), timerId, timerType: 'timeout' }))
    });
    const load = (url) => {
        const worker = new Worker(url);
        return wrap(worker);
    };

    const createLoadOrReturnBroker = (loadBroker, worker) => {
        let broker = null;
        return () => {
            if (broker !== null) {
                return broker;
            }
            const blob = new Blob([worker], { type: 'application/javascript; charset=utf-8' });
            const url = URL.createObjectURL(blob);
            broker = loadBroker(url);
            // Bug #1: Edge up until v18 didn't like the URL to be revoked directly.
            setTimeout(() => URL.revokeObjectURL(url));
            return broker;
        };
    };

    // This is the minified and stringified code of the worker-timers-worker package.
    const worker = `(()=>{var e={455(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},m=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},f=new Map,h=d(globalThis.clearTimeout,f),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=m(f,performance,globalThis.setTimeout,w),T=m(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`; // tslint:disable-line:max-line-length

    const loadOrReturnBroker = createLoadOrReturnBroker(load, worker);
    const clearInterval = (timerId) => loadOrReturnBroker().clearInterval(timerId);
    const clearTimeout = (timerId) => loadOrReturnBroker().clearTimeout(timerId);
    const setInterval = (...args) => loadOrReturnBroker().setInterval(...args);
    const setTimeout$1 = (...args) => loadOrReturnBroker().setTimeout(...args);

    /** 通用工具类 */
    const CommonUtils = {
        windowApi: new WindowApi({
            document: document,
            window: window,
            top: top,
            setTimeout: globalThis.setTimeout.bind(globalThis),
            clearTimeout: globalThis.clearTimeout.bind(globalThis),
            setInterval: globalThis.setInterval.bind(globalThis),
            clearInterval: globalThis.clearInterval.bind(globalThis),
        }),
        /**
         * 判断元素是否已显示或已连接
         * @param $el
         */
        isShow($el) {
            return Boolean($el.getClientRects().length);
        },
        /**
         * 创建安全的html
         * @param text 字符串
         */
        createSafeHTML(text) {
            if (window.trustedTypes) {
                const policy = window.trustedTypes.createPolicy("safe-innerHTML", {
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
            $el.innerHTML = this.createSafeHTML(text);
        },
        /**
         * 用于强制显示元素并获取它的高度宽度等其它属性
         * @param $el
         */
        forceShow($el) {
            const dupNode = $el.cloneNode(true);
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
            const value = parseFloat(styles[styleName]);
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
         * 判断对象是否是元素
         * @param $el
         * @returns
         * + true 是元素
         * + false 不是元素
         * @example
         * DOMUtilsCommonUtils.isDOM(document.querySelector("a"))
         * > true
         */
        isDOM($el) {
            return $el instanceof Node;
        },
        /**
         * 删除对象上的属性
         * @param target
         * @param propName
         */
        delete(target, propName) {
            if (typeof Reflect === "object" && Reflect != null && Reflect.deleteProperty) {
                return Reflect.deleteProperty(target, propName);
            }
            else {
                delete target[propName];
            }
        },
        /**
         * 自动使用 Worker 执行 setTimeout
         */
        setTimeout(callback, timeout = 0) {
            try {
                return setTimeout$1(callback, timeout);
            }
            catch {
                return this.windowApi.setTimeout(callback, timeout);
            }
        },
        /**
         * 配合 .setTimeout 使用
         */
        clearTimeout(timeId) {
            try {
                if (timeId != null) {
                    clearTimeout(timeId);
                }
            }
            catch {
                // TODO
            }
            finally {
                this.windowApi.clearTimeout(timeId);
            }
        },
        /**
         * 自动使用 Worker 执行 setInterval
         */
        setInterval(callback, timeout = 0) {
            try {
                return setInterval(callback, timeout);
            }
            catch {
                return this.windowApi.setInterval(callback, timeout);
            }
        },
        /**
         * 配合 .setInterval 使用
         */
        clearInterval(timeId) {
            try {
                if (timeId != null) {
                    clearInterval(timeId);
                }
            }
            catch {
                // TODO
            }
            finally {
                this.windowApi.clearInterval(timeId);
            }
        },
        /**
         * 判断是否是元素列表
         * @param $ele
         */
        isNodeList($ele) {
            return Array.isArray($ele) || $ele instanceof NodeList;
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

    const version = "1.8.8";

    class ElementSelector {
        windowApi;
        constructor(windowApiOption) {
            this.windowApi = new WindowApi(windowApiOption);
        }
        selector(selector, parent) {
            return this.selectorAll(selector, parent)[0];
        }
        selectorAll(selector, parent) {
            const context = this;
            parent = parent || context.windowApi.document;
            selector = selector.trim();
            if (selector.startsWith("xpath:")) {
                selector = selector.replace(/^xpath:/i, "");
                const xpathResult = context.windowApi.document.evaluate(selector, parent, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
                const result = [];
                let iterateNext = xpathResult.iterateNext();
                while (iterateNext) {
                    result.push(iterateNext);
                    iterateNext = xpathResult.iterateNext();
                }
                return result;
            }
            else if (selector.match(/[^\s]{1}:empty$/gi)) {
                // empty 语法
                selector = selector.replace(/:empty$/gi, "");
                return Array.from(parent.querySelectorAll(selector)).filter(($ele) => {
                    return $ele?.innerHTML?.trim() === "";
                });
            }
            else if (selector.match(/[^\s]{1}:contains\("(.*)"\)$/i) || selector.match(/[^\s]{1}:contains\('(.*)'\)$/i)) {
                // contains 语法
                const textMatch = selector.match(/:contains\(("|')(.*)("|')\)$/i);
                const text = textMatch[2];
                selector = selector.replace(/:contains\(("|')(.*)("|')\)$/gi, "");
                return Array.from(parent.querySelectorAll(selector)).filter(($ele) => {
                    // @ts-ignore
                    return ($ele?.textContent || $ele?.innerText)?.includes(text);
                });
            }
            else if (selector.match(/[^\s]{1}:regexp\("(.*)"\)$/i) || selector.match(/[^\s]{1}:regexp\('(.*)'\)$/i)) {
                // regexp 语法
                const textMatch = selector.match(/:regexp\(("|')(.*)("|')\)$/i);
                let pattern = textMatch[2];
                const flagMatch = pattern.match(/("|'),[\s]*("|')([igm]{0,3})$/i);
                let flags = "";
                if (flagMatch) {
                    pattern = pattern.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi, "");
                    flags = flagMatch[3];
                }
                const regexp = new RegExp(pattern, flags);
                selector = selector.replace(/:regexp\(("|')(.*)("|')\)$/gi, "");
                return Array.from(parent.querySelectorAll(selector)).filter(($ele) => {
                    // @ts-ignore
                    return Boolean(($ele?.textContent || $ele?.innerText)?.match(regexp));
                });
            }
            else {
                // 普通语法
                return Array.from(parent.querySelectorAll(selector));
            }
        }
        /**
         * 匹配元素，可使用以下的额外语法
         *
         * + :contains([text]) 作用: 找到包含指定文本内容的指定元素
         * + :empty 作用:找到既没有文本内容也没有子元素的指定元素
         * + :regexp([text]) 作用: 找到符合正则表达式的内容的指定元素
         * @param $el 元素
         * @param selector 选择器
         * @example
         * DOMUtils.matches("div:contains('测试')")
         * > true
         * @example
         * DOMUtils.matches("div:empty")
         * > true
         * @example
         * DOMUtils.matches("div:regexp('^xxxx$')")
         * > true
         * @example
         * DOMUtils.matches("div:regexp(/^xxx/ig)")
         * > false
         */
        matches($el, selector) {
            selector = selector.trim();
            if ($el == null) {
                return false;
            }
            if (selector.match(/[^\s]{1}:empty$/gi)) {
                // empty 语法
                selector = selector.replace(/:empty$/gi, "");
                return $el.matches(selector) && $el?.innerHTML?.trim() === "";
            }
            else if (selector.match(/[^\s]{1}:contains\("(.*)"\)$/i) || selector.match(/[^\s]{1}:contains\('(.*)'\)$/i)) {
                // contains 语法
                const textMatch = selector.match(/:contains\(("|')(.*)("|')\)$/i);
                const text = textMatch[2];
                selector = selector.replace(/:contains\(("|')(.*)("|')\)$/gi, "");
                // @ts-ignore
                let content = $el?.textContent || $el?.innerText;
                if (typeof content !== "string") {
                    content = "";
                }
                return $el.matches(selector) && content?.includes(text);
            }
            else if (selector.match(/[^\s]{1}:regexp\("(.*)"\)$/i) || selector.match(/[^\s]{1}:regexp\('(.*)'\)$/i)) {
                // regexp 语法
                const textMatch = selector.match(/:regexp\(("|')(.*)("|')\)$/i);
                let pattern = textMatch[2];
                const flagMatch = pattern.match(/("|'),[\s]*("|')([igm]{0,3})$/i);
                let flags = "";
                if (flagMatch) {
                    pattern = pattern.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi, "");
                    flags = flagMatch[3];
                }
                const regexp = new RegExp(pattern, flags);
                selector = selector.replace(/:regexp\(("|')(.*)("|')\)$/gi, "");
                // @ts-ignore
                let content = $el?.textContent || $el?.innerText;
                if (typeof content !== "string") {
                    content = "";
                }
                return $el.matches(selector) && Boolean(content?.match(regexp));
            }
            else {
                // 普通语法
                return $el.matches(selector);
            }
        }
        closest($el, selector) {
            selector = selector.trim();
            if (selector.match(/[^\s]{1}:empty$/gi)) {
                // empty 语法
                selector = selector.replace(/:empty$/gi, "");
                const $closest = $el?.closest(selector);
                if ($closest && $closest?.innerHTML?.trim() === "") {
                    return $closest;
                }
                return null;
            }
            else if (selector.match(/[^\s]{1}:contains\("(.*)"\)$/i) || selector.match(/[^\s]{1}:contains\('(.*)'\)$/i)) {
                // contains 语法
                const textMatch = selector.match(/:contains\(("|')(.*)("|')\)$/i);
                const text = textMatch[2];
                selector = selector.replace(/:contains\(("|')(.*)("|')\)$/gi, "");
                const $closest = $el?.closest(selector);
                if ($closest) {
                    // @ts-ignore
                    const content = $el?.textContent || $el?.innerText;
                    if (typeof content === "string" && content.includes(text)) {
                        return $closest;
                    }
                }
                return null;
            }
            else if (selector.match(/[^\s]{1}:regexp\("(.*)"\)$/i) || selector.match(/[^\s]{1}:regexp\('(.*)'\)$/i)) {
                // regexp 语法
                const textMatch = selector.match(/:regexp\(("|')(.*)("|')\)$/i);
                let pattern = textMatch[2];
                const flagMatch = pattern.match(/("|'),[\s]*("|')([igm]{0,3})$/i);
                let flags = "";
                if (flagMatch) {
                    pattern = pattern.replace(/("|'),[\s]*("|')([igm]{0,3})$/gi, "");
                    flags = flagMatch[3];
                }
                const regexp = new RegExp(pattern, flags);
                selector = selector.replace(/:regexp\(("|')(.*)("|')\)$/gi, "");
                const $closest = $el?.closest(selector);
                if ($closest) {
                    // @ts-ignore
                    const content = $el?.textContent || $el?.innerText;
                    if (typeof content === "string" && content.match(regexp)) {
                        return $closest;
                    }
                }
                return null;
            }
            else {
                // 普通语法
                const $closest = $el?.closest(selector);
                return $closest;
            }
        }
    }
    const elementSelector = new ElementSelector();

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
    const isDOM = function ($el) {
        return $el instanceof Node;
    };
    class Utils {
        windowApi;
        constructor(option) {
            this.windowApi = new WindowApi(option);
        }
        /**
         * 判断对象是否是jQuery对象
         * @param target
         * @returns
         * + true 是jQuery对象
         * + false 不是jQuery对象
         * @example
         * Utils.isJQuery($("a"))
         * > true
         */
        isJQuery(target) {
            let result = false;
            if (typeof jQuery === "object" && target instanceof jQuery) {
                result = true;
            }
            if (target == null) {
                return false;
            }
            if (typeof target === "object") {
                /* 也有种可能，这个jQuery对象是1.8.3版本的，页面中的jQuery是3.4.1版本的 */
                const jQueryProps = [
                    "add",
                    "addBack",
                    "addClass",
                    "after",
                    "ajaxComplete",
                    "ajaxError",
                    "ajaxSend",
                    "ajaxStart",
                    "ajaxStop",
                    "ajaxSuccess",
                    "animate",
                    "append",
                    "appendTo",
                    "attr",
                    "before",
                    "bind",
                    "blur",
                    "change",
                    "children",
                    "clearQueue",
                    "click",
                    "clone",
                    "closest",
                    "constructor",
                    "contents",
                    "contextmenu",
                    "css",
                    "data",
                    "dblclick",
                    "delay",
                    "delegate",
                    "dequeue",
                    "each",
                    "empty",
                    "end",
                    "eq",
                    "extend",
                    "fadeIn",
                    "fadeOut",
                    "fadeTo",
                    "fadeToggle",
                    "filter",
                    "find",
                    "first",
                    "focus",
                    "focusin",
                    "focusout",
                    "get",
                    "has",
                    "hasClass",
                    "height",
                    "hide",
                    "hover",
                    "html",
                    "index",
                    "init",
                    "innerHeight",
                    "innerWidth",
                    "insertAfter",
                    "insertBefore",
                    "is",
                    "jquery",
                    "keydown",
                    "keypress",
                    "keyup",
                    "last",
                    "load",
                    "map",
                    "mousedown",
                    "mouseenter",
                    "mouseleave",
                    "mousemove",
                    "mouseout",
                    "mouseover",
                    "mouseup",
                    "next",
                    "nextAll",
                    "not",
                    "off",
                    "offset",
                    "offsetParent",
                    "on",
                    "one",
                    "outerHeight",
                    "outerWidth",
                    "parent",
                    "parents",
                    "position",
                    "prepend",
                    "prependTo",
                    "prev",
                    "prevAll",
                    "prevUntil",
                    "promise",
                    "prop",
                    "pushStack",
                    "queue",
                    "ready",
                    "remove",
                    "removeAttr",
                    "removeClass",
                    "removeData",
                    "removeProp",
                    "replaceAll",
                    "replaceWith",
                    "resize",
                    "scroll",
                    "scrollLeft",
                    "scrollTop",
                    "select",
                    "show",
                    "siblings",
                    "slice",
                    "slideDown",
                    "slideToggle",
                    "slideUp",
                    "sort",
                    "splice",
                    "text",
                    "toArray",
                    "toggle",
                    "toggleClass",
                    "trigger",
                    "triggerHandler",
                    "unbind",
                    "width",
                    "wrap",
                ];
                for (const jQueryPropsName of jQueryProps) {
                    if (!(jQueryPropsName in target)) {
                        result = false;
                        break;
                    }
                    else {
                        result = true;
                    }
                }
            }
            return result;
        }
        assign(target = {}, source = {}, isAdd = false) {
            const UtilsContext = this;
            if (Array.isArray(source)) {
                const canTraverse = source.filter((item) => {
                    return typeof item === "object";
                });
                if (!canTraverse.length) {
                    return source;
                }
            }
            if (source == null) {
                return target;
            }
            if (target == null) {
                target = {};
            }
            // 当前遍历的目标对象
            let iteratorTarget;
            if (isAdd) {
                // 追加并覆盖是以source为准
                iteratorTarget = source;
            }
            else {
                // 覆盖以target为准
                iteratorTarget = target;
            }
            for (const keyName in iteratorTarget) {
                if (!isAdd && !(keyName in source)) {
                    // 仅替换 但是源端没有此键
                    continue;
                }
                const targetValue = Reflect.get(target, keyName);
                const sourceValue = Reflect.get(source, keyName);
                if (typeof sourceValue === "object" && sourceValue != null && keyName in target && !isDOM(sourceValue)) {
                    // 源端的值是object类型，且不是元素节点
                    // 如果是数组，那此数组中有值，清空旧的数组再赋值
                    let childObjectValue;
                    if (Array.isArray(sourceValue)) {
                        if (Array.isArray(targetValue)) {
                            targetValue.length = 0;
                        }
                        childObjectValue = sourceValue;
                    }
                    else {
                        childObjectValue = UtilsContext.assign(targetValue, sourceValue, isAdd);
                    }
                    Reflect.set(target, keyName, childObjectValue);
                }
                else {
                    /* 直接赋值 */
                    Reflect.set(target, keyName, sourceValue);
                }
            }
            return target;
        }
        mutationObserver(target, observer_config) {
            const that = this;
            const default_obverser_config = {
                /* 监听到元素有反馈，需执行的函数 */
                callback: () => { },
                config: {
                    /**
                     * + true 监听以 target 为根节点的整个子树。包括子树中所有节点的属性，而不仅仅是针对 target
                     * + false (默认) 不生效
                     */
                    subtree: void 0,
                    /**
                     * + true 监听 target 节点中发生的节点的新增与删除（同时，如果 subtree 为 true，会针对整个子树生效）
                     * + false (默认) 不生效
                     */
                    childList: void 0,
                    /**
                     * + true 观察所有监听的节点属性值的变化。默认值为 true，当声明了 attributeFilter 或 attributeOldValue
                     * + false (默认) 不生效
                     */
                    attributes: void 0,
                    /**
                     * 一个用于声明哪些属性名会被监听的数组。如果不声明该属性，所有属性的变化都将触发通知
                     */
                    attributeFilter: void 0,
                    /**
                     * + true 记录上一次被监听的节点的属性变化；可查阅 MutationObserver 中的 Monitoring attribute values 了解关于观察属性变化和属性值记录的详情
                     * + false (默认) 不生效
                     */
                    attributeOldValue: void 0,
                    /**
                     * + true 监听声明的 target 节点上所有字符的变化。默认值为 true，如果声明了 characterDataOldValue
                     * + false (默认) 不生效
                     */
                    characterData: void 0,
                    /**
                     * + true 记录前一个被监听的节点中发生的文本变化
                     * + false (默认) 不生效
                     */
                    characterDataOldValue: void 0,
                },
                immediate: false,
            };
            observer_config = that.assign(default_obverser_config, observer_config);
            const windowMutationObserver = this.windowApi.window.MutationObserver ||
                this.windowApi.window.webkitMutationObserver ||
                this.windowApi.window.MozMutationObserver;
            // 观察者对象
            const mutationObserver = new windowMutationObserver(function (mutations, observer) {
                if (typeof observer_config.callback === "function") {
                    observer_config.callback(mutations, observer);
                }
            });
            if (Array.isArray(target) || target instanceof NodeList) {
                // 传入的是数组或者元素数组
                target.forEach((item) => {
                    mutationObserver.observe(item, observer_config.config);
                });
            }
            else if (that.isJQuery(target)) {
                /* 传入的参数是jQuery对象 */
                target.each((_, item) => {
                    mutationObserver.observe(item, observer_config.config);
                });
            }
            else {
                mutationObserver.observe(target, observer_config.config);
            }
            if (observer_config.immediate) {
                /* 主动触发一次 */
                if (typeof observer_config.callback === "function") {
                    observer_config.callback([], mutationObserver);
                }
            }
            return mutationObserver;
        }
    }
    const utils = new Utils();

    class ElementWait extends ElementSelector {
        windowApi;
        constructor(windowApiOption) {
            super(windowApiOption);
            this.windowApi = new WindowApi(windowApiOption);
        }
        wait(checkFn, timeout, parent) {
            const UtilsContext = this;
            const __timeout__ = typeof timeout === "number" ? timeout : 0;
            return new Promise((resolve) => {
                const observer = utils.mutationObserver(parent || UtilsContext.windowApi.document, {
                    config: {
                        subtree: true,
                        childList: true,
                        attributes: true,
                    },
                    immediate: true,
                    callback(_, __observer__) {
                        const result = checkFn();
                        if (result.success) {
                            // 取消观察器
                            if (typeof __observer__?.disconnect === "function") {
                                __observer__.disconnect();
                            }
                            resolve(result.data);
                        }
                    },
                });
                if (__timeout__ > 0) {
                    CommonUtils.setTimeout(() => {
                        // 取消观察器
                        if (typeof observer?.disconnect === "function") {
                            observer.disconnect();
                        }
                        resolve(null);
                    }, __timeout__);
                }
            });
        }
        waitNode(...args) {
            // 过滤掉undefined
            args = args.filter((arg) => arg !== void 0);
            const UtilsContext = this;
            // 选择器
            const selector = args[0];
            // 父元素（监听的元素）
            let parent = UtilsContext.windowApi.document;
            // 超时时间
            let timeout = 0;
            if (typeof args[0] !== "string" && !Array.isArray(args[0]) && typeof args[0] !== "function") {
                throw new TypeError("DOMUtils.waitNode 第一个参数必须是string|string[]|Function");
            }
            if (args.length === 1) ;
            else if (args.length === 2) {
                const secondParam = args[1];
                if (typeof secondParam === "number") {
                    // "div",10000
                    timeout = secondParam;
                }
                else if (typeof secondParam === "object" && secondParam instanceof Node) {
                    // "div",document
                    parent = secondParam;
                }
                else {
                    throw new TypeError("DOMUtils.waitNode 第二个参数必须是number|Node");
                }
            }
            else if (args.length === 3) {
                // "div",document,10000
                // 第二个参数，parent
                const secondParam = args[1];
                // 第三个参数，timeout
                const thirdParam = args[2];
                if (typeof secondParam === "object" && secondParam instanceof Node) {
                    parent = secondParam;
                    if (typeof thirdParam === "number") {
                        timeout = thirdParam;
                    }
                    else {
                        throw new TypeError("DOMUtils.waitNode 第三个参数必须是number");
                    }
                }
                else {
                    throw new TypeError("DOMUtils.waitNode 第二个参数必须是Node");
                }
            }
            else {
                throw new TypeError("DOMUtils.waitNode 参数个数错误");
            }
            function getNode() {
                if (Array.isArray(selector)) {
                    const result = [];
                    for (let index = 0; index < selector.length; index++) {
                        const node = elementSelector.selector(selector[index]);
                        if (node) {
                            result.push(node);
                        }
                    }
                    if (result.length === selector.length) {
                        return result;
                    }
                }
                else if (typeof selector === "function") {
                    return selector();
                }
                else {
                    return elementSelector.selector(selector, parent);
                }
            }
            return UtilsContext.wait(() => {
                const node = getNode();
                if (node) {
                    return {
                        success: true,
                        data: node,
                    };
                }
                else {
                    return {
                        success: false,
                        data: node,
                    };
                }
            }, timeout, parent);
        }
        waitAnyNode(...args) {
            // 过滤掉undefined
            args = args.filter((arg) => arg !== void 0);
            const UtilsContext = this;
            // 选择器
            const selectorList = args[0];
            // 父元素（监听的元素）
            let parent = UtilsContext.windowApi.document;
            // 超时时间
            let timeout = 0;
            if (typeof args[0] !== "object" && !Array.isArray(args[0])) {
                throw new TypeError("DOMUtils.waitAnyNode 第一个参数必须是string[]");
            }
            if (args.length === 1) ;
            else if (args.length === 2) {
                const secondParam = args[1];
                if (typeof secondParam === "number") {
                    // "div",10000
                    timeout = secondParam;
                }
                else if (typeof secondParam === "object" && secondParam instanceof Node) {
                    // "div",document
                    parent = secondParam;
                }
                else {
                    throw new TypeError("DOMUtils.waitAnyNode 第二个参数必须是number|Node");
                }
            }
            else if (args.length === 3) {
                // "div",document,10000
                // 第二个参数，parent
                const secondParam = args[1];
                // 第三个参数，timeout
                const thirdParam = args[2];
                if (typeof secondParam === "object" && secondParam instanceof Node) {
                    parent = secondParam;
                    if (typeof thirdParam === "number") {
                        timeout = thirdParam;
                    }
                    else {
                        throw new TypeError("DOMUtils.waitAnyNode 第三个参数必须是number");
                    }
                }
                else {
                    throw new TypeError("DOMUtils.waitAnyNode 第二个参数必须是Node");
                }
            }
            else {
                throw new TypeError("DOMUtils.waitAnyNode 参数个数错误");
            }
            const promiseList = selectorList.map((selector) => {
                return UtilsContext.waitNode(selector, parent, timeout);
            });
            return Promise.any(promiseList);
        }
        waitNodeList(...args) {
            // 过滤掉undefined
            args = args.filter((arg) => arg !== void 0);
            const UtilsContext = this;
            // 选择器数组
            const selector = args[0];
            // 父元素（监听的元素）
            let parent = UtilsContext.windowApi.document;
            // 超时时间
            let timeout = 0;
            if (typeof args[0] !== "string" && !Array.isArray(args[0])) {
                throw new TypeError("DOMUtils.waitNodeList 第一个参数必须是string|string[]");
            }
            if (args.length === 1) ;
            else if (args.length === 2) {
                const secondParam = args[1];
                if (typeof secondParam === "number") {
                    // "div",10000
                    timeout = secondParam;
                }
                else if (typeof secondParam === "object" && secondParam instanceof Node) {
                    // "div",document
                    parent = secondParam;
                }
                else {
                    throw new TypeError("DOMUtils.waitNodeList 第二个参数必须是number|Node");
                }
            }
            else if (args.length === 3) {
                // "div",document,10000
                // 第二个参数，parent
                const secondParam = args[1];
                // 第三个参数，timeout
                const thirdParam = args[2];
                if (typeof secondParam === "object" && secondParam instanceof Node) {
                    parent = secondParam;
                    if (typeof thirdParam === "number") {
                        timeout = thirdParam;
                    }
                    else {
                        throw new TypeError("DOMUtils.waitNodeList 第三个参数必须是number");
                    }
                }
                else {
                    throw new TypeError("DOMUtils.waitNodeList 第二个参数必须是Node");
                }
            }
            else {
                throw new TypeError("DOMUtils.waitNodeList 参数个数错误");
            }
            function getNodeList() {
                if (Array.isArray(selector)) {
                    const result = [];
                    for (let index = 0; index < selector.length; index++) {
                        const nodeList = elementSelector.selectorAll(selector[index], parent);
                        if (nodeList.length) {
                            result.push(nodeList);
                        }
                    }
                    if (result.length === selector.length) {
                        return result;
                    }
                }
                else {
                    const nodeList = elementSelector.selectorAll(selector, parent);
                    if (nodeList.length) {
                        return nodeList;
                    }
                }
            }
            return UtilsContext.wait(() => {
                const node = getNodeList();
                if (node) {
                    return {
                        success: true,
                        data: node,
                    };
                }
                else {
                    return {
                        success: false,
                        data: node,
                    };
                }
            }, timeout, parent);
        }
        waitAnyNodeList(...args) {
            // 过滤掉undefined
            args = args.filter((arg) => arg !== void 0);
            const UtilsContext = this;
            // 选择器数组
            const selectorList = args[0];
            // 父元素（监听的元素）
            let parent = UtilsContext.windowApi.document;
            // 超时时间
            let timeout = 0;
            if (!Array.isArray(args[0])) {
                throw new TypeError("DOMUtils.waitAnyNodeList 第一个参数必须是string[]");
            }
            if (args.length === 1) ;
            else if (args.length === 2) {
                const secondParam = args[1];
                if (typeof secondParam === "number") {
                    // "div",10000
                    timeout = secondParam;
                }
                else if (typeof secondParam === "object" && secondParam instanceof Node) {
                    // "div",document
                    parent = secondParam;
                }
                else {
                    throw new TypeError("DOMUtils.waitAnyNodeList 第二个参数必须是number|Node");
                }
            }
            else if (args.length === 3) {
                // "div",document,10000
                // 第二个参数，parent
                const secondParam = args[1];
                // 第三个参数，timeout
                const thirdParam = args[2];
                if (typeof secondParam === "object" && secondParam instanceof Node) {
                    parent = secondParam;
                    if (typeof thirdParam === "number") {
                        timeout = thirdParam;
                    }
                    else {
                        throw new TypeError("DOMUtils.waitAnyNodeList 第三个参数必须是number");
                    }
                }
                else {
                    throw new TypeError("DOMUtils.waitAnyNodeList 第二个参数必须是Node");
                }
            }
            else {
                throw new TypeError("DOMUtils.waitAnyNodeList 参数个数错误");
            }
            const promiseList = selectorList.map((selector) => {
                return UtilsContext.waitNodeList(selector, parent, timeout);
            });
            return Promise.any(promiseList);
        }
    }
    new ElementWait();

    class ElementAnimate extends ElementWait {
        windowApi;
        constructor(windowApiOption) {
            super(windowApiOption);
            this.windowApi = new WindowApi(windowApiOption);
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
            const context = this;
            if (typeof element === "string") {
                element = elementSelector.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (CommonUtils.isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    context.animate($ele, styles, duration, callback);
                });
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
            const start = performance.now();
            const from = {};
            const to = {};
            for (const prop in styles) {
                from[prop] = element.style[prop] || context.windowApi.globalThis.getComputedStyle(element)[prop];
                to[prop] = styles[prop];
            }
            const timer = CommonUtils.setInterval(function () {
                const timePassed = performance.now() - start;
                let progress = timePassed / duration;
                if (progress > 1) {
                    progress = 1;
                }
                for (const prop in styles) {
                    element.style[prop] = from[prop] + (to[prop] - from[prop]) * progress + "px";
                }
                if (progress === 1) {
                    CommonUtils.clearInterval(timer);
                    if (callback) {
                        callback();
                    }
                }
            }, 10);
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
            const context = this;
            if (target == null) {
                return;
            }
            if (typeof target === "string") {
                target = elementSelector.selectorAll(target);
            }
            if (target instanceof NodeList || target instanceof Array) {
                target = target;
                for (const element of target) {
                    context.show(element, checkVisiblie);
                }
            }
            else {
                target = target;
                target.style.display = "";
                if (checkVisiblie) {
                    if (!CommonUtils.isShow(target)) {
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
            const context = this;
            if (target == null) {
                return;
            }
            if (typeof target === "string") {
                target = elementSelector.selectorAll(target);
            }
            if (target instanceof NodeList || target instanceof Array) {
                target = target;
                for (const element of target) {
                    context.hide(element, checkVisiblie);
                }
            }
            else {
                target = target;
                target.style.display = "none";
                if (checkVisiblie) {
                    if (CommonUtils.isShow(target)) {
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
            const context = this;
            if (typeof element === "string") {
                element = elementSelector.selectorAll(element);
            }
            if (CommonUtils.isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    context.fadeIn($ele, duration, callback);
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
                const progress = timestamp - start;
                element = element;
                element.style.opacity = Math.min(progress / duration, 1).toString();
                if (progress < duration) {
                    context.windowApi.window.requestAnimationFrame(step);
                }
                else {
                    if (callback && typeof callback === "function") {
                        callback();
                    }
                    context.windowApi.window.cancelAnimationFrame(timer);
                }
            }
            timer = context.windowApi.window.requestAnimationFrame(step);
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
            const context = this;
            if (element == null) {
                return;
            }
            if (typeof element === "string") {
                element = elementSelector.selectorAll(element);
            }
            if (CommonUtils.isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    context.fadeOut($ele, duration, callback);
                });
                return;
            }
            element.style.opacity = "1";
            let start = null;
            let timer = null;
            function step(timestamp) {
                if (!start)
                    start = timestamp;
                const progress = timestamp - start;
                element = element;
                element.style.opacity = Math.max(1 - progress / duration, 0).toString();
                if (progress < duration) {
                    context.windowApi.window.requestAnimationFrame(step);
                }
                else {
                    element.style.display = "none";
                    if (typeof callback === "function") {
                        callback();
                    }
                    context.windowApi.window.cancelAnimationFrame(timer);
                }
            }
            timer = context.windowApi.window.requestAnimationFrame(step);
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
            const context = this;
            if (typeof element === "string") {
                element = elementSelector.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (CommonUtils.isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    context.toggle($ele);
                });
                return;
            }
            if (context.windowApi.globalThis.getComputedStyle(element).getPropertyValue("display") === "none") {
                context.show(element, checkVisiblie);
            }
            else {
                context.hide(element, checkVisiblie);
            }
        }
    }
    new ElementAnimate();

    /* 数据 */
    const GlobalData = {
        /** .on添加在元素存储的事件 */
        domEventSymbol: Symbol("events_" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)),
    };

    const OriginPrototype = {
        Object: {
            defineProperty: Object.defineProperty,
        },
    };

    class ElementEvent extends ElementAnimate {
        windowApi;
        constructor(windowApiOption) {
            super(windowApiOption);
            this.windowApi = new WindowApi(windowApiOption);
        }
        /** 获取 animationend 在各个浏览器的兼容名 */
        getAnimationEndNameList() {
            return CommonUtils.getAnimationEndNameList();
        }
        /** 获取 transitionend 在各个浏览器的兼容名 */
        getTransitionEndNameList() {
            return CommonUtils.getTransitionEndNameList();
        }
        on(element, eventType, selector, callback, option) {
            /**
             * 获取option配置
             * @param args
             * @param startIndex
             * @param option
             */
            function getOption(args, startIndex, option) {
                const currentParam = args[startIndex];
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
            const that = this;
            // eslint-disable-next-line prefer-rest-params
            const args = arguments;
            if (typeof element === "string") {
                element = that.selectorAll(element);
            }
            if (element == null) {
                return {
                    off() { },
                    emit() { },
                };
            }
            let $elList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                $elList = $elList.concat(Array.from(element));
            }
            else {
                $elList.push(element);
            }
            // 事件名
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventTypeList.concat(eventType.filter((it) => typeof it === "string" && it.toString() !== ""));
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventTypeList.concat(eventType.split(" ").filter((it) => it !== ""));
            }
            // 子元素选择器
            let selectorList = [];
            if (Array.isArray(selector)) {
                selectorList = selectorList.concat(selector.filter((it) => typeof it === "string" && it.toString() !== ""));
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
                // 这是为没有selector的情况
                // 那么它就是callback
                listenerCallBack = selector;
                listenerOption = getOption(args, 3, listenerOption);
            }
            else {
                // 这是存在selector的情况
                listenerOption = getOption(args, 4, listenerOption);
            }
            /**
             * 如果是once，那么删除该监听和元素上的事件和监听
             */
            function checkOptionOnceToRemoveEventListener() {
                if (listenerOption.once) {
                    that.off(element, eventType, selector, callback, option);
                }
            }
            $elList.forEach((elementItem) => {
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
                        let totalParent = elementItem;
                        if (CommonUtils.isWin(totalParent)) {
                            if (totalParent === that.windowApi.document) {
                                totalParent = that.windowApi.document.documentElement;
                            }
                        }
                        const findValue = selectorList.find((selectorItem) => {
                            // 判断目标元素是否匹配选择器
                            if (that.matches(eventTarget, selectorItem)) {
                                /* 当前目标可以被selector所匹配到 */
                                return true;
                            }
                            /* 在上层与主元素之间寻找可以被selector所匹配到的 */
                            const $closestMatches = that.closest(eventTarget, selectorItem);
                            if ($closestMatches && totalParent?.contains?.($closestMatches)) {
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
                            catch {
                                // TODO
                            }
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
                    const elementEvents = Reflect.get(elementItem, GlobalData.domEventSymbol) || {};
                    /* 初始化对象上的xx事件 */
                    elementEvents[eventName] = elementEvents[eventName] || [];
                    elementEvents[eventName].push({
                        selector: selectorList,
                        option: listenerOption,
                        callback: domUtilsEventCallBack,
                        originCallBack: listenerCallBack,
                    });
                    /* 覆盖事件 */
                    Reflect.set(elementItem, GlobalData.domEventSymbol, elementEvents);
                });
            });
            return {
                /**
                 * 取消绑定的监听事件
                 * @param filter (可选)过滤函数，对元素属性上的事件进行过滤出想要删除的事件
                 */
                off: (filter) => {
                    that.off($elList, eventTypeList, selectorList, listenerCallBack, listenerOption, filter);
                },
                /**
                 * 主动触发事件
                 * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
                 * @param useDispatchToEmit 是否使用dispatchEvent来触发事件，默认true，如果为false，则直接调用callback，但是这种会让使用了selectorTarget的没有值
                 */
                emit: (details, useDispatchToEmit) => {
                    that.emit($elList, eventTypeList, details, useDispatchToEmit);
                },
            };
        }
        off(element, eventType, selector, callback, option, filter) {
            /**
             * 获取option配置
             * @param args1
             * @param startIndex
             * @param option
             */
            function getOption(args1, startIndex, option) {
                const currentParam = args1[startIndex];
                if (typeof currentParam === "boolean") {
                    option.capture = currentParam;
                }
                else if (typeof currentParam === "object" && currentParam != null && "capture" in currentParam) {
                    option.capture = currentParam.capture;
                }
                return option;
            }
            const that = this;
            // eslint-disable-next-line prefer-rest-params
            const args = arguments;
            if (typeof element === "string") {
                element = that.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            let $elList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                element = element;
                $elList = $elList.concat(Array.from(element));
            }
            else {
                $elList.push(element);
            }
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventTypeList.concat(eventType.filter((it) => typeof it === "string" && it.toString() !== ""));
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventTypeList.concat(eventType.split(" ").filter((it) => it !== ""));
            }
            // 子元素选择器
            let selectorList = [];
            if (Array.isArray(selector)) {
                selectorList = selectorList.concat(selector.filter((it) => typeof it === "string" && it.toString() !== ""));
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
                // 这是为没有selector的情况
                // 那么它就是callback
                listenerCallBack = selector;
                listenerOption = getOption(args, 3, listenerOption);
            }
            else {
                // 这是存在selector的情况
                listenerOption = getOption(args, 4, listenerOption);
            }
            // 是否移除所有事件
            let isRemoveAll = false;
            if (args.length === 2) {
                // 目标函数、事件名
                isRemoveAll = true;
            }
            else if ((args.length === 3 && typeof args[2] === "string") || Array.isArray(args[2])) {
                // 目标函数、事件名、子元素选择器
                isRemoveAll = true;
            }
            if (args.length === 5 && typeof args[4] === "function" && typeof filter !== "function") {
                // 目标函数、事件名、回调函数、事件配置、过滤函数
                filter = option;
            }
            $elList.forEach(($elItem) => {
                /* 获取对象上的事件 */
                const elementEvents = Reflect.get($elItem, GlobalData.domEventSymbol) || {};
                eventTypeList.forEach((eventName) => {
                    const handlers = elementEvents[eventName] || [];
                    const filterHandler = typeof filter === "function" ? handlers.filter(filter) : handlers;
                    for (let index = 0; index < filterHandler.length; index++) {
                        const handler = filterHandler[index];
                        let flag = true;
                        if (flag && listenerCallBack && handler.originCallBack !== listenerCallBack) {
                            // callback不同
                            flag = false;
                        }
                        if (flag && selectorList.length && Array.isArray(handler.selector)) {
                            if (JSON.stringify(handler.selector) !== JSON.stringify(selectorList)) {
                                // 子元素选择器不同
                                flag = false;
                            }
                        }
                        if (flag &&
                            typeof handler.option.capture === "boolean" &&
                            listenerOption.capture !== handler.option.capture) {
                            // 事件的配置项不同
                            flag = false;
                        }
                        if (flag || isRemoveAll) {
                            $elItem.removeEventListener(eventName, handler.callback, handler.option);
                            const findIndex = handlers.findIndex((item) => item === handler);
                            if (findIndex !== -1) {
                                handlers.splice(findIndex, 1);
                            }
                        }
                    }
                    if (handlers.length === 0) {
                        /* 如果没有任意的handler，那么删除该属性 */
                        CommonUtils.delete(elementEvents, eventType);
                    }
                });
                Reflect.set($elItem, GlobalData.domEventSymbol, elementEvents);
            });
        }
        /**
         * 取消绑定所有的事件
         * @param element 需要取消绑定的元素|元素数组
         * @param eventType （可选）需要取消监听的事件
         */
        offAll(element, eventType) {
            const that = this;
            if (typeof element === "string") {
                element = that.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            let $elList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                $elList = $elList.concat(Array.from(element));
            }
            else {
                $elList.push(element);
            }
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventTypeList.concat(eventType);
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventTypeList.concat(eventType.split(" "));
            }
            $elList.forEach(($elItem) => {
                const symbolList = [...new Set([...Object.getOwnPropertySymbols($elItem), GlobalData.domEventSymbol])];
                symbolList.forEach((symbolItem) => {
                    if (!symbolItem.toString().startsWith("Symbol(events_")) {
                        return;
                    }
                    const elementEvents = Reflect.get($elItem, symbolItem) || {};
                    const iterEventNameList = eventTypeList.length ? eventTypeList : Object.keys(elementEvents);
                    iterEventNameList.forEach((eventName) => {
                        const handlers = elementEvents[eventName];
                        if (!handlers) {
                            return;
                        }
                        for (const handler of handlers) {
                            $elItem.removeEventListener(eventName, handler.callback, {
                                capture: handler["option"]["capture"],
                            });
                        }
                        const events = Reflect.get($elItem, symbolItem);
                        CommonUtils.delete(events, eventName);
                    });
                });
            });
        }
        onReady(...args) {
            const callback = args[0];
            // 异步回调
            let resolve = void 0;
            const that = this;
            /**
             * 检测文档是否加载完毕
             */
            function checkDOMReadyState() {
                try {
                    if (that.windowApi.document.readyState === "complete" ||
                        (that.windowApi.document.readyState !== "loading" &&
                            !that.windowApi.document.documentElement.doScroll)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                catch {
                    return false;
                }
            }
            /**
             * 成功加载完毕后触发的回调函数
             */
            function completed() {
                removeDomReadyListener();
                if (typeof callback === "function") {
                    callback();
                }
                if (typeof resolve === "function") {
                    resolve();
                }
            }
            /**
             * 监听目标
             */
            const listenTargetList = [
                {
                    target: that.windowApi.document,
                    eventType: "DOMContentLoaded",
                    callback: completed,
                },
                {
                    target: that.windowApi.window,
                    eventType: "load",
                    callback: completed,
                },
            ];
            /**
             * 添加监听
             */
            function addDomReadyListener() {
                for (const item of listenTargetList) {
                    that.on(item.target, item.eventType, item.callback);
                }
            }
            /**
             * 移除监听
             */
            function removeDomReadyListener() {
                for (const item of listenTargetList) {
                    that.off(item.target, item.eventType, item.callback);
                }
            }
            /**
             * 执行检查
             */
            function check() {
                if (checkDOMReadyState()) {
                    /* 检查document状态 */
                    CommonUtils.setTimeout(completed, 0);
                }
                else {
                    /* 添加监听 */
                    addDomReadyListener();
                }
            }
            if (args.length === 0) {
                return new Promise((__resolve__) => {
                    resolve = __resolve__;
                    check();
                });
            }
            else {
                check();
            }
        }
        /**
         * 主动触发事件
         * @param element 需要触发的元素|元素数组|window
         * @param eventType 需要触发的事件
         * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
         * @param useDispatchToEmit 是否使用dispatchEvent来触发事件，默认true，如果为false，则直接调用callback，但是这种会让使用了selectorTarget的没有值
         * @example
         * // 触发元素a.xx的click事件
         * DOMUtils.emit(document.querySelector("a.xx"),"click")
         * DOMUtils.emit("a.xx","click")
         * // 触发元素a.xx的click、tap、hover事件
         * DOMUtils.emit(document.querySelector("a.xx"),"click tap hover")
         * DOMUtils.emit("a.xx",["click","tap","hover"])
         */
        emit(element, eventType, details, useDispatchToEmit = true) {
            const that = this;
            if (typeof element === "string") {
                element = that.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            let $elList = [];
            if (element instanceof NodeList || Array.isArray(element)) {
                $elList = $elList.concat(Array.from(element));
            }
            else {
                $elList.push(element);
            }
            let eventTypeList = [];
            if (Array.isArray(eventType)) {
                eventTypeList = eventType.filter((it) => typeof it === "string" && it.trim() !== "");
            }
            else if (typeof eventType === "string") {
                eventTypeList = eventType.split(" ");
            }
            $elList.forEach(($elItem) => {
                /* 获取对象上的事件 */
                const elementEvents = Reflect.get($elItem, GlobalData.domEventSymbol) || {};
                eventTypeList.forEach((eventTypeItem) => {
                    let event = null;
                    if (details && details instanceof Event) {
                        event = details;
                    }
                    else {
                        // 构造事件
                        event = new Event(eventTypeItem);
                        if (details) {
                            const detailKeys = Object.keys(details);
                            detailKeys.forEach((keyName) => {
                                const value = Reflect.get(details, keyName);
                                // 在event上添加属性
                                Reflect.set(event, keyName, value);
                            });
                        }
                    }
                    if (useDispatchToEmit == false && eventTypeItem in elementEvents) {
                        // 直接调用监听的事件
                        elementEvents[eventTypeItem].forEach((eventsItem) => {
                            eventsItem.callback(event);
                        });
                    }
                    else {
                        $elItem.dispatchEvent(event);
                    }
                });
            });
        }
        /**
         * 监听或触发元素的click事件
         * @param element 目标元素
         * @param handler （可选）事件处理函数
         * @param details （可选）赋予触发的Event的额外属性
         * @param useDispatchToEmit （可选）是否使用dispatchEvent来触发事件,默认true
         * @example
         * // 触发元素a.xx的click事件
         * DOMUtils.click(document.querySelector("a.xx"))
         * DOMUtils.click("a.xx")
         * DOMUtils.click("a.xx"，function(){
         *  console.log("触发click事件成功")
         * })
         * */
        click(element, handler, details, useDispatchToEmit) {
            const that = this;
            if (typeof element === "string") {
                element = that.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (CommonUtils.isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    that.click($ele, handler, details, useDispatchToEmit);
                });
                return;
            }
            if (handler == null) {
                that.emit(element, "click", details, useDispatchToEmit);
            }
            else {
                that.on(element, "click", null, handler);
            }
        }
        /**
         * 监听或触发元素的blur事件
         * @param element 目标元素
         * @param handler （可选）事件处理函数
         * @param details （可选）赋予触发的Event的额外属性
         * @param useDispatchToEmit （可选）是否使用dispatchEvent来触发事件,默认true
         * @example
         * // 触发元素a.xx的blur事件
         * DOMUtils.blur(document.querySelector("a.xx"))
         * DOMUtils.blur("a.xx")
         * DOMUtils.blur("a.xx"，function(){
         *  console.log("触发blur事件成功")
         * })
         * */
        blur(element, handler, details, useDispatchToEmit) {
            const that = this;
            if (typeof element === "string") {
                element = that.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (CommonUtils.isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    that.focus($ele, handler, details, useDispatchToEmit);
                });
                return;
            }
            if (handler === null) {
                that.emit(element, "blur", details, useDispatchToEmit);
            }
            else {
                that.on(element, "blur", null, handler);
            }
        }
        /**
         * 监听或触发元素的focus事件
         * @param element 目标元素
         * @param handler （可选）事件处理函数
         * @param details （可选）赋予触发的Event的额外属性
         * @param useDispatchToEmit （可选）是否使用dispatchEvent来触发事件,默认true
         * @example
         * // 触发元素a.xx的focus事件
         * DOMUtils.focus(document.querySelector("a.xx"))
         * DOMUtils.focus("a.xx")
         * DOMUtils.focus("a.xx"，function(){
         *  console.log("触发focus事件成功")
         * })
         * */
        focus(element, handler, details, useDispatchToEmit) {
            const that = this;
            if (typeof element === "string") {
                element = that.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (CommonUtils.isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    that.focus($ele, handler, details, useDispatchToEmit);
                });
                return;
            }
            if (handler == null) {
                that.emit(element, "focus", details, useDispatchToEmit);
            }
            else {
                that.on(element, "focus", null, handler);
            }
        }
        /**
         * 当鼠标移入或移出元素时触发事件
         * @param element 当前元素
         * @param handler 事件处理函数
         * @param option 配置
         * @example
         * // 监听a.xx元素的移入或移出
         * DOMUtils.onHover(document.querySelector("a.xx"),()=>{
         *   console.log("移入/移除");
         * })
         * DOMUtils.onHover("a.xx",()=>{
         *   console.log("移入/移除");
         * })
         */
        onHover(element, handler, option) {
            const that = this;
            if (typeof element === "string") {
                element = that.selectorAll(element);
            }
            if (element == null) {
                return;
            }
            if (CommonUtils.isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    that.onHover($ele, handler, option);
                });
                return;
            }
            that.on(element, "mouseenter", null, handler, option);
            that.on(element, "mouseleave", null, handler, option);
        }
        /**
         * 监听动画结束
         * @param element 监听的元素
         * @param handler 触发的回调函数
         * @param option 配置项，这里默认配置once为true
         */
        onAnimationend(element, handler, option) {
            const that = this;
            if (typeof element === "string") {
                element = that.selector(element);
            }
            if (element == null) {
                return;
            }
            const defaultOption = {
                once: true,
            };
            Object.assign(defaultOption, option || {});
            const eventNameList = CommonUtils.getAnimationEndNameList();
            that.on(element, eventNameList, null, handler, defaultOption);
            if (!defaultOption.once) {
                return {
                    off() {
                        that.off(element, eventNameList, null, handler, defaultOption);
                    },
                };
            }
        }
        /**
         * 监听过渡结束
         * @param element 监听的元素
         * @param handler 触发的回调函数
         * @param option 配置项，这里默认配置once为true
         */
        onTransitionend(element, handler, option) {
            const that = this;
            if (typeof element === "string") {
                element = that.selector(element);
            }
            if (element == null) {
                return;
            }
            const defaultOption = {
                once: true,
            };
            Object.assign(defaultOption, option || {});
            const eventNameList = CommonUtils.getTransitionEndNameList();
            that.on(element, eventNameList, null, handler, defaultOption);
            if (!defaultOption.once) {
                return {
                    off() {
                        that.off(element, eventNameList, null, handler, defaultOption);
                    },
                };
            }
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
        onKeyup(element, handler, option) {
            const that = this;
            if (element == null) {
                return;
            }
            if (typeof element === "string") {
                element = that.selectorAll(element);
            }
            if (CommonUtils.isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    that.onKeyup($ele, handler, option);
                });
                return;
            }
            that.on(element, "keyup", null, handler, option);
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
        onKeydown(element, handler, option) {
            const that = this;
            if (element == null) {
                return;
            }
            if (typeof element === "string") {
                element = that.selectorAll(element);
            }
            if (CommonUtils.isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    that.onKeydown($ele, handler, option);
                });
                return;
            }
            that.on(element, "keydown", null, handler, option);
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
        onKeypress(element, handler, option) {
            const that = this;
            if (element == null) {
                return;
            }
            if (typeof element === "string") {
                element = that.selectorAll(element);
            }
            if (CommonUtils.isNodeList(element)) {
                // 设置
                element.forEach(($ele) => {
                    that.onKeypress($ele, handler, option);
                });
                return;
            }
            that.on(element, "keypress", null, handler, option);
        }
        /**
         * 监听某个元素键盘按键事件或window全局按键事件
         * 按下有值的键时触发，按下Ctrl\Alt\Shift\Meta是无值键。按下先触发keydown事件，再触发keypress事件。
         * @param element 需要监听的对象，可以是全局Window或者某个元素
         * @param eventName 事件名，默认keypress，keydown - > keypress - > keyup
         * @param handler 自己定义的回调事件，参数1为当前的key，参数2为组合按键，数组类型，包含ctrl、shift、alt和meta（win键或mac的cmd键）
           * @param options 监听事件的配置
         * @example
           Utils.onKeyboard(window,(keyName,keyValue,otherKey,event)=>{
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
        onKeyboard(element, eventName = "keypress", handler, options) {
            const that = this;
            if (typeof element === "string") {
                element = that.selectorAll(element);
            }
            const keyboardEventCallBack = function (event) {
                /** 键名 */
                const keyName = event.key || event.code;
                /** 键值 */
                const keyValue = event.charCode || event.keyCode || event.which;
                /** 组合键列表 */
                const otherCodeList = [];
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
                if (typeof handler === "function") {
                    handler(keyName, keyValue, otherCodeList, event);
                }
            };
            that.on(element, eventName, keyboardEventCallBack, options);
            return {
                removeListen: () => {
                    that.off(element, eventName, keyboardEventCallBack, options);
                },
            };
        }
        /**
         * 监input、textarea的输入框值改变的事件（当输入法输入时，不会触发该监听）
         * @param $el 输入框元素
         * @param handler 回调函数
         * @param option 配置
         */
        onInput($el, handler, option) {
            /**
             * 是否正在输入中
             */
            let isComposite = false;
            const __callback = async (event) => {
                if (isComposite)
                    return;
                await handler(event);
            };
            const __composition_start_callback = () => {
                isComposite = true;
            };
            const __composition_end_callback = () => {
                isComposite = false;
                this.emit($el, "input", {
                    isComposite,
                });
            };
            const inputListener = this.on($el, "input", __callback, option);
            const compositionStartListener = this.on($el, "compositionstart", __composition_start_callback, option);
            const compositionEndListener = this.on($el, "compositionend", __composition_end_callback, option);
            return {
                off: () => {
                    inputListener.off();
                    compositionStartListener.off();
                    compositionEndListener.off();
                },
            };
        }
        onDoubleClick(...args) {
            const $el = args[0];
            let selector = void 0;
            let handler;
            let options;
            if (args.length === 2) {
                if (typeof args[1] === "function") {
                    handler = args[1];
                }
                else {
                    throw new TypeError("handler is not a function");
                }
            }
            else if (args.length === 3) {
                if (typeof args[1] === "function") {
                    handler = args[1];
                    options = args[2];
                }
                else {
                    selector = args[1];
                    handler = args[2];
                }
            }
            else if (args.length === 4) {
                selector = args[1];
                handler = args[2];
                options = args[3];
            }
            else {
                throw new Error("args length error");
            }
            let $click = null;
            let isDoubleClick = false;
            let timer = void 0;
            /** 是否是移动端点击 */
            let isMobileTouch = false;
            /** 检测是否是单击的延迟时间 */
            const checkClickTime = 200;
            const dblclick_handler = async (evt, option) => {
                if (evt.type === "dblclick" && isMobileTouch) {
                    // 禁止在移动端触发dblclick事件
                    return;
                }
                await handler(evt, option);
            };
            const dblClickListener = this.on($el, "dblclick", (evt) => {
                this.preventEvent(evt);
                dblclick_handler(evt, {
                    isDoubleClick: true,
                });
            }, options);
            const touchEndListener = this.on($el, "pointerup", selector, (evt, selectorTarget) => {
                this.preventEvent(evt);
                if (evt.pointerType === "touch") {
                    isMobileTouch = true;
                }
                CommonUtils.clearTimeout(timer);
                timer = void 0;
                if (isDoubleClick && $click === selectorTarget) {
                    isDoubleClick = false;
                    $click = null;
                    /* 判定为双击 */
                    dblclick_handler(evt, {
                        isDoubleClick: true,
                    });
                }
                else {
                    timer = CommonUtils.setTimeout(() => {
                        isDoubleClick = false;
                        // 判断为单击
                        dblclick_handler(evt, {
                            isDoubleClick: false,
                        });
                    }, checkClickTime);
                    isDoubleClick = true;
                    $click = selectorTarget;
                }
            }, options);
            return {
                off() {
                    $click = null;
                    dblClickListener.off();
                    touchEndListener.off();
                },
            };
        }
        preventEvent(...args) {
            /**
             * 阻止事件的默认行为发生，并阻止事件传播
             */
            const stopEvent = (event) => {
                /* 阻止事件的默认行为发生。例如，当点击一个链接时，浏览器会默认打开链接的URL */
                event?.preventDefault();
                /* 停止事件的传播，阻止它继续向更上层的元素冒泡，事件将不会再传播给其他的元素 */
                event?.stopPropagation();
                /* 阻止事件传播，并且还能阻止元素上的其他事件处理程序被触发 */
                event?.stopImmediatePropagation();
                return false;
            };
            if (args.length === 1) {
                /* 直接阻止事件 */
                return stopEvent(args[0]);
            }
            else {
                const $el = args[0];
                let eventNameList = args[1];
                const capture = args[2];
                /* 添加对应的事件来阻止触发 */
                if (typeof eventNameList === "string") {
                    eventNameList = [eventNameList];
                }
                this.on($el, eventNameList, stopEvent, { capture: Boolean(capture) });
            }
        }
    }
    new ElementEvent();

    class ElementHandler extends ElementEvent {
        windowApi;
        constructor(windowApiOption) {
            super(windowApiOption);
            this.windowApi = new WindowApi(windowApiOption);
        }
        /**
         * 获取元素的选择器字符串
         * @param $el
         * @example
         * DOMUtils.getElementSelector(document.querySelector("a"))
         * > '.....'
         */
        getElementSelector($el) {
            const that = this;
            if (!$el)
                return void 0;
            if (!$el.parentElement)
                return void 0;
            /* 如果元素有id属性，则直接返回id选择器 */
            if ($el.id)
                return `#${$el.id}`;
            /* 递归地获取父元素的选择器 */
            let selector = that.getElementSelector($el.parentElement);
            if (!selector) {
                return $el.tagName.toLowerCase();
            }
            /* 如果有多个相同类型的兄弟元素，则需要添加索引 */
            if ($el.parentElement.querySelectorAll($el.tagName).length > 1) {
                const index = Array.prototype.indexOf.call($el.parentElement.children, $el) + 1;
                selector += ` > ${$el.tagName.toLowerCase()}:nth-child(${index})`;
            }
            else {
                selector += ` > ${$el.tagName.toLowerCase()}`;
            }
            return selector;
        }
    }
    new ElementHandler();

    class DOMUtils extends ElementHandler {
        constructor(option) {
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
        attr($el, attrName, attrValue) {
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
                    return that.attr($el[0], attrName, attrValue);
                }
                else {
                    // 设置属性
                    $el.forEach(($elItem) => {
                        that.attr($elItem, attrName, attrValue);
                    });
                    return;
                }
            }
            if (attrValue == null) {
                return $el.getAttribute(attrName);
            }
            else {
                $el.setAttribute(attrName, attrValue);
            }
        }
        createElement(
        /** 元素名 */
        tagName, 
        /** 属性 */
        property, 
        /** 自定义属性 */
        attributes) {
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
                $el[key] = value;
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
                $el.setAttribute(key, value);
            });
            return $el;
        }
        css($el, property, value) {
            const that = this;
            /**
             * 把纯数字没有px的加上
             */
            function handlePixe(propertyName, propertyValue) {
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
                        return that.css($el[0], property);
                    }
                    else {
                        // 设置属性
                        $el.forEach(($elItem) => {
                            that.css($elItem, property);
                        });
                        return;
                    }
                }
                else if (typeof property === "object") {
                    // 设置属性
                    $el.forEach(($elItem) => {
                        that.css($elItem, property);
                    });
                    return;
                }
                return;
            }
            const setStyleProperty = (propertyName, propertyValue) => {
                if (typeof propertyValue === "string" && propertyValue.trim().endsWith("!important")) {
                    propertyValue = propertyValue
                        .trim()
                        .replace(/!important$/gi, "")
                        .trim();
                    $el.style.setProperty(propertyName, propertyValue, "important");
                }
                else {
                    propertyValue = handlePixe(propertyName, propertyValue);
                    $el.style.setProperty(propertyName, propertyValue);
                }
            };
            if (typeof property === "string") {
                if (value == null) {
                    return that.windowApi.globalThis.getComputedStyle($el).getPropertyValue(property);
                }
                else {
                    setStyleProperty(property, value);
                }
            }
            else if (typeof property === "object") {
                for (const prop in property) {
                    const value = property[prop];
                    setStyleProperty(prop, value);
                }
            }
            else {
                // 其他情况
                throw new TypeError("property must be string or object");
            }
        }
        text($el, text) {
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
                    return that.text($el[0]);
                }
                else {
                    // 设置
                    $el.forEach(($elItem) => {
                        that.text($elItem, text);
                    });
                }
                return;
            }
            if (text == null) {
                return $el.textContent || $el.innerText;
            }
            else {
                if (text instanceof Node) {
                    text = text.textContent || text.innerText;
                }
                if ("textContent" in $el) {
                    $el.textContent = text;
                }
                else if ("innerText" in $el) {
                    $el.innerText = text;
                }
            }
        }
        html($el, html) {
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
                    return that.html($el[0]);
                }
                else {
                    // 设置
                    $el.forEach(($elItem) => {
                        that.html($elItem, html);
                    });
                }
                return;
            }
            if (html == null) {
                // 获取
                return $el.innerHTML;
            }
            else {
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
        getTransform($el, isShow = false) {
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
        val($el, value) {
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
                    return that.val($el[0]);
                }
                else {
                    // 设置
                    $el.forEach(($elItem) => {
                        that.val($elItem, value);
                    });
                }
                return;
            }
            if (value == null) {
                // 获取
                if ($el.localName === "input" && ($el.type === "checkbox" || $el.type === "radio")) {
                    return $el.checked;
                }
                else {
                    return $el.value;
                }
            }
            else {
                // 设置
                if ($el.localName === "input" && ($el.type === "checkbox" || $el.type === "radio")) {
                    $el.checked = !!value;
                }
                else {
                    $el.value = value;
                }
            }
        }
        prop($el, propName, propValue) {
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
                    return that.prop($el[0], propName);
                }
                else {
                    // 设置
                    $el.forEach(($elItem) => {
                        that.prop($elItem, propName, propValue);
                    });
                }
                return;
            }
            if (propValue == null) {
                return Reflect.get($el, propName);
            }
            else {
                if ($el instanceof Element && propName === "innerHTML") {
                    that.html($el, propValue);
                }
                else {
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
        removeAttr($el, attrName) {
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
                    that.removeAttr($elItem, attrName);
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
        removeClass($el, className) {
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
                    that.removeClass($elItem, className);
                });
                return;
            }
            if (className == null) {
                // 清空全部className
                $el.className = "";
            }
            else {
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
        removeProp($el, propName) {
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
                    that.removeProp($elItem, propName);
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
        addClass($el, className) {
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
                    that.addClass($elItem, className);
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
        hasClass($el, className) {
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
                    const $elItem = $el[index];
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
        append($el, content) {
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
                    that.append($elItem, content);
                });
                return;
            }
            function elementAppendChild(ele, text) {
                if (typeof content === "string") {
                    if (ele instanceof DocumentFragment) {
                        if (typeof text === "string") {
                            text = that.toElement(text, true, false);
                        }
                        ele.appendChild(text);
                    }
                    else {
                        ele.insertAdjacentHTML("beforeend", CommonUtils.createSafeHTML(text));
                    }
                }
                else {
                    ele.appendChild(text);
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
            }
            else {
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
        prepend($el, content) {
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
                    that.prepend($elItem, content);
                });
                return;
            }
            if (typeof content === "string") {
                if ($el instanceof DocumentFragment) {
                    content = that.toElement(content, true, false);
                    $el.prepend(content);
                }
                else {
                    $el.insertAdjacentHTML("afterbegin", CommonUtils.createSafeHTML(content));
                }
            }
            else {
                const $firstChild = $el.firstChild;
                if ($firstChild == null) {
                    $el.prepend(content);
                }
                else {
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
        after($el, content) {
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
                    that.after($elItem, content);
                });
                return;
            }
            if (typeof content === "string") {
                $el.insertAdjacentHTML("afterend", CommonUtils.createSafeHTML(content));
            }
            else {
                const $parent = $el.parentElement;
                const $nextSlibling = $el.nextSibling;
                if (!$parent || $nextSlibling) {
                    // 任意一个不行
                    $el.after(content);
                }
                else {
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
        before($el, content) {
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
                    that.before($elItem, content);
                });
                return;
            }
            if (typeof content === "string") {
                $el.insertAdjacentHTML("beforebegin", CommonUtils.createSafeHTML(content));
            }
            else {
                const $parent = $el.parentElement;
                if (!$parent) {
                    $el.before(content);
                }
                else {
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
        remove($el) {
            const that = this;
            if (typeof $el === "string") {
                $el = that.selectorAll($el);
            }
            if ($el == null) {
                return;
            }
            if (CommonUtils.isNodeList($el)) {
                $el.forEach(($elItem) => {
                    that.remove($elItem);
                });
                return;
            }
            if (typeof $el.remove === "function") {
                $el.remove();
            }
            else if ($el.parentElement) {
                $el.parentElement.removeChild($el);
            }
            else if ($el.parentNode) {
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
        empty($el) {
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
                    that.empty($elItem);
                });
                return;
            }
            if ($el.innerHTML) {
                $el.innerHTML = "";
            }
            else if ($el.textContent) {
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
        offset($el) {
            const that = this;
            if (typeof $el === "string") {
                $el = that.selector($el);
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
        width($el, isShow = false) {
            const that = this;
            if (typeof $el === "string") {
                $el = that.selector($el);
            }
            if (CommonUtils.isWin($el)) {
                return that.windowApi.window.document.documentElement.clientWidth;
            }
            if ($el.nodeType === 9) {
                /* Document文档节点 */
                $el = $el;
                return Math.max($el.body.scrollWidth, $el.documentElement.scrollWidth, $el.body.offsetWidth, $el.documentElement.offsetWidth, $el.documentElement.clientWidth);
            }
            if (isShow || (!isShow && CommonUtils.isShow($el))) {
                /* 已显示 */
                /* 不从style中获取对应的宽度，因为可能使用了class定义了width !important */
                $el = $el;
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
                    const backHeight = parseFloat($el.offsetWidth.toString()) -
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
                $el = $el;
                const { recovery } = CommonUtils.forceShow($el);
                const width = that.width($el, true);
                recovery();
                return width;
            }
        }
        height($el, isShow = false) {
            const that = this;
            if (CommonUtils.isWin($el)) {
                return that.windowApi.window.document.documentElement.clientHeight;
            }
            if (typeof $el === "string") {
                $el = that.selector($el);
            }
            if ($el.nodeType === 9) {
                $el = $el;
                /* Document文档节点 */
                return Math.max($el.body.scrollHeight, $el.documentElement.scrollHeight, $el.body.offsetHeight, $el.documentElement.offsetHeight, $el.documentElement.clientHeight);
            }
            if (isShow || (!isShow && CommonUtils.isShow($el))) {
                $el = $el;
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
                    const backHeight = parseFloat($el.offsetHeight.toString()) -
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
                $el = $el;
                const { recovery } = CommonUtils.forceShow($el);
                const height = that.height($el, true);
                recovery();
                return height;
            }
        }
        outerWidth($el, isShow = false) {
            const that = this;
            if (CommonUtils.isWin($el)) {
                return that.windowApi.window.innerWidth;
            }
            if (typeof $el === "string") {
                $el = that.selector($el);
            }
            $el = $el;
            if (isShow || (!isShow && CommonUtils.isShow($el))) {
                const style = that.windowApi.globalThis.getComputedStyle($el, null);
                const marginLeft = CommonUtils.getStyleValue(style, "marginLeft");
                const marginRight = CommonUtils.getStyleValue(style, "marginRight");
                return $el.offsetWidth + marginLeft + marginRight;
            }
            else {
                const { recovery } = CommonUtils.forceShow($el);
                const outerWidth = that.outerWidth($el, true);
                recovery();
                return outerWidth;
            }
        }
        outerHeight($el, isShow = false) {
            const that = this;
            if (CommonUtils.isWin($el)) {
                return that.windowApi.window.innerHeight;
            }
            if (typeof $el === "string") {
                $el = that.selector($el);
            }
            $el = $el;
            if (isShow || (!isShow && CommonUtils.isShow($el))) {
                const style = that.windowApi.globalThis.getComputedStyle($el, null);
                const marginTop = CommonUtils.getStyleValue(style, "marginTop");
                const marginBottom = CommonUtils.getStyleValue(style, "marginBottom");
                return $el.offsetHeight + marginTop + marginBottom;
            }
            else {
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
        replaceWith($el, $newEl) {
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
                    that.replaceWith($elItem, $newEl);
                });
                return;
            }
            if (typeof $newEl === "string") {
                $newEl = that.toElement($newEl, false, false);
            }
            const $parent = $el.parentElement;
            if ($parent) {
                $parent.replaceChild($newEl, $el);
            }
            else {
                that.after($el, $newEl);
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
        wrap($el, wrapperHTML) {
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
                    that.wrap($elItem, wrapperHTML);
                });
                return;
            }
            $el = $el;
            // 创建一个新的div元素，并将wrapperHTML作为其innerHTML
            const $wrapper = that.windowApi.document.createElement("div");
            that.html($wrapper, wrapperHTML);
            const wrapperFirstChild = $wrapper.firstChild;
            // 将要包裹的元素插入目标元素前面
            const parentElement = $el.parentElement;
            parentElement.insertBefore(wrapperFirstChild, $el);
            // 将要包裹的元素移动到wrapper中
            wrapperFirstChild.appendChild($el);
        }
        prev($el) {
            const that = this;
            if (typeof $el === "string") {
                $el = that.selector($el);
            }
            if ($el == null) {
                return;
            }
            return $el.previousElementSibling;
        }
        next($el) {
            const that = this;
            if (typeof $el === "string") {
                $el = that.selector($el);
            }
            if ($el == null) {
                return;
            }
            return $el.nextElementSibling;
        }
        siblings($el) {
            const that = this;
            if (typeof $el === "string") {
                $el = that.selector($el);
            }
            if ($el == null) {
                return;
            }
            return Array.from($el.parentElement.children).filter(($child) => $child !== $el);
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
        parent($el) {
            const that = this;
            if (typeof $el === "string") {
                $el = that.selector($el);
            }
            if ($el == null) {
                return;
            }
            if (CommonUtils.isNodeList($el)) {
                const resultArray = [];
                $el.forEach(($elItem) => {
                    resultArray.push(that.parent($elItem));
                });
                return resultArray;
            }
            else {
                return $el.parentElement;
            }
        }
        toElement(html, useParser = false, isComplete = false) {
            const that = this;
            // 去除html前后的空格
            html = html.trim();
            function parseHTMLByDOMParser() {
                const parser = new DOMParser();
                if (isComplete) {
                    return parser.parseFromString(html, "text/html");
                }
                else {
                    return parser.parseFromString(html, "text/html").body.firstChild;
                }
            }
            function parseHTMLByCreateDom() {
                const $el = that.windowApi.document.createElement("div");
                that.html($el, html);
                if (isComplete) {
                    return $el;
                }
                else {
                    return $el.firstElementChild ?? $el.firstChild;
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
            const serializedArray = [];
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                if (element.name &&
                    !element.disabled &&
                    (element.checked ||
                        ["text", "hidden", "password", "textarea", "select-one", "select-multiple"].includes(element.type))) {
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
            const that = this;
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
            if (typeof selectionEnd != "number" || isNaN(selectionEnd) || selectionEnd < selectionStart) {
                selectionEnd = selectionStart;
            }
            if (selectionEnd < 0)
                selectionEnd = 0;
            else
                selectionEnd = Math.min($input.value.length, selectionEnd);
            // If available (thus IE), use the createTextRange method
            if (typeof $input.createTextRange == "function") {
                const range = $input.createTextRange();
                range.collapse(true);
                range.moveStart("character", selectionStart);
                range.moveEnd("character", selectionEnd - selectionStart);
                return range.getBoundingClientRect();
            }
            // createTextRange is not supported, create a fake text range
            const offset = getInputOffset(), width = getInputCSS("width", true), height = getInputCSS("height", true);
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
            topPos += getInputCSS("padding-top", true);
            topPos += getInputCSS("border-top-width", true);
            leftPos += getInputCSS("padding-left", true);
            leftPos += getInputCSS("border-left-width", true);
            leftPos += 1; //Seems to be necessary
            for (let index = 0; index < listOfModifiers.length; index++) {
                const property = listOfModifiers[index];
                cssDefaultStyles += property + ":" + getInputCSS(property, false) + ";";
            }
            // End of CSS variable checks
            // 不能为空，不然获取不到高度
            const text = $input.value || "G", textLen = text.length, fakeClone = that.windowApi.document.createElement("div");
            if (selectionStart > 0)
                appendPart(0, selectionStart);
            const fakeRange = appendPart(selectionStart, selectionEnd);
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
            function appendPart(start, end) {
                const span = that.windowApi.document.createElement("span");
                span.style.cssText = cssDefaultStyles; //Force styles to prevent unexpected results
                span.textContent = text.substring(start, end);
                fakeClone.appendChild(span);
                return span;
            }
            // Computing offset position
            function getInputOffset() {
                const body = that.windowApi.document.body, win = that.windowApi.document.defaultView, docElem = that.windowApi.document.documentElement, $box = that.windowApi.document.createElement("div");
                $box.style.paddingLeft = $box.style.width = "1px";
                body.appendChild($box);
                const isBoxModel = $box.offsetWidth == 2;
                body.removeChild($box);
                const $boxRect = $input.getBoundingClientRect();
                const clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, scrollTop = win.pageYOffset || (isBoxModel && docElem.scrollTop) || body.scrollTop, scrollLeft = win.pageXOffset || (isBoxModel && docElem.scrollLeft) || body.scrollLeft;
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
                const val = that.windowApi.document.defaultView.getComputedStyle($input, null).getPropertyValue(prop);
                if (isNumber) {
                    return parseFloat(val);
                }
                else {
                    return val;
                }
            }
        }
        addStyle(cssText) {
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
            }
            else if (this.windowApi.document.documentElement.childNodes.length === 0) {
                /* 插入#html后 */
                this.windowApi.document.documentElement.appendChild($css);
            }
            else {
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
        checkUserClickInNode($el) {
            const that = this;
            if (!CommonUtils.isDOM($el)) {
                throw new Error("DOMUtils.checkUserClickInNode 参数 targetNode 必须为 Element|Node 类型");
            }
            const clickEvent = that.windowApi.window.event;
            const touchEvent = that.windowApi.window.event;
            const $click = clickEvent?.composedPath()?.[0];
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
            bottom: elementPosYBottom, } = $el.getBoundingClientRect();
            if (clickPosX >= elementPosXLeft &&
                clickPosX <= elementPosXRight &&
                clickPosY >= elementPosYTop &&
                clickPosY <= elementPosYBottom) {
                return true;
            }
            else if (($click && $el.contains($click)) || $click == $el) {
                /* 这种情况是应对在界面中隐藏的元素，getBoundingClientRect获取的都是0 */
                return true;
            }
            else {
                return false;
            }
        }
        deleteParentNode($el, parentSelector) {
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
            const $parent = domUtils.closest($el, parentSelector);
            if ($parent) {
                this.remove($parent);
                result = true;
            }
            return result;
        }
        *findElementsWithText($el, text, filter) {
            const that = this;
            if ($el.outerHTML.includes(text)) {
                if ($el.children.length === 0) {
                    const filterResult = typeof filter === "function" ? filter($el) : false;
                    if (!filterResult) {
                        yield $el;
                    }
                }
                else {
                    const $text = Array.from($el.childNodes).filter(($child) => $child.nodeType === Node.TEXT_NODE);
                    for (const $child of $text) {
                        if ($child.textContent.includes(text)) {
                            const filterResult = typeof filter === "function" ? filter($el) : false;
                            if (!filterResult) {
                                yield $child;
                            }
                        }
                    }
                }
            }
            for (let index = 0; index < $el.children.length; index++) {
                const $child = $el.children[index];
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
        findVisibleElement($el) {
            let $current = $el;
            while ($current) {
                const rect = $current.getBoundingClientRect();
                if (rect.length) {
                    return $current;
                }
                $current = $current.parentElement;
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
        setElementSelection($el, childTextNode, startIndex, endIndex) {
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

    return domUtils;

}));
//# sourceMappingURL=index.umd.js.map
