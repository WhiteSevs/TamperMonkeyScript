import type { PopsPanelSelectDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-select";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "../panel-config";
import { log } from "../../base.env";
import { Panel } from "../panel";
import {
	PanelComponents,
	type PanelComponentsStorageApiValue,
} from "../panel-components";

/**
 * 下拉列表
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param data 下拉列表的数据
 * @param changeCallback （可选）选择列表的某一项的回调，如果返回true，则阻止默认行为（存储值）
 * @param description （可选）左边的文字下面的描述
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
	changeCallback?:
		| ((
				event: PointerEvent | TouchEvent,
				isSelectedValue: T,
				isSelectedText: string
		  ) => void | boolean)
		| undefined,
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
			let storageApiValue = this.props![
				PROPS_STORAGE_API as keyof typeof this.props
			] as PanelComponentsStorageApiValue;
			return storageApiValue.get(key, defaultValue);
		},
		callback(event, isSelectedValue, isSelectedText) {
			let value = isSelectedValue;
			log.info(`选择：${isSelectedText}`);

			if (typeof changeCallback === "function") {
				let result = changeCallback(event, value, isSelectedText);
				if (result) {
					return;
				}
			}
			let storageApiValue = this.props![
				PROPS_STORAGE_API as keyof typeof this.props
			] as PanelComponentsStorageApiValue;
			storageApiValue.set(key, value);
		},
		data: selectData,
	};
	Reflect.set(result.attributes!, ATTRIBUTE_KEY, key);
	Reflect.set(result.attributes!, ATTRIBUTE_DEFAULT_VALUE, defaultValue);

	PanelComponents.initComponentsStorageApi(
		"select",
		result as Required<PopsPanelSelectDetails<T>>,
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
