import { NetDiskRuleConfig, NetDiskRuleSetting } from "./NetDiskRule";
import { NetDiskLocalData } from "../data/NetDiskLocalData";
import { UIInput } from "@/setting/common-components/ui-input";
import { NetDiskParse_Lanzou_Config } from "../parse/NetDiskParse_Lanzou";

export const NetDiskRule_lanzou: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskRegularOption[]>[
		{
			enable: NetDiskLocalData.function.enable("lanzou"),
			link_innerText: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/(tp/|u/|)([a-zA-Z0-9_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{1,20})([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"lanzou"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"lanzou"
			)}}[a-zA-Z0-9]{3,6}|)`,
			link_innerHTML: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/(tp/|u/|)([a-zA-Z0-9_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{1,20})([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"lanzou"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
				"lanzou"
			)}}[a-zA-Z0-9]{3,6}|)`,
			shareCode:
				/(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/(tp\/|u\/|)([a-zA-Z0-9_\-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{1,20})/gi,
			shareCodeNeedRemoveStr:
				/(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/(tp\/|u\/|)/gi,
			shareCodeExcludeRegular: ["lanzouyx"],
			checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
			accessCode: /([0-9a-zA-Z]{3,})/gi,
			uiLinkShow: `${NetDiskParse_Lanzou_Config.hostname}/{#shareCode#} 提取码: {#accessCode#}`,
			blank: `https://${NetDiskParse_Lanzou_Config.hostname}/{#shareCode#}`,
			copyUrl: `https://${NetDiskParse_Lanzou_Config.hostname}/{#shareCode#}\n密码：{#accessCode#}`,
			checkLinkValidity: NetDiskLocalData.function.checkLinkValidity("lanzou"),
		},
		{
			enable: NetDiskLocalData.function.enable("lanzou"),
			link_innerText: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/s/([a-zA-Z0-9_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{1,20})([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"lanzou"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"lanzou"
			)}}[a-zA-Z0-9]{3,6}|)`,
			link_innerHTML: `(lanzou[a-z]{0,1}|lan[a-z]{2}).com/s/([a-zA-Z0-9_-]{5,22}|[%0-9a-zA-Z]{4,90}|[\\u4e00-\\u9fa5]{1,20})([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"lanzou"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
				"lanzou"
			)}}[a-zA-Z0-9]{3,6}|)`,
			shareCode:
				/(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/s\/([a-zA-Z0-9_\-]{5,22}|[%0-9a-zA-Z]{4,90}|[\u4e00-\u9fa5]{1,20})/gi,
			shareCodeNeedRemoveStr: /(lanzou[a-z]{0,1}|lan[a-z]{2}).com\/s\//gi,
			shareCodeExcludeRegular: ["lanzouyx"],
			checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
			accessCode: /([0-9a-zA-Z]{3,})/gi,
			uiLinkShow: `${NetDiskParse_Lanzou_Config.hostname}/s/{#shareCode#} 提取码: {#accessCode#}`,
			blank: `https://${NetDiskParse_Lanzou_Config.hostname}/s/{#shareCode#}`,
			copyUrl: `https://${NetDiskParse_Lanzou_Config.hostname}/s/{#shareCode#}\n密码：{#accessCode#}`,
			checkLinkValidity: NetDiskLocalData.function.checkLinkValidity("lanzou"),
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "蓝奏云",
		key: "lanzou",
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
			ownFormList: [
				{
					text: "其它配置",
					type: "forms",
					forms: [
						UIInput(
							"蓝奏云域名",
							NetDiskParse_Lanzou_Config.MENU_KEY,
							NetDiskParse_Lanzou_Config.DEFAULT_HOST_NAME,
							"",
							void 0,
							`例如：${NetDiskParse_Lanzou_Config.DEFAULT_HOST_NAME}`
						),
					],
				},
			],
		},
	},
};
