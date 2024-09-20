import { log, utils } from "@/env";
import { NetDisk } from "../NetDisk";
import { NetDiskGlobalData } from "../data/NetDiskGlobalData";
import { NetDiskRuleUtils } from "../rule/NetDiskRuleUtils";

export const NetDiskDebug = {
	/**
	 * 对传入的url进行处理，返回shareCode
	 * @param {string} matchText 正在进行匹配的文本
	 * @param {NetDiskMatchRuleOption} regular 当前执行的规则
	 * @param {(logData: NetDiskDebugLogData)=>void} logCallBack 日志回调
	 */
	handleShareCode(
		matchText: string,
		regular: NetDiskMatchRuleOption,
		logCallBack: (logData: NetDiskDebugLogData) => void
	) {
		let shareCodeMatch = matchText
			.match(regular.shareCode)
			?.filter((item) => utils.isNotNull(item));
		logCallBack({
			status: true,
			msg: [
				`正则: shareCode`,
				"作用: 获取shareCode",
				"结果: ",
				JSON.stringify(shareCodeMatch),
			],
		});
		if (utils.isNull(shareCodeMatch)) {
			logCallBack({
				status: false,
				msg: `匹配shareCode为空`,
			});
			return;
		}
		/* 匹配到的网盘链接，取第一个值就行 */
		let shareCode = shareCodeMatch[0];
		logCallBack({
			status: true,
			msg: [`取第一个值: ` + shareCode],
		});
		if (regular.shareCodeNeedRemoveStr) {
			/* 删除ShareCode前面不需要的字符串 */
			shareCode = shareCode.replace(regular.shareCodeNeedRemoveStr, "");
			logCallBack({
				status: true,
				msg: [
					`正则: shareCodeNeedRemoveStr`,
					"作用: 删除ShareCode前面不需要的字符串",
					`结果: ${shareCode}`,
				],
			});
		}
		let shareCodeNotMatch = regular.shareCodeNotMatch;
		if (shareCodeNotMatch != void 0 && shareCode.match(shareCodeNotMatch)) {
			log.error(`不可能的shareCode => ${shareCode}`);
			logCallBack({
				status: false,
				msg: [
					`正则: shareCodeNotMatch`,
					"作用: 用于判断提取到的shareCode是否是错误的shareCode",
					`结果: true 该shareCode不是正确的`,
				],
			});
			return;
		}
		for (const shareCodeNotMatchRegexp of NetDisk.shareCodeNotMatchRegexpList) {
			if (shareCode.match(shareCodeNotMatchRegexp)) {
				log.error(`不可能的shareCode => ${shareCode}`);
				logCallBack({
					status: false,
					msg: [
						`正则: 内置的shareCodeNotMatchRegexpList`,
						"作用: 使用该正则判断提取到的shareCode是否正确",
						`结果: true 该shareCode不是正确的`,
					],
				});
				return;
			}
		}
		/* %E7%BD%91%E7%9B%98 => 网盘 */
		shareCode = decodeURI(shareCode);
		logCallBack({
			status: true,
			msg: ["对shareCode进行解码: " + shareCode],
		});
		if (
			NetDiskGlobalData.aboutShareCode.excludeIdenticalSharedCodes.value &&
			utils.isSameChars(
				shareCode,
				NetDiskGlobalData.aboutShareCode.excludeIdenticalSharedCodesCoefficient
					.value
			)
		) {
			/* 排除掉由相同字符组成的分享码 */
			logCallBack({
				status: false,
				msg: ["已开启【排除分享码】且该分享码命中该规则"],
			});
			return;
		}
		/* 排除掉以http|https结尾的分享码 */
		if (shareCode.endsWith("http") || shareCode.endsWith("https")) {
			logCallBack({
				status: false,
				msg: ["该分享码以http|https结尾"],
			});
			return;
		}
		logCallBack({
			status: true,
			msg: "处理完毕的shareCode: " + shareCode,
		});
		return shareCode;
	},
	/**
	 * 对传入的url进行处理，返回accessCode
	 * @param {string} matchText 正在进行匹配的文本
	 * @param {NetDiskMatchRuleOption} regular 当前执行的规则
	 * @param {(logData: NetDiskDebugLogData)=>void} logCallBack 日志回调
	 */
	handleAccessCode(
		matchText: string,
		regular: NetDiskMatchRuleOption,
		logCallBack: (logData: NetDiskDebugLogData) => void
	) {
		let accessCode = "";
		if (!regular.checkAccessCode) {
			/* 不存在匹配提取码的正则 */
			logCallBack({
				status: true,
				msg: "因未配置规则checkAccessCode，默认accessCode的值为空",
			});
			return "";
		}
		let accessCodeMatch = matchText.match(regular.checkAccessCode);
		logCallBack({
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
			logCallBack({
				status: true,
				msg: "取最后一个值: " + accessCodeMatchValue,
			});
			/* 进去提取码匹配，且过滤掉null或undefined或空字符串 */
			let accessCodeMatchArray = accessCodeMatchValue
				.match(regular.accessCode)
				?.filter((item) => utils.isNotNull(item));
			logCallBack({
				status: true,
				msg: [
					`正则: accessCode`,
					"作用: 用来提取link_innerText或者link_innerHTML匹配到的字符串中的密码",
					`结果: `,
					JSON.stringify(accessCodeMatchArray),
				],
			});
			if (utils.isNull(accessCodeMatchArray)) {
				logCallBack({
					status: true,
					msg: "因↑匹配到的结果为空，默认accessCode的值为空",
				});
				return "";
			}
			if (accessCodeMatchArray.length) {
				/* 取第一个值 */
				/**
				 * 例如，匹配到的字符串是密码：oanm   大于150m
				 * 如果是最后一个，那么会匹配到150m
				 */
				accessCode = accessCodeMatchArray[0];
				logCallBack({
					status: true,
					msg: "取第一个值: " + accessCode,
				});
				if (accessCode.startsWith("http")) {
					/* 排除不可能的accessCode */
					logCallBack({
						status: true,
						msg: "排除不可能的accessCode，重置accessCode的值为空",
					});
					accessCode = "";
				}
			}
		}
		if (utils.isNotNull(accessCode)) {
			for (const accessCodeNotMatchRegexp of NetDisk.accessCodeNotMatchRegexpList) {
				if (accessCode.match(accessCodeNotMatchRegexp)) {
					accessCode = "";
					logCallBack({
						status: true,
						msg: [
							`正则: 内置的accessCodeNotMatchRegexpList`,
							"作用: 使用该正则判断提取到的accessCode是否正确",
							`结果: true 重置accessCode为空`,
						],
					});
					break;
				}
			}
			if (
				regular.acceesCodeNotMatch &&
				accessCode.match(regular.acceesCodeNotMatch)
			) {
				accessCode = "";
				logCallBack({
					status: true,
					msg: [
						`正则: acceesCodeNotMatch`,
						"作用: 用于判断提取到的accessCode是否是错误的accessCode",
						`结果: true 重置accessCode为空`,
					],
				});
			}
		}

		logCallBack({
			status: true,
			msg: "处理完毕的accessCode: " + accessCode,
		});
		return accessCode;
	},
	/**
	 * 获取在弹窗中显示出的链接
	 * @param {string} matchText 匹配到的文本
	 * @param {NetDiskMatchRuleOption} regular 当前执行的规则
	 * @param {string} shareCode 分享码
	 * @param {string} accessCode 访问码
	 * @param {(logData: NetDiskDebugLogData)=>void} logCallBack 日志回调
	 */
	handleLinkShow(
		matchText: string,
		regular: NetDiskMatchRuleOption,
		shareCode: string,
		accessCode: string,
		logCallBack: (logData: NetDiskDebugLogData) => void
	) {
		let uiLink = NetDiskRuleUtils.replaceParam(regular["uiLinkShow"], {
			shareCode: shareCode,
		});
		logCallBack({
			status: true,
			msg: [
				`正则: uiLinkShow`,
				"作用: 用于显示在弹窗中的字符串",
				"备注: 对shareCode进行参数替换",
				`结果: ${uiLink}`,
			],
		});
		if (accessCode && accessCode != "") {
			uiLink = NetDiskRuleUtils.replaceParam(uiLink, {
				accessCode: accessCode,
			});
			logCallBack({
				status: true,
				msg: [
					`正则: uiLinkShow`,
					"作用: 用于显示在弹窗中的字符串",
					"备注: 对accessCode进行参数替换",
					`结果: ${uiLink}`,
				],
			});
		} else {
			uiLink = uiLink.replace(NetDisk.noAccessCodeRegExp, "");
			logCallBack({
				status: true,
				msg: [
					`正则: 内置的noAccessCodeRegExp`,
					"作用: 因accessCode为空，使用该正则去除不需要的字符串",
					`结果: ${uiLink}`,
				],
			});
		}
		if (regular.paramMatch) {
			if (utils.isNotNull(matchText)) {
				let paramMatchArray = matchText.match(regular.paramMatch);
				let replaceParamData: {
					[key: string]: string;
				} = {};
				if (paramMatchArray) {
					for (let index = 0; index < paramMatchArray.length; index++) {
						// $1,$2,$3...
						replaceParamData[`$${index}`] = paramMatchArray[index];
					}
				}
				uiLink = NetDiskRuleUtils.replaceParam(uiLink, replaceParamData);
				logCallBack({
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

		logCallBack({
			status: true,
			msg: "处理完毕的uiLink: " + uiLink,
		});
		return uiLink;
	},
	/**
	 * 获取新标签页打开的URL
	 * @param {string} matchText 匹配到的文本
	 * @param {NetDiskMatchRuleOption} regular 当前执行的规则
	 * @param {string} shareCode 分享码
	 * @param {string} accessCode 访问码
	 * @param {(logData: NetDiskDebugLogData)=>void} logCallBack 日志回调
	 */
	handleBlank(
		matchText: string,
		regular: NetDiskMatchRuleOption,
		shareCode: string,
		accessCode: string,
		logCallBack: (logData: NetDiskDebugLogData) => void
	) {
		let blankUrl = NetDiskRuleUtils.replaceParam(regular["blank"], {
			shareCode: shareCode,
		});
		logCallBack({
			status: true,
			msg: [
				`正则: blank`,
				"作用: 用于点击跳转的链接",
				"备注: 对shareCode进行参数替换",
				`结果: ${blankUrl}`,
			],
		});
		if (accessCode && accessCode != "") {
			blankUrl = NetDiskRuleUtils.replaceParam(blankUrl, {
				accessCode: accessCode,
			});
			logCallBack({
				status: true,
				msg: [
					`正则: blank`,
					"作用: 用于点击跳转的链接",
					"备注: 对accessCode进行参数替换",
					`结果: ${blankUrl}`,
				],
			});
		} else {
			blankUrl = blankUrl.replace(NetDisk.noAccessCodeRegExp, "");
			logCallBack({
				status: true,
				msg: [
					`正则: 内置的noAccessCodeRegExp`,
					"作用: 因accessCode为空，使用该正则去除不需要的字符串",
					`结果: ${blankUrl}`,
				],
			});
		}
		if (regular.paramMatch) {
			if (utils.isNotNull(matchText)) {
				let paramMatchArray = matchText.match(regular.paramMatch);
				let replaceParamData: {
					[key: string]: string;
				} = {};
				if (paramMatchArray) {
					for (let index = 0; index < paramMatchArray.length; index++) {
						replaceParamData[`$${index}`] = paramMatchArray[index];
					}
				}
				blankUrl = NetDiskRuleUtils.replaceParam(blankUrl, replaceParamData);
				logCallBack({
					status: true,
					msg: [
						`正则: paramMatch`,
						`作用: 用于对matchText进行提取需要的关键内容，替换关键字：{#$1#}、{#$2#}...`,
						`参数: ` + JSON.stringify(replaceParamData, void 0, 4),
						`结果: ${blankUrl}`,
					],
				});
			}
		}

		logCallBack({
			status: true,
			msg: "处理完毕的blank: " + blankUrl,
		});
		return blankUrl;
	},
	/**
	 * 获取复制到剪贴板的字符串
	 * @param {string} matchText 匹配到的文本
	 * @param {NetDiskMatchRuleOption} regular 当前执行的规则
	 * @param {string} shareCode 分享码
	 * @param {string} accessCode 访问码
	 * @param {(logData: NetDiskDebugLogData)=>void} logCallBack 日志回调
	 */
	handleCopyUrl(
		matchText: string,
		regular: NetDiskMatchRuleOption,
		shareCode: string,
		accessCode: string,
		logCallBack: (logData: NetDiskDebugLogData) => void
	) {
		let copyUrl = NetDiskRuleUtils.replaceParam(regular["copyUrl"], {
			shareCode: shareCode,
		});
		logCallBack({
			status: true,
			msg: [
				`正则: copyUrl`,
				"作用: 用于复制到剪贴板的链接",
				"备注: 对shareCode进行参数替换",
				`结果: ${copyUrl}`,
			],
		});
		if (accessCode && accessCode != "") {
			copyUrl = NetDiskRuleUtils.replaceParam(copyUrl, {
				accessCode: accessCode,
			});
			logCallBack({
				status: true,
				msg: [
					`正则: copyUrl`,
					"作用: 用于复制到剪贴板的链接",
					"备注: 对accessCode进行参数替换",
					`结果: ${copyUrl}`,
				],
			});
		} else {
			copyUrl = copyUrl.replace(NetDisk.noAccessCodeRegExp, "");
			logCallBack({
				status: true,
				msg: [
					`正则: 内置的noAccessCodeRegExp`,
					"作用: 因accessCode为空，使用该正则去除不需要的字符串",
					`结果: ${copyUrl}`,
				],
			});
		}
		if (regular.paramMatch) {
			if (utils.isNotNull(matchText)) {
				let paramMatchArray = matchText.match(regular.paramMatch);
				let replaceParamData: {
					[key: string]: string;
				} = {};
				if (paramMatchArray) {
					for (let index = 0; index < paramMatchArray.length; index++) {
						// $1,$2,$3...
						replaceParamData[`$${index}`] = paramMatchArray[index];
					}
				}
				copyUrl = NetDiskRuleUtils.replaceParam(copyUrl, replaceParamData);
				logCallBack({
					status: true,
					msg: [
						`正则: paramMatch`,
						`作用: 用于对matchText进行提取需要的关键内容，替换关键字：{#$1#}、{#$2#}...`,
						`参数: ` + JSON.stringify(replaceParamData, void 0, 4),
						`结果: ${copyUrl}`,
					],
				});
			}
		}

		logCallBack({
			status: true,
			msg: "处理完毕的copyUrl: " + copyUrl,
		});
		return copyUrl;
	},
};
