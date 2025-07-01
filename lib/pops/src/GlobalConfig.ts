import type { PopsCommonConfig, PopsDragConfig } from "./types/components";

type EnterReturnType<T> = null | T | (() => T);

type GlobalConfigOption = {
	style?: EnterReturnType<string>;
	zIndex?: EnterReturnType<number> | EnterReturnType<string>;
} & Partial<PopsCommonConfig> &
	Partial<PopsDragConfig>;

type ResultGlobalConfigOption<T> = T extends null | undefined
	? never
	: T extends (...args: any) => infer R
	? R
	: T;

export const GlobalConfig = {
	config: {} as GlobalConfigOption,
	/**
	 * 为所有弹窗设置全局属性
	 */
	setGlobalConfig(config: GlobalConfigOption) {
		Reflect.ownKeys(config).forEach((keyName) => {
			Reflect.set(GlobalConfig.config, keyName, Reflect.get(config, keyName));
		});
	},
	/**
	 * 获取全局配置
	 */
	getGlobalConfig() {
		let result: {
			[P in keyof GlobalConfigOption]: ResultGlobalConfigOption<
				GlobalConfigOption[P]
			>;
		} = {};
		Object.keys(GlobalConfig.config).forEach((keyName) => {
			let configValue = Reflect.get(GlobalConfig.config, keyName);
			if (keyName === "style") {
				// 设置style属性
				let style =
					configValue == null
						? ""
						: typeof configValue === "function"
						? configValue()
						: configValue;

				if (typeof style === "string") {
					result.style = style;
				}
			} else if (keyName === "zIndex") {
				// 设置zIndex属性
				let zIndex =
					configValue == null
						? ""
						: typeof configValue === "function"
						? configValue()
						: configValue;
				if (typeof zIndex === "string") {
					let newIndex = (zIndex = Number(zIndex));
					if (!isNaN(newIndex)) {
						result.zIndex = newIndex;
					}
				} else {
					if (!isNaN(zIndex)) {
						result.zIndex = zIndex;
					}
				}
			} else if (keyName === "mask") {
				let mask =
					GlobalConfig.config.mask == null ? {} : GlobalConfig.config.mask;
				if (typeof mask === "object" && mask != null) {
					result.mask = mask;
				}
			} else {
				Reflect.set(result, keyName, configValue);
			}
		});
		return result;
	},
};
