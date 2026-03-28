declare interface NetDiskDebugLogData {
  /**
   * 状态
   * + true 执行成功
   * + false 执行失败
   */
  status: boolean;
  /** 日志消息 */
  msg: string | string[];
}

/**
 * 当前调试的配置
 */
declare type NetDiskDebugHandlerConfig = {
  /**
   * 规则配置
   */
  config: NetDiskMatchRuleConfig;
  /**
   * 匹配的文本
   */
  matchText?: string;
  /**
   * 日志输出回调
   */
  logCallBack?: (logData: NetDiskDebugLogData) => void;
};
