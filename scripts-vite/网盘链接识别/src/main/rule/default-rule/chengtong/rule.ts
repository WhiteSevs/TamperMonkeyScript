import { UIInput } from "@components/setting/components/ui-input";

export const NetDiskRule_chengtong: NetDiskRuleOption = {
	/** 规则 */
	rule: <NetDiskMatchRuleConfig[]>[
		/* d */
		{
			link_innerText: `(pan.jc-box.com|download.jamcz.com|545c.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `(pan.jc-box.com|download.jamcz.com|545c.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
			shareCode:
				/(pan.jc-box.com|download.jamcz.com|545c.com)\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
			shareCodeNeedRemoveStr:
				/(pan.jc-box.com|download.jamcz.com|545c.com)\/d\//gi,
			checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4,6})/gi,
			paramMatch: /([a-zA-Z0-9\.]+)\/d\//i,
			uiLinkShow: "{#$1#}/d/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://{#$1#}/d/{#shareCode#}?p={#accessCode#}",
			copyUrl:
				"https://{#$1#}/d/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
		},
		/* d ==> http */
		{
			link_innerText: `ct.ghpym.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `ct.ghpym.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
			shareCode: /ct.ghpym.com\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
			shareCodeNeedRemoveStr: /ct.ghpym.com\/d\//gi,
			checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4,6})/gi,
			paramMatch: /([a-zA-Z0-9\.]+)\/d\//i,
			uiLinkShow: "{#$1#}/d/{#shareCode#} 提取码: {#accessCode#}",
			blank: "http://{#$1#}/d/{#shareCode#}?p={#accessCode#}",
			copyUrl:
				"http://{#$1#}/d/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
		},
		/* d */
		{
			link_innerText: `ctfile.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `ctfile.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
			shareCode: /ctfile.com\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
			shareCodeNeedRemoveStr: /ctfile.com\/d\//gi,
			checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4,6})/gi,
			uiLinkShow: "url95.ctfile.com/d/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://url95.ctfile.com/d/{#shareCode#}?p={#accessCode#}",
			copyUrl:
				"https://url95.ctfile.com/d/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
		},
		/* file */
		{
			link_innerText: `(2k.us|u062.com|545c.com|t00y.com|tc5.us)/file/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `(2k.us|u062.com|545c.com|t00y.com|tc5.us)/file/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
			shareCode:
				/(2k.us|u062.com|545c.com|t00y.com|tc5.us)\/file\/([0-9a-zA-Z\-_]{8,26})/gi,
			shareCodeNeedRemoveStr:
				/(2k.us|u062.com|545c.com|t00y.com|tc5.us)\/file\//gi,
			checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4,6})/gi,
			uiLinkShow: "u062.com/file/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://u062.com/file/{#shareCode#}?p={#accessCode#}",
			copyUrl:
				"https://u062.com/file/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
		},
		/* f ==> http  */
		{
			link_innerText: `(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
			shareCode:
				/(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
			shareCodeNeedRemoveStr:
				/(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc|download.jamcz.com|download.macenjoy.co)\/f\//gi,
			checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4,6})/gi,
			paramMatch: /([0-9a-zA-Z\.]+)\/f\//i,
			uiLinkShow: "{#$1#}/f/{#shareCode#} 提取码: {#accessCode#}",
			blank: "http://{#$1#}/f/{#shareCode#}?p={#accessCode#}",
			copyUrl:
				"http://{#$1#}/f/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
		},
		/* f ==> http  */
		{
			link_innerText: `url[0-9]{2}.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `url[0-9]{2}.com/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
			shareCode: /url[0-9]{2}.com\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
			shareCodeNeedRemoveStr: /url[0-9]{2}.com\/f\//gi,
			checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4,6})/gi,
			paramMatch: /([0-9a-zA-Z\.]+)\/f\//i,
			uiLinkShow: "{#$1#}/f/{#shareCode#} 提取码: {#accessCode#}",
			blank: "http://{#$1#}/f/{#shareCode#}?p={#accessCode#}",
			copyUrl:
				"http://{#$1#}/f/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
		},
		/* f */
		{
			link_innerText: `(ctfile.com|089u.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `(ctfile.com|089u.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
			shareCode: /(ctfile.com|089u.com)\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
			shareCodeNeedRemoveStr: /(ctfile.com|089u.com)\/f\//gi,
			checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4,6})/gi,
			uiLinkShow: "url95.ctfile.com/f/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://url95.ctfile.com/f/{#shareCode#}?p={#accessCode#}",
			copyUrl:
				"https://url95.ctfile.com/f/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
		},
		/* dir */
		{
			link_innerText: `(089u.com|474b.com)/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `(089u.com|474b.com)/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=|\\?p=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{6}|)`,
			shareCode: /(089u.com|474b.com)\/dir\/([0-9a-zA-Z\-_]{8,26})/gi,
			shareCodeNeedRemoveStr: /(089u.com|474b.com)\/dir\//gi,
			checkAccessCode: /(提取码|密码|访问码|\\?password=|\\?p=)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{6})/gi,
			uiLinkShow: "089u.com/dir/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://089u.com/dir/{#shareCode#}?p={#accessCode#}",
			copyUrl:
				"https://089u.com/dir/{#shareCode#}?p={#accessCode#}\n密码：{#accessCode#}",
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "城通网盘",
		key: "chengtong",
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
				isForwardBlankLink: true,
				uri: "",
			},
			ownFormList: [
				{
					type: "forms",
					text: "文件解析配置",
					forms: [
						UIInput(
							"<a target='_blank' href='https://github.com/qinlili23333/ctfileGet/'>解析站</a>",
							"chengtong-parse-file-api-host",
							"https://ctfile.qinlili.bid",
							"解析站配置，暂时只支持file，非file为新标签页打开",
							void 0,
							""
						),
					],
				},
			],
		},
	},
};
