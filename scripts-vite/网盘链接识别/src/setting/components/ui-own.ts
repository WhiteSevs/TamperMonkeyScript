import type { PopsPanelOwnDetails } from "@whitesev/pops/dist/types/src/components/panel/ownType";
import type { PopsPanelRightAsideContainerOptions } from "@whitesev/pops/dist/types/src/components/panel/commonType";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UIOwn as BaseUIOwn } from "@components/setting/components/ui-own";

/**
 * 自定义配置
 * @param getLiElementCallBack
 * @param initConfig （可选）初始话的键、默认值，可配置多个
 * @param props （可选）元素的属性
 * @param afterAddToUListCallBack （可选）在添加到元素后触发该回调
 */
export const UIOwn__ = function (
	this: any,
	getLiElementCallBack: (liElement: HTMLLIElement) => HTMLLIElement,
	initConfig?: { [key: string]: any },
	props?: HTMLElement | undefined,
	afterAddToUListCallBack?:
		| ((
				formConfig: PopsPanelFormsTotalDetails,
				container: PopsPanelRightAsideContainerOptions
		  ) => void)
		| undefined
): PopsPanelOwnDetails {
	let result = BaseUIOwn.apply(
		this,
		// @ts-ignore
		arguments
	);
	return result;
};
