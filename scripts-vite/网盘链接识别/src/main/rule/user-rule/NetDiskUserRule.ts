import { Cryptojs, DOMUtils, httpx, log, pops, utils } from "@/env";
import Qmsg from "qmsg";
import { GM_deleteValue, GM_getValue, GM_setValue, unsafeWindow } from "ViteGM";
import { NetDiskAutoFillAccessCode } from "../../auto-fill-accesscode/NetDiskAutoFillAccessCode";
import { NetDiskAuthorization } from "../../authorization/NetDiskAuthorization";
import { NetDiskCheckLinkValidity } from "../../check-valid/NetDiskCheckLinkValidity";
import { NetDiskParse } from "../../parse/NetDiskParse";
import { NetDiskRequire } from "../../NetDiskRequire";
import {
	NetDiskLocalData,
	NetDiskLocalDataKey,
} from "../../data/NetDiskLocalData";
import { NetDiskPops } from "../../pops/NetDiskPops";
import { NetDiskUI } from "../../ui/NetDiskUI";
import { NetDiskUserRuleDebug } from "./NetDiskUserRuleDebug";
import { NetDiskRuleConfig } from "../NetDiskRule";
import {
	NetDiskLinkClickMode,
	NetDiskLinkClickModeUtils,
} from "@/main/link-click-mode/NetDiskLinkClickMode";

/** 网盘-自定义规则 */
export const NetDiskUserRule = {
	key: "userRule",
	dataKey: "userRuleData",
	$data: {
		userRule: new utils.Dictionary<string, NetDiskRuleConfig>(),
	},
	/**
	 * 初始化
	 */
	init() {
		// 初始化数据键
		if (typeof GM_getValue(this.dataKey) !== "object") {
			GM_setValue(this.dataKey, {});
		}
		// 先把本地规则进行转换
		let userRule = this.parseRule(this.getAllRule());
		userRule.forEach((item) => {
			this.$data.userRule.set(item.setting.key, item);
		});
	},
	getCSS() {
		return /*css*/ `
        .pops[type-value=confirm] .pops-confirm-content{
            overflow: hidden;
        }
        /* textarea美化 */
        .pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea{
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            padding: 0;
            margin: 0;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-image: none;
            background-color: transparent;

            display: inline-block;
            resize: vertical;
            padding: 5px 15px;
            line-height: 1.5;
            box-sizing: border-box;
            border: 1px solid #dcdfe6;
            transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
            appearance: none;
            resize: none;
        }
        /* 获得焦点 */
        .pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea:focus{
            outline: none;
            border-color: #3677f0;
        }
        /* 提示文字 */
        .pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea::placeholder {
            color: #c0c4cc;
        }
        /* 鼠标hover */
        .pops.whitesevPopNetDiskCustomRules[type-value="confirm"] .pops-confirm-content textarea:hover {
            border-color: #c0c4cc;
        }
          `;
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
	 * 添加/编辑规则
	 * @param isEdit
	 * @param ruleKey 当isEdit为true时，传入该值
	 */
	showUI(isEdit: boolean, ruleKey?: string) {
		const that = this;
		let titleText = "添加";
		if (isEdit) {
			titleText = "编辑";
		}
		titleText += "自定义规则";
		let $ruleInput = null as any as HTMLTextAreaElement;

		/**
		 * 保存按钮的回调
		 */
		function saveCallBack(event: any, isDebug: boolean) {
			let ruleText = $ruleInput.value.trim();
			let parseRuleResult = that.parseRuleStrToRule(ruleText);
			if (parseRuleResult.success) {
				let userRule = parseRuleResult.data!;
				if (isEdit) {
					that.setRule(ruleKey!, userRule);
				} else {
					that.addRule(userRule);
				}
				Qmsg.success("保存成功");
			} else {
				Qmsg.error(parseRuleResult.msg);
			}
		}
		/**
		 * 调试按钮的回调
		 * @param {PopsBtnCallBackEvent} event
		 */
		function debugCallBack(event: any) {
			let ruleText = $ruleInput.value.trim();
			let parseRuleResult = that.parseRuleStrToRule(ruleText);
			if (parseRuleResult.success) {
				let userRule = parseRuleResult.data!;
				NetDiskUserRuleDebug.showUI(userRule);
			} else {
				Qmsg.error(parseRuleResult.msg);
			}
		}
		/**
		 * 格式化按钮的回调
		 */
		function formatCallBack(event: any) {
			try {
				let ruleJSON = JSON.parse($ruleInput.value);
				let ruleJSONString = NetDiskUserRule.getFormatRule(ruleJSON);
				$ruleInput.value = ruleJSONString;
				Qmsg.success("格式化成功");
			} catch (error: any) {
				log.error(error);
				Qmsg.error(error.message, {
					html: true,
					timeout: 3500,
				});
			}
		}
		let dialog = NetDiskPops.confirm(
			{
				title: {
					text: titleText,
					position: "center",
				},
				content: {
					text: /*html*/ `<textarea class="netdisk-custom-rules" placeholder="请输入自定义规则"></textarea>`,
					html: true,
				},
				btn: {
					merge: true,
					mergeReverse: false,
					reverse: false,
					position: "space-between",
					ok: {
						text: "保存",
						callback: (eventDetails, event) => {
							saveCallBack(event, false);
						},
					},
					cancel: {
						text: "调试",
						callback: (eventDetails, event) => {
							debugCallBack(event);
						},
					},
					other: {
						enable: true,
						text: "格式化",
						type: "xiaomi-primary",
						callback: (eventDetails, event) => {
							formatCallBack(event);
						},
					},
				},
				class: "whitesevPopNetDiskCustomRules",
				style: this.getCSS(),
			},
			NetDiskUI.popsStyle.customRulesView
		);
		$ruleInput =
			dialog.$shadowRoot.querySelector<HTMLTextAreaElement>("textarea")!;
		if (isEdit) {
			let rule = this.getRule(ruleKey!)!;
			$ruleInput.value = this.getFormatRule(rule);
		} else {
			$ruleInput.value = this.getTemplateRule();
		}
	},
	/**
	 * 上下文环境
	 * @param rule
	 */
	getBindContext(rule: NetDiskUserCustomRule) {
		function setValue(key: string, value: any) {
			let localData = GM_getValue(NetDiskUserRule.dataKey);
			// @ts-ignore
			let ruleData = localData[rule.key];
			ruleData[key] = value;
			GM_setValue(NetDiskUserRule.dataKey, localData);
		}
		function getValue(key: string, defaultValue?: any) {
			let localData = GM_getValue(NetDiskUserRule.dataKey);
			// @ts-ignore
			let ruleData = localData[rule.key];
			return ruleData[key] ?? defaultValue;
		}
		function deleteValue(key: string) {
			let localData = GM_getValue(NetDiskUserRule.dataKey);
			// @ts-ignore
			let ruleData = localData[rule.key];
			Reflect.deleteProperty(ruleData, key);
			GM_setValue(NetDiskUserRule.dataKey, localData);
		}
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
			setValue: setValue,
			getValue: getValue,
			deleteValue: deleteValue,
		};
	},
	/**
	 * 把用户自定义规则进行转换成脚本规则
	 * @param localRule 用户的规则
	 */
	parseRule(localRule: NetDiskUserCustomRule[]): NetDiskRuleConfig[] {
		/**
		 * 规则转换
		 * 这里是把字符串转为正则
		 */
		function parseUserRuleToScriptRule(
			userRuleConfig: NetDiskUserCustomRule,
			ruleRegExp: NetDiskUserCustomRuleRegexp
		): NetDiskRegularOption {
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
				enable: NetDiskLocalData.function.enable(
					userRuleConfig.key,
					Boolean(userRuleConfig.setting.enable)
				),
				checkLinkValidity: NetDiskLocalData.function.checkLinkValidity(
					userRuleConfig.key,
					Boolean(userRuleConfig.setting.checkLinkValidity)
				),
				...otherRuleParams,
			} as NetDiskRegularOption;
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
						parseUserRuleToScriptRule(userRuleItemConfig, userRuleItem)
					);
				});
			} else {
				netDiskRuleConfig.rule.push(
					parseUserRuleToScriptRule(userRuleItemConfig, userRuleList)
				);
			}

			// 2. 转换setting
			if (userRuleItemConfig.setting) {
				// 其它的规则，也就是界面设置的规则
				/* 是否启用，初始化默认值 */
				this.initDefaultValue(
					NetDiskLocalDataKey.template.function.enable(ruleKey),
					Boolean(userRuleItemConfig.setting.enable)
				);
				// 添加默认值
				netDiskRuleConfig.setting!.configurationInterface!.function!.enable =
					Boolean(userRuleItemConfig.setting.enable);

				if (typeof userRuleItemConfig.setting["isBlank"] === "boolean") {
					/* 新标签页打开（旧） */
					this.initDefaultValue(
						NetDiskLocalDataKey.template.function.linkClickMode(ruleKey),
						"openBlank"
					);
					netDiskRuleConfig.setting!.configurationInterface!.function!.linkClickMode =
						"openBlank";
				}
				if (
					typeof userRuleItemConfig.setting.linkClickMode === "string" &&
					NetDiskLinkClickModeUtils.isAllowMode(
						userRuleItemConfig.setting.linkClickMode
					)
				) {
					/* 点击动作 */
					this.initDefaultValue(
						NetDiskLocalDataKey.template.function.linkClickMode(ruleKey),
						userRuleItemConfig.setting.linkClickMode
					);
					netDiskRuleConfig.setting!.configurationInterface!.function!.linkClickMode =
						"openBlank";
				}
				if (
					typeof userRuleItemConfig.setting.linkClickMode_extend === "object" &&
					Array.isArray(userRuleItemConfig.setting.linkClickMode_extend)
				) {
					userRuleItemConfig.setting.linkClickMode_extend.forEach(
						(extendMode) => {
							if (NetDiskLinkClickModeUtils.isAllowExtendMode(extendMode)) {
								// 判断是否初始化数组
								if (
									netDiskRuleConfig.setting!.configurationInterface!.function!
										.linkClickMode_extend == null
								) {
									netDiskRuleConfig.setting!.configurationInterface!.function!.linkClickMode_extend =
										[];
								}
								netDiskRuleConfig.setting!.configurationInterface!.function!.linkClickMode_extend.push(
									extendMode
								);
							}
						}
					);
				}
				if (
					typeof userRuleItemConfig.setting["openBlankWithCopyAccessCode"] ===
					"boolean"
				) {
					/* 跳转时复制访问码 */
					this.initDefaultValue(
						NetDiskLocalDataKey.template.linkClickMode_openBlank.openBlankWithCopyAccessCode(
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
						NetDiskLocalDataKey.template.function.checkLinkValidity(ruleKey),
						Boolean(userRuleItemConfig.setting["checkLinkValidity"])
					);
					netDiskRuleConfig.setting!.configurationInterface!.function!.checkLinkValidity =
						Boolean(userRuleItemConfig.setting["checkLinkValidity"]);
				}
				if (typeof userRuleItemConfig.setting["isForward"] === "boolean") {
					/* 直接进行scheme转发链接 */
					this.initDefaultValue(
						NetDiskLocalDataKey.template.schemeUri.enable(ruleKey),
						Boolean(userRuleItemConfig.setting["isForward"])
					);
					netDiskRuleConfig.setting!.configurationInterface!.schemeUri!.enable =
						Boolean(userRuleItemConfig.setting["isForward"]);
				}
				if (typeof userRuleItemConfig.setting["schemeUri"] === "string") {
					/* scheme转发的字符串格式 */
					this.initDefaultValue(
						NetDiskLocalDataKey.template.schemeUri.uri(ruleKey),
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
						NetDiskLocalDataKey.template.matchRange_text.before(ruleKey),
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
						NetDiskLocalDataKey.template.matchRange_text.after(ruleKey),
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
						NetDiskLocalDataKey.template.matchRange_html.before(ruleKey),
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
						NetDiskLocalDataKey.template.matchRange_html.after(ruleKey),
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
	 * @returns
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
	 * @param {NetDiskUserCustomRule} userRule
	 */
	addRule(userRule: NetDiskUserCustomRule) {
		let localRule = this.getAllRule();
		localRule.push(userRule);
		GM_setValue(NetDiskUserRule.key, localRule);
	},
	/**
	 * 设置规则到本地
	 * @param {string} oldRuleKey 旧规则的键名
	 * @param {NetDiskUserCustomRule[]|NetDiskUserCustomRule} userRule
	 */
	setRule(
		oldRuleKey: string,
		userRule: NetDiskUserCustomRule[] | NetDiskUserCustomRule
	) {
		if (Array.isArray(userRule)) {
			GM_setValue(NetDiskUserRule.key, userRule);
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
				log.error(["覆盖规则失败", userRule]);
				Qmsg.error("覆盖规则失败");
				return false;
			}
			this.setRule(oldRuleKey, localRule);
		}
	},
	/**
	 * 删除单条规则
	 * @param {string} ruleKey 规则的key名
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
		GM_deleteValue(NetDiskUserRule.key);
	},
	/**
	 * 获取本地所有的规则
	 */
	getAllRule() {
		let result = GM_getValue<(NetDiskUserCustomRule | NetDiskUserCustomRule)[]>(
			NetDiskUserRule.key,
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
		>(NetDiskUserRule.key, []);
		return localRule.find((item) => item.key === key);
	},
	/**
	 * 获取格式化后的规则
	 * @param {?NetDiskUserCustomRule} rule
	 */
	getFormatRule(rule?: NetDiskUserCustomRule) {
		return JSON.stringify(rule || this.getAllRule(), void 0, 4);
	},
};
