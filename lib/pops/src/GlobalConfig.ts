type EnterReturnType<T> = null | T | (() => T);

type GlobalConfigOption = {
	style?: EnterReturnType<string>;
	zIndex?: EnterReturnType<number> | EnterReturnType<string>;
};

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
		let style =
			GlobalConfig.config.style == null
				? ""
				: typeof GlobalConfig.config.style === "function"
				? GlobalConfig.config.style()
				: GlobalConfig.config.style;

		if (typeof style === "string") {
			result.style = style;
		}
		let zIndex =
			GlobalConfig.config.zIndex == null
				? ""
				: typeof GlobalConfig.config.zIndex === "function"
				? GlobalConfig.config.zIndex()
				: GlobalConfig.config.zIndex;
		if (typeof zIndex === "string") {
			let newIndex = (zIndex = parseInt(zIndex));
			if (!isNaN(newIndex)) {
				result.zIndex = newIndex;
			}
		} else {
			if (!isNaN(zIndex)) {
				result.zIndex = zIndex;
			}
		}
		return result;
	},
};
