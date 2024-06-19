import { PopsPanel } from "@/setting/setting";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY } from "../config";

/**
 * 获取多行输入框配置
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param description 左边的文字下面的描述
 * @param changeCallBack 输入框内容改变时的回调
 * @param placeholder 输入框的默认提示内容
 * @param disabled 是否禁用
 * @returns
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
		attributes: {} as { [key: string]: any },
		description: description,
		placeholder: placeholder,
		disabled: disabled,
		getValue() {
			let localValue = PopsPanel.getValue(key, defaultValue);
			return localValue;
		},
		callback(event, value) {
			if (typeof changeCallBack === "function") {
				if (changeCallBack(event, value)) {
					return;
				}
			}
			PopsPanel.setValue(key, value);
		},
	};
	if (result.attributes) {
		result.attributes[ATTRIBUTE_KEY] = key;
		result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
	}
	return result;
};
