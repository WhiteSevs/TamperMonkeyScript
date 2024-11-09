import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "../config";
import { PopsPanelInputDetails } from "@whitesev/pops/dist/types/src/components/panel/inputType";
import { PopsPanel } from "../setting";

/**
 * 获取输入框配置
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param description 左边的文字下面的描述
 * @param changeCallBack 输入框内容改变时的回调
 * @param placeholder 输入框的默认提示内容
 * @param isNumber 是否是数字框
 * @param isPassword 是否是密码框
 */
export const UIInput = function <T extends boolean>(
	text: string,
	key: string,
	defaultValue: T extends true ? number : string,
	description?: string | undefined,
	changeCallBack?:
		| ((
				event: InputEvent,
				value: string,
				valueAsNumber?: number | undefined
		  ) => void | boolean)
		| undefined,
	placeholder = "",
	isNumber?: T,
	isPassword?: boolean
) {
	let result: PopsPanelInputDetails = {
		text: text,
		type: "input",
		isNumber: Boolean(isNumber),
		isPassword: Boolean(isPassword),
		props: {},
		attributes: {},
		description: description,
		getValue() {
			return (this.props as any)[PROPS_STORAGE_API].get(key, defaultValue);
		},
		callback(event, value) {
			if (typeof changeCallBack === "function") {
				if (changeCallBack(event, value)) {
					return;
				}
			}
			(this.props as any)[PROPS_STORAGE_API].set(key, value);
		},
		placeholder: placeholder,
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
