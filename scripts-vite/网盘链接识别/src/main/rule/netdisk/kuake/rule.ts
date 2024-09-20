import { NetDiskRuleConfig, NetDiskRuleSetting } from "../../NetDiskRule";

export const NetDiskRule_kuake: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskMatchRuleOption[]>[
		{
			link_innerText: `quark.cn/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `quark.cn/s/[0-9a-zA-Z-_]{8,24}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
			shareCode: /quark.cn\/s\/([0-9a-zA-Z\-_]{8,24})/gi,
			shareCodeNeedRemoveStr: /quark.cn\/s\//gi,
			checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4})/gi,
			uiLinkShow: "quark.cn/s/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://pan.quark.cn/s/{#shareCode#}",
			copyUrl: "https://pan.quark.cn/s/{#shareCode#}\n密码：{#accessCode#}",
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "夸克网盘",
		key: "kuake",
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
