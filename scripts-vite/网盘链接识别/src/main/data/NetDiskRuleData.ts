import { GM_getValue } from "ViteGM";
import {
	NetDiskRuleSettingConfigurationInterface_linkClickMode,
	NetDiskRuleSettingConfigurationInterface_linkClickMode_extend,
} from "../link-click-mode/NetDiskLinkClickMode";
import { NetDiskRuleDataKEY } from "./NetDiskRuleDataKey";

/**
 * 规则的数据
 */
export const NetDiskRuleData = {
	/** innerText的提取码间隔 */
	matchRange_text: {
		/**
		 * 提取码间隔前的字符长度
		 * @param key 规则键名
		 * @param defaultValue 默认值: 20
		 */
		before(key: string, defaultValue: number = 20) {
			return parseInt(
				GM_getValue<number>(
					NetDiskRuleDataKEY.matchRange_text.before(key),
					defaultValue
				).toString()
			);
		},
		/**
		 * 提取码间隔后的字符长度
		 * @param key 规则键名
		 * @param defaultValue 默认值: 10
		 */
		after(key: string, defaultValue: number = 10) {
			return parseInt(
				GM_getValue<number>(
					NetDiskRuleDataKEY.matchRange_text.after(key),
					defaultValue
				).toString()
			);
		},
	},
	/** innerHTML的提取码间隔 */
	matchRange_html: {
		/**
		 * 提取码间隔前的字符长度
		 * @param key 规则键名
		 * @param defaultValue 默认值: 100
		 */
		before(key: string, defaultValue: number = 100) {
			return parseInt(
				GM_getValue<number>(
					NetDiskRuleDataKEY.matchRange_html.before(key),
					defaultValue
				).toString()
			);
		},
		/**
		 * 提取码间隔后的字符长度
		 * @param key 规则键名
		 * @param defaultValue 默认值: 15
		 */
		after(key: string, defaultValue: number = 15) {
			return parseInt(
				GM_getValue<number>(
					NetDiskRuleDataKEY.matchRange_html.after(key),
					defaultValue
				).toString()
			);
		},
	},
	/** 功能 */
	function: {
		/**
		 * 是否启用该规则
		 * @param key 规则键名
		 * @param defaultValue
		 */
		enable(key: string, defaultValue: boolean = true) {
			return Boolean(
				GM_getValue(NetDiskRuleDataKEY.function.enable(key), defaultValue)
			);
		},
		/**
		 * 点击动作
		 * @param key 规则键名
		 * @param defaultValue
		 */
		linkClickMode(
			key: string,
			defaultValue: NetDiskRuleSettingConfigurationInterface_linkClickMode = "copy"
		) {
			return GM_getValue(
				NetDiskRuleDataKEY.function.linkClickMode(key),
				defaultValue
			) as
				| NetDiskRuleSettingConfigurationInterface_linkClickMode
				| NetDiskRuleSettingConfigurationInterface_linkClickMode_extend;
		},
		/**
		 * 是否进行校验链接有效性
		 * @param key 规则键名
		 * @param defaultValue
		 */
		checkLinkValidity(key: string, defaultValue: boolean = false) {
			return Boolean(
				GM_getValue(
					NetDiskRuleDataKEY.function.checkLinkValidity(key),
					defaultValue
				)
			);
		},
	},
	linkClickMode_openBlank: {
		/**
		 * 跳转时复制访问码
		 * @param key 规则键名
		 * @param defaultValue
		 */
		openBlankWithCopyAccessCode(key: string, defaultValue: boolean = false) {
			return Boolean(
				GM_getValue(
					NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankWithCopyAccessCode(
						key
					),
					defaultValue
				)
			);
		},
	},
	schemeUri: {
		/**
		 * 是否启用
		 * @param key 规则键名
		 * @param defaultValue
		 */
		enable(key: string, defaultValue: boolean = false) {
			return Boolean(
				GM_getValue(NetDiskRuleDataKEY.schemeUri.enable(key), defaultValue)
			);
		},
		/**
		 * 转发直链（解析出的链接）
		 * @param key 规则键名
		 * @param defaultValue
		 */
		isForwardLinearChain(key: string, defaultValue: boolean = false) {
			return Boolean(
				GM_getValue(
					NetDiskRuleDataKEY.schemeUri.isForwardLinearChain(key),
					defaultValue
				)
			);
		},
		/**
		 * 转发新标签页链接
		 * @param key 规则键名
		 * @param defaultValue
		 */
		isForwardBlankLink(key: string, defaultValue: boolean = false) {
			return Boolean(
				GM_getValue(
					NetDiskRuleDataKEY.schemeUri.isForwardBlankLink(key),
					defaultValue
				)
			);
		},
		/**
		 * Uri链接
		 * @param key 规则键名
		 * @param defaultValue
		 */
		uri(key: string, defaultValue: string = "") {
			return GM_getValue(NetDiskRuleDataKEY.schemeUri.uri(key), defaultValue);
		},
	},
};
