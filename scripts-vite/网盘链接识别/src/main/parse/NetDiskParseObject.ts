export abstract class ParseFileAbstract {
	/** 所在规则的下标 */
	ruleIndex: number = 0;
	/** 分享码 */
	shareCode: string = "";
	/** 提取码 */
	accessCode: AccessCodeNonNullType = "";
	/**
	 * 入口
	 * @param ruleIndex 规则下标
	 * @param shareCode 分享码
	 * @param accessCode 访问码
	 */
	abstract init(
		ruleIndex: number,
		shareCode: string,
		accessCode: AccessCodeNonNullType
	): IPromise<void>;
}
