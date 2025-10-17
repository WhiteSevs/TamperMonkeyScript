import { log } from "../base.env";
import { unsafeWindow } from "ViteGM";

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
    fn: Function,
    thisArg: any,
    argArray: any[]
  ) => void | {
    /**
     * 函数参数信息
     */
    args?: {
      fn: Function;
      thisArg: any;
      argArray: any[];
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
   * @returns
   */
  returnsHandler?: (
    fn: Function,
    thisArg: any,
    argArray: any[],
    result: any
  ) => {
    result: any;
  };
};

type HookFunctionCallHandler = {
  /**
   * @returns
   * + void 不做处理
   * + object 替换所返回的内容
   * + false 阻止调用生成原始结果
   */
  paramsHandler?: (
    fn: Function,
    thisArg: any,
    argArray: any[]
  ) => void | {
    /**
     * 函数参数信息
     */
    args?: {
      fn: Function;
      thisArg: any;
      argArray: any[];
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
   * @returns
   */
  returnsHandler?: (
    fn: Function,
    thisArg: any,
    argArray: any[],
    result: any
  ) => {
    result: any;
  };
};

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

export const Hook = {
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
          const handlerResult = item.paramsHandler(fn, thisArg, argArray);
          if (handlerResult != null) {
            if (handlerResult.args) {
              args[0] = handlerResult.args.thisArg;
              args[1] = handlerResult.args.argArray;
              fn = handlerResult.args.fn;
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
          let handlerResult = item.returnsHandler(fn, args[0], args[1], result);
          result = handlerResult.result;
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
          const handlerResult = item.paramsHandler(fn, thisArg, argArray);
          if (handlerResult != null) {
            if (handlerResult.args) {
              args[0] = handlerResult.args.thisArg;
              args.splice(1, argArray.length, ...handlerResult.args.argArray);
              fn = handlerResult.args.fn;
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
          const handlerResult = item.returnsHandler(fn, args[0], args[1], result);
          result = handlerResult.result;
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
   * @param mainCoreData 需要劫持的webpack的顶部core
   * 例如：(window.webpackJsonp = window.webpackJsonp || []).push([["core:0"],{}])
   * 此时mainCoreData是["core:0"]
   * @param handler 如果mainCoreData匹配上，则调用此回调函数，替换的话把传入的值进行处理后再返回它就行
   */
  window_webpack(webpackName = "webpackJsonp", mainCoreData: string[] | number[], handler: (exports: any) => any) {
    let originWebPack: {
      push: (this: any, ...args: any[][]) => any;
    } = void 0 as any;
    unsafeWindow.Object.defineProperty(unsafeWindow, webpackName, {
      get() {
        return originWebPack;
      },
      set(newValue) {
        log.success("成功劫持webpack，当前webpack名：" + webpackName);
        originWebPack = newValue;
        const originWebPackPush = originWebPack.push;
        originWebPack.push = function (...args) {
          let _mainCoreData = args[0][0];
          if (
            mainCoreData == _mainCoreData ||
            (Array.isArray(mainCoreData) &&
              Array.isArray(_mainCoreData) &&
              JSON.stringify(mainCoreData) === JSON.stringify(_mainCoreData))
          ) {
            Object.keys(args[0][1]).forEach((keyName) => {
              let originSwitchFunc = args[0][1][keyName];
              args[0][1][keyName] = function (..._args: any[]) {
                let result = originSwitchFunc.call(this, ..._args);
                _args[0] = handler(_args[0]);
                return result;
              };
            });
          }
          return Reflect.apply(originWebPackPush, this, args);
        };
      },
    });
  },
};
