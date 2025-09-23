import { NetDiskRuleData } from "@/main/data/NetDiskRuleData";

/**
 * 替换参数配置
 * @param key 规则键
 */
export const NetDiskUserRuleReplaceParam_matchRange_text = (key: string) => {
  return {
    "matchRange-text-before": NetDiskRuleData.matchRange_text.before(key).toString(),
    "matchRange-text-after": NetDiskRuleData.matchRange_text.after(key).toString(),
  };
};

/**
 * 替换参数配置
 * @param key 规则键
 */
export const NetDiskUserRuleReplaceParam_matchRange_html = (key: string) => {
  return {
    "matchRange-html-before": NetDiskRuleData.matchRange_html.before(key).toString(),
    "matchRange-html-after": NetDiskRuleData.matchRange_html.after(key).toString(),
  };
};
