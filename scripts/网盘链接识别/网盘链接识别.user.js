// ==UserScript==
// @name         网盘链接识别
// @namespace    https://greasyfork.org/zh-CN/scripts/445489
// @supportURL   https://github.com/WhiteSevs/TamperMonkeyScript/issues
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACsJJREFUeF7tXW+IHdUVP2c2u8kHIQYL0TRIaK1SgrFFaZsvVkpAo6YR1LJpa9jUd++83SUpSrUNBFRCrVgxNOv+mTOvJBBNmtpamoQG9UNBKLHFDzEtFttKBdOYQENE/Lb75vZd2cVNum/uvXNnZt/MnoGQD+/c8+d3fu+c+2f2PgR+ljQCuKSj5+CBCbDEScAEYAIscQSWePhcAZgASxyBJR4+VwAmQHEIjIyM3DAzM/M1pdSXEfEWALgVANbkaPE0ABwhomdz1GmtSgixHxF3Wg8wC55HxPeVUu8DgP7/jRUrVvxpbGzsY/PQbBK5VwCd9Ha7vVkptRkA9L8yHiKisAxDczaklL8GgAfLsImIryql3gSAqBPnh3nazI0AjUZjbRAEjwLAI3k6aKtLKbUjjuODtvI+cs1m894kSY776Mg49hwAxHkSIRcCSCl10nXy12YMLI9hrxDR/XkoMukQQrQQ8WGTXIGfn0PEZ6IoGvO14U0AKeUJALjH15Ecxr9ARHn2464uCSEOI+K2HHz2VXGUiAZ9lHgRQEp5BgBu9nEgr7FBEGyZmprSZCz8EUIMIuKRwg3ZGfiAiK63E/1/qcwEkFJ+BAArsxrOedzLRPSdnHWmqgvD8EBntj5Ups0UWxeI6NosvmQigBDibUTckMVgAWNKXwHMxSClfBwAtgPA+gLiclX5GhHd6TrImQBhGO5RSu11MHQREY8nSXICEf/R399/bnx8/KLD+CUl2plf3BgEwa1JktyOiN8HgKscAHCuhE4EaDabQ0mSHLBxSCml5weHlFKHWq3WBZsxLHM5AlLKLwLAQwCwCwBWWeLzKBHts5S1fx9ASnkdALxluZPXIiJh6wTLpSMwPDx8U7vd/iEADFtgdTZJko2tVuushawTAZ4EgCdMSpVSW+M4PmaS48/dEZBSWuWgMznfR0R6X8b4WLUA228/Ig5GUXTUaJUFMiMghNiEiK+bFCxbtuxLExMT/zLJ2RLAhnmTRDRiMsif+yMQhuFupdTTaZoQcZfNTqEVAYQQf0TEO1IMXurr69s4OTn5rn94rMEGAYul+Ekiutuky0iAoaGhqwcGBi4ZFD1FRLpK8FMSAkKIHyHiz9PM2bQBIwGklPcBwO9SDH0CAF8hovdKip3NAECj0VgdBMHf05aHSqntcRwfSm0VJjSllD8DgJ90k1NKTcVxbLM8MZnizx0RkFL+BgC6noAi4nNRFD3mSwB96NH1xKnMc3hHfGovbnEoZdweNraAMAxPKaW+0Q1NRFwfRdE7tUe7BwOUUuqTWL3j2u0xHhIZCSCl1K8gdT1pIiKjjh7ErhYujY6OXjM9Pf3ftGBM+TEmT0qpfAzUAukeDsI3P0yAHk6ujWtMABuUaizDBKhxcm1CYwLYoFRjGSZAjZNrExoTwAalGsswAWqcXJvQmAA2KNVYhglQ4+TahMYEsEGpxjK1IYCU8vcAcJvlW8dVTqn+C9+3iGhrHkHUggCmIPIAqhd1mA5qbHw2YWeysehnAWVetGADaMkyzn/Jc6V/dSDAeQBYXTLwvWLOeF5vcrQOBEg9bjYBUPXPTSXaFB8TwIRQj3/OBDC8cNLj+fN2r+oEOE1EX/VBwVTCfHRXYWzBBDDmx7gKMNyF92PfO/pMBPAFKO9Zsyupio7PNz9GAuiAuyzVcrmZo2iA6k4A3/xYEUAb0Xfjtdvt+xBxlVLqeF538jEB8nmrOmt+rAngWvps5ZkA+RDAFu8r5XqBAP9J2f8/R0SfzxrcQuMWgXClxueKVS8QQB8CfbuL48fyOjSZ078IBCg1vsoRYHYSs+BuYN4rgDRbc8CVabMIW5UkwLyZ7O2zAbxR1MWPZVeAeZVH3y5eeHyVJYCr41nlF4sAWf0tetyizwGKDnCx9wHKjs/VHhPgCsR6oS+7JtFHngnABPDhT/XG8hzg8pxxBeAKUL1vsY/HXAG4AvCNJ/M4wC2AW4BPQa3eWG4B3AK4BXAL6F65eCOoelXdyWNuAdwCuAVwC+AWMIcALwN5GejUQisvzHMAngPwHIDnADwH4DlAFw7wPkDlu3x6ADwHyDgHCMPwLqXUJgCYDoLgpampqb9VkSt1JUDW/FgtA6WUvwSAH1yR8Bc7vxSmf9i4Uk8dCeCTHyMBDL8a9j0iOlwlBtSNAL75sSGA/v1Z/TPmCz3/JqIvMAEWDwEppVd+bAhQq3VzDSuAV36YABXfCvYlNBOACbC01s2+35jF6/YLW/aNhysAVwCuAPMRqNpWMFcAx5rsC5ijucLFfePhFsAtgFsAt4AUDviWmMJroKMBjsfxNJABc2RYyeK++VmKc4CevrfPlT9MAEfEZn+cqrR7CR3dcxZnAjhD9unl16XdS5jBPachTAAnuD4Tnr0Bvefu7XMNhwngiljN5JkANUuoazhMAFfEaia/6ATo7+//3Pj4+MWa4VqZcAwEOE9E16UFY7MPkLZu1ro3ENFfK4NYjRwVQtyIiO92CwkR34yiaKMvAY4BwJZuSpRSD8Rx/Nsa4VqZUMIw3KaUSnsr+1dEtM2LAEKIvYi4J4VlB6Mo2lEZ1GrkqBBiEhGbKSE9Q0S7vQggpfwuALyUouRikiTrW63WhRph2/OhSCn1q/qnAeCqlOp8dxzHJ70IMDIycsPMzMw/05QopR6L4/i5nketRg5KKZ8EgCfSQlq+fPnKsbGxj70IoAdLKf8AAJtTmHYmjuNbaoRvT4cyPDx8U7vdPgUAq1Ja86tRFN1lCsS4CtAKwjDcqZTab1DWIiJhMsif+yMgpZwAgGGDpqeISFeJ1MeKADZtQFtRSm2N41ivGvgpCAGb0t8p2ucA4DYi+tDkhhUBZtvA8wDwiFEh4mAURUdNcvy5OwJCiE2I+LrFSKtvv9ZjTYBGo7E2CALdd9ZaODDZ19f3i8nJya6bFBY6WGQeAmEY7lZKPW0BivW334kAs1VAVwBdCWyeSwCg5w2HOvcIvGczgGUuR6DRaKxGRH0Hw0OIuMEGH0TcFUXRmI2sMwFmSXACAO6xNQAAnyilXuysIv4cBMFfoih6x2HskhIdHR29Znp6eo1Saj0iPgAA30qb6S8AzlEiGnQBzboFzFcqpTwDADe7GCpIVm+EHCGiZwvSn6pWCLEfEXcuhu0FbH5ARNe7+pKJALOV4CMAWOlqsCB56sx4w4J0L6h29o2iB8u0mWLrAhFdm8WXzATQxoQQb9v2pizOuYxRSu2I4/igy5isss1m894kSY5nHZ/zuNeI6M6sOr0IoI2GYbhHKbU3qwM5jnulcyx9f476uqoSQrQQ8eEybBlsvOz7G8veBNAONpvNoSRJfgoAaxYRlBeIqJR+3DmHP9w5h089Zi0Yh7N6NUZE+3zt5EKA2TmBfvNE92G9HVw6EYIg2DI1NaVXKIU/QohBRDxSuKGFDexLkuT5VqulSeD95EaAOU+klJ8SQSn1TUS8w9tDOwXepdDOzGdSYRgeUEoNuY7LKH8SEU/29fWdnJiY0LeC5fbkToD5ng0NDV09MDCgSfB1AFiHiOuUUusAINOMtUvUpa8A5pH9cQDYDgDrc8sIgH6vQk+uzyRJcqa/v/9U3kmf72uhBMgRFFZVEAJMgIKArYpaJkBVMlWQn0yAgoCtilomQFUyVZCfTICCgK2KWiZAVTJVkJ9MgIKArYra/wGYigzMiqJYZwAAAABJRU5ErkJggg==
// @version      2024.8.14
// @description  识别网页中显示的网盘链接，目前包括百度网盘、蓝奏云、天翼云、中国移动云盘(原:和彩云)、阿里云、文叔叔、奶牛快传、123盘、腾讯微云、迅雷网盘、115网盘、夸克网盘、城通网盘(部分)、坚果云、UC网盘、BT磁力，支持蓝奏云、天翼云(需登录)、123盘、奶牛、UC网盘(需登录)、坚果云(需登录)和阿里云盘(需登录，且限制在网盘页面解析)直链获取下载，页面动态监控加载的链接，可自定义规则来识别小众网盘/网赚网盘或其它自定义的链接。
// @author       WhiteSevs
// @match        *://*/*
// @run-at       document-end
// @license      GPL-3.0-only
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_addStyle
// @grant        GM_info
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        unsafeWindow
// @connect      *
// @connect      lanzoub.com
// @connect      lanzouc.com
// @connect      lanzoue.com
// @connect      lanzouf.com
// @connect      lanzoug.com
// @connect      lanzouh.com
// @connect      lanzoui.com
// @connect      lanzouj.com
// @connect      lanzouk.com
// @connect      lanzoul.com
// @connect      lanzoum.com
// @connect      lanzouo.com
// @connect      lanzoup.com
// @connect      lanzouq.com
// @connect      lanzous.com
// @connect      lanzout.com
// @connect      lanzouu.com
// @connect      lanzouv.com
// @connect      lanzouw.com
// @connect      lanzoux.com
// @connect      lanzouy.com
// @connect      lanosso.com
// @connect      lanzn.com
// @connect      lanzog.com
// @connect      lanpw.com
// @connect      lanpv.com
// @connect      lanzv.com
// @connect      wwentua.com
// @connect      ilanzou.com
// @connect      189.cn
// @connect      123pan.com
// @connect      123pan.cn
// @connect      wenshushu.cn
// @connect      jianguoyun.com
// @connect      cowtransfer.com
// @connect      cowcs.com
// @connect      aliyundrive.com
// @connect      baidu.com
// @connect      139.com
// @connect      weiyun.com
// @connect      xunlei.com
// @connect      115.com
// @connect      quark.cn
// @connect      jianguoyun.com
// @connect      uc.cn
// @connect      ctfile.com
// @connect      sharepoint.com
// @exclude      /^http(s|):\/\/s1\.hdslb\.com\/.*$/
// @exclude      /^http(s|):\/\/www\.bilibili\.com\/video.*$/
// @exclude      /^http(s|):\/\/message\.bilibili\.com\/.*$/
// @exclude      /^http(s|):\/\/live\.bilibili\.com\/.*$/
// @exclude      /^http(s|):\/\/.*\.mail\.qq\.com\/.*$/
// @exclude      /^http(s|):\/\/.*video\.qq\.com\/.*$/
// @exclude      /^http(s|):\/\/.*\.vscode-cdn\.net\/.*$/
// @exclude      /^http(s|):\/\/.*vscode\.dev\/.*$/
// @exclude      /^http(s|):\/\/cloudgame\.ds\.163\.com\/.*$/
// @exclude      /^http(s|):\/\/cloudgame\.webapp\.163\.com\/.*$/
// @exclude      /^http(s|):\/\/cg\.163\.com\/.*$/
// @exclude      /^http(s|):\/\/.*\.youtube\.com\/.*$/
// @require      https://update.greasyfork.org/scripts/456470/1320377/%E7%BD%91%E7%9B%98%E9%93%BE%E6%8E%A5%E8%AF%86%E5%88%AB-%E5%9B%BE%E6%A0%87%E5%BA%93.js
// @require      https://update.greasyfork.org/scripts/465550/1360573/JS-%E5%88%86%E9%A1%B5%E6%8F%92%E4%BB%B6.js
// @require      https://fastly.jsdelivr.net/npm/qmsg@1.2.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/pops@1.5.1/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/utils@2.1.4/dist/index.umd.js
// @require      https://fastly.jsdelivr.net/npm/@whitesev/domutils@1.3.0/dist/index.umd.js
// @require      https://update.greasyfork.org/scripts/486152/1360580/Crypto-JS.js
// ==/UserScript==

(function () {
	if (typeof unsafeWindow === "undefined") {
		var unsafeWindow =
			globalThis.unsafeWindow ||
			window.unsafeWindow ||
			globalThis ||
			window ||
			self;
	}
	/** 是否是调试模式 */
	const isDebug = true;
	/** @type {import("lib/CryptoJS/index")} */
	const Cryptojs = CryptoJS ?? window.CryptoJS ?? unsafeWindow.CryptoJS;
	/** @type {import("qmsg").default} */
	const Qmsg = window.Qmsg;
	/** @type {import("@whitesev/pops").default} */
	const pops = window.pops;
	const AnyTouch = pops.config.Utils.AnyTouch();
	/** @type {import("@whitesev/utils").default} */
	const utils = window.Utils.noConflict();
	/** @type {import("@whitesev/domutils").default} */
	const DOMUtils = window.DOMUtils.noConflict();
	const log = new utils.Log(GM_info, unsafeWindow.console || console);
	const httpx = new utils.Httpx(GM_xmlhttpRequest);
	const GM_Menu = new utils.GM_Menu({
		autoReload: false,
		GM_getValue,
		GM_setValue,
		GM_registerMenuCommand,
		GM_unregisterMenuCommand,
	});

	/**
	 * 数据配置
	 */
	const NetDiskData = {
		/** 蓝奏云默认主机域名 */
		lanzou_defaultHostName: "www.lanzout.com",
		/** 是否点击网盘小图标寻找shareCode */
		iconDefaultClickEventToFindShareCode: true,
		/** 是否点击网盘小图标寻找shareCode且使用光标选中 */
		iconDefaultClickEventToFindShareCodeWithSelect: true,
		/** 是否点击网盘小图标（循环）寻找shareCode */
		iconDefaultClickEventToFindShareCodeByLoop: true,
		/** 匹配间隔默认时间(s) */
		defaultMatchIntervalTime: 0.8,
		/** 匹配间隔最小时间(s) */
		matchIntervalMinTime: 0.0,
		/** 匹配间隔最打时间(s) */
		matchIntervalMaxTime: 5.0,

		/** 小窗的默认值-宽度 */
		defaultSmallWindowWidth: 250,
		/** 小窗的最小值-宽度 */
		smallWindowMinWidth: 50,
		/** 小窗的最大值-宽度 */
		smallWindowMaxWidth: DOMUtils.width(globalThis),

		/** 小窗的默认值-最大高度 */
		defaultSmallWindowMaxHeight: 200,
		/** 小窗的最小值-最大高度 */
		smallWindowMinMaxHeight: 50,
		/** 小窗的最大值-最大高度 */
		smallWindowMaxMaxHeight: DOMUtils.height(globalThis),

		/** 相同字符系数-默认值 */
		defaultExcludeIdenticalSharedCodesCoefficient: 1,
		/** 相同字符系数-最小值 */
		excludeIdenticalSharedCodesCoefficientMin: 0,
		/** 相同字符系数-最大值 */
		excludeIdenticalSharedCodesCoefficientMax: 1,

		/** 行为模式-默认值：悬浮按钮+小窗 */
		defaultNetdiskBehaviorMode: "suspension_smallwindow",

		/** 子节点的变动（新增、删除或者更改） */
		default_mutationObserver_childList: true,
		/** 节点内容或节点文本的变动 */
		default_mutationObserver_characterData: true,
		/** 是否将观察器应用于该节点的所有后代节点 */
		default_mutationObserver_subtree: true,
	};

	const NetDiskUIMenuData = {
		/**
		 * @returns {string}
		 */
		get netdiskBehaviorMode() {
			return GM_getValue(
				"netdisk-behavior-mode",
				NetDiskData.defaultNetdiskBehaviorMode
			).toLowerCase();
		},
	};

	const NetDiskLocalData = {
		/**
		 * 是否启用该规则
		 * @param {string} name
		 * @param {boolean} defaultValue
		 * @returns
		 */
		enable(name, defaultValue = true) {
			return Boolean(GM_getValue(`${name}-enable`, defaultValue));
		},
		/**
		 * 提取码间隔前的字符长度
		 * @param {string} name
		 * @param {number} defaultValue 默认值: 20
		 */
		innerTextAccessCodeBeforeMaxRange(name, defaultValue = 20) {
			return parseInt(
				GM_getValue(
					`${name}_innerText_accessCode_before_max_range`,
					defaultValue
				)
			);
		},
		/**
		 * 提取码间隔后的字符长度
		 * @param {string} name
		 * @param {number} defaultValue 默认值: 10
		 */
		innerTextAccessCodeAfterMaxRange(name, defaultValue = 10) {
			return parseInt(
				GM_getValue(
					`${name}_innerText_accessCode_after_max_range`,
					defaultValue
				)
			);
		},
		/**
		 * 提取码间隔前的字符长度
		 * @param {string} name
		 * @param {number} defaultValue 默认值: 100
		 */
		innerHTMLAccessCodeBeforeMaxRange(name, defaultValue = 100) {
			return parseInt(
				GM_getValue(
					`${name}_innerHTML_accessCode_before_max_range`,
					defaultValue
				)
			);
		},
		/**
		 * 提取码间隔后的字符长度
		 * @param {string} name
		 * @param {number} defaultValue 默认值: 15
		 */
		innerHTMLAccessCodeAfterMaxRange(name, defaultValue = 15) {
			return parseInt(
				GM_getValue(
					`${name}_innerHTML_accessCode_after_max_range`,
					defaultValue
				)
			);
		},
		/**
		 * 是否进行校验链接有效性
		 * @param {string} name
		 * @param {boolean} [defaultValue=false]
		 * @returns
		 */
		checkLinkValidity(name, defaultValue = false) {
			return Boolean(GM_getValue(`${name}-check-link-valid`, defaultValue));
		},
	};

	const NetDisk = {
		/**
		 * 是否初始化
		 * @type {boolean}
		 */
		isInit: false,
		/**
		 * 链接字典，识别规则->识别到的访问码|分享码|下标
		 * @type {import("@whitesev/utils/dist/src/Dictionary").UtilsDictionary<string,import("@whitesev/utils/dist/src/Dictionary").UtilsDictionary<string,NetDiskDictData>>}
		 */
		linkDict: void 0,
		/**
		 * （临时）链接字典
		 * @type {import("@whitesev/utils/dist/src/Dictionary").UtilsDictionary<string,import("@whitesev/utils/dist/src/Dictionary").UtilsDictionary<string,NetiDiskHandleObject>>}
		 */
		tempLinkDict: void 0,
		/**
		 * 是否正在匹配链接中
		 */
		isMatching: false,
		/**
		 * 用于存储已匹配到的网盘规则名
		 * 只有单独的名
		 * @type {Set<string>}
		 */
		matchLink: void 0,
		/**
		 * 是否成功匹配到链接
		 */
		hasMatchLink: false,
		/**
		 * 剪贴板内容
		 */
		clipboardText: "",
		/**
		 * 是否允许匹配window.location.href
		 */
		allowMatchLocationHref: false,
		/**
		 * 使用该正则判断提取到的shareCode是否正确
		 */
		shareCodeNotMatchRegexpList: [
			/(vipstyle|notexist|ajax|file|download|ptqrshow|xy-privacy|comp|web|undefined|1125|unproved|console|account|favicon|setc)/g,
		],
		/**
		 * 使用该正则判断提取到的accessCode是否正确
		 */
		accessCodeNotMatchRegexpList: [/^(font)/gi],
		/**
		 * 当没有accessCode时，使用该正则去除不需要的字符串
		 */
		noAccessCodeRegExp:
			/( |提取码:|\n密码：{#accessCode#}|{#accessCode#}|{#encodeURI-accessCode#}|{#encodeURIComponent-accessCode#}|{#decodeURI-accessCode#}|{#encodeURIComponent-accessCode#}|\?pwd=|&pwd=)/gi,
		/**
		 * @type {NetDiskRegular}
		 */
		regular: {
			baidu: [
				{
					enable: NetDiskLocalData.enable("baidu"),
					link_innerText: `pan.baidu.com/s/[0-9a-zA-Z-_]{6,24}([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"baidu"
					)}}(密码|访问码|提取码|\\?pwd=)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"baidu"
					)}}[0-9a-zA-Z]{4}|)`,
					link_innerHTML: `pan.baidu.com/s/[0-9a-zA-Z-_]{6,24}([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"baidu"
					)}}(密码|访问码|提取码|\\?pwd=)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"baidu"
					)}}[0-9a-zA-Z]{4}|)`,
					shareCode: /pan\.baidu\.com\/s\/([0-9a-zA-Z-_]+)/gi,
					shareCodeNeedRemoveStr: /pan\.baidu\.com\/s\//gi,
					checkAccessCode: /(密码|访问码|提取码|pwd=)[\s\S]+/g,
					accessCode: /([0-9a-zA-Z]{4})/gi,
					uiLinkShow: "pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}",
					blank: "https://pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}",
					copyUrl: "https://pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("baidu"),
				},
				{
					enable: NetDiskLocalData.enable("baidu"),
					link_innerText: `pan.baidu.com/(share|wap)/init\\?surl=[0-9a-zA-Z-_]{5,24}([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"baidu"
					)}}(密码|访问码|提取码|&pwd=)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"baidu"
					)}}[0-9a-zA-Z]{4}|)`,
					link_innerHTML: `pan.baidu.com/(share|wap)/init\\?surl=[0-9a-zA-Z-_]{5,24}([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"baidu"
					)}}(密码|访问码|提取码|&pwd=)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"baidu"
					)}}[0-9a-zA-Z]{4}|)`,
					shareCode:
						/pan\.baidu\.com\/(share|wap)\/init\?surl=([0-9a-zA-Z-_]+)/gi,
					shareCodeNeedRemoveStr: /pan\.baidu\.com\/(share|wap)\/init\?surl=/gi,
					checkAccessCode: /(密码|访问码|提取码|&pwd=)[\s\S]+/g,
					accessCode: /([0-9a-zA-Z]{4})/gi,
					uiLinkShow:
						"pan.baidu.com/share/init?surl={#shareCode#}&pwd={#accessCode#}",
					blank:
						"https://pan.baidu.com/share/init?surl={#shareCode#}&pwd={#accessCode#}",
					copyUrl:
						"https://pan.baidu.com/share/init?surl={#shareCode#}&pwd={#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("baidu"),
				},
			],
			lanzou: [
				{
					enable: NetDiskLocalData.enable("lanzou"),
					link_innerText: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/(tp/|u/|)([a-zA-Z0-9_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{1,20})([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"lanzou"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"lanzou"
					)}}[a-zA-Z0-9]{3,6}|)`,
					link_innerHTML: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/(tp/|u/|)([a-zA-Z0-9_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{1,20})([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"lanzou"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"lanzou"
					)}}[a-zA-Z0-9]{3,6}|)`,
					shareCode:
						/(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/(tp\/|u\/|)([a-zA-Z0-9_\-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{1,20})/gi,
					shareCodeNeedRemoveStr:
						/(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/(tp\/|u\/|)/gi,
					shareCodeExcludeRegular: ["lanzouyx"],
					checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
					accessCode: /([0-9a-zA-Z]{3,})/gi,
					uiLinkShow: `${GM_getValue(
						"lanzou-host-name",
						NetDiskData.lanzou_defaultHostName
					)}/{#shareCode#} 提取码: {#accessCode#}`,
					blank: `https://${GM_getValue(
						"lanzou-host-name",
						NetDiskData.lanzou_defaultHostName
					)}/{#shareCode#}`,
					copyUrl: `https://${GM_getValue(
						"lanzou-host-name",
						NetDiskData.lanzou_defaultHostName
					)}/{#shareCode#}\n密码：{#accessCode#}`,
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("lanzou"),
				},
				{
					enable: NetDiskLocalData.enable("lanzou"),
					link_innerText: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/s/([a-zA-Z0-9_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{1,20})([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"lanzou"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"lanzou"
					)}}[a-zA-Z0-9]{3,6}|)`,
					link_innerHTML: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/s/([a-zA-Z0-9_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{1,20})([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"lanzou"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"lanzou"
					)}}[a-zA-Z0-9]{3,6}|)`,
					shareCode:
						/(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/s\/([a-zA-Z0-9_\-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{1,20})/gi,
					shareCodeNeedRemoveStr: /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/s\//gi,
					shareCodeExcludeRegular: ["lanzouyx"],
					checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
					accessCode: /([0-9a-zA-Z]{3,})/gi,
					uiLinkShow: `${GM_getValue(
						"lanzou-host-name",
						NetDiskData.lanzou_defaultHostName
					)}/s/{#shareCode#} 提取码: {#accessCode#}`,
					blank: `https://${GM_getValue(
						"lanzou-host-name",
						NetDiskData.lanzou_defaultHostName
					)}/s/{#shareCode#}`,
					copyUrl: `https://${GM_getValue(
						"lanzou-host-name",
						NetDiskData.lanzou_defaultHostName
					)}/s/{#shareCode#}\n密码：{#accessCode#}`,
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("lanzou"),
				},
			],
			lanzouyx: [
				{
					enable: NetDiskLocalData.enable("lanzouyx"),
					link_innerText: `ilanzou.com/s/([a-zA-Z0-9_-]{5,22})([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"lanzouyx"
					)}}(密码|访问码|提取码|\\?code=)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"lanzouyx"
					)}}[a-zA-Z0-9]{3,6}|)`,
					link_innerHTML: `ilanzou.com/s/([a-zA-Z0-9_-]{5,22})([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"lanzouyx"
					)}}(密码|访问码|提取码|\\?code=)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"lanzouyx"
					)}}[a-zA-Z0-9]{3,6}|)`,
					shareCode: /ilanzou.com\/s\/([a-zA-Z0-9_\-]{5,22})/gi,
					shareCodeNeedRemoveStr: /ilanzou.com\/s\//gi,
					checkAccessCode: /(密码|访问码|提取码|\?code=)[\s\S]+/g,
					accessCode: /([0-9a-zA-Z]{3,})/gi,
					uiLinkShow: `www.ilanzou.com/s/{#shareCode#} 提取码: {#accessCode#}`,
					blank: `https://www.ilanzou.com/s/{#shareCode#}?code={#accessCode#}`,
					copyUrl: `https://www.ilanzou.com/s/{#shareCode#}?code={#accessCode#}`,
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("lanzouyx"),
				},
			],
			tianyiyun: [
				{
					enable: NetDiskLocalData.enable("tianyiyun"),
					link_innerText: `(cloud.189.cn/web/share\\?code=([0-9a-zA-Z_-]){8,14}|cloud.189.cn/t/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"tianyiyun"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"tianyiyun"
					)}}[0-9a-zA-Z]{4}|)`,
					link_innerHTML: `(cloud.189.cn/web/share\\?code=([0-9a-zA-Z_\-]){8,14}|cloud.189.cn/t/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"tianyiyun"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"tianyiyun"
					)}}[0-9a-zA-Z]{4}|)`,
					shareCode:
						/cloud.189.cn\/web\/share\?code=([0-9a-zA-Z_\-]){8,14}|cloud.189.cn\/t\/([a-zA-Z0-9_\-]{8,14})/gi,
					shareCodeNeedRemoveStr:
						/cloud\.189\.cn\/t\/|cloud.189.cn\/web\/share\?code=/gi,
					checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
					accessCode: /([0-9a-zA-Z]{4})/gi,
					uiLinkShow: "cloud.189.cn/t/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://cloud.189.cn/t/{#shareCode#}",
					copyUrl: "https://cloud.189.cn/t/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("tianyiyun"),
				},
			],
			hecaiyun: [
				{
					enable: NetDiskLocalData.enable("hecaiyun"),
					link_innerText: `caiyun.139.com/m/i\\?([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"hecaiyun"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"hecaiyun"
					)}}[0-9a-zA-Z]{4}|)`,
					link_innerHTML: `caiyun.139.com/m/i\\?([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"hecaiyun"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"hecaiyun"
					)}}[0-9a-zA-Z]{4}|)`,
					shareCode: /caiyun\.139\.com\/m\/i\?([a-zA-Z0-9_\-]{8,14})/gi,
					shareCodeNeedRemoveStr: /caiyun\.139\.com\/m\/i\?/gi,
					checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
					accessCode: /([0-9a-zA-Z]{4})/gi,
					uiLinkShow: "caiyun.139.com/m/i?{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://caiyun.139.com/m/i?{#shareCode#}",
					copyUrl:
						"https://caiyun.139.com/m/i?{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("hecaiyun"),
				},
				{
					enable: NetDiskLocalData.enable("hecaiyun"),
					link_innerText: `yun.139.com/link/w/i/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"hecaiyun"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"hecaiyun"
					)}}[0-9a-zA-Z]{4}|)`,
					link_innerHTML: `yun.139.com/link/w/i/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"hecaiyun"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"hecaiyun"
					)}}[0-9a-zA-Z]{4}|)`,
					shareCode: /yun\.139\.com\/link\/w\/i\/([a-zA-Z0-9_\-]{8,14})/gi,
					shareCodeNeedRemoveStr: /yun\.139\.com\/link\/w\/i\//gi,
					checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
					accessCode: /([0-9a-zA-Z]{4})/gi,
					uiLinkShow:
						"yun.139.com/link/w/i/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://yun.139.com/link/w/i/{#shareCode#}",
					copyUrl:
						"https://yun.139.com/link/w/i/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("hecaiyun"),
				},
			],
			aliyun: [
				{
					enable: NetDiskLocalData.enable("aliyun"),
					link_innerText: `aliyundrive.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"aliyun"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"aliyun"
					)}}[0-9a-zA-Z]{4}|)`,
					link_innerHTML: `aliyundrive.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"aliyun"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"aliyun"
					)}}[0-9a-zA-Z]{4}|)`,
					shareCode: /aliyundrive\.com\/s\/([a-zA-Z0-9_\-]{8,14})/g,
					shareCodeNeedRemoveStr: /aliyundrive\.com\/s\//gi,
					checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
					accessCode: /([0-9a-zA-Z]{4})/gi,
					uiLinkShow: "aliyundrive.com/s/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://www.aliyundrive.com/s/{#shareCode#}",
					copyUrl:
						"https://www.aliyundrive.com/s/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("aliyun"),
				},
				{
					enable: NetDiskLocalData.enable("aliyun"),
					link_innerText: `aliyundrive.com/t/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"aliyun"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"aliyun"
					)}}[0-9a-zA-Z]{4}|)`,
					link_innerHTML: `aliyundrive.com/t/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"aliyun"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"aliyun"
					)}}[0-9a-zA-Z]{4}|)`,
					shareCode: /aliyundrive\.com\/t\/([a-zA-Z0-9_\-]{8,14})/g,
					shareCodeNeedRemoveStr: /aliyundrive\.com\/t\//gi,
					checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
					accessCode: /([0-9a-zA-Z]{4})/gi,
					uiLinkShow: "aliyundrive.com/t/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://www.aliyundrive.com/t/{#shareCode#}",
					copyUrl:
						"https://www.aliyundrive.com/t/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("aliyun"),
				},
				{
					enable: NetDiskLocalData.enable("aliyun"),
					link_innerText: `alipan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"aliyun"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"aliyun"
					)}}[0-9a-zA-Z]{4}|)`,
					link_innerHTML: `alipan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"aliyun"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"aliyun"
					)}}[0-9a-zA-Z]{4}|)`,
					shareCode: /alipan\.com\/s\/([a-zA-Z0-9_\-]{8,14})/g,
					shareCodeNeedRemoveStr: /alipan\.com\/s\//gi,
					checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
					accessCode: /([0-9a-zA-Z]{4})/gi,
					uiLinkShow: "alipan.com/s/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://www.alipan.com/s/{#shareCode#}",
					copyUrl:
						"https://www.alipan.com/s/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("aliyun"),
				},
			],
			wenshushu: [
				{
					enable: NetDiskLocalData.enable("wenshushu"),
					link_innerText: `(wenshushu.cn/f/([a-zA-Z0-9_-]{8,14})|wenshushu.cn/k/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"wenshushu"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"wenshushu"
					)}}[0-9a-zA-Z]{4}|)`,
					link_innerHTML: `(wenshushu.cn/f/([a-zA-Z0-9_-]{8,14})|wenshushu.cn/k/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"wenshushu"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"wenshushu"
					)}}[0-9a-zA-Z]{4}|)`,
					shareCode:
						/wenshushu.cn\/f\/([a-zA-Z0-9_-]{8,14})|wenshushu.cn\/k\/([a-zA-Z0-9_-]{8,14})/gi,
					shareCodeNeedRemoveStr: /wenshushu.cn\/f\/|wenshushu.cn\/k\//gi,
					checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
					accessCode: /[0-9a-zA-Z]{4}/gi,
					uiLinkShow: "www.wenshushu.cn/f/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://www.wenshushu.cn/f/{#shareCode#}",
					copyUrl:
						"https://www.wenshushu.cn/f/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("wenshushu"),
				},
				{
					enable: NetDiskLocalData.enable("wenshushu"),
					link_innerText: `(wss.ink/f/([a-zA-Z0-9_-]{8,14})|ws28.cn/f/([a-zA-Z0-9_-]{8,14})|wss1.cn/f/([a-zA-Z0-9_-]{8,14})|ws59.cn/f/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"wenshushu"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"wenshushu"
					)}}[0-9a-zA-Z]{4}|)`,
					link_innerHTML: `(wss.ink/f/([a-zA-Z0-9_-]{8,14})|ws28.cn/f/([a-zA-Z0-9_-]{8,14})|wss1.cn/f/([a-zA-Z0-9_-]{8,14})|ws59.cn/f/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"wenshushu"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"wenshushu"
					)}}[0-9a-zA-Z]{4}|)`,
					shareCode:
						/wss.ink\/f\/([a-zA-Z0-9_-]{8,14})|ws28.cn\/f\/([a-zA-Z0-9_-]{8,14})|wss1.cn\/f\/([a-zA-Z0-9_-]{8,14})|ws59.cn\/f\/([a-zA-Z0-9_-]{8,14})/gi,
					shareCodeNeedRemoveStr:
						/wss.ink\/f\/|ws28.cn\/f\/|wss1.cn\/f\/|ws59.cn\/f\//gi,
					checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
					accessCode: /[0-9a-zA-Z]{4}/gi,
					uiLinkShow: "www.wenshushu.cn/f/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://www.wenshushu.cn/f/{#shareCode#}",
					copyUrl:
						"https://www.wenshushu.cn/f/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("wenshushu"),
				},
			],
			nainiu: [
				{
					enable: NetDiskLocalData.enable("nainiu"),
					link_innerText: `cowtransfer.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"nainiu"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"nainiu"
					)}}[0-9a-zA-Z]{4,6}|)`,
					link_innerHTML: `cowtransfer.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"nainiu"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"nainiu"
					)}}[0-9a-zA-Z]{4,6}|)`,
					shareCode: /cowtransfer.com\/s\/([a-zA-Z0-9_\-]{8,14})/gi,
					shareCodeNeedRemoveStr: /cowtransfer\.com\/s\//gi,
					checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
					accessCode: /([0-9a-zA-Z]{4,6})/gi,
					uiLinkShow: "cowtransfer.com/s/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://cowtransfer.com/s/{#shareCode#}",
					copyUrl:
						"https://cowtransfer.com/s/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("nainiu"),
				},
			],
			_123pan: [
				{
					enable: NetDiskLocalData.enable("_123pan"),
					link_innerText: `123pan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"_123pan"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"_123pan"
					)}}[0-9a-zA-Z]{4}|)`,
					link_innerHTML: `123pan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"_123pan"
					)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"_123pan"
					)}}[0-9a-zA-Z]{4}|)`,
					shareCode: /123pan.com\/s\/([a-zA-Z0-9_\-]{8,14})/gi,
					shareCodeNeedRemoveStr: /123pan.com\/s\//gi,
					checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
					accessCode: /([0-9a-zA-Z]{4})/gi,
					uiLinkShow: "123pan.com/s/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://123pan.com/s/{#shareCode#}",
					copyUrl: "https://123pan.com/s/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("_123pan"),
				},
			],
			weiyun: [
				{
					enable: NetDiskLocalData.enable("weiyun"),
					link_innerText: `weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"weiyun"
					)}(访问码|密码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"weiyun"
					)}[0-9a-zA-Z]{4,6}|)`,
					link_innerHTML: `weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"weiyun"
					)}(访问码|密码|提取码)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"weiyun"
					)}[0-9a-zA-Z]{4,6}|)`,
					shareCode: /weiyun.com\/([0-9a-zA-Z\-_]{7,24})/gi,
					shareCodeNeedRemoveStr: /weiyun.com\//gi,
					checkAccessCode: /(提取码|密码|访问码)[\s\S]+/g,
					accessCode: /([0-9a-zA-Z]{4,6})/gi,
					uiLinkShow: "share.weiyun.com/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://share.weiyun.com/{#shareCode#}",
					copyUrl:
						"https://share.weiyun.com/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("weiyun"),
				},
			],
			xunlei: [
				{
					enable: NetDiskLocalData.enable("xunlei"),
					link_innerText: `xunlei.com/s/[0-9a-zA-Z-_]{8,30}([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"xunlei"
					)}}(\\?pwd=|访问码|提取码|密码|)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"xunlei"
					)}}[0-9a-zA-Z]{4}|)`,
					link_innerHTML: `xunlei.com\/s\/[0-9a-zA-Z\-_]{8,30}([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"xunlei"
					)}}(\\?pwd=|访问码|提取码|密码|)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"xunlei"
					)}}[0-9a-zA-Z]{4}|)`,
					shareCode: /xunlei.com\/s\/([0-9a-zA-Z\-_]{8,30})/gi,
					shareCodeNeedRemoveStr: /xunlei.com\/s\//gi,
					checkAccessCode: /(\?pwd=|提取码|密码|访问码)[\s\S]+/g,
					accessCode: /([0-9a-zA-Z]{4})/gi,
					uiLinkShow:
						"pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#} 提取码: {#accessCode#}",
					blank: "https://pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#}",
					copyUrl: "https://pan.xunlei.com/s/{#shareCode#}?pwd={#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("xunlei"),
				},
			],
			_115pan: [
				{
					enable: NetDiskLocalData.enable("_115pan"),
					link_innerText: `115.com/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"_115pan"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"_115pan"
					)}}[0-9a-zA-Z]{4}|)`,
					link_innerHTML: `115.com\/s\/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"_115pan"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"_115pan"
					)}}[0-9a-zA-Z]{4}|)`,
					shareCode: /115.com\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
					shareCodeNeedRemoveStr: /115.com\/s\//gi,
					checkAccessCode: /(提取码|密码|\?password=|访问码)[\s\S]+/gi,
					accessCode: /(\?password=|)([0-9a-zA-Z]{4})/i,
					uiLinkShow: "115.com/s/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://115.com/s/{#shareCode#}",
					copyUrl: "https://115.com/s/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("_115pan"),
				},
			],
			chengtong: [
				/* d */
				{
					enable: NetDiskLocalData.enable("chengtong"),
					link_innerText: `(ct.ghpym.com|pan.jc-box.com|download.jamcz.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"_chengtong"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"chengtong"
					)}}[0-9a-zA-Z]{4,6}|)`,
					link_innerHTML: `(ct.ghpym.com|pan.jc-box.com|download.jamcz.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"_chengtong"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"chengtong"
					)}}[0-9a-zA-Z]{4,6}|)`,
					shareCode:
						/(ct.ghpym.com|pan.jc-box.com|download.jamcz.com)\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
					shareCodeNeedRemoveStr:
						/(ct.ghpym.com|pan.jc-box.com|download.jamcz.com)\/d\//gi,
					checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
					accessCode: /([0-9a-zA-Z]{4,6})/gi,
					paramMatch: /([a-zA-Z0-9\.]+)\/d\//i,
					uiLinkShow: "{#$1#}/d/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://{#$1#}/d/{#shareCode#}",
					copyUrl: "https://{#$1#}/d/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("chengtong"),
				},
				/* d */
				{
					enable: NetDiskLocalData.enable("chengtong"),
					link_innerText: `ctfile.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"_chengtong"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"chengtong"
					)}}[0-9a-zA-Z]{4,6}|)`,
					link_innerHTML: `ctfile.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"_chengtong"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"chengtong"
					)}}[0-9a-zA-Z]{4,6}|)`,
					shareCode: /ctfile.com\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
					shareCodeNeedRemoveStr: /ctfile.com\/d\//gi,
					checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
					accessCode: /([0-9a-zA-Z]{4,6})/gi,
					uiLinkShow: "url95.ctfile.com/d/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://url95.ctfile.com/d/{#shareCode#}",
					copyUrl:
						"https://url95.ctfile.com/d/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("chengtong"),
				},
				/* file */
				{
					enable: NetDiskLocalData.enable("chengtong"),
					link_innerText: `(2k.us|u062.com|545c.com|t00y.com)/file/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"_chengtong"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"chengtong"
					)}}[0-9a-zA-Z]{4,6}|)`,
					link_innerHTML: `(2k.us|u062.com|545c.com|t00y.com)/file/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"_chengtong"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"chengtong"
					)}}[0-9a-zA-Z]{4,6}|)`,
					shareCode:
						/(2k.us|u062.com|545c.com|t00y.com)\/file\/([0-9a-zA-Z\-_]{8,26})/gi,
					shareCodeNeedRemoveStr:
						/(2k.us|u062.com|545c.com|t00y.com)\/file\//gi,
					checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
					accessCode: /([0-9a-zA-Z]{4,6})/gi,
					uiLinkShow: "u062.com/file/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://u062.com/file/{#shareCode#}",
					copyUrl: "https://u062.com/file/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("chengtong"),
				},
				/* f */
				{
					enable: NetDiskLocalData.enable("chengtong"),
					link_innerText: `(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"_chengtong"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"chengtong"
					)}}[0-9a-zA-Z]{4,6}|)`,
					link_innerHTML: `(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"_chengtong"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"chengtong"
					)}}[0-9a-zA-Z]{4,6}|)`,
					shareCode:
						/(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc)\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
					shareCodeNeedRemoveStr:
						/(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc)\/f\//gi,
					checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
					accessCode: /([0-9a-zA-Z]{4,6})/gi,
					paramMatch: /([0-9a-zA-Z\.+])\/f\//i,
					uiLinkShow: "{#$1#}/f/{#shareCode#} 提取码: {#accessCode#}",
					blank: "http://{#$1#}/f/{#shareCode#}",
					copyUrl: "http://{#$1#}/f/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("chengtong"),
				},
				/* f */
				{
					enable: NetDiskLocalData.enable("chengtong"),
					link_innerText: `(ctfile.com|089u.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"_chengtong"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"chengtong"
					)}}[0-9a-zA-Z]{4,6}|)`,
					link_innerHTML: `(ctfile.com|089u.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"_chengtong"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"chengtong"
					)}}[0-9a-zA-Z]{4,6}|)`,
					shareCode: /(ctfile.com|089u.com)\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
					shareCodeNeedRemoveStr: /(ctfile.com|089u.com)\/f\//gi,
					checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
					accessCode: /([0-9a-zA-Z]{4,6})/gi,
					uiLinkShow: "url95.ctfile.com/f/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://url95.ctfile.com/f/{#shareCode#}",
					copyUrl:
						"https://url95.ctfile.com/f/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("chengtong"),
				},
				/* dir */
				{
					enable: NetDiskLocalData.enable("chengtong"),
					link_innerText: `(089u.com|474b.com)/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"_chengtong"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"chengtong"
					)}}[0-9a-zA-Z]{4,6}|)`,
					link_innerHTML: `(089u.com|474b.com)/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"_chengtong"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"chengtong"
					)}}[0-9a-zA-Z]{6}|)`,
					shareCode: /(089u.com|474b.com)\/dir\/([0-9a-zA-Z\-_]{8,26})/gi,
					shareCodeNeedRemoveStr: /(089u.com|474b.com)\/dir\//gi,
					checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
					accessCode: /([0-9a-zA-Z]{6})/gi,
					uiLinkShow: "089u.com/dir/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://089u.com/dir/{#shareCode#}",
					copyUrl: "https://089u.com/dir/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("chengtong"),
				},
			],
			kuake: [
				{
					enable: NetDiskLocalData.enable("kuake"),
					link_innerText: `quark.cn/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"kuake"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"kuake"
					)}}[0-9a-zA-Z]{4}|)`,
					link_innerHTML: `quark.cn/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"kuake"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"kuake"
					)}}[0-9a-zA-Z]{4}|)`,
					shareCode: /quark.cn\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
					shareCodeNeedRemoveStr: /quark.cn\/s\//gi,
					checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
					accessCode: /([0-9a-zA-Z]{4})/gi,
					uiLinkShow: "quark.cn/s/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://pan.quark.cn/s/{#shareCode#}",
					copyUrl: "https://pan.quark.cn/s/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("kuake"),
				},
			],
			magnet: [
				{
					enable: NetDiskLocalData.enable("magnet"),
					link_innerText: `magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}`,
					link_innerHTML: `magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}`,
					shareCode: /magnet:\?xt=urn:btih:([0-9a-fA-F]{32,40})/gi,
					shareCodeNeedRemoveStr: /magnet:\?xt=urn:btih:/gi,
					checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
					accessCode: /([0-9a-zA-Z]{4})/gi,
					uiLinkShow: "magnet:?xt=urn:btih:{#shareCode#}",
					blank: "magnet:?xt=urn:btih:{#shareCode#}",
					copyUrl: "magnet:?xt=urn:btih:{#shareCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("magnet"),
				},
			],
			jianguoyun: [
				{
					enable: NetDiskLocalData.enable("jianguoyun"),
					link_innerText: `jianguoyun.com/p/[0-9a-zA-Z-_]{16,24}([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"jianguoyun"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"jianguoyun"
					)}}[0-9a-zA-Z]+|)`,
					link_innerHTML: `jianguoyun.com/p/[0-9a-zA-Z-_]{16,24}([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"jianguoyun"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"jianguoyun"
					)}}[0-9a-zA-Z]+|)`,
					shareCode: /jianguoyun.com\/p\/([0-9a-zA-Z\-_]{16,24})/gi,
					shareCodeNeedRemoveStr: /jianguoyun.com\/p\//gi,
					checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
					accessCode: /([0-9a-zA-Z]{3,6})/gi,
					uiLinkShow: "jianguoyun.com/p/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://www.jianguoyun.com/p/{#shareCode#}",
					copyUrl:
						"https://www.jianguoyun.com/p/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("jianguoyun"),
				},
			],
			onedrive: [
				{
					enable: NetDiskLocalData.enable("onedrive"),
					link_innerText: `[0-9a-zA-Z-_]+.sharepoint.com/[0-9a-zA-Z-_:]+/[0-9a-zA-Z-_:]+/personal/[0-9a-zA-Z-_]+/[0-9a-zA-Z-_]+([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"onedrive"
					)}}(访问码|密码|提取码|\\?password=\\?e=)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"onedrive"
					)}}[0-9a-zA-Z]+|)`,
					link_innerHTML: `[0-9a-zA-Z-_]+.sharepoint.com/[0-9a-zA-Z-_:]+/[0-9a-zA-Z-_:]+/personal/[0-9a-zA-Z-_]+/[0-9a-zA-Z-_]+([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"onedrive"
					)}}(访问码|密码|提取码|\\?password=\\?e=)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"onedrive"
					)}}[0-9a-zA-Z]+|)`,
					shareCode:
						/[0-9a-zA-Z-_]+\/[0-9a-zA-Z-_:]+\/[0-9a-zA-Z-_:]+\/personal\/[0-9a-zA-Z-_]+\/([0-9a-zA-Z\-_]+)/gi,
					shareCodeNeedRemoveStr:
						/[0-9a-zA-Z-_]+\/[0-9a-zA-Z-_:]+\/[0-9a-zA-Z-_:]+\/personal\/[0-9a-zA-Z-_]+\//gi,
					checkAccessCode: /(提取码|密码|访问码|\?password=|\?e=)[\s\S]+/gi,
					accessCode: /([0-9a-zA-Z]{4,8})/gi,
					paramMatch:
						/([0-9a-zA-Z-_]+).sharepoint.com\/([0-9a-zA-Z-_:]+)\/([0-9a-zA-Z-_:]+)\/personal\/([0-9a-zA-Z-_]+)\/([0-9a-zA-Z-_]+)/i,
					uiLinkShow:
						"{#$1#}.sharepoint.com/{#$2#}/{#$3#}/personal/{#$4#}/{#shareCode#} 提取码: {#accessCode#}",
					blank:
						"https://{#$1#}.sharepoint.com/{#$2#}/{#$3#}/personal/{#$4#}/{#shareCode#}?e={#accessCode#}",
					copyUrl:
						"https://{#$1#}.sharepoint.com/{#$2#}/{#$3#}/personal/{#$4#}/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("onedrive"),
				},
			],
			uc: [
				{
					enable: NetDiskLocalData.enable("uc"),
					link_innerText: `(drive|fast).uc.cn/s/[0-9a-zA-Z]{8,24}([\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
						"uc"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
						"uc"
					)}}[0-9a-zA-Z]+|)`,
					link_innerHTML: `(drive|fast).uc.cn/s/[0-9a-zA-Z]{8,24}([\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
						"uc"
					)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
						"uc"
					)}}[0-9a-zA-Z]+|)`,
					shareCode: /(drive|fast).uc.cn\/s\/([0-9a-zA-Z]{8,24})/gi,
					shareCodeNeedRemoveStr: /(drive|fast).uc.cn\/s\//gi,
					checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
					accessCode: /([0-9a-zA-Z]+)/gi,
					uiLinkShow: "drive.uc.cn/s/{#shareCode#} 提取码: {#accessCode#}",
					blank: "https://drive.uc.cn/s/{#shareCode#}",
					copyUrl: "https://drive.uc.cn/s/{#shareCode#}\n密码：{#accessCode#}",
					checkLinkValidity: NetDiskLocalData.checkLinkValidity("uc"),
				},
			],
		},
		/**
		 * 初始化
		 */
		init() {
			if (!this.isInit) {
				this.isInit = true;
				this.matchLink = new Set();
				this.initLinkDict();
			}
		},
		/**
		 * 初始化字典
		 */
		initLinkDict() {
			NetDisk.linkDict = new utils.Dictionary();
			NetDisk.tempLinkDict = new utils.Dictionary();
			Object.keys(NetDisk.regular).forEach((netDiskName) => {
				NetDisk.linkDict.set(netDiskName, new utils.Dictionary());
				NetDisk.tempLinkDict.set(netDiskName, new utils.Dictionary());
			});
		},
		/**
		 * 删除某些需要忽略的text或html，如：设置、直链弹窗
		 * @param {string} text 需要进行处理的字符串
		 * @param {boolean} isHTML 是否是html属性
		 * @returns {string}
		 */
		ignoreStrRemove(text, isHTML = false) {
			let ignoreNodeList = [];
			ignoreNodeList.forEach((ignoreElement) => {
				if (ignoreElement == void 0) {
					return;
				}
				if (isHTML) {
					if (ignoreElement.innerHTML != void 0) {
						text = text.replaceAll(ignoreElement.innerHTML, "");
					}
				} else {
					let text = ignoreElement.innerText || ignoreElement.textContent;
					if (text != void 0) {
						text = text.replaceAll(text, "");
					}
				}
			});
			return text;
		},
		/**
		 * 处理链接，将匹配到的链接转为参数和密码存入字典中
		 * @param {string} netDiskName 网盘名称
		 * @param {number} netDiskIndex 网盘名称的索引下标
		 * @param {string} matchText 正在进行匹配的文本
		 * @returns 返回值可能为空
		 */
		handleLink(netDiskName, netDiskIndex, matchText) {
			let shareCode = this.handleShareCode(
				netDiskName,
				netDiskIndex,
				matchText
			);
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
		 * @param {string} netDiskName 网盘名称
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} matchText 正在进行匹配的文本
		 */
		handleShareCode(netDiskName, netDiskIndex, matchText) {
			/* 当前执行的规则 */
			let netDiskMatchRegular = NetDisk.regular[netDiskName][netDiskIndex];
			let shareCodeMatch = matchText
				.match(netDiskMatchRegular.shareCode)
				?.filter((item) => utils.isNotNull(item));
			if (utils.isNull(shareCodeMatch)) {
				log.error([
					`匹配shareCode为空`,
					{
						匹配的文本: matchText,
						规则: netDiskMatchRegular,
						正在使用的规则: netDiskMatchRegular.shareCode,
						网盘名称: netDiskName,
						网盘名称索引下标: netDiskIndex,
					},
				]);
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
			for (const shareCodeNotMatchRegexp of NetDisk.shareCodeNotMatchRegexpList) {
				if (shareCode.match(shareCodeNotMatchRegexp)) {
					log.error(`不可能的shareCode => ${shareCode}`);
					return;
				}
			}
			/* %E7%BD%91%E7%9B%98 => 网盘 */
			shareCode = decodeURI(shareCode);
			if (
				GM_getValue("excludeIdenticalSharedCodes") &&
				utils.isSameChars(
					shareCode,
					GM_getValue(
						"excludeIdenticalSharedCodesCoefficient",
						NetDiskData.defaultExcludeIdenticalSharedCodesCoefficient
					)
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
		 * @param {string} netDiskName 网盘名称
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} matchText 正在进行匹配的文本
		 * @returns {string} "xxxx" || ""
		 */
		handleAccessCode(netDiskName, netDiskIndex, matchText) {
			/* 当前执行正则匹配的规则 */
			let netDiskMatchRegular = this.regular[netDiskName][netDiskIndex];
			let accessCode = "";
			if (!netDiskMatchRegular.checkAccessCode) {
				/* 不存在匹配提取码的正则 */
				return "";
			}
			let accessCodeMatch = matchText.match(
				netDiskMatchRegular.checkAccessCode
			);
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
				for (const accessCodeNotMatchRegexp of NetDisk.accessCodeNotMatchRegexpList) {
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
		 * @param {string} netDiskName 网盘名称
		 * @param {string} accessCode 访问码
		 * @param {string} matchText 匹配到的文本
		 * @returns {string}
		 */
		handleAccessCodeByUserRule(netDiskName, accessCode, matchText) {
			let regularList = NetDiskUI.accessCodeRule.getValue();
			let result = accessCode;
			let currentUrl = window.location.href;
			/* 先遍历本地的自定义的访问码规则 */
			for (
				let regularIndex = 0;
				regularIndex < regularList.length;
				regularIndex++
			) {
				let rule = regularList[regularIndex];
				let urlRegexp = new RegExp(rule.urlRegexp, "i");
				/* 如果网址匹配成功则进行下一步 */
				if (!currentUrl.match(urlRegexp)) {
					continue;
				}
				/* 循环遍历自定义的访问码规则的网盘信息 */
				for (let index = 0; index < rule.netdisk.length; index++) {
					let netDiskRegular = rule.netdisk[index];
					/* 自定义规则的value(也就是网盘的字母名)和参数netDiskName相同，则直接返回设定的值 */
					if (netDiskRegular.value === netDiskName) {
						log.success(`使用自定义规则中的提取码 ${netDiskName} ${result}`);
						return rule.accessCode;
					}
				}
			}
			/* 不存在 */
			return result;
		},
		/**
		 * 获取在弹窗中显示出的链接
		 * @param {string} netDiskName 网盘名称，指NetDisk.regular的内部键名
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 * @param {?string} matchText 匹配到的文本
		 * @returns {string}
		 */
		handleLinkShow(
			netDiskName,
			netDiskIndex,
			shareCode,
			accessCode,
			matchText
		) {
			let netDiskMatchRegular = NetDisk.regular[netDiskName][netDiskIndex];
			if (netDiskMatchRegular == void 0) {
				Qmsg.error("BUG: 获取uiLink规则失败");
				log.error([
					"BUG: 分析参数",
					netDiskName,
					netDiskIndex,
					shareCode,
					accessCode,
				]);
				throw "获取uiLink规则失败";
			}
			let uiLink = this.replaceParam(netDiskMatchRegular["uiLinkShow"], {
				shareCode: shareCode,
			});
			if (accessCode && accessCode != "") {
				uiLink = this.replaceParam(uiLink, {
					accessCode: accessCode,
				});
			} else {
				uiLink = uiLink.replace(NetDisk.noAccessCodeRegExp, "");
			}
			if (netDiskMatchRegular.paramMatch) {
				/**
				 * 当前字典
				 */
				let currentDict = NetDisk.linkDict.get(netDiskName).get(shareCode);
				matchText = matchText ?? currentDict?.matchText;
				if (utils.isNotNull(matchText)) {
					let paramMatchArray = matchText.match(netDiskMatchRegular.paramMatch);
					let replaceParamData = {};
					for (let index = 0; index < paramMatchArray.length; index++) {
						replaceParamData[`$${index}`] = paramMatchArray[index];
					}
					uiLink = this.replaceParam(uiLink, replaceParamData);
				}
			}
			return uiLink;
		},
		/**
		 * 参数替换，区分大小写
		 *
		 * 例如
		 * + {#shareCode#} => xxxx
		 * + {#accessCode#} => xxxx
		 * + {#$1#} => xxxx
		 * @param {string} text
		 * @param {{}} [data={}]
		 */
		replaceParam(text, data = {}) {
			if (typeof text !== "string") {
				return text;
			}
			Object.keys(data).forEach((key) => {
				let replacedText = data[key];
				if (utils.isNotNull(replacedText)) {
					try {
						text = text.replaceAll(
							`{#encodeURI-${key}#}`,
							encodeURI(replacedText)
						);
					} catch (error) {
						log.error(["encodeURI-替换的文本失败", [replacedText]]);
					}

					try {
						text = text.replaceAll(
							`{#encodeURIComponent-${key}#}`,
							encodeURIComponent(replacedText)
						);
					} catch (error) {
						log.error(["encodeURIComponent-替换的文本失败", [replacedText]]);
					}
					try {
						text = text.replaceAll(
							`{#decodeURI-${key}#}`,
							decodeURI(replacedText)
						);
					} catch (error) {
						log.error(["decodeURI-替换的文本失败", [replacedText]]);
					}
					try {
						text = text.replaceAll(
							`{#decodeURIComponent-${key}#}`,
							decodeURIComponent(replacedText)
						);
					} catch (error) {
						log.error(["encodeURIComponent-替换的文本失败", [replacedText]]);
					}
					text = text.replaceAll(`{#${key}#}`, replacedText);
				}
			});
			return text;
		},
		/**
		 * 获取剪贴板文本
		 * @returns {Promise<string>}
		 */
		async getClipboardText() {
			/** 读取剪贴板 */
			function readClipboardText(resolve) {
				navigator.clipboard
					.readText()
					.then((clipboardText) => {
						resolve(clipboardText);
					})
					.catch(
						/** @param {TypeError} error */
						(error) => {
							log.error(["读取剪贴板内容失败👉", error]);
							resolve("");
						}
					);
			}
			/** 申请读取剪贴板的权限 */
			function requestPermissionsWithClipboard(resolve) {
				navigator.permissions
					.query({
						name: "clipboard-read",
					})
					.then((permissionStatus) => {
						readClipboardText(resolve);
					})
					.catch(
						/** @param {TypeError} error */
						(error) => {
							log.error([
								"申请剪贴板权限失败，尝试直接读取👉",
								error.message ?? error.name ?? error.stack,
							]);
							/* 该权限申请Api可能在该环境下不生效，尝试直接读取剪贴板 */
							readClipboardText(resolve);
						}
					);
			}
			function checkClipboardApi() {
				if (typeof navigator?.clipboard?.readText !== "function") {
					return false;
				}
				if (typeof navigator?.permissions?.query !== "function") {
					return false;
				}
				return true;
			}
			return new Promise((resolve) => {
				if (!checkClipboardApi()) {
					resolve("");
					return;
				}
				if (document.hasFocus()) {
					requestPermissionsWithClipboard(resolve);
				} else {
					window.addEventListener(
						"focus",
						() => {
							requestPermissionsWithClipboard(resolve);
						},
						{
							once: true,
						}
					);
				}
			});
		},
		/**
		 * 获取已匹配到的链接的存储的对象
		 * @param {string} accessCode 访问码
		 * @param {number} [netDiskIndex=0] 下标，默认0
		 * @param {boolean} [isForceAccessCode=false] 是否锁定访问码不允许修改，默认false
		 * @param {string} matchText 匹配到的文本
		 * @returns {NetDiskDictData}
		 */
		getLinkDickObj(
			accessCode,
			netDiskIndex = 0,
			isForceAccessCode = false,
			matchText
		) {
			return {
				accessCode: accessCode,
				netDiskIndex: netDiskIndex,
				isForceAccessCode: isForceAccessCode,
				matchText: matchText,
			};
		},
	};

	const NetDiskDebug = {
		/**
		 * 对传入的url进行处理，返回shareCode
		 * @param {string} matchText 正在进行匹配的文本
		 * @param {NetDiskRegularOption} regular 当前执行的规则
		 * @param {(logData: NetDiskDebugLogData)=>void} logCallBack 日志回调
		 */
		handleShareCode(matchText, regular, logCallBack) {
			let shareCodeMatch = matchText
				.match(regular.shareCode)
				?.filter((item) => utils.isNotNull(item));
			logCallBack({
				status: true,
				msg: [
					`正则: shareCode`,
					"作用: 获取shareCode",
					"结果: ",
					shareCodeMatch,
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
				GM_getValue("excludeIdenticalSharedCodes") &&
				utils.isSameChars(
					shareCode,
					GM_getValue(
						"excludeIdenticalSharedCodesCoefficient",
						NetDiskData.defaultExcludeIdenticalSharedCodesCoefficient
					)
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
		 * @param {NetDiskRegularOption} regular 当前执行的规则
		 * @param {(logData: NetDiskDebugLogData)=>void} logCallBack 日志回调
		 */
		handleAccessCode(matchText, regular, logCallBack) {
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
					accessCodeMatch,
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
						accessCodeMatchArray,
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
		 * @param {NetDiskRegularOption} regular 当前执行的规则
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 * @param {(logData: NetDiskDebugLogData)=>void} logCallBack 日志回调
		 */
		handleLinkShow(matchText, regular, shareCode, accessCode, logCallBack) {
			let uiLink = NetDisk.replaceParam(regular["uiLinkShow"], {
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
				uiLink = NetDisk.replaceParam(uiLink, {
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
					let replaceParamData = {};
					for (let index = 0; index < paramMatchArray.length; index++) {
						replaceParamData[`$${index}`] = paramMatchArray[index];
					}
					uiLink = NetDisk.replaceParam(uiLink, replaceParamData);
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
		 * @param {NetDiskRegularOption} regular 当前执行的规则
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 * @param {(logData: NetDiskDebugLogData)=>void} logCallBack 日志回调
		 */
		handleBlank(matchText, regular, shareCode, accessCode, logCallBack) {
			let blankUrl = NetDisk.replaceParam(regular["blank"], {
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
				blankUrl = NetDisk.replaceParam(blankUrl, {
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
					let replaceParamData = {};
					for (let index = 0; index < paramMatchArray.length; index++) {
						replaceParamData[`$${index}`] = paramMatchArray[index];
					}
					blankUrl = NetDisk.replaceParam(blankUrl, replaceParamData);
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
		 * @param {NetDiskRegularOption} regular 当前执行的规则
		 * @param {string} shareCode 分享码
		 * @param {string} accessCode 访问码
		 * @param {(logData: NetDiskDebugLogData)=>void} logCallBack 日志回调
		 */
		handleCopyUrl(matchText, regular, shareCode, accessCode, logCallBack) {
			let copyUrl = NetDisk.replaceParam(regular["copyUrl"], {
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
				copyUrl = NetDisk.replaceParam(copyUrl, {
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
					let replaceParamData = {};
					for (let index = 0; index < paramMatchArray.length; index++) {
						replaceParamData[`$${index}`] = paramMatchArray[index];
					}
					copyUrl = NetDisk.replaceParam(copyUrl, replaceParamData);
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

	/** 网盘-校验链接有效性 */
	const NetDiskCheckLinkValidity = {
		$data: {
			isSubscribing: false,
			/**
			 * @type {NetDiskCheckLinkValidityOption[]}
			 */
			subscribe: [],
		},
		/**
		 * 网盘检查的状态码
		 */
		status: {
			loading: {
				code: 1,
				msg: "验证中",
				setView(ele, checkInfo) {
					NetDiskCheckLinkValidity.setViewCheckValid(ele, "loading");
					ele.innerHTML = pops.config.iconSVG.loading;
				},
			},
			success: {
				code: 200,
				msg: "该链接有效",
				setView(ele, checkInfo) {
					NetDiskCheckLinkValidity.setViewCheckValid(ele, "success");
					ele.innerHTML = /*html*/ `
					<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
						<path
						fill="currentColor"
						d="M874.119618 149.859922A510.816461 510.816461 0 0 0 511.997 0.00208a509.910462 509.910462 0 0 0-362.119618 149.857842c-199.817789 199.679789-199.817789 524.581447 0 724.260236a509.969462 509.969462 0 0 0 362.119618 149.857842A508.872463 508.872463 0 0 0 874.119618 874.120158c199.836789-199.679789 199.836789-524.581447 0-724.260236zM814.94268 378.210681L470.999043 744.132295a15.359984 15.359984 0 0 1-5.887994 4.095996c-1.751998 1.180999-2.913997 2.362998-5.276994 2.913997a34.499964 34.499964 0 0 1-13.469986 2.914997 45.547952 45.547952 0 0 1-12.897986-2.303998l-4.095996-2.363997a45.291952 45.291952 0 0 1-7.009992-4.095996l-196.902793-193.789796a34.126964 34.126964 0 0 1-10.555989-25.186973c0-9.37399 3.583996-18.74698 9.98399-25.186974a36.429962 36.429962 0 0 1 50.372947 0l169.98382 167.423824L763.389735 330.220732a37.059961 37.059961 0 0 1 50.371947-1.732998 33.647965 33.647965 0 0 1 11.165988 25.186973 35.544963 35.544963 0 0 1-9.98399 24.575974v-0.04z m0 0"></path>
					</svg>
					`;
					NetDiskCheckLinkValidity.setViewAgainCheckClickEvent(ele, checkInfo);
				},
			},
			/**
			 * @type {NetDiskCheckLinkValidityStatus}
			 */
			error: {
				code: -404,
				msg: "网络异常",
				setView(ele, checkInfo) {
					NetDiskCheckLinkValidity.setViewCheckValid(ele, "error");
					ele.innerHTML = /*html*/ `
					<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
						<path
						fill="currentColor"
						d="M511.808 692.224c-18.048 0-35.136 3.968-50.432 11.392-25.472 12.416-46.528 33.92-57.792 60.032-5.632 14.144-9.024 29.504-9.024 45.952 0 65.152 52.672 117.824 117.248 117.824 65.28 0 117.952-52.672 117.952-117.824 0-64.64-52.672-117.376-117.952-117.376z m0 178.496c-33.408 0-60.608-27.712-60.608-61.12 0-33.472 27.2-60.672 60.608-60.672s61.248 27.2 61.248 60.672c0 33.472-27.776 61.12-61.248 61.12zM286.784 661.632c3.968 3.392 8.512 5.632 12.992 5.632L438.08 523.328c-60.032 14.72-114.432 49.344-155.328 98.624-9.536 11.84-7.872 30.08 4.032 39.68zM622.912 534.656l-43.008 45.312c45.312 13.056 86.72 40.256 117.376 78.208 5.632 6.784 13.568 10.24 22.08 10.24 6.272 0 12.416-2.24 18.176-6.784 11.904-9.6 13.568-27.84 3.392-39.68-31.808-39.104-72.704-69.12-118.016-87.296zM511.808 391.168c17.024 0 33.408 1.216 49.856 3.456l47.68-49.856c-31.744-6.848-64.064-10.24-97.536-10.24-142.784 0-277.12 63.488-367.232 174.656-10.24 11.904-8.576 30.08 3.904 39.68 5.12 4.48 11.328 6.784 18.176 6.784 7.936 0 15.872-3.968 21.568-10.816 79.872-97.536 197.76-153.664 323.584-153.664zM751.616 400.32l-40.256 41.92c47.04 24.96 89.536 60.032 124.096 102.592 10.24 12.48 27.84 14.208 40.256 3.968 11.968-9.6 13.632-27.84 3.968-39.68-36.16-44.8-79.872-81.088-128.064-108.8zM705.152 244.928l42.56-44.672c-73.664-28.992-153.6-44.224-235.904-44.224-196.672 0-380.864 87.872-505.6 239.744-9.6 12.48-7.872 30.08 3.968 40.256 5.632 3.968 11.904 6.208 18.112 6.208 7.936 0 16.448-3.392 22.144-10.176C163.84 292.608 332.096 212.672 511.808 212.672c66.944 0 132.16 10.752 193.344 32.256zM1017.472 395.776c-40.192-49.92-87.296-92.416-139.456-126.976l-39.68 41.344C889.408 343.04 935.36 383.808 973.888 432c9.6 11.904 27.776 13.568 39.68 3.968 11.84-10.176 14.144-27.712 3.904-40.192zM937.408 104.512c-11.328-10.944-29.312-10.496-40.064 0.832L179.008 854.72c-10.816 11.328-10.496 29.248 0.896 40.064 5.44 5.312 12.48 7.872 19.584 7.872 7.488 0 14.848-2.88 20.416-8.704L938.24 144.576c10.88-11.328 10.496-29.248-0.832-40.064z"></path>
					</svg>
					`;
					NetDiskCheckLinkValidity.setViewAgainCheckClickEvent(ele, checkInfo);
				},
			},
			/** 该链接已失效 */
			failed: {
				code: 0,
				msg: "该链接已失效",
				setView(ele, checkInfo) {
					NetDiskCheckLinkValidity.setViewCheckValid(ele, "failed");
					ele.innerHTML = /*html*/ `
					<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
						<path
							fill="currentColor"
							d="M549.044706 512l166.189176-166.249412a26.383059 26.383059 0 0 0 0-36.98447 26.383059 26.383059 0 0 0-37.044706 0L512 475.015529l-166.249412-166.249411a26.383059 26.383059 0 0 0-36.98447 0 26.383059 26.383059 0 0 0 0 37.044706L475.015529 512l-166.249411 166.249412a26.383059 26.383059 0 0 0 0 36.98447 26.383059 26.383059 0 0 0 37.044706 0L512 548.984471l166.249412 166.249411a26.383059 26.383059 0 0 0 36.98447 0 26.383059 26.383059 0 0 0 0-37.044706L548.984471 512zM512 1024a512 512 0 1 1 0-1024 512 512 0 0 1 0 1024z"></path>
					</svg>
					`;
					NetDiskCheckLinkValidity.setViewAgainCheckClickEvent(ele, checkInfo);
				},
			},
			needAccessCode: {
				code: 201,
				msg: "该链接缺失提取码",
				setView(ele, checkInfo) {
					NetDiskCheckLinkValidity.setViewCheckValid(ele, "needAccessCode");
					ele.innerHTML = /*html*/ `
					<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
						<path
						fill="currentColor"
						d="M757.810429 373.751333 325.645708 373.751333l0-83.895759c0-103.694687 81.507362-184.922686 185.559183-184.922686 78.121242 0 146.053424 46.74565 173.062568 119.090329 3.865028 10.352789 15.384385 15.609513 25.742291 11.746532 10.351766-3.866051 15.609513-15.390525 11.744485-25.742291C688.844707 121.877815 606.198405 64.918545 511.204891 64.918545c-61.918211 0-119.246895 23.662933-161.423483 66.63156-41.3692 42.142819-64.151066 98.363262-64.151066 158.305469l0 83.895759-20.007683 0c-60.774155 0-110.042255 49.267077-110.042255 110.042255l0 366.139981c0 60.774155 49.267077 110.042255 110.042255 110.042255l492.187769 0c60.775178 0 110.042255-49.267077 110.042255-110.042255L867.852684 483.793588C867.852684 423.01841 818.585607 373.751333 757.810429 373.751333zM827.837318 849.933569c0 38.674834-31.352055 70.02689-70.02689 70.02689L265.62266 919.960459c-38.674834 0-70.02689-31.352055-70.02689-70.02689L195.59577 483.793588c0-38.674834 31.352055-70.02689 70.02689-70.02689l492.187769 0c38.674834 0 70.02689 31.352055 70.02689 70.02689L827.837318 849.933569z"></path>
						<path
						fill="currentColor"
						d="M509.715981 583.832002c-11.048637 0-20.007683 8.959046-20.007683 20.007683l0 110.042255c0 11.048637 8.958022 20.007683 20.007683 20.007683s20.007683-8.958022 20.007683-20.007683L529.723663 603.839685C529.723663 592.790024 520.765641 583.832002 509.715981 583.832002z"></path>
					</svg>
					`;
					NetDiskCheckLinkValidity.setViewAgainCheckClickEvent(ele, checkInfo);
				},
			},
			unknown: {
				code: -200,
				msg: "未知检查情况",
				setView(ele, checkInfo) {
					NetDiskCheckLinkValidity.setViewCheckValid(ele, "unknown");
					ele.innerHTML = /*html*/ `
					<svg viewBox="0 0 1025 1024" xmlns="http://www.w3.org/2000/svg">
						<path
						fill="currentColor"
						d="M512.473172 1023.995242A511.814852 511.814852 0 0 1 313.545134 40.351073a512.244696 512.244696 0 0 1 398.855715 943.658633 508.815937 508.815937 0 0 1-199.927677 39.985536z m0-943.658634C274.559237 80.336608 80.629391 274.266455 80.629391 512.18039s193.929846 431.843781 431.843781 431.843781 431.843781-193.929846 431.843781-431.843781S751.386745 80.336608 512.473172 80.336608z"></path>
						<path
						fill="currentColor"
						d="M506.475342 716.10662a39.985535 39.985535 0 0 1-39.985536-39.985535v-76.972156c0-79.971071 64.976495-144.947566 144.947566-144.947565a77.971794 77.971794 0 0 0 0-155.943588H445.4974a56.979388 56.979388 0 0 0-56.979387 56.979388 39.985535 39.985535 0 0 1-79.971071 0c0-74.972879 60.977941-136.950458 136.950458-136.950459h164.940333c86.968539 0 157.942864 70.974325 157.942865 157.942865s-69.974687 157.942864-157.942865 157.942864a64.976495 64.976495 0 0 0-64.976494 64.976495v76.972156a39.985535 39.985535 0 0 1-38.985897 39.985535zM505.475703 742.097218a48.982281 48.982281 0 1 0 48.982281 48.982281 48.982281 48.982281 0 0 0-48.982281-48.982281z"></path>
					</svg>
					`;
					NetDiskCheckLinkValidity.setViewAgainCheckClickEvent(ele, checkInfo);
				},
			},
		},
		netDisk: {
			baidu: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let url = NetDiskParse.getBlankUrl(
						"baidu",
						netDiskIndex,
						shareCode,
						accessCode
					);
					let getResp = await httpx.get(url, {
						headers: {
							"User-Agent": utils.getRandomPCUA(),
							Host: "pan.baidu.com",
							Referer: url,
							Origin: "https://pan.baidu.com",
						},
						onerror() {},
						ontimeout() {},
					});
					let responseText = getResp.data.responseText;
					if (!getResp.status) {
						if (utils.isNull(responseText)) {
							return NetDiskCheckLinkValidity.status.error;
						}
					}
					if (getResp.data.finalUrl.includes("404.html")) {
						return NetDiskCheckLinkValidity.status.error;
					}
					if (responseText.includes("过期时间：")) {
						return NetDiskCheckLinkValidity.status.success;
					} else if (responseText.includes("输入提取")) {
						return NetDiskCheckLinkValidity.status.needAccessCode;
					} else if (
						responseText.includes("不存在") ||
						responseText.includes("已失效")
					) {
						return NetDiskCheckLinkValidity.status.failed;
					} else {
						return NetDiskCheckLinkValidity.status.unknown;
					}
				},
			},
			lanzou: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let url = NetDiskParse.getBlankUrl(
						"lanzou",
						netDiskIndex,
						shareCode,
						accessCode
					);
					let urlObj = new URL(url);

					let getResp = await httpx.get(url, {
						headers: {
							"User-Agent": utils.getRandomPCUA(),
							Host: urlObj.hostname,
							Origin: urlObj.origin,
							Referer: url,
						},
						onerror() {},
						ontimeout() {},
					});
					if (!getResp.status) {
						return NetDiskCheckLinkValidity.status.error;
					}
					let data = getResp.data.responseText;
					if (utils.isNull(data)) {
						return NetDiskCheckLinkValidity.status.failed;
					} else if (data.includes("输入密码")) {
						return NetDiskCheckLinkValidity.status.needAccessCode;
					} else if (data.includes("来晚啦") || data.includes("不存在")) {
						return NetDiskCheckLinkValidity.status.failed;
					} else {
						return NetDiskCheckLinkValidity.status.success;
					}
				},
			},
			lanzouyx: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let LanZouYX = new NetDiskParse.netDisk.lanzouyx();
					LanZouYX.uuid = LanZouYX.getEncodeUUID();
					LanZouYX.shareCodeId = LanZouYX.getDecodeShareCodeId(shareCode);
					let devType = 3;
					let devModel = "Chrome";
					let extra = 2;
					let timestamp = LanZouYX.getEncodeTimeStamp();
					let type = 0;

					let offset = 1;
					let limit = 60;
					let postResp = await httpx.post(
						`https://api.ilanzou.com/unproved/recommend/list?devType=${devType}&devModel=${devModel}&uuid=${LanZouYX.uuid}&extra=${extra}&timestamp=${timestamp}&shareId=${LanZouYX.shareCodeId}&type=${type}&offset=${offset}&limit=${limit}`,
						{
							headers: {
								Accept: "application/json, text/plain, */*",
								Origin: "https://www.ilanzou.com",
								Referer: "https://www.ilanzou.com/",
								"Sec-Fetch-Site": "same-site",
								Host: "api.ilanzou.com",
								"User-Agent": utils.getRandomPCUA(),
							},
							responseType: "json",
							onerror() {},
							ontimeout() {},
						}
					);
					if (!postResp.status) {
						return NetDiskCheckLinkValidity.status.error;
					}
					let data = utils.toJSON(postResp.data.responseText);
					log.success(["获取链接信息：", data]);
					if (data["code"] !== 200) {
						return NetDiskCheckLinkValidity.status.error;
					}
					if (!data["list"].length) {
						return NetDiskCheckLinkValidity.status.failed;
					}
					return NetDiskCheckLinkValidity.status.success;
				},
			},
			tianyiyun: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let postResp = await httpx.post(
						"https://api.cloud.189.cn/open/share/getShareInfoByCodeV2.action",
						{
							data: `shareCode=${shareCode}`,
							headers: {
								Accept: "application/json;charset=UTF-8",
								"Content-Type": "application/x-www-form-urlencoded",
								"User-Agent": utils.getRandomPCUA(),
								"Sign-Type": 1,
								Referer: "https://cloud.189.cn/web/share?code=" + shareCode,
								Origin: "https://cloud.189.cn",
							},
							onerror() {},
							ontimeout() {},
						}
					);
					let responseText = postResp.data.responseText;
					if (!postResp.status && utils.isNull(responseText)) {
						return NetDiskCheckLinkValidity.status.error;
					}
					if (
						responseText.includes("ShareInfoNotFound") ||
						responseText.includes("ShareNotFound") ||
						responseText.includes("FileNotFound") ||
						responseText.includes("ShareAuditWaiting") ||
						responseText.includes("ShareExpiredError") ||
						responseText.includes("ShareAuditNotPass")
					) {
						return NetDiskCheckLinkValidity.status.failed;
					}
					if (responseText.includes("needAccessCode")) {
						return NetDiskCheckLinkValidity.status.needAccessCode;
					}
					return NetDiskCheckLinkValidity.status.success;
				},
			},
			hecaiyun: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let resp = await httpx.post(
						"https://caiyun.139.com/stapi/custom/outlink/brief",
						{
							data: "linkId=" + shareCode,
							headers: {
								"Content-Type": "application/x-www-form-urlencoded",
								"User-Agent": utils.getRandomPCUA(),
								Host: "caiyun.139.com",
								Referer: NetDiskParse.getBlankUrl(
									"hecaiyun",
									netDiskIndex,
									shareCode,
									accessCode
								),
								Origin: "https://caiyun.139.com",
							},
							ontimeout() {},
							onerror() {},
						}
					);
					if (!resp.status) {
						return NetDiskCheckLinkValidity.status.error;
					}
					let data = utils.toJSON(resp.data.responseText);
					if (data.code == 0) {
						if (data.data.isPasswd === "1") {
							return NetDiskCheckLinkValidity.status.needAccessCode;
						} else {
							return NetDiskCheckLinkValidity.status.success;
						}
					} else {
						return NetDiskCheckLinkValidity.status.failed;
					}
				},
			},
			aliyun: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let postResp = await httpx.post(
						"https://api.aliyundrive.com/adrive/v3/share_link/get_share_by_anonymous?share_id=" +
							shareCode,
						{
							data: JSON.stringify({
								share_id: shareCode,
							}),
							headers: {
								Accept: "application/json, text/plain, */*",
								"Content-Type": "application/json",
								"User-Agent": utils.getRandomPCUA(),
								Referer: "https://www.aliyundrive.com/",
								Origin: "https://www.aliyundrive.com",
							},
							onerror() {},
							ontimeout() {},
						}
					);
					let data = utils.toJSON(postResp.data.responseText);
					if (!postResp.status && utils.isNull(data)) {
						return NetDiskCheckLinkValidity.status.error;
					}
					if (
						data["code"] === "ParamFlowException" ||
						data["code"] === "NotFound.ShareLink" ||
						data["code"] === "ShareLink.Cancelled"
					) {
						return NetDiskCheckLinkValidity.status.failed;
					} else if (
						data["file_count"] === 0 ||
						data["file_infos"]?.length === 0
					) {
						return NetDiskCheckLinkValidity.status.failed;
					}
					return NetDiskCheckLinkValidity.status.success;
				},
			},
			wenshushu: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let postResp = await httpx.post(
						"https://www.wenshushu.cn/ap/task/mgrtask",
						{
							data: JSON.stringify({
								tid: shareCode,
							}),
							headers: {
								"Content-Type": "application/json",
								"User-Agent": utils.getRandomPCUA(),
								"x-token": "wss:7pmakczzw6i",
								Host: "www.wenshushu.cn",
								Origin: "https://www.wenshushu.cn",
								Referer: NetDiskParse.getBlankUrl(
									"wenshushu",
									netDiskIndex,
									shareCode,
									accessCode
								),
							},
							responseType: "json",
							ontimeout() {},
							onerror() {},
						}
					);
					if (!postResp.status && utils.isNull(postResp.data.responseText)) {
						return NetDiskCheckLinkValidity.status.error;
					}
					let data = utils.toJSON(postResp.data.responseText);
					if (data.code !== 0) {
						return NetDiskCheckLinkValidity.status.failed;
					}
					return NetDiskCheckLinkValidity.status.success;
				},
			},
			nainiu: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let getResp = await httpx.get(
						"https://cowtransfer.com/core/api/transfer/share?uniqueUrl=" +
							shareCode,
						{
							headers: {
								"User-Agent": utils.getRandomPCUA(),
								Host: "cowtransfer.com",
								Origin: "https://cowtransfer.com/",
								Referer: "https://cowtransfer.com/",
							},
						}
					);
					if (!getResp.status && utils.isNull(getResp.data.responseText)) {
						return NetDiskCheckLinkValidity.status.error;
					}
					let data = utils.toJSON(getResp.data.responseText);
					if (data.code != "0000") {
						return NetDiskCheckLinkValidity.status.failed;
					}
					if (data.data.needPassword && data.data.needPassword) {
						return NetDiskCheckLinkValidity.status.needAccessCode;
					}
					return NetDiskCheckLinkValidity.status.success;
				},
			},
			_123pan: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let getResp = await httpx.get(
						"https://www.123pan.com/api/share/info?shareKey=" + shareCode,
						{
							headers: {
								"User-Agent": utils.getRandomPCUA(),
								Host: "www.123pan.com",
								Origin: "https://www.123pan.com/",
								Referer: "https://www.123pan.com/",
							},
							onerror() {},
							ontimeout() {},
							responseType: "json",
						}
					);
					if (!getResp.status && utils.isNull(getResp.data.responseText)) {
						return NetDiskCheckLinkValidity.status.error;
					}
					let data = utils.toJSON(getResp.data.responseText);
					if (
						getResp.data.responseText.includes("分享页面不存在") ||
						data["code"] !== 0
					) {
						return NetDiskCheckLinkValidity.status.failed;
					}
					if (data["data"]["HasPwd"]) {
						return NetDiskCheckLinkValidity.status.needAccessCode;
					}
					return NetDiskCheckLinkValidity.status.success;
				},
			},
			weiyun: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let url = NetDiskParse.getBlankUrl(
						"weiyun",
						netDiskIndex,
						shareCode,
						accessCode
					);
					let getResp = await httpx.get(url, {
						headers: {
							"User-Agent": utils.getRandomPCUA(),
							Host: "share.weiyun.com",
							Origin: "https://share.weiyun.com",
							Referer: url,
						},
						onerror() {},
						ontimeout() {},
					});

					if (!getResp.status && utils.isNull(getResp.data.responseText)) {
						return NetDiskCheckLinkValidity.status.error;
					}
					let respText = getResp.data.responseText;
					if (
						respText.includes("已删除") ||
						respText.includes("违反相关法规") ||
						respText.includes("已过期") ||
						respText.includes("已经删除") ||
						respText.includes("目录无效")
					) {
						return NetDiskCheckLinkValidity.status.failed;
					}
					if (
						respText.includes('"need_pwd":1') ||
						respText.includes('"pwd":"')
					) {
						return NetDiskCheckLinkValidity.status.needAccessCode;
					}
					return NetDiskCheckLinkValidity.status.success;
				},
			},
			xunlei: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let postResp = await httpx.post(
						"https://xluser-ssl.xunlei.com/v1/shield/captcha/init",
						{
							data: JSON.stringify({
								client_id: "Xqp0kJBXWhwaTpB6",
								device_id: "925b7631473a13716b791d7f28289cad",
								action: "get:/drive/v1/share",
								meta: {
									package_name: "pan.xunlei.com",
									client_version: "1.45.0",
									captcha_sign: "1.fe2108ad808a74c9ac0243309242726c",
									timestamp: "1645241033384",
								},
							}),
							headers: {
								"User-Agent": utils.getRandomPCUA(),
								Host: "pan.xunlei.com",
								Referer: NetDiskParse.getBlankUrl(
									"xunlei",
									netDiskIndex,
									shareCode,
									accessCode
								),
								Origin: "https://pan.xunlei.com",
							},
							onerror() {},
							ontimeout() {},
						}
					);
					if (!postResp.status && utils.isNull(postResp.data.responseText)) {
						return NetDiskCheckLinkValidity.status.error;
					}
					let data = utils.toJSON(postResp.data.responseText);
					let token = data["captcha_token"];
					let getResp = await httpx.get(
						"https://api-pan.xunlei.com/drive/v1/share?share_id=" + shareCode,
						{
							headers: {
								"User-Agent": utils.getRandomPCUA(),
								Host: "pan.xunlei.com",
								Referer: NetDiskParse.getBlankUrl(
									"xunlei",
									netDiskIndex,
									shareCode,
									accessCode
								),
								Origin: "https://pan.xunlei.com",
								"x-captcha-token": token,
								"x-client-id": "Xqp0kJBXWhwaTpB6",
								"x-device-id": "925b7631473a13716b791d7f28289cad",
							},
							onerror() {},
							ontimeout() {},
						}
					);

					if (!getResp.status && utils.isNull(getResp.data.responseText)) {
						return NetDiskCheckLinkValidity.status.error;
					}
					let responseText = getResp.data.responseText;
					if (
						responseText.includes("NOT_FOUND") ||
						responseText.includes("SENSITIVE_RESOURCE") ||
						responseText.includes("EXPIRED") ||
						responseText.includes("DELETED")
					) {
						return NetDiskCheckLinkValidity.status.failed;
					} else if (responseText.includes("PASS_CODE_EMPTY")) {
						return NetDiskCheckLinkValidity.status.needAccessCode;
					}
					return NetDiskCheckLinkValidity.status.success;
				},
			},
			_115pan: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let getResp = await httpx.get(
						`https://webapi.115.com/share/snap?share_code=${shareCode}&offset=0&limit=20&receive_code=&cid=`,
						{
							headers: {
								Accept: "application/json, text/javascript, */*;",
								"User-Agent": utils.getRandomPCUA(),
								Host: "webapi.115.com",
								Referer: "https://115.com/",
								Origin: "https://115.com",
							},
							ontimeout() {},
							onerror() {},
						}
					);
					if (!getResp.status) {
						if (utils.isNull(getResp.data.responseText)) {
							return NetDiskCheckLinkValidity.status.failed;
						}
						return NetDiskCheckLinkValidity.status.error;
					}
					let data = utils.toJSON(getResp.data.responseText);
					if (data.state) {
						return NetDiskCheckLinkValidity.status.success;
					}
					if (typeof data.error === "string") {
						if (data.error.includes("访问码")) {
							return NetDiskCheckLinkValidity.status.needAccessCode;
						} else if (
							data.error.includes("链接") ||
							data.error.includes("分享已取消")
						) {
							return NetDiskCheckLinkValidity.status.failed;
						}
					}

					return NetDiskCheckLinkValidity.status.unknown;
				},
			},
			chengtong: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					/* 城通通用的检查api */
					/* ref是来源 */
					let blankUrl = NetDiskParse.getBlankUrl(
						"chengtong",
						netDiskIndex,
						shareCode,
						accessCode
					);
					let blankUrlObj = new URL(blankUrl);
					/* f是文件 d是文件夹 */
					const path = blankUrlObj.pathname.split("/")[1].trim();
					let url = "";
					if (path === "f" || path === "file") {
						/* 文件 */
						url = `https://webapi.ctfile.com/getfile.php?path=${path}&f=${shareCode}&passcode=${accessCode}&token=0&r=${Math.random()}&ref=`;
					} else if (path === "d" || path === "dir") {
						/* 文件夹 */
						url = `https://webapi.ctfile.com/getdir.php?path=${path}&d=${shareCode}&folder_id=&passcode=${accessCode}&token=0&r=${Math.random()}&ref=`;
					} else {
						log.warn("未知path", [netDiskIndex, shareCode, accessCode]);
						return NetDiskCheckLinkValidity.status.unknown;
					}
					let getResp = await httpx.get(url, {
						headers: {
							Host: "webapi.ctfile.com",
							Origin: "https://url95.ctfile.com",
							Referer: blankUrl,
							Accept: "application/json, text/javascript, */*; q=0.01",
							"User-Agent": utils.getRandomPCUA(),
						},
						ontimeout() {},
						onerror() {},
					});
					let responseText = getResp.data.responseText;
					if (!getResp.status && utils.isNull(responseText)) {
						return NetDiskCheckLinkValidity.status.error;
					}
					let data = utils.toJSON(responseText);
					if (data["code"] === 200) {
						return NetDiskCheckLinkValidity.status.success;
					}
					if (data["code"] === 401) {
						return NetDiskCheckLinkValidity.status.needAccessCode;
					}
					if (data["code"] === 404 || data["code"] === 503) {
						return NetDiskCheckLinkValidity.status.failed;
					}
					return NetDiskCheckLinkValidity.status.unknown;
				},
			},
			kuake: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let url =
						"https://drive.quark.cn/1/clouddrive/share/sharepage/token?pr=ucpro&fr=pc";
					let postResp = await httpx.post(url, {
						data: JSON.stringify({
							pwd_id: shareCode,
							passcode: "",
						}),
						headers: {
							Accept: "application/json, text/plain, */*",
							"Content-Type": "application/json;charset=UTF-8",
							"User-Agent": utils.getRandomPCUA(),
							Origin: "https://pan.quark.cn",
							Referer: NetDiskParse.getBlankUrl(
								"kuake",
								netDiskIndex,
								shareCode,
								accessCode
							),
						},
						onerror() {},
						ontimeout() {},
					});
					if (!postResp.status && utils.isNull(postResp.data.responseText)) {
						return NetDiskCheckLinkValidity.status.error;
					}
					let data = utils.toJSON(postResp.data.responseText);
					if (data.message.includes("需要提取码")) {
						return NetDiskCheckLinkValidity.status.needAccessCode;
					} else if (data.message.includes("ok")) {
						return NetDiskCheckLinkValidity.status.success;
					} else {
						return NetDiskCheckLinkValidity.status.failed;
					}
				},
			},
			jianguoyun: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let url = NetDiskParse.getBlankUrl(
						"jianguoyun",
						netDiskIndex,
						shareCode,
						accessCode
					);
					let getResp = await httpx.get(url, {
						headers: {
							"User-Agent": utils.getRandomPCUA(),
							Host: "www.jianguoyun.com",
							Referer: NetDiskParse.getBlankUrl(
								"jianguoyun",
								netDiskIndex,
								shareCode,
								accessCode
							),
							Origin: "https://www.jianguoyun.com",
						},
						onerror() {},
						ontimeout() {},
					});
					let responseText = getResp.data.responseText;
					if (!getResp.status && utils.isNull(responseText)) {
						return NetDiskCheckLinkValidity.status.error;
					}
					if (responseText.includes("<h1>啊噢！")) {
						return NetDiskCheckLinkValidity.status.failed;
					}
					return NetDiskCheckLinkValidity.status.success;
				},
			},
			onedrive: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let url = NetDiskParse.getBlankUrl(
						"onedrive",
						netDiskIndex,
						shareCode,
						accessCode
					);
					let urlObj = new URL(url);
					let getResp = await httpx.get(url, {
						headers: {
							"User-Agent": utils.getRandomPCUA(),
							Host: urlObj.hostname,
							Referer: url,
							Origin: urlObj.origin,
						},
						onerror() {},
						ontimeout() {},
					});
					if (!getResp.status) {
						let status = getResp.data?.status?.toString();
						if (status === "429") {
							return NetDiskCheckLinkValidity.status.error;
						} else if (status === "404") {
							return NetDiskCheckLinkValidity.status.failed;
						}
						return NetDiskCheckLinkValidity.status.error;
					}
					let responseText = getResp.data.responseText;
					if (utils.isNotNull(responseText)) {
						try {
							let respDOM = DOMUtils.parseHTML(responseText, true, true);
							if (respDOM.querySelector("title")?.innerHTML?.includes("错误")) {
								return NetDiskCheckLinkValidity.status.failed;
							}
						} catch (error) {}
					}
					return NetDiskCheckLinkValidity.status.success;
				},
			},
			uc: {
				/**
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode 分享码
				 * @param {string} accessCode 访问码
				 */
				async init(netDiskIndex, shareCode, accessCode) {
					let resp = await httpx.get("https://drive.uc.cn/s/" + shareCode, {
						headers: {
							"User-Agent": utils.getRandomAndroidUA(),
							Host: "drive.uc.cn",
							Referer: NetDiskParse.getBlankUrl(
								"uc",
								netDiskIndex,
								shareCode,
								accessCode
							),
							Origin: "https://drive.uc.cn",
						},
						ontimeout() {},
						onerror() {},
					});
					let responseText = resp.data.responseText;
					if (!resp.status && utils.isNull(responseText)) {
						return NetDiskCheckLinkValidity.status.error;
					}
					let respDoc = DOMUtils.parseHTML(responseText, true, true);
					if (respDoc.querySelector(".h5-page-main")) {
						// 存在错误
						/** @type {HTMLDivElement} */
						let $h5PageMain = respDoc.querySelector(".h5-page-main");
						let errorText = $h5PageMain.textContent;
						if (
							errorText.includes("失效") ||
							errorText.includes("不存在") ||
							errorText.includes("违规") ||
							errorText.includes("删除")
						) {
							return NetDiskCheckLinkValidity.status.failed;
						} else {
							return NetDiskCheckLinkValidity.status.unknown;
						}
					} else if (respDoc.querySelector(".main-body .input-wrap input")) {
						return NetDiskCheckLinkValidity.status.needAccessCode;
					} else {
						return NetDiskCheckLinkValidity.status.success;
					}
				},
			},
		},
		/**
		 * 校验链接的有效性，这里是用于订阅-消费
		 * @param {HTMLDivElement} netDiskViewBox
		 * @param {string} netDiskName
		 * @param {number} netDiskIndex
		 * @param {string} shareCode
		 * @param {string} accessCode
		 */
		async check(
			netDiskViewBox,
			netDiskName,
			netDiskIndex,
			shareCode,
			accessCode
		) {
			this.$data.subscribe.push({
				netDiskViewBox,
				netDiskName,
				netDiskIndex,
				shareCode,
				accessCode,
			});

			if (this.$data.isSubscribing) {
				return;
			}
			this.$data.isSubscribing = true;
			for (let index = 0; index < this.$data.subscribe.length; index++) {
				const checkInfo = this.$data.subscribe[index];
				await this.checkLinkValidity(checkInfo, true);
				await utils.sleep(250);
				this.$data.subscribe.splice(index, 1);
				index--;
			}
			this.$data.isSubscribing = false;
		},
		/**
		 * 开始校验链接的有效性
		 * @param {NetDiskCheckLinkValidityOption} checkInfo
		 * @param {boolean} isForceCheck 是否强制检测
		 */
		async checkLinkValidity(checkInfo, isForceCheck) {
			let $netDiskStatus =
				checkInfo.netDiskViewBox.querySelector(".netdisk-status");
			if (this.isViewCheckValid($netDiskStatus) && !isForceCheck) {
				return;
			}
			let regular =
				NetDisk.regular[checkInfo.netDiskName][checkInfo.netDiskIndex];
			if (!regular["checkLinkValidity"]) {
				log.error(["未配置checkLinkValidity", checkInfo]);
				return;
			}
			let netDiskCheck = this.netDisk[checkInfo.netDiskName];
			if (
				!netDiskCheck ||
				(netDiskCheck && typeof netDiskCheck.init !== "function")
			) {
				/* 没有配置该网盘的校验有效性 */
				log.error(["没有配置该网盘的校验有效性", checkInfo]);
				return;
			}
			this.status.loading.setView($netDiskStatus);
			/**
			 * @type {NetDiskCheckLinkValidityStatus}
			 */
			let result = await netDiskCheck.init(
				checkInfo.netDiskIndex,
				checkInfo.shareCode,
				checkInfo.accessCode
			);
			if (!result) {
				log.error(["该验证函数的返回值不是有效值", [result, checkInfo]]);
				return;
			}
			result.setView($netDiskStatus, checkInfo);
		},
		/**
		 * 添加重复检查
		 * @param {HTMLDivElement} ele
		 * @param {NetDiskCheckLinkValidityOption} checkInfo
		 */
		setViewAgainCheckClickEvent(ele, checkInfo) {
			DOMUtils.on(
				ele,
				"click",
				void 0,
				function () {
					const $netDiskUrlDiv = ele.closest(".netdisk-url-div");
					const $netDiskLink = $netDiskUrlDiv.querySelector(".netdisk-link");
					const linkData = NetDiskUI.getElementNetDiskLinkData($netDiskLink);
					linkData["netDiskViewBox"] = checkInfo.netDiskViewBox;
					NetDiskCheckLinkValidity.checkLinkValidity(linkData, true);
				},
				{ once: true }
			);
		},
		/**
		 * 判断元素当前是否处于验证状态且验证是error或未验证状态
		 * + true 已验证(成功/需要密码)
		 * + false 尚未验证/验证超时/验证网络异常
		 * @param {HTMLDivElement} ele
		 */
		isViewCheckValid(ele) {
			if (!ele.hasAttribute("data-check-valid")) {
				return false;
			}
			if (ele.getAttribute("data-check-valid") === "error") {
				return false;
			}
			return true;
		},
		/**
		 * 设置当前的验证状态
		 * @param {HTMLDivElement} ele
		 * @param {string} value
		 */
		setViewCheckValid(ele, value) {
			ele.setAttribute("data-check-valid", value);
		},
		/**
		 * 取消设置当前的验证状态
		 * @param {HTMLDivElement} ele
		 */
		removeViewCheckValid(ele) {
			ele.removeAttribute("data-check-valid");
		},
		/**
		 * 判断状态码是成功的
		 * @param {NetDiskCheckLinkValidityStatus} statusInfo
		 */
		isStatusSuccess(statusInfo) {
			if (Math.floor(statusInfo.code / 100) === 2) {
				return true;
			}
			return false;
		},
		/**
		 * 根据code获取code的名字
		 * @param {NetDiskCheckLinkValidityStatus} statusInfo
		 */
		getStatusName(statusInfo) {
			for (const statusName of Object.keys(NetDiskCheckLinkValidity.status)) {
				let _statusInfo_ = NetDiskCheckLinkValidity.status[statusName];
				if (statusInfo.code === _statusInfo_.code) {
					return statusName;
				}
			}
		},
	};

	/** 网盘-直链解析 */
	const NetDiskParse = {
		netDisk: {
			/**
			 * 百度网盘
			 * @constructor
			 * @returns {object}
			 */
			baidu: function () {
				let that = this;
				/**
				 * 所在规则的下标
				 */
				this.netDiskIndex = 0;
				/**
				 * 分享码
				 */
				this.shareCode = "";
				/**
				 * 提取码
				 */
				this.accessCode = "";
				/**
				 * 入口
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode
				 * @param {string} accessCode
				 * @returns
				 */
				this.init = function (netDiskIndex, shareCode, accessCode) {
					log.info([netDiskIndex, shareCode, accessCode]);
					that.netDiskIndex = netDiskIndex;
					that.shareCode = shareCode;
					that.accessCode = accessCode;
					let url = GM_getValue("baidu-baiduwp-php-url");
					let postForm = GM_getValue("baidu-baiduwp-php-post-form");
					let enableCopy = GM_getValue("baidu-baiduwp-php-copy-url");
					if (!url) {
						Qmsg.error("请先在设置中配置百度网盘-网址");
						return void 0;
					}
					if (!postForm) {
						Qmsg.error("请先在设置中配置百度网盘-表单参数");
						return void 0;
					}
					postForm = NetDisk.replaceParam(postForm, {
						shareCode: shareCode,
						accessCode: accessCode,
					});
					let formElement = document.createElement("form");
					/* POST的表单数据 */
					let formData = {};
					let urlParams = new URLSearchParams(postForm);
					/* 解析网址 */
					formElement.action = url;
					formElement.method = "post";
					formElement.style.display = "none";
					formElement.target = "_blank";
					for (let [key, value] of urlParams) {
						let textAreaElement = document.createElement("textarea");
						textAreaElement.name = key;
						textAreaElement.value = value;
						formElement.appendChild(textAreaElement);
						formData[key] = value;
					}
					log.info(["表单数据", formData]);
					document.body.appendChild(formElement);
					log.info(["访问网址", url]);
					if (enableCopy) {
						NetDiskParse.copyText(
							"baidu",
							netDiskIndex,
							shareCode,
							accessCode,
							"1.5秒后跳转至解析站"
						);
						setTimeout(() => {
							formElement.submit();
						}, 1500);
					} else {
						formElement.submit();
					}
				};
				return this;
			},
			/**
			 * 蓝奏云
			 * 流程：判断是否是多文件
			 * 单文件 => 请求https://蓝奏云域名/{shareToken} 判断链接类型和是否能正常获取
			 *        => 请求https://蓝奏云域名/ajaxm.php 获取下载参数，下载参数例如：https://蓝奏云文件域名/file/?xxxxxxxxx
			 * 多文件 => 先请求https://蓝奏云域名/{shareToken} 获取文件sign => 请求https://蓝奏云域名/filemoreajax.php 获取json格式的文件参数，
			 * 参数内容如{"info":"success","text":[{"duan":"xx","icon":"","id":"".....},{},{}]}
			 * @constructor
			 * @returns {object}
			 */
			lanzou: function () {
				let that = this;
				/**
				 * 所在规则的下标
				 */
				this.netDiskIndex = 0;
				/**
				 * 分享码
				 */
				this.shareCode = "";
				/**
				 * 提取码
				 */
				this.accessCode = "";
				/* 蓝奏云域名 */
				let LanZouHostName = GM_getValue(
					"lanzou-host-name",
					NetDiskData.lanzou_defaultHostName
				);
				/**
				 * 路由
				 */
				this.router = {
					default(pathName = "") {
						if (pathName.startsWith("/")) {
							pathName = pathName.replace(/^\//, "");
						}
						return `https://${LanZouHostName}/${pathName}`;
					},
					tp(pathName = "") {
						if (pathName.startsWith("/")) {
							pathName = pathName.replace(/^\//, "");
						}
						return `https://${LanZouHostName}/tp/${pathName}`;
					},
					s(pathName = "") {
						if (pathName.startsWith("/")) {
							pathName = pathName.replace(/^\//, "");
						}
						return `https://${LanZouHostName}/s/${pathName}`;
					},
				};
				this.regexp = {
					unicode: {
						/**
						 * 判断该链接是否是中文
						 */
						match: /[%\u4e00-\u9fa5]+/g,
						tip: "中文链接",
						isUnicode: false,
					},
					/**
					 * 蓝奏文件取消分享
					 */
					noFile: {
						match: /div>来晚啦...文件取消分享了<\/div>/g,
						tip: "来晚啦...文件取消分享了",
					},
					/**
					 * 蓝奏文件链接错误
					 */
					noExists: {
						match: /div>文件不存在，或已删除<\/div>/g,
						tip: "文件不存在，或已删除",
					},
					/**
					 * 2023-9-19 蓝奏云修改分享规则，需要vip用户才可以分享 apk、ipa 链接
					 */
					needVipToShare: {
						match: /class="fbox">非会员.+请先开通会员/gi,
						tip: "该链接为非会员用户分享的文件，目前无法下载",
					},
					/**
					 * 蓝奏多文件
					 */
					moreFile: {
						match: /<span id=\"filemore\" onclick=\"more\(\);\">/g,
					},
					/**
					 * 蓝奏设置了密码的单文件请求需要的sign值
					 */
					sign: {
						match:
							/var[\s]*(posign|postsign|vidksek|skdklds)[\s]*=[\s]*'(.+?)';/,
					},
					/**
					 * 蓝奏文件名
					 */
					fileName: {
						match: /<title>(.*)<\/title>/,
					},
					/**
					 * 蓝奏文件大小
					 */
					fileSize: {
						match: /<span class=\"mtt\">\((.*)\)<\/span>/,
					},
					/**
					 * 蓝奏文件直链host
					 */
					loadDownHost: {
						match: /var[\s]*(vkjxld)[\s]*=[\s]*'(.+?)'/i,
					},
					/**
					 * 蓝奏文件直链
					 */
					loadDown: {
						match:
							/var[\s]*(loaddown|oreferr|spototo|domianload|hyggid)[\s]*=[\s]*'(.+?)'/i,
					},
					/**
					 * 蓝奏云之苹果使用类型的文件
					 */
					appleDown: {
						match: /var[\s]*appitem[\s]*=[\s]*'(.+?)'/i,
					},
					/**
					 * 蓝奏云文件上传时间
					 */
					uploadTime: {
						match: /mt2\"\>时间:<\/span>(.+?)[\s]*<span/i,
					},
				};
				/**
				 * 入口
				 * @param {number} netDiskIndex
				 * @param {string} shareCode
				 * @param {string} accessCode
				 */
				this.init = async function (netDiskIndex, shareCode, accessCode) {
					log.info([netDiskIndex, shareCode, accessCode]);
					that.netDiskIndex = netDiskIndex;
					that.shareCode = shareCode;
					that.accessCode = accessCode;
					that.regexp.unicode.isUnicode = Boolean(
						that.shareCode.match(that.regexp.unicode.match)
					);
					if (netDiskIndex === 2) {
						await that.getMoreFile(that.router.s(that.shareCode));
					} else {
						await that.getFileLink();
					}
				};
				/**
				 * 获取文件链接
				 * @param {boolean} getShareCodeByPageAgain
				 * @returns
				 */
				this.getFileLink = async function (getShareCodeByPageAgain = false) {
					let url = that.router.default(that.shareCode);
					log.info("蓝奏云-获取文件下载链接" + url);
					let getResp = await httpx.get({
						url: url,
						headers: {
							Accept: "*/*",
							"User-Agent": utils.getRandomPCUA(),
							Referer: url,
						},
						onerror() {},
					});
					if (!getResp.status) {
						log.error(getResp);
						if (getResp.type === "ontimeout") {
							return;
						}
						if (utils.isNull(getResp.data.responseText)) {
							Qmsg.error("请求异常");
							return;
						}
						if (
							getResp.data.responseText.includes(
								"div>文件不存在，或者已被删除</div>"
							)
						) {
							Qmsg.error("文件不存在，或者已被删除");
						} else {
							Qmsg.error("未知情况");
						}
						return;
					}
					let respData = getResp.data;
					if (respData.readyState !== 4) {
						log.error(respData);
						Qmsg.error("请求失败，请重试");
						return;
					}
					if (respData.responseText == void 0) {
						log.error(respData);
						Qmsg.error("获取网页内容为空");
						return;
					}
					if (!that.checkPageCode(respData)) {
						return;
					}
					if (that.isMoreFile(respData)) {
						await that.getMoreFile();
					} else {
						log.info(respData);
						let pageText = respData.responseText;
						if (getShareCodeByPageAgain) {
							let shareCodeNewMatch = pageText.match(
								/var[\s]*link[\s]*=[\s]*\'tp\/(.+?)\';/i
							);
							that.shareCode = shareCodeNewMatch[shareCodeNewMatch.length - 1];
							log.info(`新参数 => ${that.shareCode}`);
						}
						let pageDOM = DOMUtils.parseHTML(pageText, true, true);
						let pageIframeElement =
							pageDOM.querySelector('iframe[class^="ifr"]') ||
							pageDOM.querySelector('iframe[class^="n_downlink"]');
						if (pageIframeElement) {
							let iframeUrl = pageIframeElement.getAttribute("src");
							log.error([
								"该链接需要重新通过iframe地址访问获取信息",
								iframeUrl,
							]);
							Qmsg.info("正在请求下载信息");
							let fileName =
								pageDOM.querySelector("body div.d > div")?.innerText ||
								pageDOM.querySelector("#filenajax")?.innerText ||
								pageDOM
									.querySelector("title")
									?.textContent?.replace(/ - 蓝奏云$/i, "");
							let fileSize =
								pageText.match(/文件大小：<\/span>(.+?)<br>/i) ||
								pageDOM.querySelector("div.n_box div.n_file div.n_filesize")
									?.innerText ||
								pageDOM.querySelector(
									".d2 table tr td .fileinfo:nth-child(1) .fileinforight"
								)?.innerText;
							let fileUploadTime =
								pageText.match(/上传时间：<\/span>(.+?)<br>/i) ||
								pageDOM.querySelector(
									"#file[class=''] .n_file_info span.n_file_infos"
								)?.innerText ||
								pageDOM.querySelector(
									".d2 table tr td .fileinfo:nth-child(3) .fileinforight"
								)?.innerText ||
								pageDOM.querySelector(
									"#file[class='filter'] .n_file_info span.n_file_infos"
								)?.innerText;
							if (fileSize) {
								if (Array.isArray(fileSize)) {
									fileSize = fileSize[fileSize.length - 1];
								}
								if (typeof fileSize === "string") {
									fileSize = fileSize.replaceAll("大小：", "");
								}
							} else {
								log.error("解析文件大小信息失败");
							}
							if (fileUploadTime) {
								if (Array.isArray(fileUploadTime)) {
									fileUploadTime = fileUploadTime[fileUploadTime.length - 1];
								}
								if (
									fileUploadTime.toString().toLowerCase().startsWith("android")
								) {
									log.error("解析出的文件上传时间信息是Android/xxxx开头");
									fileUploadTime = void 0;
								}
							} else {
								log.error("解析文件上传时间信息失败");
							}
							let downloadUrl = await that.getLinkByIframe(iframeUrl, {
								fileName,
								fileSize,
								fileUploadTime,
							});
							if (downloadUrl) {
								if (NetDiskFilterScheme.isForwardDownloadLink("lanzou")) {
									downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
										"lanzou",
										downloadUrl
									);
								}
								NetDiskUI.staticView.oneFile({
									title: "蓝奏云单文件直链",
									fileName: fileName,
									fileSize: fileSize,
									downloadUrl: downloadUrl,
									fileUploadTime: fileUploadTime,
								});
							}
						} else {
							await that.getLink(respData);
						}
					}
				};
				/**
				 * 页面检查，看看是否存在文件失效情况
				 * @param {object} response
				 * @returns {boolean}
				 * + true 未失效
				 * + false 已失效
				 */
				this.checkPageCode = function (response) {
					let pageText = response.responseText;
					if (pageText.match(that.regexp.noFile.match)) {
						Qmsg.error(that.regexp.noFile.tip);
						return false;
					}
					if (pageText.match(that.regexp.noExists.match)) {
						Qmsg.error(that.regexp.noExists.tip);
						return false;
					}
					if (pageText.match(that.regexp.needVipToShare.match)) {
						Qmsg.error(that.regexp.needVipToShare.tip);
						return false;
					}
					return true;
				};
				/**
				 * 判断是否是多文件的链接
				 * @param {object} response
				 * @returns {boolean}
				 * + true 多文件
				 * + false 单文件
				 */
				this.isMoreFile = function (response) {
					let pageText = response.responseText;
					if (pageText.match(that.regexp.moreFile.match)) {
						log.info("该链接为多文件");
						return true;
					} else {
						log.info("该链接为单文件");
						return false;
					}
				};
				/**
				 * 获取链接
				 * @param {object} response
				 */
				this.getLink = async function (response) {
					let pageText = response.responseText;
					if (pageText == void 0) {
						log.error("shareCode错误，重新从页面中获取");
						await that.getFileLink(true);
						return;
					}
					let sign = pageText.match(that.regexp.sign.match);
					let postData_p = "";
					let postData_sign = "";
					let fileName = pageText.match(that.regexp.fileName.match);
					let fileSize =
						pageText.match(that.regexp.fileSize.match) ||
						pageText.match(/<div class="n_filesize">大小：(.+?)<\/div>/i);
					let fileUploadTime =
						pageText.match(that.regexp.uploadTime.match) ||
						pageText.match(/<span class="n_file_infos">(.+?)<\/span>/i);
					if (fileName) {
						fileName = fileName[fileName.length - 1].trim();
					} else {
						fileName = "";
					}
					if (fileSize) {
						fileSize = fileSize[fileSize.length - 1].trim();
					} else {
						fileSize = "";
					}
					if (fileUploadTime) {
						fileUploadTime = fileUploadTime[fileUploadTime.length - 1].trim();
					} else {
						fileUploadTime;
					}
					if (sign) {
						postData_sign = sign[sign.length - 1];
						log.info(`获取Sign: ${postData_sign}`);
						if (utils.isNotNull(that.accessCode)) {
							log.info("传入参数=>有密码");
							postData_p = that.accessCode;
						} else {
							log.info("传入参数=>无密码");
						}
						let postResp = await httpx.post({
							url: that.router.default("ajaxm.php"),
							responseType: "json",
							headers: {
								"Content-Type":
									"application/x-www-form-urlencoded; charset=UTF-8",
								"User-Agent": utils.getRandomAndroidUA(),
								Referer: that.router.default(that.shareCode),
							},
							data: `action=downprocess&sign=${postData_sign}&p=${postData_p}`,
						});
						if (!postResp.status) {
							return;
						}
						let respData = postResp.data;
						log.info(respData);
						if (respData.readyState === 4) {
							let json_data = utils.toJSON(respData.responseText);
							let downloadUrl = `${json_data["dom"]}/file/${json_data["url"]}`;
							if (
								typeof json_data["url"] === "string" &&
								(json_data["url"].startsWith("http") ||
									json_data["url"].startsWith(json_data["dom"]))
							) {
								/* 有些情况下比如苹果的ipa文件的请求，json_data["url"]就是一个完整的链接 */
								downloadUrl = json_data["url"];
							}
							/* json_data["zt"]表示状态，一般为1 */
							let zt = json_data["zt"];
							/* json_data["inf"]一般是文件名，也可以看作是请求信息提示 */
							if ("密码不正确".indexOf(json_data["inf"]) != -1) {
								Qmsg.error("密码不正确!");
								NetDiskUI.newAccessCodeView(
									void 0,
									"lanzou",
									that.netDiskIndex,
									that.shareCode,
									(userInputAccessCode) => {
										that.init(
											that.netDiskIndex,
											that.shareCode,
											userInputAccessCode
										);
									}
								);
							} else {
								fileName = json_data["inf"] ? json_data["inf"] : fileName;
								downloadUrl = await NetDiskParse.getRedirectFinalUrl(
									downloadUrl,
									utils.getRandomAndroidUA()
								);
								log.info(downloadUrl);

								if (NetDiskFilterScheme.isForwardDownloadLink("lanzou")) {
									downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
										"lanzou",
										downloadUrl
									);
								}

								NetDiskUI.staticView.oneFile({
									title: "蓝奏云单文件直链",
									fileName: fileName,
									fileSize: fileSize,
									downloadUrl: downloadUrl,
									fileUploadTime: fileUploadTime,
								});
							}
						} else {
							Qmsg.error("请求失败，请重试");
						}
					} else {
						let loadDownHost = pageText.match(that.regexp.loadDownHost.match);
						let loadDown = pageText.match(that.regexp.loadDown.match);
						let appleDown = pageText.match(that.regexp.appleDown.match);
						if (utils.isNull(loadDown)) {
							loadDown = pageText.match(/var[\s]*(cppat)[\s]*=[\s]*'(.+?)'/i);
						}
						if (utils.isNull(loadDownHost) && appleDown) {
							appleDown = appleDown[appleDown.length - 1];
							loadDownHost = [appleDown];
							loadDown = [""];
							log.success(["多文件-当前链接猜测为苹果的文件", appleDown]);
						}
						if (utils.isNull(loadDownHost)) {
							Qmsg.error("蓝奏云直链：获取sign的域名失败，请反馈开发者", {
								timeout: 3500,
							});
							return;
						}
						if (utils.isNull(loadDown)) {
							Qmsg.error("蓝奏云直链：获取sign失败，请反馈开发者", {
								timeout: 3500,
							});
							return;
						}
						let downloadUrl = `${loadDownHost[loadDownHost.length - 1]}${
							loadDown[loadDown.length - 1]
						}`;
						log.info([fileName, fileSize, downloadUrl]);
						downloadUrl = await NetDiskParse.getRedirectFinalUrl(
							downloadUrl,
							utils.getRandomAndroidUA()
						);
						log.info(downloadUrl);
						if (NetDiskFilterScheme.isForwardDownloadLink("lanzou")) {
							downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
								"lanzou",
								downloadUrl
							);
						}

						NetDiskUI.staticView.oneFile({
							title: "蓝奏云单文件直链",
							fileName: fileName,
							fileSize: fileSize,
							downloadUrl: downloadUrl,
							fileUploadTime: fileUploadTime,
						});
					}
				};

				/**
				 * 通过iframe的链接来获取单文件直链
				 * @param {string} urlPathName url路径
				 * @param {{
				 * fileName:string,
				 * fileSize:string,
				 * fileUploadTime:string
				 * }} fileInfo 文件信息
				 */
				this.getLinkByIframe = async function (urlPathName, fileInfo) {
					log.info([urlPathName, fileInfo]);
					let iFrameUrl = that.router.default(urlPathName);
					let getResp = await httpx.get({
						url: iFrameUrl,
						headers: {
							Accept:
								"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
							"User-Agent": utils.getRandomPCUA(),
							Referer: that.router.default(that.shareCode),
						},
					});
					if (!getResp.status) {
						return;
					}
					let respData = getResp.data;
					log.info(respData);
					let pageText = respData.responseText;
					let aihidcms = pageText.match(/var[\s]*aihidcms[\s]*=[\s]*'(.*)';/i);
					let ciucjdsdc = pageText.match(
						/var[\s]*ciucjdsdc[\s]*=[\s]*'(.*)';/i
					);
					let ajaxdata = pageText.match(/var[\s]*ajaxdata[\s]*=[\s]*'(.+)';/i);
					let sign = pageText.match(/'sign':[\s]*'(.+)',/i);
					let ajaxUrl = pageText.match(/url[\s]*:[\s]*'(.+)'[\s]*,/);
					if (ajaxUrl) {
						ajaxUrl = ajaxUrl[ajaxUrl.length - 1];
					} else {
						Qmsg.error("提取ajaxm.php的具体参数失败，使用默认的ajaxm.php");
						ajaxUrl = "ajaxm.php";
					}
					if (!aihidcms) {
						Qmsg.error("ajaxm.php请求参数 websignkey 获取失败");
						return;
					} else {
						aihidcms = aihidcms[aihidcms.length - 1];
					}
					if (!ciucjdsdc) {
						Qmsg.error("ajaxm.php请求参数 websign 获取失败");
						return;
					} else {
						ciucjdsdc = ciucjdsdc[ciucjdsdc.length - 1];
					}
					if (!ajaxdata) {
						Qmsg.error("ajaxm.php请求参数 signs 获取失败");
						return;
					} else {
						ajaxdata = ajaxdata[ajaxdata.length - 1];
					}
					if (!sign) {
						Qmsg.error("ajaxm.php请求参数 sign 获取失败");
						return;
					} else {
						sign = sign[sign.length - 1];
					}
					let postData = `action=downprocess&signs=${ajaxdata}&sign=${sign}&websign=${ciucjdsdc}&ves=1&websignkey=${aihidcms}`;
					log.success("请求的路径参数：" + ajaxUrl);
					log.success("ajaxm.php的请求参数-> " + postData);
					let postResp = await httpx.post({
						url: that.router.default(ajaxUrl),
						headers: {
							Accept: "application/json, text/javascript, */*",
							"Content-Type": "application/x-www-form-urlencoded",
							Referer: that.router.default(that.shareCode),
							"User-Agent": utils.getRandomPCUA(),
						},
						data: postData,
					});
					if (!postResp.status) {
						return;
					}
					let postRespData = postResp.data;
					log.info(postRespData);
					let jsonData = utils.toJSON(postRespData.responseText);
					let downloadUrl = `${jsonData["dom"]}/file/${jsonData["url"]}`;
					let zt = jsonData["zt"];
					log.success(["直链", downloadUrl]);
					if ("密码不正确".indexOf(jsonData["inf"]) != -1) {
						Qmsg.error("密码不正确!");
						NetDiskUI.newAccessCodeView(
							void 0,
							"lanzou",
							that.netDiskIndex,
							that.shareCode,
							(userInputAccessCode) => {
								that.init(
									that.netDiskIndex,
									that.shareCode,
									userInputAccessCode
								);
							}
						);
					} else {
						fileInfo.fileName = utils.isNotNull(jsonData["inf"])
							? jsonData["inf"]
							: fileInfo.fileName;
						downloadUrl = await NetDiskParse.getRedirectFinalUrl(
							downloadUrl,
							utils.getRandomAndroidUA()
						);
						log.info(downloadUrl);
						return downloadUrl;
					}
				};
				/**
				 * 多文件获取
				 * @param {string} url 链接
				 */
				this.getMoreFile = async function (url) {
					if (url == void 0) {
						url = that.router.default(that.shareCode);
					}
					let getResp = await httpx.get({
						url: url,
						headers: {
							Accept: "*/*",
							"User-Agent": utils.getRandomAndroidUA(),
							Referer: url,
						},
					});
					if (!getResp.status) {
						return;
					}
					let respData = getResp.data;
					log.info(respData);
					if (respData.readyState !== 4) {
						Qmsg.error("请求失败，请重试");
						return;
					}
					let pageText = respData.responseText;
					let fid = pageText.match(/\'fid\':(.+?),/)[1].replaceAll("'", "");
					let uid = pageText.match(/\'uid\':(.+?),/)[1].replaceAll("'", "");
					let pgs = 1;
					let t_name = pageText.match(/\'t\':(.+?),/)[1];
					let t_rexp = new RegExp(t_name + "[\\s]*=[\\s]*('|\")(.+?)('|\");");
					let t = pageText.match(t_rexp)[2];
					let k_name = pageText.match(/\'k\':(.+?),/)[1];
					let k_rexp = new RegExp(k_name + "[\\s]*=[\\s]*('|\")(.+?)('|\");");
					let k = pageText.match(k_rexp)[2];
					let lx = that.shareCode.match(that.regexp.unicode.match) ? 1 : 2;
					let postData = `lx=${lx}&fid=${fid}&uid=${uid}&pg=${pgs}&rep=0&t=${t}&k=${k}&up=1&ls=1&pwd=${that.accessCode}`;
					log.info(`多文件请求参数：${postData}`);
					let postResp = await httpx.post({
						url: that.router.default("filemoreajax.php"),
						responseType: "json",
						headers: {
							"Content-Type":
								"application/x-www-form-urlencoded; charset=UTF-8",
							"User-Agent": utils.getRandomAndroidUA(),
							Referer: url,
						},
						data: postData,
					});
					if (!postResp.status) {
						return;
					}
					let postRespData = postResp.data;
					log.info(postRespData);
					let json_data = utils.toJSON(postRespData.responseText);
					let zt = json_data["zt"];
					let info = json_data["info"];
					if (zt === 4) {
						Qmsg.error(info);
					} else if (zt === 1) {
						let QmsgLoading = Qmsg.loading("获取文件夹成功，解析文件直链中...");
						/* 获取多文件的数组信息 */
						let folder = json_data["text"];
						/**
						 * 弹出内容
						 * @type {import("@whitesev/pops/dist/types/src/components/folder/indexType").PopsFolderDataConfig[]}
						 */
						let folderList = [];
						log.info(`本链接一共${folder.length}个文件`);
						for (let index = 0; index < folder.length; index++) {
							let folderInfo = folder[index];
							let fileShareCode = folderInfo["id"];
							let fileName = folderInfo["name_all"];
							let fileSize = folderInfo["size"];
							let fileType = folderInfo["icon"];
							let uploadTime = folderInfo["time"];
							folderList.push({
								fileName: fileName,
								fileSize: fileSize,
								fileType: fileType,
								createTime: uploadTime,
								latestTime: uploadTime,
								isFolder: false,
								index: 0,
								async clickEvent() {
									let folderDownloadInfo = await that.parseMoreFile(
										fileShareCode,
										fileName,
										fileSize,
										uploadTime
									);
									/* 成功获取下载信息 */
									if (folderDownloadInfo.success) {
										return {
											autoDownload: true,
											mode: "aBlank",
											url: folderDownloadInfo.downloadUrl,
										};
									} else {
										log.error(["获取下载信息失败：", folderDownloadInfo]);
										Qmsg.error(folderDownloadInfo.msg);
									}
								},
							});
						}
						QmsgLoading.close();
						NetDiskUI.staticView.moreFile("蓝奏云文件解析", folderList);
					} else if ("密码不正确".indexOf(info) !== -1) {
						Qmsg.error("密码不正确!");
						NetDiskUI.newAccessCodeView(
							void 0,
							"lanzou",
							that.netDiskIndex,
							that.shareCode,
							(userInputAccessCode) => {
								that.init(
									that.netDiskIndex,
									that.shareCode,
									userInputAccessCode
								);
							}
						);
					} else if ("没有了".indexOf(info) !== -1) {
						Qmsg.error("没有文件了");
					} else {
						Qmsg.error("未知错误");
					}
				};
				/**
				 * 文件解析并返回html-vip
				 * @param {string} paramShareCode 解析多文件获取的shareCode
				 * @param {string} fileName 文件名
				 * @param {string} fileSize 文件大小
				 * @param {string} fileUploadTime 文件上传时间
				 * @returns {Promise<{
				 * success :boolean,
				 * fileName: string,
				 * fileSize: string,
				 * fileUploadTime: string,
				 * downloadUrl: ?string,
				 * msg: string,
				 * }>}
				 */
				this.parseMoreFile = async function (
					paramShareCode,
					fileName,
					fileSize,
					fileUploadTime
				) {
					/* 根据获取到的json中多文件链接来获取单文件直链 */
					let getResp = await httpx.get({
						url: that.router.default(paramShareCode),
						headers: {
							Accept: "*/*",
							"User-Agent": utils.getRandomPCUA(),
							Referer: that.router.default(that.shareCode),
						},
					});
					log.info(getResp);
					if (!getResp.status) {
						return {
							success: false,
							fileName: fileName,
							fileSize: fileSize,
							fileUploadTime: fileUploadTime,
							msg: `解析失败，${getResp.msg}`,
							downloadUrl: void 0,
						};
					}
					let respData = getResp.data;
					let pageText = respData.responseText;
					let pageDOM = DOMUtils.parseHTML(pageText, true, true);
					let pageIframeElement =
						pageDOM.querySelector('iframe[class^="ifr"]') ||
						pageDOM.querySelector('iframe[class^="n_downlink"]');
					if (!pageIframeElement) {
						return {
							success: false,
							fileName: fileName,
							fileSize: fileSize,
							fileUploadTime: fileUploadTime,
							msg: `解析iframe链接失败`,
							downloadUrl: void 0,
						};
					}
					let iframeUrl = pageIframeElement.getAttribute("src");
					log.error(["该链接需要重新通过iframe地址访问获取信息", iframeUrl]);
					Qmsg.info("正在请求下载信息");
					let downloadUrl = await that.getLinkByIframe(iframeUrl, {
						fileName,
						fileSize,
						fileUploadTime,
					});
					if (downloadUrl) {
						if (NetDiskFilterScheme.isForwardDownloadLink("lanzou")) {
							downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
								"lanzou",
								downloadUrl
							);
						}
						return {
							success: true,
							fileName: fileName,
							fileSize: fileSize,
							fileUploadTime: fileUploadTime,
							msg: "success",
							downloadUrl: downloadUrl,
						};
					} else {
						return {
							success: false,
							fileName: fileName,
							fileSize: fileSize,
							fileUploadTime: fileUploadTime,
							msg: `获取下载链接失败`,
							downloadUrl: void 0,
						};
					}
				};
				return this;
			},
			/**
			 * 蓝奏云优享
			 * @constructor
			 */
			lanzouyx: function () {
				let that = this;
				/** 所在规则的下标 */
				this.netDiskIndex = 0;
				/** 分享码 */
				this.shareCode = "";
				/** 分享码的id */
				this.shareCodeId = "";
				/** 提取码 */
				this.accessCode = "";
				/**
				 * 获取的uuid
				 * @type {?string}
				 */
				this.uuid = void 0;
				/**
				 * 获取的userId
				 * @type {?string}
				 **/
				this.userId = void 0;
				const LanZouUtils = {
					LanZouDiskApp: "lanZouY-disk-app",
					EncryptList: [
						"Y",
						"y",
						"0",
						"Z",
						"z",
						"N",
						"n",
						"M",
						"I",
						"6",
						"m",
						"W",
						"w",
						"1",
						"X",
						"x",
						"L",
						"l",
						"K",
						"7",
						"k",
						"i",
						"U",
						"u",
						"2",
						"V",
						"v",
						"J",
						"j",
						"8",
						"G",
						"g",
						"F",
						"S",
						"s",
						"3",
						"T",
						"t",
						"H",
						"h",
						"f",
						"E",
						"e",
						"D",
						"Q",
						"q",
						"4",
						"R",
						"r",
						"9",
						"d",
						"a",
						"C",
						"c",
						"B",
						"O",
						"o",
						"5",
						"P",
						"p",
						"b",
						"A",
					],
					decodeChar(e) {
						for (let t = 0; t < this.EncryptList.length; t++)
							if (e == this.EncryptList[t]) return t;
						return -1;
					},
					/**
					 * shareCode转id
					 * @param {string} shareCode
					 */
					idEncrypt(shareCode) {
						let t = 1,
							n = 0;
						if ("" != shareCode && shareCode.length > 4) {
							let r;
							shareCode = shareCode.substring(3, shareCode.length - 1);
							for (let index = 0; index < shareCode.length; index++)
								(r = shareCode.charAt(shareCode.length - index - 1)),
									(n += this.decodeChar(r) * t),
									(t *= 62);
						}
						return n;
					},
					encrypt(e) {
						const t = Cryptojs.enc.Utf8.parse(this.LanZouDiskApp),
							n = Cryptojs.enc.Utf8.parse(e),
							r = Cryptojs.AES.encrypt(n, t, {
								mode: Cryptojs.mode.ECB,
								padding: Cryptojs.pad.Pkcs7,
							});
						return r;
					},
					/**
					 * 用于时间戳转加密字符串
					 * @param {any} e
					 * @returns
					 */
					encryptHex(e) {
						const t = this.encrypt(e, this.LanZouDiskApp);
						return t.ciphertext.toString().toUpperCase();
					},
				};
				/**
				 * 入口
				 * @param {number} netDiskIndex
				 * @param {string} shareCode
				 * @param {string} accessCode
				 */
				this.init = async function (netDiskIndex, shareCode, accessCode) {
					log.info([netDiskIndex, shareCode, accessCode]);
					that.netDiskIndex = netDiskIndex;
					that.shareCode = shareCode;
					that.accessCode = accessCode;
					that.shareCodeId = that.getDecodeShareCodeId(shareCode);
					that.uuid = that.getEncodeUUID();
					let linkInfo = await this.recommendList(
						3,
						"Chrome",
						that.uuid,
						2,
						that.getEncodeTimeStamp(),
						that.shareCodeId,
						0,
						1,
						60
					);
					if (!linkInfo) {
						return;
					}
					if (!linkInfo["list"].length) {
						return;
					}
					if (linkInfo["list"][0]?.["map"]?.["userId"]) {
						that.userId = linkInfo["list"][0]?.["map"]?.["userId"];
					} else {
						Qmsg.error("解析获取【userId】为空");
						return;
					}
					if (linkInfo["list"][0]["folderIds"] == null) {
						/* 单文件 */
						log.success("该链接是 单文件");
						let fileInfo = linkInfo["list"][0]["fileList"][0];
						let folderInfoList = that.parseFolderInfo(
							linkInfo["list"][0]["fileList"],
							0
						);
						/* 获取文件下载信息 */
						let downloadInfo = await folderInfoList[0]["clickEvent"]();
						if (downloadInfo) {
							let downloadUrl = downloadInfo["url"];
							if (NetDiskFilterScheme.isForwardDownloadLink("lanzouyx")) {
								downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
									"lanzouyx",
									downloadUrl
								);
							}
							NetDiskUI.staticView.oneFile({
								title: "蓝奏云优享单文件直链",
								fileName: fileInfo["fileName"],
								fileSize: fileInfo["fileSize"] * 1024,
								downloadUrl: downloadUrl,
								fileUploadTime: utils.formatToTimeStamp(fileInfo["updTime"]),
								fileLatestTime: utils.formatToTimeStamp(fileInfo["updTime"]),
							});
						}
					} else {
						/* 多文件 */
						log.success("该链接是 多文件");
						Qmsg.info("正在递归文件");
						let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
						let folderInfoList = that.parseFolderInfo(
							linkInfo["list"][0]["fileList"],
							0
						);
						QmsgLoading.close();
						log.info("递归完毕");
						NetDiskUI.staticView.moreFile("蓝奏云优享解析", folderInfoList);
					}
				};
				/**
				 * 获取直链弹窗的文件夹信息
				 * @param {object} infoList
				 * @param {number} index
				 */
				this.parseFolderInfo = function (infoList, index) {
					let folderInfoList = [];
					let tempFolderInfoList = [];
					/**
					 * @type {import("@whitesev/pops/dist/types/src/components/folder/indexType").PopsFolderDataConfig[]}
					 */
					let tempFolderFileInfoList = [];
					infoList.forEach((item) => {
						if (item["fileType"] === 2) {
							/* 文件夹 */
							tempFolderInfoList.push({
								fileName: item["folderName"],
								fileSize: 0,
								fileType: "",
								createTime: new Date(item["updTime"]).getTime(),
								latestTime: new Date(item["updTime"]).getTime(),
								isFolder: true,
								index: index,
								async clickEvent() {
									let nowTime = Date.now();
									let timestamp = that.getEncodeTimeStamp(nowTime);
									let folderId = item["folderId"];
									let folderInfo = await that.getFolderInfo(
										3,
										"Chrome",
										that.uuid,
										2,
										timestamp,
										that.shareCodeId,
										folderId,
										1,
										60
									);
									if (folderInfo && folderInfo["list"]) {
										return that.parseFolderInfo(folderInfo["list"], index + 1);
									} else {
										return [];
									}
								},
							});
						} else {
							/* 文件 */
							tempFolderFileInfoList.push({
								fileName: item["fileName"],
								fileSize: item["fileSize"] * 1024,
								fileType: "",
								createTime: new Date(item["updTime"]).getTime(),
								latestTime: new Date(item["updTime"]).getTime(),
								isFolder: false,
								index: index,
								async clickEvent() {
									let fileId = item["fileId"];
									let userId = item["userId"] || that.userId;
									let uuid = that.uuid;
									if (utils.isNull(userId)) {
										Qmsg.error("获取【userId】为空");
										return;
									}
									if (utils.isNull(uuid)) {
										Qmsg.error("获取【uuid】为空");
										return;
									}
									let downloadUrl = await that.getDownloadFileUrl(
										...that.getDownloadFileParams(fileId, userId, uuid)
									);
									if (downloadUrl) {
										if (NetDiskFilterScheme.isForwardDownloadLink("lanzouyx")) {
											downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
												"lanzouyx",
												downloadUrl
											);
										}
										return {
											url: downloadUrl,
											autoDownload: true,
											mode: "aBlank",
										};
									}
								},
							});
						}
					});
					tempFolderInfoList.sort((a, b) =>
						a["fileName"].localeCompare(b["fileName"])
					);
					tempFolderFileInfoList.sort((a, b) =>
						a["fileName"].localeCompare(b["fileName"])
					);
					folderInfoList = folderInfoList.concat(tempFolderInfoList);
					folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
					return folderInfoList;
				};
				/**
				 * 获取列表信息
				 * @param {number} devType
				 * @param {string} devModel
				 * @param {string} uuid
				 * @param {number} extra
				 * @param {string} timestamp
				 * @param {number|string} shareId
				 * @param {number} type
				 * @param {number} offset
				 * @param {number} limit
				 * @returns
				 */
				this.recommendList = async function (
					devType = 3,
					devModel = "Chrome",
					uuid = "",
					extra = 2,
					timestamp = "",
					shareId = "",
					type = 0,
					offset = 1,
					limit = 60
				) {
					let postResp = await httpx.post(
						`https://api.ilanzou.com/unproved/recommend/list?devType=${devType}&devModel=${devModel}&uuid=${uuid}&extra=${extra}&timestamp=${timestamp}&shareId=${shareId}&type=${type}&offset=${offset}&limit=${limit}`,
						{
							headers: {
								Accept: "application/json, text/plain, */*",
								Origin: "https://www.ilanzou.com",
								Referer: "https://www.ilanzou.com/",
								"Sec-Fetch-Site": "same-site",
								Host: "api.ilanzou.com",
								"User-Agent": utils.getRandomPCUA(),
							},
							responseType: "json",
						}
					);
					if (!postResp.status) {
						return;
					}
					let data = utils.toJSON(postResp.data.responseText);
					log.success(["获取链接信息：", data]);
					if (data["code"] !== 200) {
						Qmsg.error("请求链接信息失败");
						return;
					}
					if (!data["list"].length) {
						Qmsg.error("获取链接信息为空");
						return;
					}
					return data;
				};
				/**
				 * 获取文件夹信息
				 * @param {number} devType
				 * @param {string} devModel
				 * @param {string} uuid
				 * @param {number} extra
				 * @param {string} timestamp
				 * @param {number|string} shareId
				 * @param {number|string} folderId
				 * @param {number} offset
				 * @param {number} limit
				 */
				this.getFolderInfo = async function (
					devType = 6,
					devModel = "Chrome",
					uuid = "",
					extra = 2,
					timestamp = "",
					shareId = "",
					folderId = "",
					offset = 1,
					limit = 60
				) {
					let postResp = await httpx.post(
						`https://api.ilanzou.com/unproved/share/list?devType=${devType}&devModel=${devModel}&uuid=${uuid}&extra=${extra}&timestamp=${timestamp}&shareId=${shareId}&folderId=${folderId}&offset=${offset}&limit=${limit}`,
						{
							headers: {
								Accept: "application/json, text/plain, */*",
								Origin: "https://www.ilanzou.com",
								Referer: "https://www.ilanzou.com/",
								"Sec-Fetch-Site": "same-site",
								Host: "api.ilanzou.com",
								"User-Agent": utils.getRandomPCUA(),
							},
						}
					);
					if (!postResp.status) {
						return;
					}
					let data = utils.toJSON(postResp.data.responseText);
					log.success(["获取文件列表信息：", data]);
					if (data["code"] === 200) {
						return data;
					} else {
						Qmsg.error(data["msg"]);
					}
				};
				/**
				 * 获取下载链接
				 */
				this.getDownloadFileUrl = async function (
					downloadId = "",
					enable = 1,
					devType = 6,
					uuid = "",
					timestamp = "",
					auth = ""
				) {
					let getResp = await httpx.options(
						`https://api.ilanzou.com/unproved/file/redirect?downloadId=${downloadId}&enable=${enable}&devType=${devType}&uuid=${uuid}&timestamp=${timestamp}&auth=${auth}`
					);
					if (!getResp.status) {
						return;
					}
					log.success(getResp);
					if (getResp.data.responseText) {
						let errorData = utils.toJSON(getResp.data.responseText);
						log.error(errorData);
						Qmsg.error(errorData["msg"]);
						return;
					}
					return getResp.data.finalUrl;
				};
				/**
				 * 获取加密的uuid
				 * @param {number} e
				 * @returns
				 */
				this.getEncodeUUID = function (e = 21) {
					let r = (e = 21) =>
						crypto
							.getRandomValues(new Uint8Array(e))
							.reduce(
								(e, t) => (
									(t &= 63),
									(e +=
										t < 36
											? t.toString(36)
											: t < 62
											? (t - 26).toString(36).toUpperCase()
											: t > 62
											? "-"
											: "_"),
									e
								),
								""
							);
					return r(e);
				};
				/**
				 * 获取shareCode转换后的id
				 */
				this.getDecodeShareCodeId = function (shareCode) {
					return LanZouUtils.idEncrypt(shareCode);
				};
				/**
				 * 获取加密后的timestamp
				 * @param {number} time
				 */
				this.getEncodeTimeStamp = function (time = Date.now()) {
					return LanZouUtils.encryptHex(time);
				};
				/**
				 * 获取下载文件的参数
				 * @param {string} fileId 文件id
				 * @param {string} userId 用户id
				 * @param {?string} uuid 用户登录生成的uuid
				 */
				this.getDownloadFileParams = function (fileId, userId = "", uuid) {
					let nowTime = Date.now();
					let downloadId = LanZouUtils.encryptHex(fileId + "|" + userId),
						enable = 1,
						devType = 6,
						timestamp = that.getEncodeTimeStamp(nowTime),
						auth = LanZouUtils.encryptHex(fileId + "|" + nowTime);
					return [downloadId, enable, devType, uuid, timestamp, auth];
				};
				/**
				 * 前往登录
				 */
				this.gotoLogin = function () {
					NetDiskPops.confirm(
						{
							title: {
								position: "center",
								text: "蓝奏云优享",
							},
							content: {
								text: "必须先在【蓝奏云优享】进行登录，然后登录成功后刷新获取必备的下载参数【uuid】和【userId】。",
								html: false,
							},
							btn: {
								reverse: true,
								position: "end",
								ok: {
									text: "前往",
									enable: true,
									callback() {
										window.open("https://www.ilanzou.com", "_blank");
									},
								},
							},
						},
						NetDiskUI.popsStyle.tianYiYunLoginTip
					);
				};
				return this;
			},
			/**
			 * 天翼云
			 * + 开发文档：https://id.dlife.cn/html/api_detail_696.html
			 * @constructor
			 * @returns {object}
			 */
			tianyiyun: function () {
				let that = this;
				/**
				 * 所在规则的下标
				 */
				this.netDiskIndex = 0;
				/**
				 * 分享码
				 */
				this.shareCode = "";
				/**
				 * 提取码
				 */
				this.accessCode = "";
				let shareId = void 0;
				/* 猜测1是有密码，2是无密码 */
				let shareMode = 1;
				this.code = {
					ShareNotFoundFlatDir: "抱歉，该文件的分享平铺目录未找到",
					ShareNotFound: "抱歉，您访问的页面地址有误，或者该页面不存在。",
					ShareAuditNotPass: "抱歉，该内容审核不通过",
					FileNotFound: "抱歉，文件不存在",
					ShareExpiredError: "抱歉，您访问的页面地址有误，或者该页面不存在",
					ShareAuditWaiting: "抱歉，该链接处于审核中",
					ShareInfoNotFound: "抱歉，您访问的页面地址有误，或者该页面不存在",
					FileTooLarge: "抱歉，文件太大，不支持下载",
					InvalidSessionKey:
						"天翼云PC端Cookie未生成，是否前去登录？<br />&nbsp;&nbsp;&nbsp;&nbsp;(注意,需要当前浏览器的UA切换成PC且在登录后要等待进入个人云空间后生成Cookie，不是手机端浏览的个人云空间，那样生成的Cookie无法使用)",
				};
				/**
				 *
				 * @param {number} netDiskIndex
				 * @param {string} shareCode
				 * @param {string} accessCode
				 * @returns
				 */
				this.init = async function (netDiskIndex, shareCode, accessCode) {
					log.info([netDiskIndex, shareCode, accessCode]);
					that.netDiskIndex = netDiskIndex;
					that.shareCode = shareCode;
					that.accessCode = accessCode;

					let shareInfoData = await that.getShareInfoByCodeV2(shareCode);
					if (!shareInfoData) {
						return;
					}

					log.info(["解析的JSON信息", shareInfoData]);
					if (
						shareInfoData["needAccessCode"] &&
						utils.isNull(that.accessCode)
					) {
						Qmsg.error("密码不正确!");
						NetDiskUI.newAccessCodeView(
							void 0,
							"tianyiyun",
							that.netDiskIndex,
							that.shareCode,
							(userInputAccessCode) => {
								that.init(
									that.netDiskIndex,
									that.shareCode,
									userInputAccessCode
								);
							}
						);
						return;
					}
					if ("shareId" in shareInfoData) {
						shareId = shareInfoData["shareId"];
					} else {
						shareId = await that.getShareId(shareCode, accessCode);
					}
					if ("shareMode" in shareInfoData) {
						shareMode = shareInfoData["shareMode"];
					}
					if (shareId == void 0) {
						return;
					}
					if (shareInfoData.isFolder) {
						/* 多文件 */
						Qmsg.info("正在递归文件");
						let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
						let fileId = shareInfoData["fileId"];
						let folderInfo = await that.listShareDir(
							shareCode,
							accessCode,
							void 0,
							void 0,
							fileId,
							fileId,
							void 0,
							shareId,
							void 0,
							void 0,
							void 0,
							void 0
						);
						if (!folderInfo) {
							QmsgLoading.close();
							return;
						}
						let folderInfoList = that.getFolderInfo(
							shareCode,
							accessCode,
							folderInfo,
							0
						);
						QmsgLoading.close();
						log.info("递归完毕");
						NetDiskUI.staticView.moreFile("天翼云文件解析", folderInfoList);
						return;
					} else {
						/* 单文件 */
						let downloadUrl = await that.getDownloadUrl(
							that.shareCode,
							that.accessCode,
							shareInfoData.fileId,
							shareId
						);
						if (downloadUrl) {
							if (NetDiskFilterScheme.isForwardDownloadLink("tianyiyun")) {
								downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
									"tianyiyun",
									downloadUrl
								);
							}
							NetDiskUI.staticView.oneFile({
								title: "天翼云单文件直链",
								fileName: shareInfoData.fileName,
								fileSize: utils.formatByteToSize(shareInfoData.fileSize),
								downloadUrl: downloadUrl,
								fileUploadTime: shareInfoData.fileCreateDate,
								fileLatestTime: shareInfoData.fileLastOpTime,
							});
						}
					}
				};
				/**
				 * 获取当前登录用户的信息
				 * @returns {Promise<?{
				 * encryptAccount: string,
				 * icon: string,
				 * nickname: string,
				 * res_code: string,
				 * res_message: string,
				 * sessionKey: string,
				 * userAccount: string
				 * }>}
				 */
				this.getUserBriefInfo = async function (shareCode) {
					let getResp = await httpx.get(
						"https://cloud.189.cn/api/portal/v2/getUserBriefInfo.action",
						{
							headers: {
								Accept: "application/json;charset=UTF-8",
								Referer: "https://cloud.189.cn/web/share?code=" + shareCode,
								"User-Agent": utils.getRandomPCUA(),
							},
							onerror() {},
						}
					);
					log.info(getResp);
					if (!getResp.status) {
						let errorResultJSON = utils.toJSON(getResp.data.responseText);
						if (errorResultJSON["res_code"] in that.code) {
							Qmsg.error(that.code[errorResultJSON["res_code"]]);
						} else {
							Qmsg.error("请求异常");
						}
						return;
					}
					let data = utils.toJSON(getResp.data.responseText);
					if (data["res_code"] === 0) {
						return data;
					}
				};
				/**
				 * 获取分享信息
				 * @param {string} shareCode
				 * @returns
				 */
				this.getShareInfoByCodeV2 = async function (shareCode) {
					let postResp = await httpx.post({
						url: "https://cloud.189.cn/api/open/share/getShareInfoByCodeV2.action",
						data: `shareCode=${shareCode}`,
						headers: {
							Accept: "application/json;charset=UTF-8",
							"Content-Type": "application/x-www-form-urlencoded",
							"User-Agent": utils.getRandomPCUA(),
							"Sign-Type": 1,
							Referer: "https://cloud.189.cn/web/share?code=" + shareCode,
							Origin: "https://cloud.189.cn",
						},
						onerror() {},
					});
					if (!postResp.status) {
						let errorData = utils.toJSON(postResp.data.responseText);
						log.error(["获取下载参数失败的JSON信息", errorData]);
						if (errorData["res_code"] in that.code) {
							Qmsg.error(that.code[errorData["res_code"]]);
						} else {
							Qmsg.error(errorData["res_message"]);
						}
						return;
					}
					let postData = postResp.data;
					log.info(postData);
					let data = utils.toJSON(postData.responseText);
					if (data["res_code"] == 0) {
						return data;
					} else {
						if (that.code.hasOwnProperty(data["res_code"])) {
							Qmsg.error(that.code[data["res_code"]]);
						} else {
							Qmsg.error("获取FileId失败");
						}
					}
				};
				/**
				 * 获取shareId
				 * @returns {Promise<?number>}
				 */
				this.getShareId = async function (shareCode, accessCode) {
					let getResp = await httpx.get({
						url: `https://cloud.189.cn/api/open/share/checkAccessCode.action?shareCode=${shareCode}&accessCode=${accessCode}`,
						headers: {
							Accept: "application/json;charset=UTF-8",
							"Cache-Control": "no-cache",
							"User-Agent": utils.getRandomPCUA(),
							"Sign-Type": 1,
							Referer: `https://cloud.189.cn/web/share?code=${shareCode}`,
						},
						responseType: "json",
					});
					if (!getResp.status) {
						return;
					}
					let respData = getResp.data;
					log.info(respData);
					let data = utils.toJSON(respData.responseText);
					if (data["res_code"] === 0 && "shareId" in data) {
						return data["shareId"];
					} else {
						Qmsg.error("获取shareId失败");
						log.info(data);
					}
				};
				/**
				 * 获取随机noCache
				 * @returns {string}
				 */
				this.getNoCacheValue = function () {
					let result = "";
					for (let index = 0; index < 17; index++) {
						result += utils.getRandomValue(1, 9);
					}
					return "0." + result;
				};
				/**
				 * 获取下载链接
				 * @param {string} shareCode
				 * @param {string} accessCode
				 * @param {number} fileId
				 * @param {number} shareId
				 * @returns {Promise}
				 */
				this.getDownloadUrl = async function (
					shareCode,
					accessCode,
					fileId,
					shareId
				) {
					let getResp = await httpx.get({
						url: `https://cloud.189.cn/api/open/file/getFileDownloadUrl.action?fileId=${fileId}&dt=1&shareId=${shareId}`,
						headers: {
							Accept: "application/json;charset=UTF-8",
							"Cache-Control": "no-cache",
							"User-Agent": utils.getRandomPCUA(),
							Referer: `https://cloud.189.cn/web/share?code=${shareCode}`,
							"Sign-Type": 1,
						},
						responseType: "json",
						onerror() {},
					});
					log.info(getResp);
					if (!getResp.status) {
						let errorResultJSON = utils.toJSON(getResp.data.responseText);
						if (errorResultJSON["errorCode"] === "InvalidSessionKey") {
							that.gotoLogin(that.code["InvalidSessionKey"]);
						} else if (errorResultJSON["res_code"] in that.code) {
							Qmsg.error(that.code[errorResultJSON["res_code"]]);
						} else {
							Qmsg.error("请求异常");
						}
						return;
					}
					let respData = getResp.data;
					let data = utils.toJSON(respData.responseText);
					log.info(data);
					if (data["res_code"] === 0) {
						return data["fileDownloadUrl"];
					} else if (
						"InvalidSessionKey" === data["res_code"] ||
						"InvalidSessionKey" === data["errorCode"]
					) {
						that.gotoLogin(that.code["InvalidSessionKey"]);
					} else if (that.code.hasOwnProperty(data["res_code"])) {
						Qmsg.error(that.code[data["res_code"]]);
					} else {
						Qmsg.error("请求失败");
						log.error(respData);
					}
				};

				/**
				 * 天翼云登录弹窗
				 * @param {string} text 弹窗的显示的内容
				 */
				this.gotoLogin = function (text = "") {
					NetDiskPops.confirm(
						{
							title: {
								position: "center",
								text: "天翼云",
							},
							content: {
								text: text,
								html: false,
							},
							btn: {
								reverse: true,
								position: "end",
								ok: {
									text: "前往",
									enable: true,
									callback() {
										window.open(
											"https://cloud.189.cn/api/portal/loginUrl.action?redirectURL=https://cloud.189.cn/web/main",
											"_blank"
										);
									},
								},
							},
						},
						NetDiskUI.popsStyle.tianYiYunLoginTip
					);
				};
				/**
				 * 解析文件夹信息
				 */
				this.listShareDir = async function (
					shareCode,
					accessCode,
					pageNum = 1,
					pageSize = 60,
					fileId,
					shareDirFileId,
					isFolder = true,
					shareId,
					iconOption = 5,
					orderBy = "lastOpTime",
					descending = true
				) {
					/* Sessionkey: Sessionkey */
					let getResp = await httpx.get(
						`https://cloud.189.cn/api/open/share/listShareDir.action?pageNum=${pageNum}&pageSize=${pageSize}&fileId=${fileId}&shareDirFileId=${shareDirFileId}&isFolder=${isFolder}&shareId=${shareId}&shareMode=${shareMode}&iconOption=${iconOption}&orderBy=${orderBy}&descending=${descending}&accessCode=${accessCode}`,
						{
							headers: {
								Accept: "application/json;charset=UTF-8",
								Referer: `https://cloud.189.cn/web/share?code=${shareCode}`,
								"Sign-Type": 1,
								"User-Agent": utils.getRandomPCUA(),
							},
							responseType: "json",
							onerror() {},
						}
					);
					if (!getResp.status) {
						let errorData = utils.toJSON(getResp.data.responseText);
						log.error(["解析文件夹信息失败", errorData]);
						if (errorData["res_code"] in that.code) {
							Qmsg.error(that.code[errorData["res_code"]]);
						} else if ("res_message" in errorData) {
							Qmsg.error(errorData["res_message"]);
						} else {
							Qmsg.error("解析文件夹信息失败");
						}
						return;
					}
					let getData = getResp.data;
					log.info(getData);
					let data = utils.toJSON(getData.responseText);
					if (data["res_code"] == 0) {
						return data["fileListAO"];
					} else {
						if (that.code.hasOwnProperty(data["res_code"])) {
							Qmsg.error(that.code[data["res_code"]]);
						} else {
							Qmsg.error("获取FileId失败");
						}
					}
				};
				/**
				 * 获取直链弹窗的文件夹信息
				 */
				this.getFolderInfo = function (
					shareCode,
					accessCode,
					dirInfo,
					index = 0
				) {
					/**
					 * @type {import("@whitesev/pops/dist/types/src/components/folder/indexType").PopsFolderDataConfig[]}
					 */
					let folderInfoList = [];
					let tempFolderInfoList = [];
					let tempFolderFileInfoList = [];
					/* 文件夹 */
					dirInfo["folderList"].forEach((folderInfo) => {
						folderInfoList.push({
							fileName: folderInfo["name"],
							fileSize: 0,
							fileType: "",
							createTime: utils.formatToTimeStamp(folderInfo["createDate"]),
							latestTime: utils.formatToTimeStamp(folderInfo["lastOpTime"]),
							isFolder: true,
							index: index,
							async clickEvent() {
								let _folderInfo_ = await that.listShareDir(
									shareCode,
									accessCode,
									1,
									100,
									folderInfo["id"],
									folderInfo["id"],
									void 0,
									shareId,
									void 0,
									void 0,
									void 0,
									void 0
								);
								if (!_folderInfo_) {
									return [];
								}
								return that.getFolderInfo(
									shareCode,
									accessCode,
									_folderInfo_,
									index + 1
								);
							},
						});
					});
					/* 文件 */
					dirInfo["fileList"].forEach((fileInfo) => {
						folderInfoList.push({
							fileName: fileInfo["name"],
							fileSize: fileInfo["size"],
							fileType: "",
							createTime: utils.formatToTimeStamp(fileInfo["createDate"]),
							latestTime: utils.formatToTimeStamp(fileInfo["lastOpTime"]),
							isFolder: false,
							index: index,
							async clickEvent() {
								let downloadUrl = await that.getDownloadUrl(
									shareCode,
									accessCode,
									fileInfo["id"],
									shareId
								);
								if (downloadUrl) {
									if (NetDiskFilterScheme.isForwardDownloadLink("tianyiyun")) {
										downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
											"tianyiyun",
											downloadUrl
										);
									}

									return {
										autoDownload: true,
										mode: "aBlank",
										url: downloadUrl,
									};
								}
							},
						});
					});
					tempFolderInfoList.sort((a, b) =>
						a["fileName"].localeCompare(b["fileName"])
					);
					tempFolderFileInfoList.sort((a, b) =>
						a["fileName"].localeCompare(b["fileName"])
					);
					folderInfoList = folderInfoList.concat(tempFolderInfoList);
					folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
					log.info(["getFolderInfo", folderInfoList]);
					return folderInfoList;
				};
				return this;
			},
			/**
			 * 文叔叔
			 * @constructor
			 * @returns {object}
			 */
			wenshushu: function () {
				let that = this;
				/**
				 * 所在规则的下标
				 */
				this.netDiskIndex = 0;
				/**
				 * 分享码
				 */
				this.shareCode = "";
				/**
				 * 提取码
				 */
				this.accessCode = "";
				/**
				 * 用于header头x-token
				 * @type {string}
				 */
				let token = void 0;
				this.code = {
					1004: "no token",
					1008: "您没有权限访问",
					1013: "糟糕，此任务已过期销毁，下次要记得续期",
					1066: "对方设置的下载 / 预览次数已用完",
					1088: "糟糕，您访问的页面不存在",
				};
				this.init = async function (netDiskIndex, shareCode, accessCode) {
					log.info([netDiskIndex, shareCode, accessCode]);
					that.netDiskIndex = netDiskIndex;
					that.shareCode = shareCode;
					that.accessCode = accessCode;
					Qmsg.info("正在请求直链中...");
					let token = await this.getWssToken();
					if (!token) {
						return;
					}
					let pidInfo = await this.getPid();
					if (!pidInfo) {
						return;
					}
					await this.getFileNList(pidInfo.bid, pidInfo.pid);
				};
				/**
				 * 获取token
				 * wss:xxxxxx
				 * @returns {Promise<string>}
				 */
				this.getWssToken = async function () {
					let postResp = await httpx.post({
						url: "https://www.wenshushu.cn/ap/login/anonymous",
						responseType: "json",
						dataType: "json",
						data: JSON.stringify({
							dev_info: "{}",
						}),
						headers: {
							Accept: "application/json, text/plain, */*",
							"User-Agent": utils.getRandomAndroidUA(),
							Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
						},
					});
					log.success(postResp);
					if (!postResp.status) {
						return;
					}
					let data = utils.toJSON(postResp.data.responseText);
					if (data["code"] === 0) {
						token = data["data"]["token"];
						return data["data"]["token"];
					} else if (data["code"] in that.code) {
						Qmsg.error(that.code[data["code"]]);
					} else {
						Qmsg.error("获取wss失败");
					}
				};
				/**
				 * 获取pid
				 * @returns {Promise<{bid:string,pid:string}> }
				 */
				this.getPid = async function () {
					let postResp = await httpx.post({
						url: "https://www.wenshushu.cn/ap/task/mgrtask",
						dataType: "json",
						responseType: "json",
						data: JSON.stringify({
							tid: that.shareCode,
							password: "",
							ufileid: "",
						}),
						headers: {
							Accept: "application/json, text/plain, */*",
							"User-Agent": utils.getRandomAndroidUA(),
							Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
							"x-token": token,
						},
					});
					log.success(postResp);
					if (!postResp.status) {
						return;
					}
					let respData = postResp.data;
					let data = utils.toJSON(respData.responseText);
					if (data["code"] === 0) {
						return {
							bid: data["data"]["boxid"],
							pid: data["data"]["ufileid"],
						};
					} else if (data["code"] in that.code) {
						Qmsg.error(that.code[data["code"]]);
					} else {
						Qmsg.error("获取pid失败");
					}
				};
				/**
				 * 获取文件列表信息
				 * @param {string} bid
				 * @param {string} pid
				 * @returns
				 */
				this.getFileNList = async function (bid, pid) {
					let postResp = await httpx.post({
						url: "https://www.wenshushu.cn/ap/ufile/nlist",
						dataType: "json",
						responseType: "json",
						data: JSON.stringify({
							start: 0,
							sort: {
								name: "asc",
							},
							bid: bid,
							pid: pid,
							options: {
								uploader: "true",
							},
							size: 50,
						}),
						headers: {
							Accept: "application/json, text/plain, */*",
							"User-Agent": utils.getRandomAndroidUA(),
							Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
							"x-token": token,
						},
					});
					log.success(postResp);
					if (!postResp.status) {
						return;
					}
					let respData = postResp.data;
					let jsonData = utils.toJSON(respData.responseText);
					if (jsonData["code"] === 0) {
						if (jsonData["data"]["fileList"][0]["type"] === 2) {
							Qmsg.error("该链接为多层级文件嵌套，跳转");
							NetDiskParse.blank(
								NetDiskParse.getBlankUrl(
									"wenshushu",
									that.netDiskIndex,
									that.shareCode,
									that.accessCode
								),
								"wenshushu",
								that.netDiskIndex,
								that.shareCode,
								that.accessCode
							);
						} else {
							await that.getDownloadUrl(jsonData["data"]["fileList"][0]);
						}
					} else if (jsonData["code"] in that.code) {
						Qmsg.error(that.code[jsonData["code"]]);
					} else {
						Qmsg.error("获取文件信息失败");
					}
				};
				/**
				 * 获取下载链接
				 * @param {object} data
				 * @returns {Promise}
				 */
				this.getDownloadUrl = async function (data) {
					let file_name = data.fname;
					let file_size = utils.formatByteToSize(data.size);
					let postResp = await httpx.post({
						url: "https://www.wenshushu.cn/ap/dl/sign",
						dataType: "json",
						responseType: "json",
						data: JSON.stringify({
							ufileid: data.fid,
							consumeCode: 0,
						}),
						headers: {
							Accept: "application/json, text/plain, */*",
							"User-Agent": utils.getRandomAndroidUA(),
							Referer: "https://www.wenshushu.cn/f/" + that.shareCode,
							"x-token": token,
						},
					});
					if (!postResp.status) {
						return;
					}
					log.success(postResp);
					let respData = postResp.data;
					let jsonData = utils.toJSON(respData.responseText);
					if (jsonData["code"] == 0) {
						let downloadUrl = jsonData["data"]["url"];
						if (downloadUrl === "") {
							Qmsg.error("对方的分享流量不足");
						} else {
							if (NetDiskFilterScheme.isForwardDownloadLink("wenshushu")) {
								downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
									"wenshushu",
									downloadUrl
								);
							}

							/* 文叔叔没有上传时间信息(暂时是这样的) */
							NetDiskUI.staticView.oneFile({
								title: "文叔叔单文件直链",
								fileName: file_name,
								fileSize: file_size,
								downloadUrl: downloadUrl,
							});
						}
					} else if (jsonData["data"] in that.code) {
						Qmsg.error(that.code[jsonData["data"]]);
					} else {
						Qmsg.error("获取下载链接失败");
					}
				};
				return this;
			},
			/**
			 * 123盘
			 * @constructor
			 * @returns {object}
			 */
			_123pan: function () {
				let that = this;
				/**
				 * 所在规则的下标
				 */
				this.netDiskIndex = 0;
				/**
				 * 分享码
				 */
				this.shareCode = "";
				/**
				 * 提取码
				 */
				this.accessCode = "";
				this.code = {
					5103: "分享码错误或者分享地址错误",
					5104: "分享已过期",
					"-1000": "获取出错",
					"-2000": "请求异常",
					"-3000": "请求意外中止",
					"-4000": "请求超时",
					104: "文件已失效",
				};
				this.init = async function (netDiskIndex, shareCode, accessCode) {
					log.info([netDiskIndex, shareCode, accessCode]);
					that.netDiskIndex = netDiskIndex;
					that.shareCode = shareCode;
					that.accessCode = accessCode;
					that.panelList = [];
					that.Authorization = GM_getValue("_123pan_User_Authorization");
					let checkLinkValidityStatus = await that.checkLinkValidity();
					if (!checkLinkValidityStatus) {
						return;
					}
					let infoLists = await that.getFiles();
					if (!infoLists) {
						return;
					}
					if (infoLists.length === 1 && infoLists[0]["Type"] == 0) {
						let fileInfo = infoLists[0];
						if (fileInfo["Status"] == 104) {
							Qmsg.error("文件已失效");
							return;
						}
						let downloadUrl = fileInfo["DownloadUrl"];
						let fileSize = "";
						if (downloadUrl === "") {
							let downloadInfo = await that.getFileDownloadInfo(
								fileInfo["Etag"],
								fileInfo["FileId"],
								fileInfo["S3KeyFlag"],
								that.shareCode,
								fileInfo["Size"]
							);
							if (downloadInfo && downloadInfo["code"] === 0) {
								downloadUrl = downloadInfo["data"]["DownloadURL"];
								if (NetDiskFilterScheme.isForwardDownloadLink("_123pan")) {
									downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
										"_123pan",
										downloadUrl
									);
								}
								fileSize = utils.formatByteToSize(fileInfo["Size"]);
							} else if (downloadInfo && downloadInfo["code"] === 401) {
								downloadUrl = "javascript:;";
								fileSize = "请登录后下载";
							} else {
								downloadUrl = "javascript:;";
								fileSize = "获取下载链接失败";
							}
						} else {
							if (NetDiskFilterScheme.isForwardDownloadLink("_123pan")) {
								downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
									"_123pan",
									downloadUrl
								);
							}

							fileSize = utils.formatByteToSize(fileInfo["Size"]);
						}
						let fileUploadTime = new Date(fileInfo["CreateAt"]).getTime();
						let fileLatestTime = new Date(fileInfo["UpdateAt"]).getTime();
						fileUploadTime = utils.formatTime(fileUploadTime);
						fileLatestTime = utils.formatTime(fileLatestTime);
						NetDiskUI.staticView.oneFile({
							title: "123盘单文件直链",
							fileName: fileInfo["FileName"],
							fileSize: fileSize,
							downloadUrl: downloadUrl,
							fileUploadTime: fileUploadTime,
							fileLatestTime: fileLatestTime,
						});
					} else {
						Qmsg.info("正在递归文件");
						let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
						let folderInfoList = that.getFolderInfo(infoLists, 0);
						QmsgLoading.close();
						log.info("递归完毕");
						NetDiskUI.staticView.moreFile("123盘文件解析", folderInfoList);
					}
				};
				/**
				 * 校验链接有效性
				 * @returns {boolean}
				 */
				this.checkLinkValidity = async function () {
					Qmsg.info("正在校验链接有效性");
					let url = `https://www.123pan.com/s/${that.shareCode}`;

					let getResp = await httpx.get({
						url: url,
						headers: {
							"User-Agent": utils.getRandomPCUA(),
							Referer: "https://www.123pan.com",
						},
					});
					log.info(getResp);
					if (!getResp.status) {
						return false;
					}
					let respData = getResp.data;
					let g_initialPropsMatch = respData.responseText.match(
						/window.g_initialProps[\s]*=[\s]*\{(.+?)\};/s
					);
					if (g_initialPropsMatch) {
						log.info(g_initialPropsMatch);
						let g_initialProps = utils.toJSON(
							`{${g_initialPropsMatch[g_initialPropsMatch.length - 1]}}`
						);
						log.info(g_initialProps);
						if (g_initialProps.res.code !== 0) {
							Qmsg.error(g_initialProps.res.message);
							return false;
						}
						let HasPwd = g_initialProps.res.data.HasPwd;
						if (
							HasPwd &&
							(that.accessCode == void 0 || that.accessCode === "")
						) {
							/* 该链接需要密码但是没有获取到 */
							Qmsg.error("密码缺失!");
							NetDiskUI.newAccessCodeView(
								"密码缺失",
								"_123pan",
								that.netDiskIndex,
								that.shareCode,
								(userInputAccessCode) => {
									that.init(
										that.netDiskIndex,
										that.shareCode,
										userInputAccessCode
									);
								}
							);
						} else {
							/* 该链接不需要密码 || 该链接需要密码且已获取到 */
							return true;
						}
					} else {
						Qmsg.error("校验链接-获取初始化内容失败");
					}
				};
				/**
				 * 获取文件
				 * @param {number} parentFileId
				 * @returns {Promise<?{
				 * Category: number,
				 * ContentType: string,
				 * CreateAt: number,
				 * DownloadUrl: string,
				 * Etag: string,
				 * FileId: number,
				 * FileName: string,
				 * ParentFileId: number,
				 * PunishFlag: number,
				 * S3KeyFlag: number,
				 * Size: number,
				 * Status: number,
				 * StorageNode: string,
				 * Type: 0|1,
				 * UpdateAt: string,
				 * }[]>}
				 */
				this.getFiles = async function (parentFileId = 0) {
					let url = `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${that.shareCode}&SharePwd=${that.accessCode}&ParentFileId=${parentFileId}&Page=1`;
					let getResp = await httpx.get({
						url: url,
						headers: {
							Accept: "*/*",
							"User-Agent": utils.getRandomPCUA(),
							Referer: `https://www.123pan.com/s/${that.shareCode}`,
						},
					});
					log.info(getResp);
					if (!getResp.status) {
						return;
					}
					let respData = getResp.data;
					let json_data = utils.toJSON(respData.responseText);
					if (json_data["code"] === 0) {
						let infoList = json_data["data"]["InfoList"];
						return infoList;
					} else if (json_data["code"] === 5103) {
						NetDiskUI.newAccessCodeView(
							void 0,
							"_123pan",
							that.netDiskIndex,
							that.shareCode,
							(userInputAccessCode) => {
								that.init(
									that.netDiskIndex,
									that.shareCode,
									userInputAccessCode
								);
							}
						);
					} else if (that.code[json_data["code"]]) {
						Qmsg.error(that.code[json_data["code"]]);
					} else if ("message" in json_data) {
						Qmsg.error(json_data["message"]);
					} else {
						Qmsg.error("123盘：未知的JSON格式");
					}
				};
				/**
				 * 递归算法使用的请求
				 * @param {string} parentFileId
				 * @returns {Promise<?{
				 * Category: number,
				 * ContentType: string,
				 * CreateAt: number,
				 * DownloadUrl: string,
				 * Etag: string,
				 * FileId: number,
				 * FileName: string,
				 * ParentFileId: number,
				 * PunishFlag: number,
				 * S3KeyFlag: number,
				 * Size: number,
				 * Status: number,
				 * StorageNode: string,
				 * Type: 0|1,
				 * UpdateAt: string,
				 * }[]>}
				 */
				this.getFilesByRec = async function (parentFileId) {
					let getResp = await httpx.get({
						url: `https://www.123pan.com/b/api/share/get?limit=100&next=1&orderBy=share_id&orderDirection=desc&shareKey=${that.shareCode}&SharePwd=${that.accessCode}&ParentFileId=${parentFileId}&Page=1`,
						headers: {
							Accept: "*/*",
							"User-Agent": utils.getRandomAndroidUA(),
							Referer: `https://www.123pan.com/s/${that.shareCode}`,
						},
					});
					if (!getResp.status) {
						return;
					}
					let respData = getResp.data;
					log.info(respData);
					let jsonData = utils.toJSON(respData.responseText);
					if (jsonData["code"] == 0) {
						return jsonData["data"]["InfoList"];
					}
				};
				/**
				 * 获取文件夹信息
				 * @param {{
				 * Category: number,
				 * ContentType: string,
				 * CreateAt: number,
				 * DownloadUrl: string,
				 * Etag: string,
				 * FileId: number,
				 * FileName: string,
				 * ParentFileId: number,
				 * PunishFlag: number,
				 * S3KeyFlag: number,
				 * Size: number,
				 * Status: number,
				 * StorageNode: string,
				 * Type: 0|1,
				 * UpdateAt: string,
				 * }[]} infoList
				 * @returns {Promise<{
				 * fileName: string,
				 * fileSize: string|number,
				 * fileType: ?string,
				 * createTime: ?string,
				 * latestTime: ?string,
				 * isFolder: boolean,
				 * index: ?number,
				 * clickCallBack: ?(event:Event,_config_: object)=>{}
				 * }[]>}
				 */
				this.getFolderInfo = function (infoList, index) {
					let folderInfoList = [];
					let tempFolderInfoList = [];
					/**
					 * @type {PopsFolderDataConfig[]}
					 */
					let tempFolderFileInfoList = [];
					infoList.forEach((item) => {
						if (item.Type) {
							/* 文件夹 */
							tempFolderInfoList.push({
								fileName: item.FileName,
								fileSize: 0,
								fileType: "",
								createTime: new Date(item.CreateAt).getTime(),
								latestTime: new Date(item.UpdateAt).getTime(),
								isFolder: true,
								index: index,
								async clickEvent() {
									let resultFileInfoList = await that.getFilesByRec(
										item["FileId"]
									);
									if (resultFileInfoList) {
										return that.getFolderInfo(resultFileInfoList, index + 1);
									} else {
										return [];
									}
								},
							});
						} else {
							/* 文件 */
							tempFolderFileInfoList.push({
								fileName: item.FileName,
								fileSize: item.Size,
								fileType: "",
								createTime: new Date(item.CreateAt).getTime(),
								latestTime: new Date(item.UpdateAt).getTime(),
								isFolder: false,
								index: index,
								async clickEvent() {
									if (item.Status == 104) {
										Qmsg.error("文件已失效");
									} else if (!Boolean(item.DownloadUrl)) {
										let downloadInfo = await that.getFileDownloadInfo(
											item["Etag"],
											item["FileId"],
											item["S3KeyFlag"],
											that.shareCode,
											item["Size"]
										);
										if (downloadInfo && downloadInfo["code"] === 0) {
											return {
												url: downloadInfo["data"]["DownloadURL"],
												autoDownload: true,
												mode: "aBlank",
											};
										} else if (downloadInfo && downloadInfo["code"] === 401) {
											Qmsg.error("请登录后下载");
										} else {
											Qmsg.error("获取下载链接失败");
										}
									} else {
										let downloadUrl = item.DownloadUrl;
										if (NetDiskFilterScheme.isForwardDownloadLink("_123pan")) {
											downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
												"_123pan",
												downloadUrl
											);
										}
										return {
											url: downloadUrl,
											autoDownload: true,
											mode: "aBlank",
										};
									}
								},
							});
						}
					});
					tempFolderInfoList.sort((a, b) =>
						a["fileName"].localeCompare(b["fileName"])
					);
					tempFolderFileInfoList.sort((a, b) =>
						a["fileName"].localeCompare(b["fileName"])
					);
					folderInfoList = folderInfoList.concat(tempFolderInfoList);
					folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
					return folderInfoList;
				};
				/**
				 * 获取单文件下载链接
				 * 123云盘新增了下载验证
				 * @param {string} Etag
				 * @param {string} FileID
				 * @param {string} S3keyFlag
				 * @param {string} ShareKey
				 * @param {string} Size
				 * @returns
				 */
				this.getFileDownloadInfo = async function (
					Etag,
					FileID,
					S3keyFlag,
					ShareKey,
					Size
				) {
					let authK_V = that.getFileDownloadAuth();
					let headers = {
						"App-Version": "3",
						Platform: "web",
						"Content-Type": "application/json;charset=UTF-8",
						Host: "www.123pan.com",
						Accept: "*/*",
						"User-Agent": utils.getRandomPCUA(),
						Referer: "https://www.123pan.com/s/" + ShareKey,
						Origin: "https://www.123pan.com",
					};
					if (that.Authorization) {
						headers["Authorization"] = "Bearer " + that.Authorization;
					}
					log.success("获取下载链接加密参数：" + authK_V);
					let postResp = await httpx.post({
						url: `https://www.123pan.com/a/api/share/download/info?${authK_V[0]}=${authK_V[1]}`,
						data: JSON.stringify({
							Etag: Etag,
							FileID: FileID,
							S3keyFlag: S3keyFlag,
							ShareKey: ShareKey,
							Size: Size,
						}),
						responseType: "json",
						headers: headers,
					});
					if (!postResp.status) {
						return;
					}
					let postData = postResp.data;
					let jsonData = utils.toJSON(postData.responseText);
					log.info(jsonData);
					if (jsonData["code"] == 0) {
						jsonData["data"]["DownloadURL"] = await that.decodeDownloadUrl(
							jsonData["data"]["DownloadURL"]
						);
						return jsonData;
					} else {
						return {
							code: jsonData["code"],
						};
					}
				};
				/**
				 * 获取单文件下载链接的加密参数
				 * 感谢：https://github.com/qaiu/netdisk-fast-download/
				 */
				this.getFileDownloadAuth = function () {
					function encry_time(param) {
						var param_time,
							param_other =
								arguments["length"] > 0x2 && void 0x0 !== arguments[0x2]
									? arguments[0x2]
									: 0x8;
						if (0x0 === arguments["length"]) return void 0;
						"object" === typeof param
							? (param_time = param)
							: (0xa === ("" + param)["length"] &&
									(param = 0x3e8 * parseInt(param)),
							  (param_time = new Date(param)));
						var param_timezoneoffset =
								param + 0xea60 * new Date(param)["getTimezoneOffset"](),
							param_time_n = param_timezoneoffset + 0x36ee80 * param_other;
						return (
							(param_time = new Date(param_time_n)),
							{
								y: param_time["getFullYear"](),
								m:
									param_time["getMonth"]() + 0x1 < 0xa
										? "0" + (param_time["getMonth"]() + 0x1)
										: param_time["getMonth"]() + 0x1,
								d:
									param_time["getDate"]() < 0xa
										? "0" + param_time["getDate"]()
										: param_time["getDate"](),
								h:
									param_time["getHours"]() < 0xa
										? "0" + param_time["getHours"]()
										: param_time["getHours"](),
								f:
									param_time["getMinutes"]() < 0xa
										? "0" + param_time["getMinutes"]()
										: param_time["getMinutes"](),
							}
						);
					}

					function encry_join(param) {
						for (
							var a =
									arguments["length"] > 0x1 && void 0x0 !== arguments[0x1]
										? arguments[0x1]
										: 0xa,
								funcRun = function () {
									for (var b, c = [], d = 0x0; d < 0x100; d++) {
										b = d;
										for (var index = 0x0; index < 0x8; index++)
											b = 0x1 & b ? 0xedb88320 ^ (b >>> 0x1) : b >>> 0x1;
										c[d] = b;
									}
									return c;
								},
								_funcRun_ = funcRun(),
								_param = param,
								_param_1 = -0x1,
								_param_0 = 0x0;
							_param_0 < _param["length"];
							_param_0++
						)
							_param_1 =
								(_param_1 >>> 0x8) ^
								_funcRun_[0xff & (_param_1 ^ _param.charCodeAt(_param_0))];
						return (_param_1 = (-0x1 ^ _param_1) >>> 0x0), _param_1.toString(a);
					}

					function getSign(urlPath) {
						var param_web = "web";
						var param_type = 3;
						var param_time = Math.round(
							(new Date().getTime() +
								0x3c * new Date().getTimezoneOffset() * 0x3e8 +
								28800000) /
								0x3e8
						).toString();
						var key = "a,d,e,f,g,h,l,m,y,i,j,n,o,p,k,q,r,s,t,u,b,c,v,w,s,z";
						var randomRoundNum = Math["round"](0x989680 * Math["random"]());

						var number_split;
						var time_a;
						var time_y;
						var time_m;
						var time_d;
						var time_h;
						var time_f;
						var time_array;
						var time_push;
						for (var number_item in ((number_split = key.split(",")),
						(time_a = encry_time(param_time)),
						(time_y = time_a["y"]),
						(time_m = time_a["m"]),
						(time_d = time_a["d"]),
						(time_h = time_a["h"]),
						(time_f = time_a["f"]),
						(time_array = [time_y, time_m, time_d, time_h, time_f].join("")),
						(time_push = []),
						time_array))
							time_push["push"](number_split[Number(time_array[number_item])]);
						var param_no;
						var param_join_s;
						return (
							(param_no = encry_join(time_push["join"](""))),
							(param_join_s = encry_join(
								""
									["concat"](param_time, "|")
									["concat"](randomRoundNum, "|")
									["concat"](urlPath, "|")
									["concat"](param_web, "|")
									["concat"](param_type, "|")
									["concat"](param_no)
							)),
							[
								param_no,
								""
									["concat"](param_time, "-")
									["concat"](randomRoundNum, "-")
									["concat"](param_join_s),
							]
						);
					}
					return getSign("/a/api/share/download/info");
				};
				/**
				 * 将直链的param参数解析成真正的直链
				 * @param {string} url
				 */
				this.decodeDownloadUrl = async function (url) {
					if (url === "") {
						return "";
					}
					let decodeURL = new URL(url);
					let params = decodeURL.search.replace(/^\?params=/gi, "");
					params = params.split("&")[0];
					try {
						let newDecodeUrl = decodeURI(atob(params));
						log.info("正在获取重定向直链");
						Qmsg.info("正在获取重定向直链");
						let getResp = await httpx.get({
							url: newDecodeUrl,
							responseType: "json",
							headers: {
								"User-Agent": utils.getRandomAndroidUA(),
								Referer: "https://www.123pan.com/s/" + that.shareCode,
								Origin: "https://www.123pan.com",
							},
							onerror: function () {},
						});
						log.info(getResp);
						if (!getResp.status && getResp.data.status !== 210) {
							/* 很奇怪，123盘返回的状态码是210 */
							// 这里还会有另一种情况，请求失败时，getResp.data内是数组[response]，status不存在！！
							// 先转为URL对象看看auto_redirect是否存在，存在就设置1自动重定向
							let parseUrl = new URL(newDecodeUrl);
							if (parseUrl.searchParams.has("auto_redirect")) {
								parseUrl.searchParams.set("auto_redirect", "1");
								return parseUrl.toString();
							}
							return newDecodeUrl;
						}
						let respData = getResp.data;
						let resultJSON = utils.toJSON(respData.responseText);
						let newURL = new URL(resultJSON.data.redirect_url);
						newURL.searchParams.set("auto_redirect", "1");
						log.success(resultJSON);
						return newURL.toString();
					} catch (error) {
						log.error(error);
						return url;
					}
				};
				return this;
			},
			/**
			 * 坚果云
			 * @constructor
			 * @returns {object}
			 */
			jianguoyun: function () {
				let that = this;
				/**
				 * 所在规则的下标
				 */
				this.netDiskIndex = 0;
				/**
				 * 分享码
				 */
				this.shareCode = "";
				/**
				 * 提取码
				 */
				this.accessCode = "";
				this.errorCode = {
					UnAuthorized: "请先登录坚果云账号",
				};
				this.init = async function (netDiskIndex, shareCode, accessCode) {
					log.info([netDiskIndex, shareCode, accessCode]);
					that.netDiskIndex = netDiskIndex;
					that.shareCode = shareCode;
					that.accessCode = accessCode;
					let downloadParams = await that.getRequestDownloadParams();
					if (!downloadParams) {
						return;
					}
					if (downloadParams["isdir"]) {
						/* 是文件夹 */
						let Qmsg_loading = Qmsg.loading("正在遍历多文件信息...");
						let folderInfo = await that.getFolderInfo(downloadParams["hash"]);
						if (!folderInfo) {
							Qmsg_loading.close();
							return;
						}
						let newFolderInfoList = that.parseMoreFile(
							folderInfo,
							downloadParams["hash"],
							downloadParams["name"]
						);
						Qmsg_loading.close();

						/* 坚果云盘没有上传时间信息(暂时是这样的) */
						NetDiskUI.staticView.moreFile("坚果云文件解析", newFolderInfoList);
					} else {
						/* 是文件 */
						let fileSize = utils.formatByteToSize(downloadParams["size"]);
						let downloadUrl = await that.getFileLink(
							downloadParams.hash,
							downloadParams.name
						);
						if (!downloadUrl) {
							return;
						}
						if (NetDiskFilterScheme.isForwardDownloadLink("jianguoyun")) {
							downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
								"jianguoyun",
								downloadUrl
							);
						}

						log.info(downloadUrl);
						/* 坚果云盘没有上传时间信息(暂时是这样的) */
						NetDiskUI.staticView.oneFile({
							title: "坚果云盘单文件直链",
							fileName: downloadParams["name"],
							fileSize: fileSize,
							downloadUrl: downloadUrl,
						});
					}
				};
				/**
				 * 解析多文件信息
				 * @param {{
				 * mtime: number,
				 * relPath: string,
				 * size: number,
				 * tblUri: ?string,
				 * type: "file"|string,
				 * }[]} folderInfo
				 * @param {string} hash 文件hash值
				 * @param {string} fileName 文件名
				 * @returns {{
				 * fileName: string,
				 * fileSize: string|number,
				 * fileType: ?string,
				 * createTime: ?string,
				 * latestTime: ?string,
				 * isFolder: boolean,
				 * index: ?number,
				 * clickCallBack: ?(event:Event,_config_: object)=>{}
				 * }[]}
				 */
				this.parseMoreFile = function (folderInfo, hash = "", fileName = "") {
					log.info(["解析多文件信息", folderInfo]);
					/**
					 * @type {PopsFolderDataConfig[]}
					 */
					let folderInfoList = [];
					folderInfo.forEach((item) => {
						let fileName = item.relPath;
						if (fileName.startsWith("/")) {
							fileName = fileName.replace(/^\//, "");
						}
						folderInfoList.push({
							fileName: fileName,
							fileSize: item["size"],
							fileType: "",
							createTime: item.mtime,
							latestTime: item.mtime,
							isFolder: false,
							index: 0,
							async clickEvent() {
								Qmsg.info("正在获取下载链接...");
								let downloadUrl = await that.getDirLink(
									hash,
									fileName,
									item["relPath"]
								);
								if (!downloadUrl) {
									return;
								}
								Qmsg.success("获取成功！");
								if (NetDiskFilterScheme.isForwardDownloadLink("jianguoyun")) {
									downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
										"jianguoyun",
										downloadUrl
									);
								}

								log.info(downloadUrl);
								return {
									autoDownload: true,
									mode: "aBlank",
									url: downloadUrl,
								};
							},
						});
					});
					return folderInfoList;
				};
				/**
				 * 获取下载链接所需要的hash值和name
				 */
				this.getRequestDownloadParams = async function () {
					log.info("获取hash值");
					Qmsg.info("正在获取请求信息");
					let pageInfoRegexp = /var[\s]*PageInfo[\s]*=[\s]*{([\s\S]+)};/i;
					let formData = new FormData();
					formData.append("pd", that.accessCode);
					let requestDetails = {
						url: `https://www.jianguoyun.com/p/${that.shareCode}`,
						data: that.accessCode === "" ? void 0 : `pd=${that.accessCode}`,
						responseType: "html",
						headers: {
							"Content-Type": "application/x-www-form-urlencoded",
							"User-Agent": utils.getRandomPCUA(),
							Referer: `https://www.jianguoyun.com/p/${that.shareCode}`,
						},
					};
					let requestResp = void 0;
					if (that.accessCode === "") {
						requestResp = await httpx.get(requestDetails);
					} else {
						requestResp = await httpx.post(requestDetails);
					}
					if (!requestResp.status) {
						return;
					}
					let respData = requestResp.data;
					log.info("请求信息");
					log.info(respData);
					let pageInfo = respData.responseText.match(pageInfoRegexp);
					if (pageInfo) {
						pageInfo = pageInfo[pageInfo.length - 1];
						pageInfo = `({${pageInfo}})`;
						pageInfo = eval(pageInfo);
						log.info(pageInfo);
						let fileName = pageInfo["name"];
						let fileSize = pageInfo["size"];
						let fileHash = pageInfo["hash"];
						let fileNeedsPassword = pageInfo["needsPassword"];
						let fileOwner = pageInfo["owner"];
						let isdir = pageInfo["isdir"];
						let fileErrorCode = pageInfo["errorCode"];
						fileName = decodeURIComponent(fileName);
						log.success("是否是文件夹 ===> " + isdir);
						log.success("hash ===> " + fileHash);
						log.success("name ===> " + fileName);
						log.success("size ===> " + fileSize);
						if (
							fileNeedsPassword &&
							(that.accessCode == void 0 || that.accessCode === "")
						) {
							/* 需要密码但没密码 */
							Qmsg.error("密码不正确!");
							NetDiskUI.newAccessCodeView(
								"密码缺失",
								"jianguoyun",
								that.netDiskIndex,
								that.shareCode,
								(userInputAccessCode) => {
									that.init(
										that.netDiskIndex,
										that.shareCode,
										userInputAccessCode
									);
								}
							);
							return;
						}
						if (fileErrorCode === "AuthenticationFailed") {
							Qmsg.error("密码错误");
							NetDiskUI.newAccessCodeView(
								void 0,
								"jianguoyun",
								that.netDiskIndex,
								that.shareCode,
								(userInputAccessCode) => {
									that.init(
										that.netDiskIndex,
										that.shareCode,
										userInputAccessCode
									);
								}
							);
							return;
						}
						if (fileHash === "" || fileHash == void 0) {
							log.error("hash为空，可能文件被撤销分享了");
							Qmsg.error(`文件分享已被撤销`);
							return;
						}
						if (fileSize == void 0 && isdir == false) {
							log.error("无size，可能文件被删除了");
							Qmsg.error(`“${fileName}”文件已被拥有者（“${fileOwner}”）删除`);
							return;
						} else {
							return {
								name: fileName,
								hash: fileHash,
								size: fileSize,
								needsPassword: fileNeedsPassword,
								owner: fileOwner,
								isdir: isdir,
							};
						}
					} else if (
						respData.responseText.match("对不起，找不到您指定的文件。")
					) {
						log.error("啊噢！ (404) 对不起，找不到您指定的文件。");
						Qmsg.error("坚果云: 对不起，找不到您指定的文件。");
					} else if (
						respData.responseText.match("对不起，您的某些输入不正确。")
					) {
						log.error("可能该链接不需要访问码或者访问码有问题");
						NetDiskUI.newAccessCodeView(
							void 0,
							"jianguoyun",
							that.netDiskIndex,
							that.shareCode,
							(userInputAccessCode) => {
								that.init(
									that.netDiskIndex,
									that.shareCode,
									userInputAccessCode
								);
							}
						);
					} else {
						log.error("获取PageInfo失败");
						Qmsg.error("坚果云: 获取PageInfo失败");
					}
				};
				/**
				 * 获取下载链接
				 * @param {string} fileHash 文件hash值
				 * @param {string} fileName 文件名
				 * @returns {Promise}
				 */
				this.getFileLink = async function (fileHash = "", fileName = "") {
					fileName = encodeURIComponent(fileName);
					let getResp = await httpx.get({
						url: `https://www.jianguoyun.com/d/ajax/fileops/pubFileLink?k=${fileHash}&name=${fileName}&wm=false${
							that.accessCode === "" ? "" : "&pd=" + that.accessCode
						}&forwin=1&_=${new Date().getTime()}`,
						responseType: "json",
						headers: {
							"User-Agent": utils.getRandomPCUA(),
						},
						onerror: function () {},
					});
					if (!getResp.status) {
						if (utils.isNotNull(getResp.data?.responseText)) {
							let errorData = utils.toJSON(getResp.data.responseText);
							log.error(["坚果云", errorData]);
							if (errorData["errorCode"] === "UnAuthorized") {
								that.gotoLogin();
							} else {
								Qmsg.error(errorData["detailMsg"]);
							}
						} else {
							Qmsg.error("请求异常");
						}
						return;
					}
					let respData = getResp.data;
					log.info(["请求信息", respData]);
					let resultJSON = utils.toJSON(respData.responseText);
					log.info(["解析JSON", resultJSON]);
					if (resultJSON.hasOwnProperty("errorCode")) {
						Qmsg.error("坚果云: " + resultJSON["detailMsg"]);
						return;
					} else if (resultJSON.hasOwnProperty("url")) {
						return resultJSON["url"];
					} else {
						Qmsg.error("坚果云: 处理下载链接异常");
					}
				};
				/**
				 * 获取文件夹下的文件下载链接
				 * @param {string} fileHash
				 * @param {string} fileName
				 * @param {string} filePath
				 * @returns {Promise}
				 */
				this.getDirLink = async function (
					fileHash = "",
					fileName = "",
					filePath = "/"
				) {
					fileName = encodeURIComponent(fileName);
					let getResp = await httpx.get({
						url: `https://www.jianguoyun.com/d/ajax/dirops/pubDIRLink?k=${fileHash}&dn=${fileName}&p=${filePath}&forwin=1&_=${new Date().getTime()}`,
						responseType: "json",
						headers: {
							"User-Agent": utils.getRandomPCUA(),
						},
						onerror: function () {},
					});
					if (!getResp.status) {
						if (utils.isNotNull(getResp.data?.responseText)) {
							let errorData = utils.toJSON(getResp.data.responseText);
							log.error(["坚果云", errorData]);
							if (errorData["errorCode"] === "UnAuthorized") {
								that.gotoLogin();
							} else {
								Qmsg.error(errorData["detailMsg"]);
							}
						} else {
							Qmsg.error("请求异常");
						}
						return;
					}
					let respData = getResp.data;
					log.info(["请求信息", respData]);
					let resultJSON = utils.toJSON(respData.responseText);
					log.info(resultJSON);
					if (resultJSON.hasOwnProperty("errorCode")) {
						Qmsg.error("坚果云: " + resultJSON["detailMsg"]);
						return;
					} else if (resultJSON.hasOwnProperty("url")) {
						return resultJSON["url"];
					} else {
						Qmsg.error("坚果云: 处理下载链接异常");
					}
				};
				/**
				 * 获取文件夹信息
				 * @param {string} hash
				 * @returns
				 */
				this.getFolderInfo = async function (hash = "") {
					let getResp = await httpx.get({
						url: `https://www.jianguoyun.com/d/ajax/dirops/pubDIRBrowse?hash=${hash}&relPath=%2F&_=${new Date().getTime()}`,
						responseType: "json",
						headers: {
							"User-Agent": utils.getRandomPCUA(),
						},
					});
					if (!getResp.status) {
						return;
					}
					let respData = getResp.data;
					log.info(["请求信息", respData]);
					let resultJSON = utils.toJSON(respData.responseText);
					log.info(resultJSON);
					if ("objects" in resultJSON) {
						return resultJSON["objects"];
					} else {
						Qmsg.error("坚果云: 处理多文件信息异常");
					}
				};
				/**
				 * 前往登录
				 */
				this.gotoLogin = function () {
					NetDiskPops.confirm(
						{
							title: {
								text: "提示",
								position: "center",
							},
							content: {
								text: `解析失败，原因：当前尚未登录坚果云，是否前往登录？`,
							},
							btn: {
								reverse: true,
								position: "end",
								ok: {
									text: "前往",
									callback: function (_event_) {
										window.open(
											"https://www.jianguoyun.com/d/login#from=https%3A%2F%2Fwww.jianguoyun.com%2F",
											"_blank"
										);
									},
								},
							},
						},
						NetDiskUI.popsStyle.jianGuoYunLoginTip
					);
				};
				return this;
			},
			/**
			 * 奶牛快传
			 * 感谢：https://github.com/qaiu/netdisk-fast-download
			 * @constructor
			 * @returns {object}
			 */
			nainiu: function () {
				let that = this;
				/**
				 * 所在规则的下标
				 */
				this.netDiskIndex = 0;
				/**
				 * 分享码
				 */
				this.shareCode = "";
				/**
				 * 提取码
				 */
				this.accessCode = "";
				const OK_CODE = "0000";
				this.init = async function (netDiskIndex, shareCode, accessCode) {
					log.info([netDiskIndex, shareCode, accessCode]);
					that.netDiskIndex = netDiskIndex;
					that.shareCode = shareCode;
					that.accessCode = accessCode;
					that.panelList = [];
					that.panelContent = "";
					let checkLinkValidityInfo = await that.checkLinkValidity(
						that.shareCode,
						that.accessCode
					);
					if (!checkLinkValidityInfo) {
						return;
					}
					if (checkLinkValidityInfo.isFolder) {
						/* 多文件 */
						Qmsg.info("正在递归文件");
						let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
						let firstFolderInfo = await that.getShareFolder(
							checkLinkValidityInfo["data"]["guid"]
						);
						if (!firstFolderInfo) {
							QmsgLoading.close();
							return;
						}
						let firstFileInfo = await that.getShareFiles(
							checkLinkValidityInfo["data"]["guid"]
						);
						if (!firstFileInfo) {
							QmsgLoading.close();
							return;
						}
						let folderInfoList = that.getFolderInfo(
							checkLinkValidityInfo["data"]["guid"],
							firstFolderInfo,
							firstFileInfo,
							0
						);
						QmsgLoading.close();
						log.info("递归完毕");
						NetDiskUI.staticView.moreFile("奶牛快传文件解析", folderInfoList);
					} else {
						/* 单文件 */
						let downloadUrl = void 0;
						if (checkLinkValidityInfo["zipDownload"]) {
							downloadUrl = await that.getZipFileDownloadUrl(
								that.shareCode,
								checkLinkValidityInfo["guid"],
								checkLinkValidityInfo["fileName"]
							);
						} else {
							downloadUrl = await that.getDownloadUrl(
								that.shareCode,
								checkLinkValidityInfo["guid"],
								checkLinkValidityInfo["id"]
							);
						}
						if (!downloadUrl) {
							return;
						}
						if (NetDiskFilterScheme.isForwardDownloadLink("nainiu")) {
							downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
								"nainiu",
								downloadUrl
							);
						}

						NetDiskUI.staticView.oneFile({
							title: "奶牛快传单文件直链",
							fileName: checkLinkValidityInfo["fileName"],
							fileType: checkLinkValidityInfo["fileType"],
							fileSize: checkLinkValidityInfo["fileSize"],
							downloadUrl: downloadUrl,
							fileUploadTime: checkLinkValidityInfo["fileUploadTime"],
							fileLatestTime: checkLinkValidityInfo["fileLatestTime"],
							clickCallBack: (_fileDetails_) => {
								that.downloadFile(
									checkLinkValidityInfo["fileName"],
									downloadUrl
								);
							},
						});
					}
				};
				/**
				 * 校验链接有效性并解析获取信息
				 * @param {string} shareCode
				 * @param {string} accessCode
				 * @param {boolean|object}
				 */
				this.checkLinkValidity = async function (shareCode, accessCode) {
					let resultJSON = await that.getShareByUniqueUrl(shareCode);
					if (!resultJSON) {
						return false;
					}
					let code = resultJSON["code"];
					let message = resultJSON["message"];
					if (code !== OK_CODE) {
						Qmsg.error(message);
						return false;
					} else {
						let needPassword = resultJSON["data"]["needPassword"];
						let zipDownload = resultJSON["data"]["zipDownload"];
						if (needPassword && utils.isNull(accessCode)) {
							Qmsg.error("密码缺失!");
							NetDiskUI.newAccessCodeView(
								"密码缺失",
								"nainiu",
								that.netDiskIndex,
								that.shareCode,
								(userInputAccessCode) => {
									that.init(
										that.netDiskIndex,
										that.shareCode,
										userInputAccessCode
									);
								}
							);
							return false;
						} else if (zipDownload) {
							/* 压缩包下载 */
							Qmsg.success("该链接为zip单文件");
							return {
								zipDownload: zipDownload,
								guid: resultJSON["data"]["guid"],
								fileSize: utils.formatByteToSize(
									resultJSON["data"]["firstFolder"]["size"]
								),
								fileName: resultJSON["data"]["firstFolder"]["title"],
								fileUploadTime: utils.formatTime(
									resultJSON["data"]["firstFolder"]["created_at"]
								),
								fileLatestTime: utils.formatTime(
									resultJSON["data"]["firstFolder"]["updated_at"]
								),
							};
						} else if (resultJSON["data"]["firstFile"] == void 0) {
							/* 文件夹类型 */
							Qmsg.success("该链接为文件夹类型");
							return {
								isFolder: true,
								guid: resultJSON["data"]["guid"],
								firstFolder: resultJSON["data"]["firstFolder"],
								data: resultJSON["data"],
							};
						}
						return {
							zipDownload: zipDownload,
							guid: resultJSON["data"]["guid"],
							id: resultJSON["data"]["firstFile"]["id"],
							fileSize: utils.formatByteToSize(
								resultJSON["data"]["firstFile"]["file_info"]["size"]
							),
							fileName: resultJSON["data"]["firstFile"]["file_info"]["title"],
							fileType: resultJSON["data"]["firstFile"]["file_info"]["format"],
							fileUploadTime: utils.formatTime(
								resultJSON["data"]["firstFile"]["created_at"]
							),
							fileLatestTime: utils.formatTime(
								resultJSON["data"]["firstFile"]["updated_at"]
							),
						};
					}
				};
				/**
				 * 获取直链弹窗的文件夹信息
				 * @returns
				 */
				this.getFolderInfo = function (
					transferGuid,
					shareFolderInfoList,
					shareFileInfoList,
					index = 0
				) {
					let folderInfoList = [];
					let tempFolderInfoList = [];
					let tempFolderFileInfoList = [];
					/* 文件夹 */
					shareFolderInfoList.forEach((folderInfo) => {
						folderInfoList.push({
							fileName: folderInfo["title"],
							fileSize: 0,
							fileType: "",
							createTime: folderInfo["created_at"],
							latestTime: folderInfo["updated_at"],
							isFolder: true,
							index: index,
							async clickEvent() {
								if (
									!folderInfo["child_folder_count"] &&
									!folderInfo["content_count"]
								) {
									/* 里面没有文件夹和文件 */
									return [];
								}
								let childFolderInfo = await that.getShareFolder(
									transferGuid,
									folderInfo["id"]
								);
								if (!childFolderInfo) {
									return [];
								}
								let childFileInfo = await that.getShareFiles(
									transferGuid,
									folderInfo["id"]
								);
								if (!childFileInfo) {
									return [];
								}
								let folderInfoList = that.getFolderInfo(
									transferGuid,
									childFolderInfo,
									childFileInfo,
									index + 1
								);
								return folderInfoList;
							},
						});
					});
					/* 文件 */
					shareFileInfoList.forEach((fileInfo) => {
						let fileName = fileInfo["file_info"]["title"];
						let fileType = fileInfo["file_info"]["format"] ?? "";
						if (Boolean(fileType)) {
							fileName = fileName + "." + fileType;
						}
						folderInfoList.push({
							fileName: fileName,
							fileSize: fileInfo["file_info"]["size"],
							fileType: fileType,
							createTime: fileInfo["created_at"],
							latestTime: fileInfo["updated_at"],
							isFolder: false,
							index: index,
							async clickEvent() {
								let downloadUrl = await that.getDownloadUrl(
									that.shareCode,
									transferGuid,
									fileInfo["id"]
								);
								if (!downloadUrl) {
									return;
								}
								if (NetDiskFilterScheme.isForwardDownloadLink("nainiu")) {
									downloadUrl = NetDiskFilterScheme.parseDataToSchemeUri(
										"nainiu",
										downloadUrl
									);
								}

								that.downloadFile(fileName, downloadUrl);
							},
						});
					});
					tempFolderInfoList.sort((a, b) =>
						a["fileName"].localeCompare(b["fileName"])
					);
					tempFolderFileInfoList.sort((a, b) =>
						a["fileName"].localeCompare(b["fileName"])
					);
					folderInfoList = folderInfoList.concat(tempFolderInfoList);
					folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
					log.info(["getFolderInfo", folderInfoList]);
					return folderInfoList;
				};
				/**
				 * 文件解析
				 * @param {string} shareCode
				 * @param {string} accessCode
				 */
				this.parseMoreFile = async function (shareCode, accessCode) {};
				/**
				 * 获取文件夹信息
				 * @param {string} transferGuid
				 * @param {number} folderId
				 * @param {number} page
				 * @param {number} size
				 * @returns {Promise<?object[]>}
				 */
				this.getShareFolder = async function (
					transferGuid,
					folderId = "",
					page = 0,
					size = 100
				) {
					let getResp = await httpx.get(
						`https://cowtransfer.com/core/api/transfer/share/folders?transferGuid=${transferGuid}&folderId=${folderId}&page=${page}&size=${size}`,
						{
							headers: {
								Accept: "application/json",
								"User-Agent": utils.getRandomPCUA(),
								Referer: "https://cowtransfer.com/",
							},
						}
					);
					log.success(getResp);
					if (!getResp.status) {
						return;
					}
					let data = utils.toJSON(getResp.data.responseText);
					if (data.code !== OK_CODE) {
						Qmsg.error(data["message"]);
						return;
					}
					let folders = data["data"]["folders"];
					if (!Array.isArray(folders)) {
						Qmsg.error("data.folders不是数组");
						return;
					}
					return folders;
				};
				/**
				 * 获取文件信息
				 * @param {string} transferGuid
				 * @param {number} folderId
				 * @param {number} page
				 * @param {number} size
				 * @param {boolean} subContent
				 * @returns {Promise<?object[]>}
				 */
				this.getShareFiles = async function (
					transferGuid,
					folderId = "",
					page = 0,
					size = 20,
					subContent = false
				) {
					let getResp = await httpx.get(
						`https://cowtransfer.com/core/api/transfer/share/files?transferGuid=${transferGuid}&folderId=${folderId}&page=${page}&size=${size}&subContent=${subContent}`,
						{
							headers: {
								Accept: "application/json",
								"User-Agent": utils.getRandomPCUA(),
								Referer: "https://cowtransfer.com/",
							},
						}
					);
					log.success(getResp);
					if (!getResp.status) {
						return;
					}
					let data = utils.toJSON(getResp.data.responseText);
					if (data.code !== OK_CODE) {
						Qmsg.error(data["message"]);
						return;
					}
					let files = data["data"]["files"];
					if (!Array.isArray(files)) {
						Qmsg.error("data.files不是数组");
						return;
					}
					return files;
				};
				/**
				 * 获取分享信息
				 * @param {string} shareCode
				 * @returns {?{
				 * code: string,
				 * message: string,
				 * data: {zipDownload: boolean,
				 * guid:string,
				 * fileSize: string,
				 * fileName: string,
				 * fileUploadTime: number,
				 * fileLatestTime: number,
				 * } | {
				 * zipDownload: boolean,
				 * guid:string,
				 * id: string,
				 * fileSize: string,
				 * fileType: string,
				 * fileName: string,
				 * fileUploadTime: number,
				 * fileLatestTime: number,
				 * }[]}
				 */
				this.getShareByUniqueUrl = async function (shareCode) {
					let url = `https://cowtransfer.com/core/api/transfer/share?uniqueUrl=${shareCode}`;
					let getResp = await httpx.get({
						url: url,
						headers: {
							"User-Agent": utils.getRandomPCUA(),
							Referer: "https://cowtransfer.com/s/" + shareCode,
						},
					});
					log.info(getResp);
					if (!getResp.status) {
						return;
					}
					let respData = getResp.data;
					let resultJSON = utils.toJSON(respData.responseText);
					log.info(["转换的JSON", resultJSON]);
					return resultJSON;
				};
				/**
				 * 获取下载链接
				 * @param {string} shareCode
				 * @param {string} guid
				 * @param {string} id
				 * @returns {?string}
				 */
				this.getDownloadUrl = async function (shareCode, guid = "", id = "") {
					let url = `https://cowtransfer.com/core/api/transfer/share/download?transferGuid=${guid}&fileId=${id}`;
					let getResp = await httpx.get({
						url: url,
						headers: {
							"User-Agent": utils.getRandomPCUA(),
							Referer: "https://cowtransfer.com/s/" + shareCode,
						},
					});
					log.info(getResp);
					if (!getResp.status) {
						return;
					}
					let respData = getResp.data;
					let resultJSON = utils.toJSON(respData.responseText);
					log.info(["转换的JSON", resultJSON]);
					if (resultJSON["code"] === OK_CODE) {
						return resultJSON["data"]["downloadUrl"];
					} else {
						Qmsg.error(`奶牛快传-获取直链：${resultJSON["message"]}`);
						return;
					}
				};
				/**
				 * 获取zip文件的下载链接
				 * @param {string} shareCode
				 * @param {string} guid
				 * @param {string} title 标题
				 * @returns {?string}
				 */
				this.getZipFileDownloadUrl = async function (
					shareCode,
					guid = "",
					title = ""
				) {
					let url = `https://cowtransfer.com/core/api/transfer/share/download?transferGuid=${guid}&title=${title}`;
					let getResp = await httpx.get({
						url: url,
						headers: {
							"User-Agent": utils.getRandomPCUA(),
							Referer: "https://cowtransfer.com/s/" + shareCode,
						},
					});
					log.info(getResp);
					if (!getResp.status) {
						return;
					}
					let respData = getResp.data;
					let resultJSON = utils.toJSON(respData.responseText);
					log.info(["转换的JSON", resultJSON]);
					if (resultJSON["code"] === OK_CODE) {
						return resultJSON["data"]["downloadUrl"];
					} else {
						Qmsg.error(`奶牛快传-获取直链：${resultJSON["message"]}`);
						return;
					}
				};
				/**
				 * 下载文件
				 * @param {string} fileName 文件名
				 * @param {string} fileDownloadUrl 下载地址
				 */
				this.downloadFile = async function (fileName, fileDownloadUrl) {
					log.info(["下载文件：", fileName, fileDownloadUrl]);
					Qmsg.info(`调用【GM_download】下载：${fileName}`);
					if (typeof GM_download === "undefined") {
						Qmsg.error("当前脚本环境缺失API 【GM_download】");
						return;
					}
					let abortDownload = void 0;
					let downloadingQmsg = Qmsg.loading("下载中...", {
						showClose: true,
						onClose() {
							if (typeof abortDownload === "function") {
								abortDownload();
							}
						},
					});
					let isDownloadEnd = false;
					let GM_download_Result = GM_download({
						url: fileDownloadUrl,
						name: fileName,
						headers: {
							Referer: "https://cowtransfer.com/s/" + that.shareCode,
						},
						onload() {
							downloadingQmsg.close();
							Qmsg.success(`下载 ${fileName} 已完成`);
						},
						onprogress(details) {
							if (
								typeof details === "object" &&
								"loaded" in details &&
								"total" in details &&
								!isDownloadEnd
							) {
								let progressNum = details.loaded / details.total;
								let formatProgressNum = (progressNum * 100).toFixed(2);
								downloadingQmsg.setText(`下载中...${formatProgressNum}%`);
								if (details.loaded === details.total) {
									isDownloadEnd = true;
								}
							}
						},
						onerror(error) {
							downloadingQmsg.close();
							log.error(["下载失败error👉", error]);
							if (typeof error === "object" && error["error"]) {
								Qmsg.error(
									`下载 ${fileName} 失败或已取消 原因：${error["error"]}`,
									{
										timeout: 6000,
									}
								);
							} else {
								Qmsg.error(`下载 ${fileName} 失败或已取消`);
							}
						},
						ontimeout() {
							downloadingQmsg.close();
							Qmsg.error(`下载 ${fileName} 请求超时`);
						},
					});
					if (
						typeof GM_download_Result === "object" &&
						"abort" in GM_download_Result
					) {
						abortDownload = GM_download_Result["abort"];
					}
				};
				return this;
			},
			/**
			 * UC网盘
			 * @constructor
			 * @returns {object}
			 */
			uc: function () {
				let that = this;
				/**
				 * 所在规则的下标
				 */
				this.netDiskIndex = 0;
				/**
				 * 分享码
				 */
				this.shareCode = "";
				/**
				 * 提取码
				 */
				this.accessCode = "";
				/**
				 * 入口
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode
				 * @param {string} accessCode
				 * @returns
				 */
				this.init = async function (netDiskIndex, shareCode, accessCode) {
					log.info([netDiskIndex, shareCode, accessCode]);
					that.netDiskIndex = netDiskIndex;
					that.shareCode = shareCode;
					that.accessCode = accessCode;
					Qmsg.info("检查是否已登录UC网盘");
					let loginStatus = await that.isLogin();
					if (!Boolean(loginStatus)) {
						that.gotoLogin(
							"检测到尚未登录UC网盘，是否前去登录？<br />&nbsp;&nbsp;&nbsp;&nbsp;(注意,需要当前浏览器的UA切换成PC才有登录选项)"
						);
						return;
					}
					let stoken = await that.getStoken(that.shareCode, that.accessCode);
					if (!stoken) {
						return;
					}
					let detail = await that.getDetail(
						that.shareCode,
						that.accessCode,
						stoken
					);
					if (!detail) {
						Qmsg.error("UC网盘：获取detail失败");
						return;
					}
					if (
						detail.length === 1 &&
						detail[0].dir == false &&
						detail[0].file_type === 1
					) {
						let oneFileDetail = detail[0];
						let oneFileDownloadDetail = await that.getDownload(
							that.shareCode,
							stoken,
							oneFileDetail.fid,
							oneFileDetail.share_fid_token
						);
						if (!oneFileDownloadDetail) {
							return;
						}
						if (!oneFileDownloadDetail[0].download_url) {
							Qmsg.error("获取download_url失败");
							return;
						}
						NetDiskUI.staticView.oneFile({
							title: "UC网盘单文件直链",
							fileName: oneFileDownloadDetail[0].file_name,
							fileSize: utils.formatByteToSize(oneFileDownloadDetail[0].size),
							downloadUrl: oneFileDownloadDetail[0].download_url,
							fileUploadTime: utils.formatTime(
								oneFileDownloadDetail[0].created_at
							),
							fileLatestTime: utils.formatTime(
								oneFileDownloadDetail[0].last_update_at
							),
							clickCallBack() {
								that.downloadFile(
									oneFileDownloadDetail[0].file_name,
									oneFileDownloadDetail[0].download_url
								);
							},
						});
					} else {
						Qmsg.info("正在递归文件");
						let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
						let folderInfoList = that.getFolderInfo(detail, stoken, 0);
						QmsgLoading.close();
						log.info("递归完毕");
						NetDiskUI.staticView.moreFile("UC网盘文件解析", folderInfoList);
						return;
					}
				};
				/**
				 * 判断是否已登录UC网盘
				 * @returns {Promise<?(string|boolean)>}
				 */
				this.isLogin = async function () {
					let getResp = await httpx.get("https://drive.uc.cn/", {
						headers: {
							"User-Agent": utils.getRandomPCUA(),
						},
					});
					log.success(["判断是否已登录UC网盘", getResp]);
					if (!getResp.status) {
						return;
					}
					if (getResp.data.finalUrl === "https://drive.uc.cn/list") {
						return "已登录";
					} else {
						return false;
					}
				};
				/**
				 * 下载文件
				 * @param {string} fileName 文件名
				 * @param {string} downloadUrl 下载链接
				 * @return { {
				 * abort: Function
				 * } }
				 */
				this.downloadFile = function (fileName, downloadUrl) {
					log.info([`调用【GM_download】下载：`, arguments]);
					Qmsg.info(`调用【GM_download】下载：${fileName}`);
					if (typeof GM_download === "undefined") {
						Qmsg.error("当前脚本环境缺失API 【GM_download】");
						return;
					}
					let downloadingQmsg = Qmsg.loading("下载中...");
					let isDownloadEnd = false;
					return GM_download({
						url: downloadUrl,
						name: fileName,
						headers: {
							Referer: "https://drive.uc.cn/",
						},
						onload() {
							downloadingQmsg.close();
							Qmsg.success(`下载 ${fileName} 已完成`);
						},
						onprogress(details) {
							if (
								typeof details === "object" &&
								"loaded" in details &&
								"total" in details &&
								!isDownloadEnd
							) {
								let progressNum = details.loaded / details.total;
								let formatProgressNum = (progressNum * 100).toFixed(2);
								downloadingQmsg.setText(`下载中...${formatProgressNum}%`);
								if (details.loaded === details.total) {
									isDownloadEnd = true;
								}
							}
						},
						onerror(error) {
							downloadingQmsg.close();
							log.error(["下载失败error👉", error]);
							if (typeof error === "object" && error["error"]) {
								Qmsg.error(
									`下载 ${fileName} 失败或已取消 原因：${error["error"]}`,
									{
										timeout: 6000,
									}
								);
							} else {
								Qmsg.error(`下载 ${fileName} 失败或已取消`);
							}
						},
						ontimeout() {
							downloadingQmsg.close();
							Qmsg.error(`下载 ${fileName} 请求超时`);
						},
					});
				};
				/**
				 * 前往登录
				 * @param {string} text 弹窗的显示的内容
				 */
				this.gotoLogin = function (text = "") {
					NetDiskPops.confirm(
						{
							title: {
								position: "center",
								text: "UC网盘",
							},
							content: {
								text: text,
								html: false,
							},
							btn: {
								reverse: true,
								position: "end",
								ok: {
									text: "前往",
									enable: true,
									callback() {
										window.open("https://drive.uc.cn", "_blank");
									},
								},
							},
						},
						NetDiskUI.popsStyle.tianYiYunLoginTip
					);
				};
				/**
				 * 获取stoken
				 * @param {string} pwd_id 分享码
				 * @param {string} passcode 访问码
				 * @returns {Promise<?string>}
				 */
				this.getStoken = async function (pwd_id, passcode) {
					let postResp = await httpx.post(
						"https://pc-api.uc.cn/1/clouddrive/share/sharepage/token?entry=ft&fr=pc&pr=UCBrowser",
						{
							data: JSON.stringify({
								share_for_transfer: true,
								passcode: passcode,
								pwd_id: pwd_id,
							}),
							headers: {
								Accept: "application/json, text/plain, */*",
								"Content-Type": "application/json;charset=UTF-8",
								"User-Agent": utils.getRandomPCUA(),
								Origin: "https://drive.uc.cn",
								Referer: "https://drive.uc.cn/",
							},
							onerror() {},
						}
					);
					if (!postResp.status) {
						let errorData = utils.toJSON(postResp.data.responseText);
						log.error(["获取stoken失败JSON信息", errorData]);
						if ("message" in errorData) {
							Qmsg.error(errorData["message"]);
						} else {
							Qmsg.error("请求异常，获取stoken失败");
						}
						return;
					}
					let data = utils.toJSON(postResp.data.responseText);
					log.info(["获取stoken：", data]);
					if (data["code"] !== 0) {
						log.error(["获取stoken失败", data]);
						Qmsg.error("获取stoken失败");
						return;
					}
					return data["data"]["stoken"];
				};

				/**
				 * 获取stoken
				 * @param {string} pwd_id 分享码
				 * @param {string} passcode 访问码
				 * @param {string} stoken 获取的stoken
				 * @param {string} [pdir_fid=0] 父fid，默认为0，如果为文件夹，那么它的fid就是这个值
				 * @param {number} [force=0]
				 * @param {number} [_page=1]
				 * @param {number} [_size=50]
				 * @param {number} [_fetch_banner=0]
				 * @param {number} [_fetch_share=0]
				 * @param {number} [_fetch_total=1]
				 * @returns {Promise<?{
				 * backup_sign: number,
				 * backup_source: boolean,
				 * ban: boolean,
				 * category: number,
				 * created_at: number,
				 * creator_ucid_or_default: string,
				 * cur_version_or_default: number,
				 * dir: boolean,
				 * duration: number,
				 * event_extra: {
				 *    recent_created_at: number
				 * },
				 * extra: string,
				 * fid: string,
				 * file: boolean,
				 * file_name: string,
				 * file_name_hl_end: number,
				 * file_name_hl_start: number,
				 * file_source: string,
				 * file_struct: {
				 *    fir_source: string,
				 *    platform_source: string,
				 *    sec_source: string,
				 *    thi_source: string,
				 *    upload_dm: string,
				 *    upload_mi: string,
				 * },
				 * file_type: number,
				 * format_type: string,
				 * include_items:  number,
				 * l_created_at:  number,
				 * l_updated_at:  number,
				 * last_update_at:  number,
				 * like:  number,
				 * name_space:  number,
				 * offline_source: boolean,
				 * operated_at:  number,
				 * owner_drive_type_or_default:  number,
				 * owner_ucid: string,
				 * pdir_fid: string,
				 * raw_name_space:  number,
				 * risk_type:  number,
				 * save_as_source: boolean,
				 * share_fid_token: string,
				 * size:  number,
				 * status:  number,
				 * tags: string,
				 * updated_at:  number,
				 * _extra: {},
				 * }[]>}
				 */
				this.getDetail = async function (
					pwd_id,
					passcode,
					stoken,
					pdir_fid = 0,
					force = 0,
					_page = 1,
					_size = 50,
					_fetch_banner = 0,
					_fetch_share = 0,
					_fetch_total = 1
				) {
					let getResp = await httpx.get(
						`https://pc-api.uc.cn/1/clouddrive/transfer_share/detail?pr=UCBrowser&fr=h5&pwd_id=${pwd_id}&__t=${new Date().getTime()}&passcode=${passcode}&stoken=${encodeURIComponent(
							stoken
						)}&pdir_fid=${pdir_fid}&force=${force}&_page=${_page}&_size=${_size}&_fetch_banner=${_fetch_banner}&_fetch_share=${_fetch_share}&_fetch_total=${_fetch_total}&_sort=${encodeURIComponent(
							"file_type:asc,file_name:asc"
						)}`,
						{
							headers: {
								Accept: "application/json, text/plain, */*",
								"User-Agent": utils.getRandomPCUA(),
								Origin: "https://drive.uc.cn",
								Referer: "https://drive.uc.cn/",
							},
						}
					);
					if (!getResp.status) {
						return;
					}
					let data = utils.toJSON(getResp.data.responseText);
					log.info(["获取detail：", data]);
					if (data["code"] !== 0) {
						log.error(["获取detail失败", data]);
						Qmsg.error("获取detail失败");
						return;
					}
					let metadata = data["metadata"];
					if (
						metadata &&
						metadata["_total"] &&
						metadata["_total"] > metadata["_size"]
					) {
						// 文件的总数量超过默认的值
						return await this.getDetail(
							pwd_id,
							passcode,
							stoken,
							pdir_fid,
							force,
							_page,
							metadata["_total"],
							_fetch_banner,
							_fetch_share,
							_fetch_total
						);
					}
					return data["data"]["list"];
				};

				/**
				 * 获取下载信息
				 * @param {string} pwd_id 分享码
				 * @param {string} stoken 获取的stoken
				 * @param {string} fids 通过获取到的detail获取到的fid
				 * @param {string} share_fid_token 通过获取到的detail获取到的share_fid_token
				 * @returns {Promise< ?{
				 * backup_sign: number,
				 * backup_source: boolean,
				 * ban: boolean,
				 * big_thumbnail: string,
				 * category: number,
				 * created_at: number,
				 * creator_ucid_or_default: string,
				 * cur_version_or_default: number,
				 * dir: boolean,
				 * download_url: string,
				 * duration: number,
				 * event_extra: {
				 *    recent_created_at: number
				 * },
				 * extra: string,
				 * fid: string,
				 * file: boolean,
				 * file_name: string,
				 * file_name_hl_end: number,
				 * file_name_hl_start: number,
				 * file_source: string,
				 * file_type: number,
				 * format_type: string,
				 * l_created_at: number,
				 * l_updated_at: number,
				 * last_update_at: number,
				 * like: number,
				 * md5: string,
				 * name_space: number,
				 * obj_category: string,
				 * offline_source: boolean,
				 * operated_at: number,
				 * owner_drive_type_or_default: number,
				 * owner_ucid: string,
				 * pdir_fid: string,
				 * preview_url: string,
				 * range_size: number,
				 * raw_name_space: number,
				 * risk_type: number,
				 * save_as_source: boolean,
				 * share_fid_token: string,
				 * size: number,
				 * status: number,
				 * thumbnail: string,
				 * updated_at: number,
				 * video_height: number,
				 * video_max_resolution: string,
				 * video_width: number,
				 * _extra: {},
				 * } []>}
				 */
				this.getDownload = async function (
					pwd_id,
					stoken,
					fid,
					share_fid_token
				) {
					let postResp = await httpx.post(
						"https://pc-api.uc.cn/1/clouddrive/file/download?entry=ft&fr=pc&pr=UCBrowser",
						{
							data: JSON.stringify({
								fids: [fid],
								pwd_id: pwd_id,
								stoken: stoken,
								fids_token: [share_fid_token],
							}),
							headers: {
								Accept: "application/json, text/plain, */*",
								"Content-Type": "application/json;charset=UTF-8",
								"User-Agent": utils.getRandomPCUA(),
								Origin: "https://drive.uc.cn",
								Referer: "https://drive.uc.cn/",
							},
						}
					);
					if (!postResp.status) {
						return;
					}
					let data = utils.toJSON(postResp.data.responseText);
					log.info(["获取download：", data]);
					if (data["code"] !== 0) {
						log.error(["获取download失败", data]);
						Qmsg.error("获取download失败");
						return;
					}
					if (data["data"].length === 0) {
						log.error(["获取download detail失败", data]);
						Qmsg.error("获取download detail失败失败");
						return;
					}
					return data["data"];
				};

				/**
				 * 获取文件夹信息
				 * @param {{
				 * backup_sign: number,
				 * backup_source: boolean,
				 * ban: boolean,
				 * category: number,
				 * created_at: number,
				 * creator_ucid_or_default: string,
				 * cur_version_or_default: number,
				 * dir: boolean,
				 * duration: number,
				 * event_extra: {
				 *    recent_created_at: number
				 * },
				 * extra: string,
				 * fid: string,
				 * file: boolean,
				 * file_name: string,
				 * file_name_hl_end: number,
				 * file_name_hl_start: number,
				 * file_source: string,
				 * file_struct: {
				 *    fir_source: string,
				 *    platform_source: string,
				 *    sec_source: string,
				 *    thi_source: string,
				 *    upload_dm: string,
				 *    upload_mi: string,
				 * },
				 * file_type: number,
				 * format_type: string,
				 * include_items:  number,
				 * l_created_at:  number,
				 * l_updated_at:  number,
				 * last_update_at:  number,
				 * like:  number,
				 * name_space:  number,
				 * offline_source: boolean,
				 * operated_at:  number,
				 * owner_drive_type_or_default:  number,
				 * owner_ucid: string,
				 * pdir_fid: string,
				 * raw_name_space:  number,
				 * risk_type:  number,
				 * save_as_source: boolean,
				 * share_fid_token: string,
				 * size:  number,
				 * status:  number,
				 * tags: string,
				 * updated_at:  number,
				 * _extra: {},
				 * }[]} infoList
				 * @return {Promise<{
				 * fileName: string,
				 * fileSize: string|number,
				 * fileType: ?string,
				 * createTime: ?string,
				 * latestTime: ?string,
				 * isFolder: boolean,
				 * index: ?number,
				 * clickCallBack: ?(event:Event,_config_: object)=>{}
				 * }[]>}
				 */
				this.getFolderInfo = function (infoList, stoken, index = 0) {
					let folderInfoList = [];
					let tempFolderInfoList = [];
					/**
					 * @type {PopsFolderDataConfig[]}
					 */
					let tempFolderFileInfoList = [];
					infoList.forEach((item) => {
						if (item.dir == false && item.file_type === 1) {
							/* 文件 */
							tempFolderFileInfoList.push({
								fileName: item.file_name,
								fileSize: item.size,
								fileType: "",
								createTime: item.created_at,
								latestTime: item.updated_at,
								isFolder: false,
								index: index,
								async clickEvent() {
									let fileDownloadUrl = await that.getDownload(
										that.shareCode,
										stoken,
										item.fid,
										item.share_fid_token
									);
									if (fileDownloadUrl) {
										if (fileDownloadUrl.length) {
											fileDownloadUrl = fileDownloadUrl[0].download_url;
										} else {
											fileDownloadUrl = "";
										}
									} else {
										fileDownloadUrl = "";
									}
									if (item.ban) {
										Qmsg.error("文件已被禁止下载");
									} else {
										let schemeDownloadUrl = fileDownloadUrl;
										if (NetDiskFilterScheme.isForwardDownloadLink("uc")) {
											schemeDownloadUrl =
												NetDiskFilterScheme.parseDataToSchemeUri(
													"uc",
													schemeDownloadUrl
												);
										}
										/* 如果已被scheme过滤，那么不进行GM_download下载 */
										if (schemeDownloadUrl === fileDownloadUrl) {
											that.downloadFile(item.file_name, fileDownloadUrl);
										} else {
											return {
												autoDownload: true,
												mode: "aBlank",
												url: fileDownloadUrl,
											};
										}
									}
								},
							});
						} else {
							/* 文件夹 */
							tempFolderInfoList.push({
								fileName: item.file_name,
								fileSize: item.size,
								fileType: "",
								createTime: item.created_at,
								latestTime: item.updated_at,
								isFolder: true,
								index: index,
								async clickEvent() {
									if (item.include_items === 0) {
										/* 里面没有文件 */
										log.success("里面没有文件");
										return [];
									}
									let newDetail = await that.getDetail(
										that.shareCode,
										that.accessCode,
										stoken,
										item.fid
									);
									if (newDetail) {
										return that.getFolderInfo(newDetail, stoken, index + 1);
									} else {
										return [];
									}
								},
							});
						}
					});

					tempFolderInfoList.sort((a, b) =>
						a["fileName"].localeCompare(b["fileName"])
					);
					tempFolderFileInfoList.sort((a, b) =>
						a["fileName"].localeCompare(b["fileName"])
					);
					folderInfoList = folderInfoList.concat(tempFolderInfoList);
					folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
					log.info(["getFilesInfoByRec", folderInfoList]);
					return folderInfoList;
				};
				return this;
			},
			/**
			 * 阿里云盘
			 * @constructor
			 * @returns {object}
			 */
			aliyun: function () {
				let that = this;
				/**
				 * 所在规则的下标
				 */
				this.netDiskIndex = 0;
				/**
				 * 分享码
				 */
				this.shareCode = "";
				/**
				 * 提取码
				 */
				this.accessCode = "";
				this.X_Share_Token_Data = {
					expire_time: "2000-01-01T00:00:00.000Z",
					expires_in: 7200,
					share_token: "",
				};
				/**
				 * header请求头 X-Device-Id
				 */
				this.X_Device_Id = null;
				/**
				 * header请求头 X-Canary
				 */
				this.X_Canary = "client=web,app=share,version=v2.3.1";
				/**
				 * 入口
				 * @param {number} netDiskIndex 网盘名称索引下标
				 * @param {string} shareCode
				 * @param {string} accessCode
				 * @returns
				 */
				this.init = async function (netDiskIndex, shareCode, accessCode) {
					log.info([netDiskIndex, shareCode, accessCode]);
					that.netDiskIndex = netDiskIndex;
					that.shareCode = shareCode;
					that.accessCode = accessCode;
					that.X_Device_Id = that.get_X_Device_Id();
					log.info("生成X_Device_Id：" + that.X_Device_Id);
					if (
						globalThis.location.hostname !== "www.aliyundrive.com" &&
						globalThis.location.hostname !== "www.alipan.com"
					) {
						let url = NetDiskParse.getBlankUrl(
							"aliyun",
							that.netDiskIndex,
							that.shareCode,
							that.accessCode
						);
						let $QmsgErrorTip = Qmsg.error(
							`请在阿里云盘页面解析，<a href="${url}">点我前往</a>`,
							{
								html: true,
								timeout: 10000,
							}
						);
						DOMUtils.on(
							$QmsgErrorTip.$Qmsg.querySelector("a[href]"),
							"click",
							void 0,
							(event) => {
								utils.preventEvent(event);
								NetDiskParse.blank(
									url,
									"aliyun",
									that.netDiskIndex,
									that.shareCode,
									that.accessCode
								);
							}
						);
						return;
					}
					let detail = await this.list_by_share(shareCode, "root");
					if (!detail) {
						return;
					}
					Qmsg.info("正在解析链接");
					let QmsgLoading = Qmsg.loading(`正在解析多文件中，请稍后...`);
					let folderInfoList = that.getFolderInfo(detail, 0);
					QmsgLoading.close();
					log.info("解析完毕");
					NetDiskUI.staticView.moreFile("阿里云盘文件解析", folderInfoList);
				};
				/**
				 * 弹窗使用-获取文件夹信息
				 * @param {{
				 * category?: string,
				 * domain_id?: string,
				 * file_extension?: string,
				 * mime_extension?: string,
				 * mime_type?: string,
				 * punish_flag: number,
				 * created_at: string,
				 * domain_id: string,
				 * drive_id: string,
				 * file_id: string,
				 * name: string,
				 * parent_file_id:string,
				 * share_id: string,
				 * type: string,
				 * updated_at: string,
				 * }[]} infoList
				 * @return {Promise<{
				 * fileName: string,
				 * fileSize: string|number,
				 * fileType: ?string,
				 * createTime: ?string,
				 * latestTime: ?string,
				 * isFolder: boolean,
				 * index: ?number,
				 * clickCallBack: ?(event:Event,_config_: object)=>{}
				 * }[]>}
				 */
				this.getFolderInfo = function (infoList, index = 0) {
					let folderInfoList = [];
					let tempFolderInfoList = [];
					/**
					 * @type {PopsFolderDataConfig[]}
					 */
					let tempFolderFileInfoList = [];
					infoList.forEach((item) => {
						if (item.type !== "folder") {
							/* 文件 */
							tempFolderFileInfoList.push({
								fileName: item.name,
								fileSize: item.size,
								fileType: item.file_extension,
								createTime: new Date(item.created_at).getTime(),
								latestTime: new Date(item.updated_at).getTime(),
								isFolder: false,
								index: index,
								async clickEvent() {
									let fileDownloadUrl = await that.get_share_link_download_url(
										item.share_id,
										item.file_id
									);
									if (!fileDownloadUrl) {
										return;
									}
									let schemeDownloadUrl = fileDownloadUrl;
									if (NetDiskFilterScheme.isForwardDownloadLink("aliyun")) {
										schemeDownloadUrl =
											NetDiskFilterScheme.parseDataToSchemeUri(
												"aliyun",
												schemeDownloadUrl
											);
									}
									return {
										autoDownload: true,
										mode: "aBlank",
										url: schemeDownloadUrl,
									};
								},
							});
						} else {
							/* 文件夹 */
							tempFolderInfoList.push({
								fileName: item.name,
								fileSize: 0,
								fileType: "",
								createTime: item.created_at,
								latestTime: item.updated_at,
								isFolder: true,
								index: index,
								async clickEvent() {
									let newDetail = await that.list_by_share(
										item.share_id,
										item.file_id
									);
									if (newDetail) {
										return that.getFolderInfo(newDetail, index + 1);
									} else {
										return [];
									}
								},
							});
						}
					});

					tempFolderInfoList.sort((a, b) =>
						a["fileName"].localeCompare(b["fileName"])
					);
					tempFolderFileInfoList.sort((a, b) =>
						a["fileName"].localeCompare(b["fileName"])
					);
					folderInfoList = folderInfoList.concat(tempFolderInfoList);
					folderInfoList = folderInfoList.concat(tempFolderFileInfoList);
					log.info(["getFilesInfoByRec", folderInfoList]);
					return folderInfoList;
				};
				/**
				 * 列出文件列表
				 * @param {string} share_id
				 * @param {string} parent_file_id 父项，根是root
				 * @param {"name"} order_by 根据xxx排序
				 * @param {"ASC"|"DESC"} order_direction 排序规则(升序/降序)
				 * @returns {Promise<{
				 * category?: string,
				 * domain_id?: string,
				 * file_extension?: string,
				 * mime_extension?: string,
				 * mime_type?: string,
				 * punish_flag: number,
				 * created_at: string,
				 * domain_id: string,
				 * drive_id: string,
				 * file_id: string,
				 * name: string,
				 * parent_file_id:string,
				 * share_id: string,
				 * type: string,
				 * updated_at: string,
				 * }[]>}
				 */
				this.list_by_share = async function (
					share_id,
					parent_file_id,
					order_by = "name",
					order_direction = "DESC"
				) {
					let postResp = await httpx.post(
						"https://api.aliyundrive.com/adrive/v2/file/list_by_share",
						{
							data: JSON.stringify({
								share_id: share_id,
								parent_file_id: parent_file_id,
								limit: 20,
								image_thumbnail_process: "image/resize,w_256/format,jpeg",
								image_url_process:
									"image/resize,w_1920/format,jpeg/interlace,1",
								video_thumbnail_process:
									"video/snapshot,t_1000,f_jpg,ar_auto,w_256",
								order_by: order_by,
								order_direction: order_direction,
							}),
							headers: {
								Accept: "application/json, text/plain, */*",
								"Content-Type": "application/json",
								Origin: "https://www.aliyundrive.com",
								Referer: "https://www.aliyundrive.com/",
								"X-Canary": that.X_Canary,
								"X-Device-Id": that.X_Device_Id,
								"X-Share-Token": await that.get_X_Share_Token(
									that.shareCode,
									that.accessCode
								),
								"User-Agent": utils.getRandomPCUA(),
							},
							onerror() {},
						}
					);
					if (!postResp.status) {
						that.handle_request_error(postResp);
						return;
					}
					let data = utils.toJSON(postResp.data.responseText);
					log.info(["列出文件列表：", data]);
					return data["items"];
				};
				/**
				 * 获取文件的下载链接
				 * @returns {Promise<string>}
				 */
				this.get_share_link_download_url = async function (share_id, file_id) {
					let postResp = await httpx.post(
						"https://api.aliyundrive.com/v2/file/get_share_link_download_url",
						{
							data: JSON.stringify({
								expire_sec: 600,
								file_id: file_id,
								share_id: share_id,
							}),
							headers: {
								Accept: "application/json, text/plain, */*",
								"Content-Type": "application/json",
								Origin: "https://www.aliyundrive.com",
								Referer: "https://www.aliyundrive.com/",
								"Content-Type": "application/json;charset=UTF-8",
								Authorization: "Bearer " + that.getAuthorization(),
								"X-Share-Token": await that.get_X_Share_Token(
									that.shareCode,
									that.accessCode
								),
								"User-Agent": utils.getRandomPCUA(),
							},
							onerror() {},
						}
					);
					if (!postResp.status) {
						that.handle_request_error(postResp);
						return;
					}
					let data = utils.toJSON(postResp.data.responseText);
					log.info(["获取文件的下载链接：", data]);
					return data["download_url"];
				};
				/**
				 * 处理请求的错误
				 * @param {HttpxAsyncResult} postResp
				 */
				this.handle_request_error = function (postResp) {
					log.error(postResp);
					let errData = utils.toJSON(postResp.data.responseText);
					Qmsg.error(errData["message"]);
				};
				/**
				 * 获取用户鉴权值
				 * 来源：localStorage => token.access_token
				 */
				this.getAuthorization = function () {
					let token = unsafeWindow.localStorage.getItem("token");
					if (utils.isNotNull(token)) {
						token = utils.toJSON(token);
						let access_token = token["access_token"];
						log.success(["获取阿里云盘的access_token：", access_token]);
						return access_token;
					} else {
						log.error("获取access_token失败，请先登录账号！");
						Qmsg.error("获取access_token失败，请先登录账号！");
					}
				};
				/**
				 * 获取header请求头 X-Device-Id
				 */
				this.get_X_Device_Id = function () {
					for (
						var alipan_device_id_pattern =
								/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
							alipan_s = [],
							alipan_l = 0;
						alipan_l < 256;
						++alipan_l
					)
						alipan_s.push((alipan_l + 256).toString(16).substr(1));
					function alipan_o() {
						return crypto.getRandomValues(new Uint8Array(16));
					}
					var alipan_c = function (args_e) {
							var second_arg =
									arguments.length > 1 && void 0 !== arguments[1]
										? arguments[1]
										: 0,
								devices_id_string = (
									alipan_s[args_e[second_arg + 0]] +
									alipan_s[args_e[second_arg + 1]] +
									alipan_s[args_e[second_arg + 2]] +
									alipan_s[args_e[second_arg + 3]] +
									"-" +
									alipan_s[args_e[second_arg + 4]] +
									alipan_s[args_e[second_arg + 5]] +
									"-" +
									alipan_s[args_e[second_arg + 6]] +
									alipan_s[args_e[second_arg + 7]] +
									"-" +
									alipan_s[args_e[second_arg + 8]] +
									alipan_s[args_e[second_arg + 9]] +
									"-" +
									alipan_s[args_e[second_arg + 10]] +
									alipan_s[args_e[second_arg + 11]] +
									alipan_s[args_e[second_arg + 12]] +
									alipan_s[args_e[second_arg + 13]] +
									alipan_s[args_e[second_arg + 14]] +
									alipan_s[args_e[second_arg + 15]]
								).toLowerCase();
							if (
								!(function (e) {
									return (
										"string" == typeof e && alipan_device_id_pattern.test(e)
									);
								})(devices_id_string)
							)
								throw TypeError("Stringified UUID is invalid");
							return devices_id_string;
						},
						alipan_u = function (args_e, args_t, args_n) {
							var randomValue =
								(args_e = args_e || {}).random || (args_e.rng || alipan_o)();
							if (
								((randomValue[6] = (15 & randomValue[6]) | 64),
								(randomValue[8] = (63 & randomValue[8]) | 128),
								args_t)
							) {
								args_n = args_n || 0;
								for (var i = 0; i < 16; ++i)
									args_t[args_n + i] = randomValue[i];
								return args_t;
							}
							return alipan_c(randomValue);
						};
					return alipan_u();
				};
				/**
				 * 获取header请求头 X-Share-Token
				 * 来源：localStorage => shareToken.share_token
				 */
				this.get_X_Share_Token = async function (share_id, share_pwd) {
					if (new Date() < new Date(that.X_Share_Token_Data.expire_time)) {
						return that.X_Share_Token_Data.share_token;
					}
					let postResp = await httpx.post(
						"https://api.aliyundrive.com/v2/share_link/get_share_token",
						{
							data: JSON.stringify({
								share_id: share_id,
								share_pwd: share_pwd,
							}),
							headers: {
								Accept: "application/json, text/plain, */*",
								"Content-Type": "application/json",
								Origin: "https://www.aliyundrive.com",
								Referer: "https://www.aliyundrive.com/",
								"X-Canary": that.X_Canary,
								"X-Device-Id": that.X_Device_Id,
								"User-Agent": utils.getRandomPCUA(),
							},
							onerror() {},
						}
					);
					if (!postResp.status) {
						that.handle_request_error(postResp);
						return;
					}
					let data = utils.toJSON(postResp.data.responseText);
					that.X_Share_Token_Data = data;
					log.info(["获取share_token：", that.X_Share_Token_Data]);
					return that.X_Share_Token_Data["share_token"];
				};
				return this;
			},
		},
		/**
		 * 网盘链接解析
		 * @param {string} netDiskName 网盘名称
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode
		 * @param {string} accessCode
		 */
		async parse(netDiskName, netDiskIndex, shareCode, accessCode) {
			Qmsg.info("正在获取直链");
			if (this.netDisk[netDiskName]) {
				let parseObj = new NetDiskParse.netDisk[netDiskName]();
				await parseObj.init(netDiskIndex, shareCode, accessCode);
			} else {
				log.error(`${netDiskName} 不存在解析`);
				Qmsg.error("该链接不存在解析功能");
			}
		},
		/**
		 * 复制到剪贴板
		 * @param {string} netDiskName
		 * @param {number} netDiskIndex
		 * @param {string} shareCode
		 * @param {string} accessCode
		 * @param {string} toastText 提示的文字
		 */
		copyText(
			netDiskName,
			netDiskIndex,
			shareCode,
			accessCode,
			toastText = "已复制"
		) {
			utils.setClip(
				NetDiskParse.getCopyUrlInfo(
					netDiskName,
					netDiskIndex,
					shareCode,
					accessCode
				)
			);
			Qmsg.success(toastText);
		},
		/**
		 * 新标签页打开
		 * @param {string} url 跳转的网址
		 * @param {string} netDiskName
		 * @param {number|string} netDiskIndex
		 * @param {string} shareCode
		 * @param {string} accessCode
		 */
		blank(url, netDiskName, netDiskIndex, shareCode, accessCode) {
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
				GM_getValue(`${netDiskName}-open-blank-with-copy-accesscode`)
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
		 * @param {string} netDiskName 网盘名称
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode
		 * @param {string} accessCode
		 */
		openScheme(netDiskName, netDiskIndex, shareCode, accessCode) {
			let url = NetDiskParse.getBlankUrl(
				netDiskName,
				netDiskIndex,
				shareCode,
				accessCode
			);
			url = NetDiskFilterScheme.parseDataToSchemeUri(netDiskName, url);
			window.open(url, "_blank");
		},
		/**
		 * 获取重定向后的直链
		 * @param {string} url
		 * @param {string} userAgent 用户代理字符串
		 * @returns {Promise}
		 */
		async getRedirectFinalUrl(url, userAgent) {
			if (!GM_getValue("getTheDirectLinkAfterRedirection", true)) {
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
		/**
		 * 获取用于跳转的url
		 * @param {string} netDiskName
		 * @param {number} netDiskIndex
		 * @param {?string} shareCode
		 * @param {?string} accessCode
		 * @returns {string}
		 */
		getBlankUrl(netDiskName, netDiskIndex, shareCode, accessCode) {
			/**
			 * @type {NetDiskRegularOption}
			 */
			let regularOption = NetDisk.regular[netDiskName][netDiskIndex];
			let blankUrl = regularOption.blank;
			if (shareCode) {
				blankUrl = NetDisk.replaceParam(blankUrl, {
					shareCode: shareCode,
				});
			}
			if (accessCode && accessCode !== "") {
				blankUrl = NetDisk.replaceParam(blankUrl, {
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
				);
				let replaceParamData = {};
				for (let index = 0; index < paramMatchArray.length; index++) {
					replaceParamData[`$${index}`] = paramMatchArray[index];
				}
				blankUrl = NetDisk.replaceParam(blankUrl, replaceParamData);
			}
			return blankUrl;
		},
		/**
		 * 获取用于复制到剪贴板的网盘信息
		 * @param {string} netDiskName
		 * @param {number} netDiskIndex
		 * @param {?string} shareCode
		 * @param {?string} accessCode
		 * @returns {string}
		 */
		getCopyUrlInfo(netDiskName, netDiskIndex, shareCode, accessCode) {
			/**
			 * @type {NetDiskRegularOption}
			 */
			let regularOption = NetDisk.regular[netDiskName][netDiskIndex];
			let copyUrl = regularOption["copyUrl"];
			if (shareCode) {
				copyUrl = NetDisk.replaceParam(copyUrl, {
					shareCode: shareCode,
				});
			}
			if (accessCode && accessCode !== "") {
				copyUrl = NetDisk.replaceParam(copyUrl, {
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
				);
				let replaceParamData = {};
				for (let index = 0; index < paramMatchArray.length; index++) {
					replaceParamData[`$${index}`] = paramMatchArray[index];
				}
				copyUrl = NetDisk.replaceParam(copyUrl, replaceParamData);
			}
			return copyUrl;
		},
	};

	/** 网盘-直链鉴权获取处理 */
	const NetDiskAuthorization = {
		/**
		 * 运行于ready
		 */
		init() {
			Object.keys(NetDiskAuthorization.netDisk).forEach((keyName) => {
				this.netDisk[keyName]();
			});
		},
		netDisk: {
			/**
			 * 123网盘，一般用于>100MB的文件直链获取
			 */
			_123pan() {
				if (window.location.hostname !== "www.123pan.com") {
					return;
				}
				/* 没在设置中开启直链获取就不获取鉴权信息 */
				if (!GM_getValue("_123pan-static-enable")) {
					return;
				}
				let authorToken = unsafeWindow.localStorage.getItem("authorToken");
				if (utils.isNull(authorToken)) {
					return;
				}
				/* 去除左右的引号 */
				authorToken = authorToken.replace(/^\"/, "").replace(/\"$/, "");
				log.success("获取123网盘已登录用户的authorToken值👇");
				log.success(authorToken);
				GM_setValue("_123pan_User_Authorization", authorToken);
			},
			/**
			 * 蓝奏优选
			 */
			lanzouyx() {
				/* 目前uuid可生成，userId可以通过请求获取到，暂不需要获取本地存储的 */
				return;
				if (window.location.hostname !== "www.ilanzou.com") {
					return;
				}
				/* 没在设置中开启直链获取就不获取鉴权信息 */
				if (!GM_getValue("lanzouyx-static-enable")) {
					return;
				}
				const uuid = unsafeWindow.localStorage.getItem("uuid");
				let diskVueX = unsafeWindow.localStorage.getItem("disk-vuex");
				let diskPCVueX = unsafeWindow.localStorage.getItem("disk-pc-vuex");
				if (utils.isNotNull(uuid)) {
					log.success(["获取蓝奏云优享生成的uuid：", uuid]);
					GM_setValue("lanzouyx-uuid", uuid);
				}
				if (utils.isNotNull(diskVueX)) {
					diskVueX = utils.toJSON(diskVueX);
					let userId = diskVueX?.["admin"]?.["account"]?.["info"]?.["userId"];
					if (userId != null) {
						log.success(["获取蓝奏云优享已登录用户的userId：", userId]);
						GM_setValue("lanzouyx-userId", userId);
					}
				}
				if (utils.isNotNull(diskPCVueX)) {
					diskPCVueX = utils.toJSON(diskPCVueX);
					let userId = diskVueX?.["common"]?.["accountInfo"]?.["userId"];
					if (userId != null) {
						log.success(["获取蓝奏云优享已登录用户的userId：", userId]);
						GM_setValue("lanzouyx-userId", userId);
					}
				}
			},
		},
	};

	/** 网盘-直链进行Scheme过滤 */
	const NetDiskFilterScheme = {
		protocol: "jumpwsv",
		pathname: "go",
		/**
		 * 处理链接
		 * @param {string} name 规则名
		 * @param {string} intentData 需要处理的数据
		 * @returns {string}
		 */
		parseDataToSchemeUri(name, intentData) {
			/** 是否启用 */
			let isEnable = GM_getValue(name + "-forward-scheme-enable", false);
			if (!isEnable) {
				return intentData;
			}
			/** 转发的scheme */
			let schemeUri = GM_getValue(name + "-static-scheme-uri");
			if (utils.isNull(schemeUri)) {
				schemeUri = this.getSchemeUri(this.getIDMSchemeUriOption(intentData));
			}
			if (schemeUri.startsWith(this.protocol)) {
				intentData = intentData.replace(/&/g, "{-and-}");
				intentData = intentData.replace(/#/g, "{-number-}");
			}
			schemeUri = NetDisk.replaceParam(schemeUri, {
				intentData: intentData,
			});
			return schemeUri;
		},
		isForwardDownloadLink(key) {
			return GM_getValue(`${key}-forward-download-link-enable`, false);
		},
		isForwardBlankLink(key) {
			return GM_getValue(`${key}-forward-blank-link-enable`, false);
		},
		getSchemeUri(option) {
			return `${this.protocol}://${this.pathname}?package=${option["package"]}&activity=${option["activity"]}&intentAction=${option["intentAction"]}&intentData=${option["intentData"]}&intentExtra=${option["intentExtra"]}`;
		},
		getIDMSchemeUriOption(intentData = "") {
			return {
				package: "idm.internet.download.manager.plus",
				activity: "idm.internet.download.manager.UrlHandlerDownloader",
				intentAction: "android.intent.action.VIEW",
				intentData: intentData,
				intentExtra: "",
			};
		},
	};

	/** 网盘-自动填入访问码 */
	const NetDiskAutoFillAccessCode = {
		key: "tempNetDiskInfo",
		$data: {
			/**
			 * 当前的网盘数据
			 * @type {?NetDiskAutoFillAccessCodeOption}
			 */
			netDiskInfo: null,
			/**
			 * @type {boolean} 自动输入访问码是否开启
			 */
			enable: Boolean(GM_getValue("autoFillAccessCode")),
		},
		/**
		 * 初始化
		 */
		init() {
			this.$data.netDiskInfo = this.getValue();
			if (!this.$data.netDiskInfo) {
				return;
			}
			if (!this.$data.enable) {
				return;
			}
			/* 访问码为空的话就不填 */
			if (utils.isNull(this.$data.netDiskInfo.accessCode)) {
				return;
			}
			/* 百度如果shareCode第一位是1的话，新版本会在href中去除这个1 */
			if (
				this.$data.netDiskInfo.netDiskName === "baidu" &&
				this.$data.netDiskInfo.shareCode.startsWith("1")
			) {
				if (
					!window.location.href.includes(
						this.$data.netDiskInfo.shareCode.slice(
							1,
							this.$data.netDiskInfo.shareCode.length
						)
					)
				) {
					return;
				}
			} else if (
				!window.location.href.includes(this.$data.netDiskInfo.shareCode)
			) {
				return;
			}
			if (
				this.$data.netDiskInfo.netDiskName in NetDiskAutoFillAccessCode.netDisk
			) {
				NetDiskAutoFillAccessCode.netDisk[this.$data.netDiskInfo.netDiskName](
					this.$data.netDiskInfo
				);
			}
		},
		netDisk: {
			/**
			 * 百度网盘
			 * @param {NetDiskAutoFillAccessCodeOption} netDiskInfo
			 */
			baidu(netDiskInfo) {
				if (
					window.location.hostname === "pan.baidu.com" &&
					window.location.pathname === "/share/init" &&
					window.location.search.startsWith("?surl=")
				) {
					log.success(["自动填写链接", netDiskInfo]);
					utils.waitNode("div.verify-form #accessCode").then((element) => {
						if (!utils.isVisible(element)) {
							log.error("输入框不可见，不输入密码");
							return;
						}
						Qmsg.success("自动填入访问码");
						element.value = netDiskInfo.accessCode;
						utils.dispatchEvent(element, "input");
						document.querySelector("div.verify-form #submitBtn")?.click();
					});
				}
				if (
					window.location.hostname === "pan.baidu.com" &&
					window.location.pathname === "/wap/init" &&
					window.location.search.startsWith("?surl=")
				) {
					log.success(["自动填写链接", netDiskInfo]);
					utils
						.waitNode(
							"div.extractWrap div.extract-content div.extractInputWrap.extract input[type=text]"
						)
						.then((inputElement) => {
							if (!utils.isVisible(inputElement)) {
								log.error("输入框不可见，不输入密码");
								return;
							}
							Qmsg.success("自动填入访问码");
							inputElement.value = netDiskInfo.accessCode;
							utils.dispatchEvent(inputElement, "input");
							document
								.querySelector(
									"div.extractWrap div.extract-content button.m-button"
								)
								?.click();
						});
				}
			},
			/**
			 * 蓝奏云
			 * @param {NetDiskAutoFillAccessCodeOption} netDiskInfo
			 */
			lanzou(netDiskInfo) {
				if (window.location.hostname.match(/lanzou[a-z]{1}.com/gi)) {
					log.success(["自动填写链接", netDiskInfo]);
					utils.waitNode("#pwd").then((element) => {
						if (!utils.isVisible(element)) {
							log.error("输入框不可见，不输入密码");
							return;
						}
						Qmsg.success("自动填入访问码");
						element.value = netDiskInfo.accessCode;
						utils.dispatchEvent(element, "input");
						(
							document.querySelector("#passwddiv div.passwddiv-input > div") ||
							element.nextElementSibling
						)?.click();
						document.querySelector("#sub")?.click();
					});
					utils.waitNode("#f_pwd").then((element) => {
						utils.mutationObserver(element, {
							config: {
								attributes: true,
								attributeFilter: ["style"],
							},
							callback: (mutations, observer) => {
								let inputElement = document.querySelector("#f_pwd #pwd");
								if (!utils.isVisible(inputElement)) {
									log.error("输入框不可见，不输入密码");
									return;
								}
								observer.disconnect();
								log.success("自动填入访问码并关闭观察者");
								Qmsg.success("自动填入访问码");
								inputElement.value = netDiskInfo.accessCode;
								utils.dispatchEvent(inputElement, "input");
								document.querySelector("#f_pwd #sub")?.click();
							},
						});
					});
				}
			},
			/**
			 * 天翼云
			 * @param {NetDiskAutoFillAccessCodeOption} netDiskInfo
			 */
			tianyiyun(netDiskInfo) {
				if (window.location.hostname === "cloud.189.cn") {
					/* 桌面端 */
					log.success(["自动填写链接", netDiskInfo]);
					/**
					 * 循环等待元素出现
					 * @param {HTMLElement} targetElement
					 * @param {Function} callback
					 */
					function loopWaitElementShow(targetElement, callback) {
						let loopCount = 0;
						let maxLoopCount = 30;
						let interval = setInterval(() => {
							loopCount++;
							if (loopCount > maxLoopCount) {
								log.error("结束循环检查，退出。");
								clearInterval(interval);
								return;
							}
							if (!utils.isVisible(targetElement)) {
								log.warn(`第 ${loopCount} 次：输入框不可见，不输入密码`);
								return;
							}
							callback();
							clearInterval(interval);
						}, 500);
					}

					utils.waitNode("input#code_txt").then((codeTxtElement) => {
						loopWaitElementShow(codeTxtElement, () => {
							Qmsg.success("自动填入访问码");
							let visitBtn = document.querySelector(".btn.btn-primary.visit");
							codeTxtElement.value = netDiskInfo.accessCode;
							codeTxtElement._value = netDiskInfo.accessCode;
							utils.dispatchEvent(codeTxtElement, "input");
							utils.dispatchEvent(visitBtn, "click");
						});
					});
				}
				if (window.location.hostname === "h5.cloud.189.cn") {
					/* 移动端 */
					log.success(["自动填写链接", netDiskInfo]);
					utils
						.waitNode("input.access-code-input")
						.then((accessInputElement) => {
							loopWaitElementShow(accessInputElement, () => {
								Qmsg.success("自动填入访问码");
								accessInputElement.value = netDiskInfo.accessCode;
								accessInputElement._value = netDiskInfo.accessCode;
								utils.dispatchEvent(accessInputElement, "input");
								utils.dispatchEvent(
									document.querySelector("div.button"),
									"click"
								);
							});
						});
				}
			},
			/**
			 * 中国移动云盘
			 * @param {NetDiskAutoFillAccessCodeOption} netDiskInfo
			 */
			hecaiyun(netDiskInfo) {
				if (window.location.hostname === "caiyun.139.com") {
					/* 桌面端 */
					log.success(["自动填写链接", netDiskInfo]);
					utils.waitNode("#token-input").then((element) => {
						if (!utils.isVisible(element)) {
							log.error("输入框不可见，不输入密码");
							return;
						}
						Qmsg.success("自动填入访问码");
						element.value = netDiskInfo.accessCode;
						utils.dispatchEvent(element, "input");
						document
							.querySelector("#homepage div.token div.token-form a")
							.click();
					});
					/* 移动端 */
					utils
						.waitNode("#app div.token-form input[type=text]")
						.then((element) => {
							if (!utils.isVisible(element)) {
								log.error("输入框不可见，不输入密码");
								return;
							}
							Qmsg.success("自动填入访问码");
							element.value = netDiskInfo.accessCode;
							utils.dispatchEvent(element, "input");
							document.querySelector("div.token-form a.btn-token").click();
						});
				}
			},
			/**
			 * 阿里云盘
			 * @param {NetDiskAutoFillAccessCodeOption} netDiskInfo
			 */
			aliyun(netDiskInfo) {
				if (
					window.location.hostname === "www.aliyundrive.com" ||
					window.location.hostname === "www.alipan.com"
				) {
					/* 桌面端 */
					log.success(["自动填写链接", netDiskInfo]);
					utils.waitNode("#root input.ant-input").then((element) => {
						if (!utils.isVisible(element)) {
							log.error("输入框不可见，不输入密码");
							return;
						}
						Qmsg.success("自动填入访问码");
						element.value = netDiskInfo.accessCode;
						utils.getReactObj(element).reactFiber.memoizedProps.onChange({
							currentTarget: element,
							target: element,
						});
						document.querySelector('#root button[type="submit"]').click();
					});

					/* ------------------------------------ */

					/* 移动端 */
					utils.waitNode("#root input[name=pwd]").then((element) => {
						if (!utils.isVisible(element)) {
							log.error("输入框不可见，不输入密码");
							return;
						}
						Qmsg.success("自动填入访问码");
						element.value = netDiskInfo.accessCode;
						utils.getReactObj(element).reactFiber.memoizedProps.onChange({
							currentTarget: element,
							target: element,
						});
						document.querySelector('#root button[type="submit"]').click();
					});
				}
			},
			/**
			 * 文叔叔
			 * 暂时没找到有密码的链接
			 * @param {NetDiskAutoFillAccessCodeOption} netDiskInfo
			 */
			wenshushu(netDiskInfo) {},
			/**
			 * 奶牛
			 * 暂时没找到有密码的链接
			 * @param {NetDiskAutoFillAccessCodeOption} netDiskInfo
			 */
			nainiu(netDiskInfo) {},
			/**
			 * 123云盘
			 * @param {NetDiskAutoFillAccessCodeOption} netDiskInfo
			 */
			_123pan(netDiskInfo) {
				if (window.location.hostname === "www.123pan.com") {
					/* 桌面端 */
					log.success(["自动填写链接", netDiskInfo]);
					utils
						.waitNode("#app .ca-fot input.ant-input[type=text]")
						.then((element) => {
							if (!utils.isVisible(element)) {
								log.error("输入框不可见，不输入密码");
								return;
							}
							Qmsg.success("自动填入访问码");
							utils.getReactObj(element).reactProps.onChange({
								target: {
									value: netDiskInfo.accessCode,
								},
							});
							element.nextSibling.click();
						});

					/* ------------------------------------ */

					/* 移动端 */
					utils
						.waitNode("#app .appinput input.ant-input[type=text]")
						.then((element) => {
							if (!utils.isVisible(element)) {
								log.error("输入框不可见，不输入密码");
								return;
							}
							Qmsg.success("自动填入访问码");
							utils.getReactObj(element).reactProps.onChange({
								target: {
									value: netDiskInfo.accessCode,
								},
							});
							element.nextSibling.click();
						});
				}
			},
			/**
			 * 腾讯微云
			 * @param {NetDiskAutoFillAccessCodeOption} netDiskInfo
			 */
			weiyun(netDiskInfo) {
				if (window.location.hostname === "share.weiyun.com") {
					/* 桌面端 */
					log.success(["自动填写链接", netDiskInfo]);
					utils.waitNode("#app input.input-txt").then((element) => {
						if (!utils.isVisible(element)) {
							log.error("输入框不可见，不输入密码");
							return;
						}
						Qmsg.success("自动填入访问码");
						element.value = netDiskInfo.accessCode;
						utils.dispatchEvent(element, "input");
						utils.dispatchEvent(element, "change");
						setTimeout(() => {
							document.querySelector(".form-item button.btn-main").click();
						}, 500);
					});

					/* ------------------------------------ */

					/* 移动端 */
					utils.waitNode(".input-wrap input.pw-input").then((element) => {
						if (!utils.isVisible(element)) {
							log.error("输入框不可见，不输入密码");
							return;
						}
						Qmsg.success("自动填入访问码");
						element.value = netDiskInfo.accessCode;
						utils.dispatchEvent(element, "input");
						utils.dispatchEvent(element, "change");
						setTimeout(() => {
							document.querySelector(".pw-btn-wrap button.btn").click();
						}, 500);
					});
				}
			},
			/**
			 * 迅雷
			 * @param {NetDiskAutoFillAccessCodeOption} netDiskInfo
			 */
			xunlei(netDiskInfo) {
				if (window.location.hostname === "pan.xunlei.com") {
					/* 桌面端 */
					log.success(["自动填写链接", netDiskInfo]);
					utils
						.waitNode("#__layout div.pass-input-wrap input.td-input__inner")
						.then((element) => {
							if (!utils.isVisible(element)) {
								log.error("输入框不可见，不输入密码");
								return;
							}
							log.error("输入框不可见，不输入密码");
							element.value = netDiskInfo.accessCode;
							utils.dispatchEvent(element, "input");
							utils.dispatchEvent(element, "change");
							setTimeout(() => {
								document
									.querySelector(
										"#__layout div.pass-input-wrap button.td-button"
									)
									.click();
							}, 500);
						});

					/* ------------------------------------ */

					/* 移动端 */
					utils
						.waitNode("#__layout div.pass-wrapper input.td-input__inner")
						.then((element) => {
							if (!utils.isVisible(element)) {
								log.error("输入框不可见，不输入密码");
								return;
							}
							log.error("输入框不可见，不输入密码");
							element.value = netDiskInfo.accessCode;
							utils.dispatchEvent(element, "input");
							utils.dispatchEvent(element, "change");
							setTimeout(() => {
								document
									.querySelector("#__layout div.pass-wrapper button.td-button")
									.click();
							}, 500);
						});
				}
			},
			/**
			 * 115网盘
			 * @param {NetDiskAutoFillAccessCodeOption} netDiskInfo
			 */
			_115pan(netDiskInfo) {
				if (window.location.hostname === "115.com") {
					log.success(["自动填写链接", netDiskInfo]);
					utils.waitNode("input.text").then((element) => {
						if (!utils.isVisible(element)) {
							log.error("输入框不可见，不输入密码");
							return;
						}
						Qmsg.success("自动填入访问码");
						element.value = netDiskInfo.accessCode;
						utils.dispatchEvent(element, "input");
						document
							.querySelector("#js-share_code div.form-decode div.submit a")
							.click();
					});
				}
			},
			/**
			 * 城通网盘
			 * @param {NetDiskAutoFillAccessCodeOption} netDiskInfo
			 */
			chengtong(netDiskInfo) {
				log.success(["自动填写链接", netDiskInfo]);
				utils.waitNode("#passcode").then((element) => {
					if (!utils.isVisible(element)) {
						log.error("输入框不可见，不输入密码");
						return;
					}
					Qmsg.success("自动填入访问码");
					element.value = netDiskInfo.accessCode;
					utils.dispatchEvent(element, "input");
					document
						.querySelector("#main-content .form-group button.btn[type=button]")
						.click();
				});
			},
			/**
			 * 夸克网盘
			 * @param {NetDiskAutoFillAccessCodeOption} netDiskInfo
			 */
			kuake(netDiskInfo) {
				if (window.location.hostname === "pan.quark.cn") {
					log.success(["自动填写链接", netDiskInfo]);
					utils
						.waitNode("#ice-container input.ant-input[class*=ShareReceive]")
						.then((element) => {
							if (!utils.isVisible(element)) {
								log.error("输入框不可见，不输入密码");
								return;
							}
							Qmsg.success("自动填入访问码");
							(
								utils.getReactObj(element).reactProps ||
								utils.getReactObj(element).reactEventHandlers
							).onChange({
								target: {
									value: netDiskInfo.accessCode,
								},
							});
						});
				}
			},
			/**
			 * 坚果云
			 * 暂时没找到有密码的链接
			 * @param {NetDiskAutoFillAccessCodeOption} netDiskInfo
			 */
			jianguoyun(netDiskInfo) {},
			/**
			 * OneDrive
			 * 暂时没找到有密码的链接
			 * @param {NetDiskAutoFillAccessCodeOption} netDiskInfo
			 */
			onedrive(netDiskInfo) {},
		},
		/**
		 *
		 * @param {NetDiskAutoFillAccessCodeOption} value
		 */
		setValue(value) {
			GM_setValue(this.key, value);
		},
		getValue() {
			return GM_getValue(this.key);
		},
	};

	/** Woker */
	const NetDiskWorker = {
		/** 是否正在匹配中 */
		isHandleMatch: false,
		/** worker的Blob链接 */
		blobUrl: "",
		/** @type {Worker} */
		GM_matchWorker: void 0,
		/** 初始化Worker的Blob链接 */
		initWorkerBlobLink() {
			const handleMatch = `
			(() => {
				function ${NetDiskWorker.handleRegularMatch.toString()}

				function ${NetDiskWorker.uniqueArr}
				
				this.addEventListener(
				"message",
				function (event) {
					const data = event.data;
					let matchedList = [];
					${NetDiskWorker.handleRegularMatch.name}(data,(matchData)=>{
					matchedList.push(matchData);
					})
					matchedList = ${NetDiskWorker.uniqueArr.name}(matchedList);
					this.postMessage({
					options: data,
					msg: "Match End",
					data: matchedList,
					startTime: data.startTime,
					endTime: Date.now(),
					});
				},
				{
					capture: true,
				}
				);
			})();
      `;
			let blob = new Blob([handleMatch]);
			NetDiskWorker.blobUrl = window.URL.createObjectURL(blob);
			log.info(`Worker Blob Link ===> ${NetDiskWorker.blobUrl}`);
		},
		/**
		 * 处理规则匹配
		 * @param {NetDiskWorkerOptions} data 数据
		 * @param {( matchData: NetDiskWorkerMatchOption )=>void} callback 成功匹配到的回调
		 */
		handleRegularMatch(data, callback) {
			const NetDiskRegularNameList = Object.keys(data.regular);
			for (const netDiskName of NetDiskRegularNameList) {
				const netDiskRegular = data.regular[netDiskName];
				for (let index = 0; index < netDiskRegular.length; index++) {
					const netDiskRegularItem = netDiskRegular[index];
					if (
						netDiskRegularItem["enable"] != null &&
						!netDiskRegularItem["enable"]
					) {
						continue;
					}
					let regexpList = [];
					if (data.matchTextRange === "all") {
						regexpList.push(
							new RegExp(netDiskRegularItem["link_innerText"], "gi")
						);
						regexpList.push(
							new RegExp(netDiskRegularItem["link_innerHTML"], "gi")
						);
					} else if (data.matchTextRange === "innertext") {
						regexpList.push(
							new RegExp(netDiskRegularItem["link_innerText"], "gi")
						);
					} else if (data.matchTextRange === "innerhtml") {
						regexpList.push(
							new RegExp(netDiskRegularItem["link_innerHTML"], "gi")
						);
					} else {
						throw new TypeError("未知的匹配范围: " + data.matchTextRange);
					}
					for (const regexp of regexpList) {
						for (const text of data.textList) {
							let matchData = text.match(regexp);
							if (matchData && matchData.length) {
								callback({
									netDiskName: netDiskName,
									netDiskIndex: index,
									data: matchData,
								});
							}
						}
					}
				}
			}
		},
		/**
		 * 数组去重
		 */
		uniqueArr(arr) {
			return arr.filter((obj, index, selfArray) => {
				return (
					index ===
					selfArray.findIndex((item) => {
						return JSON.stringify(item) === JSON.stringify(obj);
					})
				);
			});
		},
		/**
		 * 初始化Worker对象
		 */
		initWorker() {
			try {
				NetDiskWorker.GM_matchWorker = new Worker(NetDiskWorker.blobUrl);
				NetDiskWorker.GM_matchWorker.onmessage = NetDiskWorker.onMessage;
				NetDiskWorker.GM_matchWorker.onerror = NetDiskWorker.onError;
			} catch (error) {
				log.error([
					"初始化Worker失败，可能页面使用了Content-Security-Policy策略，使用另类方法",
					error.message,
				]);
				NetDiskWorker.GM_matchWorker = {
					/**
					 *
					 * @param {NetDiskWorkerOptions} data
					 */
					postMessage(data) {
						return new Promise((resolve, reject) => {
							/** @type {NetDiskWorkerMatchOption[]} */
							let matchedList = [];
							try {
								NetDiskWorker.handleRegularMatch(data, (matchData) => {
									matchedList.push(matchData);
								});
							} catch (error) {
								NetDiskWorker.onError(error);
							} finally {
								matchedList = NetDiskWorker.uniqueArr(matchedList);
								NetDiskWorker.onMessage(
									new MessageEvent("message", {
										data: {
											options: data,
											msg: "Match End",
											data: matchedList,
											startTime: data.startTime,
											endTime: Date.now(),
										},
									})
								);
								resolve();
							}
						});
					},
				};
			}
		},
		/**
		 * 传递数据给worker内进行处理匹配
		 * @param { NetDiskWorkerOptions } message 数据
		 * @param { ?StructuredSerializeOptions } options 配置
		 */
		postMessage(message, options) {
			if (isDebug) {
				log.info(["Debug-传递数据给worker内进行处理匹配: ", message]);
			}
			NetDiskWorker.GM_matchWorker.postMessage(message, options);
		},
		/**
		 * Worker的onmessage
		 * @param {MessageEvent<NetDiskWorkerCallBackOptions>} event
		 */
		onMessage(event) {
			const data = event.data;
			if (isDebug) {
				log.info([
					`Debug-匹配结束,用时${Date.now() - data.startTime}ms: `,
					data,
				]);
			}
			if (data.data.length) {
				log.success(
					`成功匹配${data.data.length}个，用时${Date.now() - data.startTime}ms`
				);
			}
			if (event.data.options.from === "PasteText") {
				NetDiskUI.matchPasteText.matchEndCallBack(data);
			}
			NetDiskWorker.successCallBack(data);
		},
		/**
		 * Worker的onerror
		 * @param {ErrorEvent} error
		 */
		onError(error) {
			NetDiskWorker.errorCallBack(error);
		},
		/**
		 * worker处理文件匹配后的回调
		 * @param {NetDiskWorkerCallBackOptions} options
		 */
		successCallBack(options) {
			/* 匹配为空，释放锁 */
			if (!options.data.length) {
				NetDiskWorker.matchingEndCallBack();
				return;
			}
			/** @type {NetiDiskHandleObject[]} */
			const handleNetDiskList = [];
			for (const matchData of options.data) {
				/* 已匹配到的网盘，用于显示图标 */
				NetDisk.matchLink.add(matchData.netDiskName);
				/**
				 * 匹配到的可能很多，使用集合去重
				 * @type {Set<string>}
				 */
				let matchLinkSet = new Set();
				matchData.data.forEach((item) => {
					matchLinkSet.add(item);
				});

				matchLinkSet.forEach((item) => {
					let handleLink = NetDisk.handleLink(
						matchData.netDiskName,
						matchData.netDiskIndex,
						item
					);
					if (handleLink) {
						handleNetDiskList.push({
							shareCode: handleLink.shareCode,
							accessCode: handleLink.accessCode,
							netDiskName: matchData.netDiskName,
							netDiskIndex: matchData.netDiskIndex,
							matchText: item,
						});
					}
				});
			}
			/* 过滤掉重复的 */
			let filterHandleNetDiskList = handleNetDiskList.filter(
				(value, index, selfArray) => {
					let isFind =
						selfArray.findIndex((obj) => {
							/* 过滤掉同样配置的 */
							/* 或者是netDiskName、netDiskIndex相同，且shareCode前面存在重复的 */
							return (
								//JSON.stringify(obj) === JSON.stringify(value)
								obj.accessCode === value.accessCode &&
								obj.netDiskIndex === value.netDiskIndex &&
								obj.netDiskName === value.netDiskName &&
								obj.shareCode === value.shareCode
								//(obj.netDiskName === value.netDiskName &&
								//  obj.netDiskIndex === value.netDiskIndex &&
								//  obj.shareCode.startsWith(value.shareCode)) ||
								//value.shareCode.startsWith(obj.shareCode)
							);
						}) === index;
					return isFind;
				}
			);
			filterHandleNetDiskList.forEach((item) => {
				if (NetDisk.tempLinkDict.has(item.netDiskName)) {
					let currentTempDict = NetDisk.tempLinkDict.get(item.netDiskName);
					currentTempDict.set(item.shareCode, item);
				}
			});
			filterHandleNetDiskList.forEach((item) => {
				const { shareCode, accessCode, netDiskName, netDiskIndex, matchText } =
					item;
				const currentRegular = NetDisk.regular[netDiskName][netDiskIndex];
				if (
					currentRegular.shareCodeExcludeRegular &&
					Array.isArray(currentRegular.shareCodeExcludeRegular)
				) {
					/* 排除掉在目标规则已匹配到的shareCode */
					for (const excludeRegularName of currentRegular.shareCodeExcludeRegular) {
						let excludeDict = NetDisk.linkDict.get(excludeRegularName);
						let currentTempDict = NetDisk.tempLinkDict.get(excludeRegularName);
						if (
							excludeDict.startsWith(shareCode) ||
							currentTempDict.startsWith(shareCode)
						) {
							log.warn(
								`${netDiskName}：该分享码【${shareCode}】与已匹配到该分享码的规则【${excludeRegularName}】冲突`
							);
							return;
						}
					}
				}

				/** 当前存储的 */
				const currentDict = NetDisk.linkDict.get(netDiskName);
				NetDisk.hasMatchLink = true;
				if (currentDict.startsWith(shareCode)) {
					/* 存在该访问码 */
					/* 根据shareCode获取accessCode和netDiskIndex信息 */
					let shareCodeDict = currentDict.getStartsWith(shareCode);
					if (
						typeof shareCodeDict.isForceAccessCode === "boolean" &&
						shareCodeDict.isForceAccessCode
					) {
						/* 该访问码已被锁定，禁止修改 */
						return;
					}
					if (utils.isNotNull(shareCodeDict.accessCode)) {
						/* 已匹配到的访问码不为空，不设置新的 */
						return;
					}
					if (utils.isNull(accessCode)) {
						/* 访问码为空，不设置新的 */
						return;
					}

					currentDict.set(
						shareCode,
						NetDisk.getLinkDickObj(accessCode, netDiskIndex, false, matchText)
					);
					NetDiskUI.view.changeLinkView(
						netDiskName,
						netDiskIndex,
						shareCode,
						accessCode,
						matchText
					);
					log.info(
						`该匹配项无密码，设置密码 ${netDiskName} ${netDiskIndex}: ${shareCode}  ===> ${accessCode}`
					);
				} else {
					/* 不存在该访问码，添加新的进去 */
					currentDict.set(
						shareCode,
						NetDisk.getLinkDickObj(accessCode, netDiskIndex, false, matchText)
					);
					NetDiskUI.isMatchedNetDiskIconMap.add(netDiskName);
					NetDiskUI.view.addLinkView(
						netDiskName,
						netDiskIndex,
						shareCode,
						accessCode,
						matchText
					);
					log.success(
						`添加链接 ${netDiskName} ${netDiskIndex}: ${shareCode}  ===> ${accessCode}`
					);
				}
			});

			/* 清空临时的 */
			Object.keys(NetDisk.tempLinkDict.getItems()).forEach((keyName) => {
				NetDisk.tempLinkDict.get(keyName).clear();
			});
			if (NetDisk.hasMatchLink) {
				switch (NetDiskUIMenuData.netdiskBehaviorMode) {
					case "suspension_smallwindow".toLowerCase():
						if (
							GM_getValue(
								"current_suspension_smallwindow_mode",
								"suspension"
							) === "suspension"
						) {
							NetDiskUI.suspension.show();
						} else {
							NetDiskUI.view.show();
						}
						break;
					case "suspension_window".toLowerCase():
						NetDiskUI.suspension.show();
						break;
					case "smallwindow".toLowerCase():
						NetDiskUI.view.show();
						break;
					default:
						log.error([
							"未知的行为模式：" + NetDiskUIMenuData.netdiskBehaviorMode,
						]);
				}
			}
			NetDiskWorker.matchingEndCallBack();
		},
		/**
		 * Worker失败回调
		 * @param {object} error
		 */
		errorCallBack(error) {
			NetDiskWorker.matchingEndCallBack(true);
			log.error(["Worker Error", error]);
		},
		/**
		 * 匹配结束回调
		 * @param {boolean} isNow 是否立刻释放锁
		 */
		matchingEndCallBack(isNow) {
			if (isNow) {
				NetDiskWorker.isHandleMatch = false;
			} else {
				const delaytime =
					parseFloat(
						GM_getValue("delaytime", NetDiskData.defaultMatchIntervalTime)
					) * 1000;
				setTimeout(() => {
					NetDiskWorker.matchingEndCallBack(true);
				}, delaytime);
			}
		},
		/**
		 * 监听页面节点内容或节点文本的变动，从而进行匹配网盘链接
		 */
		monitorDOMChange() {
			NetDiskWorker.initWorkerBlobLink();
			NetDiskWorker.initWorker();
			/**
			 * 设置-判定为添加元素才进行匹配
			 * @type {boolean}
			 */
			const isAddedNodesToMatch = GM_getValue("isAddedNodesToMatch");
			/**
			 * 观察者的事件
			 * @param {?MutationRecord[]} mutations
			 */
			async function observeEvent(mutations) {
				if (NetDiskWorker.isHandleMatch) {
					/* 当前正在处理规则匹配字符串中 */
					return;
				}
				if (isAddedNodesToMatch && mutations && mutations.length) {
					// 设定为添加元素才匹配且观察器检测到改变的元素
					/** 判断是否存在添加的元素 */
					let hasAddNodes = false;
					for (const mutation of mutations) {
						if (
							mutation.addedNodes &&
							mutation.addedNodes instanceof NodeList
						) {
							if (mutation.addedNodes.length) {
								hasAddNodes = true;
								break;
							}
						}
					}
					if (!hasAddNodes) {
						return;
					}
				}
				NetDiskWorker.isHandleMatch = true;
				/** 开始时间 */
				const startTime = Date.now();
				/** 读取剪贴板内容 */
				let readClipboard = GM_getValue("readClipboard", false);
				if (readClipboard) {
					NetDisk.clipboardText = await NetDisk.getClipboardText();
				}
				if (typeof NetDisk.clipboardText !== "string") {
					NetDisk.clipboardText = "";
				}
				let matchTextRangeLowerCase = GM_getValue(
					"pageMatchRange",
					"all"
				).toLowerCase();
				/** @type {string[]} */
				let matchTextList = [];

				/* 剪贴板内容 */
				if (NetDisk.clipboardText.trim() !== "") {
					matchTextList.push(NetDisk.clipboardText);
				}
				/* 当前的网页链接 */
				if (NetDisk.allowMatchLocationHref) {
					let decodeUrl = window.location.href;
					try {
						decodeUrl = decodeURIComponent(decodeUrl);
					} catch (error) {}
					matchTextList.push(decodeUrl);
				}
				/* innerText和innerHTML */
				if (matchTextRangeLowerCase === "all") {
					let pageText = NetDisk.ignoreStrRemove(
						document.documentElement.innerText
					);
					let pageHTML = NetDisk.ignoreStrRemove(
						document.documentElement.innerHTML,
						true
					);
					matchTextList.push(pageText);
					matchTextList.push(pageHTML);
				} else if (matchTextRangeLowerCase === "innertext") {
					/* innerText */
					let pageText = NetDisk.ignoreStrRemove(
						document.documentElement.innerText
					);
					matchTextList.push(pageText);
				} else {
					/* innerHTML */
					let pageHTML = NetDisk.ignoreStrRemove(
						document.documentElement.innerHTML,
						true
					);
					matchTextList.push(pageHTML);
				}
				/* 发送消息 */
				NetDiskWorker.postMessage({
					textList: matchTextList,
					matchTextRange: matchTextRangeLowerCase,
					regular: NetDisk.regular,
					startTime: startTime,
					from: "DOMChange",
				});
			}
			utils.mutationObserver(document.documentElement, {
				callback: observeEvent,
				/* 主动触发一次，因为有的页面上没触发mutationObserver */
				immediate: true,
				config: {
					/* 子节点的变动（新增、删除或者更改） */
					childList: GM_getValue(
						"mutationObserver-childList",
						NetDiskData.default_mutationObserver_childList
					),
					/* 节点内容或节点文本的变动 */
					characterData: GM_getValue(
						"mutationObserver-characterData",
						NetDiskData.default_mutationObserver_characterData
					),
					/* 是否将观察器应用于该节点的所有后代节点 */
					subtree: GM_getValue(
						"mutationObserver-subtree",
						NetDiskData.default_mutationObserver_subtree
					),
				},
			});
		},
	};

	/** 网盘-引用/获取文件 */
	const NetDiskRequire = {
		requiredFileMap: new Map(),
		/**
		 * 网络加载文件
		 * @param {string} path
		 * @param {HttpxDetails} options
		 * @returns
		 */
		async file(path, options) {
			if (utils.isNull(path)) {
				log.error(["NetDiskRequire.file的参数path为空", path]);
				return false;
			}
			if (this.requiredFileMap.has(path)) {
				log.warn(["NetDiskRequire.file的参数path已引入过", path]);
				return true;
			}
			let getResp = await httpx.get(path, options);
			if (!getResp.status) {
				return false;
			}
			let jsText = getResp.data.responseText;
			this.requiredFileMap.set(path, jsText);
			log.info(["加载js文件", path]);
			unsafeWindow.eval(jsText);
			await utils.sleep(300);
		},
	};

	/** 网盘-自定义规则 */
	const NetDiskCustomRules = {
		key: "userRule",
		dataKey: "userRuleData",
		$data: {
			/**
			 * @type {UtilsDictionaryConstructor<string,NetDiskSettingMenuDetails>}
			 */
			settingViewDetails: new utils.Dictionary(),
		},
		init() {
			if (typeof GM_getValue(this.dataKey) !== "object") {
				GM_setValue(this.dataKey, {});
			}
			let userRule = this.parseRule(this.getRule());
			for (let ruleName in userRule) {
				if (ruleName in NetDisk.regular) {
					/* 如果规则已存在(已内置)，自定义规则先放在前面匹配 */
					NetDisk.regular[ruleName] = [
						...userRule[ruleName],
						...NetDisk.regular[ruleName],
					];
				} else {
					NetDisk.regular[ruleName] = userRule[ruleName];
				}
			}
		},
		getCSS() {
			return `
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
		 * 添加/编辑规则
		 * @param {boolean} isEdit
		 * @param {?string} ruleKey 当isEdit为true时，传入该值
		 */
		showUI(isEdit, ruleKey) {
			let titleText = "添加";
			if (isEdit) {
				titleText = "编辑";
			}
			titleText += "自定义规则";
			/** @type {HTMLTextAreaElement} */
			let $ruleInput = null;

			/**
			 * 保存按钮的回调
			 * @param {PopsBtnCallBackEvent} event
			 */
			function saveCallBack(event) {
				/**
				 * 检测regexp项是否符合规定
				 * @param {NetDiskUserCustomRuleRegexp} ruleRegExp
				 * @returns
				 */
				function checkRegExp(ruleRegExp) {
					if (typeof ruleRegExp["link_innerText"] !== "string") {
						Qmsg.error("regexp缺失的键名: link_innerText，类型: string");
						return;
					}
					if (typeof ruleRegExp["link_innerHTML"] !== "string") {
						Qmsg.error("regexp缺失的键名: link_innerHTML，类型: string");
						return;
					}
					if (typeof ruleRegExp["shareCode"] !== "string") {
						Qmsg.error("regexp缺失的键名: shareCode，类型: string");
						return;
					}
					if (typeof ruleRegExp["shareCodeNeedRemoveStr"] !== "string") {
						Qmsg.error(
							"regexp缺失的键名: shareCodeNeedRemoveStr，类型: string"
						);
						return;
					}
					if (typeof ruleRegExp["uiLinkShow"] !== "string") {
						Qmsg.error("regexp缺失的键名: uiLinkShow，类型: string");
						return;
					}
					if (typeof ruleRegExp["blank"] !== "string") {
						Qmsg.error("regexp缺失的键名: blank，类型: string");
						return;
					}
					if (typeof ruleRegExp["copyUrl"] !== "string") {
						Qmsg.error("regexp缺失的键名: copyUrl，类型: string");
						return;
					}
					if (
						typeof ruleRegExp["accessCode"] === "string" &&
						typeof ruleRegExp["checkAccessCode"] !== "string"
					) {
						Qmsg.error("regexp设置了accessCode但是没有设置checkAccessCode");
						return;
					}
					if (
						typeof ruleRegExp["accessCode"] !== "string" &&
						typeof ruleRegExp["checkAccessCode"] === "string"
					) {
						Qmsg.error("regexp设置了checkAccessCode但是没有设置accessCode");
						return;
					}
					return true;
				}
				/**
				 * 检测设置项是否符合规定
				 * @param {NetDiskUserCustomRuleSetting} ruleSetting
				 */
				function checkSetting(ruleSetting) {
					if (typeof ruleSetting["name"] !== "string") {
						Qmsg.error("setting缺失的键名: name，类型: string");
						return;
					}
					if (typeof ruleSetting["enable"] !== "boolean") {
						Qmsg.error("setting缺失的键名: enable，类型: boolean");
						return;
					}
					return true;
				}
				try {
					/**
					 * @type {NetDiskUserCustomRule}
					 */
					let ruleJSON = JSON.parse($ruleInput.value);
					if (typeof ruleJSON !== "object") {
						Qmsg.error("该规则不是object类型");
						return;
					}
					if (typeof ruleJSON["key"] !== "string") {
						Qmsg.error("缺失的键名: key，类型: string");
						return;
					}
					if (typeof ruleJSON["regexp"] !== "object") {
						Qmsg.error("缺失的键名: regexp，类型: object|Arrany");
						return;
					}
					if (typeof ruleJSON["setting"] !== "object") {
						Qmsg.error("缺失的键名: setting，类型: object");
						return;
					}
					if (Array.isArray(ruleJSON["regexp"])) {
						for (const regexpItem of ruleJSON["regexp"]) {
							if (!checkRegExp(regexpItem)) {
								return;
							}
						}
					} else {
						if (!checkRegExp(ruleJSON["regexp"])) {
							return;
						}
					}

					if (!checkSetting(ruleJSON["setting"])) {
						return;
					}
					if (isEdit) {
						NetDiskCustomRules.setRule(ruleKey, ruleJSON);
					} else {
						NetDiskCustomRules.addRule(ruleJSON);
					}
					Qmsg.success("保存成功");
					return ruleJSON;
				} catch (error) {
					log.error(error);
					Qmsg.error(error.message, {
						html: true,
						timeout: 3500,
					});
					return;
				}
			}
			/**
			 * 调试按钮的回调
			 * @param {PopsBtnCallBackEvent} event
			 */
			function debugCallBack(event) {
				let ruleJSON = saveCallBack(event);
				if (!ruleJSON) {
					return;
				}
				NetDiskCustomRules.showDebugUI(ruleJSON);
			}
			/**
			 * 格式化按钮的回调
			 * @param {PopsBtnCallBackEvent} event
			 */
			function formatCallBack(event) {
				try {
					let ruleJSON = JSON.parse($ruleInput.value);
					let ruleJSONString = NetDiskCustomRules.getFormatRule(ruleJSON);
					$ruleInput.value = ruleJSONString;
					Qmsg.success("格式化成功");
				} catch (error) {
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
						text: `<textarea class="netdisk-custom-rules" placeholder="请输入自定义规则"></textarea>`,
						html: true,
					},
					btn: {
						merge: true,
						mergeReverse: false,
						reverse: false,
						position: "space-between",
						ok: {
							text: "保存",
							callback: saveCallBack,
						},
						cancel: {
							text: "调试",
							callback: debugCallBack,
						},
						other: {
							enable: true,
							text: "格式化",
							type: "xiaomi-primary",
							callback: formatCallBack,
						},
					},
					class: "whitesevPopNetDiskCustomRules",
					style: this.getCSS(),
				},
				NetDiskUI.popsStyle.customRulesView
			);
			$ruleInput = dialog.$shadowRoot.querySelector("textarea");
			if (isEdit) {
				let rule = this.getRule(ruleKey);
				$ruleInput.value = this.getFormatRule(rule);
			} else {
				$ruleInput.value = this.getTemplateRule();
			}
		},
		/**
		 * 调试规则
		 * @param {NetDiskUserCustomRule} ruleJSON
		 */
		showDebugUI(ruleJSON) {
			if (utils.isNull(ruleJSON.regexp)) {
				Qmsg.error("请先配置regexp");
				return;
			}
			let that = this;
			let customRule = this.parseRule([ruleJSON]);
			let regexp = customRule[ruleJSON.key];
			let dialog = NetDiskPops.confirm(
				{
					title: {
						text: `调试规则 ${ruleJSON.key}`,
						position: "center",
					},
					content: {
						text: `
          <div class="custom-rule-container">
            <textarea class="custom-rule-match-text" placeholder="请输入需要测试匹配的字符串"></textarea>
            <div class="custom-rule-input-container">
              <select class="custom-rule-select-regexp"></select>
              <button class="custom-rule-run-match-button" type="primary" data-icon="" data-righticon="false">
                <span>执行</span>
              </button>
            </div>
          </div>
          <div class="custom-rule-match-log">
            <div>匹配日志↓</div>
            <div class="custom-rule-match-log-container"></div>
          </div>
          `,
						html: true,
					},
					btn: {
						ok: {
							enable: false,
						},
					},
					style: `
        .custom-rule-container{
          display: flex;
          align-items: center;
        }
        .custom-rule-select-regexp{
          width: 100%;
          height: 32px;
          line-height: 32px;
          border: 1px solid rgb(184, 184, 184, var(--pops-bd-opacity));
          border-radius: 5px;
          text-align: center;
          outline: 0;
          background: rgb(255, 255, 255, var(--pops-bg-opacity));
          box-shadow: none;
        }
        .custom-rule-input-container{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 5px;
          width: 30%;
        }
        .custom-rule-select-regexp-item{

        }
        button.custom-rule-run-match-button{
          margin-top: 5px;
        }
        textarea.custom-rule-match-text{
          width: 100%;
          min-height: 70px;
          outline: none;
          margin: 0px;
          background-image: none;
          background-color: transparent;
          display: inline-block;
          resize: vertical;
          padding: 5px;
          line-height: 1.5;
          box-sizing: border-box;
          border: 1px solid rgb(220, 223, 230);
          appearance: none;
        }
        .custom-rule-match-log{

        }
        .custom-rule-match-log-container{
          padding: 5px;
          background: rgb(229, 229, 229);
        }
        .custom-rule-match-log-container p{
          margin: 2px 0px;
          border-bottom: 1px solid #000000;
        }
        .custom-rule-match-log-container p:last-child{
          border-bottom: 0px;
          margin-bottom: 0px;
        }
        .custom-rule-match-log-container p[data-tag]{
          
        }
        .custom-rule-match-log-container p[data-tag="info"]{

        }
        .custom-rule-match-log-container p[data-tag="success"]{
          color: green;
        }
        .custom-rule-match-log-container p[data-tag="warn"]{
          color: yellow;
        }
        .custom-rule-match-log-container p[data-tag="error"]{
          color: red;
        }
        `,
				},
				NetDiskUI.popsStyle.customRuleDebugView
			);
			/** @type {HTMLSelectElement} */
			let $select = dialog.$shadowRoot.querySelector(
				".custom-rule-select-regexp"
			);
			/** @type {HTMLTextAreaElement} */
			let $matchText = dialog.$shadowRoot.querySelector(
				".custom-rule-match-text"
			);
			/** @type {HTMLDivElement} */
			let $log = dialog.$shadowRoot.querySelector(
				".custom-rule-match-log-container"
			);
			/** @type {HTMLButtonElement} */
			let $button = dialog.$shadowRoot.querySelector(
				".custom-rule-run-match-button"
			);
			regexp.forEach((regExpItem, index) => {
				$select.appendChild(
					DOMUtils.createElement("option", {
						className: "custom-rule-select-regexp-item",
						innerText: "regexp下标:" + index,
						"data-value": regExpItem,
					})
				);
			});
			/**
			 * 设置日志输出
			 * @param {"info"|"error"|"success"|"warn"} tag 日志等级
			 * @param {...any[]} args
			 */
			function setLog(tag, ...args) {
				let text = "";
				args.forEach((item) => {
					if (text !== "") {
						text += "\n";
					}
					if (typeof item !== "string") {
						text += JSON.stringify(item, void 0, 4);
					} else {
						text += item;
					}
				});
				let logElement = DOMUtils.createElement(
					"p",
					{
						innerText: text,
					},
					{
						"data-tag": tag,
					}
				);
				DOMUtils.append($log, logElement);
			}
			/**
			 * 清空日志
			 */
			function clearLog() {
				$log.innerHTML = "";
			}
			/**
			 * 日志回调
			 * @param {NetDiskDebugLogData} logData
			 */
			function logCallBack(logData) {
				if (Array.isArray(logData.msg)) {
					setLog(logData.status ? "info" : "error", ...logData.msg);
				} else {
					setLog(logData.status ? "info" : "error", logData.msg);
				}
				if (!logData.status) {
					setLog("error", "执行完毕");
				}
			}
			function debugRunClickEvent() {
				if (utils.isNull($matchText.value)) {
					Qmsg.error("请先输入待匹配的字符串");
					return;
				}
				/* 清空日志 */
				clearLog();
				let netDiskName = ruleJSON.key;
				let netDiskIndex = $select.selectedIndex;
				let selectRegExp = $select.selectedOptions[netDiskIndex]["data-value"];
				log.info(["当前选中的规则: ", selectRegExp]);
				let testCustomRule = {};
				testCustomRule[ruleJSON.key] = [selectRegExp];
				/** @type {string[]} */
				let matchTextList = [];
				NetDiskWorker.handleRegularMatch(
					{
						regular: testCustomRule,
						textList: [$matchText.value],
						matchTextRange: "all",
					},
					(matchData) => {
						matchTextList.push(...matchData.data);
					}
				);
				if (!matchTextList.length) {
					setLog("error", "未成功匹配到数据");
					return;
				}
				matchTextList = NetDiskWorker.uniqueArr(matchTextList);
				setLog("info", "成功匹配到的数据 ==> ", matchTextList);
				matchTextList.forEach((matchText, index) => {
					setLog("success", "当前处理的字符串: " + matchText);
					setLog("success", "当前执行: 对shareCode进行处理获取");
					let shareCode = NetDiskDebug.handleShareCode(
						matchText,
						selectRegExp,
						logCallBack
					);
					if (utils.isNull(shareCode)) {
						return;
					}
					setLog("info", " ");
					setLog("info", `================分割线================`);
					setLog("info", " ");
					setLog("success", "当前执行: 对accessCode进行处理获取");
					let accessCode = NetDiskDebug.handleAccessCode(
						matchText,
						selectRegExp,
						logCallBack
					);
					setLog("info", " ");
					setLog("info", `================分割线================`);
					setLog("info", " ");
					setLog("success", "当前执行: 对uiLinkShow进行处理获取");
					let uiLinkShow = NetDiskDebug.handleLinkShow(
						matchText,
						selectRegExp,
						shareCode,
						accessCode,
						logCallBack
					);
					setLog("info", " ");
					setLog("info", `================分割线================`);
					setLog("info", " ");
					setLog("success", "当前执行: 对blank进行处理获取");
					let blankUrl = NetDiskDebug.handleBlank(
						matchText,
						selectRegExp,
						shareCode,
						accessCode,
						logCallBack
					);
					setLog("info", " ");
					setLog("info", `================分割线================`);
					setLog("info", " ");
					setLog("success", "当前执行: 对copyUrl进行处理获取");
					let copyUrl = NetDiskDebug.handleCopyUrl(
						matchText,
						selectRegExp,
						shareCode,
						accessCode,
						logCallBack
					);
					setLog("success", "执行完毕");
				});
			}
			DOMUtils.on($button, "click", void 0, debugRunClickEvent);
		},
		/**
		 * 上下文环境
		 * @param {NetDiskUserCustomRule} rule
		 */
		getBindContext(rule) {
			function setValue(key, value) {
				let localData = GM_getValue(NetDiskCustomRules.dataKey);
				let ruleData = localData[rule.key];
				ruleData[key] = value;
				GM_setValue(NetDiskCustomRules.dataKey, localData);
			}
			function getValue(key, defaultValue) {
				let localData = GM_getValue(NetDiskCustomRules.dataKey);
				let ruleData = localData[rule.key];
				return ruleData[key] ?? defaultValue;
			}
			function deleteValue(key) {
				let localData = GM_getValue(NetDiskCustomRules.dataKey);
				let ruleData = localData[rule.key];
				Reflect.deleteProperty(ruleData, key);
				GM_setValue(NetDiskCustomRules.dataKey, localData);
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
		 * @param {NetDiskUserCustomRule[]} localRule
		 * @returns {NetDiskRegular}
		 */
		parseRule(localRule) {
			/**
			 *
			 * @param {NetDiskUserCustomRuleRegexp} ruleRegExp
			 */
			function parseRegExp(ruleRegExp) {
				if (typeof ruleRegExp["shareCode"] === "string") {
					ruleRegExp["shareCode"] = new RegExp(ruleRegExp["shareCode"], "ig");
				}
				if (typeof ruleRegExp["shareCodeNeedRemoveStr"] === "string") {
					ruleRegExp["shareCodeNeedRemoveStr"] = new RegExp(
						ruleRegExp["shareCodeNeedRemoveStr"],
						"ig"
					);
				}
				if (typeof ruleRegExp["shareCodeNotMatch"] === "string") {
					ruleRegExp["shareCodeNotMatch"] = new RegExp(
						ruleRegExp["shareCodeNotMatch"],
						"ig"
					);
				}
				if (typeof ruleRegExp["checkAccessCode"] === "string") {
					ruleRegExp["checkAccessCode"] = new RegExp(
						ruleRegExp["checkAccessCode"],
						"ig"
					);
				}
				if (typeof ruleRegExp["accessCode"] === "string") {
					ruleRegExp["accessCode"] = new RegExp(ruleRegExp["accessCode"], "ig");
				}
				if (typeof ruleRegExp["acceesCodeNotMatch"] === "string") {
					ruleRegExp["acceesCodeNotMatch"] = new RegExp(
						ruleRegExp["acceesCodeNotMatch"],
						"ig"
					);
				}
				if (typeof ruleRegExp["paramMatch"] === "string") {
					ruleRegExp["paramMatch"] = new RegExp(ruleRegExp["paramMatch"], "i");
				}
				return ruleRegExp;
			}
			let userRule = {};
			for (const userRuleItem of localRule) {
				let userRegExp = userRuleItem.regexp;
				if (userRuleItem.setting) {
					/** 设置 @type {NetDiskSettingMenuDetails} */
					let viewDetails = {
						type: userRuleItem.setting.name,
						key: userRuleItem.key,
						isUserRule: true,
					};
					let userRegExpOther = {};
					/* 是否启用，设置默认值 */
					this.initDefaultValue(
						`${userRuleItem.key}-enable`,
						Boolean(userRuleItem.setting["enable"])
					);

					viewDetails["enable"] = GM_getValue(`${userRuleItem.key}-enable`);

					userRegExpOther["enable"] = GM_getValue(`${userRuleItem.key}-enable`);

					if (typeof userRuleItem.setting["isBlank"] === "boolean") {
						/* 新标签页打开 */
						viewDetails["isBlank"] = true;
						this.initDefaultValue(
							`${userRuleItem.key}-open-enable`,
							Boolean(userRuleItem.setting["isBlank"])
						);
					}
					if (
						typeof userRuleItem.setting["openBlankWithCopyAccessCode"] ===
						"boolean"
					) {
						/* 跳转时复制访问码 */
						viewDetails["openBlankWithCopyAccessCode"] = true;
						this.initDefaultValue(
							`${userRuleItem.key}-open-blank-with-copy-accesscode`,
							Boolean(userRuleItem.setting["openBlankWithCopyAccessCode"])
						);
					}
					if (typeof userRuleItem.setting["isForward"] === "boolean") {
						/* 直接进行scheme转发链接 */
						viewDetails["isForward"] = true;
						this.initDefaultValue(
							`${userRuleItem.key}-forward-scheme-enable`,
							Boolean(userRuleItem.setting["isForward"])
						);
					}
					if (typeof userRuleItem.setting["schemeUri"] === "boolean") {
						/* scheme转发的字符串格式 */
						viewDetails["schemeUri"] = true;
						this.initDefaultValue(`${userRuleItem.key}-static-scheme-uri`, "");
					}
					if (typeof userRuleItem.setting["checkLinkValidity"] === "boolean") {
						/* 用于验证链接有效性 */
						viewDetails["checkLinkValidity"] = true;
						this.initDefaultValue(
							`${userRuleItem.key}-check-link-valid`,
							Boolean(userRuleItem.setting["checkLinkValidity"])
						);
						userRegExpOther["checkLinkValidity"] = GM_getValue(
							`${userRuleItem.key}-check-link-valid`
						);
					}
					if (
						typeof userRuleItem.setting["innerTextAccessCodeBeforeMaxRange"] ===
						"number"
					) {
						/* text-提取码间隔前的字符长度 */
						viewDetails["innerTextAccessCodeBeforeMaxRange"] =
							userRuleItem.setting["innerTextAccessCodeBeforeMaxRange"];
						this.initDefaultValue(
							`${userRuleItem.key}_innerText_accessCode_before_max_range`,
							viewDetails["innerTextAccessCodeBeforeMaxRange"]
						);
						userRegExpOther["innerTextAccessCodeBeforeMaxRange"] =
							NetDiskLocalData.innerTextAccessCodeBeforeMaxRange(
								userRuleItem.key
							);
					}
					if (
						typeof userRuleItem.setting["innerTextAccessCodeAfterMaxRange"] ===
						"number"
					) {
						/* text-提取码间隔后的字符长度 */
						viewDetails["innerTextAccessCodeAfterMaxRange"] =
							userRuleItem.setting["innerTextAccessCodeAfterMaxRange"];
						this.initDefaultValue(
							`${userRuleItem.key}_innerText_accessCode_after_max_range`,
							viewDetails["innerTextAccessCodeAfterMaxRange"]
						);
						userRegExpOther["innerTextAccessCodeAfterMaxRange"] =
							NetDiskLocalData.innerTextAccessCodeAfterMaxRange(
								userRuleItem.key
							);
					}
					if (
						typeof userRuleItem.setting["innerHTMLAccessCodeBeforeMaxRange"] ===
						"number"
					) {
						/* html-提取码间隔前的字符长度 */
						viewDetails["innerHTMLAccessCodeBeforeMaxRange"] =
							userRuleItem.setting["innerHTMLAccessCodeBeforeMaxRange"];
						this.initDefaultValue(
							`${userRuleItem.key}_innerHTML_accessCode_before_max_range`,
							viewDetails["innerHTMLAccessCodeBeforeMaxRange"]
						);
						userRegExpOther["innerHTMLAccessCodeBeforeMaxRange"] =
							NetDiskLocalData.innerHTMLAccessCodeBeforeMaxRange(
								userRuleItem.key
							);
					}
					if (
						typeof userRuleItem.setting["innerHTMLAccessCodeAfterMaxRange"] ===
						"number"
					) {
						/* html-提取码间隔后的字符长度 */
						viewDetails["innerHTMLAccessCodeAfterMaxRange"] =
							userRuleItem.setting["innerHTMLAccessCodeAfterMaxRange"];
						this.initDefaultValue(
							`${userRuleItem.key}_innerHTML_accessCode_after_max_range`,
							viewDetails["innerHTMLAccessCodeAfterMaxRange"]
						);
						userRegExpOther["innerHTMLAccessCodeAfterMaxRange"] =
							NetDiskLocalData.innerHTMLAccessCodeAfterMaxRange(
								userRuleItem.key
							);
					}
					/**
					 *
					 * @param {NetDiskRegularOption} userRegexp
					 */
					function handleRegExp(userRegexp) {
						if ("enable" in userRegExpOther) {
							userRegexp["enable"] = userRegExpOther["enable"];
						}
						if ("checkLinkValidity" in userRegExpOther) {
							userRegexp["checkLinkValidity"] =
								userRegExpOther["checkLinkValidity"];
						}
						if ("innerTextAccessCodeBeforeMaxRange" in userRegExpOther) {
							userRegexp["link_innerText"] = NetDisk.replaceParam(
								userRuleItem.key,
								{
									innerTextAccessCodeBeforeMaxRange:
										userRegExpOther["innerTextAccessCodeBeforeMaxRange"],
								}
							);
						}
						if ("innerTextAccessCodeAfterMaxRange" in userRegExpOther) {
							userRegexp["link_innerText"] = NetDisk.replaceParam(
								userRuleItem.key,
								{
									innerTextAccessCodeAfterMaxRange:
										userRegExpOther["innerTextAccessCodeAfterMaxRange"],
								}
							);
						}
						if ("innerHTMLAccessCodeBeforeMaxRange" in userRegExpOther) {
							userRegexp["link_innerHTML"] = NetDisk.replaceParam(
								userRuleItem.key,
								{
									innerHTMLAccessCodeBeforeMaxRange:
										userRegExpOther["innerHTMLAccessCodeBeforeMaxRange"],
								}
							);
						}
						if ("innerHTMLAccessCodeAfterMaxRange" in userRegExpOther) {
							userRegexp["link_innerHTML"] = NetDisk.replaceParam(
								userRuleItem.key,
								{
									innerHTMLAccessCodeAfterMaxRange:
										userRegExpOther["innerHTMLAccessCodeAfterMaxRange"],
								}
							);
						}
						return userRegexp;
					}
					if (Array.isArray(userRegExp)) {
						userRegExp = userRegExp.map((userRegexpItem) =>
							handleRegExp(userRegexpItem)
						);
					} else {
						handleRegExp(userRegExp);
					}
					if (this.$data.settingViewDetails.has(userRuleItem.key)) {
						this.$data.settingViewDetails.delete(userRuleItem.key);
					}
					this.$data.settingViewDetails.set(userRuleItem.key, viewDetails);
				}
				if (typeof userRuleItem["icon"] === "string") {
					if (userRuleItem["icon"] in NetDiskUI.src.icon) {
						/* 判断icon的值是否是图标字典中的键，是的话让该规则配置它的图标 */
						NetDiskUI.src.icon[userRuleItem["key"]] =
							NetDiskUI.src.icon[userRuleItem["icon"]];
					} else {
						NetDiskUI.src.icon[userRuleItem["key"]] = userRuleItem["icon"];
					}
				}
				if (Array.isArray(userRegExp)) {
					userRegExp = userRegExp.map((userRegexpItem) => {
						return parseRegExp(userRegexpItem);
					});
				} else {
					parseRegExp(userRegExp);
				}
				if (userRule[userRuleItem.key]) {
					/* 已存在相同key规则，追加新的 */
					userRule[userRuleItem.key].push(userRegExp);
				} else {
					if (Array.isArray(userRegExp)) {
						userRule[userRuleItem.key] = userRegExp;
					} else {
						userRule[userRuleItem.key] = [userRegExp];
					}
				}
				const AsyncFunction = Object.getPrototypeOf(
					async function () {}
				).constructor;
				if (typeof userRuleItem.checkLinkValidityFunction === "string") {
					try {
						if (NetDiskCheckLinkValidity.netDisk[userRuleItem.key] == null) {
							NetDiskCheckLinkValidity.netDisk[userRuleItem.key] = {};
						}
						NetDiskCheckLinkValidity.netDisk[userRuleItem.key].init =
							new AsyncFunction(
								"netDiskIndex",
								"shareCode",
								"accessCode",
								userRuleItem.checkLinkValidityFunction
							).bind(this.getBindContext(userRuleItem));
					} catch (error) {
						log.error(error);
					}
				}
				if (typeof userRuleItem.AuthorizationFunction === "string") {
					try {
						NetDiskAuthorization.netDisk[userRuleItem.key] = new AsyncFunction(
							userRuleItem.AuthorizationFunction
						).bind(this.getBindContext(userRuleItem));
					} catch (error) {
						log.error(error);
					}
				}
				if (typeof userRuleItem.AutoFillAccessCodeFunction === "string") {
					try {
						NetDiskAutoFillAccessCode.netDisk[userRuleItem.key] =
							new AsyncFunction(
								"netDiskInfo",
								userRuleItem.AutoFillAccessCodeFunction
							).bind(this.getBindContext(userRuleItem));
					} catch (error) {
						log.error(error);
					}
				}
				if (typeof userRuleItem.parseFunction === "string") {
					try {
						NetDiskParse.netDisk[userRuleItem.key] = new Function(
							userRuleItem.parseFunction
						).bind(this.getBindContext(userRuleItem));
					} catch (error) {
						log.error(error);
					}
				}
			}
			return userRule;
		},
		/**
		 * 获取设置菜单配置
		 */
		getSettingViewDetails() {
			let viewDetailsList = [];
			this.$data.settingViewDetails.forEach((value) => {
				viewDetailsList.push(value);
			});
			return viewDetailsList;
		},
		/**
		 * 初始化默认值
		 */
		initDefaultValue(key, value) {
			if (GM_getValue(key) == null) {
				GM_setValue(key, value);
			}
		},
		/**
		 * 获取模板规则
		 * @returns
		 */
		getTemplateRule() {
			/**
			 * @type {NetDiskUserCustomRule}
			 */
			let templateRule = {
				key: "规则名",
				icon: "图标链接或base64图片",
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
					name: "名字",
					enable: true,
					isBlank: true,
					openBlankWithCopyAccessCode: true,
				},
			};
			return this.getFormatRule(templateRule);
		},
		/**
		 * 添加规则
		 * @param {NetDiskUserCustomRule} userRule
		 */
		addRule(userRule) {
			let localRule = this.getRule();
			localRule.push(userRule);
			GM_setValue(NetDiskCustomRules.key, localRule);
		},
		/**
		 * 设置规则到本地
		 * @param {string} oldRuleKey 旧规则的键名
		 * @param {NetDiskUserCustomRule[]|NetDiskUserCustomRule} userRule
		 */
		setRule(oldRuleKey, userRule) {
			if (Array.isArray(userRule)) {
				GM_setValue(NetDiskCustomRules.key, userRule);
			} else {
				let localRule = this.getRule();
				let findRuleIndex = localRule.findIndex(
					(item) => item.key === oldRuleKey
				);
				if (findRuleIndex !== -1) {
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
		deleteRule(ruleKey) {
			let localRule = this.getRule();
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
			GM_deleteValue(NetDiskCustomRules.key);
		},
		/**
		 * 获取规则
		 * @param {?string} key
		 * @returns {(NetDiskUserCustomRule|NetDiskUserCustomRule)[]}
		 */
		getRule(key) {
			if (typeof key === "string") {
				return GM_getValue(NetDiskCustomRules.key, []).find(
					(item) => item.key === key
				);
			}
			return GM_getValue(NetDiskCustomRules.key, []);
		},
		/**
		 * 获取格式化后的规则
		 * @param {?string} rule
		 */
		getFormatRule(rule) {
			return JSON.stringify(rule || this.getRule(), void 0, 4);
		},
	};

	/** 弹窗UI界面 */
	const NetDiskUI = {
		/** 元素对象实例 */
		Alias: {
			/**
			 * 链接弹窗的对象
			 * @type {PopsCallResult}
			 */
			uiLinkAlias: void 0,
			/**
			 * 历史匹配记录弹窗的对象
			 * @type {PopsCallResult}
			 */
			historyAlias: void 0,
			/**
			 * 设置弹窗的对象
			 */
			settingAlias: void 0,
		},
		/**
		 * 已匹配到的网盘图标字典
		 * @type {Set<string>}
		 */
		isMatchedNetDiskIconMap: new Set(),
		/**
		 * 高度和宽度大小
		 */
		size: parseInt(GM_getValue("size", 50)),
		/**
		 * 按钮透明度
		 */
		opacity: parseFloat(GM_getValue("opacity", 1)),
		/**
		 * 是否正在循环切换按钮背景
		 */
		isSwitchRandomBackground: false,
		/**
		 * 是否默认弹窗可以拖拽
		 */
		defaultPCDrag: false,
		/**
		 * 是否默认弹窗拖拽距离
		 */
		defaultPCDragLimit: true,
		/**
		 * 是否默认开启亚克力效果
		 */
		defaultPopsAcrylic: false,
		/**
		 * 点击弹窗遮罩层是否可以关闭弹窗
		 */
		defaultClickMaskToCloseDialog: false,
		/**
		 * 是否默认禁用弹窗弹出后背景可以滚动
		 */
		defaultForbiddenScroll: false,
		/**
		 * 默认弹窗动画
		 */
		defaultAnimation: "pops-anim-fadein-zoom",
		/**
		 * folder默认排序的属性名
		 */
		defaultSortName: "fileName",
		/**
		 * folder是否降序排序
		 */
		defaultSortDesc: false,
		/**
		 * 弹窗的配置
		 * 规定格式
		 * {
		 *  PC:{
		 *    width: "",
		 *    height: "",
		 *  },
		 *  Mobile: {
		 *    width: "",
		 *    height: "",
		 *  }
		 * }
		 */
		popsStyle: {
			/**
			 * 天翼云需要登录的提示
			 */
			tianYiYunLoginTip: {
				PC: {
					width: "30vw",
					height: "280px",
				},
				Mobile: {
					width: "80vw",
					height: "250px",
				},
			},
			/**
			 * 坚果云需要登录的提示
			 */
			jianGuoYunLoginTip: {
				PC: {
					width: "350px",
					height: "200px",
				},
				Mobile: {
					width: "350px",
					height: "200px",
				},
			},
			/**
			 * 设置
			 */
			settingView: {
				PC: {
					width: "800px",
					height: "600px",
				},
				Mobile: {
					width: "92vw",
					height: "80vh",
				},
			},
			/**
			 * 设置默认值的界面
			 */
			setDefaultValueView: {
				PC: {
					width: "350px",
					height: "200px",
				},
				Mobile: {
					width: "350px",
					height: "200px",
				},
			},
			/**
			 * (主)网盘链接界面
			 */
			mainView: {
				PC: {
					width: "500px",
					height: "100%",
				},
				Mobile: {
					width: "88vw",
					height: "50vh",
				},
			},
			/**
			 * (主)网盘链接界面-小窗
			 */
			mainViewSmallWindow: {
				PC: {
					width:
						GM_getValue(
							"netdisk-ui-small-window-width",
							NetDiskData.defaultSmallWindowWidth
						) + "px",
					height: "auto",
				},
				Mobile: {
					width:
						GM_getValue(
							"netdisk-ui-small-window-width",
							NetDiskData.defaultSmallWindowWidth
						) + "px",
					height: "auto",
				},
			},
			/**
			 * 单文件直链弹窗
			 */
			oneFileStaticView: {
				PC: {
					width: "550px",
					height: "350px",
				},
				Mobile: {
					width: "88vw",
					height: "300px",
				},
			},
			/**
			 * 多文件直链弹窗
			 */
			moreFileStaticView: {
				PC: {
					width: "700px",
					height: "600px",
				},
				Mobile: {
					width: "88vw",
					height: "500px",
				},
			},
			/**
			 * 新密码、错误密码输入弹窗
			 */
			inputNewAccessCodeView: {
				PC: {
					width: "400px",
					height: "200px",
				},
				Mobile: {
					width: "88vw",
					height: "160px",
				},
			},
			/**
			 * 历史存储记录弹窗
			 */
			historyMatchView: {
				PC: {
					width: "50vw",
					height: "65vh",
				},
				Mobile: {
					width: "88vw",
					height: "60vh",
				},
			},
			/**
			 * 自定义规则的弹窗
			 */
			customRulesView: {
				PC: {
					width: "50vw",
					height: "65vh",
				},
				Mobile: {
					width: "88vw",
					height: "60vh",
				},
			},
			/**
			 * 自定义规则的调试视图
			 */
			customRuleDebugView: {
				PC: {
					width: "55vw",
					height: "70vh",
				},
				Mobile: {
					width: "88vw",
					height: "70vh",
				},
			},
			/**
			 * 主动识别的弹窗
			 */
			matchPasteTextView: {
				PC: {
					width: "50vw",
					height: "65vh",
				},
				Mobile: {
					width: "88vw",
					height: "60vh",
				},
			},
			/**
			 * 访问码规则弹窗
			 */
			accessCodeRuleView: {
				PC: {
					width: "50vw",
					height: "65vh",
				},
				Mobile: {
					width: "88vw",
					height: "60vh",
				},
			},
			/**
			 * 访问码规则添加/修改/删除
			 */
			accessCodeRuleEditView: {
				PC: {
					width: "44vw",
					height: "50vh",
				},
				Mobile: {
					width: "70vw",
					height: "45vh",
				},
			},
		},
		src: {
			/**
			 * 图标RESOURCE_ICON
			 * 从图标库中引入并覆盖
			 */
			icon: {},
		},
		/**
		 * 初始化Qmsg的配置
		 */
		initQmsg() {
			Qmsg.config({
				position: GM_getValue("qmsg-position", "top"),
				html: true,
				maxNums: parseInt(GM_getValue("qmsg-maxnums", 3)),
				autoClose: true,
				showClose: false,
				showReverse: GM_getValue("qmsg-showreverse", false),
			});
		},
		/**
		 * 悬浮按钮  双击打开主界面，长按打开设置（不能移动，移动就不打开，只是移动按钮
		 */
		suspension: {
			/** @type {HTMLDivElement} */
			suspensionNode: null,
			/** 是否已显示 */
			isShow: false,
			/** 是否已设置事件 */
			isSetEvent: false,
			/** 是否正在切换背景 */
			isRandBg: false,
			/**
			 * 显示悬浮按钮
			 */
			show() {
				if (!this.isShow) {
					this.isShow = true;
					this.createUI();
					this.setSuspensionPosition();
				}
				if (!this.isSetEvent) {
					this.isSetEvent = true;
					this.setSuspensionEvent();
					this.setResizeEventListener();
				}
				this.backgroundSwitch();
				this.showSuspension();
			},
			showSuspension() {
				this.suspensionNode.style.display = "";
			},
			hideSuspension() {
				this.suspensionNode.style.display = "none";
			},
			/**
			 * 判断当前是否是顶部窗口
			 * @returns {boolean}
			 */
			isTopWindow() {
				return unsafeWindow.self.window === unsafeWindow.top.window;
			},
			/**
			 * 创建UI界面
			 */
			createUI() {
				if (NetDiskUI.size < 15) {
					/* 大小不能小于 15px */
					GM_setValue("size", 15);
					NetDiskUI.size = 15;
				}
				if (NetDiskUI.size > 250) {
					/* 大小不能大于 250px */
					GM_setValue("size", 250);
					NetDiskUI.size = 250;
				}
				if (NetDiskUI.opacity < 0.1) {
					/* 透明度不能小于 0.1 */
					GM_setValue("opacity", 0.1);
					NetDiskUI.opacity = 0.1;
				}
				if (NetDiskUI.opacity > 1.0) {
					/* 透明度不能大于 1.0 */
					GM_setValue("opacity", 1);
					NetDiskUI.opacity = 1;
				}
				let $shadowContainer = DOMUtils.createElement("div", {
					className: "whitesev-suspension-shadow-container",
				});
				let $shadowRoot = $shadowContainer.attachShadow({ mode: "open" });
				this.suspensionNode = DOMUtils.createElement(
					"div",
					{
						id: "whitesevSuspensionId",
						className: "whitesevSuspension",
						innerHTML: `
            <style type="text/css">

            ${this.getCSS()}

            </style>
            <div class="whitesevSuspensionMain">
              <div class="whitesevSuspensionFloor">
                <div class="netdisk"></div>
              </div>
            </div>
            `,
					},
					{
						style: `
            width: ${NetDiskUI.size}px;
            height: ${NetDiskUI.size}px;
            opacity: ${NetDiskUI.opacity}
          `,
					}
				);
				$shadowRoot.appendChild(this.suspensionNode);
				document.body.appendChild($shadowContainer);
			},
			/**
			 * 显示设置
			 */
			showSettingView() {
				if (NetDiskUI.Alias.settingAlias) {
					log.error("设置界面已存在");
					Qmsg.error("设置界面已存在");
					return;
				}
				const that = this;
				/**
				 *
				 * @param {string} text
				 * @param {string} key
				 * @param {boolean} defaultValue
				 * @param {(event:Event,enable:boolean)=>void} callback
				 * @param {string} description
				 * @returns
				 */
				function getSwtichDetail(
					text,
					key,
					defaultValue,
					callback,
					description
				) {
					defaultValue = Boolean(defaultValue);
					return {
						text: text,
						type: "switch",
						description: description,
						attributes: {
							"data-key": key,
							"data-default-value": defaultValue,
						},
						getValue() {
							return Boolean(GM_getValue(key, defaultValue));
						},
						callback(event, value) {
							GM_setValue(key, Boolean(value));
							if (typeof callback === "function") {
								callback(event, value);
							}
						},
					};
				}
				/**
				 *
				 * @param {string} text
				 * @param {string} description
				 * @param {string} key
				 * @param {number} defaultValue
				 * @param {number} min
				 * @param {number} max
				 * @param {?number} step
				 * @param {?(event: PointerEvent,value: number)=> void} callback
				 * @param {?(value: number)=> string|number} getToolTipContent
				 * @returns
				 */
				function getSliderDetail(
					text,
					description,
					key,
					defaultValue,
					min,
					max,
					step,
					callback,
					getToolTipContent
				) {
					return {
						text: text,
						type: "slider",
						description: description,
						attributes: {
							"data-key": key,
							"data-default-value": defaultValue,
						},
						getValue() {
							return GM_getValue(key, defaultValue);
						},
						callback(event, value) {
							GM_setValue(key, value);
							if (typeof callback === "function") {
								callback(event, value);
							}
						},
						getToolTipContent(value) {
							if (typeof getToolTipContent === "function") {
								return getToolTipContent(value);
							} else {
								return value;
							}
						},
						min: min,
						max: max,
						step: step,
					};
				}
				/**
				 *
				 * @param {string} text
				 * @param {string} description
				 * @param {string} key
				 * @param {any} defaultValue
				 * @param {{
				 * text:string,value:string
				 * }[]} data
				 * @param {(event:PointerEvent, isSelectedValue: any, isSelectedText:string)=>void} callback
				 */
				function getSelectDetail(
					text,
					description,
					key,
					defaultValue,
					data,
					callback
				) {
					return {
						text: text,
						type: "select",
						description: description,
						attributes: {
							"data-key": key,
							"data-default-value": defaultValue,
						},
						getValue() {
							return GM_getValue(key, defaultValue);
						},
						callback(event, isSelectedValue, isSelectedText) {
							GM_setValue(key, isSelectedValue);
							if (typeof callback === "function") {
								callback(event, isSelectedValue, isSelectedText);
							}
						},
						data: data,
					};
				}
				/**
				 * @type {PopsPanelContentConfig[]}
				 */
				let contentDetails = [
					{
						id: "netdisk-panel-config-all-setting",
						title: "总设置",
						isDefault: true,
						forms: [
							{
								type: "forms",
								text: "",
								forms: [
									{
										type: "deepMenu",
										text: "Toast",
										forms: [
											{
												type: "forms",
												text: "",
												className: "netdisk-panel-forms-toast",
												forms: [
													getSelectDetail(
														"位置",
														"Toast显示在九宫格的位置，默认: 中间",
														"qmsg-position",
														"top",
														[
															{
																value: "topleft",
																text: "左上角",
															},
															{
																value: "top",
																text: "顶部",
															},
															{
																value: "topright",
																text: "右上角",
															},
															{
																value: "left",
																text: "左边",
															},
															{
																value: "center",
																text: "中间",
															},
															{
																value: "right",
																text: "右边",
															},
															{
																value: "bottomleft",
																text: "左下角",
															},
															{
																value: "bottom",
																text: "底部",
															},
															{
																value: "bottomright",
																text: "右下角",
															},
														],
														NetDiskUI.initQmsg
													),
													getSelectDetail(
														"同时最多显示的数量",
														"默认: 3",
														"qmsg-maxnums",
														3,
														[
															{
																value: 1,
																text: "1",
															},
															{
																value: 2,
																text: "2",
															},
															{
																value: 3,
																text: "3",
															},
															{
																value: 4,
																text: "4",
															},
															{
																value: 5,
																text: "5",
															},
														],
														NetDiskUI.initQmsg
													),
													getSwtichDetail(
														"逆序弹出",
														"qmsg-showreverse",
														false,
														NetDiskUI.initQmsg,
														"默认是自上往下显示Toast，逆序则是自下往上显示Toast"
													),
												],
											},
										],
									},
									{
										type: "deepMenu",
										text: "弹窗",
										forms: [
											{
												className: "netdisk-panel-forms-pops",
												type: "forms",
												text: "",
												forms: [
													getSelectDetail(
														"动画",
														`显示/关闭的动画效果，默认: ${NetDiskUI.defaultAnimation}`,
														"popsAnimation",
														NetDiskUI.defaultAnimation,
														[
															{
																value: "",
																text: "无",
															},
															{
																value: "pops-anim-spread",
																text: "spread",
															},
															{
																value: "pops-anim-shake",
																text: "shake",
															},
															{
																value: "pops-anim-rolling-left",
																text: "rolling-left",
															},
															{
																value: "pops-anim-rolling-right",
																text: "rolling-right",
															},
															{
																value: "pops-anim-slide-top",
																text: "slide-top",
															},
															{
																value: "pops-anim-slide-bottom",
																text: "slide-bottom",
															},
															{
																value: "pops-anim-slide-left",
																text: "slide-left",
															},
															{
																value: "pops-anim-slide-right",
																text: "slide-right",
															},
															{
																value: "pops-anim-fadein",
																text: "fadein",
															},
															{
																value: "pops-anim-fadein-zoom",
																text: "fadein-zoom",
															},
															{
																value: "pops-anim-fadein-alert",
																text: "fadein-alert",
															},
															{
																value: "pops-anim-don",
																text: "don",
															},
															{
																value: "pops-anim-roll",
																text: "roll",
															},
															{
																value: "pops-anim-sandra",
																text: "sandra",
															},
															{
																value: "pops-anim-gather",
																text: "gather",
															},
														]
													),
													getSwtichDetail(
														"点击弹窗遮罩层关闭弹窗",
														"clickMaskToCloseDialog",
														NetDiskUI.defaultClickMaskToCloseDialog,
														void 0,
														"点击遮罩层触发关闭弹窗事件"
													),
													getSwtichDetail(
														"窗口拖拽",
														"pcDrag",
														NetDiskUI.defaultPCDrag,
														void 0,
														"长按标题栏可拖拽移动弹窗"
													),
													getSwtichDetail(
														"限制拖拽距离",
														"pcDragLimit",
														NetDiskUI.defaultPCDragLimit,
														void 0,
														"只能在浏览器的可视窗口内拖动"
													),
													getSwtichDetail(
														"亚克力效果",
														"popsAcrylic",
														NetDiskUI.defaultPopsAcrylic,
														void 0,
														""
													),
												],
											},
										],
									},
									{
										type: "deepMenu",
										text: "文件弹窗",
										forms: [
											{
												type: "forms",
												text: "",
												className: "netdisk-panel-forms-pops-folder",
												forms: [
													getSelectDetail(
														"排序名",
														"当前的规则",
														"pops-folder-sort-name",
														NetDiskUI.defaultSortName,
														[
															{
																value: "fileName",
																text: "文件名",
															},
															{
																value: "latestTime",
																text: "修改时间",
															},
															{
																value: "fileSize",
																text: "大小",
															},
														]
													),
													getSelectDetail(
														"排序规则",
														"当前的规则",
														"pops-folder-sort-is-desc",
														NetDiskUI.defaultSortDesc,
														[
															{
																value: false,
																text: "升序",
															},
															{
																value: true,
																text: "降序",
															},
														]
													),
												],
											},
										],
									},
									{
										type: "deepMenu",
										text: "小图标导航",
										forms: [
											{
												type: "forms",
												text: "",
												forms: [
													getSwtichDetail(
														"点击定位分享码",
														"pops-netdisk-icon-click-event-find-sharecode",
														true,
														NetDiskData.iconDefaultClickEventToFindShareCode,
														"自动滚动页面至包含分享码的元素"
													),
													getSwtichDetail(
														"选中分享码",
														"pops-netdisk-icon-click-event-find-sharecode-with-select",
														true,
														NetDiskData.iconDefaultClickEventToFindShareCodeWithSelect,
														"使用光标选中分享码/元素"
													),
													getSwtichDetail(
														"循环定位",
														"pops-netdisk-icon-click-event-loop-find-sharecode",
														true,
														NetDiskData.iconDefaultClickEventToFindShareCodeByLoop,
														"关闭则是每一个元素只定位一次"
													),
												],
											},
										],
									},
									{
										type: "deepMenu",
										text: "悬浮按钮",
										forms: [
											{
												type: "forms",
												text: "",
												forms: [
													getSliderDetail(
														"大小",
														"悬浮按钮的大小，默认: 50",
														"size",
														50,
														15,
														250,
														void 0,
														(event, value) => {
															NetDiskUI.size = parseInt(value);
															if (NetDiskUI.suspension.isShow) {
																DOMUtils.css(
																	NetDiskUI.suspension.suspensionNode,
																	{
																		width: NetDiskUI.size,
																		height: NetDiskUI.size,
																	}
																);
																NetDiskUI.suspension.setSuspensionPosition();
															}
														},
														(value) => {
															return `${value}px`;
														}
													),
													getSliderDetail(
														"透明度",
														"值越小越透明，默认: 1",
														"opacity",
														1,
														0.1,
														1,
														0.1,
														(event, value) => {
															NetDiskUI.opacity = parseFloat(value);
															if (NetDiskUI.suspension.isShow) {
																DOMUtils.css(
																	NetDiskUI.suspension.suspensionNode,
																	{
																		opacity: NetDiskUI.opacity,
																	}
																);
															}
														}
													),
													getSliderDetail(
														"背景轮播时间",
														"淡入/淡出的时间，默认: 1500",
														"randbg-time",
														1500,
														0,
														10000,
														100,
														void 0,
														(value) => {
															return `${value}ms`;
														}
													),
													getSliderDetail(
														"背景显示时间",
														"图标显示的持续时间，默认: 1200",
														"randbg-show-time",
														1200,
														0,
														10000,
														100,
														void 0,
														(value) => {
															return `${value}ms`;
														}
													),
													getSwtichDetail(
														"吸附边缘",
														"suspended-button-adsorption-edge",
														false,
														void 0,
														"移动悬浮按钮松开后自动吸附边缘"
													),
												],
											},
										],
									},
									{
										type: "deepMenu",
										text: "小窗模式",
										forms: [
											{
												type: "forms",
												text: "",
												className: "netdisk-panel-forms-small-window",
												forms: [
													getSliderDetail(
														"宽度",
														"设置小窗宽度(px)，默认: 250",
														"netdisk-ui-small-window-width",
														NetDiskData.defaultSmallWindowWidth,
														NetDiskData.smallWindowMinWidth,
														NetDiskData.smallWindowMaxWidth,
														1,
														void 0,
														(value) => {
															return `${value}px`;
														}
													),
													getSliderDetail(
														"高度",
														"设置小窗最大高度(px)，默认: 200",
														"netdisk-ui-small-window-max-height",
														NetDiskData.defaultSmallWindowMaxHeight,
														NetDiskData.smallWindowMinMaxHeight,
														NetDiskData.smallWindowMaxMaxHeight,
														1,
														void 0,
														(value) => {
															return `${value}px`;
														}
													),
												],
											},
										],
									},
									{
										type: "deepMenu",
										text: "历史匹配记录",
										forms: [
											{
												type: "forms",
												text: "",
												className: "netdisk-panel-history-match",
												forms: [
													getSelectDetail(
														"排序规则",
														"",
														"netdisk-history-match-ordering-rule",
														"按 更新时间 - 降序",
														[
															{
																value: "按 记录时间 - 升序",
																text: "按 记录时间 - 升序",
															},
															{
																value: "按 记录时间 - 降序",
																text: "按 记录时间 - 降序",
															},
															{
																value: "按 更新时间 - 升序",
																text: "按 更新时间 - 升序",
															},
															{
																value: "按 更新时间 - 降序",
																text: "按 更新时间 - 降序",
															},
														]
													),
													{
														text: "修复存储记录",
														type: "button",
														description:
															"如果【匹配记录】弹窗打不开，可能是存储的数据缺失某些字段，可尝试点击此处进行修复",
														buttonIconIsLoading: false,
														buttonType: "primary",
														buttonText() {
															return "修复";
														},
														callback(event) {
															try {
																const { count, repairCount } =
																	NetDiskUI.netDiskHistoryMatch.checkAndRepairLocalData();
																if (repairCount === 0) {
																	Qmsg.info(`不存在需要修复的数据`);
																} else {
																	Qmsg.success(
																		`共计: ${count} 条，修复${repairCount}条`
																	);
																}
															} catch (error) {
																Qmsg.error("修复异常：" + error.toString());
															}
														},
													},
													getSwtichDetail(
														"保存匹配记录",
														"saveMatchNetDisk",
														false,
														void 0,
														"将匹配到的链接信息进行本地存储，可点击【油猴菜单-⚙ 历史匹配记录】进行查看"
													),
												],
											},
										],
									},
									{
										type: "deepMenu",
										text: "匹配设置",
										forms: [
											{
												type: "forms",
												text: "文本匹配范围",
												forms: [
													getSelectDetail(
														"匹配类型",
														"匹配的文本类型",
														"pageMatchRange",
														"all",
														[
															{
																value: "all",
																text: "全部",
															},
															{
																value: "innerText",
																text: "普通文本",
															},
															{
																value: "innerHTML",
																text: "超文本",
															},
														]
													),
													getSwtichDetail(
														"匹配剪贴板",
														"readClipboard",
														false,
														void 0,
														"Api兼容性查看：<a href='https://caniuse.com/mdn-api_permissions_permission_clipboard-read' target='_blank'>读取剪贴板权限申请</a>、<a href='https://caniuse.com/mdn-api_clipboard_readtext' target='_blank'>直接读取剪贴板</a>"
													),
													getSwtichDetail(
														"匹配当前URL",
														"allowMatchLocationHref",
														false,
														void 0,
														"匹配window.location.href"
													),
												],
											},
											{
												type: "forms",
												text: "观察器",
												forms: [
													getSliderDetail(
														"匹配间隔",
														"匹配文本完毕后的延迟xxx秒允许下一次匹配",
														"delaytime",
														NetDiskData.defaultMatchIntervalTime,
														NetDiskData.matchIntervalMinTime,
														NetDiskData.matchIntervalMaxTime,
														0.1,
														void 0,
														(value) => {
															return `${value}s`;
														}
													),
													getSwtichDetail(
														"添加元素时进行匹配",
														"isAddedNodesToMatch",
														false,
														void 0,
														"当监听到页面添加元素时才进行匹配文本"
													),
													getSwtichDetail(
														"观察器：childList",
														"mutationObserver-childList",
														NetDiskData.default_mutationObserver_childList,
														void 0,
														"子节点的变动（新增、删除或者更改）"
													),
													getSwtichDetail(
														"观察器：characterData",
														"mutationObserver-characterData",
														NetDiskData.default_mutationObserver_characterData,
														void 0,
														"节点内容或节点文本的变动"
													),
													getSwtichDetail(
														"观察器：subtree",
														"mutationObserver-subtree",
														NetDiskData.default_mutationObserver_subtree,
														void 0,
														"是否将观察器应用于该节点的所有后代节点"
													),
												],
											},
										],
									},
									{
										type: "deepMenu",
										text: "功能",
										forms: [
											{
												type: "forms",
												text: "",
												className: "netdisk-panel-forms-function",
												forms: [
													getSelectDetail(
														"行为模式",
														"匹配到链接时触发的UI执行",
														"netdisk-behavior-mode",
														NetDiskData.defaultNetdiskBehaviorMode,
														[
															{
																text: "悬浮按钮+小窗",
																value: "suspension_smallwindow",
															},
															{
																text: "悬浮按钮+大窗",
																value: "suspension_window",
															},
															{
																text: "小窗",
																value: "smallwindow",
															},
														],
														void 0
													),
													getSwtichDetail(
														"自动输入访问码",
														"autoFillAccessCode",
														false,
														void 0,
														"通过主动点击链接跳转时，会自动输入网盘访问码"
													),
													getSwtichDetail(
														"获取重定向后的直链",
														"getTheDirectLinkAfterRedirection",
														false,
														void 0,
														"对获取的链接再进行一次重定向获取链接"
													),
												],
											},
										],
									},
									{
										type: "deepMenu",
										text: "分享码相关",
										forms: [
											{
												type: "forms",
												text: "",
												className: "netdisk-panel-forms-share-code",
												forms: [
													getSliderDetail(
														"相同系数",
														"例如分享码: aaaaaaaabb，它的相同系数是0.8，设置相同系数≥0.8时会被排除",
														"excludeIdenticalSharedCodesCoefficient",
														NetDiskData.defaultExcludeIdenticalSharedCodesCoefficient,
														NetDiskData.excludeIdenticalSharedCodesCoefficientMin,
														NetDiskData.excludeIdenticalSharedCodesCoefficientMax,
														0.01,
														void 0,
														(value) => {
															return value;
														}
													),
													getSwtichDetail(
														"排除分享码",
														"excludeIdenticalSharedCodes",
														false,
														void 0,
														"启用后会根据【相同系数】排除掉匹配到的分享码"
													),
												],
											},
										],
									},
								],
							},
						],
					},
				];

				let shortcutDetails = {
					type: "deepMenu",
					text: "快捷键",
					forms: [
						{
							className: "netdisk-panel-forms-shortcut-keys",
							text: "",
							type: "forms",
							forms: [],
						},
					],
				};
				let shortcurFormsDetailsList = [
					{
						text: "【打开】⚙ 设置",
						key: "netdisk-keyboard-open-setting",
					},
					{
						text: "【打开】⚙ 历史匹配记录",
						key: "netdisk-keyboard-open-history-matching-records",
					},
					{
						text: "【打开】⚙ 访问码规则",
						key: "netdisk-keyboard-open-accesscode-rule",
					},
					{
						text: "【打开】⚙ 用户自定义规则",
						key: "netdisk-keyboard-open-user-rule",
					},
					{
						text: "【打开】⚙ 主动识别文本",
						key: "netdisk-keyboard-open-proactively-recognize-text",
					},
				];
				shortcurFormsDetailsList.forEach((item) => {
					shortcutDetails.forms[0].forms.push({
						text: item.text,
						type: "button",
						attributes: {
							"data-key": item.key,
							"data-default-value": "暂无快捷键",
						},
						buttonIcon: "keyboard",
						buttonIconIsLoading: false,
						buttonType: "default",
						buttonText() {
							return NetDiskShortcut.getShowText(
								this.attributes["data-key"],
								this.attributes["data-default-value"]
							);
						},
						callback(event) {
							NetDiskShortcut.buttonClickCallBack(
								event,
								this.attributes["data-key"],
								this.attributes["data-default-value"]
							);
						},
					});
				});
				contentDetails[0].forms[0].forms.push(shortcutDetails);
				/**
				 * 追加网盘设置
				 */
				function addNetDiskSetting() {
					/**
					 * @type {NetDiskSettingMenuDetails[]}
					 */
					let netDiskDetailsList = [
						{
							type: "百度网盘",
							key: "baidu",
							enable: true,
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							checkLinkValidity: true,
							isForward: true,
							isForwardBlankLink: true,
							schemeUri: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
							ownFormList: [
								{
									text: "第三方解析站",
									type: "forms",
									forms: [
										{
											text: "启用解析站",
											type: "switch",
											description:
												"开源项目：<a href='https://github.com/yuantuo666/baiduwp-php' target='_blank'>https://github.com/yuantuo666/baiduwp-php</a>",
											attributes: {
												"data-key": "baidu-static-enable",
												"data-default-value": false,
											},
											getValue() {
												return Boolean(
													GM_getValue(
														this.attributes["data-key"],
														this.attributes["data-default-value"]
													)
												);
											},
											callback(event, value) {
												GM_setValue(
													this.attributes["data-key"],
													Boolean(value)
												);
											},
										},
										{
											text: "跳转时复制链接",
											type: "switch",
											description: "跳转至解析站时复制百度网盘链接",
											attributes: {
												"data-key": "baidu-baiduwp-php-copy-url",
												"data-default-value": false,
											},
											getValue() {
												return Boolean(
													GM_getValue(
														this.attributes["data-key"],
														this.attributes["data-default-value"]
													)
												);
											},
											callback(event, value) {
												GM_setValue(
													this.attributes["data-key"],
													Boolean(value)
												);
											},
										},
										{
											text: "网址",
											type: "input",
											description: "解析站的网址Url",
											attributes: {
												"data-key": "baidu-baiduwp-php-url",
												"data-default-value": "",
											},
											getValue() {
												return GM_getValue(
													this.attributes["data-key"],
													this.attributes["data-default-value"]
												);
											},
											callback(event, value) {
												GM_setValue(this.attributes["data-key"], value);
											},
											placeholder:
												"使用了baiduwp-php源码的网站，例如：https://www.example.com/",
										},
										{
											text: "表单参数",
											type: "input",
											description: "跳转时携带的参数",
											attributes: {
												"data-key": "baidu-baiduwp-php-post-form",
												"data-default-value": "",
											},
											getValue() {
												return GM_getValue(
													this.attributes["data-key"],
													this.attributes["data-default-value"]
												);
											},
											callback(event, value) {
												GM_setValue(this.attributes["data-key"], value);
											},
											placeholder:
												"POST表单，例如：surl={#shareCode#}&pwd={#accessCode#}&password=",
										},
									],
								},
							],
						},
						{
							type: "蓝奏云",
							key: "lanzou",
							enable: true,
							parseMoreFile: true,
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							checkLinkValidity: true,
							isForward: true,
							isForwardBlankLink: true,
							isForwardDownloadLink: true,
							schemeUri: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
							ownFormList: [
								{
									text: "其它配置",
									type: "forms",
									forms: [
										{
											text: "蓝奏云域名",
											type: "input",
											attributes: {
												"data-key": "lanzou-host-name",
												"data-default-value":
													NetDiskData.lanzou_defaultHostName,
											},
											getValue() {
												return GM_getValue(
													this.attributes["data-key"],
													this.attributes["data-default-value"]
												);
											},
											callback(event, value) {
												GM_setValue(this.attributes["data-key"], value);
											},
											placeholder: `例如：${NetDiskData.lanzou_defaultHostName}`,
										},
									],
								},
							],
						},
						{
							type: "蓝奏云优享",
							key: "lanzouyx",
							enable: true,
							parseMoreFile: true,
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							checkLinkValidity: true,
							isForward: true,
							isForwardDownloadLink: true,
							isForwardBlankLink: true,
							schemeUri: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
						},
						{
							type: "天翼云",
							key: "tianyiyun",
							enable: true,
							parseMoreFile: true,
							parseFileDescription: "需要登录才可以下载",
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							isForward: true,
							isForwardDownloadLink: true,
							isForwardBlankLink: true,
							schemeUri: true,
							checkLinkValidity: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
						},
						{
							type: "中国移动云盘",
							key: "hecaiyun",
							enable: true,
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							isForward: true,
							isForwardBlankLink: true,
							schemeUri: true,
							checkLinkValidity: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
						},
						{
							type: "阿里云",
							key: "aliyun",
							enable: true,
							parseMoreFile: true,
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							isForward: true,
							isForwardDownloadLink: true,
							isForwardBlankLink: true,
							schemeUri: true,
							checkLinkValidity: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
						},
						{
							type: "文叔叔",
							key: "wenshushu",
							enable: true,
							parseOneFile: true,
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							isForward: true,
							isForwardDownloadLink: true,
							isForwardBlankLink: true,
							schemeUri: true,
							checkLinkValidity: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
						},
						{
							type: "奶牛",
							key: "nainiu",
							enable: true,
							parseMoreFile: true,
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							isForward: true,
							isForwardDownloadLink: true,
							isForwardBlankLink: true,
							schemeUri: true,
							checkLinkValidity: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
						},
						{
							type: "123盘",
							key: "_123pan",
							enable: true,
							parseMoreFile: true,
							parseFileDescription: "需要登录才可下载>100MB的文件",
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							isForward: true,
							isForwardDownloadLink: true,
							isForwardBlankLink: true,
							schemeUri: true,
							checkLinkValidity: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
						},
						{
							type: "微云",
							key: "weiyun",
							enable: true,
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							isForward: true,
							isForwardBlankLink: true,
							schemeUri: true,
							checkLinkValidity: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
						},
						{
							type: "迅雷云盘",
							key: "xunlei",
							enable: true,
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							isForward: true,
							isForwardBlankLink: true,
							schemeUri: true,
							checkLinkValidity: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
						},
						{
							type: "115网盘",
							key: "_115pan",
							enable: true,
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							isForward: true,
							isForwardBlankLink: true,
							schemeUri: true,
							checkLinkValidity: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
						},
						{
							type: "城通网盘",
							key: "chengtong",
							enable: true,
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							isForward: true,
							isForwardBlankLink: true,
							schemeUri: true,
							checkLinkValidity: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
						},
						{
							type: "夸克网盘",
							key: "kuake",
							enable: true,
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							isForward: true,
							isForwardBlankLink: true,
							schemeUri: true,
							checkLinkValidity: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
						},
						{
							type: "BT磁力",
							key: "magnet",
							enable: true,
							isBlank: true,
							isForward: true,
							isForwardBlankLink: true,
							schemeUri: true,
						},
						{
							type: "坚果云",
							key: "jianguoyun",
							enable: true,
							parseMoreFile: true,
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							isForward: true,
							isForwardDownloadLink: true,
							isForwardBlankLink: true,
							schemeUri: true,
							checkLinkValidity: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
						},
						{
							type: "OneDrive",
							key: "onedrive",
							enable: true,
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							isForward: true,
							isForwardBlankLink: true,
							schemeUri: true,
							checkLinkValidity: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
						},
						{
							type: "UC网盘",
							key: "uc",
							enable: true,
							parseMoreFile: true,
							isBlank: true,
							openBlankWithCopyAccessCode: true,
							isForward: true,
							isForwardDownloadLink: true,
							isForwardBlankLink: true,
							schemeUri: true,
							checkLinkValidity: true,
							innerTextAccessCodeBeforeMaxRange: 20,
							innerTextAccessCodeAfterMaxRange: 10,
							innerHTMLAccessCodeBeforeMaxRange: 100,
							innerHTMLAccessCodeAfterMaxRange: 15,
						},
					];
					let userCustomDetailsList =
						NetDiskCustomRules.getSettingViewDetails();
					if (userCustomDetailsList.length) {
						/* 添加自定义的设置 */
						netDiskDetailsList = [
							...netDiskDetailsList,
							...userCustomDetailsList,
						];
					}

					netDiskDetailsList.forEach((item) => {
						let formsList = [];
						if (
							typeof item.innerTextAccessCodeBeforeMaxRange === "number" ||
							typeof item.innerTextAccessCodeAfterMaxRange === "number"
						) {
							let matchTextList = [];
							if (typeof item.innerTextAccessCodeBeforeMaxRange === "number") {
								matchTextList.push(
									getSliderDetail(
										"间隔前",
										"提取码间隔前的字符长度",
										"innerText_" + item.key,
										item.innerTextAccessCodeBeforeMaxRange,
										0,
										100
									)
								);
							}
							if (typeof item.innerTextAccessCodeAfterMaxRange === "number") {
								matchTextList.push(
									getSliderDetail(
										"间隔后",
										"提取码间隔后的字符长度",
										"accessCode_after_text_" + item.key,
										item.innerTextAccessCodeAfterMaxRange,
										0,
										100
									)
								);
							}
							if (matchTextList.length) {
								formsList.push({
									text: "提取码文本匹配Text",
									type: "forms",
									forms: matchTextList,
								});
							}
						}
						if (
							typeof item.innerHTMLAccessCodeBeforeMaxRange === "number" ||
							typeof item.innerHTMLAccessCodeAfterMaxRange === "number"
						) {
							let matchTextList = [];
							if (typeof item.innerHTMLAccessCodeBeforeMaxRange === "number") {
								matchTextList.push(
									getSliderDetail(
										"间隔前",
										"提取码间隔前的字符长度",
										"innerHTML_" + item.key,
										item.innerHTMLAccessCodeBeforeMaxRange,
										0,
										500
									)
								);
							}

							if (typeof item.innerHTMLAccessCodeAfterMaxRange === "number") {
								matchTextList.push(
									getSliderDetail(
										"间隔后",
										"提取码间隔后的字符长度",
										"accessCode_after_html_" + item.key,
										item.innerHTMLAccessCodeAfterMaxRange,
										0,
										200
									)
								);
							}
							if (matchTextList.length) {
								formsList.push({
									text: "提取码文本匹配HTML",
									type: "forms",
									forms: matchTextList,
								});
							}
						}
						if (
							item.enable != null ||
							item.isBlank != null ||
							item.parseOneFile != null ||
							item.parseMoreFile != null
						) {
							/**
							 * @type {PopsPanelFormsTotalDetails[]}
							 */
							let functionFormsList = [];
							/* 是否启用 */
							if (item.enable != null) {
								functionFormsList.push({
									text: "启用",
									type: "switch",
									description: "开启可匹配该网盘",
									attributes: {
										"data-key": `${item.key}-enable`,
										"data-default-value": true,
									},
									getValue() {
										return Boolean(
											GM_getValue(
												this.attributes["data-key"],
												this.attributes["data-default-value"]
											)
										);
									},
									callback(event, value) {
										GM_setValue(this.attributes["data-key"], Boolean(value));
										if (item.key != null && NetDisk.regular[item.key] != null) {
											NetDisk.regular[item.key].forEach((__, index) => {
												NetDisk.regular[item.key][index].enable = value;
											});
										}
									},
								});
							}
							/* 新标签页打开 */
							if (typeof item.isBlank === "boolean") {
								functionFormsList.push({
									text: "新标签页打开",
									type: "switch",
									description: "关闭为默认复制链接",
									attributes: {
										"data-key": `${item.key}-open-enable`,
										"data-default-value": false,
									},
									getValue() {
										return Boolean(
											GM_getValue(
												this.attributes["data-key"],
												this.attributes["data-default-value"]
											)
										);
									},
									callback(event, value) {
										GM_setValue(this.attributes["data-key"], Boolean(value));
										if (item.parseOneFile || item.parseMoreFile) {
											let $shadowRoot = event.target.getRootNode();
											/* 新标签页打开和单/文件解析只能开启一个 */
											/**
											 * @type {HTMLInputElement}
											 */
											let checkboxElement = $shadowRoot.querySelector(
												`li[data-key="${item.key}-static-enable"] input[type=checkbox]`
											);
											let checkboxCoreElement = $shadowRoot.querySelector(
												`li[data-key="${item.key}-static-enable"] span.pops-panel-switch__core`
											);
											if (value == true && checkboxElement.checked == true) {
												checkboxCoreElement.click();
											}
										}
									},
								});
							}
							/* 新标签页打开时复制访问码 */
							if (typeof item.openBlankWithCopyAccessCode === "boolean") {
								functionFormsList.push({
									text: "跳转时复制访问码",
									type: "switch",
									description:
										"作用于【新标签页打开】且存在访问码就复制到剪贴板",
									attributes: {
										"data-key": `${item.key}-open-blank-with-copy-accesscode`,
										"data-default-value": false,
									},
									getValue() {
										return Boolean(
											GM_getValue(
												this.attributes["data-key"],
												this.attributes["data-default-value"]
											)
										);
									},
									callback(event, value) {
										GM_setValue(this.attributes["data-key"], Boolean(value));
									},
								});
							}
							/* 单文件解析|文件解析 */
							if (item.parseOneFile || item.parseMoreFile) {
								functionFormsList.push({
									text: `${item.parseOneFile ? "单文件解析" : "文件解析"}`,
									type: "switch",
									description: item["parseFileDescription"] || "解析网盘链接",
									attributes: {
										"data-key": `${item.key}-static-enable`,
										"data-default-value": false,
									},
									getValue() {
										return Boolean(
											GM_getValue(
												this.attributes["data-key"],
												this.attributes["data-default-value"]
											)
										);
									},
									callback(event, value) {
										GM_setValue(this.attributes["data-key"], Boolean(value));
										if (item.isBlank) {
											let $shadowRoot = event.target.getRootNode();
											/* 新标签页打开和单/文件解析只能开启一个 */
											/**
											 * @type {HTMLInputElement}
											 */
											let checkboxElement = $shadowRoot.querySelector(
												`li[data-key="${item.key}-open-enable"] input[type=checkbox]`
											);
											let checkboxCoreElement = $shadowRoot.querySelector(
												`li[data-key="${item.key}-open-enable"] span.pops-panel-switch__core`
											);
											if (value == true && checkboxElement.checked == true) {
												checkboxCoreElement.click();
											}
										}
									},
								});
							}

							/* 验证链接有效性 */
							if (typeof item.checkLinkValidity === "boolean") {
								functionFormsList.push({
									text: `验证链接有效性`,
									type: "switch",
									description: "自动请求链接，判断该链接是否有效",
									attributes: {
										"data-key": `${item.key}-check-link-valid`,
										"data-default-value": false,
									},
									getValue() {
										return Boolean(
											GM_getValue(
												this.attributes["data-key"],
												this.attributes["data-default-value"]
											)
										);
									},
									callback(event, value) {
										GM_setValue(this.attributes["data-key"], Boolean(value));
									},
								});
							}

							formsList.push({
								text: "功能",
								type: "forms",
								forms: functionFormsList,
							});
						}

						/* Scheme转发直链 */
						if (item.isForward) {
							/**
							 * @type {import("@whitesev/pops/dist/types/src/components/panel/indexType").PopsPanelFormsTotalDetails[]}
							 */
							let functionFormsList = [
								{
									text: "启用",
									type: "switch",
									description: "开启后可进行scheme uri转发",
									attributes: {
										"data-key": `${item.key}-forward-scheme-enable`,
										"data-default-value": false,
									},
									getValue() {
										return Boolean(
											GM_getValue(
												this.attributes["data-key"],
												this.attributes["data-default-value"]
											)
										);
									},
									callback(event, value) {
										GM_setValue(this.attributes["data-key"], Boolean(value));
									},
								},
							];
							if (typeof item.isForwardDownloadLink === "boolean") {
								functionFormsList.push({
									text: "转发直链",
									type: "switch",
									description: "对解析的直链进行scheme转换",
									attributes: {
										"data-key": `${item.key}-forward-download-link-enable`,
										"data-default-value": false,
									},
									getValue() {
										return Boolean(
											GM_getValue(
												this.attributes["data-key"],
												this.attributes["data-default-value"]
											)
										);
									},
									callback(event, value) {
										GM_setValue(this.attributes["data-key"], Boolean(value));
									},
								});
							}
							if (typeof item.isForwardBlankLink === "boolean") {
								functionFormsList.push({
									text: "转发新标签页链接",
									type: "switch",
									description: "对新标签页打开的链接进行scheme转换",
									attributes: {
										"data-key": `${item.key}-forward-blank-link-enable`,
										"data-default-value": false,
									},
									getValue() {
										return Boolean(
											GM_getValue(
												this.attributes["data-key"],
												this.attributes["data-default-value"]
											)
										);
									},
									callback(event, value) {
										GM_setValue(this.attributes["data-key"], Boolean(value));
									},
								});
							}

							/* Scheme的Uri链接 */
							if ("schemeUri" in item) {
								functionFormsList.push({
									text: "Uri链接",
									type: "input",
									description: "自定义的Scheme的Uri链接",
									attributes: {
										"data-key": `${item.key}-static-scheme-uri`,
										"data-default-value": "",
									},
									getValue() {
										return GM_getValue(
											this.attributes["data-key"],
											this.attributes["data-default-value"]
										);
									},
									callback(event, value) {
										GM_setValue(this.attributes["data-key"], value);
									},
									placeholder:
										"jumpwsv://go?package=xx&activity=xx&intentAction=xx&intentData=xx&intentExtra=xx",
								});
							}
							formsList.push({
								text: "Scheme Uri转发",
								type: "forms",
								forms: functionFormsList,
							});
						}
						if (item.ownFormList) {
							formsList = formsList.concat(item.ownFormList);
						}

						let asideTitle = item.key;
						if (item.key in NetDiskUI.src.icon) {
							if (pops.isPhone()) {
								asideTitle = /*html*/ `
								<div style="
									width: 20px;
									height: 20px;
									background: url(${NetDiskUI.src.icon[item.key]}) no-repeat;
									background-size: 100% 100%;
									">`;
							} else {
								asideTitle = /*html*/ `
								<div style="
									width: 20px;
									height: 20px;
									background: url(${NetDiskUI.src.icon[item.key]}) no-repeat;
									background-size: 100% 100%;
									"></div>
								<div style="margin-left: 4px;">${item.type}</div>`;
							}
						}
						let headerTitleText = item.type;
						if (item.isUserRule) {
							headerTitleText += /*html*/ `<div class="netdisk-custom-rule-edit" data-key="${item.key}" data-type="${item.type}">${pops.config.iconSVG.edit}</div>`;
							headerTitleText += /*html*/ `<div class="netdisk-custom-rule-delete" data-key="${item.key}" data-type="${item.type}">${pops.config.iconSVG.delete}</div>`;
						}
						contentDetails.push({
							id: "netdisk-panel-config-" + item.key,
							title: asideTitle,
							headerTitle: headerTitleText,
							attributes: {
								"data-key": item.key,
							},
							forms: formsList,
						});
					});
				}
				addNetDiskSetting();

				NetDiskUI.Alias.settingAlias = NetDiskPops.panel(
					{
						title: {
							text: `${GM_info?.script?.name || "网盘链接识别"}-设置`,
							position: "center",
						},
						content: contentDetails,
						btn: {
							close: {
								enable: true,
								callback(event) {
									event.close();
									NetDiskUI.Alias.settingAlias = void 0;
								},
							},
						},
						mask: {
							clickCallBack(originalRun) {
								originalRun();
								NetDiskUI.Alias.settingAlias = void 0;
							},
						},
						class: "whitesevPopSetting",
						style: /*css*/ `
						div[class^="netdisk-custom-rule-"]{
							display: flex;
							align-items: center;
							margin-left: 10px;
							cursor: pointer;
						}
						div[class^="netdisk-custom-rule-"] svg,
						div[class^="netdisk-custom-rule-"] svg{
							width: 1.2em;
							height: 1.2em;
						}
						`,
					},
					NetDiskUI.popsStyle.settingView
				);
				DOMUtils.on(
					NetDiskUI.Alias.settingAlias.$shadowRoot,
					"click",
					".netdisk-custom-rule-edit",
					function (event) {
						let ruleKey = event.target.getAttribute("data-key");
						let ruleName = event.target.getAttribute("data-type");
						NetDiskCustomRules.showUI(true, ruleKey);
					}
				);

				DOMUtils.on(
					NetDiskUI.Alias.settingAlias.$shadowRoot,
					"click",
					".netdisk-custom-rule-delete",
					function (event) {
						let ruleKey = event.target.getAttribute("data-key");
						let ruleName = event.target.getAttribute("data-type");
						NetDiskPops.alert({
							title: {
								text: "提示",
								position: "center",
							},
							content: {
								text: `确定删除自定义规则 ${ruleName}(${ruleKey}) 吗？`,
							},
							btn: {
								ok: {
									callback(okEvent) {
										let deleteStatus = NetDiskCustomRules.deleteRule(ruleKey);
										if (deleteStatus) {
											let asideElement =
												NetDiskUI.Alias.settingAlias.$shadowRoot.querySelector(
													`.pops-panel-aside > ul > li[data-key="${ruleKey}"]`
												);
											if (asideElement.previousElementSibling) {
												asideElement.previousElementSibling.click();
											} else if (asideElement.nextElementSibling) {
												asideElement.nextElementSibling.click();
											}
											asideElement?.remove();
											Qmsg.success("删除成功");
											okEvent.close();
										} else {
											Qmsg.error("删除自定义规则失败");
										}
									},
								},
							},
						});
					}
				);
			},
			/**
			 * 设置 悬浮按钮所有事件
			 */
			setSuspensionEvent() {
				let that = this;
				let needDragElement = NetDiskUI.suspension.suspensionNode;
				let dragNode = new AnyTouch(needDragElement);
				/** @type {?number[]} */
				let netDiskLinkViewTimer = void 0;
				let moveFlag = false;
				/* 是否是双击 */
				let isDouble = false;
				/* 点击元素，left偏移 */
				let clickElementLeftOffset = 0;
				/* 点击元素，top偏移 */
				let clickElementTopOffset = 0;
				/* 设置悬浮按钮 按下事件 */
				dragNode.on("pan", function (event) {
					if (!moveFlag) {
						moveFlag = true;
						let rect = needDragElement.getBoundingClientRect();
						clickElementLeftOffset = event.x - rect.left;
						clickElementTopOffset = event.y - rect.top;
						DOMUtils.css(needDragElement, {
							cursor: "move",
							transition: "none",
						});
					}
					/**
					 * 移动
					 */
					if (event.phase === "move") {
						/* 悬浮按钮大小不能超过250px */
						/* left偏移最大值 */
						let maxLeftOffset = DOMUtils.width(globalThis) - NetDiskUI.size;
						/* top偏移的最大值 */
						let maxTopOffset = DOMUtils.height(globalThis) - NetDiskUI.size;
						/* 当前移动的left偏移 */
						let currentSuspensionLeftOffset = event.x - clickElementLeftOffset;
						/* 当前移动的top偏移 */
						let currentSuspensionTopOffset = event.y - clickElementTopOffset;
						/* 不允许超过窗口最大宽度 */
						currentSuspensionLeftOffset =
							currentSuspensionLeftOffset > maxLeftOffset
								? maxLeftOffset
								: currentSuspensionLeftOffset;
						/* 不允许超过窗口最大高度 */
						currentSuspensionTopOffset =
							currentSuspensionTopOffset > maxTopOffset
								? maxTopOffset
								: currentSuspensionTopOffset;
						/* 不允许小于0 */
						currentSuspensionLeftOffset =
							currentSuspensionLeftOffset < 0 ? 0 : currentSuspensionLeftOffset;
						/* 不允许小于0 */
						currentSuspensionTopOffset =
							currentSuspensionTopOffset < 0 ? 0 : currentSuspensionTopOffset;
						if (NetDiskUI.suspension.isTopWindow()) {
							GM_setValue("suspensionX", currentSuspensionLeftOffset);
							GM_setValue("suspensionY", currentSuspensionTopOffset);
						}
						DOMUtils.css(needDragElement, {
							left: currentSuspensionLeftOffset + "px",
							top: currentSuspensionTopOffset + "px",
						});
					}

					/**
					 * 停止移动
					 */
					if (event.phase === "end") {
						moveFlag = false;
						DOMUtils.css(needDragElement, {
							cursor: "auto",
						});
						/* 获取当前悬浮按钮left偏移 */
						let currentSuspensionLeftOffset = parseInt(
							DOMUtils.css(needDragElement, "left")
						);
						if (GM_getValue("suspended-button-adsorption-edge")) {
							let setCSSLeft = 0;
							/* 判断悬浮按钮是否在右边区域 */
							if (
								currentSuspensionLeftOffset >=
								DOMUtils.width(globalThis) / 2
							) {
								/* 设置悬浮按钮的left偏移 */
								setCSSLeft = DOMUtils.width(globalThis) - NetDiskUI.size;
								if (NetDiskUI.suspension.isTopWindow()) {
									GM_setValue("isRight", true);
								}
							} else {
								if (NetDiskUI.suspension.isTopWindow()) {
									GM_setValue("isRight", false);
								}
							}
							if (NetDiskUI.suspension.isTopWindow()) {
								GM_setValue("suspensionX", setCSSLeft);
							}
							DOMUtils.css(needDragElement, {
								left: setCSSLeft + "px",
							});
						}
						DOMUtils.css(needDragElement, {
							transition: "left 300ms ease 0s",
						});
					}
				});
				/* 设置悬浮按钮 点击/按下事件 */
				dragNode.on(["click", "tap"], function (event) {
					clearTimeout(netDiskLinkViewTimer);
					netDiskLinkViewTimer = void 0;
					if (isDouble) {
						isDouble = false;
						/* 判定为双击 */
						NetDiskUI.suspension.showSettingView();
					} else {
						netDiskLinkViewTimer = setTimeout(() => {
							isDouble = false;
							if (
								NetDiskUIMenuData.netdiskBehaviorMode.includes("smallwindow")
							) {
								GM_setValue(
									"current_suspension_smallwindow_mode",
									"smallwindow"
								);
								NetDiskUI.suspension.hideSuspension();
							}
							NetDiskUI.view.show();
						}, 200);
						isDouble = true;
					}
				});
				NetDiskUI.setGlobalRightClickMenu(needDragElement);
			},
			/**
			 * 设置window的resize事件监听，来重新设置悬浮按钮的位置
			 */
			setResizeEventListener() {
				DOMUtils.on(globalThis, "resize", void 0, () => {
					let activeElement = document.activeElement;
					if (utils.isPhone()) {
						if (["input", "textarea"].includes(activeElement.localName)) {
							/* 可能是移动端的输入框弹出的键盘导致的resize */
							return;
						} else if (
							(activeElement.hasAttribute("contenteditable") &&
								activeElement.getAttribute("contenteditable") === "true") ||
							activeElement.closest("[contenteditable='true']")
						) {
							/* 可能是移动端的输入框弹出的键盘导致的resize */
							return;
						} else if (!document.hasFocus()) {
							/* 页面失焦 */
							return;
						}
					}
					this.setSuspensionPosition();
				});
			},
			/**
			 * 设置悬浮按钮位置
			 */
			setSuspensionPosition() {
				/* 最大的left偏移*/
				let maxLeftOffset = DOMUtils.width(globalThis) - NetDiskUI.size;
				/* 最大的top偏移 */
				let maxTopOffset = DOMUtils.height(globalThis) - NetDiskUI.size;
				/* 默认的left偏移（悬浮按钮在右边中间） */
				let defaultLeftOffset = maxLeftOffset;
				/* 默认的top偏移（悬浮按钮在右边中间） */
				let defaultTopOffset = maxTopOffset / 2;
				/* 用户自己拖动设置的悬浮按钮left偏移 */
				let userSetLeftOffset = GM_getValue("suspensionX", defaultLeftOffset);

				/* 用户自己拖动设置的悬浮按钮top偏移 */
				let userSetTopOffset = GM_getValue("suspensionY", defaultTopOffset);

				if (GM_getValue("suspended-button-adsorption-edge")) {
					/* 如果isRight为true，悬浮按钮放到最右边，否则最左边 */
					if (GM_getValue("isRight")) {
						userSetLeftOffset = maxLeftOffset;
					} else {
						userSetLeftOffset = 0;
					}
					/* 如果用户设置的top偏移超出最大的top偏移，那么设置用户的偏移为默认的最大top偏移 */
					if (userSetTopOffset > maxTopOffset) {
						userSetTopOffset = maxTopOffset;
					} else if (userSetTopOffset < 0) {
						/* 如果用户设置的top偏移为负的，那么是超出边界，归位设置为0 */
						userSetTopOffset = 0;
					}

					if (NetDiskUI.suspension.isTopWindow()) {
						/* 当前窗口是顶部窗口，才可以保存移动的值 */
						GM_setValue("suspensionX", userSetLeftOffset);
						GM_setValue("suspensionY", userSetTopOffset);
					}
				}
				DOMUtils.css(NetDiskUI.suspension.suspensionNode, {
					left: userSetLeftOffset + "px",
					top: userSetTopOffset + "px",
				});
			},
			getCSS() {
				return `
					.whitesevSuspension{
						top: 0;
						position:fixed;
						right:10px;
						border-radius: 12px;
						z-index:4000;
					}
					.whitesevSuspension .whitesevSuspensionMain{
						background:#fff;
						border:1px solid #f2f2f2;
						box-shadow:0 0 15px #e4e4e4;
						box-sizing:border-box;
						border-radius: inherit;
						height: inherit;
						width: inherit;
					}
					.whitesevSuspension .whitesevSuspensionFloor{
						border-bottom:1px solid #f2f2f2;
						position:relative;
						box-sizing:border-box;
						border-radius: inherit;
						height: inherit;
						width: inherit;
					}
					.whitesevSuspension .whitesevSuspensionFloor .netdisk{
						background-position:center center;
						background-size:115% 115%;
						background-repeat:no-repeat;
						display:flex;
						align-items:center;
						justify-content:center;
						border-radius: inherit;
						height: inherit;
						width: inherit;
					}
					.whitesevSuspension .whitesevSuspensionFloor .netdisk:hover{
						transition:all 300ms linear;
						background-color:#e4e4e4;
						transform:scale(1.1);
					}
					.whitesevPop-content p[pop]{
						height: 100%;
					}
				`;
			},
			/**
			 * 悬浮按钮背景轮播 效果为淡入淡出
			 */
			backgroundSwitch() {
				if (this.isRandBg) {
					return;
				}
				/**
				 * 获取随机背景的数组
				 * @returns {Array}
				 */
				function getRandBgList() {
					let resultList = [];
					NetDiskUI.isMatchedNetDiskIconMap.forEach((item) => {
						resultList = [...resultList, NetDiskUI.src.icon[item]];
					});
					return resultList;
				}
				/**
				 * 进行切换 淡入淡出
				 * @param {number} fadeTime 淡入\淡出的时间
				 * @param {string} currentBackgroundSrc 当前的背景资源
				 */
				function startSwitch(fadeTime, currentBackgroundSrc) {
					currentList = getRandBgList();
					DOMUtils.fadeOut(randBgNode, fadeTime, function () {
						currentIndex++;
						currentIndex = currentIndex < currentList.length ? currentIndex : 0;
						currentBackgroundSrc = currentList[currentIndex];
						DOMUtils.css(
							randBgNode,
							"background-image",
							`url(${currentBackgroundSrc})`
						);
						DOMUtils.fadeIn(randBgNode, fadeTime, function () {
							setTimeout(() => {
								startSwitch(
									parseInt(GM_getValue("randbg-time", switchBgTime)),
									currentBackgroundSrc
								);
							}, parseInt(GM_getValue("randbg-show-time", switchBgShowTime)));
						});
					});
				}
				let currentList = [];
				let currentIndex = 0;
				let switchBgTime = 1500; /* 淡入或淡出的持续时间 */
				let switchBgShowTime = 1200; /* 淡入或淡出后的延迟切换时间 */
				currentList = getRandBgList();
				let randBgSrc = currentList[currentIndex];
				let randBgNode = NetDiskUI.suspension.suspensionNode.querySelector(
					".whitesevSuspension .netdisk"
				);
				DOMUtils.css(randBgNode, "background-image", `url(${randBgSrc})`);
				if (
					currentList.length < 2 ||
					GM_getValue("randbg-time", switchBgTime) <= 0
				) {
					/* 只有一个的话或淡入/淡出的时间<=0 就不进行背景切换 */
					return;
				}
				this.isRandBg = true;

				startSwitch(
					parseInt(GM_getValue("randbg-time", switchBgTime)),
					randBgSrc
				);
			},
		},
		/**
		 * 主视图
		 */
		view: {
			show() {
				if (!NetDiskUI.Alias.uiLinkAlias) {
					this.createView();
					NetDiskUI.setRightClickMenu(
						NetDiskUI.Alias.uiLinkAlias.$shadowRoot,
						".whitesevPop .netdisk-url a"
					);
					this.registerIconGotoPagePosition(
						NetDiskUI.Alias.uiLinkAlias.$shadowRoot
					);
					this.setNetDiskUrlClickEvent(
						NetDiskUI.Alias.uiLinkAlias.$shadowRoot,
						".netdisk-url a"
					);
					NetDiskUI.setGlobalRightClickMenu(
						NetDiskUI.Alias.uiLinkAlias.$shadowRoot.querySelector(
							".pops .pops-alert-title > p"
						)
					);
				} else {
					NetDiskUI.Alias.uiLinkAlias.show();
				}
			},
			getCSS() {
				return `
        .netdisk-url-box{
          border-bottom: 1px solid #e4e6eb;
        }
        .netdisk-url-div{display:flex;align-items:center;width:100%;padding:5px 0px 5px 0px}
        .netdisk-icon{display:contents}
        .netdisk-icon .netdisk-icon-img{
          cursor: pointer;
          width:28px;
          height:28px;
          min-width:28px;
          min-height:28px;
          font-size:0.8em;
          margin: 0px 10px;
        }
        .netdisk-url-div .netdisk-icon,
        .netdisk-url-div .netdisk-status{
          flex: 0 0 auto;
        }
        .netdisk-url-div .netdisk-url{
          flex: 1;
        }
        .netdisk-icon .netdisk-icon-img{
          border-radius: 10px;
          box-shadow: 0 .3px .6px rgb(0 0 0 / 6%),0 .7px 1.3px rgb(0 0 0 / 8%),0 1.3px 2.5px rgb(0 0 0 / 10%),0 2.2px 4.5px rgb(0 0 0 / 12%),0 4.2px 8.4px rgb(0 0 0 / 14%),0 10px 20px rgb(0 0 0 / 20%)
        }
        .netdisk-status[data-check-failed]{
          padding: 5px 5px;
        }
        .netdisk-url{padding:5px 5px;}
        .netdisk-url a {
          color: #ff4848!important;
          min-height: 28px;
          overflow-x: hidden;
          overflow-y: auto;
          font-size: 0.8em;
          border: none;
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: 0px;
          word-break: break-word;
          text-align: left;
        }
        .netdisk-status{
          display: none;
        }
        .netdisk-status[data-check-valid]{
          display: flex;
          align-items: center;
          width: 15px;
          height: 15px;
        }
        .netdisk-status[data-check-valid="failed"]{
          color: red;
        }
        .netdisk-status[data-check-valid="error"]{
          cursor: pointer;
        }
        .netdisk-status[data-check-valid="success"]{
          color: green;
        }
        .netdisk-status[data-check-valid="loading"] svg{
          animation: rotating 2s linear infinite;
        }
        .netdisk-url-box:has(.netdisk-status[data-check-valid="failed"]){
          text-decoration: line-through;
        }
        .whitesevPop-whitesevPopSetting :focus-visible{outline-offset:0;outline:0}
        .netdisk-url a[isvisited=true]{color:#8b8888!important}
        .netdisk-url a:active{box-shadow:0 0 0 1px #616161 inset}
        .netdisk-url a:focus-visible{outline:0}
        .whitesevPop-content p[pop]{text-indent:0}
        .whitesevPop-button[type=primary]{border-color:#2d8cf0;background-color:#2d8cf0}
				`;
			},
			/**
			 * 创建视图
			 */
			createView() {
				let viewAddHTML = "";
				NetDiskUI.isMatchedNetDiskIconMap.forEach((netDiskName) => {
					let netDiskDict = NetDisk.linkDict.get(netDiskName);
					let netDiskData = netDiskDict.getItems();
					Object.keys(netDiskData).forEach((shareCode) => {
						let accessCodeDict = netDiskData[shareCode];
						let uiLink = NetDisk.handleLinkShow(
							netDiskName,
							accessCodeDict["netDiskIndex"],
							shareCode,
							accessCodeDict["accessCode"],
							accessCodeDict["matchText"]
						);
						viewAddHTML =
							viewAddHTML +
							this.getViewHTML(
								NetDiskUI.src.icon[netDiskName],
								netDiskName,
								accessCodeDict["netDiskIndex"],
								shareCode,
								accessCodeDict["accessCode"],
								uiLink
							);
					});
				});
				let viewHTML = `
					<div class="netdisk-url-box-all">
						${viewAddHTML}
					</div>`;

				if (
					NetDiskUIMenuData.netdiskBehaviorMode
						.toLowerCase()
						.includes("smallwindow")
				) {
					NetDiskUI.Alias.uiLinkAlias = NetDiskPops.alert(
						{
							title: {
								text: "网盘",
								position: "center",
							},
							content: {
								text: viewHTML,
								html: true,
							},
							btn: {
								ok: {
									enable: false,
								},
								close: {
									callback(event) {
										if (
											NetDiskUIMenuData.netdiskBehaviorMode
												.toLowerCase()
												.includes("suspension")
										) {
											GM_setValue(
												"current_suspension_smallwindow_mode",
												"suspension"
											);
											event.hide();
											NetDiskUI.suspension.show();
										} else {
											NetDiskUI.Alias.uiLinkAlias = void 0;
											event.close();
										}
									},
								},
							},
							mask: {
								enable: false,
							},
							animation: "",
							beforeAppendToPageCallBack($shadowRoot, $shadowContainer) {
								let buttonHeaderControl = $shadowRoot.querySelector(
									".pops-header-control"
								);
								let alertContent = $shadowRoot.querySelector(
									".pops-alert-content"
								);
								/* 展开 */
								let launchIcon = DOMUtils.createElement(
									"button",
									{
										className: "pops-header-control",
										innerHTML: `
                    <i class="pops-icon">
                      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M290.816 774.144h167.936c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-219.136c-12.288 0-20.48-8.192-20.48-20.48v-2.048-206.848c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v163.84l210.944-198.656c8.192-8.192 20.48-8.192 28.672 0s8.192 20.48 0 28.672l-208.896 194.56z m462.848-524.288h-167.936c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h219.136c12.288 0 20.48 8.192 20.48 20.48v208.896c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-163.84l-210.944 198.656c-8.192 8.192-20.48 8.192-28.672 0s-8.192-20.48 0-28.672l208.896-194.56z m188.416 323.584c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-389.12c0-34.816-26.624-61.44-61.44-61.44h-655.36c-34.816 0-61.44 26.624-61.44 61.44v655.36c0 34.816 26.624 61.44 61.44 61.44h655.36c34.816 0 61.44-26.624 61.44-61.44v-94.208c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v94.208c0 57.344-45.056 102.4-102.4 102.4h-655.36c-57.344 0-102.4-45.056-102.4-102.4v-655.36c0-57.344 45.056-102.4 102.4-102.4h655.36c57.344 0 102.4 45.056 102.4 102.4v389.12z">
                        </path>
                      </svg>
                    </i>
                  `,
									},
									{
										type: "launch",
										"data-header": true,
									}
								);
								/* 收起 */
								let shrinkIcon = DOMUtils.createElement(
									"button",
									{
										className: "pops-header-control",
										innerHTML: `
                    <i class="pops-icon">
                      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M618.496 425.984h167.936c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48h-219.136c-12.288 0-20.48-8.192-20.48-20.48v-2.048-206.848c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v163.84l210.944-198.656c8.192-8.192 20.48-8.192 28.672 0s8.192 20.48 0 28.672l-208.896 194.56z m-192.512 172.032h-167.936c-12.288 0-20.48-8.192-20.48-20.48s8.192-20.48 20.48-20.48h219.136c12.288 0 20.48 8.192 20.48 20.48v208.896c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-163.84l-210.944 198.656c-8.192 8.192-20.48 8.192-28.672 0s-8.192-20.48 0-28.672l208.896-194.56z m516.096-24.576c0 12.288-8.192 20.48-20.48 20.48s-20.48-8.192-20.48-20.48v-389.12c0-34.816-26.624-61.44-61.44-61.44h-655.36c-34.816 0-61.44 26.624-61.44 61.44v655.36c0 34.816 26.624 61.44 61.44 61.44h655.36c34.816 0 61.44-26.624 61.44-61.44v-94.208c0-12.288 8.192-20.48 20.48-20.48s20.48 8.192 20.48 20.48v94.208c0 57.344-45.056 102.4-102.4 102.4h-655.36c-57.344 0-102.4-45.056-102.4-102.4v-655.36c0-57.344 45.056-102.4 102.4-102.4h655.36c57.344 0 102.4 45.056 102.4 102.4v389.12z">
                        </path>
                      </svg>
                    </i>
                  `,
									},
									{
										type: "shrink",
										"data-header": true,
									}
								);
								DOMUtils.before(buttonHeaderControl, launchIcon);
								DOMUtils.before(buttonHeaderControl, shrinkIcon);
								DOMUtils.on(
									launchIcon,
									"click",
									void 0,
									function () {
										/* 展开-切换为收缩图标 */
										launchIcon.classList.add("pops-hide-important");
										shrinkIcon.classList.remove("pops-hide-important");
										alertContent.classList.remove("pops-hide-important");
										GM_setValue("netdisl-small-window-shrink-status", false);
									},
									{
										capture: true,
									}
								);
								DOMUtils.on(
									shrinkIcon,
									"click",
									void 0,
									function () {
										/* 收缩-切换为展开图标 */
										shrinkIcon.classList.add("pops-hide-important");
										launchIcon.classList.remove("pops-hide-important");
										alertContent.classList.add("pops-hide-important");
										alertContent.classList.add("pops-no-border-important");
										GM_setValue("netdisl-small-window-shrink-status", true);
									},
									{
										capture: true,
									}
								);
								if (GM_getValue("netdisl-small-window-shrink-status", false)) {
									shrinkIcon.click();
								} else {
									launchIcon.click();
								}
							},
							dragMoveCallBack(moveElement, left, top) {
								GM_setValue("netdisk-ui-small-window-position", {
									left: left,
									top: top,
								});
							},
							class: "whitesevPop",
							style: `
              ${this.getCSS()}

              .pops {
                --container-title-height: 35px;
                --content-max-height: ${GM_getValue(
									"netdisk-ui-small-window-max-height",
									NetDiskData.defaultSmallWindowMaxHeight
								)}px;
                --netdisk-line-space: 8px;
                --netdisk-icon-size: 24px;
              }
              .pops[type-value="alert"]{
                transform: none;
              }
              .pops {
                max-height: var(--content-max-height);
              }
              .pops[type-value=alert] .pops-alert-content{
                max-height: calc(var(--content-max-height) - var(--container-title-height) - var(--container-bottom-btn-height));
              }
              .pops-header-controls button.pops-header-control[type][data-header]{
                padding: 0px 5px;
              }
              .netdisk-url-div{
                padding: 0px;
              }
              .netdisk-icon .netdisk-icon-img{
                width: var(--netdisk-icon-size);
                height: var(--netdisk-icon-size);
                min-width: var(--netdisk-icon-size);
                min-height: var(--netdisk-icon-size);
                margin: 0px var(--netdisk-line-space);
              }
              .netdisk-status{
                margin-right: var(--netdisk-line-space);
              }
              .netdisk-url{
                padding: 2px 0px;
              }
              `,
						},
						NetDiskUI.popsStyle.mainViewSmallWindow
					);

					let smallWindowPosition = GM_getValue(
						"netdisk-ui-small-window-position"
					);
					let popsElement = NetDiskUI.Alias.uiLinkAlias.popsElement;
					if (smallWindowPosition) {
						let viewWidth = DOMUtils.width(popsElement, true);
						let viewHeight = DOMUtils.height(popsElement, true);
						let maxWindowLeft = DOMUtils.width(globalThis);
						let maxWindowTop = DOMUtils.height(globalThis);
						const { transformLeft, transformTop } =
							DOMUtils.getTransform(popsElement);
						/* 最大的left偏移*/
						let maxLeft = maxWindowLeft - viewWidth + transformLeft;
						/* 最大的top偏移 */
						let maxTop = maxWindowTop - viewHeight + transformTop;
						/* 最小的left偏移*/
						let minLeft = 0 + transformLeft;
						/* 最小的top偏移*/
						let minTop = 0 + transformTop;
						if (smallWindowPosition.top > maxTop) {
							smallWindowPosition.top = maxTop;
						} else if (smallWindowPosition.top < minTop) {
							smallWindowPosition.top = minTop;
						}
						if (smallWindowPosition.left > maxLeft) {
							smallWindowPosition.left = maxLeft;
						} else if (smallWindowPosition.left < minLeft) {
							smallWindowPosition.left = minLeft;
						}
						popsElement.style.transitionDuration = "0s";
						popsElement.style.left = smallWindowPosition["left"] + "px";
						popsElement.style.top = smallWindowPosition["top"] + "px";
						setTimeout(() => {
							popsElement.style.transitionDuration = "0s";
						}, 300);
					}
				} else {
					NetDiskUI.Alias.uiLinkAlias = NetDiskPops.alert(
						{
							title: {
								text: "网盘",
								position: "center",
							},
							content: {
								text: viewHTML,
								html: true,
							},
							btn: {
								ok: {
									enable: false,
								},
								close: {
									callback(event) {
										NetDiskUI.Alias.uiLinkAlias = void 0;
										event.close();
									},
								},
							},
							mask: {
								clickCallBack(originalRun) {
									originalRun();
									NetDiskUI.Alias.uiLinkAlias = void 0;
								},
							},
							class: "whitesevPop",
							style: `
              ${this.getCSS()}

              .pops {
                max-height: ${pops.isPhone() ? "50vh" : "60vh"};
              }
              `,
						},
						NetDiskUI.popsStyle.mainView
					);
				}

				NetDiskUI.Alias.uiLinkAlias.popsElement
					.querySelectorAll(".netdisk-url-box-all .netdisk-url-box")
					.forEach((ele) => {
						let netDiskName = ele
							.querySelector(".netdisk-link")
							.getAttribute("data-netdisk");
						let netDiskIndex = parseInt(
							ele
								.querySelector(".netdisk-link")
								.getAttribute("data-netdisk-index")
						);
						let shareCode = ele
							.querySelector(".netdisk-link")
							.getAttribute("data-sharecode");
						let accessCode = ele
							.querySelector(".netdisk-link")
							.getAttribute("data-accesscode");
						NetDiskCheckLinkValidity.check(
							ele,
							netDiskName,
							netDiskIndex,
							shareCode,
							accessCode
						);
					});
			},
			/**
			 * 获取视图html
			 * @param {string} netDiskImgSrc 网盘图标src
			 * @param {string} netDiskName 网盘名称
			 * @param {number} netDiskIndex 网盘名称索引下标
			 * @param {string} shareCode
			 * @param {string} accessCode
			 * @param {string} uiLinkText 显示出来的链接文本
			 * @returns {string}
			 */
			getViewHTML(
				netDiskImgSrc,
				netDiskName,
				netDiskIndex,
				shareCode,
				accessCode,
				uiLinkText
			) {
				return `
				<div class="netdisk-url-box">
					<div class="netdisk-url-div">
						<div class="netdisk-icon">
							<div class="netdisk-icon-img"
                  style="background: url(${netDiskImgSrc}) no-repeat;background-size: 100%;"
                  data-netdisk="${netDiskName}"
                  data-sharecode="${shareCode}"
                  data-accesscode="${accessCode}">
						  </div>
            </div>
            <div class="netdisk-status">

            </div>
						<div class="netdisk-url">
							<a  class="netdisk-link"
                  href="javascript:;" 
                  isvisited="false"
                  data-netdisk="${netDiskName}"
                  data-netdisk-index="${netDiskIndex}"
                  data-sharecode="${shareCode}"
                  data-accesscode="${accessCode}"
                  data-open-enable-key="${netDiskName}-open-enable"
                  data-static-enable-key="${netDiskName}-static-enable"
                  data-forward-scheme-key="${netDiskName}-forward-scheme-enable">${uiLinkText}</a>
						</div>
					</div>
				</div>`;
			},
			/**
			 * 设置网盘链接点击事件，要求，它是<a>元素且存在以下属性
			 * isvisited  string true|false
			 * data-netdisk  string
			 * data-netdisk-index number
			 * data-sharecode string
			 * data-accesscode string
			 * data-open-enable-key string
			 * data-static-enable-key string
			 * data-forward-scheme-key string
			 * @param {*} target
			 * @param {string} clickNodeSelector - 元素选择器
			 */
			setNetDiskUrlClickEvent(target, clickNodeSelector) {
				function clickEvent(event) {
					event.target.setAttribute("isvisited", "true");
					let netDiskName = event.target.getAttribute("data-netdisk");
					let netDiskIndex = parseInt(
						event.target.getAttribute("data-netdisk-index")
					);
					let shareCode = event.target.getAttribute("data-sharecode");
					let accessCode = event.target.getAttribute("data-accesscode");
					let openEnable = GM_getValue(
						event.target.getAttribute("data-open-enable-key"),
						false
					);
					let staticEnable = GM_getValue(
						event.target.getAttribute("data-static-enable-key"),
						false
					);
					let schemeEnable = GM_getValue(
						event.target.getAttribute("data-forward-scheme-key"),
						false
					);
					if (openEnable) {
						let url = NetDiskParse.getBlankUrl(
							netDiskName,
							netDiskIndex,
							shareCode,
							accessCode
						);
						NetDiskParse.blank(
							url,
							netDiskName,
							netDiskIndex,
							shareCode,
							accessCode
						);
					} else if (staticEnable) {
						NetDiskParse.parse(
							netDiskName,
							netDiskIndex,
							shareCode,
							accessCode
						);
					} else if (schemeEnable) {
						NetDiskParse.openScheme(
							netDiskName,
							netDiskIndex,
							shareCode,
							accessCode
						);
					} else {
						NetDiskParse.copyText(
							netDiskName,
							netDiskIndex,
							shareCode,
							accessCode
						);
					}
				}
				DOMUtils.on(target, "click", clickNodeSelector, clickEvent);
			},
			/**
			 * 注册右键菜单
			 * @param {HTMLElement|Window} target
			 * @param {?string} selector
			 * @param {{text:string,callback:Function}[]} showTextList 右键菜单的内容
			 * @param {string} className className属性
			 */
			registerContextMenu(
				target,
				selector,
				showTextList = [],
				className = "whitesevSuspensionContextMenu"
			) {
				let data = [];
				showTextList.forEach((item) => {
					data.push({
						icon: "",
						text: item.text,
						callback: item.callback,
					});
				});
				pops.rightClickMenu({
					target: target,
					targetSelector: selector,
					data: data,
					isAnimation: false,
					className: className,
				});
			},
			/**
			 * 添加新的链接
			 * @param {string} netDiskName 网盘名称
			 * @param {number} netDiskIndex 网盘名称索引下标
			 * @param {string} shareCode 分享码
			 * @param {string} accessCode 访问码
			 * @param {string} matchText 匹配到的文本
			 */
			addLinkView(netDiskName, netDiskIndex, shareCode, accessCode, matchText) {
				NetDiskUI.netDiskHistoryMatch.setNetDiskHistoryMatchData(
					netDiskName,
					netDiskIndex,
					shareCode,
					accessCode,
					matchText
				);
				if (!NetDiskUI.Alias.uiLinkAlias) {
					return;
				}
				log.info([netDiskName, netDiskIndex, shareCode, accessCode]);
				let icon = NetDiskUI.src.icon[netDiskName];
				let uiLink = NetDisk.handleLinkShow(
					netDiskName,
					netDiskIndex,
					shareCode,
					accessCode,
					matchText
				);
				let insertDOM = this.getViewHTML(
					icon,
					netDiskName,
					netDiskIndex,
					shareCode,
					accessCode,
					uiLink
				);
				DOMUtils.append(
					NetDiskUI.Alias.uiLinkAlias.popsElement.querySelector(
						".netdisk-url-box-all"
					),
					insertDOM
				);
				NetDiskCheckLinkValidity.check(
					NetDiskUI.Alias.uiLinkAlias.popsElement.querySelector(
						".netdisk-url-box-all"
					).children[
						NetDiskUI.Alias.uiLinkAlias.popsElement.querySelector(
							".netdisk-url-box-all"
						).children.length - 1
					],
					netDiskName,
					netDiskIndex,
					shareCode,
					accessCode
				);
			},
			/**
			 * 修改已存在的view
			 * @param {string} netDiskName 网盘名称
			 * @param {number} netDiskIndex 网盘名称索引下标
			 * @param {string} shareCode 分享码
			 * @param {string} accessCode 访问码
			 * @param {string} matchText 匹配到的文本
			 */
			changeLinkView(
				netDiskName,
				netDiskIndex,
				shareCode,
				accessCode,
				matchText
			) {
				NetDiskUI.netDiskHistoryMatch.setNetDiskHistoryMatchData(
					netDiskName,
					netDiskIndex,
					shareCode,
					accessCode,
					matchText
				);
				if (!NetDiskUI.Alias.uiLinkAlias) {
					return;
				}
				let uiLink = NetDisk.handleLinkShow(
					netDiskName,
					netDiskIndex,
					shareCode,
					accessCode,
					matchText
				);
				let needChangeDOM =
					NetDiskUI.Alias.uiLinkAlias.popsElement.querySelector(
						`.netdisk-url a[data-sharecode='${shareCode}'][data-netdisk-index='${netDiskIndex}']`
					);
				log.info("修改网盘链接视图");
				log.info(needChangeDOM);
				needChangeDOM.setAttribute("data-accesscode", accessCode);
				DOMUtils.html(needChangeDOM, uiLink);
			},
			/**
			 * 设置点击图标按钮导航至该网盘链接所在网页中位置
			 */
			registerIconGotoPagePosition(target) {
				/**
				 * @type {?Generator<HTMLElement, void, any>}
				 */
				let findGenerator = void 0;
				/**
				 * @type {?IteratorResult<HTMLElement, void>}
				 */
				let iterator = void 0;
				/**
				 * 上一个的shareCode
				 */
				let prevSearchShareCode = void 0;
				DOMUtils.on(
					target,
					"click",
					".whitesevPop .netdisk-icon .netdisk-icon-img",
					function (event) {
						let dataSharecode = event.target.getAttribute("data-sharecode");
						if (
							!GM_getValue(
								"pops-netdisk-icon-click-event-find-sharecode",
								NetDiskData.iconDefaultClickEventToFindShareCode
							)
						) {
							return;
						}
						if (typeof dataSharecode !== "string") {
							Qmsg.error("获取data-sharecode属性失败");
							return;
						}
						if (prevSearchShareCode == void 0) {
							prevSearchShareCode = dataSharecode;
						} else if (prevSearchShareCode !== dataSharecode) {
							/* 切换到另一个shareCode搜索 */
							log.info(
								`上一个搜索：${prevSearchShareCode}，切换至：${dataSharecode}`
							);
							findGenerator = void 0;
							iterator = void 0;
							prevSearchShareCode = dataSharecode;
						}
						if (findGenerator == void 0) {
							/* 未找到元素或者已迭代完毕 */
							findGenerator = utils.findElementsWithText(
								document.documentElement,
								dataSharecode
							);
							iterator = findGenerator.next();
						}
						if (iterator.value) {
							log.success(["定位元素", iterator]);
							if (
								iterator.value.nodeType === Node.ELEMENT_NODE &&
								iterator.value.getClientRects().length
							) {
								/* 可见 */
								/* 滚动到该元素 */
								iterator.value.scrollIntoView({
									behavior: "smooth",
									block: "center",
									inline: "nearest",
								});
								if (
									GM_getValue(
										"pops-netdisk-icon-click-event-find-sharecode-with-select",
										NetDiskData.iconDefaultClickEventToFindShareCodeWithSelect
									)
								) {
									/* 开启功能 */
									let elementText =
										iterator.value.innerText || iterator.value.textContent;
									let childTextNode = void 0;
									let startIndex = void 0;
									let endIndex = void 0;
									if (elementText.includes(dataSharecode)) {
										/* 文字包含shareCode */
										let textNodeList = Array.from(
											iterator.value.childNodes
										).filter((ele) => ele.nodeType === Node.TEXT_NODE);
										for (const textNode of textNodeList) {
											if (textNode.textContent.includes(dataSharecode)) {
												childTextNode = textNode;
												startIndex =
													textNode.textContent.indexOf(dataSharecode);
												endIndex = startIndex + dataSharecode.length;
												break;
											}
										}
									}
									try {
										utils.selectElementText(
											iterator.value,
											childTextNode,
											startIndex,
											endIndex
										);
									} catch (error) {
										log.error(error);
										utils.selectElementText(iterator.value);
									}
								}
							} else if (
								iterator.value.nodeType === Node.TEXT_NODE &&
								iterator.value.parentElement.getClientRects().length
							) {
								/* #text元素且可见 */
								if (
									GM_getValue(
										"pops-netdisk-icon-click-event-find-sharecode-with-select",
										NetDiskData.iconDefaultClickEventToFindShareCodeWithSelect
									)
								) {
									let elementText =
										iterator.value.textContent || iterator.value.nodeValue;
									let childTextNode = iterator.value;
									let startIndex = elementText.indexOf(dataSharecode);
									let endIndex = startIndex + dataSharecode.length;
									try {
										utils.selectElementText(
											iterator.value,
											childTextNode,
											startIndex,
											endIndex
										);
									} catch (error) {
										log.error(error);
										utils.selectElementText(iterator.value.parentElement);
									}
									let selection = globalThis.getSelection();
									if (selection.rangeCount > 0) {
										let range = selection.getRangeAt(0);
										let rect = range.getBoundingClientRect();
										let scrollYOffset = globalThis.scrollY;
										/* 居中定位 */
										let position =
											rect.top + scrollYOffset - globalThis.innerHeight / 2;
										globalThis.scrollTo({
											behavior: "smooth",
											top: position,
										});
									} else {
										iterator.value.parentElement.scrollIntoView({
											behavior: "smooth",
											block: "center",
											inline: "nearest",
										});
									}
								} else {
									try {
										let range = new Range();
										range.selectNodeContents(iterator.value);
										let rect = range.getBoundingClientRect();
										let scrollYOffset = globalThis.scrollY;
										/* 居中定位 */
										let position =
											rect.top + scrollYOffset - globalThis.innerHeight / 2;
										globalThis.scrollTo({
											behavior: "smooth",
											top: position,
										});
									} catch (error) {
										log.error(error);
										iterator.value.parentElement.scrollIntoView({
											behavior: "smooth",
											block: "center",
											inline: "nearest",
										});
									}
								}
							} else {
								log.error(["无法定位该元素位置", iterator.value]);
								Qmsg.error(
									`无法定位该元素位置，类型：<${(
										iterator.value.nodeName ||
										iterator.value.localName ||
										iterator.value.tagName
									).toLowerCase()}>`,
									{
										html: false,
									}
								);
							}
						}

						iterator = findGenerator.next();
						if (iterator.done) {
							/* 循环查找 */
							if (
								!GM_getValue(
									"pops-netdisk-icon-click-event-loop-find-sharecode",
									NetDiskData.iconDefaultClickEventToFindShareCodeByLoop
								)
							) {
								Qmsg.info("已经定位至最后一个元素了");
								return;
							}
							findGenerator = void 0;
							iterator = void 0;
						}
					}
				);
			},
		},
		/**
		 * 显示直链的弹窗
		 */
		staticView: {
			getCSS() {
				return `
        .pops-folder-list .list-name-text{
          max-width: 300px;
        }
        .netdisk-static-link-onefile .pops-folder-list .list-name-text{
          max-width: 220px;
        }
        .netdisk-static-link-onefile .pops-mobile-folder-content .pops-folder-list .list-name-text{
          max-width: unset;
        }
        `;
			},
			/**
			 * 单文件直链弹窗
			 * @param {{
			 * title: string,
			 * fileName: string,
			 * fileType: ?string,
			 * fileSize: ?string,
			 * downloadUrl: string,
			 * fileUploadTime: ?string,
			 * fileLatestTime: ?string
			 * clickCallBack: ?(_fileDetails_:{
			 *    title:string,
			 *    fileName:string,
			 *    fileType:?string,
			 *    fileSize:?string,
			 *    downloadUrl:string,
			 *    fileUploadTime:?string,
			 *    fileLatestTime:?string,
			 * })=>{}
			 * }} fileDetails 配置
			 */
			oneFile(fileDetails) {
				log.success(["成功获取单文件直链", fileDetails]);
				NetDiskPops.folder(
					{
						title: {
							text: fileDetails.title,
						},
						folder: [
							{
								fileName: fileDetails.fileName,
								fileSize: fileDetails.fileSize,
								fileType: fileDetails.fileType ?? "",
								createTime:
									fileDetails.fileUploadTime || fileDetails.fileLatestTime,
								latestTime:
									fileDetails.fileLatestTime || fileDetails.fileUploadTime,
								isFolder: false,
								index: 0,
								async clickEvent() {
									if (typeof fileDetails.clickCallBack === "function") {
										fileDetails.clickCallBack(fileDetails);
									} else {
										return {
											autoDownload: true,
											mode: "aBlank",
											url: fileDetails.downloadUrl,
										};
									}
								},
							},
						],
						btn: {
							ok: {
								text: "下载",
								callback() {
									if (typeof fileDetails.clickCallBack === "function") {
										fileDetails.clickCallBack(fileDetails);
									} else {
										window.open(fileDetails.downloadUrl, "_blank");
									}
								},
							},
						},
						class: "netdisk-static-link-onefile",
						style: this.getCSS(),
					},
					NetDiskUI.popsStyle.oneFileStaticView
				);
			},
			/**
			 * 多文件直链弹窗
			 * @param {string} title 标题
			 * @param {?{
			 * fileName: string,
			 * fileSize: string|number,
			 * fileType: ?string,
			 * createTime: ?string,
			 * latestTime: ?string,
			 * isFolder: boolean,
			 * index: ?number,
			 * clickCallBack: ?(event:Event,_config_: object)=>{}
			 * }[]} [folderInfoList=[]] 文件夹信息
			 */
			moreFile(title, folderInfoList = []) {
				log.success(["文件解析信息", folderInfoList]);
				NetDiskPops.folder(
					{
						title: {
							text: title,
						},
						folder: folderInfoList,
						style: this.getCSS(),
					},
					NetDiskUI.popsStyle.moreFileStaticView
				);
			},
		},
		/**
		 * 需要重新输入新密码的弹窗
		 * @param {string} [title="密码错误"] 标题
		 * @param {string} [netDiskName=""] 网盘名称
		 * @param {number} netDiskIndex 网盘名称索引下标
		 * @param {string} shareCode
		 * @param {Function} [okCallBack=()=>{}]
		 */
		newAccessCodeView(
			title = "密码错误",
			netDiskName = "",
			netDiskIndex,
			shareCode,
			okCallBack = () => {}
		) {
			const accessCodeConfirm = NetDiskPops.prompt(
				{
					title: {
						text: title,
						position: "center",
						html: false,
					},
					btn: {
						reverse: true,
						position: "end",
						cancel: {
							text: "取消",
						},
						ok: {
							callback: (event) => {
								/* 把输入的新密码去空格 */
								let userInputAccessCode = event.text.replace(/[\s]*/gi, "");
								/* 处理已显示的链接 */
								let uiLink = NetDisk.handleLinkShow(
									netDiskName,
									netDiskIndex,
									shareCode,
									userInputAccessCode,
									void 0
								);
								let currentItemSelector = `.netdisk-url a[data-netdisk='${netDiskName}'][data-sharecode='${shareCode}']`;
								let currentHistoryItemSelector = `.netdiskrecord-link a[data-netdisk='${netDiskName}'][data-sharecode='${shareCode}']`;
								let currentItemElement =
									NetDiskUI.Alias.uiLinkAlias?.$shadowRoot?.querySelector(
										currentItemSelector
									);
								let currentHistoryItemElement =
									NetDiskUI.Alias.historyAlias?.$shadowRoot?.querySelector(
										currentHistoryItemSelector
									);
								if (currentItemElement) {
									currentItemElement.setAttribute(
										"data-accesscode",
										userInputAccessCode
									);
									DOMUtils.html(currentItemElement, uiLink);
								}
								/* 历史记录的弹出的 */
								if (currentHistoryItemElement) {
									currentHistoryItemElement.setAttribute(
										"data-accesscode",
										userInputAccessCode
									);
									DOMUtils.html(currentHistoryItemElement, uiLink);
								}

								log.info(
									`${netDiskName} 重新输入的密码：${userInputAccessCode}`
								);
								okCallBack(userInputAccessCode);
								event.close();
							},
						},
					},
					content: {
						placeholder: "请重新输入密码",
						focus: true,
					},
				},
				NetDiskUI.popsStyle.inputNewAccessCodeView
			);
			/**
			 * 注册键盘回车事件
			 */
			utils.listenKeyboard(
				accessCodeConfirm.$shadowRoot,
				"keypress",
				(keyName) => {
					if (keyName === "Enter") {
						accessCodeConfirm.$shadowRoot
							.querySelector(".pops-prompt-btn-ok")
							?.click();
					}
				}
			);
		},
		/**
		 * 网盘历史匹配到的记录弹窗
		 */
		netDiskHistoryMatch: {
			/**
			 * 本地存储的keyName
			 */
			storageKey: "netDiskHistoryMatch",
			/**
			 * 是否已设置其它DOM事件
			 */
			isSetOtherEvent: false,
			/**
			 * 分页
			 */
			dataPaging: void 0,
			/**
			 * 显示弹窗
			 */
			show() {
				let data = this.getNetDiskHistoryMatchData();
				let dataHTML = "";
				let that = this;
				data = this.orderNetDiskHistoryMatchData(data);
				for (let index = 0; index < 10; index++) {
					if (data[index]) {
						dataHTML += that.getTableHTML(data[index]);
					}
				}
				dataHTML = `
        <div class="netdiskrecord-search">
          <input type="text" placeholder="搜索链接/网址/网址标题，可正则搜索">
        </div>
        <div class="netdiskrecord-table"><ul>${dataHTML}</ul></div>
        <div class="netdiskrecord-page">

        </div>`;
				NetDiskUI.Alias.historyAlias = NetDiskPops.confirm(
					{
						title: {
							text: "历史匹配记录",
							position: "center",
						},
						content: {
							text: dataHTML,
							html: true,
						},
						btn: {
							reverse: true,
							position: "space-between",
							ok: {
								enable: true,
								callback(event) {
									event.close();
									NetDiskUI.Alias.historyAlias = void 0;
								},
							},
							close: {
								callback(event) {
									event.close();
									NetDiskUI.Alias.historyAlias = void 0;
								},
							},
							cancel: {
								enable: false,
							},
							other: {
								enable: true,
								text: `清空所有(${data.length})`,
								type: "xiaomi-primary",
								callback: (event) => {
									NetDiskPops.confirm({
										title: {
											text: "删除",
											position: "center",
										},
										content: {
											text: "确定清空所有的记录？",
											html: false,
										},
										btn: {
											ok: {
												enable: true,
												callback(okEvent) {
													that.clearNetDiskHistoryMatchData();
													DOMUtils.remove(
														NetDiskUI.Alias.historyAlias.$shadowRoot.querySelectorAll(
															".whitesevPopNetDiskHistoryMatch .pops-confirm-content ul li"
														)
													);
													okEvent.close();
													DOMUtils.html(
														NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
															".whitesevPopNetDiskHistoryMatch .netdiskrecord-page"
														),
														""
													);
													DOMUtils.text(
														NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
															".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other"
														),
														DOMUtils.text(
															NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
																".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other"
															)
														).replace(/[\d]+/gi, "0")
													);
												},
											},
											cancel: {
												text: "取消",
												enable: true,
											},
										},
									});
								},
							},
						},
						mask: {
							clickCallBack(originalRun) {
								originalRun();
								NetDiskUI.Alias.historyAlias = null;
							},
						},
						class: "whitesevPopNetDiskHistoryMatch",
						style: this.getCSS(),
					},
					NetDiskUI.popsStyle.historyMatchView
				);
				this.setDataPaging(data);
				this.setEvent(NetDiskUI.Alias.historyAlias.$shadowRoot);
				this.setSearchEvent();
				NetDiskUI.setRightClickMenu(
					NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
						".whitesevPopNetDiskHistoryMatch"
					),
					".netdiskrecord-link a",
					true
				);
			},
			/**
			 * 获取CSS
			 */
			getCSS() {
				return `
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content ul{

        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content li{
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-radius: 10px;
          box-shadow: 0 0.3px 0.6px rgb(0 0 0 / 6%), 0 0.7px 1.3px rgb(0 0 0 / 8%), 0 1.3px 2.5px rgb(0 0 0 / 10%), 0 2.2px 4.5px rgb(0 0 0 / 12%), 0 4.2px 8.4px rgb(0 0 0 / 14%), 0 10px 20px rgb(0 0 0 / 20%);
          margin: 20px 10px;
          padding: 10px;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search{
          height: 11%;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-table{
          height: calc( 85% - 40px);
          overflow: auto;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-page{
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search input{
          border: none;
          border-bottom: 1px solid #000000;
          padding: 0px 5px;
          line-height: 28px;
          width: -moz-available;
          width: -webkit-fill-available;
          width: fill-available;
          margin: 5px 5px 0px 5px;
          background: none;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-search input:focus-visible{
          outline: none;
          border-bottom: 1px solid #0009ff;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link{
          
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link a{
          color: #ff4848;
          font-size: 0.8em;
          border: none;
          word-break: break-word;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link a[isvisited=true]{
          color: #8b8888;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon{
          
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon .netdisk-icon-img{
          width: 28px;
          height: 28px;
          min-width: 28px;
          min-height: 28px;
          font-size: 0.8em;
          border-radius: 10px;
          box-shadow: 0 0.3px 0.6px rgb(0 0 0 / 6%), 0 0.7px 1.3px rgb(0 0 0 / 8%), 0 1.3px 2.5px rgb(0 0 0 / 10%), 0 2.2px 4.5px rgb(0 0 0 / 12%), 0 4.2px 8.4px rgb(0 0 0 / 14%), 0 10px 20px rgb(0 0 0 / 20%);
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url{
          color: #000;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url{
          color: #000;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions button.btn-delete{
          background: #263cf3;
          color: #fff;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions button.btn-delete:active{
          background: #6e7be8;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-add-time,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-update-time,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url-title,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions{
          display: flex;
          margin: 5px 0px;
        }
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-icon p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-top-url p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-add-time p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-update-time p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-url-title p,
        .whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions p{
          min-width: 80px;
          max-width: 80px;
          align-self: center;
        }
        `;
			},
			/**
			 * 获取显示出的每一项的html
			 * @param {NetDiskHistoryDataOption} data
			 * @returns {string}
			 */
			getTableHTML(data) {
				let netDiskURL = NetDisk.handleLinkShow(
					data.netDiskName,
					data.netDiskIndex,
					data.shareCode,
					data.accessCode,
					data.matchText
				);
				return `
        <li>
          <div class="netdiskrecord-link">
            <p>链接</p>
            <a  href="javascript:;"
                isvisited="false"
                data-netdisk="${data.netDiskName}"
                data-netdisk-index="${data.netDiskIndex}"
                data-sharecode="${data.shareCode}"
                data-accesscode="${data.accessCode}"
                data-open-enable-key="${data.netDiskName}-open-enable"
                data-static-enable-key="${data.netDiskName}-static-enable"
                data-forward-scheme-key="${
									data.netDiskName
								}-forward-scheme-enable">${netDiskURL}</a>
          </div>
          <div class="netdiskrecord-icon">
            <p>网盘</p>
            <div class="netdisk-icon-img" style="background: url(${
							NetDiskUI.src.icon[data.netDiskName]
						}) no-repeat;background-size:100%"></div>
          </div>
          ${
						data.url === data.topURL
							? `
          <div class="netdiskrecord-url">
            <p>网址</p>
            <a href="${data.url}" target="_blank">${data.url}</a>
          </div>
          `
							: `
          <div class="netdiskrecord-url">
            <p>网址</p>
            <a href="${data.url}" target="_blank">${data.url}</a>
          </div>
          <div class="netdiskrecord-top-url">
            <p>TOP网址</p>
            <a href="${data.topURL}" target="_blank">${data.topURL}</a>
          </div>
          `
					}
          <div class="netdiskrecord-url-title">
            <p>网址标题</p>
            ${data.title}
          </div>
          <div class="netdiskrecord-add-time">
            <p>记录时间</p>
            ${utils.formatTime(data.addTime)}
          </div>
          <div class="netdiskrecord-update-time">
            <p>更新时间</p>
            ${utils.formatTime(data.updateTime)}
          </div>
          <div class="netdiskrecord-functions">
            <p>功能</p>
            <button class="btn-delete" data-json='${JSON.stringify(
							data
						)}'>删除</button>
          </div>
        </li>`;
			},
			/**
			 * 设置只执行一次的事件
			 * @param {HTMLElement} target
			 */
			setEvent(target) {
				let that = this;
				NetDiskUI.view.setNetDiskUrlClickEvent(
					target,
					".whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-link a"
				);

				/**
				 * 设置删除按钮点击事件
				 */
				DOMUtils.on(
					target,
					"click",
					".whitesevPopNetDiskHistoryMatch .pops-confirm-content .netdiskrecord-functions button.btn-delete",
					function (event) {
						/* 删除中的遮罩层 */
						let deleteLoading = NetDiskPops.loading({
							parent: target.querySelector(
								".whitesevPopNetDiskHistoryMatch .pops-confirm-content ul"
							),
							content: {
								text: "删除中...",
							},
							only: true,
							addIndexCSS: false,
						});
						let clickNode = event.target;
						let dataJSON = clickNode.getAttribute("data-json");
						clickNode.closest("li")?.remove();
						that.deleteNetDiskHistoryMatchData(dataJSON);
						deleteLoading?.close();
						let totalNumberText = DOMUtils.text(
							target.querySelector(
								".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other"
							)
						);
						let totalNumber = totalNumberText.match(/[\d]+/gi);
						totalNumber = parseInt(totalNumber[totalNumber.length - 1]);
						totalNumber--;
						totalNumberText = totalNumberText.replace(/[\d]+/gi, totalNumber);
						DOMUtils.text(
							target.querySelector(
								".whitesevPopNetDiskHistoryMatch .pops-confirm-btn-other"
							),
							totalNumberText
						);
						let data = that.getNetDiskHistoryMatchData();
						data = that.orderNetDiskHistoryMatchData(data);
						that.dataPaging.refresh(data);
						that.pageChangeCallBack(data, that.dataPaging.CONFIG.currentPage);
					}
				);
			},
			/**
			 * @param {object[]} data
			 * @param {number} page
			 */
			pageChangeCallBack(data, page) {
				let startIndex = (page - 1) * 10;
				let dataHTML = "";
				for (let index = 0; index < 10; index++) {
					if (data[startIndex]) {
						dataHTML += this.getTableHTML(data[startIndex]);
					} else {
						break;
					}
					startIndex++;
				}
				NetDiskUI.Alias.historyAlias.$shadowRoot
					.querySelectorAll(
						".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul li"
					)
					.forEach((ele) => ele.remove());
				DOMUtils.append(
					NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
						".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul"
					),
					dataHTML
				);
			},
			/**
			 * 设置分页
			 * @param {NetDiskHistoryDataOption} data
			 */
			setDataPaging(data) {
				let that = this;
				this.dataPaging = new DataPaging({
					data: data,
					pageCount: 10,
					pageStep: pops.isPhone() ? 2 : 4,
					currentPage: 1,
					pageChangeCallBack: function (page) {
						that.pageChangeCallBack(data, page);
					},
				});
				this.dataPaging.addCSS(NetDiskUI.Alias.historyAlias.$shadowRoot);
				this.dataPaging.append(
					NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
						".whitesevPopNetDiskHistoryMatch .netdiskrecord-page"
					)
				);
			},
			/**
			 * 设置搜索框的回车事件
			 */
			setSearchEvent() {
				let isSeaching = false; /* 当前搜索的状态 */
				let searchLoading = void 0; /* 搜索中的遮罩层 */
				let that = this;
				function searchEvent() {
					if (isSeaching) {
						return;
					}
					isSeaching = true;
					searchLoading = NetDiskPops.loading({
						parent: NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
							".whitesevPopNetDiskHistoryMatch .pops-confirm-content ul"
						),
						content: {
							text: "搜索中...",
						},
						only: true,
						addIndexCSS: false,
					});
					let inputText = NetDiskUI.Alias.historyAlias.$shadowRoot
						.querySelector(
							".whitesevPopNetDiskHistoryMatch .netdiskrecord-search input"
						)
						.value.trim();
					let data = that.getNetDiskHistoryMatchData();
					data = that.orderNetDiskHistoryMatchData(data);
					if (inputText === "") {
						/* 输入空就关闭遮罩层且恢复style */
						let historyDataHTML = "";
						data.forEach((item, index) => {
							if (index > 9) {
								return;
							}
							historyDataHTML += that.getTableHTML(item);
						});
						NetDiskUI.Alias.historyAlias.$shadowRoot
							.querySelectorAll(
								".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul li"
							)
							.forEach((ele) => ele.remove());
						DOMUtils.append(
							NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
								".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul"
							),
							historyDataHTML
						);
						searchLoading?.close();
						isSeaching = false;
						that.setDataPaging(data);
						return;
					}
					let isFind = false; /* 找到的状态 */

					let isFindHTML = ""; /* 找到的链接文本 */
					data.forEach((item) => {
						let netDiskURL = NetDisk.handleLinkShow(
							item.netDiskName,
							item.netDiskIndex,
							item.shareCode,
							item.accessCode,
							item.matchText
						);
						if (
							netDiskURL.match(new RegExp(inputText, "ig")) ||
							item.url.match(new RegExp(inputText, "ig")) ||
							item.topURL.match(new RegExp(inputText, "ig")) ||
							item.title.match(new RegExp(inputText, "ig"))
						) {
							/* 匹配到 */
							isFind = true;
							isFindHTML += that.getTableHTML(item);
						}
					});
					DOMUtils.remove(
						NetDiskUI.Alias.historyAlias.$shadowRoot.querySelectorAll(
							".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul li"
						)
					);
					DOMUtils.append(
						NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
							".whitesevPopNetDiskHistoryMatch .netdiskrecord-table ul"
						),
						isFindHTML
					);
					DOMUtils.remove(
						NetDiskUI.Alias.historyAlias.$shadowRoot.querySelectorAll(
							".whitesevPopNetDiskHistoryMatch .netdiskrecord-page > *"
						)
					);
					searchLoading?.close();
					searchLoading = void 0;
					isSeaching = false;
				}

				utils.listenKeyboard(
					NetDiskUI.Alias.historyAlias.$shadowRoot.querySelector(
						".whitesevPopNetDiskHistoryMatch .netdiskrecord-search input"
					),
					"keypress",
					(keyName) => {
						if (keyName === "Enter") {
							searchEvent();
						}
					}
				);
			},
			/**
			 * 排序数据
			 * @returns {NetDiskHistoryDataOption[]}
			 */
			orderNetDiskHistoryMatchData(data) {
				let localOrder = GM_getValue(
					"netdisk-history-match-ordering-rule",
					"按 更新时间 - 降序"
				);
				let isDesc =
					localOrder.indexOf("降序") !== -1 ? true : false; /* 降序 */
				let orderField =
					localOrder.indexOf("记录时间") !== -1
						? "addTime"
						: "updateTime"; /* 排序字段 */

				utils.sortListByProperty(
					data,
					(item) => {
						return item[orderField];
					},
					isDesc
				);
				return data;
			},
			/**
			 * 存储匹配到的链接
			 * @param {string} netDiskName 网盘名称
			 * @param {number} netDiskIndex 网盘名称索引下标
			 * @param {string} shareCode 分享码
			 * @param {string} accessCode 访问码
			 * @param {string} matchText 匹配到的文本
			 * @returns
			 */
			setNetDiskHistoryMatchData(
				netDiskName,
				netDiskIndex,
				shareCode,
				accessCode,
				matchText
			) {
				if (!GM_getValue("saveMatchNetDisk", false)) {
					return;
				}
				let localData = this.getNetDiskHistoryMatchData();
				for (let index = 0; index < localData.length; index++) {
					const data = localData[index];
					if (
						data.url === window.location.href &&
						data.topURL === top.window.location.href &&
						data.netDiskName === netDiskName &&
						shareCode.startsWith(data.shareCode) &&
						data.netDiskIndex === netDiskIndex
					) {
						if (data.matchText !== matchText) {
							/* 修改/设置新的matchText */
							log.success(["匹配历史记录 -> 设置新的matchText", [matchText]]);
							localData[index].matchText = matchText;
							localData[index].updateTime = Date.now();
							if (localData[index].title) {
								localData[index].title = document.title;
							}
							GM_setValue(this.storageKey, localData);
							return;
						}
						if (data.accessCode !== accessCode) {
							/* 修改accessCode */
							log.success("匹配历史记录 -> 修改accessCode");
							localData[index].accessCode = accessCode;
							localData[index].updateTime = Date.now();
							if (localData[index].title) {
								localData[index].title = document.title;
							}
							GM_setValue(this.storageKey, localData);
							return;
						}
						if (data.accessCode === accessCode) {
							/* 已存在一模一样的 */
							return;
						}
					}
				}
				log.success("匹配历史记录 -> 增加新的");
				let time = Date.now();
				localData = [
					...localData,
					{
						url: window.location.href,
						topURL: top.window.location.href,
						netDiskName: netDiskName,
						netDiskIndex: netDiskIndex,
						shareCode: shareCode,
						accessCode,
						addTime: time,
						updateTime: time,
						title: document.title || top.document.title,
						matchText: matchText,
					},
				];
				GM_setValue(this.storageKey, localData);
			},
			/**
			 * 获取历史匹配到的链接
			 * @returns {NetDiskHistoryDataOption[]}
			 */
			getNetDiskHistoryMatchData() {
				let data = GM_getValue(this.storageKey);
				if (data == void 0) {
					data = [];
					GM_setValue(this.storageKey, data);
				}
				return data;
			},
			/**
			 * 检测并尝试修复本地的数据
			 */
			checkAndRepairLocalData() {
				let repairCount = 0;
				let data = GM_getValue(this.storageKey);
				if (Array.isArray(data)) {
					for (let index = 0; index < data.length; index++) {
						const itemData = data[index];
						if (typeof itemData["matchText"] !== "string") {
							itemData["matchText"] = "";
							repairCount++;
						}
					}
				} else {
					data = [];
				}
				GM_setValue(this.storageKey, data);
				return {
					count: data.length,
					repairCount: repairCount,
				};
			},
			/**
			 * 删除存储的某个项
			 * @param {string} dataJSONText
			 */
			deleteNetDiskHistoryMatchData(dataJSONText) {
				let isSuccess = false;
				let data = this.getNetDiskHistoryMatchData();
				for (let index = 0; index < data.length; index++) {
					if (JSON.stringify(data[index]) === dataJSONText) {
						log.success("删除 ===> ", data[index]);
						data.splice(index, 1);
						isSuccess = true;
						break;
					}
				}
				if (isSuccess) {
					GM_setValue(this.storageKey, data);
				}
				return isSuccess;
			},
			/**
			 * 清空所有配置
			 */
			clearNetDiskHistoryMatchData() {
				GM_setValue(this.storageKey, []);
			},
		},
		/**
		 * 自定义访问码规则，用于设置某个网站下的某个网盘链接的固定访问码
		 */
		accessCodeRule: {
			/**
			 * 弹窗的className
			 */
			accessCodeRuleDialogClassName: "whitesevPopNetDiskAccessCodeRule",
			/**
			 * 显示弹窗
			 */
			show() {
				let that = this;
				let popsConfirm = NetDiskPops.confirm(
					{
						title: {
							text: "自定义访问码规则",
							position: "center",
						},
						content: {
							text: /*html*/ `
							<div class="netdisk-accesscode-rule-table">
								<ul>
								${that.getShowItemHTML()}
								</ul>
							</div>
							`,
							html: true,
						},
						btn: {
							merge: true,
							reverse: false,
							position: "space-between",
							ok: {
								enable: true,
								text: "添加",
								callback(event) {
									that.showRule(event);
								},
							},
							close: {
								callback(event) {
									event.close();
								},
							},
							cancel: {
								enable: true,
							},
							other: {
								enable: true,
								type: "xiaomi-primary",
								text: `清空所有`,
								callback(event) {
									NetDiskPops.confirm({
										title: {
											text: "删除",
											position: "center",
										},
										content: {
											text: "确定清空所有的规则？",
											html: false,
										},
										btn: {
											ok: {
												enable: true,
												callback: function (okEvent) {
													log.success("清空所有");
													that.deleteAllValue();
													if (that.getValue().length) {
														Qmsg.error("清空全部规则失败");
														return;
													} else {
														Qmsg.success("已清空全部规则");
													}
													that.setDeleteAllBtnText(event.animElement);
													event.animElement.querySelector(
														".pops-confirm-content ul"
													).innerHTML = "";
													okEvent.close();
												},
											},
											cancel: {
												text: "取消",
												enable: true,
											},
										},
									});
								},
							},
						},
						class: this.accessCodeRuleDialogClassName,
						style: this.getCSS(),
					},
					NetDiskUI.popsStyle.accessCodeRuleView
				);
				that.setDeleteAllBtnText(popsConfirm.animElement);
				this.setEvent(popsConfirm);
			},
			getShowItemHTML() {
				let result = "";
				this.getValue().forEach((item) => {
					let netdiskName = "";
					item.netdisk.forEach((_netdisk_) => {
						netdiskName += _netdisk_.name;
						netdiskName += "、";
					});
					netdiskName = netdiskName.replace(/、$/g, "");
					result += /*html*/ `
					<li>
						<div class="accesscode-rule-url-regexp">
						<p>匹配规则</p>
						${item.urlRegexp}
						</div>
						<div class="accesscode-rule-netdisk-name">
						<p>匹配网盘</p>
						${netdiskName}
						</div>
						<div class="accesscode-rule-accesscode">
						<p>固定值</p>
						${item.accessCode}
						</div>
						<div class="accesscode-rule-functions" data-json='${JSON.stringify(item)}'>
						<p>功能</p>
						<button style="background: #46cb31;color: #fff;" data-edit>修改</button>
						<button style="background: #263cf3;color: #fff;" data-delete>删除</button>
						</div>
					</li>
          			`;
				});
				return result;
			},
			getCSS() {
				return /*css*/ `
			.pops-confirm-content .whitesev-accesscode-rule{
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 15px 15px;
			}
			
			.pops-confirm-content div.netdisk-accesscode-rule-table{
				/* height: calc( 85% - 40px); */
				overflow: auto;
			}

			.pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-url-regexp,
			.pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-netdisk-name,
			.pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-accesscode,
			.pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-functions{
				display: flex;
				margin: 5px 0px;
			}

			.pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-url-regexp p,
			.pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-netdisk-name p,
			.pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-accesscode p,
			.pops-confirm-content .netdisk-accesscode-rule-table .accesscode-rule-functions p{
				min-width: 80px;
				max-width: 80px;
				align-self: center;
			}
			.pops-confirm-content .netdisk-accesscode-rule-table li {
				display: flex;
				flex-direction: column;
				justify-content: center;
				border-radius: 10px;
				box-shadow: 0 0.3px 0.6px rgb(0 0 0 / 6%), 0 0.7px 1.3px rgb(0 0 0 / 8%), 0 1.3px 2.5px rgb(0 0 0 / 10%), 0 2.2px 4.5px rgb(0 0 0 / 12%), 0 4.2px 8.4px rgb(0 0 0 / 14%), 0 10px 20px rgb(0 0 0 / 20%);
				margin: 20px 10px;
				padding: 10px;
			}
			`;
			},
			/**
			 * 显示规则弹窗进行添加/修改
			 * @param {object} mainEvent
			 * @param {boolean} isEdit 是否是修改模式
			 * @param {{
			 * urlRegexp: string,
			 * netdisk: {
			 *  name:string,
			 *  value:string,
			 * }[],
			 * accessCode: string,
			 * }} oldValue 当isEdie为true时传入的值
			 */
			showRule(mainEvent, isEdit = false, oldValue) {
				let that = this;
				let popsConfirm = NetDiskPops.confirm(
					{
						title: {
							text: isEdit ? "修改规则" : "添加规则",
							position: "center",
						},
						content: {
							text: /*html*/ `
							<div class="whitesev-accesscode-rule">
								<div type-name>匹配网站</div>
								<div class="pops-panel-input">
								<input type="text" placeholder="请输入需要匹配的正则规则" val-key="access-rule-url" />
								</div>
							</div>
							<div class="whitesev-accesscode-rule">
								<div>匹配网盘</div>
								<div class="pops-panel-select">
								<select val-key="access-rule-netdisk" multiple="true" style="height: auto;">
									<option data-value="baidu">百度网盘</option>
									<option data-value="lanzou">蓝奏云</option>
									<option data-value="tianyiyun">天翼云</option>
									<option data-value="hecaiyun">中国移动云盘</option>
									<option data-value="aliyun">阿里云</option>
									<option data-value="wenshushu">文叔叔</option>
									<option data-value="nainiu">奶牛</option>
									<option data-value="_123pan">123盘</option>
									<option data-value="weiyun">微云</option>
									<option data-value="xunlei">迅雷云盘</option>
									<option data-value="_115pan">115网盘</option>
									<option data-value="chengtong">城通网盘</option>
									<option data-value="kuake">夸克网盘</option>
									<option data-value="jianguoyun">坚果云</option>
									<option data-value="onedrive">OneDrive</option>
								</select>
								</div>
							</div>
							<div class="whitesev-accesscode-rule">
								<div>固定值</div>
								<div class="pops-panel-input">
								<input type="text" placeholder="请输入固定的访问码" val-key="access-rule-accesscode" />
								</div>
							</div>
							`,
							html: true,
						},
						btn: {
							ok: {
								enable: true,
								text: isEdit ? "修改" : "添加",
								callback(event) {
									let accessRuleUrl = event.popsElement.querySelector(
										'input[val-key="access-rule-url"]'
									).value;
									/**
									 * @type {{name:string,value:string}[]}
									 */
									let accessRuleNetDisk = [];
									let accessRuleNetDiskElement =
										event.popsElement.querySelector(
											'select[val-key="access-rule-netdisk"]'
										);
									Array.from(accessRuleNetDiskElement.selectedOptions).forEach(
										(item) => {
											accessRuleNetDisk.push({
												name: item.value,
												value: item.getAttribute("data-value"),
											});
										}
									);
									let accessRuleAccessCode = event.popsElement.querySelector(
										'input[val-key="access-rule-accesscode"]'
									).value;
									if (!that.checkRuleUrlValid(accessRuleUrl)) {
										log.error(["验证失败", accessRuleUrl]);
										return;
									}
									if (isEdit) {
										/* 编辑 */
										if (
											that.changeValue(oldValue, {
												urlRegexp: accessRuleUrl,
												netdisk: accessRuleNetDisk,
												accessCode: accessRuleAccessCode,
											})
										) {
											log.success([
												"修改成功",
												{
													urlRegexp: accessRuleUrl,
													netdisk: accessRuleNetDisk,
													accessCode: accessRuleAccessCode,
												},
											]);
											Qmsg.success("修改成功");
											mainEvent.animElement.querySelector(
												".netdisk-accesscode-rule-table ul"
											).innerHTML = that.getShowItemHTML();
											popsConfirm.close();
										} else {
											Qmsg.error("修改失败");
										}
									} else {
										/* 添加 */
										if (
											that.addValue({
												urlRegexp: accessRuleUrl,
												netdisk: accessRuleNetDisk,
												accessCode: accessRuleAccessCode,
											})
										) {
											Qmsg.success("添加成功");
											mainEvent.animElement.querySelector(
												".netdisk-accesscode-rule-table ul"
											).innerHTML = that.getShowItemHTML();
											that.setDeleteAllBtnText(mainEvent.animElement);
											popsConfirm.close();
										} else {
											Qmsg.error("已存在重复的规则");
										}
									}
								},
							},
							cancel: {
								text: "取消",
								enable: true,
							},
						},
						class: "whitesevPopNetDiskAccessCodeRuleAddOrEdit",
						style: /*css*/ `
						${pops.config.cssText.panelCSS}

						.whitesevPopNetDiskAccessCodeRuleAddOrEdit .whitesev-accesscode-rule{
							display: flex;
							justify-content: space-between;
							margin: 4px 4px;
						}
						.whitesevPopNetDiskAccessCodeRuleAddOrEdit .whitesev-accesscode-rule select{
							height: 150px;
						}
						`,
					},
					NetDiskUI.popsStyle.accessCodeRuleEditView
				);
				this.setRuleEvent(popsConfirm.element);
				if (isEdit) {
					popsConfirm.element.querySelector(
						'.whitesev-accesscode-rule input[val-key="access-rule-url"]'
					).value = oldValue.urlRegexp;
					let optionElement = popsConfirm.element.querySelectorAll(
						'.whitesev-accesscode-rule select[val-key="access-rule-netdisk"] option'
					);
					oldValue.netdisk.forEach((item) => {
						optionElement.forEach((element) => {
							if (element.getAttribute("data-value") === item.value) {
								element.selected = true;
								log.success(["选中", element]);
								return;
							}
						});
					});
					popsConfirm.element.querySelector(
						'.whitesev-accesscode-rule input[val-key="access-rule-accesscode"]'
					).value = oldValue.accessCode;
				}
			},
			/**
			 * 修改 删除所有(xx)的文字
			 * @param {HTMLElement} element
			 */
			setDeleteAllBtnText(element) {
				if (
					element.querySelector(
						".pops-confirm-btn button.pops-confirm-btn-other"
					)
				) {
					element.querySelector(
						".pops-confirm-btn button.pops-confirm-btn-other"
					).textContent = `清空所有(${this.getValue().length})`;
				} else if (element.getRootNode() instanceof ShadowRoot) {
					element
						.getRootNode()
						.querySelector(
							".whitesevPopNetDiskAccessCodeRule .pops-confirm-btn button.pops-confirm-btn-other"
						).textContent = `清空所有(${this.getValue().length})`;
				}
			},
			/**
			 * 校验填写的匹配网站正则规则是否正确
			 * @param {string} accessRuleUrl 填写的匹配网站正则规则
			 * @returns {boolean}
			 */
			checkRuleUrlValid(accessRuleUrl) {
				if (utils.isNull(accessRuleUrl)) {
					Qmsg.error("匹配网站的正则不能为空或纯空格");
					return false;
				}
				try {
					new RegExp(accessRuleUrl);
				} catch (error) {
					log.error(error);
					Qmsg.error("匹配网站的正则错误</br>" + error.message, {
						html: true,
						timeout: 5000,
					});
					return false;
				}
				return true;
			},
			/**
			 * 设置事件
			 * @param {object} event
			 */
			setEvent(event) {
				let that = this;
				DOMUtils.on(
					event.animElement,
					"click",
					".netdisk-accesscode-rule-table div.accesscode-rule-functions button[data-delete]",
					function () {
						let dataJSON = this.closest(
							".accesscode-rule-functions"
						).getAttribute("data-json");
						dataJSON = utils.toJSON(dataJSON);
						log.success(["删除👉", dataJSON]);
						if (that.deleteValue(dataJSON)) {
							this.closest("li").remove();
							that.setDeleteAllBtnText(event.animElement);
						} else {
							Qmsg.error("删除失败");
						}
					}
				);
				DOMUtils.on(
					event.element,
					"click",
					".netdisk-accesscode-rule-table div.accesscode-rule-functions button[data-edit]",
					function () {
						let dataJSON = this.closest(
							".accesscode-rule-functions"
						).getAttribute("data-json");
						dataJSON = utils.toJSON(dataJSON);
						log.success(["修改👉", dataJSON]);
						let newEvent = Object.assign({}, event);
						newEvent.animElement = newEvent.element;
						that.showRule(newEvent, true, dataJSON);
					}
				);
			},
			/**
			 * 设置事件
			 * @param {HTMLElement} element 弹窗元素
			 */
			setRuleEvent(element) {},
			/**
			 * 获取值
			 * @returns {{
			 * urlRegexp: string,
			 * netdisk: {name:string,value:string}[]
			 * accessCode: string,
			 * }[]}
			 */
			getValue() {
				return GM_getValue("accessCodeRule", []);
			},
			/**
			 * 设置值
			 * @param {{
			 * urlRegexp: string,
			 * netdisk: {name:string,value:string}[]
			 * accessCode: string,
			 * }} value
			 */
			setValue(value) {
				let localData = this.getValue();
				localData.push(value);
				GM_setValue("accessCodeRule", localData);
			},
			/**
			 * 修改值
			 * @param {{
			 * urlRegexp: string,
			 * netdisk: {name:string,value:string}[]
			 * accessCode: string,
			 * }} oldValue
			 * @param {{
			 * urlRegexp: string,
			 * netdisk: {name:string,value:string}[]
			 * accessCode: string,
			 * }} newValue
			 * @returns {boolean} 是否修改成功
			 */
			changeValue(oldValue, newValue) {
				let result = false;
				let localData = this.getValue();
				let oldValueStr = JSON.stringify(oldValue);
				for (let i = 0; i < localData.length; i++) {
					if (JSON.stringify(localData[i]) === oldValueStr) {
						localData[i] = newValue;
						result = true;
						break;
					}
				}
				GM_setValue("accessCodeRule", localData);
				return result;
			},
			/**
			 * 添加值
			 * @param {{
			 * urlRegexp: string,
			 * netdisk: {name:string,value:string}[]
			 * accessCode: string,
			 * }} value
			 */
			addValue(value) {
				let result = true;
				let localData = this.getValue();
				for (let i = 0; i < localData.length; i++) {
					if (
						localData[i].urlRegexp === value.urlRegexp &&
						localData[i].netdisk === value.netdisk
					) {
						result = false;
						break;
					}
				}
				if (result) {
					localData.push(value);
					this.setValue(value);
				}
				return result;
			},
			/**
			 * 删除值
			 */
			deleteValue(value) {
				let result = false;
				let localData = this.getValue();
				let valueStr = JSON.stringify(value);
				for (let i = 0; i < localData.length; i++) {
					if (JSON.stringify(localData[i]) === valueStr) {
						localData.splice(i, 1);
						result = true;
						break;
					}
				}
				if (result) {
					GM_setValue("accessCodeRule", localData);
				}
				return result;
			},
			/**
			 * 清空所有规则
			 */
			deleteAllValue() {
				GM_setValue("accessCodeRule", []);
			},
		},
		/**
		 * 主动识别文本
		 */
		matchPasteText: {
			show() {
				let popsConfirm = NetDiskPops.confirm(
					{
						title: {
							text: "主动识别文本",
							position: "center",
						},
						content: {
							text: /*html*/ `
							<textarea class="netdisk-match-paste-text"></textarea>
							`,
							html: true,
						},
						btn: {
							ok: {
								text: "识别",
								callback() {
									let inputText =
										popsConfirm.popsElement?.querySelector(
											".netdisk-match-paste-text"
										)?.value || "";
									if (inputText.trim() !== "") {
										/* 排除中文 */
										inputText = inputText.replace(/[\u4e00-\u9fa5]/g, "");
										NetDiskWorker.postMessage({
											textList: [inputText],
											matchTextRange: GM_getValue(
												"pageMatchRange",
												"all"
											).toLowerCase(),
											regular: NetDisk.regular,
											startTime: Date.now(),
											from: "PasteText",
										});
									}
								},
							},
						},
						class: "whitesevPopNetDiskMatchPasteText",
						style: this.getCSS(),
					},
					NetDiskUI.popsStyle.matchPasteTextView
				);
				popsConfirm.popsElement.querySelector("textarea").focus();
			},
			getCSS() {
				return /*css*/ `
			.pops[type-value=confirm] .pops-confirm-content{
				overflow: hidden;
			}
			.netdisk-match-paste-text {
				--textarea-bd-color: #dcdfe6;
				display: inline-block;
				resize: vertical;
				padding: 5px 15px;
				line-height: 1.5;
				box-sizing: border-box;
				color: #606266;
				border: 1px solid var(--textarea-bd-color);
				border-radius: 4px;
				transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
				outline: none;
				margin: 0;
				-webkit-appearance: none;
				-moz-appearance: none;
				appearance: none;
				background: none;
				width: 100%;
				height: 100%;
				appearance: none;
				resize: none;
			}
			.netdisk-match-paste-text:hover{
				--textarea-bd-color: #c0c4cc;
			}
			.netdisk-match-paste-text:focus{
				--textarea-bd-color: #3677f0;
			}
			`;
			},
			/**
			 *
			 * @param {NetDiskWorkerCallBackOptions} data
			 */
			matchEndCallBack(data) {
				if (data.data.length) {
					Qmsg.success(
						`成功匹配${data.data.length}个，用时${
							Date.now() - data.startTime
						}ms`
					);
				} else {
					Qmsg.error("未识别到链接");
				}
			},
		},
		/**
		 * 设置标题的右键菜单
		 */
		setGlobalRightClickMenu(element) {
			NetDiskUI.view.registerContextMenu(element, void 0, [
				{
					text: "设置",
					callback() {
						log.info("打开-设置");
						NetDiskUI.suspension.showSettingView();
					},
				},
				{
					text: "历史匹配记录",
					callback() {
						log.info("打开-历史匹配记录");
						NetDiskUI.netDiskHistoryMatch.show();
					},
				},
				{
					text: "访问码规则",
					callback() {
						log.info("打开-访问码规则");
						NetDiskUI.accessCodeRule.show();
					},
				},
				{
					text: "自定义规则",
					callback() {
						log.info("打开-自定义规则");
						NetDiskCustomRules.showUI(false);
					},
				},
				{
					text: "主动识别文本",
					callback() {
						log.info("打开-主动识别文本");
						NetDiskUI.matchPasteText.show();
					},
				},
			]);
		},
		/**
		 * 设置右键菜单
		 * @param {HTMLElement | Window} target
		 * @param {string} selector
		 * @param {boolean} isHistoryView
		 */
		setRightClickMenu(target, selector, isHistoryView) {
			let showTextList = [
				{
					text: "复制链接",
					callback: function (event, contextMenuEvent) {
						let linkElement = contextMenuEvent.target;
						const { netDiskName, netDiskIndex, shareCode, accessCode } =
							NetDiskUI.getElementNetDiskLinkData(linkElement);
						NetDiskParse.copyText(
							netDiskName,
							netDiskIndex,
							shareCode,
							accessCode
						);
					},
				},
				{
					text: "访问链接",
					callback: function (event, contextMenuEvent) {
						let linkElement = contextMenuEvent.target;
						const { netDiskName, netDiskIndex, shareCode, accessCode } =
							NetDiskUI.getElementNetDiskLinkData(linkElement);
						let url = NetDiskParse.getBlankUrl(
							netDiskName,
							netDiskIndex,
							shareCode,
							accessCode
						);
						NetDiskParse.blank(
							url,
							netDiskName,
							netDiskIndex,
							shareCode,
							accessCode
						);
					},
				},
				{
					text: "修改访问码",
					callback: function (event, contextMenuEvent) {
						let linkElement = contextMenuEvent.target;
						const { netDiskName, netDiskIndex, shareCode, accessCode } =
							NetDiskUI.getElementNetDiskLinkData(linkElement);
						function newAccessCodeByHistoryViewCallBack(userInputAccessCode) {
							let currentTime = new Date().getTime();
							let data = GM_getValue(NetDiskUI.netDiskHistoryMatch.storageKey);
							let editFlag = false;
							data.forEach((item) => {
								if (
									item["netDiskName"] === netDiskName &&
									item["netDiskIndex"] === netDiskIndex &&
									item["shareCode"] === shareCode &&
									item["accessCode"] === accessCode
								) {
									item = utils.assign(item, {
										accessCode: userInputAccessCode,
										updateTime: currentTime,
									});
									log.success(["成功找到项", item]);
									editFlag = true;
									return;
								}
							});
							if (editFlag) {
								GM_setValue(NetDiskUI.netDiskHistoryMatch.storageKey, data);
								linkElement
									.closest("li")
									.querySelector(
										".netdiskrecord-update-time"
									).lastChild.textContent = utils.formatTime(currentTime);
								linkElement.setAttribute(
									"data-accesscode",
									userInputAccessCode
								);
								Qmsg.success(
									/*html*/ `
									<div style="text-align: left;">旧: ${accessCode}</div>
									<div style="text-align: left;">新: ${userInputAccessCode}</div>`,
									{
										html: true,
									}
								);
							} else {
								Qmsg.error("修改失败");
							}
						}
						function newAccessCodeCallBack_(userInputAccessCode) {
							event.target.setAttribute("data-accesscode", userInputAccessCode);
							let netDiskDict = NetDisk.linkDict.get(netDiskName);
							if (netDiskDict.has(shareCode)) {
								let currentDict = netDiskDict.get(shareCode);
								netDiskDict.set(
									shareCode,
									NetDisk.getLinkDickObj(
										userInputAccessCode,
										netDiskIndex,
										true,
										currentDict.matchText
									)
								);
								Qmsg.success(
									/*html*/ `
									<div style="text-align: left;">旧: ${accessCode}</div>
									<div style="text-align: left;">新: ${userInputAccessCode}</div>`,
									{
										html: true,
									}
								);
							} else {
								Qmsg.error("该访问码不在已获取的字典中：" + shareCode);
							}
						}
						NetDiskUI.newAccessCodeView(
							this.text,
							netDiskName,
							netDiskIndex,
							shareCode,
							(userInputAccessCode) => {
								if (isHistoryView) {
									newAccessCodeByHistoryViewCallBack(userInputAccessCode);
								} else {
									newAccessCodeCallBack_(userInputAccessCode);
								}
							}
						);
					},
				},
			];
			NetDiskUI.view.registerContextMenu(target, selector, showTextList);
		},
		/**
		 * 获取元素.netdisk-link上的data属性
		 * @param {HTMLAnchorElement} $netDiskLink
		 */
		getElementNetDiskLinkData($netDiskLink) {
			let netDiskName = $netDiskLink.getAttribute("data-netdisk");
			let netDiskIndex = parseInt(
				$netDiskLink.getAttribute("data-netdisk-index")
			);
			if (isNaN(netDiskIndex)) {
				log.warn(["元素上的netDiskIndex的值是NaN", $netDiskLink]);
				netDiskIndex = 0;
			}
			let shareCode = $netDiskLink.getAttribute("data-sharecode");
			let accessCode = $netDiskLink.getAttribute("data-accesscode");
			return {
				netDiskName,
				netDiskIndex,
				shareCode,
				accessCode,
			};
		},
	};

	/** 全局快捷键 */
	const NetDiskShortcut = {
		/**
		 * 是否正在等待用户按下键盘
		 */
		isWaitUserPressKeyboard: false,
		/**
		 * 获取本地存储的值
		 * @param {?string} key
		 * @param {?string} defaultVal
		 * @returns {{
		 * key: string,
		 * value: {
		 * keyName: string,
		 * keyValue: number|string,
		 * ohterCodeList: string[]
		 * }
		 * }|{
		 * keyName: string,
		 * keyValue: number|string,
		 * ohterCodeList: string[]
		 * }[]}
		 */
		getValue(key, defaultVal) {
			let value = GM_getValue("GM_shortcut", []);
			if (key) {
				for (let index = 0; index < value.length; index++) {
					let item = value[index];
					if (item["key"] === key) {
						return item["value"];
					}
				}
				return defaultVal;
			} else {
				return value;
			}
		},
		/**
		 * 删除本地存储的快捷键值
		 * @param {string} key
		 */
		deleteValue(key) {
			let value = this.getValue();
			let findValueIndex = value.findIndex((item) => item["key"] === key);
			if (findValueIndex !== -1) {
				value.splice(findValueIndex, 1);
			}
			GM_setValue("GM_shortcut", value);
		},
		/**
		 * 保存设置的快捷键到本地存储
		 * @param {string} key
		 * @param {string} keyName
		 * @param {string} keyValue
		 * @param {string[]} ohterCodeList
		 */
		setValue(key, keyName, keyValue, ohterCodeList) {
			let value = this.getValue();
			value.push({
				key: key,
				value: {
					keyName: keyName,
					keyValue: keyValue,
					ohterCodeList: ohterCodeList,
				},
			});
			GM_setValue("GM_shortcut", value);
		},
		/**
		 * 获取快捷键显示的文字
		 * @param {string} key
		 * @param {string} defaultValue
		 */
		getShowText(key, defaultValue) {
			let localValue = this.getValue(key);
			if (localValue) {
				/* 如果获取到，转需要显示的文字 */
				let result = "";
				localValue["ohterCodeList"].forEach((item) => {
					result += utils.stringTitleToUpperCase(item, true) + " + ";
				});
				result += localValue["keyName"];
				return result;
			} else {
				/* 未获取到，显示为默认的文字 */
				return defaultValue;
			}
		},
		/**
		 * 快捷键按钮录入的点击事件
		 */
		buttonClickCallBack(event, key, defaultValue) {
			let localValue = this.getValue(key, defaultValue);
			let spanElement = event.target
				.closest(".pops-panel-button")
				.querySelector("span");
			if (localValue === defaultValue) {
				/* 设置快捷键 */
				let loadingQmsg = Qmsg.loading("请按下快捷键...", {
					showClose: true,
					onClose() {
						keyboardListener.removeListen();
					},
				});
				NetDiskShortcut.isWaitUserPressKeyboard = true;
				let keyboardListener = utils.listenKeyboard(
					window,
					"keyup",
					(keyName, keyValue, ohterCodeList) => {
						let shortcutJSONString = JSON.stringify({
							keyName: keyName,
							keyValue: keyValue,
							ohterCodeList: ohterCodeList,
						});
						let allDetails = this.getValue();
						for (let index = 0; index < allDetails.length; index++) {
							if (
								shortcutJSONString ===
								JSON.stringify(allDetails[index]["value"])
							) {
								Qmsg.error(
									`快捷键 ${this.getShowText(
										allDetails[index]["key"]
									)} 已被占用`
								);
								NetDiskShortcut.isWaitUserPressKeyboard = false;
								loadingQmsg.close();
								return;
							}
						}
						this.setValue(key, keyName, keyValue, ohterCodeList);
						spanElement.innerHTML = this.getShowText(key, defaultValue);
						NetDiskShortcut.isWaitUserPressKeyboard = false;
						loadingQmsg.close();
					}
				);
			} else {
				/* 清空快捷键 */
				this.deleteValue(key);
			}

			spanElement.innerHTML = this.getShowText(key, defaultValue);
		},
		/**
		 * 初始化全局键盘监听
		 */
		initGlobalKeyboardListener() {
			let localValue = this.getValue();
			if (!localValue.length) {
				/* 没有设置快捷键 */
				return;
			}
			utils.listenKeyboard(
				window,
				"keydown",
				(keyName, keyValue, ohterCodeList) => {
					if (NetDiskShortcut.isWaitUserPressKeyboard) {
						return;
					}
					localValue = this.getValue();
					let findShortcutIndex = localValue.findIndex((item) => {
						let itemValue = item["value"];
						let tempValue = {
							keyName: keyName,
							keyValue: keyValue,
							ohterCodeList: ohterCodeList,
						};
						if (JSON.stringify(itemValue) === JSON.stringify(tempValue)) {
							return item;
						}
					});
					if (findShortcutIndex != -1) {
						let findShortcut = localValue[findShortcutIndex];
						log.info(["调用快捷键", findShortcut]);
						if (findShortcut["key"] === "netdisk-keyboard-open-setting") {
							log.info("打开设置");
							NetDiskUI.suspension.showSettingView();
						} else if (
							findShortcut["key"] ===
							"netdisk-keyboard-open-history-matching-records"
						) {
							log.info("打开历史匹配记录");
							NetDiskUI.netDiskHistoryMatch.show();
						} else if (
							findShortcut["key"] === "netdisk-keyboard-open-accesscode-rule"
						) {
							log.info("打开访问码规则");
							NetDiskUI.accessCodeRule.show();
						} else if (
							findShortcut["key"] === "netdisk-keyboard-open-user-rule"
						) {
							log.info("打开用户自定义规则");
							NetDiskCustomRules.showUI(false);
						} else if (
							findShortcut["key"] ===
							"netdisk-keyboard-open-proactively-recognize-text"
						) {
							log.info("打开主动识别文本");
							NetDiskUI.matchPasteText.show();
						} else {
							log.error("还未配置调用函数");
						}
					}
				}
			);
		},
	};

	/** pops弹窗 */
	const NetDiskPops = {
		/**
		 * 普通信息框
		 * @param {PopsAlertDetails} details 配置
		 * @param {{
		 * PC: {
		 *  width: string,
		 *  height: string,
		 * },
		 * Mobile: {
		 *  width: string,
		 *  height: string
		 * }
		 * }} sizeConfig 大小配置
		 * @returns {PopsCallResult}
		 */
		alert(details, sizeConfig) {
			details = this.handleDetails(details, sizeConfig);
			return pops.alert(details);
		},
		/**
		 * 询问框
		 * @param {PopsConfirmDetails} details 配置
		 * @param {?{
		 * PC: {
		 *  width: string,
		 *  height: string,
		 * },
		 * Mobile: {
		 *  width: string,
		 *  height: string
		 * }
		 * }} sizeConfig 大小配置
		 * @returns {PopsCallResult}
		 */
		confirm(details, sizeConfig) {
			details = this.handleDetails(details, sizeConfig);
			return pops.confirm(details);
		},
		/**
		 * 加载层
		 * @param {PopsLoadingDetails} details 配置
		 * @returns {PopsCallResult}
		 */
		loading(details) {
			if (typeof details["animation"] === "undefined") {
				details["animation"] = GM_getValue(
					"popsAnimation",
					NetDiskUI.defaultAnimation
				);
			}
			if (typeof details["forbiddenScroll"] === "undefined") {
				details["forbiddenScroll"] = NetDiskUI.defaultForbiddenScroll;
			}
			return pops.loading(details);
		},
		/**
		 * 输入框
		 * @param {PopsPromptDetails} details 配置
		 * @param {?{
		 * PC: {
		 *  width: string,
		 *  height: string,
		 * },
		 * Mobile: {
		 *  width: string,
		 *  height: string
		 * }
		 * }} sizeConfig 大小配置
		 * @returns {PopsCallResult}
		 */
		prompt(details, sizeConfig) {
			details = this.handleDetails(details, sizeConfig);
			return pops.prompt(details);
		},
		/**
		 * 文件夹
		 * @param {PopsFolderDetails} details 配置
		 * @returns {PopsCallResult}
		 */
		folder(details, sizeConfig) {
			details = this.handleDetails(details, sizeConfig);
			details["sort"] = {
				name: GM_getValue("pops-folder-sort-name", NetDiskUI.defaultSortName),
				isDesc: GM_getValue(
					"pops-folder-sort-is-desc",
					NetDiskUI.defaultSortDesc
				),
				callback(target, event, sortName, sortDesc) {
					GM_setValue("pops-folder-sort-name", sortName);
					GM_setValue("pops-folder-sort-is-desc", sortDesc);
				},
			};
			return pops.folder(details);
		},
		/**
		 * 菜单面板
		 * @param {PopsPanelDetails} details 配置
		 * @returns {PopsCallResult}
		 */
		panel(details, sizeConfig) {
			details = this.handleDetails(details, sizeConfig);
			return pops.panel(details);
		},
		/**
		 *
		 * @param {PopsConfirmDetails} details
		 * @param {?{
		 * PC: {
		 *  width: string,
		 *  height: string,
		 * },
		 * Mobile: {
		 *  width: string,
		 *  height: string
		 * }
		 * }} sizeConfig 大小配置
		 */
		handleDetails(details, sizeConfig) {
			details = Object.assign(
				{
					animation: GM_getValue("popsAnimation", NetDiskUI.defaultAnimation),
					drag: GM_getValue("pcDrag", NetDiskUI.defaultPCDrag),
					dragLimit: GM_getValue("pcDragLimit", NetDiskUI.defaultPCDragLimit),
					forbiddenScroll: NetDiskUI.defaultForbiddenScroll,
				},
				details
			);
			if (sizeConfig != null) {
				details.width = pops.isPhone()
					? sizeConfig.Mobile.width
					: sizeConfig.PC.width;
				details.height = pops.isPhone()
					? sizeConfig.Mobile.height
					: sizeConfig.PC.height;
			}

			if (details.mask == null) {
				details.mask = {};
			}
			if (details.mask.enable == null) {
				details.mask.enable = true;
			}
			if (details.mask.clickEvent == null) {
				details.mask.clickEvent = {};
			}
			if (details.mask.clickEvent.toClose == null) {
				details.mask.clickEvent.toClose = GM_getValue(
					"clickMaskToCloseDialog",
					NetDiskUI.defaultClickMaskToCloseDialog
				);
			}
			if (GM_getValue("popsAcrylic", NetDiskUI.defaultPopsAcrylic)) {
				let acrylicCSS = /*css*/ `
				.pops {
					--acrylic-opacity: 0.7;
					--acrylic-color: rgba(232, 232, 232, var(--acrylic-opacity));
					--acrylic-blur: 30px;
					--acrylic-saturate: 125%;
					--pops-bg-opacity: var(--acrylic-opacity);
				}
				.pops {
					backdrop-filter: blur(var(--acrylic-blur)) saturate(var(--acrylic-saturate));
					background-color: var(--acrylic-color);
				}
				.pops[type-value=panel]{
					--aside-bg-color: rgba(221, 221, 221, var(--acrylic-opacity));
				}
				`;
				if (typeof details.style === "string") {
					details.style += acrylicCSS;
				} else {
					details.style = acrylicCSS;
				}
			}
			return details;
		},
	};

	/** 油猴菜单 */
	const NetDiskMenu = {
		/**
		 * 初始化
		 */
		init() {
			/* 不在iframe内进行注册 */
			if (!NetDiskUI.suspension.isTopWindow()) {
				return;
			}
			GM_Menu.add([
				{
					key: "showSetting",
					text: "⚙ 设置",
					showText(text) {
						return text;
					},
					callback() {
						NetDiskUI.suspension.showSettingView();
					},
				},
				{
					key: "showNetDiskHistoryMatch",
					text: "⚙ 历史匹配记录",
					showText(text) {
						return text;
					},
					callback() {
						NetDiskUI.netDiskHistoryMatch.show();
					},
				},
				{
					key: "showAccessCodeRule",
					text: "⚙ 访问码规则",
					showText(text) {
						return text;
					},
					callback() {
						NetDiskUI.accessCodeRule.show();
					},
				},
				{
					key: "showUserRule",
					text: "⚙ 用户自定义规则",
					showText(text) {
						return text;
					},
					callback() {
						NetDiskCustomRules.showUI(false);
					},
				},
				{
					key: "showMatchPasteText",
					text: "⚙ 主动识别文本",
					showText(text) {
						return text;
					},
					callback() {
						NetDiskUI.matchPasteText.show();
					},
				},
			]);
		},
		/**
		 * 初始化环境变量
		 */
		initEnv() {
			if (GM_getValue("allowMatchLocationHref")) {
				NetDisk.allowMatchLocationHref = true;
			}
		},
	};

	/* -------入口------- */
	log.config({
		logMaxCount: 100,
		autoClearConsole: true,
	});
	Object.assign(
		NetDiskUI.src.icon,
		typeof RESOURCE_ICON === "undefined" ? {} : RESOURCE_ICON
	);
	NetDiskMenu.init();
	NetDiskMenu.initEnv();
	NetDiskUI.initQmsg();
	NetDiskCustomRules.init();
	NetDisk.init();
	NetDiskShortcut.initGlobalKeyboardListener();
	DOMUtils.ready(function () {
		httpx.config({
			headers: {
				"User-Agent": utils.getRandomPCUA(),
			},
			onabort() {
				Qmsg.error("请求被取消");
			},
			ontimeout() {
				Qmsg.error("请求超时");
			},
			onerror(response) {
				Qmsg.error("请求异常");
				log.error(["httpx-onerror", response]);
			},
		});
		NetDiskAutoFillAccessCode.init();
		NetDiskAuthorization.init();
		NetDiskWorker.monitorDOMChange();
	});
})();
