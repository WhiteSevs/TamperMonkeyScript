/** worker的传递的数据 */
declare interface NetDiskWorkerOptions {
	/** 字符映射 */
	characterMapping: {
		searchValue: RegExp | string;
		replaceValue: string;
	}[];
	/**
	 * 待匹配的字符串数组
	 */
	textList: string[];
	/**
	 * 规则匹配的类型
	 */
	matchTextRange: ("innerHTML" | "innerText")[];
	/**
	 * 匹配的规则
	 */
	regular: NetDiskMatchRule;
	/**
	 * 开始时间
	 */
	startTime: number;
	/**
	 * 来源
	 */
	from:
		| "FirstLoad-DOMChange"
		| "FirstLoad-Text-DOMChange"
		| "FirstLoad-HTML-DOMChange"
		| "DOMChange"
		| "PasteText"
		| "Debug";
}
declare interface NetDiskWorkerMatchOption {
	/** 匹配的网盘规则的名 */
	netDiskName?: string;
	/** 匹配的网盘规则的下标 */
	netDiskIndex?: number;
	/** 匹配到的数据(字符串数组) */
	data: RegExpMatchArray;
}
/** worker处理完毕的的传递的数据 */
declare interface NetDiskWorkerCallBackOptions {
	/**
	 * 传递的配置
	 */
	options: NetDiskWorkerOptions;
	/** 消息 */
	msg: string;
	/** 匹配到的数据 */
	data: NetDiskWorkerMatchOption[];
	/** 匹配开始时间 */
	startTime: number;
	/**
	 * + isMatchingEnd: true 当前循环的规则匹配结束的时间
	 * + isMatchingEnd: false 所有规则匹配结束的时间
	 */
	endTime: number;
}
