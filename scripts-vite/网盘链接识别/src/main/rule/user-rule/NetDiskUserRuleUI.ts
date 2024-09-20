import Qmsg from "qmsg";
import { NetDiskUserRule } from "./NetDiskUserRule";
import { NetDiskUserRuleDebug } from "./NetDiskUserRuleDebug";
import { log } from "@/env";
import { NetDiskPops } from "@/main/pops/NetDiskPops";
import { NetDiskUI } from "@/main/ui/NetDiskUI";
import dialogCSS from "./css/dialog.css?raw";

export const NetDiskUserRuleUI = {
	/**
	 * 添加/编辑规则
	 * @param isEdit
	 * @param ruleKey 当isEdit为true时，传入该值
	 */
	show(isEdit: boolean, ruleKey?: string) {
		const that = this;
		let titleText = "添加";
		if (isEdit) {
			titleText = "编辑";
		}
		titleText += "自定义规则";
		let $ruleInput = null as any as HTMLTextAreaElement;

		/**
		 * 保存按钮的回调
		 */
		function saveCallBack(event: any, isDebug: boolean) {
			let ruleText = $ruleInput.value.trim();
			let parseRuleResult = NetDiskUserRule.parseRuleStrToRule(ruleText);
			if (parseRuleResult.success) {
				let userRule = parseRuleResult.data!;
				if (isEdit) {
					NetDiskUserRule.setRule(ruleKey!, userRule);
				} else {
					NetDiskUserRule.addRule(userRule);
				}
				Qmsg.success("保存成功");
			} else {
				Qmsg.error(parseRuleResult.msg);
			}
		}
		/**
		 * 调试按钮的回调
		 * @param {PopsBtnCallBackEvent} event
		 */
		function debugCallBack(event: any) {
			let ruleText = $ruleInput.value.trim();
			let parseRuleResult = NetDiskUserRule.parseRuleStrToRule(ruleText);
			if (parseRuleResult.success) {
				let userRule = parseRuleResult.data!;
				NetDiskUserRuleDebug.showUI(userRule);
			} else {
				Qmsg.error(parseRuleResult.msg);
			}
		}
		/**
		 * 格式化按钮的回调
		 */
		function formatCallBack(event: any) {
			try {
				let ruleJSON = JSON.parse($ruleInput.value);
				let ruleJSONString = NetDiskUserRule.getFormatRule(ruleJSON);
				$ruleInput.value = ruleJSONString;
				Qmsg.success("格式化成功");
			} catch (error: any) {
				log.error(error);
				Qmsg.error(error.message, {
					html: true,
					timeout: 3500,
				});
			}
		}
		let dialog = NetDiskPops.confirm(
			{
				title: {
					text: titleText,
					position: "center",
				},
				content: {
					text: /*html*/ `<textarea class="netdisk-custom-rules" placeholder="请输入自定义规则"></textarea>`,
					html: true,
				},
				btn: {
					merge: true,
					mergeReverse: false,
					reverse: false,
					position: "space-between",
					ok: {
						text: "保存",
						callback: (eventDetails, event) => {
							saveCallBack(event, false);
						},
					},
					cancel: {
						text: "调试",
						callback: (eventDetails, event) => {
							debugCallBack(event);
						},
					},
					other: {
						enable: true,
						text: "格式化",
						type: "xiaomi-primary",
						callback: (eventDetails, event) => {
							formatCallBack(event);
						},
					},
				},
				class: "whitesevPopNetDiskCustomRules",
				style: dialogCSS,
			},
			NetDiskUI.popsStyle.customRulesView
		);
		$ruleInput =
			dialog.$shadowRoot.querySelector<HTMLTextAreaElement>("textarea")!;
		if (isEdit) {
			let rule = NetDiskUserRule.getRule(ruleKey!)!;
			$ruleInput.value = NetDiskUserRule.getFormatRule(rule);
		} else {
			$ruleInput.value = NetDiskUserRule.getTemplateRule();
		}
	},
};
