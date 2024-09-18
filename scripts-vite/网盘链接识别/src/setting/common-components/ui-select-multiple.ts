import { GM_getValue, GM_setValue } from "ViteGM";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY } from "../config";
import { PopsPanelSelectMultipleDetails } from "@whitesev/pops/dist/types/src/components/panel/selectMultipleType";
import { log } from "@/env";

/**
 * 下拉列表-多选
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param data 下拉列表的数据
 * @param callback 选择列表的某一项的回调
 * @param description 左边的文字下面的描述
 */
export const UISelectMultiple = function <T>(
	text: string,
	key: string,
	defaultValue: T[],
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
		isSelectedInfo: {
			value: T;
			text: string;
			$option: HTMLOptionElement;
		}[]
	) => void,
	description?: string
): PopsPanelSelectMultipleDetails<T> {
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
	let result: PopsPanelSelectMultipleDetails<T> = {
		text: text,
		type: "select-multiple",
		description: description,
		attributes: {} as { [key: string]: any },
		getValue() {
			return GM_getValue(key, defaultValue);
		},
		callback(event, isSelectedInfoList) {
			let saveValue: T[] = [];
			isSelectedInfoList.forEach((selectedInfo) => {
				saveValue.push(selectedInfo.value);
			});
			GM_setValue(key, saveValue);
			log.info([`多选-选择：`, saveValue]);
			if (typeof callback === "function") {
				callback(event, isSelectedInfoList);
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
