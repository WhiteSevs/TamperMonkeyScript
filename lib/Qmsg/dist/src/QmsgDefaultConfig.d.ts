import type { QmsgConfig } from "./types/config";
export declare const QmsgDefaultConfig: {
    /** 实例配置的固定的默认值，在初始化时会插入值 */
    INS_DEFAULT: QmsgConfig;
    /** 声明插件名称 */
    readonly PLUGIN_NAME: string;
    /** 命名空间，用于css和事件 */
    readonly NAMESPACE: string;
    /** 实例配置的默认值 */
    readonly config: Required<QmsgConfig>;
};
