import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "../config";
import { PopsPanelSelectDetails } from "@whitesev/pops/dist/types/src/components/panel/selectType";
import { log } from "@/env";
import { PopsPanel } from "../setting";

/**
 * 下拉列表
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param data 下拉列表的数据
 * @param callback 选择列表的某一项的回调
 * @param description 左边的文字下面的描述
 */
export const UISelect = function <T extends any>(
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
		attributes: {},
		props: {},
		getValue() {
			return (this.props as any)[PROPS_STORAGE_API].get(key, defaultValue);
		},
		callback(event, isSelectedValue, isSelectedText) {
			let value = isSelectedValue;
			log.info(`选择：${isSelectedText}`);
			(this.props as any)[PROPS_STORAGE_API].set(key, value);
			if (typeof callback === "function") {
				callback(event, value, isSelectedText);
			}
		},
		data: selectData,
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
