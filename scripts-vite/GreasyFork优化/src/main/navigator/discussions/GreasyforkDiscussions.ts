import { addStyle, DOMUtils, log, pops, utils } from "@/env";
import {
	DiscuessionsFilterRule,
	GreasyforkDiscussionsFilter,
} from "./GreasyforkDiscussionsFilter";
import { Panel } from "@components/setting/panel";
import i18next from "i18next";
import Qmsg from "qmsg";
import { GreasyforkUrlUtils } from "@/utils/GreasyforkUrlUtils";

export const GreasyforkForum = {
	init() {
		this.readBgColor();
		DOMUtils.ready(() => {
			Panel.execMenuOnce("greasyfork-discussions-filter-enable", () => {
				this.filterEnable();
			});
			let lockFn = new utils.LockFunction(() => {
				Panel.execMenu("discussions-addShortcutOperationButton", () => {
					this.addShortcutOperationButton();
				});
				Panel.execMenu("discussions-addReportButton", () => {
					this.addReportButton();
				});
			});
			utils.mutationObserver(document.body, {
				config: {
					subtree: true,
					childList: true,
				},
				immediate: true,
				callback: () => {
					lockFn.run();
				},
			});
		});
	},
	/**
	 * 启用Greasyfork论坛过滤器
	 */
	filterEnable() {
		log.info("启用Greasyfork论坛过滤器");
		GreasyforkDiscussionsFilter.init();
	},
	/**
	 * 设置已读背景颜色
	 */
	readBgColor() {
		log.info("设置已读背景颜色");
		let color = Panel.getValue("discussions-readBgColor");
		return addStyle(/*css*/ `
        .discussion-read{
            background: ${color} !important;
        }
        `);
	},
	/**
	 * 添加【过滤】按钮
	 */
	addShortcutOperationButton() {
		log.info("添加【过滤】按钮");
		GreasyforkDiscussionsFilter.getElementList().forEach(($listContainer) => {
			if (
				$listContainer.querySelector<HTMLAnchorElement>(
					".discussion-filter-button"
				)
			) {
				return;
			}
			let $listItem = $listContainer.querySelector<HTMLElement>(
				".discussion-list-item"
			)!;
			let $meta = $listItem.querySelector<HTMLElement>(".discussion-meta")!;
			let $ownMetaItem = DOMUtils.createElement(
				"div",
				{
					className: "discussion-meta-item",
					innerHTML: `
					<button class="discussion-filter-button">${i18next.t("过滤")}</button>
					`,
				},
				{
					style: "flex: 0;",
				}
			);
			let $button = $ownMetaItem.querySelector<HTMLButtonElement>(
				".discussion-filter-button"
			)!;
			$meta.appendChild($ownMetaItem);
			DOMUtils.on($button, "click", (event) => {
				utils.preventEvent(event);

				const discussionInfo =
					GreasyforkDiscussionsFilter.parseDiscuessionListContainerInfo(
						$listContainer
					);
				let attr_filter_key = "data-filter-key";
				let attr_filter_value = "data-filter-value";
				let $dialog = pops.alert({
					title: {
						text: i18next.t("选择需要过滤的选项"),
						position: "center",
						html: false,
					},
					content: {
						text: /*html*/ `
								<button ${attr_filter_key}="scriptId" ${attr_filter_value}="^${
							discussionInfo.scriptId
						}$">${i18next.t("脚本id：{{text}}", {
							text: discussionInfo.scriptId,
						})}</button>
								<button ${attr_filter_key}="scriptName" ${attr_filter_value}="^${utils.parseStringToRegExpString(
							discussionInfo.scriptName
						)}$">${i18next.t("脚本名：{{text}}", {
							text: discussionInfo.scriptName,
						})}</button>
								<button ${attr_filter_key}="postUserId" ${attr_filter_value}="^${utils.parseStringToRegExpString(
							discussionInfo.postUserId!
						)}$">${i18next.t("发布的用户id：{{text}}", {
							text: discussionInfo.postUserId,
						})}</button>
							`,
						html: true,
					},
					mask: {
						enable: true,
						clickEvent: {
							toClose: true,
						},
					},
					btn: {
						ok: {
							enable: false,
						},
					},
					drag: true,
					dragLimit: true,
					width: "350px",
					height: "300px",
					style: /*css*/ `
						.pops-alert-content{
							display: flex;
							flex-direction: column;
							gap: 20px;
						}
						.pops-alert-content button{
							text-wrap: wrap;
							padding: 8px;
							height: auto;
							text-align: left;
						}
						`,
				});
				let $content = $dialog.$shadowRoot.querySelector<HTMLDivElement>(
					".pops-alert-content"
				)!;
				if (discussionInfo.scriptId == null) {
					$content
						.querySelector(`button[${attr_filter_key}="scriptId"]`)
						?.remove();
				}
				if (discussionInfo.scriptName == null) {
					$content
						.querySelector(`button[${attr_filter_key}="scriptName"]`)
						?.remove();
				}
				if (discussionInfo.postUserId == null) {
					$content
						.querySelector(`button[${attr_filter_key}="postUserId"]`)
						?.remove();
				}
				if (discussionInfo.replyUserId != null) {
					let $replyUserIdButton = DOMUtils.createElement("button", {
						innerHTML: i18next.t("作者id：{{text}}", {
							text: discussionInfo.replyUserId,
						}),
					});
					$replyUserIdButton.setAttribute(attr_filter_key, "scriptAuthorId");
					$replyUserIdButton.setAttribute(
						attr_filter_value,
						"^" + discussionInfo.replyUserId + "$"
					);
					$content.appendChild($replyUserIdButton);
				}
				DOMUtils.on(
					$dialog.$shadowRoot,
					"click",
					`button[${attr_filter_key}]`,
					(event) => {
						utils.preventEvent(event);
						let $click = event.target as HTMLButtonElement;
						let key = $click.getAttribute(
							attr_filter_key
						)! as keyof DiscuessionsFilterRule;
						let value = $click.getAttribute(attr_filter_value)!;
						GreasyforkDiscussionsFilter.addValue(key, value);
						$dialog.close();
						GreasyforkDiscussionsFilter.filter();
						Qmsg.success(i18next.t("添加成功"));
					}
				);
			});
		});
	},
	/**
	 * 添加【举报】按钮
	 */
	addReportButton() {
		log.info(`添加【举报】按钮`);
		GreasyforkDiscussionsFilter.getElementList().forEach(($listContainer) => {
			if ($listContainer.querySelector(".discussion-report-button")) {
				return;
			}
			let $listItem = $listContainer.querySelector<HTMLElement>(
				".discussion-list-item"
			)!;
			let $meta = $listItem.querySelector<HTMLElement>(".discussion-meta")!;
			let $ownMetaItem = DOMUtils.createElement(
				"div",
				{
					className: "discussion-meta-item",
					innerHTML: `
					<button class="discussion-report-button pops-button--danger">${i18next.t(
						"举报"
					)}</button>
					`,
				},
				{
					style: "flex: 0;",
				}
			);
			let $button = $ownMetaItem.querySelector<HTMLButtonElement>(
				".discussion-report-button"
			)!;
			$meta.appendChild($ownMetaItem);

			DOMUtils.on($button, "click", (event) => {
				utils.preventEvent(event);

				const discussionInfo =
					GreasyforkDiscussionsFilter.parseDiscuessionListContainerInfo(
						$listContainer
					);
				let attr_filter_key = "data-filter-key";
				let attr_filter_value = "data-filter-value";
				let $dialog = pops.alert({
					title: {
						text: i18next.t("举报"),
						position: "center",
						html: false,
					},
					content: {
						text: /*html*/ `
						<div class="report-item">
							${i18next.t("举报讨论：")}
							<a href="${GreasyforkUrlUtils.getReportUrl(
								"discussion",
								discussionInfo.snippetId!
							)}" target="_blank">${discussionInfo.snippet}</a>
						</div>
						${
							discussionInfo.scriptId
								? /*html*/ `
							<div class="report-item">
							${i18next.t("举报脚本：")}
							<a href="${GreasyforkUrlUtils.getReportUrl(
								"script",
								discussionInfo.scriptId
							)}" target="_blank">${discussionInfo.scriptName}</a>
						</div>
						`
								: ""
						}
						
						<div class="report-item">
							${i18next.t("举报用户：")}
							<a href="${GreasyforkUrlUtils.getReportUrl(
								"user",
								discussionInfo.postUserId!
							)}" target="_blank">${discussionInfo.postUserName}</a>
						</div>
						${
							discussionInfo.replyUserId &&
							discussionInfo.replyUserId != discussionInfo.postUserId
								? /*html*/ `
								<div class="report-item">
									${i18next.t("举报用户：")}
									<a href="${GreasyforkUrlUtils.getReportUrl(
										"user",
										discussionInfo.replyUserId!
									)}" target="_blank">${discussionInfo.replyUserName}</a>
								</div>
								`
								: ""
						}
							
								`,
						html: true,
					},
					btn: {
						ok: {
							enable: false,
						},
					},
					mask: {
						enable: true,
						clickEvent: {
							toClose: true,
						},
					},
					drag: true,
					dragLimit: true,
					width: "350px",
					height: "300px",
					style: /*css*/ `
							.pops-alert-content{
								display: flex;
								flex-direction: column;
								gap: 20px;
							}
							.pops-alert-content .report-item{
								text-wrap: wrap;
								padding: 8px;
								height: auto;
								text-align: left;
								margin: var(--button-margin-top) var(--button-margin-right)
								var(--button-margin-bottom) var(--button-margin-left);
								border-radius: var(--button-radius);
								color: var(--button-color);
								border-color: var(--button-bd-color);
   								background-color: var(--button-bg-color);
							}
							`,
				});
			});
		});
	},
};
