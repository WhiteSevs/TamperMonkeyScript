import type { NetDiskRuleConfig, NetDiskRuleSetting } from "../../NetDiskRule";

export const NetDiskRule_chengtong: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskMatchRuleOption[]>[
		/* d */
		{
			link_innerText: `(ct.ghpym.com|pan.jc-box.com|download.jamcz.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `(ct.ghpym.com|pan.jc-box.com|download.jamcz.com)/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
			shareCode:
				/(ct.ghpym.com|pan.jc-box.com|download.jamcz.com)\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
			shareCodeNeedRemoveStr:
				/(ct.ghpym.com|pan.jc-box.com|download.jamcz.com)\/d\//gi,
			checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4,6})/gi,
			paramMatch: /([a-zA-Z0-9\.]+)\/d\//i,
			uiLinkShow: "{#$1#}/d/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://{#$1#}/d/{#shareCode#}",
			copyUrl: "https://{#$1#}/d/{#shareCode#}\n密码：{#accessCode#}",
		},
		{
			link_innerText: `ct.ghpym.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `ct.ghpym.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
			shareCode: /ct.ghpym.com\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
			shareCodeNeedRemoveStr: /ct.ghpym.com\/d\//gi,
			checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4,6})/gi,
			paramMatch: /([a-zA-Z0-9\.]+)\/d\//i,
			uiLinkShow: "{#$1#}/d/{#shareCode#} 提取码: {#accessCode#}",
			blank: "http://{#$1#}/d/{#shareCode#}",
			copyUrl: "http://{#$1#}/d/{#shareCode#}\n密码：{#accessCode#}",
		},
		/* d */
		{
			link_innerText: `ctfile.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `ctfile.com/d/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
			shareCode: /ctfile.com\/d\/([0-9a-zA-Z\-_]{8,26})/gi,
			shareCodeNeedRemoveStr: /ctfile.com\/d\//gi,
			checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4,6})/gi,
			uiLinkShow: "url95.ctfile.com/d/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://url95.ctfile.com/d/{#shareCode#}",
			copyUrl: "https://url95.ctfile.com/d/{#shareCode#}\n密码：{#accessCode#}",
		},
		/* file */
		{
			link_innerText: `(2k.us|u062.com|545c.com|t00y.com)/file/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `(2k.us|u062.com|545c.com|t00y.com)/file/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
			shareCode:
				/(2k.us|u062.com|545c.com|t00y.com)\/file\/([0-9a-zA-Z\-_]{8,26})/gi,
			shareCodeNeedRemoveStr: /(2k.us|u062.com|545c.com|t00y.com)\/file\//gi,
			checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4,6})/gi,
			uiLinkShow: "u062.com/file/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://u062.com/file/{#shareCode#}",
			copyUrl: "https://u062.com/file/{#shareCode#}\n密码：{#accessCode#}",
		},
		/* f */
		{
			link_innerText: `(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
			shareCode:
				/(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc)\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
			shareCodeNeedRemoveStr:
				/(pan.jc-box.com|545c.com|down.jc-box.com|download.cx05.cc)\/f\//gi,
			checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4,6})/gi,
			paramMatch: /([0-9a-zA-Z\.+])\/f\//i,
			uiLinkShow: "{#$1#}/f/{#shareCode#} 提取码: {#accessCode#}",
			blank: "http://{#$1#}/f/{#shareCode#}",
			copyUrl: "http://{#$1#}/f/{#shareCode#}\n密码：{#accessCode#}",
		},
		/* f */
		{
			link_innerText: `(ctfile.com|089u.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `(ctfile.com|089u.com)/f/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{4,6}|)`,
			shareCode: /(ctfile.com|089u.com)\/f\/([0-9a-zA-Z\-_]{8,26})/gi,
			shareCodeNeedRemoveStr: /(ctfile.com|089u.com)\/f\//gi,
			checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4,6})/gi,
			uiLinkShow: "url95.ctfile.com/f/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://url95.ctfile.com/f/{#shareCode#}",
			copyUrl: "https://url95.ctfile.com/f/{#shareCode#}\n密码：{#accessCode#}",
		},
		/* dir */
		{
			link_innerText: `(089u.com|474b.com)/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-text-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-text-after#}}[0-9a-zA-Z]{4,6}|)`,
			link_innerHTML: `(089u.com|474b.com)/dir/[0-9a-zA-Z-_]{8,26}([\\s\\S]{0,{#matchRange-html-before#}}(访问码|密码|提取码|\\?password=)[\\s\\S]{0,{#matchRange-html-after#}}[0-9a-zA-Z]{6}|)`,
			shareCode: /(089u.com|474b.com)\/dir\/([0-9a-zA-Z\-_]{8,26})/gi,
			shareCodeNeedRemoveStr: /(089u.com|474b.com)\/dir\//gi,
			checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{6})/gi,
			uiLinkShow: "089u.com/dir/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://089u.com/dir/{#shareCode#}",
			copyUrl: "https://089u.com/dir/{#shareCode#}\n密码：{#accessCode#}",
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
