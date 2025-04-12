import { QmsgItemInfo } from "./QmsgUtils";

export const QmsgInstanceStorage = {
	QmsgList: <QmsgItemInfo[]>[],
	/**
	 * 根据uuid移除Qmsg实例
	 * @param uuid 每个Qmsg实例的uuid
	 */
	remove(uuid: string) {
		for (let index = 0; index < QmsgInstanceStorage.QmsgList.length; index++) {
			if (QmsgInstanceStorage.QmsgList[index].uuid === uuid) {
				QmsgInstanceStorage.QmsgList.splice(index, 1);
				break;
			}
		}
	},
};
