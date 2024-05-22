import { QmsgItemInfo } from "./QmsgUtils";

export const QmsgObj = {
	QmsgList: <QmsgItemInfo[]>[],
	/**
	 * 移除实例
	 * @param uuid
	 * @returns
	 */
	remove(uuid: string) {
		for (let index = 0; index < QmsgObj.QmsgList.length; index++) {
			if (QmsgObj.QmsgList[index].uuid === uuid) {
				QmsgObj.QmsgList.splice(index, 1);
				return;
			}
		}
	},
};
