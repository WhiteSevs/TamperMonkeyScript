/** 存储的访问码的值 */
declare interface NetDiskDictData {
	/** 匹配规则的下标 */
	ruleIndex?: number;
	/** 访问码 */
	accessCode: AccessCodeType;
	/** 匹配的文本 */
	matchText: string;
	/**
	 * 是否锁定访问码不允许修改，默认false
	 * @default false
	 */
	isForceAccessCode?: boolean;
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

/**
 * 访问码类型
 */
declare type AccessCodeType = string | null | undefined;

/**
 * 访问码类型
 */
declare type AccessCodeNonNullType = NonNullable<AccessCodeType>;
