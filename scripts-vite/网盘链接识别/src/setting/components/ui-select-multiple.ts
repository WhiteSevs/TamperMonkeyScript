import type { PopsPanelSelectMultipleDetails } from "@whitesev/pops/dist/types/src/components/panel/selectMultipleType";
import type { PopsAlertDetails } from "@whitesev/pops/dist/types/src/components/alert/indexType";
import { UISelectMultiple as BaseUISelectMultiple } from "@components/setting/components/ui-select-multiple";
import { PROPS_STORAGE_API } from "@components/setting/panel-config";
import { GM_getValue, GM_setValue } from "ViteGM";

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
	this: any,
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
	let result = BaseUISelectMultiple.apply(
		this,
		// @ts-ignore
		arguments
	) as PopsPanelSelectMultipleDetails<T>;
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
