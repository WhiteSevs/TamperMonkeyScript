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

declare interface CharacterMappingDynamicOption {
  /** 搜索字符 */
  searchValue: string;
  /** 是否启用正则 */
  isRegExp: boolean;
  /** 正则标识符 */
  regExpFlag: string;
  /** 替换字符 */
  replaceValue: string;
}
