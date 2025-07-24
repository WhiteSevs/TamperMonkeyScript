import type { PopsPanelSliderDetails } from "@whitesev/pops/dist/types/src/components/panel/types/components-slider";
import {
	ATTRIBUTE_DEFAULT_VALUE,
	ATTRIBUTE_KEY,
	PROPS_STORAGE_API,
} from "../panel-config";
import { Panel } from "../panel";
import {
	PanelComponents,
	type PanelComponentsStorageApiValue,
} from "../panel-components";

/**
 * 获取checkbox按钮配置
 * @param text 文字
 * @param key 键
 * @param defaultValue 默认值
 * @param min 最小值
 * @param max 最大值
 * @param changeCallback （可选）拖拽回调，如果返回true，则阻止默认行为（存储值）
 * @param getToolTipContent （可选）获取tooltip内容
 * @param description （可选）左边的文字下面的描述
 * @param step （可选）间隔
 * @param valueChangeCallBack （可选）拖拽且存储值后的回调
 */
export const UISlider = function (
	text: string,
	key: string,
	defaultValue: number,
	min: number,
	max: number,
	changeCallback?:
		| ((event: InputEvent, value: number) => boolean | void)
		| undefined,
	getToolTipContent?: (value: number) => string,
	description?: string | undefined,
	step?: number,
	valueChangeCallBack?:
		| ((event: InputEvent, value: number) => boolean | void)
		| undefined
): PopsPanelSliderDetails {
	let result: PopsPanelSliderDetails = {
		text: text,
		type: "slider",
		description: description,
		attributes: {},
		props: {},
		getValue() {
			let storageApiValue = this.props![
				PROPS_STORAGE_API as keyof typeof this.props
			] as PanelComponentsStorageApiValue;
			return storageApiValue.get(key, defaultValue);
		},
		getToolTipContent(value) {
			if (typeof getToolTipContent === "function") {
				return getToolTipContent(value);
			} else {
				return `${value}`;
			}
		},
		callback(event, value) {
			if (typeof changeCallback === "function") {
				let result = changeCallback(event, value);
				if (result) {
					return;
				}
			}
			let storageApiValue = this.props![
				PROPS_STORAGE_API as keyof typeof this.props
			] as PanelComponentsStorageApiValue;
			storageApiValue.set(key, value);

			if (typeof valueChangeCallBack === "function") {
				valueChangeCallBack(event, value);
			}
		},
		min: min,
		max: max,
		step: step,
	};

	Reflect.set(result.attributes!, ATTRIBUTE_KEY, key);
	Reflect.set(result.attributes!, ATTRIBUTE_DEFAULT_VALUE, defaultValue);

	PanelComponents.initComponentsStorageApi(
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
