var Qmsg = (function () {
    'use strict';

    /**
     * 兼容处理
     */
    function CompatibleProcessing() {
        /* 处理Object.assign不存在的问题 */
        try {
            if (typeof Object.assign !== "function") {
                Object.assign = function (target) {
                    target = Object(target);
                    if (arguments.length > 1) {
                        // eslint-disable-next-line prefer-rest-params
                        const sourceList = [...arguments].splice(1, arguments.length - 1);
                        sourceList.forEach((sourceItem) => {
                            for (const sourceKey in sourceItem) {
                                if (Object.prototype.hasOwnProperty.call(sourceItem, sourceKey)) {
                                    target[sourceKey] = sourceItem[sourceKey];
                                }
                            }
                        });
                    }
                    return target;
                };
            }
        }
        catch (error) {
            console.warn("Qmsg CompatibleProcessing Object.assign error", error);
        }
        /* 'classList' 兼容处理，add，remove不支持传入多个cls参数 */
        try {
            if (!("classList" in document.documentElement)) {
                Object.defineProperty(HTMLElement.prototype, "classList", {
                    get: function () {
                        const self = this;
                        function update(fn) {
                            return function (value) {
                                const classes = self.className.split(/\s+/g), index = classes.indexOf(value);
                                fn(classes, index, value);
                                self.className = classes.join(" ");
                            };
                        }
                        return {
                            add: update(function (classes, index, value) {
                                if (!~index)
                                    classes.push(value);
                            }),
                            remove: update(function (classes, index) {
                                if (~index)
                                    classes.splice(index, 1);
                            }),
                            toggle: update(function (classes, index, value) {
                                if (~index)
                                    classes.splice(index, 1);
                                else
                                    classes.push(value);
                            }),
                            contains: function (value) {
                                return !!~self.className.split(/\s+/g).indexOf(value);
                            },
                            item: function (index) {
                                return self.className.split(/\s+/g)[index] || null;
                            },
                        };
                    },
                });
            }
        }
        catch (error) {
            console.warn("Qmsg CompatibleProcessing HTMLElement.prototype.classList warning", error);
        }
    }

    const QmsgDefaultConfig = {
        /** 声明插件名称 */
        get PLUGIN_NAME() {
            return "qmsg";
        },
        /** 命名空间，用于css和事件 */
        get NAMESPACE() {
            return "qmsg";
        },
        /** 实例配置的固定的默认值，在初始化时会插入值 */
        INS_DEFAULT: {},
        /** 实例配置的默认值 */
        get config() {
            return {
                parent: document.body || document.documentElement,
                useShadowRoot: true,
                shadowRootMode: "open",
                animation: true,
                autoClose: true,
                listenEventToPauseAutoClose: true,
                listenEventToCloseInstance: true,
                content: "",
                isHTML: false,
                position: "top",
                showClose: false,
                maxNums: 5,
                onClose: null,
                showIcon: true,
                showMoreContent: false,
                showReverse: false,
                timeout: 2500,
                type: "info",
                zIndex: 50000,
                style: "",
                customClass: "",
                isLimitWidth: false,
                limitWidthNum: 200,
                limitWidthWrap: "no-wrap",
                consoleLogContent: false,
                afterRender: null,
            };
        },
    };

    const QmsgHeaderCloseIcon = /*css*/ `
	<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="48" height="48" fill="white" fill-opacity="0.01"/>
		<path d="M14 14L34 34" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14 34L34 14" stroke="#909399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`;
    const QmsgIcon = {
        info: /*css*/ `
		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64zm67.008 275.008q26.016 0 43.008-15.488t16.992-41.504-16.992-41.504-42.496-15.488-42.496 15.488-16.992 41.504 16.992 41.504 42.016 15.488zm12 360q0-6.016.992-16T592 664l-52.992 60.992q-8 8.992-16.512 14.016T508 742.016q-8.992-4-8-14.016l88-276.992q4.992-28-8.992-48t-44.992-24q-35.008.992-76.512 29.504t-72.512 72.512v15.008q-.992 10.016 0 19.008l52.992-60.992q8-8.992 16.512-14.016T468 437.024q10.016 4.992 7.008 16l-87.008 276q-7.008 24.992 7.008 44.512T444 800.032q50.016-.992 84-28.992t63.008-72z" fill="#909399"/>
		</svg>`,
        warning: /*css*/ `

		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64C264.64 64 64 264.64 64 512c0 247.424 200.64 448 448 448 247.488 0 448-200.576 448-448 0-247.36-200.512-448-448-448zm0 704c-26.432 0-48-21.504-48-48s21.568-48 48-48c26.624 0 48 21.504 48 48s-21.376 48-48 48zm48-240c0 26.56-21.376 48-48 48-26.432 0-48-21.44-48-48V304c0-26.56 21.568-48 48-48 26.624 0 48 21.44 48 48v224z" fill="#E6A23C"/>
		</svg>`,
        error: /*css*/ `

		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64C264.58 64 64 264.58 64 512s200.58 448 448 448 448-200.57 448-448S759.42 64 512 64zm158.39 561.14a32 32 0 1 1-45.25 45.26L512 557.26 398.86 670.4a32 32 0 0 1-45.25-45.26L466.75 512 353.61 398.86a32 32 0 0 1 45.25-45.25L512 466.74l113.14-113.13a32 32 0 0 1 45.25 45.25L557.25 512z" fill="#F56C6C"/>
		</svg>`,
        success: /*css*/ `

		<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path d="M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64zm-56 536l-99.008-99.008q-12-11.008-27.488-11.008t-27.008 11.488-11.488 26.496 11.008 27.008l127.008 127.008q11.008 11.008 27.008 11.008t27.008-11.008l263.008-263.008q15.008-15.008 9.504-36.512t-27.008-27.008-36.512 9.504z" fill="#67C23A"/>
		</svg>`,
        loading: /*css*/ `
		<svg class="animate-turn" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill="#fff" fill-opacity=".01" d="M0 0h48v48H0z"/>
			<path d="M4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4" stroke="#409eff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M36 24c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12" stroke="#409eff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`,
    };

    /**
     * Qmsg实例存储
     */
    const QmsgInstStorage = {
        /**
         * 存储的Qmsg实例信息
         */
        insInfoList: [],
        /**
         * 根据uuid移除Qmsg实例
         * @param uuid 每个Qmsg实例的uuid
         * @returns
         * + true 移除成功
         * + false 移除失败
         */
        remove(uuid) {
            let flag = false;
            for (let index = 0; index < QmsgInstStorage.insInfoList.length; index++) {
                if (QmsgInstStorage.insInfoList[index].uuid === uuid) {
                    QmsgInstStorage.insInfoList.splice(index, 1);
                    flag = true;
                    break;
                }
            }
            return flag;
        },
    };

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

    const isMessagePort = (sender) => {
        return typeof sender.start === 'function';
    };

    const PORT_MAP = new WeakMap();

    const extendBrokerImplementation = (partialBrokerImplementation) => ({
        ...partialBrokerImplementation,
        connect: ({ call }) => {
            return async () => {
                const { port1, port2 } = new MessageChannel();
                const portId = await call('connect', { port: port1 }, [port1]);
                PORT_MAP.set(port2, portId);
                return port2;
            };
        },
        disconnect: ({ call }) => {
            return async (port) => {
                const portId = PORT_MAP.get(port);
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

    const ONGOING_REQUESTS = new WeakMap();
    const createOrGetOngoingRequests = (sender) => {
        if (ONGOING_REQUESTS.has(sender)) {
            // @todo TypeScript needs to be convinced that has() works as expected.
            return ONGOING_REQUESTS.get(sender);
        }
        const ongoingRequests = new Map();
        ONGOING_REQUESTS.set(sender, ongoingRequests);
        return ongoingRequests;
    };
    const createBroker = (brokerImplementation) => {
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

    // Prefilling the Maps with a function indexed by zero is necessary to be compliant with the specification.
    const scheduledIntervalsState = new Map([[0, null]]); // tslint:disable-line no-empty
    const scheduledTimeoutsState = new Map([[0, null]]); // tslint:disable-line no-empty
    const wrap = createBroker({
        clearInterval: ({ call }) => {
            return (timerId) => {
                if (typeof scheduledIntervalsState.get(timerId) === 'symbol') {
                    scheduledIntervalsState.set(timerId, null);
                    call('clear', { timerId, timerType: 'interval' }).then(() => {
                        scheduledIntervalsState.delete(timerId);
                    });
                }
            };
        },
        clearTimeout: ({ call }) => {
            return (timerId) => {
                if (typeof scheduledTimeoutsState.get(timerId) === 'symbol') {
                    scheduledTimeoutsState.set(timerId, null);
                    call('clear', { timerId, timerType: 'timeout' }).then(() => {
                        scheduledTimeoutsState.delete(timerId);
                    });
                }
            };
        },
        setInterval: ({ call }) => {
            return (func, delay = 0, ...args) => {
                const symbol = Symbol();
                const timerId = generateUniqueNumber(scheduledIntervalsState);
                scheduledIntervalsState.set(timerId, symbol);
                const schedule = () => call('set', {
                    delay,
                    now: performance.timeOrigin + performance.now(),
                    timerId,
                    timerType: 'interval'
                }).then(() => {
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
        },
        setTimeout: ({ call }) => {
            return (func, delay = 0, ...args) => {
                const symbol = Symbol();
                const timerId = generateUniqueNumber(scheduledTimeoutsState);
                scheduledTimeoutsState.set(timerId, symbol);
                call('set', {
                    delay,
                    now: performance.timeOrigin + performance.now(),
                    timerId,
                    timerType: 'timeout'
                }).then(() => {
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
        }
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
    const worker = `(()=>{var e={455:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o('The handler of the method called "'.concat(t,'" returned an unexpected result.'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o('The requested method called "'.concat(e,'" is not supported.'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o('The handler of the method called "'.concat(t,'" returned no required result.'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},f=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},m=new Map,h=d(globalThis.clearTimeout,m),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=f(m,performance,globalThis.setTimeout,w),T=f(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();`; // tslint:disable-line:max-line-length

    const loadOrReturnBroker = createLoadOrReturnBroker(load, worker);
    const clearInterval = (timerId) => loadOrReturnBroker().clearInterval(timerId);
    const clearTimeout = (timerId) => loadOrReturnBroker().clearTimeout(timerId);
    const setInterval = (...args) => loadOrReturnBroker().setInterval(...args);
    const setTimeout$1 = (...args) => loadOrReturnBroker().setTimeout(...args);

    const QmsgUtils = {
        /**
         * 生成带插件名的名称
         * @param args
         */
        getNameSpacify(...args) {
            let result = QmsgDefaultConfig.NAMESPACE;
            for (let index = 0; index < args.length; ++index) {
                result += "-" + args[index];
            }
            return result;
        },
        /**
         * 判断字符是否是数字
         * @param text 需要判断的字符串
         */
        isNumber(text) {
            const isNumberPattern = /^\d+$/;
            return isNumberPattern.test(text);
        },
        /**
         * 获取唯一性的UUID
         */
        getUUID() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (value) {
                const randValue = (Math.random() * 16) | 0, newValue = value == "x" ? randValue : (randValue & 0x3) | 0x8;
                return newValue.toString(16);
            });
        },
        /**
         * 合并参数为配置信息，用于创建Msg实例
         * @param content 文本内容
         * @param config 配置
         */
        mergeArgs(content = "", config) {
            const opts = {};
            if (arguments.length === 0) {
                return opts;
            }
            if (config != null) {
                // 传入了2个参数
                // string object
                // object object
                opts.content = content;
                if (typeof config === "object" && config != null) {
                    return Object.assign(opts, config);
                }
            }
            else {
                // 传入了1个参数
                // object
                // string
                if (typeof content === "object" && content != null) {
                    return Object.assign(opts, content);
                }
                else {
                    opts.content = content;
                }
            }
            return opts;
        },
        /**
         * 转换为动态对象
         * @param obj 需要配置的对象
         * @param other_obj 获取的其它对象
         */
        toDynamicObject(obj, ...other_objs) {
            const __obj__ = Object.assign({}, obj ?? {});
            Object.keys(__obj__).forEach((keyName) => {
                // @ts-ignore
                let objValue = __obj__[keyName];
                Object.defineProperty(__obj__, keyName, {
                    get() {
                        const findIndex = other_objs.findIndex((other_obj) => {
                            // 判断其他对象中是否有该属性
                            return (typeof other_obj === "object" && other_obj != null && other_obj.hasOwnProperty.call(other_obj, keyName));
                        });
                        if (findIndex !== -1) {
                            // @ts-ignore
                            const other_objValue = other_objs[findIndex][keyName];
                            return other_objValue;
                        }
                        else {
                            return objValue;
                        }
                    },
                    set(newValue) {
                        objValue = newValue;
                    },
                });
            });
            return __obj__;
        },
        /**
         * 自动使用 Worker 执行 setTimeout
         */
        setTimeout(callback, timeout) {
            try {
                return setTimeout$1(callback, timeout);
            }
            catch {
                return globalThis.setTimeout(callback, timeout);
            }
        },
        /**
         * 配合 QmsgUtils.setTimeout 使用
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
                globalThis.clearTimeout(timeId);
            }
        },
        /**
         * 自动使用 Worker 执行 setInterval
         */
        setInterval(callback, timeout) {
            try {
                return setInterval(callback, timeout);
            }
            catch {
                return globalThis.setInterval(callback, timeout);
            }
        },
        /**
         * 配合 QmsgUtils.setInterval 使用
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
                globalThis.clearInterval(timeId);
            }
        },
        /**
         * 设置安全的html
         */
        setSafeHTML($el, text) {
            // 创建 TrustedHTML 策略（需 CSP 允许）
            try {
                $el.innerHTML = text;
            }
            catch {
                // @ts-ignore
                if (globalThis.trustedTypes) {
                    // @ts-ignore
                    const policy = globalThis.trustedTypes.createPolicy("safe-innerHTML", {
                        createHTML: (html) => html,
                    });
                    $el.innerHTML = policy.createHTML(text);
                }
                else {
                    throw new Error("QmsgUtils trustedTypes is not defined");
                }
            }
        },
    };

    const QmsgAnimation = {
        /** 状态 & 动画 */
        $state: {
            opening: "MessageMoveIn",
            done: "",
            closing: "MessageMoveOut",
        },
        $name: {
            startNameList: ["animationName", "WebkitAnimationName", "MozAnimationName", "msAnimationName", "OAnimationName"],
            endNameList: ["animationend", "webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend"],
        },
        /**
         * 是否支持动画属性
         * @private
         */
        __CAN_ANIMATION__: void 0,
        /**
         * 是否支持动画属性
         */
        get CAN_ANIMATION() {
            this.__CAN_ANIMATION__ =
                this.__CAN_ANIMATION__ ?? this.getStyleAnimationNameValue(document.createElement("div")) != null;
            return this.__CAN_ANIMATION__;
        },
        /**
         * 获取元素上的animationName属性
         * @param element
         */
        getStyleAnimationNameValue(element) {
            for (let index = 0; index < this.$name.startNameList.length; index++) {
                const animationName = this.$name.startNameList[index];
                const animationNameValue = element.style[animationName];
                if (animationNameValue != null) {
                    return animationNameValue;
                }
            }
        },
        /**
         * 设置元素上的animationName属性
         * @param element
         * @param animationNameValue
         */
        setStyleAnimationName(element, animationNameValue = "") {
            this.$name.startNameList.forEach((animationName) => {
                if (animationName in element.style) {
                    element.style[animationName] = animationNameValue;
                }
            });
        },
    };

    const css_text$1 = "@charset \"utf-8\";\r\n.qmsg.qmsg-wrapper {\r\n  position: fixed;\r\n  top: 16px;\r\n  left: 0;\r\n  z-index: 50000;\r\n  display: flex;\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  color: rgba(0, 0, 0, 0.55);\r\n  list-style: none;\r\n  font-variant: tabular-nums;\r\n  font-size: 13px;\r\n  line-height: 1;\r\n  font-feature-settings: \"tnum\";\r\n  pointer-events: none;\r\n  flex-direction: column;\r\n}\r\n.qmsg.qmsg-data-position-center,\r\n.qmsg.qmsg-data-position-left,\r\n.qmsg.qmsg-data-position-right {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.qmsg.qmsg-data-position-bottom,\r\n.qmsg.qmsg-data-position-bottomleft,\r\n.qmsg.qmsg-data-position-bottomright {\r\n  position: fixed;\r\n  top: unset;\r\n  bottom: 0;\r\n  bottom: 8px;\r\n  left: 50%;\r\n  transform: translate(-50%, 0);\r\n}\r\n.qmsg.qmsg-data-position-bottomleft .qmsg-item,\r\n.qmsg.qmsg-data-position-left .qmsg-item,\r\n.qmsg.qmsg-data-position-topleft .qmsg-item {\r\n  text-align: left;\r\n}\r\n.qmsg.qmsg-data-position-bottom .qmsg-item,\r\n.qmsg.qmsg-data-position-center .qmsg-item,\r\n.qmsg.qmsg-data-position-top .qmsg-item {\r\n  text-align: center;\r\n}\r\n.qmsg.qmsg-data-position-bottomright .qmsg-item,\r\n.qmsg.qmsg-data-position-right .qmsg-item,\r\n.qmsg.qmsg-data-position-topright .qmsg-item {\r\n  text-align: right;\r\n}\r\n.qmsg .qmsg-item {\r\n  position: relative;\r\n  padding: 8px;\r\n  text-align: center;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n}\r\n.qmsg .qmsg-item .qmsg-count {\r\n  position: absolute;\r\n  top: -4px;\r\n  left: -4px;\r\n  display: inline-block;\r\n  height: 16px;\r\n  min-width: 16px;\r\n  border-radius: 2px;\r\n  background-color: red;\r\n  color: #fff;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n  -webkit-animation-duration: 0.3s;\r\n  animation-duration: 0.3s;\r\n}\r\n.qmsg .qmsg-item:first-child {\r\n  margin-top: -8px;\r\n}\r\n.qmsg .qmsg-content {\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 10px 12px;\r\n  max-width: 80%;\r\n  min-width: 40px;\r\n  border-radius: 4px;\r\n  background: #fff;\r\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\r\n  text-align: center;\r\n  pointer-events: all;\r\n}\r\n.qmsg .qmsg-content [class^=\"qmsg-content-\"] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.qmsg .qmsg-icon {\r\n  position: relative;\r\n  top: 1px;\r\n  display: inline-block;\r\n  margin-right: 8px;\r\n  color: inherit;\r\n  vertical-align: -0.125em;\r\n  text-align: center;\r\n  text-transform: none;\r\n  font-style: normal;\r\n  font-size: 16px;\r\n  line-height: 0;\r\n  text-rendering: optimizeLegibility;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n.qmsg .qmsg-icon svg {\r\n  display: inline-block;\r\n}\r\n.qmsg .qmsg-content .qmsg-show-more-content {\r\n  display: flex;\r\n  align-items: center;\r\n  white-space: unset;\r\n  overflow: unset;\r\n  text-overflow: unset;\r\n  padding-right: unset;\r\n}\r\n.qmsg .qmsg-content-info .qmsg-icon {\r\n  color: #1890ff;\r\n}\r\n.qmsg .qmsg-icon-close {\r\n  margin: 0;\r\n  margin-left: 8px;\r\n  padding: 0;\r\n  outline: 0;\r\n  border: none;\r\n  background-color: transparent;\r\n  color: rgba(0, 0, 0, 0.45);\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n  transition: color 0.3s;\r\n}\r\n.qmsg .qmsg-icon-close:hover > svg path {\r\n  stroke: #555;\r\n}\r\n.qmsg .qmsg-icon-close.qmsg-show-more-content {\r\n  position: unset;\r\n  overflow: unset;\r\n  padding-left: 6px;\r\n  margin-right: 0;\r\n}\r\n.qmsg .animate-turn {\r\n  animation: MessageTurn 1s linear infinite;\r\n  -webkit-animation: MessageTurn 1s linear infinite;\r\n}\r\n";

    const css_text = "@keyframes MessageTurn {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n  }\r\n  25% {\r\n    -webkit-transform: rotate(90deg);\r\n  }\r\n  50% {\r\n    -webkit-transform: rotate(180deg);\r\n  }\r\n  75% {\r\n    -webkit-transform: rotate(270deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n@-webkit-keyframes MessageTurn {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n  }\r\n  25% {\r\n    -webkit-transform: rotate(90deg);\r\n  }\r\n  50% {\r\n    -webkit-transform: rotate(180deg);\r\n  }\r\n  75% {\r\n    -webkit-transform: rotate(270deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n  }\r\n}\r\n@-webkit-keyframes MessageMoveOut {\r\n  0% {\r\n    max-height: 150px;\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    max-height: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes MessageMoveOut {\r\n  0% {\r\n    max-height: 150px;\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    max-height: 0;\r\n    opacity: 0;\r\n  }\r\n}\r\n@-webkit-keyframes MessageMoveIn {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(-100%);\r\n    transform-origin: 0 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n    transform-origin: 0 0;\r\n  }\r\n}\r\n@keyframes MessageMoveIn {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(-100%);\r\n    transform-origin: 0 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n    transform-origin: 0 0;\r\n  }\r\n}\r\n@-webkit-keyframes MessageShake {\r\n  0%,\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n  25%,\r\n  75% {\r\n    opacity: 0.75;\r\n    transform: translateX(-4px);\r\n  }\r\n  50% {\r\n    opacity: 0.25;\r\n    transform: translateX(4px);\r\n  }\r\n}\r\n@keyframes MessageShake {\r\n  0%,\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateX(0);\r\n  }\r\n  25%,\r\n  75% {\r\n    opacity: 0.75;\r\n    transform: translateX(-4px);\r\n  }\r\n  50% {\r\n    opacity: 0.25;\r\n    transform: translateX(4px);\r\n  }\r\n}\r\n";

    const QmsgCSS = {
        css: `
    ${css_text$1}

    ${css_text}
  `,
        /**
         * 获取CSS元素
         */
        getStyleElement() {
            const $style = document.createElement("style");
            $style.setAttribute("type", "text/css");
            $style.setAttribute("data-type", QmsgDefaultConfig.PLUGIN_NAME);
            QmsgUtils.setSafeHTML($style, QmsgCSS.css);
            return $style;
        },
    };

    /**
     * 每条消息的构造函数
     */
    class QmsgMsg {
        /**
         * setTimeout的id
         */
        timeId = void 0;
        /**
         * 启动时间
         */
        startTime;
        /**
         * 关闭时间
         */
        endTime;
        /**
         * Qmsg的配置
         */
        setting;
        /**
         * uuid
         */
        uuid;
        /**
         * 当前动画状态
         */
        state;
        /**
         * 当前相同消息的数量
         */
        repeatNum;
        /**
         * 主元素
         */
        $Qmsg;
        constructor(config, uuid) {
            this.timeId = void 0;
            this.startTime = Date.now();
            this.endTime = null;
            // this.#setting = Object.assign({}, QmsgStore.DEFAULT, this.option);
            this.setting = QmsgUtils.toDynamicObject(QmsgDefaultConfig.config, config, QmsgDefaultConfig.INS_DEFAULT);
            this.uuid = uuid;
            this.state = "opening";
            this.$Qmsg = document.createElement("div");
            this.repeatNum = 1;
            this.detectionType();
            this.init();
            const consoleLogContent = typeof this.setting.consoleLogContent === "function"
                ? this.setting.consoleLogContent(this)
                : this.setting.consoleLogContent;
            if (consoleLogContent) {
                // 控制台输出content
                console.log(this.setting.content);
            }
            if (typeof this.setting.afterRender === "function") {
                this.setting.afterRender(this);
            }
        }
        /**
         * 获取当前配置
         */
        getSetting() {
            return this.setting;
        }
        /**
         * 获取当前相同的数量
         */
        getRepeatNum() {
            return this.repeatNum;
        }
        /**
         * 设置repeatNum值
         * @param num 重复的数量
         */
        setRepeatNum(num) {
            this.repeatNum = num;
        }
        /**
         * 设置repeatNum自增
         */
        setRepeatNumIncreasing() {
            this.repeatNum++;
        }
        /**
         * 初始化元素
         */
        init() {
            const QmsgContext = this;
            if (this.setting.customClass && typeof this.setting.customClass === "string") {
                /* 设置自定义类名 */
                this.$Qmsg.classList.add(this.setting.customClass);
            }
            // 设置svg图标
            const $svg = QmsgIcon[this.setting.type || "info"];
            let contentClassName = QmsgUtils.getNameSpacify("content-" + this.setting.type || "info");
            if (this.setting.showClose) {
                // 显示 关闭图标
                contentClassName += " " + QmsgUtils.getNameSpacify("content-with-close");
            }
            // 内容兼容处理
            const content = this.setting.content || "";
            // 关闭图标 自定义额外className
            let extraCloseIconClassName = "";
            // 关闭图标svg
            const $closeSvg = QmsgHeaderCloseIcon;
            if (this.setting.showMoreContent) {
                // 显示更多内容
                contentClassName += "qmsg-show-more-content";
                extraCloseIconClassName += "qmsg-show-more-content";
            }
            let $closeIcon = "";
            if (this.setting.showClose) {
                /* 显示右上角的关闭图标按钮 */
                $closeIcon = /*html*/ `<i class="qmsg-icon qmsg-icon-close ${extraCloseIconClassName}">${$closeSvg}</i>`;
            }
            /* 内容 */
            const $content = document.createElement("span");
            const $positionClassName = QmsgUtils.getNameSpacify("data-position", this.setting.position.toLowerCase());
            const isHTML = this.setting.isHTML;
            if (isHTML) {
                /* 内容是html */
                QmsgUtils.setSafeHTML($content, content);
            }
            else {
                /* 内容是纯文本 */
                $content.innerText = content;
            }
            if (this.setting.isLimitWidth) {
                /* 限制宽度 */
                let limitWidthNum = this.setting.limitWidthNum;
                if (typeof limitWidthNum === "string") {
                    if (QmsgUtils.isNumber(limitWidthNum)) {
                        limitWidthNum = limitWidthNum + "px";
                    }
                }
                else {
                    limitWidthNum = limitWidthNum.toString() + "px";
                }
                $content.style.maxWidth = limitWidthNum;
                $content.style.width = limitWidthNum;
                /* 设置换行 */
                if (this.setting.limitWidthWrap === "no-wrap") {
                    /* 禁止换行 */
                    $content.style.whiteSpace = "nowrap";
                }
                else if (this.setting.limitWidthWrap === "ellipsis") {
                    /* 禁止换行且显示省略号 */
                    $content.style.whiteSpace = "nowrap";
                    $content.style.overflow = "hidden";
                    $content.style.textOverflow = "ellipsis";
                }
                else if (this.setting.limitWidthWrap === "wrap") {
                    /* 允许换行 */
                    /* 默认的 */
                    $content.style.whiteSpace = "";
                }
            }
            QmsgUtils.setSafeHTML(this.$Qmsg, 
            /*html*/ `
			<div class="qmsg-content">
				<div class="${contentClassName}">
				${this.setting.showIcon ? `<i class="qmsg-icon">${$svg}</i>` : ""}
					${$content.outerHTML}
					${$closeIcon}
				</div>
			</div>
			`);
            /** 内容容器 */
            const $contentContainer = this.$Qmsg.querySelector(".qmsg-content");
            this.$Qmsg.classList.add(QmsgUtils.getNameSpacify("item"));
            this.$Qmsg.setAttribute(QmsgUtils.getNameSpacify("uuid"), this.uuid);
            /** 总根元素 */
            let $shadowContainer;
            /** 根元素 */
            let $shadowRoot;
            /** 容器包裹的元素 */
            let $wrapper;
            $shadowContainer = document.querySelector(".qmsg-shadow-container");
            $shadowRoot = this.setting.useShadowRoot ? $shadowContainer?.shadowRoot : $shadowContainer;
            if (!$shadowContainer) {
                // 页面中不存在ShadowRoot容器元素
                // 添加新增的ShadowRoot容器元素
                $shadowContainer = document.createElement("div");
                $shadowContainer.className = "qmsg-shadow-container";
                if (this.setting.useShadowRoot) {
                    $shadowRoot = $shadowContainer.attachShadow({
                        mode: this.setting.shadowRootMode,
                    });
                }
                else {
                    $shadowRoot = $shadowContainer;
                }
                $shadowRoot.appendChild(QmsgCSS.getStyleElement());
                if (this.setting.style != null) {
                    // 插入自定义的style
                    // 这里需要插入到每一条的Qmsg内，以便移除实例时把style也移除
                    const __$ownStyle__ = document.createElement("style");
                    __$ownStyle__.setAttribute("type", "text/css");
                    __$ownStyle__.setAttribute("data-id", this.uuid);
                    QmsgUtils.setSafeHTML(__$ownStyle__, this.setting.style);
                    $contentContainer.insertAdjacentElement("afterend", __$ownStyle__);
                }
                this.setting.parent.appendChild($shadowContainer);
            }
            if ($shadowRoot == null) {
                throw new Error("QmsgInst " + QmsgDefaultConfig.PLUGIN_NAME + " $shadowRoot is null");
            }
            $wrapper = $shadowRoot.querySelector(`.${QmsgDefaultConfig.NAMESPACE}.${$positionClassName}`);
            if (!$wrapper) {
                $wrapper = document.createElement("div");
                $wrapper.classList.add(QmsgDefaultConfig.NAMESPACE, QmsgUtils.getNameSpacify("wrapper"), QmsgUtils.getNameSpacify("is-initialized"), $positionClassName);
                $shadowRoot.appendChild($wrapper);
            }
            if (this.setting.showReverse) {
                $wrapper.style.flexDirection = "column-reverse";
            }
            else {
                $wrapper.style.flexDirection = "column";
            }
            let zIndex = this.setting.zIndex;
            if (typeof zIndex === "function") {
                zIndex = zIndex();
            }
            if (!isNaN(zIndex)) {
                $wrapper.style.zIndex = zIndex.toString();
            }
            $wrapper.appendChild(this.$Qmsg);
            this.setState(this.$Qmsg, "opening");
            if (this.setting.showClose) {
                /* 关闭按钮绑定点击事件 */
                const $closeIcon = this.$Qmsg.querySelector(".qmsg-icon-close");
                if ($closeIcon) {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    $closeIcon.addEventListener("click", (_event) => {
                        QmsgContext.close();
                    });
                }
            }
            /* 监听动画完成 */
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const animationendEvent = (_event) => {
                const animationNameValue = QmsgAnimation.getStyleAnimationNameValue(QmsgContext.$Qmsg);
                if (animationNameValue === QmsgAnimation.$state.closing) {
                    // 当前触发的是关闭
                    QmsgContext.endTime = Date.now();
                    QmsgContext.destroy();
                }
                QmsgAnimation.setStyleAnimationName(QmsgContext.$Qmsg);
            };
            QmsgAnimation.$name.endNameList.forEach(function (animationendName) {
                QmsgContext.$Qmsg.addEventListener(animationendName, animationendEvent);
            });
            /* 自动关闭 */
            if (this.setting.autoClose && this.setting.listenEventToPauseAutoClose) {
                // 鼠标|触摸滑入时，清除自动关闭的定时器
                // 鼠标|触摸滑出时，重新设置定时器
                this.resetAutoCloseTimer();
                /**
                 * 鼠标滑入
                 *
                 * + 清除定时器
                 * + 清除开始时间
                 * + 清除结束时间
                 */
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const enterEvent = (_event) => {
                    this.clearAutoCloseTimer();
                };
                /** 鼠标滑出，重启定时器，创建新的开始时间和timeId */
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const leaveEvent = (_event) => {
                    if (this.timeId != null) {
                        // 似乎enterEvent函数未正确调用？
                        console.warn("QmsgInst timeId is not null，mouseenter may be not first trigger，timeId：" + this.timeId);
                        return;
                    }
                    this.startAutoCloseTimer();
                };
                let isRemoveMouseEvent = false;
                this.$Qmsg.addEventListener("mouseenter", enterEvent);
                this.$Qmsg.addEventListener("mouseleave", leaveEvent);
                this.$Qmsg.addEventListener("touchstart", (evt) => {
                    // 由于移动端不支持mouseout且会触发mouseenter
                    // 那么需要移除该监听
                    if (!isRemoveMouseEvent) {
                        isRemoveMouseEvent = true;
                        this.$Qmsg.removeEventListener("mouseenter", enterEvent);
                        this.$Qmsg.removeEventListener("mouseleave", leaveEvent);
                    }
                    enterEvent();
                });
                this.$Qmsg.addEventListener("touchend", leaveEvent);
                this.$Qmsg.addEventListener("touchcancel", leaveEvent);
            }
        }
        /**
         * 对timeout进行检测并转换
         * 当timeout为string时，转换为number
         * timeout必须在规定范围内
         */
        detectionType() {
            if (this.setting.timeout != null && typeof this.setting.timeout === "string") {
                this.setting.timeout = parseInt(this.setting.timeout);
            }
            if (isNaN(this.setting.timeout)) {
                this.setting.timeout = QmsgDefaultConfig.config.timeout;
            }
            if (!(this.setting.timeout != null &&
                parseInt(this.setting.timeout.toString()) >= 0 &&
                parseInt(this.setting.timeout.toString()) <= Number.MAX_VALUE)) {
                this.setting.timeout = QmsgDefaultConfig.config.timeout;
            }
            if (typeof this.setting.zIndex === "function") {
                this.setting.zIndex = this.setting.zIndex();
            }
            if (this.setting.zIndex != null && typeof this.setting.zIndex === "string") {
                this.setting.zIndex = parseInt(this.setting.zIndex);
            }
            if (isNaN(this.setting.zIndex)) {
                this.setting.zIndex =
                    typeof QmsgDefaultConfig.config.zIndex === "function"
                        ? QmsgDefaultConfig.config.zIndex()
                        : QmsgDefaultConfig.config.zIndex;
            }
        }
        /**
         * 设置元素动画状态 开启/关闭
         * @param QmsgMsg
         * @param state
         */
        setState(element, state) {
            if (!state || !QmsgAnimation.$state[state])
                return;
            this.state = state;
            QmsgAnimation.setStyleAnimationName(element, QmsgAnimation.$state[state]);
        }
        /**
         * 设置消息数量统计
         */
        setMsgCount() {
            const countClassName = QmsgUtils.getNameSpacify("count");
            const wrapperClassName = `div.${QmsgUtils.getNameSpacify("data-position", this.setting.position.toLowerCase())} [class^="qmsg-content-"]`;
            const $content = this.$Qmsg.querySelector(wrapperClassName);
            if (!$content) {
                throw new Error("QmsgInst $content is null");
            }
            let $count = $content.querySelector("." + countClassName);
            if (!$count) {
                $count = document.createElement("span");
                $count.classList.add(countClassName);
                $content.appendChild($count);
            }
            // 获取重复显示内容的实例数量
            const repeatNum = this.getRepeatNum();
            QmsgUtils.setSafeHTML($count, repeatNum.toString());
            QmsgAnimation.setStyleAnimationName($count);
            QmsgAnimation.setStyleAnimationName($count, "MessageShake");
            this.resetAutoCloseTimer();
        }
        /**
         * 清除旧的自动关闭定时器
         */
        clearAutoCloseTimer() {
            /* 重置定时器 */
            QmsgUtils.clearTimeout(this.timeId);
            this.timeId = void 0;
            this.startTime = null;
            this.endTime = null;
        }
        /**
         * 开始自动关闭定时器
         */
        startAutoCloseTimer() {
            if (this.setting.autoClose && this.setting.listenEventToPauseAutoClose) {
                this.startTime = Date.now();
                this.endTime = null;
                this.timeId = QmsgUtils.setTimeout(() => {
                    this.close();
                }, this.setting.timeout);
            }
        }
        /**
         * 重置自动关闭定时器（会自动清理旧的定时器）
         */
        resetAutoCloseTimer() {
            this.clearAutoCloseTimer();
            this.startAutoCloseTimer();
        }
        /**
         * 关闭Qmsg（会触发动画）
         */
        close() {
            this.setState(this.$Qmsg, "closing");
            if (QmsgAnimation.CAN_ANIMATION) {
                /* 支持动画 */
                QmsgInstStorage.remove(this.uuid);
            }
            else {
                /* 不支持动画 */
                this.destroy();
            }
            const onCloseCallBack = this.setting.onClose;
            if (onCloseCallBack && typeof onCloseCallBack === "function") {
                onCloseCallBack.call(this);
            }
        }
        /**
         * 销毁Qmsg
         */
        destroy() {
            this.endTime = Date.now();
            this.$Qmsg.remove();
            QmsgUtils.clearTimeout(this.timeId);
            QmsgInstStorage.remove(this.uuid);
            this.timeId = void 0;
        }
        /**
         * 获取内容元素
         */
        get $content() {
            const $content = this.$Qmsg.querySelector("div[class^=qmsg-content-] > span");
            if (!$content) {
                throw new Error("QmsgInst $content is null");
            }
            return $content;
        }
        /**
         * 设置内容文本
         */
        setText(text) {
            const $content = this.$content;
            $content.innerText = text;
            this.setting.content = text;
        }
        /**
         * 设置内容超文本
         */
        setHTML(text) {
            const $content = this.$content;
            QmsgUtils.setSafeHTML($content, text);
            this.setting.content = text;
        }
    }

    /**
     * 通过配置信息 来判断是否为同一条消息,并返回消息实例
     * @param config 配置项
     */
    function QmsgInstHandler(config = {}) {
        const optionString = JSON.stringify(config);
        /* 寻找已生成的实例是否存在配置相同的 */
        let findQmsgItemInfo = QmsgInstStorage.insInfoList.find((item) => {
            return item.config === optionString;
        });
        let qmsgInst = findQmsgItemInfo?.instance;
        if (qmsgInst == null) {
            /* 不存在，创建个新的 */
            const uuid = QmsgUtils.getUUID();
            const qmsgInstStorageInfo = {
                uuid: uuid,
                config: optionString,
                instance: new QmsgMsg(config, uuid),
            };
            QmsgInstStorage.insInfoList.push(qmsgInstStorageInfo);
            const QmsgListLength = QmsgInstStorage.insInfoList.length;
            const maxNums = qmsgInstStorageInfo.instance.getSetting().maxNums;
            /**
             * 关闭多余的消息
             */
            if (QmsgListLength > maxNums) {
                for (let index = 0; index < QmsgListLength - maxNums; index++) {
                    const item = QmsgInstStorage.insInfoList[index];
                    item && item.instance.getSetting().autoClose && item.instance.close();
                }
            }
            findQmsgItemInfo = qmsgInstStorageInfo;
            qmsgInst = qmsgInstStorageInfo.instance;
        }
        else {
            if (!qmsgInst.getRepeatNum()) {
                qmsgInst.setRepeatNum(2);
            }
            else {
                if (qmsgInst.getRepeatNum() >= 99) ;
                else {
                    qmsgInst.setRepeatNumIncreasing();
                }
            }
            qmsgInst.setMsgCount();
        }
        if (qmsgInst) {
            qmsgInst.$Qmsg.setAttribute("data-count", qmsgInst?.getRepeatNum().toString());
        }
        else {
            throw new Error("QmsgInst is null");
        }
        return qmsgInst;
    }

    const QmsgEvent = {
        visibilitychange: {
            eventConfig: {
                /**
                 * 添加visibilitychange事件监听
                 * 当页面切换时，如果切换前的页面存在Qmsg实例且未关闭，切换后，页面活跃度会降低，导致setTimeout/setInterval失效或丢失事件
                 * 监听visibilitychange，判断切换回来时，如果当前时间-开始时间大于timeout，则关闭
                 * 如果设置了动画，使用close，否则使用destroy
                 */
                callback() {
                    if (document.visibilityState === "visible") {
                        // 回到页面
                        for (let index = 0; index < QmsgInstStorage.insInfoList.length; index++) {
                            const qmsgStorageItem = QmsgInstStorage.insInfoList[index];
                            const qmsgInst = qmsgStorageItem.instance;
                            const qmsgSetting = qmsgInst.getSetting();
                            const now = Date.now();
                            if (
                            // loading类型不被自动关闭
                            qmsgSetting.type !== "loading" &&
                                // 必须为自动关闭
                                qmsgSetting.autoClose &&
                                // 存在启动时间，不存在结束时间（未关闭）
                                typeof qmsgInst.endTime !== "number" &&
                                typeof qmsgInst.startTime === "number" &&
                                typeof qmsgSetting.timeout === "number" &&
                                now - qmsgInst.startTime >= qmsgSetting.timeout) {
                                // 超出时间，关闭
                                qmsgInst.close();
                            }
                        }
                    }
                },
                option: {
                    capture: true,
                },
            },
            /**
             * 监听事件
             */
            addEvent() {
                if ("visibilityState" in document) {
                    document.addEventListener("visibilitychange", QmsgEvent.visibilitychange.eventConfig.callback, QmsgEvent.visibilitychange.eventConfig.option);
                }
                else {
                    console.error("Qmsg addEvent visibilityState not support");
                }
            },
            /**
             * 移除监听事件
             */
            removeEvent() {
                document.removeEventListener("visibilitychange", QmsgEvent.visibilitychange.eventConfig.callback, QmsgEvent.visibilitychange.eventConfig.option);
            },
        },
    };

    const version = "1.5.1";

    /* 执行兼容 */
    CompatibleProcessing();
    class Qmsg {
        /** 数据 */
        $data;
        /**
         * 事件工具类
         */
        $eventUtils;
        /**
         * 实例化
         * @param config 配置
         */
        constructor(config) {
            this.$data = {
                version: version,
                config: QmsgDefaultConfig,
                icon: QmsgIcon,
                instanceStorage: QmsgInstStorage,
            };
            this.$eventUtils = QmsgEvent;
            this.$eventUtils.visibilitychange.addEvent();
            this.config(config);
        }
        /**
         * 修改默认配置
         * @param config 配置
         */
        config(config) {
            if (config == null)
                return;
            if (typeof config !== "object")
                return;
            // @ts-ignore
            QmsgDefaultConfig.INS_DEFAULT = null;
            // @ts-ignore
            QmsgDefaultConfig.INS_DEFAULT = config;
        }
        info(content, config) {
            const params = QmsgUtils.mergeArgs(content, config);
            params.type = "info";
            return QmsgInstHandler.call(this, params);
        }
        warning(content, config) {
            const params = QmsgUtils.mergeArgs(content, config);
            params.type = "warning";
            return QmsgInstHandler.call(this, params);
        }
        success(content, config) {
            const params = QmsgUtils.mergeArgs(content, config);
            params.type = "success";
            return QmsgInstHandler.call(this, params);
        }
        error(content, config) {
            const params = QmsgUtils.mergeArgs(content, config);
            params.type = "error";
            return QmsgInstHandler.call(this, params);
        }
        loading(content, config) {
            const params = QmsgUtils.mergeArgs(content, config);
            params.type = "loading";
            params.autoClose = false;
            return QmsgInstHandler.call(this, params);
        }
        /**
         * 根据uuid删除Qmsg实例和元素
         * @param uuid 唯一值
         */
        remove(uuid) {
            QmsgInstStorage.remove(uuid);
        }
        /**
         * 关闭当前Qmsg创建的所有的实例
         */
        closeAll() {
            for (let index = QmsgInstStorage.insInfoList.length - 1; index >= 0; index--) {
                const item = QmsgInstStorage.insInfoList[index];
                item && item.instance && item.instance.close();
            }
        }
    }
    const qmsg = new Qmsg();

    return qmsg;

})();
//# sourceMappingURL=index.iife.js.map
