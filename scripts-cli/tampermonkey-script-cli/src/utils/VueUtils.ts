import { DOMUtils, log, utils } from "@/env";
import type { Vue2Instance } from "@whitesev/utils/dist/types/src/types/Vue2";
import { unsafeWindow } from "ViteGM";
import Qmsg from "qmsg";

/** 等待设置vue某个值的配置 */
type VueWaitSetOption = {
	/**
	 * 在检测前输出日志
	 */
	msg?: string;
	/**
	 * 检测属性的函数
	 * @param vueInstance vue实例
	 * @param target 目标元素
	 */
	check(vueInstance: Vue2Instance, target: HTMLElement): boolean;
	/**
	 * 进行设置
	 * @param vueInstance vue实例
	 * @param target 目标元素
	 */
	set(vueInstance: Vue2Instance, target: HTMLElement): void;
	/**
	 * 当检测失败/超时触发该回调
	 */
	failWait?: (
		/** 是否是检测超时 true超时，false未检测到vue实例 */
		isTimeout: boolean
	) => void;
};
export const VueUtils = {
	/**
	 * 获取vue2实例
	 * @param element
	 */
	getVue(
		element: Element | null | EventTarget | HTMLElement
	): Vue2Instance | undefined {
		if (element == null) {
			return;
		}
		// @ts-ignore
		return element["__vue__"] || element["__Ivue__"] || element["__IVue__"];
	},
	/**
	 * 获取vue3实例
	 * @param element
	 */
	getVue3(element: Element | null | EventTarget | HTMLElement) {
		if (element == null) {
			return;
		}
		// @ts-ignore
		return element["__vueParentComponent"];
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
				__target__ = document.querySelector<HTMLElement>($target);
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
			/**
			 * 检测vue实例
			 */
			function checkVue() {
				let target = getTarget();
				if (target == null) {
					return false;
				}
				let vueInstance = VueUtils.getVue(target);
				if (vueInstance == null) {
					return false;
				}
				let needOwnCheck = needSetOption.check(vueInstance, target);
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
						if (typeof needSetOption.failWait === "function") {
							needSetOption.failWait(true);
						}
						return;
					}
					let target = getTarget();
					let vueInstance = VueUtils.getVue(target as HTMLElement);
					if (vueInstance == null) {
						if (typeof needSetOption.failWait === "function") {
							needSetOption.failWait(false);
						}
						return;
					}
					needSetOption.set(vueInstance, target!);
				});
		});
	},
	/**
	 * 观察vue属性的变化
	 * @param $target 目标对象
	 * @param key 需要观察的属性
	 * @param callback 监听回调
	 * @param watchConfig 监听配置
	 * @param failWait 当检测失败/超时触发该回调
	 */
	watchVuePropChange(
		$target: HTMLElement | (() => HTMLElement | null) | string,
		key: string | string[] | ((vueInstance: Vue2Instance) => any),
		callback: (vueInstance: Vue2Instance, newValue: any, oldValue: any) => void,
		watchConfig?: {
			/** 是否立即执行 @default true */
			immediate?: boolean;
			/** 是否深度监听 @default false */
			deep?: boolean;
		},
		failWait?: VueWaitSetOption["failWait"]
	) {
		let config = utils.assign(
			{
				immediate: true,
				deep: false,
			},
			watchConfig || {}
		);
		return new Promise<Function | null>((resolve) => {
			VueUtils.waitVuePropToSet($target, {
				check(vueInstance) {
					return typeof vueInstance?.$watch === "function";
				},
				set(vueInstance) {
					let removeWatch = null;
					if (typeof key === "function") {
						removeWatch = vueInstance.$watch(
							() => {
								return key(vueInstance);
							},
							(newValue, oldValue) => {
								callback(vueInstance, newValue, oldValue);
							},
							config
						);
					} else {
						removeWatch = vueInstance.$watch(
							key,
							(newValue, oldValue) => {
								callback(vueInstance, newValue, oldValue);
							},
							config
						);
					}
					resolve(removeWatch);
				},
				failWait: failWait,
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
			Qmsg.error("跳转Url: $vueNode为空");
			log.error("跳转Url: $vueNode为空：" + path);
			return;
		}
		let vueInstance = VueUtils.getVue($vueNode);
		if (vueInstance == null) {
			Qmsg.error("获取vue属性失败", { consoleLogContent: true });
			return;
		}
		let $router = vueInstance.$router;
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
		/** vue实例 */
		vueInstance: Vue2Instance;
		/** 改变的hash值 */
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
			DOMUtils.on(unsafeWindow, "popstate", popstateEvent);
		}

		/**
		 * 允许浏览器后退并关闭小窗
		 * @param [isFromPopState=false] 是否由popstate触发
		 */
		async function resumeBack(isFromPopState = false) {
			DOMUtils.off(unsafeWindow, "popstate", popstateEvent);
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
