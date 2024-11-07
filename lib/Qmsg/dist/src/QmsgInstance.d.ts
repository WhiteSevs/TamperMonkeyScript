import { QmsgOption } from "./Qmsg";
import { QmsgAnimationState } from "./QmsgAnimation";
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
     * Qmsg的配置
     */
    setting: Required<QmsgOption>;
    /**
     * uuid
     */
    uuid: string;
    /**
     * 当前动画状态
     */
    state: keyof QmsgAnimationState;
    /**
     * 当前相同消息的数量
     */
    repeatNum: number;
    /**
     * 主元素
     */
    $Qmsg: HTMLDivElement;
    constructor(option: QmsgOption, uuid: string);
    /**
     * 获取当前配置
     * @returns
     */
    getSetting(): Required<QmsgOption>;
    /**
     * 获取当前相同的数量
     * @returns
     */
    getRepeatNum(): number;
    /**
     * 设置repeatNum值
     * @param num 重复的数量
     */
    setRepeatNum(num: number): void;
    /**
     * 设置repeatNum自增
     */
    setRepeatNumIncreasing(): void;
    /**
     * 初始化元素
     */
    private init;
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
     * 设置消息数量统计
     */
    setMsgCount(): void;
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
     */
    setText(text: string): void;
    /**
     * 设置内容超文本
     */
    setHTML(text: string): void;
}
