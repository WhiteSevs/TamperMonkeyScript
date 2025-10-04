declare interface CharacterMappingDynamicOption {
  /**
   * 是否启用正则
   * + true 使用正则进行匹配判断
   * + false 使用字符串进行匹配判断
   */
  isRegExp: boolean;
  /** 正则标识符 */
  regExpFlag: string;
  /** 搜索的字符串 */
  searchValue: string;
  /** 替换成的字符串 */
  replaceValue: string;
}

/**
 * 字典映射配置
 */
declare interface CharacterMappingOption {
  /** 唯一uuid */
  uuid: string;
  /**
   * 来自订阅的uuid
   *
   * 如果不是来自订阅，则为null
   */
  subscribeUUID: string | null;
  /** 启用状态 */
  enable: boolean;
  /** 规则名称 */
  name: string;
  /** 数据 */
  data: {
    /** 匹配网址 */
    url: string;
  } & CharacterMappingDynamicOption;
  /** 动态添加的数据 */
  dynamicData?: CharacterMappingDynamicOption[];
}
