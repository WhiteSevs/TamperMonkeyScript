import { $, $$, addStyle, DOMUtils, log, pops, utils } from "@/env";
import { PanelUISize } from "@/setting/panel-ui-size";
import { VueUtils } from "@/utils/VueUtils";
import {
	TiebaUniAppComponentDetectionRule,
	type TiebaUserLabelRule,
} from "./TiebaUniAppComponentDetectionRule";
import Qmsg from "qmsg";
import { TieBaApi } from "../api/TiebaApi";
import {
	TiebaHomeApi,
	type UserConcernInfo,
	type UserFollowInfo,
	type UserPostInfo,
} from "../api/TiebaHomeApi";
import { TiebaPCApi } from "../api/TiebaPCApi";
import { TiebaUrlHandler } from "../handler/TiebaUrlHandler";

/** 匹配信息 */
type MatchedInfo = {
	rule: TiebaUserLabelRule;
	/** 匹配的数据信息 */
	matchedInfoList: {
		/** 符合规则的原因 */
		reason: string;
		/** 符合规则的匹配的文本 */
		reasonText: string;
		/** 符合规则的链接 */
		reasonLink: string | null;
		reasonTime: number | string | null;
	}[];
};

export const TiebaUniAppComponentDetection = {
	$data: {
		/** 查询图标svg */
		searchIcon: /*html*/ `
            <svg viewBox="0 0 24 24" fill="none">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        `,
	},
	init() {
		log.info(`成分检测`);
		TiebaUniAppComponentDetectionRule.init();
		addStyle(/*css*/ `
			.composition-checkable{
				padding: 4px 0px;
			}
            .composition-checkable,
			.composition-checked{
                display: inline-flex;
                vertical-align: middle;
				flex-wrap: wrap;
				align-items: center;
            }
			/* 查询按钮 */
			.composition-checkable .composition-badge-control {
				display: inline-flex;
				justify-content: center;
				align-items: center;
				width: fit-content;
				height: fit-content;
				background: #574AB830;
				border-radius: 8px;
				margin: 0 0 0 6px;
				font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
			}

			.composition-checkable .composition-name-control {
				color: #7367F0;
				padding: 2px 8px;
                font-size: 14px;
                display: flex;
                align-items: center;
                height: 20px;
                line-height: normal;
			}
            
			.composition-checkable .composition-name-control svg {
				vertical-align: middle;
                width: 16px;
                height: 16px;
			}
			/* ↑查询按钮 */

			/* 标签按钮 */
			.composition-checked .composition-badge {
				display: inline-flex;
 				justify-content: center;
 				align-items: center;
				width: fit-content;
 				background: #574AB825;
 				border-radius: 10px;
 				margin: 0 6px 0 6px;
 				font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
				font-weight: normal;
				cursor: pointer;
			}

			.composition-checked .composition-name {
				color: #574AB8;
				padding: 2px 8px;
                font-size: 14px;
                line-height: 14px;
			}

			.composition-checked .composition-icon {
				color: #574AB8 !important;
				background: transparent !important;
				border-radius: 50% !important;
				width: 20px !important;
				height: 20px !important;
				border: 2px solid #574AB880 !important;
				margin: -6px;
				display: flex !important;
				justify-content: center !important;
				align-items: center !important;
				font-size: 16px !important;
			}
			.composition-checked .composition-badge > *:first-child{
				margin-left: 6px;
			}
			.composition-checked .composition-badge > *:last-child{
				margin-right: 6px;
			}
			.composition-checked .composition-badge .composition-icon,
			.composition-checked .composition-badge .composition-name{
				margin: 0;
				white-space: nowrap;
			}
        `);
		addStyle(/*css*/ `
			
		`);
		DOMUtils.ready(() => {
			let lockFn = new utils.LockFunction(async () => {
				// 评论区的
				$$<HTMLElement>(
					".pb-comment-item .player-info:not([data-is-inject-search-label]):has(.user-info-degrade)"
				).forEach(($replyItem) => {
					$replyItem.setAttribute("data-is-inject-search-label", "");
					let { $container, $compositionNameControl } = this.createSearchButton(
						() => {
							let $pbCommentItem =
								$replyItem.closest<HTMLElement>(".pb-comment-item")!;
							let $userInfoDegrade =
								$replyItem.querySelector<HTMLElement>(".user-info-degrade")!;
							let vueIns = VueUtils.getVue($userInfoDegrade);
							if (!vueIns) {
								throw new TypeError("获取vue属性失败");
							}
							let nameShow: null | number = vueIns?.nameInfo?.text;
							if (nameShow == null) {
								throw new TypeError("获取nameShow失败");
							}
							let sectionData = vueIns?.$parent?.sectionData;
							if (!Array.isArray(sectionData)) {
								throw new TypeError("获取sectionData失败");
							}
							let findValue = sectionData.find(
								(item) => item?.author?.name_show === nameShow
							);
							if (!findValue) {
								throw new TypeError("获取对应的用户信息失败");
							}
							return {
								id: findValue?.author?.id,
								portrait: findValue?.author?.portrait,
								name_show: findValue?.author?.name_show,
							};
						}
					);
					DOMUtils.append($replyItem, $container);
				});
				// 楼中楼弹窗内的
				$$<HTMLElement>(
					".pb-comment-item-container .player-info:not([data-is-inject-search-label]):has(:not(.user-info-degrade))"
				).forEach(($replyItem) => {
					$replyItem.setAttribute("data-is-inject-search-label", "");
					let { $container, $compositionNameControl } = this.createSearchButton(
						() => {
							let $pbCommentItemContainer = $replyItem.closest<HTMLElement>(
								".pb-comment-item-container"
							);
							if (!$pbCommentItemContainer) {
								throw new TypeError("获取$pbCommentItemContainer失败");
							}
							let vueIns = VueUtils.getVue($pbCommentItemContainer);
							if (!vueIns) {
								throw new TypeError("获取vue属性失败");
							}
							let commentData = vueIns?.commentData;
							if (!commentData) {
								throw new TypeError("获取commentData失败");
							}
							return {
								id: commentData?.author?.id,
								portrait: commentData?.author?.portrait,
								name_show: commentData?.author?.name_show,
							};
						}
					);
					DOMUtils.append($replyItem, $container);
				});
			});
			utils.mutationObserver(document, {
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
	 * 查询用户所有的信息
	 *
	 * 即提取需要判断的信息
	 * @param userName
	 */
	async queryUserAllInfo(userName: string) {
		// 获取关注的用户
		let allFollowingData: UserFollowInfo[] = [];
		let followPageSize = 12;
		let followOffset = followPageSize * 1;
		let followMaxCount = 10;
		let followCount = 0;
		while (true) {
			let followingData = await TiebaHomeApi.getFollow(
				userName,
				followOffset,
				followPageSize
			);
			if (!followingData) {
				break;
			}
			allFollowingData.push(...followingData.data);
			if (followCount >= followMaxCount) {
				break;
			}
			if (!followingData.has_next) {
				break;
			}
			followOffset += followPageSize;
			followCount++;
			await utils.sleep(150);
		}
		// 获取关注的吧
		let allConcernData: UserConcernInfo[] = [];
		let concernPN = 1;
		let concernMaxCount = 10;
		let concernCount = 0;
		while (true) {
			let concernData = await TiebaHomeApi.getConcern(userName, concernPN);
			if (!concernData) {
				break;
			}
			allConcernData.push(...concernData.data);
			if (concernCount > concernMaxCount) {
				break;
			}
			if (!concernData.has_more) {
				break;
			}
			concernPN++;
			concernCount++;
			await utils.sleep(150);
		}
		// 发布的帖子
		let allPostData: UserPostInfo[] = [];
		let postMaxPN = 10;
		let postPN = 1;
		while (true) {
			let postData = await TiebaHomeApi.getPost(userName, postPN);
			if (!postData) {
				break;
			}
			allPostData.push(...postData.data);
			if (postPN > postMaxPN) {
				break;
			}
			postPN++;
			await utils.sleep(150);
		}
		// 提取获取到的数据
		let result = {
			/** 关注列表信息 */
			following: allFollowingData,
			/** 关注的吧的信息 */
			concernForum: allConcernData,
			/** 发帖/回帖信息 */
			postInfo: allPostData,
		};
		return result;
	},
	/**
	 * 创建查询按钮
	 * @param queryUserInfoFn 查询mid的函数
	 */
	createSearchButton(
		queryUserInfoFn: () => {
			name_show: string;
			portrait: string;
			id: number;
		}
	) {
		let $compositionCheckable = DOMUtils.createElement("div", {
			className: "composition-checkable",
			innerHTML: /*html*/ `
                <div class="composition-badge-control">
                    <span class="composition-name-control">
                        ${this.$data.searchIcon}
                    </span>
                </div>
            `,
		});
		let $badge = $compositionCheckable.querySelector<HTMLElement>(
			".composition-badge-control"
		)!;
		let $compositionNameControl =
			$compositionCheckable.querySelector<HTMLElement>(
				".composition-name-control"
			)!;

		DOMUtils.on(
			$badge,
			"click",
			async (event) => {
				utils.preventEvent(event);
				if ($compositionCheckable.hasAttribute("data-is-searching")) {
					log.error("正在搜索中，请稍后再试");
					return;
				}
				$compositionCheckable.setAttribute("data-is-searching", "");
				DOMUtils.html($compositionNameControl, "...");
				try {
					let userInfo = queryUserInfoFn();
					this.clearLabel($compositionCheckable);
					// 通过id查询uname
					let chatUserInfo = await TieBaApi.getChatUserInfo(userInfo.id);
					log.info(`查询用户信息：`, chatUserInfo);
					if (!chatUserInfo) {
						throw new TypeError("获取用户信息失败");
					}
					let userName = chatUserInfo.uname.toString();
					let userAllInfo = await this.queryUserAllInfo(userName);
					if (!userAllInfo) {
						throw new TypeError("获取用户所有信息失败");
					}
					log.info(`检索出用户所有信息：`, userAllInfo);
					this.handleShowLabel(
						chatUserInfo,
						userAllInfo,
						$compositionCheckable
					);
					// 重置状态为搜索图标
					DOMUtils.html($compositionNameControl, this.$data.searchIcon);
				} catch (error: any) {
					log.error(error);
					Qmsg.error(error.message, {
						timeout: 3500,
					});
					DOMUtils.html($compositionNameControl, "重试");
				} finally {
					$compositionCheckable.removeAttribute("data-is-searching");
				}
			},
			{ capture: true }
		);
		return {
			$container: $compositionCheckable,
			$compositionNameControl,
		};
	},
	/**
	 * 创建标签
	 * @param data
	 */
	createLabel(data: MatchedInfo) {
		let $label = DOMUtils.createElement("div", {
			className: "composition-checked",
			innerHTML: /*html*/ `
				<div class="composition-badge">
				</div>
			`,
		});
		let $badge = $label.querySelector<HTMLElement>(".composition-badge")!;
		if (data.rule.data.isShowDisplayName) {
			// 显示标签名
			let $compositionName = DOMUtils.createElement("span", {
				className: "composition-name",
				innerHTML: data.rule.data.displayName,
			});
			DOMUtils.append($badge, $compositionName);
		}
		if (data.rule.data.isShowDisplayIcon) {
			// 显示图标

			let $compositionIcon: HTMLElement | null = null;
			if (data.rule.data.displayIcon.startsWith("http")) {
				// 网络图片
				$compositionIcon = DOMUtils.createElement(
					"img",
					{
						className: "composition-icon",
						src: data.rule.data.displayIcon,
					},
					{
						referrer: "no-referrer",
						referrerPolicy: "no-referrer",
					}
				);
			} else {
				$compositionIcon = DOMUtils.createElement("span", {
					className: "composition-icon",
					innerHTML: data.rule.data.displayIcon,
				});
			}
			DOMUtils.append($badge, $compositionIcon);
		}
		DOMUtils.on(
			$badge,
			"click",
			(event) => {
				utils.preventEvent(event);
				pops.alert({
					title: {
						text: "识别信息",
						html: false,
						position: "center",
					},
					content: {
						text: /*html*/ `
						${data.matchedInfoList
							.map((it) => {
								let $el = DOMUtils.createElement("div", {
									className: "reason-container",
									innerHTML: /*html*/ `
										<div class="reason-text"><span>原因：</span>${it.reason}</div>
										<div class="reason-text"><span>匹配：</span>${
											typeof it.reasonLink === "string"
												? /*html*/ `
											<a href="${it.reasonLink}" target="_blank">${it.reasonText}</a>
										`
												: it.reasonText
										}</div>
									`,
								});
								if (it.reasonTime != null) {
									let $reasonTime = DOMUtils.createElement("div", {
										className: "reason-text",
										innerHTML: /*html*/ `
										<span>时间：</span>${
											typeof it.reasonTime === "number"
												? utils.formatTime(it.reasonTime)
												: it.reasonTime
										}
										`,
									});
									DOMUtils.append($el, $reasonTime);
								}
								return $el.outerHTML;
							})
							.join("\n")}
					`,
						html: true,
					},
					btn: {
						ok: { enable: false },
					},
					mask: {
						enable: true,
						clickEvent: {
							toClose: true,
						},
					},
					width: PanelUISize.setting.width,
					height: PanelUISize.setting.height,
					style: /*css*/ `
					.reason-container{
						color: #7367F0;
						margin: 10px 10px;
					}
				`,
				});
			},
			{ capture: true }
		);
		return $label;
	},
	/**
	 * 清空标签
	 * @param $ele
	 */
	clearLabel($ele: HTMLElement) {
		$ele.querySelectorAll(".composition-checked").forEach((it) => it.remove());
	},
	/**
	 * 处理并显示标签
	 * @param userId 用户id
	 * @param data
	 * @param $searchContainer
	 */
	handleShowLabel(
		chatUserInfo: Exclude<
			Awaited<ReturnType<typeof TieBaApi.getChatUserInfo>>,
			undefined
		>,
		data: Exclude<Awaited<ReturnType<typeof this.queryUserAllInfo>>, undefined>,
		$searchContainer: HTMLElement
	) {
		if (TiebaUniAppComponentDetectionRule.$data.ruleData.length === 0) {
			Qmsg.warning("未配置规则，请在设置中进行添加");
			return;
		}
		let userId = chatUserInfo.uid.toString();
		if (TiebaUniAppComponentDetectionRule.$data.whiteList.includes(userId)) {
			// 白名单用户
			// 不处理
			return;
		}
		/** 命中的规则 */
		let matchedAllRule: MatchedInfo[] = [];
		/**
		 * 添加命中的规则
		 * @param rule
		 * @param matchedInfo
		 */
		let pushMatchedRule = (
			rule: MatchedInfo["rule"],
			matchedInfo: MatchedInfo["matchedInfoList"]["0"]
		) => {
			let findValue = matchedAllRule.find((it) => it.rule === rule);
			if (findValue) {
				findValue.matchedInfoList.push(matchedInfo);
			} else {
				matchedAllRule.push({
					rule: rule,
					matchedInfoList: [matchedInfo],
				});
			}
		};
		TiebaUniAppComponentDetectionRule.$data.ruleData.forEach((ruleData) => {
			if (
				Array.isArray(ruleData.data.blacklist) &&
				ruleData.data.blacklist.find(
					(it) =>
						it.toString() === userId ||
						(typeof chatUserInfo.portrait === "string" &&
							chatUserInfo.portrait.startsWith(it.toString()))
				)
			) {
				// 黑名单中存在符合的id
				pushMatchedRule(ruleData, {
					reason: "黑名单用户",
					reasonText: userId,
					reasonLink: TiebaUrlHandler.getUserHomeByUN(userId),
					reasonTime: null,
				});
				return;
			}
			if (Array.isArray(ruleData.data.followings)) {
				let reason = "关注列表";
				let reasonText = "";
				let checkFlag = ruleData.data.followings.some((followPortrait) => {
					let __check__flag__ = data.following.some((followingData) => {
						return followingData.portrait === followPortrait.toString();
					});
					if (__check__flag__) {
						reasonText = followPortrait.toString();
					}
					return __check__flag__;
				});
				if (checkFlag) {
					// 关注列表中存在符合的portrait
					pushMatchedRule(ruleData, {
						reason: reason,
						reasonText: reasonText,
						reasonLink: TiebaUrlHandler.getUserHome(chatUserInfo.portrait),
						reasonTime: null,
					});
				}
			}
			if (Array.isArray(ruleData.data.followingForums)) {
				// 关注的吧

				let reason = "关注的吧";
				let reasonText = "";
				let checkFlag = ruleData.data.followingForums.some(
					(followingForumInfo) => {
						let __check__flag__ = data.concernForum.some((forumInfo) => {
							return forumInfo.forumName === followingForumInfo.toString();
						});
						if (__check__flag__) {
							reasonText = followingForumInfo.toString();
						}
						return __check__flag__;
					}
				);
				if (checkFlag) {
					// 关注的吧中存在符合的吧名
					pushMatchedRule(ruleData, {
						reason: reason,
						reasonText: reasonText,
						reasonLink: TiebaUrlHandler.getForum(reasonText),
						reasonTime: null,
					});
				}
			}
			if (Array.isArray(ruleData.data.keywords)) {
				// 关键词
				ruleData.data.keywords.forEach((keyword) => {
					// 比如说吧
					// 目前暂时认为回复的帖子的内容不算
					// 发布的帖子如果规则中设置了关注的吧的话，那么发帖在该吧就算是命中
					for (
						let spaceIndex = 0;
						spaceIndex < data.postInfo.length;
						spaceIndex++
					) {
						const spaceData = data.postInfo[spaceIndex];
						let reason = "";
						let reasonText = keyword;
						let reasonLink = spaceData.url;
						let reasonTime = spaceData.time;
						if (spaceData.replyContent == null) {
							// 发的帖子
							if (
								typeof spaceData.title === "string" &&
								spaceData.title.match(keyword)
							) {
								reason = "发布的帖子的标题";
							} else if (
								typeof spaceData.content === "string" &&
								spaceData.content.match(keyword)
							) {
								reason = "发布的帖子的内容";
							} else if (
								typeof spaceData.forumName === "string" &&
								Array.isArray(ruleData.data.followingForums) &&
								ruleData.data.followingForums.findIndex(
									(it) => it.toString() === spaceData.forumName.toString()
								) !== -1
							) {
								reason = "发布的帖子所在的吧";
								reasonText = spaceData.forumName;
							}
						} else {
							// 评论
							if (
								typeof spaceData.replyContent === "string" &&
								spaceData.replyContent.match(keyword)
							) {
								// 转发的评论内容中存在关键词
								reason = "评论的内容";
							}
						}
						if (reason !== "") {
							pushMatchedRule(ruleData, {
								reason: reason,
								reasonText: reasonText,
								reasonLink: reasonLink,
								reasonTime: reasonTime,
							});
						}
					}
				});
			}
		});

		// 按出现次数排序，出现次数最高的排在最前面
		utils.sortListByProperty(
			matchedAllRule,
			(value) => {
				return value.matchedInfoList.length;
			},
			true
		);
		matchedAllRule.forEach((it) => {
			let $label = this.createLabel(it);
			DOMUtils.append($searchContainer, $label);
		});
	},
};