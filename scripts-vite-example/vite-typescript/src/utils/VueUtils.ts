import { DOMUtils, addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { Vue2Context } from "@whitesev/utils/dist/types/src/Utils";
import Qmsg from "qmsg";

/** 等待设置vue某个值的配置 */
type VueWaitSetOption = {
	/**
	 * 在检测前输出日志
	 */
	msg?: string;
	/**
	 * 检测属性的函数
	 */
	check(vueInstance: Vue2Context): boolean;
	/**
	 * 进行设置
	 */
	set(vueObj: Vue2Context): void;
};
export const VueUtils = {
	/**
	 * 获取元素上的__vue__属性
	 * @param element
	 */
	getVue(element: HTMLElement | Node | Element): Vue2Context | null {
		return (element as any)?.__vue__ as Vue2Context | null;
	},
	/**
	 * 等待vue属性并进行设置
	 * @param $target 目标对象
	 * @param needSetList 需要设置的配置
	 */
	waitVuePropToSet(
		$target: HTMLElement | (() => HTMLElement | null) | string,
		needSetList: VueWaitSetOption[] | VueWaitSetOption
	) {
		if (!Array.isArray(needSetList)) {
			VueUtils.waitVuePropToSet($target, [needSetList]);
			return;
		}
		function getTarget() {
			let __target__ = null;
			if (typeof $target === "string") {
				__target__ = document.querySelector($target);
			} else if (typeof $target === "function") {
				__target__ = $target();
			} else if ($target instanceof HTMLElement) {
				__target__ = $target;
			}
			return __target__;
		}
		needSetList.forEach((needSetOption) => {
			if (typeof needSetOption.msg === "string") {
				log.info(needSetOption.msg);
			}
			function checkVue() {
				let target = getTarget();
				if (target == null) {
					return false;
				}
				let vueObj = VueUtils.getVue(target);
				if (vueObj == null) {
					return false;
				}
				let needOwnCheck = needSetOption.check(vueObj);
				return Boolean(needOwnCheck);
			}
			utils
				.waitVueByInterval(
					() => {
						return getTarget();
					},
					checkVue,
					250,
					10000
				)
				.then((result) => {
					if (!result) {
						return;
					}
					let target = getTarget();
					let vueObj = VueUtils.getVue(target as HTMLElement);
					if (vueObj == null) {
						return;
					}
					needSetOption.set(vueObj);
				});
		});
	},
	/**
	 * 前往网址
	 * @param $vueNode 包含vue属性的元素
	 * @param path 需要跳转的路径
	 * @param [useRouter=false] 是否强制使用Vue的Router来进行跳转
	 */
	goToUrl($vueNode: Element, path: string, useRouter = false) {
		if ($vueNode == null) {
			Qmsg.error("跳转Url: 获取根元素#app失败");
			log.error("跳转Url: 获取根元素#app失败：" + path);
			return;
		}
		let vueObj = VueUtils.getVue($vueNode);
		if (vueObj == null) {
			log.error("获取vue属性失败");
			Qmsg.error("获取vue属性失败");
			return;
		}
		let $router = vueObj.$router;
		let isBlank = true;
		log.info("即将跳转URL：" + path);
		if (useRouter) {
			isBlank = false;
		}
		if (isBlank) {
			/* 新标签打开 */
			window.open(path, "_blank");
		} else {
			/* 本页打开 */
			if (path.startsWith("http") || path.startsWith("//")) {
				if (path.startsWith("//")) {
					path = window.location.protocol + path;
				}
				let urlObj = new URL(path);
				if (urlObj.origin === window.location.origin) {
					/* 同域名 */
					path = urlObj.pathname + urlObj.search + urlObj.hash;
				} else {
					log.info("不同域名，直接本页打开，不用Router：" + path);
					window.location.href = path;
					return;
				}
			}
			log.info("$router push跳转Url：" + path);
			$router.push(path);
		}
	},
	/**
	 * 手势返回
	 * @param option 配置
	 */
	hookGestureReturnByVueRouter(option: {
		vueInstance: Vue2Context;
		hash: string;
		/**
		 *
		 * @param isFromPopState 是否由popstate触发
		 * @returns
		 */
		callback: (isFromPopState: boolean) => boolean;
	}) {
		/**
		 * 浏览器地址改变事件
		 */
		function popstateEvent() {
			log.success("触发popstate事件");
			resumeBack(true);
		}

		/**
		 * 禁止浏览器后退按钮
		 */
		function banBack() {
			/* 监听地址改变 */
			log.success("监听地址改变");
			option.vueInstance.$router.history.push(option.hash);
			DOMUtils.on(window, "popstate", popstateEvent);
		}

		/**
		 * 允许浏览器后退并关闭小窗
		 * @param [isFromPopState=false] 是否由popstate触发
		 */
		async function resumeBack(isFromPopState = false) {
			DOMUtils.off(window, "popstate", popstateEvent);
			let callbackResult = option.callback(isFromPopState);
			if (callbackResult) {
				return;
			}
			while (1) {
				if (option.vueInstance.$router.history.current.hash === option.hash) {
					log.info("后退！");
					option.vueInstance.$router.back();
					await utils.sleep(250);
				} else {
					return;
				}
			}
		}
		banBack();
		return {
			resumeBack,
		};
	},
};
