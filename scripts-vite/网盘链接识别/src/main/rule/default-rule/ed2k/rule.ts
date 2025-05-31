// ed2k://|file|zh-cn_windows_11_business_editions_version_24h2_updated_april_2025_x64_dvd_f8fe2e2c.iso|6527498240|7FAF49D81EF04A702B793A72A3B7A2AA|/

import { httpx, log, pops, utils } from "@/env";
import { GeneratePanelData } from "@/main/data/NetDiskDataUtils";
import { NetDiskLinkClickModeUtils } from "@/main/link-click-mode/NetDiskLinkClickMode";
import { UISwitch } from "@/setting/components/ui-switch";

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
				},
			},
			schemeUri: {
				enable: false,
				isForwardBlankLink: true,
				uri: "",
			},
			ownFormList: [
				{
					type: "forms",
					text: /*html*/ `
						<a href="https://whatslink.info/" target="_blank">元数据查询</a>
					`,
					forms: [
						UISwitch(
							"鼠标悬停预览",
							NetDiskRule_ed2k_preview.MENU_KEY,
							NetDiskRule_ed2k_preview.MENU_DEFAULT_VALUE,
							void 0,
							"注意：Api请求存在访问频率限制"
						),
					],
				},
			],
		},
	},
	afterRenderUrlBox(option) {
		const that = this;
		let generateData = GeneratePanelData(
			NetDiskRule_ed2k_preview.MENU_KEY,
			NetDiskRule_ed2k_preview.MENU_DEFAULT_VALUE
		);
		if (!generateData.value) {
			return;
		}
		/**
		 * 是否已经获取过信息
		 */
		let isQueryInfo = false;
		let content = "正在请求Api中...";
		let tooltip = pops.tooltip({
			target: option.$url,
			content: () => {
				return content;
			},
			isDiffContent: true,
			position: "follow",
			alwaysShow: false,
			isFixed: true,
			showArrow: false,
			delayCloseTime: 300,
			triggerShowEventName: "mouseenter touchstart mousemove touchmove",
			otherDistance: 15,
			className: "github-tooltip",
			showBeforeCallBack($toolTip) {
				if (isQueryInfo) {
					return;
				}
				isQueryInfo = true;
				let url = NetDiskLinkClickModeUtils.getBlankUrl(
					that.setting.key,
					option.ruleIndex,
					option.shareCode,
					option.accessCode
				);
				log.info(`正在获取ed2k链接信息：${url}`);
				httpx
					.get("https://whatslink.info/api/v1/link?url=" + url, {
						headers: {
							Referer: "https://whatslink.info/",
						},
						allowInterceptConfig: false,
					})
					.then((response) => {
						let data = utils.toJSON(response.data.responseText);
						if (!response.status) {
							content = "请求失败";
							if (typeof data.error === "string" && data.error.trim() !== "") {
								content = content + "，" + data.error;
							}
							tooltip.toolTip.changeContent(content);
							return;
						}
						content = /*html*/ `
						<div class="wrapper">
							<div class="title">Summary</div>
							<div class="content">
								<div>Resource Name: ${data.name}</div>
								<div>Number of Files: ${data.count}</div>
								<div>Total File Size: ${utils.formatByteToSize(data.size)}</div>
								<div>File Type: ${data.type.toLowerCase()}</div>
							</div>
						</div>
						${
							Array.isArray(data.screenshots)
								? /*html*/ `
							<div class="wrapper">
								<div class="title">Screenshots</div>
								<div class="content">
									<div class="image-list">
										${data.screenshots
											.map(
												(screenshot: any) => /*html*/ `
											<div class="img">
												<img src="${screenshot.screenshot}" alt="img">
											</div>
										`
											)
											.join("")}
										
									</div>
								</div>
							</div>
						`
								: ""
						}
						`;
						tooltip.toolTip.changeContent(content);
					});
			},
			style: /*css*/ `
				.pops-tip{
					max-height: 500px;
					overflow: hidden;
				}
				.wrapper .content{
					text-align: left;
				}
				.wrapper .image-list{
					overflow: auto;
					display: flex;
				}
				.wrapper .image-list img{
					max-width: 200px;
					max-height: 200px;
				}
			`,
		});
	},
};
