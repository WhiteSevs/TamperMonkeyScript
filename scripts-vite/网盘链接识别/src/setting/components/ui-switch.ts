import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import type { PopsPanelRightAsideContainerOptions } from "@whitesev/pops/dist/types/src/components/panel/commonType";
import { PROPS_STORAGE_API } from "@components/setting/panel-config";
import { UISwitch as BaseUISwitch } from "@components/setting/components/ui-switch";
import { GM_getValue, GM_setValue } from "ViteGM";

/**
 * 获取checkbox按钮配置
 * @param text 文字
 * @param key 键
 * @param defaultValue 默认值
 * @param clickCallBack （可选）点击回调
 * @param description （可选）左边的文字下面的描述，可以是html格式
 * @param afterAddToUListCallBack （可选）在添加到元素后触发该回调
 */
export const UISwitch = function (
	this: any,
	text: string,
	key: string,
	defaultValue: boolean | undefined,
	clickCallBack?:
		| ((event: MouseEvent | PointerEvent, value: boolean) => boolean | void)
		| undefined,
	description?: string | undefined,
	afterAddToUListCallBack?:
		| ((
				formConfig: PopsPanelFormsTotalDetails,
				container: PopsPanelRightAsideContainerOptions
		  ) => void)
		| undefined
) {
	let result = BaseUISwitch.apply(
		this,
		// @ts-ignore
		arguments
	);
	Reflect.set(result.props!, PROPS_STORAGE_API, {
		get<T>(key: string, defaultValue: T) {
			return GM_getValue(key, defaultValue);
		},
		set(key: string, value: any) {
			GM_setValue(key, value);
		},
	});

	return result;
};
