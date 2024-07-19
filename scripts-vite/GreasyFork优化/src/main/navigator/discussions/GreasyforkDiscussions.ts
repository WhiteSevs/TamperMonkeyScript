import { DOMUtils, log, pops, utils } from "@/env";
import { GreasyforkDiscussionsFilter } from "./GreasyforkDiscussionsFilter";
import { PopsPanel } from "@/setting/setting";
import { GM_addStyle } from "ViteGM";
import i18next from "i18next";

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
					let $popsDialog = pops.alert({
						title: {
							text: i18next.t("选择需要过滤的选项"),
							position: "center",
							html: false,
						},
						content: {
							text: `
							<div class="choose-list">
								<button class="choose-item" data-type="script-id">${i18next.t(
									"过滤脚本(id)"
								)}</button>
								<button class="choose-item" data-type="user-id">${i18next.t(
									"过滤发布的用户(id)"
								)}</button>
								${
									discussionInfo.replyUserId != null
										? `<button class="choose-item" data-type="reply-user-id">${i18next.t(
												"过滤回复的用户(id)"
										  )}</button>`
										: ""
								}
							</div>
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
						.choose-list{
						    display: flex;
							flex-direction: column;
							gap: 20px;
							padding: 20px 10px;
						}
						`,
					});
					DOMUtils.on(
						$popsDialog.$shadowRoot,
						"click",
						"button[data-type]",
						(event) => {
							utils.preventEvent(event);
							let $click = event.target as HTMLButtonElement;
							let filterId: string | undefined = "";
							let storageKey = "";
							if ($click.dataset["type"] === "script-id") {
								// 脚本id
								filterId = discussionInfo.scriptId;
								storageKey =
									GreasyforkDiscussionsFilter.$data.FILTER_SCRIPT_KEY;
							} else if ($click.dataset["type"] === "user-id") {
								// 用户id
								filterId = discussionInfo.postUserId;
								storageKey =
									GreasyforkDiscussionsFilter.$data.FILTER_POST_USER_KEY;
							} else if ($click.dataset["type"] === "reply-user-id") {
								// 回复用户id
								filterId = discussionInfo.replyUserId;
								storageKey =
									GreasyforkDiscussionsFilter.$data.FILTER_REPLY_USER_KEY;
							} else {
								log.warn("未知data-type");
							}
							let $popsConfirm = pops.confirm({
								title: {
									text: i18next.t("提示"),
									position: "center",
								},
								content: {
									text: i18next.t("确定{{type}}：{{filterId}}？", {
										type: $click.textContent,
										filterId: filterId,
									}),
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
										callback(eventDetails, event) {
											if (utils.isNull(storageKey)) {
												log.error("存储的key是空的");
												return;
											}
											let value = PopsPanel.getValue(storageKey, "").trim();
											if (value !== "") {
												value += "\n";
											}
											value += filterId;
											PopsPanel.setValue(storageKey, value);
											eventDetails.close();
											$popsDialog.close();
											GreasyforkDiscussionsFilter.filter();
										},
									},
								},
								drag: true,
								dragLimit: true,
								width: "300px",
								height: "200px",
							});
						}
					);
				});
			});
	},
};
