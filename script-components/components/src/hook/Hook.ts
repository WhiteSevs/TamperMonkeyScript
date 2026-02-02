import { unsafeWindow } from "ViteGM";
import { log, OriginPrototype } from "../base.env";

/**
 * @returns
 * + void 不做处理
 * + false 不添加listener
 * + Function 替换原有的listener
 */
type HookEventListenerHandler<T> = (
  target: T,
  eventName: string,
  listener: Function,
  option: boolean | AddEventListenerOptions | undefined
) => Function | void | false;

/**
 * @returns
 * + void 不做处理
 * + false 阻止执行
 * + Function 替换原有的fn
 */
type HookSetTimeoutHandler = (fn: Function, timeout: number | undefined) => false | void | Function;

/**
 * @returns
 * + void 不做处理
 * + false 阻止执行
 * + Function 替换原有的fn
 */
type HookSetIntervalHandler = (fn: Function, intervalTime: number | undefined) => false | void | Function;

type HookFunctionApplyHandler = {
  /**
   * @returns
   * + void 不做处理
   * + object 替换所返回的内容
   * + false 阻止调用生成原始结果
   */
  paramsHandler?: (
    /**
     * 函数
     */
    fn: Function,
    /**
     * 函数的this对象
     */
    thisArg: any,
    /**
     * 函数的入参列表
     */
    argArray: any[],
    /**
     * arguments
     */
    args: any[]
  ) => void | {
    /**
     * 替换的函数参数信息
     */
    args?: {
      /**
       * 函数
       */
      fn?: Function;
      /**
       * 函数的this对象
       */
      thisArg?: any;
      /**
       * 函数的入参列表
       */
      argArray?: any[];
    };
    /**
     * 阻止调用生成原始结果
     * @default false
     */
    preventDefault?: boolean;
    /**
     * 替换函数返回的内容
     */
    result?: any;
  };
  /**
   * 结果处理器
   * @returns
   */
  returnsHandler?: (
    /**
     * 函数
     */
    fn: Function,
    /**
     * 函数的this对象
     */
    thisArg: any,
    /**
     * 函数的入参列表
     */
    argArray: any[],
    /**
     * 执行call后的结果
     */
    result: any,
    /**
     * arguments
     */
    args: any[]
  ) => {
    /**
     * 需要把call调用后的结果替换成的值
     */
    result: any;
  } | void;
};

type HookFunctionCallHandler = HookFunctionApplyHandler;

/**
 * @returns
 * + void 不做处理
 * + object 替换所返回的内容
 */
type HookObjectDefinePropertyHandler = (
  target: any,
  property: PropertyKey,
  attributes: PropertyDescriptor & ThisType<any>
) => {
  target: any;
  key: PropertyKey;
  attributes: PropertyDescriptor & ThisType<any>;
} | void;

const Hook = {
  $data: {
    /** 存储 document.addEventListener 的hook实例 */
    document_addEventListener: <HookEventListenerHandler<Document>[]>[],
    /** 存储 Element.prototype.addEventListener 的hook实例 */
    element_addEventListener: <HookEventListenerHandler<Element>[]>[],
    /** 存储 setTimeout 的hook实例 */
    setTimeout: <HookSetTimeoutHandler[]>[],
    /** 存储 setInterval 的hook实例 */
    setInterval: <HookSetIntervalHandler[]>[],
    /** 存储 Function.prototype.apply 的hook实例 */
    function_apply: <HookFunctionApplyHandler[]>[],
    /** 存储 Function.prototype.call 的hook实例 */
    function_call: <HookFunctionCallHandler[]>[],
    /** 存储 Object.defineProperty 的hook实例 */
    defineProperty: <HookObjectDefinePropertyHandler[]>[],
  },
  /**
   * 劫持 document.addEventListener
   * @param handler 如果返回Function类型，则替换为返回的函数，如果返回false，则劫持监听的回调函数
   */
  document_addEventListener(handler: HookEventListenerHandler<Document>) {
    this.$data.document_addEventListener.push(handler);
    log.info("document.addEventListener hook新增劫持判断回调");
    if (this.$data.document_addEventListener.length > 1) {
      // 2,3,...
      return;
    }
    const that = this;
    /** 存储回调函数 */
    const weakMap = new WeakMap<
      Function,
      {
        eventName: string;
        fn: Function;
        options: AddEventListenerOptions | boolean | undefined;
      }
    >();

    const originAddEventListener = unsafeWindow.document.addEventListener;
    const originRemoveEventListener = unsafeWindow.document.removeEventListener;
    unsafeWindow.document.addEventListener = function (this: Document, ...args: any[]) {
      /** 目标元素 */
      const target = this;
      /** 事件名 */
      const eventName = args[0] as string;
      /** 回调函数 */
      const listener = args[1] as Function;
      /** 监听配置 */
      const options = args[2] as boolean | AddEventListenerOptions | undefined;

      for (let index = 0; index < that.$data.document_addEventListener.length; index++) {
        const callback = that.$data.document_addEventListener[index];
        const result = Reflect.apply(callback, this, [target, eventName, listener, options]);
        if (typeof result === "function") {
          args[1] = result;
          weakMap.set(listener, {
            eventName: eventName,
            fn: result,
            options: options,
          });
          break;
        } else if (typeof result === "boolean" && !result) {
          return;
        }
      }
      return Reflect.apply(originAddEventListener, this, args);
    };
    unsafeWindow.document.removeEventListener = function (this: HTMLElement, ...args: any[]) {
      /** 事件名 */
      const eventName = args[0] as string;
      /** 回调函数 */
      const listener = args[1] as Function;
      /** 监听配置 */
      const options = args[2] as boolean | EventListenerOptions | undefined;
      if (weakMap.has(listener)) {
        const { eventName: __eventName__, fn: __listener__, options: __options__ } = weakMap.get(listener)!;
        let flag = false;
        if (eventName === __eventName__) {
          if (typeof options === "boolean" && options === __options__) {
            flag = true;
          } else if (
            typeof options === "object" &&
            typeof __options__ === "object" &&
            options["capture"] === __options__["capture"]
          ) {
            flag = true;
          } else if (options == options) {
            flag = true;
          }
        }
        if (flag) {
          args[1] = __listener__;
        }
      }
      return Reflect.apply(originRemoveEventListener, this, args);
    };
  },
  /**
   * 劫持 Element.property.addEventListener
   * @param handler 如果返回Function类型，则替换为返回的函数，如果返回false，则劫持监听的回调函数
   */
  element_addEventListener(handler: HookEventListenerHandler<Element>) {
    this.$data.element_addEventListener.push(handler);
    log.info("Element.prototype.addEventListener hook新增劫持判断回调");
    if (this.$data.element_addEventListener.length > 1) {
      // 2,3,...
      return;
    }
    const that = this;

    /** 存储回调函数 */
    const weakMap = new WeakMap<
      Function,
      {
        eventName: string;
        fn: Function;
        options: AddEventListenerOptions | boolean | undefined;
      }
    >();

    const originAddEventListener = unsafeWindow.Element.prototype.addEventListener;
    const originRemoveEventListener = unsafeWindow.Element.prototype.removeEventListener;
    unsafeWindow.Element.prototype.addEventListener = function (this: HTMLElement, ...args: any[]) {
      /** 目标元素 */
      const target = this;
      /** 事件名 */
      const eventName = args[0] as string;
      /** 回调函数 */
      const listener = args[1] as Function;
      /** 监听配置 */
      const options = args[2] as boolean | AddEventListenerOptions | undefined;

      for (let index = 0; index < that.$data.element_addEventListener.length; index++) {
        const callback = that.$data.element_addEventListener[index];
        const result = Reflect.apply(callback, this, [target, eventName, listener, options]);
        if (typeof result === "function") {
          args[1] = result;
          weakMap.set(listener, {
            eventName: eventName,
            fn: result,
            options: options,
          });
          break;
        } else if (typeof result === "boolean" && !result) {
          return;
        }
      }
      return Reflect.apply(originAddEventListener, this, args);
    };
    unsafeWindow.Element.prototype.removeEventListener = function (this: HTMLElement, ...args: any[]) {
      /** 事件名 */
      const eventName = args[0] as string;
      /** 回调函数 */
      const listener = args[1] as Function;
      /** 监听配置 */
      const options = args[2] as boolean | EventListenerOptions | undefined;
      if (weakMap.has(listener)) {
        const { eventName: __eventName__, fn: __listener__, options: __options__ } = weakMap.get(listener)!;
        let flag = false;
        if (__eventName__ === eventName) {
          if (typeof options === "boolean" && options === __options__) {
            flag = true;
          } else if (
            typeof options === "object" &&
            typeof __options__ === "object" &&
            options["capture"] === __options__["capture"]
          ) {
            flag = true;
          } else if (options == __options__) {
            flag = true;
          }
        }
        if (flag) {
          args[1] = __listener__;
        }
      }
      return Reflect.apply(originRemoveEventListener, this, args);
    };
  },
  /**
   * 劫持 window.setTimeout
   *
   * @param handler
   */
  setTimeout(handler: HookSetTimeoutHandler) {
    this.$data.setTimeout.push(handler);
    log.info("window.setTimeout hook新增劫持");
    if (this.$data.setTimeout.length > 1) {
      return;
    }
    const that = this;
    const originSetTimeout = unsafeWindow.setTimeout;
    unsafeWindow.setTimeout = function (this: any, ...args: any[]): any {
      const fn = args[0];
      const timeout = args[1];
      for (let index = 0; index < that.$data.setTimeout.length; index++) {
        const item = that.$data.setTimeout[index];
        const result = item(fn, timeout);
        if (typeof result === "boolean" && !result) {
          return;
        }
        if (typeof result === "function") {
          args[0] = result;
          break;
        }
      }
      return Reflect.apply(originSetTimeout, this, args);
    };
  },
  /**
   * 劫持 window.setInterval
   * @param handler
   */
  setInterval(handler: HookSetIntervalHandler) {
    this.$data.setInterval.push(handler);
    log.info("window.setInterval hook新增劫持");
    if (this.$data.setInterval.length > 1) {
      return;
    }
    const that = this;
    const originSetInterval = unsafeWindow.setInterval;
    unsafeWindow.setInterval = function (this: any, ...args: any[]): any {
      const fn = args[0];
      const timeout = args[1];
      for (let index = 0; index < that.$data.setInterval.length; index++) {
        const item = that.$data.setInterval[index];
        const result = item(fn, timeout);
        if (typeof result === "boolean" && !result) {
          return;
        }
        if (typeof result === "function") {
          args[0] = result;
          break;
        }
      }
      return Reflect.apply(originSetInterval, this, args);
    };
  },
  /**
   * 劫持 Function.prototype.apply
   * @param handler
   */
  function_apply(handler: HookFunctionApplyHandler) {
    this.$data.function_apply.push(handler);
    log.info("Function.prototype.apply hook新增劫持");
    if (this.$data.function_apply.length > 1) {
      return;
    }
    const that = this;
    const originApply = unsafeWindow.Function.prototype.apply;
    unsafeWindow.Function.prototype.apply = function (...args: [thisArg: any, argArray?: any]): any {
      const thisArg = args[0];
      const argArray = args[1] as any[];
      let fn = this;
      for (let index = 0; index < that.$data.function_apply.length; index++) {
        const item = that.$data.function_apply[index];
        if (typeof item.paramsHandler === "function") {
          const handlerResult = item.paramsHandler(fn, thisArg, argArray, args);
          if (handlerResult != null) {
            if (handlerResult.args) {
              if ("thisArg" in handlerResult.args) {
                args[0] = handlerResult.args.thisArg;
              }
              if ("argArray" in handlerResult.args) {
                args[1] = handlerResult.args.argArray;
              }
              if (typeof handlerResult.args.fn === "function") {
                fn = handlerResult.args.fn;
              }
            }
            if (handlerResult.preventDefault) {
              if ("result" in handlerResult) {
                return handlerResult.result;
              }
              return;
            }
            break;
          }
        }
      }
      let result = originApply.call(fn, ...args);
      for (let index = 0; index < that.$data.function_apply.length; index++) {
        const item = that.$data.function_apply[index];
        if (typeof item.returnsHandler === "function") {
          let handlerResult = item.returnsHandler(fn, args[0], args[1], result, args);
          if (handlerResult != null && "result" in handlerResult) {
            result = handlerResult.result;
          }
        }
      }
      return result;
    };
  },
  /**
   * 劫持 Function.prototype.call
   * @param handler
   */
  function_call(handler: HookFunctionCallHandler) {
    this.$data.function_call.push(handler);
    log.info("Function.prototype.call hook新增劫持");
    if (this.$data.function_call.length > 1) {
      return;
    }
    const that = this;
    const originCall = unsafeWindow.Function.prototype.call;
    unsafeWindow.Function.prototype.call = function (...args: [thisArg: any, ...argArray: any[]]) {
      const thisArg = args[0];
      const argArray = args.slice(1);
      let fn = this;
      for (let index = 0; index < that.$data.function_call.length; index++) {
        const item = that.$data.function_call[index];
        if (typeof item.paramsHandler === "function") {
          const handlerResult = item.paramsHandler(fn, thisArg, argArray, args);
          if (handlerResult != null) {
            if (handlerResult.args) {
              if ("thisArg" in handlerResult.args) {
                args[0] = handlerResult.args.thisArg;
              }
              if ("argArray" in handlerResult.args) {
                args.splice(1, argArray.length, ...handlerResult.args.argArray!);
              }
              if (typeof handlerResult.args.fn === "function") {
                fn = handlerResult.args.fn;
              }
            }
            if (handlerResult.preventDefault) {
              if ("result" in handlerResult) {
                return handlerResult.result;
              }
              return;
            }
            break;
          }
        }
      }
      let result = originCall.apply(fn, args);
      for (let index = 0; index < that.$data.function_call.length; index++) {
        const item = that.$data.function_call[index];
        if (typeof item.returnsHandler === "function") {
          const handlerResult = item.returnsHandler(fn, args[0], args[1], result, args);
          if (handlerResult != null && "result" in handlerResult) {
            result = handlerResult.result;
          }
        }
      }
      return result;
    };
  },
  /**
   * 劫持 Object.defineProperty
   * @package handler
   */
  defineProperty(handler: HookObjectDefinePropertyHandler) {
    this.$data.defineProperty.push(handler);
    log.info("Object.defineProperty hook新增劫持");
    if (this.$data.defineProperty.length > 1) {
      return;
    }
    const that = this;
    const originDefineProperty = unsafeWindow.Object.defineProperty;
    unsafeWindow.Object.defineProperty = function (this: any, ...args: any[]): any {
      const target = args[0];
      const key = args[1];
      const attributes = args[2];
      for (let index = 0; index < that.$data.defineProperty.length; index++) {
        const item = that.$data.defineProperty[index];
        const result = item(target, key, attributes);
        if (result != null) {
          args[0] = result.target;
          args[1] = result.key;
          args[2] = result.attributes;
          break;
        }
      }
      return Reflect.apply(originDefineProperty, this, args);
    };
  },
  /**
   * 劫持webpack
   * @param webpackName 当前全局变量的webpack名
   * @param mainCoreData 需要劫持的webpack的顶部core，或者自定义函数判断是否是需要处理的core
   * 例如：(window.webpackJsonp = window.webpackJsonp || []).push([["core:0"],{}])
   * 此时mainCoreData是["core:0"]
   * @param handler 如果mainCoreData匹配上，则调用此回调函数，替换的话把传入的值进行处理后再返回它就行
   */
  window_webpack(
    webpackName = "webpackJsonp",
    mainCoreData: (string | number)[] | ((coreId: (string | number)[]) => boolean),
    handler: (exports: any) => any
  ) {
    let webpackList: [] | undefined = void 0 as any;
    OriginPrototype.Object.defineProperty(unsafeWindow, webpackName, {
      get() {
        return webpackList;
      },
      set(value) {
        // log.success("成功劫持webpack，当前webpack名：" + webpackName);
        webpackList = value;
        const originPush = value.push;
        value.push = function (this: any, ...args: { [x: string]: (..._args: any[]) => any }[][]) {
          const __mainCoreData = args[0][0];
          let isCoreIdMatched = false;
          if (typeof mainCoreData === "function") {
            // @ts-expect-error
            const ret = mainCoreData(__mainCoreData);
            if (typeof ret === "boolean") {
              isCoreIdMatched = ret;
            }
          } else {
            // @ts-expect-error
            isCoreIdMatched = mainCoreData == __mainCoreData;
            if (!isCoreIdMatched) {
              if (Array.isArray(mainCoreData) && Array.isArray(__mainCoreData)) {
                isCoreIdMatched = JSON.stringify(mainCoreData) === JSON.stringify(__mainCoreData);
              }
            }
          }
          if (isCoreIdMatched) {
            const exportObj = args[0][1];
            const keys = OriginPrototype.Object.keys(exportObj);
            keys.forEach((keyName) => {
              const fn = exportObj[keyName];
              if (typeof fn === "function") {
                args[0][1][keyName] = function (this: any, ...args2: any[]) {
                  const result = fn.call(this, ...args2);
                  const exports = args2[0];
                  args2[0] = handler(exports);
                  return result;
                };
              }
            });
          }
          return originPush.call(this, ...args);
        };
      },
    });
  },
};

export { Hook };
