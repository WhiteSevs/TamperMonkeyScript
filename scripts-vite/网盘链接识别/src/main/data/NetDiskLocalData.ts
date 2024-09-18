import { GM_getValue } from "ViteGM";
import {
	NetDiskRuleSettingConfigurationInterface_linkClickMode,
	NetDiskRuleSettingConfigurationInterface_linkClickMode_extend,
} from "../link-click-mode/NetDiskLinkClickMode";

export const NetDiskLocalDataKey = {
	/** 模板 */
	template: {
		matchRange_text: {
			before: (key: string) => `${key}-text-match-range-before`,
			after: (key: string) => `${key}-text-match-range-after`,
		},
		matchRange_html: {
			before: (key: string) => `${key}-html-match-range-before`,
			after: (key: string) => `${key}-html-match-range-after`,
		},
		function: {
			enable: (key: string) => `${key}-enable`,
			checkLinkValidity: (key: string) => `${key}-check-link-valid`,
			linkClickMode: (key: string) => `${key}-click-mode`,
			// openBlank: (key: string) => `${key}-open-blank`,
			// parseFile: (key: string) => `${key}-parse-file`,
		},
		linkClickMode_openBlank: {
			openBlankWithCopyAccessCode: (key: string) =>
				`${key}-open-blank-with-copy-accesscode`,
		},
		schemeUri: {
			enable: (key: string) => `${key}-scheme-uri-enable`,
			isForwardLinearChain: (key: string) =>
				`${key}-scheme-uri-forward-linear-chain`,
			isForwardBlankLink: (key: string) =>
				`${key}-scheme-uri-forward-blank-link`,
			uri: (key: string) => `${key}-scheme-uri-uri`,
		},
	},
};
/**
 * 网盘本地数据
 */
export const NetDiskLocalData = {
	/** innerText的提取码间隔 */
	matchRange_text: {
		/**
		 * 提取码间隔前的字符长度
		 * @param {string} key
		 * @param {number} defaultValue 默认值: 20
		 */
		before(key: string, defaultValue: number = 20) {
			return parseInt(
				GM_getValue<number>(
					NetDiskLocalDataKey.template.matchRange_text.before(key),
					defaultValue
				).toString()
			);
		},
		/**
		 * 提取码间隔后的字符长度
		 * @param {string} key
		 * @param {number} defaultValue 默认值: 10
		 */
		after(key: string, defaultValue: number = 10) {
			return parseInt(
				GM_getValue<number>(
					NetDiskLocalDataKey.template.matchRange_text.after(key),
					defaultValue
				).toString()
			);
		},
	},
	/** innerHTML的提取码间隔 */
	matchRange_html: {
		/**
		 * 提取码间隔前的字符长度
		 * @param {string} key
		 * @param {number} defaultValue 默认值: 100
		 */
		before(key: string, defaultValue: number = 100) {
			return parseInt(
				GM_getValue<number>(
					NetDiskLocalDataKey.template.matchRange_html.before(key),
					defaultValue
				).toString()
			);
		},
		/**
		 * 提取码间隔后的字符长度
		 * @param {string} key
		 * @param {number} defaultValue 默认值: 15
		 */
		after(key: string, defaultValue: number = 15) {
			return parseInt(
				GM_getValue<number>(
					NetDiskLocalDataKey.template.matchRange_html.after(key),
					defaultValue
				).toString()
			);
		},
	},
	/** 功能 */
	function: {
		/**
		 * 是否启用该规则
		 * @param {string} key
		 * @param {boolean} defaultValue
		 */
		enable(key: string, defaultValue: boolean = true) {
			return Boolean(
				GM_getValue(
					NetDiskLocalDataKey.template.function.enable(key),
					defaultValue
				)
			);
		},
		/**
		 * 点击动作
		 * @param key
		 * @param [defaultValue="copy"]
		 */
		linkClickMode(
			key: string,
			defaultValue: NetDiskRuleSettingConfigurationInterface_linkClickMode = "copy"
		) {
			return GM_getValue(
				NetDiskLocalDataKey.template.function.linkClickMode(key),
				defaultValue
			) as
				| NetDiskRuleSettingConfigurationInterface_linkClickMode
				| NetDiskRuleSettingConfigurationInterface_linkClickMode_extend;
		},
		/**
		 * 是否进行校验链接有效性
		 * @param {string} key
		 * @param {boolean} [defaultValue=false]
		 */
		checkLinkValidity(key: string, defaultValue: boolean = false) {
			return Boolean(
				GM_getValue(
					NetDiskLocalDataKey.template.function.checkLinkValidity(key),
					defaultValue
				)
			);
		},
	},
	linkClickMode_openBlank: {
		/**
		 * 跳转时复制访问码
		 * @param key
		 * @param [defaultValue=false]
		 */
		openBlankWithCopyAccessCode(key: string, defaultValue: boolean = false) {
			return Boolean(
				GM_getValue(
					NetDiskLocalDataKey.template.linkClickMode_openBlank.openBlankWithCopyAccessCode(
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
		 * @param {string} key
		 * @param {boolean} [defaultValue=false]
		 */
		enable(key: string, defaultValue: boolean = false) {
			return Boolean(
				GM_getValue(
					NetDiskLocalDataKey.template.schemeUri.enable(key),
					defaultValue
				)
			);
		},
		/**
		 * 转发直链（解析出的链接）
		 * @param {string} key
		 * @param {boolean} [defaultValue=false]
		 */
		isForwardLinearChain(key: string, defaultValue: boolean = false) {
			return Boolean(
				GM_getValue(
					NetDiskLocalDataKey.template.schemeUri.isForwardLinearChain(key),
					defaultValue
				)
			);
		},
		/**
		 * 转发新标签页链接
		 * @param {string} key
		 * @param {boolean} [defaultValue=false]
		 */
		isForwardBlankLink(key: string, defaultValue: boolean = false) {
			return Boolean(
				GM_getValue(
					NetDiskLocalDataKey.template.schemeUri.isForwardBlankLink(key),
					defaultValue
				)
			);
		},
		/**
		 * Uri链接
		 * @param {string} key
		 * @param {string} [defaultValue=""]
		 */
		uri(key: string, defaultValue: string = "") {
			return GM_getValue(
				NetDiskLocalDataKey.template.schemeUri.uri(key),
				defaultValue
			);
		},
	},
};
