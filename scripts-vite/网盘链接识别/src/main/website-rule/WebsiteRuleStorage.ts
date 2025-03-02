import { StorageUtils } from "@/utils/StorageUtils";
import { WebsiteRule } from "./WebsiteRule";
import { GM_getValue } from "ViteGM";

/** 存储的网站规则 */
export const WebsiteRuleStorage = new StorageUtils("websiteRule");

/** 单个规则的配置处理 */
export class WebsiteRuleDataStorage {
	/** 规则的唯一id */
	uuid: string;
	/**
	 * 初始化
	 * @param uuid 规则的唯一id
	 */
	constructor(uuid: string) {
		this.uuid = uuid;
	}
	/**
	 * 获取值
	 * @param key
	 * @param defaultValue
	 */
	get<T>(key: string, defaultValue: T): T {
		// 先从规则数据中获取
		// 如果没有的话，再从全局数据中获取
		let rule = WebsiteRule.getRule(this.uuid);
		if (rule == null) {
			throw new TypeError("获取值失败，规则不存在，uuid为：" + this.uuid);
		}
		// 获取全局数据
		let globalStorage = GM_getValue(key, defaultValue);
		// 返回规则的数据
		let ruleStorage = rule.data;
		return Reflect.get(ruleStorage, key) ?? globalStorage;
	}
	/**
	 * 设置值
	 * @param key
	 * @param value
	 */
	set(key: string, value: any) {
		// 保存到规则数据中
		let rule = WebsiteRule.getRule(this.uuid);
		if (rule == null) {
			throw new TypeError("设置值失败，规则不存在，uuid为：" + this.uuid);
		}
		let ruleStorage = rule.data;
		Reflect.set(ruleStorage, key, value);
		WebsiteRule.updateRule(rule);
	}
}
/**
 * 自定义劫持值
 * @param key 键
 * @param value 全局获取的值，该值已经进行过默认值判空处理，需要的话直接返回它就行
 * @param defaultValue 默认值
 */
export const WebsiteProxyGlobalValue = <T>(
	key: string,
	value: T,
	defaultValue: T
): T => {
	// 注意：这里不能用this，因为会被修改指向
	if (WebsiteRule.$data.isShowEditView) {
		// 当前是添加|修改规则界面，直接获取全局默认的值
		return value;
	}
	let matchedUrlRuleList = WebsiteRule.getUrlMatchedRule();

	let findValue = matchedUrlRuleList.find((item) => {
		if (!item.enable) {
			// 未启用
			return false;
		}
		let data = WebsiteRule.getRuleData(item);
		// 判断存储的数据中是否存在该键
		return Reflect.has(data, key);
	});
	if (findValue) {
		// 从规则数据中取值
		return Reflect.get(WebsiteRule.getRuleData(findValue), key);
	} else {
		// 从全局数据中取值
		return value;
	}
};
