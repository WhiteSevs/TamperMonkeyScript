import { QmsgOption } from "./Qmsg";
import { QmsgStore } from "./QmsgStore";
import { QmsgObj } from "./QmsgInstance";
import { QmsgMsg } from "./QmsgMsg";

export interface QmsgItemInfo {
	config: string;
	instance: QmsgMsg;
	uuid: string;
}

export const QmsgUtils = {
	/**
	 * 生成带插件名的名称
	 * @param args
	 * @returns
	 */
	getNameSpacify(...args: string[]) {
		let result = QmsgStore.NAMESPACE;
		for (let index = 0; index < args.length; ++index) {
			result += "-" + args[index];
		}
		return result;
	},
	/**
	 * 获取唯一性的UUID
	 * @returns
	 */
	getUUID() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
			/[xy]/g,
			function (value) {
				let randValue = (Math.random() * 16) | 0,
					newValue = value == "x" ? randValue : (randValue & 0x3) | 0x8;
				return newValue.toString(16);
			}
		);
	},
	/**
	 * 合并参数为配置信息，用于创建Msg实例
	 * @param content 文本内容
	 * @param config 配置
	 * @private
	 */
	mergeArgs(content = "", config?: object) {
		let opts = Object.assign({}, QmsgStore.DEFAULT);
		if (arguments.length === 0) {
			return opts;
		}
		if (typeof content === "object") {
			return Object.assign(opts, content);
		} else {
			opts.content = content.toString();
		}
		if (typeof config === "object") {
			return Object.assign(opts, config);
		}
		return opts;
	},

	/**
	 * 通过配置信息 来判断是否为同一条消息,并返回消息实例
	 * @param option 配置项
	 * @private
	 */
	judgeReMsg(option: QmsgOption) {
		option = option || {};
		let optionString = JSON.stringify(option);
		/* 寻找已生成的实例是否存在配置相同的 */
		let findQmsgItemInfo = QmsgObj.QmsgList.find((item) => {
			return item.config === optionString;
		});
		let QmsgInstance = findQmsgItemInfo?.instance;
		if (QmsgInstance == null) {
			/* 不存在，创建个新的 */
			let uuid = QmsgUtils.getUUID();
			let QmsgItemInfo = <QmsgItemInfo>{
				uuid: uuid,
				config: optionString,
				instance: new QmsgMsg(option, uuid),
			};
			QmsgObj.QmsgList.push(QmsgItemInfo);
			let QmsgListLength = QmsgObj.QmsgList.length;
			let maxNums = QmsgItemInfo.instance.getSetting().maxNums;
			/**
			 * 关闭多余的消息
			 */
			if (QmsgListLength > maxNums) {
				for (let index = 0; index < QmsgListLength - maxNums; index++) {
					let item = QmsgObj.QmsgList[index];
					item && item.instance.getSetting().autoClose && item.instance.close();
				}
			}
			findQmsgItemInfo = QmsgItemInfo;
			QmsgInstance = QmsgItemInfo.instance;
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
			throw new TypeError("QmsgInstance is null");
		}

		return QmsgInstance;
	},
};
