import { QmsgMsg } from "./QmsgInst";
import type { QmsgConfig } from "./types/config";
/**
 * 通过配置信息 来判断是否为同一条消息,并返回消息实例
 * @param config 配置项
 */
export declare function QmsgInstHandler(config?: QmsgConfig): QmsgMsg;
