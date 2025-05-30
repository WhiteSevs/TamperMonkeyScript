import { QmsgMsg } from "./QmsgInst";
import { QmsgInstStorage, type QmsgInstStorageInfo } from "./QmsgInstStorage";
import type { QmsgConfig } from "./QmsgConfig";
import { QmsgUtils } from "./QmsgUtils";

/**
 * 通过配置信息 来判断是否为同一条消息,并返回消息实例
 * @param config 配置项
 */
export function QmsgInstHandler(
	config: QmsgConfig = {} as QmsgConfig
): QmsgMsg {
	let optionString = JSON.stringify(config);
	/* 寻找已生成的实例是否存在配置相同的 */
	let findQmsgItemInfo = QmsgInstStorage.insInfoList.find((item) => {
		return item.config === optionString;
	});
	let QmsgInstance = findQmsgItemInfo?.instance;
	if (QmsgInstance == null) {
		/* 不存在，创建个新的 */
		let uuid = QmsgUtils.getUUID();
		let qmsgInstStorageInfo = <QmsgInstStorageInfo>{
			uuid: uuid,
			config: optionString,
			instance: new QmsgMsg(config, uuid),
		};
		QmsgInstStorage.insInfoList.push(qmsgInstStorageInfo);
		let QmsgListLength = QmsgInstStorage.insInfoList.length;
		let maxNums = qmsgInstStorageInfo.instance.getSetting().maxNums;
		/**
		 * 关闭多余的消息
		 */
		if (QmsgListLength > maxNums) {
			for (let index = 0; index < QmsgListLength - maxNums; index++) {
				let item = QmsgInstStorage.insInfoList[index];
				item && item.instance.getSetting().autoClose && item.instance.close();
			}
		}
		findQmsgItemInfo = qmsgInstStorageInfo;
		QmsgInstance = qmsgInstStorageInfo.instance;
	} else {
		if (!QmsgInstance.getRepeatNum()) {
			QmsgInstance.setRepeatNum(2);
		} else {
			if (QmsgInstance.getRepeatNum() >= 99) {
				/* pass */
			} else {
				QmsgInstance.setRepeatNumIncreasing();
			}
		}
		QmsgInstance.setMsgCount();
	}
	if (QmsgInstance) {
		QmsgInstance.$Qmsg.setAttribute(
			"data-count",
			QmsgInstance?.getRepeatNum().toString()
		);
	} else {
		throw new Error("QmsgInst is null");
	}

	return QmsgInstance;
}
