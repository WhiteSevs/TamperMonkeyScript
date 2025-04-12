import { QmsgItemInfo } from "./QmsgUtils";
export declare const QmsgInstanceStorage: {
    QmsgList: QmsgItemInfo[];
    /**
     * 根据uuid移除Qmsg实例
     * @param uuid 每个Qmsg实例的uuid
     */
    remove(uuid: string): void;
};
