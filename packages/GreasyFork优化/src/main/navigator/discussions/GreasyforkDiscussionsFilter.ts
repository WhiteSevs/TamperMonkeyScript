import { GreasyforkApi } from "@/api/GreasyForkApi";
import { DOMUtils, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { GM_addStyle } from "ViteGM";
import i18next from "i18next";

export const GreasyforkDiscussionsFilter = {
	$data: {
		/** 脚本 */
		FILTER_SCRIPT_KEY: "greasyfork-discussions-filter-script",
		/** 发布用户 */
		FILTER_POST_USER_KEY: "greasyfork-discussions-filter-post-user",
		/** 回复用户 */
		FILTER_REPLY_USER_KEY: "greasyfork-discussions-filter-reply-user",
	},
	init() {
		log.info("论坛-过滤");
		GM_addStyle(`
        .discussion-list-container {
          --discusstion-repeat-color: #ffa700;
        }
        
        .discussion-list-container a.discussion-title[data-repeat-tip-show]::before {
          content: attr(data-repeat-tip-show);
          color: var(--discusstion-repeat-color);
          border-radius: 5px;
          border: 2px solid var(--discusstion-repeat-color);
          padding: 2px 5px;
          font-weight: 800;
          font-size: 14px;
        }
        `);
		let lockFunction = new utils.LockFunction(() => {
			this.filterDiscussions();
		}, 50);
		utils.mutationObserver(document.body, {
			config: {
				subtree: true,
				childList: true,
			},
			callback: () => {
				lockFunction.run();
			},
		});
		lockFunction.run();
	},
	/**
	 * 论坛-过滤
	 */
	filterDiscussions() {
		const filterScript = PopsPanel.getValue(this.$data.FILTER_SCRIPT_KEY, "");
		const filterPostUser = PopsPanel.getValue(
			this.$data.FILTER_POST_USER_KEY,
			""
		);
		const filterReplyUser = PopsPanel.getValue(
			this.$data.FILTER_REPLY_USER_KEY,
			""
		);

		const filterScriptList =
			filterScript.trim() === "" ? [] : filterScript.split("\n");
		const filterPostUserList =
			filterPostUser.trim() === "" ? [] : filterPostUser.split("\n");
		const filterReplyUserList =
			filterReplyUser.trim() === "" ? [] : filterReplyUser.split("\n");

		const SNIPPET_MAP = new Map<string, HTMLElement>();

		document
			.querySelectorAll<HTMLDivElement>(".discussion-list-container")
			.forEach(($listContainer, index) => {
				if (!$listContainer.querySelector<HTMLAnchorElement>("a.script-link")) {
					return;
				}
				const discussionInfo =
					this.parseDiscussionListContainer($listContainer);

				if (
					SNIPPET_MAP.has(discussionInfo.snippet) &&
					PopsPanel.getValue("greasyfork-discussions-filter-duplicate-comments")
				) {
					// 过滤重复评论
					let discussionTitleElement = SNIPPET_MAP.get(
						discussionInfo.snippet
					)!.querySelector("a.discussion-title") as HTMLAnchorElement;
					discussionTitleElement.setAttribute("data-repeat-tip-show", "true");
					let oldCount = 0;

					if (discussionTitleElement.hasAttribute("data-repeat-count")) {
						oldCount = parseInt(
							discussionTitleElement.getAttribute("data-repeat-count") as string
						);
					}
					oldCount++;
					discussionTitleElement.setAttribute(
						"data-repeat-count",
						oldCount.toString()
					);
					discussionTitleElement.setAttribute(
						"data-repeat-tip-show",
						i18next.t("已过滤：{{oldCount}}", { oldCount })
					);
					log.success([
						`过滤重复内容：${discussionInfo.snippet}`,
						discussionInfo,
					]);
					$listContainer.remove();
					return;
				}

				SNIPPET_MAP.set(discussionInfo.snippet, $listContainer as HTMLElement);
				for (const filterScriptId of filterScriptList) {
					if (discussionInfo.scriptId === filterScriptId) {
						log.success([
							`过滤脚本id：${discussionInfo.scriptId}`,
							discussionInfo,
						]);
						$listContainer.remove();
						return;
					}
				}

				for (const filterPostUserId of filterPostUserList) {
					if (discussionInfo.postUserId === filterPostUserId) {
						log.success([
							`过滤发布用户id：${discussionInfo.postUserId}`,
							discussionInfo,
						]);
						$listContainer.remove();
						return;
					}
				}

				if (discussionInfo.replyUserName) {
					for (const filterReplyUserId of filterReplyUserList) {
						if (discussionInfo.replyUserId === filterReplyUserId) {
							log.success([
								`过滤回复用户id：${discussionInfo.replyUserId}`,
								discussionInfo,
							]);
							$listContainer.remove();
							return;
						}
					}
				}
			});
	},
	/**
	 * 解析出元素上的属性
	 */
	parseDiscussionListContainer($listContainer: HTMLElement) {
		const discussionInfo = {
			/** 脚本名 */
			scriptName:
				$listContainer.querySelector<HTMLAnchorElement>("a.script-link")!
					.innerText,
			/** 脚本主页地址 */
			scriptUrl:
				$listContainer.querySelector<HTMLAnchorElement>("a.script-link")!.href,
			/** 脚本id */
			scriptId: GreasyforkApi.getScriptId(
				$listContainer.querySelector<HTMLAnchorElement>("a.script-link")!.href
			),
			/** 发布的用户名 */
			postUserName:
				$listContainer.querySelector<HTMLAnchorElement>("a.user-link")!
					.innerText,
			/** 发布的用户主页地址 */
			postUserHomeUrl:
				$listContainer.querySelector<HTMLAnchorElement>("a.user-link")!.href,
			/** 发布的用户id */
			postUserId: GreasyforkApi.getUserId(
				$listContainer.querySelector<HTMLAnchorElement>("a.user-link")!.href
			),
			/** 发布的时间 */
			postTimeStamp: new Date(
				$listContainer
					.querySelector<HTMLElement>("relative-time")!
					.getAttribute("datetime") as any
			),
			/** 发布的地址*/
			snippetUrl:
				$listContainer.querySelector<HTMLAnchorElement>("a.discussion-title")!
					.href,
			/** 发布的内容片段*/
			snippet: $listContainer.querySelector<HTMLSpanElement>(
				"span.discussion-snippet"
			)!.innerText,
			/** 回复的用户名*/
			replyUserName: void 0 as string | undefined,
			/** 回复的用户主页地址*/
			replyUserHomeUrl: void 0 as string | undefined,
			/** 回复的用户id*/
			replyUserId: void 0 as string | undefined,
			/** 回复的时间 */
			replyTimeStamp: void 0 as Date | undefined,
		};
		if (
			$listContainer.querySelector<HTMLDivElement>(
				".discussion-meta-item .discussion-meta-item"
			)
		) {
			// 回复的用户
			discussionInfo.replyUserName =
				$listContainer.querySelector<HTMLAnchorElement>(
					".discussion-meta-item .discussion-meta-item a.user-link"
				)!.innerText as string;
			discussionInfo.replyUserHomeUrl =
				$listContainer.querySelector<HTMLAnchorElement>(
					".discussion-meta-item .discussion-meta-item a.user-link"
				)!.href as string;
			discussionInfo.replyUserId = GreasyforkApi.getUserId(
				discussionInfo.replyUserHomeUrl
			);
			discussionInfo.replyTimeStamp = new Date(
				$listContainer
					.querySelector<HTMLElement>(
						".discussion-meta-item .discussion-meta-item relative-time"
					)
					?.getAttribute("datetime") as string
			);
		}
		return discussionInfo;
	},
};
