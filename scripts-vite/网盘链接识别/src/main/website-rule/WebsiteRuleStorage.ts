import { WebsiteRule } from "./WebsiteRule";

/**
 * 自定义劫持值
 * @param key 键
 * @param value 全局获取的值，该值已经进行过默认值判空处理，需要的话直接返回它就行
 * @param defaultValue 默认值
 */
export const WebsiteProxyGlobalValue = <T>(key: string, value: T, defaultValue: T): T => {
  // 注意：这里不能用this，因为会被修改指向
  if (WebsiteRule.$data.isShowEditView) {
    // 当前是添加|修改规则界面，直接获取全局默认的值
    return value ?? defaultValue;
  }
  let matchedUrlRuleList = WebsiteRule.getUrlMatchedRule();

  let findValue = matchedUrlRuleList.find((item) => {
    let data = WebsiteRule.getRuleData(item);
    // 判断存储的数据中是否存在该键
    return Reflect.has(data, key);
  });
  if (findValue) {
    // 从规则数据中取值
    return Reflect.get(WebsiteRule.getRuleData(findValue), key);
  } else {
    // 从全局数据中取值
    return value ?? defaultValue;
  }
};
