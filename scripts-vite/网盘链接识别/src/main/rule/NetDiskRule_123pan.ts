import { NetDiskLocalData } from "../data/NetDiskLocalData";
import {
	NetDiskRule,
	NetDiskRuleConfig,
	NetDiskRuleSetting,
} from "./NetDiskRule";

export const NetDiskRule_123pan: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskRegularOption[]>[
		{
			enable: NetDiskLocalData.function.enable("_123pan"),
			link_innerText: `123pan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"_123pan"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"_123pan"
			)}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `123pan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"_123pan"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
				"_123pan"
			)}}[0-9a-zA-Z]{4}|)`,
			shareCode: /123pan.com\/s\/([a-zA-Z0-9_\-]{8,14})/gi,
			shareCodeNeedRemoveStr: /123pan.com\/s\//gi,
			checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
			accessCode: /([0-9a-zA-Z]{4})/gi,
			uiLinkShow: "123pan.com/s/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://123pan.com/s/{#shareCode#}",
			copyUrl: "https://123pan.com/s/{#shareCode#}\n密码：{#accessCode#}",
			checkLinkValidity: NetDiskLocalData.function.checkLinkValidity("_123pan"),
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "123盘",
		key: "_123pan",
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
