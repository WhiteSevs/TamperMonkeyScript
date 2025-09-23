import { GM_getValue, GM_setValue } from "ViteGM";

/**
 * 生成配置
 * @param key 键
 * @param defaultValue 默认值，它的类型也是返回值类型
 */
export const GenerateData = function <T = any>(key: string, defaultValue: T) {
  return {
    /** 键名 */
    KEY: key,
    /** 默认值 */
    default: defaultValue,
    /** 获取值 */
    get value() {
      let currentValue = GM_getValue(key, defaultValue);
      return currentValue;
    },
    /** 设置值 */
    set value(newValue) {
      GM_setValue(key, newValue);
    },
  };
};
