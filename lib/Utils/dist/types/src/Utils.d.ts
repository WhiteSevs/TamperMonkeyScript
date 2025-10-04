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
import type { UtilsAjaxHookResult } from "./types/ajaxHooker";
import { Vue } from "./Vue";
import { type ArgsType, type JSTypeNames, type UtilsOwnObject } from "./types/global";
import type { WindowApiOption } from "./types/WindowApi";
import { ModuleRaid } from "./ModuleRaid";
import type { ReactInstance } from "./types/React";
declare class Utils {
    private windowApi;
    constructor(option?: WindowApiOption);
    /** 版本号 */
    version: string;
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
    assign: <T1, T2 extends object, T3 extends boolean>(target: T1, source: T2, isAdd?: T3 | undefined) => T3 extends true ? T1 & T2 : T1;
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
     * + 版本：1.4.8
     * + 旧版本：1.2.4
     * + 文档：https://scriptcat.org/zh-CN/script-show-page/637/
     * @param useOldVersion 是否使用旧版本，默认false
     */
    ajaxHooker: (useOldVersion?: boolean) => UtilsAjaxHookResult;
    /**
     * 根据坐标点击canvas元素的内部位置
     * @param canvasElement 画布元素
     * @param clientX X坐标，默认值0
     * @param clientY Y坐标，默认值0
     * @param view 触发的事件目标
     */
    canvasClickByPosition(canvasElement: HTMLCanvasElement, clientX?: number | string, clientY?: number | string, view?: Window & typeof globalThis): void;
    /**
     * 复制formData数据
     * @param formData 需要clone的数据
     */
    cloneFormData<T extends FormData>(formData: T, filterFn?: (key: string, value: string | Blob) => boolean): T;
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
    ColorConversion: typeof ColorConversion;
    /**
     * 深拷贝
     * @param obj 对象
     */
    deepClone: <T extends object | undefined | null>(obj?: T | undefined) => T;
    /**
     * 防抖函数
     * @param fn 需要触发的回调
     * @param delay 防抖判定时间(毫秒)，默认是0ms
     */
    debounce<A extends any[], R>(fn: (...args: A) => R, delay?: number): (...args: A) => void;
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
    formatByteToSize(byteSize: number | string): number;
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
    formatTime(text?: string | number | Date, formatType?: string): string;
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
    formatTime(text?: string | number | Date, formatType?: "yyyy-MM-dd HH:mm:ss" | "yyyy/MM/dd HH:mm:ss" | "yyyy_MM_dd_HH_mm_ss" | "yyyy年MM月dd日 HH时mm分ss秒" | "yyyy年MM月dd日 hh:mm:ss" | "yyyy年MM月dd日 HH:mm:ss" | "yyyy-MM-dd" | "yyyyMMdd" | "HH:mm:ss" | "yyyy" | "MM" | "dd" | "HH" | "mm" | "ss"): string;
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
    getArrayLastValue<R = unknown>(targetObj: NodeList | any[]): R;
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
     * 获取页面中最大的z-index的元素信息
     * @param deviation 获取最大的z-index值的偏移，默认是1
     * @param node 进行判断的元素，默认是document
     * @param ignoreCallBack 执行元素处理时调用的函数，返回false可忽略不想要处理的元素
     * @example
     * Utils.getMaxZIndexNodeInfo();
     * > {
     *   node: ...,
     *   zIndex: 1001
     * }
     **/
    getMaxZIndexNodeInfo(deviation?: number, target?: Element | ShadowRoot | Document, ignoreCallBack?: ($ele: Element | HTMLElement | ShadowRoot) => boolean | void): {
        node: Element;
        zIndex: number;
    };
    /**
     * 获取页面中最大的z-index
     * @param deviation 获取最大的z-index值的偏移，默认是1
     * @param node 进行判断的元素，默认是document
     * @param ignoreCallBack 执行元素处理时调用的函数，返回false可忽略不想要处理的元素
     * @example
     * Utils.getMaxZIndex();
     * > 1001
     **/
    getMaxZIndex(deviation?: number, target?: Element | DocumentOrShadowRoot | Document, ignoreCallBack?: ($ele: Element | HTMLElement | ShadowRoot) => boolean | void): number;
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
     * 获取随机值
     * @example
     * Utils.getRandomValue(1,9,6,99)
     * > 6
     */
    getRandomValue<T>(...args: T[]): T;
    /**
     * 获取随机值
     * @example
     * Utils.getRandomValue([1,2,3])
     * > 3
     * @example
     * Utils.getRandomValue({1:"结果1",2:"结果2",3:"结果3"}})
     * > 结果2
     */
    getRandomValue<T>(val: T[] | UtilsOwnObject<T>): T;
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
    getRandomValue<T>(val_1: UtilsOwnObject<T>, val_2: UtilsOwnObject<T>): T;
    /**
     * 获取元素上的使用React框架的实例属性，目前包括reactFiber、reactProps、reactEvents、reactEventHandlers、reactInternalInstance
     * @param element 需要获取的目标元素
     * @returns
     * @example
     * Utils.getReactInstance(document.querySelector("input"))?.reactProps?.onChange({target:{value:"123"}});
     */
    getReactInstance(element: HTMLElement | Element): ReactInstance;
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
    isNativeFunc(target: (...args: any[]) => any): boolean;
    /**
     * 判断当前的位置是否位于页面底部附近
     * @param nearBottomHeight （可选）判断在底部的误差值，默认：50
     * @returns
     * + true 在底部附近
     * + false 不在底部附近
     */
    isNearBottom(nearBottomHeight?: number): boolean;
    /**
     * 判断元素内当前的位置是否位于元素内底部附近
     * @param target 需要判断的元素
     * @param nearBottomHeight （可选）判断在底部的误差值，默认：50
     */
    isNearBottom(target: HTMLElement, nearBottomHeight?: number): boolean;
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
    isDOM: (target: any) => boolean;
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
    isNotNull: {
        <T>(value: T | null | undefined): value is T;
        (...args: any[]): boolean;
    };
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
    isNull: {
        <T>(value: T | undefined | null): value is null | undefined;
        (...args: any[]): boolean;
    };
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
    isVisible(element: HTMLElement | HTMLElement[] | Element | NodeList, inView?: boolean): boolean;
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
    parseObjectToArray<T>(target: T): T[keyof T][];
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
    mergeArrayToString<T>(data: T[], handleFunc?: ((val: T) => T) | keyof T): string;
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
    }): MutationObserver;
    /**
     * 使用观察器观察元素出现在视图内，出现的话触发回调
     * @param target 目标元素
     * @param callback 触发的回调
     * @param options 观察器配置
     * @example
     * Utils.mutationVisible(document.querySelector("div.xxxx"),(entries,observer)=>{
     *     console.log("该元素出现在视图内");
     * }))
     */
    mutationVisible(target: Element | Element[], callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void, options?: IntersectionObserverInit): void;
    /**
     * 去除全局window下的Utils，返回控制权
     * @example
     * let utils = Utils.noConflict();
     * > ...
     */
    noConflict(): Utils;
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
    parseInt(matchList?: any[] | null | undefined | RegExpMatchArray, defaultValue?: number): number;
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
     * 字符串转正则，用于把字符串中不规范的字符进行转义
     * @param text 需要进行转换的字符串
     * @param flags （可选）正则标志，默认`gi`
     * @example
     * Utils.toRegExp("^替换$");
     * > /^替换$/gi
     */
    toRegExp(text: string | RegExp, flags?: "g" | "i" | "m" | "u" | "y" | string): RegExp;
    /**
     * 将字符串进行正则转义
     * 例如：^替换$
     * 转换：\^替换\$
     * @param text 需要转义的字符串
     * @example
     * Utils.toRegExpStr("^替换$");
     * > \^替换\$
     */
    toRegExpStr(text: string): string;
    /**
       * 在canvas元素节点上绘制进度圆圈
       * @example
        let progress = new Utils.Process({canvasNode:document.querySelector("canvas")});
        progress.draw();
       * **/
    Progress: typeof Progress;
    /**
     * 劫持所有Event的isTrust为true，脚本注入时刻请设置为`ducument-start`
     * @param isTrustValue （可选）让isTrusted为true
     * @param filter （可选）过滤出需要的事件名，返回值true为需要，返回值false为不需要，默认click事件为需要的
     * @example
     * Utils.hookEvent_isTrusted()
     */
    hookEvent_isTrusted(isTrustValue?: boolean, filter?: (typeName: string) => boolean): void;
    /**
     * 将数字进行正/负转换
     * @param num 需要进行转换的数字
     */
    reverseNumber(num: number): number;
    /**
     * 复制到剪贴板
     * @param data 需要复制到剪贴板的文本
     * @param info （可选）默认：text/plain
     * @example
     * Utils.copy({1:2});
     * > {"1":2}
     * @example
     * Utils.copy( ()=>{
     *   console.log(1)
     * });
     * > ()=>{console.log(1)}
     * @example
     * Utils.copy("xxxx");
     * > xxxx
     * @example
     * Utils.copy("xxxx","html");
     * > xxxx
     * @example
     * Utils.copy("xxxx","text/plain");
     * > xxxx
     **/
    copy(data: any, info?: {
        type: string;
        mimetype: string;
    } | string): Promise<boolean>;
    /**
     * 获取剪贴板信息
     * @example
     * await Utils.getClipboardInfo();
     * > { error: null, content: "剪贴板内容" }
     */
    getClipboardInfo(): Promise<{
        /**
         * 错误信息，如果为null，则表示读取成功
         */
        error: Error | null;
        /**
         * 剪贴板内容
         */
        content: string;
    }>;
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
     * @param $el （可选）目标元素，默认：document.documentElement
     * @example
     * Utils.exitFullScreen();
     */
    exitFullScreen($el?: HTMLElement | HTMLDocument | Document): Promise<void>;
    /**
     * 数组按照内部某个值的大小比对排序，该函数会改变原数组
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
    sortListByProperty<T>(data: T[], getPropertyValueFunc: string | ((value: T) => any), sortByDesc?: boolean): T[];
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
     * @param text 目标字符串
     * @param otherStrToLowerCase （可选）剩余部分字符串转大写，默认false
     */
    firstLetterToLowercase(text: string, otherToUpperCase?: boolean): string;
    /**
     * 字符串转Object对象，类似'{"test":""}' => {"test":""}
     * @param data
     * @param errorCallBack （可选）错误回调
     * @example
     * Utils.toJSON("{123:123}")
     * > {123:123}
     */
    toJSON: <T = any>(data: string | null, errorCallBack?: (error: Error) => void) => T;
    /**
     * 对象转为UrlSearchParams格式的字符串
     * @param obj 目标对象，可以是对象组成的数组
     * @param addPrefix 是否添加前缀?
     * @example
     * Utils.toSearchParamsStr({
     *   "test": 1,
     *   "test2": 2
     * })
     * > test=1&test2=2
     * @example
     * Utils.toSearchParamsStr([{
     *   "test": 1,
     *   "test2": 2
     * },
     * {
     *   "test3": 3
     * }
     * ])
     * > test=1&test2=2&test3=3
     */
    toSearchParamsStr(obj: object | object[], addPrefix?: boolean): string;
    /**
     * 将UrlSearchParams格式的字符串转为对象
     */
    searchParamStrToObj<T>(searhParamsStr?: string | null | undefined): T;
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
        config(paramDetails: import("./types/TryCatch").UtilsTryCatchConfig): /*elided*/ any;
        error(handler: ((...args: any[]) => any) | string | ((...args: any[]) => any)): /*elided*/ any;
        run<A extends any[], R>(callback: ((...args: A) => R) | string | ((...args: any[]) => any), __context__?: any): import("./types/TryCatch").UtilsTryCatchType;
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
    uniqueArray<T, TT>(uniqueArrayData?: T[], compareArrayData?: TT[], compareFun?: (item1: T, item2: TT) => boolean): any[];
    /**
     * 数组去重，去除不需要的值
     * @param uniqueArrayData 需要过滤的数组
     * @param getIdentfierValue 获取用于确定唯一性的值
     * @example
     * Utils.uniqueArray([{name:"1",host:"baidu.com"},{name:"2",host:"baidu.com"},{name:"3",host:"baidu.com"}]);
     * > [{name:"1",host:"baidu.com"}]
     */
    uniqueArray<T>(uniqueArrayData: T[], getIdentfierValue: (itemValue: T) => any): T[];
    /**
     * 等待函数数组全部执行完毕，注意，每个函数的顺序不是同步
     * @param data 需要遍历的数组
     * @param handleFunc 对该数组进行操作的函数，该函数的参数为数组格式的参数,[数组下标，数组项]
     * @example
     * await Utils.waitArrayLoopToEnd([callback,callback,callback],xxxcallback);
     **/
    waitArrayLoopToEnd(data: any[] | HTMLElement[], handleFunc: (...args: any[]) => any): Promise<void[]>;
    /**
     * 使用`Object.defineProperty`等待对象上的属性出现
     * @param target 检查的对象
     * @param propertyName 检查的对象的属性名
     * @example
     * await Utils.waitProperty(window,"test");
     * console.log("test success set");
     *
     * window.test = 1;
     * > "test success set"
     *
     */
    waitProperty<T>(target: any, propertyName: string): Promise<T>;
    waitProperty<T>(checkFn: () => any, propertyName: string): Promise<T>;
    /**
     * 在规定时间内等待对象上的属性出现
     * @param target 检查的对象
     * @param propertyName 检查的对象的属性名
     * @param intervalTimer （可选）检查间隔时间（ms），默认250ms
     * @param maxTime （可选）限制在多长时间内，默认-1(不限制时间)
     * @example
     * await Utils.waitPropertyByInterval(window,"test");
     * console.log("test success set");
     */
    waitPropertyByInterval<T>(target: any, propertyName: string, intervalTimer?: number, maxTime?: number): Promise<T>;
    /**
     * 在规定时间内等待对象上的属性出现
     * @param target 检查的对象
     * @param checkFn 检查属性是否在对象上
     * @param intervalTimer （可选）检查间隔时间（ms），默认250ms
     * @param maxTime （可选）限制在多长时间内，默认-1(不限制时间)
     * @example
     * await Utils.waitPropertyByInterval(window,() => "test" in window);
     * console.log("test success set");
     */
    waitPropertyByInterval<T>(target: any, checkFn: (inst: any) => boolean, intervalTimer?: number, maxTime?: number): Promise<T>;
    /**
     * 在规定时间内等待对象上的属性出现
     * @param queryTarget 获取对象的函数
     * @param propertyName 检查的对象的属性名
     * @param intervalTimer （可选）检查间隔时间（ms），默认250ms
     * @param maxTime （可选）限制在多长时间内，默认-1(不限制时间)
     * @example
     * await Utils.waitPropertyByInterval(() => window,"test");
     * console.log("test success set");
     */
    waitPropertyByInterval<T>(queryTarget: () => any, propertyName: string, intervalTimer?: number, maxTime?: number): Promise<T>;
    /**
     * 在规定时间内等待对象上的属性出现
     * @param queryTarget 获取对象的函数
     * @param checkFn 检查属性是否在对象上
     * @param intervalTimer （可选）检查间隔时间（ms），默认250ms
     * @param maxTime （可选）限制在多长时间内，默认-1(不限制时间)
     * @example
     * await Utils.waitPropertyByInterval(() => window,() => "test" in window);
     * console.log("test success set");
     */
    waitPropertyByInterval<T>(queryTarget: () => any, checkFn: (inst: any) => boolean, intervalTimer?: number, maxTime?: number): Promise<T>;
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
     * function(vueInst){
     *    return Boolean(vueInst.xxx == null);
     * },
     * 250,
     * 10000,
     * "__vue__"
     * )
     */
    waitVueByInterval(element: HTMLElement | (() => any), propertyName: string | ((__vue__: any) => boolean), timer?: number, maxTime?: number, vueName?: "__vue__" | string): Promise<boolean>;
    /**
     * 使用`Object.defineProperty`观察对象的set、get
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
    watchObject(target: any, propertyName: string, getCallBack: (value: any) => void, setCallBack: (value: any) => void): void;
    /**
     * 深度获取对象属性
     * @param target 待获取的对象
     * @param handler 获取属性的回调
     */
    queryProperty<T = any>(target: any, handler: (target: T) => {
        /**
         * 是否是需要的属性
         * + `true` 将目标值赋值给data
         * + `false` 不是需要的，data为下一个处理的对象
         */
        isFind: boolean;
        /**
         * 对象/目标值
         */
        data: any;
    }): any;
    /**
     * 异步-深度获取对象属性
     * @param target 待获取的对象
     * @param handler 获取属性的回调
     */
    asyncQueryProperty<T = any>(target: any, handler: (target: T) => {
        /**
         * 是否是需要的属性
         * + true 将目标值赋值给data
         * + false 不是需要的，data为下一个处理的对象
         */
        isFind: boolean;
        /**
         * 对象/目标值
         */
        data: any;
    } | Promise<{
        /**
         * 是否是需要的属性
         * + true 将目标值赋值给data
         * + false 不是需要的，data为下一个处理的对象
         */
        isFind: boolean;
        /**
         * 对象/目标值
         */
        data: any;
    }>): Promise<Awaited<T>>;
    /**
     * 创建一个新的Utils实例
     * @param option
     * @returns
     */
    createUtils(option?: WindowApiOption): Utils;
    /**
     * 将对象转换为FormData
     * @param data 待转换的对象
     * @param isEncode 是否对值为string进行编码转换(encodeURIComponent)，默认false
     * @param valueAutoParseToStr 是否对值强制使用JSON.stringify()转换，默认false
     * @example
     * Utils.toFormData({
     * 	test: "1",
     *  666: 666,
     * })
     */
    toFormData(data: {
        [key: string]: string | Blob | File | number;
    }, isEncode?: boolean, valueAutoParseToStr?: boolean): FormData;
    /**
     * 将链接转为URL对象，自动补充URL的protocol或者origin
     * @param text 需要转换的链接字符串
     * @example
     * Utils.toUrl("//www.baidu.com/s?word=666");
     * Utils.toUrl("/s?word=666");
     */
    toUrl(text: string): URL;
    /**
     * 覆盖对象中的函数this指向
     * @param target 需要覆盖的对象
     * @param [objectThis] 覆盖的this指向，如果为传入，则默认为对象本身
     */
    coverObjectFunctionThis: (target: any, objectThis?: any) => void;
    /**
     * 生成uuid
     * @example
     * Utils.generateUUID()
     */
    generateUUID: () => string;
    /**
     * 自定义的动态响应对象
     * @example
     * let vue = new Utils.Vue();
     * let reactive = new vue.reactive({});
     * vue.watch(()=>reactive["name"], (newValue, oldValue)=>{
     *     console.log("newValue ==> " + newValue);
     *     console.log("oldValue ==> " + oldValue);
     * })
     * vue["name"] = "测试";
     * > "测试"
     */
    Vue: typeof Vue;
    ModuleRaid: typeof ModuleRaid;
    /**
     * 自动使用 Worker 执行 setTimeout
     * @param callback 回调函数
     * @param [timeout=0] 延迟时间，默认为0
     */
    workerSetTimeout(callback: (...args: any[]) => any, timeout?: number): number;
    /**
     * 配合 .setTimeout 使用
     * @param timeId setTimeout 返回的`id`
     */
    workerClearTimeout(timeId: number | undefined): void;
    /**
     * 自动使用 Worker 执行 setInterval
     * @param callback 回调函数
     * @param timeout 间隔时间，默认为0
     */
    workerSetInterval(callback: (...args: any[]) => any, timeout?: number): number;
    /**
     * 配合 .setInterval 使用
     * @param timeId setInterval 返回的`id`
     */
    workerClearInterval(timeId: number | undefined): void;
    /**
     * 构造一个函数（可为异步函数）
     *
     * 前面的是入参，后面的是代码字符串
     *
     * 如果无入参，那么直接是代码字符串
     *
     * 注意：至少传入一个参数
     * @param args
     * @example
     * const fn = utils.createFunction("console.log(123)");
     * > 123
     * @example
     * const fn = await utils.createFunction("console.log(123)", true);
     * > 123
     * @example
     * const asyncFn = await utils.createFunction("a", "return a", true);
     * asyncFn(111);
     * > 111
     * @example
     * const asyncFn = await utils.createFunction("a", "b", "return a + b", true);
     * asyncFn(1,2);
     * > 3
     * @example
     * const fn = utils.createFunction("a", "b", "return a + b", false);
     * fn(4,5);
     * > 9
     */
    createFunction<R = any>(code: string): () => R;
    createFunction<R = any>(param: string, code: string): (param: any) => R;
    createFunction<P extends string[]>(...params: [...P, code: string]): (...args: {
        [K in keyof P]: any;
    }) => any;
    createFunction<P extends string[], T extends boolean>(...params: [...P, code: string, isAsync: T]): T extends true ? (...params: {
        [K in keyof P]: any;
    }) => Promise<any> : (...args: {
        [K in keyof P]: any;
    }) => any;
}
declare const utils: Utils;
export { utils as Utils };
