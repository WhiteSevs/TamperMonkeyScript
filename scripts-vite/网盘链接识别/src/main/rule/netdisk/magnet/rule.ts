import type { NetDiskRuleConfig, NetDiskRuleSetting } from "../../NetDiskRule";

export const NetDiskRule_magnet: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskMatchRuleOption[]>[
		{
			link_innerText: `magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}`,
			link_innerHTML: `magnet:\\?xt=urn:btih:[0-9a-fA-F]{32,40}`,
			shareCode: /magnet:\?xt=urn:btih:([0-9a-fA-F]{32,40})/gi,
			shareCodeNeedRemoveStr: /magnet:\?xt=urn:btih:/gi,
			checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4})/gi,
			uiLinkShow: "magnet:?xt=urn:btih:{#shareCode#}",
			blank: "magnet:?xt=urn:btih:{#shareCode#}",
			copyUrl: "magnet:?xt=urn:btih:{#shareCode#}",
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "BT磁力",
		key: "magnet",
		configurationInterface: {
			function: {
				enable: true,
				linkClickMode: {
					openBlank: {
						default: true,
					},
				},
			},
			schemeUri: {
				enable: false,
				isForwardBlankLink: true,
				uri: "",
			},
		},
	},
};
