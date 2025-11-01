import type { QmsgConfig } from "./QmsgConfig";
export declare const QmsgUtils: {
    /**
     * 生成带插件名的名称
     * @param args
     */
    getNameSpacify(...args: string[]): string;
    /**
     * 判断字符是否是数字
     * @param text 需要判断的字符串
     */
    isNumber(text: string): boolean;
    /**
     * 获取唯一性的UUID
     */
    getUUID(): string;
    /**
     * 合并参数为配置信息，用于创建Msg实例
     * @param content 文本内容
     * @param config 配置
     */
    mergeArgs(content?: any, config?: object): QmsgConfig;
    /**
     * 转换为动态对象
     * @param defaultObj 需要配置的对象
     * @param other_obj 获取的其它对象
     */
    toDynamicObject<T1, T2 extends any[]>(defaultObj: T1, ...other_objs: T2): T1 & (T2 extends Array<infer U> ? U : never);
    /**
     * 自动使用 Worker 执行 setTimeout
     */
    setTimeout(callback: (...args: any[]) => any, timeout: number): number;
    /**
     * 配合 QmsgUtils.setTimeout 使用
     */
    clearTimeout(timeId: number | undefined): void;
    /**
     * 自动使用 Worker 执行 setInterval
     */
    setInterval(callback: (...args: any[]) => any, timeout: number): number;
    /**
     * 配合 QmsgUtils.setInterval 使用
     */
    clearInterval(timeId: number | undefined): void;
    /**
     * 设置安全的html
     */
    setSafeHTML($el: Element, text: string): void;
};
