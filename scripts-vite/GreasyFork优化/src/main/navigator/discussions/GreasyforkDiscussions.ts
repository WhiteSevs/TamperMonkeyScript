import { DOMUtils, log, pops, utils } from "@/env";
import {
	DiscuessionsFilterRule,
	GreasyforkDiscussionsFilter,
} from "./GreasyforkDiscussionsFilter";
import { PopsPanel } from "@/setting/setting";
import { GM_addStyle } from "ViteGM";
import i18next from "i18next";
import Qmsg from "qmsg";

export const GreasyforkForum = {
	init() {
		this.readBgColor();
		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("greasyfork-discussions-filter-enable", () => {
				this.filterEnable();
			});
			PopsPanel.execMenuOnce("discussions-addShortcutOperationButton", () => {
				this.addShortcutOperationButton();
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
		let color = PopsPanel.getValue("discussions-readBgColor");
		GM_addStyle(`
        .discussion-read{
            background: ${color} !important;
        }
        `);
	},
	/**
	 * 添加快捷操作按钮
	 */
	addShortcutOperationButton() {
		log.info("添加快捷操作按钮");
		document
			.querySelectorAll<HTMLDivElement>(".discussion-list-container")
			.forEach(($listContainer) => {
				if (!$listContainer.querySelector<HTMLAnchorElement>("a.script-link")) {
					return;
				}
				let $listItem = $listContainer.querySelector<HTMLElement>(
					".discussion-list-item"
				)!;
				let $meta = $listItem.querySelector<HTMLElement>(".discussion-meta")!;
				let $ownMetaItem = DOMUtils.createElement("div", {
					className: "discussion-meta-item",
					innerHTML: `
					<button class="discussion-filter-button">${i18next.t("过滤")}</button>
					`,
				});
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
							text: `
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
						drag: true,
						dragLimit: true,
						width: "350px",
						height: "300px",
						style: `
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
};
