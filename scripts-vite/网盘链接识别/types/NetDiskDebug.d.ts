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
