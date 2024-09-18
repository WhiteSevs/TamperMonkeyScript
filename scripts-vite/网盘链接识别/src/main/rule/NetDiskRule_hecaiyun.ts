import { NetDiskLocalData } from "../data/NetDiskLocalData";
import {
	NetDiskRule,
	NetDiskRuleConfig,
	NetDiskRuleSetting,
} from "./NetDiskRule";

export const NetDiskRule_hecaiyun: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskRegularOption[]>[
		{
			enable: NetDiskLocalData.function.enable("hecaiyun"),
			link_innerText: `caiyun.139.com/m/i\\?([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"hecaiyun"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"hecaiyun"
			)}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `caiyun.139.com/m/i\\?([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"hecaiyun"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
				"hecaiyun"
			)}}[0-9a-zA-Z]{4}|)`,
			shareCode: /caiyun\.139\.com\/m\/i\?([a-zA-Z0-9_\-]{8,14})/gi,
			shareCodeNeedRemoveStr: /caiyun\.139\.com\/m\/i\?/gi,
			checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
			accessCode: /([0-9a-zA-Z]{4})/gi,
			uiLinkShow: "caiyun.139.com/m/i?{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://caiyun.139.com/m/i?{#shareCode#}",
			copyUrl: "https://caiyun.139.com/m/i?{#shareCode#}\n密码：{#accessCode#}",
			checkLinkValidity:
				NetDiskLocalData.function.checkLinkValidity("hecaiyun"),
		},
		{
			enable: NetDiskLocalData.function.enable("hecaiyun"),
			link_innerText: `yun.139.com/link/w/i/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"hecaiyun"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"hecaiyun"
			)}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `yun.139.com/link/w/i/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"hecaiyun"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
				"hecaiyun"
			)}}[0-9a-zA-Z]{4}|)`,
			shareCode: /yun\.139\.com\/link\/w\/i\/([a-zA-Z0-9_\-]{8,14})/gi,
			shareCodeNeedRemoveStr: /yun\.139\.com\/link\/w\/i\//gi,
			checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
			accessCode: /([0-9a-zA-Z]{4})/gi,
			uiLinkShow: "yun.139.com/link/w/i/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://yun.139.com/link/w/i/{#shareCode#}",
			copyUrl:
				"https://yun.139.com/link/w/i/{#shareCode#}\n密码：{#accessCode#}",
			checkLinkValidity:
				NetDiskLocalData.function.checkLinkValidity("hecaiyun"),
		},
	],

	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "中国移动云盘",
		key: "hecaiyun",
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
