import type { NetDiskRuleConfig, NetDiskRuleSetting } from "../../NetDiskRule";

const _123pan_Link_Host_Pattern =
	"(123pan|123865|123684|123652|123912).(com|cn)";

export const NetDiskRule_123pan: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskMatchRuleOption[]>[
		{
			link_innerText: `${_123pan_Link_Host_Pattern}/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `${_123pan_Link_Host_Pattern}/s/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
			shareCode: new RegExp(
				`${_123pan_Link_Host_Pattern}/s/([a-zA-Z0-9_-]{8,14})`,
				"gi"
			),
			shareCodeNeedRemoveStr: new RegExp(
				`${_123pan_Link_Host_Pattern}/s/`,
				"gi"
			),
			checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
			accessCode: /([0-9a-zA-Z]{4})/gi,
			uiLinkShow: "123pan.com/s/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://123pan.com/s/{#shareCode#}",
			copyUrl: "https://123pan.com/s/{#shareCode#}\n密码：{#accessCode#}",
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
				linkClickMode: {
					openBlank: {
						default: true,
					},
					parseFile: {
						enable: true,
					},
					"parseFile-closePopup": {
						enable: true,
					},
				},
				checkLinkValidity: true,
				checkLinkValidityHoverTip: true,
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
