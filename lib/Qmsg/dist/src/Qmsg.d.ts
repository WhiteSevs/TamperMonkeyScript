import { QmsgDefaultConfig } from "./QmsgDefaultConfig";
import { QmsgIcon } from "./QmsgIcon";
import { QmsgInstStorage } from "./QmsgInstStorage";
import { QmsgEvent } from "./QmsgEvent";
import type { QmsgMsg } from "./QmsgInst";
import type { QmsgConfig } from "./types/config";
/** 实例配置（可选） */
export type QmsgConfigPartial = Partial<QmsgConfig>;
type QmsgConfigContent = string | boolean | number | symbol | Function | bigint | null | undefined;
declare class Qmsg {
    /** 数据 */
    $data: {
        /** 版本号 */
        version: string;
        /** 数据 */
        config: typeof QmsgDefaultConfig;
        /** 图标svg */
        icon: typeof QmsgIcon;
        /** 每个Qmsg实例 */
        instanceStorage: typeof QmsgInstStorage;
    };
    /**
     * 事件工具类
     */
    $eventUtils: typeof QmsgEvent;
    /**
     * 实例化
     * @param config 配置
     */
    constructor(config?: QmsgConfigPartial);
    /**
     * 修改全局的默认配置，该配置会覆盖掉上一次修改的配置
     * @param globalConfig 自定义全局配置
     */
    config(globalConfig?: QmsgConfigPartial): QmsgConfig;
    /**
     * 信息Toast
     * @param content 内容
     */
    info(content: QmsgConfigContent): QmsgMsg;
    /**
     * 信息Toast
     * @param config 配置
     */
    info(config: QmsgConfigPartial): QmsgMsg;
    /**
     * 信息Toast
     * @param content 内容
     * @param config 配置
     */
    info(content: QmsgConfigContent, config: QmsgConfigPartial): QmsgMsg;
    /**
     * 警告Toast
     * @param content 内容
     */
    warning(content: QmsgConfigContent): QmsgMsg;
    /**
     * 警告Toast
     * @param config 配置
     */
    warning(config: QmsgConfigPartial): QmsgMsg;
    /**
     * 警告Toast
     * @param content 内容
     * @param config 配置
     */
    warning(content: QmsgConfigContent, config: QmsgConfigPartial): QmsgMsg;
    /**
     * 成功Toast
     * @param content 内容
     */
    success(content: QmsgConfigContent): QmsgMsg;
    /**
     * 成功Toast
     * @param config 配置
     */
    success(config: QmsgConfigPartial): QmsgMsg;
    /**
     * 成功Toast
     * @param content 内容
     * @param config 配置
     */
    success(content: QmsgConfigContent, config: QmsgConfigPartial): QmsgMsg;
    /**
     * 失败Toast
     * @param content 内容
     */
    error(content: QmsgConfigContent): QmsgMsg;
    /**
     * 失败Toast
     * @param config 配置
     */
    error(config: QmsgConfigPartial): QmsgMsg;
    /**
     * 失败Toast
     * @param content 内容
     * @param config 配置
     */
    error(content: QmsgConfigContent, config: QmsgConfigPartial): QmsgMsg;
    /**
     * 加载中Toast
     * @param content 内容
     */
    loading(content: QmsgConfigContent): QmsgMsg;
    /**
     * 加载中Toast
     * @param config 配置
     */
    loading(config: QmsgConfigPartial): QmsgMsg;
    /**
     * 加载中Toast
     * @param content 内容
     * @param config 配置
     * @returns
     */
    loading(content: QmsgConfigContent, config: QmsgConfigPartial): QmsgMsg;
    /**
     * 根据uuid删除Qmsg实例和元素
     * @param uuid 唯一值
     */
    remove(uuid: string): void;
    /**
     * 关闭当前Qmsg创建的所有的实例
     */
    closeAll(): void;
}
declare const qmsg: Qmsg;
export { qmsg as Qmsg };
