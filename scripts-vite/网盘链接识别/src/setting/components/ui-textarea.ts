import { PROPS_STORAGE_API } from "@components/setting/panel-config";
import { GM_getValue, GM_setValue } from "ViteGM";
import { UITextArea as BaseUITextArea } from "@components/setting/components/ui-textarea";

/**
 * 获取多行输入框配置
 * @param text 左边的文字
 * @param key 键
 * @param defaultValue 默认值
 * @param description （可选）左边的文字下面的描述
 * @param changeCallBack （可选）输入框内容改变时的回调
 * @param placeholder （可选）输入框的默认提示内容，默认为空
 * @param disabled （可选）是否禁用
 */
export const UITextArea_ = function (
	this: any,
	text: string,
	key: string,
	defaultValue: string,
	description?: string,
	changeCallBack?: (event: InputEvent, value: string) => void | boolean,
	placeholder: string = "",
	disabled?: boolean
) {
	let result = BaseUITextArea.apply(
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
