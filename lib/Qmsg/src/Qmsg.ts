import { CompatibleProcessing } from "./CompatibleProcessing";
import { QmsgDefaultConfig } from "./QmsgDefaultConfig";
import { QmsgIcon } from "./QmsgIcon";
import { QmsgInstStorage } from "./QmsgInstStorage";
import { QmsgUtils } from "./QmsgUtils";
import { QmsgInstHandler } from "./QmsgInstHandler";
import { QmsgEvent } from "./QmsgEvent";
import type { QmsgMsg } from "./QmsgInst";
import type { QmsgConfig } from "./QmsgConfig";

/** 实例配置（可选） */
export interface QmsgConfigPartial extends Partial<QmsgConfig> {}

type QmsgConfigContent =
	| string
	| boolean
	| number
	| symbol
	| Function
	| bigint
	| null
	| undefined;

/* 执行兼容 */
CompatibleProcessing();

class Qmsg {
	/** 数据 */
	$data: {
		/** 版本号 */
		version: string;
		/** 数据 */
		config: typeof QmsgDefaultConfig;
		/** 图标svg */
		icon: typeof QmsgIcon;
		/** 每个Qmsg实例 */
		instanceStorage: typeof QmsgInstStorage;
	};
	/**
	 * 事件工具类
	 */
	$eventUtils: typeof QmsgEvent;
	/**
	 * 实例化
	 * @param config 配置
	 */
	constructor(config?: QmsgConfigPartial) {
		this.$data = {
			version: "2025.7.28",
			config: QmsgDefaultConfig,
			icon: QmsgIcon,
			instanceStorage: QmsgInstStorage,
		};
		this.$eventUtils = QmsgEvent;
		this.$eventUtils.visibilitychange.addEvent();
		this.config(config);
	}
	/**
	 * 修改默认配置
	 * @param config 配置
	 */
	config(config?: QmsgConfigPartial) {
		if (config == null) return;
		if (typeof config !== "object") return;
		// @ts-ignore
		QmsgDefaultConfig.INS_DEFAULT = null;
		// @ts-ignore
		QmsgDefaultConfig.INS_DEFAULT = config;
	}
	/**
	 * 信息Toast
	 * @param content 内容
	 */
	info(content: QmsgConfigContent): QmsgMsg;
	/**
	 * 信息Toast
	 * @param config 配置
	 */
	info(config: QmsgConfigPartial): QmsgMsg;
	/**
	 * 信息Toast
	 * @param content 内容
	 * @param config 配置
	 */
	info(content: QmsgConfigContent, config: QmsgConfigPartial): QmsgMsg;
	info(content: any, config?: QmsgConfigPartial): QmsgMsg {
		let params = QmsgUtils.mergeArgs(content, config);
		params.type = "info";
		return QmsgInstHandler.call(this, params);
	}
	/**
	 * 警告Toast
	 * @param content 内容
	 */
	warning(content: QmsgConfigContent): QmsgMsg;
	/**
	 * 警告Toast
	 * @param config 配置
	 */
	warning(config: QmsgConfigPartial): QmsgMsg;
	/**
	 * 警告Toast
	 * @param content 内容
	 * @param config 配置
	 */
	warning(content: QmsgConfigContent, config: QmsgConfigPartial): QmsgMsg;
	warning(content: any, config?: QmsgConfigPartial): QmsgMsg {
		let params = QmsgUtils.mergeArgs(content, config);
		params.type = "warning";
		return QmsgInstHandler.call(this, params);
	}
	/**
	 * 成功Toast
	 * @param content 内容
	 */
	success(content: QmsgConfigContent): QmsgMsg;
	/**
	 * 成功Toast
	 * @param config 配置
	 */
	success(config: QmsgConfigPartial): QmsgMsg;
	/**
	 * 成功Toast
	 * @param content 内容
	 * @param config 配置
	 */
	success(content: QmsgConfigContent, config: QmsgConfigPartial): QmsgMsg;
	success(content: any, config?: QmsgConfigPartial) {
		let params = QmsgUtils.mergeArgs(content, config);
		params.type = "success";
		return QmsgInstHandler.call(this, params);
	}
	/**
	 * 失败Toast
	 * @param content 内容
	 */
	error(content: QmsgConfigContent): QmsgMsg;
	/**
	 * 失败Toast
	 * @param config 配置
	 */
	error(config: QmsgConfigPartial): QmsgMsg;
	/**
	 * 失败Toast
	 * @param content 内容
	 * @param config 配置
	 */
	error(content: QmsgConfigContent, config: QmsgConfigPartial): QmsgMsg;
	error(content: any, config?: QmsgConfigPartial) {
		let params = QmsgUtils.mergeArgs(content, config);
		params.type = "error";
		return QmsgInstHandler.call(this, params);
	}
	/**
	 * 加载中Toast
	 * @param content 内容
	 */
	loading(content: QmsgConfigContent): QmsgMsg;
	/**
	 * 加载中Toast
	 * @param config 配置
	 */
	loading(config: QmsgConfigPartial): QmsgMsg;
	/**
	 * 加载中Toast
	 * @param content 内容
	 * @param config 配置
	 * @returns
	 */
	loading(content: QmsgConfigContent, config: QmsgConfigPartial): QmsgMsg;
	loading(content: any, config?: QmsgConfigPartial): QmsgMsg {
		let params = QmsgUtils.mergeArgs(content, config);
		params.type = "loading";
		params.autoClose = false;
		return QmsgInstHandler.call(this, params);
	}
	/**
	 * 根据uuid删除Qmsg实例和元素
	 * @param uuid 唯一值
	 */

	remove(uuid: string) {
		QmsgInstStorage.remove(uuid);
	}
	/**
	 * 关闭当前Qmsg创建的所有的实例
	 */
	closeAll() {
		for (
			let index = QmsgInstStorage.insInfoList.length - 1;
			index >= 0;
			index--
		) {
			let item = QmsgInstStorage.insInfoList[index];
			item && item.instance && item.instance.close();
		}
	}
}

let qmsg = new Qmsg();

export { qmsg as Qmsg };
