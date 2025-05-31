import { $, DOMUtils, httpx, log, utils } from "@/env";
import { NetDiskParse } from "../parse/NetDiskParse";
import Qmsg from "qmsg";
import { NetDiskAutoFillAccessCode } from "../auto-fill-accesscode/NetDiskAutoFillAccessCode";
import { NetDiskFilterScheme } from "../scheme/NetDiskFilterScheme";
import { NetDiskRuleData } from "../data/NetDiskRuleData";
import { NetDisk } from "../NetDisk";
import { NetDiskRuleUtils } from "../rule/NetDiskRuleUtils";
import { NetDiskHandlerUtil } from "@/utils/NetDiskHandlerUtil";
import { GM_openInTab } from "ViteGM";

export const NetDiskLinkClickModeUtils = {
	/**
	 * 获取用于跳转的url
	 * @param ruleKeyName
	 * @param ruleIndex
	 * @param shareCode
	 * @param accessCode
	 */
	getBlankUrl(
		ruleKeyName: string,
		ruleIndex: number,
		shareCode: string,
		accessCode: AccessCodeType
	) {
		let ruleConfig = NetDisk.$rule.ruleOption[ruleKeyName][ruleIndex];
		let blankUrl = ruleConfig.blank;
		if (shareCode) {
			blankUrl = NetDiskRuleUtils.replaceParam(blankUrl, {
				shareCode: shareCode,
			});
		}
		if (accessCode && accessCode !== "") {
			blankUrl = NetDiskRuleUtils.replaceParam(blankUrl, {
				accessCode: accessCode,
			});
		} else {
			blankUrl = NetDiskHandlerUtil.replaceText(
				blankUrl,
				NetDisk.$extraRule.noAccessCodeRegExp,
				""
			);
		}
		/**
		 * 当前字典
		 */
		let currentDict = NetDisk.$match.matchedInfo
			.get(ruleKeyName)
			.get(shareCode);
		if (ruleConfig.paramMatch) {
			let paramMatchArray = currentDict.matchText.match(ruleConfig.paramMatch)!;
			let replaceParamData: {
				[key: string]: string;
			} = {};
			for (let index = 0; index < paramMatchArray.length; index++) {
				replaceParamData[`$${index}`] = paramMatchArray[index];
			}
			blankUrl = NetDiskRuleUtils.replaceParam(blankUrl, replaceParamData);
		}
		return blankUrl;
	},
	/**
	 * 获取用于复制到剪贴板的网盘信息
	 * @param ruleKeyName
	 * @param ruleIndex
	 * @param shareCode
	 * @param accessCode
	 */
	getCopyUrlInfo(
		ruleKeyName: string,
		ruleIndex: number,
		shareCode: string,
		accessCode: AccessCodeType
	) {
		let ruleConfig = NetDisk.$rule.ruleOption[ruleKeyName][ruleIndex];
		let copyUrl = ruleConfig["copyUrl"];
		if (shareCode) {
			copyUrl = NetDiskRuleUtils.replaceParam(copyUrl, {
				shareCode: shareCode,
			});
		}
		if (accessCode && accessCode !== "") {
			copyUrl = NetDiskRuleUtils.replaceParam(copyUrl, {
				accessCode: accessCode,
			});
		} else {
			copyUrl = NetDiskHandlerUtil.replaceText(
				copyUrl,
				NetDisk.$extraRule.noAccessCodeRegExp,
				""
			);
		}
		/**
		 * 当前字典
		 */
		let currentDict = NetDisk.$match.matchedInfo
			.get(ruleKeyName)
			.get(shareCode);
		if (ruleConfig.paramMatch) {
			let paramMatchArray = currentDict.matchText.match(ruleConfig.paramMatch)!;
			let replaceParamData: {
				[key: string]: string;
			} = {};
			for (let index = 0; index < paramMatchArray.length; index++) {
				replaceParamData[`$${index}`] = paramMatchArray[index];
			}
			copyUrl = NetDiskRuleUtils.replaceParam(copyUrl, replaceParamData);
		}
		return copyUrl;
	},
};

/** 链接点击动作 */
export const NetDiskLinkClickMode = {
	/**
	 * 复制到剪贴板
	 * @param ruleKeyName 规则键名
	 * @param ruleIndex 规则的索引下标
	 * @param shareCode 分享码
	 * @param accessCode 提取码
	 * @param toastText 复制成功的提示的文字
	 */
	copy(
		ruleKeyName: string,
		ruleIndex: number,
		shareCode: string,
		accessCode: AccessCodeType,
		toastText: string = "已复制"
	) {
		utils
			.setClip(
				NetDiskLinkClickModeUtils.getCopyUrlInfo(
					ruleKeyName,
					ruleIndex,
					shareCode,
					accessCode
				)
			)
			.then((status) => {
				if (status) {
					Qmsg.success(toastText);
				} else {
					Qmsg.error("执行复制失败", { consoleLogContent: true });
				}
			})
			.catch(() => {
				Qmsg.error("执行复制失败", { consoleLogContent: true });
			});
	},
	/**
	 * 链接解析
	 * @param ruleKeyName 规则键名
	 * @param ruleIndex 规则的索引下标
	 * @param shareCode 分享码
	 * @param accessCode 提取码
	 */
	async parseFile(
		ruleKeyName: string,
		ruleIndex: number,
		shareCode: string,
		accessCode: AccessCodeType
	) {
		log.success(`链接解析：`, [...arguments]);
		if (NetDiskParse.rule[ruleKeyName as keyof typeof NetDiskParse.rule]) {
			let parseObj = new NetDiskParse.rule[
				ruleKeyName as keyof typeof NetDiskParse.rule
			]();
			await parseObj.init(ruleIndex, shareCode, accessCode);
		} else {
			log.error(`${ruleKeyName} 未配置解析函数`, [
				ruleKeyName,
				ruleIndex,
				shareCode,
				accessCode,
			]);
			Qmsg.error("该链接未配置解析函数");
		}
	},
	/**
	 * 新标签页打开
	 * @param url 跳转的网址
	 * @param ruleKeyName 规则键名
	 * @param ruleIndex 规则的索引下标
	 * @param shareCode 分享码
	 * @param accessCode 提取码
	 * @param isOpenInBackEnd 是否使用后台打开，默认false
	 */
	openBlankUrl(
		url: string,
		ruleKeyName: string,
		ruleIndex: number,
		shareCode: string,
		accessCode: AccessCodeType,
		isOpenInBackEnd: boolean = false
	) {
		log.success(`新标签页打开${isOpenInBackEnd ? "（后台打开）" : ""}`, [
			...arguments,
		]);
		if (NetDiskAutoFillAccessCode.$data.enable) {
			NetDiskAutoFillAccessCode.addValue({
				url: url,
				ruleKeyName: ruleKeyName,
				ruleIndex: ruleIndex,
				shareCode: shareCode,
				accessCode: accessCode!,
				time: Date.now(),
			});
		}
		if (NetDiskFilterScheme.isForwardBlankLink(ruleKeyName)) {
			url = NetDiskFilterScheme.parseDataToSchemeUri(ruleKeyName, url);
		}
		/* 百度网盘会拒绝referrer不安全访问 */
		$("meta[name='referrer']")?.setAttribute("content", "no-referrer");

		/**
		 * 新标签页打开链接
		 */
		let openUrl = () => {
			if (isOpenInBackEnd) {
				// 后台打开
				GM_openInTab(url, {
					active: false,
				});
			} else {
				// 新标签页打开（自动获取焦点）
				try {
					let blankWindow = window.open(url, "_blank");
					if (blankWindow) {
						blankWindow.focus();
					}
				} catch (error) {
					log.error(error, url);
					let $blank = DOMUtils.createElement("a");
					$blank.setAttribute("href", url);
					$blank.setAttribute("target", "_blank");
					$blank.click();
					$blank.remove();
				}
			}
		};
		if (
			utils.isNotNull(accessCode) &&
			NetDiskRuleData.linkClickMode_openBlank.openBlankWithCopyAccessCode(
				ruleKeyName
			)
		) {
			/* 等待复制完毕再跳转 */
			utils.setClip(accessCode).then(() => {
				openUrl();
			});
		} else {
			openUrl();
		}
	},
	/**
	 * 将链接转为Scheme格式并打开
	 * @param ruleKeyName 规则键名
	 * @param ruleIndex 规则的索引下标
	 * @param shareCode
	 * @param accessCode
	 */
	openBlankWithScheme(
		ruleKeyName: string,
		ruleIndex: number,
		shareCode: string,
		accessCode: AccessCodeType
	) {
		log.success("scheme新标签页打开", [...arguments]);
		let url = NetDiskLinkClickModeUtils.getBlankUrl(
			ruleKeyName,
			ruleIndex,
			shareCode,
			accessCode
		);
		url = NetDiskFilterScheme.parseDataToSchemeUri(ruleKeyName, url);
		window.open(url, "_blank");
	},
};
