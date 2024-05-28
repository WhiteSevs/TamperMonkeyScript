import { DOMUtils, utils } from "@/env";
import { UISwitch } from "../common-components/ui-switch";
import { PopsPanel } from "../setting";

const SettingUIDiscuessions: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-discussions",
	title: "论坛",
	forms: [
		{
			text: "功能",
			type: "forms",
			forms: [
				UISwitch(
					"过滤重复的评论",
					"greasyfork-discussions-filter-duplicate-comments",
					false,
					void 0,
					"过滤掉重复的评论数量(≥2)"
				),
			],
		},
		{
			text: "过滤脚本(id)",
			type: "forms",
			forms: [
				{
					type: "own",
					getLiElementCallBack(liElement) {
						let textareaDiv = DOMUtils.createElement(
							"div",
							{
								className: "pops-panel-textarea",
								innerHTML: `<textarea placeholder="请输入脚本id，每行一个" style="height:150px;"></textarea>`,
							},
							{
								style: "width: 100%;",
							}
						);
						let textarea = textareaDiv.querySelector(
							"textarea"
						) as HTMLTextAreaElement;
						const KEY = "greasyfork-discussions-filter-script";
						textarea.value = PopsPanel.getValue(KEY, "");
						DOMUtils.on(
							textarea,
							["input", "propertychange"],
							void 0,
							utils.debounce(function (event) {
								PopsPanel.setValue(KEY, textarea.value);
							}, 200)
						);
						liElement.appendChild(textareaDiv);
						return liElement;
					},
				},
			],
		},
		{
			text: "过滤发布的用户(id)",
			type: "forms",
			forms: [
				{
					type: "own",
					getLiElementCallBack(liElement) {
						let textareaDiv = DOMUtils.createElement(
							"div",
							{
								className: "pops-panel-textarea",
								innerHTML: `<textarea placeholder="请输入用户id，每行一个" style="height:150px;"></textarea>`,
							},
							{
								style: "width: 100%;",
							}
						);
						let textarea = textareaDiv.querySelector<HTMLTextAreaElement>(
							"textarea"
						) as HTMLTextAreaElement;
						const KEY = "greasyfork-discussions-filter-post-user";
						textarea.value = PopsPanel.getValue(KEY, "");
						DOMUtils.on(
							textarea,
							["input", "propertychange"],
							void 0,
							utils.debounce(function (event) {
								PopsPanel.setValue(KEY, textarea.value);
							}, 200)
						);
						liElement.appendChild(textareaDiv);
						return liElement;
					},
				},
			],
		},
		{
			text: "过滤回复的用户(id)",
			type: "forms",
			forms: [
				{
					type: "own",
					getLiElementCallBack(liElement) {
						let textareaDiv = DOMUtils.createElement(
							"div",
							{
								className: "pops-panel-textarea",
								innerHTML: `<textarea placeholder="请输入用户id，每行一个" style="height:150px;"></textarea>`,
							},
							{
								style: "width: 100%;",
							}
						);
						let textarea = textareaDiv.querySelector(
							"textarea"
						) as HTMLTextAreaElement;
						const KEY = "greasyfork-discussions-filter-reply-user";
						textarea.value = PopsPanel.getValue(KEY, "");
						DOMUtils.on(
							textarea,
							["input", "propertychange"],
							void 0,
							utils.debounce(function (event) {
								PopsPanel.setValue(KEY, textarea.value);
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

export { SettingUIDiscuessions };
