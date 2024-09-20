import { PopsPanelSliderDetails } from "@whitesev/pops/dist/types/src/components/panel/sliderType";
import { UserWebRuleStorage } from "../UserWebRuleStorage";
import { ATTRIBUTE_DEFAULT_VALUE, ATTRIBUTE_KEY } from "@/setting/config";

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
export const UserWebRuleUISlider = function (
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
		attributes: {} as { [key: string]: any },
		getValue() {
			return UserWebRuleStorage.get(key, defaultValue);
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
			UserWebRuleStorage.set(key, value);
		},
		min: min,
		max: max,
		step: step,
	};

	if (result.attributes) {
		result.attributes[ATTRIBUTE_KEY] = key;
		result.attributes[ATTRIBUTE_DEFAULT_VALUE] = defaultValue;
	}
	return result;
};
