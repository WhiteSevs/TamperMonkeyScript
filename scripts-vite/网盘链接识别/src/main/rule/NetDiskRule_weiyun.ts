import { NetDiskLocalData } from "../data/NetDiskLocalData";
import {
	NetDiskRule,
	NetDiskRuleConfig,
	NetDiskRuleSetting,
} from "./NetDiskRule";

export const NetDiskRule_weiyun: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskRegularOption[]>[
		{
			enable: NetDiskLocalData.function.enable("weiyun"),
			link_innerText: `weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"weiyun"
			)}(访问码|密码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"weiyun"
			)}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `weiyun.com/[0-9a-zA-Z-_]{7,24}([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"weiyun"
			)}(访问码|密码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
				"weiyun"
			)}[0-9a-zA-Z]{4,6}|)`,
			shareCode: /weiyun.com\/([0-9a-zA-Z\-_]{7,24})/gi,
			shareCodeNeedRemoveStr: /weiyun.com\//gi,
			checkAccessCode: /(提取码|密码|访问码)[\s\S]+/g,
			accessCode: /([0-9a-zA-Z]{4,6})/gi,
			uiLinkShow: "share.weiyun.com/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://share.weiyun.com/{#shareCode#}",
			copyUrl: "https://share.weiyun.com/{#shareCode#}\n密码：{#accessCode#}",
			checkLinkValidity: NetDiskLocalData.function.checkLinkValidity("weiyun"),
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "微云",
		key: "weiyun",
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
