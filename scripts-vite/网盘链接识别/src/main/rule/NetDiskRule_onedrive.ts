import { NetDiskLocalData } from "../data/NetDiskLocalData";
import {
	NetDiskRule,
	NetDiskRuleConfig,
	NetDiskRuleSetting,
} from "./NetDiskRule";

export const NetDiskRule_onedrive: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskRegularOption[]>[
		{
			enable: NetDiskLocalData.function.enable("onedrive"),
			link_innerText: `[0-9a-zA-Z-_]+.sharepoint.com/[0-9a-zA-Z-_:]+/[0-9a-zA-Z-_:]+/personal/[0-9a-zA-Z-_]+/[0-9a-zA-Z-_]+([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"onedrive"
			)}}(访问码|密码|提取码|\\?password=\\?e=)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"onedrive"
			)}}[0-9a-zA-Z]+|)`,
			link_innerHTML: `[0-9a-zA-Z-_]+.sharepoint.com/[0-9a-zA-Z-_:]+/[0-9a-zA-Z-_:]+/personal/[0-9a-zA-Z-_]+/[0-9a-zA-Z-_]+([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"onedrive"
			)}}(访问码|密码|提取码|\\?password=\\?e=)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
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
			checkLinkValidity:
				NetDiskLocalData.function.checkLinkValidity("onedrive"),
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "OneDrive",
		key: "onedrive",
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
				isForwardBlankLink: false,
				uri: "",
			},
		},
	},
};
