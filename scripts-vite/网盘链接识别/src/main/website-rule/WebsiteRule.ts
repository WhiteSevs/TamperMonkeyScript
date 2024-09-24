import { WebsiteRuleStorage } from "./WebsiteRuleStorage";
import type { WebsiteRuleOption } from "./WebsiteRuleType";

/** 用户自定义的网页规则 */
export const WebsiteRule = {
	$data: {
		STORAGE_KEY: "rule",
	},
	init() {
		this.initRule();
	},
	/**
	 * 初始化规则
	 */
	initRule() {
		let allRule = this.getAllRule();
	},
	/**
	 * 添加单个规则
	 */
	addRule(rule: WebsiteRuleOption) {
		let allRule = this.getAllRule();
		allRule.push(rule);
		WebsiteRuleStorage.set(this.$data.STORAGE_KEY, allRule);
	},
	/**
	 * 根据uuid获取单个规则的数据
	 * @param uuid
	 */
	getRule(uuid: string) {
		return this.getAllRule().find((rule) => rule.uuid === uuid);
	},
	/**
	 * 根据uuid获取单个规则的存储数据
	 * @param uuid
	 */
	getRuleData(uuid: string | WebsiteRuleOption) {
		if (typeof uuid === "string") {
			return this.getRule(uuid)?.data;
		} else {
			return uuid.data;
		}
	},
	/**
	 * 根据uuid获取单个规则的存储数据的值
	 * @param uuid
	 * @param key 键
	 * @param defaultValue 默认值
	 */
	getRuleDataValue<T>(uuid: string, key: string, defaultValue: T) {
		let ruleData = this.getRuleData(uuid);
		return Reflect.get(ruleData, key) ?? defaultValue;
	},
	/**
	 * 更新单个规则
	 * @param rule
	 */
	updateRule(rule: WebsiteRuleOption) {
		let allRule = this.getAllRule();
		for (let index = 0; index < allRule.length; index++) {
			const localRule = allRule[index];
			if (localRule.uuid === rule.uuid) {
				// uuid相同，确定为同一个规则
				allRule[index] = rule;
				break;
			}
		}
		WebsiteRuleStorage.set(this.$data.STORAGE_KEY, allRule);
	},
	/**
	 * 更新单个规则的值
	 */
	updateRuleValue(uuid: string, key: string, value: any) {
		let allRule = this.getAllRule();
		for (let index = 0; index < allRule.length; index++) {
			const localRule = allRule[index];
			if (localRule.uuid === uuid) {
				// uuid相同，确定为同一个规则
				Reflect.set(localRule, key, value);
				break;
			}
		}
		WebsiteRuleStorage.set(this.$data.STORAGE_KEY, allRule);
	},
	/**
	 * 删除单个规则
	 * @param uuid 整个规则或者规则的uuid
	 */
	deleteRule(uuid: string) {
		let allRule = this.getAllRule();
		let flag = false;
		let needDeleteRuleUUID = uuid;
		for (let index = 0; index < allRule.length; index++) {
			const localRule = allRule[index];
			if (localRule.uuid === needDeleteRuleUUID) {
				allRule.splice(index, 1);
				flag = true;
				break;
			}
		}
		WebsiteRuleStorage.set(this.$data.STORAGE_KEY, allRule);
		return flag;
	},
	/**
	 * 清空所有规则
	 */
	deleteAllRule() {
		WebsiteRuleStorage.delete(this.$data.STORAGE_KEY);
	},
	/**
	 * 获取所有规则
	 */
	getAllRule(): WebsiteRuleOption[] {
		let allRule = WebsiteRuleStorage.get(
			this.$data.STORAGE_KEY,
			[]
		) as WebsiteRuleOption[];
		return allRule;
	},
	/**
	 * 根据url获取匹配的网站
	 * @param url 需要匹配的url
	 */
	getUrlMatchedRule(url: string = window.location.href) {
		let allRule = this.getAllRule();
		return allRule.filter((rule) => {
			let matchRegExp = new RegExp(rule.url, "ig");
			if (url.match(matchRegExp)) {
				return true;
			} else {
				return false;
			}
		});
	},
};
