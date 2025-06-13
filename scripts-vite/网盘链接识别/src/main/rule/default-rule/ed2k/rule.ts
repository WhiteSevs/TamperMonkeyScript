// ed2k://|file|zh-cn_windows_11_business_editions_version_24h2_updated_april_2025_x64_dvd_f8fe2e2c.iso|6527498240|7FAF49D81EF04A702B793A72A3B7A2AA|/

import { httpx, log, pops, utils } from "@/env";
import { GeneratePanelData } from "@/main/data/NetDiskDataUtils";
import { NetDiskLinkClickModeUtils } from "@/main/link-click-mode/NetDiskLinkClickMode";
import { UISwitch } from "@components/setting/components/ui-switch";

const NetDiskRule_ed2k_preview = {
	MENU_KEY: "ed2k-preview-tooltip-enable",
	MENU_DEFAULT_VALUE: true,
};

export const NetDiskRule_ed2k: NetDiskRuleOption = {
	/** 规则 */
	rule: <NetDiskMatchRuleConfig[]>[
		{
			link_innerText: `ed2k:\/\/\\|file\\|[^\\|]+\\|\\d+\\|[a-fA-F0-9]{32}\\|`,
			link_innerHTML: `ed2k:\/\/\\|file\\|[^\\|]+\\|\\d+\\|[a-fA-F0-9]{32}\\|`,
			shareCode: /ed2k:\/\/\\|file\\|[^\\|]+\\|\\d+\\|([a-fA-F0-9]{32})\|/gi,
			shareCodeNeedRemoveStr: / /gi,
			checkAccessCode: /(提取码|密码|访问码)[\s\S]+/gi,
			accessCode: /([0-9a-zA-Z]{4})/gi,
			paramMatch: /ed2k:\/\/\|file\|([^\|]+)\|(\d+)\|([a-fA-F0-9]{32})\|/i,
			uiLinkShow: "ed2k://|file|{#$1#}|{#$2#}|{#$3#}|/",
			blank: "ed2k://|file|{#$1#}|{#$2#}|{#$3#}|/",
			copyUrl: "ed2k://|file|{#$1#}|{#$2#}|{#$3#}|/",
		},
	],
	/** 设置项 */
	setting: <NetDiskRuleSetting>{
		name: "ed2k",
		key: "ed2k",
		configurationInterface: {
			function: {
				enable: true,
				linkClickMode: {
					openBlank: {
						default: true,
					},
					"openBlank-closePopup": {
						enable: true,
					},
					parseFile: {
						enable: true,
					},
					"parseFile-closePopup": {
						enable: true,
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
