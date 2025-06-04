import AnyTouch from "any-touch";
declare class PopsUtils {
    /**
     * 判断是否是window，例如window、self、globalThis
     * @param target
     */
    isWin(target: any): boolean;
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
     * 删除对象上的属性
     * @param target
     * @param propName
     */
    delete(target: any, propName: any): void;
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
     * 生成uuid
     */
    getRandomGUID(): string;
    /**
     * 判断元素/页面中是否包含该元素
     * @param target 需要判断的元素
     * @param context 默认为body
     */
    contains(target: any): boolean;
    contains(context: any, target?: any): boolean;
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
    formatTime(text?: string | number | Date, formatType?: "yyyy-MM-dd HH:mm:ss" | "yyyy/MM/dd HH:mm:ss" | "yyyy_MM_dd_HH_mm_ss" | "yyyy年MM月dd日 HH时mm分ss秒" | "yyyy年MM月dd日 hh:mm:ss" | "yyyy年MM月dd日 HH:mm:ss" | "yyyy-MM-dd" | "yyyyMMdd" | "HH:mm:ss"): string;
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
    AnyTouch: () => typeof AnyTouch;
    /**
     * 通过navigator.userAgent判断是否是手机访问
     * @param userAgent
     */
    isPhone(userAgent?: string): boolean;
    /**
     * 自动使用 Worker 执行 setTimeout
     */
    setTimeout(callback: Function, timeout?: number): number;
    /**
     * 配合 .setTimeout 使用
     */
    clearTimeout(timeId: number | undefined): void;
    /**
     * 自动使用 Worker 执行 setInterval
     */
    setInterval(callback: Function, timeout?: number): number;
    /**
     * 配合 .setInterval 使用
     */
    clearInterval(timeId: number | undefined): void;
}
declare const popsUtils: PopsUtils;
export { popsUtils };
