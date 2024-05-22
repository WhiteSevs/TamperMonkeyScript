import { CompatibleProcessing } from "./CompatibleProcessing";
import { QmsgStore } from "./QmsgStore";
import { QmsgIcon } from "./QmsgIcon";
import { QmsgObj } from "./QmsgInstance";
import { QmsgMsg } from "./QmsgMsg";
import { QmsgUtils } from "./QmsgUtils";

export type QmsgPosition =
	| "topleft"
	| "top"
	| "topright"
	| "left"
	| "center"
	| "right"
	| "bottomleft"
	| "bottom"
	| "bottomright";

export type QmsgType =
	| "info"
	| "warning"
	| "success"
	| "error"
	| "loading"
	| "close";

export interface QmsgOption {
	/**
	 * 是否使用动画
	 * + 默认：true
	 */
	animation?: boolean;
	/**
	 * 是否自动关闭，注意在type为loading的时候自动关闭为false
	 * + 默认：true
	 */
	autoClose?: boolean;
	/**
	 * 显示的内容
	 */
	content?: string;
	/**
	 * 内容是否是html
	 * + 默认：false
	 * @deprecated 建议使用isHTML
	 */
	html?: boolean;
	/**
	 * 内容是否是html
	 * + 默认：false
	 */
	isHTML?: boolean;
	/**
	 * 弹出的位置
	 * + 默认：center
	 */
	position?: QmsgPosition;
	/**
	 * 是否显示关闭图标
	 * + 默认：false
	 */
	showClose?: boolean;
	/**
	 * 最大显示的数量
	 * + 默认：5
	 */
	maxNums?: number;
	/**
	 * 关闭时的回调函数
	 */
	onClose?: (<T extends QmsgMsg>(this: T) => void) | null;
	/**
	 * 是否显示左边的icon图标
	 * + 默认：true
	 */
	showIcon?: boolean;
	/**
	 * 是否使内容进行换行显示
	 * + 默认：false
	 */
	showMoreContent?: boolean;
	/**
	 * 弹出顺序是否逆反
	 * + 默认：false
	 */
	showReverse?: boolean;
	/**
	 * 最大显示的时长(ms)
	 * + 默认：2500
	 */
	timeout?: number;
	/**
	 * 弹出类型
	 */
	type: QmsgType;
	/**
	 * 元素层级
	 * + 默认：50000
	 */
	zIndex?: number;
	/**
	 * 自定义的style
	 */
	style?: string;
}

export interface QmsgDetails extends Partial<QmsgOption> {}

/* 执行兼容 */
CompatibleProcessing();

const Qmsg = {
	/** 版本号 */
	version: "2024.5.22",
	$data: QmsgStore,
	/** 图标svg */
	$icons: QmsgIcon,
	$obj: QmsgObj,
	/**
	 * 修改默认配置
	 * @param option
	 */
	config(option: QmsgDetails) {
		QmsgStore.DEFAULT =
			option && typeof option === "object"
				? Object.assign(QmsgStore.DEFAULT, option)
				: QmsgStore.DEFAULT;
	},
	/**
	 * 信息
	 * @param content 内容
	 * @param config 配置
	 */
	info(content: string, config: QmsgDetails) {
		let params = QmsgUtils.mergeArgs(content, config);
		params.type = "info";
		return QmsgUtils.judgeReMsg.call(this, params);
	},
	/**
	 * 警告
	 * @param content 内容
	 * @param config 配置
	 */
	warning(content: string, config: QmsgDetails) {
		let params = QmsgUtils.mergeArgs(content, config);
		params.type = "warning";
		return QmsgUtils.judgeReMsg.call(this, params);
	},
	/**
	 * 成功
	 * @param content 内容
	 * @param config 配置
	 */
	success(content: string, config: QmsgDetails) {
		let params = QmsgUtils.mergeArgs(content, config);
		params.type = "success";
		return QmsgUtils.judgeReMsg.call(this, params);
	},
	/**
	 * 失败
	 * @param content 内容
	 * @param config 配置
	 */
	error(content: string, config: QmsgDetails) {
		let params = QmsgUtils.mergeArgs(content, config);
		params.type = "error";
		return QmsgUtils.judgeReMsg.call(this, params);
	},
	/**
	 * 加载中
	 * @param content 内容
	 * @param config 配置
	 */
	loading(content: string, config: QmsgDetails) {
		let params = QmsgUtils.mergeArgs(content, config);
		params.type = "loading";
		params.autoClose = false;
		return QmsgUtils.judgeReMsg.call(this, params);
	},
	/**
	 * 根据uuid删除Qmsg实例和元素
	 * @param uuid
	 */
	remove(uuid: string) {
		QmsgObj.remove(uuid);
	},
	/**
	 * 关闭当前页面中所有的Qmsg
	 */
	closeAll() {
		for (let index = QmsgObj.QmsgList.length - 1; index >= 0; index--) {
			let item = QmsgObj.QmsgList[index];
			item && item.instance && item.instance.close();
		}
	},
};

export { Qmsg };
