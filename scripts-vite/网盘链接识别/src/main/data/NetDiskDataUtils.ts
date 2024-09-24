import { GM_getValue, GM_setValue } from "ViteGM";
import { WebsiteProxyGlobalValue } from "../website-rule/WebsiteRuleStorage";

/**
 * 生成可自定义值的配置
 * @param key 键
 * @param defaultValue 默认值，它的类型也是返回值类型
 * @param proxyValueCallBack 自定义处理value的回调，如果设置了它，请确保返回值类型与defaultValue相同
 */
export const GenerateProxyData = function <T = any>(
	key: string,
	defaultValue: T,
	proxyValueCallBack?: (key: string, value: T, defaultValue: T) => T
) {
	return {
		/** 键名 */
		KEY: key,
		/** 默认值 */
		default: defaultValue,
		/** 获取值 */
		get value() {
			let currentValue = GM_getValue(key, defaultValue);
			if (typeof proxyValueCallBack === "function") {
				return proxyValueCallBack(key, currentValue, defaultValue);
			}
			return currentValue;
		},
		/** 设置值 */
		set value(newValue) {
			GM_setValue(key, newValue);
		},
	};
};

/**
 * 生成在panel内的配置
 * @param key 键
 * @param defaultValue 默认值，它的类型也是返回值类型
 */
export const GeneratePanelData = function <T = any>(
	key: string,
	defaultValue: T
) {
	return GenerateProxyData(key, defaultValue, WebsiteProxyGlobalValue);
};
