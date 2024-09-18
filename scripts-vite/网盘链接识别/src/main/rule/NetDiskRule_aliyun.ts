import { NetDiskLocalData } from "../data/NetDiskLocalData";
import {
	NetDiskRule,
	NetDiskRuleConfig,
	NetDiskRuleSetting,
} from "./NetDiskRule";

export const NetDiskRule_aliyun: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskRegularOption[]>[
		{
			enable: NetDiskLocalData.function.enable("aliyun"),
			link_innerText: `aliyundrive.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"aliyun"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"aliyun"
			)}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `aliyundrive.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"aliyun"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
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
			checkLinkValidity: NetDiskLocalData.function.checkLinkValidity("aliyun"),
		},
		{
			enable: NetDiskLocalData.function.enable("aliyun"),
			link_innerText: `aliyundrive.com/t/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"aliyun"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"aliyun"
			)}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `aliyundrive.com/t/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"aliyun"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
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
			checkLinkValidity: NetDiskLocalData.function.checkLinkValidity("aliyun"),
		},
		{
			enable: NetDiskLocalData.function.enable("aliyun"),
			link_innerText: `alipan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"aliyun"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"aliyun"
			)}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `alipan.com/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"aliyun"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
				"aliyun"
			)}}[0-9a-zA-Z]{4}|)`,
			shareCode: /alipan\.com\/s\/([a-zA-Z0-9_\-]{8,14})/g,
			shareCodeNeedRemoveStr: /alipan\.com\/s\//gi,
			checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
			accessCode: /([0-9a-zA-Z]{4})/gi,
			uiLinkShow: "alipan.com/s/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://www.alipan.com/s/{#shareCode#}",
			copyUrl: "https://www.alipan.com/s/{#shareCode#}\n密码：{#accessCode#}",
			checkLinkValidity: NetDiskLocalData.function.checkLinkValidity("aliyun"),
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "阿里云",
		key: "aliyun",
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
