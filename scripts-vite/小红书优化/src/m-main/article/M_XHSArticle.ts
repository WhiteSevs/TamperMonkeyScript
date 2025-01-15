import { XHSApi } from "@/api/XHSApi";
import { DOMUtils, Viewer, addStyle, log, utils } from "@/env";
import { XHS_Hook } from "@/hook/hook";
import { PopsPanel } from "@/setting/setting";
import { unsafeWindow } from "ViteGM";
import { M_XHSArticleBlock } from "./M_XHSArticleBlock";
import { M_XHSArticleVideo } from "./M_XHSArticleVideo";
import Qmsg from "qmsg";
import { CommonUtil } from "@/utils/CommonUtil";
import { GM_RESOURCE_MAPPING } from "@/GM_Resource_Mapping";
import blockCSS from "./css/block.css?raw";

interface CommentDataInfo {
	user_id: string;
	user_avatar: string;
	user_nickname: string;
	content: string;
	create_time: string | number;
	ip_location: string;
}
export const M_XHSArticle = {
	init() {
		addStyle(blockCSS);
		if (
			PopsPanel.getValue("little-red-book-hijack-webpack-mask") ||
			PopsPanel.getValue("little-red-book-hijack-webpack-scheme")
		) {
			log.info("劫持webpack");
			XHS_Hook.webpackChunkranchi();
			XHS_Hook.setTimeout();
			XHS_Hook.call();
		}
		PopsPanel.execMenuOnce("little-red-book-shieldBottomSearchFind", () => {
			return M_XHSArticleBlock.blockBottomSearchFind();
		});
		PopsPanel.execMenuOnce("little-red-book-shieldBottomToorBar", () => {
			return M_XHSArticleBlock.blockBottomToorBar();
		});
		PopsPanel.execMenuOnce("little-red-book-optimizeImageBrowsing", () => {
			M_XHSArticle.optimizeImageBrowsing();
		});
		PopsPanel.execMenuOnce("little-red-book-optimizeVideoNoteDesc", () => {
			return M_XHSArticleVideo.optimizeVideoNoteDesc();
		});
		PopsPanel.execMenuOnce("little-red-book-shieldAuthorHotNote", () => {
			return M_XHSArticleBlock.blockAuthorHotNote();
		});
		PopsPanel.execMenuOnce("little-red-book-shieldHotRecommendNote", () => {
			return M_XHSArticleBlock.blockHotRecommendNote();
		});
		DOMUtils.ready(function () {
			PopsPanel.execMenu("little-red-book-optimizeCommentBrowsing", () => {
				M_XHSArticle.optimizeCommentBrowsing();
			});
		});
	},
	/**
	 * 优化评论浏览
	 */
	optimizeCommentBrowsing() {
		log.info("优化评论浏览");
		/* 评论 */
		const Comments = {
			QmsgLoading: undefined as any,
			scrollFunc: undefined as unknown as {
				lock: () => void;
				unlock: () => void;
				run: () => Promise<void>;
			},
			noteId: "",
			xsec_token: "",
			noteData: {} as NestedObjectWithToString,
			commentData: {} as NestedObjectWithToString,
			emojiMap: {} as NestedObjectWithToString,
			emojiNameList: [] as string[],
			currentCursor: undefined as unknown as string,
			commentContainer: undefined as unknown as HTMLElement,
			init() {
				/* emoji数据 */
				this.emojiMap =
					utils.toJSON(unsafeWindow.localStorage.getItem("redmoji"))?.[
						"redmojiMap"
					] || {};
				/* emoji的名字数组 */
				this.emojiNameList = Object.keys(this.emojiMap);
				/* 滚动事件 */
				this.scrollFunc = new utils.LockFunction(this.scrollEvent, this);
				const __INITIAL_STATE__ =
					// @ts-ignore
					unsafeWindow["__INITIAL_STATE__"];
				const noteData =
					__INITIAL_STATE__.noteData ?? __INITIAL_STATE__.data.noteData;
				/* 笔记数据 */
				Comments.noteData = noteData.data.noteData;
				/* 评论数据 */
				Comments.commentData = noteData.data.commentData;
				/** 笔记id */
				Comments.noteId = Comments.noteData.noteId;
				/** 笔记token */
				Comments.xsec_token = __INITIAL_STATE__.noteData.routeQuery.xsec_token;
				log.info(["笔记数据", Comments.noteData]);
				log.info(["评论数据", Comments.commentData]);
			},
			/**
			 *
			 * @param data
			 */
			getCommentHTML(data: CommentDataInfo) {
				return /*html*/ `
				<div class="little-red-book-comments-avatar">
						<a target="_blank" href="/user/profile/${data.user_id}">
							<img src="${data.user_avatar}" crossorigin="anonymous">
						</a>
				</div>
				<div class="little-red-book-comments-content-wrapper">
					<div class="little-red-book-comments-author-wrapper">
						<div class="little-red-book-comments-author">
							<a href="/user/profile/${
								data.user_id
							}" class="little-red-book-comments-author-name" target="_blank">
								${data.user_nickname}
							</a>
						</div>
						<div class="little-red-book-comments-content">
							${data.content}
						</div>
						<div class="little-red-book-comments-info">
							<div class="little-red-book-comments-info-date">
								<span class="little-red-book-comments-create-time">${utils.formatTime(
									data.create_time
								)}</span>
								<span class="little-red-book-comments-location">${data.ip_location}</span>
							</div>
						</div>
					</div>
				</div>
            `;
			},
			/**
			 * 获取内容元素
			 * @param {object} data
			 * @returns
			 */
			getCommentElement(data: NestedObjectWithToString) {
				/* 评论内容 */
				let content = data["content"];
				/* 发布时间 */
				let create_time = data["create_time"] || parseInt(data["time"]);
				/* 发布的id，用于加载楼中楼评论 */
				let id = data["id"];
				/* 发布者的ip地址 */
				let ip_location = data["ip_location"] || data["ipLocation"];
				/* 是否继续存在子评论 */
				let sub_comment_has_more = data["sub_comment_has_more"];
				/* 楼中楼回复的总数量 */
				let sub_comment_count = parseInt(data["sub_comment_count"]) || 0;
				/* 加载楼中楼更多回复的时候需要的参数 */
				let sub_comment_cursor = data["sub_comment_cursor"];
				/* 楼中楼评论的数据 */
				let sub_comments = data["sub_comments"] || data["subComments"];
				/* 评论的用户头像 */
				let user_avatar = (data["user_info"] || data["user"])["image"];
				/* 评论的用户名 */
				let user_nickname = (data["user_info"] || data["user"])["nickname"];
				/* 评论的用户id */
				let user_id =
					data?.["user_info"]?.["user_id"] || data?.["user"]?.["userId"];

				content = Comments.converContent(content);
				/* 创建元素 */
				let commentItemElement = DOMUtils.createElement("div", {
					className: "little-red-book-comments-item",
					innerHTML: /*html*/ `
					<div class="little-red-book-comments-parent">
					${Comments.getCommentHTML({
						user_id: user_id,
						user_avatar: user_avatar,
						user_nickname: user_nickname,
						content: content,
						create_time: create_time,
						ip_location: ip_location,
					})}
					</div>
					`,
				});

				/* 判断是否存在楼中楼回复 */
				if (sub_comment_has_more && Array.isArray(sub_comments)) {
					sub_comments.forEach((subCommentInfo) => {
						let subCommentElement = DOMUtils.createElement("div", {
							className: "little-red-book-comments-reply-container",
							innerHTML: Comments.getCommentHTML({
								user_id: subCommentInfo["user_info"]["user_id"],
								user_avatar: subCommentInfo["user_info"]["image"],
								user_nickname: subCommentInfo["user_info"]["nickname"],
								content: Comments.converContent(subCommentInfo["content"]),
								create_time: subCommentInfo["create_time"],
								ip_location: subCommentInfo["ip_location"],
							}),
						});
						commentItemElement.appendChild(subCommentElement);
					});
					if (sub_comment_count !== sub_comments.length) {
						/* 楼中楼回复还没加载完 */
						/* 计算出还没加载完的楼中楼回复的数量 */
						let endReplyCount = sub_comment_count - sub_comments.length;
						/* 楼中楼的cursor */
						let lzlCursor = sub_comment_cursor;
						let showMoreElement = DOMUtils.createElement("div", {
							className: "little-red-book-comments-reply-show-more",
							innerText: `展开 ${endReplyCount} 条回复`,
						});
						async function showMoreEvent() {
							let QmsgLoading = Qmsg.loading("加载中，请稍后...");
							let pageInfo = await XHSApi.getLzlPageInfo(
								Comments.noteId,
								id,
								10,
								lzlCursor,
								void 0
							);
							QmsgLoading.close();
							if (!pageInfo) {
								return;
							}
							/* 覆盖cursor */
							lzlCursor = pageInfo.cursor;
							/* 重新计算剩余的回复数量 */
							endReplyCount = endReplyCount - pageInfo.comments.length;
							/* 修改页面显示 */
							showMoreElement.innerText = `展开 ${endReplyCount} 条回复`;
							pageInfo.comments.forEach((subCommentInfo) => {
								let subCommentElement = DOMUtils.createElement("div", {
									className: "little-red-book-comments-reply-container",
									innerHTML: Comments.getCommentHTML({
										user_id: subCommentInfo["user_info"]["user_id"],
										user_avatar: subCommentInfo["user_info"]["image"],
										user_nickname: subCommentInfo["user_info"]["nickname"],
										content: Comments.converContent(subCommentInfo["content"]),
										create_time: subCommentInfo["create_time"],
										ip_location: subCommentInfo["ip_location"],
									}),
								});
								DOMUtils.before(showMoreElement, subCommentElement);
							});
							if (!pageInfo.has_more) {
								/* 没有更多回复了 */
								DOMUtils.off(
									showMoreElement,
									"click",
									undefined,
									showMoreEvent,
									{
										capture: true,
									}
								);
								showMoreElement.remove();
							}
						}
						DOMUtils.on(showMoreElement, "click", undefined, showMoreEvent, {
							capture: true,
						});
						commentItemElement.appendChild(showMoreElement);
					}
				}
				return commentItemElement;
			},
			/**
			 * 转换内容字符串中的emoji
			 */
			converContent(content: string) {
				/* 将内容的emoji代码换成html元素 */
				Comments.emojiNameList.forEach((emojiName) => {
					if (content.includes(emojiName)) {
						content = content.replaceAll(
							emojiName,
							/*html*/ `<img class="little-red-book-note-content-emoji" crossorigin="anonymous" src="${Comments.emojiMap[emojiName]}">`
						);
					}
				});
				return content;
			},
			/**
			 * 滚动事件
			 */
			async scrollEvent() {
				if (!utils.isNearBottom(window.innerHeight / 3)) {
					return;
				}
				if (this.QmsgLoading == null) {
					this.QmsgLoading = Qmsg.loading("加载中，请稍后...");
				}
				let pageInfo = await XHSApi.getPageInfo(
					Comments.noteId,
					Comments.currentCursor,
					Comments.xsec_token
				);
				if (this.QmsgLoading) {
					this.QmsgLoading.close();
					this.QmsgLoading = undefined;
				}
				if (!pageInfo) {
					return;
				}
				Comments.currentCursor = pageInfo.cursor;
				pageInfo.comments.forEach((commentItem) => {
					let commentItemElement = Comments.getCommentElement(commentItem);
					Comments.commentContainer.appendChild(commentItemElement);
				});

				if (!pageInfo.has_more) {
					/* 没有更多数据了 */
					Qmsg.info("已加载全部评论");
					Comments.removeScrollEventListener();
					return;
				}
			},
			/**
			 * 添加滚动监听
			 */
			addSrollEventListener() {
				log.success("添加滚动监听事件");
				DOMUtils.on(document, "scroll", undefined, Comments.scrollFunc.run, {
					capture: true,
					once: false,
					passive: true,
				});
			},
			/**
			 * 移除滚动监听
			 */
			removeScrollEventListener() {
				log.success("移除滚动监听事件");
				DOMUtils.off(document, "scroll", undefined, Comments.scrollFunc.run, {
					capture: true,
				});
			},
		};
		/* 等待内容元素出现 */
		utils.waitNode<HTMLDivElement>(".narmal-note-container").then(async () => {
			log.info("优化评论浏览-笔记元素出现");
			let noteViewContainer = document.querySelector(
				".note-view-container"
			) as HTMLDivElement;
			// let loading = Qmsg.loading("获取评论中，请稍后...");
			let commentContainer = DOMUtils.createElement("div", {
				className: "little-red-book-comments-container",
				innerHTML: /*html*/ `
                <style>
                    .little-red-book-comments-parent {
                        position: relative;
                        display: flex;
                        padding: 8px;
                        width: 100%;
                    }
                    
                    .little-red-book-comments-reply-container {
                        position: relative;
                        display: flex;
                        padding: 8px;
                        width: 100%;
                        padding-left: 52px;
                    }
                    .little-red-book-comments-container {
                        background: #fff;
                        position: relative;
                        padding: 8px 8px;
                    }
                    
                    .little-red-book-comments-item {
                        position: relative;
                    }
                    
                    .little-red-book-comments-avatar {
                        flex: 0 0 auto;
                    }
                    
                    .little-red-book-comments-avatar img {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        border-radius: 100%;
                        border: 1px solid rgba(0,0,0,0.08);
                        object-fit: cover;
                        width: 40px;
                        height: 40px;
                    }
                    .little-red-book-comments-content-wrapper {
                        margin-left: 12px;
                        display: flex;
                        flex-direction: column;
                        font-size: 14px;
                        flex-grow: 1;
                    }
                    
                    .little-red-book-comments-author {display: flex;justify-content: space-between;align-items: center;}
                    
                    a.little-red-book-comments-author-name {
                        line-height: 18px;
                        color: rgba(51,51,51,0.6);
                    }
                    
                    .little-red-book-comments-content {
                        margin-top: 4px;
                        line-height: 140%;
                        color: #333;
                    }
                    
                    .little-red-book-comments-info {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        font-size: 12px;
                        line-height: 16px;
                        color: rgba(51,51,51,0.6);
                    }
                    
                    .little-red-book-comments-info-date {
                        margin: 8px 0;
                    }
                    
                    span.little-red-book-comments-location {
                        margin-left: 4px;
                        line-height: 120%;
                    }
                    img.little-red-book-note-content-emoji {
                        margin: 0 1px;
                        height: 16px;
                        transform: translateY(2px);
                        position: relative;
                    }
                    .little-red-book-comments-reply-container .little-red-book-comments-avatar img {
                        width: 24px;
                        height: 24px;
                    }
                    .little-red-book-comments-total{
                        font-size: 14px;
                        color: rgba(51,51,51,0.6);
                        margin-left: 8px;
                        margin-bottom: 12px;
                    }
                    .little-red-book-comments-reply-show-more {
                    padding-left: calc(52px + 24px + 12px);
                    height: 32px;
                    line-height: 32px;
                    color: #13386c;
                    cursor: pointer;
                    font-weight: 500;
                    font-size: 14px;
                    }
                </style>
          `,
			});
			Comments.commentContainer = commentContainer;
			Comments.init();
			let totalElement = DOMUtils.createElement("div", {
				className: "little-red-book-comments-total",
				innerHTML: `共 ${
					Comments.commentData["commentCount"] ?? Comments.noteData["comments"]
				} 条评论`,
			});
			commentContainer.appendChild(totalElement);
			// 因为现在获取评论数据需要各种参数，目前暂不支持更多
			// if (utils.isNull(Comments.noteId)) {
			// 	Qmsg.error("获取笔记id为空");
			// 	// loading.close();
			// 	return;
			// }
			// let pageInfo = await XHSApi.getPageInfo(
			// 	Comments.noteId,
			// 	"",
			// 	Comments.xsec_token
			// );
			// /* 延迟一会儿 */
			// await utils.sleep(800);
			if (false) {
				// @ts-ignore
				Comments.currentCursor = pageInfo.cursor;
				// @ts-ignore
				pageInfo.comments.forEach((commentItem) => {
					let commentItemElement = Comments.getCommentElement(commentItem);
					commentContainer.appendChild(commentItemElement);
				});
				/* 评论尚未加载完 */
				// @ts-ignore
				if (pageInfo.has_more) {
					Comments.addSrollEventListener();
				}
			} else if (Comments.commentData && Comments.commentData["comments"]) {
				/* 从固定的评论中加载 */
				log.info("从固定的评论中加载");
				Comments.commentData["comments"].forEach((commentItem: any) => {
					let commentItemElement = Comments.getCommentElement(commentItem);
					commentContainer.appendChild(commentItemElement);
				});
			}
			// loading.close();
			DOMUtils.append(noteViewContainer, commentContainer);
		});
	},
	/**
	 * 优化图片浏览
	 */
	optimizeImageBrowsing() {
		log.info("优化图片浏览");
		CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.Viewer);
		/**
		 * 查看图片
		 * @param imgSrcList
		 * @param index
		 */
		function viewIMG(imgSrcList: string[] = [], index = 0) {
			let viewerULNodeHTML = "";
			imgSrcList.forEach((item) => {
				viewerULNodeHTML += `<li><img data-src="${item}" loading="lazy"></li>`;
			});
			let viewerULNode = DOMUtils.createElement("ul", {
				innerHTML: viewerULNodeHTML,
			});
			let viewer = new Viewer(viewerULNode, {
				inline: false,
				url: "data-src",
				zIndex: utils.getMaxZIndex() + 100,
				hidden: () => {
					viewer.destroy();
				},
			});
			index = index < 0 ? 0 : index;
			viewer.view(index);
			viewer.zoomTo(1);
			viewer.show();
		}
		DOMUtils.on(document, "click", ".note-image-box", function (event) {
			let clickElement = event.target as HTMLDivElement;
			let imgElement = clickElement.querySelector("img") as HTMLImageElement;
			let imgList: string[] = [];
			let imgBoxList: HTMLImageElement[] = [];
			if (clickElement.closest(".onix-carousel-item")) {
				/* 多组图片 */
				imgBoxList = Array.from(
					clickElement!
						.closest(".onix-carousel-item")!
						.parentElement!.querySelectorAll("img")
				);
			} else {
				/* 单个图片 */
				imgBoxList = [imgElement];
			}
			let index = imgBoxList.findIndex((value) => {
				return value == imgElement;
			});
			imgBoxList.forEach((element) => {
				let imgSrc =
					element.getAttribute("src") ||
					element.getAttribute("data-src") ||
					element.getAttribute("alt");
				if (imgSrc) {
					imgList.push(imgSrc);
				}
			});
			log.success(["点击浏览图片👉", imgList[index]]);
			viewIMG(imgList, index);
		});
	},
};
