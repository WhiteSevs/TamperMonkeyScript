import { $, DOMUtils, MountVue, addStyle, httpx, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { TiebaComment } from "./TiebaComment";
import { TiebaData } from "../home-dev/data";
import { TieBaApi } from "../api/TiebaApi";
import { TiebaCore } from "../TiebaCore";
import Qmsg from "qmsg";
import Viewer from "viewerjs";
import { TiebaReply } from "./TiebaReply";
import App from "./App.vue";
import pinia from "./stores";
import { VueUtils } from "@/utils/VueUtils";
import { Vue2Instance } from "@whitesev/utils/dist/types/src/types/Vue2";
import { GestureBack } from "@/utils/GestureBack";
import { GeastureBackHashConfig } from "../uni-app-post/TiebaUniAppPost";
import { CommonUtil } from "@/utils/CommonUtil";
import { GM_RESOURCE_MAPPING } from "@/GM_Resource_Mapping";

interface PostImg {
	bsize: string;
	origin_size: number | string;
	origin_src: string;
	size: string;
	src: string;
	type: number;
}

const TiebaPost = {
	$data: {
		appName: "vite-app",
	},
	mainPostImgList: <PostImg[]>[],
	init() {
		PopsPanel.execMenu("baidu_tieba_repairErrorThread", () => {
			log.success("强制查看-帖子不存在|帖子已被删除|该帖子需要去app内查看哦");
			this.repairErrorThread();
		});
		PopsPanel.execMenu("baidu_tieba_optimize_image_preview", () => {
			log.success("优化图片预览");
			this.optimizeImagePreview();
		});
		PopsPanel.execMenuOnce("baidu_tieba_lzl_ban_global_back", () => {
			this.overrideVueRouterMatch();
		});
		PopsPanel.execMenu("baidu-tieba-blockCommentInput", () => {
			CommonUtil.addBlockCSS(".comment-box-wrap");
		});
		PopsPanel.execMenu("baidu_tieba_optimize_see_comments", () => {
			log.success("优化查看评论");
			TiebaComment.init();
			if (!PopsPanel.getValue("baidu-tieba-blockCommentInput")) {
				/* 非屏蔽才启用 */
				if (PopsPanel.getValue("baidu_tieba_optimize_comments_toolbar")) {
					CommonUtil.addBlockCSS(".comment-box-wrap");
					TiebaReply.waitCommentBoxWrap(() => {
						MountVue(App, [pinia]);
					});
				}
			}
		});

		TiebaReply.init();
	},
	/**
	 * 注册全局贴吧图片点击预览(只预览通过贴吧上传的图片，非其它图床图片)
	 */
	optimizeImagePreview() {
		log.success("优化图片预览");
		CommonUtil.setGMResourceCSS(GM_RESOURCE_MAPPING.Viewer);
		let gestureback: typeof GestureBack.prototype | null = null;
		if (PopsPanel.getValue("baidu_tieba_optimize_image_preview")) {
			// 启用手势返回
			gestureback = new GestureBack({
				hash: GeastureBackHashConfig.viewerPreviewImage,
				useUrl: true,
				beforeHistoryBackCallBack(isUrlChange) {
					if (isUrlChange) {
						let $viewerClose = $<HTMLElement>(".viewer-button.viewer-close");
						if ($viewerClose) {
							$viewerClose.click();
						} else {
							Qmsg.error(`未找到关闭Viewer的按钮`);
						}
					}
				},
			});
		}
		/**
		 * 查看图片
		 * @param imgList 图片列表
		 * @param imgIndex 当前查看图片的索引下标
		 */
		function viewIMG(imgList: string[] = [], imgIndex = 0) {
			log.info(["当前查看图片的索引下标：" + imgIndex]);
			log.info(["当前查看图片的列表信息：", imgList]);
			let viewerULNodeHTML = "";
			imgList.forEach((item) => {
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
				hide(event) {
					if (gestureback) {
						gestureback.quitGestureBackMode();
					}
				},
			});
			if (imgIndex < 0) {
				imgIndex = 0;
				log.warn("imgIndex小于0，重置为0");
			} else if (imgIndex > imgList.length - 1) {
				imgIndex = imgList.length - 1;
				log.warn("imgIndex大于imgList最大下标，重置为imgList最大下标");
			}
			viewer.view(imgIndex);
			viewer.zoomTo(1);
			viewer.show();
			log.success("预览图片");
			if (PopsPanel.getValue("baidu_tieba_optimize_image_preview")) {
				gestureback?.enterGestureBackMode();
			}
		}
		/**
		 * 获取<img>标签的src资源
		 * @param $img
		 */
		function getImageSrc($img: HTMLImageElement): string {
			let imgUrl =
				$img.getAttribute("data-src") || $img.getAttribute("src") || $img.src;
			return imgUrl;
		}
		DOMUtils.on<MouseEvent | PointerEvent>(
			document,
			"click",
			"img",
			(event) => {
				let $click = event.target as HTMLImageElement;
				let $clickParent = $click.parentElement as HTMLDivElement;
				let currentClickImageUrl = getImageSrc($click);
				if (
					$clickParent.className === "viewer-canvas" ||
					$clickParent.hasAttribute("data-viewer-action")
				) {
					log.info("点击的<img>属于Viewer内的元素， 不处理");
					return;
				}
				if ($click.closest(".pic-popup-guide-thread-wrapper")) {
					// 帖子主内容的图片右滑的导航推荐帖子
					return;
				}
				if (
					currentClickImageUrl?.match(
						/^http(s|):\/\/(tiebapic|imgsa).baidu.com\/forum/g
					)
				) {
					utils.preventEvent(event);
					log.info(`点击图片👇`);
					log.info($click);
					if ($clickParent.className === "img-box") {
						/* 帖子主体内的图片 */
						let $imgSudoKu = $click.closest(".img-sudoku.main-img-sudoku");
						log.info($imgSudoKu);
						if (!$imgSudoKu) {
							viewIMG([currentClickImageUrl]);
							return;
						}
						let lazyImgList: string[] = [];
						if (TiebaPost.mainPostImgList.length) {
							TiebaPost.mainPostImgList.forEach((item) => {
								lazyImgList.push(item.src);
							});
						} else {
							Array.from(
								$imgSudoKu.querySelectorAll<HTMLImageElement>("img.img")
							).forEach(($img) => {
								let imgSrc = getImageSrc($img);
								log.info(`获取图片: ${imgSrc}`);
								let imgUrlInfo = new URL(imgSrc);
								if (imgUrlInfo.pathname.startsWith("/forum/")) {
									let picName = imgUrlInfo.pathname.split("/").pop() as string;
									let picIdSplit = picName.split(".");
									if (picIdSplit) {
										let picId = picIdSplit[0];
										if (TiebaData.imageMap.has(picId)) {
											imgSrc = TiebaData.imageMap.get(picId) as string;
											log.success(["替换成高清图片", imgSrc]);
										}
									}
								}
								lazyImgList.push(imgSrc);
							});
						}

						log.info("图片列表👇");
						log.info(lazyImgList);
						viewIMG(lazyImgList, lazyImgList.indexOf(currentClickImageUrl));
					} else if ($clickParent.className === "text-content") {
						/* 评论区内的图片 */
						let lazyImgList: string[] = [];
						log.info($clickParent);
						$clickParent
							.querySelectorAll<HTMLImageElement>("img.BDE_Image")
							.forEach(($img) => {
								let imgSrc = getImageSrc($img);
								log.info(`获取图片: ${imgSrc}`);
								let imgUrlInfo = new URL(imgSrc);
								if (imgUrlInfo.pathname.startsWith("/forum/")) {
									let picName = imgUrlInfo.pathname.split("/").pop();
									let picIdSplit = picName?.split(".");
									if (picIdSplit) {
										let picId = picIdSplit[0];
										if (TiebaData.imageMap.has(picId)) {
											imgSrc = TiebaData.imageMap.get(picId) as string;
											log.success(["替换成高清图片", imgSrc]);
										}
									}
								}
								lazyImgList.push(imgSrc);
							});
						log.info("评论区图片列表👇");
						log.info(lazyImgList);
						viewIMG(lazyImgList, lazyImgList.indexOf(currentClickImageUrl));
					} else if (
						$clickParent.classList.contains("pb-image") &&
						$clickParent.localName === "uni-image"
					) {
						// uni-app的帖子主内容的图片
						log.info("uni-app的图片", $clickParent);
						// 待预览的图片
						let lazyImgList: string[] = [];
						let lazyImgIndex = 0;
						let $slideFrame = $click.closest<HTMLDivElement>(
							".uni-swiper-slide-frame"
						)!;
						if ($slideFrame) {
							// 贴吧自带的预览图片模式下的
							$slideFrame.querySelectorAll("img").forEach(($img) => {
								let imgSrc = getImageSrc($img);
								log.info(`获取图片: ${imgSrc}`);
								lazyImgList.push(imgSrc);
							});
							lazyImgIndex = lazyImgList.indexOf(currentClickImageUrl);
						} else if ($click.closest(".pb-comment-item")) {
							log.info(`uni-app评论区的图片`);
							let $pbCommentItem =
								$click.closest<HTMLElement>(".pb-comment-item")!;
							if ($pbCommentItem) {
								// 评论区的所有图片
								let commentImageList = Array.from(
									$pbCommentItem.querySelectorAll<HTMLImageElement>(
										"uni-image img"
									)
								).map(($el) => $el.src);

								let pbCommentItemVue3Ins = VueUtils.getVue3($pbCommentItem);
								let pbCommentData = pbCommentItemVue3Ins?.props?.commentData;

								let $commentGroup = $pbCommentItem.closest(".comment-group");
								let commentGroupVue2Ins = VueUtils.getVue($commentGroup);
								let sectionData = commentGroupVue2Ins?.sectionData;
								if (pbCommentData) {
									// 图片大小可能缺失，要从vue中获取原图
									pbCommentData.content.forEach((item: any) => {
										// 图片类型
										const {
											cdn_src,
											cdn_src_active,
											big_cdn_src,
											origin_src,
											type,
										} = item;
										if (type !== 3) {
											return;
										}
										if (
											currentClickImageUrl === cdn_src ||
											currentClickImageUrl === cdn_src_active ||
											currentClickImageUrl === big_cdn_src ||
											currentClickImageUrl === origin_src
										) {
											lazyImgIndex = lazyImgList.length;
										}
										// 使用origin_src，没有的话再是big_cdn_src，不然的话就是原图
										lazyImgList.push(
											origin_src || big_cdn_src || currentClickImageUrl
										);
									});
								} else if (sectionData) {
									// 由于无法获取当前评论的id，只能从sectionData中寻找对应图片
									sectionData.forEach((item: any) => {
										item.imgList.forEach((item2: any) => {
											const {
												cdn_src,
												cdn_src_active,
												big_cdn_src,
												origin_src,
												type,
											} = item2;
											if (type !== 3) {
												return;
											}
											// 图片类型
											// 使用origin_src，没有的话再是big_cdn_src，不然的话就是原图
											if (
												currentClickImageUrl === cdn_src ||
												currentClickImageUrl === cdn_src_active ||
												currentClickImageUrl === big_cdn_src ||
												currentClickImageUrl === origin_src
											) {
												lazyImgIndex = lazyImgList.length;
											}
											lazyImgList.push(
												origin_src || big_cdn_src || currentClickImageUrl
											);
										});
									});
								} else {
									lazyImgList.push(...commentImageList);
									lazyImgIndex = lazyImgList.indexOf(currentClickImageUrl);
								}
							} else {
								log.error("获取.pb-comment-item元素失败");
								lazyImgList.push(currentClickImageUrl);
							}
						} else {
							// 其它情况下的
							lazyImgList.push(currentClickImageUrl);
						}
						if (lazyImgList.length) {
							viewIMG(lazyImgList, lazyImgIndex);
						} else {
							Qmsg.error("获取图片数据为空");
						}
					} else {
						/* 单个图片预览 */
						viewIMG([currentClickImageUrl]);
					}
				}
			},
			{
				capture: true,
			}
		);
		CommonUtil.addBlockCSS(
			/* 图片右上角的APP专享 */
			"div.img-sudoku .img-desc"
		);
		DOMUtils.ready(function () {
			utils
				.waitNode<HTMLDivElement>("div.img-sudoku", 10000)
				.then(($imgSudoKu) => {
					if (!$imgSudoKu) {
						log.error("未找到元素 div.img-sudoku");
						return;
					}
					utils
						.waitNode<HTMLImageElement>("img", $imgSudoKu, 10000)
						.then((childImg) => {
							if (!childImg) {
								log.error("未找到元素 div.img-sudoku img");
								return;
							}
							let imgSudoKuImageElementList =
								$imgSudoKu.querySelectorAll<HTMLImageElement>("img.img");
							log.success([
								"重构主内容的图片",
								$imgSudoKu,
								imgSudoKuImageElementList,
							]);
							imgSudoKuImageElementList.forEach(($imgItem) => {
								if ($imgItem.hasAttribute("data-src")) {
									$imgItem.src = $imgItem.getAttribute("data-src") as string;
								}
							});
							/* 通过重新赋值innerHTML来覆盖原有的事件 */
							$imgSudoKu.innerHTML = $imgSudoKu.innerHTML;
						});
					VueUtils.waitVuePropToSet("div.img-sudoku", [
						{
							msg: "等待获取属性 imgs",
							check(vueObj) {
								return vueObj?.imgs != null;
							},
							set(vueObj) {
								TiebaPost.mainPostImgList = vueObj.imgs;
								log.success([
									"Vue上隐藏的帖子高清图片列表",
									TiebaPost.mainPostImgList,
								]);
							},
						},
					]);
				});
		});
	},
	/**
	 * 初始化帖子内图片信息
	 */
	initPostImageInfo() {
		let forumName = TiebaCore.getCurrentForumName();
		let tid = TiebaCore.getCurrentForumPostTid();
		if (forumName && tid) {
			TieBaApi.getPictureGuide(forumName, tid).then((result) => {
				if (!result) {
					log.error("获取图片信息失败");
					return;
				}
				log.success(["请求本贴图片信息", result]);
				Object.values(result["pic_list"]).forEach((item) => {
					/* 图片id */
					let id =
						item?.["img"]?.["original"]?.["id"] ||
						item?.["img"]?.["medium"]?.["id"] ||
						item?.["img"]?.["screen"]?.["id"];
					let pictureUrl =
						item?.["img"]?.["original"]?.["waterurl"] ||
						item?.["img"]?.["screen"]?.["waterurl"];

					if (id != null && pictureUrl != null) {
						TiebaData.imageMap.set(id, pictureUrl);
					}
				});
			});
		}
	},
	/**
	 * 强制查看-帖子不存在|帖子已被删除|该帖子需要去app内查看哦
	 *
	 */
	repairErrorThread() {
		/**
		 * 获取页面信息
		 */
		async function getPageInfo() {
			let getResp = await httpx.get(window.location.href, {
				headers: {
					"User-Agent": utils.getRandomPCUA(),
				},
			});
			if (!getResp.status) {
				return;
			}
			log.info(getResp);
			let pageDOM = DOMUtils.parseHTML(getResp.data.responseText, true, true);
			let postListFirstElement = pageDOM.querySelector("#j_p_postlist .l_post");
			if (!postListFirstElement) {
				log.error("未找到#j_p_postlist .l_post元素");
				Qmsg.error("未找到#j_p_postlist .l_post元素");
				return;
			}
			if (!postListFirstElement.hasAttribute("data-field")) {
				log.error("未找到 data-field 属性");
				Qmsg.error("未找到 data-field 属性");
				return;
			}
			let field = utils.toJSON(postListFirstElement.getAttribute("data-field"));
			let PageData = null;
			let PageDataScriptString = "";
			pageDOM
				.querySelectorAll<HTMLScriptElement>("script")
				.forEach((scriptElement) => {
					if (scriptElement.innerHTML.includes("var PageData")) {
						PageDataScriptString = `
						${PageDataScriptString}

						${scriptElement.innerHTML}

						`;
					}
				});
			if (PageDataScriptString === "") {
				log.error("未找到 PageData的script标签");
				Qmsg.error("未找到 PageData的script标签");
				return;
			}
			PageData = new Function(`
              ${PageDataScriptString}

              return PageData;
              `)();
			if (!PageData) {
				log.error("未找到 PageData");
				Qmsg.error("未找到 PageData");
				return;
			}
			let time =
				pageDOM.querySelector<HTMLSpanElement>(
					"#j_p_postlist .post-tail-wrap span.tail-info:nth-child(6)"
				)?.innerText ||
				field?.content?.date ||
				"";
			if (utils.isNotNull(time)) {
				time = (utils.formatToTimeStamp(time) / 1000) as unknown as string;
			}
			let content = pageDOM.querySelector<HTMLDivElement>(
				'.d_post_content_firstfloor .d_post_content[id^="post_content_"]'
			);
			return {
				field: field,
				PageData: PageData,
				time: time as unknown as number,
				content: content?.innerHTML,
			};
		}
		/**
		 * 获取帖子列表信息
		 * @param field
		 * @param PageData
		 * @param time 帖子时间
		 * @returns
		 */
		function getPostList(
			field: NestedObjectWithToString,
			PageData: NestedObjectWithToString,
			time: number
		) {
			let data = {
				agree: {
					agree_num: 0,
					disagree_num: 0,
				},
				author: {
					/* author.user_id */
					id: field.author.user_id,
					/* author.user_name */
					name: field.author.user_name,
					/* author.user_nickname */
					name_show: field.author.user_nickname,
					/* author.portrait */
					portrait: field.author.portrait,
					/* author.user_nickname */
					show_nickname: field.author.user_nickname,
					type: 1,
					userhide: 0,
				},
				content: [
					{
						/* content.content */
						text: field.content.content,
						/* parseInt(content.type) */
						type: parseInt(field.content.type),
					},
				],
				floor: 1,
				game_info: [null],
				/* content.post_id */
				id: parseInt(field.content.post_id),
				is_bub: 0,
				is_voice: 0,
				is_vote: 0,
				ptype: 0,
				reply_num: PageData.thread.reply_num,
				sub_post_number: 0,
				time: time,
				title: PageData.thread.title,
				index: 0,
			};
			let firstData = data;
			let secondData = data;
			secondData.floor = 3;
			return [firstData, secondData];
		}
		utils
			.waitNode<HTMLDivElement>(".app-view", 10000)
			.then(async ($appView) => {
				if (!$appView) {
					log.error("元素.app-view不存在");
					return;
				}
				await utils.waitVueByInterval(
					$appView,
					() => {
						return (
							typeof VueUtils.getVue($appView)?.isErrorThread === "boolean"
						);
					},
					250,
					10000
				);
				let appViewVue = VueUtils.getVue($appView);
				if (!(appViewVue && appViewVue.isErrorThread)) {
					// 正常帖子，取消处理
					log.info("验证参数isErrorThread：true，正常帖子");
					return;
				}
				/* 该帖子不能查看 */
				log.warn("该帖子不能查看 修复中...");
				let loading = Qmsg.loading("该帖子不能查看 修复中...");
				let pageInfo = await getPageInfo();
				loading.close();
				if (!pageInfo) {
					return;
				}
				log.info(["获取到的页面信息", pageInfo]);
				let postList = getPostList(
					pageInfo.field,
					pageInfo.PageData,
					pageInfo.time
				);
				appViewVue.postList = postList;
				appViewVue.postAuthorId = postList[0].author.id;
				// 设置帖子信息
				appViewVue.thread = {
					agree: {
						agree_num: 0,
						disagree_num: 0,
					},
					collect_mark_pid: "0",
					collect_status: 0,
					create_time: postList[0].time,
					id: appViewVue.tid,
					is_frs_mask: 0,
					is_share_thread: 0,
					reply_num: postList[0].reply_num,
					robot_thread_type: 0,
					t_share_img: "",
					thread_type: 0,
					valid_post_num: 0,
					works_info: {},
				};
				// 设置帖子的所在吧信息
				appViewVue.forum = {
					/* PageData.forum.avatar */
					avatar: pageInfo.PageData.forum.avatar,
					/* PageData.forum.first_class */
					first_dir:
						pageInfo.PageData.forum.first_class ||
						pageInfo.PageData.first_class,
					/* PageData.forum.id */
					id:
						pageInfo.PageData.forum.id ||
						pageInfo.PageData.forum.forum_id ||
						pageInfo.PageData.forum.true_forum_id,
					is_exists: 1,
					is_forbidden: 0,
					is_forum_merged: 0,
					/* PageData.forum.name */
					name:
						pageInfo.PageData.forum.name || pageInfo.PageData.forum.forum_name,
					/* PageData.forum.second_class */
					second_dir:
						pageInfo.PageData.forum.second_class ||
						pageInfo.PageData.second_class,
				};
				/* 固定一下值吧，没测出什么作用 */
				appViewVue.postNum = 100;

				appViewVue.isErrorThread = false;
				setTimeout(() => {
					/* 稍微延迟一下 */
					DOMUtils.append(
						$<HTMLDivElement>(
							"div.app-view div.thread-main-wrapper .thread-text"
						)!,
						postList[0].content[0].text || pageInfo.content
					);
					if (
						appViewVue.interactionNum &&
						typeof pageInfo?.PageData?.thread?.reply_num === "number"
					) {
						appViewVue.interactionNum.reply =
							pageInfo.PageData.thread.reply_num;
					}
				}, 300);
			});
	},
	/**
	 * 覆盖vue的Router.matcher.match，阻止改变路由后页面__vue__属性也改变导致无法获取属性
	 */
	overrideVueRouterMatch() {
		VueUtils.waitVuePropToSet(".app-view", [
			{
				msg: "等待获取 root的$router",
				check(vueObj) {
					return typeof vueObj?.$root?.$router?.matcher?.match === "function";
				},
				set(vueObj) {
					let $oldRouterMatch = vueObj.$root.$router.matcher.match;
					let $oldRoute = vueObj.$root.$route;
					vueObj.$root.$router.matcher.match = function (...args: any[]) {
						let raw = args[0];
						let currentRoute: Vue2Instance["$route"] = args[1];
						log.info(["$router match", args]);
						// if (raw === "/seeLzlReply") {
						// 	log.error(
						// 		"$router match：当前是/seeLzlReply，阻止match，返回currentRoute"
						// 	);
						// }
						let result = $oldRouterMatch.apply(this, args);
						return result;
					};
					log.success("成功覆盖 __vue__.$root.$router.matcher.match");
				},
			},
		]);
	},
};

export { TiebaPost };
