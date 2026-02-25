import { utils } from "@/env";
import { NetDiskRegularExtractor } from "./NetDiskRegularExtractor";

export const NetDiskHandler = {
  /**
   * 处理链接，将匹配到的链接转为参数和密码存入字典中
   * @param ruleKeyName 规则键名
   * @param ruleIndex 规则的索引下标
   * @param matchText 正在进行匹配的文本
   */
  handleLink(handlerConfig: {
    /** 规则键名 */
    ruleKeyName: string;
    /** 规则的索引下标 */
    ruleIndex: number;
    /** 正在进行匹配的文本 */
    matchText: string;
  }) {
    const shareCode = NetDiskRegularExtractor.extractShareCode(handlerConfig);
    if (utils.isNull(shareCode)) {
      return;
    }
    const accessCode = NetDiskRegularExtractor.extractShareCode(handlerConfig);
    return {
      shareCode: shareCode,
      accessCode: accessCode,
    };
  },
};
