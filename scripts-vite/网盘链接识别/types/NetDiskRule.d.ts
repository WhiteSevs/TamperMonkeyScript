/** 匹配范围 */
declare type NetDiskRuleSettingConfigurationInterface_MatchRange = {
	/** 间隔前 */
	before?: number;
	/** 间隔后 */
	after?: number;
};
/** 功能 */
declare type NetDiskRuleSettingConfigurationInterface_Function = {
	/** 是否启用 */
	enable?: boolean;
	/**
	 * 链接点击动作
	 *
	 * 默认启用复制和新标签页打开
	 *
	 * 默认选择复制到剪贴板
	 * @default {
	 * "copy": {
	 *         "default": true,
	 *         "enable": true,
	 *         "text": "复制到剪贴板",
	 *     }
	 * },
	 * "openBlank": {
	 *         "enable": true,
	 *         "text": "新标签页打开",
	 *     }
	 * }
	 */
	linkClickMode?: {
		[key in NetDiskRuleSettingConfigurationInterface_linkClickMode]?: {
			/**
			 * 是否是默认值
			 * @default false
			 */
			default?: boolean;
			/**
			 * 是否启用
			 *
			 * 部分默认开启
			 * + `copy`
			 * + `copy-closePopup`
			 * + `openBlank`
			 * + `openBlank-closePopup`
			 *
			 */
			enable?: boolean;
			/**
			 * 显示的文字
			 * @default "..."
			 */
			text?: string;
		};
	};
	/** 验证链接有效性 */
	checkLinkValidity?: boolean;
	/** 验证链接有效性-鼠标悬停提示 */
	checkLinkValidityHoverTip?: boolean;
};
/** 点击动作-新标签页打开 */
declare type NetDiskRuleSettingConfigurationInterface_linkClickMode_openBlank =
	{
		/** 跳转时复制访问码 */
		openBlankWithCopyAccessCode?: boolean;
		/** 自动填写访问码 */
		openBlankAutoFilleAccessCode?: boolean;
	};
/** Scheme转发 */
declare type NetDiskRuleSettingConfigurationInterface_SchemeUri = {
	/** 是否启用 */
	enable?: boolean;
	/** 转发直链（解析出的链接） */
	isForwardLinearChain?: boolean;
	/** 转发新标签页链接 */
	isForwardBlankLink?: boolean;
	/** Uri链接 */
	uri?: string;
};
/** 自定义配置列表 */
declare type NetDiskRuleSettingConfigurationInterface_OwnFormList = (
	| PopsPanelFormsDetails
	| PopsPanelFormsTotalDetails
)[];
/**
 * 自定义规则设置
 */
declare type NetDiskRuleSetting = {
	/** 规则名 */
	name: string;
	/** 规则的键名 */
	key: string;
	/** 配置界面，其中如果填入这个键就有这个配置项，值就是它的默认值 */
	configurationInterface?: {
		/** 提取码文本匹配Text */
		matchRange_text?: NetDiskRuleSettingConfigurationInterface_MatchRange;
		/** 提取码文本匹配HTML */
		matchRange_html?: NetDiskRuleSettingConfigurationInterface_MatchRange;
		/** 功能 */
		function?: NetDiskRuleSettingConfigurationInterface_Function;
		/** 点击动作-新标签页打开 */
		linkClickMode_openBlank?: NetDiskRuleSettingConfigurationInterface_linkClickMode_openBlank;
		/** Scheme Uri转发 */
		schemeUri?: NetDiskRuleSettingConfigurationInterface_SchemeUri;
		/** 自定义其它的规则 */
		ownFormList?: NetDiskRuleSettingConfigurationInterface_OwnFormList;
	};
};

declare type NetDiskRuleAfterRenderUrlBoxOption = {
	/**
	 * 链接元素容器
	 */
	$viewBox: HTMLElement;
	/**
	 * 链接元素的父DIV
	 */
	$urlDiv: HTMLElement;
	/**
	 * 超链接元素的父元素
	 */
	$url: HTMLElement;
	/**
	 * 超链接元素
	 */
	$link: HTMLElement;
	/**
	 * 规则的键
	 */
	ruleKeyName: string;
	/**
	 * 匹配到的规则的所在的下标
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
};

declare type NetDiskRuleOption = {
	/**
	 * 订阅的uuid
	 *
	 * 这里不需要填，规则导出时会自动生成
	 */
	subscribeUUID?: string | null;
	/** 规则 */
	rule: NetDiskMatchRuleConfig[];
	/** 是否是用户规则 */
	isUserRule?: boolean;
	/** 设置 */
	setting: NetDiskRuleSetting;
	/**
	 * 渲染后的链接元素触发的回调
	 */
	afterRenderUrlBox?: (
		option: NetDiskRuleAfterRenderUrlBoxOption
	) => IPromise<void>;
};
