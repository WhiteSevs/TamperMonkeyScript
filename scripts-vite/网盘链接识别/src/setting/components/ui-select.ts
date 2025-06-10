import type { PopsPanelSelectDetails } from "@whitesev/pops/dist/types/src/components/panel/selectType";
import { PROPS_STORAGE_API } from "@components/setting/panel-config";
import { UISelect as BaseUISelect } from "@components/setting/components/ui-select";
import { GM_getValue, GM_setValue } from "ViteGM";

/**
 * 下拉列表
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param data 下拉列表的数据
 * @param callback （可选）选择列表的某一项的回调
 * @param description （可选）左边的文字下面的描述
 */
export const UISelect = function <T extends any>(
	this: any,
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
	let result = BaseUISelect.apply(
		this,
		// @ts-ignore
		arguments
	) as PopsPanelSelectDetails<T>;
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
