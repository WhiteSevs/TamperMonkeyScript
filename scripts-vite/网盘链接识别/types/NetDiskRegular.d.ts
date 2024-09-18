/**
 * 网盘匹配规则配置
 */
declare interface NetDiskRegularOption {
	/** 是否启用 */
	enable: boolean;
	/**
	 * 正则字符串：使用innerText进行匹配
	 */
	link_innerText: string;
	/**
	 * 正则字符串：使用innerHTML进行匹配
	 */
	link_innerHTML: string;
	/**
	 * 正则：获取shareCode
	 */
	shareCode: RegExp;
	/**
	 * (可选)正则：用于判断提取到的shareCode是否是错误的shareCode
	 */
	shareCodeNotMatch?: RegExp;
	/**
	 * 正则：需要替换空的，比如pan.baidu.com/s/替换为空
	 */
	shareCodeNeedRemoveStr: RegExp;
	/** （可选）值为规则名，如果匹配到的shareCode在目标规则匹配到的shareCode中，那么取消匹配 */
	shareCodeExcludeRegular?: string[];
	/**
	 * 正则：用来判断link_innerText或者link_innerHTML匹配到的字符串中是否存在密码
	 */
	checkAccessCode: RegExp;
	/**
	 * 正则：用来提取link_innerText或者link_innerHTML匹配到的字符串中的密码
	 */
	accessCode: RegExp;
	/**
	 * （可选）正则：用于判断提取到的accessCode是否是错误的accessCode
	 */
	acceesCodeNotMatch?: RegExp;
	/**
	 * （可选）用于对matchText进行提取需要的关键内容
	 *
	 * 会自动进行正则转换，正则模式i
	 *
	 * 提取到的内容会被转换成以下格式，可在uiLinkShow、blank、copyUrl中使用
	 * + 类似：{#$1#}、{#$2#}...
	 */
	paramMatch?: RegExp;
	/**
	 * 用于显示在弹窗中的字符串
	 */
	uiLinkShow: string;
	/**
	 * 用于点击跳转的链接
	 */
	blank: string;
	/**
	 * 用于复制到剪贴板的链接
	 */
	copyUrl: string;
	/**
	 * （可选）用于验证链接有效性
	 */
	checkLinkValidity?: boolean;
}
/**
 * 网盘匹配规则
 */
declare interface NetDiskRegular {
	[key: string]: NetDiskRegularOption[];
}
