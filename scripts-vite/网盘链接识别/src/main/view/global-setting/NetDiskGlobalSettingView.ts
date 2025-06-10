import { DOMUtils, log, SCRIPT_NAME } from "@/env";
import { NetDiskUI } from "../../ui/NetDiskUI";
import Qmsg from "qmsg";
import { NetDiskUserRule } from "@/main/rule/user-rule/NetDiskUserRule";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { GM_info } from "ViteGM";
import { NetDiskRule } from "@/main/rule/NetDiskRule";
import { NetDiskUserRuleUI } from "@/main/rule/user-rule/NetDiskUserRuleUI";
import indexCSS from "./index.css?raw";
import { NetDiskUserRuleSubscribeRule } from "@/main/rule/user-rule/NetDiskUserRuleSubscribeRule";
import { PanelContent } from "@components/setting/panel-content";

export const NetDiskGlobalSettingView = {
	show() {
		if (NetDiskUI.Alias.settingAlias) {
			log.error("设置界面已存在");
			Qmsg.error("设置界面已存在");
			return;
		}
		// 总设置
		let content = PanelContent.getConfig(0);
		// 规则的设置
		let ruleContent = NetDiskRule.getRulePanelContent();
		content.push(...ruleContent);
		let $panel = NetDiskPops.panel(
			{
				title: {
					text: `${GM_info?.script?.name || SCRIPT_NAME}-设置`,
					position: "center",
				},
				content: content,
				btn: {
					close: {
						enable: true,
						callback(event) {
							event.close();
							// @ts-ignore
							NetDiskUI.Alias.settingAlias = void 0;
						},
					},
				},
				mask: {
					clickCallBack(originalRun) {
						originalRun();
						// @ts-ignore
						NetDiskUI.Alias.settingAlias = void 0;
					},
				},
				class: "whitesevPopSetting",
				style: indexCSS,
			},
			NetDiskUI.popsStyle.settingView
		);
		NetDiskUI.Alias.settingAlias = $panel;
		this.setRuleHeaderControlsClickEvent($panel.$shadowRoot);
	},
	/**
	 * 设置规则顶部的编辑|删除的点击事件
	 */
	setRuleHeaderControlsClickEvent($shadowRoot: ShadowRoot | HTMLElement) {
		DOMUtils.on(
			$shadowRoot,
			"click",
			".netdisk-custom-rule-edit",
			function (event) {
				let $click = event.target as HTMLElement;
				let ruleKey = $click.getAttribute("data-key")!;
				let ruleName = $click.getAttribute("data-type")!;
				let subscribeUUID = $click.getAttribute("data-subscribe-uuid");
				if (typeof subscribeUUID === "string" && subscribeUUID.trim() !== "") {
					// 来自订阅的规则
					NetDiskUserRuleUI.showSubscribe(
						subscribeUUID,
						ruleKey,
						function (rule) {
							NetDiskUserRule.updateRule(ruleKey, rule);
						}
					);
				} else {
					NetDiskUserRuleUI.show(true, ruleKey);
				}
			}
		);

		DOMUtils.on(
			$shadowRoot,
			"click",
			".netdisk-custom-rule-delete",
			function (event) {
				let $click = event.target as HTMLElement;
				let ruleKey = $click.getAttribute("data-key")!;
				let ruleName = $click.getAttribute("data-type")!;
				let subscribeUUID = $click.getAttribute("data-subscribe-uuid");
				NetDiskPops.alert({
					title: {
						text: "提示",
						position: "center",
					},
					content: {
						text: `确定删除规则 ${ruleName}(${ruleKey}) 吗？`,
					},
					btn: {
						ok: {
							callback(okEvent) {
								let flag;
								if (
									typeof subscribeUUID === "string" &&
									subscribeUUID.trim() !== ""
								) {
									// 来自订阅的规则
									flag = NetDiskUserRuleSubscribeRule.deleteSubscribeRule(
										subscribeUUID,
										ruleKey
									);
								} else {
									flag = NetDiskUserRule.deleteRule(ruleKey);
								}
								if (flag) {
									let asideElement =
										NetDiskUI.Alias.settingAlias.$shadowRoot.querySelector<HTMLLIElement>(
											`.pops-panel-aside > ul > li[data-key="${ruleKey}"]`
										)!;
									let $prev =
										asideElement.previousElementSibling as HTMLElement;
									let $next = asideElement.nextElementSibling as HTMLElement;
									if ($prev) {
										$prev.click();
									} else if ($next) {
										$next.click();
									}
									asideElement?.remove();
									Qmsg.success("删除成功");
									okEvent.close();
								} else {
									Qmsg.error("删除规则失败");
								}
							},
						},
					},
				});
			}
		);
	},
};
