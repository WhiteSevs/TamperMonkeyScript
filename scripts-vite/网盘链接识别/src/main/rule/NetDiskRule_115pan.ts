import { NetDiskLocalData } from "../data/NetDiskLocalData";
import {
	NetDiskRule,
	NetDiskRuleConfig,
	NetDiskRuleSetting,
} from "./NetDiskRule";

export const NetDiskRule_115pan: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskRegularOption[]>[
		{
			enable: NetDiskLocalData.function.enable("_115pan"),
			link_innerText: `115.com/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"_115pan"
			)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"_115pan"
			)}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `115.com\/s\/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"_115pan"
			)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
				"_115pan"
			)}}[0-9a-zA-Z]{4}|)`,
			shareCode: /115.com\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
			shareCodeNeedRemoveStr: /115.com\/s\//gi,
			checkAccessCode: /(提取码|密码|\?password=|访问码)[\s\S]+/gi,
			accessCode: /(\?password=|)([0-9a-zA-Z]{4})/i,
			uiLinkShow: "115.com/s/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://115.com/s/{#shareCode#}",
			copyUrl: "https://115.com/s/{#shareCode#}\n密码：{#accessCode#}",
			checkLinkValidity: NetDiskLocalData.function.checkLinkValidity("_115pan"),
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "115网盘",
		key: "_115pan",
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
				checkLinkValidity: true,
			},
			linkClickMode_openBlank: {
				openBlankWithCopyAccessCode: true,
			},
			schemeUri: {
				enable: false,
				isForwardBlankLink: true,
				uri: "",
			},
		},
	},
};
