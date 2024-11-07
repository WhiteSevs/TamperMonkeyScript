import { $, DOMUtils, Qmsg, addStyle, log, pops, utils } from "@/env";
import { CSDNBlog } from "@/main/blog/CSDNBlog";
import { PopsPanel } from "@/setting/setting";
import ShieldCSS from "./css/shield.css?raw";
import MBlogCSS from "./css/blog.css?raw";
import { CommonUtil } from "@/utils/CommonUtil";
import { M_CSDNBlogRightToolBar } from "./m-CSDNBlogRightToolBar";
import {
	CSDNFavoriteApi,
	type CSDNFavoriteDataOption,
} from "@/api/CSDNFavoriteApi";
import { CSDNArticleStatusApi } from "@/api/CSDNArticleStatusApi";
import { PanelUISize } from "@/setting/panel-ui-size";
import { unsafeWindow } from "ViteGM";

export const M_CSDNBlog = {
	init() {
		this.addCSS();
		// M_CSDNBlogRightToolBar.init();
		PopsPanel.execMenuOnce(
			"m-csdn-blog-shieldTopToolbar",
			() => {
				return this.shieldTopToolbar();
			},
			(_, value) => !value,
			(_, value) => !value
		);
		PopsPanel.execMenuOnce("m-csdn-blog-notLimitCodePreMaxHeight", () => {
			return this.notLimitCodePreMaxHeight();
		});
		PopsPanel.execMenuOnce("m-csdn-blog-notLimitCommentMaxHeight", () => {
			return this.notLimitCommentMaxHeight();
		});
		PopsPanel.execMenuOnce("m-csdn-blog-allowSelectText", () => {
			return this.allowSelectText();
		});
		PopsPanel.execMenuOnce("m-csdn-blog-autoExpandContent", () => {
			return this.autoExpandContent();
		});
		PopsPanel.execMenuOnce(
			"m-csdn-blog-bottomArticleEnable",
			() => {
				return this.blockBottomArticle();
			},
			(_, value) => !value,
			(_, value) => !value
		);
		PopsPanel.execMenuOnce(
			"m-csdn-blog-comment-enable",
			() => {
				return this.blockComment();
			},
			(_, value) => !value,
			(_, value) => !value
		);
		PopsPanel.execMenuOnce(
			"m-csdn-blog-bottom-toolbar-enable",
			() => {
				return this.blockBottomToolBar();
			},
			(_, value) => !value,
			(_, value) => !value
		);
		PopsPanel.execMenuOnce("m-csdn-blog-bottom-toolbar-always-bottom", () => {
			return this.bottomToolBarAlwaysShow();
		});

		DOMUtils.ready(() => {
			PopsPanel.execMenuOnce("m-csdn-blog-removeAds", () => {
				return this.removeAds();
			});
			PopsPanel.execMenuOnce("m-csdn-blog-refactoringRecommendation", () => {
				this.refactoringRecommendation();
			});
			PopsPanel.execMenuOnce("m-csdn-blog-unBlockCopy", () => {
				CSDNBlog.unBlockCopy();
			});
			PopsPanel.execMenuOnce(
				"m-csdn-blog-bottom-toolbar-optimizationCollectButton",
				() => {
					this.optimizationCollectButton();
				}
			);
		});
	},
	addCSS() {
		addStyle(ShieldCSS);
		addStyle(MBlogCSS);
	},
	/**
	 * 屏蔽顶部Toolbar
	 */
	shieldTopToolbar() {
		log.info("屏蔽顶部Toolbar");
		return [
			CommonUtil.addBlockCSS("#csdn-toolbar"),
			addStyle(/*css*/ `
			/* 内容顶部要归位 */
			body #main,
			.margin_sides{
			  margin-top: unset !important;
			  padding-top: unset !important;
			}
			#article .article_title{
			  margin-top: .32rem !important;
			  padding-top: unset !important;
			}
			`),
		];
	},
	/**
	 * 重构底部推荐
	 */
	refactoringRecommendation() {
		function refactoring() {
			/* 反复执行的重构函数 */
			// log.info("重构底部推荐");
			document
				.querySelectorAll<HTMLDivElement>(".container-fluid")
				.forEach((item) => {
					/* 链接 */
					let url = "";
					/* 标题 */
					let title = "";
					/* 内容 */
					let content = "";
					/* 图片 */
					let img = "";
					/* 判断是否是CSDN资源下载 */
					let isCSDNDownload = false;
					/* 判断是否是CSDN-学院资源下载 */
					let isCSDNEduDownload = false;
					if (item.hasAttribute("data-url")) {
						/* 存在真正的URL */
						url = item.getAttribute("data-url") as string;
						title = item.querySelector(".recommend_title div.left")
							?.innerHTML as string;
						if (!item.querySelector(".text")) {
							return;
						}
						content = item.querySelector(".text")?.innerHTML as string;
						if (item.querySelectorAll(".recommend-img").length) {
							/* 如果有图片就加进去 */
							item.querySelectorAll(".recommend-img").forEach((item2) => {
								img += item2.innerHTML;
							});
						}
					} else {
						// log.info("节点上无data-url");
						url = (
							item.querySelector("a[data-type]") as HTMLAnchorElement
						).getAttribute("href") as string;
						title = (
							item.querySelector(".recommend_title div.left") as HTMLDivElement
						).innerHTML;
						content = (item.querySelector(".text") as HTMLDivElement).innerHTML;
					}
					var _URL_ = new URL(url);
					if (
						_URL_.host === "download.csdn.net" ||
						(_URL_.host === "www.iteye.com" &&
							_URL_.pathname.match(/^\/resource/gi))
					) {
						/* 该链接为csdn资源下载 */
						// log.info("该链接为csdn资源下载");
						isCSDNDownload = true;
						title =
							`<div class="component-box"><a class="praise" href="javascript:;">CSDN下载</a></div>` +
							title;
					} else if (_URL_.origin.match(/edu.csdn.net/gi)) {
						/* 该链接为csdn学院下载 */
						isCSDNEduDownload = true;
						// log.info("该链接为csdn学院下载");
						title =
							`<div class="component-box"><a class="csdn-edu-title" href="javascript:;">CSDN学院</a></div>` +
							title;
					}
					item.setAttribute("class", "GM-csdn-dl");
					item.setAttribute("data-url", url);
					item.innerHTML = `<div class="GM-csdn-title"><div class="left">${title}</div></div><div class="GM-csdn-content">${content}</div><div class="GM-csdn-img">${img}</div>`;
					item.addEventListener("click", function () {
						if (PopsPanel.getValue("m-csdn-blog-openNewTab")) {
							window.open(url, "_blank");
						} else {
							window.location.href = url;
						}
					});
					if (
						(isCSDNDownload || isCSDNEduDownload) &&
						PopsPanel.getValue("m-csdn-blog-removeResourceArticle")
					) {
						item.remove();
					}
				});
		}
		let lockFunction = new utils.LockFunction(refactoring, 50);
		utils.waitNode<HTMLDivElement>("#recommend").then(($recommend) => {
			log.info("重构底部推荐");
			lockFunction.run();
			utils.mutationObserver($recommend, {
				callback: () => {
					lockFunction.run();
				},
				config: { childList: true, subtree: true, attributes: true },
			});
		});
	},
	/**
	 * 屏蔽底部文章
	 */
	blockBottomArticle() {
		log.info("屏蔽底部文章");
		return CommonUtil.addBlockCSS("#recommend");
	},
	/**
	 * 屏蔽评论
	 */
	blockComment() {
		log.info("屏蔽评论");
		return CommonUtil.addBlockCSS("#comment");
	},
	/**
	 * 去除广告
	 */
	removeAds() {
		log.info("去除广告");
		/* 登录窗口 */
		CommonUtil.waitRemove(".passport-login-container");
		/* 打开APP */
		CommonUtil.waitRemove(".btn_open_app_prompt_box.detail-open-removed");
		/* 广告 */
		CommonUtil.waitRemove(".add-firstAd");
		/* 打开CSDN APP 小程序看全文 */
		CommonUtil.waitRemove("div.feed-Sign-weixin");
		/* ios版本提示 */
		CommonUtil.waitRemove("div.ios-shadowbox");
	},
	/**
	 * 不限制代码块最大高度
	 */
	notLimitCodePreMaxHeight() {
		log.info("不限制代码块最大高度");
		return addStyle(/*css*/ `
        pre{
            max-height: unset !important;
        }
        `);
	},
	/**
	 * 不限制评论区最大高度
	 */
	notLimitCommentMaxHeight() {
		log.info("不限制评论区最大高度");
		return addStyle(/*css*/ `
        #comment{
          max-height: none !important;
        }
      `);
	},
	/**
	 * 允许选择文字
	 */
	allowSelectText() {
		log.info("允许选择文字");
		return addStyle(/*css*/ `
        #content_views,
        #content_views pre,
        #content_views pre code{
            webkit-touch-callout: text !important;
            -webkit-user-select: text !important;
            -khtml-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }
        `);
	},
	/**
	 * 自动展开内容
	 */
	autoExpandContent() {
		log.info("自动展开内容");
		return addStyle(/*css*/ `
        #content_views pre.set-code-hide,
        .article_content{
          height: 100% !important;
          overflow: auto !important;
        }
        `);
	},
	/**
	 * 屏蔽底部工具栏
	 */
	blockBottomToolBar() {
		log.info(`屏蔽底部工具栏`);
		return CommonUtil.addBlockCSS("#operate");
	},
	/**
	 * 底部工具栏常驻
	 */
	bottomToolBarAlwaysShow() {
		log.info(`底部工具栏常驻`);
		return addStyle(/*css*/ `
			/* 底部工具栏 */
			#operate {
				bottom: 0 !important;
			}
			`);
	},
	/**
	 * 优化收藏按钮
	 */
	optimizationCollectButton() {
		log.info(`优化收藏按钮`);

		utils
			.waitNode<HTMLElement>("#operate .collect-btn", 10000)
			.then(($collectBtn) => {
				if (!$collectBtn) {
					return;
				}

				// 覆盖点击事件
				DOMUtils.on(
					$collectBtn,
					"click",
					async (event) => {
						utils.preventEvent(event);
						let $isCollect =
							$collectBtn.querySelector<HTMLElement>(".collect")!;
						let $unCollect =
							$collectBtn.querySelector<HTMLElement>(".uncollect")!;
						// 获取收藏夹信息
						let folderInfo = await CSDNFavoriteApi.folderListWithCheck(
							window.location.origin + window.location.pathname
						);
						if (!folderInfo) {
							return;
						}
						let isFavoriteFolderIdList: number[] = [];
						folderInfo.forEach((item) => {
							if (item.IsFavorite) {
								isFavoriteFolderIdList.push(item.ID);
							}
						});
						let createCollectItem = (data: CSDNFavoriteDataOption) => {
							let folderId = data.ID;
							let $item = DOMUtils.createElement(
								"li",
								{
									className: "csdn-collection-item",
									innerHTML: /*html*/ `
									<div class="csdn-collection-item_left">
										<div class="csdn-collection-item_title">
											<span class="title-m">${data.Name}</span>
										</div>
										<span class="csdn-collection-item_ext">
											<span class="csdn-collection-item_length">${data.FavoriteNum}条内容</span>
											<span class="dot">・</span>
											<span class="csdn-collection-controls">${
												data.IsPrivate ? "私密" : "公开"
											}</span>
										</span>
									</div>
									<span class="collect-btn">${data.IsFavorite ? "已收藏" : "收藏"}</span>
								`,
								},
								{
									"data-is-collect": data.IsFavorite,
								}
							);
							let $title = $item.querySelector<HTMLElement>(".title-m")!;
							let $contentLength = $item.querySelector<HTMLSpanElement>(
								".csdn-collection-item_length"
							)!;
							let $controls = $item.querySelector<HTMLSpanElement>(
								".csdn-collection-controls"
							)!;
							let $collectBtn =
								$item.querySelector<HTMLButtonElement>(".collect-btn")!;

							// 点击进行收藏/取消收藏
							DOMUtils.on($collectBtn, "click", async (event) => {
								// @ts-ignore
								let articleDetailUrl = unsafeWindow.articleDetailUrl;
								if (articleDetailUrl == null) {
									articleDetailUrl =
										window.location.origin + window.location.pathname;
								}
								// @ts-ignore
								let articleId = unsafeWindow.articleId;
								if (articleId == null) {
									log.error("获取文章ID失败");
									Qmsg.error("获取文章ID失败");
									return;
								}
								// @ts-ignore
								let username = unsafeWindow.username;
								if (username == null) {
									log.error("获取文章作者失败");
									Qmsg.error("获取文章作者失败");
									return;
								}
								// @ts-ignore
								let articleTitle = unsafeWindow.articleTitle;
								if (articleTitle == null) {
									articleTitle = document.title.replace(/-CSDN博客$/, "");
								}
								if (articleTitle == null) {
									log.error("获取文章标题失败");
									Qmsg.error("获取文章标题失败");
									return;
								}
								// @ts-ignore
								let articleDesc = unsafeWindow.articleDesc;
								if (articleDesc == null) {
									let $meta = $("meta[name='description']");
									if ($meta) {
										articleDesc = $meta.getAttribute("content");
									}
								}
								if (articleDesc == null) {
									log.error("获取文章描述失败");
									Qmsg.error("获取文章描述失败");
									return;
								}
								let folderIdList: number[] = [...isFavoriteFolderIdList];
								let $loading = Qmsg.loading("处理中...");
								try {
									let checkResponse = await CSDNFavoriteApi.checkFavoriteByUrl(
										articleDetailUrl
									);
									if (checkResponse == null) {
										return;
									}
									log.info(folderId, checkResponse);
									/** 如果收藏夹是空的，当前为添加，否则是取消 */
									let toCollect = !checkResponse[folderId];
									if (toCollect) {
										// 未收藏-当前操作为添加收藏
										log.info(`添加收藏`);
										folderIdList.push(folderId);
									} else {
										// 已收藏-当前操作为取消收藏
										log.info(`取消收藏`);
										folderIdList.splice(folderIdList.indexOf(folderId), 1);
									}

									let response = await CSDNFavoriteApi.addFavoriteInFolds({
										author: username,
										url: articleDetailUrl,
										source: "blog",
										sourceId: articleId,
										title: articleTitle,
										description: articleDesc,
										fromType: "PC",
										username: data.Username,
										folderIdList: folderIdList,
									});
									if (!response) {
										return;
									}
									let check_isCollect =
										await CSDNFavoriteApi.checkFavoriteByUrl(articleDetailUrl);
									if (check_isCollect == null) {
										return;
									}
									log.info(folderId, check_isCollect);
									$item.setAttribute(
										"data-is-collect",
										(!!check_isCollect[folderId]).toString()
									);
									if (toCollect) {
										// 收藏 判断是否收藏成功
										if (!check_isCollect[folderId]) {
											log.error("收藏失败", check_isCollect, folderId);
											Qmsg.error("收藏失败");
										} else {
											log.success("收藏成功");
											Qmsg.success("收藏成功");
											DOMUtils.text($collectBtn, "已收藏");
											if (!isFavoriteFolderIdList.includes(folderId)) {
												isFavoriteFolderIdList.push(folderId);
											}
											data.FavoriteNum++;
										}
									} else {
										// 取消收藏 判断是否取消收藏成功
										if (!check_isCollect[folderId]) {
											// 成功
											log.success("取消收藏成功");
											Qmsg.success("取消收藏成功");
											DOMUtils.text($collectBtn, "收藏");
											if (isFavoriteFolderIdList.includes(folderId)) {
												isFavoriteFolderIdList.splice(
													isFavoriteFolderIdList.indexOf(folderId),
													1
												);
											}
											data.FavoriteNum--;
										} else {
											// 失败
											log.error("取消收藏失败", check_isCollect, folderId);
											Qmsg.error("取消收藏失败");
										}
									}
									DOMUtils.text($contentLength, `${data.FavoriteNum}条内容`);

									// 如果所有的收藏夹都没有收藏，则取消按钮变红
									let findValue = Object.values(check_isCollect).find(
										(item) => item
									);
									if (findValue) {
										DOMUtils.show($isCollect, false);
										DOMUtils.hide($unCollect, false);
									} else {
										DOMUtils.show($unCollect, false);
										DOMUtils.hide($isCollect, false);
									}
									$loading.close();
								} catch (error) {
									log.error(error);
								} finally {
									$loading.close();
								}
							});
							return $item;
						};
						let $alert = pops.alert({
							title: {
								text: "添加收藏夹",
								position: "center",
							},
							content: {
								text: /*html*/ `
									<ul class="csdn-collection-items"></ul>
								`,
								html: true,
							},
							btn: {
								ok: {
									enable: false,
								},
							},
							width: PanelUISize.setting.width,
							height: PanelUISize.setting.height,
							drag: true,
							mask: {
								enable: true,
							},
							style: /*css*/ `
								.csdn-collection-items{
									--font-size: 16px;
								}
								.csdn-collection-items{
									font-size: var(--font-size);
									font-weight: 400;
									padding: 0 20px 0;
									margin: 24px 0;
									overflow: auto;
									-ms-scroll-chaining: none;
									overscroll-behavior: contain;
								}
								.csdn-collection-item{
									width: 100%;
    								height: 62px;
									line-height: normal;
									position: relative;
									padding: 8px 12px;
									cursor: pointer;
									display: -webkit-box;
									display: -ms-flexbox;
									display: flex;
									-webkit-box-align: center;
									-ms-flex-align: center;
									align-items: center;
									-webkit-box-pack: justify;
									-ms-flex-pack: justify;
									justify-content: space-between;
									border-bottom: 1px solid #f0f0f5;
								}
								.csdn-collection-item_left{
									line-height: normal;
									flex: 1;
									overflow: hidden;
								}
								.csdn-collection-item_title{
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									width: 100%;
								}
								.csdn-collection-item_ext{
									font-weight: 400;
									color: #999aaa;
									line-height: 17px;
									margin-top: 8px;
									font-size: .8em;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									width: 100%;
									display: inline-flex;
									align-items: center;
								}
								.collect-btn{
									color: #555666;
									font-size: var(--font-size);
									width: 64px;
									height: 30px;
									line-height: 30px;
									border-radius: 20px;
									text-align: center;
									-webkit-transition: all .2s;
									transition: all .2s;
									border: 1px solid #ccccd8;
								}
								.csdn-collection-item[data-is-collect="true"] .collect-btn{
									color: #999aaa;
									background: rgba(232, 232, 237, .3);
									border: 1px solid #e8e8ed;
								}
								/* .csdn-collection-item:hover{
									background: #f5f6f7;
								}
								.csdn-collection-item:hover .collect-btn{
									border: 1px solid #555666;
								} */
							`,
						});

						let $collectionContainer =
							$alert.$shadowRoot.querySelector<HTMLUListElement>(
								".csdn-collection-items"
							)!;
						folderInfo.forEach((folderInfoItem) => {
							let $item = createCollectItem(folderInfoItem);
							$collectionContainer.appendChild($item);
						});
					},
					{ capture: true }
				);
			});
	},
};
