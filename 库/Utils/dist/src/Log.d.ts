export function Log(_GM_info_?: {
    script: {
        name: string;
    };
}, console?: Console): void;
export class Log {
    constructor(_GM_info_?: {
        script: {
            name: string;
        };
    }, console?: Console);
    /**
     * 前面的TAG标志
     */
    tag: string;
    /**
     * 控制台-普通输出
     * @param {any} msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param {string|undefined} color 输出的颜色
     * @param {string|undefined} otherStyle 其它CSS
     */
    info: (msg: any, color: string | undefined, otherStyle: string | undefined) => void;
    /**
     * 控制台-警告输出
     * @param {any} msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param {string|undefined} color 输出的颜色
     * @param {string|undefined} otherStyle 其它CSS
     */
    warn: (msg: any, color?: string | undefined, otherStyle?: string | undefined) => void;
    /**
     * 控制台-错误输出
     * @param {any} msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param {string|undefined} color 输出的颜色
     * @param {string|undefined} otherStyle 其它CSS
     */
    error: (msg: any, color: string | undefined, otherStyle: string | undefined) => void;
    /**
     * 控制台-成功输出
     * @param {any} msg 需要输出的内容，如果想输出多个，修改成数组，且数组内的长度最大值为4个
     * @param {string|undefined} color 输出的颜色
     * @param {string|undefined} otherStyle 其它CSS
     */
    success: (msg: any, color: string | undefined, otherStyle: string | undefined) => void;
    /**
     * 控制台-输出表格
     * @param {object[]} msg
     * @param {string|undefined} color 输出的颜色
     * @param {string|undefined} otherStyle 其它CSS
     * @example
     * log.table([{"名字":"example","值":"123"},{"名字":"example2","值":"345"}])
     */
    table: (msg: object[], color?: string | undefined, otherStyle?: string | undefined) => void;
    /**
     * 配置Log对象的颜色
     * @param {UtilsLogOptions} paramDetails 配置信息
     */
    config: (paramDetails: UtilsLogOptions) => void;
    /**
     * 禁用输出
     */
    disable: () => void;
    /**
     * 恢复输出
     */
    recovery: () => void;
}
