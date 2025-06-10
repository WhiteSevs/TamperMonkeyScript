import type { PopsPanelInputDetails } from "@whitesev/pops/dist/types/src/components/panel/inputType";
import { UIInput as BaseUIInput } from "@components/setting/components/ui-input";
import { PROPS_STORAGE_API } from "@components/setting/panel-config";
import { GM_getValue, GM_setValue } from "ViteGM";

/**
 * 获取输入框配置
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param description （可选）左边的文字下面的描述
 * @param changeCallBack （可选）输入框内容改变时的回调
 * @param placeholder （可选）输入框的默认提示内容
 * @param isNumber （可选）是否是数字框
 * @param isPassword （可选）是否是密码框
 * @param afterAddToUListCallBack （可选）
 */
export const UIInput = function <T extends boolean>(
	this: any,
	text: string,
	key: string,
	defaultValue: T extends true ? number : string,
	description?: string | undefined,
	changeCallBack?:
		| ((
				event: InputEvent,
				value: string,
				valueAsNumber?: number | undefined
		  ) => void | boolean)
		| undefined,
	placeholder = "",
	isNumber?: T,
	isPassword?: boolean,
	afterAddToUListCallBack?: PopsPanelInputDetails["afterAddToUListCallBack"]
) {
	let result = BaseUIInput.apply(
		this,
		// @ts-ignore
		arguments
	);

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
