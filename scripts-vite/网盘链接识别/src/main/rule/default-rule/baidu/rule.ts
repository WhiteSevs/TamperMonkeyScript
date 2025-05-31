export const NetDiskRule_baidu: NetDiskRuleOption = {
	/** 规则 */
	rule: <NetDiskMatchRuleConfig[]>[
		{
			link_innerText: `pan.baidu.com/s/[0-9a-zA-Z-_]{6,24}([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码|\\?pwd=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `pan.baidu.com/s/[0-9a-zA-Z-_]{6,24}([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码|\\?pwd=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
			shareCode: /pan\.baidu\.com\/s\/([0-9a-zA-Z-_]+)/gi,
			shareCodeNeedRemoveStr: /pan\.baidu\.com\/s\//gi,
			checkAccessCode: /(密码|访问码|提取码|pwd=)[\s\S]+/g,
			accessCode: /([0-9a-zA-Z]{4})/gi,
			uiLinkShow: "pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}",
			blank: "https://pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}",
			copyUrl: "https://pan.baidu.com/s/{#shareCode#}?pwd={#accessCode#}",
		},
		{
			link_innerText: `pan.baidu.com/(share|wap)/init\\?surl=[0-9a-zA-Z-_]{5,24}([\\s\\S]{0,{#matchRange-text-before#}}(密码|访问码|提取码|&pwd=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `pan.baidu.com/(share|wap)/init\\?surl=[0-9a-zA-Z-_]{5,24}([\\s\\S]{0,{#matchRange-html-before#}}(密码|访问码|提取码|&pwd=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4}|)`,
			shareCode: /pan\.baidu\.com\/(share|wap)\/init\?surl=([0-9a-zA-Z-_]+)/gi,
			shareCodeNeedRemoveStr: /pan\.baidu\.com\/(share|wap)\/init\?surl=/gi,
			checkAccessCode: /(密码|访问码|提取码|&pwd=)[\s\S]+/g,
			accessCode: /([0-9a-zA-Z]{4})/gi,
			uiLinkShow:
				"pan.baidu.com/share/init?surl={#shareCode#}&pwd={#accessCode#}",
			blank:
				"https://pan.baidu.com/share/init?surl={#shareCode#}&pwd={#accessCode#}",
			copyUrl:
				"https://pan.baidu.com/share/init?surl={#shareCode#}&pwd={#accessCode#}",
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "百度网盘",
		key: "baidu",
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
				isForwardBlankLink: true,
				uri: "",
			},
			// ownFormList: [
			// 	{
			// 		text: "第三方解析站",
			// 		type: "forms",
			// 		forms: [
			// 			UISwitch(
			// 				"启用解析站",
			// 				"baidu-static-enable",
			// 				false,
			// 				void 0,
			// 				"开源项目：<a href='https://github.com/yuantuo666/baiduwp-php' target='_blank'>https://github.com/yuantuo666/baiduwp-php</a>"
			// 			),
			// 			UISwitch(
			// 				"跳转时复制链接",
			// 				"baidu-baiduwp-php-copy-url",
			// 				false,
			// 				void 0,
			// 				"跳转至解析站时复制百度网盘链接"
			// 			),
			// 			UIInput(
			// 				"网址",
			// 				"baidu-baiduwp-php-url",
			// 				"",
			// 				"解析站的网址Url",
			// 				void 0,
			// 				"使用了baiduwp-php源码的网站，例如：https://www.example.com/"
			// 			),
			// 			UIInput(
			// 				"表单参数",
			// 				"baidu-baiduwp-php-post-form",
			// 				"",
			// 				"解析站的网址Url",
			// 				void 0,
			// 				"POST表单，例如：surl={#shareCode#}&pwd={#accessCode#}&password="
			// 			),
			// 		],
			// 	},
			// ],
		},
	},
};
