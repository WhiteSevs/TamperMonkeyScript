import type { PopsPanelSelectMultipleDetails } from "@whitesev/pops/dist/types/src/components/panel/selectMultipleType";
import type { PopsAlertDetails } from "@whitesev/pops/dist/types/src/components/alert/indexType";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "../panel-config";
import { Panel } from "../panel";
import { log } from "../../base.env";
import {
	PanelComponents,
	type PanelComponentsStorageApiValue,
} from "../panel-components";

/**
 * 下拉列表-多选
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param data 下拉列表的数据
 * @param changeCallback （可选）选择列表的某一项的回调，如果返回true，则阻止默认行为（存储值）
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
	changeCallback?:
		| ((
				selectInfo: PopsPanelSelectMultipleDetails<T>["data"]
		  ) => void | boolean)
		| undefined,
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
			let storageApiValue = this.props![
				PROPS_STORAGE_API as keyof typeof this.props
			] as PanelComponentsStorageApiValue;
			return storageApiValue.get(key, defaultValue);
		},
		selectConfirmDialogDetails: selectConfirmDialogDetails,
		callback(selectInfo) {
			let storageApiValue = this.props![
				PROPS_STORAGE_API as keyof typeof this.props
			] as PanelComponentsStorageApiValue;
			let value: T[] = [];
			selectInfo.forEach((selectedInfo) => {
				value.push(selectedInfo.value);
			});
			log.info(`多选-选择：`, value);

			if (typeof changeCallback === "function") {
				let result = changeCallback(selectInfo);
				if (result) {
					return;
				}
			}
			storageApiValue.set(key, value);
		},
		data: selectData,
	};

	Reflect.set(result.attributes!, ATTRIBUTE_KEY, key);
	Reflect.set(result.attributes!, ATTRIBUTE_DEFAULT_VALUE, defaultValue);

	PanelComponents.initComponentsStorageApi(
		"select-multiple",
		result as Required<PopsPanelSelectMultipleDetails<T>>,
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
