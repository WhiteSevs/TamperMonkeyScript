import type { WindowApiOption } from "./types/WindowApi";
import { WindowApi } from "./WindowApi";

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
const isDOM = function ($el: any): boolean {
  return $el instanceof Node;
};
class Utils {
  private windowApi: typeof WindowApi.prototype;
  constructor(option?: WindowApiOption) {
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
  isJQuery(target: any): boolean {
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
        } else {
          result = true;
        }
      }
    }
    return result;
  }
  /** 
     * JSON数据从源端替换到目标端中，如果目标端存在该数据则替换，不添加，返回结果为目标端替换完毕的结果
     * @param target 目标数据
     * @param source 源数据
     * @param isAdd 是否可以追加键，默认false
     * @example
     * Utils.assign({"1":1,"2":{"3":3}}, {"2":{"3":4}});
     * > 
     * {
            "1": 1,
            "2": {
                "3": 4
            }
        }
     */
  assign<T1, T2 extends object, T3 extends boolean>(target: T1, source: T2, isAdd?: T3): T3 extends true ? T1 & T2 : T1;
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
    } else {
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
        } else {
          childObjectValue = UtilsContext.assign(targetValue, sourceValue, isAdd);
        }
        Reflect.set(target, keyName, childObjectValue);
      } else {
        /* 直接赋值 */
        Reflect.set(target, keyName, sourceValue);
      }
    }

    return target;
  }
  /**
   * 监听页面元素改变并处理
   * @param target 需要监听的元素，如果不存在，可以等待它出现
   * @param observer_config MutationObserver的配置
   * @example
    Utils.mutationObserver(document.querySelector("div.xxxx"),{
      "callback":(mutations, observer)=>{},
      "config":{childList:true,attributes:true}
    });
    * @example
    Utils.mutationObserver(document.querySelectorAll("div.xxxx"),{
      "callback":(mutations, observer)=>{},
      "config":{childList:true,attributes:true}}
    );
    * @example
    Utils.mutationObserver($("div.xxxx"),{
    "callback":(mutations, observer)=>{},
    "config":{childList:true,attributes:true}}
    );
    **/
  mutationObserver(
    target: HTMLElement | Node | NodeList | Document,
    observer_config: {
      /**
       * observer的配置
       */
      config?: MutationObserverInit;
      /**
       * 是否主动触发一次
       */
      immediate?: boolean;
      /**
       * 触发的回调函数
       */
      callback: MutationCallback;
    }
  ): MutationObserver;
  mutationObserver(
    target: HTMLElement | Node | NodeList | Document,
    observer_config: {
      /**
       * observer的配置
       */
      config?: MutationObserverInit;
      /**
       * 是否主动触发一次
       */
      immediate?: boolean;
      /**
       * 触发的回调函数
       */
      callback: MutationCallback;
    }
  ): MutationObserver {
    const that = this;

    const default_obverser_config = {
      /* 监听到元素有反馈，需执行的函数 */
      callback: () => {},
      config: <MutationObserverInit>{
        /**
         * + true 监听以 target 为根节点的整个子树。包括子树中所有节点的属性，而不仅仅是针对 target
         * + false (默认) 不生效
         */
        subtree: void 0 as any as boolean,
        /**
         * + true 监听 target 节点中发生的节点的新增与删除（同时，如果 subtree 为 true，会针对整个子树生效）
         * + false (默认) 不生效
         */
        childList: void 0 as any as boolean,
        /**
         * + true 观察所有监听的节点属性值的变化。默认值为 true，当声明了 attributeFilter 或 attributeOldValue
         * + false (默认) 不生效
         */
        attributes: void 0 as any as boolean,
        /**
         * 一个用于声明哪些属性名会被监听的数组。如果不声明该属性，所有属性的变化都将触发通知
         */
        attributeFilter: void 0 as any as string[],
        /**
         * + true 记录上一次被监听的节点的属性变化；可查阅 MutationObserver 中的 Monitoring attribute values 了解关于观察属性变化和属性值记录的详情
         * + false (默认) 不生效
         */
        attributeOldValue: void 0 as any as boolean,
        /**
         * + true 监听声明的 target 节点上所有字符的变化。默认值为 true，如果声明了 characterDataOldValue
         * + false (默认) 不生效
         */
        characterData: void 0 as any as boolean,
        /**
         * + true 记录前一个被监听的节点中发生的文本变化
         * + false (默认) 不生效
         */
        characterDataOldValue: void 0 as any as boolean,
      },
      immediate: false,
    };
    observer_config = that.assign(default_obverser_config, observer_config);
    const windowMutationObserver =
      this.windowApi.window.MutationObserver ||
      this.windowApi.window.webkitMutationObserver ||
      this.windowApi.window.MozMutationObserver;
    // 观察者对象
    const mutationObserver = new windowMutationObserver(function (
      mutations: MutationRecord[],
      observer: MutationObserver
    ) {
      if (typeof observer_config.callback === "function") {
        observer_config.callback(mutations, observer);
      }
    });

    if (Array.isArray(target) || target instanceof NodeList) {
      // 传入的是数组或者元素数组
      target.forEach((item) => {
        mutationObserver.observe(item, observer_config.config);
      });
    } else if (that.isJQuery(target)) {
      /* 传入的参数是jQuery对象 */
      (target as any).each((_: any, item: any) => {
        mutationObserver.observe(item, observer_config.config);
      });
    } else {
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

export { utils, Utils };
