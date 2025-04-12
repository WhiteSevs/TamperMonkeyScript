import { QmsgConfig } from "./QmsgConfig";
import { QmsgIcon } from "./QmsgIcon";
import { QmsgInstanceStorage } from "./QmsgInstanceStorage";
import { QmsgMsg } from "./QmsgInstance";
export type QmsgPosition = "topleft" | "top" | "topright" | "left" | "center" | "right" | "bottomleft" | "bottom" | "bottomright";
export type QmsgType = "info" | "warning" | "success" | "error" | "loading";
export type QmsgLimitWidthWrap = "no-wrap" | "wrap" | "ellipsis";
export interface QmsgOption {
    /**
     * 是否使用动画
     * @default true
     */
    animation?: boolean;
    /**
     * 是否自动关闭，注意在type为loading的时候该值为false
     * @default true
     */
    autoClose?: boolean;
    /**
     * 显示的内容
     */
    content?: string;
    /**
     * 内容是否是html
     * @default false
     * @deprecated 建议使用isHTML
     */
    html?: boolean;
    /**
     * 显示的内容是否是html
     * @default false
     */
    isHTML?: boolean;
    /**
     * 弹出的位置
     * @default "center"
     */
    position?: QmsgPosition;
    /**
     * 是否在最右边显示关闭图标
     * @default false
     */
    showClose?: boolean;
    /**
     * Qmsg最大显示的数量
     * @default 5
     */
    maxNums?: number;
    /**
     * 关闭Qmsg时触发的回调函数
     */
    onClose?: (<T extends QmsgMsg>(this: T) => void) | null;
    /**
     * 是否显示左边的icon图标
     * @default true
     */
    showIcon?: boolean;
    /**
     * 是否使内容进行换行显示
     * @default false
     */
    showMoreContent?: boolean;
    /**
     * 弹出顺序是否逆反
     * @default false
     */
    showReverse?: boolean;
    /**
     * 最大显示的时长(ms)
     * @default 2500
     */
    timeout?: number;
    /**
     * 弹出类型
     */
    type: QmsgType;
    /**
     * 元素层级
     * @default 50000
     */
    zIndex?: number | (() => number);
    /**
     * 自定义的style
     */
    style?: string;
    /**
     * 自定义类名
     */
    customClass?: string;
    /**
     * 是否限制宽度
     * @default false
     */
    isLimitWidth?: boolean;
    /**
     * 限制宽度的数值
     * @default 200
     */
    limitWidthNum?: number | string;
    /**
     * 当超出限制宽度时，是否换行还是显示为省略号
     * @default "wrap"
     */
    limitWidthWrap?: "no-wrap" | "wrap" | "ellipsis";
    /**
     * 是否在控制台打印content信息
     * @default false
     */
    consoleLogContent?: boolean;
}
export interface QmsgDetails extends Partial<QmsgOption> {
}
type QmsgContentString = string | boolean | number | symbol | Function | bigint | null | undefined;
declare const QmsgEvent: {
    visibilitychange: {
        eventConfig: {
            /**
             * 添加visibilitychange事件监听
             * 当页面切换时，如果切换前的页面存在Qmsg实例且未关闭，切换后，页面活跃度会降低，导致setTimeout/setInterval失效或丢失事件
             * 监听visibilitychange，判断切换回来时，如果当前时间-开始时间大于timeout，则关闭
             * 如果设置了动画，使用close，否则使用destroy
             */
            callback(): void;
            option: AddEventListenerOptions;
        };
        addEvent(): void;
        removeEvent(): void;
    };
};
declare class Qmsg {
    /** 数据 */
    $data: {
        /** 版本号 */
        version: string;
        /** 数据 */
        config: typeof QmsgConfig;
        /** 图标svg */
        icon: typeof QmsgIcon;
        /** 每个Qmsg实例 */
        instanceStorage: typeof QmsgInstanceStorage;
    };
    /**
     * 事件工具类
     */
    $eventUtils: typeof QmsgEvent;
    constructor();
    /**
     * 修改默认配置
     * @param option
     */
    config(option?: QmsgDetails): void;
    /**
     * 信息Toast
     * @param content 内容
     */
    info(content: QmsgContentString): QmsgMsg;
    /**
     * 信息Toast
     * @param option 配置
     */
    info(option: QmsgDetails): QmsgMsg;
    /**
     * 信息Toast
     * @param content 内容
     * @param option 配置
     */
    info(content: QmsgContentString, option: QmsgDetails): QmsgMsg;
    /**
     * 警告Toast
     * @param content 内容
     */
    warning(content: QmsgContentString): QmsgMsg;
    /**
     * 警告Toast
     * @param option 配置
     */
    warning(option: QmsgDetails): QmsgMsg;
    /**
     * 警告Toast
     * @param content 内容
     * @param option 配置
     */
    warning(content: QmsgContentString, option: QmsgDetails): QmsgMsg;
    /**
     * 成功Toast
     * @param content 内容
     */
    success(content: QmsgContentString): QmsgMsg;
    /**
     * 成功Toast
     * @param option 配置
     */
    success(option: QmsgDetails): QmsgMsg;
    /**
     * 成功Toast
     * @param content 内容
     * @param option 配置
     */
    success(content: QmsgContentString, option: QmsgDetails): QmsgMsg;
    /**
     * 失败Toast
     * @param content 内容
     */
    error(content: QmsgContentString): QmsgMsg;
    /**
     * 失败Toast
     * @param option 配置
     */
    error(option: QmsgDetails): QmsgMsg;
    /**
     * 失败Toast
     * @param content 内容
     * @param option 配置
     */
    error(content: QmsgContentString, option: QmsgDetails): QmsgMsg;
    /**
     * 加载中Toast
     * @param content 内容
     */
    loading(content: QmsgContentString): QmsgMsg;
    /**
     * 加载中Toast
     * @param config 配置
     */
    loading(config: QmsgDetails): QmsgMsg;
    /**
     * 加载中Toast
     * @param content 内容
     * @param config 配置
     * @returns
     */
    loading(content: QmsgContentString, config: QmsgDetails): QmsgMsg;
    /**
     * 根据uuid删除Qmsg实例和元素
     * @param uuid
     */
    remove(uuid: string): void;
    /**
     * 关闭当前Qmsg创建的所有的实例
     */
    closeAll(): void;
}
declare let qmsg: Qmsg;
export { qmsg as Qmsg };
