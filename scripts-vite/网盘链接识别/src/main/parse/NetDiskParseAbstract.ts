export class ParseFileCore {
	/** 所在规则的下标 */
	ruleIndex: number = 0;
	/** 分享码 */
	shareCode: string = "";
	/** 提取码 */
	accessCode: AccessCodeNonNullType = "";
	/**
	 * 入口
	 * @param netDiskInfo 网盘信息
	 * @example
	 *
	 * super.init(netDiskInfo);
	 * const that = this;
	 * let { ruleIndex, shareCode, accessCode } = netDiskInfo;
	 */
	init(netDiskInfo: ParseFileInitConfig): IPromise<void> {
		this.ruleIndex = netDiskInfo.ruleIndex;
		this.shareCode = netDiskInfo.shareCode;
		this.accessCode = netDiskInfo.accessCode;
	}
}
