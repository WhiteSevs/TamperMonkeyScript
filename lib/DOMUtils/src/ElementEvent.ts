import { CommonUtils } from "./CommonUtils";
import { ElementAnimate } from "./ElementAnimate";
import { GlobalData } from "./GlobalData";
import { OriginPrototype } from "./OriginPrototype";
import type {
  DOMUtils_Event,
  DOMUtils_EventType,
  DOMUtilsAddEventListenerResult,
  DOMUtilsDoubleEventEventListenerOption,
  DOMUtilsDoubleEventHandler,
  DOMUtilsDoubleEventHandlerWithSelector,
  DOMUtilsDoubleEventOption,
  DOMUtilsElementEventType,
  DOMUtilsEventListenerOption,
  DOMUtilsEventListenerOptionsAttribute,
} from "./types/DOMUtilsEvent";
import type { DOMUtilsTargetElementType } from "./types/global";
import type { WindowApiOption } from "./types/WindowApi";
import { WindowApi } from "./WindowApi";

class ElementEvent extends ElementAnimate {
  windowApi: typeof WindowApi.prototype;
  constructor(windowApiOption?: WindowApiOption) {
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
  /**
   * 绑定事件
   * @param element 需要绑定的元素|元素数组|window
   * @param eventType 需要监听的事件
   * @param handler 绑定事件触发的回调函数
   * @param option
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
   */
  on<T extends DOMUtils_EventType = DOMUtils_EventType>(
    element: DOMUtilsElementEventType,
    eventType: T | T[],
    handler: <E extends HTMLElement = HTMLElement>(this: E, event: DOMUtils_Event[T]) => void,
    option?: DOMUtilsEventListenerOption | boolean
  ): DOMUtilsAddEventListenerResult;
  /**
   * 绑定事件
   * @param element 需要绑定的元素|元素数组|window
   * @param eventType 需要监听的事件
   * @param handler 绑定事件触发的回调函数
   * @param option
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
   */
  on<T extends Event = Event>(
    element: DOMUtilsElementEventType,
    eventType: string | string[],
    handler: <E extends HTMLElement = HTMLElement>(this: E, event: T) => void,
    option?: DOMUtilsEventListenerOption | boolean
  ): DOMUtilsAddEventListenerResult;
  /**
   * 绑定事件
   * @param element 需要绑定的元素|元素数组|window
   * @param eventType 需要监听的事件
   * @param selector 子元素选择器
   * @param handler 绑定事件触发的回调函数
   * @param option
   * + capture 表示事件是否在捕获阶段触发。默认为false，即在冒泡阶段触发
   * + once 表示事件是否只触发一次。默认为false
   * + passive 表示事件监听器是否不会调用preventDefault()。默认为false
   * @example
   * // 监听元素a.xx的click、tap、hover事件
   * DOMUtils.on(document.querySelector("a.xx"),"click tap hover",(event, $selector)=>{
   *    console.log("事件触发", event, $selector)
   * })
   * DOMUtils.on("a.xx",["click","tap","hover"],(event, $selector)=>{
   *    console.log("事件触发", event, $selector)
   * })
   * @example
   * // 监听全局document下的子元素a.xx的click事件
   * DOMUtils.on(document,"click tap hover","a.xx",(event, $selector)=>{
   *    console.log("事件触发", event, $selector)
   * })
   */
  on<T extends DOMUtils_EventType = DOMUtils_EventType>(
    element: DOMUtilsElementEventType,
    eventType: T | T[],
    selector: string | string[] | undefined | null,
    handler: <E extends HTMLElement = HTMLElement>(this: E, event: DOMUtils_Event[T], $selector: E) => void,
    option?: DOMUtilsEventListenerOption | boolean
  ): DOMUtilsAddEventListenerResult;
  /**
   * 绑定事件
   * @param element 需要绑定的元素|元素数组|window
   * @param eventType 需要监听的事件
   * @param selector 子元素选择器
   * @param handler 绑定事件触发的回调函数
   * @param option
   * + capture 表示事件是否在捕获阶段触发。默认为false，即在冒泡阶段触发
   * + once 表示事件是否只触发一次。默认为false
   * + passive 表示事件监听器是否不会调用preventDefault()。默认为false
   * @example
   * // 监听元素a.xx的click、tap、hover事件
   * DOMUtils.on(document.querySelector("a.xx"),"click tap hover",(event, $selector)=>{
   *    console.log("事件触发", event, $selector)
   * })
   * DOMUtils.on("a.xx",["click","tap","hover"],(event, $selector)=>{
   *    console.log("事件触发", event, $selector)
   * })
   * @example
   * // 监听全局document下的子元素a.xx的click事件
   * DOMUtils.on(document,"click tap hover","a.xx",(event, $selector)=>{
   *    console.log("事件触发", event, $selector)
   * })
   */
  on<T extends Event = Event>(
    element: DOMUtilsElementEventType,
    eventType: string | string[],
    selector: string | string[] | undefined | null,
    handler: <E extends HTMLElement = HTMLElement>(this: E, event: T, $selector: E) => void,
    option?: DOMUtilsEventListenerOption | boolean
  ): DOMUtilsAddEventListenerResult;
  on<T extends Event = Event>(
    element: HTMLElement | string | NodeList | HTMLElement[] | Window | Document | Element | null | typeof globalThis,
    eventType: DOMUtils_EventType | DOMUtils_EventType[] | string | string[],
    selector:
      | string
      | string[]
      | undefined
      | (<E extends HTMLElement = HTMLElement>(this: E, event: T, $selector: E) => void)
      | null,
    callback?:
      | (<E extends HTMLElement = HTMLElement>(this: E, event: T, $selector: E) => void)
      | DOMUtilsEventListenerOption
      | boolean,
    option?: DOMUtilsEventListenerOption | boolean
  ): DOMUtilsAddEventListenerResult {
    /**
     * 获取option配置
     * @param args
     * @param startIndex
     * @param option
     */
    const getOption = function (args: IArguments, startIndex: number, option: DOMUtilsEventListenerOption) {
      const currentParam: boolean | DOMUtilsEventListenerOption = args[startIndex];
      if (typeof currentParam === "boolean") {
        option.capture = currentParam;
        if (typeof args[startIndex + 1] === "boolean") {
          option.once = args[startIndex + 1];
        }
        if (typeof args[startIndex + 2] === "boolean") {
          option.passive = args[startIndex + 2];
        }
      } else if (currentParam && typeof currentParam === "object") {
        for (const key in option) {
          if (Reflect.has(currentParam, key)) {
            Reflect.set(option, key, currentParam[key as keyof typeof currentParam]);
          }
        }
      }
      return option;
    };

    const that = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    if (typeof element === "string") {
      element = that.selectorAll(element);
    }
    if (element == null) {
      return {
        off() {},
        emit() {},
      };
    }
    let $elList: (Element | Document | Window)[] = [];
    if (element instanceof NodeList || Array.isArray(element)) {
      $elList = $elList.concat(Array.from(element as Element[]));
    } else {
      $elList.push(element as Element);
    }
    // 事件名
    let eventTypeList: string[] = [];
    if (Array.isArray(eventType)) {
      eventTypeList = eventTypeList.concat(eventType.filter((it) => typeof it === "string" && it.toString() !== ""));
    } else if (typeof eventType === "string") {
      eventTypeList = eventTypeList.concat(eventType.split(" ").filter((it) => it !== ""));
    }
    // 子元素选择器
    let selectorList: string[] = [];
    if (Array.isArray(selector)) {
      selectorList = selectorList.concat(selector.filter((it) => typeof it === "string" && it.toString() !== ""));
    } else if (typeof selector === "string") {
      selectorList.push(selector);
    }
    // 事件回调
    let listenerCallBack: (this: Element, event: Event, $selector?: HTMLElement) => void | boolean = callback as (
      this: Element,
      event: Event,
      $selector?: HTMLElement
    ) => void | boolean;
    // 事件配置
    let listenerOption: DOMUtilsEventListenerOption = {
      capture: false,
      once: false,
      passive: false,
      isComposedPath: false,
      overrideTarget: true,
    };
    if (typeof selector === "function") {
      // 这是为没有selector的情况
      // 那么它就是callback
      listenerCallBack = selector as any;
      listenerOption = getOption(args, 3, listenerOption);
    } else {
      // 这是存在selector的情况
      listenerOption = getOption(args, 4, listenerOption);
    }
    $elList.forEach(($elItem) => {
      // window和document共用一个对象
      // 这样就能处理子元素选择器无法匹配的问题
      const targetIsWindow = CommonUtils.isWin($elItem);
      // 遍历事件名设置元素事件
      eventTypeList.forEach((eventName) => {
        /**
         * 如果是option.once，那么删除该监听和元素上的事件和监听
         */
        const checkOptionOnceToRemoveEventListener = () => {
          if (listenerOption.once) {
            this.off($elItem, eventName, selector as any, callback as any, option);
          }
        };
        /**
         * 事件回调
         * @param event
         */
        const handlerCallBack = function (event: Event) {
          if (listenerOption.isPreventEvent) {
            that.preventEvent(event);
          }
          let call_this: Element | undefined = void 0;
          let call_event: Event | undefined = void 0;
          let call_$selector: HTMLElement | undefined = void 0;
          let execCallback = false;
          if (selectorList.length) {
            // 存在子元素选择器
            // 这时候的this和target都是子元素选择器的元素
            let $target: HTMLElement;
            if (listenerOption.isComposedPath) {
              // 可能为空
              const composedPath = event.composedPath();
              if (!composedPath.length && event.target) {
                composedPath.push(event.target);
              }
              $target = composedPath[0] as HTMLElement;
            } else {
              $target = event.target as HTMLElement;
            }
            const $parent = targetIsWindow ? that.windowApi.document.documentElement : $elItem;
            const findValue = selectorList.find((selectors) => {
              // 判断目标元素是否匹配选择器
              if (that.matches($target, selectors)) {
                // 当前目标可以被selector所匹配到
                return true;
              }
              // 在上层与主元素之间寻找可以被selector所匹配到的
              const $closestMatches = that.closest<HTMLElement>($target, selectors);
              if ($closestMatches && (<HTMLElement>$parent)?.contains?.($closestMatches)) {
                $target = $closestMatches;
                return true;
              }
              return false;
            });
            if (findValue) {
              if (listenerOption.overrideTarget) {
                // 这里尝试使用defineProperty修改event的target值
                try {
                  const originTarget = event.target;
                  OriginPrototype.Object.defineProperties(event, {
                    target: {
                      get() {
                        return $target;
                      },
                    },
                    originTarget: {
                      get() {
                        return originTarget;
                      },
                    },
                  });
                  // oxlint-disable-next-line no-empty
                } catch {}
              }
              execCallback = true;
              call_this = $target;
              call_event = event;
              call_$selector = $target;
            }
          } else {
            execCallback = true;
            call_this = $elItem as Element;
            call_event = event;
          }
          if (execCallback) {
            const result = listenerCallBack.call(call_this!, call_event!, call_$selector!);
            checkOptionOnceToRemoveEventListener();
            if (typeof result === "boolean" && !result) {
              return false;
            }
          }
        };
        // add listener
        $elItem.addEventListener(eventName, handlerCallBack, listenerOption);
        // 获取对象上的事件
        const elementEvents: {
          [k: string]: DOMUtilsEventListenerOptionsAttribute[];
        } = Reflect.get($elItem, GlobalData.domEventSymbol) || {};
        // 初始化对象上的xx事件
        elementEvents[eventName] = elementEvents[eventName] || [];
        elementEvents[eventName].push({
          selector: selectorList,
          option: listenerOption,
          handlerCallBack: handlerCallBack,
          callback: listenerCallBack,
        });
        // 覆盖事件
        Reflect.set($elItem, GlobalData.domEventSymbol, elementEvents);
      });
    });

    return {
      /**
       * 取消绑定的监听事件
       * @param filter (可选)过滤函数，对元素属性上的事件进行过滤出想要删除的事件
       */
      off: (
        filter?: (
          value: DOMUtilsEventListenerOptionsAttribute,
          index: number,
          array: DOMUtilsEventListenerOptionsAttribute[]
        ) => boolean
      ) => {
        that.off($elList, eventTypeList, selectorList, listenerCallBack, listenerOption, filter);
      },
      /**
       * 主动触发事件
       * @param extraDetails 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
       * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件，默认true，如果为false，则直接调用callback，但是这种会让使用了`$selector`的没有值
       */
      emit: (extraDetails?: object, useDispatchToTriggerEvent?: boolean) => {
        that.emit($elList, eventTypeList, extraDetails, useDispatchToTriggerEvent);
      },
    };
  }
  /**
   * 取消绑定事件
   * @param element 需要取消绑定的元素|元素数组
   * @param eventType 需要取消监听的事件
   * @param callback 通过DOMUtils.on绑定的事件函数
   * @param option
   * + capture 如果在添加事件监听器时指定了useCapture为true，则在移除事件监听器时也必须指定为true
   * @param filter (可选)过滤函数，对元素属性上的事件进行过滤出想要删除的事件
   * @example
   * // 取消监听元素a.xx所有的click事件
   * DOMUtils.off(document.querySelector("a.xx"),"click")
   * DOMUtils.off("a.xx","click")
   */
  off<T extends DOMUtils_EventType = DOMUtils_EventType>(
    element: DOMUtilsElementEventType,
    eventType: T | T[],
    callback?: <E extends HTMLElement = HTMLElement>(this: E, event: DOMUtils_Event[T]) => void,
    option?: EventListenerOptions | boolean,
    filter?: (
      value: DOMUtilsEventListenerOptionsAttribute,
      index: number,
      array: DOMUtilsEventListenerOptionsAttribute[]
    ) => boolean
  ): void;
  /**
   * 取消绑定事件
   * @param element 需要取消绑定的元素|元素数组
   * @param eventType 需要取消监听的事件
   * @param callback 通过DOMUtils.on绑定的事件函数
   * @param option
   * + capture 如果在添加事件监听器时指定了useCapture为true，则在移除事件监听器时也必须指定为true
   * @param filter (可选)过滤函数，对元素属性上的事件进行过滤出想要删除的事件
   * @example
   * // 取消监听元素a.xx的click事件
   * DOMUtils.off(document.querySelector("a.xx"),"click")
   * DOMUtils.off("a.xx","click")
   */
  off<T extends Event = Event>(
    element: DOMUtilsElementEventType,
    eventType: string | string[],
    callback?: <E extends HTMLElement = HTMLElement>(this: E, event: T) => void,
    option?: EventListenerOptions | boolean,
    filter?: (
      value: DOMUtilsEventListenerOptionsAttribute,
      index: number,
      array: DOMUtilsEventListenerOptionsAttribute[]
    ) => boolean
  ): void;
  /**
   * 取消绑定事件
   * @param element 需要取消绑定的元素|元素数组
   * @param eventType 需要取消监听的事件
   * @param selector 子元素选择器
   * @param callback 通过DOMUtils.on绑定的事件函数
   * @param option
   * + capture 如果在添加事件监听器时指定了useCapture为true，则在移除事件监听器时也必须指定为true
   * @param filter (可选)过滤函数，对元素属性上的事件进行过滤出想要删除的事件
   * @example
   * // 取消监听元素a.xx的click、tap、hover事件
   * DOMUtils.off(document.querySelector("a.xx"),"click tap hover")
   * DOMUtils.off("a.xx",["click","tap","hover"])
   */
  off<T extends DOMUtils_EventType = DOMUtils_EventType>(
    element: DOMUtilsElementEventType,
    eventType: T | T[],
    selector?: string | string[] | undefined | null,
    callback?: <E extends HTMLElement = HTMLElement>(this: E, event: DOMUtils_Event[T], $selector: E) => void,
    option?: EventListenerOptions | boolean,
    filter?: (
      value: DOMUtilsEventListenerOptionsAttribute,
      index: number,
      array: DOMUtilsEventListenerOptionsAttribute[]
    ) => boolean
  ): void;
  /**
   * 取消绑定事件
   * @param element 需要取消绑定的元素|元素数组
   * @param eventType 需要取消监听的事件
   * @param selector 子元素选择器
   * @param callback 通过DOMUtils.on绑定的事件函数
   * @param option
   * + capture 如果在添加事件监听器时指定了useCapture为true，则在移除事件监听器时也必须指定为true
   * @param filter (可选)过滤函数，对元素属性上的事件进行过滤出想要删除的事件
   * @example
   * // 取消监听元素a.xx的click、tap、hover事件
   * DOMUtils.off(document.querySelector("a.xx"),"click tap hover")
   * DOMUtils.off("a.xx",["click","tap","hover"])
   */
  off<T extends Event = Event>(
    element: DOMUtilsElementEventType,
    eventType: string | string[],
    selector?: string | string[] | undefined | null,
    callback?: <E extends HTMLElement = HTMLElement>(this: E, event: T, $selector: E) => void,
    option?: EventListenerOptions | boolean,
    filter?: (
      value: DOMUtilsEventListenerOptionsAttribute,
      index: number,
      array: DOMUtilsEventListenerOptionsAttribute[]
    ) => boolean
  ): void;
  off<T extends Event = Event>(
    element: HTMLElement | string | NodeList | HTMLElement[] | Window | Document | Element | null | typeof globalThis,
    eventType: DOMUtils_EventType | DOMUtils_EventType[] | string | string[],
    selector:
      | string
      | string[]
      | undefined
      | (<E extends HTMLElement = HTMLElement>(this: E, event: T, $selector: E) => void)
      | null,
    callback?:
      | (<E extends HTMLElement = HTMLElement>(this: E, event: T, $selector: E) => void)
      | EventListenerOptions
      | boolean,
    option?:
      | EventListenerOptions
      | boolean
      | ((
          value: DOMUtilsEventListenerOptionsAttribute,
          index: number,
          array: DOMUtilsEventListenerOptionsAttribute[]
        ) => boolean),
    filter?: (
      value: DOMUtilsEventListenerOptionsAttribute,
      index: number,
      array: DOMUtilsEventListenerOptionsAttribute[]
    ) => boolean
  ) {
    /**
     * 获取option配置
     * @param args1
     * @param startIndex
     * @param option
     */
    const getOption = function (args1: IArguments, startIndex: number, option: EventListenerOptions) {
      const currentParam: boolean | DOMUtilsEventListenerOption = args1[startIndex];
      if (typeof currentParam === "boolean") {
        option.capture = currentParam;
      } else if (currentParam && typeof currentParam === "object" && "capture" in currentParam) {
        option.capture = currentParam.capture;
      }
      return option;
    };
    const that = this;
    // eslint-disable-next-line prefer-rest-params
    const args = arguments;
    if (typeof element === "string") {
      element = that.selectorAll(element);
    }
    if (element == null) {
      return;
    }
    let $elList: HTMLElement[] = [];
    if (element instanceof NodeList || Array.isArray(element)) {
      element = element as HTMLElement[];
      $elList = $elList.concat(Array.from(element));
    } else {
      $elList.push(element as HTMLElement);
    }
    let eventTypeList: string[] = [];
    if (Array.isArray(eventType)) {
      eventTypeList = eventTypeList.concat(eventType.filter((it) => typeof it === "string" && it.toString() !== ""));
    } else if (typeof eventType === "string") {
      eventTypeList = eventTypeList.concat(eventType.split(" ").filter((it) => it !== ""));
    }
    // 子元素选择器
    let selectorList: string[] = [];
    if (Array.isArray(selector)) {
      selectorList = selectorList.concat(selector.filter((it) => typeof it === "string" && it.toString() !== ""));
    } else if (typeof selector === "string") {
      selectorList.push(selector);
    }
    /**
     * 事件的回调函数
     */
    let listenerCallBack: (this: HTMLElement, event: T, $selector: HTMLElement) => void = callback as (
      this: HTMLElement,
      event: Event,
      $selector?: HTMLElement
    ) => void | boolean;

    /**
     * 事件的配置
     */
    let listenerOption: EventListenerOptions = {
      capture: false,
    };
    if (typeof selector === "function") {
      // 这是为没有selector的情况
      // 那么它就是callback
      listenerCallBack = selector;
      listenerOption = getOption(args, 3, listenerOption);
    } else {
      // 这是存在selector的情况
      listenerOption = getOption(args, 4, listenerOption);
    }
    if (args.length === 5 && typeof args[4] === "function" && typeof filter !== "function") {
      // 目标函数、事件名、回调函数、事件配置、过滤函数
      filter = option as (
        value: DOMUtilsEventListenerOptionsAttribute,
        index: number,
        array: DOMUtilsEventListenerOptionsAttribute[]
      ) => boolean;
    }
    $elList.forEach(($elItem) => {
      // 获取对象上的事件
      const elementEvents: {
        [key: string]: DOMUtilsEventListenerOptionsAttribute[];
      } = Reflect.get($elItem, GlobalData.domEventSymbol) || {};
      eventTypeList.forEach((eventName) => {
        const handlers = elementEvents[eventName] || [];
        // 过滤出需要删除的事件
        const handlersFiltered = typeof filter === "function" ? handlers.filter(filter) : handlers;
        for (let index = 0; index < handlersFiltered.length; index++) {
          const handler = handlersFiltered[index];
          // 过滤出的事件再根据下面的条件进行判断处理移除
          // 1. callback内存地址必须相同
          // 2. selector必须相同
          // 3. option.capture必须相同
          let flag = true;
          if (flag && listenerCallBack && handler.callback !== listenerCallBack) {
            flag = false;
          }
          if (flag && selectorList.length && Array.isArray(handler.selector)) {
            if (JSON.stringify(handler.selector) !== JSON.stringify(selectorList)) {
              flag = false;
            }
          }
          if (
            flag &&
            typeof handler.option.capture === "boolean" &&
            listenerOption.capture !== handler.option.capture
          ) {
            flag = false;
          }
          if (flag) {
            $elItem.removeEventListener(eventName, handler.handlerCallBack, handler.option);
            for (let i = handlers.length - 1; i >= 0; i--) {
              if (handlers[i] === handler) {
                handlers.splice(i, 1);
              }
            }
          }
        }
        if (handlers.length === 0) {
          // 如果没有任意的handler，那么删除该属性
          CommonUtils.delete(elementEvents, eventType);
          if (Object.keys(elementEvents).length === 0) {
            CommonUtils.delete($elItem, GlobalData.domEventSymbol);
          }
        }
      });
      Reflect.set($elItem, GlobalData.domEventSymbol, elementEvents);
    });
  }
  /**
   * 取消绑定所有的事件
   * @param element 需要取消绑定的元素|元素数组
   * @param eventType （可选）需要取消监听的事件，不传入该参数则遍历所有监听的事件
   */
  offAll(element: DOMUtilsElementEventType, eventType?: string): void;
  /**
   * 取消绑定所有的事件
   * @param element 需要取消绑定的元素|元素数组
   * @param eventType （可选）需要取消监听的事件，不传入该参数则遍历所有监听的事件
   */
  offAll(element: DOMUtilsElementEventType, eventType?: DOMUtils_EventType | DOMUtils_EventType[]): void;
  /**
   * 取消绑定所有的事件
   * @param element 需要取消绑定的元素|元素数组
   * @param eventType （可选）需要取消监听的事件，不传入该参数则遍历所有监听的事件
   */
  offAll(element: DOMUtilsElementEventType, eventType?: DOMUtils_EventType | DOMUtils_EventType[] | string) {
    const that = this;
    if (typeof element === "string") {
      element = that.selectorAll(element);
    }
    if (element == null) {
      return;
    }
    let $elList: (Element | Document | Window | typeof globalThis | Node | ChildNode | EventTarget)[] = [];
    if (element instanceof NodeList || Array.isArray(element)) {
      $elList = $elList.concat(Array.from(element as HTMLElement[]));
    } else {
      $elList.push(element);
    }

    let eventTypeList: string[] = [];
    if (Array.isArray(eventType)) {
      eventTypeList = eventTypeList.concat(eventType as string[]);
    } else if (typeof eventType === "string") {
      eventTypeList = eventTypeList.concat(eventType.split(" "));
    }
    $elList.forEach(($elItem) => {
      const symbolList = [...new Set([...Object.getOwnPropertySymbols($elItem), GlobalData.domEventSymbol])];
      symbolList.forEach((__symbol__) => {
        if (!__symbol__.toString().startsWith("Symbol(events_")) {
          return;
        }
        const elementEvents: {
          [key: string]: DOMUtilsEventListenerOptionsAttribute[];
        } = Reflect.get($elItem, __symbol__) || {};
        const iterEventNameList = eventTypeList.length ? eventTypeList : Object.keys(elementEvents);
        iterEventNameList.forEach((eventName) => {
          const handlers: DOMUtilsEventListenerOptionsAttribute[] = elementEvents[eventName];
          if (!handlers) {
            return;
          }
          for (const handler of handlers) {
            $elItem.removeEventListener(eventName, handler.handlerCallBack, {
              capture: handler.option.capture,
            });
          }
          const events = Reflect.get($elItem, __symbol__);
          CommonUtils.delete(events, eventName);
          if (Object.keys(events).length === 0) {
            CommonUtils.delete($elItem, __symbol__);
          }
        });
      });
    });
  }

  /**
   * 等待文档加载完成后执行指定的函数
   * @param callback 需要执行的函数
   * @example
   * DOMUtils.onReady(function(){
   *   console.log("文档加载完毕")
   * });
   * > "文档加载完毕"
   * @example
   * await DOMUtils.onReady();
   * console.log("文档加载完毕");
   * > "文档加载完毕"
   */
  onReady(): Promise<void>;
  onReady(callback: (...args: any[]) => any): void;
  onReady(...args: any[]): void | Promise<void> {
    const callback: ((...args: any[]) => any) | undefined = args[0];
    // 异步回调
    let resolve: ((...args: any[]) => any) | undefined = void 0;
    const that = this;
    /**
     * 监听目标
     */
    const listenTargetList = [
      {
        target: that.windowApi.document,
        eventType: "DOMContentLoaded",
        callback: () => {
          ReadyChecker.completed();
        },
      },
      {
        target: that.windowApi.window,
        eventType: "load",
        callback: () => {
          ReadyChecker.completed();
        },
      },
    ];
    const ReadyChecker = {
      init() {
        if (args.length === 0) {
          return new Promise<void>((__resolve__) => {
            resolve = __resolve__;
            ReadyChecker.check();
          });
        } else {
          ReadyChecker.check();
        }
      },
      check() {
        if (ReadyChecker.isReady()) {
          /* 检查document状态 */
          setTimeout(() => {
            ReadyChecker.completed();
          }, 0);
        } else {
          /* 添加监听 */
          ReadyChecker.onCompleted();
        }
      },
      /**
       * 检测文档是否加载完毕
       */
      isReady() {
        try {
          if (
            that.windowApi.document.readyState === "complete" ||
            // @ts-expect-error
            (that.windowApi.document.readyState !== "loading" && !that.windowApi.document.documentElement.doScroll)
          ) {
            return true;
          } else {
            return false;
          }
        } catch {
          return false;
        }
      },
      /**
       * 成功加载完毕后触发的回调函数
       */
      completed() {
        ReadyChecker.offCompleted();
        if (typeof callback === "function") {
          callback();
        }
        if (typeof resolve === "function") {
          resolve();
        }
      },
      /**
       * 添加监听
       */
      onCompleted() {
        for (const item of listenTargetList) {
          that.on(item.target, item.eventType, item.callback);
        }
      },
      /**
       * 移除监听
       */
      offCompleted() {
        for (const item of listenTargetList) {
          that.off(item.target, item.eventType, item.callback);
        }
      },
    };

    return ReadyChecker.init();
  }
  /**
   * 主动触发事件
   * @param element 需要触发的元素|元素数组|window
   * @param eventType 需要触发的事件
   * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件，默认true，如果为false，则直接调用通过.on监听的callback，但是这种会让使用了$selector的没有值
   * @example
   * // 触发元素a.xx的click事件
   * DOMUtils.emit(document.querySelector("a.xx"),"click")
   * DOMUtils.emit("a.xx","click")
   * // 触发元素a.xx的click、tap、hover事件
   * DOMUtils.emit(document.querySelector("a.xx"),"click tap hover")
   * DOMUtils.emit("a.xx",["click","tap","hover"])
   */
  emit(
    element: DOMUtilsTargetElementType | Element | DocumentFragment | any[] | typeof globalThis | Window | Document,
    eventType: string | string[],
    useDispatchToTriggerEvent?: boolean
  ): void;
  /**
   * 主动触发事件
   * @param element 需要触发的元素|元素数组|window
   * @param eventType 需要触发的事件
   * @param extraDetails 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
   * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件，默认true，如果为false，则直接调用通过.on监听的callback()，但是这种只有一个入参，如果使用$selector则没有值
   * @example
   * // 触发元素a.xx的click事件
   * DOMUtils.emit(document.querySelector("a.xx"),"click")
   * DOMUtils.emit("a.xx","click")
   * // 触发元素a.xx的click、tap、hover事件
   * DOMUtils.emit(document.querySelector("a.xx"),"click tap hover")
   * DOMUtils.emit("a.xx",["click","tap","hover"])
   */
  emit(
    element: DOMUtilsTargetElementType | Element | DocumentFragment | any[] | typeof globalThis | Window | Document,
    eventType: string | string[],
    extraDetails?: object,
    useDispatchToTriggerEvent?: boolean
  ): void;
  /**
   * 主动触发事件
   * @param element 需要触发的元素|元素数组|window
   * @param eventType 需要触发的事件
   * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件，默认true，如果为false，则直接调用通过.on监听的callback()，但是这种只有一个入参，如果使用$selector则没有值
   * @example
   * // 触发元素a.xx的click事件
   * DOMUtils.emit(document.querySelector("a.xx"),"click")
   * DOMUtils.emit("a.xx","click")
   * // 触发元素a.xx的click、tap、hover事件
   * DOMUtils.emit(document.querySelector("a.xx"),"click tap hover")
   * DOMUtils.emit("a.xx",["click","tap","hover"])
   */
  emit(
    element: Element | string | NodeList | any[] | Window | Document,
    eventType: DOMUtils_EventType | DOMUtils_EventType[],
    useDispatchToTriggerEvent?: boolean
  ): void;
  /**
   * 主动触发事件
   * @param element 需要触发的元素|元素数组|window
   * @param event 触发的事件
   * @param extraDetails （可选）赋予触发的Event的额外属性
   * @param useDispatchToTriggerEvent （可选）是否使用dispatchEvent来触发事件，默认true，如果为false，则直接调用通过.on监听的callback()，但是这种只有一个入参，如果使用$selector则没有值
   * @example
   * DOMUtils.emit("a.xx", new Event("click"))
   * @example
   * DOMUtils.emit("a.xx", new Event("click"), {
   *   disableHook: true
   * })
   * @example
   * DOMUtils.emit("a.xx", new Event("click"), {
   *   disableHook: true
   * },false)
   */
  emit(
    element: Element | string | NodeList | any[] | Window | Document,
    event: Event,
    extraDetails?: object,
    useDispatchToTriggerEvent?: boolean
  ): void;
  /**
   * 主动触发事件
   * @param element 需要触发的元素|元素数组|window
   * @param eventType 需要触发的事件
   * @param extraDetails 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
   * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件，默认true，如果为false，则直接调用通过.on监听的callback()，但是这种只有一个入参，如果使用$selector则没有值
   * @example
   * // 触发元素a.xx的click事件
   * DOMUtils.emit(document.querySelector("a.xx"),"click")
   * DOMUtils.emit("a.xx","click")
   * // 触发元素a.xx的click、tap、hover事件
   * DOMUtils.emit(document.querySelector("a.xx"),"click tap hover")
   * DOMUtils.emit("a.xx",["click","tap","hover"])
   */
  emit(
    element: Element | string | NodeList | any[] | Window | Document,
    eventType: DOMUtils_EventType | DOMUtils_EventType[] | string | string[] | Event,
    extraDetails?: object | boolean,
    useDispatchToTriggerEvent: boolean = true
  ) {
    const that = this;
    if (typeof element === "string") {
      element = that.selectorAll(element);
    }
    if (element == null) {
      return;
    }
    let $elList: (Document | Window | Element)[] = [];
    if (element instanceof NodeList || Array.isArray(element)) {
      $elList = $elList.concat(Array.from(element));
    } else {
      $elList.push(element);
    }

    /**
     * 主动添加属性
     */
    const addExtraProp = (event: Event, obj: any) => {
      if (event instanceof Event && typeof obj === "object" && obj != null && !Array.isArray(obj)) {
        const detailKeys = Object.keys(obj);
        detailKeys.forEach((keyName) => {
          const value = Reflect.get(obj, keyName);
          // 在event上添加属性
          Reflect.set(event, keyName, value);
        });
      }
    };

    let eventTypeList: string[] = [];
    /**
     * 主动传递的事件
     */
    let __event__: Event | null = null;
    if (Array.isArray(eventType)) {
      eventTypeList = eventType.filter((it) => typeof it === "string" && it.trim() !== "");
    } else if (typeof eventType === "string") {
      eventTypeList = eventType.split(" ");
    } else if (eventType instanceof Event) {
      __event__ = eventType;
      addExtraProp(__event__, extraDetails);
    }

    $elList.forEach(($elItem) => {
      /* 获取对象上的事件 */
      const elementEvents: {
        [key: string]: DOMUtilsEventListenerOptionsAttribute[];
      } = Reflect.get($elItem, GlobalData.domEventSymbol) || {};

      /**
       * 触发事件
       */
      const dispatchEvent = (event: Event, eventTypeItem: string) => {
        if (useDispatchToTriggerEvent == false && eventTypeItem in elementEvents) {
          // 直接调用.on监听的事件
          elementEvents[eventTypeItem].forEach((eventsItem) => {
            eventsItem.handlerCallBack(event);
          });
        } else {
          $elItem.dispatchEvent(event);
        }
      };

      if (__event__) {
        // 使用主动传递的事件直接触发
        const event = __event__;
        const eventTypeItem = event.type;
        dispatchEvent(event, eventTypeItem);
      } else {
        eventTypeList.forEach((eventTypeItem) => {
          // 构造事件
          const event = new Event(eventTypeItem);
          addExtraProp(event, extraDetails);
          dispatchEvent(event, eventTypeItem);
        });
      }
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
  click(
    element: DOMUtilsTargetElementType | Element | DocumentFragment | typeof globalThis | Window,
    handler?: (this: HTMLElement, event: DOMUtils_Event["click"]) => void,
    details?: object,
    useDispatchToEmit?: boolean
  ) {
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
        that.click($ele as HTMLElement, handler, details, useDispatchToEmit);
      });
      return;
    }
    if (handler == null) {
      that.emit(element, "click", details, useDispatchToEmit);
    } else {
      const listener = that.on(element, "click", null, handler);
      return listener;
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
  blur(
    element: DOMUtilsTargetElementType | Element | DocumentFragment | typeof globalThis | Window,
    handler?: (this: HTMLElement, event: DOMUtils_Event["blur"]) => void,
    details?: object,
    useDispatchToEmit?: boolean
  ) {
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
        that.focus($ele as HTMLElement, handler, details, useDispatchToEmit);
      });
      return;
    }
    if (handler === null) {
      that.emit(element, "blur", details, useDispatchToEmit);
    } else {
      const listener = that.on(element, "blur", null, handler as (event: Event) => void);
      return listener;
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
  focus(
    element: DOMUtilsTargetElementType | Element | DocumentFragment | typeof globalThis | Window,
    handler?: (this: HTMLElement, event: DOMUtils_Event["focus"]) => void,
    details?: object,
    useDispatchToEmit?: boolean
  ) {
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
        that.focus($ele as HTMLElement, handler, details, useDispatchToEmit);
      });
      return;
    }
    if (handler == null) {
      that.emit(element, "focus", details, useDispatchToEmit);
    } else {
      const listener = that.on(element, "focus", null, handler);
      return listener;
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
  onHover(
    element: DOMUtilsTargetElementType | Element | DocumentFragment | Node,
    handler: (this: HTMLElement, event: DOMUtils_Event["hover"]) => void,
    option?: boolean | DOMUtilsEventListenerOption
  ) {
    const that = this;
    if (typeof element === "string") {
      element = that.selectorAll(element);
    }
    if (element == null) {
      return;
    }
    if (CommonUtils.isNodeList(element)) {
      // 设置
      const listenerList: (DOMUtilsAddEventListenerResult | undefined)[] = [];
      element.forEach(($ele) => {
        const listener = that.onHover($ele as HTMLElement, handler, option);
        listenerList.push(listener);
      });
      return {
        off() {
          listenerList.forEach((listener) => {
            if (!listener) {
              return;
            }
            listener.off();
          });
        },
      } as DOMUtilsAddEventListenerResult;
    }
    const mouseenter_listener = that.on(element, "mouseenter", null, handler, option);
    const mouseleave_listener = that.on(element, "mouseleave", null, handler, option);

    return {
      off() {
        mouseenter_listener.off();
        mouseleave_listener.off();
      },
    } as DOMUtilsAddEventListenerResult;
  }
  /**
   * 监听动画结束
   * @param element 监听的元素
   * @param handler 触发的回调函数
   * @param option 配置项，这里默认配置once为true
   */
  onAnimationend(
    element: HTMLElement | string | Element | DocumentFragment,
    handler: (this: HTMLElement, event: DOMUtils_Event["animationend"]) => void,
    option?: boolean | DOMUtilsEventListenerOption
  ) {
    const that = this;
    if (typeof element === "string") {
      element = that.selector(element)!;
    }
    if (element == null) {
      return;
    }
    const defaultOption: DOMUtilsEventListenerOption = {
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
  onTransitionend(
    element: HTMLElement | string | Element | DocumentFragment,
    handler: (this: HTMLElement, event: DOMUtils_Event["transitionend"]) => void,
    option?: boolean | DOMUtilsEventListenerOption
  ) {
    const that = this;
    if (typeof element === "string") {
      element = that.selector(element)!;
    }
    if (element == null) {
      return;
    }
    const defaultOption: DOMUtilsEventListenerOption = {
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
  onKeyup(
    element: DOMUtilsTargetElementType | Element | DocumentFragment | Window | Node | typeof globalThis,
    handler: (this: HTMLElement, event: DOMUtils_Event["keyup"]) => void,
    option?: boolean | DOMUtilsEventListenerOption
  ) {
    const that = this;
    if (element == null) {
      return;
    }
    if (typeof element === "string") {
      element = that.selectorAll(element);
    }
    if (CommonUtils.isNodeList(element)) {
      // 设置
      const listenerList: (DOMUtilsAddEventListenerResult | undefined)[] = [];
      element.forEach(($ele) => {
        const listener = that.onKeyup($ele as HTMLElement, handler, option);
        listenerList.push(listener);
      });
      return {
        off() {
          listenerList.forEach((listener) => {
            if (!listener) {
              return;
            }
            listener.off();
          });
        },
      } as DOMUtilsAddEventListenerResult;
    }
    return that.on(element, "keyup", null, handler, option);
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
  onKeydown(
    element: DOMUtilsTargetElementType | Element | DocumentFragment | Window | Node | typeof globalThis,
    handler: (this: HTMLElement, event: DOMUtils_Event["keydown"]) => void,
    option?: boolean | DOMUtilsEventListenerOption
  ) {
    const that = this;
    if (element == null) {
      return;
    }
    if (typeof element === "string") {
      element = that.selectorAll(element);
    }
    if (CommonUtils.isNodeList(element)) {
      // 设置
      const listenerList: (DOMUtilsAddEventListenerResult | undefined)[] = [];
      element.forEach(($ele) => {
        const listener = that.onKeydown($ele as HTMLElement, handler, option);
        listenerList.push(listener);
      });
      return {
        off() {
          listenerList.forEach((listener) => {
            if (!listener) {
              return;
            }
            listener.off();
          });
        },
      } as DOMUtilsAddEventListenerResult;
    }
    return that.on(element, "keydown", null, handler, option);
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
  onKeyboard(
    element: DOMUtilsTargetElementType | Element | DocumentFragment | Window | Node | typeof globalThis,
    eventName: "keydown" | "keyup" = "keydown",
    handler: (keyName: string, keyValue: number, otherCodeList: string[], event: KeyboardEvent) => void,
    options?: DOMUtilsEventListenerOption | boolean
  ): DOMUtilsAddEventListenerResult {
    const that = this;
    if (typeof element === "string") {
      element = that.selectorAll(element);
    }
    const keyboardEventCallBack = function (event: KeyboardEvent) {
      /** 键名 */
      const keyName = event.key || event.code;
      /** 键值 */
      const keyValue = event.charCode || event.keyCode || event.which;
      /** 组合键列表 */
      const otherCodeList: string[] = [];
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
    const listener = that.on(element, eventName, keyboardEventCallBack, options);
    return listener;
  }
  /**
   * 监input、textarea的输入框值改变的事件（当输入法输入时，不会触发该监听）
   * @param $el 输入框元素
   * @param handler 回调函数
   * @param option 配置
   */
  onInput(
    $el: HTMLInputElement | HTMLTextAreaElement,
    handler: (evt: InputEvent) => void | Promise<void>,
    option?: DOMUtilsEventListenerOption | boolean
  ): DOMUtilsAddEventListenerResult {
    /**
     * 是否正在输入中
     */
    let isComposite = false;
    const __callback = async (event: InputEvent) => {
      if (isComposite) return;
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
      off() {
        inputListener.off();
        compositionStartListener.off();
        compositionEndListener.off();
      },
      emit(details?, useDispatchToEmit?) {
        inputListener.emit(details, useDispatchToEmit);
      },
    };
  }
  /**
   * 监听事件单/双次触发
   * @param $el 监听的元素
   * @param handler 处理的回调函数
   * @param options 监听器的配置
   */
  onOneOrDouble(
    $el: DOMUtilsElementEventType,
    handler: (event: Event, option: DOMUtilsDoubleEventOption) => void | Promise<void>,
    options?: DOMUtilsDoubleEventEventListenerOption | boolean
  ): {
    off(): void;
    /**
     * 主动触发事件
     * @param event 事件
     * @param option 配置，如果不传入配置，则默认`isDouble`固定为false
     */
    emit(event: Event, option?: DOMUtilsDoubleEventOption): void;
  };
  /**
   * 监听事件单/双次触发
   * @param $el 监听的元素
   * @param selector 子元素选择器
   * @param handler 处理的回调函数
   * @param options 监听器的配置
   */
  onOneOrDouble<T = HTMLElement>(
    $el: DOMUtilsElementEventType,
    selector: string | string[],
    handler: <E extends Event = Event>(
      event: E,
      $selector: T,
      option: DOMUtilsDoubleEventOption
    ) => void | Promise<void>,
    options?: DOMUtilsDoubleEventEventListenerOption | boolean
  ): {
    off(): void;
    /**
     * 主动触发事件
     * @param event 事件
     * @param option 配置，如果不传入配置，则默认`isDouble`固定为false
     */
    emit(event: Event, option?: DOMUtilsDoubleEventOption): void;
  };
  onOneOrDouble(...args: any[]): {
    off(): void;
    /**
     * 主动触发事件
     * @param event 事件
     * @param option 配置，如果不传入配置，则默认`isDouble`固定为false
     */
    emit(event: Event, option?: DOMUtilsDoubleEventOption): void;
  } {
    const $el: DOMUtilsElementEventType = args[0];
    let selector: string | string[] | undefined | null = void 0;
    let handler: DOMUtilsDoubleEventHandler | DOMUtilsDoubleEventHandlerWithSelector;
    let options: DOMUtilsDoubleEventEventListenerOption | boolean | undefined;
    if (args.length === 2) {
      if (typeof args[1] === "function") {
        handler = args[1];
      } else {
        throw new TypeError("handler is not a function");
      }
    } else if (args.length === 3) {
      if (typeof args[1] === "function") {
        handler = args[1];
        options = args[2];
      } else {
        selector = args[1];
        handler = args[2];
      }
    } else if (args.length === 4) {
      selector = args[1];
      handler = args[2];
      options = args[3];
    } else {
      throw new Error("args length error");
    }

    let eventNodeMap = new WeakMap<Element, Event>();
    let isDouble = false;
    let timer: number | undefined = void 0;
    let eventType: DOMUtils_EventType | DOMUtils_EventType[] = "pointerup";
    /** 检测是否是单击的延迟时间 */
    let checkClickTime = 200;
    if (typeof options === "object" && options != null) {
      if (typeof options.eventType === "string" || Array.isArray(options.eventType)) {
        eventType = options.eventType;
      }
      if (typeof options.checkClickTime === "number") {
        checkClickTime = options.checkClickTime;
      }
    }

    const callback = (evt: Event, option: DOMUtilsDoubleEventOption, $selector?: HTMLElement) => {
      if ($selector) {
        return (<DOMUtilsDoubleEventHandlerWithSelector>handler)(evt, $selector, option);
      } else {
        return (<DOMUtilsDoubleEventHandler>handler)(evt, option);
      }
    };

    const pointerUpListener = this.on(
      $el,
      eventType,
      selector,
      (evt, $selector) => {
        clearTimeout(timer);
        timer = void 0;
        if (isDouble && eventNodeMap.has($selector as Element)) {
          isDouble = false;
          eventNodeMap.delete($selector);
          // 判定为双次
          callback(
            evt,
            {
              isDouble: true,
            },
            $selector
          );
        } else {
          timer = setTimeout(() => {
            isDouble = false;
            // 判断为单次
            callback(
              evt,
              {
                isDouble: false,
              },
              $selector
            );
          }, checkClickTime);
          isDouble = true;
          eventNodeMap.set($selector as Element, evt);
        }
      },
      options
    );

    return {
      off() {
        pointerUpListener.off();
        // @ts-expect-error
        eventNodeMap = null;
      },
      emit(event, option) {
        callback(
          event,
          option || {
            isDouble: false,
          }
        );
      },
    };
  }
  /**
   * 阻止事件传递
   *
   * + `.preventDefault()`: 阻止事件的默认行为发生。例如，当点击一个链接时，浏览器会默认打开链接的URL，或者在输入框内输入文字
   * + `.stopPropagation()`: 停止事件的传播，阻止它继续向更上层的元素冒泡，事件将不会再传播给其他的元素
   * + `.stopImmediatePropagation()`: 阻止事件传播，并且还能阻止元素上的其他事件处理程序被触发
   * @param event 要阻止传递的事件
   * @example
   * DOMUtils.preventEvent(event);
   */
  preventEvent(event: Event): false;
  /**
   * 阻止事件传递
   * @param event 要阻止传递的事件
   * @param onlyStopPropagation （可选）是否仅阻止事件的传播，默认false，不调用`.preventDefault()`
   * @example
   * DOMUtils.preventEvent(event, true);
   */
  preventEvent<T extends boolean>(event: Event, onlyStopPropagation: T): T extends true ? void : false;
  /**
   * 通过监听事件来主动阻止事件的传递
   * @param $el 要进行处理的元素
   * @param eventNameList 要阻止的事件名|列表
   * @param option （可选）配置项
   * @example
   * DOMUtils.preventEvent(document.querySelector("a"), "click")
   * @example
   * DOMUtils.preventEvent(document.querySelector("a"), "click", undefined, {
   *   capture: true,
   * })
   * @example
   * DOMUtils.preventEvent(document, "click", "a.xxx", {
   *   capture: true,
   *   onlyStopPropagation: true,
   * })
   */
  preventEvent(
    $el: Element | Document | ShadowRoot,
    eventNameList: string | string[],
    option?: {
      /** （可选）是否捕获，默认false */
      capture?: boolean;
      /** （可选）是否仅阻止事件的传播，默认false，不调用`.preventDefault()` */
      onlyStopPropagation?: boolean;
    }
  ): {
    /** 移除监听事件 */
    off(): void;
  };
  /**
   * 通过监听事件来主动阻止事件的传递
   * @param $el 要进行处理的元素
   * @param eventNameList 要阻止的事件名|列表
   * @param selector 子元素选择器
   * @param option （可选）配置项
   * @example
   * DOMUtils.preventEvent(document.querySelector("a"), "click")
   * @example
   * DOMUtils.preventEvent(document.querySelector("a"), "click", undefined, {
   *   capture: true,
   * })
   * @example
   * DOMUtils.preventEvent(document, "click", "a.xxx", {
   *   capture: true,
   *   onlyStopPropagation: true,
   * })
   */
  preventEvent(
    $el: Element | Document | ShadowRoot,
    eventNameList: string | string[],
    selector: string | string[] | null | undefined,
    option?: {
      /** （可选）是否捕获，默认false */
      capture?: boolean;
      /** （可选）是否仅阻止事件的传播，默认false，不调用`.preventDefault()` */
      onlyStopPropagation?: boolean;
    }
  ): {
    /** 移除监听事件 */
    off(): void;
  };
  preventEvent(...args: any[]): boolean | void | { off(): void } {
    /**
     * 阻止事件的默认行为发生，并阻止事件传播
     */
    const stopEvent = (event: Event, onlyStopPropagation?: boolean) => {
      // 停止事件的传播，阻止它继续向更上层的元素冒泡，事件将不会再传播给其他的元素
      event?.stopPropagation();
      // 阻止事件传播，并且还能阻止元素上的其他事件处理程序被触发
      event?.stopImmediatePropagation();
      if (typeof onlyStopPropagation === "boolean" && onlyStopPropagation) {
        return;
      }
      // 阻止事件的默认行为发生。例如，当点击一个链接时，浏览器会默认打开链接的URL，或者在输入框内输入文字
      event?.preventDefault();
      return false;
    };
    if (args[0] instanceof Event) {
      // 直接阻止事件
      const onlyStopPropagation: boolean = args[1];
      return stopEvent(args[0], onlyStopPropagation);
    } else {
      const $el: Element | Document | ShadowRoot = args[0];
      let eventNameList: string | string[] = args[1];
      let selector: string | string[] | null | undefined = void 0;
      let capture = false;
      let onlyStopPropagation = false;
      // 添加对应的事件来阻止触发
      if (typeof eventNameList === "string") {
        eventNameList = [eventNameList];
      }

      let option:
        | {
            capture?: boolean;
            onlyStopPropagation?: boolean;
          }
        | undefined = void 0;
      if (args.length === 2) {
        // ignore
      } else if (typeof args[2] === "string" || Array.isArray(args[2])) {
        // selector
        selector = args[2];
        if (typeof args[3] === "object" && args[3] != null) {
          option = args[3];
        }
      } else if (typeof args[2] === "object" && args[2] != null && !Array.isArray(args[2])) {
        // option
        option = args[2];
      } else {
        throw new TypeError("Invalid argument");
      }
      if (option) {
        capture = Boolean(option.capture);
        onlyStopPropagation = Boolean(option.onlyStopPropagation);
      }

      const listener = this.on(
        $el,
        eventNameList,
        selector,
        (evt) => {
          return stopEvent(evt, onlyStopPropagation);
        },
        { capture: capture }
      );
      return listener;
    }
  }
}

const elementEvent = new ElementEvent();

export { elementEvent, ElementEvent };
