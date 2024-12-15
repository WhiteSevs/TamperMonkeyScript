import { addStyle, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { GreasyforkUrlUtils } from "@/utils/GreasyforkUrlUtils";
import i18next from "i18next";

export type DiscuessionsFilterRule = {
	/** 脚本名 */
	scriptName: string;
	/** 脚本id */
	scriptId: string;
	/** 发布的用户id */
	postUserId: string;
	/** 回复的用户id */
	replyUserId: string;
};

export const GreasyforkDiscussionsFilter = {
	/** 存储的键 */
	key: "gf-discuessions-filter-rule",
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
		addStyle(/*css*/ `
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
			this.filter();
		}, 50);
		utils.mutationObserver(document.body, {
			config: {
				subtree: true,
				childList: true,
			},
			immediate: true,
			callback: () => {
				lockFunction.run();
			},
		});
		lockFunction.run();
	},
	/**
	 * 获取反馈列表元素
	 */
	getElementList() {
		let discussionsListContainer: HTMLDivElement[] = [];
		discussionsListContainer = discussionsListContainer.concat(
			Array.from(
				document.querySelectorAll<HTMLDivElement>(".discussion-list-container")
			)
		);
		return discussionsListContainer;
	},
	/**
	 * 论坛-过滤
	 */
	filter() {
		this.transformOldRule();
		// 存储的列表元素，用于判断该元素是否重复
		const SNIPPET_MAP = new Map<string, HTMLElement>();

		this.getElementList().forEach(($listContainer, index) => {
			const discussionInfo =
				this.parseDiscuessionListContainerInfo($listContainer);
			let localValueSplit = this.getValue().split("\n");

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
			for (let index = 0; index < localValueSplit.length; index++) {
				let localRule = localValueSplit[index];
				let ruleSplit = localRule.split("##");
				/** 规则名 */
				let ruleName = ruleSplit[0] as keyof DiscuessionsFilterRule;
				/** 规则值 */
				let ruleValue = ruleSplit[1];
				if (ruleName in discussionInfo) {
					let ruleValueRegExp = new RegExp(ruleValue, "ig");
					if (discussionInfo[ruleName] != null) {
						let scriptInfoString = String(discussionInfo[ruleName]);
						if (scriptInfoString.match(ruleValueRegExp)) {
							log.info("触发论坛过滤规则", localRule, discussionInfo);
							$listContainer.remove();
							return;
						}
					}
				}
			}
		});
	},
	/**
	 * 解析出元素上的属性
	 */
	parseDiscuessionListContainerInfo($listContainer: HTMLElement) {
		let discussionUrl =
			$listContainer.querySelector<HTMLAnchorElement>("a.discussion-title")!
				.href!;
		let discuessionIdMatch = discussionUrl.match(
			/\/discussions(|\/greasyfork)\/([\d]+)/
		);
		let discuessionId = discuessionIdMatch![discuessionIdMatch!.length - 1];
		const info = {
			/** 脚本名 */
			scriptName: $listContainer.querySelector<HTMLDivElement>(
				".discussion-meta-item-script-name"
			)!.innerText,
			/** 脚本主页地址 */
			scriptUrl: $listContainer.querySelector<HTMLAnchorElement>(
				".discussion-meta-item-script-name a"
			)?.href,
			/** 脚本id */
			scriptId: GreasyforkUrlUtils.getScriptId(
				$listContainer.querySelector<HTMLAnchorElement>(
					".discussion-meta-item-script-name a"
				)?.href
			),
			/** 发布的用户名 */
			postUserName:
				$listContainer.querySelector<HTMLAnchorElement>("a.user-link")!
					.innerText,
			/** 发布的用户主页地址 */
			postUserHomeUrl:
				$listContainer.querySelector<HTMLAnchorElement>("a.user-link")!.href,
			/** 发布的用户id */
			postUserId: GreasyforkUrlUtils.getUserId(
				$listContainer.querySelector<HTMLAnchorElement>("a.user-link")!.href
			)!,
			/** 发布的时间 */
			postTimeStamp: new Date(
				$listContainer
					.querySelector<HTMLElement>("relative-time")!
					.getAttribute("datetime") as any
			),
			/**  发布的id */
			snippetId: discuessionId,
			/** 发布的地址*/
			snippetUrl: discussionUrl,
			/** 发布的内容片段*/
			snippet:
				$listContainer.querySelector<HTMLSpanElement>("span.discussion-snippet")
					?.innerText || "",
			/** （如果有）回复的用户名*/
			replyUserName: void 0 as string | undefined,
			/** （如果有）回复的用户主页地址*/
			replyUserHomeUrl: void 0 as string | undefined,
			/** （如果有）回复的用户id*/
			replyUserId: void 0 as string | undefined,
			/** （如果有）回复的时间 */
			replyTimeStamp: void 0 as Date | undefined,
		};
		if (
			$listContainer.querySelector<HTMLDivElement>(
				".discussion-meta-item .discussion-meta-item"
			)
		) {
			// 回复的用户
			info.replyUserName = $listContainer.querySelector<HTMLAnchorElement>(
				".discussion-meta-item .discussion-meta-item a.user-link"
			)!.innerText as string;
			info.replyUserHomeUrl = $listContainer.querySelector<HTMLAnchorElement>(
				".discussion-meta-item .discussion-meta-item a.user-link"
			)!.href as string;
			info.replyUserId = GreasyforkUrlUtils.getUserId(info.replyUserHomeUrl);
			info.replyTimeStamp = new Date(
				$listContainer
					.querySelector<HTMLElement>(
						".discussion-meta-item .discussion-meta-item relative-time"
					)
					?.getAttribute("datetime") as string
			);
		}
		return info;
	},
	/** 转换旧规则 @deprecated */
	transformOldRule() {
		if (Date.now() > new Date("2024-8-19").getTime()) {
			// 超过30天不再转换旧规则
			return;
		}
		/** 脚本 */
		const FILTER_SCRIPT_KEY = "greasyfork-discussions-filter-script";
		/** 发布用户 */
		const FILTER_POST_USER_KEY = "greasyfork-discussions-filter-post-user";
		/** 回复用户 */
		const FILTER_REPLY_USER_KEY = "greasyfork-discussions-filter-reply-user";
		const filterScript = PopsPanel.getValue(FILTER_SCRIPT_KEY, "");
		const filterPostUser = PopsPanel.getValue(FILTER_POST_USER_KEY, "");
		const filterReplyUser = PopsPanel.getValue(FILTER_REPLY_USER_KEY, "");
		const filterScriptList =
			filterScript.trim() === "" ? [] : filterScript.split("\n");
		const filterPostUserList =
			filterPostUser.trim() === "" ? [] : filterPostUser.split("\n");
		const filterReplyUserList =
			filterReplyUser.trim() === "" ? [] : filterReplyUser.split("\n");
		filterScriptList.forEach((ruleValue) => {
			this.addValue(
				"scriptId",
				utils.parseStringToRegExpString("^" + ruleValue + "$")
			);
		});
		filterPostUserList.forEach((ruleValue) => {
			this.addValue(
				"postUserId",
				utils.parseStringToRegExpString("^" + ruleValue + "$")
			);
		});
		filterReplyUserList.forEach((ruleValue) => {
			this.addValue(
				"replyUserId",
				utils.parseStringToRegExpString("^" + ruleValue + "$")
			);
		});
		PopsPanel.deleteValue(FILTER_SCRIPT_KEY);
		PopsPanel.deleteValue(FILTER_POST_USER_KEY);
		PopsPanel.deleteValue(FILTER_REPLY_USER_KEY);
	},
	setValue(value: string) {
		PopsPanel.setValue(this.key, value);
	},
	addValue(
		key: keyof DiscuessionsFilterRule,
		value: DiscuessionsFilterRule[keyof DiscuessionsFilterRule]
	) {
		let localValue = this.getValue();
		if (localValue.trim() !== "") {
			localValue += "\n";
		}
		if (utils.isNull(key)) {
			return;
		}
		key = key.toString().trim() as keyof DiscuessionsFilterRule;
		let rule = key + "##" + value;
		localValue += rule;
		this.setValue(localValue);
	},
	getValue() {
		return PopsPanel.getValue(this.key, "");
	},
};
