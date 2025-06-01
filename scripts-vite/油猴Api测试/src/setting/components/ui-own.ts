import { PopsPanelOwnDetails } from "@whitesev/pops/dist/types/src/components/panel/ownType";
import { ATTRIBUTE_INIT } from "../panel-config";
import { PopsPanelRightAsideContainerOptions } from "@whitesev/pops/dist/types/src/components/panel/commonType";
import { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/components/panel/indexType";

/**
 * 自定义配置
 * @param getLiElementCallBack
 * @param initConfig （可选）初始话的键、默认值，可配置多个
 * @param props （可选）元素的属性
 * @param afterAddToUListCallBack （可选）在添加到元素后触发该回调
 */
export const UIOwn = function (
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
	let result: PopsPanelOwnDetails = {
		type: "own",
		attributes: {},
		props: props,
		getLiElementCallBack: getLiElementCallBack,
		afterAddToUListCallBack: afterAddToUListCallBack,
	};

	Reflect.set(result.attributes!, ATTRIBUTE_INIT, () => {
		if (initConfig) {
			// Object.keys(initConfig).forEach((key) => {
			// 	let defaultValue = initConfig[key];
			// 	/* 存储到内存中 */
			// 	if (PopsPanel.$data.data.has(key)) {
			// 		log.warn("请检查该key(已存在): " + key);
			// 	}
			// 	PopsPanel.$data.data.set(key, defaultValue);
			// });
		}
		return false;
	});
	return result;
};
