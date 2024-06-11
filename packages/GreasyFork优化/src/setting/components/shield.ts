import { DOMUtils, utils } from "@/env";
import { GreasyforkShield } from "@/main/GreasyforkShield";
import i18next from "i18next";

const SettingUIShield: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-shield",
	title: i18next.t("屏蔽"),
	forms: [
		{
			text: i18next.t("规则(可正则)"),
			type: "forms",
			forms: [
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
