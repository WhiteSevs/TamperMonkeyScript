import { DOMUtils, utils } from "@/env";
import { GreasyforkShield } from "@/main/GreasyforkShield";
import i18next from "i18next";
import { UISwitch } from "../common-components/ui-switch";

const SettingUIShield: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-shield",
	title: i18next.t("屏蔽"),
	headerTitle: i18next.t("屏蔽脚本"),
	forms: [
		{
			text:
				i18next.t("规则(可正则)") +
				"<br>" +
				`<a href="https://greasyfork.org/zh-CN/scripts/475722-greasyfork%E4%BC%98%E5%8C%96#:~:text=%E5%B1%8F%E8%94%BD%E8%A7%84%E5%88%99" target="_blank">${i18next.t(
					"点击查看规则"
				)}</a>`,
			type: "forms",
			forms: [
				UISwitch(
					i18next.t("启用"),
					"greasyfork-shield-enable",
					true,
					void 0,
					i18next.t("开启后下面的功能才会生效")
				),
				{
					type: "own",
					getLiElementCallBack(liElement) {
						let textareaDiv = DOMUtils.createElement(
							"div",
							{
								className: "pops-panel-textarea",
								innerHTML: `<textarea placeholder="${i18next.t(
									"请输入屏蔽规则，每行一个"
								)}" style="height:350px;"></textarea>`,
							},
							{
								style: "width: 100%;",
							}
						);
						let textarea = textareaDiv.querySelector(
							"textarea"
						) as HTMLTextAreaElement;
						textarea.value = GreasyforkShield.getValue();
						DOMUtils.on(
							textarea,
							["input", "propertychange"],
							void 0,
							utils.debounce(function () {
								GreasyforkShield.setValue(textarea.value);
							}, 200)
						);
						liElement.appendChild(textareaDiv);
						return liElement;
					},
				},
			],
		},
	],
};

export { SettingUIShield };
