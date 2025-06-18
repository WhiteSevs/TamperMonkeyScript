/**
 * 当前调试的配置
 */
export type NetDiskDebugHandlerConfig = {
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
