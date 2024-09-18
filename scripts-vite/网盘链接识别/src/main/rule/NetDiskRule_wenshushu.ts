import { NetDiskLocalData } from "../data/NetDiskLocalData";
import {
	NetDiskRule,
	NetDiskRuleConfig,
	NetDiskRuleSetting,
} from "./NetDiskRule";

export const NetDiskRule_wenshushu: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskRegularOption[]>[
		{
			enable: NetDiskLocalData.function.enable("wenshushu"),
			link_innerText: `(wenshushu.cn/f/([a-zA-Z0-9_-]{8,14})|wenshushu.cn/k/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"wenshushu"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"wenshushu"
			)}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `(wenshushu.cn/f/([a-zA-Z0-9_-]{8,14})|wenshushu.cn/k/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"wenshushu"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
				"wenshushu"
			)}}[0-9a-zA-Z]{4}|)`,
			shareCode:
				/wenshushu.cn\/f\/([a-zA-Z0-9_-]{8,14})|wenshushu.cn\/k\/([a-zA-Z0-9_-]{8,14})/gi,
			shareCodeNeedRemoveStr: /wenshushu.cn\/f\/|wenshushu.cn\/k\//gi,
			checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
			accessCode: /[0-9a-zA-Z]{4}/gi,
			uiLinkShow: "www.wenshushu.cn/f/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://www.wenshushu.cn/f/{#shareCode#}",
			copyUrl: "https://www.wenshushu.cn/f/{#shareCode#}\n密码：{#accessCode#}",
			checkLinkValidity:
				NetDiskLocalData.function.checkLinkValidity("wenshushu"),
		},
		{
			enable: NetDiskLocalData.function.enable("wenshushu"),
			link_innerText: `(wss.ink/f/([a-zA-Z0-9_-]{8,14})|ws28.cn/f/([a-zA-Z0-9_-]{8,14})|wss1.cn/f/([a-zA-Z0-9_-]{8,14})|ws59.cn/f/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"wenshushu"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"wenshushu"
			)}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `(wss.ink/f/([a-zA-Z0-9_-]{8,14})|ws28.cn/f/([a-zA-Z0-9_-]{8,14})|wss1.cn/f/([a-zA-Z0-9_-]{8,14})|ws59.cn/f/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"wenshushu"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
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
			copyUrl: "https://www.wenshushu.cn/f/{#shareCode#}\n密码：{#accessCode#}",
			checkLinkValidity:
				NetDiskLocalData.function.checkLinkValidity("wenshushu"),
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "文叔叔",
		key: "wenshushu",
		configurationInterface: {
			matchRange_text: {
				before: 20,
				after: 10,
			},
			matchRange_html: {
				before: 100,
				after: 15,
			},
			function: {
				enable: true,
				linkClickMode: "openBlank",
				linkClickMode_extend: ["parseFile"],
				checkLinkValidity: true,
			},
			linkClickMode_openBlank: {
				openBlankWithCopyAccessCode: true,
			},
			schemeUri: {
				enable: false,
				isForwardLinearChain: true,
				isForwardBlankLink: true,
				uri: "",
			},
		},
	},
};
