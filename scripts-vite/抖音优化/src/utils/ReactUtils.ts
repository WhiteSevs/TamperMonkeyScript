import { DOMUtils, log, utils } from "@/env";

interface ReactInstance {
	reactFiber: any;
	reactProps: any;
	reactEvents: any;
	reactEventHandlers: any;
	reactInternalInstance: any;
	reactContainer: any;
}
interface WaitSetOption {
	/**
	 * 在检测前输出日志
	 */
	msg?: string;
	/**
	 * 检测属性的函数
	 */
	check(reactInstance: any): boolean;
	/**
	 * 进行设置
	 */
	set(reactInstance: any, $target: HTMLElement): void;
}

export const ReactUtils = {
	/**
	 * 等待react某个属性并进行设置
	 */
	async waitReactPropsToSet(
		$target: HTMLElement | (() => HTMLElement | null) | string,
		propName: keyof ReactInstance,
		needSetList: WaitSetOption[] | WaitSetOption
	) {
		function getTarget() {
			let __target__ = null as HTMLElement | null;
			if (typeof $target === "string") {
				__target__ = document.querySelector($target);
			} else if (typeof $target === "function") {
				__target__ = $target();
			} else if ($target instanceof HTMLElement) {
				__target__ = $target;
			}
			return __target__;
		}
		if (typeof $target === "string") {
			let $ele = await utils.waitNode($target, 10000);
			if (!$ele) {
				return;
			}
		}
		if (!Array.isArray(needSetList)) {
			needSetList = [needSetList];
		}
		needSetList.forEach((needSetOption) => {
			if (typeof needSetOption.msg === "string") {
				log.info(needSetOption.msg);
			}
			function checkReactInstance() {
				let target = getTarget();
				if (target == null) {
					return false;
				}
				let targetInstance = utils.getReactObj(target);
				if (targetInstance == null) {
					return false;
				}
				let targetInstanceProp = targetInstance[propName];
				if (targetInstanceProp == null) {
					return false;
				}
				let needOwnCheck = needSetOption.check(targetInstanceProp);
				return Boolean(needOwnCheck);
			}
			utils
				.waitPropertyByInterval(
					() => {
						return getTarget();
					},
					checkReactInstance,
					250,
					10000
				)
				.then(() => {
					let target = getTarget();
					if (target == null) {
						return;
					}
					let targetInstance = utils.getReactObj(target as HTMLElement);
					if (targetInstance == null) {
						return;
					}
					let targetInstanceProp = targetInstance[propName];
					if (targetInstanceProp == null) {
						return;
					}
					needSetOption.set(targetInstanceProp, target);
				});
		});
	},
};
