import { NetDiskLocalData } from "../data/NetDiskLocalData";
import {
	NetDiskRule,
	NetDiskRuleConfig,
	NetDiskRuleSetting,
} from "./NetDiskRule";

export const NetDiskRule_tianyiyun: NetDiskRuleConfig = {
	/** 规则 */
	rule: <NetDiskRegularOption[]>[
		{
			enable: NetDiskLocalData.function.enable("tianyiyun"),
			link_innerText: `(cloud.189.cn/web/share\\?code=([0-9a-zA-Z_-]){8,14}|cloud.189.cn/t/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${NetDiskLocalData.matchRange_text.before(
				"tianyiyun"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_text.after(
				"tianyiyun"
			)}}[0-9a-zA-Z]{4}|)`,
			link_innerHTML: `(cloud.189.cn/web/share\\?code=([0-9a-zA-Z_\-]){8,14}|cloud.189.cn/t/([a-zA-Z0-9_-]{8,14}))([\\s\\S]{0,${NetDiskLocalData.matchRange_html.before(
				"tianyiyun"
			)}}(密码|访问码|提取码)[\\s\\S]{0,${NetDiskLocalData.matchRange_html.after(
				"tianyiyun"
			)}}[0-9a-zA-Z]{4}|)`,
			shareCode:
				/cloud.189.cn\/web\/share\?code=([0-9a-zA-Z_\-]){8,14}|cloud.189.cn\/t\/([a-zA-Z0-9_\-]{8,14})/gi,
			shareCodeNeedRemoveStr:
				/cloud\.189\.cn\/t\/|cloud.189.cn\/web\/share\?code=/gi,
			checkAccessCode: /(密码|访问码|提取码)[\s\S]+/g,
			accessCode: /([0-9a-zA-Z]{4})/gi,
			uiLinkShow: "cloud.189.cn/t/{#shareCode#} 提取码: {#accessCode#}",
			blank: "https://cloud.189.cn/t/{#shareCode#}",
			copyUrl: "https://cloud.189.cn/t/{#shareCode#}\n密码：{#accessCode#}",
			checkLinkValidity:
				NetDiskLocalData.function.checkLinkValidity("tianyiyun"),
		},
	],

	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "天翼云",
		key: "tianyiyun",
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
