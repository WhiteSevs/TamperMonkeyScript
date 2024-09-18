import { NetDiskLocalData } from "../data/NetDiskLocalData";
import {
	NetDiskRule,
	NetDiskRuleConfig,
	NetDiskRuleSetting,
} from "./NetDiskRule";

export const NetDiskRule_nainiu: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskRegularOption[]>[
		{
			enable: NetDiskLocalData.function.enable("nainiu"),
			link_innerText: `cowtransfer.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"nainiu"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"nainiu"
			)}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `cowtransfer.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"nainiu"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
				"nainiu"
			)}}[0-9a-zA-Z]{4,6}|)`,
			shareCode: /cowtransfer.com\/s\/([a-zA-Z0-9_\-]{8,14})/gi,
			shareCodeNeedRemoveStr: /cowtransfer\.com\/s\//gi,
			checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
			accessCode: /([0-9a-zA-Z]{4,6})/gi,
			uiLinkShow: "cowtransfer.com/s/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://cowtransfer.com/s/{#shareCode#}",
			copyUrl: "https://cowtransfer.com/s/{#shareCode#}\n密码：{#accessCode#}",
			checkLinkValidity: NetDiskLocalData.function.checkLinkValidity("nainiu"),
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "奶牛",
		key: "nainiu",
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
