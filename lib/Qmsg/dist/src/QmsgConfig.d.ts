import { QmsgOption } from "./Qmsg";
export declare const QmsgConfig: {
    /** 声明插件名称 */
    PLUGIN_NAME: string;
    /** 命名空间，用于css和事件 */
    NAMESPACE: string;
    /** 实例配置的固定的默认值 */
    INS_DEFAULT: {};
    /** 固定的默认值 */
    DEFAULT: Required<QmsgOption>;
    /**
     * 是否支持动画属性
     */
    CAN_ANIMATION: boolean;
};
