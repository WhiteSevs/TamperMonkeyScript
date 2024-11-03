declare interface NetDiskCheckLinkValidityOption {
	/**
	 * .netdisk-url-box元素项
	 */
	netDiskViewBox: HTMLElement;
	/**
	 * 规则名
	 */
	netDiskName: string;
	/**
	 * 规则下标
	 */
	netDiskIndex: number;
	/**
	 * 分享码
	 */
	shareCode: string;
	/**
	 * 访问码
	 */
	accessCode: string;
}
declare interface NetDiskCheckLinkValidityStatusObj {
	/**
	 * 状态码
	 */
	code: number;
	/**
	 * 状态码的解释
	 */
	msg: string;
	/**
	 * 设置元素状态
	 * @param ele netdisk-status元素
	 * @param checkInfo
	 * @param msg 悬浮提示
	 */
	setView(
		ele: HTMLDivElement,
		checkInfo: NetDiskCheckLinkValidityOption,
		msg?: string
	): void;
}
declare interface NetDiskCheckLinkValidityEntranceObj {
	/**
	 * 入口函数
	 * @param netDiskIndex 网盘名称索引下标
	 * @param shareCode 分享码
	 * @param accessCode 访问码
	 * @returns
	 */
	init: (
		netDiskIndex: number,
		shareCode: string,
		accessCode: string
	) => IPromise<
		NetDiskCheckLinkValidityStatusObj & {
			/**
			 * 网络请求的数据
			 *
			 * 会设置到元素的data-httpx-response属性上
			 */
			data: any;
			/**
			 * 自定义悬浮提示
			 */
			tipMsg?: string;
		}
	>;
}

declare interface NetDiskCheckLinkValidityEntrance {
	[key: string]: NetDiskCheckLinkValidityEntranceObj;
}
