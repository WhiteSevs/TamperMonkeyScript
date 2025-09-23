declare interface NetDiskAutoFillAccessCodeOption {
  /** 链接 */
  url: string;
  /** 规则名 */
  ruleKeyName: string;
  /** 规则下标 */
  ruleIndex: number;
  /** 分享码 */
  shareCode: string;
  /** 访问码 */
  accessCode: NonNullable<AccessCodeType>;
  /** 存储时间 */
  time: number;
}
