/**
 * 规则的键名配置
 */
export const NetDiskRuleDataKEY = {
	/** 匹配范围 text */
	matchRange_text: {
		before: (key: string) => `${key}-text-match-range-before`,
		after: (key: string) => `${key}-text-match-range-after`,
	},
	/** 匹配范围 html */
	matchRange_html: {
		before: (key: string) => `${key}-html-match-range-before`,
		after: (key: string) => `${key}-html-match-range-after`,
	},
	/** 功能 */
	function: {
		enable: (key: string) => `${key}-enable`,
		checkLinkValidity: (key: string) => `${key}-check-link-valid`,
		checkLinkValidityHoverTip: (key: string) =>
			`${key}-check-link-valid-hover-tip`,
		linkClickMode: (key: string) => `${key}-click-mode`,
	},
	/** 点击动作 新标签页打开 */
	linkClickMode_openBlank: {
		openBlankWithCopyAccessCode: (key: string) =>
			`${key}-open-blank-with-copy-accesscode`,
	},
	/** Scheme转发 */
	schemeUri: {
		enable: (key: string) => `${key}-scheme-uri-enable`,
		isForwardLinearChain: (key: string) =>
			`${key}-scheme-uri-forward-linear-chain`,
		isForwardBlankLink: (key: string) => `${key}-scheme-uri-forward-blank-link`,
		uri: (key: string) => `${key}-scheme-uri-uri`,
	},
};

/**
 * 覆盖的规则的键名配置
 */
export const WebsiteRuleDataKey = {
	/** 功能 */
	features: {
		/** 是否启用自定义访问码 */
		customAccessCodeEnable: (key: string) => `${key}-custom-accesscode-enable`,
		/** 自定义访问码 */
		customAccessCode: (key: string) => `${key}-custom-accesscode`,
	},
};
