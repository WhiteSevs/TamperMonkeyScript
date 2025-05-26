import { NetDiskGlobalData } from "./data/NetDiskGlobalData";
import { GM_Menu, log, utils } from "@/env";
import Qmsg from "qmsg";
import { UtilsDictionary } from "@whitesev/utils/dist/types/src/Dictionary";
import { NetDiskRuleUtils } from "./rule/NetDiskRuleUtils";
import { NetDiskRuleConfig, type NetDiskRuleSetting } from "./rule/NetDiskRule";
import Utils from "@whitesev/utils";
import { WebsiteRule } from "./website-rule/WebsiteRule";
import { WebsiteRuleDataKey } from "./data/NetDiskRuleDataKey";
import { NetDiskHandlerUtil } from "@/utils/NetDiskHandlerUtil";
import { CharacterMapping } from "./character-mapping/CharacterMapping";
import { PopsPanel } from "@/setting/panel";

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
		matchedInfo: new Utils.Dictionary<
			string,
			UtilsDictionary<string, NetDiskDictData>
		>(),
		/**
		 * 黑名单-识别到的信息
		 *
		 * 如果Worker识别到的信息能在这里面找到对应的shareCode，则不会被识别
		 */
		blackMatchedInfo: new Utils.Dictionary<
			string,
			UtilsDictionary<string, NetDiskDictData>
		>(),
		/**
		 * （临时）链接字典
		 */
		tempMatchedInfo: new Utils.Dictionary<
			string,
			UtilsDictionary<string, NetDiskHandleObject>
		>(),
		/**
		 * 用于存储已匹配到的网盘规则名
		 * 只有单独的名
		 */
		matchedInfoRuleKey: new Set<string>(),
	},
	/** 规则 */
	$rule: {
		/** 执行匹配本文的规则 */
		matchRule: {} as NetDiskMatchRule,
		/** 各个网盘规则的设置项 */
		ruleSetting: {} as {
			[key: string]: NetDiskRuleSetting;
		},
		/** 各个网盘规则 */
		rule: [] as NetDiskRuleConfig[],
	},
	/** 额外规则，用于辅助处理 */
	$extraRule: {
		/**
		 * 使用该正则判断提取到的shareCode是否正确
		 */
		shareCodeNotMatchRegexpList: [
			/vipstyle|notexist|ajax|file|download|ptqrshow|xy-privacy/g,
			/comp|web|undefined|1125|unproved|console|account|favicon|setc/g,
		],
		/**
		 * 使用该正则判断提取到的accessCode是否正确
		 */
		accessCodeNotMatchRegexpList: [/^(font)/gi],
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
		Object.keys(this.$rule.matchRule).forEach((netDiskName) => {
			this.$match.matchedInfo.set(netDiskName, new utils.Dictionary());
			this.$match.blackMatchedInfo.set(netDiskName, new utils.Dictionary());
			this.$match.tempMatchedInfo.set(netDiskName, new utils.Dictionary());
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
					if (!PopsPanel.isTopWindow()) {
						return;
					}
					alert(
						"以下是命中的规则名：\n" +
							matchedUrlRuleList.map((item) => item.name).join("\n")
					);
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
					if (!PopsPanel.isTopWindow()) {
						return;
					}
					alert(
						"以下是命中的规则名：\n" +
							characterMapping.map((item) => item.name).join("\n")
					);
				},
			});
		}
	},
	/**
	 * 处理链接，将匹配到的链接转为参数和密码存入字典中
	 * @param netDiskName 网盘名称
	 * @param netDiskIndex 网盘名称的索引下标
	 * @param matchText 正在进行匹配的文本
	 */
	handleLink(netDiskName: string, netDiskIndex: number, matchText: string) {
		let shareCode = this.handleShareCode(netDiskName, netDiskIndex, matchText);
		if (utils.isNull(shareCode)) {
			return;
		}
		let accessCode = this.handleAccessCode(
			netDiskName,
			netDiskIndex,
			matchText
		);
		accessCode = this.handleAccessCodeByUserRule(
			netDiskName,
			accessCode,
			matchText
		);
		return {
			shareCode: shareCode,
			accessCode: accessCode,
		};
	},
	/**
	 * 对传入的url进行处理，返回shareCode
	 * @param netDiskName 网盘名称
	 * @param netDiskIndex 网盘名称索引下标
	 * @param matchText 正在进行匹配的文本
	 */
	handleShareCode(
		netDiskName: string,
		netDiskIndex: number,
		matchText: string
	) {
		/* 当前执行的规则 */
		let netDiskMatchRegular =
			NetDisk.$rule.matchRule[netDiskName][netDiskIndex];
		let shareCodeMatch = matchText
			.match(netDiskMatchRegular.shareCode)
			?.filter((item) => utils.isNotNull(item));
		if (utils.isNull(shareCodeMatch)) {
			log.error(`匹配shareCode为空`, {
				匹配的文本: matchText,
				规则: netDiskMatchRegular,
				正在使用的规则: netDiskMatchRegular.shareCode,
				网盘名称: netDiskName,
				网盘名称索引下标: netDiskIndex,
			});
			return;
		}
		/* 匹配到的网盘链接，取第一个值就行 */
		let shareCode = shareCodeMatch[0];
		if (netDiskMatchRegular.shareCodeNeedRemoveStr) {
			/* 删除ShareCode前面不需要的字符串 */
			shareCode = shareCode.replace(
				netDiskMatchRegular.shareCodeNeedRemoveStr,
				""
			);
		}
		let shareCodeNotMatch = netDiskMatchRegular.shareCodeNotMatch;
		if (shareCodeNotMatch != void 0 && shareCode.match(shareCodeNotMatch)) {
			log.error(`不可能的shareCode => ${shareCode}`);
			return;
		}
		for (const shareCodeNotMatchRegexp of NetDisk.$extraRule
			.shareCodeNotMatchRegexpList) {
			if (shareCode.match(shareCodeNotMatchRegexp)) {
				log.error(`不可能的shareCode => ${shareCode}`);
				return;
			}
		}
		/* %E7%BD%91%E7%9B%98 => 网盘 */
		shareCode = decodeURI(shareCode);
		if (
			NetDiskGlobalData.shareCode.excludeIdenticalSharedCodes.value &&
			utils.isSameChars(
				shareCode,
				NetDiskGlobalData.shareCode.excludeIdenticalSharedCodesCoefficient.value
			)
		) {
			/* 排除掉由相同字符组成的分享码 */
			return;
		}
		/* 排除掉以http|https结尾的分享码 */
		if (shareCode.endsWith("http") || shareCode.endsWith("https")) {
			return;
		}
		return shareCode;
	},
	/**
	 * 对传入的url进行处理，返回accessCode
	 * @param netDiskName 网盘名称
	 * @param netDiskIndex 网盘名称索引下标
	 * @param matchText 正在进行匹配的文本
	 * @returns "xxxx" || ""
	 */
	handleAccessCode(
		netDiskName: string,
		netDiskIndex: number,
		matchText: string
	): string {
		/* 当前执行正则匹配的规则 */
		let netDiskMatchRegular = this.$rule.matchRule[netDiskName][netDiskIndex];
		let accessCode = "";
		if (!netDiskMatchRegular.checkAccessCode) {
			/* 不存在匹配提取码的正则 */
			return "";
		}
		let accessCodeMatch = matchText.match(netDiskMatchRegular.checkAccessCode);
		if (accessCodeMatch) {
			/* 匹配出带提取码的字符串 */
			let accessCodeMatchValue = accessCodeMatch[accessCodeMatch.length - 1];
			/* 进去提取码匹配，且过滤掉null或undefined或空字符串 */
			let accessCodeMatchArray = accessCodeMatchValue
				.match(netDiskMatchRegular.accessCode)
				?.filter((item) => utils.isNotNull(item));
			if (utils.isNull(accessCodeMatchArray)) {
				return "";
			}
			if (accessCodeMatchArray.length) {
				/* 取第一个值 */
				/**
				 * 例如，匹配到的字符串是密码：oanm   大于150m
				 * 如果是最后一个，那么会匹配到150m
				 */
				accessCode = accessCodeMatchArray[0];
				if (accessCode.startsWith("http")) {
					/* 排除不可能的accessCode */
					accessCode = "";
				}
			}
		}
		if (utils.isNotNull(accessCode)) {
			for (const accessCodeNotMatchRegexp of NetDisk.$extraRule
				.accessCodeNotMatchRegexpList) {
				if (accessCode.match(accessCodeNotMatchRegexp)) {
					accessCode = "";
					break;
				}
			}
			if (
				netDiskMatchRegular.acceesCodeNotMatch &&
				accessCode.match(netDiskMatchRegular.acceesCodeNotMatch)
			) {
				accessCode = "";
			}
		}
		return accessCode;
	},
	/**
	 * 对accessCode二次处理，使用自定义的访问码规则
	 * @param netDiskName 网盘名称
	 * @param accessCode 访问码
	 * @param matchText 匹配到的文本
	 */
	handleAccessCodeByUserRule(
		netDiskName: string,
		accessCode: string,
		matchText: string
	): string {
		let matchedUrlRuleList = WebsiteRule.getUrlMatchedRule();
		let result = accessCode;

		for (let index = 0; index < matchedUrlRuleList.length; index++) {
			const rule = matchedUrlRuleList[index];
			let ruleData = WebsiteRule.getRuleData(rule);
			/** 自定义的访问码 */
			let customAccessCode = Reflect.get(
				ruleData,
				WebsiteRuleDataKey.features.customAccessCode(netDiskName)
			);
			/** 是否启用 */
			let customAccessCodeEnable = Reflect.get(
				ruleData,
				WebsiteRuleDataKey.features.customAccessCodeEnable(netDiskName)
			);
			if (customAccessCodeEnable && typeof customAccessCode === "string") {
				result = customAccessCode;
				log.success(`使用自定义网站规则中的提取码 ${netDiskName} ${result}`);
				break;
			}
		}
		return result;
	},
	/**
	 * 获取在弹窗中显示出的链接
	 * @param netDiskName 网盘名称，指NetDisk.regular的内部键名
	 * @param netDiskIndex 网盘名称索引下标
	 * @param shareCode 分享码
	 * @param accessCode 访问码
	 * @param matchText 匹配到的文本
	 */
	handleLinkShow(
		netDiskName: string,
		netDiskIndex: number,
		shareCode: string,
		accessCode: string,
		matchText?: string
	) {
		let netDiskMatchRegular =
			NetDisk.$rule.matchRule[netDiskName][netDiskIndex];
		if (netDiskMatchRegular == void 0) {
			Qmsg.error("BUG: 获取uiLink规则失败");
			log.error(
				"BUG: 分析参数",
				netDiskName,
				netDiskIndex,
				shareCode,
				accessCode
			);
			throw new TypeError("获取uiLink规则失败");
		}
		let uiLink = NetDiskRuleUtils.replaceParam(
			netDiskMatchRegular["uiLinkShow"],
			{
				shareCode: shareCode,
			}
		);
		if (typeof accessCode === "string" && accessCode.trim() != "") {
			// 替换{#accessCode#}占位符
			uiLink = NetDiskRuleUtils.replaceParam(uiLink, {
				accessCode: accessCode,
			});
		} else {
			uiLink = NetDiskHandlerUtil.replaceText(
				uiLink,
				NetDisk.$extraRule.noAccessCodeRegExp,
				""
			);
		}
		if (netDiskMatchRegular.paramMatch) {
			/**
			 * 当前字典
			 */
			let currentDict = NetDisk.$match.matchedInfo
				.get(netDiskName)
				.get(shareCode);
			matchText = matchText ?? currentDict?.matchText;
			if (utils.isNotNull(matchText)) {
				let paramMatchArray = matchText.match(netDiskMatchRegular.paramMatch);
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
			}
		}
		return uiLink;
	},
	/**
	 * 获取已匹配到的链接的存储的对象
	 * @param accessCode 访问码
	 * @param netDiskIndex 下标，默认0
	 * @param isForceAccessCode 是否锁定访问码不允许修改，默认false
	 * @param matchText 匹配到的文本
	 */
	getLinkDickObj(
		accessCode: string,
		netDiskIndex: number = 0,
		isForceAccessCode: boolean = false,
		matchText: string
	) {
		return {
			accessCode: accessCode,
			netDiskIndex: netDiskIndex,
			isForceAccessCode: isForceAccessCode,
			matchText: matchText,
		};
	},
};
