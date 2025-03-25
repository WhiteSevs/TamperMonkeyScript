import { log } from "@/env";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "../panel-config";
import { PopsPanelSwitchDetails } from "@whitesev/pops/dist/types/src/components/panel/switchType";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import type { PopsPanelRightAsideContainerOptions } from "@whitesev/pops/dist/types/src/components/panel/commonType";
import { PopsPanel } from "../panel";

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
	let result: PopsPanelSwitchDetails = {
		text: text,
		type: "switch",
		description: description,
		attributes: {},
		props: {},
		getValue() {
			return Boolean(
				(this.props as any)[PROPS_STORAGE_API].get(key, defaultValue)
			);
		},
		callback(event: MouseEvent | PointerEvent, __value: boolean) {
			let value = Boolean(__value);
			log.success(`${value ? "开启" : "关闭"} ${text}`);
			if (typeof clickCallBack === "function") {
				if (clickCallBack(event, value)) {
					return;
				}
			}
			(this.props as any)[PROPS_STORAGE_API].set(key, value);
		},
		afterAddToUListCallBack: afterAddToUListCallBack,
	};

	Reflect.set(result.attributes!, ATTRIBUTE_KEY, key);
	Reflect.set(result.attributes!, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
	Reflect.set(result.props!, PROPS_STORAGE_API, {
		get<T>(key: string, defaultValue: T) {
			return PopsPanel.getValue(key, defaultValue);
		},
		set(key: string, value: any) {
			PopsPanel.setValue(key, value);
		},
	});

	return result;
};
