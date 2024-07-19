import { QmsgItemInfo } from "./QmsgUtils";
export declare const QmsgInstanceStorage: {
    QmsgList: QmsgItemInfo[];
    /**
     * 移除实例
     * @param uuid
     */
    remove(uuid: string): void;
};
