import type { AnyObject } from ".";
/** Utils.Log的初始化配置 */
declare interface UtilsLogOptions {
    /** 是否输出Tag，false的话其它的颜色也不输出，默认为true */
    tag: boolean;
    /** log.success的颜色，默认#0000FF */
    successColor: string;
    /** log.warn的颜色，默认0 */
    warnColor: string;
    /** log.error的颜色，默认#FF0000 */
    errorColor: string;
    /** log.info的颜色，默认0 */
    infoColor: string;
    /** 是否开启debug模式，true会在控制台每次调用时输出调用函数的所在位置，false不会输出位置，默认false */
    debug: boolean;
    /** 当console输出超过logMaxCount数量自动清理控制台，默认false */
    autoClearConsole: boolean;
    /** console输出的最高数量，autoClearConsole开启则生效，默认999 */
    logMaxCount: number;
}
declare class Log {
    #private;
    tag: string;
    /**
     * @param _GM_info_ 油猴管理器的API GM_info，或者是一个对象，如{"script":{name:"Utils.Log"}}
     * @param console 可指定console对象为unsafeWindow下的console或者是油猴window下的console
     */
    constructor(_GM_info_?: {
        script: {
            name: string;
        };
    }, console?: Console);
    /**
     * 解析Error的堆栈获取实际调用者的函数名及函数所在的位置
     * @param stack
     */
    private parseErrorStack;
    /**
     * 检测清理控制台
     */
    private checkClearConsole;
    /**
     * 输出内容
     * @param msg 需要输出的内容
     * @param color 颜色
     * @param otherStyle 其它CSS
     */
    private printContent;
    /**
     * 控制台-普通输出
     * @param msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param color 输出的颜色
     * @param otherStyle 其它CSS
     */
    info(msg: any, color?: string, otherStyle?: string): void;
    /**
     * 控制台-警告输出
     * @param msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param color 输出的颜色
     * @param otherStyle 其它CSS
     */
    warn(msg: any, color?: string, otherStyle?: string): void;
    /**
     * 控制台-错误输出
     * @param msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param color 输出的颜色
     * @param otherStyle 其它CSS
     */
    error(msg: any, color?: string, otherStyle?: string): void;
    /**
     * 控制台-成功输出
     * @param msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param color 输出的颜色
     * @param otherStyle 其它CSS
     */
    success(msg: any, color?: string, otherStyle?: string): void;
    /**
     * 控制台-输出表格
     * @param msg
     * @param color 输出的颜色
     * @param otherStyle 其它CSS
     * @example
     * log.table([{"名字":"example","值":"123"},{"名字":"example2","值":"345"}])
     */
    table(msg: AnyObject[], color?: string, otherStyle?: string): void;
    /**
     * 配置Log对象的颜色
     * @param paramDetails 配置信息
     */
    config(paramDetails: Partial<UtilsLogOptions>): void;
    /** 禁用输出 */
    disable(): void;
    /** 恢复输出 */
    recovery(): void;
}
export { Log };
