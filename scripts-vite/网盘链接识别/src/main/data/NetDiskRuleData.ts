import { NetDiskRuleDataKEY } from "./NetDiskRuleDataKey";
import { GeneratePanelData } from "./NetDiskDataUtils";

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
			const panelData = GeneratePanelData(
				NetDiskRuleDataKEY.matchRange_text.before(key),
				defaultValue
			);
			return parseInt(panelData.value.toString());
		},
		/**
		 * 提取码间隔后的字符长度
		 * @param key 规则键名
		 * @param defaultValue 默认值: 10
		 */
		after(key: string, defaultValue: number = 10) {
			const panelData = GeneratePanelData(
				NetDiskRuleDataKEY.matchRange_text.after(key),
				defaultValue
			);
			return parseInt(panelData.value.toString());
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
			const panelData = GeneratePanelData(
				NetDiskRuleDataKEY.matchRange_html.before(key),
				defaultValue
			);
			return parseInt(panelData.value.toString());
		},
		/**
		 * 提取码间隔后的字符长度
		 * @param key 规则键名
		 * @param defaultValue 默认值: 15
		 */
		after(key: string, defaultValue: number = 15) {
			const panelData = GeneratePanelData(
				NetDiskRuleDataKEY.matchRange_html.after(key),
				defaultValue
			);
			return parseInt(panelData.value.toString());
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
			const panelData = GeneratePanelData(
				NetDiskRuleDataKEY.function.enable(key),
				defaultValue
			);
			return Boolean(panelData.value);
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
			const panelData = GeneratePanelData(
				NetDiskRuleDataKEY.function.linkClickMode(key),
				defaultValue
			);
			return panelData.value;
		},
		/**
		 * 是否进行校验链接有效性
		 * @param key 规则键名
		 * @param defaultValue
		 */
		checkLinkValidity(key: string, defaultValue: boolean = false) {
			const panelData = GeneratePanelData(
				NetDiskRuleDataKEY.function.checkLinkValidity(key),
				defaultValue
			);
			return Boolean(panelData.value);
		},
		/**
		 * 是否添加验证结果图标悬停提示
		 * @param key
		 * @param defaultValue
		 */
		checkLinlValidityHoverTip(key: string, defaultValue: boolean = true) {
			const panelData = GeneratePanelData(
				NetDiskRuleDataKEY.function.checkLinkValidityHoverTip(key),
				defaultValue
			);
			return Boolean(panelData.value);
		},
	},
	linkClickMode_openBlank: {
		/**
		 * 跳转时复制访问码
		 * @param key 规则键名
		 * @param defaultValue
		 */
		openBlankWithCopyAccessCode(key: string, defaultValue: boolean = false) {
			const panelData = GeneratePanelData(
				NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankWithCopyAccessCode(
					key
				),
				defaultValue
			);
			return Boolean(panelData.value);
		},
	},
	schemeUri: {
		/**
		 * 是否启用
		 * @param key 规则键名
		 * @param defaultValue
		 */
		enable(key: string, defaultValue: boolean = false) {
			const panelData = GeneratePanelData(
				NetDiskRuleDataKEY.schemeUri.enable(key),
				defaultValue
			);
			return Boolean(panelData.value);
		},
		/**
		 * 转发直链（解析出的链接）
		 * @param key 规则键名
		 * @param defaultValue
		 */
		isForwardLinearChain(key: string, defaultValue: boolean = false) {
			const panelData = GeneratePanelData(
				NetDiskRuleDataKEY.schemeUri.isForwardLinearChain(key),
				defaultValue
			);
			return Boolean(panelData.value);
		},
		/**
		 * 转发新标签页链接
		 * @param key 规则键名
		 * @param defaultValue
		 */
		isForwardBlankLink(key: string, defaultValue: boolean = false) {
			const panelData = GeneratePanelData(
				NetDiskRuleDataKEY.schemeUri.isForwardBlankLink(key),
				defaultValue
			);
			return Boolean(panelData.value);
		},
		/**
		 * Uri链接
		 * @param key 规则键名
		 * @param defaultValue
		 */
		uri(key: string, defaultValue: string = "") {
			const panelData = GeneratePanelData(
				NetDiskRuleDataKEY.schemeUri.uri(key),
				defaultValue
			);
			return panelData.value;
		},
	},
};
