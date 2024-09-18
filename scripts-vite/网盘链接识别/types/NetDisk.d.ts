/** 存储的访问码的值 */
declare interface NetDiskDictData {
	/** 访问码 */
	accessCode: string;
	/** 匹配规则的下标 */
	netDiskIndex?: number;
	/**
	 * 匹配的文本
	 */
	matchText: string;
	/** 是否锁定访问码不允许修改，默认false */
	isForceAccessCode?: boolean;
}

declare interface NetiDiskHandleObject {
	/** 分享码 */
	shareCode: string;
	/** 访问码 */
	accessCode: string;
	/** 规则名 */
	netDiskName: string;
	/** 下标 */
	netDiskIndex: number;
	/**
	 * 匹配的文本
	 */
	matchText: string;
}

declare interface NetDiskAutoFillAccessCodeOption {
	/** 链接 */
	url: string;
	/** 规则名 */
	netDiskName: string;
	/** 规则下标 */
	netDiskIndex: number;
	/** 分享码 */
	shareCode: string;
	/** 访问码 */
	accessCode: string;
}

declare interface NetDiskSettingMenuDetails
	extends NetDiskUserCustomRuleSetting {
	/**
	 * 名字
	 */
	type: string;
	/**
	 * 规则名
	 */
	key: string;
	/**
	 * 是否是用户规则
	 */
	isUserRule?: boolean;
	/**
	 * 规则
	 */
	rule: NetDiskUserCustomRuleRegexp | NetDiskUserCustomRuleRegexp[];
	/**
	 * 多文件解析
	 */
	parseMoreFile?: boolean;
	/**
	 * 单文件解析
	 */
	parseOneFile?: boolean;
	/**
	 * 自定义的解析文件的描述
	 */
	parseFileDescription?: string;
	/**
	 * 自定义form
	 */
	ownFormList?: any[];
}

interface NetDiskDebugLogData {
	/**
	 * 状态
	 * + true 执行成功
	 * + false 执行失败
	 */
	status: boolean;
	/** 日志消息 */
	msg: string | string[];
}
