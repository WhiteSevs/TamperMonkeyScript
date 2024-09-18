export abstract class NetDiskParseObject {
	/** 所在规则的下标 */
	netDiskIndex: number = 0;
	/** 分享码 */
	shareCode: string = "";
	/** 提取码 */
	accessCode: string = "";
	/**
	 * 入口
	 * @param netDiskIndex 网盘名称索引下标
	 * @param shareCode
	 * @param accessCode
	 */
	abstract init(
		netDiskIndex: number,
		shareCode: string,
		accessCode: string
	): IPromise<void>;
}
