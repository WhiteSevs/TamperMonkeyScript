import type { PopsPanelSliderDetails } from "@whitesev/pops/dist/types/src/components/panel/sliderType";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "../panel-config";
import { Panel } from "../panel";
import { PanelComponents } from "../panel-components";

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
	let result: PopsPanelSliderDetails = {
		text: text,
		type: "slider",
		description: description,
		attributes: {},
		props: {},
		getValue() {
			return (this.props as any)[PROPS_STORAGE_API].get(key, defaultValue);
		},
		getToolTipContent(value) {
			if (typeof getToolTipContent === "function") {
				return getToolTipContent(value);
			} else {
				return `${value}`;
			}
		},
		callback(event, value) {
			if (typeof changeCallBack === "function") {
				if (changeCallBack(event, value)) {
					return;
				}
			}
			(this.props as any)[PROPS_STORAGE_API].set(key, value);
		},
		min: min,
		max: max,
		step: step,
	};

	Reflect.set(result.attributes!, ATTRIBUTE_KEY, key);
	Reflect.set(result.attributes!, ATTRIBUTE_DEFAULT_VALUE, defaultValue);

	PanelComponents.setComponentsStorageApiProperty(
		"slider",
		result as Required<PopsPanelSliderDetails>,
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
