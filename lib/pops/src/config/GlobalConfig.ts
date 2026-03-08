import type { PopsGeneralConfig, PopsDragConfig } from "../types/components";

type NullOrFunctionReturnType<T> = null | undefined | IFunction<T>;

type GlobalConfigOption = {
  style?: NullOrFunctionReturnType<string>;
  zIndex?: NullOrFunctionReturnType<number | string>;
} & Partial<PopsGeneralConfig> &
  Partial<PopsDragConfig>;

type ResultGlobalConfigOption<T> = T extends null | undefined ? never : T extends (...args: any) => infer R ? R : T;

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
    const result: {
      [P in keyof GlobalConfigOption]:
        | ResultGlobalConfigOption<Omit<GlobalConfigOption[P], "zIndex">>
        | {
            zIndex: GlobalConfigOption["zIndex"];
          };
    } = {};
    Object.keys(GlobalConfig.config).forEach((keyName) => {
      const configValue = Reflect.get(GlobalConfig.config, keyName);
      if (keyName === "style") {
        // 设置style属性
        const style = configValue == null ? "" : typeof configValue === "function" ? configValue() : configValue;

        if (typeof style === "string") {
          result.style = style;
        }
      } else if (keyName === "zIndex") {
        // 设置zIndex属性
        result.zIndex = () => {
          let zIndex = configValue == null ? "" : typeof configValue === "function" ? configValue() : configValue;
          if (typeof zIndex === "string") {
            const newIndex = (zIndex = Number(zIndex));
            if (!Number.isNaN(newIndex)) {
              return newIndex;
            }
          } else {
            if (!Number.isNaN(zIndex)) {
              return zIndex as number;
            }
          }
          return 0;
        };
      } else if (keyName === "mask") {
        const mask = GlobalConfig.config.mask == null ? {} : GlobalConfig.config.mask;
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
