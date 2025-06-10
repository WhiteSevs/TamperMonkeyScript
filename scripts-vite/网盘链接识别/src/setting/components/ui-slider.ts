import type { PopsPanelSliderDetails } from "@whitesev/pops/dist/types/src/components/panel/sliderType";
import { PROPS_STORAGE_API } from "@components/setting/panel-config";
import { UISlider as BaseUISlider } from "@components/setting/components/ui-slider";
import { GM_getValue, GM_setValue } from "ViteGM";

/**
 * 获取checkbox按钮配置
 * @param text 文字
 * @param key 键
 * @param defaultValue 默认值
 * @param min 最小值
 * @param max 最大值
 * @param changeCallBack （可选）点击回调
 * @param getToolTipContent （可选）获取tooltip内容
 * @param description （可选）左边的文字下面的描述
 * @param step （可选）间隔
 */
export const UISlider = function (
	this: any,
	text: string,
	key: string,
	defaultValue: number,
	min: number,
	max: number,
	changeCallBack?:
		| ((event: InputEvent, value: number) => boolean | void)
		| void,
	getToolTipContent?: (value: number) => string,
	description?: string | undefined,
	step?: number
): PopsPanelSliderDetails {
	let result = BaseUISlider.apply(
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
