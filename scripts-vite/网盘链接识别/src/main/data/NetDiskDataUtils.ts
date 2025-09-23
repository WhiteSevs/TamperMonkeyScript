import { GM_getValue, GM_setValue } from "ViteGM";
import { WebsiteProxyGlobalValue } from "../website-rule/WebsiteRuleStorage";

/**
 * 生成可自定义值的配置
 * @param key 键
 * @param defaultValue 默认值，它的类型也是返回值类型
 * @param proxyValueCallBack 自定义处理value的回调，如果设置了它，请确保返回值类型与defaultValue相同
 */
export const GenerateProxyStorage = function <T = any>(
  key: string,
  defaultValue: T,
  proxyValueCallBack?: (key: string, value: T, defaultValue: T) => T
) {
  return {
    /** 键名 */
    get KEY() {
      return key;
    },
    /** 默认值 */
    get default() {
      return defaultValue;
    },
    /** 获取值 */
    get value() {
      let currentValue = GM_getValue(key, this.default);
      if (typeof proxyValueCallBack === "function") {
        return proxyValueCallBack(key, currentValue, this.default);
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
 * 生成在panel内的存储配置
 * @param key 键
 * @param defaultValue 默认值，它的类型也是返回值类型
 */
export const GeneratePanelStorage = function <T = any>(key: string, defaultValue: T) {
  return GenerateProxyStorage(key, defaultValue, WebsiteProxyGlobalValue);
};
