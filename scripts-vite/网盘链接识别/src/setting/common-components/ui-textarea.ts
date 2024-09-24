import { GM_getValue, GM_setValue } from "ViteGM";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "../config";
import { PopsPanelTextAreaDetails } from "@whitesev/pops/dist/types/src/components/panel/textareaType";

/**
 * 获取多行输入框配置
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param description 左边的文字下面的描述
 * @param changeCallBack 输入框内容改变时的回调
 * @param placeholder 输入框的默认提示内容
 * @param disabled 是否禁用
 */
export const UITextArea = function (
	text: string,
	key: string,
	defaultValue: string,
	description?: string,
	changeCallBack?: (event: InputEvent, value: string) => void | boolean,
	placeholder: string = "",
	disabled?: boolean
) {
	let result: PopsPanelTextAreaDetails = {
		text: text,
		type: "textarea",
		attributes: {},
		props: {},
		description: description,
		placeholder: placeholder,
		disabled: disabled,
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
	};

	Reflect.set(result.attributes!, ATTRIBUTE_KEY, key);
	Reflect.set(result.attributes!, ATTRIBUTE_DEFAULT_VALUE, defaultValue);
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
