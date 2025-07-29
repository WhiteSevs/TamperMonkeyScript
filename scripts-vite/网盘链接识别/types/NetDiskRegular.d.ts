/**
 * 网盘匹配规则配置
 */
declare interface NetDiskMatchRuleConfig {
	/**
	 * 当设置中匹配类型为文本，使用该规则
	 *
	 * 以下是可使用的替换的参数
	 *
	 * + `{#matchRange-text-before#}`替换为setting配置的`innerTextAccessCodeBeforeMaxRange`
	 * + `{#matchRange-text-after#}`替换为setting配置的`innerTextAccessCodeAfterMaxRange`
	 */
	link_innerText: string;
	/**
	 * 当设置中匹配类型为超文本，使用该规则
	 *
	 * 以下是可使用的替换的参数
	 *
	 * + `{#matchRange-html-before#}`替换为setting配置的`innerHTMLAccessCodeBeforeMaxRange`
	 * + `{#matchRange-html-after#}`替换为setting配置的`innerHTMLAccessCodeAfterMaxRange`
	 */
	link_innerHTML: string;
	/**
	 * 正则：获取shareCode
	 */
	shareCode: RegExp;
	/**
	 * (可选)正则：用于判断提取到的shareCode是否是错误的shareCode
	 */
	shareCodeNotMatch?: RegExp | RegExp[];
	/**
	 * 正则：需要替换空的，比如pan.baidu.com/s/替换为空
	 */
	shareCodeNeedRemoveStr: RegExp | RegExp[];
	/**
	 * （可选）值为规则名，如果匹配到的shareCode在目标规则匹配到的shareCode中，那么取消匹配
	 */
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
	acceesCodeNotMatch?: RegExp | RegExp[];
	/**
	 * （可选）正则：需要替换空的，比如`提取码|密码|\?password=|访问码`替换为`""`
	 */
	accessCodeNeedRemoveStr?: RegExp | RegExp[];
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
	 *
	 * + 如果设置了paramMatch进行匹配，可以使用：{#$1#}、{#$2#}...进行引用匹配结果
	 */
	uiLinkShow: string;
	/**
	 * 用于点击跳转的链接
	 *
	 * + 如果设置了paramMatch进行匹配，可以使用：{#$1#}、{#$2#}...进行引用匹配结果
	 */
	blank: string;
	/**
	 * 用于复制到剪贴板的链接
	 *
	 * + 如果设置了paramMatch进行匹配，可以使用：{#$1#}、{#$2#}...进行引用匹配结果
	 */
	copyUrl: string;
}
/**
 * 网盘匹配规则
 */
declare interface NetDiskMatchedRuleOption {
	[key: string]: NetDiskMatchRuleConfig[];
}
