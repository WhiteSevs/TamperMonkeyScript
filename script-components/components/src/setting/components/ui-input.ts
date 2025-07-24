import type { PopsPanelInputDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-input";
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
 * 获取输入框配置
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param description （可选）左边的文字下面的描述
 * @param changeCallback （可选）输入框内容改变时的回调，如果返回true，则阻止默认行为（存储值）
 * @param placeholder （可选）输入框的默认提示内容
 * @param isNumber （可选）是否是数字框
 * @param isPassword （可选）是否是密码框
 * @param afterAddToUListCallBack （可选）
 * @param valueChangeCallback （可选）输入框内容改变且成功存储值后的回调
 */
export const UIInput = function <T extends boolean>(
	text: string,
	key: string,
	defaultValue: T extends true ? number : string,
	description?: string | undefined,
	changeCallback?:
		| ((
				event: InputEvent,
				value: string,
				valueAsNumber?: number | undefined
		  ) => void | boolean)
		| undefined,
	placeholder = "",
	isNumber?: T,
	isPassword?: boolean,
	afterAddToUListCallBack?: PopsPanelInputDetails["afterAddToUListCallBack"],
	valueChangeCallback?:
		| ((
				event: InputEvent,
				value: string,
				valueAsNumber?: number | undefined
		  ) => void | boolean)
		| undefined
) {
	let result: PopsPanelInputDetails = {
		text: text,
		type: "input",
		isNumber: Boolean(isNumber),
		isPassword: Boolean(isPassword),
		attributes: {},
		props: {},
		description: description,
		afterAddToUListCallBack: afterAddToUListCallBack,
		getValue() {
			let storageApiValue = this.props![
				PROPS_STORAGE_API as keyof typeof this.props
			] as PanelComponentsStorageApiValue;
			return storageApiValue.get<any>(key, defaultValue);
		},
		callback(event, value, valueAsNumber) {
			if (typeof changeCallback === "function") {
				let result = changeCallback(event, value, valueAsNumber);
				if (result) {
					return;
				}
			}
			let storageApiValue = this.props![
				PROPS_STORAGE_API as keyof typeof this.props
			] as PanelComponentsStorageApiValue;
			storageApiValue.set(key, value);

			if (typeof valueChangeCallback === "function") {
				valueChangeCallback(event, value, valueAsNumber);
			}
		},
		placeholder: placeholder,
	};
	Reflect.set(result.attributes!, ATTRIBUTE_KEY, key);
	Reflect.set(result.attributes!, ATTRIBUTE_DEFAULT_VALUE, defaultValue);

	PanelComponents.initComponentsStorageApi(
		"input",
		result as Required<PopsPanelInputDetails>,
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
