import { NetDiskLocalData } from "../data/NetDiskLocalData";
import {
	NetDiskRule,
	NetDiskRuleConfig,
	NetDiskRuleSetting,
} from "./NetDiskRule";

export const NetDiskRule_jianguoyun: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskRegularOption[]>[
		{
			enable: NetDiskLocalData.function.enable("jianguoyun"),
			link_innerText: `jianguoyun.com/p/[0-9a-zA-Z-_]{16,24}([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"jianguoyun"
			)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"jianguoyun"
			)}}[0-9a-zA-Z]+|)`,
			link_innerHTML: `jianguoyun.com/p/[0-9a-zA-Z-_]{16,24}([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"jianguoyun"
			)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
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
			checkLinkValidity:
				NetDiskLocalData.function.checkLinkValidity("jianguoyun"),
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "坚果云",
		key: "jianguoyun",
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
				isForwardLinearChain: false,
				isForwardBlankLink: false,
				uri: "",
			},
		},
	},
};
