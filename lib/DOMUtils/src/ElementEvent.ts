import { CommonUtils } from "./CommonUtils";
import { GlobalData } from "./GlobalData";
import { ElementAnimate } from "./ElementAnimate";
import { OriginPrototype } from "./OriginPrototype";
import type {
  DOMUtils_Event,
  DOMUtils_EventType,
  DOMUtilsAddEventListenerResult,
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
   * @param callback 绑定事件触发的回调函数
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
  on<T extends DOMUtils_EventType>(
    element: DOMUtilsElementEventType,
    eventType: T | T[],
    callback: (this: HTMLElement, event: DOMUtils_Event[T]) => void,
    option?: DOMUtilsEventListenerOption | boolean
  ): DOMUtilsAddEventListenerResult;
  /**
   * 绑定事件
   * @param element 需要绑定的元素|元素数组|window
   * @param eventType 需要监听的事件
   * @param callback 绑定事件触发的回调函数
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
  on<T extends Event>(
    element: DOMUtilsElementEventType,
    eventType: string | string[],
    callback: (this: HTMLElement, event: T) => void,
    option?: DOMUtilsEventListenerOption | boolean
  ): DOMUtilsAddEventListenerResult;
  /**
   * 绑定事件
   * @param element 需要绑定的元素|元素数组|window
   * @param eventType 需要监听的事件
   * @param selector 子元素选择器
   * @param callback 绑定事件触发的回调函数
   * @param option
   * + capture 表示事件是否在捕获阶段触发。默认为false，即在冒泡阶段触发
   * + once 表示事件是否只触发一次。默认为false
   * + passive 表示事件监听器是否不会调用preventDefault()。默认为false
   * @example
   * // 监听元素a.xx的click、tap、hover事件
   * DOMUtils.on(document.querySelector("a.xx"),"click tap hover",(event, selectorTarget)=>{
   *    console.log("事件触发", event, selectorTarget)
   * })
   * DOMUtils.on("a.xx",["click","tap","hover"],(event, selectorTarget)=>{
   *    console.log("事件触发", event, selectorTarget)
   * })
   * @example
   * // 监听全局document下的子元素a.xx的click事件
   * DOMUtils.on(document,"click tap hover","a.xx",(event, selectorTarget)=>{
   *    console.log("事件触发", event, selectorTarget)
   * })
   */
  on<T extends DOMUtils_EventType>(
    element: DOMUtilsElementEventType,
    eventType: T | T[],
    selector: string | string[] | undefined | null,
    callback: (this: HTMLElement, event: DOMUtils_Event[T], selectorTarget: HTMLElement) => void,
    option?: DOMUtilsEventListenerOption | boolean
  ): DOMUtilsAddEventListenerResult;
  /**
   * 绑定事件
   * @param element 需要绑定的元素|元素数组|window
   * @param eventType 需要监听的事件
   * @param selector 子元素选择器
   * @param callback 绑定事件触发的回调函数
   * @param option
   * + capture 表示事件是否在捕获阶段触发。默认为false，即在冒泡阶段触发
   * + once 表示事件是否只触发一次。默认为false
   * + passive 表示事件监听器是否不会调用preventDefault()。默认为false
   * @example
   * // 监听元素a.xx的click、tap、hover事件
   * DOMUtils.on(document.querySelector("a.xx"),"click tap hover",(event, selectorTarget)=>{
   *    console.log("事件触发", event, selectorTarget)
   * })
   * DOMUtils.on("a.xx",["click","tap","hover"],(event, selectorTarget)=>{
   *    console.log("事件触发", event, selectorTarget)
   * })
   * @example
   * // 监听全局document下的子元素a.xx的click事件
   * DOMUtils.on(document,"click tap hover","a.xx",(event, selectorTarget)=>{
   *    console.log("事件触发", event, selectorTarget)
   * })
   */
  on<T extends Event>(
    element: DOMUtilsElementEventType,
    eventType: string | string[],
    selector: string | string[] | undefined | null,
    callback: (this: HTMLElement, event: T, selectorTarget: HTMLElement) => void,
    option?: DOMUtilsEventListenerOption | boolean
  ): DOMUtilsAddEventListenerResult;
  on<T extends Event>(
    element: HTMLElement | string | NodeList | HTMLElement[] | Window | Document | Element | null | typeof globalThis,
    eventType: DOMUtils_EventType | DOMUtils_EventType[] | string | string[],
    selector:
      | string
      | string[]
      | undefined
      | ((this: HTMLElement, event: T, selectorTarget: HTMLElement) => void)
      | null,
    callback?:
      | ((this: HTMLElement, event: T, selectorTarget: HTMLElement) => void)
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
    function getOption(args: IArguments, startIndex: number, option: DOMUtilsEventListenerOption) {
      const currentParam = args[startIndex];
      if (typeof currentParam === "boolean") {
        option.capture = currentParam;
        if (typeof args[startIndex + 1] === "boolean") {
          option.once = args[startIndex + 1];
        }
        if (typeof args[startIndex + 2] === "boolean") {
          option.passive = args[startIndex + 2];
        }
      } else if (
        typeof currentParam === "object" &&
        ("capture" in currentParam ||
          "once" in currentParam ||
          "passive" in currentParam ||
          "isComposedPath" in currentParam)
      ) {
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
        off() {},
        trigger() {},
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
    let listenerCallBack: (this: HTMLElement, event: Event, selectorTarget?: HTMLElement) => void = callback as any;
    // 事件配置
    let listenerOption: DOMUtilsEventListenerOption = {
      capture: false,
      once: false,
      passive: false,
      isComposedPath: false,
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
    /**
     * 如果是once，那么删除该监听和元素上的事件和监听
     */
    function checkOptionOnceToRemoveEventListener() {
      if (listenerOption.once) {
        that.off(element, eventType as any, selector as any, callback as any, option);
      }
    }
    $elList.forEach((elementItem) => {
      /**
       * 事件回调
       * @param event
       */
      function domUtilsEventCallBack(event: Event) {
        if (selectorList.length) {
          /* 存在子元素选择器 */
          // 这时候的this和target都是子元素选择器的元素
          let eventTarget = listenerOption.isComposedPath
            ? (event.composedPath()[0] as HTMLElement)
            : (event.target as HTMLElement);
          let totalParent = elementItem;
          if (CommonUtils.isWin(totalParent)) {
            if (totalParent === (that.windowApi.document as any as HTMLElement)) {
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
            const $closestMatches = that.closest<HTMLElement>(eventTarget, selectorItem);
            if ($closestMatches && (<HTMLElement>totalParent)?.contains?.($closestMatches)) {
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
            } catch {
              // TODO
            }
            listenerCallBack.call(eventTarget, event as any, eventTarget);
            checkOptionOnceToRemoveEventListener();
          }
        } else {
          // 这时候的this指向监听的元素
          listenerCallBack.call(elementItem as HTMLElement, event as any);
          checkOptionOnceToRemoveEventListener();
        }
      }

      /* 遍历事件名设置元素事件 */
      eventTypeList.forEach((eventName) => {
        elementItem.addEventListener(eventName, domUtilsEventCallBack, listenerOption);
        /* 获取对象上的事件 */
        const elementEvents: {
          [k: string]: DOMUtilsEventListenerOptionsAttribute[];
        } = Reflect.get(elementItem, GlobalData.domEventSymbol) || {};
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
       * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
       * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件，默认true，如果为false，则直接调用callback，但是这种会让使用了selectorTarget的没有值
       */
      trigger: (details?: object, useDispatchToTriggerEvent?: boolean) => {
        that.trigger($elList, eventTypeList, details, useDispatchToTriggerEvent);
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
  off<T extends DOMUtils_EventType>(
    element: DOMUtilsElementEventType,
    eventType: T | T[],
    callback?: (this: HTMLElement, event: DOMUtils_Event[T]) => void,
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
  off<T extends Event>(
    element: DOMUtilsElementEventType,
    eventType: string | string[],
    callback?: (this: HTMLElement, event: T) => void,
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
  off<T extends DOMUtils_EventType>(
    element: DOMUtilsElementEventType,
    eventType: T | T[],
    selector?: string | string[] | undefined | null,
    callback?: (this: HTMLElement, event: DOMUtils_Event[T], selectorTarget: HTMLElement) => void,
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
  off<T extends Event>(
    element: DOMUtilsElementEventType,
    eventType: string | string[],
    selector?: string | string[] | undefined | null,
    callback?: (this: HTMLElement, event: T, selectorTarget: HTMLElement) => void,
    option?: EventListenerOptions | boolean,
    filter?: (
      value: DOMUtilsEventListenerOptionsAttribute,
      index: number,
      array: DOMUtilsEventListenerOptionsAttribute[]
    ) => boolean
  ): void;
  off<T extends Event>(
    element: HTMLElement | string | NodeList | HTMLElement[] | Window | Document | Element | null | typeof globalThis,
    eventType: DOMUtils_EventType | DOMUtils_EventType[] | string | string[],
    selector:
      | string
      | string[]
      | undefined
      | ((this: HTMLElement, event: T, selectorTarget: HTMLElement) => void)
      | null,
    callback?: ((this: HTMLElement, event: T, selectorTarget: HTMLElement) => void) | EventListenerOptions | boolean,
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
    function getOption(args1: IArguments, startIndex: number, option: EventListenerOptions) {
      const currentParam: EventListenerOptions | boolean = args1[startIndex];
      if (typeof currentParam === "boolean") {
        option.capture = currentParam;
      } else if (typeof currentParam === "object" && currentParam != null && "capture" in currentParam) {
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
    let listenerCallBack: (this: HTMLElement, event: T, selectorTarget: HTMLElement) => void = callback as any;

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
    // 是否移除所有事件
    let isRemoveAll = false;
    if (args.length === 2) {
      // 目标函数、事件名
      isRemoveAll = true;
    } else if ((args.length === 3 && typeof args[2] === "string") || Array.isArray(args[2])) {
      // 目标函数、事件名、子元素选择器
      isRemoveAll = true;
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
      /* 获取对象上的事件 */
      const elementEvents: {
        [key: string]: DOMUtilsEventListenerOptionsAttribute[];
      } = Reflect.get($elItem, GlobalData.domEventSymbol) || {};
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
          if (
            flag &&
            typeof handler.option.capture === "boolean" &&
            listenerOption.capture !== handler.option.capture
          ) {
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
  offAll(element: DOMUtilsElementEventType, eventType?: string): void;
  /**
   * 取消绑定所有的事件
   * @param element 需要取消绑定的元素|元素数组
   * @param eventType （可选）需要取消监听的事件
   */
  offAll(element: DOMUtilsElementEventType, eventType?: DOMUtils_EventType | DOMUtils_EventType[]): void;
  /**
   * 取消绑定所有的事件
   * @param element 需要取消绑定的元素|元素数组
   * @param eventType （可选）需要取消监听的事件
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
      symbolList.forEach((symbolItem) => {
        if (!symbolItem.toString().startsWith("Symbol(events_")) {
          return;
        }
        const elementEvents: {
          [key: string]: DOMUtilsEventListenerOptionsAttribute[];
        } = Reflect.get($elItem, symbolItem) || {};
        const iterEventNameList = eventTypeList.length ? eventTypeList : Object.keys(elementEvents);
        iterEventNameList.forEach((eventName) => {
          const handlers: DOMUtilsEventListenerOptionsAttribute[] = elementEvents[eventName];
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

  /**
   * 等待文档加载完成后执行指定的函数
   * @param callback 需要执行的函数
   * @example
   * DOMUtils.ready(function(){
   *   console.log("文档加载完毕")
   * });
   * > "文档加载完毕"
   * @example
   * await DOMUtils.ready();
   * console.log("文档加载完毕");
   * > "文档加载完毕"
   */
  ready(): void;
  ready(callback: (...args: any[]) => any): Promise<void>;
  ready(...args: any[]): void | Promise<void> {
    const callback: ((...args: any[]) => any) | undefined = args[0];
    // 异步回调
    let resolve: ((...args: any[]) => any) | undefined = void 0;
    const that = this;
    /**
     * 检测文档是否加载完毕
     */
    function checkDOMReadyState() {
      try {
        if (
          that.windowApi.document.readyState === "complete" ||
          (that.windowApi.document.readyState !== "loading" &&
            !(that.windowApi.document.documentElement as any).doScroll)
        ) {
          return true;
        } else {
          return false;
        }
      } catch {
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
      } else {
        /* 添加监听 */
        addDomReadyListener();
      }
    }
    if (args.length === 0) {
      return new Promise((__resolve__) => {
        resolve = __resolve__;
        check();
      });
    } else {
      check();
    }
  }
  /**
   * 主动触发事件
   * @param element 需要触发的元素|元素数组|window
   * @param eventType 需要触发的事件
   * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
   * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件，默认true，如果为false，则直接调用callback，但是这种会让使用了selectorTarget的没有值
   * @example
   * // 触发元素a.xx的click事件
   * DOMUtils.trigger(document.querySelector("a.xx"),"click")
   * DOMUtils.trigger("a.xx","click")
   * // 触发元素a.xx的click、tap、hover事件
   * DOMUtils.trigger(document.querySelector("a.xx"),"click tap hover")
   * DOMUtils.trigger("a.xx",["click","tap","hover"])
   */
  trigger(
    element: DOMUtilsTargetElementType | Element | DocumentFragment | any[] | typeof globalThis | Window | Document,
    eventType: string | string[],
    details?: object,
    useDispatchToTriggerEvent?: boolean
  ): void;
  /**
   * 主动触发事件
   * @param element 需要触发的元素|元素数组|window
   * @param eventType 需要触发的事件
   * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
   * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件，默认true，如果为false，则直接调用callback，但是这种会让使用了selectorTarget的没有值
   * @example
   * // 触发元素a.xx的click事件
   * DOMUtils.trigger(document.querySelector("a.xx"),"click")
   * DOMUtils.trigger("a.xx","click")
   * // 触发元素a.xx的click、tap、hover事件
   * DOMUtils.trigger(document.querySelector("a.xx"),"click tap hover")
   * DOMUtils.trigger("a.xx",["click","tap","hover"])
   */
  trigger(
    element: Element | string | NodeList | any[] | Window | Document,
    eventType: DOMUtils_EventType | DOMUtils_EventType[],
    details?: object,
    useDispatchToTriggerEvent?: boolean
  ): void;
  /**
   * 主动触发事件
   * @param element 需要触发的元素|元素数组|window
   * @param eventType 需要触发的事件
   * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
   * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件，默认true，如果为false，则直接调用callback，但是这种会让使用了selectorTarget的没有值
   * @example
   * // 触发元素a.xx的click事件
   * DOMUtils.trigger(document.querySelector("a.xx"),"click")
   * DOMUtils.trigger("a.xx","click")
   * // 触发元素a.xx的click、tap、hover事件
   * DOMUtils.trigger(document.querySelector("a.xx"),"click tap hover")
   * DOMUtils.trigger("a.xx",["click","tap","hover"])
   */
  trigger(
    element: Element | string | NodeList | any[] | Window | Document,
    eventType: DOMUtils_EventType | DOMUtils_EventType[] | string | string[],
    details?: object,
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
    let eventTypeList: string[] = [];
    if (Array.isArray(eventType)) {
      eventTypeList = eventType.filter((it) => typeof it === "string" && it.trim() !== "");
    } else if (typeof eventType === "string") {
      eventTypeList = eventType.split(" ");
    }

    $elList.forEach(($elItem) => {
      /* 获取对象上的事件 */
      const elementEvents: {
        [key: string]: DOMUtilsEventListenerOptionsAttribute[];
      } = Reflect.get($elItem, GlobalData.domEventSymbol) || {};
      eventTypeList.forEach((eventTypeItem) => {
        let event: Event = null as any;
        if (details && details instanceof Event) {
          event = details;
        } else {
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
        if (useDispatchToTriggerEvent == false && eventTypeItem in elementEvents) {
          // 直接调用监听的事件
          elementEvents[eventTypeItem].forEach((eventsItem: any) => {
            eventsItem.callback(event);
          });
        } else {
          $elItem.dispatchEvent(event);
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
  click(
    element: DOMUtilsTargetElementType | Element | DocumentFragment | typeof globalThis | Window,
    handler?: (this: HTMLElement, event: DOMUtils_Event["click"]) => void,
    details?: any,
    useDispatchToTriggerEvent?: boolean
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
        that.click($ele as HTMLElement, handler, details, useDispatchToTriggerEvent);
      });
      return;
    }
    if (handler == null) {
      that.trigger(element, "click", details, useDispatchToTriggerEvent);
    } else {
      that.on(element, "click", null, handler);
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
  blur(
    element: DOMUtilsTargetElementType | Element | DocumentFragment | typeof globalThis | Window,
    handler?: (this: HTMLElement, event: DOMUtils_Event["blur"]) => void,
    details?: object,
    useDispatchToTriggerEvent?: boolean
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
        that.focus($ele as HTMLElement, handler, details, useDispatchToTriggerEvent);
      });
      return;
    }
    if (handler === null) {
      that.trigger(element, "blur", details, useDispatchToTriggerEvent);
    } else {
      that.on(element, "blur", null, handler as (event: Event) => void);
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
  focus(
    element: DOMUtilsTargetElementType | Element | DocumentFragment | typeof globalThis | Window,
    handler?: (this: HTMLElement, event: DOMUtils_Event["focus"]) => void,
    details?: object,
    useDispatchToTriggerEvent?: boolean
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
        that.focus($ele as HTMLElement, handler, details, useDispatchToTriggerEvent);
      });
      return;
    }
    if (handler == null) {
      that.trigger(element, "focus", details, useDispatchToTriggerEvent);
    } else {
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
   * DOMUtils.hover(document.querySelector("a.xx"),()=>{
   *   console.log("移入/移除");
   * })
   * DOMUtils.hover("a.xx",()=>{
   *   console.log("移入/移除");
   * })
   */
  hover(
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
      element.forEach(($ele) => {
        that.hover($ele as HTMLElement, handler, option);
      });
      return;
    }
    that.on(element, "mouseenter", null, handler, option);
    that.on(element, "mouseleave", null, handler, option);
  }
  /**
   * 当动画结束时触发事件
   * @param element 监听的元素
   * @param handler 触发的回调函数
   * @param option 配置项，这里默认配置once为true
   */
  animationend(
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
   * 当过渡结束时触发事件
   * @param element 监听的元素
   * @param handler 触发的回调函数
   * @param option 配置项，这里默认配置once为true
   */
  transitionend(
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
  keyup(
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
      element.forEach(($ele) => {
        that.keyup($ele as HTMLElement, handler, option);
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
  keydown(
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
      element.forEach(($ele) => {
        that.keydown($ele as HTMLElement, handler, option);
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
  keypress(
    element: DOMUtilsTargetElementType | Element | DocumentFragment | Window | Node | typeof globalThis,
    handler: (this: HTMLElement, event: DOMUtils_Event["keypress"]) => void,
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
      element.forEach(($ele) => {
        that.keypress($ele as HTMLElement, handler, option);
      });
      return;
    }
    that.on(element, "keypress", null, handler, option);
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
  listenKeyboard(
    element: DOMUtilsTargetElementType | Element | DocumentFragment | Window | Node | typeof globalThis,
    eventName: "keyup" | "keypress" | "keydown" = "keypress",
    callback: (keyName: string, keyValue: number, otherCodeList: string[], event: KeyboardEvent) => void,
    options?: DOMUtilsEventListenerOption | boolean
  ): {
    removeListen(): void;
  } {
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
      if (typeof callback === "function") {
        callback(keyName, keyValue, otherCodeList, event);
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
   * 阻止事件传递
   * @param event 要阻止传递的事件
   * @example
   * DOMUtils.preventEvent(event);
   */
  preventEvent(event: Event): boolean;
  /**
   * 通过监听事件来主动阻止事件的传递
   * @param $el 要进行处理的元素
   * @param eventNameList （可选）要阻止的事件名|列表
   * @param capture （可选）是否捕获，默认false
   * @example
   * DOMUtils.preventEvent(document.querySelector("a"),"click")
   */
  preventEvent($el: HTMLElement, eventNameList?: string | string[], capture?: boolean): void;
  preventEvent(...args: any[]) {
    /**
     * 阻止事件的默认行为发生，并阻止事件传播
     */
    const stopEvent = (event: Event) => {
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
    } else {
      const $el: HTMLElement = args[0];
      let eventNameList: string | string[] = args[1];
      const capture: boolean = args[2];
      /* 添加对应的事件来阻止触发 */
      if (typeof eventNameList === "string") {
        eventNameList = [eventNameList];
      }
      this.on($el, eventNameList, stopEvent, { capture: Boolean(capture) });
    }
  }
}

const elementEvent = new ElementEvent();

export { elementEvent, ElementEvent };
