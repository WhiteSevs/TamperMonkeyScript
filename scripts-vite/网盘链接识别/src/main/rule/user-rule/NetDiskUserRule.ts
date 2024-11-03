import { Cryptojs, DOMUtils, httpx, log, pops, utils } from "@/env";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";
import { NetDiskAutoFillAccessCode } from "../../auto-fill-accesscode/NetDiskAutoFillAccessCode";
import { NetDiskAuthorization } from "../../authorization/NetDiskAuthorization";
import { NetDiskCheckLinkValidity } from "../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskParse } from "../../parse/NetDiskParse";
import { NetDiskRequire } from "./NetDiskRequire";
import { NetDiskUI } from "../../ui/NetDiskUI";
import { NetDiskRuleConfig } from "../NetDiskRule";
import { type NetDiskRuleSettingConfigurationInterface_linkClickMode } from "@/main/link-click-mode/NetDiskLinkClickMode";
import { NetDiskRuleDataKEY } from "@/main/data/NetDiskRuleDataKey";
import { StorageUtils } from "@/utils/StorageUtils";
import { NetDiskRuleUtils } from "../NetDiskRuleUtils";
import {
	NetDiskUserRuleReplaceParam_matchRange_html,
	NetDiskUserRuleReplaceParam_matchRange_text,
} from "./NetDiskUserRuleReplaceParam";
import type { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";

/** 网盘-自定义规则 */
export const NetDiskUserRule = {
	KEY: "userRule",
	/** 用户规则上下文存储的数据 */
	userRuleContextDataKey: "userRuleContextData",
	$data: {
		__userRule: null as any as UtilsDictionary<string, NetDiskRuleConfig>,
		get userRule() {
			if (this.__userRule == null) {
				this.__userRule = new utils.Dictionary<string, NetDiskRuleConfig>();
			}
			return this.__userRule;
		},
	},
	/**
	 * 初始化
	 */
	init() {
		// 先把本地规则进行转换
		let userRule = this.parseRule(this.getAllRule());
		userRule.forEach((item) => {
			this.$data.userRule.set(item.setting.key, item);
		});
	},
	/**
	 * 把输入的规则字符串解析为规则对象
	 */
	parseRuleStrToRule(ruleText: string) {
		/**
		 * 检测regexp项是否符合规定
		 * @param ruleRegExp
		 */
		function checkRegExp(ruleRegExp: NetDiskUserCustomRuleRegexp) {
			if (typeof ruleRegExp["link_innerText"] !== "string") {
				return {
					success: false,
					msg: "regexp缺失的键名: link_innerText，类型: string",
				};
			}
			if (typeof ruleRegExp["link_innerHTML"] !== "string") {
				return {
					success: false,
					msg: "regexp缺失的键名: link_innerHTML，类型: string",
				};
			}
			if (typeof ruleRegExp["shareCode"] !== "string") {
				return {
					success: false,
					msg: "regexp缺失的键名: shareCode，类型: string",
				};
			}
			if (typeof ruleRegExp["shareCodeNeedRemoveStr"] !== "string") {
				return {
					success: false,
					msg: "regexp缺失的键名: shareCodeNeedRemoveStr，类型: string",
				};
			}
			if (typeof ruleRegExp["uiLinkShow"] !== "string") {
				return {
					success: false,
					msg: "regexp缺失的键名: uiLinkShow，类型: string",
				};
			}
			if (typeof ruleRegExp["blank"] !== "string") {
				return {
					success: false,
					msg: "regexp缺失的键名: blank，类型: string",
				};
			}
			if (typeof ruleRegExp["copyUrl"] !== "string") {
				return {
					success: false,
					msg: "regexp缺失的键名: copyUrl，类型: string",
				};
			}
			if (
				typeof ruleRegExp["accessCode"] === "string" &&
				typeof ruleRegExp["checkAccessCode"] !== "string"
			) {
				return {
					success: false,
					msg: "regexp设置了accessCode但是没有设置checkAccessCode",
				};
			}
			if (
				typeof ruleRegExp["accessCode"] !== "string" &&
				typeof ruleRegExp["checkAccessCode"] === "string"
			) {
				return {
					success: false,
					msg: "regexp设置了checkAccessCode但是没有设置accessCode",
				};
			}
			return {
				success: true,
				msg: "校验rule成功",
			};
		}
		/**
		 * 检测设置项是否符合规定
		 * @param ruleSetting
		 */
		function checkSetting(ruleSetting: NetDiskUserCustomRuleSetting) {
			if (typeof ruleSetting["name"] !== "string") {
				return {
					success: false,
					msg: "setting缺失的键名: name，类型: string",
				};
			}
			if (typeof ruleSetting["enable"] !== "boolean") {
				return {
					success: false,
					msg: "setting缺失的键名: enable，类型: boolean",
				};
			}
			return {
				success: true,
				msg: "校验setting成功",
			};
		}
		try {
			let ruleJSON = JSON.parse(ruleText) as NetDiskUserCustomRule;
			if (typeof ruleJSON !== "object") {
				return {
					success: false,
					msg: "该规则不是object类型",
				};
			}
			if (typeof ruleJSON["key"] !== "string") {
				return {
					success: false,
					msg: "缺失的键名: key，类型: string",
				};
			}
			if (typeof ruleJSON["regexp"] !== "object") {
				return {
					success: false,
					msg: "缺失的键名: regexp，类型: object|Arrany",
				};
			}
			if (typeof ruleJSON["setting"] !== "object") {
				return {
					success: false,
					msg: "缺失的键名: setting，类型: object",
				};
			}
			if (Array.isArray(ruleJSON["regexp"])) {
				for (const regexpItem of ruleJSON["regexp"]) {
					let result = checkRegExp(regexpItem);
					if (!result.success) {
						return result;
					}
				}
			} else {
				let result = checkRegExp(ruleJSON["regexp"]);
				if (!result.success) {
					return result;
				}
			}
			let checkSettingResult = checkSetting(ruleJSON["setting"]);
			if (!checkSettingResult.success) {
				return checkSettingResult;
			}
			return {
				success: true,
				msg: "解析成功",
				data: ruleJSON,
			};
		} catch (error: any) {
			log.error(error);
			return {
				success: false,
				msg: error.message,
			};
		}
	},
	/**
	 * 上下文环境
	 * @param rule
	 */
	getBindContext(rule: NetDiskUserCustomRule) {
		let storageUtils = new StorageUtils(NetDiskUserRule.userRuleContextDataKey);

		return {
			rule: rule,
			NetDiskRequire: NetDiskRequire,
			CryptoJS: Cryptojs,
			httpx: httpx,
			utils: utils,
			DOMUtils: DOMUtils,
			window: window,
			unsafeWindow: unsafeWindow,
			NetDiskCheckLinkValidity: NetDiskCheckLinkValidity,
			log: log,
			Qmsg: Qmsg,
			pops: pops,
			setValue: storageUtils.set.bind(storageUtils),
			getValue: storageUtils.get.bind(storageUtils),
			deleteValue: storageUtils.delete.bind(storageUtils),
		};
	},
	/**
	 * 把用户自定义规则进行转换成脚本规则
	 * @param localRule 用户的规则
	 */
	parseRule(localRule: NetDiskUserCustomRule[]): NetDiskRuleConfig[] {
		/**
		 * 这里是第1步骤的处理函数
		 *
		 * 规则转换
		 *
		 * 把字符串类型的转为正则
		 * @param ruleKey 规则键
		 * @param userRuleConfig 用户规则配置
		 * @param ruleRegExp 用户的匹配规则
		 */
		function parseUserRuleToScriptRule(
			ruleKey: string,
			userRuleConfig: NetDiskUserCustomRule,
			ruleRegExp: NetDiskUserCustomRuleRegexp
		): NetDiskMatchRuleOption {
			const {
				shareCode,
				shareCodeNeedRemoveStr,
				shareCodeNotMatch,
				checkAccessCode,
				accessCode,
				acceesCodeNotMatch,
				paramMatch,
				...otherRuleParams
			} = ruleRegExp;
			// 这里的值需要获取最新的，而不是配置默认值
			let netDiskRegularOption = {
				...otherRuleParams,
			} as NetDiskMatchRuleOption;
			// 处理link_innerText
			// 处理link_innerHTML
			// 把某些关键字参数替换为规定的数值
			netDiskRegularOption.link_innerText = NetDiskRuleUtils.replaceParam(
				netDiskRegularOption.link_innerText,
				NetDiskUserRuleReplaceParam_matchRange_text(ruleKey)
			);
			netDiskRegularOption.link_innerHTML = NetDiskRuleUtils.replaceParam(
				netDiskRegularOption.link_innerText,
				NetDiskUserRuleReplaceParam_matchRange_html(ruleKey)
			);

			if (typeof shareCode === "string") {
				netDiskRegularOption.shareCode = new RegExp(shareCode, "ig");
			}
			if (typeof shareCodeNeedRemoveStr === "string") {
				netDiskRegularOption.shareCodeNeedRemoveStr = new RegExp(
					shareCodeNeedRemoveStr,
					"ig"
				);
			}
			if (typeof shareCodeNotMatch === "string") {
				netDiskRegularOption.shareCodeNotMatch = new RegExp(
					shareCodeNotMatch,
					"ig"
				);
			}
			if (typeof checkAccessCode === "string") {
				netDiskRegularOption.checkAccessCode = new RegExp(
					checkAccessCode,
					"ig"
				);
			}
			if (typeof accessCode === "string") {
				netDiskRegularOption.accessCode = new RegExp(accessCode, "ig");
			}
			if (typeof acceesCodeNotMatch === "string") {
				netDiskRegularOption.acceesCodeNotMatch = new RegExp(
					acceesCodeNotMatch,
					"ig"
				);
			}
			if (typeof paramMatch === "string") {
				netDiskRegularOption.paramMatch = new RegExp(paramMatch, "i");
			}

			return netDiskRegularOption;
		}

		let netDiskRuleConfigList: NetDiskRuleConfig[] = [];
		// 遍历传入的规则
		for (const userRuleItemConfig of localRule) {
			// 得配置全初始项
			let netDiskRuleConfig = {
				rule: [],
				setting: {
					name: userRuleItemConfig.setting.name,
					key: userRuleItemConfig.key,
					configurationInterface: <
						Required<NetDiskRuleConfig["setting"]["configurationInterface"]>
					>{
						matchRange_text: {},
						matchRange_html: {},
						function: {},
						linkClickMode_openBlank: {},
						schemeUri: {},
						ownFormList: [],
					},
				},
				isUserRule: true,
			} as NetDiskRuleConfig;
			// 规则
			const userRuleList = userRuleItemConfig.regexp;
			// 唯一键
			const ruleKey = userRuleItemConfig.key;

			// 1. 转换rule
			if (Array.isArray(userRuleList)) {
				userRuleList.forEach((userRuleItem) => {
					netDiskRuleConfig.rule.push(
						parseUserRuleToScriptRule(ruleKey, userRuleItemConfig, userRuleItem)
					);
				});
			} else {
				netDiskRuleConfig.rule.push(
					parseUserRuleToScriptRule(ruleKey, userRuleItemConfig, userRuleList)
				);
			}

			// 2. 转换setting
			if (userRuleItemConfig.setting) {
				// 其它的规则，也就是界面设置的规则
				/* 是否启用，初始化默认值 */
				this.initDefaultValue(
					NetDiskRuleDataKEY.function.enable(ruleKey),
					Boolean(userRuleItemConfig.setting.enable)
				);
				// 添加默认值
				netDiskRuleConfig.setting!.configurationInterface!.function!.enable =
					Boolean(userRuleItemConfig.setting.enable);

				if (typeof userRuleItemConfig.setting["isBlank"] === "boolean") {
					/* 新标签页打开（旧） */
					this.initDefaultValue(
						NetDiskRuleDataKEY.function.linkClickMode(ruleKey),
						"openBlank"
					);
					netDiskRuleConfig.setting!.configurationInterface!.function!.linkClickMode =
						{
							openBlank: {
								default: true,
								enable: true,
							},
						};
				}
				if (typeof userRuleItemConfig.setting.linkClickMode === "object") {
					// 点击动作
					let data = utils.assign(
						NetDiskRuleUtils.getDefaultLinkClickMode(),
						userRuleItemConfig.setting.linkClickMode || {}
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
					this.initDefaultValue(
						NetDiskRuleDataKEY.function.linkClickMode(ruleKey),
						default_value
					);
				}
				if (
					typeof userRuleItemConfig.setting["openBlankWithCopyAccessCode"] ===
					"boolean"
				) {
					/* 跳转时复制访问码 */
					this.initDefaultValue(
						NetDiskRuleDataKEY.linkClickMode_openBlank.openBlankWithCopyAccessCode(
							ruleKey
						),
						Boolean(userRuleItemConfig.setting["openBlankWithCopyAccessCode"])
					);
					netDiskRuleConfig.setting!.configurationInterface!.linkClickMode_openBlank!.openBlankWithCopyAccessCode =
						Boolean(userRuleItemConfig.setting["openBlankWithCopyAccessCode"]);
				}
				if (
					typeof userRuleItemConfig.setting["checkLinkValidity"] === "boolean"
				) {
					/* 用于验证链接有效性 */
					this.initDefaultValue(
						NetDiskRuleDataKEY.function.checkLinkValidity(ruleKey),
						Boolean(userRuleItemConfig.setting["checkLinkValidity"])
					);
					netDiskRuleConfig.setting!.configurationInterface!.function!.checkLinkValidity =
						Boolean(userRuleItemConfig.setting["checkLinkValidity"]);
				}
				if (
					typeof userRuleItemConfig.setting["checkLinkValidityHoverTip"] ===
					"boolean"
				) {
					/* 用于验证链接有效性结果的悬停提示 */
					this.initDefaultValue(
						NetDiskRuleDataKEY.function.checkLinkValidityHoverTip(ruleKey),
						Boolean(userRuleItemConfig.setting["checkLinkValidityHoverTip"])
					);
				}
				if (typeof userRuleItemConfig.setting["isForward"] === "boolean") {
					/* 直接进行scheme转发链接 */
					this.initDefaultValue(
						NetDiskRuleDataKEY.schemeUri.enable(ruleKey),
						Boolean(userRuleItemConfig.setting["isForward"])
					);
					netDiskRuleConfig.setting!.configurationInterface!.schemeUri!.enable =
						Boolean(userRuleItemConfig.setting["isForward"]);
				}
				if (typeof userRuleItemConfig.setting["schemeUri"] === "string") {
					/* scheme转发的字符串格式 */
					this.initDefaultValue(
						NetDiskRuleDataKEY.schemeUri.uri(ruleKey),
						userRuleItemConfig.setting["schemeUri"]
					);
					netDiskRuleConfig.setting!.configurationInterface!.schemeUri!.uri =
						userRuleItemConfig.setting["schemeUri"];
				}
				if (
					typeof userRuleItemConfig.setting[
						"innerTextAccessCodeBeforeMaxRange"
					] === "number"
				) {
					/* text-提取码间隔前的字符长度 */
					this.initDefaultValue(
						NetDiskRuleDataKEY.matchRange_text.before(ruleKey),
						userRuleItemConfig.setting["innerTextAccessCodeBeforeMaxRange"]
					);
					netDiskRuleConfig.setting!.configurationInterface!.matchRange_text!.before =
						userRuleItemConfig.setting["innerTextAccessCodeBeforeMaxRange"];
				}
				if (
					typeof userRuleItemConfig.setting[
						"innerTextAccessCodeAfterMaxRange"
					] === "number"
				) {
					/* text-提取码间隔后的字符长度 */
					this.initDefaultValue(
						NetDiskRuleDataKEY.matchRange_text.after(ruleKey),
						userRuleItemConfig.setting["innerTextAccessCodeAfterMaxRange"]
					);
					netDiskRuleConfig.setting!.configurationInterface!.matchRange_text!.after =
						userRuleItemConfig.setting["innerTextAccessCodeAfterMaxRange"];
				}
				if (
					typeof userRuleItemConfig.setting[
						"innerHTMLAccessCodeBeforeMaxRange"
					] === "number"
				) {
					/* html-提取码间隔前的字符长度 */
					this.initDefaultValue(
						NetDiskRuleDataKEY.matchRange_html.before(ruleKey),
						userRuleItemConfig.setting["innerHTMLAccessCodeBeforeMaxRange"]
					);
					netDiskRuleConfig.setting!.configurationInterface!.matchRange_html!.before =
						userRuleItemConfig.setting["innerHTMLAccessCodeBeforeMaxRange"];
				}
				if (
					typeof userRuleItemConfig.setting[
						"innerHTMLAccessCodeAfterMaxRange"
					] === "number"
				) {
					/* html-提取码间隔后的字符长度 */
					this.initDefaultValue(
						NetDiskRuleDataKEY.matchRange_html.after(ruleKey),
						userRuleItemConfig.setting["innerHTMLAccessCodeAfterMaxRange"]
					);
					netDiskRuleConfig.setting!.configurationInterface!.matchRange_html!.after =
						userRuleItemConfig.setting["innerHTMLAccessCodeAfterMaxRange"];
				}
			}

			// 3. 配置图标字典数据
			if (typeof userRuleItemConfig.icon === "string") {
				// 配置图标
				let ruleIcon = userRuleItemConfig.icon;
				NetDiskUI.src.addIcon(ruleKey, ruleIcon);
			}

			// 4. 把规则的自定义解析函数进行转换
			const AsyncFunction = Object.getPrototypeOf(
				async function () {}
			).constructor;
			if (typeof userRuleItemConfig.checkLinkValidityFunction === "string") {
				// 自定义校验链接有效性函数
				try {
					Reflect.set(NetDiskCheckLinkValidity.netDisk, ruleKey, {
						init: new AsyncFunction(
							"netDiskIndex",
							"shareCode",
							"accessCode",
							userRuleItemConfig.checkLinkValidityFunction
							// 绑定作用域
						).bind(this.getBindContext(userRuleItemConfig)),
					});
				} catch (error) {
					log.error(error);
				}
			}
			if (typeof userRuleItemConfig.AuthorizationFunction === "string") {
				// 自定义鉴权函数
				try {
					NetDiskAuthorization.netDisk[ruleKey] = new AsyncFunction(
						userRuleItemConfig.AuthorizationFunction
					).bind(
						// 绑定作用域
						this.getBindContext(userRuleItemConfig)
					);
				} catch (error) {
					log.error(error);
				}
			}
			if (typeof userRuleItemConfig.AutoFillAccessCodeFunction === "string") {
				// 自定义填充访问码函数
				try {
					NetDiskAutoFillAccessCode.netDisk[ruleKey] = new AsyncFunction(
						"netDiskInfo",
						userRuleItemConfig.AutoFillAccessCodeFunction
						// 绑定作用域
					).bind(this.getBindContext(userRuleItemConfig));
				} catch (error) {
					log.error(error);
				}
			}
			if (typeof userRuleItemConfig.parseFunction === "string") {
				// 自定义文件解析函数
				try {
					Reflect.set(
						NetDiskParse.netDisk,
						ruleKey,
						new Function(userRuleItemConfig.parseFunction).bind(
							this.getBindContext(userRuleItemConfig)
						)
					);
				} catch (error) {
					log.error(error);
				}
			}

			// 检测已处理的规则中是否存在重复key的规则
			// 存在 => 追加新的rule
			let findValue = netDiskRuleConfigList.find(
				(item) => item.setting.key === netDiskRuleConfig.setting.key
			);
			if (findValue) {
				/* 已存在相同key规则，追加新的 */
				findValue.rule = findValue.rule.concat(netDiskRuleConfig.rule);
			} else {
				netDiskRuleConfigList.push(netDiskRuleConfig);
			}
		}
		return netDiskRuleConfigList;
	},
	/**
	 * 获取配置
	 */
	getNetDiskRuleConfig() {
		return this.$data.userRule.values();
	},
	/**
	 * 初始化默认值
	 */
	initDefaultValue(key: string, value?: any) {
		let localValue = GM_getValue(key);
		if (localValue == null) {
			GM_setValue(key, value);
		}
	},
	/**
	 * 获取模板规则
	 */
	getTemplateRule(): string {
		let templateRule = <NetDiskUserCustomRule>{
			key: "规则名",
			icon: "图标链接字符串或图片的base64字符串",
			regexp: [
				{
					link_innerText: "",
					link_innerHTML: "",
					shareCode: "",
					shareCodeNeedRemoveStr: "",
					uiLinkShow: "",
					blank: "",
					copyUrl: "",
				},
			],
			setting: {
				name: "设置界面的名字",
				enable: true,
				linkClickMode: "openBlank",
				openBlankWithCopyAccessCode: true,
			},
		};
		return this.getFormatRule(templateRule);
	},
	/**
	 * 添加规则
	 * @param userRule
	 */
	addRule(userRule: NetDiskUserCustomRule) {
		let localRule = this.getAllRule();
		localRule.push(userRule);
		GM_setValue(NetDiskUserRule.KEY, localRule);
	},
	/**
	 * 设置规则到本地
	 * @param oldRuleKey 旧规则的键名
	 * @param userRule
	 */
	setRule(
		oldRuleKey: string,
		userRule: NetDiskUserCustomRule[] | NetDiskUserCustomRule
	) {
		if (Array.isArray(userRule)) {
			GM_setValue(NetDiskUserRule.KEY, userRule);
		} else {
			let localRule = this.getAllRule();
			let findRuleIndex = localRule.findIndex(
				(item) => item.key === oldRuleKey
			);
			if (findRuleIndex !== -1) {
				// @ts-ignore
				localRule[findRuleIndex] = null;
				localRule[findRuleIndex] = userRule;
			} else {
				log.error("覆盖规则失败", userRule);
				Qmsg.error("覆盖规则失败");
				return false;
			}
			this.setRule(oldRuleKey, localRule);
		}
	},
	/**
	 * 删除单条规则
	 * @param ruleKey 规则的key名
	 */
	deleteRule(ruleKey: string) {
		let localRule = this.getAllRule();
		let findIndex = localRule.findIndex((rule) => rule.key === ruleKey);
		if (findIndex !== -1) {
			localRule.splice(findIndex, 1);
			this.setRule(ruleKey, localRule);
			return true;
		} else {
			return false;
		}
	},
	/**
	 * 清空规则
	 */
	clearRule() {
		GM_deleteValue(NetDiskUserRule.KEY);
	},
	/**
	 * 获取本地所有的规则
	 */
	getAllRule() {
		let result = GM_getValue<(NetDiskUserCustomRule | NetDiskUserCustomRule)[]>(
			NetDiskUserRule.KEY,
			[]
		);
		return result;
	},
	/**
	 * 获取规则
	 */
	getRule(key: string) {
		let localRule = GM_getValue<
			(NetDiskUserCustomRule | NetDiskUserCustomRule)[]
		>(NetDiskUserRule.KEY, []);
		return localRule.find((item) => item.key === key);
	},
	/**
	 * 获取格式化后的规则
	 * @param rule
	 */
	getFormatRule(rule?: NetDiskUserCustomRule) {
		return JSON.stringify(rule || this.getAllRule(), void 0, 4);
	},
};
