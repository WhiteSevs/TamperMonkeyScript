import { DOMUtils, log, SCRIPT_NAME } from "@/env";
import { NetDiskUI } from "../../ui/NetDiskUI";
import Qmsg from "qmsg";
import { PopsPanel } from "@/setting/setting";
import { NetDiskUserRule } from "@/main/rule/user-rule/NetDiskUserRule";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { GM_info } from "ViteGM";
import { NetDiskRule } from "@/main/rule/NetDiskRule";
import { NetDiskUserRuleUI } from "@/main/rule/user-rule/NetDiskUserRuleUI";
import indexCSS from "./index.css?raw";

export const NetDiskGlobalSettingView = {
	show() {
		if (NetDiskUI.Alias.settingAlias) {
			log.error("设置界面已存在");
			Qmsg.error("设置界面已存在");
			return;
		}
		// 总设置
		let content = PopsPanel.getPanelContentConfig();
		// 规则的设置
		let ruleContent = NetDiskRule.getRulePanelContent();
		content = content.concat(ruleContent);
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
	showPanel(details = {}) {},
	/**
	 * 设置自定义规则顶部的编辑|删除的点击事件
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
				NetDiskUserRuleUI.show(true, ruleKey);
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
				NetDiskPops.alert({
					title: {
						text: "提示",
						position: "center",
					},
					content: {
						text: `确定删除自定义规则 ${ruleName}(${ruleKey}) 吗？`,
					},
					btn: {
						ok: {
							callback(okEvent) {
								let deleteStatus = NetDiskUserRule.deleteRule(ruleKey);
								if (deleteStatus) {
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
									Qmsg.error("删除自定义规则失败");
								}
							},
						},
					},
				});
			}
		);
	},
};
