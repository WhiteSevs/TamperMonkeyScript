import { log, utils } from "../base.env";

/** react在元素上储存的对象 */
type ReactInstance = {
	reactFiber: any;
	reactProps: any;
	reactEvents: any;
	reactEventHandlers: any;
	reactInternalInstance: any;
	reactContainer: any;
};
/** 等待设置react某个值的配置 */
type ReactWaitSetOption = {
	/**
	 * 在检测前输出日志
	 */
	msg?: string;
	/**
	 * 检测属性的函数
	 * @param reactInstance react实例
	 * @param target 目标元素
	 */
	check(reactInstance: any, target: HTMLElement): boolean;
	/**
	 * 进行设置
	 * @param reactInstance react实例
	 * @param target 目标元素
	 */
	set(reactInstance: any, target: HTMLElement): void;
};

export const ReactUtils = {
	/**
	 * 等待react某个属性并进行设置
	 */
	async waitReactPropsToSet(
		$target: HTMLElement | (() => HTMLElement | null) | string,
		propName: keyof ReactInstance,
		needSetList: ReactWaitSetOption[] | ReactWaitSetOption
	) {
		if (!Array.isArray(needSetList)) {
			this.waitReactPropsToSet($target, propName, [needSetList]);
			return;
		}
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
		needSetList.forEach((needSetOption) => {
			if (typeof needSetOption.msg === "string") {
				log.info(needSetOption.msg);
			}
			function checkObj() {
				let target = getTarget();
				if (target == null) {
					return false;
				}
				let reactInstance = utils.getReactObj(target);
				if (reactInstance == null) {
					return false;
				}
				let reactInstanceProp = reactInstance[propName];
				if (reactInstanceProp == null) {
					return false;
				}
				let needOwnCheck = needSetOption.check(reactInstanceProp, target);
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
					let reactInstance = utils.getReactObj(target as HTMLElement);
					if (reactInstance == null) {
						return;
					}
					let reactInstanceProp = reactInstance[propName];
					if (reactInstanceProp == null) {
						return;
					}
					needSetOption.set(reactInstanceProp, target);
				});
		});
	},
};
