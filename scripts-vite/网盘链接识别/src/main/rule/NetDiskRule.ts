import { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/formsType";
import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { NetDiskRule_baidu } from "./NetDiskRule_baidu";
import { NetDiskRule_lanzou } from "./NetDiskRule_lanzou";
import { NetDiskRule_lanzouyx } from "./NetDiskRule_lanzouyx";
import { NetDiskRule_tianyiyun } from "./NetDiskRule_tianyiyun";
import { NetDiskRule_hecaiyun } from "./NetDiskRule_hecaiyun";
import { NetDiskRule_aliyun } from "./NetDiskRule_aliyun";
import { NetDiskRule_wenshushu } from "./NetDiskRule_wenshushu";
import { NetDiskRule_nainiu } from "./NetDiskRule_nainiu";
import { NetDiskRule_123pan } from "./NetDiskRule_123pan";
import { NetDiskRule_weiyun } from "./NetDiskRule_weiyun";
import { NetDiskRule_xunlei } from "./NetDiskRule_xunlei";
import { NetDiskRule_115pan } from "./NetDiskRule_115pan";
import { NetDiskRule_chengtong } from "./NetDiskRule_chengtong";
import { NetDiskRule_kuake } from "./NetDiskRule_kuake";
import { NetDiskRule_magnet } from "./NetDiskRule_magnet";
import { NetDiskRule_jianguoyun } from "./NetDiskRule_jianguoyun";
import { NetDiskRule_onedrive } from "./NetDiskRule_onedrive";
import { NetDiskRule_uc } from "./NetDiskRule_uc";
import { NetDisk } from "../NetDisk";
import { NetDiskUserRule } from "./user-rule/NetDiskUserRule";
import { UISlider } from "@/setting/common-components/ui-slider";
import { UISwitch } from "@/setting/common-components/ui-switch";
import {
	NetDiskLocalData,
	NetDiskLocalDataKey,
} from "../data/NetDiskLocalData";
import { setTransitionHooks } from "vue";
import { UIInput } from "@/setting/common-components/ui-input";
import { NetDiskUI } from "../ui/NetDiskUI";
import { pops } from "@/env";
import { UISelect } from "@/setting/common-components/ui-select";
import {
	NetDiskRuleSettingConfigurationInterface_linkClickMode,
	NetDiskRuleSettingConfigurationInterface_linkClickMode_extend,
	NetDiskRuleSettingConfigurationInterface_linkClickMode_all,
} from "../link-click-mode/NetDiskLinkClickMode";

export type NetDiskRuleSettingConfigurationInterface_MatchRange = {
	/** 间隔前 */
	before?: number;
	/** 间隔后 */
	after?: number;
};
export type NetDiskRuleSettingConfigurationInterface_Function = {
	/** 是否启用 */
	enable?: boolean;
	/** 链接点击动作 @default "copy" */
	linkClickMode?:
		| NetDiskRuleSettingConfigurationInterface_linkClickMode
		| NetDiskRuleSettingConfigurationInterface_linkClickMode_extend;
	/** 链接点击动作-扩展 这个配置项是扩展linkClickMode的，不会存储 */
	linkClickMode_extend?: NetDiskRuleSettingConfigurationInterface_linkClickMode_extend[];
	/** 验证链接有效性 */
	checkLinkValidity?: boolean;
};
export type NetDiskRuleSettingConfigurationInterface_linkClickMode_openBlank = {
	/** 跳转时复制访问码 */
	openBlankWithCopyAccessCode?: boolean;
};
export type NetDiskRuleSettingConfigurationInterface_SchemeUri = {
	/** 是否启用 */
	enable?: boolean;
	/** 转发直链（解析出的链接） */
	isForwardLinearChain?: boolean;
	/** 转发新标签页链接 */
	isForwardBlankLink?: boolean;
	/** Uri链接 */
	uri?: string;
};
export type NetDiskRuleSettingConfigurationInterface_OwnFormList = (
	| PopsPanelFormsDetails
	| PopsPanelFormsTotalDetails
)[];
export type NetDiskRuleSetting = {
	/** 规则名 */
	name: string;
	/** 规则的键名 */
	key: string;
	/** 配置界面，其中如果填入这个键就有这个配置项，值就是它的默认值 */
	configurationInterface?: {
		/** 提取码文本匹配Text */
		matchRange_text?: NetDiskRuleSettingConfigurationInterface_MatchRange;
		/** 提取码文本匹配HTML */
		matchRange_html?: NetDiskRuleSettingConfigurationInterface_MatchRange;
		/** 功能 */
		function?: NetDiskRuleSettingConfigurationInterface_Function;
		linkClickMode_openBlank?: NetDiskRuleSettingConfigurationInterface_linkClickMode_openBlank;
		/** Scheme Uri转发 */
		schemeUri?: NetDiskRuleSettingConfigurationInterface_SchemeUri;
		/** 自定义其它的规则 */
		ownFormList?: NetDiskRuleSettingConfigurationInterface_OwnFormList;
	};
};

export type NetDiskRuleConfig = {
	/** 规则 */
	rule: NetDiskRegularOption[];
	/** 设置 */
	setting: NetDiskRuleSetting;
	/** 是否是用户规则 */
	isUserRule?: boolean;
};

export const NetDiskRule = {
	$data: {
		/** 规则的配置界面信息 */
		ruleContent: <PopsPanelContentConfig[]>[],
	},
	init() {
		this.initRule();
	},
	/**
	 * 初始化规则的内容
	 * 1. 动态添加rule到NetDisk.regular
	 * 2. 生成pops.panel适用的配置
	 */
	initRule() {
		// 默认的规则
		let defaultRuleList: NetDiskRuleConfig[] = [
			NetDiskRule_baidu,
			NetDiskRule_lanzou,
			NetDiskRule_lanzouyx,
			NetDiskRule_tianyiyun,
			NetDiskRule_hecaiyun,
			NetDiskRule_aliyun,
			NetDiskRule_wenshushu,
			NetDiskRule_nainiu,
			NetDiskRule_123pan,
			NetDiskRule_weiyun,
			NetDiskRule_xunlei,
			NetDiskRule_115pan,
			NetDiskRule_chengtong,
			NetDiskRule_kuake,
			NetDiskRule_magnet,
			NetDiskRule_jianguoyun,
			NetDiskRule_onedrive,
			NetDiskRule_uc,
		];
		// 用户规则
		let userRuleList: NetDiskRuleConfig[] =
			NetDiskUserRule.getNetDiskRuleConfig();
		[...defaultRuleList, ...userRuleList].forEach((netDiskRuleConfig) => {
			if (typeof netDiskRuleConfig.setting.key !== "string") {
				throw new TypeError("规则未设置key");
			}
			if (netDiskRuleConfig.rule == null) {
				throw new TypeError("规则未设置rule");
			}
			/** 键名，一般是英文 */
			const ruleKey = netDiskRuleConfig.setting.key;
			/** 显示的名字，一般是中文 */
			const ruleName = netDiskRuleConfig.setting.name;
			/** 规则 */
			const netDiskRule = netDiskRuleConfig.rule;

			// 添加规则
			if (Reflect.has(NetDisk.regular, ruleKey)) {
				/* 如果规则已存在(已内置)，自定义规则先放在前面匹配 */
				/* 即用户自定义的规则优先级最高 */
				let commonRule = NetDisk.regular[ruleKey];
				if (netDiskRuleConfig.isUserRule) {
					// 是用户规则，放在最前面
					commonRule = [...netDiskRule, ...commonRule];
				} else {
					// 默认规则，放在后面
					commonRule = [...commonRule, ...netDiskRule];
				}
				let findValue = NetDisk.rule.find(
					(item) => item.setting.key === ruleKey
				);
				findValue!.rule = commonRule;
			} else {
				// 不存在，直接新增新的
				Reflect.set(NetDisk.regular, ruleKey, netDiskRuleConfig.rule);
				NetDisk.rule.push(netDiskRuleConfig);
			}

			let viewConfig = this.parseRuleToViewConfig(netDiskRuleConfig);

			// 左侧显示的文字
			let asideTitle = netDiskRuleConfig.setting.name;
			if (NetDiskUI.src.hasIcon(ruleKey)) {
				// 添加图标
				if (pops.isPhone()) {
					asideTitle = /*html*/ `
					<div style="
						width: 20px;
						height: 20px;
						background: url(${NetDiskUI.src.icon[ruleKey]}) no-repeat;
						background-size: 100% 100%;
						">`;
				} else {
					asideTitle = /*html*/ `
					<div style="
						width: 20px;
						height: 20px;
						background: url(${NetDiskUI.src.icon[ruleKey]}) no-repeat;
						background-size: 100% 100%;
						"></div>
					<div style="margin-left: 4px;">${ruleName}</div>`;
				}
			}

			let headerTitleText = ruleName;
			if (netDiskRuleConfig.isUserRule) {
				// 用户自定义的规则
				headerTitleText += /*html*/ `<div class="netdisk-custom-rule-edit" data-key="${ruleKey}" data-type="${netDiskRuleConfig.setting.name}">${pops.config.iconSVG.edit}</div>`;
				headerTitleText += /*html*/ `<div class="netdisk-custom-rule-delete" data-key="${ruleKey}" data-type="${netDiskRuleConfig.setting.name}">${pops.config.iconSVG.delete}</div>`;
			}
			this.$data.ruleContent.push({
				id: "netdisk-panel-config-" + ruleKey,
				title: asideTitle,
				headerTitle: headerTitleText,
				attributes: {
					"data-key": ruleKey,
				},
				forms: viewConfig,
			});
		});
	},
	/**
	 * 转换规则为视图配置
	 */
	parseRuleToViewConfig(netDiskRule: {
		rule: NetDiskRegularOption[];
		setting: NetDiskRuleSetting;
		isUserRule?: boolean;
	}): (PopsPanelFormsDetails | PopsPanelFormsTotalDetails)[] {
		// 处理配置项信息
		let formConfigList: (PopsPanelFormsDetails | PopsPanelFormsTotalDetails)[] =
			[];
		const settingConfig = netDiskRule.setting.configurationInterface;
		const ruleKey = netDiskRule.setting.key;
		if (settingConfig == null) {
			// 没有配置信息
			return [];
		}
		if (settingConfig.matchRange_text) {
			let matchRange_text_form: PopsPanelFormsTotalDetails[] = [];
			if ("before" in settingConfig.matchRange_text) {
				const default_value =
					typeof settingConfig.matchRange_text.before === "number"
						? settingConfig.matchRange_text.before
						: 0;
				matchRange_text_form.push(
					UISlider(
						"间隔前",
						NetDiskLocalDataKey.template.matchRange_text.before(ruleKey),
						default_value,
						0,
						100,
						void 0,
						void 0,
						"提取码间隔前的字符长度"
					)
				);
			}
			if ("after" in settingConfig.matchRange_text) {
				const default_value =
					typeof settingConfig.matchRange_text.after === "number"
						? settingConfig.matchRange_text.after
						: 0;
				matchRange_text_form.push(
					UISlider(
						"间隔后",
						NetDiskLocalDataKey.template.matchRange_text.after(ruleKey),
						default_value,
						0,
						100,
						void 0,
						void 0,
						"提取码间隔后的字符长度"
					)
				);
			}
			if (matchRange_text_form.length) {
				formConfigList.push({
					text: "提取码文本匹配Text",
					type: "forms",
					forms: matchRange_text_form,
				});
			}
		}
		if (settingConfig.matchRange_html) {
			let matchRange_html_form: PopsPanelFormsTotalDetails[] = [];
			if ("before" in settingConfig.matchRange_html) {
				const default_value =
					typeof settingConfig.matchRange_html.before === "number"
						? settingConfig.matchRange_html.before
						: 0;

				matchRange_html_form.push(
					UISlider(
						"间隔前",
						NetDiskLocalDataKey.template.matchRange_html.before(ruleKey),
						default_value,
						0,
						100,
						void 0,
						void 0,
						"提取码间隔前的字符长度"
					)
				);
			}
			if ("after" in settingConfig.matchRange_html) {
				const default_value =
					typeof settingConfig.matchRange_html.after === "number"
						? settingConfig.matchRange_html.after
						: 0;

				matchRange_html_form.push(
					UISlider(
						"间隔后",
						NetDiskLocalDataKey.template.matchRange_html.after(ruleKey),
						default_value,
						0,
						100,
						void 0,
						void 0,
						"提取码间隔后的字符长度"
					)
				);
			}
			if (matchRange_html_form.length) {
				formConfigList.push({
					text: "提取码文本匹配HTML",
					type: "forms",
					forms: matchRange_html_form,
				});
			}
		}
		if (settingConfig.function) {
			// 功能
			let function_form: PopsPanelFormsTotalDetails[] = [];
			if ("enable" in settingConfig.function) {
				let default_value =
					typeof settingConfig.function.enable === "boolean"
						? settingConfig.function.enable
						: false;
				function_form.push(
					UISwitch(
						"启用",
						NetDiskLocalDataKey.template.function.enable(ruleKey),
						default_value,
						void 0,
						"开启可允许匹配该规则"
					)
				);
			}
			if ("linkClickMode" in settingConfig.function) {
				let default_value: NetDiskRuleSettingConfigurationInterface_linkClickMode_all =
					typeof settingConfig.function.linkClickMode === "string"
						? settingConfig.function.linkClickMode
						: "copy";
				let data = [
					{
						value: "copy",
						text: "复制到剪贴板",
					},
					{
						value: "openBlank",
						text: "新标签页打开",
					},
				];
				// 扩展数据
				let extendData: {
					[key in NetDiskRuleSettingConfigurationInterface_linkClickMode_extend]: string;
				} = {
					parseFile: "文件解析",
				};
				if (
					settingConfig.function.linkClickMode_extend &&
					Array.isArray(settingConfig.function.linkClickMode_extend)
				) {
					// 扩展
					settingConfig.function.linkClickMode_extend.forEach((extendName) => {
						if (extendName in extendData) {
							data.push({
								value: extendName,
								text: extendData[extendName],
							});
						}
					});
				}
				function_form.push(
					UISelect(
						"点击动作",
						NetDiskLocalDataKey.template.function.linkClickMode(ruleKey),
						default_value,
						data,
						void 0,
						"点击匹配到的链接的执行的动作"
					)
				);
			}
			if ("checkLinkValidity" in settingConfig.function) {
				const default_value =
					typeof settingConfig.function.checkLinkValidity === "boolean"
						? settingConfig.function.checkLinkValidity
						: true;
				function_form.push(
					UISwitch(
						"验证链接有效性",
						NetDiskLocalDataKey.template.function.checkLinkValidity(ruleKey),
						default_value,
						void 0,
						"自动请求链接，判断该链接是否有效，在大/小窗内显示验证结果图标"
					)
				);
			}

			if (function_form.length) {
				formConfigList.push({
					text: "功能",
					type: "forms",
					forms: function_form,
				});
			}
		}
		if (settingConfig.linkClickMode_openBlank) {
			// 点击动作-新标签页打开
			let linkClickMode_openBlank_form: PopsPanelFormsTotalDetails[] = [];
			if (
				"openBlankWithCopyAccessCode" in settingConfig.linkClickMode_openBlank
			) {
				const default_value =
					typeof settingConfig.linkClickMode_openBlank
						.openBlankWithCopyAccessCode === "boolean"
						? settingConfig.linkClickMode_openBlank.openBlankWithCopyAccessCode
						: false;
				linkClickMode_openBlank_form.push(
					UISwitch(
						"跳转时复制访问码",
						NetDiskLocalDataKey.template.linkClickMode_openBlank.openBlankWithCopyAccessCode(
							ruleKey
						),
						default_value,
						void 0,
						"当点击动作是【新标签页打开】时且存在访问码，那就会复制访问码到剪贴板"
					)
				);
			}
			if (linkClickMode_openBlank_form.length) {
				formConfigList.push({
					text: "点击动作-新标签页打开",
					type: "forms",
					forms: linkClickMode_openBlank_form,
				});
			}
		}
		if (settingConfig.schemeUri) {
			const schemeUri_form: PopsPanelFormsTotalDetails[] = [];
			if ("enable" in settingConfig.schemeUri) {
				const default_value =
					typeof settingConfig.schemeUri.enable === "boolean"
						? settingConfig.schemeUri.enable
						: false;
				schemeUri_form.push(
					UISwitch(
						"启用",
						NetDiskLocalDataKey.template.schemeUri.enable(ruleKey),
						default_value,
						void 0,
						"开启后可进行scheme uri转发"
					)
				);
			}
			if ("isForwardBlankLink" in settingConfig.schemeUri) {
				const default_value =
					typeof settingConfig.schemeUri.isForwardBlankLink === "boolean"
						? settingConfig.schemeUri.isForwardBlankLink
						: false;
				schemeUri_form.push(
					UISwitch(
						"转发直链",
						NetDiskLocalDataKey.template.schemeUri.isForwardBlankLink(ruleKey),
						default_value,
						void 0,
						"对解析的直链进行scheme转换"
					)
				);
			}
			if ("isForwardLinearChain" in settingConfig.schemeUri) {
				const default_value =
					typeof settingConfig.schemeUri.isForwardLinearChain === "boolean"
						? settingConfig.schemeUri.isForwardLinearChain
						: false;
				schemeUri_form.push(
					UISwitch(
						"转发新标签页链接",
						NetDiskLocalDataKey.template.schemeUri.isForwardBlankLink(ruleKey),
						default_value,
						void 0,
						"对新标签页打开的链接进行scheme转换"
					)
				);
			}
			if ("uri" in settingConfig.schemeUri) {
				const default_value =
					typeof settingConfig.schemeUri.uri === "string"
						? settingConfig.schemeUri.uri
						: "";
				schemeUri_form.push(
					UIInput(
						"Uri链接",
						NetDiskLocalDataKey.template.schemeUri.uri(ruleKey),
						default_value,
						"自定义的Scheme的Uri链接",
						void 0,
						"jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx"
					)
				);
			}
			if (schemeUri_form.length) {
				formConfigList.push({
					text: "Scheme Uri转发",
					type: "forms",
					forms: schemeUri_form,
				});
			}
		}
		if (settingConfig.ownFormList) {
			// 额外加上自定义的
			formConfigList.push(...settingConfig.ownFormList);
		}
		return formConfigList;
	},
	/**
	 * 获取规则界面配置的内容
	 */
	getRulePanelContent(): PopsPanelContentConfig[] {
		return this.$data.ruleContent;
	},
};
