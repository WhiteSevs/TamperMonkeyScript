declare interface NetDiskHistoryDataOption {
	/** 匹配的网站URL */
	url: string;
	/** 匹配的网站顶部URL（防止是在iframe内匹配到的） */
	topURL: string;
	/** 规则名 */
	netDiskName: string;
	/** 规则下标 */
	netDiskIndex: number;
	/** 分享码 */
	shareCode: string;
	/** 访问码 */
	accessCode: string;
	/** 添加的时间 */
	addTime: number;
	/** 更新的时间 */
	updateTime: number;
	/** 匹配的网址的标题 */
	title: string;
	/** 匹配到的文本(2024.3.15版本新增) */
	matchText: string;
}
