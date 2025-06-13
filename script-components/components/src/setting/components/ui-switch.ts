import type { PopsPanelSwitchDetails } from "@whitesev/pops/dist/types/src/components/panel/switchType";
import type { PopsPanelFormsTotalDetails } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import type { PopsPanelRightAsideContainerOptions } from "@whitesev/pops/dist/types/src/components/panel/commonType";
import { log } from "../../base.env";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "../panel-config";
import { Panel } from "../panel";
import {
	PanelComponents,
	type PanelComponentsStorageApiValue,
} from "../panel-components";

/**
 * 获取checkbox按钮配置
 * @param text 文字
 * @param key 键
 * @param defaultValue 默认值
 * @param clickCallback （可选）点击回调，如果返回true，则阻止默认行为（存储值）
 * @param description （可选）左边的文字下面的描述，可以是html格式
 * @param afterAddToUListCallBack （可选）在添加到元素后触发该回调
 */
export const UISwitch = function (
	text: string,
	key: string,
	defaultValue: boolean | undefined,
	clickCallback?:
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
			let storageApiValue = this.props![
				PROPS_STORAGE_API as keyof typeof this.props
			] as PanelComponentsStorageApiValue;

			return Boolean(storageApiValue.get(key, defaultValue));
		},
		callback(event: MouseEvent | PointerEvent, __value: boolean) {
			let value = Boolean(__value);
			log.success(`${value ? "开启" : "关闭"} ${text}`);
			if (typeof clickCallback === "function") {
				let result = clickCallback(event, value);
				if (result) {
					return;
				}
			}

			let storageApiValue = this.props![
				PROPS_STORAGE_API as keyof typeof this.props
			] as PanelComponentsStorageApiValue;
			storageApiValue.set(key, value);
		},
		afterAddToUListCallBack: afterAddToUListCallBack,
	};

	Reflect.set(result.attributes!, ATTRIBUTE_KEY, key);
	Reflect.set(result.attributes!, ATTRIBUTE_DEFAULT_VALUE, defaultValue);

	PanelComponents.initComponentsStorageApi(
		"switch",
		result as Required<PopsPanelSwitchDetails>,
		{
			get<T>(key: string, defaultValue: T) {
				return Panel.getValue(key, defaultValue);
			},
			set(key: string, value: any) {
				Panel.setValue(key, value);
			},
		}
	);
	return result;
};
