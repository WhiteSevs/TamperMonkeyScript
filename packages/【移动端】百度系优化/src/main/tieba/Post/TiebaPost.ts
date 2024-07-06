import { DOMUtils, MountVue, addStyle, httpx, log, utils } from "@/env";
import { PopsPanel } from "@/setting/setting";
import { TiebaComment } from "./TiebaComment";
import { TiebaData } from "../Home/data";
import { CommonUtils } from "@/utils/CommonUtils";
import { TieBaApi } from "../api/TiebaApi";
import { TiebaCore } from "../TiebaCore";
import Qmsg from "qmsg";
import Viewer from "viewerjs";
import { GM_getResourceText } from "ViteGM";
import { TiebaReply } from "./TiebaReply";
import App from "./App.vue";
import pinia from "./stores";
import { VueUtils } from "@/utils/VueUtils";
import type { Vue2Context } from "@whitesev/utils/dist/src/Utils";

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
			TiebaPost.repairErrorThread();
		});
		PopsPanel.execMenu("baidu_tieba_optimize_image_preview", () => {
			log.success("优化图片预览");
			TiebaPost.optimizeImagePreview();
		});
		PopsPanel.execMenuOnce("baidu_tieba_lzl_ban_global_back", () => {
			this.overrideVueRouterMatch();
		});
		PopsPanel.execMenu("baidu-tieba-blockCommentInput", () => {
			CommonUtils.addBlockCSS(".comment-box-wrap");
		});
		PopsPanel.execMenu("baidu_tieba_optimize_see_comments", () => {
			log.success("优化查看评论");
			TiebaComment.init();
			if (!PopsPanel.getValue("baidu-tieba-blockCommentInput")) {
				/* 非屏蔽才启用 */
				if (PopsPanel.getValue("baidu_tieba_optimize_comments_toolbar")) {
					CommonUtils.addBlockCSS(".comment-box-wrap");
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
		if (import.meta.env.DEV) {
			import("viewerjs/dist/viewer.css?raw").then((ViewerCSS) => {
				addStyle(ViewerCSS.default);
			});
		} else {
			addStyle(GM_getResourceText("ViewerCSS"));
		}
		/**
		 * 查看图片
		 * @param imgList
		 * @param _index_
		 */
		function viewIMG(imgList: string[] = [], _index_ = 0) {
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
			});
			_index_ = _index_ < 0 ? 0 : _index_;
			viewer.view(_index_);
			viewer.zoomTo(1);
			viewer.show();
		}
		DOMUtils.on<MouseEvent | PointerEvent>(
			document,
			"click",
			"img",
			function (event) {
				let clickElement = event.target as HTMLImageElement;
				let clickParentElement = clickElement.parentElement as HTMLDivElement;
				let imgSrc =
					clickElement.getAttribute("data-src") ||
					clickElement.getAttribute("src");
				if (
					clickParentElement.className === "viewer-canvas" ||
					clickParentElement.hasAttribute("data-viewer-action")
				) {
					return;
				}
				if (imgSrc?.match(/^http(s|):\/\/(tiebapic|imgsa).baidu.com\/forum/g)) {
					utils.preventEvent(event);
					log.info(`点击图片👇`);
					log.info(clickElement);
					if (clickParentElement.className === "img-box") {
						/* 帖子主体内的图片 */
						let parentMain = clickElement.closest(
							".img-sudoku.main-img-sudoku"
						);
						log.info(parentMain);
						if (!parentMain) {
							viewIMG([imgSrc]);
							return;
						}
						utils.preventEvent(event);
						let lazyImgList: string[] = [];
						if (TiebaPost.mainPostImgList.length) {
							TiebaPost.mainPostImgList.forEach((item) => {
								lazyImgList.push(item.src);
							});
						} else {
							Array.from(
								parentMain.querySelectorAll<HTMLImageElement>("img.img")
							).forEach((item) => {
								let _imgSrc_ = item.getAttribute("data-src") || item.src;
								log.info(`获取图片: ${_imgSrc_}`);
								let imgUrlInfo = new URL(_imgSrc_);
								if (imgUrlInfo.pathname.startsWith("/forum/")) {
									let picName = imgUrlInfo.pathname.split("/").pop() as string;
									let picIdSplit = picName.split(".");
									if (picIdSplit) {
										let picId = picIdSplit[0];
										if (TiebaData.imageMap.has(picId)) {
											_imgSrc_ = TiebaData.imageMap.get(picId) as string;
											log.success(["替换成高清图片", _imgSrc_]);
										}
									}
								}
								lazyImgList.push(_imgSrc_);
							});
						}

						log.info("图片列表👇");
						log.info(lazyImgList);
						viewIMG(lazyImgList, lazyImgList.indexOf(imgSrc));
					} else if (clickParentElement.className === "text-content") {
						/* 评论区内的图片 */
						let lazyImgList: string[] = [];
						log.info(clickParentElement);
						clickParentElement
							.querySelectorAll<HTMLImageElement>("img.BDE_Image")
							.forEach((item) => {
								let _imgSrc_ =
									item.getAttribute("data-src") || (item.src as string);
								log.info(`获取图片: ${_imgSrc_}`);
								let imgUrlInfo = new URL(_imgSrc_);
								if (imgUrlInfo.pathname.startsWith("/forum/")) {
									let picName = imgUrlInfo.pathname.split("/").pop();
									let picIdSplit = picName?.split(".");
									if (picIdSplit) {
										let picId = picIdSplit[0];
										if (TiebaData.imageMap.has(picId)) {
											_imgSrc_ = TiebaData.imageMap.get(picId) as string;
											log.success(["替换成高清图片", _imgSrc_]);
										}
									}
								}
								lazyImgList.push(_imgSrc_);
							});
						log.info("评论区图片列表👇");
						log.info(lazyImgList);
						viewIMG(lazyImgList, lazyImgList.indexOf(imgSrc));
					} else {
						/* 单个图片预览 */
						viewIMG([imgSrc]);
					}
				}
			}
		);
		CommonUtils.addBlockCSS(
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
						document.querySelector<HTMLDivElement>(
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
						let currentRoute: Vue2Context["$route"] = args[1];
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
