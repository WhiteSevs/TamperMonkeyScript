import type { DOMUtils_Event, DOMUtils_EventType, DOMUtilsElementEventType, DOMUtilsEventListenerOption, DOMUtilsEventListenerOptionsAttribute } from "./types/DOMUtilsEvent";
import type { DOMUtilsTargetElementType } from "./types/global";
import type { WindowApiOption } from "./types/WindowApi";
import { WindowApi } from "./WindowApi";
export declare class DOMUtilsEvent {
    windowApi: typeof WindowApi.prototype;
    constructor(windowApiOption?: WindowApiOption);
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
    on<T extends DOMUtils_EventType>(element: DOMUtilsElementEventType, eventType: T | T[], callback: (this: HTMLElement, event: DOMUtils_Event[T]) => void, option?: DOMUtilsEventListenerOption | boolean): void;
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
    on<T extends Event>(element: DOMUtilsElementEventType, eventType: string, callback: (this: HTMLElement, event: T) => void, option?: DOMUtilsEventListenerOption | boolean): void;
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
     * DOMUtils.on(document.querySelector("a.xx"),"click tap hover",(event)=>{
     *    console.log("事件触发",event)
     * })
     * DOMUtils.on("a.xx",["click","tap","hover"],(event)=>{
     *    console.log("事件触发",event)
     * })
     * @example
     * // 监听全局document下的子元素a.xx的click事件
     * DOMUtils.on(document,"click tap hover","a.xx",(event)=>{
     *    console.log("事件触发",event)
     * })
     */
    on<T extends DOMUtils_EventType>(element: DOMUtilsElementEventType, eventType: T | T[], selector: string | string[] | undefined | null, callback: (this: HTMLElement, event: DOMUtils_Event[T], selectorTarget?: HTMLElement) => void, option?: DOMUtilsEventListenerOption | boolean): void;
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
     * DOMUtils.on(document.querySelector("a.xx"),"click tap hover",(event)=>{
     *    console.log("事件触发",event)
     * })
     * DOMUtils.on("a.xx",["click","tap","hover"],(event)=>{
     *    console.log("事件触发",event)
     * })
     * @example
     * // 监听全局document下的子元素a.xx的click事件
     * DOMUtils.on(document,"click tap hover","a.xx",(event)=>{
     *    console.log("事件触发",event)
     * })
     */
    on<T extends Event>(element: DOMUtilsElementEventType, eventType: string, selector: string | string[] | (() => string | string[]) | undefined | null, callback: (this: HTMLElement, event: T, selectorTarget?: HTMLElement) => void, option?: DOMUtilsEventListenerOption | boolean): void;
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
    off<T extends DOMUtils_EventType>(element: DOMUtilsElementEventType, eventType: T | T[], callback?: (this: HTMLElement, event: DOMUtils_Event[T], selectorTarget?: HTMLElement) => void, option?: boolean | EventListenerOptions, filter?: (value: DOMUtilsEventListenerOptionsAttribute, index: number, array: DOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
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
    off<T extends Event>(element: DOMUtilsElementEventType, eventType: string, callback?: (this: HTMLElement, event: T, selectorTarget?: HTMLElement) => void, option?: boolean | EventListenerOptions, filter?: (value: DOMUtilsEventListenerOptionsAttribute, index: number, array: DOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
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
    off<T extends DOMUtils_EventType>(element: DOMUtilsElementEventType, eventType: T | T[], selector?: DOMUtilsEventListenerOptionsAttribute["selector"] | undefined, callback?: (this: HTMLElement, event: DOMUtils_Event[T], selectorTarget?: HTMLElement) => void, option?: boolean | EventListenerOptions, filter?: (value: DOMUtilsEventListenerOptionsAttribute, index: number, array: DOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
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
    off<T extends Event>(element: DOMUtilsElementEventType, eventType: string, selector?: DOMUtilsEventListenerOptionsAttribute["selector"] | undefined, callback?: (this: HTMLElement, event: T, selectorTarget?: HTMLElement) => void, option?: boolean | EventListenerOptions, filter?: (value: DOMUtilsEventListenerOptionsAttribute, index: number, array: DOMUtilsEventListenerOptionsAttribute[]) => boolean): void;
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
     * 等待文档加载完成后执行指定的函数
     * @param callback 需要执行的函数
     * @example
     * DOMUtils.ready(function(){
     *   console.log("文档加载完毕")
     * })
     */
    ready<T extends Function>(callback: T): void;
    /**
     * 主动触发事件
     * @param element 需要触发的元素|元素数组|window
     * @param eventType 需要触发的事件
     * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
     * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件,默认true
     * @example
     * // 触发元素a.xx的click事件
     * DOMUtils.trigger(document.querySelector("a.xx"),"click")
     * DOMUtils.trigger("a.xx","click")
     * // 触发元素a.xx的click、tap、hover事件
     * DOMUtils.trigger(document.querySelector("a.xx"),"click tap hover")
     * DOMUtils.trigger("a.xx",["click","tap","hover"])
     */
    trigger(element: DOMUtilsTargetElementType | any[] | typeof globalThis | Window | Document, eventType: string, details?: object, useDispatchToTriggerEvent?: boolean): void;
    /**
     * 主动触发事件
     * @param element 需要触发的元素|元素数组|window
     * @param eventType 需要触发的事件
     * @param details 赋予触发的Event的额外属性，如果是Event类型，那么将自动代替默认new的Event对象
     * @param useDispatchToTriggerEvent 是否使用dispatchEvent来触发事件，默认true
     * @example
     * // 触发元素a.xx的click事件
     * DOMUtils.trigger(document.querySelector("a.xx"),"click")
     * DOMUtils.trigger("a.xx","click")
     * // 触发元素a.xx的click、tap、hover事件
     * DOMUtils.trigger(document.querySelector("a.xx"),"click tap hover")
     * DOMUtils.trigger("a.xx",["click","tap","hover"])
     */
    trigger(element: HTMLElement | string | NodeList | any[] | Window | Document, eventType: DOMUtils_EventType | DOMUtils_EventType[], details?: object, useDispatchToTriggerEvent?: boolean): void;
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
    click(element: DOMUtilsTargetElementType | typeof globalThis | Window, handler?: (this: HTMLElement, event: DOMUtils_Event["click"]) => void, details?: any, useDispatchToTriggerEvent?: boolean): void;
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
    blur(element: DOMUtilsTargetElementType | typeof globalThis | Window, handler?: (this: HTMLElement, event: DOMUtils_Event["blur"]) => void, details?: object, useDispatchToTriggerEvent?: boolean): void;
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
    focus(element: DOMUtilsTargetElementType | typeof globalThis | Window, handler?: (this: HTMLElement, event: DOMUtils_Event["focus"]) => void, details?: object, useDispatchToTriggerEvent?: boolean): void;
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
    hover(element: DOMUtilsTargetElementType, handler: (this: HTMLElement, event: DOMUtils_Event["hover"]) => void, option?: boolean | DOMUtilsEventListenerOption): void;
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
    keyup(element: DOMUtilsTargetElementType | Window | typeof globalThis, handler: (this: HTMLElement, event: DOMUtils_Event["keyup"]) => void, option?: boolean | DOMUtilsEventListenerOption): void;
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
    keydown(element: DOMUtilsTargetElementType | Window | typeof globalThis, handler: (this: HTMLElement, event: DOMUtils_Event["keydown"]) => void, option?: boolean | DOMUtilsEventListenerOption): void;
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
    keypress(element: DOMUtilsTargetElementType | Window | typeof globalThis, handler: (this: HTMLElement, event: DOMUtils_Event["keypress"]) => void, option?: boolean | DOMUtilsEventListenerOption): void;
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
    listenKeyboard(element: DOMUtilsTargetElementType | Window | Node | typeof globalThis, eventName: "keyup" | "keypress" | "keydown" | undefined, callback: (keyName: string, keyValue: number, otherCodeList: string[], event: KeyboardEvent) => void, options?: DOMUtilsEventListenerOption | boolean): {
        removeListen(): void;
    };
    /**
     * 选择器，可使用以下的额外语法
     *
     * + :contains([text]) 作用: 找到包含指定文本内容的指定元素
     * + :empty 作用:找到既没有文本内容也没有子元素的指定元素
     * + :regexp([text]) 作用: 找到符合正则表达式的内容的指定元素
     * @param selector
     * @example
     * DOMUtils.selector("div:contains('测试')")
     * > div.xxx
     * @example
     * DOMUtils.selector("div:empty")
     * > div.xxx
     * @example
     * DOMUtils.selector("div:regexp('^xxxx$')")
     * > div.xxx
     */
    selector<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | undefined;
    selector<E extends Element = Element>(selector: string): E | undefined;
    /**
     * 选择器，可使用以下的额外语法
     *
     * + :contains([text]) 作用: 找到包含指定文本内容的指定元素
     * + :empty 作用:找到既没有文本内容也没有子元素的指定元素
     * + :regexp([text]) 作用: 找到符合正则表达式的内容的指定元素
     * @param selector
     * @example
     * DOMUtils.selectorAll("div:contains('测试')")
     * > [div.xxx]
     * @example
     * DOMUtils.selectorAll("div:empty")
     * > [div.xxx]
     * @example
     * DOMUtils.selectorAll("div:regexp('^xxxx$')")
     * > [div.xxx]
     * @example
     * DOMUtils.selectorAll("div:regexp(/^xxx/ig)")
     * > [div.xxx]
     */
    selectorAll<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K][];
    selectorAll<E extends Element = Element>(selector: string): E[];
}
