import { QmsgItemInfo } from "./QmsgUtils";

export const QmsgInstanceStorage = {
	QmsgList: <QmsgItemInfo[]>[],
	/**
	 * 移除实例
	 * @param uuid
	 */
	remove(uuid: string) {
		for (let index = 0; index < QmsgInstanceStorage.QmsgList.length; index++) {
			if (QmsgInstanceStorage.QmsgList[index].uuid === uuid) {
				QmsgInstanceStorage.QmsgList.splice(index, 1);
				return;
			}
		}
	},
};
