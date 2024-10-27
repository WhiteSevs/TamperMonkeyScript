/**
 * 网站规则配置
 */
export interface WebsiteRuleOption {
	/**
	 * 规则的uuid
	 */
	uuid: string;
	/**
	 * 是否启用该规则
	 */
	enable: boolean;
	/**
	 * 规则名，为空的话就使用url代替显示
	 */
	name: string | null | undefined;
	/**
	 * 匹配的网站url，可正则
	 */
	url: string;
	/**
	 * 该规则的留存数据
	 */
	data: any;
}
