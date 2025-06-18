declare interface NetDiskCheckLinkValidityOption {
	/**
	 * .netdisk-url-box元素项
	 */
	$urlBox: HTMLElement;
	/**
	 * 规则名
	 */
	ruleKeyName: string;
	/**
	 * 规则下标
	 */
	ruleIndex: number;
	/**
	 * 分享码
	 */
	shareCode: string;
	/**
	 * 访问码
	 */
	accessCode: AccessCodeType;
}
declare interface NetDiskCheckLinkValidityStatusInstance {
	/**
	 * 状态码
	 */
	code: number;
	/**
	 * 状态码的解释
	 */
	msg: string;
	/**
	 * 设置元素图标
	 * @param $el netdisk-status元素
	 */
	setIcon($el: HTMLElement): void;
	/**
	 * 设置元素状态
	 * @param $el netdisk-status元素
	 * @param checkInfo
	 * @param msg 悬浮提示
	 */
	setView(
		$el: HTMLElement,
		checkInfo: NetDiskCheckLinkValidityOption,
		msg?: string
	): void;
}
/**
 * 有效性校验的入口传入参数配置
 */
declare type NetDiskCheckLinkValidityInitConfig = {
	/** 规则的索引下标 */
	ruleIndex: number;
	/** 分享码 */
	shareCode: string;
	/** 访问码 */
	accessCode: AccessCodeType;
};
declare interface NetDiskCheckLinkValidityEntranceInstance {
	/**
	 * 入口函数
	 * @param netDiskInfo 网盘信息
	 */
	init(netDiskInfo: NetDiskCheckLinkValidityInitConfig): IPromise<
		NetDiskCheckLinkValidityStatusInstance & {
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
	[key: string]: NetDiskCheckLinkValidityEntranceInstance;
}
