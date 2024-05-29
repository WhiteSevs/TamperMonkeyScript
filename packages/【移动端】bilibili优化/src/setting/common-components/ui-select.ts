import { PopsPanel } from "@/setting/setting";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY } from "../config";

/**
 * 下拉列表
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param data 下拉列表的数据
 * @param callback 选择列表的某一项的回调
 * @param description 左边的文字下面的描述
 * @returns
 */
const UISelect = function <T extends any>(
	text: string,
	key: string,
	defaultValue: T,
	data:
		| {
				value: T;
				text: string;
				disable?(value: T): boolean;
		  }[]
		| (() => {
				value: T;
				text: string;
				disable?(value: T): boolean;
		  }[]),
	callback?: (
		event: PointerEvent | TouchEvent,
		isSelectedValue: T,
		isSelectedText: string
	) => void,
	description?: string
): PopsPanelSelectDetails<T> {
	let selectData: {
		value: T;
		text: string;
		disable?(value: T): boolean;
	}[] = [];
	if (typeof data === "function") {
		selectData = data();
	} else {
		selectData = data;
	}
	let result: PopsPanelSelectDetails<T> = {
		text: text,
		type: "select",
		description: description,
		attributes: {} as { [key: string]: any },
		getValue() {
			return PopsPanel.getValue(key, defaultValue);
		},
		callback(event, isSelectedValue, isSelectedText) {
			PopsPanel.setValue(key, isSelectedValue);
			if (typeof callback === "function") {
				callback(event, isSelectedValue, isSelectedText);
			}
		},
		data: selectData,
	};
	if (result.attributes) {
		result.attributes[ATTRIBUTE_KEY] = key;
		result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
	}
	return result;
};

export { UISelect };
