/// <reference path="../../src/ajaxHooker/index.d.ts" />
import { ColorConversion } from "./ColorConversion";
import { GBKEncoder } from "./GBKEncoder";
import { UtilsGMCookie } from "./UtilsGMCookie";
import { GMMenu } from "./UtilsGMMenu";
import { Hooks } from "./Hooks";
import { Httpx } from "./Httpx";
import { indexedDB } from "./indexedDB";
import { LockFunction } from "./LockFunction";
import { Log } from "./Log";
import { Progress } from "./Progress";
import { UtilsDictionary } from "./Dictionary";
import type { DOMUtils_EventType } from "./Event";
export declare var unsafeWindow: Window & typeof globalThis;
export type JSTypeMap = {
    string: string;
    number: number;
    boolean: boolean;
    object: object;
    symbol: symbol;
    bigint: bigint;
    undefined: undefined;
    null: null;
};
export type JSTypeNames = keyof JSTypeMap;
export type ArgsType<T extends JSTypeNames[]> = {
    [I in keyof T]: JSTypeMap[T[I]];
};
export declare interface UtilsOwnObject<V extends any> {
    [key: string]: V | UtilsOwnObject<V>;
}
export declare interface AnyObject {
    [key: string]: any | AnyObject;
    toString(): string;
}
export declare interface Vue2Context extends AnyObject {
    _isVue: true;
    $options: AnyObject;
    $parent: Vue2Context;
    $root: Vue2Context;
    $children: Vue2Context[];
    $vnode: AnyObject;
    $slots: AnyObject;
    $scopedSlots: AnyObject;
    $attrs: AnyObject;
    $listeners: AnyObject;
    $store: AnyObject;
    $watch: (key: string | string[], handler: (this: any, newVal: any, oldVal: any) => void, options?: {
        immediate?: boolean;
        deep?: boolean;
    }) => void;
    $el: Element;
}
declare class Utils {
    /** 版本号 */
    version: string;
    /**
     * 在页面中增加style元素，如果html节点存在子节点，添加子节点第一个，反之，添加到html节点的子节点最后一个
     * @param cssText css字符串
     * @returns 返回添加的CSS标签
     * @example
     * Utils.GM_addStyle("html{}");
     * > <style type="text/css">html{}</style>
     */
    addStyle(cssText: string): HTMLStyleElement;
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
    /**
     * 异步替换字符串
     * @param string 需要被替换的目标字符串
     * @param pattern 正则匹配模型
     * @param asyncFn 异步获取的函数
     */
    asyncReplaceAll(string: string, pattern: RegExp | string, asyncFn: (item: string) => Promise<string>): Promise<string>;
    /**
     * ajax劫持库，支持xhr和fetch劫持。
     * + 来源：https://bbs.tampermonkey.net.cn/thread-3284-1-1.html
     * + 作者：cxxjackie
     * + 版本：1.4.1
     * + 文档：https://scriptcat.org/zh-CN/script-show-page/637/
     */
    ajaxHooker: () => UtilsAjaxHookResult;
    /**
     * 根据坐标点击canvas元素的内部位置
     * @param canvasElement 画布元素
     * @param clientX X坐标，默认值0
     * @param clientY Y坐标，默认值0
     * @param view 触发的事件目标
     */
    canvasClickByPosition(canvasElement: HTMLCanvasElement, clientX?: number | string, clientY?: number | string, view?: Window & typeof globalThis): void;
    /**
     * 【手机】检测点击的地方是否在该元素区域内
     * @param element 需要检测的元素
     * @returns
     * + true 点击在元素上
     * + false 未点击在元素上
     * @example
     * Utils.checkUserClickInNode(document.querySelector(".xxx"));
     * > false
     **/
    checkUserClickInNode(element: Element | Node | HTMLElement): boolean;
    /**
     * 复制formData数据
     * @param formData 需要clone的数据
     */
    cloneFormData<T extends FormData>(formData: T): T;
    /**
     * 函数重载实现
     * @example
     * let getUsers = Utils.createOverload();
     * getUsers.addImpl("",()=>{
     *    console.log("无参数");
     * });
     *
     * getUsers.addImpl("boolean",()=>{
     *    console.log("boolean");
     * });
     *
     * getUsers.addImpl("string",()=>{
     *    console.log("string");
     * });
     *
     * getUsers.addImpl("number","string",()=>{
     *    console.log("number string");
     * });
     */
    createOverload(): {
        /**
         * 前面的参数都是字符串，最后一个参数是函数
         */
        addImpl<T extends JSTypeNames[]>(...args: [...T, (...args: ArgsType<T>) => any]): void;
    };
    /**
     * 颜色转换
     * @returns
     */
    ColorConversion(): ColorConversion;
    /**
     * 深拷贝
     * @param obj 对象
     */
    deepClone<T extends object | undefined | null>(obj?: T): T;
    /**
     * 防抖函数
     * @param fn 需要触发的回调
     * @param delay 防抖判定时间(毫秒)，默认是0ms
     */
    debounce<A extends any[], R>(fn: (...args: A) => R, delay?: number): (...args: A) => void;
    /**
     * 删除某个父元素，父元素可能在上层或上上层或上上上层...
     * @param element 当前元素
     * @param targetSelector 判断是否满足父元素，参数为当前处理的父元素，满足返回true，否则false
     * @returns
     * + true 已删除
     * + false 未删除
     * @example
     * Utils.deleteParentNode(document.querySelector("a"),".xxx");
     * > true
     **/
    deleteParentNode(element: Node | HTMLElement | Element | null, targetSelector: string): boolean;
    /**
     * 字典
     * @example
     * let dictionary = new Utils.Dictionary();
     * let dictionary2 = new Utils.Dictionary();
     * dictionary.set("test","111");
     * dictionary.get("test");
     * > '111'
     * dictionary.has("test");
     * > true
     * dictionary.concat(dictionary2);
     **/
    Dictionary: typeof UtilsDictionary;
    /**
     * 主动触发事件
     * @param element 元素
     * @param eventName 事件名称，可以是字符串，也可是字符串格式的列表
     * @param details （可选）赋予触发的Event的额外属性
     * + true 使用Proxy代理Event并设置获取isTrusted永远为True
     * + false (默认) 不对Event进行Proxy代理
     * @example
     * Utils.dispatchEvent(document.querySelector("input","input"))
     */
    dispatchEvent(element: HTMLElement | Document, eventName: DOMUtils_EventType | DOMUtils_EventType[], details?: UtilsOwnObject<any>): void;
    /**
     * 主动触发事件
     * @param element 元素
     * @param eventName 事件名称，可以是字符串，也可是字符串格式的列表
     * @param details （可选）赋予触发的Event的额外属性
     * + true 使用Proxy代理Event并设置获取isTrusted永远为True
     * + false (默认) 不对Event进行Proxy代理
     * @example
     * Utils.dispatchEvent(document.querySelector("input","input"))
     */
    dispatchEvent(element: HTMLElement | Document, eventName: string, details?: UtilsOwnObject<any>): void;
    /**
     * 下载base64格式的数据
     * @param base64Data	需要转换的base64数据
     * @param fileName	需要保存的文件名
     * @param isIFrame （可选）是否使用iframe进行下载
     * @example
     * Utils.downloadBase64("data:image/jpeg:base64/,xxxxxx");
     **/
    downloadBase64(base64Data: string, fileName: string, isIFrame?: boolean): void;
    /**
     * 选中页面中的文字，类似Ctrl+F的选中
     * @param str （可选）需要寻找的字符串，默认为空
     * @param caseSensitive（可选）默认false
     * + true 区分大小写
     * + false (默认) 不区分大小写
     * @returns
     * + true 找到
     * + false 未找到
     * + undefined 不可使用该Api
     * @example
     * Utils.findWebPageVisibleText("xxxxx");
     * > true
     **/
    findWebPageVisibleText(str?: string, caseSensitive?: boolean): boolean | void;
    /**
     * 定位元素上的字符串，返回一个迭代器
     * @param element 目标元素
     * @param text 需要定位的字符串
     * @param filter （可选）过滤器函数，返回值为true是排除该元素
     * @example
     * let textIterator = Utils.findElementsWithText(document.documentElement,"xxxx");
     * textIterator.next();
     * > {value: ?HTMLElement, done: boolean, next: Function}
     */
    findElementsWithText<T extends HTMLElement | Element | Node>(element: T, text: string, filter?: (element: T) => boolean): Generator<HTMLElement | ChildNode, void, any>;
    /**
     * 判断该元素是否可见，如果不可见，向上找它的父元素直至找到可见的元素
     * @param element
     * @example
     * let visibleElement = Utils.findVisibleElement(document.querySelector("a.xx"));
     * > <HTMLElement>
     */
    findVisibleElement(element: HTMLElement | Element | Node): HTMLElement | null;
    /**
     * 格式化byte为KB、MB、GB、TB、PB、EB、ZB、YB、BB、NB、DB
     * @param byteSize 字节
     * @param addType （可选）是否添加单位
     * + true (默认) 添加单位
     * + false 不添加单位
     * @returns
     * + {string} 当addType为true时，且保留小数点末尾2位
     * + {number} 当addType为false时，且保留小数点末尾2位
     * @example
     * Utils.formatByteToSize("812304");
     * > '793.27KB'
     * @example
     * Utils.formatByteToSize("812304",false);
     * > 793.27
     **/
    formatByteToSize<T extends boolean>(byteSize: number | string, addType?: T): T extends true ? string : number;
    /**
     * 应用场景: 当你想要获取数组形式的元素时，它可能是其它的选择器，那么需要按照先后顺序填入参数
     * 第一个是优先级最高的，依次下降，如果都没有，返回空列表
     * 支持document.querySelectorAll、$("")、()=>{return document.querySelectorAll("")}
     * @param NodeList
     * @example
     * Utils.getNodeListValue(
     *  document.querySelectorAll("div.xxx"),
     *  document.querySelectorAll("a.xxx")
     * );
     * > [...div,div,div]
     * @example
     * Utils.getNodeListValue(divGetFunction,aGetFunction);
     * > [...div,div,div]
     */
    getNodeListValue(...args: (NodeList | (() => HTMLElement))[]): HTMLElement[];
    /**
     * 自动判断N个参数，获取非空的值，如果都是空，返回最后一个值
     */
    getNonNullValue(...args: any[]): any;
    /**
     * 获取格式化后的时间
     * @param text （可选）需要格式化的字符串或者时间戳，默认：new Date()
     * @param formatType （可选）格式化成的显示类型，默认：yyyy-MM-dd HH:mm:ss
     * + yyyy 年
     * + MM 月
     * + dd 天
     * + HH 时 (24小时制)
     * + hh 时 (12小时制)
     * + mm 分
     * + ss 秒
     * @returns {string}	返回格式化后的时间
     * @example
     * Utils.formatTime("2022-08-21 23:59:00","HH:mm:ss");
     * > '23:59:00'
     * @example
     * Utils.formatTime(1899187424988,"HH:mm:ss");
     * > '15:10:13'
     * @example
     * Utils.formatTime()
     * > '2023-1-1 00:00:00'
     **/
    formatTime(text?: string | number | Date, formatType?: "yyyy-MM-dd HH:mm:ss" | "yyyy/MM/dd HH:mm:ss" | "yyyy年MM月dd日 HH时mm分ss秒" | "yyyyMMdd" | "yyyy_MM_dd_HH_mm_ss" | "yyyy年MM月dd日 hh:mm:ss" | "yyyy-MM-dd" | "HH:mm:ss"): string;
    /**
     * 字符串格式的时间转时间戳
     * @param text	字符串格式的时间，例如：
     * + 2022-11-21 00:00:00
     * + 00:00:00
     * @returns 返回时间戳
     * @example
     * Utils.formatToTimeStamp("2022-11-21 00:00:00");
     * > 1668960000000
     **/
    formatToTimeStamp(text: string): number;
    /**
     * gbk格式的url编码,来自https://greasyfork.org/zh-CN/scripts/427726-gbk-url-js
     * @example
     * let gbkEncoder = new Utils.GBKEncoder();
     * gbkEncoder.encode("测试");
     * > '%B2%E2%CA%D4'
     * gbkEncoder.decode("%B2%E2%CA%D4");
     * > 测试
     */
    GBKEncoder: typeof GBKEncoder;
    /**
     * 获取 transitionend 的在各个浏览器的兼容名
     */
    getTransitionEndNameList(): string[];
    /**
     * 获取 animationend 的在各个浏览器的兼容名
     */
    getAnimationEndNameList(): string[];
    /**
     * 获取NodeList或Array对象中的最后一个的值
     * @param targetObj
     * @returns
     * @example
     * Utils.getArrayLastValue(document.querySelectorAll("div"));
     * > div
     * @example
     * Utils.getArrayLastValue([1,2,3,4,5]);
     * > 5
     */
    getArrayLastValue<R extends any>(targetObj: NodeList | any[]): R;
    /**
     * 应用场景: 当想获取的元素可能是不同的选择器的时候，按顺序优先级获取
     * 参数类型可以是Element或者是Function
     * @returns 如果都没有的话，返回null
     * @example
     * // 如果a.aaa不存在的话，取a.bbb，这里假设a.aaa不存在
     * Utils.getArrayRealValue(document.querySelector("a.aaa"),document.querySelector("a.bbb"));
     * > a.bbb
     * @example
     * Utils.getArrayRealValue(()=>{return document.querySelector("a.aaa").href},()=>{document.querySelector("a.bbb").getAttribute("data-href")});
     * > javascript:;
     */
    getArrayRealValue(...args: (NodeList | (() => HTMLElement))[]): any;
    /**
     * 获取天数差异，如何获取某个时间与另一个时间相差的天数
     * @param timestamp1 （可选）时间戳(毫秒|秒)，不区分哪个更大，默认为：Date.now()
     * @param timestamp2 （可选）时间戳(毫秒|秒)，不区分哪个更大，默认为：Date.now()
     * @param type （可选）返回的数字的表达的类型，比如：年、月、天、时、分、秒、auto，默认天
     * @example
     * Utils.getDaysDifference(new Date().getTime());
     * > 0
     * @example
     * Utils.getDaysDifference(new Date().getTime(),undefined,"秒");
     * > 0
     */
    getDaysDifference(timestamp1?: number, timestamp2?: number, type?: "auto"): string;
    /**
     * 获取天数差异，如何获取某个时间与另一个时间相差的天数
     * @param timestamp1 （可选）时间戳(毫秒|秒)，不区分哪个更大，默认为：Date.now()
     * @param timestamp2 （可选）时间戳(毫秒|秒)，不区分哪个更大，默认为：Date.now()
     * @param type （可选）返回的数字的表达的类型，比如：年、月、天、时、分、秒、auto，默认天
     * @example
     * Utils.getDaysDifference(new Date().getTime());
     * > 0
     * @example
     * Utils.getDaysDifference(new Date().getTime(),undefined,"秒");
     * > 0
     */
    getDaysDifference(timestamp1?: number, timestamp2?: number, type?: "年" | "月" | "天" | "时" | "分" | "秒"): number;
    /**
     * 获取元素的选择器字符串
     * @param element
     * @example
     * Utils.getElementSelector(document.querySelector("a"))
     * > '.....'
     */
    getElementSelector(element: HTMLElement): string;
    /**
     * 获取最大值
     * @example
     * Utils.getMaxValue(1,3,5,7,9)
     * > 9
     */
    getMaxValue(...args: number[]): number;
    /**
     * 获取最大值
     * @example
     * Utils.getMaxValue([1,3,5])
     * > 5
     */
    getMaxValue(val: number[]): number;
    /**
     * 获取最大值
     * @example
     * Utils.getMaxValue({1:123,2:345,3:456},(key,value)=>{return parseInt(value)})
     * > 456
     */
    getMaxValue(val: UtilsOwnObject<number>, handler: (key: any, value: any) => number): number;
    /**
     * 获取页面中最大的z-index
     * @param deviation 获取最大的z-index值的偏移，默认是+1
     * @example
     * Utils.getMaxZIndex();
     * > 1001
     **/
    getMaxZIndex(deviation?: number): number;
    /**
     * 获取最小值
     * @example
     * Utils.getMinValue(1,3,5,7,9)
     * > 1
     */
    getMinValue(...args: number[]): number;
    /**
     * 获取最小值
     * @example
     * Utils.getMinValue([1,3,5])
     * > 1
     */
    getMinValue(val: number[]): number;
    /**
     * 获取最小值
     * @example
     * Utils.getMinValue({1:123,2:345,3:456},(key,value)=>{return parseInt(value)})
     * > 123
     */
    getMinValue(val: UtilsOwnObject<number>, handler: (key: any, value: any) => number): number;
    /**
     * 获取最小值
     * @example
     * Utils.getMinValue([{1:123},{2:345},{3:456}],(index,value)=>{return parseInt(index)})
     * > 0
     */
    getMinValue(val: UtilsOwnObject<number>[], handler: (index: number, value: any) => number): number;
    /**
     * 获取随机的安卓手机User-Agent
     * @example
     * Utils.getRandomAndroidUA();
     * > 'Mozilla/5.0 (Linux; Android 10; MI 13 Build/OPR1.170623.027; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.3490.40 Mobile Safari/537.36'
     **/
    getRandomAndroidUA(): string;
    /**
     * 获取随机值
     * @example
     * Utils.getRandomValue(1,9,6,99)
     * > 6
     */
    getRandomValue<T extends any>(...args: T[]): T;
    /**
     * 获取随机值
     * @example
     * Utils.getRandomValue([1,2,3])
     * > 3
     * @example
     * Utils.getRandomValue({1:"结果1",2:"结果2",3:"结果3"}})
     * > 结果2
     */
    getRandomValue<T extends any>(val: T[] | UtilsOwnObject<T>): T;
    /**
     * 获取两个数之间随机值
     * @example
     * Utils.getRandomValue(1,9)
     * > 6
     */
    getRandomValue(val_1: number, val_2: number): number;
    /**
     * 获取随机值
     * @example
     * Utils.getRandomValue({1:1},{2:2})
     * > {1: 1}
     */
    getRandomValue<T extends any>(val_1: UtilsOwnObject<T>, val_2: UtilsOwnObject<T>): T;
    /**
     * 获取随机的电脑端User-Agent
     * + Mozilla/5.0：以前用于Netscape浏览器，目前大多数浏览器UA都会带有
     * + Windows NT 13：代表Window11系统
     * + Windows NT 10.0：代表Window10系统
     * + Windows NT 6.1：代表windows7系统
     * + WOW64：Windows-on-Windows 64-bit，32位的应用程序运行于此64位处理器上
     * + Win64：64位
     * + AppleWebKit/537.36：浏览器内核
     * + KHTML：HTML排版引擎
     * + like Gecko：这不是Geckeo 浏览器，但是运行起来像Geckeo浏览器
     * + Chrome/106.0.5068.19：Chrome版本号
     * + Safari/537.36：宣称自己是Safari？
     * @returns 返回随机字符串
     * @example
     * Utils.getRandomPCUA();
     * > 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.5068.19 Safari/537.36'
     **/
    getRandomPCUA(): string;
    /**
     * 获取元素上的使用React框架的实例属性，目前包括reactFiber、reactProps、reactEvents、reactEventHandlers、reactInternalInstance
     * @param element 需要获取的目标元素
     * @returns
     * @example
     * Utils.getReactObj(document.querySelector("input"))?.reactProps?.onChange({target:{value:"123"}});
     */
    getReactObj(element: HTMLElement | Element): {
        reactFiber?: AnyObject;
        reactProps?: AnyObject;
        reactEvents?: AnyObject;
        reactEventHandlers?: AnyObject;
        reactInternalInstance?: AnyObject;
        reactContainer?: AnyObject;
    };
    /**
     * 获取对象上的Symbol属性，如果没设置keyName，那么返回一个对象，对象是所有遍历到的Symbol对象
     * @param target 目标对象
     * @param keyName （可选）Symbol名或者Symbol对象
     */
    getSymbol(target: any, keyName?: string | symbol): any;
    /**
     * 获取文本的字符长度
     * @param text
     * @example
     * Utils.getTextLength("测试文本")
     * > 12
     */
    getTextLength(text: string): number;
    /**
     * 获取文本占据的空间大小，返回自动的单位，如12 Kb,14 K,20 MB，1 GB
     * @param text 目标字符串
     * @param addType （可选）是否添加单位
     * + true (默认) 自动添加单位
     * + false 不添加单位
     * @example
     * Utils.getTextStorageSize("测试文本");
     * > '12.00B'
     */
    getTextStorageSize<T extends boolean>(text: string, addType?: T): T extends true ? string : number;
    /**
     * 获取迅雷协议的Url
     * @param url Url链接或者其它信息
     */
    getThunderUrl(url: string): string;
    /**
     * 对于GM_cookie的兼容写法，当无法使用GM_cookie时可以使用这个,但是并不完全兼容，有些写不出来且限制了httponly是无法访问的
     * @example
      let GM_cookie = new Utils.GM_Cookie();
      GM_cookie.list({name:"xxx_cookie_xxx"},function(cookies,error){
          if (!error) {
              console.log(cookies);
              console.log(cookies.value);
          } else {
              console.error(error);
          }
      });
      GM_cookie.set({name:"xxx_cookie_test_xxx",value:"这是Cookie测试值"},function(error){
          if (error) {
              console.error(error);
          } else {
              console.log('Cookie set successfully.');
          }
      })
      GM_cookie.delete({name:"xxx_cookie_test_xxx"},function(error){
          if (error) {
              console.error(error);
          } else {
              console.log('Cookie set successfully.');
          }
      })
     **/
    GM_Cookie: typeof UtilsGMCookie;
    /**
     * 注册油猴菜单，要求本地存储的键名不能存在其它键名`GM_Menu_Local_Map`会冲突/覆盖
     * @example
      let GM_Menu = new Utils.GM_Menu({
        data: [
          {
            menu_key: "menu_key",
            text: "测试按钮",
            enable: true,
            accessKey: "a",
            autoClose: false,
            showText(text, enable) {
              return "[" + (enable ? "√" : "×") + "]" + text;
            },
            callback(data) {
              console.log("点击菜单，值修改为", data.enable);
            },
          },
        ],
        autoReload: false,
        GM_getValue,
        GM_setValue,
        GM_registerMenuCommand,
        GM_unregisterMenuCommand,
      });
  
  
      // 获取某个菜单项的值
      GM_Menu.get("menu_key");
      > true
  
      // 获取某个菜单项的开启/关闭后显示的文本
      GM_Menu.getShowTextValue("menu_key");
      > √测试按钮
  
      // 添加键为menu_key2的菜单项
      GM_Menu.add({
        key:"menu_key2",
        text: "测试按钮2",
        enable: false,
        showText(text,enable){
          return "[" + (enable ? "√" : "×") + "]" + text;
        },
        callback(data){
          console.log("点击菜单，值修改为",data.enable);
        }
      });
      // 使用数组的方式添加多个菜单，如menu_key3、menu_key4
      GM_Menu.add([
        {
          key:"menu_key3",
          text: "测试按钮3",
          enable: false,
          showText(text,enable){
            return "[" + (enable ? "√" : "×") + "]" + text;
          },
          callback(data){
            console.log("点击菜单，值修改为",data.enable);
          }
        },
        {
          key:"menu_key4",
          text: "测试按钮4",
          enable: false,
          showText(text,enable){
            return "[" + (enable ? "√" : "×") + "]" + text;
          },
          callback(data){
            console.log("点击菜单，值修改为",data.enable);
          }
        }
      ]);
  
      // 更新键为menu_key的显示文字和点击回调
      GM_Menu.update({
        menu_key:{
          text: "更新后的测试按钮",
          enable: true,
          showText(text,enable){
            return "[" + (enable ? "√" : "×") + "]" + text;
          },
          callback(data){
            console.log("点击菜单更新后的测试按钮，新值修改为",data.enable);
          }
        }
      });
  
      // 删除键为menu_key的菜单
      GM_Menu.delete("menu_key");
     **/
    GM_Menu: typeof GMMenu;
    /**
     * 基于Function prototype，能够勾住和释放任何函数
     *
     * .hook
     * + realFunc {string} 用于保存原始函数的函数名称,用于unHook
     * + hookFunc {string} 替换的hook函数
     * + context {object} 目标函数所在对象,用于hook非window对象下的函数，如String.protype.slice,carInstance1
     * + methodName {string} 匿名函数需显式传入目标函数名eg:this.Begin = function(){....};}
     *
     * .unhook
     * + realFunc {string} 用于保存原始函数的函数名称,用于unHook
     * + funcName {string} 被Hook的函数名称
     * + context {object} 目标函数所在对象,用于hook非window对象下的函数，如String.protype.slice,carInstance1
     * @example
      let hook = new Utils.Hooks();
      hook.initEnv();
      function myFunction(){
          console.log("我自己需要执行的函数");
      }
      function testFunction(){
          console.log("正常执行的函数");
      }
      testFunction.hook(testFunction,myFunction,window);
     **/
    Hooks: typeof Hooks;
    /**
     * 为减少代码量和回调，把GM_xmlhttpRequest封装
     * 文档地址: https://www.tampermonkey.net/documentation.php?ext=iikm
     * 其中onloadstart、onprogress、onreadystatechange是回调形式，onabort、ontimeout、onerror可以设置全局回调函数
     * @param _GM_xmlHttpRequest_ 油猴中的GM_xmlhttpRequest
     * @example
      let httpx = new Utils.Httpx(GM_xmlhttpRequest);
      let postResp = await httpx.post({
        url:url,
        data:JSON.stringify({
          test:1
        }),
        timeout: 5000
      });
      console.log(postResp);
      > {
        status: true,
        data: {responseText: "...", response: xxx,...},
        msg: "请求完毕",
        type: "onload",
      }
  
      if(postResp === "onload" && postResp.status){
      // onload
      }else if(postResp === "ontimeout"){
      // ontimeout
      }
     * @example
      // 也可以先配置全局参数
      let httpx = new Utils.Httpx(GM_xmlhttpRequest);
      httpx.config({
        timeout: 5000,
        async: false,
        responseType: "html",
        redirect: "follow",
      })
      // 优先级为 默认details < 全局details < 单独的details
     */
    Httpx: typeof Httpx;
    /**
     * 浏览器端的indexedDB操作封装
     * @example
      let db = new Utils.indexedDB('web_DB', 'nav_text')
      let data = {name:'管理员', roleId: 1, type: 1};
      db.save('list',data).then((resolve)=>{
          console.log(resolve,'存储成功')
      })
  
      db.get('list').then((resolve)=>{
          console.log(resolve,'查询成功')
      })
  
      db.getPaging('list',20,10).then((resolve)=>{
          console.log(resolve,'查询分页偏移第20，一共10行成功');
      })
  
      db.delete('list').then(resolve=>{
          console.log(resolve,'删除成功---->>>>>>name')
      })
  
      db.deleteAll().then(resolve=>{
          console.log(resolve,'清除数据库---->>>>>>name')
      })
     **/
    indexedDB: typeof indexedDB;
    /**
     * 判断目标函数是否是Native Code
     * @param target
     * @returns
     * + true 是Native
     * + false 不是Native
     * @example
     * Utils.isNativeFunc(window.location.assign)
     * > true
     */
    isNativeFunc(target: Function): boolean;
    /**
     * 判断当前的位置是否位于页面底部附近
     * @param nearValue （可选）判断在页面底部的误差值，默认：50
     * @returns
     * + true 在底部附近
     * + false 不在底部附近
     */
    isNearBottom(nearValue?: number): boolean;
    /**
     * 判断对象是否是元素
     * @param target
     * @returns
     * + true 是元素
     * + false 不是元素
     * @example
     * Utils.isDOM(document.querySelector("a"))
     * > true
     */
    isDOM(target: any): boolean;
    /**
     * 判断浏览器是否支持全屏
     */
    isFullscreenEnabled(): boolean;
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
    isJQuery(target: any): boolean;
    /**
     * 判断当前设备是否是移动端
     * @param userAgent （可选）UA字符串，默认使用当前的navigator.userAgent
     * @returns
     * + true 是移动端
     * + false 不是移动端
     * @example
     * Utils.isPhone();
     * > true
     **/
    isPhone(userAgent?: string): boolean;
    /**
     * 判断传递的字符串是否是由相同的字符组成
     * @param targetStr 需要判断的字符串，长度(.length)需要≥2
     * @param coefficient 系数（默认:1），某个字符重复的系数大于它那么就是返回true，默认全部
     */
    isSameChars(targetStr: string, coefficient?: number): boolean;
    /**
     * 判断对象是否不为空
     * @returns {boolean}
     * + true 不为空
     * + false 为空
     * @example
     * Utils.isNotNull("123");
     * > true
     */
    isNotNull(...args: any[]): boolean;
    /**
     * 判断对象或数据是否为空
     * + `String`判空的值，如 ""、"null"、"undefined"、"   "
     * + `Number`判空的值，如 0
     * + `Object`判空的值，如 {}、null、undefined
     * + `Array`(存在属性Symbol.iterator)判空的值，如 []
     * + `Boolean`判空的值，如false
     * + `Function`判空的值，如()=>{}、(xxx="")=>{}、function(){}、function(xxx=""){}
     * @returns
     * + true 为空
     * + false 不为空
     * @example
      Utils.isNull({});
      > true
     * @example
      Utils.isNull([]);
      > true
     * @example
      Utils.isNull(" ");
      > true
     * @example
      Utils.isNull(function(){});
      > true
     * @example
      Utils.isNull(()=>{}));
      > true
     * @example
      Utils.isNull("undefined");
      > true
     * @example
      Utils.isNull("null");
      > true
     * @example
      Utils.isNull(" ", false);
      > true
     * @example
      Utils.isNull([1],[]);
      > false
     * @example
      Utils.isNull([],[1]);
      > false
     * @example
      Utils.isNull(false,[123]);
      > false
     **/
    isNull(...args: any[]): boolean;
    /**
     * 判断浏览器主题是否是暗黑|深色模式
     */
    isThemeDark(): boolean;
    /**
     * 判断元素是否在页面中可见
     * @param element 需要检查的元素，可以是普通元素|数组形式的元素|通过querySelectorAll获取的元素数组
     * @param inView
     * + true 在窗口可视区域
     * + false 不在窗口可视区域
     * @returns
     * + true 可见
     * + false 不可见
     * @example
     * Utils.isVisible(document.documentElement)
     * > true
     */
    isVisible(element: HTMLElement[] | NodeList, inView?: boolean): boolean;
    /**
     * 判断是否是Via浏览器环境
     * @returns
     * + true 是Via
     * + false 不是Via
     * @example
     * Utils.isWebView_Via()
     * > false
     */
    isWebView_Via(): boolean;
    /**
     * 判断是否是X浏览器环境
     * @returns
     * + true 是X浏览器
     * + false 不是X浏览器
     * @example
     * Utils.isWebView_X()
     * > false
     */
    isWebView_X(): boolean;
    /**
     * 把对象内的value值全部取出成数组
     * @param target 目标对象
     * @returns 返回数组
     * @example
     * Utils.parseObjectToArray({"工具类":"jsonToArray","return","Array"});
     * > ['jsonToArray', 'Array']
     **/
    parseObjectToArray(target: AnyObject): any;
    /**
     * 监听某个元素键盘按键事件或window全局按键事件
     * 按下有值的键时触发，按下Ctrl\Alt\Shift\Meta是无值键。按下先触发keydown事件，再触发keypress事件。
     * @param target 需要监听的对象，可以是全局Window或者某个元素
     * @param eventName 事件名，默认keypress
     * @param callback 自己定义的回调事件，参数1为当前的key，参数2为组合按键，数组类型，包含ctrl、shift、alt和meta（win键或mac的cmd键）
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
    listenKeyboard(target: Window | Node | HTMLElement | typeof globalThis, eventName: "keyup" | "keypress" | "keydown", callback: (keyName: string, keyValue: string, otherCodeList: string[], event: KeyboardEvent) => void): {
        removeListen(): void;
    };
    /**
     * 自动锁对象，用于循环判断运行的函数，在循环外new后使用，注意，如果函数内部存在异步操作，需要使用await
     * @example
      let lock = new Utils.LockFunction(()=>{console.log(1)}))
      lock.run();
      > 1
     * @example
      let lock = new Utils.LockFunction(()=>{console.log(1)}),true) -- 异步操作
      await lock.run();
      > 1
     **/
    LockFunction: typeof LockFunction;
    /**
     * 日志对象
     * @param _GM_info_ 油猴管理器的API GM_info，或者是一个对象，如{"script":{name:"Utils.Log"}}
     * @example
      let log = new Utils.Log(GM_info);
      log.info("普通输出");
      > 普通输出
  
      log.success("成功输出");
      > 成功输出
  
      log.error("错误输出");
      > 错误输出
      
      log.warn("警告输出");
      > 警告输出
  
      log.tag = "自定义tag信息";
      log.info("自定义info的颜色","#e0e0e0");
      > 自定义info的颜色
  
      log.config({
        successColor: "#31dc02",
        errorColor: "#e02d2d",
        infoColor: "black",
      })
      log.success("颜色为#31dc02");
      > 颜色为#31dc02
     */
    Log: typeof Log;
    /**
     * 合并数组内的JSON的值字符串
     * @param data 需要合并的数组
     * @param handleFunc 处理的函数|JSON的key
     * @example
     * Utils.mergeArrayToString([{"name":"数组内数据部分字段合并成字符串->"},{"name":"mergeToString"}],(item)=>{return item["name"]});
     * > '数组内数据部分字段合并成字符串->mergeToString'
     **/
    mergeArrayToString(data: any[], handleFunc?: (val: any) => any): string;
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
    mutationObserver(target: HTMLElement | Node | NodeList | Document, observer_config: {
        config?: MutationObserverInit;
        callback: MutationCallback;
    }): MutationObserver;
    /**
     * 去除全局window下的Utils，返回控制权
     * @example
     * let utils = Utils.noConflict();
     * > ...
     */
    noConflict: () => Utils;
    /**
     * 恢复/释放该对象内的为function，让它无效/有效
     * @param needReleaseObject 需要操作的对象
     * @param needReleaseName 需要操作的对象的名字
     * @param functionNameList （可选）需要释放的方法，默认：全部方法
     * @param release （可选）
     * + true (默认) 释放该对象下的某些方法
     * + false 恢复该对象下的某些方法
     * @example
      // 释放该方法
      Utils.noConflictFunc(console,"console",["log"],true);
      console.log;
      > () => {}
  
     * @example
      // 恢复该方法
      Utils.noConflictFunc(console,"console",["log"],false);
      console.log;
      > ƒ log() { [native code] }
  
     * @example
      // 释放所有方法
      Utils.noConflictFunc(console,"console",[],true);
      console.debug;
      > () => {}
  
     * @example
      // 恢复所有方法
      Utils.noConflictFunc(console,"console",[],false);
      console.debug;
      > ƒ log() { [native code] }
     **/
    noConflictFunc(needReleaseObject: object, needReleaseName: string, functionNameList?: any[], release?: boolean): void;
    /**
     * base64转blob
     * @param dataUri base64的数据
     * @returns blob的链接
     * @example
     * Utils.parseBase64ToBlob("data:image/jpeg;base64,.....");
     * > blob://xxxxxxx
     **/
    parseBase64ToBlob(dataUri: string): Blob;
    /**
     * base64转File对象
     * @param dataUri base64的数据
     * @param fileName （可选）文件名，默认：example
     * @returns blob的链接
     * @example
     * Utils.parseBase64ToFile("data:image/jpeg;base64,.....","测试文件");
     * > object
     **/
    parseBase64ToFile(dataUri: string, fileName?: string): File;
    /**
     * 将正则匹配到的结果取出最后一个值并转换成int格式
     * @param matchList 正则匹配的列表
     * @param defaultValue 正则匹配的列表为空时，或者正则匹配的列表最后一项不为Int，返回该默认值0
     * @example
     * Utils.parseInt(["dadaadada123124","123124"],0);
     * > 123124
     *
     * @example
     * Utils.parseInt(null,0);
     * > 0
     * @example
     * Utils.parseInt(["aaaaaa"]);
     * > 0
     *
     * @example
     * Utils.parseInt(["aaaaaa"],"66");
     * > 66
     *
     * @example
     * Utils.parseInt(["aaaaaaa"],"aa");
     * > NaN
     **/
    parseInt(matchList?: any[], defaultValue?: number): number;
    /**
     * blob转File对象
     * @param blobUrl 需要转换的blob的链接
     * @param fileName （可选）转换成的File对象的文件名称，默认：example
     * @example
     * Utils.parseBlobToFile("blob://xxxxx");
     * > object
     **/
    parseBlobToFile(blobUrl: string, fileName?: string): Promise<File | Error>;
    /**
     * 解析CDATA格式的内容字符串
     * @param text 传入CDATA字符串
     * @returns 返回解析出的内容
     * @example
     * let xml = "<root><![CDATA[This is some CDATA content.]]></root>";
     * console.log(Utils.parseCDATA(xml));
     * > This is some CDATA content.
     */
    parseCDATA(text: string): string;
    /**
     * 【异步函数】File对象转base64
     * @param fileObj 需要转换的File对象
     * @example
     * await Utils.parseFileToBase64(object);
     * > 'data:image/jpeg:base64/,xxxxxx'
     **/
    parseFileToBase64(fileObj: File): Promise<string>;
    /**
     * 解析字符串
     * @param text 要解析的 DOMString。它必须包含 HTML、xml、xhtml+xml 或 svg 文档。
     * @param mimeType （可选）解析成的类型
     * + （默认）text/html
     * + text/xml
     * + application/xml
     * + application/xhtml+xml
     * + image/svg+xml
     * @example
     * Utils.parseFromString("<p>123<p>");
     * > #document
     */
    parseFromString(text: string, mimeType?: "text/html" | "text/xml" | "application/xml" | "application/xhtml+xml" | "image/svg+xml"): HTMLElement | XMLDocument | SVGElement;
    /**
     * 将字符串进行正则转义
     * 例如：^替换$
     * 转换：\^替换\$
     */
    parseStringToRegExpString(text: string): string;
    /**
     * 阻止事件传递
     * @param element 要进行处理的元素
     * @param eventNameList （可选）要阻止的事件名|列表
     * @param capture （可选）是否捕获，默认false
     * @example
     * Utils.preventEvent(document.querySelector("a"),"click")
     * @example
     * Utils.preventEvent(event);
     */
    preventEvent(event: Event): boolean;
    /**
     * 阻止事件传递
     * @param element 要进行处理的元素
     * @param eventNameList （可选）要阻止的事件名|列表
     * @param capture （可选）是否捕获，默认false
     * @example
     * Utils.preventEvent(document.querySelector("a"),"click")
     * @example
     * Utils.preventEvent(event);
     */
    preventEvent(element: HTMLElement, eventNameList?: string | string[], capture?: boolean): boolean;
    /**
     * 在canvas元素节点上绘制进度圆圈
     * @example
      let progress = new Utils.Process({canvasNode:document.querySelector("canvas")});
      progress.draw();
     * **/
    Progress: typeof Progress;
    /**
     * 劫持Event的isTrust为true，注入时刻，ducument-start
     * @param isTrustValue （可选）让isTrusted为true
     * @param filter （可选）过滤出需要的事件名，true为需要，false为不需要
     * @example
     * Utils.registerTrustClickEvent()
     */
    registerTrustClickEvent(isTrustValue?: boolean, filter?: (typeName: string) => boolean): void;
    /**
     * 将数字进行正/负转换
     * @param num 需要进行转换的数字
     */
    reverseNumber(num: number): number;
    /**
     * 将元素上的文本或元素使用光标进行选中
     *
     * 注意，如果设置startIndex和endIndex，且元素上并无可选则的坐标，那么会报错
     * @param element 目标元素
     * @param childTextNode 目标元素下的#text元素
     * @param startIndex （可选）开始坐标，可为空
     * @param endIndex （可选）结束坐标，可为空
     */
    selectElementText(element: HTMLElement | Element | Node, childTextNode: ChildNode, startIndex?: number, endIndex?: number): void;
    /**
     * 复制到剪贴板
     * @param data 需要复制到剪贴板的文本
     * @param info （可选）默认：text/plain
     * @example
     * Utils.setClip({1:2});
     * > {"1":2}
     * @example
     * Utils.setClip( ()=>{
     *   console.log(1)
     * });
     * > ()=>{console.log(1)}
     * @example
     * Utils.setClip("xxxx");
     * > xxxx
     * @example
     * Utils.setClip("xxxx","html");
     * > xxxx
     * @example
     * Utils.setClip("xxxx","text/plain");
     * > xxxx
     **/
    setClip(data: any, info?: {
        type: string;
        mimetype: string;
    } | string): Promise<boolean>;
    /**
     * 【异步函数】等待N秒执行函数
     * @param callback 待执行的函数(字符串)
     * @param delayTime （可选）延时时间(ms)，默认：0
     * @example
     * await Utils.setTimeout(()=>{}, 2500);
     * > ƒ tryCatchObj() {}
     * @example
     * await Utils.setTimeout("()=>{console.log(12345)}", 2500);
     * > ƒ tryCatchObj() {}
     **/
    setTimeout(callback: (() => void) | string, delayTime?: number): Promise<any>;
    /**
     * 【异步函数】延迟xxx毫秒
     * @param delayTime （可选）延时时间(ms)，默认：0
     * @example
     * await Utils.sleep(2500)
     **/
    sleep(delayTime?: number): Promise<void>;
    /**
     * 向右拖动滑块
     * @param selector 选择器|元素
     * @param offsetX （可选）水平拖动长度，默认：window.innerWidth
     * @example
     * Utils.dragSlider("#xxxx");
     * @example
     * Utils.dragSlider("#xxxx",100);
     */
    dragSlider(selector: string | Element | Node, offsetX?: number): void;
    /**
     * 使目标元素进入全屏
     * @param element （可选）目标元素，默认：document.documentElement
     * @param options （可选）配置，一般不用
     * @example
     * Utils.enterFullScreen();
     */
    enterFullScreen(element: HTMLElement, options?: FullscreenOptions): void;
    /**
     * 使浏览器退出全屏
     * @param element （可选）目标元素，默认：document.documentElement
     * @example
     * Utils.exitFullScreen();
     */
    exitFullScreen(element?: HTMLElement): Promise<void>;
    /**
     * 数组按照内部某个值的大小比对排序，如[{"time":"2022-1-1"},{"time":"2022-2-2"}]
     * @param data 数据|获取数据的方法
     * @param getPropertyValueFunc 数组内部项的某个属性的值的方法，参数为这个项
     * @param sortByDesc （可选）排序方式
     * + true (默认)倒序(值最大排第一个，如:6、5、4、3...)
     * + false 升序(值最小排第一个，如:1、2、3、4...)
     * @returns 返回比较排序完成的数组
     * @example
     * Utils.sortListByProperty([{"time":"2022-1-1"},{"time":"2022-2-2"}],(item)=>{return item["time"]})
     * > [{time: '2022-2-2'},{time: '2022-1-1'}]
     * @example
     * Utils.sortListByProperty([{"time":"2022-1-1"},{"time":"2022-2-2"}],(item)=>{return item["time"]},false)
     * > [{time: '2022-1-1'},{time: '2022-2-2'}]
     **/
    sortListByProperty<T extends any[] | NodeList>(data: T, getPropertyValueFunc: string | ((value: T) => any), sortByDesc?: boolean): T;
    /**
     * 字符串转正则，用于把字符串中不规范的字符进行转义
     * @param targetString 需要进行转换的字符串
     * @param flags 正则标志
     */
    stringToRegular(targetString: string | RegExp, flags?: "g" | "i" | "m" | "u" | "y" | string): RegExp;
    /**
     * 字符串首字母转大写
     * @param targetString 目标字符串
     * @param otherStrToLowerCase （可选）剩余部分字符串转小写，默认false
     */
    stringTitleToUpperCase(targetString: string, otherStrToLowerCase?: boolean): string;
    /**
     * 判断目标字符串是否是以xxx开始
     *
     * 如果searchString是字符串数组，那么判断的结果则是字符串数组中的任意字符匹配到返回true
     * @param target 目标字符串
     * @param searchString 需要搜索的字符串
     * @param position （可选）目标字符串的判断起点，要求≥0，默认为0
     */
    startsWith(target: string, searchString: string | RegExp | string[], position?: number): boolean;
    /**
     * 字符串首字母转小写
     * @param targetString 目标字符串
     * @param otherStrToLowerCase （可选）剩余部分字符串转大写，默认false
     */
    stringTitleToLowerCase(targetString: string, otherStrToUpperCase?: boolean): string;
    /**
     * 字符串转Object对象，类似'{"test":""}' => {"test":""}
     * @param data
     * @param errorCallBack （可选）错误回调
     * @example
     * Utils.toJSON("{123:123}")
     * > {123:123}
     */
    toJSON<T extends AnyObject>(data: string | null, errorCallBack?: (error: Error) => void): T;
    /**
     * 对象转为UrlSearchParams格式的字符串
     * @param obj 目标对象，可以是对象组成的数组
     */
    toSearchParamsStr(obj: object | object[]): string;
    /**
     * 提供一个封装了 try-catch 的函数，可以执行传入的函数并捕获其可能抛出的错误，并通过传入的错误处理函数进行处理。
     * @example
     * Utils.tryCatch().error().run(()=>{console.log(1)});
     * > 1
     * @example
     * Utils.tryCatch().config({log:true}).error((error)=>{console.log(error)}).run(()=>{throw new Error('测试错误')});
     * > ()=>{throw new Error('测试错误')}出现错误
     */
    tryCatch: (...args: any) => {
        config(paramDetails: import("./TryCatch").UtilsTryCatchConfig): any;
        error(handler: string | Function | ((...args: any[]) => any)): any;
        run<A extends any[], R>(callback: string | Function | ((...args: A) => R), __context__?: any): import("./TryCatch").UtilsTryCatchType;
    };
    /**
     * 数组去重，去除重复的值
     * @param uniqueArrayData 需要去重的数组
     * @param compareArrayData 用来比较的数组
     * @param compareFun 数组比较方法，如果值相同，去除该数据
     * @returns 返回去重完毕的数组
     * @example
     * Utils.uniqueArray([1,2,3],[1,2],(item,item2)=>{return item===item2 ? true:false});
     * > [3]
     *
     * @example
     * Utils.uniqueArray([1,2,3],[1,2]);
     * > [3]
     *
     * @example
     * Utils.uniqueArray([{"key":1,"value":2},{"key":2}],[{"key":1}],(item,item2)=>{return item["key"] === item2["key"] ? true:false});
     * > [{"key": 2}]
     **/
    uniqueArray<T extends any, TT extends any>(uniqueArrayData?: T[], compareArrayData?: TT[], compareFun?: (item1: T, item2: TT) => boolean): any[];
    /**
     * 等待函数数组全部执行完毕，注意，每个函数的顺序不是同步
     * @param data 需要遍历的数组
     * @param handleFunc 对该数组进行操作的函数，该函数的参数为数组格式的参数,[数组下标，数组项]
     * @example
     * await Utils.waitArrayLoopToEnd([callback,callback,callback],xxxcallback);
     **/
    waitArrayLoopToEnd(data: any[] | HTMLElement[], handleFunc: Function): Promise<void[]>;
    /**
     * 等待指定元素出现，支持多个selector
     * @param nodeSelectors 一个或多个节点选择器，必须为字符串类型
     * @example
     * Utils.waitNode("div.xxx").then( element =>{
     *  console.log(element); // div.xxx => HTMLElement
     * })
     * @example
     * Utils.waitNode("div.xxx","a.xxx").then( (elementList)=>{
     *  console.log(elementList[0]); // div.xxx => HTMLElement
     *  console.log(elementList[1]); // a.xxx => HTMLElement
     * })
     */
    waitNode<T extends HTMLElement>(nodeSelector: string | [string]): Promise<T>;
    /**
     * 等待指定元素出现，支持多个selector
     * @param nodeSelectors 一个或多个节点选择器，必须为字符串类型
     * @example
     * Utils.waitNode("div.xxx").then( element =>{
     *  console.log(element); // div.xxx => HTMLElement
     * })
     * @example
     * Utils.waitNode("div.xxx","a.xxx").then( (elementList)=>{
     *  console.log(elementList[0]); // div.xxx => HTMLElement
     *  console.log(elementList[1]); // a.xxx => HTMLElement
     * })
     */
    waitNode<T extends HTMLElement>(...nodeSelectors: string[]): Promise<T[]>;
    /**
     * 等待指定元素出现，支持多个selector
     * @param nodeSelectors 一个或多个节点选择器，必须为字符串类型
     * @example
     * Utils.waitNode("div.xxx").then( element =>{
     *  console.log(element); // div.xxx => HTMLElement
     * })
     * @example
     * Utils.waitNode("div.xxx","a.xxx").then( (elementList)=>{
     *  console.log(elementList[0]); // div.xxx => HTMLElement
     *  console.log(elementList[1]); // a.xxx => HTMLElement
     * })
     */
    waitNode<T extends HTMLElement>(...nodeSelectors: string[]): Promise<T | T[]>;
    /**
     * 在规定时间内，等待任意元素出现，支持多个selector，如果未出现，则关闭监听
     * @param nodeSelectorsList 一个或多个节点选择器，必须为字符串类型
     * @param maxTime （可选）xx毫秒(ms)后关闭监听，默认：0(ms)
     * @example
     * Utils.waitNodeWithInterval("a.xxx",30000).then(element=>{
     *   console.log(element);
     * })
     * @example
     * Utils.waitNodeWithInterval(["div.xxx","a.xxx"],30000).then(elementList=>{
     *   console.log(elementList[0]); // div.xxx => HTMLElement
     *   console.log(elementList[1]); // a.xxx => HTMLElement
     * })
     */
    waitNodeWithInterval<T extends HTMLElement>(nodeSelectorsList?: string[] | string, maxTime?: number): Promise<T | T[]>;
    /**
     * 等待任意元素出现，支持多个selector
     * @param nodeSelectors 一个或多个节点选择器，必须为字符串类型
     * @example
     * Utils.waitAnyNode("div.xxx","a.xxx").then( element =>{
     *   console.log(element); // a.xxx => HTMLElement
     * })
     */
    waitAnyNode<T extends HTMLElement>(...nodeSelectors: any[]): Promise<T>;
    /**
     * 等待指定元素出现
     * @param nodeSelectors
     * @returns 当nodeSelectors为数组多个时，
     * 返回如：[ NodeList, NodeList ]，
     * 当nodeSelectors为单个时，
     * 返回如：NodeList。
     * NodeList元素与页面存在强绑定，当已获取该NodeList，但是页面中却删除了，该元素在NodeList中会被自动删除
     * @example
     * Utils.waitNodeList("div.xxx").then( nodeList =>{
     *  console.log(nodeList) // div.xxx => NodeList
     * })
     * @example
     * Utils.waitNodeList("div.xxx","a.xxx").then( nodeListArray =>{
     *  console.log(nodeListArray[0]) // div.xxx => NodeList
     *  console.log(nodeListArray[1]) // a.xxx => NodeList
     * })
     */
    waitNodeList<T extends HTMLElement>(nodeSelector: string): Promise<T>;
    /**
     * 等待指定元素出现，支持多个selector
     * @param nodeSelectors
     * @returns 当nodeSelectors为数组多个时，
     * 返回如：[ NodeList, NodeList ]，
     * 当nodeSelectors为单个时，
     * 返回如：NodeList。
     * NodeList元素与页面存在强绑定，当已获取该NodeList，但是页面中却删除了，该元素在NodeList中会被自动删除
     * @example
     * Utils.waitNodeList("div.xxx").then( nodeList =>{
     *  console.log(nodeList) // div.xxx => NodeList
     * })
     * @example
     * Utils.waitNodeList("div.xxx","a.xxx").then( nodeListArray =>{
     *  console.log(nodeListArray[0]) // div.xxx => NodeList
     *  console.log(nodeListArray[1]) // a.xxx => NodeList
     * })
     */
    waitNodeList<T extends HTMLElement>(...nodeSelectors: string[]): Promise<NodeListOf<T>[]>;
    /**
     * 等待任意元素出现，支持多个selector
     * @param nodeSelectors
     * @returns 返回NodeList
     * NodeList元素与页面存在强绑定，当已获取该NodeList，但是页面中却删除了，该元素在NodeList中会被自动删除
     * @example
     * Utils.waitAnyNodeList("div.xxx").then( nodeList =>{
     *  console.log(nodeList) // div.xxx => NodeList
     * })
     * @example
     * Utils.waitAnyNodeList("div.xxx","a.xxx").then( nodeList =>{
     *  console.log(nodeList) // a.xxx => NodeList
     * })
     */
    waitAnyNodeList<T extends HTMLElement>(...nodeSelectors: string[]): Promise<NodeListOf<T>[]>;
    /**
     * 等待对象上的属性出现
     * @param checkObj 检查的对象
     * @param checkPropertyName 检查的对象的属性名
     * @example
     * await Utils.waitProperty(window,"test");
     * console.log("test success set");
     *
     * window.test = 1;
     * > "test success set"
     *
     */
    waitProperty<T extends any>(checkObj: AnyObject | (() => AnyObject), checkPropertyName: string): Promise<T>;
    /**
     * 在规定时间内等待对象上的属性出现
     * @param checkObj 检查的对象
     * @param checkPropertyName 检查的对象的属性名
     * @param intervalTimer （可选）检查间隔时间（ms），默认250ms
     * @param maxTime （可选）限制在多长时间内，默认-1(不限制时间)
     * @example
     * await Utils.waitPropertyByInterval(window,"test");
     * console.log("test success set");
     */
    waitPropertyByInterval<T extends any>(checkObj: AnyObject | (() => AnyObject), checkPropertyName: string | ((obj: any) => boolean), intervalTimer?: number, maxTime?: number): Promise<T>;
    /**
     * 在规定时间内等待元素上的__vue__属性或者__vue__属性上的某个值出现出现
     * @param element 目标元素
     * @param propertyName （可选）vue上的属性名或者传递一个获取属性的方法返回boolean
     * @param timer （可选）间隔时间（ms），默认：250(ms)
     * @param maxTime（可选） 限制在多长时间内，默认：-1(不限制时间)
     * @param vueName （可选）vue挂载的属性名，默认：__vue__
     * @example
     * await Utils.waitVueByInterval(
     * function(){
     *    return document.querySelector("a.xx")
     * },
     * function(__vue__){
     *    return Boolean(__vue__.xxx == null);
     * },
     * 250,
     * 10000,
     * "__vue__"
     * )
     */
    waitVueByInterval(element: HTMLElement | (() => HTMLElement), propertyName: string | ((__vue__: any) => boolean), timer?: number, maxTime?: number, vueName?: "__vue__" | string): Promise<boolean>;
    /**
     * 观察对象的set、get
     * @param target 观察的对象
     * @param propertyName 观察的对象的属性名
     * @param getCallBack （可选）触发get的回调，可以自定义返回特定值
     * @param setCallBack （可选）触发set的回调，参数为将要设置的value
     * @example
     * Utils.watchObject(window,"test",()=>{return 111;},(value)=>{console.log("test出现，值是",value)});
     *
     * window.test = 1;
     * > test出现，值是 1
     * console.log(window.test);
     * > 111;
     */
    watchObject(target: AnyObject, propertyName: string, getCallBack: (value: any) => void, setCallBack: (value: any) => void): void;
}
declare let utils: Utils;
export { utils as Utils };
