import { GM_getValue, GM_setValue } from "ViteGM";

/**
 * 生成配置
 * @param key
 * @param defaultValue
 */
export const GenerateData = function <T = any>(key: string, defaultValue: T) {
	return {
		/** 键名 */
		KEY: key,
		/** 默认值 */
		default: defaultValue,
		/** 获取值 */
		get value() {
			return GM_getValue(this.KEY, this.default);
		},
		/** 设置值 */
		set value(newValue) {
			GM_setValue(this.KEY, newValue);
		},
	};
};
