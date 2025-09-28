import { CommonUtils } from "./CommonUtils";
import { ElementSelector, elementSelector } from "./ElementSelector";
import type { WindowApiOption } from "./types/WindowApi";
import { utils } from "./Utils";
import { WindowApi } from "./WindowApi";

class ElementWait extends ElementSelector {
  windowApi: typeof WindowApi.prototype;
  constructor(windowApiOption?: WindowApiOption) {
    super(windowApiOption);
    this.windowApi = new WindowApi(windowApiOption);
  }
  /**
   * 等待任意事件成立
   *
   * 运行方式为根据页面元素的改变而触发回调
   * @param checkFn 检测的函数
   * @param timeout 超时时间，默认0
   * @param parent （可选）父元素，默认document
   * @example
   * Utils.wait(()=> {
   *   let $test = document.querySelector("#test");
   *   return {
   *     success: $test !== null,
   *     data:  $test
   *   }
   * })
   */
  wait<T>(
    checkFn: (...args: any[]) => {
      /**
       * 是否检测成功
       */
      success: boolean;
      /**
       * 返回的值
       */
      data: T;
    },
    timeout?: null | undefined,
    parent?: Node | Element | Document | HTMLElement
  ): Promise<T>;
  wait<T>(
    checkFn: (...args: any[]) => {
      /**
       * 是否检测成功
       */
      success: boolean;
      /**
       * 返回的值
       */
      data: T;
    },
    timeout?: number,
    parent?: Node | Element | Document | HTMLElement
  ): Promise<T | null>;
  wait<T>(
    checkFn: (...args: any[]) => {
      /**
       * 是否检测成功
       */
      success: boolean;
      /**
       * 返回的值
       */
      data: T;
    },
    timeout?: number | null | undefined,
    parent?: Node | Element | Document | HTMLElement
  ): Promise<T | null> {
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
          resolve(null as T);
        }, __timeout__);
      }
    });
  }
  /**
   * 等待元素出现
   * @param selectorFn 获取元素的函数
   * @param timeout 超时时间，默认0
   * @example
   * Utils.waitNode(()=>document.querySelector("div"), 1000).then( $div =>{
   *  console.log($div); // $div => HTMLDivELement | null
   * })
   */
  waitNode<K>(selectorFn: () => K | null | undefined): Promise<K>;
  waitNode<K>(selectorFn: () => K | null | undefined, timeout: number): Promise<K | null | undefined>;
  /**
   * 等待元素出现
   * @param selector CSS选择器
   * @param parent （可选）父元素，默认document
   * @example
   * Utils.waitNode("div").then( $div =>{
   *  console.log($div); // div => HTMLDivELement
   * })
   * Utils.waitNode("div", document).then( $div =>{
   *  console.log($div); // div => HTMLDivELement
   * })
   */
  waitNode<K extends keyof HTMLElementTagNameMap>(
    selector: K,
    parent?: Node | Element | Document | HTMLElement
  ): Promise<HTMLElementTagNameMap[K]>;
  waitNode<T extends Element>(selector: string, parent?: Node | Element | Document | HTMLElement): Promise<T>;
  /**
   * 等待元素出现
   * @param selectorList CSS选择器数组
   * @param parent （可选）父元素，默认document
   * @example
   * Utils.waitNode(["div"]).then( ([$div]) =>{
   *  console.log($div); // div => HTMLDivELement[]
   * })
   * Utils.waitNode(["div"], document).then( ([$div]) =>{
   *  console.log($div); // div => HTMLDivELement[]
   * })
   */
  waitNode<K extends keyof HTMLElementTagNameMap>(
    selectorList: K[],
    parent?: Node | Element | Document | HTMLElement
  ): Promise<HTMLElementTagNameMap[K][]>;
  waitNode<T extends Element[]>(selectorList: string[], parent?: Node | Element | Document | HTMLElement): Promise<T>;
  /**
   * 等待元素出现
   * @param selector CSS选择器
   * @param parent 父元素，默认document
   * @param timeout 超时时间，默认0
   * @example
   * Utils.waitNode("div", document, 1000).then( $div =>{
   *  console.log($div); // $div => HTMLDivELement | null
   * })
   */
  waitNode<K extends keyof HTMLElementTagNameMap>(
    selector: K,
    parent: Node | Element | Document | HTMLElement,
    timeout: number
  ): Promise<HTMLElementTagNameMap[K] | null>;
  waitNode<T extends Element>(
    selector: string,
    parent: Node | Element | Document | HTMLElement,
    timeout: number
  ): Promise<T | null>;
  /**
   * 等待元素出现
   * @param selectorList CSS选择器数组
   * @param parent 父元素，默认document
   * @param timeout 超时时间，默认0
   * @example
   * Utils.waitNode(["div"], document, 1000).then( ([$div]) =>{
   *  console.log($div); // $div => HTMLDivELement[] | null
   * })
   */
  waitNode<K extends keyof HTMLElementTagNameMap>(
    selectorList: K[],
    parent: Node | Element | Document | HTMLElement,
    timeout: number
  ): Promise<HTMLElementTagNameMap[K] | null>;
  waitNode<T extends Element[]>(
    selectorList: string[],
    parent: Node | Element | Document | HTMLElement,
    timeout: number
  ): Promise<T | null>;
  /**
   * 等待元素出现
   * @param selector CSS选择器
   * @param timeout 超时时间，默认0
   * @example
   * Utils.waitNode("div", 1000).then( $div =>{
   *  console.log($div); // $div => HTMLDivELement | null
   * })
   */
  waitNode<K extends keyof HTMLElementTagNameMap>(
    selector: K,
    timeout: number
  ): Promise<HTMLElementTagNameMap[K] | null>;
  waitNode<T extends Element>(selector: string, timeout: number): Promise<T | null>;
  /**
   * 等待元素出现
   * @param selectorList CSS选择器数组
   * @param timeout 超时时间，默认0
   * @example
   * Utils.waitNode(["div"], 1000).then( [$div] =>{
   *  console.log($div); // $div => HTMLDivELement[] | null
   * })
   */
  waitNode<K extends keyof HTMLElementTagNameMap>(
    selectorList: K[],
    timeout: number
  ): Promise<HTMLElementTagNameMap[K] | null>;
  waitNode<T extends Element[]>(selectorList: string[], timeout: number): Promise<T | null>;
  waitNode<T extends Element | Element[]>(...args: any[]): Promise<T | null> {
    // 过滤掉undefined
    args = args.filter((arg) => arg !== void 0);
    const UtilsContext = this;
    // 选择器
    const selector = args[0] as unknown as string | string[] | ((...args: any[]) => any);
    // 父元素（监听的元素）
    let parent: Element = UtilsContext.windowApi.document as any as Element;
    // 超时时间
    let timeout = 0;
    if (typeof args[0] !== "string" && !Array.isArray(args[0]) && typeof args[0] !== "function") {
      throw new TypeError("Utils.waitNode 第一个参数必须是string|string[]|Function");
    }
    if (args.length === 1) {
      // 上面已做处理
    } else if (args.length === 2) {
      const secondParam = args[1];
      if (typeof secondParam === "number") {
        // "div",10000
        timeout = secondParam;
      } else if (typeof secondParam === "object" && secondParam instanceof Node) {
        // "div",document
        parent = secondParam as any as Element;
      } else {
        throw new TypeError("Utils.waitNode 第二个参数必须是number|Node");
      }
    } else if (args.length === 3) {
      // "div",document,10000
      // 第二个参数，parent
      const secondParam = args[1];
      // 第三个参数，timeout
      const thirdParam = args[2];
      if (typeof secondParam === "object" && secondParam instanceof Node) {
        parent = secondParam as any as Element;
        if (typeof thirdParam === "number") {
          timeout = thirdParam;
        } else {
          throw new TypeError("Utils.waitNode 第三个参数必须是number");
        }
      } else {
        throw new TypeError("Utils.waitNode 第二个参数必须是Node");
      }
    } else {
      throw new TypeError("Utils.waitNode 参数个数错误");
    }
    function getNode() {
      if (Array.isArray(selector)) {
        const result: T[] = [];
        for (let index = 0; index < selector.length; index++) {
          const node = elementSelector.selector(selector[index]);
          if (node) {
            result.push(node as any);
          }
        }
        if (result.length === selector.length) {
          return result;
        }
      } else if (typeof selector === "function") {
        return selector();
      } else {
        return elementSelector.selector(selector, parent);
      }
    }
    return UtilsContext.wait(
      () => {
        const node = getNode();
        if (node) {
          return {
            success: true,
            data: node,
          };
        } else {
          return {
            success: false,
            data: node,
          };
        }
      },
      timeout,
      parent
    );
  }
  /**
   * 等待任意元素出现
   * @param selectorList CSS选择器数组
   * @param parent （可选）监听的父元素
   * @example
   * Utils.waitAnyNode(["div","div"]).then( $div =>{
   *  console.log($div); // $div => HTMLDivELement 这里是第一个
   * })
   * Utils.waitAnyNode(["a","div"], document).then( $a =>{
   *  console.log($a); // $a => HTMLAnchorElement 这里是第一个
   * })
   */
  waitAnyNode<K extends keyof HTMLElementTagNameMap>(
    selectorList: K[],
    parent?: Node | Element | Document | HTMLElement
  ): Promise<HTMLElementTagNameMap[K]>;
  waitAnyNode<T extends Element>(selectorList: string[], parent?: Node | Element | Document | HTMLElement): Promise<T>;
  /**
   * 等待任意元素出现
   * @param selectorList CSS选择器数组
   * @param parent 父元素，默认document
   * @param timeout 超时时间，默认0
   * @example
   * Utils.waitAnyNode(["div","div"], document, 10000).then( $div =>{
   *  console.log($div); // $div => HTMLDivELement | null
   * })
   */
  waitAnyNode<K extends keyof HTMLElementTagNameMap>(
    selectorList: K[],
    parent: Node | Element | Document | HTMLElement,
    timeout: number
  ): Promise<HTMLElementTagNameMap[K] | null>;
  waitAnyNode<T extends Element>(
    selectorList: string[],
    parent: Node | Element | Document | HTMLElement,
    timeout: number
  ): Promise<T | null>;
  /**
   * 等待任意元素出现
   * @param selectorList CSS选择器数组
   * @param timeout 超时时间，默认0
   * @example
   * Utils.waitAnyNode(["div","div"], 10000).then( $div =>{
   *  console.log($div); // $div => HTMLDivELement | null
   * })
   */
  waitAnyNode<K extends keyof HTMLElementTagNameMap>(
    selectorList: K[],
    timeout: number
  ): Promise<HTMLElementTagNameMap[K] | null>;
  waitAnyNode<T extends Element>(selectorList: string[], timeout: number): Promise<T | null>;
  waitAnyNode<T extends Element>(...args: any[]): Promise<T | null> {
    // 过滤掉undefined
    args = args.filter((arg) => arg !== void 0);
    const UtilsContext = this;
    // 选择器
    const selectorList = args[0] as unknown as string[];
    // 父元素（监听的元素）
    let parent: Element = UtilsContext.windowApi.document as any as Element;
    // 超时时间
    let timeout = 0;
    if (typeof args[0] !== "object" && !Array.isArray(args[0])) {
      throw new TypeError("Utils.waitAnyNode 第一个参数必须是string[]");
    }
    if (args.length === 1) {
      // 上面已做处理
    } else if (args.length === 2) {
      const secondParam = args[1];
      if (typeof secondParam === "number") {
        // "div",10000
        timeout = secondParam;
      } else if (typeof secondParam === "object" && secondParam instanceof Node) {
        // "div",document
        parent = secondParam as any as Element;
      } else {
        throw new TypeError("Utils.waitAnyNode 第二个参数必须是number|Node");
      }
    } else if (args.length === 3) {
      // "div",document,10000
      // 第二个参数，parent
      const secondParam = args[1];
      // 第三个参数，timeout
      const thirdParam = args[2];
      if (typeof secondParam === "object" && secondParam instanceof Node) {
        parent = secondParam as any as Element;
        if (typeof thirdParam === "number") {
          timeout = thirdParam;
        } else {
          throw new TypeError("Utils.waitAnyNode 第三个参数必须是number");
        }
      } else {
        throw new TypeError("Utils.waitAnyNode 第二个参数必须是Node");
      }
    } else {
      throw new TypeError("Utils.waitAnyNode 参数个数错误");
    }
    const promiseList = selectorList.map((selector) => {
      return UtilsContext.waitNode<T>(selector, parent, timeout);
    });
    return Promise.any(promiseList);
  }
  /**
   * 等待元素数组出现
   * @param selector CSS选择器
   * @param parent （可选）监听的父元素
   * @example
   * Utils.waitNodeList("div").then( $result =>{
   *  console.log($result); // $result => NodeListOf<HTMLDivElement>
   * })
   * Utils.waitNodeList("div", document).then( $result =>{
   *  console.log($result); // $result => NodeListOf<HTMLDivElement>
   * })
   */
  waitNodeList<T extends keyof HTMLElementTagNameMap>(
    selector: T,
    parent?: Node | Element | Document | HTMLElement
  ): Promise<NodeListOf<HTMLElementTagNameMap[T]>>;
  waitNodeList<T extends NodeListOf<Element>>(
    selector: string,
    parent?: Node | Element | Document | HTMLElement
  ): Promise<T>;
  /**
   * 等待元素数组出现
   * @param selectorList CSS选择器数组
   * @param parent （可选）监听的父元素
   * @example
   * Utils.waitNodeList(["div"]).then( $result =>{
   *  console.log($result); // $result => NodeListOf<HTMLDivElement>[]
   * })
   * Utils.waitNodeList(["div"], document).then( $result =>{
   *  console.log($result); // $result => NodeListOf<HTMLDivElement>[]
   * })
   */
  waitNodeList<K extends keyof HTMLElementTagNameMap>(
    selectorList: K[],
    parent?: Node | Element | Document | HTMLElement
  ): Promise<NodeListOf<HTMLElementTagNameMap[K]>[]>;
  waitNodeList<T extends NodeListOf<Element>[]>(
    selectorList: string[],
    parent?: Node | Element | Document | HTMLElement
  ): Promise<T>;
  /**
   * 等待元素数组出现
   * @param selector CSS选择器
   * @param parent 监听的父元素
   * @param timeout 超时时间，默认0
   * @example
   * Utils.waitNodeList("div", document, 10000).then( $result =>{
   *  console.log($result); // $result => NodeListOf<HTMLDivElement> | null
   * })
   */
  waitNodeList<T extends NodeListOf<Element>>(
    selector: string,
    parent: Node | Element | Document | HTMLElement,
    timeout: number
  ): Promise<T | null>;
  waitNodeList<K extends keyof HTMLElementTagNameMap>(
    selector: K,
    parent: Node | Element | Document | HTMLElement,
    timeout: number
  ): Promise<NodeListOf<HTMLElementTagNameMap[K]> | null>;
  /**
   * 等待元素数组出现
   * @param selectorList CSS选择器数组
   * @param parent 监听的父元素
   * @param timeout 超时时间，默认0
   * @example
   * Utils.waitNodeList(["div"], document, 10000).then( $result =>{
   *  console.log($result); // $result => NodeListOf<HTMLDivElement>[] | null
   * })
   */
  waitNodeList<K extends keyof HTMLElementTagNameMap>(
    selectorList: K[],
    parent: Node | Element | Document | HTMLElement,
    timeout: number
  ): Promise<NodeListOf<HTMLElementTagNameMap[K]>[] | null>;
  waitNodeList<T extends NodeListOf<Element>[]>(
    selectorList: string[],
    parent: Node | Element | Document | HTMLElement,
    timeout: number
  ): Promise<T | null>;
  /**
   * 等待元素数组出现
   * @param selector CSS选择器数组
   * @param timeout 超时时间，默认0
   * @example
   * Utils.waitNodeList("div", 10000).then( $result =>{
   *  console.log($result); // $result => NodeListOf<HTMLDivElement> | null
   * })
   */
  waitNodeList<K extends keyof HTMLElementTagNameMap>(
    selector: K[],
    timeout: number
  ): Promise<NodeListOf<HTMLElementTagNameMap[K]> | null>;
  waitNodeList<T extends NodeListOf<Element>>(selector: string[], timeout: number): Promise<T | null>;
  /**
   * 等待元素数组出现
   * @param selectorList CSS选择器数组
   * @param timeout 超时时间，默认0
   * @example
   * Utils.waitNodeList(["div"], 10000).then( $result =>{
   *  console.log($result); // $result => NodeListOf<HTMLDivElement>[] | null
   * })
   */
  waitNodeList<K extends keyof HTMLElementTagNameMap>(
    selectorList: K[],
    timeout: number
  ): Promise<NodeListOf<HTMLElementTagNameMap[K]>[] | null>;
  waitNodeList<T extends NodeListOf<Element>>(selectorList: string[], timeout: number): Promise<T[] | null>;
  waitNodeList<T extends NodeListOf<Element> | NodeListOf<Element>[]>(...args: any[]): Promise<T | null> {
    // 过滤掉undefined
    args = args.filter((arg) => arg !== void 0);
    const UtilsContext = this;
    // 选择器数组
    const selector = args[0] as unknown as string | string[];
    // 父元素（监听的元素）
    let parent: Element = UtilsContext.windowApi.document as any as Element;
    // 超时时间
    let timeout = 0;
    if (typeof args[0] !== "string" && !Array.isArray(args[0])) {
      throw new TypeError("Utils.waitNodeList 第一个参数必须是string|string[]");
    }
    if (args.length === 1) {
      // 上面已做处理
    } else if (args.length === 2) {
      const secondParam = args[1];
      if (typeof secondParam === "number") {
        // "div",10000
        timeout = secondParam;
      } else if (typeof secondParam === "object" && secondParam instanceof Node) {
        // "div",document
        parent = secondParam as any as Element;
      } else {
        throw new TypeError("Utils.waitNodeList 第二个参数必须是number|Node");
      }
    } else if (args.length === 3) {
      // "div",document,10000
      // 第二个参数，parent
      const secondParam = args[1];
      // 第三个参数，timeout
      const thirdParam = args[2];
      if (typeof secondParam === "object" && secondParam instanceof Node) {
        parent = secondParam as any as Element;
        if (typeof thirdParam === "number") {
          timeout = thirdParam;
        } else {
          throw new TypeError("Utils.waitNodeList 第三个参数必须是number");
        }
      } else {
        throw new TypeError("Utils.waitNodeList 第二个参数必须是Node");
      }
    } else {
      throw new TypeError("Utils.waitNodeList 参数个数错误");
    }
    function getNodeList() {
      if (Array.isArray(selector)) {
        const result: T[] = [];
        for (let index = 0; index < selector.length; index++) {
          const nodeList = elementSelector.selectorAll(selector[index], parent);
          if (nodeList.length) {
            result.push(nodeList as any as T);
          }
        }
        if (result.length === selector.length) {
          return result;
        }
      } else {
        const nodeList = elementSelector.selectorAll(selector, parent);
        if (nodeList.length) {
          return nodeList;
        }
      }
    }
    return UtilsContext.wait<any>(
      () => {
        const node = getNodeList();
        if (node) {
          return {
            success: true,
            data: node,
          };
        } else {
          return {
            success: false,
            data: node,
          };
        }
      },
      timeout,
      parent
    );
  }
  /**
   * 等待任意元素数组出现
   * @param selectorList CSS选择器数组
   * @param parent （可选）监听的父元素
   * @example
   * Utils.waitAnyNodeList(["div","a"]).then( $result =>{
   *  console.log($result); // $result => NodeListOf<HTMLDivElement>
   * })
   * Utils.waitAnyNodeList(["div","a"], document).then( $result =>{
   *  console.log($result); // $result => NodeListOf<HTMLDivElement>
   * })
   */
  waitAnyNodeList<K extends keyof HTMLElementTagNameMap>(
    selectorList: K[],
    parent?: Node | Element | Document | HTMLElement
  ): Promise<NodeListOf<HTMLElementTagNameMap[K]>>;
  waitAnyNodeList<T extends Element>(
    selectorList: string[],
    parent?: Node | Element | Document | HTMLElement
  ): Promise<NodeListOf<T>>;
  /**
   * 等待任意元素数组出现
   * @param selectorList CSS选择器数组
   * @param parent 父元素，默认document
   * @param timeout 超时时间，默认0
   * @example
   * Utils.waitAnyNodeList(["div","a"], document, 10000).then( $result =>{
   *  console.log($result); // $result => NodeListOf<HTMLDivElement> | null
   * })
   */
  waitAnyNodeList<K extends keyof HTMLElementTagNameMap>(
    selectorList: K[],
    parent: Node | Element | Document | HTMLElement,
    timeout: number
  ): Promise<NodeListOf<HTMLElementTagNameMap[K]> | null>;
  waitAnyNodeList<T extends Element>(
    selectorList: string[],
    parent: Node | Element | Document | HTMLElement,
    timeout: number
  ): Promise<NodeListOf<T> | null>;
  /**
   * 等待任意元素出现
   * @param selectorList CSS选择器数组
   * @param timeout 超时时间，默认0
   * @example
   * Utils.waitAnyNodeList(["div","div"], 10000).then( $result =>{
   *  console.log($result); // $result => NodeListOf<HTMLDivElement> | null
   * })
   */
  waitAnyNodeList<K extends keyof HTMLElementTagNameMap>(
    selectorList: K[],
    timeout: number
  ): Promise<NodeListOf<HTMLElementTagNameMap[K]> | null>;
  waitAnyNodeList<T extends Element>(selectorList: string[], timeout: number): Promise<NodeListOf<T> | null>;
  waitAnyNodeList<T extends Element>(...args: any[]): Promise<NodeListOf<T> | null> {
    // 过滤掉undefined
    args = args.filter((arg) => arg !== void 0);
    const UtilsContext = this;
    // 选择器数组
    const selectorList = args[0] as unknown as string[];
    // 父元素（监听的元素）
    let parent: Element = UtilsContext.windowApi.document as any as Element;
    // 超时时间
    let timeout = 0;
    if (!Array.isArray(args[0])) {
      throw new TypeError("Utils.waitAnyNodeList 第一个参数必须是string[]");
    }
    if (args.length === 1) {
      // 上面已做处理
    } else if (args.length === 2) {
      const secondParam = args[1];
      if (typeof secondParam === "number") {
        // "div",10000
        timeout = secondParam;
      } else if (typeof secondParam === "object" && secondParam instanceof Node) {
        // "div",document
        parent = secondParam as any as Element;
      } else {
        throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是number|Node");
      }
    } else if (args.length === 3) {
      // "div",document,10000
      // 第二个参数，parent
      const secondParam = args[1];
      // 第三个参数，timeout
      const thirdParam = args[2];
      if (typeof secondParam === "object" && secondParam instanceof Node) {
        parent = secondParam as any as Element;
        if (typeof thirdParam === "number") {
          timeout = thirdParam;
        } else {
          throw new TypeError("Utils.waitAnyNodeList 第三个参数必须是number");
        }
      } else {
        throw new TypeError("Utils.waitAnyNodeList 第二个参数必须是Node");
      }
    } else {
      throw new TypeError("Utils.waitAnyNodeList 参数个数错误");
    }

    const promiseList = selectorList.map((selector) => {
      return UtilsContext.waitNodeList<NodeListOf<T>>(selector, parent, timeout);
    });
    return Promise.any(promiseList);
  }
}

const elementWait = new ElementWait();

export { elementWait, ElementWait };
