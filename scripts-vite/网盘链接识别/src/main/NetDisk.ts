import { NetDiskGlobalData } from "./data/NetDiskGlobalData";
import { DEBUG, GM_Menu, log, utils } from "@/env";
import Qmsg from "qmsg";
import { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import { NetDiskRuleUtils } from "./rule/NetDiskRuleUtils";
import Utils from "@whitesev/utils";
import { WebsiteRule } from "./website-rule/WebsiteRule";
import { WebsiteRuleDataKey } from "./data/NetDiskRuleDataKey";
import { NetDiskHandlerUtil } from "@/utils/NetDiskHandlerUtil";
import { CharacterMapping } from "./character-mapping/CharacterMapping";
import { Panel } from "@components/setting/panel";
import type { NetDiskDebugHandlerConfig } from "./debug/NetDiskDebug";

export const NetDisk = {
	$data: {
		/**
		 * 是否成功匹配到链接
		 */
		isMatchedLink: false,
		/**
		 * 剪贴板内容
		 */
		clipboardText: "",
	},
	/** 匹配信息 */
	$match: {
		/**
		 * 匹配到的链接信息
		 *
		 * Worker识别规则 -> 存储识别到的信息（访问码|分享码|规则下标...）
		 */
		matchedInfo: new Utils.Dictionary<string, UtilsDictionary<string, NetDiskDictData>>(),
		/**
		 * 黑名单-识别到的信息
		 *
		 * 如果Worker识别到的信息能在这里面找到对应的shareCode，则不会被识别
		 */
		blackMatchedInfo: new Utils.Dictionary<string, UtilsDictionary<string, NetDiskDictData>>(),
		/**
		 * （临时）链接字典
		 */
		tempMatchedInfo: new Utils.Dictionary<string, UtilsDictionary<string, NetDiskWorkerHandleObject>>(),
		/**
		 * 用于存储已匹配到的网盘规则名
		 * 只有单独的名
		 */
		matchedInfoRuleKey: new Set<string>(),
	},
	/** 规则 */
	$rule: {
		/** 执行匹配本文的规则 */
		ruleOption: {} as NetDiskMatchedRuleOption,
		/** 各个规则的设置项 */
		ruleSetting: {} as {
			[key: string]: NetDiskRuleSetting;
		},
		/** 各个规则 */
		rule: [] as NetDiskRuleOption[],
	},
	/** 额外规则，用于辅助处理 */
	$extraRule: {
		/**
		 * 使用该正则判断提取到的shareCode是否正确
		 */
		shareCodeNotMatchRegExpList: [
			/vipstyle|notexist|ajax|file|download|ptqrshow|xy-privacy/g,
			/comp|web|undefined|1125|unproved|console|account|favicon|setc/g,
		],
		/**
		 * 使用该正则判断提取到的accessCode是否正确
		 */
		accessCodeNotMatchRegExpList: [/^(font|http)/gi],
		/**
		 * 访问码需要去除的正则匹配规则
		 */
		accessCodeNeedRemoveStr: [
			"：",
			" ",
			":",
			"\n",
			"提取码",
			"密码",
			"?password=",
			"?pwd=",
			"&pwd=",
			"?p=",
			"访问码",
		],
		/**
		 * 当没有accessCode时，使用该正则去除不需要的字符串
		 */
		noAccessCodeRegExp: [
			/( |提取码:|\n密码：)/gi,
			/{#accessCode#}/gi,
			/{#encodeURI-accessCode#}|{#encodeURIComponent-accessCode#}/gi,
			/{#decodeURI-accessCode#}|{#decodeURIComponent-accessCode#}/gi,
			/(\?pwd=|&pwd=|\?password=|\?p=)/gi,
		],
	},
	/**
	 * 初始化
	 */
	init() {
		this.initLinkDict();
	},
	/**
	 * 初始化字典
	 */
	initLinkDict() {
		Object.keys(this.$rule.ruleOption).forEach((ruleKeyName) => {
			this.$match.matchedInfo.set(ruleKeyName, new utils.Dictionary());
			this.$match.blackMatchedInfo.set(ruleKeyName, new utils.Dictionary());
			this.$match.tempMatchedInfo.set(ruleKeyName, new utils.Dictionary());
		});

		// 这里是输出信息用的，无其它的作用
		let matchedUrlRuleList = WebsiteRule.getUrlMatchedRule();
		if (matchedUrlRuleList.length) {
			log.info("成功命中网站规则 ==> ", matchedUrlRuleList);
			GM_Menu.add({
				key: "matchedUrlRuleList",
				text: `🌏 命中网站规则 ${matchedUrlRuleList.length} 条`,
				autoReload: false,
				isStoreValue: false,
				showText(text) {
					return text;
				},
				callback: () => {
					log.info("当前网址：" + self.location.href);
					if (!Panel.isTopWindow()) {
						return;
					}
					alert("以下是命中的规则名：\n" + matchedUrlRuleList.map((item) => item.name).join("\n"));
				},
			});
		}
		let characterMapping = CharacterMapping.getUrlMatchedRule();
		if (characterMapping.length) {
			log.info("成功命中字符规则 ==> ", characterMapping);
			GM_Menu.add({
				key: "characterMapping",
				text: `🌏 命中字符规则 ${characterMapping.length} 条`,
				autoReload: false,
				isStoreValue: false,
				showText(text) {
					return text;
				},
				callback: () => {
					log.info("当前网址：" + self.location.href);
					if (!Panel.isTopWindow()) {
						return;
					}
					alert("以下是命中的规则名：\n" + characterMapping.map((item) => item.name).join("\n"));
				},
			});
		}
	},
	/**
	 * 处理链接，将匹配到的链接转为参数和密码存入字典中
	 * @param ruleKeyName 规则键名
	 * @param ruleIndex 规则的索引下标
	 * @param matchText 正在进行匹配的文本
	 */
	handleLink(handlerConfig: {
		/** 规则键名 */
		ruleKeyName: string;
		/** 规则的索引下标 */
		ruleIndex: number;
		/** 正在进行匹配的文本 */
		matchText: string;
	}) {
		let shareCode = this.handleShareCode(handlerConfig);
		if (utils.isNull(shareCode)) {
			return;
		}
		let accessCode = this.handleAccessCode(handlerConfig);
		accessCode = this.handleAccessCodeByUserRule({
			...handlerConfig,
			accessCode,
		});
		return {
			shareCode: shareCode,
			accessCode: accessCode,
		};
	},
	/**
	 * 对传入的url进行处理，返回shareCode
	 * @param handlerConfig 配置
	 */
	handleShareCode(handlerConfig: {
		/** 规则键名 */
		ruleKeyName: string;
		/** 规则的索引下标 */
		ruleIndex: number;
		/** 正在进行匹配的文本 */
		matchText: string;
		/**
		 * （可选）当前调试的配置
		 */
		debugConfig?: NetDiskDebugHandlerConfig;
	}) {
		/* 当前执行的规则 */
		let ruleConfig =
			handlerConfig?.debugConfig?.config ??
			this.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
		let shareCodeMatch = handlerConfig.matchText
			.match(ruleConfig.shareCode)
			?.filter((item) => utils.isNotNull(item));
		handlerConfig.debugConfig?.logCallBack?.({
			status: true,
			msg: [`正则: shareCode`, "作用: 获取shareCode", "结果: ", JSON.stringify(shareCodeMatch)],
		});
		if (utils.isNull(shareCodeMatch)) {
			DEBUG &&
				log.error(`Debug-匹配shareCode为空`, {
					匹配的文本: handlerConfig.matchText,
					规则: ruleConfig,
					正在使用的规则: ruleConfig.shareCode,
					网盘名称: handlerConfig.ruleKeyName,
					网盘名称索引下标: handlerConfig.ruleIndex,
				});
			handlerConfig.debugConfig?.logCallBack?.({
				status: false,
				msg: `匹配shareCode为空`,
			});
			return;
		}
		/* 匹配到的网盘链接，取第一个值就行 */
		let shareCode = shareCodeMatch[0];
		handlerConfig.debugConfig?.logCallBack?.({
			status: true,
			msg: [`取第一个值: ` + shareCode],
		});
		if (ruleConfig.shareCodeNeedRemoveStr) {
			let shareCodeNeedRemoveStrList = ruleConfig.shareCodeNeedRemoveStr;
			/* 删除ShareCode前面不需要的字符串 */
			if (!Array.isArray(shareCodeNeedRemoveStrList)) {
				shareCodeNeedRemoveStrList = [shareCodeNeedRemoveStrList];
			}
			for (const shareCodeRemoveRegExp of shareCodeNeedRemoveStrList) {
				/* 删除ShareCode前面不需要的字符串 */
				shareCode = shareCode.replace(shareCodeRemoveRegExp, "");
			}
			if (shareCodeNeedRemoveStrList.length) {
				handlerConfig.debugConfig?.logCallBack?.({
					status: true,
					msg: [
						`正则: shareCodeNeedRemoveStr`,
						"作用: 删除ShareCode前面不需要的字符串",
						`结果: ${shareCode}`,
					],
				});
			}
		}
		// 判断是否是黑名单中的分享码
		// 如果是，强制返回
		for (const shareCodeNotMatchRegExp of NetDisk.$extraRule.shareCodeNotMatchRegExpList) {
			if (shareCode.match(shareCodeNotMatchRegExp)) {
				DEBUG && log.error(`Debug-不可能的shareCode => ${shareCode}`);
				handlerConfig.debugConfig?.logCallBack?.({
					status: false,
					msg: [
						`正则: 内置的shareCodeNotMatchRegExpList`,
						"作用: 使用该正则判断提取到的shareCode是否正确",
						`结果: true 该shareCode不是正确的`,
					],
				});
				return;
			}
		}
		let shareCodeNotMatch = ruleConfig.shareCodeNotMatch;
		if (shareCodeNotMatch != null) {
			if (!Array.isArray(shareCodeNotMatch)) {
				shareCodeNotMatch = [shareCodeNotMatch];
			}
			for (const shareCodeNotMatchRegExp of shareCodeNotMatch) {
				if (shareCode.match(shareCodeNotMatchRegExp)) {
					DEBUG && log.error(`Debug-不可能的shareCode => ${shareCode}`);
					handlerConfig.debugConfig?.logCallBack?.({
						status: false,
						msg: [
							`正则: shareCodeNotMatch`,
							"作用: 用于判断提取到的shareCode是否是错误的shareCode",
							`结果: true 该shareCode不是正确的`,
						],
					});
					return;
				}
			}
		}
		/* %E7%BD%91%E7%9B%98 => 网盘 */
		shareCode = decodeURI(shareCode);
		handlerConfig.debugConfig?.logCallBack?.({
			status: true,
			msg: ["对shareCode进行解码: " + shareCode],
		});
		if (
			NetDiskGlobalData.shareCode.excludeIdenticalSharedCodes.value &&
			utils.isSameChars(shareCode, NetDiskGlobalData.shareCode.excludeIdenticalSharedCodesCoefficient.value)
		) {
			/* 排除掉由相同字符组成的分享码 */
			handlerConfig.debugConfig?.logCallBack?.({
				status: false,
				msg: ["已开启【排除分享码】且该分享码命中该规则"],
			});
			return;
		}
		/* 排除掉以http|https结尾的分享码 */
		if (shareCode.endsWith("http") || shareCode.endsWith("https")) {
			handlerConfig.debugConfig?.logCallBack?.({
				status: false,
				msg: ["该分享码以http|https结尾"],
			});
			return;
		}
		handlerConfig.debugConfig?.logCallBack?.({
			status: true,
			msg: "处理完毕的shareCode: " + shareCode,
		});
		return shareCode;
	},
	/**
	 * 对传入的url进行处理，返回accessCode
	 * @param handlerConfig 配置
	 * @returns "xxxx" || ""
	 */
	handleAccessCode(handlerConfig: {
		/** 规则键名 */
		ruleKeyName: string;
		/** 规则的索引下标 */
		ruleIndex: number;
		/** 正在进行匹配的文本 */
		matchText: string;
		/**
		 * （可选）当前调试的配置
		 */
		debugConfig?: NetDiskDebugHandlerConfig;
	}) {
		/* 当前执行正则匹配的规则 */
		let ruleConfig =
			handlerConfig.debugConfig?.config ??
			this.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
		let accessCode = "";
		if (!ruleConfig.checkAccessCode) {
			/* 不存在匹配提取码的正则 */
			handlerConfig.debugConfig?.logCallBack?.({
				status: true,
				msg: "因未配置规则checkAccessCode，默认accessCode的值为空",
			});
			return "";
		}
		let accessCodeMatch = handlerConfig.matchText.match(ruleConfig.checkAccessCode);
		handlerConfig.debugConfig?.logCallBack?.({
			status: true,
			msg: [
				`正则: checkAccessCode`,
				"作用: 用来判断link_innerText或者link_innerHTML匹配到的字符串中是否存在密码",
				`结果: `,
				JSON.stringify(accessCodeMatch),
			],
		});
		if (accessCodeMatch) {
			/* 匹配出带提取码的字符串 */
			let accessCodeMatchValue = accessCodeMatch[accessCodeMatch.length - 1];
			handlerConfig.debugConfig?.logCallBack?.({
				status: true,
				msg: "取最后一个值: " + accessCodeMatchValue,
			});
			/* 进去提取码匹配，且过滤掉null或undefined或空字符串 */
			let accessCodeMatchArray = accessCodeMatchValue
				.match(ruleConfig.accessCode)
				?.filter((item) => utils.isNotNull(item));
			handlerConfig.debugConfig?.logCallBack?.({
				status: true,
				msg: [
					`正则: accessCode`,
					"作用: 用来提取link_innerText或者link_innerHTML匹配到的字符串中的密码",
					`结果: `,
					JSON.stringify(accessCodeMatchArray),
				],
			});
			if (utils.isNull(accessCodeMatchArray)) {
				handlerConfig.debugConfig?.logCallBack?.({
					status: true,
					msg: "因↑匹配到的结果为空，默认accessCode的值为空",
				});
				return "";
			}
			if (accessCodeMatchArray.length) {
				// 取第一个值
				// 例如，匹配到的字符串是密码：oanm   大于150m
				// 如果是最后一个，那么会匹配到150m
				accessCode = accessCodeMatchArray[0];
				handlerConfig.debugConfig?.logCallBack?.({
					status: true,
					msg: "取第一个值: " + accessCode,
				});
			}
		}
		if (utils.isNotNull(accessCode)) {
			// 判断是否是黑名单中的访问码
			// 如果是，访问码置空
			for (const accessCodeNotMatchRegExp of NetDisk.$extraRule.accessCodeNotMatchRegExpList) {
				if (accessCode.match(accessCodeNotMatchRegExp)) {
					accessCode = "";
					handlerConfig.debugConfig?.logCallBack?.({
						status: true,
						msg: [
							`正则: 内置的accessCodeNotMatchRegExpList`,
							"作用: 使用该正则判断提取到的accessCode是否正确",
							`结果: true 重置accessCode为空`,
						],
					});
					break;
				}
			}
			let accessCodeNotMatchRegExpList = ruleConfig.acceesCodeNotMatch;
			if (accessCodeNotMatchRegExpList) {
				if (!Array.isArray(accessCodeNotMatchRegExpList)) {
					accessCodeNotMatchRegExpList = [accessCodeNotMatchRegExpList];
				}
				for (const accessCodeNotMatchRegExp of accessCodeNotMatchRegExpList) {
					if (accessCode.match(accessCodeNotMatchRegExp)) {
						accessCode = "";
						handlerConfig.debugConfig?.logCallBack?.({
							status: true,
							msg: [
								`正则: acceesCodeNotMatch`,
								"作用: 用于判断提取到的accessCode是否是错误的accessCode",
								`结果: true 重置accessCode为空`,
							],
						});
						break;
					}
				}
			}
			for (const accessCodeNeedRemoveStrRegExp of NetDisk.$extraRule.accessCodeNeedRemoveStr) {
				accessCode = NetDiskHandlerUtil.replaceText(accessCode, accessCodeNeedRemoveStrRegExp, "");
			}
			handlerConfig.debugConfig?.logCallBack?.({
				status: true,
				msg: [
					`正则: 内置的accessCodeNeedRemoveStr`,
					"作用: 用于处理提取到的accessCode删除部分不需要的字符串",
					`结果: ${accessCode}`,
				],
			});
			// 删除不需要的字符串
			let accessCodeNeedRemoveStr = ruleConfig.accessCodeNeedRemoveStr;
			if (accessCodeNeedRemoveStr) {
				accessCode = NetDiskHandlerUtil.replaceText(accessCode, accessCodeNeedRemoveStr, "");
				handlerConfig.debugConfig?.logCallBack?.({
					status: true,
					msg: [
						`正则: accessCodeNeedRemoveStr`,
						"作用: 用于处理提取到的accessCode删除部分不需要的字符串",
						`结果: true 重置accessCode为空`,
					],
				});
			}
		}
		handlerConfig.debugConfig?.logCallBack?.({
			status: true,
			msg: "处理完毕的accessCode: " + accessCode,
		});
		return accessCode;
	},
	/**
	 * 对accessCode二次处理，使用自定义的访问码规则
	 * @param handlerConfig 配置
	 */
	handleAccessCodeByUserRule(handlerConfig: {
		/** 规则键名 */
		ruleKeyName: string;
		/** 规则的索引下标 */
		ruleIndex: number;
		/** 访问码 */
		accessCode: AccessCodeType;
		/** 正在进行匹配的文本 */
		matchText: string;
	}) {
		/* 当前执行正则匹配的规则 */
		let ruleConfigList = WebsiteRule.getUrlMatchedRule();
		let result = handlerConfig.accessCode;

		for (let index = 0; index < ruleConfigList.length; index++) {
			const ruleConfig = ruleConfigList[index];
			let ruleData = WebsiteRule.getRuleData(ruleConfig);
			/** 自定义的访问码 */
			let customAccessCode = Reflect.get(
				ruleData,
				WebsiteRuleDataKey.features.customAccessCode(handlerConfig.ruleKeyName)
			);
			/** 是否启用 */
			let customAccessCodeEnable = Reflect.get(
				ruleData,
				WebsiteRuleDataKey.features.customAccessCodeEnable(handlerConfig.ruleKeyName)
			);
			if (customAccessCodeEnable && typeof customAccessCode === "string") {
				result = customAccessCode;
				DEBUG && log.success(`Debug-使用自定义网站规则中的提取码 ${handlerConfig.ruleKeyName} ${result}`);
				break;
			}
		}
		return result!;
	},
	/**
	 * 获取在弹窗中显示出的链接
	 * @param handlerConfig 配置
	 */
	handleLinkShow(handlerConfig: {
		/** 规则键名 */
		ruleKeyName: string;
		/** 规则的索引下标 */
		ruleIndex: number;
		/** 分享码 */
		shareCode: string;
		/** 访问码 */
		accessCode: AccessCodeType;
		/** （可选）匹配到的文本 */
		matchText?: string;
		/** （可选）如果规则不存在，会进行Toast提示，默认true */
		showToast?: boolean;
		/**
		 * （可选）当前调试的配置
		 */
		debugConfig?: NetDiskDebugHandlerConfig;
	}) {
		let checkFlag = handlerConfig.debugConfig?.config
			? true
			: this.checkHasRuleOption(handlerConfig.ruleKeyName, handlerConfig.ruleIndex);
		if (!checkFlag) {
			log.error(`BUG: ${handlerConfig.ruleKeyName}不存在，分析参数`, handlerConfig);
			(handlerConfig.showToast ?? true) && Qmsg.error(`规则：${handlerConfig.ruleKeyName}不存在`);
			return;
		}
		let ruleConfig =
			handlerConfig.debugConfig?.config ??
			NetDisk.$rule.ruleOption[handlerConfig.ruleKeyName][handlerConfig.ruleIndex];
		let uiLink = NetDiskRuleUtils.replaceParam(ruleConfig.uiLinkShow, {
			shareCode: handlerConfig.shareCode,
		});
		handlerConfig.debugConfig?.logCallBack?.({
			status: true,
			msg: [
				`正则: uiLinkShow`,
				"作用: 用于显示在弹窗中的字符串",
				"备注: 对shareCode进行参数替换",
				`结果: ${uiLink}`,
			],
		});
		if (typeof handlerConfig.accessCode === "string" && handlerConfig.accessCode.trim() != "") {
			// 替换{#accessCode#}占位符
			uiLink = NetDiskRuleUtils.replaceParam(uiLink, {
				accessCode: handlerConfig.accessCode,
			});
			handlerConfig.debugConfig?.logCallBack?.({
				status: true,
				msg: [
					`正则: uiLinkShow`,
					"作用: 用于显示在弹窗中的字符串",
					"备注: 对accessCode进行参数替换",
					`结果: ${uiLink}`,
				],
			});
		} else {
			uiLink = NetDiskHandlerUtil.replaceText(uiLink, NetDisk.$extraRule.noAccessCodeRegExp, "");
			handlerConfig.debugConfig?.logCallBack?.({
				status: true,
				msg: [
					`正则: 内置的noAccessCodeRegExp`,
					"作用: 因accessCode为空，使用该正则去除不需要的字符串",
					`结果: ${uiLink}`,
				],
			});
		}
		if (ruleConfig.paramMatch) {
			/**
			 * 当前字典
			 */
			let currentDict = NetDisk.$match.matchedInfo
				.get(handlerConfig.ruleKeyName)
				.get(handlerConfig.shareCode);
			handlerConfig.matchText = handlerConfig.matchText ?? currentDict?.matchText;
			if (utils.isNotNull(handlerConfig.matchText)) {
				let paramMatchArray = handlerConfig.matchText.match(ruleConfig.paramMatch);
				let replaceParamData: {
					[key: string]: string;
				} = {};
				if (paramMatchArray) {
					for (let index = 0; index < paramMatchArray.length; index++) {
						// $1,$2,$3....
						replaceParamData[`$${index}`] = paramMatchArray[index];
					}
				}
				uiLink = NetDiskRuleUtils.replaceParam(uiLink, replaceParamData);
				handlerConfig.debugConfig?.logCallBack?.({
					status: true,
					msg: [
						`正则: paramMatch`,
						`作用: 用于对matchText进行提取需要的关键内容，替换关键字：{#$1#}、{#$2#}...`,
						`参数: ` + JSON.stringify(replaceParamData, void 0, 4),
						`结果: ${uiLink}`,
					],
				});
			}
		}

		handlerConfig.debugConfig?.logCallBack?.({
			status: true,
			msg: "处理完毕的uiLink: " + uiLink,
		});
		return uiLink;
	},
	/**
	 *生成链接的存储的对象
	 * @param accessCode 访问码
	 * @param [ruleIndex=0] 规则的索引下标，默认为0
	 * @param isForceAccessCode 是否锁定访问码不允许修改，默认false
	 * @param matchText 匹配到的文本
	 */
	createLinkStorageInst(
		accessCode: AccessCodeType,
		ruleIndex: number = 0,
		isForceAccessCode: boolean = false,
		matchText: string
	) {
		return {
			accessCode,
			ruleIndex,
			isForceAccessCode,
			matchText,
		};
	},
	/**
	 * 判断规则是否存在
	 */
	checkHasRuleOption(ruleKeyName: string, ruleIndex?: number) {
		let ruleConfig = NetDisk.$rule.ruleOption?.[ruleKeyName];
		if (!Array.isArray(ruleConfig)) {
			return false;
		}
		if (typeof ruleIndex === "number") {
			if (ruleIndex < 0 || ruleConfig.length <= ruleIndex) {
				return false;
			}
		}
		return true;
	},
};
