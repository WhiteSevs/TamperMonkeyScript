import type { QmsgMsg } from "./QmsgInst";

/**
 * Qmsg实例存储信息
 */
export interface QmsgInstStorageInfo {
	config: string;
	instance: typeof QmsgMsg.prototype;
	uuid: string;
}
/**
 * Qmsg实例存储
 */
export const QmsgInstStorage = {
	/**
	 * 存储的Qmsg实例信息
	 */
	insInfoList: <QmsgInstStorageInfo[]>[],
	/**
	 * 根据uuid移除Qmsg实例
	 * @param uuid 每个Qmsg实例的uuid
	 * @returns
	 * + true 移除成功
	 * + false 移除失败
	 */
	remove(uuid: string) {
		let flag = false;
		for (let index = 0; index < QmsgInstStorage.insInfoList.length; index++) {
			if (QmsgInstStorage.insInfoList[index].uuid === uuid) {
				QmsgInstStorage.insInfoList.splice(index, 1);
				flag = true;
				break;
			}
		}
		return flag;
	},
};
