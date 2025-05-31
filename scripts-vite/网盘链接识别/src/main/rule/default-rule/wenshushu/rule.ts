export const NetDiskRule_wenshushu: NetDiskRuleOption = {
	/** 规则 */
	rule: <NetDiskMatchRuleConfig[]>[
		{
			link_innerText: `(wenshushu.cn|wss.ink|ws28.cn|wss1.cn|ws59.cn|wss.cc)/f/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `(wenshushu.cn|wss.ink|ws28.cn|wss1.cn|ws59.cn|wss.cc)/f/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
			shareCode:
				/(wenshushu.cn|wss.ink|ws28.cn|wss1.cn|ws59.cn|wss.cc)\/f\/([a-zA-Z0-9_-]{8,14})/gi,
			shareCodeNeedRemoveStr:
				/(wenshushu.cn|wss.ink|ws28.cn|wss1.cn|ws59.cn|wss.cc)\/f\//gi,
			checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
			accessCode: /[0-9a-zA-Z]{4}/gi,
			uiLinkShow: "www.wenshushu.cn/f/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://www.wenshushu.cn/f/{#shareCode#}",
			copyUrl: "https://www.wenshushu.cn/f/{#shareCode#}\n密码：{#accessCode#}",
		},
		{
			link_innerText: `wenshushu.cn/k/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `wenshushu.cn/k/([a-zA-Z0-9_-]{8,14})([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
			shareCode: /wenshushu.cn\/k\/([a-zA-Z0-9_-]{8,14})/gi,
			shareCodeNeedRemoveStr: /wenshushu.cn\/k\//gi,
			checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
			accessCode: /[0-9a-zA-Z]{4}/gi,
			uiLinkShow: "www.wenshushu.cn/k/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://www.wenshushu.cn/k/{#shareCode#}",
			copyUrl: "https://www.wenshushu.cn/k/{#shareCode#}\n密码：{#accessCode#}",
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "文叔叔",
		key: "wenshushu",
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
				openBlankAutoFilleAccessCode: true,
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
