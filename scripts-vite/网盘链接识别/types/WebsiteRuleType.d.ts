/**
 * 网站规则配置
 */
declare interface WebsiteRuleOption {
	/**
	 * 规则的uuid
	 */
	uuid: string;
	/**
	 * 来自订阅的uuid
	 *
	 * 如果不是来自订阅，则为null
	 */
	subscribeUUID: string | null;
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
