import { httpx, log, utils } from "@/env";
import { NetDiskParse } from "../parse/NetDiskParse";
import Qmsg from "qmsg";
import { NetDiskAutoFillAccessCode } from "../auto-fill-accesscode/NetDiskAutoFillAccessCode";
import { NetDiskFilterScheme } from "../scheme/NetDiskFilterScheme";
import { NetDiskRuleData } from "../data/NetDiskRuleData";
import { NetDiskGlobalData } from "../data/NetDiskGlobalData";
import { NetDisk } from "../NetDisk";
import { NetDiskRuleUtils } from "../rule/NetDiskRuleUtils";

export type NetDiskRuleSettingConfigurationInterface_linkClickMode =
	| "copy"
	| "openBlank";

export type NetDiskRuleSettingConfigurationInterface_linkClickMode_extend =
	| "parseFile";

export type NetDiskRuleSettingConfigurationInterface_linkClickMode_all =
	| NetDiskRuleSettingConfigurationInterface_linkClickMode
	| NetDiskRuleSettingConfigurationInterface_linkClickMode_extend;

export const NetDiskLinkClickModeUtils = {
	/**
	 * 判断是否是允许的点击动作
	 * @param modeText 点击动作
	 */
	isAllowMode(
		modeText: string | NetDiskRuleSettingConfigurationInterface_linkClickMode
	) {
		let mode: NetDiskRuleSettingConfigurationInterface_linkClickMode[] = [
			"copy",
			"openBlank",
		];
		return mode.includes(modeText as any);
	},
	/**
	 * 判断是否是允许的扩展点击动作
	 * @param modeText 点击动作
	 */
	isAllowExtendMode(
		modeText:
			| string
			| NetDiskRuleSettingConfigurationInterface_linkClickMode_extend
	) {
		let extend_mode: NetDiskRuleSettingConfigurationInterface_linkClickMode_extend[] =
			["parseFile"];
		return extend_mode.includes(modeText as any);
	},
	/**
	 * 获取用于跳转的url
	 * @param netDiskName
	 * @param netDiskIndex
	 * @param shareCode
	 * @param accessCode
	 */
	getBlankUrl(
		netDiskName: string,
		netDiskIndex: number,
		shareCode: string,
		accessCode: string
	) {
		let regularOption = NetDisk.matchRule[netDiskName][netDiskIndex];
		let blankUrl = regularOption.blank;
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
			blankUrl = blankUrl.replace(NetDisk.noAccessCodeRegExp, "");
		}
		/**
		 * 当前字典
		 */
		let currentDict = NetDisk.linkDict.get(netDiskName).get(shareCode);
		if (regularOption.paramMatch) {
			let paramMatchArray = currentDict.matchText.match(
				regularOption.paramMatch
			)!;
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
	 * @param netDiskName
	 * @param netDiskIndex
	 * @param shareCode
	 * @param accessCode
	 */
	getCopyUrlInfo(
		netDiskName: string,
		netDiskIndex: number,
		shareCode: string,
		accessCode: string
	) {
		let regularOption = NetDisk.matchRule[netDiskName][netDiskIndex];
		let copyUrl = regularOption["copyUrl"];
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
			copyUrl = copyUrl.replace(NetDisk.noAccessCodeRegExp, "");
		}
		/**
		 * 当前字典
		 */
		let currentDict = NetDisk.linkDict.get(netDiskName).get(shareCode);
		if (regularOption.paramMatch) {
			let paramMatchArray = currentDict.matchText.match(
				regularOption.paramMatch
			)!;
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
	/**
	 * 获取重定向后的直链
	 * @param url
	 * @param userAgent 用户代理字符串
	 */
	async getRedirectFinalUrl(url: string, userAgent: string) {
		if (!NetDiskGlobalData.function.getTheDirectLinkAfterRedirection.value) {
			return url;
		}
		Qmsg.success("获取重定向后的直链");
		log.info("开始获取重定向后的直链");
		let headResp = await httpx.head({
			url: url,
			headers: {
				"User-Agent": userAgent,
				Referer: window.location.origin,
			},
		});
		if (headResp.status) {
			return headResp.data.finalUrl;
		} else {
			return url;
		}
	},
};

/** 链接点击动作 */
export const NetDiskLinkClickMode = {
	/**
	 * 复制到剪贴板
	 * @param netDiskName 网盘名
	 * @param netDiskIndex 网盘索引
	 * @param shareCode 分享码
	 * @param accessCode 提取码
	 * @param toastText 复制成功的提示的文字
	 */
	copy(
		netDiskName: string,
		netDiskIndex: number,
		shareCode: string,
		accessCode: string,
		toastText: string = "已复制"
	) {
		utils.setClip(
			NetDiskLinkClickModeUtils.getCopyUrlInfo(
				netDiskName,
				netDiskIndex,
				shareCode,
				accessCode
			)
		);
		Qmsg.success(toastText);
	},
	/**
	 * 网盘链接解析
	 * @param netDiskName 网盘名称
	 * @param netDiskIndex 网盘名称索引下标
	 * @param shareCode 分享码
	 * @param accessCode 提取码
	 */
	async parseFile(
		netDiskName: string,
		netDiskIndex: number,
		shareCode: string,
		accessCode: string
	) {
		Qmsg.info("正在获取直链");
		if (
			NetDiskParse.netDisk[netDiskName as keyof typeof NetDiskParse.netDisk]
		) {
			let parseObj = new NetDiskParse.netDisk[
				netDiskName as keyof typeof NetDiskParse.netDisk
			]();
			await parseObj.init(netDiskIndex, shareCode, accessCode);
		} else {
			log.error(`${netDiskName} 不存在解析`);
			Qmsg.error("该链接不存在解析功能");
		}
	},
	/**
	 * 新标签页打开
	 * @param url 跳转的网址
	 * @param netDiskName 网盘名称
	 * @param netDiskIndex 网盘索引
	 * @param shareCode 分享码
	 * @param accessCode 提取码
	 */
	openBlank(
		url: string,
		netDiskName: string,
		netDiskIndex: number,
		shareCode: string,
		accessCode: string
	) {
		log.success(["新标签页打开", [...arguments]]);
		if (NetDiskAutoFillAccessCode.$data.enable) {
			NetDiskAutoFillAccessCode.setValue({
				url: url,
				netDiskName: netDiskName,
				netDiskIndex: netDiskIndex,
				shareCode: shareCode,
				accessCode: accessCode,
			});
		}
		if (NetDiskFilterScheme.isForwardBlankLink(netDiskName)) {
			url = NetDiskFilterScheme.parseDataToSchemeUri(netDiskName, url);
		}
		/* 百度网盘会拒绝referrer不安全访问 */
		document
			.querySelector("meta[name='referrer']")
			?.setAttribute("content", "no-referrer");
		if (
			utils.isNotNull(accessCode) &&
			NetDiskRuleData.linkClickMode_openBlank.openBlankWithCopyAccessCode(
				netDiskName
			)
		) {
			/* 等待复制完毕再跳转 */
			utils.setClip(accessCode).then(() => {
				window.open(url, "_blank");
			});
		} else {
			window.open(url, "_blank");
		}
	},
	/**
	 * 将链接转为Scheme格式并打开
	 * @param netDiskName 网盘名称
	 * @param netDiskIndex 网盘名称索引下标
	 * @param shareCode
	 * @param accessCode
	 */
	openBlankWithScheme(
		netDiskName: string,
		netDiskIndex: number,
		shareCode: string,
		accessCode: string
	) {
		let url = NetDiskLinkClickModeUtils.getBlankUrl(
			netDiskName,
			netDiskIndex,
			shareCode,
			accessCode
		);
		url = NetDiskFilterScheme.parseDataToSchemeUri(netDiskName, url);
		window.open(url, "_blank");
	},
};
