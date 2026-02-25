export const NetDiskHandlerUtil = {
  /**
   * 生成链接的存储的对象
   * @param accessCode 访问码
   * @param [ruleIndex=0] 规则的索引下标，默认为0
   * @param isForceAccessCode 是否锁定访问码不允许修改，默认false
   * @param matchText 匹配到的文本
   */
  createLinkStorageInst(
    accessCode: AccessCodeType,
    ruleIndex: number = 0,
    isForceAccessCode: boolean = false,
    matchText: string
  ): NetDiskDictData {
    return {
      accessCode,
      ruleIndex,
      isForceAccessCode,
      matchText,
      matchTime: performance.now(),
    };
  },
  /**
   * 替换文字
   * @param matchText 需要替换的文字
   * @param pattern 需要替换的文字的正则表达式
   * @param newText 替换为的文字
   */
  replaceText(matchText: string, pattern: RegExp | RegExp[] | string | string[], newText: string) {
    if (Array.isArray(pattern)) {
      for (const patternItem of pattern) {
        matchText = this.replaceText(matchText, patternItem, newText);
      }
    } else {
      if (typeof pattern === "string") {
        matchText = matchText.replaceAll(pattern, newText);
      } else {
        matchText = matchText.replace(pattern, newText);
      }
    }
    return matchText;
  },
};
