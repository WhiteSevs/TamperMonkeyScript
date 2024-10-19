import { DOMUtils, log, utils } from "@/env";

type GestureBackConfig = {
	/** 进入手势模式的hash */
	hash: string;
	/** 退出手势模式的延迟时间，单位ms @default 150 */
	backDelayTime?: number;
	/** 在执行退出手势模式前的回调函数 */
	beforeHistoryBackCallBack?: Function;
	/** 在执行退出手势模式后的回调函数 */
	afterHistoryBackCallBack?: Function;
};
/**
 * 手势返回
 */
export class GestureBack {
	/**
	 * 是否正在后退
	 */
	isBacking = false;
	config: GestureBackConfig;
	constructor(config: GestureBackConfig) {
		this.config = config;
		if (
			typeof config.backDelayTime !== "number" ||
			isNaN(config.backDelayTime)
		) {
			config.backDelayTime = 150;
		}
	}
	/**
	 * popstate事件函数
	 * @param event
	 */
	popStateEvent(event: Event) {
		utils.preventEvent(event);
		if (this.isBacking) {
			return;
		}
		this.quitGestureBackMode();
	}
	/**
	 * 进入手势模式
	 */
	enterGestureBackMode() {
		/* 监听地址改变 */
		log.success("进入手势模式");
		let hash = this.config.hash;
		if (!hash.startsWith("#")) {
			// /xxx
			// xxxx
			if (!hash.startsWith("/")) {
				hash = "/" + hash;
			}
			hash = "#" + hash;
		}
		window.history.pushState({}, "", hash);
		log.success("监听popstate事件");
		DOMUtils.on(window, "popstate", this.popStateEvent.bind(this), {
			capture: true,
		});
	}
	/**
	 * 退出手势模式
	 */
	async quitGestureBackMode() {
		this.isBacking = true;
		log.success("退出手势模式");
		if (typeof this.config.beforeHistoryBackCallBack === "function") {
			this.config.beforeHistoryBackCallBack();
		}
		while (true) {
			if (globalThis.location.hash.endsWith(this.config.hash)) {
				log.info("history.back()");
				globalThis.history.back();
				await utils.sleep(this.config.backDelayTime);
			} else {
				break;
			}
		}
		log.success("移除popstate事件");
		DOMUtils.off(window, "popstate", this.popStateEvent.bind(this), {
			capture: true,
		});
		this.isBacking = false;
		if (typeof this.config.afterHistoryBackCallBack === "function") {
			this.config.afterHistoryBackCallBack();
		}
	}
}
