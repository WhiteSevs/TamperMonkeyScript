/**
 * 分享码配置项
 */
declare type NetDiskHandlerShareCodeOption = {
  /** 规则键名 */
  ruleKeyName: string;
  /** 规则的索引下标 */
  ruleIndex: number;
  /** 正在进行匹配的文本 */
  matchText: string;
  /**
   * （可选）当前调试的配置
   */
  debugConfig?: NetDiskDebugHandlerConfig;
};

/**
 * 访问码配置项
 */
declare type NetDiskHandlerAccessCodeOption = {
  /** 规则键名 */
  ruleKeyName: string;
  /** 规则的索引下标 */
  ruleIndex: number;
  /** 获取到的访问码 */
  shareCode: string;
  /** 正在进行匹配的文本 */
  matchText: string;
  /**
   * （可选）当前调试的配置
   */
  debugConfig?: NetDiskDebugHandlerConfig;
};

/**
 * 显示链接配置项
 */
declare type NetDiskHandlerShowLinkOption = {
  /** 规则键名 */
  ruleKeyName: string;
  /** 规则的索引下标 */
  ruleIndex: number;
  /** 分享码 */
  shareCode: string;
  /** 访问码 */
  accessCode: AccessCodeType;
  /** （可选）匹配到的文本 */
  matchText?: string;
  /** （可选）如果规则不存在，会进行Toast提示，默认true */
  showToast?: boolean;
  /**
   * （可选）当前调试的配置
   */
  debugConfig?: NetDiskDebugHandlerConfig;
};
