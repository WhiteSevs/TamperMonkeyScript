import { PopsPanelFormsDetails } from "@whitesev/pops/dist/types/src/components/panel/formsType";
import type {
	PopsPanelContentConfig,
	PopsPanelFormsTotalDetails,
} from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { NetDiskRule_baidu } from "./netdisk/baidu/rule";
import { NetDiskRule_lanzou } from "./netdisk/lanzou/rule";
import { NetDiskRule_lanzouyx } from "./netdisk/lanzouyx/rule";
import { NetDiskRule_tianyiyun } from "./netdisk/tianyiyun/rule";
import { NetDiskRule_hecaiyun } from "./netdisk/hecaiyun/rule";
import { NetDiskRule_aliyun } from "./netdisk/aliyun/rule";
import { NetDiskRule_wenshushu } from "./netdisk/wenshushu/rule";
import { NetDiskRule_nainiu } from "./netdisk/nainiu/rule";
import { NetDiskRule_123pan } from "./netdisk/123pan/rule";
import { NetDiskRule_weiyun } from "./netdisk/weiyun/rule";
import { NetDiskRule_xunlei } from "./netdisk/xunlei/rule";
import { NetDiskRule_chengtong } from "./netdisk/chengtong/rule";
import { NetDiskRule_kuake } from "./netdisk/kuake/rule";
import { NetDiskRule_magnet } from "./netdisk/magnet/rule";
import { NetDiskRule_jianguoyun } from "./netdisk/jianguoyun/rule";
import { NetDiskRule_onedrive } from "./netdisk/onedrive/rule";
import { NetDiskRule_uc } from "./netdisk/uc/rule";
import { NetDisk } from "../NetDisk";
import { NetDiskUserRule } from "./user-rule/NetDiskUserRule";
import { UISlider } from "@/setting/common-components/ui-slider";
import { UISwitch } from "@/setting/common-components/ui-switch";
import { UIInput } from "@/setting/common-components/ui-input";
import { NetDiskUI } from "../ui/NetDiskUI";
import { pops, utils } from "@/env";
import { UISelect } from "@/setting/common-components/ui-select";
import { NetDiskRuleSettingConfigurationInterface_linkClickMode } from "../link-click-mode/NetDiskLinkClickMode";
import { NetDiskRuleDataKEY } from "../data/NetDiskRuleDataKey";
import { NetDiskRuleData } from "../data/NetDiskRuleData";
import { NetDiskRuleUtils } from "./NetDiskRuleUtils";
import {
	NetDiskUserRuleReplaceParam_matchRange_html,
	NetDiskUserRuleReplaceParam_matchRange_text,
} from "./user-rule/NetDiskUserRuleReplaceParam";
import { NetDiskRule_115pan } from "./netdisk/115pan/rule";

/** 匹配范围 */
export type NetDiskRuleSettingConfigurationInterface_MatchRange = {
	/** 间隔前 */
	before?: number;
	/** 间隔后 */
	after?: number;
};
/** 功能 */
export type NetDiskRuleSettingConfigurationInterface_Function = {
	/** 是否启用 */
	enable?: boolean;
	/**
	 * 链接点击动作
	 *
	 * 默认启用复制和新标签页打开
	 *
	 * 默认选择复制到剪贴板
	 * @default {
	 * "copy": {
	 *         "default": true,
	 *         "enable": true,
	 *         "text": "复制到剪贴板",
	 *     }
	 * },
	 * "openBlank": {
	 *         "enable": true,
	 *         "text": "新标签页打开",
	 *     }
	 * }
	 */
	linkClickMode?: {
		[key in NetDiskRuleSettingConfigurationInterface_linkClickMode]?: {
			/** 是否是默认值 */
			default?: boolean;
			/** 是否启用 */
			enable?: boolean;
			/** 显示的文字 */
			text?: string;
		};
	};
	/** 验证链接有效性 */
	checkLinkValidity?: boolean;
};
/** 点击动作-新标签页打开 */
export type NetDiskRuleSettingConfigurationInterface_linkClickMode_openBlank = {
	/** 跳转时复制访问码 */
	openBlankWithCopyAccessCode?: boolean;
};
/** Scheme转发 */
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
/** 自定义配置列表 */
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
	rule: NetDiskMatchRuleOption[];
	/** 是否是用户规则 */
	isUserRule?: boolean;
	/** 设置 */
	setting: NetDiskRuleSetting;
};

export const NetDiskRule = {
	/** 规则存储的数据 */
	dataKey: "ruleData",
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
			NetDiskRule_lanzou(),
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

		// 遍历所有的规则、生成pops界面的配置
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
			if (Reflect.has(NetDisk.$rule.matchRule, ruleKey)) {
				/* 如果规则已存在(已内置)，自定义规则先放在前面匹配 */
				/* 即用户自定义的规则优先级最高 */
				let commonRule = NetDisk.$rule.matchRule[ruleKey];
				if (netDiskRuleConfig.isUserRule) {
					// 是用户规则，放在最前面
					commonRule = [...netDiskRule, ...commonRule];
				} else {
					// 默认规则，放在后面
					commonRule = [...commonRule, ...netDiskRule];
				}
				let findValue = NetDisk.$rule.rule.find(
					(item) => item.setting.key === ruleKey
				);
				findValue!.rule = commonRule;
			} else {
				// 不存在，直接新增新的
				Reflect.set(NetDisk.$rule.matchRule, ruleKey, netDiskRuleConfig.rule);
				NetDisk.$rule.rule.push(netDiskRuleConfig);
			}
			// 添加设置值
			Reflect.set(
				NetDisk.$rule.ruleSetting,
				ruleKey,
				netDiskRuleConfig.setting
			);

			// 对配置的匹配规则解析某些值
			netDiskRuleConfig.rule = this.parseRuleMatchRule(netDiskRuleConfig);
			// 对配置进行解析出panel视图的配置
			let viewConfig = this.parseRuleSetting(netDiskRuleConfig);

			/** 左侧显示的文字 */
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
				// 如果是用户自定义的规则，那么在头部添加修改、删除按钮图标
				headerTitleText += /*html*/ `<div class="netdisk-custom-rule-edit" data-key="${ruleKey}" data-type="${netDiskRuleConfig.setting.name}">${pops.config.iconSVG.edit}</div>`;
				headerTitleText += /*html*/ `<div class="netdisk-custom-rule-delete" data-key="${ruleKey}" data-type="${netDiskRuleConfig.setting.name}">${pops.config.iconSVG.delete}</div>`;
			}
			// 存储解析完毕的配置
			this.$data.ruleContent.push({
				id: "netdisk-panel-config-" + ruleKey,
				title: asideTitle,
				headerTitle: headerTitleText,
				attributes: {
					"data-key": ruleKey,
				},
				forms: viewConfig,
				afterRender: (data) => {
					data.$asideLiElement.setAttribute(
						"data-function-enable",
						NetDiskRuleData.function.enable(ruleKey, true).toString()
					);
				},
			});
		});
	},
	/**
	 * 解析规则的匹配规则
	 *
	 * 解析以下内容
	 *
	 * 1. 替换字符串类型的内部关键字
	 */
	parseRuleMatchRule(netDiskRuleConfig: {
		rule: NetDiskMatchRuleOption[];
		setting: NetDiskRuleSetting;
		isUserRule?: boolean;
	}) {
		// 旧的匹配规则
		let netDiskMatchRule = netDiskRuleConfig.rule;
		// 新的匹配规则
		let netDiskMatchRuleHandler = <NetDiskMatchRuleOption[]>[];
		//  网盘键
		let ruleKey = netDiskRuleConfig.setting.key;

		for (let index = 0; index < netDiskMatchRule.length; index++) {
			const netDiskMatchRuleOption = netDiskMatchRule[index];
			// 处理innerText
			if (typeof netDiskMatchRuleOption.link_innerText === "string") {
				netDiskMatchRuleOption.link_innerText = NetDiskRuleUtils.replaceParam(
					netDiskMatchRuleOption.link_innerText,
					NetDiskUserRuleReplaceParam_matchRange_text(ruleKey)
				);
			}
			// 处理innerHTML
			if (typeof netDiskMatchRuleOption.link_innerHTML === "string") {
				netDiskMatchRuleOption.link_innerHTML = NetDiskRuleUtils.replaceParam(
					netDiskMatchRuleOption.link_innerHTML,
					NetDiskUserRuleReplaceParam_matchRange_html(ruleKey)
				);
			}
			netDiskMatchRuleHandler.push(netDiskMatchRuleOption);
		}

		return netDiskMatchRuleHandler;
	},
	/**
	 * 解析规则的设置项
	 *
	 * 解析出以下内容：
	 *
	 * 1. 视图配置
	 * 2. 获取设置的最新的值并进行覆盖
	 * @param netDiskRuleConfig 规则配置
	 */
	parseRuleSetting(netDiskRuleConfig: {
		rule: NetDiskMatchRuleOption[];
		setting: NetDiskRuleSetting;
		isUserRule?: boolean;
	}): (PopsPanelFormsDetails | PopsPanelFormsTotalDetails)[] {
		// 处理配置项信息
		let formConfigList: (PopsPanelFormsDetails | PopsPanelFormsTotalDetails)[] =
			[];
		const settingConfig = netDiskRuleConfig.setting.configurationInterface;
		const ruleKey = netDiskRuleConfig.setting.key;
		if (settingConfig == null) {
			// 没有配置信息
			return [];
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
						NetDiskRuleDataKEY.function.enable(ruleKey),
						default_value,
						(event, value) => {
							/** 启用状态的属性名 */
							const notUnableAttrName = "data-function-enable";
							let $click = event.target as HTMLElement;
							let $shadowRoot = $click.getRootNode() as ShadowRoot;
							let $currentPanelAside = $shadowRoot.querySelector<HTMLElement>(
								`.pops-panel-aside li[data-key="${ruleKey}"]`
							);
							if (!$currentPanelAside) {
								return;
							}
							$currentPanelAside.setAttribute(
								notUnableAttrName,
								value.toString()
							);
						},
						"开启可允许匹配该规则"
					)
				);
				// 覆盖配置
				settingConfig.function.enable =
					NetDiskRuleData.function.enable(ruleKey);
			}
			if ("linkClickMode" in settingConfig.function) {
				let data = utils.assign(
					NetDiskRuleUtils.getDefaultLinkClickMode(),
					settingConfig.function.linkClickMode || {}
				);
				let default_value: null | NetDiskRuleSettingConfigurationInterface_linkClickMode =
					null;
				let selectData = Object.keys(data)
					.map((keyName) => {
						let itemData = data[keyName as keyof typeof data];
						if (!itemData.enable) {
							return;
						}
						if (itemData.default) {
							default_value = keyName as keyof typeof data;
						}
						return {
							value: keyName,
							text: itemData.text!,
						};
					})
					.filter((item) => item != null);
				if (default_value == null) {
					// 直接取可选菜单的第一个值
					default_value = selectData[0]
						.value as NetDiskRuleSettingConfigurationInterface_linkClickMode;
				}
				function_form.push(
					UISelect(
						"点击动作",
						NetDiskRuleDataKEY.function.linkClickMode(ruleKey),
						default_value,
						selectData,
						void 0,
						"点击匹配到的链接的执行的动作"
					)
				);
				// 覆盖默认值
				for (const linkClickModeKey in settingConfig.function.linkClickMode) {
					const linkClickModeItem =
						settingConfig.function.linkClickMode[
							linkClickModeKey as keyof typeof settingConfig.function.linkClickMode
						];
					if (
						linkClickModeKey === NetDiskRuleData.function.linkClickMode(ruleKey)
					) {
						linkClickModeItem!.default = true;
					} else {
						linkClickModeItem!.default = false;
					}
				}
			}
			if ("checkLinkValidity" in settingConfig.function) {
				const default_value =
					typeof settingConfig.function.checkLinkValidity === "boolean"
						? settingConfig.function.checkLinkValidity
						: true;
				function_form.push(
					UISwitch(
						"验证链接有效性",
						NetDiskRuleDataKEY.function.checkLinkValidity(ruleKey),
						default_value,
						void 0,
						"自动请求链接，判断该链接是否有效，在大/小窗内显示验证结果图标"
					)
				);
				// 覆盖默认值
				settingConfig.function.checkLinkValidity =
					NetDiskRuleData.function.checkLinkValidity(ruleKey);
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
						NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankWithCopyAccessCode(
							ruleKey
						),
						default_value,
						void 0,
						"当点击动作是【新标签页打开】时且存在访问码，那就会复制访问码到剪贴板"
					)
				);
				// 覆盖默认值
				settingConfig.linkClickMode_openBlank.openBlankWithCopyAccessCode =
					NetDiskRuleData.linkClickMode_openBlank.openBlankWithCopyAccessCode(
						ruleKey
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
						NetDiskRuleDataKEY.schemeUri.enable(ruleKey),
						default_value,
						void 0,
						"开启后可进行scheme uri转发"
					)
				);
				// 覆盖默认值
				settingConfig.schemeUri.enable =
					NetDiskRuleData.schemeUri.enable(ruleKey);
			}
			if ("isForwardBlankLink" in settingConfig.schemeUri) {
				const default_value =
					typeof settingConfig.schemeUri.isForwardBlankLink === "boolean"
						? settingConfig.schemeUri.isForwardBlankLink
						: false;
				schemeUri_form.push(
					UISwitch(
						"转发直链",
						NetDiskRuleDataKEY.schemeUri.isForwardBlankLink(ruleKey),
						default_value,
						void 0,
						"对解析的直链进行scheme转换"
					)
				);
				// 覆盖默认值
				settingConfig.schemeUri.isForwardBlankLink =
					NetDiskRuleData.schemeUri.isForwardBlankLink(ruleKey);
			}
			if ("isForwardLinearChain" in settingConfig.schemeUri) {
				const default_value =
					typeof settingConfig.schemeUri.isForwardLinearChain === "boolean"
						? settingConfig.schemeUri.isForwardLinearChain
						: false;
				schemeUri_form.push(
					UISwitch(
						"转发新标签页链接",
						NetDiskRuleDataKEY.schemeUri.isForwardBlankLink(ruleKey),
						default_value,
						void 0,
						"对新标签页打开的链接进行scheme转换"
					)
				);
				// 覆盖默认值
				settingConfig.schemeUri.isForwardLinearChain =
					NetDiskRuleData.schemeUri.isForwardLinearChain(ruleKey);
			}
			if ("uri" in settingConfig.schemeUri) {
				const default_value =
					typeof settingConfig.schemeUri.uri === "string"
						? settingConfig.schemeUri.uri
						: "";
				schemeUri_form.push(
					UIInput(
						"Uri链接",
						NetDiskRuleDataKEY.schemeUri.uri(ruleKey),
						default_value,
						"自定义的Scheme的Uri链接",
						void 0,
						"jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx"
					)
				);
				// 覆盖默认值
				settingConfig.schemeUri.uri = NetDiskRuleData.schemeUri.uri(ruleKey);
			}
			if (schemeUri_form.length) {
				formConfigList.push({
					text: "Scheme Uri转发",
					type: "forms",
					forms: schemeUri_form,
				});
			}
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
						NetDiskRuleDataKEY.matchRange_text.before(ruleKey),
						default_value,
						0,
						100,
						void 0,
						void 0,
						"提取码间隔前的字符长度"
					)
				);

				// 覆盖默认值
				settingConfig.matchRange_text.before =
					NetDiskRuleData.matchRange_text.before(ruleKey);
			}
			if ("after" in settingConfig.matchRange_text) {
				const default_value =
					typeof settingConfig.matchRange_text.after === "number"
						? settingConfig.matchRange_text.after
						: 0;
				matchRange_text_form.push(
					UISlider(
						"间隔后",
						NetDiskRuleDataKEY.matchRange_text.after(ruleKey),
						default_value,
						0,
						100,
						void 0,
						void 0,
						"提取码间隔后的字符长度"
					)
				);
				// 覆盖默认值
				settingConfig.matchRange_text.after =
					NetDiskRuleData.matchRange_text.after(ruleKey);
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
						NetDiskRuleDataKEY.matchRange_html.before(ruleKey),
						default_value,
						0,
						100,
						void 0,
						void 0,
						"提取码间隔前的字符长度"
					)
				);
				// 覆盖默认值
				settingConfig.matchRange_html.before =
					NetDiskRuleData.matchRange_html.before(ruleKey);
			}
			if ("after" in settingConfig.matchRange_html) {
				const default_value =
					typeof settingConfig.matchRange_html.after === "number"
						? settingConfig.matchRange_html.after
						: 0;

				matchRange_html_form.push(
					UISlider(
						"间隔后",
						NetDiskRuleDataKEY.matchRange_html.after(ruleKey),
						default_value,
						0,
						100,
						void 0,
						void 0,
						"提取码间隔后的字符长度"
					)
				);
				// 覆盖默认值
				settingConfig.matchRange_html.after =
					NetDiskRuleData.matchRange_html.after(ruleKey);
			}
			if (matchRange_html_form.length) {
				formConfigList.push({
					text: "提取码文本匹配HTML",
					type: "forms",
					forms: matchRange_html_form,
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
