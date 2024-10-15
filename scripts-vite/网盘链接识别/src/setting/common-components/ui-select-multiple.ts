import { GM_getValue, GM_setValue } from "ViteGM";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "../config";
import { PopsPanelSelectMultipleDetails } from "@whitesev/pops/dist/types/src/components/panel/selectMultipleType";
import { log } from "@/env";
import type { PopsAlertDetails } from "@whitesev/pops/dist/types/src/components/alert/indexType";

/**
 * 下拉列表-多选
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param data 下拉列表的数据
 * @param callback 选择列表的某一项的回调
 * @param description 左边的文字下面的描述
 * @param selectConfirmDialogDetails 弹窗配置
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
		selectInfo: {
			value: T;
			text: string;
		}[]
	) => void,
	description?: string,
	placeholder = "请至少选择一个选项",
	selectConfirmDialogDetails?: Partial<PopsAlertDetails>
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
		placeholder: placeholder,
		attributes: {},
		props: {},
		getValue() {
			return (this.props as any)[PROPS_STORAGE_API].get(key, defaultValue);
		},
		selectConfirmDialogDetails: selectConfirmDialogDetails,
		callback(selectInfo) {
			let value: T[] = [];
			selectInfo.forEach((selectedInfo) => {
				value.push(selectedInfo.value);
			});
			(this.props as any)[PROPS_STORAGE_API].set(key, value);
			log.info(`多选-选择：`, value);
			if (typeof callback === "function") {
				callback(selectInfo);
			}
		},
		data: selectData,
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
