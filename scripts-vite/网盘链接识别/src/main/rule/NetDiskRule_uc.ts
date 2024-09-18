import { NetDiskLocalData } from "../data/NetDiskLocalData";
import {
	NetDiskRule,
	NetDiskRuleConfig,
	NetDiskRuleSetting,
} from "./NetDiskRule";

export const NetDiskRule_uc: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskRegularOption[]>[
		{
			enable: NetDiskLocalData.function.enable("uc"),
			link_innerText: `(drive|fast).uc.cn/s/[0-9a-zA-Z]{8,24}([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"uc"
			)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"uc"
			)}}[0-9a-zA-Z]+|)`,
			link_innerHTML: `(drive|fast).uc.cn/s/[0-9a-zA-Z]{8,24}([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"uc"
			)}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
				"uc"
			)}}[0-9a-zA-Z]+|)`,
			shareCode: /(drive|fast).uc.cn\/s\/([0-9a-zA-Z]{8,24})/gi,
			shareCodeNeedRemoveStr: /(drive|fast).uc.cn\/s\//gi,
			checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]+)/gi,
			uiLinkShow: "drive.uc.cn/s/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://drive.uc.cn/s/{#shareCode#}",
			copyUrl: "https://drive.uc.cn/s/{#shareCode#}\n密码：{#accessCode#}",
			checkLinkValidity: NetDiskLocalData.function.checkLinkValidity("uc"),
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "UC网盘",
		key: "uc",
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
