import { type QmsgAnimationState } from "./QmsgAnimation";
import type { QmsgConfig } from "./QmsgConfig";
/**
 * 每条消息的构造函数
 */
export declare class QmsgMsg {
    /**
     * setTimeout的id
     */
    timeId: number | undefined;
    /**
     * 启动时间
     */
    startTime: number | null;
    /**
     * 关闭时间
     */
    endTime: number | null;
    /**
     * 实例的配置（动态获取）
     */
    setting: Required<QmsgConfig>;
    /**
     * 实例的配置的字符串
     */
    settingStr: string;
    /**
     * 把动态的`setting`转为普通的对象
     */
    settingJSON: Required<QmsgConfig>;
    /**
     * uuid
     */
    uuid: string;
    /**
     * 当前实例的动画状态
     */
    state: keyof QmsgAnimationState;
    /**
     * 当前实例的相同消息的数量
     */
    repeatNum: number;
    /**
     * 元素
     */
    $el: {
        /**
         * 主元素
         */
        $item: HTMLElement;
        /**
         * 获取内容元素
         */
        readonly $content: HTMLSpanElement;
    };
    constructor(config: QmsgConfig, uuid: string);
    /**
     * 初始化元素
     */
    private initEl;
    /**
     * 对timeout进行检测并转换
     * 当timeout为string时，转换为number
     * timeout必须在规定范围内
     */
    private detectionType;
    /**
     * 设置元素动画状态 开启/关闭
     * @param QmsgMsg
     * @param state
     */
    private setState;
    /**
     * 设置`repeatNum`自增
     */
    setRepeatNumIncreasing(): void;
    /**
     * 设置消息数量统计
     */
    setMsgCount(): void;
    /**
     * 清除旧的自动关闭定时器
     */
    clearAutoCloseTimer(): void;
    /**
     * 开始自动关闭定时器
     */
    startAutoCloseTimer(): void;
    /**
     * 重置自动关闭定时器（会自动清理旧的定时器）
     */
    resetAutoCloseTimer(): void;
    /**
     * 关闭Qmsg（会触发动画）
     */
    close(): void;
    /**
     * 销毁Qmsg
     */
    destroy(): void;
    /**
     * 设置内容文本
     * @param text 字符串
     */
    setText(text: string): void;
    /**
     * 设置内容超文本
     * @param text 字符串
     */
    setHTML(text: string): void;
}
