import { DOMUtils, log, utils } from "@/env";

interface ReactObj {
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
		propName: keyof ReactObj,
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
			function checkObj() {
				let target = getTarget();
				if (target == null) {
					return false;
				}
				let targetObj = utils.getReactObj(target);
				if (targetObj == null) {
					return false;
				}
				let targetObjProp = targetObj[propName];
				if (targetObjProp == null) {
					return false;
				}
				let needOwnCheck = needSetOption.check(targetObjProp);
				return Boolean(needOwnCheck);
			}
			utils
				.waitPropertyByInterval(
					() => {
						return getTarget();
					},
					checkObj,
					250,
					10000
				)
				.then(() => {
					let target = getTarget();
					if (target == null) {
						return;
					}
					let targetObj = utils.getReactObj(target as HTMLElement);
					if (targetObj == null) {
						return;
					}
					let targetObjProp = targetObj[propName];
					if (targetObjProp == null) {
						return;
					}
					needSetOption.set(targetObjProp, target);
				});
		});
	},
};
