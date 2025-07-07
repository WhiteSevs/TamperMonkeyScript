import { DOMUtils, log, utils } from "@/env";
import { UISwitch } from "@components/setting/components/ui-switch";
import i18next from "i18next";
import { PopsPanelContentConfig } from "@whitesev/pops/dist/types/src/components/panel/types/index";
import { GreasyforkDiscussionsFilter } from "@/main/navigator/discussions/GreasyforkDiscussionsFilter";
import { Panel } from "@components/setting/panel";

export const SettingUIDiscuessions: PopsPanelContentConfig = {
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
										$color.value = Panel.getValue(key);
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
												Panel.setValue(key, $color.value);
											}
										);

										liElement.appendChild($left);
										liElement.appendChild($right);
										return liElement;
									},
								},
								UISwitch(
									i18next.t("添加【过滤】按钮"),
									"discussions-addShortcutOperationButton",
									true,
									void 0,
									i18next.t(
										"在每一行讨论的最后面添加【过滤】按钮，需开启过滤功能才会生效"
									)
								),
								UISwitch(
									i18next.t("添加【举报】按钮"),
									"discussions-addReportButton",
									true,
									void 0,
									i18next.t("在每一行讨论的最后面添加【举报】按钮")
								),
							],
						},
					],
				},
				{
					text: i18next.t("过滤"),
					type: "deepMenu",
					forms: [
						{
							text: `<a target="_blank" href="https://greasyfork.org/zh-CN/scripts/475722-greasyfork%E4%BC%98%E5%8C%96#:~:text=%E8%AE%BA%E5%9D%9B%E8%BF%87%E6%BB%A4%E8%A7%84%E5%88%99">${i18next.t(
								"帮助文档"
							)}</a>`,
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
									true,
									void 0,
									i18next.t("过滤掉重复的评论数量(≥2)")
								),
								{
									type: "own",
									getLiElementCallBack(liElement) {
										let textareaDiv = DOMUtils.createElement(
											"div",
											{
												className: "pops-panel-textarea",
												innerHTML: `
										<textarea placeholder="${i18next.t(
											"请输入规则，每行一个"
										)}" style="height:200px;"></textarea>`,
											},
											{
												style: "width: 100%;",
											}
										);
										let $textarea =
											textareaDiv.querySelector<HTMLTextAreaElement>(
												"textarea"
											)!;
										$textarea.value = GreasyforkDiscussionsFilter.getValue();
										DOMUtils.on(
											$textarea,
											["input", "propertychange"],
											void 0,
											utils.debounce(function (event) {
												GreasyforkDiscussionsFilter.setValue($textarea.value);
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
};
