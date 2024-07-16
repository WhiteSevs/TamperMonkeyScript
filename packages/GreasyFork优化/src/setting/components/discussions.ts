import { DOMUtils, log, utils } from "@/env";
import { UISwitch } from "../common-components/ui-switch";
import { PopsPanel } from "../setting";
import i18next from "i18next";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/indexType";
import { UIInput } from "../common-components/ui-input";

const SettingUIDiscuessions: PopsPanelContentConfig = {
	id: "greasy-fork-panel-config-discussions",
	title: i18next.t("论坛"),
	forms: [
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: i18next.t("功能"),
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								{
									type: "own",
									attributes: {
										"data-key": "discussions-readBgColor",
										"data-default-value": "#e5e5e5",
									},
									getLiElementCallBack(liElement) {
										let key = "discussions-readBgColor";
										let $left = DOMUtils.createElement("div", {
											className: "pops-panel-item-left-text",
											innerHTML: `
											<p class="pops-panel-item-left-main-text">${i18next.t("自定义已读颜色")}</p>
											<p class="pops-panel-item-left-desc-text">${i18next.t("在讨论内生效")}</p>
											`,
										});
										let $right = DOMUtils.createElement("div", {
											className: "pops-panel-item-right",
											innerHTML: `
											<input type="color" class="pops-color-choose" />
											`,
										});
										let $color =
											$right.querySelector<HTMLInputElement>(
												".pops-color-choose"
											)!;
										$color.value = PopsPanel.getValue(key);
										let $style = DOMUtils.createElement("style");
										DOMUtils.append(document.head, $style);
										DOMUtils.on(
											$color,
											["input", "propertychange"],
											(event) => {
												log.info("选择颜色：" + $color.value);
												$style.innerHTML = `
												.discussion-read{
													background: ${$color.value} !important;
												}
												`;
												PopsPanel.setValue(key, $color.value);
											}
										);

										liElement.appendChild($left);
										liElement.appendChild($right);
										return liElement;
									},
								},
							],
						},
					],
				},
			],
		},
		{
			text: "",
			type: "forms",
			forms: [
				{
					text: i18next.t("过滤"),
					type: "deepMenu",
					forms: [
						{
							text: "",
							type: "forms",
							forms: [
								UISwitch(
									i18next.t("启用"),
									"greasyfork-discussions-filter-enable",
									true,
									void 0,
									i18next.t("开启后下面的过滤功能才会生效")
								),
								UISwitch(
									i18next.t("过滤重复的评论"),
									"greasyfork-discussions-filter-duplicate-comments",
									false,
									void 0,
									i18next.t("过滤掉重复的评论数量(≥2)")
								),
							],
						},

						{
							text: "",
							type: "forms",
							forms: [
								{
									text: i18next.t("过滤脚本(id)"),
									type: "deepMenu",
									forms: [
										{
											text: "",
											type: "forms",
											forms: [
												{
													type: "own",
													getLiElementCallBack(liElement) {
														let textareaDiv = DOMUtils.createElement(
															"div",
															{
																className: "pops-panel-textarea",
																innerHTML: `
														<textarea placeholder="${i18next.t(
															"请输入脚本id，每行一个"
														)}" style="height:150px;"></textarea>`,
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
									],
								},
								{
									text: i18next.t("过滤发布的用户(id)"),
									type: "deepMenu",
									forms: [
										{
											text: "",
											type: "forms",
											forms: [
												{
													type: "own",
													getLiElementCallBack(liElement) {
														let textareaDiv = DOMUtils.createElement(
															"div",
															{
																className: "pops-panel-textarea",
																innerHTML: `
														<textarea placeholder="${i18next.t(
															"请输入用户id，每行一个"
														)}" style="height:150px;"></textarea>`,
															},
															{
																style: "width: 100%;",
															}
														);
														let textarea =
															textareaDiv.querySelector<HTMLTextAreaElement>(
																"textarea"
															) as HTMLTextAreaElement;
														const KEY =
															"greasyfork-discussions-filter-post-user";
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
								},
								{
									text: i18next.t("过滤回复的用户(id)"),
									type: "deepMenu",
									forms: [
										{
											text: "",
											type: "forms",
											forms: [
												{
													type: "own",
													getLiElementCallBack(liElement) {
														let textareaDiv = DOMUtils.createElement(
															"div",
															{
																className: "pops-panel-textarea",
																innerHTML: `
												<textarea placeholder="${i18next.t(
													"请输入用户id，每行一个"
												)}" style="height:150px;"></textarea>`,
															},
															{
																style: "width: 100%;",
															}
														);
														let textarea = textareaDiv.querySelector(
															"textarea"
														) as HTMLTextAreaElement;
														const KEY =
															"greasyfork-discussions-filter-reply-user";
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
								},
							],
						},
					],
				},
			],
		},
	],
};

export { SettingUIDiscuessions };
