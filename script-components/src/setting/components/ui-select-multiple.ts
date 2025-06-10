import type { PopsPanelSelectMultipleDetails } from "@whitesev/pops/dist/types/src/components/panel/selectMultipleType";
import type { PopsAlertDetails } from "@whitesev/pops/dist/types/src/components/alert/indexType";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "../panel-config";
import { Panel } from "../panel";
import { log } from "../../base.env";

/**
 * 下拉列表-多选
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param data 下拉列表的数据
 * @param callback （可选）选择列表的某一项的回调
 * @param description （可选）左边的文字下面的描述
 * @param selectConfirmDialogDetails （可选）弹窗配置
 */
export const UISelectMultiple = function <T>(
	text: string,
	key: string,
	defaultValue: T[],
	data:
		| PopsPanelSelectMultipleDetails<T>["data"]
		| (() => PopsPanelSelectMultipleDetails<T>["data"]),
	callback?: (selectInfo: PopsPanelSelectMultipleDetails<T>["data"]) => void,
	description?: string,
	placeholder = "请至少选择一个选项",
	selectConfirmDialogDetails?: Partial<PopsAlertDetails>
): PopsPanelSelectMultipleDetails<T> {
	let selectData: PopsPanelSelectMultipleDetails<T>["data"] = [];
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
			return Panel.getValue(key, defaultValue);
		},
		set(key: string, value: any) {
			Panel.setValue(key, value);
		},
	});
	return result;
};
