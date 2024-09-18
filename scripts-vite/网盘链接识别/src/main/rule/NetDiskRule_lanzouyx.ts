import { NetDiskLocalData } from "../data/NetDiskLocalData";
import {
	NetDiskRule,
	NetDiskRuleConfig,
	NetDiskRuleSetting,
} from "./NetDiskRule";

export const NetDiskRule_lanzouyx: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskRegularOption[]>[
		{
			enable: NetDiskLocalData.function.enable("lanzouyx"),
			link_innerText: `ilanzou.com/s/([a-zA-Z0-9_-]{5,22})([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"lanzouyx"
			)}}(密码|访问码|提取码|\\?code=)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"lanzouyx"
			)}}[a-zA-Z0-9]{3,6}|)`,
			link_innerHTML: `ilanzou.com/s/([a-zA-Z0-9_-]{5,22})([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"lanzouyx"
			)}}(密码|访问码|提取码|\\?code=)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
				"lanzouyx"
			)}}[a-zA-Z0-9]{3,6}|)`,
			shareCode: /ilanzou.com\/s\/([a-zA-Z0-9_\-]{5,22})/gi,
			shareCodeNeedRemoveStr: /ilanzou.com\/s\//gi,
			checkAccessCode: /(密码|访问码|提取码|\?code=)[\s\S]+/g,
			accessCode: /([0-9a-zA-Z]{3,})/gi,
			uiLinkShow: `www.ilanzou.com/s/{#shareCode#} 提取码: {#accessCode#}`,
			blank: `https://www.ilanzou.com/s/{#shareCode#}?code={#accessCode#}`,
			copyUrl: `https://www.ilanzou.com/s/{#shareCode#}?code={#accessCode#}`,
			checkLinkValidity:
				NetDiskLocalData.function.checkLinkValidity("lanzouyx"),
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "蓝奏云优享",
		key: "lanzouyx",
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
